let btnM = document.getElementById("m-btn");
let navM = document.getElementById("nav-0");
let navAll = document.querySelector("#nav-0 *");
navM.style.height = "0vh";
navM.style.overflow = "hidden";
btnM.addEventListener("click", () => {
        if(navM.style.height == "0vh"){
                navM.style.height = "7.5vh";
                navM.style.overflow = "none";
        } else {
                navM.style.height = "0vh";
                navM.style.overflow = "hidden";
        }
});