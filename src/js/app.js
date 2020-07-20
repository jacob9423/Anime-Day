let PST = new spacetime();
let EST = new spacetime();
EST = EST.goto('America/New_York');

document.getElementById('txtPST').value = PST.time();

document.getElementById('txtEST').value = EST.time();

function toPST(){
	EST = EST.time(document.getElementById('txtUserTime').value);
	document.getElementById('txtEST').value = EST.time();
	EST = EST.goto('America/Los_Angeles');
	document.getElementById('txtPST').value = EST.time();
	EST = EST.goto('America/New_York');
}

function toEST(){
	PST = PST.time(document.getElementById('txtUserTime').value);
	document.getElementById('txtPST').value = PST.time();
	PST = PST.goto('America/New_York');
	document.getElementById('txtEST').value = PST.time();
	PST = PST.goto('America/Los_Angeles');
}