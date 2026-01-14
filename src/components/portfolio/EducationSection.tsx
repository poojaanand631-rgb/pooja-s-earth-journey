import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, BookOpen, Award, MapPin } from "lucide-react";

interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  gpa?: string;
  status: "completed" | "current";
  subjects?: string[];
  icon: React.ReactNode;
}

const educations: Education[] = [
  {
    degree: "MSc",
    field: "Environmental Management",
    institution: "National University of Singapore",
    location: "Singapore",
    status: "current",
    subjects: [
      "Climate Policy",
      "Waste Management",
      "Circular Economy",
      "Sustainability Assessment",
      "Environmental Impact Assessment",
      "Green Finance",
    ],
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    degree: "Bachelor of Engineering",
    field: "Electronics and Instrumentation",
    institution: "Dayananda Sagar College of Engineering",
    location: "India",
    gpa: "8.3/10",
    status: "completed",
    icon: <GraduationCap className="w-6 h-6" />,
  },
];

const EducationCard = ({ education, index }: { education: Education; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="card-elevated p-6 md:p-8 h-full relative overflow-hidden group"
    >
      {/* Current badge */}
      {education.status === "current" && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-terracotta/10 text-secondary border border-terracotta/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary"></span>
            </span>
            Final Semester
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-sage/10 border border-sage/20 flex items-center justify-center mb-6 text-primary">
        {education.icon}
      </div>

      {/* Degree */}
      <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-1">
        {education.degree}
      </h3>
      <p className="text-lg text-primary font-medium mb-3">{education.field}</p>

      {/* Institution */}
      <div className="space-y-2 mb-4">
        <p className="text-muted-foreground font-medium">{education.institution}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          {education.location}
        </div>
      </div>

      {/* GPA if available */}
      {education.gpa && (
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-4 h-4 text-terracotta" />
          <span className="text-sm font-medium text-foreground">GPA: {education.gpa}</span>
        </div>
      )}

      {/* Subjects if available */}
      {education.subjects && (
        <div className="space-y-3 pt-4 border-t border-border">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Key Subjects
          </p>
          <div className="flex flex-wrap gap-2">
            {education.subjects.map((subject) => (
              <span
                key={subject}
                className="px-3 py-1 rounded-full text-xs font-medium bg-sand text-foreground"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sage to-olive opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Academic Background</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Education
          </h2>
        </motion.div>

        {/* Timeline connector */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sage via-sage/50 to-transparent -translate-x-1/2 z-0" />
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
            {educations.map((education, index) => (
              <EducationCard key={education.institution} education={education} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
