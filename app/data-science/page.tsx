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
import Link from "next/link"

export default function DataScienceBD() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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

  useEffect(() => {
    // Suivi de la souris pour les effets
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const currentBDPage = bdPages[currentPage]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 relative overflow-hidden">
      {/* Particules flottantes thématiques BD */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            <BookOpen
              className="text-purple-300 opacity-20"
              size={Math.random() * 15 + 10}
              style={{
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Effet de parallaxe */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`,
        }}
      />

      {/* Header avec navigation */}
      <header className="relative z-30 p-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au portfolio
            </Button>
          </Link>

          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              <BookOpen className="inline w-10 h-10 mr-3 text-purple-600" />
              Pourquoi la Science des Données ?
            </h1>
            <p className="text-gray-600">Mon histoire en BD</p>
          </div>

          <Button
            variant="outline"
            className="border-purple-300 text-purple-600 hover:bg-purple-50"
            onClick={() => window.open(currentBDPage.image, "_blank")}
          >
            <Download className="w-4 h-4 mr-2" />
            Télécharger
          </Button>
        </div>
      </header>

      {/* Section BD principale */}
      <section className="relative z-20 px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          {/* Lecteur BD */}
          <Card className="bg-white/95 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden border-4 border-purple-200">
            <CardContent className="p-8">
              {/* Info de la page */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{currentBDPage.title}</h2>
                  <p className="text-gray-600">{currentBDPage.description}</p>
                </div>
                <div className="flex gap-2">
                  {currentBDPage.themes.map((theme, index) => (
                    <Badge key={index} variant="outline" className="border-purple-300 text-purple-600">
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
                      className="bg-white/90 border-purple-300 text-purple-600"
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
                  className="border-purple-300 text-purple-600 hover:bg-purple-50 disabled:opacity-50"
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
                          ? "bg-purple-500 scale-125 shadow-lg"
                          : "bg-purple-200 hover:bg-purple-300"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="border-purple-300 text-purple-600 hover:bg-purple-50 disabled:opacity-50"
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
      <section className="relative z-20 px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              <Star className="inline w-10 h-10 mr-3 text-purple-600" />
              Les Raisons de Mon Choix
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Comme illustré dans ma BD, la data science réunit tout ce qui me passionne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {motivations.map((motivation, index) => (
              <Card
                key={index}
                className="group bg-white/90 backdrop-blur-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${motivation.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                  >
                    <motivation.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{motivation.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{motivation.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Citation finale de la BD */}
      <section className="relative z-20 px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-900 to-pink-900 text-white border-0 shadow-2xl">
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
      <section className="relative z-20 px-8 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl">
            <CardContent className="p-12">
              <Rocket className="w-16 h-16 mx-auto mb-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Découvrez comment je concrétise cette passion</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Cette vision de la data science se traduit concrètement dans mes projets académiques et mon expérience
                professionnelle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/projets">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold">
                    <TrendingUp className="w-5 h-5 mr-3" />
                    Mes projets SAÉ
                  </Button>
                </Link>

                <Link href="/stage">
                  <Button
                    variant="outline"
                    className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
                  >
                    <Users className="w-5 h-5 mr-3" />
                    Mon stage à la Banque de France
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
