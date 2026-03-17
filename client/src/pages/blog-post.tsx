import { Helmet } from "react-helmet";
import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-32 pb-24 bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif mb-4">Post Not Found</h1>
            <Link href="/blog" className="text-primary hover:underline">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Well Done Beauty Salon Dubai</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://welldonebeautysalon.com/blog/${post.slug}`} />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="min-h-screen pt-32 pb-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <div className="mb-6">
              <span className="bg-secondary text-white text-xs font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-8">
              <span>{post.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden mb-10 h-72 md:h-96">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="prose prose-neutral max-w-none text-foreground/80 leading-relaxed space-y-4
                prose-h2:font-serif prose-h2:text-2xl prose-h2:font-semibold prose-h2:text-foreground prose-h2:mt-8 prose-h2:mb-4
                prose-h3:font-serif prose-h3:text-xl prose-h3:font-semibold prose-h3:text-foreground prose-h3:mt-6 prose-h3:mb-3
                prose-p:leading-relaxed prose-p:mb-4
                prose-ul:space-y-2 prose-ul:mb-4 prose-li:leading-relaxed
                prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 p-8 bg-secondary/10 border border-secondary/20 rounded-2xl">
              <h3 className="text-2xl font-serif font-semibold mb-3">
                Ready to Experience This Treatment?
              </h3>
              <p className="text-muted-foreground mb-6">
                Book your at-home beauty session in Dubai today. Available every day from 10am to midnight.
              </p>
              <a
                href="https://wa.me/971509270282?text=Hello,%20I%20want%20to%20book%20a%20home%20beauty%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bc5c] text-white px-6 py-3 rounded-full font-medium transition-colors shadow-md"
              >
                <SiWhatsapp size={18} />
                Book via WhatsApp
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-border pt-8">
              {prevPost && (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex flex-col gap-2 p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <ArrowLeft size={14} /> Previous Post
                  </span>
                  <span className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {prevPost.title}
                  </span>
                </Link>
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex flex-col gap-2 p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all md:text-right md:items-end"
                >
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    Next Post <ArrowRight size={14} />
                  </span>
                  <span className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {nextPost.title}
                  </span>
                </Link>
              )}
            </div>

          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}