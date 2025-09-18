export default function Home() {
  const greeting: string = "Hello, Next.js with Typescript!";
  console.log(greeting);
  const isActive: boolean = true;
  console.log(`Is Active: ${isActive}`);
  const count: number = 42;
  console.log(`Count: ${count}`);
  const numbers: number[] = [1, 2, 3];
  const strings: string[] = ["a", "b"];
  const tuples: [number, string] = [1, "a"];
  const mixed: (number | string)[] = [1, "b", 2, "c"];
  const obj: { id: number; name: string } = { id: 1, name: "John" };

  const nestedArr: { id: number; values: string[] }[] = [
    { id: 1, values: ["x", "y"] },
    { id: 2, values: ["a", "b"] },
  ];
  console.log(nestedArr);
  const func = (x: number): number => x ** 2;

  console.log(numbers, strings, tuples, mixed, obj, func(5));

  const user: { id: number; name: string; email: string } = {
    id: 1,
    name: "Ahmad",
    email: "Ahmad@ahmad.com",
  };

  console.log(user);
  type User = { id: number; name: string; email: string };
  const anotherUser: User = {
    id: 2,
    name: "Kamran",
    email: "Kamran@kamrandev.com",
  };
  console.log(anotherUser);

  type NestedUser = {
    id: number;
    profile: { name: string; age: number };
    education?: { degree: string; year: number }[];
  };
  const nestedUser: NestedUser = {
    id: 3,
    profile: { name: "Hassan", age: 12 },
    education: [
      { degree: "Masters", year: 2020 },
      { degree: "PhD", year: 2025 },
    ],
  };
  console.log(nestedUser);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        Hello, Next.js with Typescript!
      </h1>
    </div>
  );
}
