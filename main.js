const sketchpad = document.getElementById("sketchpad");

function ColorChange (){
let rows = 4;
let columns = 4;
for (i = 0; i < rows; i++){
    const rowdiv = document.createElement("div");
    rowdiv.style.display = "flex";
    rowdiv.style.width = 960 + "px";
    rowdiv.classList.add("flex-row");
    sketchpad.appendChild(rowdiv);
    console.log(i);
}
for (j= 0; j < columns;j++){
    const columndiv = document.createElement("div");
    columndiv.style.display = "flex";
    columndiv.classList.add("flex-column");
    console.log(j);
}
let rowArray = sketchpad.querySelectorAll(".flex-row");
rowArray.forEach(rowdiv => {
    const columndiv = document.createElement("div");
    for(k = 0; k < columns;k++){
        rowdiv.appendChild(columndiv);
        console.log(k);
    }
})
};
ColorChange();