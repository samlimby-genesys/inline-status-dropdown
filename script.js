const standaloneDropdown = document.getElementById("standalone-dropdown");
const inlineDropdown = document.getElementById("inline-status-dropdown");

let statusDropdownActive = false;

standaloneDropdown.addEventListener("mouseover", statusHover);
standaloneDropdown.addEventListener("mouseleave", statusLeave);
standaloneDropdown.addEventListener("click", statusActive);

inlineDropdown.addEventListener("mouseover", statusHover);
inlineDropdown.addEventListener("mouseleave", statusLeave);
inlineDropdown.addEventListener("click", statusActive);



// logic functions

function statusHover(event) {

    if (event.target.src === "icons/default-chevron.png" || "icons/active-chevron.png") {
        event.target.src = "icons/hover-chevron.png";
    }

    console.log(event.target);

    event.target.style.cursor = "pointer";
    event.target.style.background = "#D5DEF7"

};

function statusLeave(event) {

    if (event.target.src === "icons/hover-chevron.png" || "icons/active-chevron.png") {
        event.target.src = "icons/default-chevron.png";
    }

    event.target.style.background = "#fff"
};

function statusActive(event) {

    if (!statusDropdownActive) {

        if (event.target.src === "icons/hover-chevron.png" || "icons/default-chevron.png") {
            event.target.src = "icons/active-chevron.png";
        }


        event.target.removeEventListener("mouseover", statusHover);
        event.target.removeEventListener("mouseleave", statusLeave);
    
        event.target.style.background = "#ADBFF0";
        statusDropdownActive = true;

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

        event.target.appendChild(newDropdown);

    } else {

        const menuDropdown = event.target.querySelector(".menu-dropdown");
        console.log(menuDropdown);

        statusDropdownActive = false;

        menuDropdown.remove();
        
        event.target.addEventListener("mouseover", statusHover);
        event.target.addEventListener("mouseleave", statusLeave);

    }


}