//alert("Welcome to this page!");
var flag = 0;

for (let i=0; i<4; i++){
    document.querySelectorAll(".nav-links")[i].addEventListener("click", function(){
        
        if (document.querySelector(".home-intra-link").classList.length == 3){
            document.querySelector(".home-intra-link").classList.remove("bg-white")
        }
        if (document.querySelector(".about-intra-link").classList.length == 3){
            document.querySelector(".about-intra-link").classList.remove("bg-white")
        }
        if (document.querySelector(".project-intra-link").classList.length == 3){
            document.querySelector(".project-intra-link").classList.remove("bg-white")
        }
        if (document.querySelector(".contact-intra-link").classList.length == 3){
            document.querySelector(".contact-intra-link").classList.remove("bg-white")
        }
        this.classList.add("bg-white");
        if(flag == 1){
            document.querySelector(".navbar").classList.remove("navbar-toggler");
            document.querySelector(".nav-items-list").classList.remove("nav-items-list-toggler");
        }

    })
}
document.querySelector(".toggler").addEventListener("click",function(){
    flag = 1;

    document.querySelector(".navbar").classList.toggle("navbar-toggler");
    document.querySelector(".nav-items-list").classList.toggle("nav-items-list-toggler");
})
