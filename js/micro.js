
        const url = 'micro.pdf'; // Path to your PDF
        let pdfDoc = null;
        let totalPages = 0;

        // Initialize PDF.js
        pdfjsLib.getDocument(url).promise.then(function (pdf) {
            pdfDoc = pdf;
            totalPages = pdf.numPages;
        }).catch(function (error) {
            alert('Error loading PDF: ' + error.message);
        });

        // Function to render a single PDF page
        function renderPage(pageNum) {
            return new Promise(function (resolve, reject) {
                pdfDoc.getPage(pageNum).then(function (page) {
                    let canvas = document.createElement('canvas');
                    document.getElementById('microprocessor').appendChild(canvas); // Add canvas to the container

                    let ctx = canvas.getContext('2d');
                    let viewport = page.getViewport({ scale: 3});

                    // Dynamically set the canvas size based on the page's viewport
                    canvas.width = viewport.width;
                    canvas.height = viewport.height;

                    let renderContext = {
                        canvasContext: ctx,
                        viewport: viewport
                    };

                    // Render the page
                    page.render(renderContext).then(function () {
                        resolve();
                    }).catch(function (err) {
                        reject(err);
                    });
                }).catch(function (err) {
                    reject(err);
                });
            });
        }
    
     
hideOthers = () => {
    let others = document.querySelectorAll(".scss");
    for (let i = 0; i < others.length; i++) {
      others[i].style.display = "none";
    }
  };

        // Function to hide all pages
        function clearPDFContainer() {
            document.getElementById('microprocessor').innerHTML = '';
        }

        // Event listener for m1 (Pages 1 to 4)
        document.getElementById('m1').addEventListener('click', async function () {
            clearPDFContainer(); // Clear previous pages
            hideOthers();
            for (let i = 1; i <= 4; i++) {
                 renderPage(i);
            }
        });

        // Event listener for m2 (Pages 4 to 10)
        document.getElementById('m2').addEventListener('click', async function () {
            clearPDFContainer(); // Clear previous pages
            hideOthers();
            for (let i = 5; i <= 14; i++) {
                 renderPage(i);
            }
        });

        // Event listener for m3 (Pages 11 to 16)
        document.getElementById('m3').addEventListener('click', async function () {
            clearPDFContainer(); // Clear previous pages
            hideOthers();
            for (let i = 15; i <= 16; i++) {
                 renderPage(i);
            }
        });

        // Event listener for m4 (Pages 17 to 22)
        document.getElementById('m4').addEventListener('click', async function () {
            clearPDFContainer(); // Clear previous pages
            hideOthers();
            for (let i = 17; i <= 22; i++) {
                 renderPage(i);
            }
        });

        // Event listener for m5 (Pages 23 to 28)
        document.getElementById('m5').addEventListener('click', async function () {
            clearPDFContainer(); // Clear previous pages
            hideOthers();
            for (let i = 23; i <= 28; i++) {
                 renderPage(i);
            }
        });

        // Event listener for m6 (Pages 29 to 34)
        document.getElementById('m6').addEventListener('click', async function () {
            clearPDFContainer(); // Clear previous pages
            hideOthers();
            for (let i = 29; i <= 34; i++) {
                 renderPage(i);
            }
        });

        // Event listener for m7 (Pages 35 to 40)
        document.getElementById('m7').addEventListener('click', async function () {
            clearPDFContainer(); // Clear previous pages
            hideOthers();
            for (let i = 35; i <= 40; i++) {
                 renderPage(i);
            }
        });

        // Event listener for m8 (Pages 41 to End)
        document.getElementById('m8').addEventListener('click', async function () {
            clearPDFContainer(); // Clear previous pages
            hideOthers();
            for (let i = 41; i <= totalPages; i++) {
                 renderPage(i);
            }
        });
