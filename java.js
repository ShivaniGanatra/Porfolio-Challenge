const button = document.querySelector(".nav__button");

let navContainer = document.querySelector(".nav__links");

let navHasBeenOpened = false;

button.addEventListener("click", () => {
    if (!navHasBeenOpened) {
        navContainer.innerHTML = `
        <a class="nav__link" href="">about me</a>
        <a class="nav__link" href="">technical skills</a>
        <a class="nav__link" href="">my projects</a>
        <a class="nav__link" href="">my contacts</a>`;

        navHasBeenOpened = true
        console.log(navHasBeenOpened)
    }

    else if (navHasBeenOpened) {
        navContainer.innerHTML = ""
        navHasBeenOpened = false
    }
 
});

{
    /* <a href="">about me</a>
<a href="">technical skills</a>
<a href="">my projects</a>
<a href="">my contacts</a> */
}
