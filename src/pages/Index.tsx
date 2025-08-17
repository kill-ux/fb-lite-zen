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
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search posts, people, hashtags..."
                className="pl-12 h-12 bg-muted/50 border-border/30 focus:bg-background rounded-2xl text-base transition-all duration-300"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="relative floating-action h-10 w-10 p-0 rounded-xl">
              <MessageCircle className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary rounded-full flex items-center justify-center">
                <span className="text-[10px] text-primary-foreground font-bold">3</span>
              </span>
            </Button>
            <Button variant="ghost" size="sm" className="relative floating-action h-10 w-10 p-0 rounded-xl">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive rounded-full flex items-center justify-center">
                <span className="text-[10px] text-destructive-foreground font-bold">2</span>
              </span>
            </Button>
            <Avatar className="h-10 w-10 ring-2 ring-primary/20 ring-offset-2 ring-offset-background transition-all duration-300 hover:ring-primary/40">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">JD</AvatarFallback>
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
