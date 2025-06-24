"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Building2,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  BarChart3,
  Database,
  Brain,
  Star,
  Trophy,
  Target,
  Lightbulb,
  Rocket,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Download,
  Play,
  Quote,
} from "lucide-react"

interface StageSectionProps {
  onNavigateHome: () => void
}

export default function StageSection({ onNavigateHome }: StageSectionProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  // Informations détaillées du stage
  const stageInfo = {
    entreprise: "Banque de France",
    poste: "Assistante division données recherches et référentiels",
    direction: "Direction des Statistiques Monétaires et Financières",
    periode: "Avril - Août 2025",
    duree: "5 mois",
    lieu: "Paris, France",
    statut: "En cours",
    type: "Stage de fin d'études",
  }

  // Missions et responsabilités
  const missions = [
    {
      id: "analyse",
      title: "Analyse de Données Sensibles",
      icon: BarChart3,
      description: "Traitement et analyse de données financières confidentielles",
      details: [
        "Analyse des flux monétaires européens",
        "Traitement de datasets de plusieurs millions d'entrées",
        "Identification de tendances et anomalies",
        "Création de rapports d'analyse hebdomadaires",
      ],
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: "dashboard",
      title: "Tableaux de Bord Interactifs",
      icon: TrendingUp,
      description: "Développement de dashboards pour le suivi des indicateurs clés",
      details: [
        "Conception d'interfaces utilisateur intuitives",
        "Automatisation des rapports quotidiens",
        "Intégration de multiples sources de données",
        "Formation des équipes à l'utilisation des outils",
      ],
      color: "from-purple-400 to-pink-500",
    },
    {
      id: "modelisation",
      title: "Modélisation Prédictive",
      icon: Brain,
      description: "Développement de modèles pour anticiper les tendances économiques",
      details: [
        "Modèles de prévision des taux d'intérêt",
        "Analyse prédictive des risques systémiques",
        "Validation statistique des modèles",
        "Documentation technique complète",
      ],
      color: "from-green-400 to-emerald-500",
    },
    {
      id: "referentiels",
      title: "Gestion des Référentiels",
      icon: Database,
      description: "Maintenance et amélioration des bases de données de référence",
      details: [
        "Mise à jour des référentiels européens",
        "Contrôle qualité des données",
        "Optimisation des processus de collecte",
        "Coordination avec les équipes techniques",
      ],
      color: "from-orange-400 to-red-500",
    },
  ]

  // Compétences développées
  const competences = [
    {
      categorie: "Techniques",
      skills: ["Python avancé", "SQL complexe", "Power BI", "Tableau", "R", "Machine Learning", "Statistiques"],
      color: "from-cyan-400 to-blue-500",
    },
    {
      categorie: "Métier",
      skills: ["Finance", "Économie", "Réglementation bancaire", "Risques", "Conformité", "Audit"],
      color: "from-purple-400 to-pink-500",
    },
    {
      categorie: "Transversales",
      skills: ["Gestion de projet", "Communication", "Présentation", "Travail en équipe", "Autonomie", "Rigueur"],
      color: "from-green-400 to-emerald-500",
    },
  ]

  // Réalisations et impacts
  const realisations = [
    {
      titre: "Automatisation des Rapports",
      description: "Réduction de 70% du temps de génération des rapports hebdomadaires",
      impact: "Gain de 15h/semaine pour l'équipe",
      icon: Rocket,
    },
    {
      titre: "Nouveau Dashboard Stratégique",
      description: "Création d'un tableau de bord utilisé par la direction générale",
      impact: "Amélioration de la prise de décision",
      icon: Trophy,
    },
    {
      titre: "Modèle Prédictif Innovant",
      description: "Développement d'un modèle de prévision avec 85% de précision",
      impact: "Adoption par 3 autres divisions",
      icon: Target,
    },
    {
      titre: "Formation des Équipes",
      description: "Formation de 25 collaborateurs aux nouveaux outils",
      impact: "Montée en compétences collective",
      icon: Lightbulb,
    },
  ]

  // Témoignage du maître de stage
  const testimonial = {
    text: "Marie a fait preuve d'une remarquable capacité d'adaptation et d'une rigueur exemplaire. Ses analyses ont apporté une valeur ajoutée significative à nos travaux. Son approche méthodique et sa créativité dans la résolution de problèmes complexes en font une collaboratrice précieuse.",
    author: "Dr. Jean Dupont",
    position: "Chef de Division - Direction des Statistiques Monétaires",
    company: "Banque de France",
  }

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

    setTimeout(() => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.observe(el)
      })
    }, 100)

    return () => observer.disconnect()
  }, [])

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  return (
    <div className="min-h-screen px-8 pb-20">
      {/* Header */}
      <header className="relative z-30 mb-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Button
            onClick={onNavigateHome}
            variant="outline"
            className="border-blue-400/30 text-blue-300 hover:bg-blue-500/20 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au portfolio
          </Button>

          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-2">
              <Building2 className="inline w-10 h-10 mr-3 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Stage à la Banque de France
              </span>
            </h1>
            <p className="text-white/70">5 mois au cœur de l'institution monétaire française</p>
          </div>

          <Badge className="bg-blue-500/20 text-blue-300 border border-blue-400/30 text-lg px-4 py-2">
            <Calendar className="w-4 h-4 mr-2" />
            {stageInfo.statut}
          </Badge>
        </div>
      </header>

      {/* Informations générales */}
      <section className="relative z-20 mb-12">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-xl border border-blue-400/30 shadow-2xl animate-on-scroll">
            <CardContent className="p-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-blue-400 mb-6">Informations Générales</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Building2 className="w-5 h-5 text-blue-400 mr-3" />
                      <div>
                        <p className="font-semibold text-white">{stageInfo.entreprise}</p>
                        <p className="text-white/70 text-sm">{stageInfo.direction}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-blue-400 mr-3" />
                      <div>
                        <p className="font-semibold text-white">{stageInfo.poste}</p>
                        <p className="text-white/70 text-sm">{stageInfo.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-blue-400 mr-3" />
                      <div>
                        <p className="font-semibold text-white">{stageInfo.periode}</p>
                        <p className="text-white/70 text-sm">{stageInfo.duree}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                      <p className="font-semibold text-white">{stageInfo.lieu}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-blue-400 mb-6">Contexte</h2>
                  <p className="text-white/80 leading-relaxed mb-6">
                    La Banque de France, institution centrale du système monétaire français, joue un rôle crucial dans
                    la stabilité financière européenne. Au sein de la Direction des Statistiques Monétaires et
                    Financières, j'ai eu l'opportunité de contribuer à des projets stratégiques d'envergure nationale.
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" className="border-blue-400/30 text-blue-300 hover:bg-blue-500/20">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Site officiel
                    </Button>
                    <Button variant="outline" className="border-purple-400/30 text-purple-300 hover:bg-purple-500/20">
                      <Download className="w-4 h-4 mr-2" />
                      Rapport de stage
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Missions détaillées */}
      <section className="relative z-20 mb-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-on-scroll">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Missions & Responsabilités
            </span>
          </h2>

          <div className="space-y-6">
            {missions.map((mission, index) => (
              <Card
                key={mission.id}
                className="group bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${mission.color} rounded-full flex items-center justify-center shadow-xl`}
                      >
                        <mission.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{mission.title}</h3>
                        <p className="text-white/70">{mission.description}</p>
                      </div>
                    </div>

                    <Button
                      onClick={() => toggleSection(mission.id)}
                      variant="outline"
                      className="border-white/20 text-white/70 hover:bg-white/10"
                    >
                      {expandedSection === mission.id ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-2" />
                          Réduire
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 mr-2" />
                          Détails
                        </>
                      )}
                    </Button>
                  </div>

                  {expandedSection === mission.id && (
                    <div className="mt-6 border-t border-white/10 pt-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Activités Détaillées</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {mission.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="flex items-start bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                          >
                            <Star className="w-4 h-4 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                            <p className="text-white/80">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences développées */}
      <section className="relative z-20 mb-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-on-scroll">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Compétences Développées
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {competences.map((comp, index) => (
              <Card
                key={comp.categorie}
                className="group bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${comp.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                  >
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">{comp.categorie}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {comp.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className={`bg-gradient-to-r ${comp.color} text-white border-0 shadow-lg`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="relative z-20 mb-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-on-scroll">
            <Trophy className="inline w-8 h-8 mr-3 text-yellow-400" />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Réalisations & Impact
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {realisations.map((real, index) => (
              <Card
                key={index}
                className="group bg-gradient-to-br from-yellow-900/20 to-orange-900/20 backdrop-blur-xl border border-yellow-400/30 shadow-2xl hover:shadow-3xl hover:shadow-yellow-500/25 transition-all duration-500 hover:scale-105 animate-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                      <real.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{real.titre}</h3>
                      <p className="text-white/80 mb-3">{real.description}</p>
                      <Badge className="bg-green-500/20 text-green-300 border border-green-400/30">{real.impact}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="relative z-20 mb-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-xl border border-indigo-400/30 shadow-2xl animate-on-scroll">
            <CardContent className="p-12 text-center">
              <Quote className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
              <blockquote className="text-xl text-white/90 leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </blockquote>
              <div className="border-t border-white/10 pt-6">
                <p className="font-bold text-white text-lg">{testimonial.author}</p>
                <p className="text-indigo-300 mb-1">{testimonial.position}</p>
                <p className="text-white/70">{testimonial.company}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA de retour */}
      <section className="relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-xl border border-blue-400/30 shadow-2xl animate-on-scroll">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                <Building2 className="inline w-8 h-8 mr-3 text-blue-400" />
                Une Expérience Transformatrice
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Ce stage à la Banque de France a été bien plus qu'une simple expérience professionnelle. Il a confirmé
                ma passion pour la data science appliquée aux enjeux économiques et financiers, tout en me donnant les
                clés pour devenir une data analyst accomplie.
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  onClick={onNavigateHome}
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  <ArrowLeft className="w-5 h-5 mr-3" />
                  Retour au portfolio
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-400/30 text-purple-300 hover:bg-purple-500/20 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 mr-3" />
                  Voir la présentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <style jsx>{`
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
