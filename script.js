const video = document.getElementById('myVideo');

video.addEventListener('ended', function() {
    video.currentTime = 0;
    video.play();
});