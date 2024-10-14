function calculategrade() {
    let hwavg = parseInt(document.getElementById("hwavg").value);
    let midexscr = parseInt(document.getElementById("midexscr").value);
    let finexscr = parseInt(document.getElementById("finexscr").value);
    let part = parseInt(document.getElementById("part").value);
    if (isNaN(hwavg) || isNaN(midexscr) || isNaN(finexscr) || isNaN(part) || hwavg < 0 || hwavg > 100 || midexscr < 0 || midexscr > 100 || finexscr < 0 || finexscr > 100 || part < 0 || part > 100) {
        switch (true) {
            case isNaN(hwavg):
                hwavgerrmsg = "homework average must be a number!";
                break;
            case hwavg < 0:
                hwavgerrmsg = "homework average must be 0 or higher!";
                break;
            case hwavg > 100:
                hwavgerrmsg = "homework average must be 100 or below!";
                break;
            default:
                hwavgerrmsg = "";
        }
        switch (true) {
            case isNaN(midexscr):
                midexscrerrmsg = "mid-term exam score must be a number!";
                break;
            case midexscr < 0:
                midexscrerrmsg = "mid-term exam score must be 0 or higher!";
                break;
            case midexscr > 100:
                midexscrerrmsg = "mid-term exam score must be 100 or below!";
                break;
            default:
                midexscrerrmsg = "";
        }
        switch (true) {
            case isNaN(finexscr):
                finexscrerrmsg = "Final exam score must be a number!";
                break;
            case finexscr < 0:
                finexscrerrmsg = "Final exam score must be 0 or higher!";
                break;
            case finexscr > 100:
                finexscrerrmsg = "Final exam score must be 100 or below!";
                break;
            default:
                finexscrerrmsg = "";
        }
        switch (true) {
            case isNaN(part):
                parterrmsg = "Participation score must be a number!";
                break;
            case part < 0:
                parterrmsg = "Participation score must be 0 or higher!";
                break;
            case part > 100:
                parterrmsg = "Participation score must be 100 or below!";
                break;
            default:
                parterrmsg = "";
        }
        document.getElementById("hwavgerror").innerHTML = hwavgerrmsg;
        document.getElementById("midexscrerror").innerHTML = midexscrerrmsg;
        document.getElementById("finexscrerror").innerHTML = finexscrerrmsg;
        document.getElementById("parterror").innerHTML = parterrmsg;
        document.getElementById("graderesult").style.display = "none";
    } else {
        let finalavg = Math.round((0.5 * hwavg) + (0.2 * midexscr) + (0.2 * finexscr) + (0.1 * part));
        let lettergrade = "";
        let comment = "";
        switch (true) {
            case (finalavg <= 100 && finalavg >= 90):
                lettergrade = "A";
                comment = "Phenominal!";
                break;
            case (finalavg < 90 && finalavg >= 80):
                lettergrade = "B";
                comment = "Good job!";
                break;
            case (finalavg < 80 && finalavg >= 70):
                lettergrade = "C";
                comment = "Doing OK.";
                break;
            case (finalavg < 70 && finalavg >= 60):
                lettergrade = "D";
                comment = "Student must retake the course.";
                break;
            case (finalavg < 60 && finalavg >= 0):
                lettergrade = "F";
                comment = "Student must retake the course.";
                break;
            default:
                lettergrade = "Hmmm";
                comment = "Something weird is going on."
        }
        document.getElementById("hwavg").value = hwavg;
        document.getElementById("midexscr").value = midexscr;
        document.getElementById("finexscr").value = finexscr;
        document.getElementById("part").value = part;
        document.getElementById("hwavgerror").innerHTML = "";
        document.getElementById("midexscrerror").innerHTML = "";
        document.getElementById("finexscrerror").innerHTML = "";
        document.getElementById("parterror").innerHTML = "";
        document.getElementById("graderesult").style.display = "block";
        document.getElementById("finalavg").innerHTML = finalavg;
        document.getElementById("lettergrade").innerHTML = lettergrade;
        document.getElementById("comment").innerHTML = comment;
    }
}

function cleargrades() {
    document.getElementById("hwavgerror").innerHTML = "";
    document.getElementById("midexscrerror").innerHTML = "";
    document.getElementById("finexscrerror").innerHTML = "";
    document.getElementById("parterror").innerHTML = "";
    document.getElementById("graderesult").style.display = "none";
    document.getElementById("finalavg").innerHTML = "";
    document.getElementById("lettergrade").innerHTML = "";
    document.getElementById("comment").innerHTML = "";
}

