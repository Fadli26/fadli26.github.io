window.addEventListener('scroll',function(){
    const navbar = document.querySelector('nav.navbar');
    navbar.classList.toggle('custom-sticky',window.scrollY > 70)
})