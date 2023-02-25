const play1 = document.querySelector(".one")
const play2 = document.querySelector(".two")
const play3 = document.querySelector(".three")
const play4 = document.querySelector(".four")
const play5 = document.querySelector(".five")
const play6 = document.querySelector(".six")
const play7 = document.querySelector(".seven")
const play8 = document.querySelector(".eight")

const audio1 = document.querySelector(".a")
const audio2 = document.querySelector(".b")
const audio3 = document.querySelector(".c")
const audio4 = document.querySelector(".d")
const audio5 = document.querySelector(".e")
const audio6 = document.querySelector(".f")
const audio7 = document.querySelector(".g")
const audio8 = document.querySelector(".h")

const valume = document.querySelector(".valume")
const voice = document.querySelector(".voice")

valume.onclick = () =>
{
    if (valume.value != 100 && valume.value >= 10)
    {
        voice.textContent = valume.value
        audio1.volume = '.' + valume.value
        audio2.volume = '.' + valume.value
        audio3.volume = '.' + valume.value
        audio4.volume = '.' + valume.value
        audio5.volume = '.' + valume.value
        audio6.volume = '.' + valume.value
        audio7.volume = '.' + valume.value
        audio8.volume = '.' + valume.value
    }
    else if (valume.value < 10)
    {
        voice.textContent = valume.value
        audio1.volume = '.0' + valume.value
        audio2.volume = '.0' + valume.value
        audio3.volume = '.0' + valume.value
        audio4.volume = '.0' + valume.value
        audio5.volume = '.0' + valume.value
        audio6.volume = '.0' + valume.value
        audio7.volume = '.0' + valume.value
        audio8.volume = '.0' + valume.value
    }
    else 
    {
        voice.textContent = valume.value
        audio1.volume = 1
        audio2.volume = 1
        audio3.volume = 1
        audio4.volume = 1
        audio5.volume = 1
        audio6.volume = 1
        audio7.volume = 1
        audio8.volume = 1
    }
}

audio1.onended = () =>
{
    audio2.currentTime = 0
    audio2.play()
    play1.classList.remove('fa-pause')
    play1.classList.add('fa-play')
    play2.classList.remove('fa-play')
    play2.classList.add('fa-pause')
}

audio2.onended = () =>
{
    audio3.currentTime = 0
    audio3.play()
    play2.classList.remove('fa-pause')
    play2.classList.add('fa-play')
    play3.classList.remove('fa-play')
    play3.classList.add('fa-pause')
}

audio3.onended = () =>
{
    audio4.currentTime = 0
    audio4.play()
    play3.classList.remove('fa-pause')
    play3.classList.add('fa-play')
    play4.classList.remove('fa-play')
    play4.classList.add('fa-pause')
}

audio4.onended = () =>
{
    audio5.currentTime = 0
    audio5.play()
    play4.classList.remove('fa-pause')
    play4.classList.add('fa-play')
    play5.classList.remove('fa-play')
    play5.classList.add('fa-pause')
}

audio5.onended = () =>
{
    audio6.currentTime = 0
    audio6.play()
    play5.classList.remove('fa-pause')
    play5.classList.add('fa-play')
    play6.classList.remove('fa-play')
    play6.classList.add('fa-pause')
}

audio6.onended = () =>
{
    audio7.currentTime = 0
    audio7.play()
    play6.classList.remove('fa-pause')
    play6.classList.add('fa-play')
    play7.classList.remove('fa-play')
    play7.classList.add('fa-pause')
}

audio7.onended = () =>
{
    audio8.currentTime = 0
    audio8.play()
    play7.classList.remove('fa-pause')
    play7.classList.add('fa-play')
    play8.classList.remove('fa-play')
    play8.classList.add('fa-pause')
}

play1.onclick = () =>
{
    if (!audio2.paused || !audio3.paused || !audio4.paused || !audio5.paused || !audio6.paused || !audio7.paused || !audio8.paused)
    {
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio6.pause()
        audio7.pause()
        audio8.pause()
        audio1.currentTime = 0
        audio1.play()
        play2.classList.remove('fa-pause')
        play2.classList.add('fa-play')
        play3.classList.remove('fa-pause')
        play3.classList.add('fa-play')
        play4.classList.remove('fa-pause')
        play4.classList.add('fa-play')
        play5.classList.remove('fa-pause')
        play5.classList.add('fa-play')
        play6.classList.remove('fa-pause')
        play6.classList.add('fa-play')
        play7.classList.remove('fa-pause')
        play7.classList.add('fa-play')
        play8.classList.remove('fa-pause')
        play8.classList.add('fa-play')
        play1.classList.remove('fa-play')
        play1.classList.add('fa-pause')
    }
    else if (audio1.paused)
    {
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio6.pause()
        audio7.pause()
        audio8.pause()
        audio1.play()
        play1.classList.remove('fa-play')
        play1.classList.add('fa-pause')
    }
    else 
    {
        audio1.pause()
        play1.style.backgroundColor = ''
        play1.classList.remove('fa-pause')
        play1.classList.add('fa-play')
    }
}

