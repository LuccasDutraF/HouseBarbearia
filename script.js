const menumobile = document.querySelector('.menu-mobile')
const about = document.querySelector('.section-about')
const hero2 = document.querySelector('.hero-wallpaper2')
const localizaredes = document.querySelector('.localiza-redes')
const localizacao = document.querySelector('.localizacao')
const footer = document.querySelector('footer')
const body = document.querySelector('.body')
const cortes = document.querySelector('.cortes')
const feedback = document.querySelector('.feedback')
const barbeiros = document.querySelector('.barbeiros')
const barbeirosremovido = document.getElementById('barbeiroremovido')

function mostrarmenumobile(){
    menumobile.style.transform = 'translateX(0)'
    menumobile.style.display = 'flex'
    about.style.display = 'none'
    hero2.style.display = 'none'
    localizaredes.style.display = 'none'
    localizacao.style.display = 'none'
    footer.style.display = 'none'
    body.style.height = '100vh'
    cortes.style.display = 'none'
    feedback.style.display = 'none'
    barbeiros.style.display = 'none'
    barbeirosremovido.style.display = 'none'
    

    if(window.innerWidth >= 768){
        about.style.display = 'flex'
    }
}

function tirarmenumobile(){
    menumobile.style.transform = 'translateX(500px)'
    menumobile.style.display = 'none'
    about.style.display = 'flex'
    hero2.style.display = 'block'
    localizaredes.style.display = 'block'
    localizacao.style.display = 'block'
    footer.style.display = 'block'
    body.style.height = '100%'
    cortes.style.display = 'flex'
    feedback.style.display = 'flex'
    barbeiros.style.display = 'flex'
    barbeirosremovido.style.display = 'flex'
}