function calculateearnings() {
    let item1 = parseInt(document.getElementById("item1").value);
    let item2 = parseInt(document.getElementById("item2").value);
    let item3 = parseInt(document.getElementById("item3").value);
    let item4 = parseInt(document.getElementById("item4").value);
    if (isNaN(item1) || isNaN(item2) || isNaN(item3) || isNaN(item4) || item1 < 0 ||  item2 < 0 || item3 < 0 || item4 < 0) {
        switch (true) {
            case isNaN(item1):
                item1errmsg = "item 1 must be a number!";
                break;
            case item1 < 0:
                item1errmsg = "item 1 must be 0 or higher!";
                break;
            default:
                item1errmsg = "";
        }
        switch (true) {
            case isNaN(item2):
                item2errmsg = "item 2 must be a number!";
                break;
            case item2 < 0:
                item2errmsg = "item 2 must be 0 or higher!";
                break;
            default:
                item2errmsg = "";
        }
        switch (true) {
            case isNaN(item3):
                item3errmsg = "item 3 must be a number!";
                break;
            case item3 < 0:
                item3errmsg = "item 3 must be 0 or higher!";
                break;
            default:
                item3errmsg = "";
        }
        switch (true) {
            case isNaN(item4):
                item4errmsg = "item 4 must be a number!";
                break;
            case item4 < 0:
                item4errmsg = "item 4 must be 0 or higher!";
                break;
            default:
                item4errmsg = "";
        }
        document.getElementById("item1error").innerHTML = item1errmsg;
        document.getElementById("item2error").innerHTML = item2errmsg;
        document.getElementById("item3error").innerHTML = item3errmsg;
        document.getElementById("item4error").innerHTML = item4errmsg;
        document.getElementById("q1").innerHTML = "";
        document.getElementById("q2").innerHTML = "";
        document.getElementById("q3").innerHTML = "";
        document.getElementById("q4").innerHTML = "";
        document.getElementById("total1").innerHTML = "";
        document.getElementById("total2").innerHTML = "";
        document.getElementById("total3").innerHTML = "";
        document.getElementById("total4").innerHTML = "";
        document.getElementById("grandtotal").innerHTML = "";
        document.getElementById("earnings").innerHTML = "";
    } else {
        let total1 = item1 * 20.99;
        let total2 = item2 * 12.75;
        let total3 = item3 * 9.95;
        let total4 = item4 * 35.89;
        let grandtotal = total1 + total2 + total3 + total4;
        let earnings = (grandtotal * 0.09) + 250;

        document.getElementById("item1").value = item1;
        document.getElementById("item2").value = item2;
        document.getElementById("item3").value = item3;
        document.getElementById("item4").value = item4;
        document.getElementById("q1").innerHTML = item1;
        document.getElementById("q2").innerHTML = item2;
        document.getElementById("q3").innerHTML = item3;
        document.getElementById("q4").innerHTML = item4;
        document.getElementById("total1").innerHTML = total1.toLocaleString("en-US", {style:"currency", currency:"USD"});
        document.getElementById("total2").innerHTML = total2.toLocaleString("en-US", {style:"currency", currency:"USD"});
        document.getElementById("total3").innerHTML = total3.toLocaleString("en-US", {style:"currency", currency:"USD"});
        document.getElementById("total4").innerHTML = total4.toLocaleString("en-US", {style:"currency", currency:"USD"});
        document.getElementById("grandtotal").innerHTML = grandtotal.toLocaleString("en-US", {style:"currency", currency:"USD"});
        document.getElementById("earnings").innerHTML = earnings.toLocaleString("en-US", {style:"currency", currency:"USD"});
        document.getElementById("item1error").innerHTML = "";
        document.getElementById("item2error").innerHTML = "";
        document.getElementById("item3error").innerHTML = "";
        document.getElementById("item4error").innerHTML = "";
    }
}

function clearearnings() {
    document.getElementById("sellername").innerHTML = "the seller";
    document.getElementById("item1error").innerHTML = "";
    document.getElementById("item2error").innerHTML = "";
    document.getElementById("item3error").innerHTML = "";
    document.getElementById("item4error").innerHTML = "";
    document.getElementById("q1").innerHTML = "";
    document.getElementById("q2").innerHTML = "";
    document.getElementById("q3").innerHTML = "";
    document.getElementById("q4").innerHTML = "";
    document.getElementById("total1").innerHTML = "";
    document.getElementById("total2").innerHTML = "";
    document.getElementById("total3").innerHTML = "";
    document.getElementById("total4").innerHTML = "";
    document.getElementById("grandtotal").innerHTML = "";
    document.getElementById("earnings").innerHTML = "";
}

function multiplication() {
    let x = parseInt(document.getElementById("x").value);
    let y = parseInt(document.getElementById("y").value);
    let product = x * y;
    let guess = parseInt(document.getElementById("guess").value);

    if (guess == product) {
        document.getElementById("question-inputs").style.display = "none";
        document.getElementById("guesserror").innerHTML = "";
        document.getElementById("response-content").style.display = "block";
        document.getElementById("response").innerHTML = "Very good! Would you like to keep playing?";
        document.getElementById("response-inputs").style.display = "block";
    } else if (isNaN(guess)) {
        document.getElementById("guess").value = "";
        document.getElementById("response").innerHTML = "";
        document.getElementById("guesserror").innerHTML = "Please enter a number!";
    } else {
        document.getElementById("guess").value = guess;
        document.getElementById("response").innerHTML = "";
        document.getElementById("guesserror").innerHTML = "No. Please try again.";
    }
}

function clearmult() {
    document.getElementById("start-content").style.display = "none";
    document.getElementById("question-content").style.display = "block";
    document.getElementById("guesserror").innerHTML = "";
    document.getElementById("response-content").style.display = "none";
    document.getElementById("response").innerHTML = "";
}