const musicContainer = document.getElementById('music-container')

const playBtn = document.getElementById('play')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

const audio = document.getElementById('audio')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')
const title = document.getElementById('title')
const cover = document.getElementById('cover')

const songs = ['hey', 'summer', 'ukulele']
let songIndex = 2

// music functions -----------------
const loadSong = (song) => {
    title.innerText = song;
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

    // Load initial song
loadSong(songs[songIndex])

    // Play
const playSong = () => {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

    // Pause
const pauseSong = () => {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

    // Previous Song
const prevSong = () => {
    songIndex--

    if (songIndex < 0) {
        //last song if going back from first song
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong()
}

    // Next Song
const nextSong = () => {
    songIndex++

    if (songIndex > songs.length - 1) {
        // first song if going next from last song
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()
}

    // Moving progress bar
const updateProgress = (event) => {
    const {duration, currentTime} = event.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

    // Let user click on progress bar to change song progress
const setProgress = (event) => {
    const width = this.clientWidth
    const clickX = event.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}
//--------------------------------------


// event listeners ---------------------
    // Play and pause
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

    // change song, back or forward
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

    // moving progress bar
audio.addEventListener('timeupdate', updateProgress)

    // click on progress bar
progressContainer.addEventListener('click', setProgress)
// --------------------------------------