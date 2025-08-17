import { SocialSidebar } from "@/components/SocialSidebar";
import { RightSidebar } from "@/components/RightSidebar";
import { Home } from "@/pages/Home";
import { Bell, Search, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SocialSidebar />
      
      {/* Top Navigation */}
      <header className="fixed top-0 left-64 right-80 z-50 h-16 border-b border-border/50 bg-card/80 backdrop-blur-md">
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search posts, people, hashtags..."
                className="pl-10 bg-muted/50 border-border/50 focus:bg-background"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="relative">
              <MessageCircle className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full flex items-center justify-center">
                <span className="text-[10px] text-primary-foreground font-medium">3</span>
              </span>
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full flex items-center justify-center">
                <span className="text-[10px] text-destructive-foreground font-medium">2</span>
              </span>
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-primary text-primary-foreground text-sm">JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="ml-64 mr-80 pt-16">
        <Home />
      </main>
      
      <RightSidebar />
    </div>
  );
};

export default Index;
