/*
Main JavaScript - Portfolio
By: Luc Bassaler-Merpillat
On: December 22, 2025
*/

/* Tabbed Content Functionality */
function openTab(evt, tabName) {
    const isDesktop = window.matchMedia("(min-width: 64rem)").matches;

    const tabcontent = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablinks");

    // MOBILE: behave like normal tabs
    if (!isDesktop) {
        for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        }
    }

    // Desktop: only hide right-side panels
    if (isDesktop) {
        document.getElementById("projects").style.display = "none";
        document.getElementById("skills").style.display = "none";
    }

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "grid";
    evt.currentTarget.classList.add("active");
}

function openDefaultTab() {
    const isDesktop = window.matchMedia("(min-width: 64rem)").matches;

    if (isDesktop) {
        document.getElementById("projectsTab").click();
    } else {
        document.getElementById("homeTab").click();
    }
}

openDefaultTab();
window.addEventListener("resize", openDefaultTab);
