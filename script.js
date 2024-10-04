/* 
variable uhr
getTime function
1st timer
*/

/*
DOM => Document Object Model
=> mein HTML-Dokument
=>Die im Browser gerenderte Version meines HTML-Dokuments 
*/
/* condt => Konstante Variable => Ändert sich nicht*/
const clockElem = document.getElementById('clock');
/* let => Modifizierbare Variable => Kann geändert werden*/
let x = 10; /* => Number */
/* camelCase*/
/*public string GetTime() {...}*/
function getTime() {
    /*let date = new Date();
    let time = date.toLocaleTimeString();
    clockElem.innerText = time;*/
    let date = new Date();
    let options = {hour: 'numeric', minute: 'numeric'};
    let time = date.toLocaleTimeString([], options);
    clockElem.innerText = time;
} 
/* setInterval(getTime, 100) */

setInterval(() => {
    /*let date = new Date();
    let time = date.toLocaleTimeString();
    clockElem.innerText = time;*/
    let date = new Date();
    let options = {hour: 'numeric', minute: 'numeric'};
    let time = date.toLocaleTimeString([], options);
    clockElem.innerText = time;
}, 100);

const searchElem = document.getElementById('search');
const searchFieldElem = document.getElementById('search-field');
const searchString = "https://duckduckgo.com/?q=";


/*Eventlistener => Suchfeld öffnen SPACEBAR*/
document.addEventListener("keydown", event => {
    if(event.ctrlKey && event.key === "f") {
        event.preventDefault();
        searchFieldElem.value = '';
        searchElem.style.display = 'flex';
        searchFieldElem.focus();
    }else if (event.key == 'Escape') {
        searchElem.blur();
        searchElem.style.display = 'none';
    }
    
});

searchFieldElem.addEventListener("keydown", event => {
    if (event.key =="Enter") {
        let query = searchFieldElem.value;
        window.open(searchString + query, "_blank");
        searchFieldElem.value = '';
    }
});

/* EventListener => suche starten ENTER*/

/* EventListener => suchfeld schließt ESC*/