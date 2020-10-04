let login = prompt('Enter login : ','' );

let passUser;

let passAdmin;

let hours = new Date().getHours();



const minLength = 4;




if (login === null) {

	alert('Cancel');

} else if (login.length === 0) {

	alert('Cancel');

} else if (login.length < minLength) {

	alert('I don*t know any users having name length less than 4 symbols');

} else if (login === 'User') {

	passUser = prompt('Enter password : ','' );

		if (passUser === null) {

			alert('Canceled');

		} else if (passUser.length === 0) {

		alert('Canceled');

		} else if (passUser === 'UserPass') {
			
						if (hours <20) {

							alert('Good day, dear User!');

						} else if (hours >= 20) {

						alert('Good evening, dear User!');

						}

		}else {

		alert('Wrong password');
	
}
} else if (login === 'Admin') {

	passAdmin = prompt('Enter password : ','' );

		if (passAdmin === null) {

			alert('Canceled');

		} else if (passAdmin.length === 0) {

		alert('Canceled');

		} else if (passAdmin === 'RootPass') {

						if (hours < 20 ) {

							alert('Good day, dear Admin!');

						} else if (hours >= 20 ) {

						alert('Good evening, dear Admin!');

						}

		}else {

			alert('Wrong password');
	
}

} else {

	alert('I don’t know you');

}