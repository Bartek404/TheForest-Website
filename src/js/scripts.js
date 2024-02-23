const burgerMenu = document.querySelector(".burger-menu")
const navMenu = document.querySelector(".nav-menu")
const navItems = document.querySelectorAll(".nav-item")

const year = document.querySelector(".year")

const spyAboutUs = document.querySelector("#about-us")
const spyOffer = document.querySelector("#offer")

burgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active")
})

navItems.forEach(item => item.addEventListener("click", () => {
    navMenu.classList.toggle("active")
}))

year.innerText = new Date().getFullYear()


const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar'
  })
  

