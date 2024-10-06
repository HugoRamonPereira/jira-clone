import { PropsWithChildren } from "react";
// import { Button } from "../../components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuGroup, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "../../components/ui/dropdown-menu";

interface ButtonItem {
  icon: React.ReactNode;
  text: string;
}

interface IconButtonProps extends PropsWithChildren {
  label: string;
  items: ButtonItem[]
}

export function IconButton({ children, label, items }: IconButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger 
        className="focus-visible:outline focus-visible:outline-yellow-400 rounded-full hover:bg-green-300 transition-colors duration-200"
      >
        <div className="p-2">
          {children}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel className="font-nauman-demi-bold tracking-wide">
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="flex flex-col gap-1">
          {items.map((item, index) => (
            <DropdownMenuItem 
              key={index}
              className="flex gap-2 font-nauman-regular"
            >
              {item.icon}
              <span className="mt-0.5">{item.text}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}