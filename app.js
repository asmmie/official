// LANDING ANIMATION

const landingBody = document.querySelector(".landing-animation");
window.addEventListener("load", () => {
  landingBody.classList.add("landing-active");
});


// MOBILE MENU

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

document.addEventListener("click", (evt) => {
  const menuBars = document.querySelector(".is-active");
  if (menu.contains(evt.target)) {
    let scrollY;
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
    if (!menuBars) {
      scrollY = window.pageYOffset;
      document.body.classList.toggle("fixed");
      document.body.style.top = `-${scrollY}px`;
    } else {
      scrollY = document.body.style.top;
      document.body.classList.toggle("fixed");
      window.scrollTo({
        top: parseInt(scrollY || "0") * -1,
        behavior: "instant",
      });
    }
  } else if (menuBars) {
    scrollY = document.body.style.top;
    console.log(scrollY);
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
    document.body.classList.toggle("fixed");
    window.scrollTo({
      top: parseInt(scrollY || "0") * -1,
      behavior: "instant",
    });
  }
});


// SLIDE
const slideContainer = document.querySelector(".slide-container");
const slide = document.querySelector(".service-container");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const interval = 3000;

let slides = document.querySelectorAll('.card');
let index = 0;
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
const navLinks = document.querySelectorAll(".navbar__links");


const highlightMenu = () => {
  let current;
  let scrollPos = window.pageYOffset;
  ssTargets.forEach((sst) => {
    let targetPosition = sst.offsetTop;
    let sectionHeight = sst.clientHeight;
    if (window.innerWidth >= 960) {
      if (scrollPos >= targetPosition - sectionHeight / 3) {
        current = sst.getAttribute("name");
      }
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("current-menu");
    if (link.classList.contains(current)) {
      link.classList.add("current-menu");
    } else {
      link.classList.remove("current-menu");
    }
  });
};
window.addEventListener("scroll", highlightMenu);
window.addEventListener("resize", highlightMenu);


// MAIN ANIMATION
const stackImg = document.querySelector(".img-stack");

  window.addEventListener("scroll", () => {
    let scrollPos = window.pageYOffset;
    if (scrollPos > 1000) {
      stackImg.classList.remove("img-trans-stack");
    } else {
      stackImg.classList.add("img-trans-stack");
    }
  });
  window.addEventListener("load", () => {
    setTimeout(() => {
      stackImg.classList.add("img-trans-stack");
    }, 1000);
  });


  const mainImgs = document.querySelector(".main-img");

  window.addEventListener("scroll", () => {
    let scrollPos = window.pageYOffset;
    if (scrollPos > 1000) {
      mainImgs.classList.remove("img-trans-main");
    } else {
      mainImgs.classList.add("img-trans-main");
    }
  });
  window.addEventListener("load", () => {
    setTimeout(() => {
      mainImgs.classList.add("img-trans-main");
    }, 1000);
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
const popupImg = document.querySelector(".popup-img-wrapper img");
const popupImgW = document.querySelector(".popup-img-wrapper");
const popupVideoDiv = document.querySelector(".popup-video-div");
const popupVideo = document.querySelector(".popup-video-div video");

let hoverTimer;
const hoverImgDelay = (second, e) => {
  let video = e.querySelector(".video-div");
  hoverTimer = setTimeout(() => {
    e.style.backgroundImage = `url('./images/${second}.png')`;
    e.style.transition = "all 0.1s ease-out";
    video.style.display = "none";
  }, 1000);
};

const hoverLeaveImg = (e) => {
  let video = e.querySelector(".video-div");
  clearTimeout(hoverTimer);
  e.style.backgroundImage = "url('./images/mockup_desktop_blank.png')";
  video.style.display = "block";
};

const preventScroll = () => {
  let scrollY = window.pageYOffset;
  document.body.classList.toggle("dt-fixed");
  document.body.style.top = `-${scrollY}px`;
}

const disableToggle = () => {
  let scrollY = document.body.style.top;
  document.body.classList.toggle("dt-fixed");
  window.scrollTo({
    top: parseInt(scrollY || "0") * -1,
    behavior: "instant",
  });
}

const getUrl = (first, second) => {
  preventScroll();
  popupImg.src = `./images/${first}.png`;
  popupImgDiv.style.display = "block";
  let toggle = true;
  popupImgW.onclick = () => {
    toggle = !toggle;
    if (toggle) {
      popupImg.src = `./images/${first}.png`;
    } else {
      popupImg.src = `./images/${second}.png`;
    }
  };
};

const showVideo = (video, second) => {
  preventScroll();
  popupVideo.src = `./images/${video}.mov`;
  popupImg.src = "./images/mockup_desktop_blank.png";
  popupImgDiv.style.display = "block";
  popupVideoDiv.style.display = "block";
  let toggle = true;
  popupImgW.onclick = () => {
    toggle = !toggle;
    if (toggle) {
      popupImg.src = "./images/mockup_desktop_blank.png";
      popupVideoDiv.style.display = "block";
    } else {
      popupImg.src = `./images/${second}.png`;
      popupVideoDiv.style.display = "none";
    }
  };
};


popupImgDiv.addEventListener("click", (evt) => {
  if (!evt.target.closest(".popup-img-wrapper")) {
    disableToggle();
    popupImgDiv.style.display = "none";
    popupVideoDiv.style.display = "none";
  }
});

window.addEventListener("scroll", () => {
  let content = document.querySelectorAll(".video-div");
  content.forEach((cnt) => {
    let contentPosition = cnt.getBoundingClientRect().top;
    let pv = cnt.querySelector(".play-video");
    let screenPosition = window.innerHeight;
    if (contentPosition < screenPosition) {
      pv.play();
    } else {
      pv.pause();
    }
  });
});




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


// GLITCH

const glitchTgtOne = document.querySelector(".comingsoon span:nth-child(1)");
const glitchTgtTwo = document.querySelector(".comingsoon span:nth-child(2)");

window.addEventListener("scroll", () => {
  let glitchPosition = glitchTgtOne.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (glitchPosition < screenPosition) {
    glitchTgtOne.classList.add("glitch1");
  } else if (glitchPosition < screenPosition + 500) {
    glitchTgtOne.classList.remove("glitch1");
  }
});

window.addEventListener("scroll", () => {
  let glitchPosition = glitchTgtTwo.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (glitchPosition < screenPosition) {
    glitchTgtTwo.classList.add("glitch2");
  } else if (glitchPosition < screenPosition + 500) {
    glitchTgtTwo.classList.remove("glitch2");
  }
});
