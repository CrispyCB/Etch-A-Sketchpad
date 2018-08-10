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
let rowArray = sketchpad.querySelectorAll(".flex-row");
rowArray.forEach(rowdiv => {
    for (j= 0; j < columns;j++){
    const columndiv = document.createElement("div");
    columndiv.style.display = "flex";
    columndiv.classList.add("flex-column");
    columndiv.addEventListener("mouseover",()=>{
        columndiv.style.backgroundColor = "black";
    })
    rowdiv.appendChild(columndiv);
    console.log(j);
}
})};
ColorChange();