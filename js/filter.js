/*
Filter JavaScript - Portfolio
By: Luc Bassaler-Merpillat
On: December 22, 2025
*/

/* Filter Content Functionality */
function filterSkills(evt, category) {
    const buttons = document.querySelectorAll(".filterlist-filters .tablinks");
    buttons.forEach(btn => btn.classList.remove("active"));
    evt.currentTarget.classList.add("active");

    const cards = document.querySelectorAll("#filterlist .card");
    cards.forEach(card => {
        if (category === "all") {
            card.style.display = "block";
        } else if (card.dataset.category === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    history.replaceState(null, "", `#${category}`);
}

function openSkillsFromHash() {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const button = document.querySelector(`.filterlist-filters .tablinks[onclick*="'${hash}'"]`);
    if (button) button.click();
}

window.addEventListener("load", openSkillsFromHash);
