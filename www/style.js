let wrapperStyle = document.querySelector("div");
wrapperStyle.style.backgroundColor = "lightyellow";
wrapperStyle.style.display = "flex";
wrapperStyle.style.justifyContent = "center";
wrapperStyle.style.alignItems = "center";
wrapperStyle.style.flexDirection = "column";

let nameInputStyle = document.querySelector("#inputname");
nameInputStyle.style.width = "200px";

let spanStyle = document.querySelectorAll("span");
for (let i of spanStyle) {
  i.style.border = "1px solid black";
  i.style.padding = "5px";
  i.style.color = "green";
  i.style.fontSize = "22px";
  i.style.borderRadius = "9px";
}

let listStyle = document.querySelector("ul");
listStyle.style.display = 'flex';
listStyle.style.textAlign = 'center'
listStyle.style.flexDirection = 'column'
listStyle.style.fontSize = "16px";
listStyle.style.listStyle= "none";

// let addButtonStyle = document.querySelector('button');
// addButtonStyle.style.width='100px'
// addButtonStyle.style.height='30px'
// addButtonStyle.style.border='1px solid black'
// addButtonStyle.style.background='white'
// addButtonStyle.style.margin='20px'
