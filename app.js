const navbarEl = document.querySelector(".navbar")
const bottomEl = document.querySelector(".bottom")

console.log(bottomEl.offsetTop)

console.log(navbarEl.offsetHeight)


window.addEventListener("scroll", () => {
    if(
        window.scrollY > bottomEl.offsetTop - navbarEl.offsetHeight - 50
    ){
        navbarEl.classList.add("active")
    }else(
        navbarEl.classList.remove("active")
    )
})
