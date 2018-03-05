function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function personInfo() {

	dane =  'Hi' + '\n' +
			'=====' + '\n' +
			'Imie    : '     + Slawek     + '\n' + 
			'Nazwisko : '  + Zdzylowski + '\n' +;

	navigator.notification.alert(info);
	
}