import { DockItemType, MenuItemType, ThemeType, WallpaperType } from "./types";

export const TopBarMenu: MenuItemType[] = [
  {
    label: `icon`,
    children: [
      "About This Mac",
      null,
      "System Preference...",
      "App Store...",
      null,
      "Recent Items",
      null,
      "Force Quit",
      null,
      "Sleep",
      "Restart...",
      "Shut Down...",
      null,
      "Lock Screen",
      "Log out",
    ],
  },
  {
    label: "Finder",
    children: [
      "About Finder",
      null,
      "Preference...",
      null,
      "Empty Trash...",
      null,
      "Services",
      null,
      "Hide Finder",
      "Hide Others",
      "Show All",
    ],
  },
  {
    label: "File",
    children: [
      "New Finder Window",
      "New Folder",
      "New Folder with Selection",
      "New Smart Folder",
      "New Tab",
      "Open in New Tab",
      "Open With",
      "Close Window",
      null,
      "Get Summary Info",
      "Rename",
      "Compress",
      "Duplicate",
      "Make Alias",
      "Quick Look",
      "Print",
      null,
      "Share",
      null,
      "Show Original",
      "Add to Dock",
      null,
      "Move to Trash",
      "Eject",
      null,
      "Tags...",
      "Find by Name...",
    ],
  },
  {
    label: "Edit",
    children: [
      "Undo",
      "Redo",
      null,
      "Cut",
      "Copy",
      "Paste",
      "Select All",
      null,
      "Show Clipboard",
      null,
      "Start Dictation",
      "Emoji & Symbols",
    ],
  },
  {
    label: "View",
    children: [
      "as Icons",
      "as List",
      "as Columns",
      "as Gallery",
      null,
      "Use Stacks",
      "Sort By",
      "Clean Up",
      "Clean Up By",
      null,
      "Hide Sidebar",
      "Hide Preview",
      null,
      "Hide Toolbar",
      "Show All Tabs",
      "Hide Tab Bar",
      "Hide Path Bar",
      "Hide Status Bar",
      null,
      "Customize Toolbar...",
      null,
      "Show View Options",
      "Show Preview Options",
      null,
      "Enter Full Screen",
    ],
  },

  {
    label: "Go",
    children: [
      "Back",
      "Forward",
      "Enclosing Folder",
      null,
      "Recents",
      "Documents",
      "Desktop",
      "Downloads",
      "Home",
      "Computers",
      "AirDrop",
      "Network",
      "iCloud Drive",
      "Applications",
      "Utilities",
      null,
      "Recent Folders",
      null,
      "Go to Folders",
      "Connect to Server...",
    ],
  },
  {
    label: "Window",
    children: [
      "Minimize",
      "Zoom",
      "Move Window to Left Side of Screen",
      "Move Window to Right Side of Screen",
      "Cycle Through Windows",
      null,
      "Show Previous Tab",
      "Show Next Tab",
      "Move Tab to New Window",
      "Merge All Windows",
      null,
      "Bring All to Front",
    ],
  },
  {
    label: "Help",
    children: [
      "macOS Help",
      null,
      "See What's New in macOS",
      "New to Mac? Tour the Basics",
      "Get to know your MacBook",
    ],
  },
];

export const DockApp: DockItemType[] = [
  {
    name: "Finder",
    icon: "/dock/finder.png",
    type: "iframe",
  },
  {
    name: "Calendar",
    icon: "/dock/calendar.png",
    type: "iframe",
  },
  {
    name: "Vscode",
    icon: "/dock/vscode.png",
    type: "iframe",
  },
  {
    name: "Kindle",
    icon: "/dock/kindle.png",
    type: "iframe",
  },
  {
    name: "Message",
    icon: "/dock/message.png",
    type: "iframe",
  },
  {
    name: "Mail",
    icon: "/dock/mail.png",
    type: "iframe",
  },
  {
    name: "Photos",
    icon: "/dock/photos.png",
    type: "iframe",
  },
  {
    name: "Notion",
    icon: "/dock/notion.png",
    type: "iframe",
  },
  {
    name: "Setting",
    icon: "/dock/setting.png",
    type: "iframe",
  },
  {
    name: "Appstore",
    icon: "/dock/app-store.png",
    type: "iframe",
  },
  {
    name: "Caculator",
    icon: "/dock/caculator.png",
    type: "iframe",
  },
  {
    name: "Instagram",
    icon: "/dock/instagram.png",
    type: "link",
    link: "https://www.instagram.com/mirayatech",
  },
  {
    name: "Github",
    icon: "/dock/github.png",
    type: "link",
    link: "https://github.com/mirayatech",
  },
];

export const wallpapers: WallpaperType[] = [
  {
    name: "Big Sur Light",
    url: "/wallpaper/bigsur-light.jpg",
  },
  {
    name: "Big Sur Dark",
    url: "/wallpaper/bigsur-dark.jpeg",
  },
  {
    name: "Catalina",
    url: "/wallpaper/catalina.jpeg",
  },

  {
    name: "Mojave",
    url: "/wallpaper/mojave.jpeg",
  },

  {
    name: "Sierra",
    url: "/wallpaper/sierra.jpg",
  },
  {
    name: "Yosemite",
    url: "/wallpaper/yosemite.jpg",
  },
];

export const themes: ThemeType[] = [
  {
    name: "Auto",
    thumbnail: "/theme/auto.png",
    attr: "",
  },
  {
    name: "Light",
    thumbnail: "/theme/light.png",
    attr: "light",
  },
  {
    name: "Dark",
    thumbnail: "/theme/dark.png",
    attr: "dark",
  },
];

export const darkBackgroundColor = "rgba(0, 0, 0, 0.4)";
export const lightBackgroundColor = "rgba(255, 255, 255, 0.2)";
export const darkBorderColor = "rgba(255, 255, 255, 0.3)";
export const lightBorderColor = "rgba(227, 227, 227, 0.3)";
export const darkTextColor = "white";
export const lightTextColor = "#1c1c1d";
