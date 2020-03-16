const menu = document.getElementById('menu');
const iml = document.getElementById('fon-left');
const imr = document.getElementById('fon-rigth');
const btn = document.getElementById('btn');
const cl_btn = document.getElementById('cl-btn');

menu.addEventListener('click', (event)=> {
    menu.querySelectorAll('a').forEach(el => el.classList.remove('nav-act'));
    event.target.classList.add('nav-act');
});

bord = document.getElementById('id-row');
bord.addEventListener('click', (event) => {
    bord.querySelectorAll ('img').forEach(el => el.classList.remove('portfolio-img'));
    event.target.classList.add('portfolio-img') 
});

document.getElementById('btn').onclick = function() {
    const subject = document.getElementById('subject').Value;
    const describe = document.getElementById('describe').Value;
    if ( subject == null) document.getElementById('tm').innerText = subject;
        else document.getElementById('tm').innerText = 'без темы';
        if ( subject == null) document.getElementById('ds').innerText = subject;
        else document.getElementById('ds').innerText = 'без описания';
    document.getElementById('message-block').classList.remove ('hidden');
}

cl_btn.addEventListener('click', ()=> {
    document.getElementById('subject').innerText = '';
    document.getElementById('describe').innerText = '';
    document.getElementById('message-block').classList.add('hidden'); 
});


document.getElementById('hbl').onclick = function () {
   if (iml.style.visibility === 'hidden') {
       iml.style.visibility = 'visible';
   } else { 
    iml.style.visibility = 'hidden';
   }
}

document.getElementById('hbr').onclick = function () {
    if (imr.style.visibility === 'hidden') {
        imr.style.visibility = 'visible';
    } else { 
     imr.style.visibility = 'hidden';
    }
 }
 

const nav = document.getElementById('nav-item');
nav.addEventListener('click', (event) => {
    nav.querySelectorAll('a').forEach (el => {
        var ird = document.getElementById("id-row").children;
        var i;
        var count = 2;
        ird[ird.length-1].src = 'img' + toString(i + count-1) + '.jpg';
        for ( i = 0; i < ird.length - 1; i++ ) {
            ird[i].src = 'img' + toString(i + count) + '.jpg';
            if (count + 1 <= ird.length) count++;
                else count = 2;
        };
    });
});




