const video = document.querySelector("video")
const playBtn = document.getElementById("play")
const muteBtn = document.getElementById("mute")
const time = document.getElementById("time")
const volume = document.getElementById("volume")

const handlePlayClick = () =>{
    // if the video is playing, pause it.
    // else play the video.
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

const handlePause = ()=>{
    playBtn.innerText = "Play"
}

const handlePlay =()=>{
    playBtn.innerText = "Pause"
}

const handleMute = () =>{
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

playBtn.addEventListener("click",handlePlayClick)
muteBtn.addEventListener("click", handleMute)
video.addEventListener("pause", handlePause)
video.addEventListener("play", handlePlay)