// 1.0.1 ver
const video = document.getElementById('myVideo');

if (video.play) {
  video.play().catch(function(error) {
    console.error('Autoplay failed:', error);
  });
}
video.addEventListener('ended', function() {
  video.currentTime = 0;
  video.play();
});
