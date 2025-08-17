import { useState } from "react";
import { Image, Smile, MapPin, Calendar, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export function CreatePost() {
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
  };

  const handlePost = () => {
    if (content.trim()) {
      // Handle post creation logic here
      console.log("Creating post:", { content, image: selectedImage });
      setContent("");
      setSelectedImage(null);
    }
  };

  return (
    <Card className="social-card mb-8 bounce-in">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <div className="relative">
          <Avatar className="h-12 w-12 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">JD</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-social-green rounded-full border-2 border-background"></div>
        </div>
        <div className="flex-1">
          <p className="text-base font-medium text-muted-foreground">What's on your mind, John?</p>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <Textarea
          placeholder="Share your thoughts..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-24 resize-none border-0 shadow-none text-base placeholder:text-muted-foreground focus-visible:ring-0 bg-transparent"
        />
        
        {selectedImage && (
          <div className="relative mt-6 rounded-2xl overflow-hidden group">
            <img 
              src={selectedImage} 
              alt="Selected content" 
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Button
              onClick={removeImage}
              size="sm"
              variant="destructive"
              className="absolute top-3 right-3 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
        
        <div className="flex items-center justify-between pt-6 border-t border-border/30 mt-6">
          <div className="flex items-center gap-1">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload">
              <Button variant="ghost" size="sm" className="social-button text-muted-foreground hover:text-social-blue hover:bg-social-blue/10 gap-2 px-4 py-2 rounded-xl font-medium" asChild>
                <span>
                  <Image className="h-5 w-5" />
                  Photo
                </span>
              </Button>
            </label>
            <Button variant="ghost" size="sm" className="social-button text-muted-foreground hover:text-social-orange hover:bg-social-orange/10 gap-2 px-4 py-2 rounded-xl font-medium">
              <Smile className="h-5 w-5" />
              Feeling
            </Button>
            <Button variant="ghost" size="sm" className="social-button text-muted-foreground hover:text-social-green hover:bg-social-green/10 gap-2 px-4 py-2 rounded-xl font-medium">
              <MapPin className="h-5 w-5" />
              Location
            </Button>
          </div>
          
          <Button 
            onClick={handlePost}
            disabled={!content.trim()}
            className="social-gradient text-white hover:shadow-[var(--shadow-hover)] disabled:opacity-50 px-8 py-2 rounded-xl font-semibold transition-all duration-300"
          >
            Post
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}