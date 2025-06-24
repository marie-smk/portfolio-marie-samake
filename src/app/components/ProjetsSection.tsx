"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  GraduationCap,
  Star,
  Trophy,
  Calendar,
  Users,
  Target,
  ChevronDown,
  ChevronUp,
  Github,
  Play,
  Download,
} from "lucide-react"

interface ProjetsSectionProps {
  onNavigateHome: () => void
}

export default function ProjetsSection({ onNavigateHome }: ProjetsSectionProps) {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  // Données complètes des projets SAÉ
  const saeProjects = [
    {
      id: "S103",
      title: "Dashboard Excel Interactif",
      emoji: "📊",
      description: "Analyse des candidatures universitaires avec tableaux de bord dynamiques",
      longDescription:
        "Création d'un tableau de bord interactif sous Excel pour analyser les candidatures à l'Université Sorbonne Paris Nord. Analyse des types de bacs par formation, répartition par genre et département, avec menu de navigation intuitif.",
      color: "from-pink-400 to-rose-500",
      year: "2023",
      semester: "Semestre 1",
      duration: "4 semaines",
      team: "Individuel",
      grade: "18/20",
      skills: ["Excel avancé", "VBA", "Analyse de données", "Visualisation", "Tableaux croisés dynamiques"],
      objectives: [
        "Maîtriser les fonctionnalités avancées d'Excel",
        "Créer des visualisations pertinentes",
        "Automatiser les processus avec VBA",
        "Analyser les données d'admission universitaire",
      ],
      deliverables: ["Dashboard interactif", "Menu de navigation", "Graphiques dynamiques", "Documentation technique"],
      challenges: [
        "Gestion de gros volumes de données de candidatures",
        "Optimisation des performances Excel",
        "Interface utilisateur intuitive",
      ],
      achievements: [
        "Dashboard 100% fonctionnel avec menu interactif",
        "Analyse complète des candidatures par formation",
        "Visualisations claires pour l'aide à la décision",
      ],
      images: ["/images/excel_1.png", "/images/menu_excel.png", "/images/excel_2.png"],
    },
    {
      id: "S201",
      title: "Base de Données Festival",
      emoji: "🎭",
      description: "Conception et implémentation d'une base de données relationnelle pour festivals",
      longDescription:
        "Projet de conception d'une base de données relationnelle complète pour la gestion des festivals culturels en France. Modélisation entité-relation, implémentation SQL et création de visualisations pour l'analyse des données.",
      color: "from-purple-400 to-indigo-500",
      year: "2024",
      semester: "Semestre 2",
      duration: "6 semaines",
      team: "Équipe de 3",
      grade: "17/20",
      skills: ["SQL", "Modélisation de données", "PostgreSQL", "Conception de schémas", "Analyse statistique"],
      objectives: [
        "Maîtriser la modélisation relationnelle",
        "Implémenter une base de données complexe",
        "Optimiser les requêtes SQL",
        "Analyser les données culturelles",
      ],
      deliverables: ["Schéma de base de données", "Scripts SQL", "Visualisations", "Rapport d'analyse"],
      challenges: [
        "Normalisation des données festivals",
        "Gestion des contraintes d'intégrité",
        "Optimisation des performances",
      ],
      achievements: [
        "Base de données 100% fonctionnelle",
        "Analyse complète des festivals par catégorie",
        "Visualisations pertinentes pour les décideurs culturels",
      ],
      images: ["/images/images-s201.png", "/images/festival-categories.png", "/images/festival-donut.png"],
    },
    {
      id: "S206",
      title: "Analyse de Données et Implantation Stratégique",
      emoji: "🎯",
      description: "Étude de marché avec capsule vidéo professionnelle",
      longDescription:
        "Étude complète d'implantation stratégique incluant analyse de marché, étude de faisabilité et création d'une capsule vidéo de présentation professionnelle. Projet réalisé en collaboration avec des entreprises partenaires.",
      color: "from-rose-400 to-pink-500",
      year: "2024",
      semester: "Semestre 2",
      duration: "8 semaines",
      team: "Équipe de 4",
      grade: "19/20",
      skills: ["Étude de marché", "Analyse concurrentielle", "Communication", "Montage vidéo", "Stratégie business"],
      objectives: [
        "Analyser un marché spécialisé",
        "Identifier les opportunités d'implantation",
        "Créer du contenu multimédia professionnel",
        "Présenter des recommandations stratégiques",
      ],
      deliverables: [
        "Rapport d'étude (60 pages)",
        "Capsule vidéo professionnelle",
        "Présentation PowerPoint",
        "Recommandations stratégiques",
      ],
      challenges: [
        "Accès aux données du secteur",
        "Coordination d'équipe complexe",
        "Qualité professionnelle de la vidéo",
      ],
      achievements: [
        "Étude saluée par les professionnels du secteur",
        "Vidéo primée au concours étudiant",
        "Recommandations adoptées par l'entreprise partenaire",
      ],
      videoUrl: "https://www.youtube.com/watch?v=VFdaT4UG7pw&feature=youtu.be",
    },
    {
      id: "SHINY",
      title: "Application Shiny Interactive",
      emoji: "⚡",
      description: "Interface web pour l'analyse de données énergétiques avec cartographie",
      longDescription:
        "Développement d'une application web interactive avec R Shiny pour analyser et visualiser les données de consommation énergétique en France. Interface utilisateur moderne avec cartes interactives, filtres dynamiques et tableaux de bord.",
      color: "from-cyan-400 to-blue-500",
      year: "2025",
      semester: "Semestre 3",
      duration: "10 semaines",
      team: "Binôme",
      grade: "20/20",
      skills: ["R", "Shiny", "Développement web", "Cartographie", "Leaflet", "Analyse énergétique"],
      objectives: [
        "Maîtriser le framework Shiny",
        "Créer une interface cartographique interactive",
        "Implémenter des analyses énergétiques avancées",
        "Déployer une application web professionnelle",
      ],
      deliverables: [
        "Application Shiny déployée",
        "Interface cartographique",
        "Filtres interactifs",
        "Documentation utilisateur",
      ],
      challenges: [
        "Optimisation des performances cartographiques",
        "Gestion de gros datasets énergétiques",
        "Interface responsive",
      ],
      achievements: [
        "Note parfaite 20/20",
        "Application utilisée par des professionnels du secteur",
        "Interface cartographique innovante",
      ],
      images: ["/images/shiny-app.png"],
    },
    {
      id: "S301",
      title: "Enquête Alimentaire",
      emoji: "🍎",
      description: "Analyse des habitudes alimentaires via échantillonnage rigoureux",
      longDescription:
        "Analyse complète des habitudes alimentaires d'étudiants de première année BUT SD à partir de données collectées via échantillonnage. Nettoyage rigoureux des données, choix méthodologique d'échantillonnage, et reporting dynamique via R Markdown.",
      color: "from-green-400 to-emerald-500",
      year: "2024",
      semester: "Semestre 3",
      duration: "3 mois",
      team: "Équipe de 4",
      grade: "18/20",
      skills: ["R", "Statistiques inférentielles", "Échantillonnage", "R Markdown", "Excel"],
      objectives: [
        "Maîtriser les méthodes d'échantillonnage",
        "Développer une rigueur scientifique",
        "Analyser des comportements alimentaires",
        "Créer un rapport dynamique",
      ],
      deliverables: [
        "Rapport dynamique R Markdown",
        "Méthodologie d'échantillonnage",
        "Analyse statistique détaillée",
        "Visualisations claires",
      ],
      challenges: [
        "Représentativité de l'échantillon",
        "Nettoyage de données complexes",
        "Vulgarisation pour public non spécialiste",
      ],
      achievements: [
        "Méthodologie d'échantillonnage solide validée",
        "Rapport dynamique interactif",
        "Insights comportementaux pertinents",
      ],
      images: ["/images/images-s301.png"],
      critique:
        "Ce projet m'a aidée à mieux comprendre les méthodes d'échantillonnage et à développer une rigueur scientifique.",
    },
    {
      id: "S303",
      title: "Analyse de Séries Chronologiques",
      emoji: "📈",
      description: "Prévision de tendances via modélisation temporelle avancée",
      longDescription:
        "Étude approfondie d'une série temporelle INSEE pour détecter la saisonnalité et effectuer des prévisions via moindres carrés, lissage exponentiel et modèles ARIMA. Analyse comparative des performances de différents modèles prédictifs.",
      color: "from-orange-400 to-red-500",
      year: "2024",
      semester: "Semestre 3",
      duration: "3 mois",
      team: "Binôme",
      grade: "19/20",
      skills: ["Séries temporelles", "Python", "ARIMA", "Excel", "Modélisation prédictive"],
      objectives: [
        "Maîtriser l'analyse de séries temporelles",
        "Comparer différents modèles prédictifs",
        "Détecter et traiter la saisonnalité",
        "Évaluer la robustesse des prévisions",
      ],
      deliverables: [
        "Analyse multitechnique",
        "Scripts Python avancés",
        "Visualisations comparatives",
        "Rapport de performance",
      ],
      challenges: ["Choix du modèle optimal", "Traitement de la saisonnalité", "Validation des prévisions"],
      achievements: [
        "Modèles ARIMA performants développés",
        "Analyse comparative rigoureuse",
        "Prévisions fiables validées",
      ],
      images: ["/images/images-s303.png"],
      critique:
        "Ce projet m'a permis de consolider mes connaissances en séries chronologiques. J'ai pris goût à la modélisation prédictive. Je souhaite maintenant apprendre à évaluer la robustesse des modèles via validation croisée.",
    },
  ]

  const stats = {
    totalProjects: saeProjects.length,
    averageGrade: "18.7/20",
    completedProjects: saeProjects.filter((p) => p.grade !== "En cours").length,
    skills: [...new Set(saeProjects.flatMap((p) => p.skills))].length,
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

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <div className="min-h-screen px-8 pb-20">
      {/* Header */}
      <header className="relative z-30 mb-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Button
            onClick={onNavigateHome}
            variant="outline"
            className="border-orange-400/30 text-orange-300 hover:bg-orange-500/20 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au portfolio
          </Button>

          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-2">
              <GraduationCap className="inline w-10 h-10 mr-3 text-orange-400" />
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Mes Projets Académiques
              </span>
            </h1>
            <p className="text-white/70">6 SAÉ, 6 défis relevés avec succès</p>
          </div>

          <div className="text-right">
            <Badge className="bg-yellow-500/20 text-yellow-300 border border-yellow-400/30 text-lg px-4 py-2">
              <Trophy className="w-4 h-4 mr-2" />
              Moyenne: {stats.averageGrade}
            </Badge>
          </div>
        </div>
      </header>

      {/* Statistiques */}
      <section className="relative z-20 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 animate-on-scroll">
            <Card className="bg-black/20 backdrop-blur-xl border border-orange-400/30 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">{stats.totalProjects}</div>
                <p className="text-white/70">Projets Réalisés</p>
              </CardContent>
            </Card>
            <Card className="bg-black/20 backdrop-blur-xl border border-green-400/30 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{stats.completedProjects}</div>
                <p className="text-white/70">Projets Terminés</p>
              </CardContent>
            </Card>
            <Card className="bg-black/20 backdrop-blur-xl border border-purple-400/30 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">{stats.skills}</div>
                <p className="text-white/70">Compétences Acquises</p>
              </CardContent>
            </Card>
            <Card className="bg-black/20 backdrop-blur-xl border border-yellow-400/30 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.averageGrade}</div>
                <p className="text-white/70">Moyenne Générale</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Liste des projets */}
      <section className="relative z-20">
        <div className="max-w-6xl mx-auto space-y-8">
          {saeProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                {/* En-tête du projet */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{project.emoji}</div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <Badge className="bg-white/10 text-white/80 border border-white/20">{project.id}</Badge>
                        {project.grade !== "En cours" && (
                          <Badge className="bg-yellow-500/20 text-yellow-300 border border-yellow-400/30">
                            {project.grade}
                          </Badge>
                        )}
                      </div>
                      <p className="text-white/70 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-blue-400/30 text-blue-300">
                          <Calendar className="w-3 h-3 mr-1" />
                          {project.year}
                        </Badge>
                        <Badge variant="outline" className="border-purple-400/30 text-purple-300">
                          <Users className="w-3 h-3 mr-1" />
                          {project.team}
                        </Badge>
                        <Badge variant="outline" className="border-green-400/30 text-green-300">
                          {project.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => toggleProject(project.id)}
                    variant="outline"
                    className="border-white/20 text-white/70 hover:bg-white/10"
                  >
                    {expandedProject === project.id ? (
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

                {/* Compétences */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className={`bg-gradient-to-r ${project.color} text-white border-0 shadow-lg`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Détails étendus */}
                {expandedProject === project.id && (
                  <div className="mt-8 space-y-8 border-t border-white/10 pt-8">
                    {/* Description longue */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Description Complète</h4>
                      <p className="text-white/80 leading-relaxed">{project.longDescription}</p>
                    </div>

                    {/* Objectifs */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-blue-400" />
                        Objectifs
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {project.objectives.map((objective, objIndex) => (
                          <li key={objIndex} className="flex items-start text-white/80">
                            <Star className="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Livrables et Défis */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-3">Livrables</h4>
                        <ul className="space-y-2">
                          {project.deliverables.map((deliverable, delIndex) => (
                            <li key={delIndex} className="flex items-start text-white/80">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-white mb-3">Défis Relevés</h4>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, chalIndex) => (
                            <li key={chalIndex} className="flex items-start text-white/80">
                              <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Réalisations */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
                        Réalisations
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        {project.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/20 rounded-lg p-4"
                          >
                            <p className="text-white/90 text-sm">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Images du projet */}
                    {project.images && project.images.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-white mb-3">Réalisations Visuelles</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {project.images.map((image, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="bg-white/5 rounded-lg overflow-hidden border border-white/10"
                            >
                              <img
                                src={image || "/placeholder.svg"}
                                alt={`${project.title} - Image ${imgIndex + 1}`}
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Vidéo du projet */}
                    {project.videoUrl && (
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-white mb-3">Présentation Vidéo</h4>
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <a
                            href={project.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-300 hover:text-blue-200 transition-colors"
                          >
                            <Play className="w-5 h-5 mr-2" />
                            Voir la présentation vidéo
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Avis critique personnel */}
                    {project.critique && (
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-white mb-3">Réflexion Personnelle</h4>
                        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-lg p-4">
                          <p className="text-white/90 italic">"{project.critique}"</p>
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-4 pt-4">
                      <Button variant="outline" className="border-purple-400/30 text-purple-300 hover:bg-purple-500/20">
                        <Github className="w-4 h-4 mr-2" />
                        Code Source
                      </Button>
                      <Button variant="outline" className="border-blue-400/30 text-blue-300 hover:bg-blue-500/20">
                        <Play className="w-4 h-4 mr-2" />
                        Démo
                      </Button>
                      <Button variant="outline" className="border-green-400/30 text-green-300 hover:bg-green-500/20">
                        <Download className="w-4 h-4 mr-2" />
                        Rapport
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA de retour */}
      <section className="relative z-20 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-xl border border-orange-400/30 shadow-2xl animate-on-scroll">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                <Trophy className="inline w-8 h-8 mr-3 text-yellow-400" />6 Projets, 6 Succès !
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Chaque SAÉ a été une opportunité d'apprendre, de grandir et de repousser mes limites. Ces projets
                reflètent ma passion pour la data science et ma capacité à transformer les défis en réussites.
              </p>
              <Button
                onClick={onNavigateHome}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <ArrowLeft className="w-5 h-5 mr-3" />
                Retour au portfolio
              </Button>
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
