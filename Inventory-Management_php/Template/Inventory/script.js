var table = document.getElementById("table");

function addTable() {

	var tr = table.insertRow(0);
	var d = new Date();

	var td0 = tr.insertCell(0);
	var td1 = tr.insertCell(1);
	var td2 = tr.insertCell(2);
	var td3 = tr.insertCell(3);
	var td4 = tr.insertCell(4);

	td0.innerHTML = document.getElementById("arg0").value;
	td1.innerHTML = document.getElementById("arg1").value;
	td2.innerHTML = document.getElementById("arg2").value;
	td3.innerHTML = document.getElementById("arg3").value;
	td4.innerHTML = d.getHours()+":"+d.getMinutes()+" "+d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate();
}