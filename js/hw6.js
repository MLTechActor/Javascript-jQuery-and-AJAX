function form1submit() {
    let num = parseFloat(document.getElementById("num4dec").value);
    document.getElementById("num4dec").value = num;
    let message = "";
    message += "<fieldset><legend>&nbsp;You typed " + num + "&nbsp;</legend>";
        message += "Rounded = " + Math.round(num) + "<br>";
        message += "Square root rounded = " + Math.round(Math.sqrt(num)) + "<br>";
        message += "1 decimal place = " + num.toFixed(1) + "<br>";
        message += "2 decimal places = " + num.toFixed(2) + "<br>";
        message += "3 decimal places = " + num.toFixed(3) + "<br>";
        message += "</fieldset>";
        document.getElementById("form1output").innerHTML = message;
}

function form2submit() {
    let count = 0;
    let lt = document.getElementById("longtext").value.toLowerCase();
    let char = document.getElementById("char").value.toLowerCase().charAt(0);
    for (let i = 0; i < lt.length; i++) {
        if (lt.charAt(i) == char)
            count++;     
    }         

    if (count == 0) {
        document.getElementById("form2output").innerHTML = char + " not found in text";
    }
    else {
        document.getElementById("form2output").innerHTML = count + " occurrence(s) of " + char + " found";
    }
}