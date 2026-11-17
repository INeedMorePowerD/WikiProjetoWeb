
/* Botar as músicas da playlist */

const playlist = [
    "music/song1.mp3",
    "music/song2.mp3",
    "music/song3.mp3",
    "music/song4.mp3"
];

/* Selecionar o elemento de áudio */

const audio = document.getElementById("background-music");

/* Selecionar o botão de reprodução */

const button = document.getElementById("music-button");

/* Verificar se a música está tocando */

let playing = false;

/* MÚSICA ALEATÓRIA */

let lastSong = -1;

function randomSong() {

    let index;

    do {
        index = Math.floor(Math.random() * playlist.length);
    } while (index === lastSong && playlist.length > 1);

    lastSong = index;

    return playlist[index];
}

/* Escolhe uma música e inicia sua reprodução */

function playMusic() {

    audio.src = randomSong();
    audio.play();

    playing = true;
    button.textContent = "⏸ Pause Music";
}

/* pausar */

function pauseMusic() {

    audio.pause();

    playing = false;
    button.textContent = "▶ Play Music";
}

/* Alterna entre tocar e pausar */

button.addEventListener("click", () => {

    if (playing) {
        pauseMusic();
    } else {
        audio.play();
        playing = true;
        button.textContent = "⏸ Pause Music";
    }

});

/*Quando uma música termina, seleciona outra aleatoriamente */

audio.addEventListener("ended", () => {

    audio.src = randomSong();
    audio.play();

});
