import {
  Brain,
  ImageIcon,
  MessageSquare,
  Sparkle,
  TextSelect,
  Video,
} from "lucide-react";

export const features = [
  {
    title: "AI Analysis",
    description:
      "Get deep insights into your video content with our advanced AI analysis. Understand viewer engagement and content quality.",
    icon: Brain,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Smart Transcription",
    description:
      "Get accurate transcription of your videos. Perfect for creating subtitles, blog posts, or repurposing content..",
    icon: MessageSquare,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Thumbail Generation",
    description:
      "Generate eye-catching thumbails using AI. Boost your click-through rates with compelling visuals.",
    icon: ImageIcon,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Title Generation",
    description:
      "Create attention-grapping, SEO-optimized titles for your videos using AI. Maximize views with titles that resonate with your audience.",
    icon: TextSelect,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Shot Script",
    description:
      "Get detailed, step-by-step instructions to recreate viral videos. Learn shooting techniques, angles, and editing tips from successful content.",
    icon: Video,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    title: "Discuss with your AI agent",
    description:
      "Engage in deep conversations about your content strategy, brainstorm ideas, and unlock new creative possibilities with your AI agent companion.",
    icon: Sparkle,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

export const steps = [
  {
    title: "1. Connect Your Content",
    description: "Share your video URL and let your agent get to work",
    icon: Video,
  },
  {
    title: "2. AI Agent Analysis",
    description: "Your personnal agent analyzes evey aspect of your content",
    icon: Brain,
  },
  {
    title: "3. Receive Intelligence",
    description: "Get actionnable insights and strategic recommendations",
    icon: MessageSquare,
  },
];
