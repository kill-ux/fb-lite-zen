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
    <Card className="social-card mb-6">
      <CardHeader className="flex flex-row items-center gap-3 pb-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="text-sm font-medium">What's on your mind, John?</p>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <Textarea
          placeholder="Share your thoughts..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-20 resize-none border-0 shadow-none text-base placeholder:text-muted-foreground focus-visible:ring-0"
        />
        
        {selectedImage && (
          <div className="relative mt-4 rounded-lg overflow-hidden">
            <img 
              src={selectedImage} 
              alt="Selected content" 
              className="w-full h-64 object-cover"
            />
            <Button
              onClick={removeImage}
              size="sm"
              variant="destructive"
              className="absolute top-2 right-2 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
        
        <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-4">
          <div className="flex items-center gap-2">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload">
              <Button variant="ghost" size="sm" className="social-button text-muted-foreground hover:text-social-blue" asChild>
                <span>
                  <Image className="h-5 w-5 mr-2" />
                  Photo
                </span>
              </Button>
            </label>
            <Button variant="ghost" size="sm" className="social-button text-muted-foreground hover:text-social-orange">
              <Smile className="h-5 w-5 mr-2" />
              Feeling
            </Button>
            <Button variant="ghost" size="sm" className="social-button text-muted-foreground hover:text-social-green">
              <MapPin className="h-5 w-5 mr-2" />
              Location
            </Button>
          </div>
          
          <Button 
            onClick={handlePost}
            disabled={!content.trim()}
            className="social-gradient text-white hover:shadow-[var(--shadow-soft)] disabled:opacity-50"
          >
            Post
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}