"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  BookOpen,
  Heart,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Brain,
  Target,
  Rocket,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Download,
} from "lucide-react"

interface DataScienceSectionProps {
  onNavigateHome: () => void
}

export default function DataScienceSection({ onNavigateHome }: DataScienceSectionProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  // Les deux pages BD réelles
  const bdPages = [
    {
      id: 1,
      title: "Pourquoi la Science des Données ? - Page 1",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-axE12DaB3uDpWowrC5aOtfpQCMBR1K.png",
      description: "La découverte : Marie explique sa passion pour la data science et ses multiples facettes",
      themes: ["Découverte", "Passion", "Multidisciplinarité"],
    },
    {
      id: 2,
      title: "Pourquoi la Science des Données ? - Page 2",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7jcDJK55hYeJjHe87NxqRRgJ2TG3xM.png",
      description: "La vision : L'aspect multidimensionnel qui permet de travailler dans tous les domaines",
      themes: ["Vision d'avenir", "Impact", "Polyvalence"],
    },
  ]

  // Raisons du choix de la Data Science extraites de la BD
  const motivations = [
    {
      icon: Brain,
      title: "Multidisciplinarité",
      description:
        "Mathématiques, statistiques, IA et informatique : un cocktail parfait pour résoudre des problèmes complexes.",
      color: "from-pink-400 to-rose-500",
    },
    {
      icon: Target,
      title: "Impact Concret",
      description: "Aider les entreprises à prendre des décisions éclairées grâce à l'analyse de données.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Sparkles,
      title: "Aspect Multidimensionnel",
      description: "Travailler dans des domaines variés : santé, finance, environnement et bien d'autres.",
      color: "from-rose-400 to-purple-500",
    },
    {
      icon: Heart,
      title: "Passion Personnelle",
      description: "Mes spécialités en mathématiques et sciences informatiques trouvent leur parfait équilibre.",
      color: "from-indigo-400 to-purple-500",
    },
  ]

  const currentBDPage = bdPages[currentPage]

  useEffect(() => {
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

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen px-8 pb-20">
      {/* Header avec navigation */}
      <header className="relative z-30 mb-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Button
            onClick={onNavigateHome}
            variant="outline"
            className="border-pink-400/30 text-pink-300 hover:bg-pink-500/20 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au portfolio
          </Button>

          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-2">
              <BookOpen className="inline w-10 h-10 mr-3 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Pourquoi la Science des Données ?
              </span>
            </h1>
            <p className="text-white/70">Mon histoire en BD</p>
          </div>

          <Button
            variant="outline"
            className="border-purple-400/30 text-purple-300 hover:bg-purple-500/20 backdrop-blur-sm"
            onClick={() => window.open(currentBDPage.image, "_blank")}
          >
            <Download className="w-4 h-4 mr-2" />
            Télécharger
          </Button>
        </div>
      </header>

      {/* Section BD principale */}
      <section className="relative z-20 mb-20">
        <div className="max-w-6xl mx-auto">
          {/* Lecteur BD */}
          <Card className="bg-black/20 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border border-white/10 animate-on-scroll">
            <CardContent className="p-8">
              {/* Info de la page */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{currentBDPage.title}</h2>
                  <p className="text-white/70">{currentBDPage.description}</p>
                </div>
                <div className="flex gap-2">
                  {currentBDPage.themes.map((theme, index) => (
                    <Badge key={index} variant="outline" className="border-purple-400/30 text-purple-300 bg-black/20">
                      {theme}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Image BD */}
              <div className="relative group">
                <div
                  className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 ${
                    isZoomed ? "scale-105" : "hover:scale-102"
                  }`}
                >
                  <img
                    src={currentBDPage.image || "/placeholder.svg"}
                    alt={currentBDPage.title}
                    className="w-full h-auto cursor-pointer"
                    onClick={() => setIsZoomed(!isZoomed)}
                  />

                  {/* Overlay pour zoom */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button
                      variant="outline"
                      className="bg-black/50 backdrop-blur-sm border-purple-400/30 text-white"
                      onClick={() => setIsZoomed(!isZoomed)}
                    >
                      <ZoomIn className="w-4 h-4 mr-2" />
                      {isZoomed ? "Réduire" : "Agrandir"}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Navigation entre les pages */}
              <div className="flex items-center justify-center mt-8 gap-4">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(0)}
                  disabled={currentPage === 0}
                  className="border-purple-400/30 text-purple-300 hover:bg-purple-500/20 disabled:opacity-50 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Page 1
                </Button>

                <div className="flex gap-2">
                  {bdPages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentPage
                          ? "bg-purple-500 scale-125 shadow-lg shadow-purple-500/50"
                          : "bg-purple-200/30 hover:bg-purple-300/50"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="border-purple-400/30 text-purple-300 hover:bg-purple-500/20 disabled:opacity-50 backdrop-blur-sm"
                >
                  Page 2
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section Motivations extraites de la BD */}
      <section className="relative z-20 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-white mb-6">
              <Star className="inline w-10 h-10 mr-3 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Les Raisons de Mon Choix
              </span>
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
              Comme illustré dans ma BD, la data science réunit tout ce qui me passionne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {motivations.map((motivation, index) => (
              <Card
                key={index}
                className="group bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-rotate-1 animate-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${motivation.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                  >
                    <motivation.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{motivation.title}</h3>
                  <p className="text-white/70 leading-relaxed">{motivation.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Citation finale de la BD */}
      <section className="relative z-20 mb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-xl text-white border border-purple-400/30 shadow-2xl animate-on-scroll">
            <CardContent className="p-12 text-center">
              <Sparkles className="w-16 h-16 mx-auto mb-8 text-yellow-300" />
              <blockquote className="text-2xl font-light italic mb-8 leading-relaxed">
                "Ce qui est incroyable pour moi, c'est cet aspect multidimensionnel qui me permettra de travailler dans
                des domaines variés tels que la santé, la finance, l'environnement et bien d'autres, tout en comprenant
                l'importance des données et de leur impact."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-8 h-8 text-pink-300" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-lg">Marie Samake</p>
                  <p className="text-pink-200">Étudiante en Science des Données</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-20 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="bg-black/20 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/10 animate-on-scroll">
            <CardContent className="p-12">
              <Rocket className="w-16 h-16 mx-auto mb-8 text-purple-400" />
              <h2 className="text-3xl font-bold text-white mb-6">Découvrez comment je concrétise cette passion</h2>
              <p className="text-white/70 mb-8 text-lg leading-relaxed">
                Cette vision de la data science se traduit concrètement dans mes projets académiques et mon expérience
                professionnelle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={onNavigateHome}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  <TrendingUp className="w-5 h-5 mr-3" />
                  Voir mes projets SAÉ
                </Button>

                <Button
                  onClick={onNavigateHome}
                  variant="outline"
                  className="border-purple-400/30 text-purple-300 hover:bg-purple-500/20 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
                >
                  <Users className="w-5 h-5 mr-3" />
                  Mon stage à la Banque de France
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
