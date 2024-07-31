// Return Type

function Fn(value: number): number;
function Fn(value: string): string {
	if (typeof value === 'number') return value;
	return `Value is ${value}`;
}

type FnReturnType = ReturnType<typeof Fn>;

export {};
