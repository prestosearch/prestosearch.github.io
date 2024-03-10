const thmasButton = document.querySelector('#thmas-button');
const thmasInputText = document.querySelector('#thmas-input-text');
    
thmasButton.addEventListener('click', clickButton);
    
function clickButton() {
    var e = document.getElementById("choo");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;

    if (value === "google") {
        var URL = "https://www.google.com/search?q=" + thmasInputText.value;
        var win = window.open(URL, "_blank");
    }
    if (value === "yahoo") {
        var URL = "https://search.yahoo.com/search?p=" + thmasInputText.value;
        var win = window.open(URL, "_blank");
    }
    if (value === "debian") {
        var URL = "https://search.debian.org/cgi-bin/omega?DB=en&P=" + thmasInputText.value;
        var win = window.open(URL, "_blank");
    }
    if (value === "stacover") {
        var URL = "https://stackoverflow.com/search?q=" + thmasInputText.value;
        var win = window.open(URL, "_blank");
    }
    if (value === "bing") {
        var URL = "https://www.bing.com/search?q=" + thmasInputText.value;
        var win = window.open(URL, "_blank");
    }
    if (value === "link") {
        var URL = "https://" + thmasInputText.value;
        var win = window.open(URL, "_blank");
    }
        
}