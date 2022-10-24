// LANDING ANIMATION

const landingBody = document.querySelector(".landing-animation");
window.addEventListener("load", () => {
  landingBody.classList.add("landing-active");
});


// MOBILE MENU

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");



document.addEventListener("click", (evt) =>{
  const menuBars = document.querySelector(".is-active");
  if (menu.contains(evt.target)) {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
  } else if (menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
  }
});


// SLIDE
const slideContainer = document.querySelector(".slide-container");
const slide = document.querySelector(".service-container");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const interval = 3000;

let slides = document.querySelectorAll('.card');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const secondClone = slides[1].cloneNode(true);
const thirdClone = slides[2].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
secondClone.id = 'second-clone';
thirdClone.id = 'third-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.append(secondClone);
slide.append(thirdClone);
slide.prepend(lastClone);


const startSlide = () => {
   slideId = setInterval(() => {
     moveToNextSlide();
   }, interval);
 };
 startSlide();
const getSlides = () => document.querySelectorAll(".card");

const moveToNextSlide = () => {
    let slideWidth = slides[index].clientWidth;
  slides = getSlides();
  if (index >= slides.length - 3) return;
  index++;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = `.7s`;
};
const moveToPreviousSlide = () => {
    let slideWidth = slides[index].clientWidth;
  slides = getSlides();
  if (index <= 0) return;
  index--;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = `.7s`;
};

slide.addEventListener("transitionend", () => {
    let slideWidth = slides[index].clientWidth;
    slides = getSlides();
    if (slides[index].id === firstClone.id) {
        slide.style.transition = "none";
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
  if (slides[index].id === lastClone.id) {
    slide.style.transition = "none";
    index = slides.length - 4;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});


slideContainer.addEventListener("mouseenter", () => {
  clearInterval(slideId);
});
slideContainer.addEventListener("mouseleave", startSlide);

nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPreviousSlide);

const resetSlide = () => {
    index = 0;
    return;
}
window.addEventListener("resize", resetSlide);

// SMOOTH SCROLL

const ssTargets = document.querySelectorAll(".ss-targets");
let scrollPos = window.scrollY;
const navLinks = document.querySelectorAll(".navbar__links");

window.addEventListener("scroll", () => {
  let current = "";
  ssTargets.forEach((sst) => {
    let scrollPos = window.scrollY;
    let targetPosition = sst.offsetTop;
    let sectionHeight = sst.clientHeight;
    if (scrollPos >= (targetPosition - sectionHeight / 3)) {
      current = sst.getAttribute("name");
    }
  });

  navLinks.forEach((link) => {
    if (window.innerWidth > 960) {
      link.classList.remove("current-menu");
      if (link.classList.contains(current)) {
        link.classList.add("current-menu");
      }
    } else {
      return;
    }
  });
});


// MAIN ANIMATION

const heroImgs = document.querySelectorAll('.imgs');
[...heroImgs].forEach((heroImg) => {
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
  if (scrollPos > 1000) {
    heroImg.classList.remove('img-trans');
  } else {
    heroImg.classList.add('img-trans');
  }
  });
  window.addEventListener("load", () => {
    setTimeout(() => {
      heroImg.classList.add("img-trans");
    }, 1000);
  });
});



// ABOUT ANIMATION
window.addEventListener('scroll', () => {
  let greet = document.querySelector('.greet');
  let greetPosition = greet.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (greetPosition < screenPosition) {
    greet.classList.add('animation');
  } else {
    greet.classList.remove('animation');
  }
});

window.addEventListener('scroll', () => {
  let content = document.querySelector('.dscriptn-animation');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('dscrptn-active');
  } else {
    content.classList.remove('dscrptn-active');
  }
});



// PROJECT POPUP WINDOWS

const popupImgDiv = document.querySelector(".popup-img");
const popupImg = document.querySelector(".popup-img img");

const getUrl = (first, second) => {
  popupImgDiv.style.display = "block";
  popupImg.src = `./images/${first}.png`;

  let toggle = true;
  popupImg.onclick = () => {
    toggle = !toggle;
    if (toggle) {
      popupImg.src = `./images/${first}.png`;
    } else {
      popupImg.src = `./images/${second}.png`;
    }
  };
};

popupImgDiv.addEventListener("click", (evt) => {
  if (!evt.target.closest(".popup-img img")) {
    popupImgDiv.style.display = "none";
  }
});

const closeBtn = document.querySelector(".popup-img span");
closeBtn.onclick = () => {
  popupImgDiv.style.display = "none";
};




// PROJECT ANIMATION

const pjAnime = document.querySelectorAll(".prj-animation");
const pjAnimeDly = document.querySelectorAll(".prj-animation-delay");
[...pjAnime].forEach((anime) => {
  window.addEventListener("scroll", () => {
    let contentPosition = anime.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if (contentPosition < screenPosition) {
      anime.classList.add("pj-anime-active");
    } else {
      anime.classList.remove("pj-anime-active");
    }
  })
});

[...pjAnimeDly].forEach((animed) => {
  window.addEventListener("scroll", () => {
    let contentPosition = animed.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if (contentPosition < screenPosition) {
      animed.classList.add("pj-anime-active-delay");
    } else {
      animed.classList.remove("pj-anime-active-delay");
    }
  });
});