play2.onclick = () =>
{
    if (!audio1.paused || !audio3.paused || !audio4.paused || !audio5.paused || !audio6.paused || !audio7.paused || !audio8.paused)
    {
        play8.style.backgroundColor = ''
        audio1.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio6.pause()
        audio7.pause()
        audio8.pause()
        audio2.currentTime = 0
        audio2.play()
        play1.classList.remove('fa-pause')
        play1.classList.add('fa-play')
        play3.classList.remove('fa-pause')
        play3.classList.add('fa-play')
        play4.classList.remove('fa-pause')
        play4.classList.add('fa-play')
        play5.classList.remove('fa-pause')
        play5.classList.add('fa-play')
        play6.classList.remove('fa-pause')
        play6.classList.add('fa-play')
        play7.classList.remove('fa-pause')
        play7.classList.add('fa-play')
        play8.classList.remove('fa-pause')
        play8.classList.add('fa-play')
        play2.classList.remove('fa-play')
        play2.classList.add('fa-pause')
    }
    else if (audio2.paused)
    {
        audio1.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio6.pause()
        audio7.pause()
        audio8.pause()
        audio2.play()
        play2.classList.remove('fa-play')
        play2.classList.add('fa-pause')
    }
    else 
    {
        audio2.pause()
        play2.classList.remove('fa-pause')
        play2.classList.add('fa-play')

    }
}

play3.onclick = () =>
{
    if (!audio1.paused || !audio2.paused || !audio4.paused || !audio5.paused || !audio6.paused || !audio7.paused || !audio8.paused)
    {
        audio2.pause()
        audio1.pause()
        audio4.pause()
        audio5.pause()
        audio6.pause()
        audio7.pause()
        audio8.pause()
        audio3.currentTime = 0
        audio3.play()
        play2.classList.remove('fa-pause')
        play2.classList.add('fa-play')
        play1.classList.remove('fa-pause')
        play1.classList.add('fa-play')
        play4.classList.remove('fa-pause')
        play4.classList.add('fa-play')
        play5.classList.remove('fa-pause')
        play5.classList.add('fa-play')
        play6.classList.remove('fa-pause')
        play6.classList.add('fa-play')
        play7.classList.remove('fa-pause')
        play7.classList.add('fa-play')
        play8.classList.remove('fa-pause')
        play8.classList.add('fa-play')
        play3.classList.remove('fa-play')
        play3.classList.add('fa-pause')
    }
    else if (audio3.paused)
    {
        audio2.pause()
        audio1.pause()
        audio4.pause()
        audio5.pause()
        audio6.pause()
        audio7.pause()
        audio8.pause()
        audio3.play()
        play3.classList.remove('fa-play')
        play3.classList.add('fa-pause')
    }
    else 
    {
        audio3.pause()
        play3.classList.remove('fa-pause')
        play3.classList.add('fa-play')
    }
}

play4.onclick = () =>
{
    if (!audio1.paused || !audio2.paused || !audio3.paused || !audio5.paused || !audio6.paused || !audio7.paused || !audio8.paused)
    {
        audio2.pause()
        audio3.pause()
        audio1.pause()
        audio5.pause()
        audio6.pause()
        audio7.pause()
        audio8.pause()
        audio4.currentTime = 0
        audio4.play()
        play2.classList.remove('fa-pause')
        play2.classList.add('fa-play')
        play3.classList.remove('fa-pause')
        play3.classList.add('fa-play')
        play1.classList.remove('fa-pause')
        play1.classList.add('fa-play')
        play5.classList.remove('fa-pause')
        play5.classList.add('fa-play')
        play6.classList.remove('fa-pause')
        play6.classList.add('fa-play')
        play7.classList.remove('fa-pause')
        play7.classList.add('fa-play')
        play8.classList.remove('fa-pause')
        play8.classList.add('fa-play')
        play4.classList.remove('fa-play')
        play4.classList.add('fa-pause')
    }
    else if (audio4.paused)
    {
        audio2.pause()
        audio3.pause()
        audio1.pause()
        audio5.pause()
        audio6.pause()
        audio7.pause()
        audio8.pause()
        audio4.play()
        play4.classList.remove('fa-play')
        play4.classList.add('fa-pause')
    }
    else 
    {
        audio4.pause()
        play4.classList.remove('fa-pause')
        play4.classList.add('fa-play')
    }
}

