"use strict";
class Base {
    constructor() {
        this.name = 'base';
    }
}
class Derived1 extends Base {
    constructor() {
        super(...arguments);
        this.name = 'derived';
    }
}
class Derived2 extends Base {
    f1(other) {
        other.name = 'd2';
    }
    f2(other) {
        other.name = 'd2';
    }
}
