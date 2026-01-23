import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatBubble } from "./ChatBubble";
import { TypingIndicator } from "./TypingIndicator";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Hi! I'm the AI assistant for this portfolio. I can help you learn about the developer's skills, projects, experience, and how to get in touch. What would you like to know?",
    isUser: false,
    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  },
];

// Simulated responses based on keywords
const getResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes("skill") || lowerInput.includes("tech")) {
    return "I specialize in Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision. My tech stack includes Python, TensorFlow, PyTorch, scikit-learn, and cloud platforms like AWS and GCP. I also work with MLOps tools like Docker, Kubernetes, and MLflow.";
  }
  
  if (lowerInput.includes("project")) {
    return "I've worked on several exciting projects including: an NLP-powered Sentiment Analysis Engine, a Computer Vision model for real-time object detection, a Recommendation System using collaborative filtering, and a custom LLM fine-tuned for domain-specific tasks. Check out the Projects page for more details!";
  }
  
  if (lowerInput.includes("experience") || lowerInput.includes("work")) {
    return "I have 5+ years of experience in AI/ML, having worked at leading tech companies and startups. I've built production-grade ML systems serving millions of users, led AI research initiatives, and published papers in top conferences. Visit the About page for my full experience timeline.";
  }
  
  if (lowerInput.includes("contact") || lowerInput.includes("hire") || lowerInput.includes("reach")) {
    return "I'd love to connect! You can reach me through the Contact page, or directly via email at hello@example.com. I'm also active on LinkedIn and GitHub. Feel free to reach out for collaborations, job opportunities, or just to chat about AI!";
  }
  
  if (lowerInput.includes("education") || lowerInput.includes("degree")) {
    return "I hold a Master's degree in Computer Science with a specialization in Machine Learning. I've also completed various certifications from Google, AWS, and DeepLearning.AI. Check out the Certificates page for more details!";
  }
  
  if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
    return "Hello! 👋 Great to meet you! How can I help you today? I can tell you about skills, projects, experience, or how to get in touch.";
  }
  
  return "That's a great question! I'm here to help you learn more about this portfolio. You can ask me about skills & technologies, projects I've worked on, work experience & education, or how to get in contact. What interests you most?";
};

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = getResponse(input);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, aiMessage]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickActions = [
    "Tell me about your skills",
    "Show me your projects",
    "How can I contact you?",
  ];

  return (
    <div className="flex flex-col h-[600px] bg-card rounded-xl border border-border overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border bg-secondary/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold">AI Assistant</h3>
            <p className="text-xs text-muted-foreground">Ask me anything about this portfolio</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              message={message.content}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}
        </AnimatePresence>
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      {messages.length <= 1 && (
        <div className="px-4 pb-2 flex flex-wrap gap-2">
          {quickActions.map((action) => (
            <motion.button
              key={action}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setInput(action)}
              className="px-3 py-1.5 text-xs bg-secondary hover:bg-secondary/80 rounded-full transition-colors"
            >
              {action}
            </motion.button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            variant="glow"
            size="icon"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
