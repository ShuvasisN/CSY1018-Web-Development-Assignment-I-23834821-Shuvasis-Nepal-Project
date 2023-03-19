const hamburger= document.querySelector('.hamburger'); // selecting hamburger from the DOM
const nav= document.querySelector('.nav-menu'); // selecting nav-menu from the DOM

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle("show");
    nav.classList.toggle("show");
})

document.querySelectorAll(".nav-menu-item").forEach(item=>item.addEventListener('click',()=>{
    hamburger.classList.remove('show');
    nav.classList.remove('show');
}))