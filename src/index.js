const musicContainer = document.getElementById('music-container')

const playBtn = document.getElementById('play')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

const audio = document.getElementById('audio')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')
const title = document.getElementById('title')
const cover = document.getElementById('cover2')

const songs = ['Mila', 'VHS', 'Waves', 'Enthusiast']
let songIndex = 0


// music functions -----------------
// update song details
const loadSong = (song) => {
    title.innerText = song;
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.png`
}

// Load initial song
loadSong(songs[songIndex])

// Play
const playSong = () => {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fa-solid').classList.remove('fa-circle-play')
    playBtn.querySelector('i.fa-solid').classList.add('fa-circle-pause')
    
    audio.play()
}

// Pause
const pauseSong = () => {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fa-solid').classList.add('fa-circle-play')
    playBtn.querySelector('i.fa-solid').classList.remove('fa-circle-pause')
    
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
    console.log(progressPercent)
}

// Let user click on progress bar to change song progress
function setProgress(event) {
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
    
    // this event listener takes in two different functions depending on the music container's current class
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

    // Song ends
audio.addEventListener('ended', nextSong)
// --------------------------------------

particlesJS("particles-js", {"particles":{"number":{"value":200,"density":{"enable":true,"value_area":500}},"color":{"value":"#79c6e6"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3866823443998136,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":true,"speed":4.87218631240459,"size_min":0,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":194.88745249618358,"line_linked":{"opacity":0.09871505898224782}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":97.44372624809179,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true})