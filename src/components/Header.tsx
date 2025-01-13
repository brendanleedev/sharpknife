import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div>
      {/* left */}
      <div></div>
      {/* right */}
      <div>
        <Button variant={"outline"}>Login</Button>
        <Button>Signup</Button>
      </div>
    </div>
  );
}
