const name = /^[a-zA-Z]+$/;
const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobile = /^\d{3}-\d{3}-\d{4}$/;
const position = /^[a-zA-Z\s]+$/;

function validation() {
    const fname = document.getElementById("first").value;
    const lname = document.getElementById("last").value;
    const emailval = document.getElementById("email").value;
    const phone = document.getElementById("phoneno").value;
    const positionval = document.getElementById("position").value;
    const genderval = document.querySelector('input[name="gender"]:checked').value;
    const sdate = document.getElementById("date").value;
    const intdate = document.getElementById("interview").value;
    const pretime = document.getElementById("time").value;
    const cityval = document.getElementById("city").value;


    if (!name.test(fname)) {
        alert("Please enter a valid first name.");
        return false;
    }
    if (!name.test(lname)) {
        alert("Please enter a valid last name.");
        return false;
    }
    if (!email.test(emailval)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (!mobile.test(phone)) {
        alert("Please enter a valid phone number in the correct format as shown");
        return false;
    }
    if (!position.test(positionval)) {
        alert("Please enter a valid applied position.");
        return false;
    }

    localStorage.setItem('fname', fname);
    localStorage.setItem('lname', lname);
    localStorage.setItem('email', emailval);
    localStorage.setItem('phone', phone);
    localStorage.setItem('position', positionval);
    localStorage.setItem('gender', genderval);
    localStorage.setItem('sdate', sdate);
    localStorage.setItem('intdate', intdate);
    localStorage.setItem('pretime', pretime);
    localStorage.setItem('city', cityval);
 

    document.getElementById("first").value = '';
    document.getElementById("last").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phoneno").value = '';
    document.getElementById("position").value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("date").value = '';
    document.getElementById("interview").value = '';
    document.getElementById("time").value = '';
    document.getElementById("city").value = '';

    alert("You have successfully applied for the full-stack developer job.");
    return true;
}

window.onload = function() {
    document.getElementById("first").value = localStorage.getItem('fname') || '';
    document.getElementById("last").value = localStorage.getItem('lname') || '';
    document.getElementById("email").value = localStorage.getItem('email') || '';
    document.getElementById("phoneno").value = localStorage.getItem('phone') || '';
    document.getElementById("position").value = localStorage.getItem('position') || '';
    const gender = localStorage.getItem('gender');
    if (gender) {
        document.getElementById(gender).checked = true;
    }
    document.getElementById("date").value = localStorage.getItem('sdate') || '';
    document.getElementById("interview").value = localStorage.getItem('intdate') || '';
    document.getElementById("time").value = localStorage.getItem('pretime') || '';
    document.getElementById("city").value = localStorage.getItem('city') || '';
};


