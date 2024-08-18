const button = document.querySelector(".nav__button");

let navContainer = document.querySelector(".nav__links");

let navHasBeenOpened = false;

let navBurger = document.querySelector(".burger-menu-nav");

// background-color: blue;
// width: 290px;

const headerText = document.querySelector(".header__text");

button.addEventListener("click", () => {
    if (!navHasBeenOpened) {
        navContainer.innerHTML = `
        <div class="nav__link">
            <i class=" nav__chevron fa fa-chevron-right" style="font-size:20px;color:purple"></i>
            <a class="nav__link-text" href="#about-me">About Me ( )</a>
        </div>

        <div class="nav__link">
            <i class=" nav__chevron fa fa-chevron-right" style="font-size:20px;color:purple"></i>
            <a class="nav__link-text" href="#technical-skills">Technical skills ( )</a>
        </div>

        <div class="nav__link">
            <i class=" nav__chevron fa fa-chevron-right" style="font-size:20px;color:purple"></i>
            <a class="nav__link-text" href="#projects">My Projects ( )</a>
        </div>

        <div class="nav__link">
            <i class=" nav__chevron fa fa-chevron-right" style="font-size:20px;color:purple"></i>
            <a class="nav__link-text" href="#contact-info">Get in Touch ( )</a>
        </div>`;

        headerText.style.display = "none";
        navBurger.style.width = "290px";
        navBurger.style.background = `lightcyan`;

        navHasBeenOpened = true;
        console.log(navHasBeenOpened);
    } else if (navHasBeenOpened) {
        navBurger.style.width = "50px";
        headerText.style.display = "block";
        navContainer.innerHTML = "";
        navHasBeenOpened = false;
    }
});