play5.onclick = () =>
{
    if (!audio1.paused || !audio2.paused || !audio3.paused || !audio4.paused || !audio6.paused || !audio7.paused || !audio8.paused)
    {
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio1.pause()
        audio6.pause()
        audio7.pause()
        audio8.pause()
        audio5.currentTime = 0
        audio5.play()
        play2.classList.remove('fa-pause')
        play2.classList.add('fa-play')
        play3.classList.remove('fa-pause')
        play3.classList.add('fa-play')
        play4.classList.remove('fa-pause')
        play4.classList.add('fa-play')
        play1.classList.remove('fa-pause')
        play1.classList.add('fa-play')
        play6.classList.remove('fa-pause')
        play6.classList.add('fa-play')
        play7.classList.remove('fa-pause')
        play7.classList.add('fa-play')
        play8.classList.remove('fa-pause')
        play8.classList.add('fa-play')
        play5.classList.remove('fa-play')
        play5.classList.add('fa-pause')
    }
    else if (audio5.paused)
    {
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio1.pause()
        audio6.pause()
        audio7.pause()
        audio8.pause()
        audio5.play()
        play5.classList.remove('fa-play')
        play5.classList.add('fa-pause')
    }
    else 
    {
        audio5.pause()
        play5.classList.remove('fa-pause')
        play5.classList.add('fa-play')
    }
}

play6.onclick = () =>
{
    if (!audio1.paused || !audio2.paused || !audio3.paused || !audio4.paused || !audio5.paused || !audio7.paused || !audio8.paused)
    {
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio1.pause()
        audio7.pause()
        audio8.pause()
        audio6.currentTime = 0
        audio6.play()
        play6.classList.remove('fa-play')
        play6.classList.add('fa-pause')
    }
    else if (audio6.paused)
    {
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio1.pause()
        audio7.pause()
        audio8.pause()
        audio6.play()
        play2.classList.remove('fa-pause')
        play2.classList.add('fa-play')
        play3.classList.remove('fa-pause')
        play3.classList.add('fa-play')
        play4.classList.remove('fa-pause')
        play4.classList.add('fa-play')
        play5.classList.remove('fa-pause')
        play5.classList.add('fa-play')
        play1.classList.remove('fa-pause')
        play1.classList.add('fa-play')
        play7.classList.remove('fa-pause')
        play7.classList.add('fa-play')
        play8.classList.remove('fa-pause')
        play8.classList.add('fa-play')
        play6.classList.remove('fa-play')
        play6.classList.add('fa-pause')
    }
    else 
    {
        audio6.pause()
        play6.classList.remove('fa-pause')
        play6.classList.add('fa-play')
    }
}

play7.onclick = () =>
{
    if (!audio1.paused || !audio2.paused || !audio3.paused || !audio4.paused || !audio5.paused || !audio6.paused || !audio8.paused)
    {
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio6.pause()
        audio1.pause()
        audio8.pause()
        audio7.currentTime = 0
        audio7.play()
        play2.classList.remove('fa-pause')
        play2.classList.add('fa-play')
        play3.classList.remove('fa-pause')
        play3.classList.add('fa-play')
        play4.classList.remove('fa-pause')
        play4.classList.add('fa-play')
        play5.classList.remove('fa-pause')
        play5.classList.add('fa-play')
        play6.classList.remove('fa-pause')
        play6.classList.add('fa-play')
        play1.classList.remove('fa-pause')
        play1.classList.add('fa-play')
        play8.classList.remove('fa-pause')
        play8.classList.add('fa-play')
        play7.classList.remove('fa-play')
        play7.classList.add('fa-pause')
    }
    else if (audio7.paused)
    {
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio6.pause()
        audio1.pause()
        audio8.pause()
        audio7.play()
        play7.classList.remove('fa-play')
        play7.classList.add('fa-pause')
    }
    else 
    {
        audio7.pause()
        play7.classList.remove('fa-pause')
        play7.classList.add('fa-play')
    }
}

play8.onclick = () =>
{
    if (!audio1.paused || !audio2.paused || !audio3.paused || !audio4.paused || !audio5.paused || !audio6.paused || !audio7.paused)
    {
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio6.pause()
        audio7.pause()
        audio1.pause()
        audio8.currentTime = 0
        audio8.play()
        play2.classList.remove('fa-pause')
        play2.classList.add('fa-play')
        play3.classList.remove('fa-pause')
        play3.classList.add('fa-play')
        play4.classList.remove('fa-pause')
        play4.classList.add('fa-play')
        play5.classList.remove('fa-pause')
        play5.classList.add('fa-play')
        play6.classList.remove('fa-pause')
        play6.classList.add('fa-play')
        play7.classList.remove('fa-pause')
        play7.classList.add('fa-play')
        play1.classList.remove('fa-pause')
        play1.classList.add('fa-play')
        play8.classList.remove('fa-play')
        play8.classList.add('fa-pause')
    }
    else if (audio8.paused)
    {
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio6.pause()
        audio7.pause()
        audio1.pause()
        audio8.play()
        play8.classList.remove('fa-play')
        play8.classList.add('fa-pause')
    }
    else 
    {
        audio8.pause()
        play8.classList.remove('fa-pause')
        play8.classList.add('fa-play')
    }
}
