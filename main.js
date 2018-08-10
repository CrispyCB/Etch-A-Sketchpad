const sketchpad = document.getElementById("sketchpad");
let columnheight = 745/columns;
let columnwidth = 960/columns;
let rowheight = 745/rows;
function ColorChange (){
let rows = 4;
let columns = 4;
for (i = 0; i < rows; i++){
    const rowdiv = document.createElement("div");
    rowdiv.style.display = "flex";
    rowdiv.style.width = 960 + "px";
    rowdiv.style.height = rowheight;
    rowdiv.classList.add("flex-row");
    sketchpad.appendChild(rowdiv);
    console.log(i);
}
let rowArray = sketchpad.querySelectorAll(".flex-row");
rowArray.forEach(rowdiv => {
    for (j= 0; j < columns;j++){
    const columndiv = document.createElement("div");
    columndiv.style.display = "flex";
    columndiv.style.width = columnwidth;
    columndiv.style.height = columnheight;
    columndiv.classList.add("flex-column");
    columndiv.addEventListener("mouseover",()=>{
        columndiv.style.backgroundColor = "black";
    });
    rowdiv.appendChild(columndiv);
    console.log(j);
}
})};
ColorChange();