import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
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

interface DashboardMenuItem {
  icon: React.ReactNode;
  text: string;
  shortcut: string;
}

interface DashboardUserMenuProps {
  label: string;
  items: DashboardMenuItem[];
  avatar: string;
  avatarFallback: string;
  username: string;
  role: string;
}

export function DashboardUserMenu({ 
  label, 
  items,
  avatar,
  avatarFallback, 
  username, 
  role 
}: DashboardUserMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="leading-tight my-auto text-left">
            <p className="font-nauman-demi-bold">{username}</p>
            <p className="text-xs font-nauman-demi-bold">{role}</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {items.map((item, index) => (
            <DropdownMenuItem
              key={index}
              className="flex gap-2 font-nauman-demi-bold"
            >
              {item.icon}
              <span>{item.text}</span>
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