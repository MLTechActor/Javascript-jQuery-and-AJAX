function mathoperations() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("num1error").innerHTML = isNaN(num1) ? "number 1 must contain a numeric value!<br>" : "";
        document.getElementById("num2error").innerHTML = isNaN(num2) ? "number 2 must contain a numeric value!<br>" : "";
        document.getElementById("num3error").innerHTML = isNaN(num3) ? "number 3 must contain a numeric value!<br>" : "";
    } else {
        let total = num1 + num2 + num3;
        let product = num1 * num2 * num3;
        let average = Math.round(total / 3);
        let smallest = Math.min(num1, num2, num3);
        let largest = Math.max(num1, num2, num3);
        document.getElementById("num1").value = num1;
        document.getElementById("num2").value = num2;
        document.getElementById("num3").value = num3;
        document.getElementById("num1error").innerHTML = "";
        document.getElementById("num2error").innerHTML = "";
        document.getElementById("num3error").innerHTML = "";
        document.getElementById("sum").innerHTML = total;
        document.getElementById("product").innerHTML = product;
        document.getElementById("average").innerHTML = average;
        document.getElementById("smallest").innerHTML = smallest;
        document.getElementById("largest").innerHTML = largest;
    }
}

function clearmath() {
    document.getElementById("num1error").innerHTML = "";
    document.getElementById("num2error").innerHTML = "";
    document.getElementById("num3error").innerHTML = "";
    document.getElementById("sum").innerHTML = "";
    document.getElementById("product").innerHTML = "";
    document.getElementById("average").innerHTML = "";
    document.getElementById("smallest").innerHTML = "";
    document.getElementById("largest").innerHTML = "";
}

function calcrates() {
    let usd = parseFloat(document.getElementById("usd").value);
    if (isNaN(usd)) {
        document.getElementById("errormessage").innerHTML = "Please enter a numeric value!";
    } else if (usd < 0) {
        document.getElementById("errormessage").innerHTML = "Please enter a positive value!";
    } else {
        let euro = usd * 0.92;
        let cand = usd * 1.38;
        let hkd = usd * 7.81;
        let yen = usd * 156.73;
        let peso = usd * 18.41;
        document.getElementById("euro").innerHTML = euro.toFixed(2);
        document.getElementById("cand").innerHTML = cand.toFixed(2);
        document.getElementById("hkd").innerHTML = hkd.toFixed(2);
        document.getElementById("yen").innerHTML = yen.toFixed(2);
        document.getElementById("peso").innerHTML = peso.toFixed(2);
        document.getElementById("usd").value = usd.toFixed(2);
        document.getElementById("errormessage").innerHTML = "";
    }
}

function clearvalues() {
    document.getElementById("euro").innerHTML = "";
    document.getElementById("cand").innerHTML = "";
    document.getElementById("hkd").innerHTML = "";
    document.getElementById("yen").innerHTML = "";
    document.getElementById("peso").innerHTML = "";
    document.getElementById("errormessage").innerHTML = "";
}
