import { CreatePost } from "@/components/CreatePost";
import { PostCard } from "@/components/PostCard";

import webAppLaunch from "@/assets/web-app-launch.jpg";
import officeSunset from "@/assets/office-sunset.jpg";
import teamCelebration from "@/assets/team-celebration.jpg";

const mockPosts = [
  {
    author: {
      name: "Alice Johnson",
      username: "alicej",
      avatar: "/placeholder.svg"
    },
    content: "Just launched my new web app using React and TypeScript! The development experience has been amazing. Can't wait to share more details soon. 🚀",
    image: webAppLaunch,
    timestamp: "2h",
    likes: 124,
    comments: 23,
    shares: 12
  },
  {
    author: {
      name: "David Kim",
      username: "davidk",
      avatar: "/placeholder.svg"
    },
    content: "Beautiful sunset from my office window today. Sometimes you need to take a moment to appreciate the simple things in life. Nature never fails to inspire creativity! 🌅",
    image: officeSunset,
    timestamp: "4h",
    likes: 89,
    comments: 15,
    shares: 7
  },
  {
    author: {
      name: "Maria Garcia",
      username: "mariag",
      avatar: "/placeholder.svg"
    },
    content: "Excited to share that our team just reached 10,000 users! Thank you to everyone who has supported us on this journey. This is just the beginning! 🎉",
    image: teamCelebration,
    timestamp: "6h",
    likes: 256,
    comments: 48,
    shares: 34
  },
  {
    author: {
      name: "Alex Thompson",
      username: "alext",
      avatar: "/placeholder.svg"
    },
    content: "Coffee, code, and creativity - the perfect combination for a productive morning. Working on something exciting that I can't wait to reveal! ☕️💻",
    timestamp: "8h",
    likes: 76,
    comments: 18,
    shares: 5
  }
];

export function Home() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-6">
      <CreatePost />
      
      <div className="space-y-8">
        {mockPosts.map((post, index) => (
          <div key={index} className={`fade-in stagger-${Math.min(index + 1, 4)}`}>
            <PostCard {...post} />
          </div>
        ))}
      </div>
      
      {/* Load more indicator */}
      <div className="text-center mt-12 py-8 fade-in">
        <p className="text-muted-foreground text-base font-medium">You're all caught up! 🎉</p>
        <p className="text-muted-foreground/60 text-sm mt-2">Check back later for new posts</p>
      </div>
    </div>
  );
}