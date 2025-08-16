import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Eye, Calendar } from "lucide-react";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  published_at: string | null;
  status: "draft" | "published" | "archived";
  tags: string[];
  featured_image?: string;
  meta_description?: string;
  seo_title?: string;
}

const BlogAdmin = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    author: "BaySignal AI Team",
    status: "draft" as "draft" | "published" | "archived",
    tags: "",
    featured_image: "",
    meta_description: "",
    seo_title: "",
  });

  const queryClient = useQueryClient();

  const { data: posts, isLoading } = useQuery({
    queryKey: ["admin-blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as BlogPost[];
    },
  });

  const createPostMutation = useMutation({
    mutationFn: async (postData: any) => {
      const { data, error } = await supabase
        .from("blog_posts")
        .insert([{
          ...postData,
          tags: postData.tags ? postData.tags.split(",").map((tag: string) => tag.trim()) : [],
          published_at: postData.status === "published" ? new Date().toISOString() : null,
        }])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-blog-posts"] });
      toast.success("Blog post created successfully!");
      resetForm();
    },
    onError: (error) => {
      toast.error("Failed to create blog post: " + error.message);
    },
  });

  const updatePostMutation = useMutation({
    mutationFn: async ({ id, postData }: { id: string; postData: any }) => {
      const { data, error } = await supabase
        .from("blog_posts")
        .update({
          ...postData,
          tags: postData.tags ? postData.tags.split(",").map((tag: string) => tag.trim()) : [],
          published_at: postData.status === "published" && !editingPost?.published_at
            ? new Date().toISOString()
            : editingPost?.published_at,
        })
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-blog-posts"] });
      toast.success("Blog post updated successfully!");
      resetForm();
    },
    onError: (error) => {
      toast.error("Failed to update blog post: " + error.message);
    },
  });

  const deletePostMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-blog-posts"] });
      toast.success("Blog post deleted successfully!");
    },
    onError: (error) => {
      toast.error("Failed to delete blog post: " + error.message);
    },
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      content: "",
      excerpt: "",
      author: "BaySignal AI Team",
      status: "draft" as "draft" | "published" | "archived",
      tags: "",
      featured_image: "",
      meta_description: "",
      seo_title: "",
    });
    setIsEditing(false);
    setEditingPost(null);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      author: post.author,
      status: post.status,
      tags: post.tags?.join(", ") || "",
      featured_image: post.featured_image || "",
      meta_description: post.meta_description || "",
      seo_title: post.seo_title || "",
    });
    setIsEditing(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content) {
      toast.error("Title and content are required!");
      return;
    }

    const slug = formData.slug || generateSlug(formData.title);

    if (isEditing && editingPost) {
      updatePostMutation.mutate({
        id: editingPost.id,
        postData: { ...formData, slug },
      });
    } else {
      createPostMutation.mutate({ ...formData, slug });
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Not published";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog Admin - BaySignal AI</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background pt-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-foreground">Blog Administration</h1>
            <Button onClick={() => setIsEditing(true)}>
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </div>

          <Tabs defaultValue="posts" className="w-full">
            <TabsList>
              <TabsTrigger value="posts">All Posts</TabsTrigger>
              <TabsTrigger value="editor">
                {isEditing ? "Edit Post" : "New Post"}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="posts" className="space-y-4">
              {isLoading ? (
                <div className="grid gap-4">
                  {[...Array(5)].map((_, i) => (
                    <Card key={i} className="animate-pulse">
                      <CardHeader>
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                        <div className="h-3 bg-muted rounded w-1/2"></div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="grid gap-4">
                  {posts?.map((post) => (
                    <Card key={post.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <CardTitle className="mb-2">{post.title}</CardTitle>
                            <CardDescription>{post.excerpt}</CardDescription>
                            <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                              <Badge variant={
                                post.status === "published" ? "default" :
                                post.status === "draft" ? "secondary" : "destructive"
                              }>
                                {post.status}
                              </Badge>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {formatDate(post.published_at)}
                              </div>
                              <span>by {post.author}</span>
                            </div>
                            {post.tags && post.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-2">
                                {post.tags.map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="flex gap-2 ml-4">
                            {post.status === "published" && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(`/blog/${post.slug}`, "_blank")}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            )}
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEdit(post)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Delete Blog Post</DialogTitle>
                                  <DialogDescription>
                                    Are you sure you want to delete "{post.title}"? This action cannot be undone.
                                  </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                  <Button
                                    variant="destructive"
                                    onClick={() => deletePostMutation.mutate(post.id)}
                                  >
                                    Delete
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="editor">
              <Card>
                <CardHeader>
                  <CardTitle>{isEditing ? "Edit Post" : "Create New Post"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title">Title *</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => {
                            setFormData({ ...formData, title: e.target.value });
                            if (!formData.slug) {
                              setFormData(prev => ({ ...prev, slug: generateSlug(e.target.value) }));
                            }
                          }}
                          placeholder="Enter post title"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="slug">Slug</Label>
                        <Input
                          id="slug"
                          value={formData.slug}
                          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                          placeholder="url-friendly-slug"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="excerpt">Excerpt</Label>
                      <Textarea
                        id="excerpt"
                        value={formData.excerpt}
                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                        placeholder="Brief description of the post"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="content">Content *</Label>
                      <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        placeholder="Write your blog post content here (HTML supported)"
                        rows={15}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="author">Author</Label>
                        <Input
                          id="author"
                          value={formData.author}
                          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                          placeholder="Author name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="status">Status</Label>
                        <Select
                          value={formData.status}
                          onValueChange={(value: "draft" | "published" | "archived") =>
                            setFormData({ ...formData, status: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="published">Published</SelectItem>
                            <SelectItem value="archived">Archived</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="tags">Tags (comma-separated)</Label>
                      <Input
                        id="tags"
                        value={formData.tags}
                        onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                        placeholder="SEO, Digital Marketing, AI"
                      />
                    </div>

                    <div>
                      <Label htmlFor="featured_image">Featured Image URL</Label>
                      <Input
                        id="featured_image"
                        value={formData.featured_image}
                        onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="seo_title">SEO Title</Label>
                        <Input
                          id="seo_title"
                          value={formData.seo_title}
                          onChange={(e) => setFormData({ ...formData, seo_title: e.target.value })}
                          placeholder="SEO optimized title"
                        />
                      </div>
                      <div>
                        <Label htmlFor="meta_description">Meta Description</Label>
                        <Input
                          id="meta_description"
                          value={formData.meta_description}
                          onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                          placeholder="SEO meta description (160 chars max)"
                          maxLength={160}
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        disabled={createPostMutation.isPending || updatePostMutation.isPending}
                      >
                        {isEditing ? "Update Post" : "Create Post"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={resetForm}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default BlogAdmin;