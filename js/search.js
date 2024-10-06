const thmasInputText = document.querySelector('#thmas-input-text');
data = `
{
    "DuckDuckGo": "https://duckduckgo.com/?q=",
    "Debian": "https://search.debian.org/?q=",
    "Stack Overflow": "https://stackoverflow.com/search?q="
}
`



    console.log(data);

    var result = JSON.parse(data);

function searchit(e) {

    if((e && e.keyCode == 13) || e == 0) {
    
        var e = document.getElementById("choo");
        var value = e.value;
        var text = e.options[e.selectedIndex].text;
    
        console.log(value)
        urlg = result[value]
        console.log(urlg)
        var URL = urlg + thmasInputText.value;
        console.log(URL);
        window.open(URL, "_blank");

        /*
        if (value === "google") {
            var URL = "https://www.google.com/search?q=" + thmasInputText.value;
            var win = window.open(URL, "_blank");
        }
        
        if (value === "yahoo") {
            var URL = "https://search.yahoo.com/search?p=" + thmasInputText.value;
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
        
        if (value === "aol") {
            var URL = "https://search.aol.com/aol/search?q=" + thmasInputText.value;
            var win = window.open(URL, "_blank");
        }
        
        if (value === "swissc") {
            var URL = "https://swisscows.com/en/web?query=" + thmasInputText.value;
            var win = window.open(URL, "_blank");
        }
        
        if (value === "yout") {
            var URL = "https://www.youtube.com/results?search_query=" + thmasInputText.value;
            var win = window.open(URL, "_blank");
        }
        
        if (value === "twitter") {
            var URL = "https://twitter.com/search?q=" + thmasInputText.value;
            var win = window.open(URL, "_blank");
        }
        
        if (value === "nyt") {
            var URL = "https://www.nytimes.com/search?query=" + thmasInputText.value;
            var win = window.open(URL, "_blank");
        }

        if (value === "goon") {
            var URL = "https://news.google.com/search?q=" + thmasInputText.value;
            var win = window.open(URL, "_blank");
        }

        if (value === "redhat") {
            var URL = "https://www.redhat.com/en/search?search=" + thmasInputText.value;
            var win = window.open(URL, "_blank");
        }
        
        if (value === "plf") {
            var URL = "https://forum.puppylinux.com/search.php?keywords=" + thmasInputText.value;
            var win = window.open(URL, "_blank");
        }

        if (value === "diswat") {
            var URL = "https://distrowatch.com/table.php?distribution=" + thmasInputText.value;
            var win = window.open(URL, "_blank");
        }

        if (value === "reddit") {
            var URL = "https://www.reddit.com/search/?q=" + thmasInputText.value;
            var win = window.open(URL, "_blank");
        }
        
        if (value === "tik") {
            var URL = "https://www.tiktok.com/search?q=" + thmasInputText.value;
            window.open(URL, "_blank");
        }

        if (value === "lifewire") {
            var URL = "https://www.lifewire.com/search?q=" + thmasInputText.value;
            window.open(URL, "_blank");
        }

        if (value === "github") {
            var URL = "https://github.com/search?q=" + thmasInputText.value;
            window.open(URL, "_blank");
        }

        if (value === "wikiped") {
            var URL = "https://en.wikipedia.org/w/index.php?search=" + thmasInputText.value;
            window.open(URL, "_blank");
        }
        
        if (value === "yandex") {
            var URL = "https://yandex.com/search/?text=" + thmasInputText.value;
            window.open(URL, "_blank");
        }

        if (value === "scratch") {
            var URL = "https://scratch.mit.edu/search/projects?q=" + thmasInputText.value;
            window.open(URL, "_blank");
        }
        */
    }
 
}
