//=============================
// Header Shadow
//=============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});

//=============================
// Scroll Animation
//=============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".feature-box,.service-card,.gallery-grid img,.contact-box div,.about-content,.about-image")
.forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});

//=============================
// Back To Top Button
//=============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.classList.add("active");

    }else{

        topBtn.classList.remove("active");

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};