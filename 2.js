(function(){
    setInterval(() => {
        var d = new Date().toLocaleTimeString();
        document.getElementById("demo").innerHTML = d;
    }, 1000)
})();