const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
// const menuItems = document.querySelectorAll(".nav-links");

// side menu slider function

const navSlide = () => {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // animate links

    fetch("links-02.json")
      .then((response) => response.json())
      .then((data) => {
        // retrieves values of items in <li>HTML</li> array
        const navData = Object.values(data);

        // inserts menuItems into all elements with class .nav-links
        nav.innerHTML = "";
        navData.forEach((e) => {
          let result = e.replace(
            "<li>",
            '<li class="navLinks" style="animation: 0.3s ease 0.1s 1 normal forwards running navLinkFade">'
          );
          // dynamically generates nav links
          nav.innerHTML += result;
        });
      });
  });

  // burger animation
  burger.classList.toggle("toggle");
};

// dynamically generates page title & subtitle
fetch("header.json")
  .then((response) => response.json())
  .then((data) => {
    // loads site title & subtitle
    document.querySelector(".title").innerHTML = data.title;
    document.querySelector(".subtitle").innerHTML = data.subtitle;
    document.querySelector(".site-title").innerText = data.siteTitle;
  });

navSlide();
