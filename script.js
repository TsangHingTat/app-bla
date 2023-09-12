// Get a reference to the video element
const video = document.getElementById('myVideo');

// Add an event listener for when the video ends
video.addEventListener('ended', function() {
    // When the video ends, rewind it to the beginning and play it again
    video.currentTime = 0;
    video.play();
});