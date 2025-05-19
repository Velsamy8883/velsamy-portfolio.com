const menu=document.querySelector('.menu');
const menuList=document.querySelector('.navbar');

menu.addEventListener('click',() =>{
    menuList.classList.toggle('.showMenu')
})