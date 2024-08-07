/**
 * 函数篇
 */

namespace ChapterFunction {
	/函数定义/;
	// 1. 声明式
	function fn<T>(name: T): T {
		return name;
	}
	// 2. 表达式
	const fn1 = function () {};
	// 3. 箭头函数
	const fn2 = () => {};

	/函数签名/;
	// 1. 函数重载
	// 函数重载允许你定义同名函数，但具有不同的参数类型和返回类型。每个重载签名提供了调用该函数的可能方式，而实现函数提供了实际执行的逻辑。

	// 函数重载签名
	function Fn(value: number): string;
	function Fn(value: string): string;

	// 函数实现
	function Fn(value: number | string): string {
		return `Value is ${value}`;
	}

	// 使用函数
	const result1 = Fn(42); // 'Value is 42'
	const result2 = Fn('42'); // 'Value is 42'

	// 2. 模块声明
	// 当你在声明模块或外部库的类型时，可以使用函数类型签名来描述库中提供的函数，而不需要提供具体实现。这对于定义库的类型声明文件非常有用。
	// example.d.ts
	declare module 'example' {
		export function Fn(value: number): string;
	}

	// 3. 接口中的方法
	// 在接口中定义方法时，可以使用函数类型签名来描述接口中的方法，而不需要提供实现。这有助于定义类或对象应实现的接口。
	interface MyInterface {
		Fn(value: number): string;
	}

	class MyClass implements MyInterface {
		Fn(value: number): string {
			return `Value is ${value}`;
		}
	}

	// 4.类型别名
	// 你可以为函数类型创建类型别名，以便在代码中重用相同的类型签名。
	type FnType = (value: number) => string;

	const Fn1: FnType = (value: number): string => {
		return `Value is ${value}`;
	};

	// 5. 函数签名的文档化
	// 函数类型签名可以作为文档的一部分，描述函数的预期输入和输出。这有助于在大型团队中协作时，让其他开发人员理解如何使用函数。

	/函数类型/;
	// 函数类型包含两部分：参数类型 和 返回值类型

	// TypeScript能够根据返回语句自动推断出返回值类型【类型推断？】
	function fn3(value: number): void {}

	// 完整的函数类型
	const f4: (x: number, y: number) => void = function (
		x: number,
		y: number
	): number {
		return x + y;
	};

	// 只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。
	const f5: (a: number, b: number) => number = function (
		m: number,
		n: number
	): number {
		return m + n;
	};

	// ! 重点：函数类型（参数类型和返回值类型）必须是初始化或赋值时对应类型的子类型。
	//   const f6: (age: number) => number = function (value: number): void {}; //会报警告

	// ! 重点：只要你在任意一边声明了类型，都是正确的，因为TS编译器会自动识别出类型
	// ! 这叫做【“按上下文归类”】，是类型推论的一种。 它帮助我们更好地为程序指定类型。
	const f7: (props: string) => string = function (props) {
		return props;
	};

	/必须参数、可选参数和默认参数/;
	// ? 传递给一个函数的参数（实参）个数，必须与函数期望的参数（形参）个数保持一致 ?
	f5(1, 2);
	// 1. 必选参数 > 可选参数
	// const f8 = (a?: number, b: number): void => { } // 必选参数不能位于可选参数后。

	// 2. 默认初始化的参数 默认参数
	const f9 = function (x: string, y = 10) {};

	// ! 重点：默认参数的类型，由默认初始化表达式的类型决定。
	const f10 = (phone = 10 + '009') => {
		return typeof phone;
	}; // phone 为 string 类型
	// console.log(f10(10)); // 错误：类型“number”的参数不能赋给类型“string”的参数。

	// ! 重点：默认参数不受限于参数位置，唯一的情况是 如果带默认值的参数出现在必须参数前面，【必须明确的传入 undefined值来获得默认值】
	const f11 = (first = 'one', last: string) => {
		return first;
	};
	console.log(f11('10', '12')); // string类型的10
	console.log(f11(undefined, '11')); // one

	/剩余参数/;
	// arguments ：JavaScript中我们可以使用arguments获取剩余的参数（多余的实参）
	// !  ( ...paramName:type[] ) 来表示剩余参数
	let f12: (one: string, last: number, ...list: string[]) => string;
	f12 = function (name, last: number, ...list) {
		return name + ' ' + list.join(' ');
	};
	console.log(f12('a', 1, 'b', 'c')); // a b c
	// ! 重点：剩余参数必须是参数列表中的最后一个参数

	/this和箭头函数/;
	const temp = {
		key: 'temp',
		tags: {
			temp: 10,
			value: 12,
		},
		showName: function () {
			return function () {
				let k = this.key;
				return this.tags[k];
			};
		},
	};
	// const showName = temp.showName()
	// console.log(showName());// 报错
	// 方法一：改为箭头函数
	const temp1 = {
		key: 'temp',
		tags: {
			temp: 10,
			value: 12,
		},
		showName: function () {
			return () => {
				let k = this.key;
				return { name: this.tags[k] };
			};
		},
	};
	// TODO 方法二：this参数 ？
	interface Keys {
		name: string;
	}
	interface Temp {
		key: string;
		tags: { value: number; [key: string]: any };
		showName: () => () => Keys;
	}
	const temp2: Temp = {
		key: 'temp',
		tags: {
			temp: '111',
			value: 100,
		},
		showName: function (this: Temp) {
			return function (this: Temp) {
				let k = this.key;
				return { name: this.tags[k] };
			};
		},
	};

	/重载/;
	// ! 根据传入不同的参数而返回不同类型的数据。

	function func(params: { x: number; y: number }): number;
	function func(params: number): number;
	function func(params): any {
		if (typeof params === 'number') {
			return params;
		} else if (typeof params === 'object') {
			return params.x + params.y;
		}
	}
	console.log(func(111));
	console.log(func({ x: 10, y: 20 }));
}
