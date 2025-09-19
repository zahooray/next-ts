"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};
type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map(renderItem)}</ul>;
}
interface BaseUser {
  id: number;
  name: string;
}

interface AdminUser extends BaseUser {
  role: "admin" | "superadmin";
}

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  type NestedRecord = { [key: string]: { [key: string]: number } };

  const marks: NestedRecord = {
    math: { kamran: 95, ahmad: 88, hassan: 90 },
    science: { kamran: 96, ahmad: 89, hassan: 95 },
  };

  console.log("Marks: ", marks);

  const admin: AdminUser = {
    id: 1,
    name: "Waqar",
    role: "admin",
  };
  console.log("Admin: ", admin);
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
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!", event.currentTarget);
  };
  return (
    <div className="flex items-center flex-col justify-center min-h-screen">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        Hello, Next.js with Typescript!
      </h1>
      <button onClick={() => setIsDisabled(!isDisabled)}>
        {isDisabled ? "Enable" : "Disable"}
      </button>
      <Button label="Click me" onClick={handleClick} disabled={isDisabled} />
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <List
        items={[
          { id: 1, name: "Hassan" },
          { id: 2, name: "Kamran" },
          { id: 3, name: "Ahmad" },
          { id: 4, name: "Zahoor", age: 78 },
        ]}
        renderItem={(user) => (
          <li key={user.id}>
            {user.name}
            {user.age}
          </li>
        )}
      />
      <Link href="/you">You</Link>
    </div>
  );
}
