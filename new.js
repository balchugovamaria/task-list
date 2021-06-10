let bt = document.querySelector(".bt");
let input = document.querySelector(".text");
let ul = document.querySelector(".todo-list");
let er = document.querySelector(".error"); 
let clear = document.querySelector(".clear");
let li;
let task = [];
let obj = {};



if(localStorage.getItem("tasks")){
	task = JSON.parse(localStorage.getItem("tasks"));
	for(let i=0;i<task.length;i++){
		li = document.createElement("li");
		li.className = "list-item";
		li.innerHTML = task[i].textTask;
		if(task[i].check == true){
			li.classList.add("checked");
		}
		ul.appendChild(li); 
	}
}



ul.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
    } else if(ev.target.tagName === "SPAN") {
       let div = ev.target.parentNode;
       div.remove();
	   input.focus();
    }
	saveLi();
	
});


input.oninput = function(){
	bt.disabled = false;
	er.classList.remove("active");
}//input.oninput

bt.onclick = function(){
	createEl();
	saveLi();
}//bt.onclick

input.onkeyup = function(e){
	if(e.code =="Enter" || e.code =="NumpadEnter"){
		createEl();
		saveLi();
	}
}//input.onkeyup

clear.onclick = function(){
	ul.textContent = "";
	input.focus();
	localStorage.clear();
}//clear.onclick
	


function createEl(){
	li = document.createElement("li");
	li.className = "list-item";
	li.textContent = input.value;
	if(input.value == "") {
		er.classList.add("active");
    }else{
		ul.appendChild(li);
	}
	input.value = "";
	input.focus();
	let span = document.createElement("span");
    let txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}//createEl

function saveLi(){
	let t = document.querySelectorAll(".list-item");
	task = [];
	for(let i=0;i<t.length;i++){
		obj = {};
		task.push(obj);
		obj.textTask = t[i].innerHTML;
		if(t[i].classList.contains("checked")){
			obj.check = true;
		}else{
			obj.check = false;
		}
	}
	localStorage.clear();
	localStorage.setItem("tasks",JSON.stringify(task));
}//saveLi
	
	
	

	
	
	

	
	
	
	
	
	
	
