const navLinks =document.querySelectorAll('header nav a');
const logoLinks =document.querySelector('.logo');
const section =document.querySelectorAll('section');

const activePage =() =>{
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    section.forEach(section => {
        section.classList
     });
}

navLinks.forEach((link, idx)=>{
    link.addEventListener('click', ()=>{
        if(!link.classList.contains('active')){
            activePage();

            link.classList.add('active');

            setTimeout(() =>{ 
                section[idx].classList.add('active');
            });
        }
        
    })

});

logoLinks.addEventListener('click', () =>{

    if(!navLinks[0].contains('active')){
        activePage()

        navLinks[0].classList.add('active');
        setTimeout(() =>{ 
            section[0].classList.add('active');
        });
    }
});