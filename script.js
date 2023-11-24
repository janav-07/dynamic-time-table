// get selected row
// display selected row data in text input

var table = document.getElementById("table"),
    rIndex;

for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
        rIndex = this.rowIndex;
        console.log(rIndex);

        // Update the code based on the number of columns you added
        document.getElementById("fname").value = this.cells[1].innerHTML;
        document.getElementById("lname").value = this.cells[2].innerHTML;
        document.getElementById("country").value = this.cells[3].innerHTML;
        document.getElementById("n4").value = this.cells[4].innerHTML;
        document.getElementById("n5").value = this.cells[5].innerHTML;
        document.getElementById("n6").value = this.cells[6].innerHTML;
        document.getElementById("n7").value = this.cells[7].innerHTML;
        document.getElementById("n8").value = this.cells[8].innerHTML;
        document.getElementById("n9").value = this.cells[9].innerHTML;
    };
}

// edit the row
function editRow() {
    // Update the code based on the number of columns you added
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("fname").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("lname").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("country").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("n4").value;
    table.rows[rIndex].cells[5].innerHTML = document.getElementById("n5").value;
    table.rows[rIndex].cells[6].innerHTML = document.getElementById("n6").value;
    table.rows[rIndex].cells[7].innerHTML = document.getElementById("n7").value;
    table.rows[rIndex].cells[8].innerHTML = document.getElementById("n8").value;
    table.rows[rIndex].cells[9].innerHTML = document.getElementById("n9").value;
}

// Data Update Table Here
function editTableDisplay() {
    document.querySelector('.editTable').setAttribute('style', 'display: block;')
}
