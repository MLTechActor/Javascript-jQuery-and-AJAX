function calculatewithloops(draggedId) {
    let product1, sum1, product2, sum2, j;
    product1 = 1;
    sum1 = 0;
    product2 = 1;
    sum2 = 0;
    j = 3;

    for (let i = 5; i <= 25; i += 4) {
        product1 *= i;
        sum1 += i;
    }

    while (j <= 18) {
        product2 *= j;
        sum2 += j;
        j += 3;
    }

    switch(draggedId) {
        case 'drag1':
            document.getElementById('product1').innerHTML = product1.toLocaleString();
            break;
        case 'drag2':
            document.getElementById('sum1').innerHTML = sum1;
            break;
        case 'drag3':
            document.getElementById('product2').innerHTML = product2.toLocaleString();
            break;
        case 'drag4':
            document.getElementById('sum2').innerHTML = sum2;
            break;
    }

}

function clearcalculations() {
    document.getElementById('product1').innerHTML = "&nbsp;";
    document.getElementById('sum1').innerHTML = "&nbsp;";
    document.getElementById('product2').innerHTML = "&nbsp;";
    document.getElementById('sum2').innerHTML = "&nbsp;";
}

function buildtables(principal, minr, maxr, years) {
    const tablecontainer = document.getElementById('tablecontainer');
    let citable, citr, td1, td2, td3;
    for (let i = minr; i <= maxr; i++) {
        citable = document.createElement('table');
        citr = document.createElement('tr');
        td1 = document.createElement('th');
        td1.innerText = 'year';
        td2 = document.createElement('th');
        td2.innerText = 'amount on deposit';
        td3 = document.createElement('th');
        td3.innerText = 'interest rate';

        citr.appendChild(td1);
        citr.appendChild(td2);
        citr.appendChild(td3);
        citable.appendChild(citr)

        for (let j = 1; j <= years; j++) {
            let newtr = document.createElement('tr');
            let newtd1 = document.createElement('td');
            newtd1.innerText = j;
            let newtd2 = document.createElement('td');
            newtd2.innerText = (principal * (1 + i / 100) ** j).toLocaleString("en-US", {style:"currency", currency:"USD"});
            let newtd3 = document.createElement('td');
            newtd3.innerText = i + "%";

            newtr.appendChild(newtd1);
            newtr.appendChild(newtd2);
            newtr.appendChild(newtd3);
            citable.appendChild(newtr);
        }

        tablecontainer.appendChild(citable)
    }
}

function buildsquare() {
    let num = parseInt(document.getElementById('num').value);
    let error = document.getElementById('error');
    let result = document.getElementById('result');
    let square = '';
    document.getElementById('num').value = isNaN(num) ? "" : num;
    if (isNaN(num)) {
        error.innerHTML = 'you must enter a number!';
        result.innerHTML = '';
    } else if (num < 2 || num > 10) {
        error.innerHTML = 'number must be between 2 and 10!';
        result.innerHTML = '';
    } else {
        error.innerHTML = '';
        square += '*'.repeat(num) + '<br>';
        if (num > 2) {
            for (let i = 3; i <= num; i++) {
                square += '*' + '&nbsp;'.repeat(num - 2) + '*<br>';
            }
        }
        square += '*'.repeat(num);
        result.innerHTML = square;
    }
}

function clearhs() {
    document.getElementById('error').innerHTML = '';
    document.getElementById('result').innerHTML = '';
}