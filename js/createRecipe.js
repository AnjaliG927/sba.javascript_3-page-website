
function hideFunction() {
    var hidelement = document.getElementById("hideMyelement");
    if (hidelement.style.display === "none") {
        hidelement.style.display = "block";
    } else {
        hidelement.style.display = "none";
    }
}




let recipeName = document.getElementById("formGroupExampleInput").value;
var arrHead = new Array();	// array for header.
arrHead = ['', 'Ingredients', 'Measure'];


function loadImageFileAsURL(event) {


    let selectedFile = event.target.files[0];
    if (selectedFile) {

        let fileReader = new FileReader();
        var imgtag = document.getElementById("myimage");
        imgtag.title = selectedFile.name;
        fileReader.onload = function (event) {
            imgtag.src = event.target.result;
            imgtag.setAttribute("style", "float: left");

        };
        // console.log(fileReader.readAsDataURL(selectedFile));
        fileReader.readAsDataURL(selectedFile);
    }


}





// first create TABLE structure with the headers. 
function createTable() {
    hideFunction(); //calling hide function onload event to hide div

    let ingredientTable = document.createElement('table');
    ingredientTable.setAttribute('id', 'ingredientTable');
    ingredientTable.setAttribute('class', 'table1'); // table id.

    let tr = ingredientTable.insertRow(-1);
    for (let h = 0; h < arrHead.length; h++) {
        let th = document.createElement('th'); // create table headers
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }

    let div = document.getElementById('cont');

    div.appendChild(ingredientTable);  // add the TABLE to the container.

}
function addTextBox() {

    let addTab = document.getElementById('ingredientTable');

    let rowCnt = addTab.rows.length;   // table row count.
    let tr = addTab.insertRow(rowCnt); // the table row.
    tr = addTab.insertRow(rowCnt);

    for (let coln = 0; coln < arrHead.length; coln++) {
        let td = document.createElement('td'); // table definition.
        td = tr.insertCell(coln);

        if (coln == 0) {      // the first column.
            // add a button in every new row in the first column.
            let button = document.createElement('input');

            // set input attributes.
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Remove');

            // add button's 'onclick' event.
            button.setAttribute('onclick', 'removeRow(this)');

            td.appendChild(button);
        }
        else {
            // 2nd, 3rd and 4th column, will have textbox.
            let element = document.createElement('input');
            element.setAttribute('type', 'text');
            element.setAttribute('value', '');

            td.appendChild(element);
        }
    }
}


function removeRow(oButton) {
    let addTab = document.getElementById('ingredientTable');
    addTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // button -> td -> tr.
}

// function to extract and submit table data.
function submitButton() {
    hideFunction();
    displayName();

    let myTab = document.getElementById('ingredientTable');
    var arrValues = new Array();

    // loop through each row of the table.
    for (row = 1; row < myTab.rows.length - 1; row++) {
        // loop through each cell in a row.
        for (coln = 0; coln < myTab.rows[row].cells.length; coln++) {
            let element = myTab.rows.item(row).cells[coln];

            if (element.childNodes[0].getAttribute('type') == 'text') {
                arrValues.push("'" + element.childNodes[0].value + "'");

            }
        }

        displayTable(arrValues);
        // The final output.
        document.getElementById('output').innerHTML = arrValues;

    }
}
function displayTable(arrValues) {
    //Create a HTML Table element.

    // --------------------------------------------------------------
    var arrHead = new Array();	// array for header.
    arrHead = ['', 'Ingredients', 'Measure'];
    let ingredientTable = document.createElement('table');
    ingredientTable.setAttribute('id', 'createDisplayTable');
    ingredientTable.setAttribute('class', 'table table-bordered');

    let tr = ingredientTable.insertRow(-1);
    for (let h = 0; h < arrHead.length; h++) {
        let th = document.createElement('th'); // create table headers
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }

    let div = document.getElementById('ingredients');

    div.appendChild(ingredientTable);


}

function displayName() {
    document.getElementById("displayname").innerHTML = document.getElementById("formGroupExampleInput").value;

}
