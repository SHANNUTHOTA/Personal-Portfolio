import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, Phone, MapPin, Send, Clock, Globe, Linkedin, Github, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

export const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>(0.1);
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation<HTMLDivElement>(0.2);
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation<HTMLDivElement>(0.3);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const whatsappMessage = `Hi! I'm ${formData.name}
    
Email: ${formData.email}
${formData.subject ? `Subject: ${formData.subject}` : ''}

Message:
${formData.message}`;

    // WhatsApp number (replace with your actual number)
    const phoneNumber = "919492869571"; // Your number without + or spaces
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
  };
  
  const contactMethods = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91 9492869571",
      href: "https://wa.me/919492869571",
      color: "from-green-500 to-emerald-500",
      description: "Preferred contact method"
    },
    {
      icon: Mail,
      label: "Email",
      value: "shannuthota2005@gmail.com",
      href: "mailto:shannuthota2005@gmail.com",
      color: "from-blue-500 to-cyan-500",
      description: "Quick email response"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9492869571",
      href: "tel:+919492869571",
      color: "from-indigo-500 to-purple-500",
      description: "Direct call anytime"
    },
    {
     icon: MapPin,
label: "Location",
value: "Vijayawada, India",
href: "https://www.google.com/maps/place/Vijayawada,+Andhra+Pradesh,+India",
color: "from-purple-500 to-pink-500",
description: "Available for remote work"

    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/shanmukha-sai-54127a28b/",
      color: "from-blue-600 to-blue-500"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/shannuthota",
      color: "from-gray-800 to-gray-600"
    },
    {
      name: "Portfolio",
      icon: Globe,
      href: "#",
      color: "from-purple-600 to-pink-500"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} className={`text-center mb-20 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
            <div className="w-32 h-1 bg-gradient-primary mx-auto mt-8 rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div ref={formRef} className={`lg:col-span-2 transition-all duration-1000 ${formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Card className="modern-card group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-xl bg-gradient-primary/10">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl gradient-text">Contact via WhatsApp</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Fill the form and click send to open WhatsApp chat
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <form onSubmit={handleWhatsAppSubmit}>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Name *</label>
                          <Input 
                            placeholder="Your full name" 
                            className="h-11 bg-muted/30 border-border focus:border-primary transition-colors"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Email *</label>
                          <Input 
                            type="email" 
                            placeholder="your.email@example.com" 
                            className="h-11 bg-muted/30 border-border focus:border-primary transition-colors"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Subject</label>
                        <Input 
                          placeholder="Project inquiry" 
                          className="h-11 bg-muted/30 border-border focus:border-primary transition-colors"
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Message *</label>
                        <Textarea 
                          placeholder="Tell me about your project, timeline, and goals..." 
                          rows={5}
                          className="bg-muted/30 border-border focus:border-primary transition-colors resize-none"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold h-12 transition-all duration-300"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Send via WhatsApp
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div ref={infoRef} className={`space-y-6 transition-all duration-1000 ${infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              
              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a 
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={method.href !== "#" ? "" : "pointer-events-none"}
                  >
                    <Card 
                      className={`modern-card group cursor-pointer transition-all duration-300 hover:shadow-lg ${method.href !== "#" ? "hover:shadow-primary/20 hover:scale-[1.02]" : ""}`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} bg-opacity-10`}>
                            <method.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm">{method.label}</div>
                            <div className="text-sm text-muted-foreground truncate">{method.value}</div>
                            <div className="text-xs text-muted-foreground">{method.description}</div>
                          </div>
                          {method.href !== "#" && (
                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <Card className="modern-card">
                <CardHeader>
                  <CardTitle className="text-lg gradient-text">Connect With Me</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Follow my journey and connect on social platforms
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <Button 
                        key={index}
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <social.icon className="w-4 h-4 mr-2" />
                          {social.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="modern-card">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-4 gradient-text">Quick Info</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Response Time:</span>
                      <span className="font-medium">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Availability:</span>
                      <span className="font-medium">Open for new projects</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time Zone:</span>
                      <span className="font-medium">IST (UTC+5:30)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Preferred Contact:</span>
                      <span className="font-medium">Whatsapp</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
