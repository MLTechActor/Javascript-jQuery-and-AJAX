function form3submit() {
    let stateinfoarray = [
        ['AL', 'Alabama', 'Montgomery', 4903185],
        ['AK', 'Alaska', 'Juneau', 731545],
        ['AZ', 'Arizona', 'Phoenix', 7278717],
        ['AR', 'Arkansas', 'Little Rock', 3017825],
        ['CA', 'California', 'Sacramento', 39512223],
        ['CO', 'Colorado', 'Denver', 5758736]
    ];
    let state = document.getElementById("state").value.toUpperCase();
    let selection;
    let output = document.getElementById("form3output");
    for (let i = 0; i < stateinfoarray.length; ++i) {
        if (state == stateinfoarray[i][0] || state == stateinfoarray[i][1].toUpperCase()) {
            selection = i;
        }
    }
    if (selection >= 0 && selection < stateinfoarray.length) {
        let message = "Thanks for your inquiry, here is the information you requested:<br><br>";
        message += "<fieldset><legend>&nbsp;" + stateinfoarray[selection][1] + "&nbsp;</legend>";
        message += "State abbr = " + stateinfoarray[selection][0] + "<br>";
        message += "Capital = " + stateinfoarray[selection][2] + "<br>";
        message += "Population = " + stateinfoarray[selection][3].toLocaleString();
        message += "</fieldset>";
        output.innerHTML = message;
    } else {
        output.innerHTML = "Sorry, we do not have information about this state! We only have information about Alabama through Colorado.";
    }
}