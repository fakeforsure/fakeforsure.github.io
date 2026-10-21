/*
Play Music - Fakeforsure
By: Alice Bassaler-Merpillat
On: August 7, 2025
*/

function play() {
    var audio = document.getElementById("audio");
    // audio.volume = 0.5;
    if (audio.paused) {
        audio.play();
        // document.body.style.background = "linear-gradient(30deg, var(--purple), var(--dark) 30%, var(--black))";
        isPlaying = true;
        svg.innerHTML = activeSvg;
    } else {
        audio.pause();
        audio.currentTime = 0;
        // document.body.style.background = "linear-gradient(30deg, var(--light), var(--pink) 30%, var(--purple), var(--dark))";
        isPlaying = false;
        svg.innerHTML = defaultSvg;
    }
}

var svg = document.querySelector('.svg');
var isPlaying = true;
var defaultSvg = `
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
            `.trim();
var activeSvg = `
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />
	        <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />
            `.trim();

svg.setAttribute('tabindex', '0');

svg.addEventListener('click', () => {
    play();
});

svg.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        play();
    }
});
