const sketchpad = document.getElementById("sketchpad");
let rows;
let columns;
let columnheight = 600/columns;
let columnwidth = 800/columns;
let rowheight = 600/rows;
function BasicSketchpad () {
    const starterrows = 4;
    const startercolumns = 4;
    for (i = 0; i < starterrows; i++){
        const rowdiv = document.createElement("div");
        rowdiv.style.display = "inline-grid";
        rowdiv.style.width = 600 + "px";
        rowdiv.style.height = rowheight;
        rowdiv.classList.add("flex-row");
        sketchpad.appendChild(rowdiv);
        console.log(i);
    };
    let rowArray = sketchpad.querySelectorAll(".flex-row");
    rowArray.forEach(rowdiv => {
        for (j= 0; j < startercolumns;j++){
        const columndiv = document.createElement("div");
        columndiv.style.display = "flex";
        columndiv.style.width = columnwidth;
        columndiv.style.height = columnheight;
        columndiv.classList.add("flex-column");
        columndiv.addEventListener("mouseover",()=>{
            columndiv.style.backgroundColor = "#000000";
        });
        rowdiv.appendChild(columndiv);
        console.log(j);
    };
    })};
function InitializeSketchpad (){
for (i = 0; i < rows; i++){
    const rowdiv = document.createElement("div");
    rowdiv.style.display = "inline-grid";
    rowdiv.style.width = 600 + "px";
    rowdiv.style.height = rowheight;
    rowdiv.classList.add("flex-row");
    sketchpad.appendChild(rowdiv);
    console.log(i);
};
let rowArray = sketchpad.querySelectorAll(".flex-row");
rowArray.forEach(rowdiv => {
    for (j= 0; j < columns;j++){
    const columndiv = document.createElement("div");
    columndiv.style.display = "flex";
    columndiv.style.width = columnwidth;
    columndiv.style.height = columnheight;
    columndiv.classList.add("flex-column");
    rowdiv.appendChild(columndiv);
    console.log(j);
};
})};

function ResetSketchpad (){
    let rowArray = sketchpad.querySelectorAll(".flex-row");
    rowArray.forEach(rowdiv => {
        for (k=0; k < rows;k++){
            rowdiv.remove();
        }
    })
    let columnArray = sketchpad.querySelectorAll(".flex-column");
    columnArray.forEach(columndiv => {
        for (L = 0;L < columns;L++){
            columndiv.remove();
        }
    })
}

BasicSketchpad();

const button1 = document.getElementById("rows");
const button2 = document.getElementById("columns");
    button1.addEventListener("click",function buttonchange1 () {
        console.log("called rows");
        rows = Number(window.prompt("Set the number of rows:"));
        ResetSketchpad();
        InitializeSketchpad();
    })
    button2.addEventListener("click",function buttonchange2 (){
        console.log("called columns");
        columns = Number(window.prompt("Set the number of columns:"));
        ResetSketchpad();
        InitializeSketchpad();
    })



