"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Home,
  TrendingUp,
  Mail,
  Github,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Users,
  Heart,
  Star,
  Sparkles,
  Download,
  GraduationCap,
  Building2,
  MapPin,
  Calendar,
  Mic,
  Headphones,
  Rocket,
  Database,
  Brain,
  Menu,
  X,
  Zap,
  Target,
  BookOpen,
  Lightbulb,
  Globe,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Camera,
  Plane,
  Phone,
  PresentationIcon as PresentationChart,
} from "lucide-react"

// Composants pour chaque section
import DataScienceSection from "./components/DataScienceSection"
import ProjetsSection from "./components/ProjetsSection"
import StageSection from "./components/StageSection"

export default function PortfolioMarieSamake() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState("home")
  const [activePage, setActivePage] = useState("home") // Nouvelle state pour les pages
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [isVideoMuted, setIsVideoMuted] = useState(true)
  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Textes pour l'effet de frappe
  const typingWords = [
    "Donnons la parole aux données",
  ]

  // Données des slides À propos
  const aboutSlides = [
    {
      image: "/images/moi.png",
      title: "Qui suis-je ?",
      content:
        "Je m'appelle Marie Samake, étudiante en 2ème année de Bachelor Universitaire de Technologie en sciences des données à l'Université Sorbonne Paris Nord.",
    },
    {
      image: "/images/marie2.jpg",
      title: "Mon Approche",
      content:
        "Je considère la data science comme un outil de communication puissant. Mes projets suivent toujours cette philosophie de créativité, rigueur et collaboration.",
    },
    {
      image: "/images/slide3.jpg",
      title: "Mon Projet Professionnel",
      content:
        "Je veux pousser plus loin l'exploration des données, en devenant data analyst avec un impact concret sur les décisions business.",
    },
  ]

  // Données pour la section Passions avec vos vraies images
  const passions = [
    {
      icon: BookOpen,
      title: "Lecture",
      description: "Passionnée de littérature, particulièrement les récits qui explorent l'identité et les cultures.",
      image: "/images/livre.jpg",
      color: "from-pink-400 to-rose-500",
      details: "Actuellement en train de lire 'Petit Pays' de Gaël Faye - un récit poignant sur l'enfance et l'exil.",
    },
    {
      icon: Plane,
      title: "Voyages & Culture",
      description: "Explorer de nouveaux horizons et découvrir la richesse des cultures du monde.",
      image: "/images/dakar.jpg",
      color: "from-purple-400 to-pink-500",
      details: "Les couchers de soleil à Dakar restent gravés dans ma mémoire - une source d'inspiration constante.",
    },
    {
      icon: Camera,
      title: "Photographie",
      description: "Capturer les moments précieux et les beautés du quotidien à travers l'objectif.",
      image: "/images/iut.jpg",
      color: "from-rose-400 to-purple-500",
      details: "J'aime immortaliser les ciels colorés et les ambiances uniques de mon campus universitaire.",
    },
    {
      icon: Mic,
      title: "Éloquence & Communication",
      description: "L'art de transmettre des idées avec passion et clarté, que ce soit à l'oral ou à l'écrit.",
      image: "/images/marie2.jpg",
      color: "from-indigo-400 to-purple-500",
      details: "Participer à des concours d'éloquence m'a appris l'importance de bien structurer ses arguments.",
    },
  ]

  // Données Data Science
  const dataScienceReasons = [
    {
      icon: Brain,
      title: "Multidisciplinarité",
      description:
        "Mathématiques, statistiques, IA et informatique : un cocktail parfait pour résoudre des problèmes complexes.",
      color: "from-pink-400 to-rose-500",
      delay: 0,
    },
    {
      icon: Target,
      title: "Impact Concret",
      description: "Aider les entreprises à prendre des décisions éclairées grâce à l'analyse de données.",
      color: "from-purple-400 to-pink-500",
      delay: 200,
    },
    {
      icon: Sparkles,
      title: "Aspect Multidimensionnel",
      description: "Travailler dans des domaines variés : santé, finance, environnement et bien d'autres.",
      color: "from-rose-400 to-purple-500",
      delay: 400,
    },
    {
      icon: Heart,
      title: "Passion Personnelle",
      description: "Mes spécialités en mathématiques et sciences informatiques trouvent leur parfait équilibre.",
      color: "from-indigo-400 to-purple-500",
      delay: 600,
    },
  ]

  // Données des projets SAÉ simplifiées pour l'accueil
  const saeProjectsPreview = [
    {
      id: "S103",
      title: "Dashboard Excel Interactif",
      emoji: "📊",
      description: "Transformation de données brutes en visualisations dynamiques",
      color: "from-pink-400 to-rose-500",
      year: "2023",
    },
    {
      id: "S206",
      title: "Étude Rapatriement Sanitaire",
      emoji: "🚑",
      description: "Analyse de marché avec capsule vidéo professionnelle",
      color: "from-rose-400 to-pink-500",
      year: "2024",
    },
    {
      id: "SHINY",
      title: "Application Shiny",
      emoji: "⚡",
      description: "Interface interactive pour données énergétiques",
      color: "from-cyan-400 to-blue-500",
      year: "2025",
      grade: "20/20",
    },
  ]

  // Navigation items mis à jour avec la section Passions
  const navItems = [
    { id: "home", label: "Accueil", icon: Home, isPage: true },
    { id: "about", label: "À propos", icon: User, isPage: false },
    { id: "data-science", label: "Data Science", icon: Brain, isPage: true },
    { id: "competences", label: "Compétences", icon: TrendingUp, isPage: false },
    { id: "projets", label: "Projets", icon: GraduationCap, isPage: true },
    { id: "stage", label: "Stage", icon: Building2, isPage: true },
    { id: "contact", label: "Contact", icon: Mail, isPage: false },
  ]

  // Animation canvas pour les particules
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    // Créer des particules
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: `hsl(${Math.random() * 60 + 300}, 70%, 60%)`,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Effet de frappe
  useEffect(() => {
    if (activePage !== "home") return

    const currentWord = typingWords[currentWordIndex]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex <= currentWord.length) {
        setTypedText(currentWord.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % typingWords.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentWordIndex, activePage])

  useEffect(() => {
    // Simulation de chargement
    const timer = setTimeout(() => setIsLoading(false), 2000)

    // Suivi de la souris pour les effets de parallaxe
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Auto-play du carrousel
    const carouselTimer = setInterval(() => {
      if (activePage === "home") {
        setCurrentSlide((prev) => (prev + 1) % aboutSlides.length)
      }
    }, 5000)

    // Scroll spy pour la navigation (seulement pour la page home)
    const handleScroll = () => {
      if (activePage !== "home") return

      const sections = ["home", "about", "passions", "forces", "data-science-preview", "competences", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Animations d'apparition au scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    // Observer tous les éléments avec la classe animate-on-scroll
    setTimeout(() => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.observe(el)
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      clearInterval(carouselTimer)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [aboutSlides.length, activePage])

  const scrollToSection = (sectionId: string) => {
    if (activePage !== "home") {
      // Si on n'est pas sur la page home, y retourner d'abord
      setActivePage("home")
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 300)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const navigateToPage = (pageId: string) => {
    if (pageId === activePage) return

    setIsTransitioning(true)
    setTimeout(() => {
      setActivePage(pageId)
      setActiveSection(pageId)
      window.scrollTo({ top: 0, behavior: "smooth" })
      setIsTransitioning(false)
    }, 150)
    setIsMobileMenuOpen(false)
  }

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted
      setIsVideoMuted(!isVideoMuted)
    }
  }

  // Animation de chargement ultra-moderne
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative mb-8">
            {/* Cercles animés */}
            <div className="w-32 h-32 relative">
              <div className="absolute inset-0 border-4 border-pink-500/30 rounded-full animate-spin"></div>
              <div
                className="absolute inset-2 border-4 border-purple-500/50 rounded-full animate-spin"
                style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
              ></div>
              <div
                className="absolute inset-4 border-4 border-cyan-500/70 rounded-full animate-spin"
                style={{ animationDuration: "0.8s" }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="w-12 h-12 text-white animate-pulse" />
              </div>
            </div>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Portfolio Marie Samake
          </h2>
          <p className="text-purple-300 mb-6 text-lg">Chargement de l'univers data...</p>
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Canvas pour les particules animées */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" style={{ opacity: 0.6 }} />

      {/* Effet de parallaxe avec la souris amélioré */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(236, 72, 153, 0.4) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 70%)`,
        }}
      />

      {/* Navigation horizontale ultra-moderne - TOUJOURS VISIBLE */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Nom avec effet glassmorphism */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center overflow-hidden shadow-lg shadow-pink-500/25">
                  <img src="/images/marie.jpg" alt="Marie" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Marie Samake
                </h1>
                <p className="text-sm text-pink-400 font-medium">Data Science Student</p>
              </div>
            </div>

            {/* Navigation desktop avec effets modernes */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.isPage) {
                      navigateToPage(item.id)
                    } else {
                      scrollToSection(item.id)
                    }
                  }}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 backdrop-blur-sm ${
                    (item.isPage && activePage === item.id) || (!item.isPage && activeSection === item.id)
                      ? "text-white bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 shadow-lg shadow-pink-500/10"
                      : "text-white/70 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20"
                  }`}
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Menu mobile moderne */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Menu mobile dropdown avec glassmorphism */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-white/10">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.isPage) {
                        navigateToPage(item.id)
                      } else {
                        scrollToSection(item.id)
                      }
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      (item.isPage && activePage === item.id) || (!item.isPage && activeSection === item.id)
                        ? "text-white bg-gradient-to-r from-pink-500/20 to-purple-500/20"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Contenu principal avec transitions */}
      <main
        className={`pt-24 relative z-20 transition-all duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
      >
        {/* PAGE HOME */}
        {activePage === "home" && (
          <div>
            {/* 1. ACCUEIL - Section Hero ultra-moderne avec votre vidéo */}
            <section id="home" className="min-h-screen flex items-center justify-center mb-20 relative">
              <div className="max-w-6xl w-full px-6">
                {/* Badge étudiant avec effet néon */}
                <div className="text-center mb-12 animate-on-scroll">
                  <div className="inline-flex items-center px-8 py-4 bg-black/20 backdrop-blur-xl rounded-full border border-pink-400/30 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-500">
                    <Star className="w-6 h-6 text-pink-400 mr-3 animate-pulse" />
                    <span className="text-white font-bold text-lg">Je suis Étudiante en Science des Données</span>
                    <Sparkles className="w-6 h-6 text-purple-400 ml-3 animate-pulse" />
                  </div>
                </div>

                {/* Container vidéo avec votre vidéo eloquence2.mp4 */}
                <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 animate-on-scroll">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted={isVideoMuted}
                    loop
                    playsInline
                  >
                    <source src="/videos/eloquence2.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>

                  {/* Overlay gradient moderne */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-purple-500/40" />

                  {/* Contrôles vidéo modernes */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button
                      onClick={toggleMute}
                      className="p-3 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-all duration-300"
                      title={isVideoMuted ? "Activer le son" : "Couper le son"}
                    >
                      {isVideoMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={toggleVideo}
                      className="p-3 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-all duration-300"
                      title={isVideoPlaying ? "Pause" : "Lecture"}
                    >
                      {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Contenu par-dessus la vidéo avec titre fixe */}
                  <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                    <div>
                      <div className="relative w-full max-w-4xl mx-auto h-96 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 animate-on-scroll">
                        <video
                          ref={videoRef}
                          className="absolute top-0 left-0 w-full h-full object-cover"
                          autoPlay
                          muted={isVideoMuted}
                          loop
                          playsInline
                        >
                          <source src="/images/eloquence2.mp4" type="video/mp4" />
                          Votre navigateur ne supporte pas la lecture de vidéos.
                        </video>

                        {/* Overlay gradient moderne */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-purple-500/40" />

                        {/* Contrôles vidéo modernes */}
                        <div className="absolute top-4 right-4 flex space-x-2 z-10">
                          <button
                            onClick={toggleMute}
                            className="p-3 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-all duration-300"
                            title={isVideoMuted ? "Activer le son" : "Couper le son"}
                          >
                            {isVideoMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                          </button>
                          <button
                            onClick={toggleVideo}
                            className="p-3 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-all duration-300"
                            title={isVideoPlaying ? "Pause" : "Lecture"}
                          >
                            {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                          </button>
                        </div>

                        {/* Texte par-dessus la vidéo */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
                          <h1 className="text-5xl font-bold drop-shadow-2xl">
                            <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                              Donnons la parole aux données
                            </span>
                          </h1>
                          <p className="text-xl mt-4 drop-shadow-lg text-purple-100">
                            Transformer les données en histoires visuelles captivantes
                          </p>
                        </div>
                      </div>

                      <p className="text-xl mb-8 drop-shadow-lg text-purple-100">
                        Transformer les données en histoires visuelles captivantes
                      </p>

                      {/* Boutons d'action modernes */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-xl hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 px-8 py-4 text-lg font-semibold rounded-xl border border-pink-400/30">
                          <div className="flex items-center">
                            <div className="relative mr-3">
                              <Headphones className="w-6 h-6 group-hover:animate-pulse" />
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                            </div>
                            <span>Écouter mon Podcast</span>
                            <Mic className="https://marie-smk.github.io/podcast-site/" />
                          </div>
                        </Button>

                        <Button
                          onClick={() => scrollToSection("about")}
                          variant="outline"
                          className="bg-white/10 text-white border-white/30 hover:bg-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 px-6 py-3 rounded-xl backdrop-blur-sm"
                        >
                          <User className="w-5 h-5 mr-2" />
                          Découvrir mon parcours
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. À PROPOS - Section avec carrousel moderne */}
            <section id="about" className="mb-20 px-6">
              <h2 className="text-4xl font-bold text-white mb-12 text-center animate-on-scroll">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  À propos de moi
                </span>
              </h2>

              <div className="max-w-5xl mx-auto animate-on-scroll">
                <div className="relative bg-black/20 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/10">
                  <div className="flex flex-col lg:flex-row items-center min-h-96">
                    {/* Image avec cadre artistique moderne */}
                    <div className="w-full lg:w-1/2 p-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-3xl transform rotate-3 shadow-lg backdrop-blur-sm" />
                        <div className="relative bg-black/30 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/10">
                          <img
                            src={aboutSlides[currentSlide].image || "/placeholder.svg?height=300&width=300"}
                            alt={aboutSlides[currentSlide].title}
                            className="w-full h-72 object-cover rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="w-full lg:w-1/2 p-10">
                      <h3 className="text-3xl font-bold text-pink-400 mb-6">{aboutSlides[currentSlide].title}</h3>
                      <p className="text-white/80 leading-relaxed text-lg mb-8">{aboutSlides[currentSlide].content}</p>

                      {/* CTA vers Data Science */}
                      <Button
                        onClick={() => navigateToPage("data-science")}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 rounded-xl"
                      >
                        <Brain className="w-5 h-5 mr-2" />
                        Pourquoi la Data Science ?
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>

                  {/* Navigation du carrousel moderne */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    {aboutSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? "bg-pink-500 scale-125 shadow-lg shadow-pink-500/50"
                            : "bg-white/30 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Flèches de navigation modernes */}
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + aboutSlides.length) % aboutSlides.length)}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-black/50 hover:scale-110 transition-all duration-300 text-white"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % aboutSlides.length)}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-black/50 hover:scale-110 transition-all duration-300 text-white"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </section>

            {/* 3. MES FORCES EN ACTION - Nouvelle section avec le design fourni */}
            <section id="forces" className="mb-20 px-6">
              <div className="relative bg-gradient-to-br from-purple-900/80 via-pink-900/60 to-purple-900/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-pink-400/20 animate-on-scroll">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
                
                <div className="relative z-10 p-12">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-6 flex items-center justify-center">
                      <Star className="w-10 h-10 mr-3 text-pink-400" />
                      Mes Forces en Action
                    </h2>
                    <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
                      Découvrez comment mes forces personnelles se traduisent concrètement dans mes projets et réalisations.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                      {
                        icon: Lightbulb,
                        title: "Créativité",
                        subtitle: "Donner vie aux données",
                        exemple: "Dashboard Excel : Création de tableaux de bord interactifs pour visualiser les données des étudiants de l'IUT.",
                        color: "from-pink-400 to-rose-500",
                        borderColor: "border-pink-400/50",
                      },
                      {
                        icon: Target,
                        title: "Persévérance", 
                        subtitle: "Aller au bout de chaque démarche",
                        exemple: "Nettoyage de données : Un travail de fourmi pour rassembler les données anonymisées des étudiants et personnels. Malgré les obstacles administratifs, cette persévérance a permis des analyses fondées sur des données réelles et représentatives.",
                        color: "from-purple-400 to-pink-500",
                        borderColor: "border-purple-400/50",
                      },
                      {
                        icon: PresentationChart,
                        title: "Sens du récit",
                        subtitle: "Argumentation et présentations d'informations",
                        exemple: "Présentation CEO : J'ai transformé une analyse en un storyboard visuel structurant les données sous forme de narration persuasive. Par ailleurs, j'ai terminé ex aequo à la 3ᵉ place d'un concours d'éloquence réunissant environ 160 participants.",
                        color: "from-rose-400 to-purple-500",
                        borderColor: "border-rose-400/50",
                      },
                    ].map((force, index) => (
                      <Card
                        key={index}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <CardContent className="p-8 text-center h-full flex flex-col">
                          <div
                            className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${force.color} rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
                          >
                            <force.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-pink-400 mb-2">{force.title}</h3>
                          <h4 className="text-lg text-white/80 mb-6 italic">{force.subtitle}</h4>
                          <div className={`bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-xl border-l-4 ${force.borderColor} flex-grow flex items-center`}>
                            <p className="text-white/70 text-sm leading-relaxed text-left">{force.exemple}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            {/* 4. MES PASSIONS - Section en format vertical */}
            <section id="passions" className="mb-20 px-6">
              <div className="text-center mb-12 animate-on-scroll">
                <h2 className="text-4xl font-bold text-white mb-6">
                  <Heart className="inline w-10 h-10 mr-3 text-pink-500" />
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Mes Passions
                  </span>
                </h2>
                <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
                  Au-delà des données, je cultive des passions qui nourrissent ma créativité et enrichissent ma vision
                  du monde.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {passions.map((passion, index) => (
                  <Card
                    key={index}
                    className="group bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-on-scroll overflow-hidden"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-0">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={passion.image || "/placeholder.svg"}
                          alt={passion.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${passion.color} rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm border border-white/20`}
                          >
                            <passion.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-white mb-3">{passion.title}</h3>
                        <p className="text-white/80 mb-4 leading-relaxed">{passion.description}</p>
                        <p className="text-pink-400 italic text-sm leading-relaxed mb-4">{passion.details}</p>

                        {/* Boutons spéciaux */}
                        {passion.title === "Éloquence & Communication" && (
                          <Button
                            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:shadow-pink-500/25 transition-all duration-300 rounded-xl"
                            onClick={() => window.open("https://youtu.be/rEF8Mu_uBL8", "_blank")}
                          >
                            <Play className="w-4 h-4 mr-2" />
                            Voir ma prestation - 3ème place ex æquo 2023/2024
                          </Button>
                        )}
                        {passion.title === "Photographie" && (
                          <Button
                            className="w-full bg-gradient-to-r from-rose-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:shadow-rose-500/25 transition-all duration-300 rounded-xl"
                            onClick={() => {
                              // Créer une modal pour agrandir l'image
                              const modal = document.createElement("div")
                              modal.className =
                                "fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                              modal.onclick = () => modal.remove()

                              const img = document.createElement("img")
                              img.src = passion.image
                              img.className = "max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                              img.onclick = (e) => e.stopPropagation()

                              const closeBtn = document.createElement("button")
                              closeBtn.innerHTML = "✕"
                              closeBtn.className =
                                "absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
                              closeBtn.onclick = () => modal.remove()

                              modal.appendChild(img)
                              modal.appendChild(closeBtn)
                              document.body.appendChild(modal)
                            }}
                          >
                            <Camera className="w-4 h-4 mr-2" />
                            Voir l'image en grand
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>


            {/* 4. DATA SCIENCE PREVIEW - Aperçu avec CTA */}
            <section id="data-science-preview" className="mb-20 px-6">
              <div className="text-center mb-12 animate-on-scroll">
                <h2 className="text-4xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Pourquoi la Data Science ?
                  </span>
                </h2>
                <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
                  Découvrez les raisons qui m'ont poussée vers cette discipline fascinante qui allie créativité, rigueur
                  et impact.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
                {dataScienceReasons.slice(0, 2).map((reason, index) => (
                  <Card
                    key={index}
                    className={`group bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-rotate-1 animate-on-scroll`}
                    style={{ animationDelay: `${reason.delay}ms` }}
                  >
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${reason.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-pink-500/25`}
                      >
                        <reason.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
                      <p className="text-white/70 leading-relaxed">{reason.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CTA vers la page Data Science complète */}
              <div className="text-center animate-on-scroll">
                <Button
                  onClick={() => navigateToPage("data-science")}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  <BookOpen className="w-5 h-5 mr-3" />
                  Lire ma BD complète
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </section>

            {/* 5. COMPÉTENCES - Section réorganisée avec animations */}
            <section id="competences" className="mb-20 px-6">
              <h2 className="text-4xl font-bold text-white mb-12 text-center animate-on-scroll">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Mes Compétences
                </span>
              </h2>

              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card className="group bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-xl text-white border border-cyan-400/30 shadow-2xl hover:shadow-3xl hover:shadow-cyan-500/25 transition-all duration-500 hover:scale-105 hover:-rotate-1 animate-on-scroll">
                  <CardContent className="p-10 text-center">
                    <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Database className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6">Traiter</h3>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-start">
                        <Zap className="w-4 h-4 text-cyan-300 mr-2 mt-1 flex-shrink-0" />
                        <span>Python (Pandas, NumPy...)</span>
                      </li>
                      <li className="flex items-start">
                        <Zap className="w-4 h-4 text-cyan-300 mr-2 mt-1 flex-shrink-0" />
                        <span>SQL; bases de données</span>
                      </li>
                      <li className="flex items-start">
                        <Zap className="w-4 h-4 text-cyan-300 mr-2 mt-1 flex-shrink-0" />
                        <span>R</span>
                      </li>
                      <li className="flex items-start">
                        <Zap className="w-4 h-4 text-cyan-300 mr-2 mt-1 flex-shrink-0" />
                        <span>Mathematica</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card
                  className="group bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl text-white border border-purple-400/30 shadow-2xl hover:shadow-3xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 hover:-rotate-1 animate-on-scroll"
                  style={{ animationDelay: "200ms" }}
                >
                  <CardContent className="p-10 text-center">
                    <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <BarChart3 className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6">Analyser</h3>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-start">
                        <Lightbulb className="w-4 h-4 text-purple-300 mr-2 mt-1 flex-shrink-0" />
                        <span>Data Visualisation</span>
                      </li>
                      <li className="flex items-start">
                        <Lightbulb className="w-4 h-4 text-purple-300 mr-2 mt-1 flex-shrink-0" />
                        <span>Modélisation linéaire</span>
                      </li>
                      <li className="flex items-start">
                        <Lightbulb className="w-4 h-4 text-purple-300 mr-2 mt-1 flex-shrink-0" />
                        <span>Analyse en composantes principales</span>
                      </li>
                      <li className="flex items-start">
                        <Lightbulb className="w-4 h-4 text-purple-300 mr-2 mt-1 flex-shrink-0" />
                        <span>Statistiques Inférentielles</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card
                  className="group bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-xl text-white border border-pink-400/30 shadow-2xl hover:shadow-3xl hover:shadow-pink-500/25 transition-all duration-500 hover:scale-105 hover:-rotate-1 animate-on-scroll"
                  style={{ animationDelay: "400ms" }}
                >
                  <CardContent className="p-10 text-center">
                    <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6">Valorisation</h3>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-start">
                        <Globe className="w-4 h-4 text-pink-300 mr-2 mt-1 flex-shrink-0" />
                        <span>Power BI & Tableau</span>
                      </li>
                      <li className="flex items-start">
                        <Globe className="w-4 h-4 text-pink-300 mr-2 mt-1 flex-shrink-0" />
                        <span>Communication</span>
                      </li>
                      <li className="flex items-start">
                        <Globe className="w-4 h-4 text-pink-300 mr-2 mt-1 flex-shrink-0" />
                        <span>Gestion de projet</span>
                      </li>
                      <li className="flex items-start">
                        <Globe className="w-4 h-4 text-pink-300 mr-2 mt-1 flex-shrink-0" />
                        <span>Présenter des données dans un environnement entrepreneurial</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* 6. PROJETS - Aperçu avec CTA vers page dédiée */}
            <section className="mb-20 px-6">
              <div className="text-center mb-12 animate-on-scroll">
                <h2 className="text-4xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    🎓 Mes Projets Académiques
                  </span>
                </h2>
                <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
                  6 projets, 6 défis, 6 victoires ! Découvrez mon parcours académique à travers mes SAÉ les plus
                  marquantes.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                {saeProjectsPreview.map((project, index) => (
                  <Card
                    key={project.id}
                    className="group cursor-pointer bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-3xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105 hover:-rotate-1 animate-on-scroll"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{project.emoji}</div>
                      <div className="flex justify-center gap-2 mb-4">
                        <Badge className="bg-white/10 text-white/80 border border-white/20">{project.year}</Badge>
                        {project.grade && (
                          <Badge className="bg-yellow-500/20 text-yellow-300 border border-yellow-400/30">
                            {project.grade}
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-bold text-white mb-3 text-lg">{project.title}</h3>
                      <p className="text-sm text-white/70 mb-4 leading-relaxed">{project.description}</p>
                      <div className="text-xs text-pink-400 font-medium">{project.id}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center animate-on-scroll">
                <Button
                  onClick={() => navigateToPage("projets")}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  <Rocket className="w-5 h-5 mr-3" />
                  Explorer tous mes projets en détail
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </section>

            {/* 7. STAGE - Aperçu avec CTA vers page dédiée */}
            <section className="mb-20 px-6">
              <div className="max-w-4xl mx-auto animate-on-scroll">
                <Card className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-xl border border-blue-400/30 shadow-2xl hover:shadow-3xl hover:shadow-blue-500/25 transition-all duration-500">
                  <CardContent className="p-10 text-center">
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-blue-400 mb-4">
                        <Building2 className="inline w-8 h-8 mr-3" />
                        Stage à la Banque de France
                      </h2>
                      <p className="text-white/70 text-lg">5 mois au cœur de l'institution monétaire française</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-blue-400/20">
                        <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                        <p className="font-semibold text-blue-300">Avril - Août 2025</p>
                      </div>
                      <div className="text-center p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-blue-400/20">
                        <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                        <p className="font-semibold text-blue-300">Paris, France</p>
                      </div>
                      <div className="text-center p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-blue-400/20">
                        <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                        <p className="font-semibold text-blue-300">Data Analyst</p>
                      </div>
                    </div>

                    <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10">
                      <p className="text-white/80 leading-relaxed mb-4">
                        <strong className="text-blue-300">Direction des Statistiques Monétaires et Financières</strong>
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 text-blue-400 mr-2" />
                          <span>Gestion complète de campagne publipostage (400+ clients)</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 text-blue-400 mr-2" />
                          <span>135 appels téléphoniques clients</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={() => navigateToPage("stage")}
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl"
                    >
                      <Building2 className="w-5 h-5 mr-3" />
                      Découvrir mon expérience
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          {/* 8. CONTACT - Section finale moderne */}
          <section id="contact" className="text-center px-6 pb-20">
            <div className="max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/10 animate-on-scroll">
              <h2 className="text-4xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Connectons-nous !
                </span>
              </h2>
              <p className="text-white/70 mb-12 text-lg leading-relaxed">
                Prête pour de nouveaux défis data ! Que ce soit pour un stage, un projet ou juste pour échanger sur la data science, je suis toujours partante pour une bonne conversation. ☕
              </p>

              {/* Bouton Télécharger CV */}
              <div className="flex justify-center mb-8">
                <a href="/images/CV_Marie_SAMAKE.pdf" download>
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-xl hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl">
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger mon CV
                  </Button>
                </a>
              </div>

              {/* Boutons externes (GitHub, LinkedIn, Email) */}
              <div className="flex justify-center space-x-6 mb-8">
                <a href="https://github.com/marie-smk" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-pink-400/30 text-pink-300 hover:bg-pink-500/20 px-6 py-3 rounded-xl backdrop-blur-sm">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/marie-samake-53829a2b1/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-purple-400/30 text-purple-300 hover:bg-purple-500/20 px-6 py-3 rounded-xl backdrop-blur-sm">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </a>
                <a href="mailto:smarie.samake@gmail.com">
                  <Button variant="outline" className="border-rose-400/30 text-rose-300 hover:bg-rose-500/20 px-6 py-3 rounded-xl backdrop-blur-sm">
                    <Mail className="w-5 h-5 mr-2" />
                    Email
                  </Button>
                </a>
              </div>

              {/* Bouton Podcast */}
              <div className="flex justify-center">
                <a href="https://marie-smk.github.io/podcast-site/" target="_blank" rel="noopener noreferrer">
                  <Button className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-xl hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 px-8 py-4 text-lg font-semibold rounded-xl border border-pink-400/30">
                    <Headphones className="w-6 h-6 mr-2 group-hover:animate-pulse" />
                    Écouter mon Podcast
                    <Mic className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </section>

          </div>
        )}

        {/* PAGE DATA SCIENCE */}
        {activePage === "data-science" && <DataScienceSection onNavigateHome={() => navigateToPage("home")} />}

        {/* PAGE PROJETS */}
        {activePage === "projets" && <ProjetsSection onNavigateHome={() => navigateToPage("home")} />}

        {/* PAGE STAGE */}
        {activePage === "stage" && <StageSection onNavigateHome={() => navigateToPage("home")} />}
      </main>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}
