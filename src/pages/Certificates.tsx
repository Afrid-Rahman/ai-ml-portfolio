import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { CertificateCard } from "@/components/cards/CertificateCard";

const certificates = [
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2024",
    credentialUrl: "https://example.com",
  },
  {
    title: "AWS Machine Learning Specialty",
    issuer: "Amazon Web Services",
    year: "2023",
    credentialUrl: "https://example.com",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    year: "2023",
    credentialUrl: "https://example.com",
  },
  {
    title: "Professional Machine Learning Engineer",
    issuer: "Google Cloud",
    year: "2023",
    credentialUrl: "https://example.com",
  },
  {
    title: "MLOps Specialization",
    issuer: "DeepLearning.AI",
    year: "2022",
    credentialUrl: "https://example.com",
  },
  {
    title: "Natural Language Processing Specialization",
    issuer: "DeepLearning.AI",
    year: "2022",
    credentialUrl: "https://example.com",
  },
  {
    title: "Computer Vision Nanodegree",
    issuer: "Udacity",
    year: "2021",
    credentialUrl: "https://example.com",
  },
  {
    title: "Data Engineering Professional Certificate",
    issuer: "Google",
    year: "2021",
    credentialUrl: "https://example.com",
  },
];

const Certificates = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Credentials"
            title="Certifications"
            description="Professional certifications demonstrating expertise in AI, ML, and cloud technologies"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <CertificateCard key={cert.title} {...cert} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Certificates;
