import { TrendingUp, UserPlus, Calendar, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const trendingTopics = [
  { tag: "#ReactJS", posts: "42.5K posts" },
  { tag: "#WebDevelopment", posts: "28.1K posts" },
  { tag: "#TechNews", posts: "15.7K posts" },
  { tag: "#AI", posts: "89.2K posts" },
];

const suggestedFriends = [
  { name: "Sarah Wilson", username: "sarahw", mutualFriends: 12 },
  { name: "Mike Chen", username: "mikechen", mutualFriends: 8 },
  { name: "Emma Davis", username: "emmad", mutualFriends: 15 },
];

const upcomingEvents = [
  { name: "Tech Meetup 2024", date: "Tomorrow", attendees: 156 },
  { name: "Design Workshop", date: "This Friday", attendees: 89 },
];

export function RightSidebar() {
  return (
    <aside className="fixed right-0 top-0 z-30 h-screen w-80 overflow-y-auto p-4 pt-20 bg-background/80 backdrop-blur-md">
      <div className="space-y-6">
        {/* Trending Topics */}
        <Card className="social-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="h-5 w-5 text-primary" />
              Trending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <div key={topic.tag} className="flex items-center justify-between group cursor-pointer">
                  <div>
                    <p className="font-medium text-sm group-hover:text-primary transition-colors">
                      {topic.tag}
                    </p>
                    <p className="text-xs text-muted-foreground">{topic.posts}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-primary">#{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Suggested Friends */}
        <Card className="social-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <UserPlus className="h-5 w-5 text-primary" />
              People You May Know
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {suggestedFriends.map((friend) => (
                <div key={friend.username} className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-muted">
                      {friend.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-none">{friend.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {friend.mutualFriends} mutual friends
                    </p>
                  </div>
                  <Button size="sm" variant="outline" className="text-xs px-3">
                    Add
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="social-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.name} className="group cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium group-hover:text-primary transition-colors">
                        {event.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{event.date}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <MessageCircle className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {event.attendees} attending
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
}