import { PropsWithChildren } from "react";
import { Button } from "../../components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuGroup, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuShortcut, 
  DropdownMenuTrigger 
} from "../../components/ui/dropdown-menu";

interface ButtonItem {
  icon: React.ReactNode;
  text: string;
  shortcut: string;
}

interface IconButtonProps extends PropsWithChildren {
  label: string;
  items: ButtonItem[]
}

export function IconButton({ children, label, items }: IconButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" className="rounded-full px-1.5">
          {children}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44 font-n">
        <DropdownMenuLabel className="font-nauman-demi-bold tracking-wide">
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {items.map((item, index) => (
            <DropdownMenuItem 
              key={index}
              className="flex gap-2 font-nauman-regular"
            >
              {item.icon}
              <span className="mt-0.5">{item.text}</span>
              <DropdownMenuShortcut>
                {item.shortcut}
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}