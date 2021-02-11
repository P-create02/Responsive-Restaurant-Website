// Set the date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();


// Close the links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    // console.log(containerHeight);
    // console.log(linksHeight);

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    } else{
        linksContainer.style.height = 0;
    }
});


// Fixed nav
const nav = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        nav.classList.add("fixed-nav");
    } else{
        nav.classList.remove("fixed-nav");
    }

    if(scrollHeight > 500){
        topLink.classList.add("show-link");
    } else{
        topLink.classList.remove("show-link");
    }
});


// Scroll
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = nav.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = nav.classList.contains("fixed-nav");

        let position = element.offsetTop - navHeight;

        //  console.log(position);
        //  console.log(navHeight);

        if(!fixedNav){
            position -= navHeight;
        } if(navHeight > 96.5){
            position += containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });

        linksContainer.style.height = 0;
    });
});