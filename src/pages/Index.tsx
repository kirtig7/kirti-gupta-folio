import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, ExternalLink, ArrowUp, Play, TrendingUp, Users, Target, Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";

// Twitter widget type declaration
declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: () => void;
      };
    };
  }
}

// Load Twitter widgets script
const loadTwitterScript = () => {
  if (window.twttr?.widgets) {
    window.twttr.widgets.load();
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://platform.twitter.com/widgets.js';
  script.async = true;
  script.onload = () => {
    if (window.twttr?.widgets) {
      window.twttr.widgets.load();
    }
  };
  document.head.appendChild(script);
};

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    loadTwitterScript();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Kirti Gupta</h2>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('media')} className="hover:text-primary transition-colors">Media</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10"></div>
        <div className={`container mx-auto px-4 text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Kirti Gupta
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">Senior Product Manager</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            "Designing product experiences that scale delight and drive growth."
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            6.5+ years building high-impact features across ed-tech, fintech, quick-commerce, and auto-tech domains, 
            turning ideas into experiences that users love and businesses thrive on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8">
              Let's Talk
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => window.open('https://substack.com/@kirtig', '_blank')}
            >
              Subscribe to Substack
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg" onClick={() => scrollToSection('projects')} className="text-lg px-8">
              Explore My Work
            </Button>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary">KG</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  My product journey began at <strong>Cardekho</strong>, where I discovered my passion for turning complex problems into elegant solutions. 
                  From there, I've navigated the dynamic worlds of <strong>Blinkit</strong>, <strong>Flip.id</strong>, and now <strong>Unacademy's Airlearn</strong>.
                </p>
                <p className="text-lg leading-relaxed">
                  I believe in <strong>user-first thinking</strong>, where every feature decision starts with understanding real user pain points. 
                  My approach combines <strong>data-informed experimentation</strong> with <strong>cross-functional leadership</strong> to build products that not only work but thrive.
                </p>
                <p className="text-lg leading-relaxed">
                  Beyond product management, I'm passionate about <strong>public speaking</strong>, <strong>writing</strong>, and <strong>podcasting</strong> — 
                  sharing insights about product strategy, growth, and the art of building meaningful experiences.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-primary">
                  "Product decisions rooted in data, empathy, and impact."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What I Do</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Product Strategy & Lifecycle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• End-to-end product lifecycle ownership</li>
                  <li>• User journey mapping & optimization</li>
                  <li>• Feature prioritization & roadmapping</li>
                  <li>• Cross-functional team leadership</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Growth & Experimentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• A/B testing & statistical analysis</li>
                  <li>• Gamification & engagement strategies</li>
                  <li>• Referral funnels & viral mechanics</li>
                  <li>• Retention optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Data & Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Amplitude, Clevertap, Google Analytics</li>
                  <li>• Cohort analysis & user segmentation</li>
                  <li>• Funnel optimization</li>
                  <li>• KPI definition & tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Design & Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Figma, Uizard prototyping</li>
                  <li>• Design thinking workshops</li>
                  <li>• Jira, Notion, Confluence management</li>
                  <li>• Stakeholder communication</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Case Studies & Impact</h2>
          <div className="max-w-6xl mx-auto space-y-12">
            
            <Card className="overflow-hidden">
              <CardHeader className="company-airlearn">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Airlearn</Badge>
                  <Badge variant="outline" className="border-white/30 text-white">Social Gamification</Badge>
                </div>
                <CardTitle className="text-2xl text-white">Buddy Streak – Social Gamification</CardTitle>
                <CardDescription className="text-lg text-white/90">
                  Launched a feature to help learners stay accountable through friend-based streaks
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Context & Problem</h4>
                    <p className="text-sm text-muted-foreground">Learners struggled with consistency and motivation in their study habits, leading to high churn rates.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Solution & Role</h4>
                    <p className="text-sm text-muted-foreground">Led the design and implementation of social accountability features with friend challenges and streak tracking.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Impact</h4>
                    <p className="text-sm font-medium text-green-600">+3pp improvement in Day-30 retention</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="company-airlearn">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Airlearn</Badge>
                  <Badge variant="outline" className="border-white/30 text-white">AI/ML</Badge>
                </div>
                <CardTitle className="text-2xl text-white">Personalized Notifications</CardTitle>
                <CardDescription className="text-lg text-white/90">
                  Introduced AI-powered notification strategy for optimal user engagement
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Context & Problem</h4>
                    <p className="text-sm text-muted-foreground">Generic notifications had low engagement rates and were causing user fatigue.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Solution & Role</h4>
                    <p className="text-sm text-muted-foreground">Implemented ML-driven personalization for notification timing, content, and frequency based on user behavior.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Impact</h4>
                    <p className="text-sm font-medium text-green-600">+7pp lift in Day-1 retention</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="company-blinkit">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Blinkit</Badge>
                  <Badge variant="outline" className="border-white/30 text-white">Subscription Growth</Badge>
                </div>
                <CardTitle className="text-2xl text-white">Smart Bachat Club</CardTitle>
                <CardDescription className="text-lg text-white/90">
                  Contributed to the growth of Grofers' subscription product
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Context & Problem</h4>
                    <p className="text-sm text-muted-foreground">Subscription adoption was limited, with users not seeing clear value in the membership program.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Solution & Role</h4>
                    <p className="text-sm text-muted-foreground">Enhanced subscription benefits, improved onboarding flow, and created targeted campaigns for user segments.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Impact</h4>
                    <p className="text-sm font-medium text-green-600">User base grew from 30% to 60%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="company-flip">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Flip.id</Badge>
                  <Badge variant="outline" className="border-white/30 text-white">User Onboarding</Badge>
                </div>
                <CardTitle className="text-2xl text-white">Authentication Revamp</CardTitle>
                <CardDescription className="text-lg text-white/90">
                  Led new registration flow optimization for better user acquisition
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Context & Problem</h4>
                    <p className="text-sm text-muted-foreground">Complex registration process was causing significant drop-offs in user acquisition funnel.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Solution & Role</h4>
                    <p className="text-sm text-muted-foreground">Redesigned the entire authentication flow with progressive disclosure and reduced friction points.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Impact</h4>
                    <p className="text-sm font-medium text-green-600">+25% increase in install-to-registration</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Mentions */}
      <section id="media" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Media Mentions</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 company-blinkit rounded-full flex items-center justify-center text-white font-bold">
                  B
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold">Blinkit Engineering</span>
                    <Badge variant="outline">Engineering Team</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Publicly recognized for major campaign contributions and impact on user engagement metrics.
                  </p>
                  <div className="mb-4">
                    <blockquote className="twitter-tweet" data-theme="light">
                      <p lang="en" dir="ltr">Loading tweet...</p>
                      <a href="https://x.com/blinkiteng/status/1567741265068064769">View Tweet</a>
                    </blockquote>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://x.com/blinkiteng/status/1567741265068064769', '_blank')}
                  >
                    View Tweet
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 company-airlearn rounded-full flex items-center justify-center text-white font-bold">
                  GM
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold">Gaurav Munjal</span>
                    <Badge variant="outline">CEO, Unacademy</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Publicly acknowledged as part of a "great team" working on Airlearn's product initiatives.
                  </p>
                  <div className="mb-4">
                    <blockquote className="twitter-tweet" data-theme="light">
                      <p lang="en" dir="ltr">Loading tweet...</p>
                      <a href="https://x.com/gauravmunjal/status/1910013758681886923">View Tweet</a>
                    </blockquote>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://x.com/gauravmunjal/status/1910013758681886923', '_blank')}
                  >
                    View Tweet
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Writing & Podcast */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Writing & Podcast</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            
            {/* Substack */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                📚 Substack Articles
              </h3>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Building Products That Users Actually Want</CardTitle>
                    <CardDescription>A deep dive into user research methodologies and how to validate product-market fit...</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('https://substack.com/@kirtig', '_blank')}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">The Art of A/B Testing: Beyond the Numbers</CardTitle>
                    <CardDescription>How to design experiments that actually move the needle on business metrics...</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('https://substack.com/@kirtig', '_blank')}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://substack.com/@kirtig', '_blank')}
                >
                  View All Articles
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Podcast */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                🎙️ Podcast Episodes
              </h3>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      Product Strategy in Fast-Growing Startups
                    </CardTitle>
                    <CardDescription>Episode #12 • 45 min</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <iframe 
                        width="100%" 
                        height="200" 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="Product Strategy in Fast-Growing Startups"
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('https://youtube.com/@kirtig', '_blank')}
                    >
                      <Play className="mr-2 h-3 w-3" />
                      Listen
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      From Idea to Impact: Product Management Lessons
                    </CardTitle>
                    <CardDescription>Episode #8 • 38 min</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <iframe 
                        width="100%" 
                        height="200" 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="From Idea to Impact: Product Management Lessons"
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('https://youtube.com/@kirtig', '_blank')}
                    >
                      <Play className="mr-2 h-3 w-3" />
                      Listen
                    </Button>
                  </CardContent>
                </Card>
                
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://youtube.com/@kirtig', '_blank')}
                >
                  View All Episodes
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Together</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you're a founder looking for product leadership, a team seeking collaboration, 
            or a hiring manager interested in my expertise — I'd love to connect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={() => window.open('mailto:kirti@example.com', '_blank')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => window.open('https://linkedin.com/in/kirtig', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => window.open('https://substack.com/@kirtig', '_blank')}
            >
              Subscribe to Newsletter
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <Separator className="max-w-xs mx-auto mb-8" />
          
          <p className="text-muted-foreground">
            Based in Bengaluru, India • Available for remote collaboration worldwide
          </p>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 rounded-full shadow-lg"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Index;
