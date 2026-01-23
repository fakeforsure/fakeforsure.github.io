/*
Light Box JavaScript - Portfolio
By: Luc Bassaler-Merpillat
On: January 22, 2026
*/

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
