/*
User JavaScript - Portfolio
By: Luc Bassaler-Merpillat
On: September 15, 2026
*/

/* Copy Paste */
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("copyEmail");
    if (!button) return;
    
    // Create popup div
    const popup = document.createElement("div");
    popup.id = "copypastePopup";
    popup.textContent = "Copied to clipboard!";
    document.body.appendChild(popup);

    button.addEventListener("click", () => {
        const email = "lpb3@sfu.ca"; // The only one they need

        // Copy to clipboard
        navigator.clipboard.writeText(email).then(() => {
            // Show popup
            popup.style.opacity = "1";

            // Hide after, like, 2 seconds
            setTimeout(() => {
                popup.style.opacity = "0";
            }, 2000);
        }).catch(err => console.error("Failed to copy:", err));
    });
});

/* Filter Content Functionality */
function filterSkills(evt, category) {
    const buttons = document.querySelectorAll(".filterlist-filters .tablinks");
    buttons.forEach(btn => btn.classList.remove("active"));
    evt.currentTarget.classList.add("active");

    const cards = document.querySelectorAll("#filterlist .card");
    cards.forEach(card => {
        const categories = card.dataset.category.split(' '); 
        if (category === "all") {
            card.style.display = "block";
        } else if (categories.includes(category)) {
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

/* Light Box */
document.addEventListener("click", (e) => {
    const clickedImage = e.target.classList.contains("zoomable")
        ? e.target
        : e.target.closest("figure")?.querySelector("img.zoomable");

    if (e.target.classList.contains("image-lightbox")) {
        e.target.remove();
        return;
    }

    if (!clickedImage) return;

    if (clickedImage.closest(".image-lightbox")) {
        clickedImage.parentElement.remove();
        return;
    }

    const lightbox = document.createElement("div");
    lightbox.className = "image-lightbox";

    const zoomedImg = document.createElement("img");
    zoomedImg.src = clickedImage.src;
    zoomedImg.alt = clickedImage.alt || "";

    lightbox.appendChild(zoomedImg);
    document.body.appendChild(lightbox);

    // Create popup div
    const popup = document.createElement("div");
    popup.id = "copypastePopup";
    popup.textContent = "Copied to clipboard!";
    document.body.appendChild(popup);

    // Click anywhere else to close
    showPopup("Click anywhere else to exit");
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.querySelector(".image-lightbox")?.remove();
    }
});

function showPopup(message) {
    const popup = document.createElement("div");
    popup.id = "copypastePopup"; // Reuse of copypaste popup styles hehe
    popup.textContent = message;
    document.body.appendChild(popup);
    popup.style.opacity = "1";
    setTimeout(() => {popup.style.opacity = "0";}, 2000);
}
