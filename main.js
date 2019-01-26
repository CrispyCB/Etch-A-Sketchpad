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
            columndiv.classList.add("default-color");
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
    //changes colors after row/column change -- do not delete.
    columndiv.addEventListener("mouseover",()=>{
        columndiv.classList.add("default-color");
    });
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

document.getElementById("apply").addEventListener("click", function set () {
    rows = document.getElementById("rows-input").value;
    columns = document.getElementById("columns-input").value;
    color = document.getElementById("color-input").value;
    function update() {
            let dc = sketchpad.querySelectorAll(".default-color");
        
            if (dc) 
                dc.forEach(function(div) {
                div.style.backgroundColor = color;
                div.classList.remove("default-color");
                }
                    ) }
ResetSketchpad();
InitializeSketchpad();
update();

}
)