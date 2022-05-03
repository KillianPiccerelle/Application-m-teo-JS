let ville = "Tokyo";

recevoirTemp(ville);

let changerVille = document.querySelector("#changer");

changerVille.addEventListener("click", () => {
    ville = prompt("Veuillez renseigner la nouvelle ville : ");
    recevoirTemp(ville);
});

function recevoirTemp(ville) {
    // Get
    const url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        ville +
        "&appid="+yourAPIId+"=metric";

    let requete = new XMLHttpRequest(); // Créer un objet
    requete.open("GET", url);
    requete.responseType = "json";
    requete.send();

    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                let temperature = reponse.main.temp;
                console.log(temperature);
                document.querySelector("#temperature_label").textContent = temperature;
                document.querySelector("#ville").textContent = ville;
            } else {
                alert("un problème est survenu, reviens plus tard");
            }
        }
    };
}
