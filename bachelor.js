const total1 = document.getElementById("total_specialized") // cat1
const total2 = document.getElementById("total_elective") // cat2
const total4 = document.getElementById("total_general") // cat3
const total5 = document.getElementById("total_core") // cat4

let total_credit = 0
let total_specialized = 0; // 1~22
let total_elective = 0; // 23~34
let total_general = 0; // 35~39
let total_core = 0; // 40~41

const username = localStorage.getItem('username');
document.getElementById('fname').innerText = localStorage.getItem("fname");
document.getElementById('lname').innerText = localStorage.getItem("lname");
document.getElementById('id').innerText = localStorage.getItem("id");
document.getElementById('grade').innerText = localStorage.getItem("grade");

function addCheckedCheckboxToList() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const checkedIds = Array.from(checkboxes).map(checkbox => checkbox.id);
    return checkedIds;
}

function savedata(){
	let fname = localStorage.getItem("fname");
	let lname = localStorage.getItem("lname");
	let id = localStorage.getItem("id");
	let grade = localStorage.getItem("grade");
	let result = addCheckedCheckboxToList();
	// console.log(`${fname} ${lname} (${id})  --->  ${grade}`);
	// console.log(result);
	if (grade == "کاردانی"){
		var fileContent = id+"\n"+fname+"\n"+lname+"\n"+"associate"+"\n"+result;
	}else{
		var fileContent = id+"\n"+fname+"\n"+lname+"\n"+"bachelor"+"\n"+result;
	}
    var bb = new Blob([fileContent],{type:"text/plain;charset=utf-8"});
    var a = document.createElement('a');
    a.download = 'register.txt';
    a.href = window.URL.createObjectURL(bb);
    a.click();
}

function calc_credit(id_txt){
	let index = id_txt.slice(3);
	let credit = parseInt(document.getElementById(id_txt).value);
	if ((index>=21)&&(index<=31)){ // specialized
		if (document.getElementById(id_txt).checked){
			total_specialized += credit;
			total_credit += credit;
		}else{
			total_specialized -= credit;
			total_credit -= credit;
		}
		document.getElementById("cat1").innerHTML = total_specialized;
		document.getElementById("total_credit").innerHTML = total_credit;
	}else if((index>=4)&&(index<=9)){ // elective
		if (document.getElementById(id_txt).checked){
			total_elective += credit;
			total_credit += credit;
		}else{
			total_elective -= credit;
			total_credit -= credit;
		}
		document.getElementById("cat2").innerHTML = total_elective;
		document.getElementById("total_credit").innerHTML = total_credit;
	}else if((index>=1)&&(index<=3)){ // general
		if (document.getElementById(id_txt).checked){
			total_general += credit;
			total_credit += credit;
		}else{
			total_general -= credit;
			total_credit -= credit;
		}
		document.getElementById("cat3").innerHTML = total_general;
		document.getElementById("total_credit").innerHTML = total_credit;
	}else if((index>=17)&&(index<=20)){ // general
		if (document.getElementById(id_txt).checked){
			total_general += credit;
			total_credit += credit;
		}else{
			total_general -= credit;
			total_credit -= credit;
		}
		document.getElementById("cat5").innerHTML = total_general;
		document.getElementById("total_credit").innerHTML = total_credit;
	}else if((index>=10)&&(index<=16)){ // core
		if (document.getElementById(id_txt).checked){
			total_core += credit;
			total_credit += credit;
		}else{
			total_core -= credit;
			total_credit -= credit;
		}
		document.getElementById("cat4").innerHTML = total_core;
		document.getElementById("total_credit").innerHTML = total_credit;
	}
}
