function getFormvalue() {
    //Write your code here
	 const form = document.getElementById('form1');
    const firstName = form.elements['fname'].value.trim();
    const lastName = form.elements['lname'].value.trim();
    if (firstName === "" && lastName === "") {
        alert("Please enter your name.");
    } else {
            alert(`${firstName} ${lastName}`);
    }
}
