const sketchpad = document.getElementById("sketchpad");
let rows = 4;
let columns = 4;
let columnheight = (720/columns);
let columnwidth = 960/columns;
let rowheight = 745/rows;
function ChangeRowsColumns () {
    const button1 = document.getElementById("rows");
    const button2 = document.getElementById("columns");
    button1.addEventListener("click",function buttonchange () {
        console.log("called rows");
        rows = window.prompt("Set the number of rows:");
    })
    button2.addEventListener("click",function buttonchange2 (){
        console.log("called columns");
        columns = window.prompt("Set the number of columns:");
    })
};
function ColorChange (){
for (i = 0; i < rows; i++){
    const rowdiv = document.createElement("div");
    rowdiv.style.display = "inline-grid";
    rowdiv.style.width = 960 + "px";
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
    columndiv.addEventListener("mouseover",()=>{
        columndiv.style.backgroundColor = "black";
    });
    rowdiv.appendChild(columndiv);
    console.log(j);
};
})};

ChangeRowsColumns ();
ColorChange();