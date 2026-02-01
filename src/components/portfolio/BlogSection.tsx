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
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group"
    >
      <a
        href={post.mediumUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block card-elevated overflow-hidden h-full transition-all duration-300 ease-in-out"
      >
        {/* Image placeholder */}
        <div className="aspect-[16/10] bg-gradient-to-br from-sage/25 to-sage/10 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-lg bg-background/80 backdrop-blur flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
          </div>
          {/* Hover overlay - subtle accent underline */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-x-100 scale-x-0 origin-left" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 rounded-sm text-xs font-medium bg-sage/10 text-primary uppercase tracking-wider">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
          </div>

          <h3 className="font-heading text-xl md:text-2xl font-normal text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight relative">
            {post.title}
            <ArrowUpRight className="w-4 h-4 inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider">
            Read More
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
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
    <section id="blog" className="section-seamless section-bg-blog min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16" ref={ref}>
      <div className="container-wide mx-auto lg:ml-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-xs font-medium text-primary uppercase tracking-widest mb-4 block">From the Blog</span>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-normal text-foreground leading-tight">
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

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
