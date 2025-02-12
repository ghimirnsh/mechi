// Define the PDFs for both notes and questions
const pdfFiles = {
    microprocessor: {
        path: "micro.pdf",
        container: "microprocessor",
        chapters: {
            m1: [1, 4],
            m2: [5, 10],
            m3: [11, 16],
            m4: [17, 22],
            m5: [23, 28],
            m6: [29, 34],
            m7: [35, 40],
            m8: [41, 999]
        }
    },

    web: {
        path: "web.pdf",
        container: "web",
        chapters: {
            w1: [1, 5],
            w2: [6, 12],
            w3: [13, 18],
            w4: [19, 24],
            w5: [25, 30],
            w6: [31, 36],
            w7: [37, 42],
            w8: [43, 999]
        }
    },

    dsa: {
        path: "dsa.pdf",
        container: "dsa",
        chapters: {
            d1: [1, 5],
            d2: [6, 12],
            d3: [13, 18],
            d4: [19, 24],
            d5: [25, 30],
            d6: [31, 36],
            d7: [37, 42],
            d8: [43, 999]
        }
    },

    stats: {
        path: "stats.pdf",
        container: "stats",
        chapters: {
            s1: [1, 5],
            s2: [6, 10],
            s3: [11, 15],
            s4: [16, 20],
            s5: [21, 999]
        }
    },

    account: {
        path: "account.pdf",
        container: "account",
        chapters: {
            a1: [1, 6],
            a2: [7, 12],
            a3: [13, 18],
            a4: [19, 24],
            a5: [25, 999]
        }
    }
};

// Function to hide all other subject containers (notes)
const hideOthers = () => {
    let content = document.querySelectorAll(".content");
    content.forEach(container => {
        container.style.display = "none";
    });

    let subjects = document.querySelectorAll(".scss");
    subjects.forEach(container => {
        container.style.display = "none";
    });

};

// Function to load and render a chapter from a PDF (for notes)
async function loadPDFChapter(pdfPath, containerId, startPage, endPage) {
    try {
        const pdf = await pdfjsLib.getDocument(pdfPath).promise;
        const totalPages = pdf.numPages;
        const actualEndPage = Math.min(endPage, totalPages);
        const container = document.getElementById(containerId);
        container.innerHTML = ""; // Clear previous content

        for (let i = startPage; i <= actualEndPage; i++) {
            const page = await pdf.getPage(i);
            const canvas = document.createElement("canvas");
            container.appendChild(canvas);

            const context = canvas.getContext("2d");
            const viewport = page.getViewport({ scale: 3 });

            canvas.width = viewport.width;
            canvas.height = viewport.height;

            await page.render({ canvasContext: context, viewport: viewport }).promise;
        }

        // Show the container for the current PDF content
        container.style.display = "block";
    } catch (error) {
        alert("Error loading PDF: " + error.message);
    }
}

// For Questions Section (Assignments)
const pdfFilesQuestions = {
    microprocessor: {
        path: "assmicro.pdf",
        container: "microprocessor-questions"
    },
    web: {
        path: "assweb.pdf",
        container: "web-questions"
    },
    dsa: {
        path: "assdsa.pdf",
        container: "dsa-questions"
    },
    stats: {
        path: "assstats.pdf",
        container: "stats-questions"
    },
    account: {
        path: "assaccount.pdf",
        container: "account-questions"
    }
};

// Hide all other question sections
function hideAllQuestions() {
    let questionContainers = document.querySelectorAll(".question-container");
    questionContainers.forEach(container => {
        container.style.display = "none";
    });
}

// Function to load all pages from a question PDF (Assignments)
async function loadAllQuestionPages(pdfPath, containerId) {
    try {
        const pdf = await pdfjsLib.getDocument(pdfPath).promise;
        const totalPages = pdf.numPages;
        const container = document.getElementById(containerId);
        container.innerHTML = ""; // Clear previous content

        for (let i = 1; i <= totalPages; i++) {
            const page = await pdf.getPage(i);
            const canvas = document.createElement("canvas");
            container.appendChild(canvas);

            const context = canvas.getContext("2d");
            const viewport = page.getViewport({ scale: 3 });

            canvas.width = viewport.width;
            canvas.height = viewport.height;

            await page.render({ canvasContext: context, viewport: viewport }).promise;
        }

        // Show the container for the current question content
        container.style.display = "block";
    } catch (error) {
        alert("Error loading question PDF: " + error.message);
    }
}

// Attach event listeners for all PDFs (Notes & Questions)
document.addEventListener("DOMContentLoaded", function () {
    // Event listeners for Notes section
    Object.keys(pdfFiles).forEach((pdfKey) => {
        Object.keys(pdfFiles[pdfKey].chapters).forEach((chapter) => {
            const button = document.getElementById(chapter);
            if (button) {
                button.addEventListener("click", function () {
                    hideOthers();
                    const [start, end] = pdfFiles[pdfKey].chapters[chapter];
                    loadPDFChapter(pdfFiles[pdfKey].path, pdfFiles[pdfKey].container, start, end);
                });
            }
        });
    });

    // Event listeners for Questions section (Assignments)
    const questionLinks = {
        mq: "microprocessor",
        sq: "stats",
        wq: "web",
        dq: "dsa",
        aq: "account"
    };

    for (const linkId in questionLinks) {
        const button = document.getElementById(linkId);
        if (button) {
            button.addEventListener("click", function () {
                const subjectKey = questionLinks[linkId];
                hideOthers();
                hideAllQuestions();  // Hide all question sections
                loadAllQuestionPages(pdfFilesQuestions[subjectKey].path, pdfFilesQuestions[subjectKey].container);
            });
        }
    }
});
