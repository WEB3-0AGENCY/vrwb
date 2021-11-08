// Loading Spinner + Reveal sections
const sec = document.querySelectorAll("section");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const hot = document.querySelector(".hot-fix");
sec.forEach(function(section){
    section.style.display="none";
});
header.style.display="none";
nav.style.display="none";
hot.style.display="none";
function hideLoader(){
    document.getElementById("section-loader").style.display="none";
    sec.forEach(function(section){
        section.style.display="block";
    });
    header.style.display="block";
    nav.style.display="block";
    hot.style.display="block";
    /*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    // duration: 2000
    duration:2700,
    reset: true
});
sr.reveal(`header, #qubly , #proudct-teams,#proudct-teams, #about , #login , #footer `, {
    interval:200
});
};
// // document.onload = hideLoader();
setTimeout(hideLoader , 2000);

// End Loading Spinner + reveal

// Dark Mode Using Root Element
document.querySelector("#moon").innerHTML ="<i class='bx bx-moon' ></i>";   
let moon = document.getElementById("moon");
moon.addEventListener("click",function(e){
    let mode = moon.getAttribute("mode");
    let nextMode = mode === "white-theme"? "dark-theme" : "white-theme";
    if(nextMode === "white-theme"){
        // If White
        document.documentElement.style.setProperty('--FifthColor', '#160637');
        document.body.style.backgroundColor="#fff"; 
        document.querySelector('.nav-bars').style.backgroundColor = "#fff" ;  
        document.documentElement.style.setProperty('--ThirdColor', 'linear-gradient(#fff, #e2f1ff)');
        document.documentElement.style.setProperty('--EightColor', '#FBFCFF');
        document.documentElement.style.setProperty('--SecondColor', '#000');
        document.documentElement.style.setProperty('--NineColor', '#000');
        document.querySelector("#moon").innerHTML ="<i class='bx bx-moon' ></i>"
    } else {
        // If dark
        document.documentElement.style.setProperty('--NineColor', '#fff');
        document.documentElement.style.setProperty('--FifthColor', '#fff');
        document.body.style.backgroundColor="#100E17";
        document.querySelector('.nav-bars').style.backgroundColor = "#100E17" ;

        document.documentElement.style.setProperty('--ThirdColor', '#000');
        document.documentElement.style.setProperty('--EightColor', '#100E17');
        document.documentElement.style.setProperty('--SecondColor', '#fff');
        document.querySelector("#moon").innerHTML ="<i class='bx bx-sun'></i>";
    }
    moon.setAttribute("mode" , nextMode);
});
// End Dark Mode
window.addEventListener('scroll', active);
// active section 
function active() {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".nav-link");
    let current = "";
    sections.forEach((section) => {           
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - (section.scrollHeight /2)) {
            current = section.getAttribute("id"); }
    });
    navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) {
            a.classList.add("active");
        }
    });
}
// End Active Section 
// nav on scroll
window.addEventListener('scroll' , (e) => { 
    let mode = moon.getAttribute("mode");
    if (window.scrollY == 0) {
        if(mode === "white-theme"){
            document.querySelector('.nav-bars').style.boxShadow = 'none' ;  
        } else {
            document.querySelector('.nav-bars').style.boxShadow = 'none' ;
            document.querySelector('.nav-bars').style.backgroundColor = '#100E17' ; 
        }
    }else {    
        if(mode === "white-theme"){
            document.querySelector('.nav-bars').style.backgroundColor = "#fff" ; 
            document.querySelector('.nav-bars').style.boxShadow = '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)' ;  
        } else {
            document.querySelector('.nav-bars').style.backgroundColor = "rgb(160 158 166 / 6%)" ;  
            document.querySelector('.nav-bars').style.boxShadow = '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);' ;  
        }
    }
});
//  End Nav on Scroll