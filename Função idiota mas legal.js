
/* Botar as músicas da playlist */

const playlist = [
    "../Songs/Gotta Go  FNF Vs Sonic.EXE Unofficial - laik7u7.mp3",
    "../Songs/FNF Myths Of Yamaha (Vs No More Innocence) - Genesis (FC) - Soulegal.mp3",
    "../Songs/Faker & Black Sun (Feat. Saster & Doge) - VS Sonic.exe UST - awe.mp3",
    "../Songs/ZIPPERBOMB SONIC LEGACY OST (ft. churgneygurgney9895, therealhassenx) [+FLP] - Ironik.mp3",
    "../Songs/Execution (D-Sides) WITH LYRICS  FNF D-Sides Cover  ft churgneygurgney9895 - MaimyMayo.mp3",
    "../Songs/Thriller Gen Encore - Revisualized FLASHING LIGHTS WARNING - Springless.mp3",
    "../Songs/おやすみカンファレンス／重音テト,音街ウナ - まちーしゃ _ machisha.mp3",
    "../Songs/Static ft. Hatsune Miku - FLAVOR FOLEY.mp3",
    "../Songs/DECO27 - モニタリング feat. 初音ミク - DECO27.mp3",
    "../Songs/A QUEDA - GLORIA GROOVE【REMIX FEAT. HATSUNE MIKU V4X】 初音ミク - Im G Felipe.mp3",
    "../Songs/【MIKU V4X SOLID】 Lost One's Weeping 【Cover】 - Rishie-P.mp3",
    "../Songs/雑魚 _ 亞北ネル - 柊マグネタイト (1).mp3",
    "../Songs/ハチ  MV「マトリョシカ」HACHI _ MATORYOSHKA - Kenshi Yonezu  米津玄師.mp3"
];

/* Selecionar os elementos */

const audio = document.getElementById("background-music");
const button = document.getElementById("music-button");

/* Verificar se os elementos existem */

if (audio && button) {

    let playing = false;
    let lastSong = -1;

    /* MÚSICA ALEATÓRIA */

    function randomSong() {

        let index;

        do {
            index = Math.floor(Math.random() * playlist.length);
        } while (index === lastSong && playlist.length > 1);

        lastSong = index;

        return playlist[index];
    }

    /* Escolher e reproduzir música */

   function playMusic() {

    audio.src = randomSong();
    audio.volume = 0.03;

    audio.play()
        .then(() => {
            playing = true;
            button.textContent = "⏸ Pause Music";
        })
        .catch(error => {
            playing = false;
            button.textContent = "▶ Play Music";
            console.error("Erro ao reproduzir música:", error);
        });

}
    /* Pausar */

    function pauseMusic() {

        audio.pause();

        playing = false;
        button.textContent = "▶ Play Music";
    }

    /* Alternar reprodução */

    button.addEventListener("click", () => {

        if (playing) {
            pauseMusic();

        } else {

            if (!audio.currentSrc) {
                playMusic();

            } else {
                audio.play();

                playing = true;
                button.textContent = "⏸ Pause Music";
            }
        }

    });

    /* Quando uma música termina, escolher outra */

    audio.addEventListener("ended", () => {

    playing = false;

    audio.src = randomSong();
    audio.volume = 0.03;

    audio.play()
        .then(() => {
            playing = true;
            button.textContent = "⏸ Pause Music";
        })
        .catch(error => {
            console.error("Erro ao iniciar a próxima música:", error);
        });

});

    /* Mostrar erros de carregamento no console */

    audio.addEventListener("error", () => {
        console.error("Não foi possível carregar a música:", audio.src);
    });

}
