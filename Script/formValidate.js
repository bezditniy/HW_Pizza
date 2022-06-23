
function validate(e) {

    let valid = true;
    
    const errors = document.getElementsByClassName( 'validation-error' );
	while( errors.length > 0 ){
		errors[0].parentNode.removeChild( errors[0] );
	}

    const nameField = document.querySelector("#name");

    if (! nameField.value) {
        document.querySelector(".show-error1").innerHTML += '<span class="validation-error" style="color:red">Пустое поле</span>';
        valid = false;
        
    } else {
        const nameRegExp = /\S\W\D/;
            if (! nameRegExp.test(String(nameField.value).toLowerCase())) {
                document.querySelector(".show-error1").innerHTML += '<span class="validation-error" style="color:red">Неверное поле</span>';
                valid = false;
                
            }
        }

    const telField = document.querySelector("#phone");

    if (! telField.value) {
        document.querySelector('.show-error2').innerHTML += '<span class="validation-error" style="color:red">Пустое поле</span>';
        valid = false;
    } else {
        const phoneRegExp = /^\+380\d{9}}*$/;
            if (! phoneRegExp.test(telField.value)) {
                document.querySelector(".show-error2").innerHTML += '<span class="validation-error" style="color:red">Неверное поле</span>';
                valid = false;
                
            }
        }

    const emailField = document.querySelector("#email");

    if (! emailField.value) {
        document.querySelector(".show-error3").innerHTML += '<span class="validation-error" style="color:red">Пустое поле</span>';
        valid = false;
    } else {
        const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (! emailRegExp.test((emailField.value))) {
                document.querySelector(".show-error3").innerHTML += '<span class="validation-error" style="color:red">Неверное поле</span>';
                valid = false;
                
            }
        }
        

    if (false == valid) {
        e.preventDefault();
    }
    return valid;
}

const submit = document.querySelector('form[name="info"]');
submit.addEventListener("submit", validate)

