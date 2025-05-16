
import React, { useEffect } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { Star, Award, Building, Users, CheckCircle, MoveRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const References = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Event Coordinator",
      company: "Eventify",
      testimonial: "The Psycotik Crew delivered an exceptional experience for our corporate event. The sound quality was impeccable and the lighting effects created exactly the atmosphere we wanted. The team was professional from start to finish, handling setup and teardown with minimal disruption.",
      rating: 5,
      imageSrc: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Mark Williams",
      position: "Wedding Planner",
      company: "Perfect Day Weddings",
      testimonial: "We've worked with many sound and light providers, but Psycotik Crew stands out for their professionalism and attention to detail. Our clients always rave about their service. They understand the importance of creating the right mood for different parts of the wedding celebration.",
      rating: 5,
      imageSrc: "https://randomuser.me/api/portraits/men/57.jpg"
    },
    {
      name: "Emily Turner",
      position: "Festival Director",
      company: "Urban Music Festival",
      testimonial: "For three years in a row, Psycotik Crew has been our go-to for festival sound and lighting. Their team handles everything from setup to teardown with amazing efficiency. They always have backup plans for outdoor conditions and have never let us down.",
      rating: 4,
      imageSrc: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      name: "James Rodriguez",
      position: "Club Owner",
      company: "Pulse Nightclub",
      testimonial: "We upgraded our entire sound and lighting system with Psycotik Crew's help. Their expertise in selecting the right equipment for our space was invaluable. Our customers immediately noticed the improvement in sound quality and immersive lighting effects.",
      rating: 5,
      imageSrc: "https://randomuser.me/api/portraits/men/23.jpg"
    },
    {
      name: "Lisa Chen",
      position: "Marketing Director",
      company: "TechCorp Solutions",
      testimonial: "Our annual company gala needed a special touch, and Psycotik Crew delivered beyond our expectations. They incorporated our brand colors into the lighting design and ensured perfect audio for our presentations and live band performance.",
      rating: 5,
      imageSrc: "https://randomuser.me/api/portraits/women/69.jpg"
    },
    {
      name: "David Thompson",
      position: "Band Manager",
      company: "The Resonators",
      testimonial: "Working with Psycotik Crew on our European tour was a great experience. Their team's technical knowledge ensured consistent sound quality across diverse venues, and they were incredibly responsive to our band's specific requirements.",
      rating: 4,
      imageSrc: "https://randomuser.me/api/portraits/men/72.jpg"
    }
  ];
  
  const clientLogos = [
    {
      name: "TechCorp Solutions",
      logo: "https://via.placeholder.com/150x80/1E1E1E/10B981?text=TechCorp"
    },
    {
      name: "Urban Music Festival",
      logo: "https://via.placeholder.com/150x80/1E1E1E/10B981?text=UMF"
    },
    {
      name: "Perfect Day Weddings",
      logo: "https://via.placeholder.com/150x80/1E1E1E/10B981?text=PDW"
    },
    {
      name: "Pulse Nightclub",
      logo: "https://via.placeholder.com/150x80/1E1E1E/10B981?text=Pulse"
    },
    {
      name: "Eventify",
      logo: "https://via.placeholder.com/150x80/1E1E1E/10B981?text=Eventify"
    },
    {
      name: "City Concert Hall",
      logo: "https://via.placeholder.com/150x80/1E1E1E/10B981?text=CCH"
    }
  ];
  
  const stats = [
    {
      icon: <CheckCircle size={32} />,
      value: "500+",
      label: "Events Serviced"
    },
    {
      icon: <Users size={32} />,
      value: "98%",
      label: "Client Satisfaction"
    },
    {
      icon: <Building size={32} />,
      value: "50+",
      label: "Venue Partnerships"
    },
    {
      icon: <Award size={32} />,
      value: "12",
      label: "Industry Awards"
    }
  ];

  const caseStudies = [
    {
      title: "Monegros Festival 2024 - Industry City PA",
      description: "Delivered and operated a massive soundsystem setup for the Industry City stage at Monegros Festival, featuring custom stacks of speakers to handle the demanding desert conditions.",
      image: "/lovable-uploads/b842764a-da80-4bba-a5ef-9411f04f3de6.png",
      tags: ["Festival", "Outdoor", "High Power"],
      readMoreLink: "#"
    },
    {
      title: "Techno Revolution Club Installation",
      description: "Designed and installed a permanent club sound system focused on precise low-end reproduction and immersive spatial audio for a premier underground venue.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
      tags: ["Club", "Installation", "Custom Design"],
      readMoreLink: "#"
    },
    {
      title: "Corporate Summit 2023",
      description: "Provided complete audio-visual solutions for a 3-day corporate event with multiple rooms requiring synchronized systems and perfect speech intelligibility.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80",
      tags: ["Corporate", "Multi-Room", "Conference"],
      readMoreLink: "#"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Our References</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              See what our clients have to say about our sound and lighting services. We're proud to have worked with a diverse range of clients across many different industries and events.
            </p>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glassmorphism p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-psyco-green-DEFAULT mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Section - NEW */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore some of our most impressive sound and lighting installations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div 
                key={index} 
                className="glassmorphism overflow-hidden rounded-xl border border-green-500/10 h-full flex flex-col animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 md:h-56 overflow-hidden relative">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title} 
                    className="object-cover h-full w-full transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {caseStudy.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-psyco-green-DEFAULT px-3 py-1 text-xs font-medium text-white rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{caseStudy.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{caseStudy.description}</p>
                  <a 
                    href={caseStudy.readMoreLink} 
                    className="inline-flex items-center text-psyco-green-DEFAULT hover:text-psyco-green-light transition-colors mt-auto"
                  >
                    Read more
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Client Testimonials</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it - here's what our clients have to say
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Trusted By</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're proud to work with these amazing clients
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="glassmorphism p-4 flex items-center justify-center h-24 animate-fade-in card-hover"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img src={client.logo} alt={client.name} className="max-h-12 max-w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Project */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Some of our most memorable sound and lighting installations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glassmorphism p-1 h-full animate-fade-in">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80"
                  alt="Summer Music Festival"
                  className="object-cover h-full w-full transition-transform duration-10000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent flex flex-col justify-end p-6">
                  <div className="bg-psyco-green-DEFAULT inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-2 self-start">
                    Festival
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Summer Music Festival 2023</h3>
                  <p className="text-gray-300 mb-4">Complete sound system and dynamic lighting setup for the main stage, serving an audience of 15,000 people.</p>
                </div>
              </div>
            </div>
            
            <div className="glassmorphism p-1 h-full animate-fade-in animation-delay-100">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80"
                  alt="Corporate Gala"
                  className="object-cover h-full w-full transition-transform duration-10000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent flex flex-col justify-end p-6">
                  <div className="bg-psyco-green-DEFAULT inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-2 self-start">
                    Corporate
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">TechCorp Annual Gala</h3>
                  <p className="text-gray-300 mb-4">Custom lighting design incorporating brand colors and theme elements, with pristine audio for presentations and live music.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Join our growing list of satisfied clients. Let's discuss how we can make your next event exceptional.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow"
            >
              Book a Consultation
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default References;
