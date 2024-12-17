function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      myFunction(this);
    }
    xhttp.open("GET", "cd_catalog.xml");
    xhttp.send();
}

function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("CD");
    const exptext = "<h3>explanation of ajax</h3><p>When the button is clicked, a request called an XMLHttpRequest is sent to the web server. This request includes a specific file containing the desired data. As soon as the server receives the request, it will send the file with the data back to the client browser.</p><p>Once the browser receives the file, it uses javascript once again to parse the data contained, and presents it in the form of a populated table.</p>";
    let table="<tr><th>artist</th><th>title</th><td id='exptext' rowspan='" + (x.length + 1) + "'>" + exptext + "</td></tr>";
    for (let i = 0; i < x.length; i++) { 
        table += "<tr><td>" +
        x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('getcd');
    if(button) {
        button.addEventListener("click", function() {
            loadDoc();
        });
    }
});


                          
