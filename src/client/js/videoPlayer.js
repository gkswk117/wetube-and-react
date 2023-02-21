const video = document.querySelector("video")
const playBtn = document.getElementById("play")
const muteBtn = document.getElementById("mute")
const time = document.getElementById("time")
const volumeInput = document.getElementById("volume")

video.volume = localStorage.getItem("volume")
volumeInput.value = video.volume
video.muted = localStorage.getItem("mute")==="true" ? true : false
muteBtn.innerText = video.muted ? "Unmute" : "Mute"
if(video.muted){
    volumeInput.value = 0   
}
const handlePlayClick = () =>{
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
    playBtn.innerText = video.paused ? "Play" : "Pause"
}
const handleMuteClick = () =>{
    video.muted = video.muted ? false : true
    muteBtn.innerText = video.muted ? "Unmute":"Mute"
    if(video.muted){
        volumeInput.value = 0   
    }else{
        if(video.volume===0){
            video.volume = 0.1
        }
        volumeInput.value = video.volume
    }
    localStorage.setItem("volume", video.volume)
    localStorage.setItem("mute", video.muted)
}
const handleVolumeChange = (event) => {
    video.volume= event.target.value
    if(video.muted){
        video.muted = false
        muteBtn.innerText = "Mute"
    }
    if(video.volume===0){
        video.muted = true
        muteBtn.innerText = "Unmute"
    }
    localStorage.setItem("volume", video.volume)
    localStorage.setItem("mute", video.muted)
}
playBtn.addEventListener("click", handlePlayClick)
muteBtn.addEventListener("click", handleMuteClick)
volumeInput.addEventListener("input", handleVolumeChange)