
let time = new Date();

let hPST = convertTime(time.getHours());
let hEST = convertTime(time.getUTCHours() - 4);
let AMorPMPST = getAMorPM(time.getHours());
let AMorPMEST = getAMorPM(time.getUTCHours() - 4);
var timeDif = (time.getUTCHours() - 4) - time.getHours();

let m = convertMins(time.getMinutes());
    
   



document.getElementById('txtPST').value = hPST + ":" + m + AMorPMPST;
document.getElementById('txtEST').value = hEST + ":" + m + AMorPMEST;

console.log(timeDif);

function toEST(){
    let timePST = document.getElementById('txtUserTime').value;
    let time = new Date();
    let hPST = convertTime(time.getHours());
    let hEST = convertTime(time.getUTCHours() - 4);
    let AMorPMPST = getAMorPM(time.getHours());
    let AMorPMEST = getAMorPM(time.getUTCHours() - 4);

    let convertedTime = +timePST + +timeDif;
    document.getElementById('txtEST').value = convertedTime + ":" + m + AMorPMEST;
    document.getElementById('txtPST').value = timePST + ":" + m + AMorPMEST;
    console.log(convertTime);
}

function convertMins(mins){
    if(mins < 10){
        mmins = "0" + mins;
    }
    return mins;
}

function convertTime(hour24Time){
    let hour12Time;
    if (hour24Time == 24){
		hour12Time = 12;
		AMorPM = "AM";
		return hour12Time;
	}else if (hour24Time >= 13 && hour24Time < 24){
		hour12Time = hour24Time - 12;
        AMorPM = "PM";
		return hour12Time;
	}else if (hour24Time == 12){
		hour12Time = 12;
		AMorPM = "PM";
		return hour12Time;
	}else if (hour24Time == 0){
		hour12Time = 12;
		AMorPM = "AM";
		return hour12Time;
	}else if (hour24Time > 0 || hour24Time <= 11){
		hour12Time = hour24Time;
		AMorPM = "AM";
		return hour12Time;
	}
}

function getAMorPM(hour24Time){
    if (hour24Time == 24){
		AMorPM = "AM";
		return AMorPM;
	}else if (hour24Time >= 13 && hour24Time < 24){
        AMorPM = "PM";
		return AMorPM;
	}else if (hour24Time == 12){
		AMorPM = "PM";
		return AMorPM;
	}else if (hour24Time == 0){
		AMorPM = "AM";
		return AMorPM;
	}else if (hour24Time > 0 || hour24Time <= 11){
		AMorPM = "AM";
		return AMorPM;
	}
}