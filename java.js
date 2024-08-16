const button = document.querySelector(".nav__button");

let navContainer = document.querySelector(".nav__links");

let navHasBeenOpened = false;

button.addEventListener("click", () => {
    if (!navHasBeenOpened) {
        navContainer.innerHTML = `
            <div class="nav__link">
            <i class=" nav__item fa fa-chevron-right" style="font-size:20px;color:purple"></i>
            <a class="nav__item" href="#about-me">About Me</a>
        </div>

        <div class="nav__link">
            <i class=" nav__item fa fa-chevron-right" style="font-size:20px;color:purple"></i>
            <a class="nav__item" href="#technical-skills">Technical skills</a>
        </div>

        <div class="nav__link">
            <i class=" nav__item fa fa-chevron-right" style="font-size:20px;color:purple"></i>
            <a class="nav__item" href="#projects">My Projects</a>
        </div>

        <div class="nav__link">
            <i class=" nav__item fa fa-chevron-right" style="font-size:20px;color:purple"></i>
            <a class="nav__item" href="#contact-info">Get in Touch</a>
        </div>`;

        navHasBeenOpened = true
        console.log(navHasBeenOpened)
    }

    else if (navHasBeenOpened) {
        navContainer.innerHTML = ""
        navHasBeenOpened = false
    }
 
});

