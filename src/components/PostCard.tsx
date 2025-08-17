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
    <Card className="social-card fade-in hover:shadow-[var(--shadow-medium)] transition-all duration-300">
      <CardHeader className="flex flex-row items-center gap-3 pb-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} />
          <AvatarFallback className="bg-primary text-primary-foreground">
            {author.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm leading-none">{author.name}</h3>
          <p className="text-xs text-muted-foreground mt-1">@{author.username} · {timestamp}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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
      
      <CardContent className="pt-0">
        <p className="text-sm leading-relaxed mb-4">{content}</p>
        
        {image && (
          <div className="rounded-lg overflow-hidden mb-4 bg-muted">
            <img 
              src={image} 
              alt="Post content" 
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <Button variant="ghost" size="sm" className="social-button text-muted-foreground hover:text-social-green">
            <Heart className="h-4 w-4 mr-2" />
            {likes}
          </Button>
          <Button variant="ghost" size="sm" className="social-button text-muted-foreground hover:text-primary">
            <MessageCircle className="h-4 w-4 mr-2" />
            {comments}
          </Button>
          <Button variant="ghost" size="sm" className="social-button text-muted-foreground hover:text-social-purple">
            <Share className="h-4 w-4 mr-2" />
            {shares}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}