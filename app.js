// navigation slider effect

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  //   const ulNavLinks = document.querySelectorAll(".nav-links ul ");

  //   ulNavLinks.style.display = "none";
  burger.addEventListener("click", () => {
    // console.log(nav.classList);
    // toggle nav
    nav.classList.toggle("nav-active");

    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade .3s ease forwards ${
          index / 7 + 0.1
        }s`;
      }
    });

    // burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// dynamic content

fetch("header.json")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector(".title").innerHTML = data.title;
    document.querySelector(".subtitle").innerHTML = data.subtitle;
    document.querySelector(".site-title").innerText = data.siteTitle;
  });
