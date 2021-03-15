//functions for validation 
function validateForm() {
	var Name = document.forms["messageForm"]["name"].value;
	var email = document.forms["messageForm"]["email"].value;
	var subject = document.forms["messageForm"]["subject"].value;
	var message = document.forms["messageForm"]["message"].value;

	if (Name == "" || email == "" || subject == "" || message ==""){ //using of if condition not to left blank
		alert("Please fill the details properly.");
	}
	else {
		alert("Thank you !! I gotta your message");
	}
}