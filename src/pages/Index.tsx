import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Linkedin,
  ExternalLink,
  ArrowUp,
  Play,
  TrendingUp,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Kirti Gupta</h2>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("media")}
                className="hover:text-primary transition-colors"
              >
                Media
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-10" /> {/* Adjust height as needed */}
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Top Image Section - "Crafting Products That Win" */}
        <div
          className="relative w-full h-[40vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: 'url("./Crafting Products That Win.png")' }}
        >
          {/* Optional overlay if text on image needs more contrast */}
          {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
        </div>

        {/* Content Section Below Image */}
        <div className="relative z-10 text-center py-16 px-4 bg-white">
          {/* Add a Blur Overlay here */}
          <div className="absolute inset-0 backdrop-blur-[20px] bg-white/10"></div>

          {/* Hero text on top of the blur */}
          <div className="relative z-10 text-center py-16 px-4">
            {/* Your existing content */}

            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
                Kirti Gupta
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
                Senior Product Manager
              </h2>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-700">
                "Designing product experiences that scale delight and drive
                growth."
              </p>
              <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-600">
                6+ years building high-impact features across ed-tech, fintech,
                quick-commerce, and auto-tech domains, turning ideas into
                experiences that users love and businesses thrive on.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                {/* <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="text-lg px-8"
                >
                  Let's Talk
                </Button> */}
                <Button
              variant="outline"
              size="lg"
              className="text-lg px-8"
              onClick={() =>
                window.open("https://linkedin.com/in/kirtig", "_blank")
              }
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="text-lg px-8"
                >
                  Explore My Work
                </Button>
              </div>

              {/* Brand Logos - Below the name and content */}
              <div className="flex items-center justify-center gap-8 bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="text-center">
                  <img
                    src="cardekho-logo-png_seeklogo-410133.webp"
                    alt="Cardekho"
                    className="w-16 h-16 object-contain mb-3"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Cardekho
                  </span>
                </div>

                <div className="text-center">
                  <img
                    src="blinkit-logo.png"
                    alt="Blinkit"
                    className="w-16 h-16 object-contain mb-3"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Blinkit
                  </span>
                </div>

                <div className="text-center">
                  <img
                    src="Logo_flip.webp"
                    alt="Flip Indonesia"
                    className="w-16 h-16 object-contain mb-3"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Flip
                  </span>
                </div>

                <div className="text-center">
                  <img
                    src="unacademy-logo-png_seeklogo-400820.webp"
                    alt="Unacademy"
                    className="w-16 h-16 object-contain mb-3"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Unacademy
                  </span>
                </div>
              </div>
            </div>
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
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-primary/10 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="profile-pic.jpeg"
                      alt="Kirti Gupta"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  My product journey began at <strong>Cardekho</strong>, where I
                  discovered my passion for turning complex problems into
                  elegant solutions. From there, I've navigated the dynamic
                  worlds of <strong>Blinkit</strong>, <strong>Flip.id</strong>,
                  and now <strong>Unacademy's Airlearn</strong>.
                </p>
                <p className="text-lg leading-relaxed">
                  I believe in <strong>user-first thinking</strong>, where every
                  feature decision starts with understanding real user pain
                  points. My approach combines{" "}
                  <strong>data-informed experimentation</strong> with{" "}
                  <strong>cross-functional leadership</strong> to build products
                  that not only work but thrive.
                </p>
                <p className="text-lg leading-relaxed">
                  Beyond product management, I'm passionate about{" "}
                  <strong>public speaking</strong>, <strong>writing</strong>,
                  and <strong>podcasting</strong> — sharing insights about
                  product strategy, growth, and the art of building meaningful
                  experiences.
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
          <h2 className="text-4xl font-bold text-center mb-16">
            Past Projects
          </h2>
          <div className="max-w-6xl mx-auto space-y-12">
            <Card className="overflow-hidden">
              <CardHeader className="company-airlearn">
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-white/20 border-white/30"
                  >
                    Airlearn
                  </Badge>
                  <Badge variant="outline" className="border-white/30">
                    Social Gamification
                  </Badge>
                </div>
                <CardTitle className="text-2xl">
                  Buddy Streak – Social Gamification
                </CardTitle>
                <CardDescription className="text-lg">
                  Launched a feature to help learners stay accountable through
                  friend-based streaks
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      Context & Problem
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Learners struggled with consistency and motivation in
                      their study habits, leading to high churn rates.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      Solution & Role
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Led the design and implementation of social accountability
                      features with friend challenges and streak tracking.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Impact</h4>
                    <p className="text-sm font-medium text-green-600">
                      +3pp improvement in Day-30 retention
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="company-airlearn">
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-white/20 border-white/30"
                  >
                    Airlearn
                  </Badge>
                  <Badge variant="outline" className="border-white/30">
                    AI/ML
                  </Badge>
                </div>
                <CardTitle className="text-2xl">
                  Personalized Notifications
                </CardTitle>
                <CardDescription className="text-lg">
                  Introduced AI-powered notification strategy for optimal user
                  engagement
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      Context & Problem
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Generic notifications had low engagement rates and were
                      causing user fatigue.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      Solution & Role
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Implemented ML-driven personalization for notification
                      timing, content, and frequency based on user behavior.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Impact</h4>
                    <p className="text-sm font-medium text-green-600">
                      +7pp lift in Day-1 retention
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="company-blinkit">
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue/20 border-white/30"
                  >
                    Blinkit
                  </Badge>
                  <Badge variant="outline" className="border-white/30">
                    Subscription Growth
                  </Badge>
                </div>
                <CardTitle className="text-2xl">Smart Bachat Club</CardTitle>
                <CardDescription className="text-lg">
                  Contributed to the growth of Grofers' subscription product
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      Context & Problem
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Subscription adoption was limited, with users not seeing
                      clear value in the membership program.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      Solution & Role
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Enhanced subscription benefits, improved onboarding flow,
                      and created targeted campaigns for user segments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Impact</h4>
                    <p className="text-sm font-medium text-green-600">
                      User base grew from 30% to 60%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="company-flip">
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-white/20 border-white/30"
                  >
                    Flip.id
                  </Badge>
                  <Badge variant="outline" className="border-white/30">
                    User Onboarding
                  </Badge>
                </div>
                <CardTitle className="text-2xl">
                  Authentication Revamp
                </CardTitle>
                <CardDescription className="text-lg">
                  Led new registration flow optimization for better user
                  acquisition
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      Context & Problem
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Complex registration process was causing significant
                      drop-offs in user acquisition funnel.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      Solution & Role
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Redesigned the entire authentication flow with progressive
                      disclosure and reduced friction points.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Impact</h4>
                    <p className="text-sm font-medium text-green-600">
                      +25% increase in install-to-registration
                    </p>
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
          <h2 className="text-4xl font-bold text-center mb-16">
            Media Mentions
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 company-blinkit rounded-full flex items-center justify-center text-white font-bold text-lg">
                  B
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-semibold text-lg">
                      Blinkit Engineering
                    </span>
                    <Badge
                      variant="outline"
                      className="bg-blue-50 text-blue-700 border-blue-200"
                    >
                      Engineering Team
                    </Badge>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">B</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        {/* Header row with name, handle, timestamp */}
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
                          <span className="font-semibold text-gray-900 text-sm sm:text-base">
                            Blinkit Engineering
                          </span>
                          <span className="text-gray-500 text-sm">
                            @blinkiteng
                          </span>
                          <span className="text-gray-400 text-sm">• 2h</span>
                        </div>

                        {/* Quote content */}
                        <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-3 break-words">
                          "Kirti Gupta has been instrumental in driving our user
                          engagement campaigns. Her strategic approach to
                          product management has resulted in significant
                          improvements in our key metrics. 🚀 #ProductManagement
                          #UserEngagement"
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-500 text-sm">
                          <span className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              />
                            </svg>
                            <span>24</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                              />
                            </svg>
                            <span>156</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                            <span>89</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50"
                    onClick={() =>
                      window.open(
                        "https://x.com/blinkiteng/status/1567741265068064769",
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View Original Tweet
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 company-airlearn rounded-full flex items-center justify-center text-white font-bold text-lg">
                  GM
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">
                      Gaurav Munjal
                    </span>
                    <Badge
                      variant="outline"
                      className="bg-purple-50 text-purple-700 border-purple-200"
                    >
                      CEO, Unacademy
                    </Badge>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">GM</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold text-gray-900">
                            Gaurav Munjal
                          </span>
                          <span className="text-gray-500 text-sm">
                            @gauravmunjal
                          </span>
                          <span className="text-gray-400 text-sm">• 1h</span>
                        </div>
                        <p className="text-gray-800 text-sm leading-relaxed mb-2">
                          "Over 70k Learners are now using Airlearn daily. Top Countries are US, UK and Germany. MAUs are almost 300k now.
                         🎯 #EdTech #ProductManagement"
                         This is all possible because of a great team. Thank you 
                            @Sushilk91, @shankmurali, @Vipink305 , @AshokThariyan , @Kirti_NotKriti
                            and the entire team for making this happen ❤️❤️❤️
                        </p>
                        <div className="flex items-center space-x-4 text-gray-500 text-sm">
                          <span className="flex items-center space-x-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              />
                            </svg>
                            <span>18</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                              />
                            </svg>
                            <span>203</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                            <span>127</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-200 text-purple-700 hover:bg-purple-50"
                    onClick={() =>
                      window.open(
                        "https://x.com/gauravmunjal/status/1910013758681886923",
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View Original Tweet
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  GM
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-semibold text-lg">Gagan Mahajan</span>
                    <Badge
                      variant="outline"
                      className="bg-blue-50 text-blue-700 border-blue-200"
                    >
                      Director - Product @ Meesho
                    </Badge>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">GM</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
                          <span className="font-semibold text-gray-900 text-sm sm:text-base">
                            Gagan Mahajan
                          </span>
                          <span className="text-gray-500 text-sm">
                            @gaganmahajan
                          </span>
                          <span className="text-gray-400 text-sm">
                            • Sep 20, 2020
                          </span>
                        </div>
                        <p className="text-gray-800 text-sm leading-relaxed mb-2">
                          "Kirti learns at godspeed. Ever since she joined
                          Grofers, her own growth curve has been nothing short
                          of a hockey stick. Her curiosity and hardwork make her
                          stand out. She is a team player and she optimises for
                          customer value, traits that would strengthen any
                          product team. Rooting for Kirti to have an awesome
                          career ahead."
                        </p>
                        <div className="flex items-center space-x-4 text-gray-500 text-sm">
                          <span className="flex items-center space-x-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              />
                            </svg>
                            <span>42</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                              />
                            </svg>
                            <span>128</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                            <span>89</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50"
                    onClick={() =>
                      window.open(
                        "https://linkedin.com/in/gagan-mahajan",
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View LinkedIn Profile
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  AC
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-semibold text-lg">
                      Akshul Chauhan
                    </span>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200"
                    >
                       Product Manager @ Capri Global
                    </Badge>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">AC</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
                          <span className="font-semibold text-gray-900 text-sm sm:text-base">
                            Akshul Chauhan
                          </span>
                          <span className="text-gray-500 text-sm">
                            @akshulchauhan
                          </span>
                          <span className="text-gray-400 text-sm">
                            • Jun 18, 2019
                          </span>
                        </div>
                        <p className="text-gray-800 text-sm leading-relaxed mb-2">
                          "Kirti understands the critical importance of
                          maintaining a strong product offering, as well as the
                          need to constantly grow revenue. Her ability to
                          sustain existing product lines while opening up new
                          opportunities helped the company a lot. Her knowledge
                          of how to utilize the analytical skills to her
                          advantage has also become one of the tools she uses to
                          find success on a regular basis. Kirti is extremely
                          versatile and, from my personal experience, extremely
                          driven as well."
                        </p>
                        <div className="flex items-center space-x-4 text-gray-500 text-sm">
                          <span className="flex items-center space-x-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              />
                            </svg>
                            <span>38</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                              />
                            </svg>
                            <span>95</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                            <span>67</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-200 text-green-700 hover:bg-green-50"
                    onClick={() =>
                      window.open(
                        "https://linkedin.com/in/akshul-chauhan",
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View LinkedIn Profile
                  </Button>
                </div>
              </div>
            </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Writing & Podcast */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Writing & Podcast
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Substack */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                📚 Substack Articles
              </h3>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Building Products That Users Actually Want
                    </CardTitle>
                    <CardDescription>
                      A deep dive into user research methodologies and how to
                      validate product-market fit...
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        window.open(
                          "https://substack.com/@kirtigupta487339",
                          "_blank"
                        )
                      }
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      The Art of A/B Testing: Beyond the Numbers
                    </CardTitle>
                    <CardDescription>
                      How to design experiments that actually move the needle on
                      business metrics...
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        window.open(
                          "https://substack.com/@kirtigupta487339",
                          "_blank"
                        )
                      }
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>

                <Button
                  className="w-full"
                  onClick={() =>
                    window.open(
                      "https://substack.com/@kirtigupta487339",
                      "_blank"
                    )
                  }
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
                      Product Management in Fast-Growing Startups
                    </CardTitle>
                    <CardDescription>Episode #12 • 45 min</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/gp3Yi2MpN8o"
                        title="Product Management in Fast-Growing Startups"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/watch?app=desktop&v=gp3Yi2MpN8o&t=0s",
                          "_blank"
                        )
                      }
                    >
                      <Play className="mr-2 h-3 w-3" />
                      Listen
                    </Button>
                  </CardContent>
                </Card>

                <Button
                  className="w-full"
                  onClick={() =>
                    window.open("https://youtube.com/@kirtig", "_blank")
                  }
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
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you're a founder looking for product leadership, a team
            seeking collaboration, or a hiring manager interested in my
            expertise — I'd love to connect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">

            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8"
              onClick={() =>
                window.open("https://substack.com/@kirtigupta487339", "_blank")
              }
            >
              Subscribe to Newsletter
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <Separator className="max-w-xs mx-auto mb-8" />

          <p className="text-muted-foreground">
            Based in Bengaluru, India • Available for remote collaboration
            worldwide
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
