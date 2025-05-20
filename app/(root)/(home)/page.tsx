import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="h1-bold">Hello World</h1>
        <UserButton />
      </div>
    </div>
  );
}
