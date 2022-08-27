function callPage(sUrlPage) {

	xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4)
			console.log("Status: 4 (complete)<br />");

		// récupère la réponse du serveur
		if (xhr.readyState == 4 && xhr.status == 200) {
			console.log("Fichier transmis");

			document.getElementById("reponseServeur").innerHTML = xhr.responseText;
		}
		// la page n'existe pas sur le serveur
		else if (xhr.readyState == 4) {
			document.getElementById("reponseServeur").innerHTML = "<h1>La page n'est pas disponible.<br><br>Erreur : " + xhr.status + "</h1>";
		}
	}
	console.log("console log de " + xhr.responseText);
	xhr.open("GET", sUrlPage, true);
	xhr.send(null);
}
callPage("./skills.html");