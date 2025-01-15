const standaloneDropdown = document.getElementById("standalone-dropdown");
const inlineDropdown = document.getElementById("inline-status-dropdown")

const standaloneActivityBlock = document.getElementById("standalone-block");
const inlineActivityBlock = document.getElementById("inline-block");

const inlineDropdownIcon = document.getElementById("inline-chevron");
const standaloneDropdownIcon = document.getElementById("standalone-chevron");


let inlineStatusDropdownActive = false;
let standaloneStatusDropdownActive = false;

standaloneDropdown.addEventListener("mouseover", standaloneStatusHover);
standaloneDropdown.addEventListener("mouseleave", standaloneStatusLeave);
standaloneDropdown.addEventListener("click", standaloneStatusActive);

inlineDropdown.addEventListener("mouseover", inlineStatusHover);
inlineDropdown.addEventListener("mouseleave", inlineStatusLeave);
inlineDropdown.addEventListener("click", inlineStatusActive);

// inline logic functions

function inlineStatusHover() {

    console.log("inline hovering");

    inlineActivityBlock.style.background = "#ADBFF0";
    inlineDropdown.style.cursor = "pointer";
    inlineDropdownIcon.src = "icons/hover-chevron.png"

};

function inlineStatusLeave() {

    inlineActivityBlock.style.background = "transparent";
    inlineDropdownIcon.src = "icons/default-chevron.png"

};

function inlineStatusActive() {

    if (!inlineStatusDropdownActive) {

        inlineDropdownIcon.src = "icons/active-chevron.png"


        inlineDropdown.removeEventListener("mouseover", inlineStatusHover);
        inlineDropdown.removeEventListener("mouseleave", inlineStatusLeave);

        inlineStatusDropdownActive = true;

        console.log(standaloneDropdown);

        let newDropdown = document.createElement("div");
        newDropdown.classList.add("menu-dropdown");

        newDropdown.innerHTML = `
            <div class="menu-option">
                <img src="status-glyph/active.png">
                <p class="menu-text">Active</p>
            </div>
            <div class="menu-option">
                <img src="status-glyph/warning.png">
                <p class="menu-text">Inactive</p>
            </div>
            <div class="menu-option">
                <img src="status-glyph/information.png">
                <p class="menu-text">Information</p>
            </div>
        
        `;

        inlineDropdown.appendChild(newDropdown);

    } else {

        const menuDropdown = inlineDropdown.querySelector(".menu-dropdown");
        console.log(menuDropdown);

        inlineStatusDropdownActive = false;

        menuDropdown.remove();
        
        inlineDropdown.addEventListener("mouseover", inlineStatusHover);
        inlineDropdown.addEventListener("mouseleave", inlineStatusLeave);

    }


}


// standalone logic

function standaloneStatusHover() {

    console.log("inline hovering");

    standaloneActivityBlock.style.background = "#ADBFF0";
    standaloneDropdown.style.cursor = "pointer";
    standaloneDropdownIcon.src = "icons/hover-chevron.png"

};

function standaloneStatusLeave() {

    standaloneActivityBlock.style.background = "transparent";
    standaloneDropdownIcon.src = "icons/default-chevron.png"

};

function standaloneStatusActive() {

    if (!standaloneStatusDropdownActive) {

        standaloneDropdownIcon.src = "icons/active-chevron.png"


        standaloneDropdown.removeEventListener("mouseover", standaloneStatusHover);
        standaloneDropdown.removeEventListener("mouseleave", standaloneStatusLeave);

        standaloneStatusDropdownActive = true;

        let newDropdown = document.createElement("div");
        newDropdown.classList.add("menu-dropdown");

        newDropdown.innerHTML = `
            <div class="menu-option">
                <img src="status-glyph/active.png">
                <p class="menu-text">Active</p>
            </div>
            <div class="menu-option">
                <img src="status-glyph/warning.png">
                <p class="menu-text">Inactive</p>
            </div>
            <div class="menu-option">
                <img src="status-glyph/information.png">
                <p class="menu-text">Information</p>
            </div>
        
        `;

        standaloneDropdown.appendChild(newDropdown);

    } else {

        const menuDropdown = standaloneDropdown.querySelector(".menu-dropdown");

        standaloneStatusDropdownActive = false;

        menuDropdown.remove();
        
        standaloneDropdown.addEventListener("mouseover", standaloneStatusHover);
        standaloneDropdown.addEventListener("mouseleave", standaloneStatusLeave);

    }


}