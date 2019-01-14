function showDateTime() {
	var currentDateTime = new Date();
	var dateString = currentDateTime.toLocaleString();
	console.log("current date-time: " + dateString);
	alert("Current date-time: " + dateString);
	
}