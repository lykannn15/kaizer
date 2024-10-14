document.addEventListener("DOMContentLoaded", function() {
    const songTitle = document.getElementById("song-title");
    const backgroundMusic = document.getElementById("background-music");
    const lyrics = document.querySelectorAll('.lyric');
    let currentLyricIndex = 0;

    function showNextLyric() {
        lyrics.forEach((lyric, index) => {
            lyric.style.transform = `translateY(${index - currentLyricIndex}00%)`;
            lyric.style.opacity = (index === currentLyricIndex) ? '1' : '0';
        });

        currentLyricIndex = (currentLyricIndex + 1) % lyrics.length;
    }

    songTitle.addEventListener("click", function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            setInterval(showNextLyric, 2000); // Ganti kalimat lirik tiap 2 detik
        } else {
            backgroundMusic.pause();
        }
    });

    songTitle.addEventListener("dblclick", function() {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
    });

    showNextLyric(); // Tampilkan lirik pertama saat halaman dimuat
});