th = document.getElementsByTagName('th');

for (let c = 0; c < th.length; c++) {

    th[c].addEventListener('click', item(c))
}


function item(c) {

    return function () {
        console.log(c)
        sortTable(c)
    }
}


function sortTable(columnNum) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById(this.props.id);
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[columnNum];
            y = rows[i + 1].getElementsByTagName("TD")[columnNum];
            x = x.textContent.toLowerCase();
            y = y.textContent.toLowerCase();
            let xInt = parseInt(x);
            let yInt = parseInt(y);
            if (dir === "asc") {
                if (x === xInt.toString() && y === yInt.toString()) {
                    if (xInt > yInt) { shouldSwitch = true; break; }
                } else { if (x > y) { shouldSwitch = true; break; } }
            } else if (dir === "desc") {
                if (x === xInt.toString() && y === yInt.toString()) {
                    if (xInt < yInt) { shouldSwitch = true; break; }
                } else { if (x < y) { shouldSwitch = true; break; } }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount === 0 && dir === "asc") { dir = "desc"; switching = true; }
        }
    }