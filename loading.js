const loadingDiv = document.querySelector(".loading");

function loading() {
    if (loadingDiv.innerHTML.length >= 3) {
        loadingDiv.innerHTML = "";
    } else {
        loadingDiv.innerHTML += ".";
    }

}

window.setInterval(loading, 500);