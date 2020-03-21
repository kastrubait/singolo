const menu = document.getElementById('menu');
const iml = document.getElementById('fon-left');
const imr = document.getElementById('fon-rigth');
const nav = document.getElementById('nav-item');
const bord = document.getElementById('id-row');
const btn = document.getElementById('btn');
const cl_btn = document.getElementById('cl-btn');

menu.addEventListener('click', (event)=> {
    menu.querySelectorAll('a').forEach(el => el.classList.remove('nav-act'));
    event.target.classList.add('nav-act');
});

bord.addEventListener('click', (event) => {
    bord.querySelectorAll ('img').forEach(el => el.classList.remove('portfolio-img'));
    event.target.classList.add('portfolio-img') 
});
  
document.getElementById('btn').onclick = function() {
 //btn.addEventListener('click', (event)=> {
    let nm = document.getElementById('name');
    let em = document.getElementById('email');
          
    if (nm.checkValidity() && em.checkValidity()) {
        if (subject.value.toString() !== "") subjectImp.innerText = subject.value.toString();
                else subjectImp.innerText = 'No subject';

        if (describe.value.toString() !== "") textareaImp.innerText = describe.value.toString();
                else textareaImp.innerText = 'No description';
                 
        document.getElementById('message-block').classList.remove('hidden');
    }
}

cl_btn.addEventListener('click', ()=> {
    document.getElementById('subject').value = '';
    document.getElementById('describe').value = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message-block').classList.add('hidden'); 
});

document.getElementById('but_L').onclick = function () {
    const el= document.getElementById('slide');
    let from = 0; 
    let to = 1020; 
    let start = new Date().getTime(); 
    setTimeout(function() {
        let now = (new Date().getTime()) - from; 
        let progress = now / 1000; 
        let result = (to - from) * delta(progress) + from;
        el.style.left = result + "px";
        if (progress < 1) 
                setTimeout(arguments.callee, 10);
 }, 10);
    function delta(progress) {
        return progress;
    }
    return false;
}
    
    /*for (let i = 0; i<5000; i++) {
        document.getElementById('rigth').style.left = ofset*60 - i*0.02 + 'px';
        document.getElementById('left').style.left = ofset*650 - i*0.02 + 'px';
    }
        document.getElementById('left').style.visibility = 'visible';
    step++;
 }

 document.getElementById('but_R').onclick = function () {
    document.getElementById('rigth').style.visibility = 'hidden';
    document.getElementById('left').style.left = ofset*60 - 60 + 'px';
    document.getElementById('rigth').style.left = ofset*270 + 'px';
    document.getElementById('rigth').style.visibility = 'visible';
    step++;*/
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
 
nav.addEventListener('click', (event) => {
    nav.querySelectorAll('a').forEach(el => el.classList.remove('nav-item-act'));
    event.target.classList.add('nav-item-act');
    nav.querySelectorAll('a').forEach (el => {
        let ird = document.getElementById("id-row");
        for (let i = ird.children.length; i >= 0; i--) {
            ird.appendChild(ird.children[Math.random() * i | 0]);
        } 
    });
});




