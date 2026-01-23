/*
Copy Paste JavaScript - Portfolio
By: Luc Bassaler-Merpillat
On: January 22, 2026
*/

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("copyEmail");
    
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

            // Hide after like 2 seconds
            setTimeout(() => {
                popup.style.opacity = "0";
            }, 2000);
        }).catch(err => console.error("Failed to copy:", err));
    });
});
