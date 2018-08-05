const sketchpad = document.getElementById("sketchpad");

function ColorChange (){
let rows = 4;
let columns = 4;
for (i = 0; i < rows; i++){
    var rowdiv = document.createElement("div");
    rowdiv.style.display = "flex";
    rowdiv.classList.add("flex-row");
    sketchpad.appendChild(rowdiv);
}
for (j= 0; j < columns;j++){
    var columndiv = document.createElement("div");
    columndiv.style.display = "flex";
    columndiv.classList.add("flex-column");
}
var rowArray = sketchpad.querySelectorAll("flex-row");
rowArray.forEach(rowdiv => {
    for (k = 0; k < columns; k++) {
        rowdiv.appendChild(columndiv);
    }
})
};
ColorChange();