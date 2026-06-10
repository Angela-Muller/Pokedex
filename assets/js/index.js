const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btnMusic = document.getElementsByClassName('music')

const music = document.getElementById("music")

music.currentTime = 0;

btn1.addEventListener('click', () => {
    return page // ./pages/pokedex.html
})

btn2.addEventListener('click', () => {
    return page // ./pages/pokeBattle.html
})

btnMusic.addEventListener('click', music.play())
