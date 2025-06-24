"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  User,
  Home,
  TrendingUp,
  Mail,
  Heart,
  Star,
  Sparkles,
  GraduationCap,
  Building2,
  Mic,
  Headphones,
  Brain,
  Menu,
  X,
  Target,
  BookOpen,
  ArrowRight,
  Camera,
  Plane,
  Music,
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
  const [activePage, setActivePage] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Données des slides À propos avec vos vraies images
  const aboutSlides = [
    {
      image: "/images/marie.jpg",
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

  // Données pour la section Passions
  const passions = [
    {
      icon: BookOpen,
      title: "Lecture",
      description: "Passionnée de littérature, particulièrement les récits qui explorent l'identité et les cultures.",
      image: "/images/livre.jpg",
      color: "from-pink-300 to-rose-400",
      details: "Actuellement en train de lire 'Petit Pays' de Gaël Faye - un récit poignant sur l'enfance et l'exil.",
    },
    {
      icon: Plane,
      title: "Voyages & Culture",
      description: "Explorer de nouveaux horizons et découvrir la richesse des cultures du monde.",
      image: "/images/dakar.jpg",
      color: "from-purple-300 to-pink-400",
      details: "Les couchers de soleil à Dakar restent gravés dans ma mémoire - une source d'inspiration constante.",
    },
    {
      icon: Camera,
      title: "Photographie",
      description: "Capturer les moments précieux et les beautés du quotidien à travers l'objectif.",
      image: "/images/iut.jpg",
      color: "from-rose-300 to-pink-400",
      details: "J'aime immortaliser les ciels colorés et les ambiances uniques de mon campus universitaire.",
    },
    {
      icon: Music,
      title: "Musique & Podcasts",
      description: "Mélomane dans l'âme, j'adore découvrir de nouveaux artistes et écouter des podcasts inspirants.",
      image: "/placeholder.svg?height=300&width=300&text=🎵",
      color: "from-indigo-300 to-purple-400",
      details: "La musique accompagne mes sessions de code et mes analyses de données.",
    },
  ]

  // Données Data Science
  const dataScienceReasons = [
    {
      icon: Brain,
      title: "Multidisciplinarité",
      description:
        "Mathématiques, statistiques, IA et informatique : un cocktail parfait pour résoudre des problèmes complexes.",
      color: "from-pink-300 to-rose-400",
      delay: 0,
    },
    {
      icon: Target,
      title: "Impact Concret",
      description: "Aider les entreprises à prendre des décisions éclairées grâce à l'analyse de données.",
      color: "from-purple-300 to-pink-400",
      delay: 200,
    },
    {
      icon: Sparkles,
      title: "Aspect Multidimensionnel",
      description: "Travailler dans des domaines variés : santé, finance, environnement et bien d'autres.",
      color: "from-rose-300 to-purple-400",
      delay: 400,
    },
    {
      icon: Heart,
      title: "Passion Personnelle",
      description: "Mes spécialités en mathématiques et sciences informatiques trouvent leur parfait équilibre.",
      color: "from-indigo-300 to-purple-400",
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
      color: "from-pink-300 to-rose-400",
      year: "2023",
    },
    {
      id: "S201",
      title: "Base de Données Festival",
      emoji: "🎭",
      description: "Conception et implémentation d'une base de données relationnelle",
      color: "from-purple-300 to-indigo-400",
      year: "2024",
    },
    {
      id: "S206",
      title: "Analyse Stratégique",
      emoji: "🎯",
      description: "Étude de marché avec capsule vidéo professionnelle",
      color: "from-rose-300 to-pink-400",
      year: "2024",
      grade: "19/20",
    },
    {
      id: "S301",
      title: "Enquête Alimentaire",
      emoji: "🍎",
      description: "Analyse des habitudes alimentaires via échantillonnage",
      color: "from-green-300 to-emerald-400",
      year: "2024",
      grade: "18/20",
    },
    {
      id: "S303",
      title: "Séries Chronologiques",
      emoji: "📈",
      description: "Prévision de tendances via modélisation temporelle",
      color: "from-orange-300 to-red-400",
      year: "2024",
      grade: "19/20",
    },
    {
      id: "SHINY",
      title: "Application Shiny",
      emoji: "⚡",
      description: "Interface interactive pour données énergétiques",
      color: "from-cyan-300 to-blue-400",
      year: "2025",
      grade: "20/20",
    },
  ]

  // Navigation items mis à jour avec la section Passions
  const navItems = [
    { id: "home", label: "Accueil", icon: Home, isPage: true },
    { id: "about", label: "À propos", icon: User, isPage: false },
    { id: "passions", label: "Mes Passions", icon: Heart, isPage: false },
    { id: "data-science", label: "Data Science", icon: Brain, isPage: true },
    { id: "competences", label: "Compétences", icon: TrendingUp, isPage: false },
    { id: "projets", label: "Projets", icon: GraduationCap, isPage: true },
    { id: "stage", label: "Stage", icon: Building2, isPage: true },
    { id: "contact", label: "Contact", icon: Mail, isPage: false },
  ]

  // Animation canvas pour les particules (version girly)
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

    // Créer des particules avec des couleurs girly
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.4 + 0.2,
        color: `hsl(${Math.random() * 60 + 300}, 60%, 80%)`, // Couleurs pastel
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

      const sections = ["home", "about", "passions", "data-science-preview", "competences", "contact"]
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

  // Animation de chargement girly
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-rose-100 to-purple-100 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative mb-8">
            {/* Cercles animés girly */}
            <div className="w-32 h-32 relative">
              <div className="absolute inset-0 border-4 border-pink-300/50 rounded-full animate-spin"></div>
              <div
                className="absolute inset-2 border-4 border-rose-300/70 rounded-full animate-spin"
                style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
              ></div>
              <div
                className="absolute inset-4 border-4 border-purple-300/90 rounded-full animate-spin"
                style={{ animationDuration: "0.8s" }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="w-12 h-12 text-pink-500 animate-pulse" />
              </div>
            </div>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Portfolio Marie Samake
          </h2>
          <p className="text-pink-600 mb-6 text-lg">Chargement de l'univers data...</p>
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 relative overflow-hidden">
      {/* Canvas pour les particules animées */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" style={{ opacity: 0.4 }} />

      {/* Effet de parallaxe avec la souris (version girly) */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(236, 72, 153, 0.3) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)`,
        }}
      />

      {/* Navigation horizontale girly - TOUJOURS VISIBLE */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-pink-200/50 shadow-lg shadow-pink-100/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Nom avec effet girly */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center overflow-hidden shadow-lg shadow-pink-300/50">
                  <img src="/images/marie.jpg" alt="Marie" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Marie Samake
                </h1>
                <p className="text-sm text-rose-500 font-medium">Data Science Student</p>
              </div>
            </div>

            {/* Navigation desktop avec effets girly */}
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
                      ? "text-white bg-gradient-to-r from-pink-400 to-rose-500 shadow-lg shadow-pink-300/50"
                      : "text-gray-700 hover:text-pink-600 hover:bg-pink-50 border border-transparent hover:border-pink-200"
                  }`}
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Menu mobile girly */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Menu mobile dropdown girly */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-pink-200">
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
                        ? "text-white bg-gradient-to-r from-pink-400 to-rose-500"
                        : "text-gray-700 hover:text-pink-600 hover:bg-pink-50"
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
            {/* 1. ACCUEIL - Section Hero girly avec votre vidéo */}
            <section id="home" className="min-h-screen flex items-center justify-center mb-20 relative">
              <div className="max-w-6xl w-full px-6">
                {/* Badge étudiant girly */}
                <div className="text-center mb-12 animate-on-scroll">
                  <div className="inline-flex items-center px-8 py-4 bg-white/70 backdrop-blur-xl rounded-full border border-pink-300/50 shadow-lg shadow-pink-200/50 hover:shadow-pink-300/70 transition-all duration-500">
                    <Star className="w-6 h-6 text-pink-500 mr-3 animate-pulse" />
                    <span className="text-gray-800 font-bold text-lg">Je suis Étudiante en Science des Données</span>
                    <Sparkles className="w-6 h-6 text-purple-500 ml-3 animate-pulse" />
                  </div>
                </div>

                {/* Container vidéo avec votre vidéo eloquence2.mp4 */}
                <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl shadow-pink-300/30 animate-on-scroll">
                  <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted loop playsInline>
                    <source src="/videos/eloquence2.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>

                  {/* Overlay gradient girly */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-300/40 via-transparent to-purple-300/40" />

                  {/* Contenu par-dessus la vidéo avec titre fixe */}
                  <div className="absolute inset-0 flex items-center justify-center text-center text-gray-800">
                    <div>
                      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
                        <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent">
                          Donnons la parole aux données
                        </span>
                      </h1>
                      <p className="text-xl mb-8 drop-shadow-md text-gray-700">
                        Transformer les données en histoires visuelles captivantes
                      </p>

                      {/* Boutons d'action girly */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button className="group bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-xl hover:shadow-2xl hover:shadow-pink-300/50 transition-all duration-500 px-8 py-4 text-lg font-semibold rounded-xl border border-pink-300/30">
                          <div className="flex items-center">
                            <div className="relative mr-3">
                              <Headphones className="w-6 h-6 group-hover:animate-pulse" />
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                            </div>
                            <span>Écouter mon Podcast</span>
                            <Mic className="w-5 h-5 ml-2 group-hover:animate-bounce" />
                          </div>
                        </Button>

                        <Button
                          onClick={() => scrollToSection("about")}
                          variant="outline"
                          className="bg-white/70 text-gray-700 border-pink-300 hover:bg-pink-50 shadow-xl hover:shadow-2xl transition-all duration-500 px-6 py-3 rounded-xl backdrop-blur-sm"
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

            {/* Reste du contenu... */}
          </div>
        )}

        {/* PAGE DATA SCIENCE */}
        {activePage === "data-science" && <DataScienceSection onNavigateHome={() => navigateToPage("home")} />}

        {/* PAGE PROJETS */}
        {activePage === "projets" && <ProjetsSection onNavigateHome={() => navigateToPage("home")} />}

        {/* PAGE STAGE */}
        {activePage === "stage" && <StageSection onNavigateHome={() => navigateToPage("home")} />}
      </main>
    </div>
  )
}
