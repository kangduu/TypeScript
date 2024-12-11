// -------   as   ---------

let greeting: unknown = "Hello world!";
// let getLength = greeting.length;
let getLength: number = (greeting as string).length;

// -------  satisfies ---------

interface Food {
  name: string;
  description?: {
    price: number;
    weight: number;
    yield?: string;
  };
}

let food = {
  name: "tomato",
} satisfies Food;
