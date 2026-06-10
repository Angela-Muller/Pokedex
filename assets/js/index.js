const btnMusic = document.querySelector('.music')

const music = document.getElementById("music")

music.currentTime = 0;

btnMusic.addEventListener('click', () => {
    music.play()
})