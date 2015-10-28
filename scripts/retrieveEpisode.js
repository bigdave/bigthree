document.addEventListener('DOMContentLoaded', function() {
	episode = getEpisode();

	var searchInput = document.querySelector('#Search input');
	searchInput.value = getTodaysDate();

	searchInput.addEventListener('change', function() {
		var date = this.value;
		getEpisode(date.substr(5, 2) + date.substr(8, 2));
	}.bind(searchInput));
});

function getTodaysDate() {
	var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    return yyyy + '-' + mm + '-' + dd;
}

function getEpisode(date) {
	date = date || getCurrentDate();

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState === 4 && xhttp.status === 200) {
			document.getElementById('EpisodeOfTheDay').innerHTML = xhttp.responseText;
		} else if (xhttp.readyState === 4 && xhttp.status === 404) {
			getMissingEpisode();
		}
	}

	var url = 'days/' + date + '.html';
	xhttp.open('GET', url, true);
	xhttp.send();

	return date;
}

function getMissingEpisode() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState === 4 && xhttp.status === 200) {
			document.getElementById('EpisodeOfTheDay').innerHTML = xhttp.responseText;
		}
	}

	var url = 'days/default.html';
	xhttp.open('GET', url, true);
	xhttp.send();
}

function getCurrentDate() {
	var date = new Date();
	var month = ("0" + (date.getMonth() + 1)).slice(-2);
	var day = ("0" + date.getDate()).slice(-2);
	return '' + month + day;
}