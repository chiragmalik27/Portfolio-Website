import React from "react";
import { motion } from "framer-motion";
import { Avatar } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

export const Portfolio = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Projects", href: "#projects" },
    { text: "Contact", href: "#contact" },
  ];

  // Work experience card data
  const workExperienceCards = [
    { 
      id: 1, 
      image: "https://img.icons8.com/ios-filled/100/business-report.png", 
      title: "Business Analyst",
      company: "Tech Solutions Inc.",
      description: "Led data-driven insights and process optimization for enterprise clients."
    },
    { 
      id: 2, 
      image: "https://img.icons8.com/ios-filled/100/artificial-intelligence.png", 
      title: "AI Generalist",
      company: "Innovation Labs",
      description: "Developed AI solutions and machine learning models for various applications."
    },
    { 
      id: 3, 
      image: "https://img.icons8.com/ios-filled/100/code.png", 
      title: "Frontend Developer",
      company: "Digital Agency",
      description: "Created responsive web applications using modern frameworks and technologies."
    },
    { 
      id: 4, 
      image: "https://img.icons8.com/ios-filled/100/data-configuration.png", 
      title: "Data Analyst",
      company: "Analytics Corp",
      description: "Analyzed complex datasets to provide actionable business intelligence."
    },
  ];

  // Project data
  const projects = [
    {
      id: 1,
      title: "Employee Management System",
      featured: "Featured Project",
      description:
        "A web app for managing employee data. It manages employee data and also provides a dashboard for HR to view employee data.",
      image: "https://github.com/chiragmalik27/Portfolio-Website/tree/main/images/Ems.jpg",
      technologies: ["React", "Spring Boot", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      featured: "Featured Project",
      description:
        "An intelligent analytics platform that uses machine learning to provide predictive insights and automated reporting. Features real-time data processing, customizable dashboards, and AI-driven recommendations for business optimization.",
      image: "https://github.com/chiragmalik27/Portfolio-Website/tree/main/images/AIBusiness.jpg",
      technologies: ["Python", "PowerBI", "SQL", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Daily Digest Automation",
      featured: "Featured Project",
      description:
        "An automated workflow that delivers personalized morning digests to Telegram, including weather forecasts, top 3 tech news stories, and calendar events. The system runs on a serverless architecture with automated error handling and failover mechanisms.",
      image: "https://github.com/chiragmalik27/Portfolio-Website/tree/main/images/make.jpg",
      technologies: ["make.com", "Openweathermap API", "Telegram API", "RSS API"],
      liveUrl: "https://t.me/yourchannel",
      githubUrl: "https://github.com/yourusername/daily-digest-automation",
    }
  ];

  // Social media icons data
  const socialIcons = [
    {
      src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chirag-malik-a9a859265"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg",
      label: "GitHub",
      href: "https://github.com/chiragmalik27"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg",
      label: "Twitter",
      href: "https://x.com/chiragmalik_27"
    }
  ];
  

  return (
    <div className="min-h-screen bg-[#190b2d] text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#190b2d]/95 backdrop-blur-sm border-b border-purple-800/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CM</span>
              </div>
              <span className="font-semibold text-xl">Chirag Malik</span>
            </div>

            {/* Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-8">
                {navLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <Button
                      variant="ghost"
                      className="text-white hover:text-purple-400 hover:bg-purple-900/20 transition-colors"
                      onClick={() => {
                        const section = document.getElementById(link.href.substring(1));
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {link.text}
                    </Button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-800/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-purple-400 text-lg font-medium animate-slide-in-down [animation-delay:0.1s]">Hello! I Am</p>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-slide-in-up [animation-delay:0.3s]">
                  <span className="inline-block animate-fade-in [animation-delay:0.5s]">Chirag Malik</span>
                </h1>
                <p className="text-xl text-gray-300 animate-slide-in-down [animation-delay:0.7s]">A Developer who</p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold animate-slide-in-up [animation-delay:0.9s]">
                  Judges a book by its{" "}
                  <span className="text-purple-400 animate-fade-in [animation-delay:1.1s]">cover</span>...
                </h2>
                <p className="text-gray-400 text-lg max-w-lg animate-fade-in [animation-delay:1.3s]">
                  Because if the cover does not impress you what else can?
                </p>
              </div>

              <h3 className="text-2xl font-semibold animate-fade-in [animation-delay:1.5s]">I'm a Business Analyst.</h3>
              <p className="text-gray-300 text-lg animate-fade-in [animation-delay:1.7s]">
                Currently, I'm a Business Analyst and AI Generalist,
              </p>
              <p className="text-gray-400 max-w-2xl leading-relaxed animate-fade-in [animation-delay:1.9s]">
                A self-driven AI Generalist, Business Analyst, and Frontend Developer with hands-on experience on Real world projects. I craft intelligent, user-centric digital solutions that bridge the gap between data-driven insights, technical execution, and real-world business impact.
              </p>

              <div className="flex space-x-4 pt-4">
                <Button 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors"
                  onClick={() => {
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg transition-colors"
                  onClick={() => window.open('https://drive.google.com/file/d/1wR05OJuNCukHzriqv2gdr7r1OoIyzZcI/view?usp=sharing', '_blank')}
                >
                  Download CV
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-600/20 to-purple-800/20 flex items-center justify-center">
                  <Avatar className="w-64 h-64">
                    <img
                      className="w-full h-full object-cover rounded-full animate-fade-in"
                      alt="Chirag Malik"
                      src="https://github.com/chiragmalik27/Portfolio-Website/tree/main/images/profile.png"
                    />
                  </Avatar>
                </div>
                {/* Decorative elements */}
                
<div className="relative">
  <motion.div
    className="absolute -top-10 -right-4 w-8 h-8 bg-purple-500 rounded-full"
    animate={{
      y: [0, -5, 0, 5, 0],
      x: [0, 5, 0, -5, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
  
  <motion.div
    className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full"
    animate={{
      y: [0, 15, 0, -5, 0],
      x: [0, -5, 0, 15, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }}
  />
</div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Work Experience</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My journey through various roles in technology and business analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {workExperienceCards.map((card) => (
              <Card
                key={card.id}
                className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-purple-700/30 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img
                        className="w-10 h-10 object-contain"
                        alt="Company logo"
                        src={card.image}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {card.title}
                      </h3>
                      <p className="text-purple-400 font-medium mb-3">
                        {card.company}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Values Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#190b2d] to-purple-900/20">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-800/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="space-y-12">
            {/* Enhanced Headline */}
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight animate-slide-in-up">
                I'm currently looking to join a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse">cross-functional</span> team
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in [animation-delay:0.5s]">
                that values improving people's lives through accessible design and innovative solutions
              </p>
            </div>

            {/* Enhanced Tech Icons Row */}
            <div className="flex flex-wrap justify-center gap-6 mt-12 animate-fade-in [animation-delay:0.8s]">
              {/* Real Tech Stack Icons */}
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-xl flex items-center justify-center border border-purple-500/30 hover:scale-110 hover:bg-purple-600/30 transition-all duration-300 cursor-pointer">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/react.svg" alt="React" className="w-8 h-8" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'block'; }} />
                <span className="text-2xl hidden">⚛️</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-xl flex items-center justify-center border border-blue-500/30 hover:scale-110 hover:bg-blue-600/30 transition-all duration-300 cursor-pointer">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/java.svg" alt="Java" className="w-8 h-8" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'block'; }} />
                <span className="text-2xl hidden">☕</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-xl flex items-center justify-center border border-green-500/30 hover:scale-110 hover:bg-green-600/30 transition-all duration-300 cursor-pointer">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/springboot.svg" alt="Spring Boot" className="w-8 h-8" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'block'; }} />
                <span className="text-2xl hidden">🌱</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 rounded-xl flex items-center justify-center border border-yellow-500/30 hover:scale-110 hover:bg-yellow-600/30 transition-all duration-300 cursor-pointer">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/python.svg" alt="Python" className="w-8 h-8" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'block'; }} />
                <span className="text-2xl hidden">🐍</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-xl flex items-center justify-center border border-red-500/30 hover:scale-110 hover:bg-red-600/30 transition-all duration-300 cursor-pointer">
                <img src="https://img.icons8.com/color/48/power-bi.png" alt="Power BI" className="w-8 h-8" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'block'; }} />
                <span className="text-2xl hidden">📊</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600/20 to-indigo-800/20 rounded-xl flex items-center justify-center border border-indigo-500/30 hover:scale-110 hover:bg-indigo-600/30 transition-all duration-300 cursor-pointer">
                <img src="https://img.icons8.com/color/48/external-artificial-intelligence-machine-learning-flat-flat-juicy-fish.png" alt="AI" className="w-8 h-8" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'block'; }} />
                <span className="text-2xl hidden">🤖</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-pink-600/20 to-pink-800/20 rounded-xl flex items-center justify-center border border-pink-500/30 hover:scale-110 hover:bg-pink-600/30 transition-all duration-300 cursor-pointer">
                <img src="https://img.icons8.com/color/48/sql.png" alt="SQL" className="w-8 h-8" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'block'; }} />
                <span className="text-2xl hidden">🗄️</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 rounded-xl flex items-center justify-center border border-cyan-500/30 hover:scale-110 hover:bg-cyan-600/30 transition-all duration-300 cursor-pointer">
                <img src="https://img.icons8.com/color/48/microsoft-excel-2019--v1.png" alt="Excel" className="w-8 h-8" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'block'; }} />
                <span className="text-2xl hidden">📈</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600/20 to-orange-800/20 rounded-xl flex items-center justify-center border border-orange-500/30 hover:scale-110 hover:bg-orange-600/30 transition-all duration-300 cursor-pointer">
                <img src="https://img.icons8.com/color/48/database.png" alt="DBMS" className="w-8 h-8" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'block'; }} />
                <span className="text-2xl hidden">💾</span>
              </div>
            </div>

            {/* Enhanced Orbiting Logo and Icons */}
            <div className="relative flex justify-center items-center py-20">
              {/* Enhanced SVG Orbits with Animation */}
              <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow" width="500" height="300" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="250" cy="150" rx="220" ry="80" stroke="url(#gradient1)" strokeOpacity="0.3" strokeWidth="3" />
                <ellipse cx="250" cy="150" rx="160" ry="60" stroke="url(#gradient2)" strokeOpacity="0.25" strokeWidth="2" />
                <ellipse cx="250" cy="150" rx="100" ry="35" stroke="url(#gradient3)" strokeOpacity="0.2" strokeWidth="2" />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a78bfa" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#f472b6" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#e879f9" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Orbiting Tech Icons */}
              <div className="absolute w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center border-2 border-purple-400/50 animate-orbit hover:scale-125 transition-transform duration-300" style={{ left: 'calc(50% + 220px)', top: 'calc(50% - 24px)' }}>
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/react.svg" alt="React" className="w-6 h-6" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'block'; }} />
                <span className="text-lg hidden">⚛️</span>
              </div>
              <div className="absolute w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center border-2 border-blue-400/50 animate-orbit-reverse hover:scale-125 transition-transform duration-300" style={{ left: 'calc(50% - 220px)', top: 'calc(50% + 24px)' }}>
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/java.svg" alt="Java" className="w-6 h-6" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'block'; }} />
                <span className="text-lg hidden">☕</span>
              </div>
              <div className="absolute w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center border-2 border-green-400/50 animate-orbit hover:scale-125 transition-transform duration-300" style={{ left: 'calc(50% + 100px)', top: 'calc(50% + 80px)' }}>
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/springboot.svg" alt="Spring Boot" className="w-6 h-6" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'block'; }} />
                <span className="text-lg hidden">🌱</span>
              </div>
              <div className="absolute w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-xl flex items-center justify-center border-2 border-yellow-400/50 animate-orbit-reverse hover:scale-125 transition-transform duration-300" style={{ left: 'calc(50% - 100px)', top: 'calc(50% - 80px)' }}>
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/python.svg" alt="Python" className="w-6 h-6" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'block'; }} />
                <span className="text-lg hidden">🐍</span>
              </div>
              <div className="absolute w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center border-2 border-red-400/50 animate-orbit hover:scale-125 transition-transform duration-300" style={{ left: 'calc(50% + 160px)', top: 'calc(50% - 60px)' }}>
                <img src="https://img.icons8.com/color/48/power-bi.png" alt="Power BI" className="w-6 h-6" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'block'; }} />
                <span className="text-lg hidden">📊</span>
              </div>
              <div className="absolute w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-800 rounded-xl flex items-center justify-center border-2 border-pink-400/50 animate-orbit-reverse hover:scale-125 transition-transform duration-300" style={{ left: 'calc(50% - 160px)', top: 'calc(50% + 60px)' }}>
                <img src="https://img.icons8.com/color/48/external-artificial-intelligence-machine-learning-flat-flat-juicy-fish.png" alt="AI" className="w-6 h-6" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'block'; }} />
                <span className="text-lg hidden">🤖</span>
              </div>

              {/* Enhanced Main Glowing Logo */}
              <div className="relative w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 shadow-2xl animate-fade-in hover:scale-110 transition-transform duration-500 cursor-pointer group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-600 to-purple-800"></div>
                <span className="relative text-7xl text-white font-bold z-10" style={{ textShadow: '0 0 40px #a78bfa, 0 0 80px #a78bfa, 0 0 120px #a78bfa' }}>&#8721;</span>
              </div>
            </div>

            {/* Additional Call to Action */}
            <div className="animate-fade-in [animation-delay:1.2s]">
              <p className="text-lg text-gray-300 mb-6">
                Ready to collaborate on innovative projects?
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Let's Build Something Amazing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Some of my recent work that showcases my skills and passion for creating impactful solutions
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-lg transform group-hover:scale-105 transition-transform duration-300"></div>
                    <img
                      className="relative w-full h-80 object-cover rounded-lg shadow-2xl"
                      alt={project.title}
                      src={project.image}
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div>
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30 mb-4">
                      {project.featured}
                    </Badge>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                  </div>

                  <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-700/30">
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-800/30 text-purple-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-colors"
                    >
                      <img className="w-4 h-4 mr-2" src="/icon-park-solid-click.svg" alt="External link" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-colors"
                    >
                      <img className="w-4 h-4 mr-2" src="/icon-park-solid-click-2.svg" alt="GitHub" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">Get In Touch</h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                I'm currently looking to join a cross-functional team that values improving people's lives
                through accessible design. Have a project in mind? Let's connect.
              </p>
              
              <div className="space-y-4">
                <p className="text-purple-400 text-xl font-semibold">
                  chiragmalik1700@gmail.com
                </p>
                
                <div className="flex justify-center space-x-6 pt-4">
                  {socialIcons.map((icon, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="lg"
                      className="w-12 h-12 p-0 hover:bg-purple-600/20 transition-colors"
                      onClick={() => window.open(icon.href, '_blank')}
                    >
                      <img
                        className="w-6 h-6"
                        alt={icon.label}
                        src={icon.src}
                      />
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 text-lg rounded-lg transition-colors">
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-800/30 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Chirag Malik. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};