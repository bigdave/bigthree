document.addEventListener('DOMContentLoaded', function() {
	document.addEventListener('click', function(e) {
		if (e.target.nodeName === 'A' && e.target.dataset.index) {
			e.preventDefault();

			var audioClip = document.querySelector('audio');
			audioClip.currentTime = parseInt(e.target.dataset.index);
			audioClip.play();
		}
	});
});