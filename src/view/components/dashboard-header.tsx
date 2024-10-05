import { AlarmClock, Bell, CalendarDays, Headphones, LockKeyhole, MapPin, Settings, Trash2 } from "lucide-react";
import { IconButton } from "./icon-button";
import { Search } from "./search";
import { DashboardUserMenu } from "./dashboard-user-menu";

export function DashboardHeader() {
  const iconButtonNotificationItems = [
    { icon: <AlarmClock size={20} strokeWidth={1.3} />, text: 'Alarm', shortcut: '⌘A' },
    { icon: <CalendarDays size={20} strokeWidth={1.3} />, text: 'Calendar', shortcut: '⌘C' },
    { icon: <Trash2 size={20} strokeWidth={1.3} />, text: 'Delete', shortcut: '⌘D' },
  ]

  const iconButtonSettingsItems = [
    { icon: <MapPin size={20} strokeWidth={1.3} />, text: 'Location', shortcut: '⌘L' },
    { icon: <LockKeyhole size={20} strokeWidth={1.3} />, text: 'Protect', shortcut: '⌘P' },
    { icon: <Headphones size={20} strokeWidth={1.3} />, text: 'Audio', shortcut: '⌘A' },
  ]

  const UserMenuItems = [
    { icon: <MapPin size={20} strokeWidth={1.3} />, text: 'Location', shortcut: '⌘L' },
    { icon: <LockKeyhole size={20} strokeWidth={1.3} />, text: 'Protect', shortcut: '⌘P' },
  ]

  return (
    <header className="flex items-center justify-between w-full">
      <div>
        <p className="font-nauman-demi-bold">Admin Dashboard</p>
      </div>
      <div>
        <Search />
      </div>
      <div className="flex items-center gap-6">
        <IconButton 
          items={iconButtonNotificationItems}
          label="Notifications"
        >
          <Bell />
        </IconButton>
        <IconButton 
          items={iconButtonSettingsItems}
          label="Settings"
        >
          <Settings /> 
        </IconButton>
        <DashboardUserMenu
          avatar="https://github.com/HugoRamonPereira.png"
          avatarFallback="HR"
          label="User Menu"
          items={UserMenuItems}
          role="Administrator"
          username="Hugo Ramon"
        />
      </div>
    </header>
  )
}