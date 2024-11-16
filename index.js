function navigateToPage(){
	let fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var id = document.getElementById("id").value;

	if ((fname.trim()==="")||(lname.trim()==="")||(id.trim()==="")){
		alert("لطفا اطلاعات فرم را کامل نمایید");
	}else{
		if (document.getElementById('type1').checked) {
			// alert(`${fname} ${lname} (${id}) -> کاردانی`);
			localStorage.setItem("fname", fname);
			localStorage.setItem("lname", lname);
			localStorage.setItem("id", id);
			localStorage.setItem("grade", "کارشناسی پیوسته");
			window.location.href = 'associate.html';
		} else if (document.getElementById('type2').checked) {
			// alert(`${fname} ${lname} (${id}) -> کارشناسی`);
			localStorage.setItem("fname", fname);
			localStorage.setItem("lname", lname);
			localStorage.setItem("id", id);
			localStorage.setItem("grade", "کارشناسی ناپیوسته");
			window.location.href = 'bachelor.html';
		}
	}
}
