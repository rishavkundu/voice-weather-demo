import Link from "next/link"
import { CommandDialogDemo } from "./CommandDialogDemo"
import { ModeToggle } from "./ui/ModeToggle"
import { Button } from "./ui/button"

export default function Navigation() {
  return (
    <nav className="flex w-full items-center justify-between py-4">
      <div />
      <div className="flex w-full gap-2 sm:w-fit">
        <CommandDialogDemo />
        <ModeToggle />
        <Link
          passHref
          prefetch={false}
          aria-label="Learn More"
          href={"https://rishavkundu.com/"}
          className="shrink-0"
        >
          <Button
            variant={"outline"}
            className="h-9 px-4 py-2 text-sm font-medium"
          >
            <span className="relative z-10" style={{ opacity: 0.9 }}>Learn More</span>
          </Button>
        </Link>
      </div>
    </nav>
  )
}