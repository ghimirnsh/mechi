
// THIS JAVASCRIPT IS DESIGNED TO CONTROL THE NAVIGATION BAR






let indicator = document.querySelector('.indicator'); 
let list = document.querySelectorAll('ul li');
let icon = document.querySelectorAll('i');

// Move indicator to active link
function moveIndicator(e) {
    indicator.style.left = e.target.offsetLeft + 'px'; 
    indicator.style.width = e.target.offsetWidth + 'px'; 
}

// Move indicator to the active link
list.forEach(link => {
    link.addEventListener('click', (e) => {
        moveIndicator(e);
    });
});

// Add active class to the clicked item
function activelink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

// Add active class to the clicked item
list.forEach((item) =>
    item.addEventListener('click', activelink)
);


// Hide all when clicked
hideAll = () => {
    let others = document.querySelectorAll('.scss');
    for (let i = 0; i < others.length; i++) {
        others[i].style.display = 'none';
    }
}


// HIDE ALL CONTENTS
hideContent=()=>{
    document.querySelectorAll('.content').forEach(item => {
        item.style.display='none';
    });   
}
 


// Show subjects when clicked
let noteslist = () => {   
    hideAll();
    hideContent();
    let subject = document.getElementsByClassName('njs');
    for (let i = 0; i < subject.length; i++) {
        subject[i].style.display = 'flex';
    }
};

// show questions when clicked
let questionslist = () => {
    hideAll();
    hideContent();
    let resource = document.getElementsByClassName('qjs');
    for (let i = 0; i < resource.length; i++) {
        resource[i].style.display = 'flex';
    }

    
}

// Show codes when clicked
let codelist = () => {
    hideAll();
    hideContent();

}

let filelist = () =>
{
    hideAll();
    hideContent();
}




