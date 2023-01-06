class Greeter {
	public greet() {
		console.log('this.getName:', this.getName());
	}

	protected getName() {
		return 'hi';
	}
}

class SpecialGreeter extends Greeter {
	public howdy() {
		// OK to access protected member here
		console.log('special greeter', this.getName());
	}
}

const sg = new SpecialGreeter();
sg.greet();
sg.getName(); // Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.

