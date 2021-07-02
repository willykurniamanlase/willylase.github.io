/* ------ call selections ----- */
const humberger = document.querySelector('#humberger');
const nav = document.querySelector('section#nav');
const link = document.querySelectorAll('.link-page');
const section = document.querySelectorAll('section');

/* ------ event humberger ----- start ------ */
humberger.addEventListener('click', ()=>{
    /* ------ call nav ----- */
    goOut();
    /* ------ style humberger button ----- */
    humberger.classList.toggle('nav-active');
    /* ------ hide nav ----- */
    active();
})
    /* ------ function for humberger ---- start ----- */
    function goOut(){
        document.querySelector('section.active').classList.toggle('out');
    }
    function active(){
        document.querySelector('#nav').classList.toggle('active');
    }
    /* ------ function for humberger ---- end ----- */
/* ------ event humberger ----- end ------ */

/* ------ event for navigation section ----- */
document.addEventListener('click', (e) => {
    /* ------ check if target have class link-page and id ------ */
    if(e.target.classList.contains("link-page") && e.target.hash !== ""){
        /* ------ check if target have class link-item ---- so this for button on navigation ---- */
        if(e.target.classList.contains('link-item')){active()}
        /* ------ change section ------ */
        setTimeout(()=>{
            document.querySelector('section.active').classList.remove('active', 'out');
            document.querySelector(e.target.hash).classList.add('active');
            humberger.classList.remove('nav-active');
        },250)
    }
})