import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { ChatInterface } from "@/components/chat/ChatInterface";

const Chat = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="AI Assistant"
            title="Chat With Me"
            description="Have questions about my skills, projects, or experience? Ask my AI assistant!"
          />

          <div className="max-w-3xl mx-auto">
            <ChatInterface />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Chat;
