import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode_toggle";

export default function Header() {
  return (
    <div className="sticky top-0 flex flex-row justify-between">
      {/* left */}
      <div className="flex flex-row p-5">
        <div>
          <p className="text-xl p-1">Sharp Knife Logo</p>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-row p-5">
        <div className="p-1">
          <ModeToggle />
        </div>
        <div className="p-1">
          <Button variant={"outline"}>Login</Button>
        </div>
        <div className="p-1">
          <Button>Signup</Button>
        </div>
      </div>
    </div>
  );
}
