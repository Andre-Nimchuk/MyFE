function storeNames() {
		let stringArray = [];
		for(let i = 0; i < arguments.length; i++){
			stringArray.push(arguments[i]);
		}
		return stringArray;
	}

	storeNames('Nick Fury', 'Iron Man', 'Doctor Strange');