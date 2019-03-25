const MENU_BREAKPOINT = 1310

document.addEventListener("DOMContentLoaded", () => { 
  const navMenu = document.querySelector('.nav-menu')
  const burgerButton = document.querySelector('.burger-button')

  if (window.innerWidth <= MENU_BREAKPOINT) {
    navMenu.classList.add('hidden')
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > MENU_BREAKPOINT) {
      navMenu.classList.remove('hidden')
    } else {
      navMenu.classList.add('hidden')
    }
  })

  burgerButton.addEventListener('click', (event) => {
    event.preventDefault();

    navMenu.classList.toggle('hidden')
  })
})
