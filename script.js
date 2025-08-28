const menumobile = document.querySelector('.menu-mobile')
const about = document.querySelector('.section-about')
const hero2 = document.querySelector('.hero-wallpaper2')
const localizaredes = document.querySelector('.localiza-redes')
const localizacao = document.querySelector('.localizacao')
const footer = document.querySelector('footer')
const body = document.querySelector('body')
const cortes = document.querySelector('.cortes')
const feedback = document.querySelector('.feedback')
const barbeiros = document.querySelector('.barbeiros')
const barbeirosremovido1 = document.getElementById('barbeiroremovido1')
const barbeirosremovido2 = document.getElementById('barbeiroremovido2')
const barbeirosremovido3 = document.getElementById('barbeiroremovido3')
const barbeiroimg2 = document.querySelector('.barbeiroimg2')
const corte1 = document.querySelector('.corte1')
const corte2 = document.querySelector('.corte2')
const corte3 = document.querySelector('.corte3')
const nav = document.querySelector('.nav-ul')

function mostrarmenumobile() {
    menumobile.style.transform = 'translateX(0)'
    menumobile.style.display = 'flex'
    about.style.display = 'none'
    hero2.style.display = 'none'
    localizaredes.style.display = 'none'
    localizacao.style.display = 'none'
    footer.style.display = 'none'
    body.style.height = '100vh'


    if (window.innerWidth >= 768) {
        about.style.display = 'flex'
    }
}

function mostrarmenumobilecortes() {
    menumobile.style.transform = 'translateX(0)'
    menumobile.style.display = 'flex'
    feedback.style.display = 'none'
    footer.style.display = 'none'
    corte1.style.display = 'none'
    corte2.style.display = 'none'
    corte3.style.display = 'none'
    cortes.style.padding = '50px 20px 0px 20px'
}

function mostrarmenumobilebarbeiros() {
    menumobile.style.transform = 'translateX(0)'
    menumobile.style.display = 'flex'
    barbeirosremovido1.style.display = 'none'
    barbeirosremovido2.style.display = 'none'
    barbeirosremovido3.style.display = 'none'
    footer.style.display = 'none'
    barbeiroimg2.style.width = '90%'
}

function tirarmenumobile() {
    if (window.innerWidth <= 560) {
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
}
    
}

function tirarmenumobilecortes() {
    if (window.innerWidth <= 560){
       menumobile.style.transform = 'translateX(500px)'
    menumobile.style.display = 'none'
    footer.style.display = 'block'
    body.style.height = '100%'
    feedback.style.display = 'flex'
    footer.style.display = 'block'
    corte1.style.display = 'block'
    corte2.style.display = 'block'
    corte3.style.display = 'block'
    cortes.style.padding = '50px 20px 60px 20px' 
    }
}

function tirarmenumobilebarbeiros() {
    if (window.innerWidth <= 560){
    menumobile.style.transform = 'translateX(500px)'
    menumobile.style.display = 'none'
    barbeiros.style.display = 'block'
    barbeirosremovido1.style.display = 'block'
    barbeirosremovido2.style.display = 'block'
    barbeirosremovido3.style.display = 'block'
    barbeiroimg2.style.width = '100%'
    footer.style.display = 'block'
    body.style.height = '100%'
    }

}