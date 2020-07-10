
let recipeName = document.getElementById("formGroupExampleInput").value;
var arrHead = new Array();	// array for header.
arrHead = ['', 'Ingredients', 'Measure'];

let fileInput = document.getElementById('fileInput');
fileInput.addEventListener('click', loadImageFileAsURL, false);
console.log(fileInput);

function loadImageFileAsURL() {

    if (fileInput.length > 0) {
        let fileToLoad = filesSelected[0];
        let fileReader = new FileReader();
        if (fileToLoad.type.match("*.png") || fileToLoad.type.match("*.jpeg")) {
            fileReader.onload = function (fileLoadedEvent) {
                let imageLoaded = document.createElement("img");
                imageLoaded.src = fileLoadedEvent.target.result;
                document.body.appendChild(imageLoaded);
            };
            fileReader.readAsDataURL(fileToLoad);
            console.log(fileReader.readAsDataURL(fileToLoad));
        }
    }
}





// first create TABLE structure with the headers. 
function createTable() {
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
    let myTab = document.getElementById('ingredientTable');
    let arrValues = new Array();

    // loop through each row of the table.
    for (row = 1; row < myTab.rows.length - 1; row++) {
        // loop through each cell in a row.
        for (coln = 0; coln < myTab.rows[row].cells.length; coln++) {
            let element = myTab.rows.item(row).cells[coln];
            if (element.childNodes[0].getAttribute('type') == 'text') {
                arrValues.push("'" + element.childNodes[0].value + "'");
            }
        }
    }

    // The final output.
    document.getElementById('output').innerHTML = arrValues;
    // window.location.replace('cake.html?Param1=' + arrValues + '&Param2=' + document.getElementById('formGroupExampleInput').value);
    //alert(window.location.href);
}
