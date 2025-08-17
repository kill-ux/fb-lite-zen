import { Home, Users, MessageCircle, Bell, User, Bookmark, Settings, Hash, TrendingUp } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mainNavItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Friends", url: "/friends", icon: Users },
  { title: "Messages", url: "/messages", icon: MessageCircle },
  { title: "Notifications", url: "/notifications", icon: Bell },
  { title: "Profile", url: "/profile", icon: User },
  { title: "Saved", url: "/saved", icon: Bookmark },
];

const exploreItems = [
  { title: "Trending", url: "/trending", icon: TrendingUp },
  { title: "Hashtags", url: "/hashtags", icon: Hash },
];

export function SocialSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border/50 bg-card/80 backdrop-blur-md">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center px-6 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl social-gradient">
              <span className="text-lg font-bold text-white">S</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-social-purple bg-clip-text text-transparent">
              Social
            </span>
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 p-4 border-b border-border/50">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs text-muted-foreground mt-1">@johndoe</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="space-y-1 px-3">
            {mainNavItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                      : "text-foreground/70 hover:bg-accent hover:text-accent-foreground"
                  )
                }
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="mt-8 px-3">
            <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Explore
            </p>
            <div className="space-y-1">
              {exploreItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.url}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                        : "text-foreground/70 hover:bg-accent hover:text-accent-foreground"
                    )
                  }
                >
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        {/* Settings */}
        <div className="border-t border-border/50 p-3">
          <NavLink
            to="/settings"
            className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-foreground/70 hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          >
            <Settings className="h-5 w-5" />
            Settings
          </NavLink>
        </div>
      </div>
    </aside>
  );
}