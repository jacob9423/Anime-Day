let PST = new spacetime();
let EST = new spacetime();
//populate inital values
EST = EST.goto('America/New_York');
PST = PST.goto('America/Los_Angeles');
//populate labels
document.getElementById('txtPST').value = PST.time();
document.getElementById('txtEST').value = EST.time();
// toPST() - No arguments. It converts EST Time to EST
function toPST(){
	EST = EST.time(document.getElementById('userTime').value);
	document.getElementById('txtEST').value = EST.time();
	EST = EST.goto('America/Los_Angeles');
	document.getElementById('txtPST').value = EST.time();
	EST = EST.goto('America/New_York');
}
//toEST - No arguments. It converts EST time to PST
function toEST(){
	PST = PST.time(document.getElementById('userTime').value);
	console.log(PST)
	document.getElementById('txtPST').value = PST.time();
	PST = PST.goto('America/New_York');
	document.getElementById('txtEST').value = PST.time();
	PST = PST.goto('America/Los_Angeles');
}