const menumobile = document.querySelector('.menu-mobile')
const about = document.querySelector('.section-about')
const hero2 = document.querySelector('.hero-wallpaper2')
const localizaredes = document.querySelector('.localiza-redes')
const localizacao = document.querySelector('.localizacao')
const footer = document.querySelector('footer')
const body = document.querySelector('body')

function mostrarmenumobile(){
    menumobile.style.transform = 'translateX(0)'
    about.style.display = 'none'
    hero2.style.display = 'none'
    localizaredes.style.display = 'none'
    localizacao.style.display = 'none'
    footer.style.display = 'none'
    body.style.height = '655px'
}

function tirarmenumobile(){
    menumobile.style.transform = 'translateX(230px)'
    about.style.display = 'block'
    hero2.style.display = 'block'
    localizaredes.style.display = 'block'
    localizacao.style.display = 'block'
    footer.style.display = 'block'
    body.style.height = '100%'
}