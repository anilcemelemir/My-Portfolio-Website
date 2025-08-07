import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "A Comprehensive Beginner’s Guide to Building React Applications with TypeScript",
      excerpt: "Learn what TypeScript is, why it pairs perfectly with React, and how to create your first fully typed React application from scratch.",
      date: "2025-08-07",
      readTime: "12 min to read",
      category: "React & TypeScript",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 2,
      title: '.NET Core AI Integration: A Beginner’s Guide to ML.NET and Practical Machine Learning',
      excerpt: 'Learn how to harness the power of AI in your .NET Core apps using ML.NET, Microsoft’s open-source machine learning framework. Step-by-step from concepts to code.',
      date: '2025-08-07',
      readTime: '11 min to read',
      category: 'AI & Machine Learning',
      image: 'https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 3,
      title: 'Building Neural Networks from Scratch in Python: A Practical Guide',
      excerpt: 'Learn how neural networks work under the hood, understand key concepts like neurons, layers, and activation functions, and build your own simple neural network using Python and NumPy before exploring PyTorch implementations.',
      date: '2025-08-07',
      readTime: '12 min to read',
      category: 'Artificial Intelligence',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'ASP.NET Core 2025: Key Innovations Every Developer Should Know',
      excerpt: 'Explore what\'s new in ASP.NET Core 2025—Native AOT, built-in GraphQL, Blazor Hybrid, and more—to build faster, more secure cloud-ready apps.',
      date: '2025-08-07',
      readTime: '9 min to read',
      category: 'ASP.NET Core',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      title: "Using React and TypeScript with ASP.NET MVC: A Practical Guide",
      excerpt: "Learn how to seamlessly integrate React and TypeScript into your ASP.NET MVC projects for modern, scalable, and type-safe web applications.",
      date: "2025-08-07",
      readTime: "8 min to read",
      category: "React & TypeScript",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I enjoy sharing my knowledge and experiences through writing. Here are some 
            of my recent articles about web development, programming, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium group-hover:underline"
                  style={{ textDecoration: 'none' }}
                  replace={false}
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;