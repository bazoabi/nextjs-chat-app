import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant={"destructive"} className="mr-2">
            Sign In
          </Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button className="bg-green-500 text-white px-4 py-2 rounded">
            Sign Up
          </Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

      <ModeToggle />
    </div>
  );
}
