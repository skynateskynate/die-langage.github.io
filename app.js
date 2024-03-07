export function menu() {
    const menu = document.querySelector('.bx-menu')
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

export function observe(animations) {
    const observer = new IntersectionObserver((entries) => {
        for (const entrie of entries) {
            if (entrie.isIntersecting) {
                if (animations[1] == 'left') {
                    entrie.target.animate([
                        {transform: 'translateX(-100px)', opacity: 0},
                        {transform: 'translateX(0)', opacity: 1},
                    ], {
                        duration: 500
                    })
                    observer.unobserve(entrie.target)
                } else {
                    entrie.target.animate([
                        {transform: 'translateX(100px)', opacity: 0},
                        {transform: 'translateX(0)', opacity: 1},
                    ], {
                        duration: 500
                    })
                    observer.unobserve(entrie.target)
                }
            }
        }
    })

    observer.observe(document.querySelector('.' + animations[0]))
}