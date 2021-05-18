var video; 

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime);
	if ((video.currentTime + 15) < video.duration){
		video.currentTime += 15;
		console.log("New location " + video.currentTime);
	}
	else {
		video.currentTime = 0;
		console.log("Going back to beginning");
	}
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	if (this.innerHTML === "Unmute") 
		this.innerHTML = "Mute";
	else 
		this.innerHTML = "Unmute";
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%";
	console.log("Volume " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});