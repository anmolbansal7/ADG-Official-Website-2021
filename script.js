const navSlide = () => {
    const mobile = document.querySelector('.mobile');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks li');
    
    mobile.addEventListener('click',() => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation ='';
            } else{
                link.style.animation = `.navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            }            
        });
        //Burger Animation
        mobile.classList.toggle('toggle');
    });
} 

navSlide();