class Base {
	protected name = 'base';
}

class Derived1 extends Base {
	protected name = 'derived';
}
class Derived2 extends Base {
	f1(other: Derived2) {
		other.name = 'd2';
	}
	f2(other: Base) {
		other.name = 'd2';
	}
}
