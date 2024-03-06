export function menu() {
    const menu = document.querySelector('.bx-menu')
    const mM = document.querySelector('.navbar.mobile-menu')
    const navbar = document.querySelector('.navbar')
    const bxX = document.querySelector('.bx-x')
    menu.addEventListener('click', () => {
        navbar.classList.toggle('mobile-menu')
        menu.classList.toggle('display')
        bxX.classList.toggle('display')
    })
    bxX.addEventListener('click', () => {
        navbar.classList.toggle('mobile-menu')
        menu.classList.toggle('display')
        bxX.classList.toggle('display')
    })
}