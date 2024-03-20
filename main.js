let slides = document.getElementsByClassName("slides");
let dots = document.getElementsByClassName("dots");
const langBtn = document.getElementById("lang-btn");
const themeBtn = document.getElementById("theme-btn");
const logoImg = document.getElementById("logo-img");
const geomerty = document.getElementById("geometry");
const dotPattern = document.getElementById("dot-pattern");
const span = document.getElementById("span");
const themeBtnImg = document.getElementById("theme-btn-img");
const hamburgerBtn = document.getElementById("hamburgerbtn");
const hamburgerMenu = document.getElementById("hamburger");
const moreBtn = document.getElementById("about-more");
const abtPar = document.getElementById("about-par");
const skillBar = document.getElementById("skills-container");
const backBtn = document.getElementById("backBtn");
const linkedinLogo = document.getElementById("linkedin-logo");
const emailLogo = document.getElementById("email-logo");
const githubLogo = document.getElementById("github-logo");
const backBtnImg = document.getElementById("backBtn-img");
const skillBarTheme = Array.from(document.getElementsByClassName("skill-bar"));
const aboutContainer = document.getElementById("about-container");
let slideIndex = 0;
let isDark = true;
let isEng = true;

// changes slide in the carousel
setInterval(changeSlides, 3000);

function changeSlides() {
  slides[slideIndex].style.display = "none";
  slideIndex++;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

// when page is reloaded, starts from the top of the page
window.onload = function () {
  window.scrollTo(0, 0);
};

// changes the theme of the page
themeBtn.addEventListener("click", changeTheme);
function changeTheme() {
  if (isDark) {
    isDark = false;
    themeBtnImg.src = "themes/dark-mode.png";
    document.documentElement.style.setProperty("--background", "#e1e5ee");
    document.documentElement.style.setProperty("--text-color", "#1d1f24");
    document.documentElement.style.setProperty("--primary-color", "#0067a5");
    document.documentElement.style.setProperty("--secondary-color", "#c4a8cc");
    hamburgerBtn.querySelector("img").src = "themes/hamburger-light.png";
    logoImg.src = "logo-dark.png";
    geomerty.src = "themes/geometry-light.png";
    dotPattern.src = "themes/dot-pattern-light.png";
    linkedinLogo.src = "contact-info/linkedin-light.png";
    emailLogo.src = "contact-info/email-light.png";
    githubLogo.src = "contact-info/github-light.png";
    backBtnImg.src = "themes/arrow-light.png";
    skillBarTheme.forEach((element) => {
      element.style.background = "var(--accent)";
    });
  } else {
    isDark = true;
    themeBtnImg.src = "themes/light-mode.png";
    document.documentElement.style.setProperty("--background", "#1d1f24");
    document.documentElement.style.setProperty("--text-color", "#e1e5ee");
    document.documentElement.style.setProperty("--primary-color", "#c4a8cc");
    document.documentElement.style.setProperty("--secondary-color", "#0067a5");
    logoImg.src = "logo-light.png";
    geomerty.src = "themes/geometry.png";
    dotPattern.src = "themes/dot-pattern.png";
    hamburgerBtn.querySelector("img").src = "themes/hamburger-dark.png";
    linkedinLogo.src = "contact-info/linkedin.png";
    emailLogo.src = "contact-info/email.png";
    githubLogo.src = "contact-info/github.png";
    backBtnImg.src = "themes/arrow-dark.png";
    skillBarTheme.forEach((element) => {
      element.style.background = "#282828";
    });
  }
}

// hamburger menu disappears as you click outside of it
hamburgerBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  hamburgerMenu.style.display = "flex";
  document.getElementById("overlay").style.display = "block";
  document.addEventListener("click", handleClickOutside);
});

function handleClickOutside(event) {
  if (!hamburgerMenu.contains(event.target)) {
    hamburgerMenu.style.display = "none";
    document.removeEventListener("click", handleClickOutside);
    document.getElementById("overlay").style.display = "none";
  }
}

// "more about me" button
let isClicked;

moreBtn.addEventListener("click", () => {
  aboutContainer.style.display = "none";
  skillBar.style.display = "grid";
  backBtn.style.display = "block";
});
backBtn.addEventListener("click", () => {
  aboutContainer.style.display = "grid";
  skillBar.style.display = "none";
  backBtn.style.display = "none";
});

moreBtn.addEventListener("mouseenter", () => {
  if (isEng === true) {
    moreBtn.innerText = "skills";
  } else {
    moreBtn.innerText = "مهارت ها";
  }
});

moreBtn.addEventListener("mouseout", () => {
  if (isEng === true) {
    moreBtn.innerText = "click for more";
  } else {
    moreBtn.innerText = "کلیک کنید";
  }
});
// translates :/
const translation = {
  en: {
    bio: `A coding enthusiast based in <span class="text-highlights">Esfahan, Iran</span>, born on <span class="text-highlights">December 22, 2001</span>. I graduated with a degree in <span class="text-highlights">English literature</span> and found my true calling in coding. If you're on the lookout for a reliable dude to tackle your <span class="text-highlights">front-end projects,</span> I've got your back!`,
    about: "about",
    projects: "projects",
    contacts: "contacts",
    greeting: `<p>Greetings!</p>
    <p style="font-size: 40px">I'm</p> 

    <h1>
      Payam
      <span style="font-size: 17px;" class="text-highlights">aka: pm</span>
      <span id="last-name">Nikimanesh</span>
    </h1>`,

    skills: "click for more",
    currentProjects: `My Current <br/> Projects`,
  },

  fa: {
    bio: "متولد ۱ دی ۱۳۸۰ از اصفهان و فارغ التخصیل ادبیات انگلیسی. دوست قابل اعتماد شما برای پروژه های فرانت اند.",
    about: "درباره",
    projects: "پروژه ها",
    contacts: "تماس",
    greeting: `<p class="greeting-i">درود!</p>
    <p class="greeting-ii">من</p>

    <h1 class="greeting-i">پیام نیکی‌منش</h1>
    <p class="greeting-ii">هستم</p>`,
    skills: "کلیک کنید",
    currentProjects: "پروژه های من",
  },
};

langBtn.addEventListener("click", () => {
  if (isEng === true) {
    isEng = false;
    langBtn.innerText = "فا";
    about.innerHTML = translation.fa.about;
    projects.innerHTML = translation.fa.projects;
    contact.innerHTML = translation.fa.contacts;
    abtPar.innerHTML = "<p>" + translation.fa.bio + "</p>";
    projectsHeading.innerHTML =
      "<h2>" + translation.fa.currentProjects + "</h2>";
    greetings.innerHTML = translation.fa.greeting;
    moreBtn.innerText = translation.fa.skills;
    document.body.style.textAlign = "right";
  } else {
    isEng = true;
    langBtn.innerText = "En";
    abtPar.innerHTML = "<p>" + translation.en.bio + "</p>";
    about.innerHTML = translation.en.about;
    projects.innerHTML = translation.en.projects;
    contact.innerHTML = translation.en.contacts;
    projectsHeading.innerHTML =
      "<h2>" + translation.en.currentProjects + "</h2>";
    greetings.innerHTML = translation.en.greeting;
    moreBtn.innerText = translation.en.skills;
    document.body.style.textAlign = "left";
  }
});

const about = document.getElementById("links-about");
const projects = document.getElementById("links-projects");
const contact = document.getElementById("contacts-anchor");
const projectsHeading = document.getElementById("projects-heading");
const greetings = document.getElementById("greetings");
const showcase = document.getElementById("showcase");
