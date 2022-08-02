const burger = document.querySelector(".burger")
const navLinks = document.querySelector(".nav-links")
const navLinksList = document.querySelector(".nav-links li")

// side menu slider function
const navSlide = () => {
  document.addEventListener("DOMContentLoaded", () => {
    fetch("links.json")
      .then(response => response.json())
      .then(data => {
        // retrieves values of items as <li>HTML</li> array
        const navData = Object.values(data)

        // inserts menuItems into all elements with class .nav-links
        navLinks.innerHTML = ""
        navData.forEach(e => {
          let result = e.replace("<li>", `<li class="navLinks navAnim">`)
          // dynamically generates nav links
          navLinks.innerHTML += result
          console.log(result)
        })
      })
  })
  // burger animation
  burger.addEventListener("click", () => {
    burger.classList.toggle("toggle")
    navLinks.classList.toggle("nav-active")
  })
}

// dynamically generates page title & subtitle
fetch("header.json")
  .then(response => response.json())
  .then(data => {
    // loads site title & subtitle
    document.querySelector(".title").innerHTML = data.title
    document.querySelector(".subtitle").innerHTML = data.subtitle
    document.querySelector(".site-title").innerText = data.siteTitle
  })

navSlide()
