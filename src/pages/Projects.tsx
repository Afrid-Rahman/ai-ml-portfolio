import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/cards/ProjectCard";

const projects = [
  {
    title: "NLP Sentiment Analysis Engine",
    description: "A production-grade sentiment analysis system using transformer models, capable of processing millions of text documents with 95% accuracy.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    tags: ["NLP", "Transformers", "Python", "FastAPI"],
    features: [
      "Real-time sentiment classification",
      "Multi-language support (10+ languages)",
      "REST API with 99.9% uptime",
      "Custom model fine-tuning pipeline",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Real-Time Object Detection",
    description: "Computer vision system for real-time object detection and tracking, optimized for edge devices with 60+ FPS performance.",
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=600&h=400&fit=crop",
    tags: ["Computer Vision", "YOLO", "TensorRT", "C++"],
    features: [
      "60+ FPS on edge devices",
      "Custom object training pipeline",
      "Multi-camera stream support",
      "Automated annotation tools",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Recommendation System",
    description: "Hybrid recommendation engine combining collaborative filtering and content-based approaches, serving 10M+ daily recommendations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["RecSys", "Deep Learning", "Spark", "AWS"],
    features: [
      "Real-time personalization",
      "A/B testing framework",
      "Cold-start handling",
      "Explainable recommendations",
    ],
    githubUrl: "https://github.com",
  },
  {
    title: "Custom LLM Fine-Tuning Platform",
    description: "End-to-end platform for fine-tuning large language models on domain-specific data with RLHF and DPO techniques.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["LLMs", "RLHF", "PyTorch", "Kubernetes"],
    features: [
      "LoRA/QLoRA fine-tuning",
      "RLHF implementation",
      "Distributed training support",
      "Model evaluation suite",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Fraud Detection System",
    description: "ML-powered fraud detection for financial transactions with 99.2% accuracy and sub-100ms latency for real-time scoring.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    tags: ["Anomaly Detection", "XGBoost", "Kafka", "Redis"],
    features: [
      "Real-time transaction scoring",
      "Adaptive learning from feedback",
      "Feature engineering pipeline",
      "Compliance reporting",
    ],
    githubUrl: "https://github.com",
  },
  {
    title: "MLOps Pipeline Framework",
    description: "Comprehensive MLOps framework for automating ML workflows, from data versioning to model monitoring in production.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["MLOps", "MLflow", "Airflow", "Docker"],
    features: [
      "Automated model training",
      "Data versioning with DVC",
      "Model registry integration",
      "Production monitoring",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Portfolio"
            title="Featured Projects"
            description="A collection of AI/ML projects showcasing my expertise in building production-ready intelligent systems"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
