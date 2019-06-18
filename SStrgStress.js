class SStrgStress {
	constructor () {

		this.stress(1000)
	}

	generateString(length) {
	   let 		str     = '';
	   const 	chars 	= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()_-+=\"\'{}[]`´^~?/:;\\,.<>§ªº|€®ŧ←↓→øþĸŋđðßæ«»©“”µ¹²³£¢¬';

	   for ( var i = 0; i < length; i++ ) {
	      str += chars.charAt(Math.floor(Math.random() * chars.length));
	   }
	   return str;
	}

	stress (length) {
		let interval = setInterval(() => {
			try {
				sessionStorage.setItem(this.generateString(length), this.generateString(length));
				console.log(sessionStorage.length);
			}
			catch (e) {
				clearInterval(interval);
				if (length < 2)
					return console.error(e), console.log("length: " + JSON.stringify(sessionStorage).length + " characteres");

				if (e.code === 22)
					return this.stress(Math.round(length / 2));
			}
		}, 100);
	}
}