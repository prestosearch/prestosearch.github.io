const thmasInputText = document.querySelector('#thmas-input-text');
data = '{"Google":"https://www.google.com/search?q=","Yahoo":"https://search.yahoo.com/search?p=","DuckDuckGo":"https://duckduckgo.com/?q=","Bing":"https://www.bing.com/search?q=","America Online":"https://search.aol.com/aol/search?q=","Swisscows":"https://swisscows.com/en/web?query=","Yandex":"https://yandex.com/search/?text=","Stack Overflow":"https://stackoverflow.com/search?q=","Github":"https://github.com/search?q=","Lifewire":"https://www.lifewire.com/search?q=","Debian":"https://search.debian.org/?q=","Redhat":"https://www.redhat.com/en/search?search=","Puppy Linux Forums":"https://forum.puppylinux.com/search.php?keywords=","Distrowatch":"https://distrowatch.com/table.php?distribution=","Youtube":"https://www.youtube.com/results?search_query=","Twitter":"https://twitter.com/search?q=","Reddit":"https://www.reddit.com/search/?q=","TikTok":"https://www.tiktok.com/search?q=","New York Times":"https://www.nytimes.com/search?query=","Google News":"https://news.google.com/search?q=","Link":"https://","Wikipedia":"https://en.wikipedia.org/w/index.php?search=","Scratch":"https://scratch.mit.edu/search/projects?q=","Internet Archive":"https://archive.org/search?query="}'



    console.log(data);

    var result = JSON.parse(data);

function search(e) {
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
    }
}
