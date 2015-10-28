document.addEventListener('DOMContentLoaded', function() {
	document.addEventListener('click', function(e) {
		if (e.target.nodeName === 'A' && e.target.getAttribute('role') === 'clip') {
			e.preventDefault();
			console.log("HERE");

			readableTime = e.target.innerHTML.split(':');
			var seconds = parseInt(readableTime.pop());
			var minutes = parseInt(readableTime.pop());
			var hours = parseInt(readableTime.pop()) || 0;

			var index = seconds + (60 * minutes) + (3600 * hours);

			var audioClip = document.querySelector('audio');
			audioClip.currentTime = index;
			audioClip.play();
		}
	});
});