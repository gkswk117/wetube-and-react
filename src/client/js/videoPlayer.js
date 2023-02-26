const video = document.querySelector("video")
const playBtn = document.getElementById("play")
const muteBtn = document.getElementById("mute")
const volumeInput = document.getElementById("volume")
const currentTime = document.getElementById("currentTime")
const totalTime = document.getElementById("totalTime")
const videoControls = document.getElementById("videoControls")

video.volume = localStorage.getItem("volume")
volumeInput.value = video.volume
video.muted = localStorage.getItem("mute")==="true" ? true : false
muteBtn.innerText = video.muted ? "Unmute" : "Mute"
if(video.muted){
    volumeInput.value = 0   
}

let timeoutID = null
let timeoutID2 = null

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
const formatTime = (seconds) => {
    if(new Date(seconds * 1000).toISOString().substring(14, 15)==="0"){
        return new Date(seconds * 1000).toISOString().substring(15, 19)    
    }else{
        return new Date(seconds * 1000).toISOString().substring(14, 19)
    }
}
const handleLoadedMetadata = () => {
    totalTime.innerText = formatTime(Math.floor(video.duration))
}
const handleTimeUpdate = () => {
    currentTime.innerText = formatTime(Math.floor(video.currentTime))
}
const handleMouseMove = () =>{
    if(timeoutID){
        clearTimeout(timeoutID)
        timeoutID= null;
    }
    if(timeoutID2){
        clearTimeout(timeoutID2)
        timeoutID2=null;
    }
    videoControls.classList.add("showing")
    timeoutID2 = setTimeout(()=>{videoControls.classList.remove("showing")}, 2000)
}
const handleMouseLeave = () =>{
    timeoutID = setTimeout(()=>{videoControls.classList.remove("showing")}, 2000)
}
playBtn.addEventListener("click", handlePlayClick)
muteBtn.addEventListener("click", handleMuteClick)
volumeInput.addEventListener("input", handleVolumeChange)
video.addEventListener("loadedmetadata", handleLoadedMetadata)
video.addEventListener("timeupdate", handleTimeUpdate)
video.addEventListener("mousemove", handleMouseMove)
video.addEventListener("mouseleave", handleMouseLeave)