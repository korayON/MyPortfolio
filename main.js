const header = document.querySelector("header")
 
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 200)
});


let menu = document.querySelector(".menu");
let navlist = document.querySelector(".navList");



menu.onclick = () => {
    menu.classList.toggle("#bar");
    navlist.classList.toggle("open");
}



window.onscroll = ()=> {
    menu.classList.remove("#bar");
    navlist.classList.remove("open");

}