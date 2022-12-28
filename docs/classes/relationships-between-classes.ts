/**
 * @name RelationshipsBetweenClasses
 *
 * In most cases, classes in TypeScript are compared structurally, the same as other types.
 *
 * For example, these two classes can be used in place of each other because they're identical:
 */
class Point1 {
	x = 0;
	y = 0;
}
class Point2 {
	x = 0;
	y = 0;
}
const p: Point1 = new Point2();

/**
 * Similarly, subtype relationships between classes exist even if there's no explicit inheritance.
 */
class Person {
	name: string;
	age: number;
}
class Employee {
	name: string;
	age: number;
	salary: number;
}
const person: Person = new Employee();

/**
 * This sounds straightforward, but there are a few cases that seem stranger than others.
 *
 * Empty classes have no members. In a structural type system, a type with no members is generally a supertype of
 * anything else. So if you write an empty class(don't!), anything can be used in place of it.
 */
class Empty {}
function fn(x: Empty) {
	// can't do anything with 'x', so I won't
}
fn(window);
fn({});
fn(fn);
