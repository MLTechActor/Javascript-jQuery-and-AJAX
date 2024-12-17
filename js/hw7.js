function updateTextColor() {
    const red = $("#textred").slider("value");
    const green = $("#textgreen").slider("value");
    const blue = $("#textblue").slider("value");
    const hue = $("#texthue").slider("value");
    const sat = $("#textsat").slider("value");
    const brt = $("#textbrt").slider("value");
    const system = document.querySelector('input[name="textcolor"]:checked').value;

    if (system == 'textrgb') {
        document.getElementById('form1text').style.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    } else {
        document.getElementById('form1text').style.color = 'hsl(' + hue + ',' + sat + '%,' + brt + '%)';
    }
}

function changeTextPanel() {
    const panel = document.querySelector('input[name="textcolor"]:checked').value;
    if (panel == 'textrgb') {
        document.getElementById('textrgbsel').style.display = 'block';
        document.getElementById('texthsbsel').style.display = 'none';
    } else if (panel == 'texthsb') {
        document.getElementById('textrgbsel').style.display = 'none';
        document.getElementById('texthsbsel').style.display = 'block';
    }
}

function updateBgColor() {
    const red = $("#bgred").slider("value");
    const green = $("#bggreen").slider("value");
    const blue = $("#bgblue").slider("value");
    const hue = $("#bghue").slider("value");
    const sat = $("#bgsat").slider("value");
    const brt = $("#bgbrt").slider("value");
    const system = document.querySelector('input[name="bgcolor"]:checked').value;

    if (system == 'bgrgb') {
        document.getElementById('form1text').style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    } else {
        document.getElementById('form1text').style.backgroundColor = 'hsl(' + hue + ',' + sat + '%,' + brt + '%)';
    }
}

function changeBgPanel() {
    const panel = document.querySelector('input[name="bgcolor"]:checked').value;
    if (panel == 'bgrgb') {
        document.getElementById('bgrgbsel').style.display = 'block';
        document.getElementById('bghsbsel').style.display = 'none';
    } else if (panel == 'bghsb') {
        document.getElementById('bgrgbsel').style.display = 'none';
        document.getElementById('bghsbsel').style.display = 'block';
    }
}