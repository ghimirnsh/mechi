// THIS JAVASCRIPT IS DESIGNED TO CONTROL THE NOTES SECTION


// HIDE ALL SUBJECTS AND CHAPTERLIST
hideSubject=()=>{
    document.querySelectorAll('.scss').forEach(item => {
        item.style.display='none';
    });   
}


// HIDE ALL CONTENTS
hideContent=()=>{
    document.querySelectorAll('.content').forEach(item => {
        item.style.display='none';
    });   
}
 



// SHOW MICROPROCESSOR CHAPTERS
let microprocessor=document.getElementById('mnotes');
microprocessor.addEventListener('click', function() {
    hideSubject();
    hideContent();
    document.getElementById('mchapters').style.display='flex';
});

// SHOW WEB TECHNOLOGY CHAPTERS
let web=document.getElementById('wnotes');
web.addEventListener('click', function() {
    hideSubject();
    hideContent();
    document.getElementById('wchapters').style.display='flex';
});

// SHOW DATA STRUCTURE AND ALGORITHMS CHAPTERS
let dsa=document.getElementById('dnotes');
dsa.addEventListener('click', function() {
    hideSubject();
    hideContent();
    document.getElementById('dchapters').style.display='flex';
});

// SHOW BUSINESS STATISTICS CHAPTERS
let stats=document.getElementById('snotes');
stats.addEventListener('click', function() {
    hideSubject();
    hideContent();
    document.getElementById('schapters').style.display='flex';
});

// SHOW FINANCIAL ACCOUNTING CHAPTERS
let account=document.getElementById('anotes');
account.addEventListener('click', function() {
    hideSubject();
    hideContent();
    document.getElementById('achapters').style.display='flex';
});
