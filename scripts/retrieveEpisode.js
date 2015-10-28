document.addEventListener('DOMContentLoaded', function() {
	episode = getEpisode();
});

function getEpisode(date) {
	date = date || getCurrentDate();

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState === 4 && xhttp.status === 200) {
			document.getElementById('EpisodeOfTheDay').innerHTML = xhttp.responseText;
		}
	}

	var url = 'days/' + date + '.html';
	xhttp.open('GET', url, true);
	xhttp.send();

	return date;
}

function getCurrentDate() {
	var date = new Date();
	var month = ("0" + (date.getMonth() + 1)).slice(-2);
	var day = ("0" + date.getDate()).slice(-2);
	return '' + month + day;
}