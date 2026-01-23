import { motion } from "framer-motion";
import { Download, Brain, Code, Database, Cloud, Cpu, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillCard } from "@/components/cards/SkillCard";
import { TimelineItem } from "@/components/timeline/TimelineItem";

const skills = [
  {
    title: "Machine Learning",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "XGBoost", "Keras", "JAX"],
  },
  {
    title: "Deep Learning",
    icon: Cpu,
    skills: ["CNNs", "RNNs", "Transformers", "GANs", "LLMs", "Diffusion Models"],
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "R", "C++"],
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["Pandas", "Spark", "Airflow", "dbt", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud & MLOps",
    icon: Cloud,
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "MLflow", "Kubeflow"],
  },
  {
    title: "Analytics",
    icon: BarChart3,
    skills: ["Jupyter", "Matplotlib", "Plotly", "Streamlit", "Tableau", "Power BI"],
  },
];

const experience = [
  {
    title: "Senior AI/ML Engineer",
    subtitle: "TechCorp AI",
    date: "2022 - Present",
    description: "Leading AI initiatives, building production ML systems serving millions of users. Developed NLP pipelines that improved customer satisfaction by 40%.",
  },
  {
    title: "Machine Learning Engineer",
    subtitle: "DataDriven Inc.",
    date: "2020 - 2022",
    description: "Built recommendation systems and computer vision solutions. Reduced model inference latency by 60% through optimization techniques.",
  },
  {
    title: "Data Scientist",
    subtitle: "StartupAI",
    date: "2018 - 2020",
    description: "Developed predictive models for fintech applications. Created real-time fraud detection system with 99.2% accuracy.",
  },
];

const education = [
  {
    title: "M.S. Computer Science",
    subtitle: "Stanford University",
    date: "2016 - 2018",
    description: "Specialization in Machine Learning and AI. Published research on neural network optimization techniques.",
  },
  {
    title: "B.S. Computer Science",
    subtitle: "UC Berkeley",
    date: "2012 - 2016",
    description: "Minor in Statistics. Dean's List. Undergraduate research in natural language processing.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-30 animate-pulse-glow" />
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-card">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-3 py-1 text-xs font-mono font-medium text-primary bg-primary/10 rounded-full mb-4">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Building the Future with{" "}
                <span className="text-gradient">AI</span>
              </h1>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  I'm a passionate AI/ML Engineer with 5+ years of experience building intelligent systems 
                  that solve real-world problems. My expertise spans the full ML lifecycle, from research 
                  and experimentation to production deployment at scale.
                </p>
                <p>
                  Currently focused on Large Language Models, Computer Vision, and MLOps. I believe in 
                  creating AI that's not just powerful, but also ethical, interpretable, and accessible.
                </p>
                <p>
                  When I'm not training models, you'll find me contributing to open-source projects, 
                  writing technical blog posts, or speaking at ML conferences.
                </p>
              </div>
              <Button variant="glow" asChild>
                <a href="/cv.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Skills"
            title="Technical Expertise"
            description="A comprehensive toolkit for building end-to-end AI/ML solutions"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.title} {...skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Experience */}
            <div>
              <SectionHeading
                badge="Experience"
                title="Work History"
                align="left"
              />
              <div className="mt-8">
                {experience.map((item, index) => (
                  <TimelineItem key={item.title} {...item} index={index} />
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <SectionHeading
                badge="Education"
                title="Academic Background"
                align="left"
              />
              <div className="mt-8">
                {education.map((item, index) => (
                  <TimelineItem key={item.title} {...item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
