import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Calendar, BookOpen } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  mediumUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "[Blog Post Title 1 - To Be Added]",
    excerpt: "[CONTENT TO BE ADDED: Brief excerpt or summary of the blog post that gives readers a taste of what to expect...]",
    date: "January 2025",
    category: "Sustainability",
    mediumUrl: "#",
  },
  {
    id: "2",
    title: "[Blog Post Title 2 - To Be Added]",
    excerpt: "[CONTENT TO BE ADDED: Brief excerpt or summary of the blog post that gives readers a taste of what to expect...]",
    date: "December 2024",
    category: "Climate Action",
    mediumUrl: "#",
  },
  {
    id: "3",
    title: "[Blog Post Title 3 - To Be Added]",
    excerpt: "[CONTENT TO BE ADDED: Brief excerpt or summary of the blog post that gives readers a taste of what to expect...]",
    date: "November 2024",
    category: "Personal",
    mediumUrl: "#",
  },
];

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group"
    >
      <a
        href={post.mediumUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block card-elevated overflow-hidden h-full hover:shadow-lg transition-shadow duration-300"
      >
        {/* Image placeholder */}
        <div className="aspect-[16/10] bg-gradient-to-br from-sage/20 to-sand relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-background/80 backdrop-blur flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="absolute inset-0 bg-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="flex items-center gap-2 text-background text-sm font-medium">
              Read on Medium
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-sage/10 text-primary">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
          </div>

          <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
            Read More
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </a>
    </motion.article>
  );
};

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding bg-background" ref={ref}>
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">From the Blog</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Thoughts & Writings
            </h2>
          </div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 self-start"
          >
            View All on Medium
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
