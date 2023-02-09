
let main = document.getElementById('main');
let clock = document.getElementById('clock');
let setBtn = document.getElementById('set');
let clearBtn = document.getElementById('clear');
let sound = new Audio('./src/assets/alarm-sound.wav');
let clearTime ;
let days = document.querySelectorAll('#days p');



digitalClock ();

selectHours();
selectMins();
selectSecs();

setToday();

setBtn.addEventListener('click' , setAlarm)
clearBtn.addEventListener('click' , clearAlarm)


// function to set the days of the week and mark today name 

function setToday(){

	let date = new Date();
	console.log(date.getDay());

	switch(date.getDay()){

		case 0 : days[0].classList.add('today')
				 days[6].classList.remove('today')
				 break;

		case 1 : days[1].classList.add('today')
				 days[0].classList.remove('today')
				 break;

		case 2 : days[2].classList.add('today')
				 days[1].classList.remove('today')
				 break;

		case 3 : days[3].classList.add('today')
				 days[2].classList.remove('today')
				 break;

		case 4 : days[4].classList.add('today')
				 days[3].classList.remove('today')
				 break;

		case 5 : days[5].classList.add('today')
				 days[4].classList.remove('today')
				 break;

		case 6 : days[6].classList.add('today')
				 days[5].classList.remove('today')
				 break;

	}

}


// function to get the cuurent time as your timeline clock
function currentTime(){

    let date = new Date();
    let h = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let amOrPm = 'AM' ;

    if(h === 0){
        h = 12;
    }else if(h > 12){
        h = h - 12 ;
        amOrPm = 'PM'
    }

    h   = addZeroToLeft(h);
    min = addZeroToLeft(min);
    sec = addZeroToLeft(sec);

    return `${h} : ${min} : ${sec}  ${amOrPm}`;  
}


// function to display the time now

function digitalClock(){

    clock.innerText = currentTime();
    setTimeout( digitalClock, 1000);

}

// function to add zero in case of numer less than 10

function addZeroToLeft(time) {

    return (time < 10) ? "0" + time : time;

}

function selectHours(){

	var select = document.getElementById('hours');
	var hrs = 12

	for (i=1; i <= hrs; i++) {
		select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);
	}
}


// set select tag in HTML by using js it is easier than here

function selectMins(){

	var select = document.getElementById('mins');
	var min = 59;

	for (i=0; i <= min; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}

function selectSecs(){

	var select = document.getElementById('secs');
	var sec = 59;

	for (i=0; i <= sec; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}


// function to set your alarm and compare it with the time if == alarm sound turns on

function setAlarm() {

	var hr = document.getElementById('hours');
	
	var min = document.getElementById('mins');
	
	var sec = document.getElementById('secs');
	
	var amOrPm = document.getElementById('session');

    
// getting time from select options to set the alarm

    var getHour = hr.options[hr.selectedIndex].value;
    var getMin = min.options[min.selectedIndex].value;
    var getSec = sec.options[sec.selectedIndex].value;
    var getAP = amOrPm.options[amOrPm.selectedIndex].value;


    var alarmTime = `${addZeroToLeft(getHour)} : ${addZeroToLeft(getMin)} : ${addZeroToLeft(getSec)}  ${getAP}`;

    document.getElementById('hours').disabled = true;
	document.getElementById('mins').disabled = true;
	document.getElementById('secs').disabled = true;
	document.getElementById('session').disabled = true;

	var h2 = document.getElementById('clock');

	clearTime = setInterval(function(){

		let now = h2.textContent = currentTime();
	
		if (alarmTime == now) {
			alert('there is sound in background')
			clock.classList.remove('bg-secondary')
			sound.play();
			}

},1000);
	
}


// reset the alarm 

function clearAlarm() {

	document.getElementById('hours').disabled = false;
	document.getElementById('mins').disabled = false;
	document.getElementById('secs').disabled = false;
	document.getElementById('session').disabled = false;
	clearInterval(clearTime);
	sound.pause();

}



