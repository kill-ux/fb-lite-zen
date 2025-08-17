import { Heart, MessageCircle, Share, MoreHorizontal, Bookmark } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PostCardProps {
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
}

export function PostCard({ author, content, image, timestamp, likes, comments, shares }: PostCardProps) {
  return (
    <Card className="social-card fade-in group cursor-pointer">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <div className="relative">
          <Avatar className="h-12 w-12 ring-2 ring-primary/10 transition-all duration-300 group-hover:ring-primary/30">
            <AvatarImage src={author.avatar} />
            <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-semibold">
              {author.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-social-green rounded-full border-2 border-background"></div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base leading-none group-hover:text-primary transition-colors duration-300">{author.name}</h3>
          <p className="text-sm text-muted-foreground mt-1.5 font-medium">@{author.username} · {timestamp}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 floating-action opacity-0 group-hover:opacity-100 transition-all duration-300">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Bookmark className="mr-2 h-4 w-4" />
              Save post
            </DropdownMenuItem>
            <DropdownMenuItem>Hide post</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Report post</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      
      <CardContent className="pt-0 px-6">
        <p className="text-base leading-relaxed mb-6 text-foreground/90">{content}</p>
        
        {image && (
          <div className="rounded-2xl overflow-hidden mb-6 bg-muted relative group/image">
            <img 
              src={image} 
              alt="Post content" 
              className="w-full h-72 object-cover transition-all duration-500 group-hover/image:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}
        
        <div className="flex items-center justify-between pt-4 border-t border-border/30">
          <Button variant="ghost" size="sm" className="social-button text-muted-foreground hover:text-social-green hover:bg-social-green/10 gap-2 px-4 py-2 rounded-xl font-medium">
            <Heart className="h-4 w-4" />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="social-button text-muted-foreground hover:text-primary hover:bg-primary/10 gap-2 px-4 py-2 rounded-xl font-medium">
            <MessageCircle className="h-4 w-4" />
            <span>{comments}</span>
          </Button>
          <Button variant="ghost" size="sm" className="social-button text-muted-foreground hover:text-social-purple hover:bg-social-purple/10 gap-2 px-4 py-2 rounded-xl font-medium">
            <Share className="h-4 w-4" />
            <span>{shares}</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}