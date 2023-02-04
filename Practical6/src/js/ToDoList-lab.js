/* 
You might be wondering why "LI" is in uppercase style while in the DOM it is "li"? 
When JavaScript was first created, it used an uppercase style for tag names by convention. Usually, tagName() was 
and still returns all uppercase. 
Although "li" works for some cases, but it does not work for others. Therefore, please try to use uppercases when 
you use tagName to be on the safe side.
*/

// TASK 1 - Pressing on the "delete" button will hide the list item containing it (its <li> parent).
let myNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
    let btn = document.createElement("button");
    let txt = document.createTextNode("Delete");
    btn.className = "close";
    btn.appendChild(txt);
    myNodelist[i].appendChild(btn);  
}

//add a className = "close" to each button to activate the related CSS styling.
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// TASK 3 //
/* When a task is clicked on, you need to toggle its class to "checked", which will add a "checked" symbol, 
change the background and text color, and strike the text of the list item 
as shown in the figure (the first two tasks). */

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// TASK 4 //
/* Create a function "newTask()" that will activate the “Add a task to my list” button, 
i.e., it will take any text written in the input box and add it as a new task to the list. */

function newTask() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("You must write a task to be done!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    let t = document.createTextNode(inputValue);
    li.appendChild(t);

   // clears the input after adding the task
    document.getElementById("myInput").value = "";

   //Create a "delete" button and append it to the created list item
    let btn = document.createElement("button");
    let txt = document.createTextNode("Delete");
    btn.className = "close";
    btn.appendChild(txt);
    li.appendChild(btn);

    //same as above
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
};


