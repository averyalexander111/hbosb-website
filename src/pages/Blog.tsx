import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  published_at: string;
  tags: string[];
  featured_image?: string;
  meta_description?: string;
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts", searchTerm, selectedTag],
    queryFn: async () => {
      let query = supabase
        .from("blog_posts")
        .select("*")
        .eq("status", "published")
        .lte("published_at", new Date().toISOString())
        .order("published_at", { ascending: false });

      if (searchTerm) {
        query = query.or(`title.ilike.%${searchTerm}%,excerpt.ilike.%${searchTerm}%`);
      }

      if (selectedTag) {
        query = query.contains("tags", [selectedTag]);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as BlogPost[];
    },
  });

  // Get all unique tags
  const { data: allTags } = useQuery({
    queryKey: ["blog-tags"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("tags")
        .eq("status", "published");
      
      if (error) throw error;
      
      const uniqueTags = new Set<string>();
      data?.forEach(post => {
        post.tags?.forEach(tag => uniqueTags.add(tag));
      });
      
      return Array.from(uniqueTags).sort();
    },
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog - BaySignal AI | Digital Marketing Insights & Tips</title>
        <meta name="description" content="Stay updated with the latest digital marketing insights, SEO tips, and AI automation strategies from BaySignal AI's expert team." />
        <meta property="og:title" content="Blog - BaySignal AI | Digital Marketing Insights & Tips" />
        <meta property="og:description" content="Stay updated with the latest digital marketing insights, SEO tips, and AI automation strategies from BaySignal AI's expert team." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${window.location.origin}/blog`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Digital Marketing Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert insights on SEO, digital marketing, and AI automation to grow your business
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              {selectedTag && (
                <Button
                  variant="outline"
                  onClick={() => setSelectedTag(null)}
                  className="shrink-0"
                >
                  Clear Filter
                </Button>
              )}
            </div>

            {/* Tags */}
            {allTags && allTags.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center mt-6">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? "default" : "secondary"}
                    className="cursor-pointer hover:opacity-80"
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Blog Posts */}
        <section className="pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="animate-pulse">
                    <div className="h-48 bg-muted rounded-t-lg"></div>
                    <CardHeader>
                      <div className="h-4 bg-muted rounded w-3/4"></div>
                      <div className="h-3 bg-muted rounded w-1/2"></div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="h-3 bg-muted rounded"></div>
                        <div className="h-3 bg-muted rounded w-5/6"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : posts && posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <Link to={`/blog/${post.slug}`}>
                      {post.featured_image && (
                        <div className="h-48 overflow-hidden rounded-t-lg">
                          <img
                            src={post.featured_image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(post.published_at)}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        {post.excerpt && (
                          <CardDescription className="line-clamp-3">
                            {post.excerpt}
                          </CardDescription>
                        )}
                      </CardHeader>
                      <CardContent>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {searchTerm || selectedTag ? "No posts found" : "No blog posts yet"}
                </h3>
                <p className="text-muted-foreground">
                  {searchTerm || selectedTag
                    ? "Try adjusting your search or filter criteria."
                    : "Check back soon for our latest insights and tips!"}
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;