/**
 * TypeScript offers full support for the class keyword introduced in ES2015.
 *
 * As with other JavaScript language features, TypeScript adds type annotations and
 * other syntax to allow you to express relationships between classes and other types.
 */

/**
 * @name ClassMembers
 *
 * Here's the most basic class - an empty one:
 */
class Point {}

/**
 * This class isn't very useful yet, so let's start adding some members.
 */

/**
 * @name Fields
 *
 *
 */

class Point1 {
	x: number;
	y: number;
}

const pt = new Point1();
pt.x = 1;
pt.y = 2;

export {};
