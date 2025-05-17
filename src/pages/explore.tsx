
import React, { useEffect, useState } from "react";
import BlogPost from "@/components/BlogPost";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Blog = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [searchTerm, setSearchTerm] = useState("");
  
  const blogPosts = [
    {
      id: "tentacular-urutz",
      title: "PA Rental & Live Sets on Tentacular Urutz Party, Italy",
      excerpt: "Our team provided a custom sound system and technical support for the underground psychedelic trance event in Italy, featuring our signature horn-loaded setup.",
      date: "April 8, 2023",
      readTime: "6 min read",
      author: "Technical Crew",
      category: "Sound",
      imageSrc: "/lovable-uploads/8dced82a-6a2c-48ee-a060-463c28764183.png",
      featured: true,
      price: "900"
    },
    
  ];
  
  const categories = [
    "Sports",
    "Stand Up Comedy",
    "Concerts",
    "Festivals",
    "Theater",
    "Technical"
  ];
  
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Events That Matter</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Discover exclusive, verified experiences — from stand-up shows to stadium thrillers — all with zero reselling and 100% authenticity.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center animate-fade-in animation-delay-200">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-psyco-black-DEFAULT border-psyco-green-muted/50 w-full"
              />
            </div>
            
            <div className="w-full md:w-1/2 overflow-x-auto scrollbar-thin scrollbar-thumb-psyco-green-muted/50">
             <div className="flex gap-2 min-w-max w-fit">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === category
                      ? "bg-psyco-green-DEFAULT text-white"
                      : "bg-psyco-black-DEFAULT text-gray-300 hover:bg-psyco-black-card"
                  }`}
                >
                  {category}
                </button>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPost
                  key={post.id}
                  {...post}
                  className={`animate-fade-in ${post.featured ? "md:col-span-2" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl text-white mb-2">No posts found</h3>
              <p className="text-gray-400">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated with Industry Insights</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive the latest articles, tips, and industry news directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-psyco-black-DEFAULT border-psyco-green-muted/50 flex-grow"
              />
              <button className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
