function toggleMenu() {
    let menu = document.querySelector(".menu-links");
    let icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function validate(e) {
	hideErrors();

	// Determine if the form has errors
	if (formHasErrors()) {
		e.preventDefault();

		return false;
	}

	return true;

}

function formHasErrors() {
        let name = document.getElementById('name');
        let phone = document.getElementById('phone');
        let email = document.getElementById('email');
        let errorFlag = false;

        // Name Validation
        if(name.value == "")
        {
            let nameError = document.getElementById("nameError");
            nameError.style.display = "block";

            if(!errorFlag)
            {
                name.focus();
                name.select();
            }

            errorFlag = true;
        }

        // Phone Validation
        let phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone.value)) {
            let phoneError = document.getElementById('phoneError');
            phoneError.style.display = "block";

            if(!errorFlag)
            {
                phone.focus();
                phone.select();
            }

            errorFlag= true;
        }

        // Email Validation
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            let emailError = document.getElementById('emailError');
            emailError.style.display = "block";
        }

        return errorFlag;

};

function hideErrors() {
	let error = document.getElementsByClassName("error");

	for (let i = 0; i < error.length; i++) {
		error[i].style.display = "none";
	}
}

function load() {
    hideErrors ();

	document.getElementById("contactForm").addEventListener("submit", validate);

	document.getElementById("contactForm").addEventListener("reset",
		function(e)
		{
			resetForm(e);
		});

}

// Add the event listener for the document load
document.addEventListener("DOMContentLoaded", load);
