"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Home,
  Award,
  Users,
  Calendar,
  Lightbulb,
  Zap,
  Star,
  CheckCircle,
  Clock,
  Brain,
  Heart,
  Play,
} from "lucide-react"
import Link from "next/link"

export default function ProjetsDetailPage() {
  const [activeProject, setActiveProject] = useState("S103")
  const [currentSlide, setCurrentSlide] = useState<{ [key: string]: number }>({})

  // Données complètes et détaillées des projets avec le nouveau contenu
  const detailedProjects = {
    S103: {
      title: "S103 – Dashboard Excel",
      subtitle: "Quand Excel devient un outil de Business Intelligence",
      emoji: "📊",
      year: "2023",
      duration: "3 mois",
      team: "Projet individuel",
      color: "from-pink-400 to-rose-500",

      context: {
        title: "🎯 Le Défi",
        description:
          "Transformer un fichier Excel brut contenant les données anonymisées de tous les étudiants de l'IUT en un tableau de bord dynamique, interactif et professionnel, afin d'aider le service communication à mieux comprendre le profil des étudiants.",
      },

      approach: {
        title: "💡 Mon Approche",
        description:
          "J'ai conçu un outil d'analyse complet à partir de 500 lignes de données disparates, en m'imposant une contrainte : utiliser uniquement Excel.",
      },

      methodology: {
        title: "🛠️ Méthodologie",
        steps: [
          "Phase 1 : Nettoyage via Power Query, mapping des types de bac",
          "Phase 2 : Modélisation via Power Pivot, création de TCD",
          "Phase 3 : Visualisation (6 tableaux thématiques, navigation fluide)",
        ],
      },

      gallery: [
        {
          title: "Interface avec KPIs, filtres dynamiques",
          description: "Pages : sexe par département, bac techno/général, boursiers, mentions",
          image: "/images/projets/s103-dashboard.png",
        },
      ],

      achievements: ["15 requêtes Power Query interconnectées", "UI intuitive, segments, navigation fluide"],

      skills: {
        technical: ["Excel", "PowerQuery", "PowerPivot"],
        soft: ["rigueur", "esprit de synthèse", "communication visuelle"],
        business: ["reporting stratégique", "analyse de population"],
      },

      critique:
        "Ce projet m'a permis de repousser les limites d'Excel et de découvrir la puissance de Power Query et DAX. Il a renforcé mes compétences en structuration de l'information et en datavisualisation. Pour aller plus loin, j'aimerais interconnecter Excel avec une base de données externe (Access, SQL) pour industrialiser davantage l'actualisation.",
    },

    S201: {
      title: "SAÉ 2.01 – Base de Données Festival",
      subtitle: "Quand la modélisation relationnelle devient un outil de valorisation culturelle",
      emoji: "📂",
      year: "2024",
      duration: "2 mois",
      team: "Projet en trinôme",
      color: "from-purple-400 to-pink-500",

      context: {
        title: "🎯 Le Défi",
        description:
          "Créer une base de données PostgreSQL relationnelle à partir des données réelles sur les festivals français, normalisée jusqu'à la BCNF.",
      },

      approach: {
        title: "💡 Mon Approche",
        description:
          "J'ai pris en charge toute la phase technique : script de création des tables, peuplement automatisé, et structure relationnelle robuste.",
      },

      methodology: {
        title: "🛠️ Méthodologie",
        steps: [
          "Phase 1 : Modèle E-A, formes normales",
          "Phase 2 : Script SQL (création de 20 tables, peuplement automatisé)",
          "Phase 3 : Requêtes SQL métier et visualisations",
        ],
      },

      gallery: [
        {
          title: "Modèle E-A",
          description: "Architecture relationnelle complète",
          image: "/images/projets/s201-modele.png",
        },
        {
          title: "Script SQL avec commentaires",
          description: "Code structuré et documenté",
          image: "/images/projets/s201-script.png",
        },
        {
          title: "Graphiques (TOP 5 communes, catégories dominantes)",
          description: "Visualisations Power BI",
          image: "/images/projets/s201-graphs.png",
        },
      ],

      achievements: [
        "Script SQL robuste et commenté",
        "Peuplement automatisé avec Excel",
        "Analyses croisées et storytelling via Metabase",
      ],

      skills: {
        technical: ["PostgreSQL", "modélisation relationnelle", "requêtes SQL"],
        soft: ["coordination", "documentation", "fiabilité"],
        business: ["requêtage métier", "structuration de données culturelles"],
      },

      critique:
        "Ce projet a été fondateur dans ma compréhension des bases relationnelles. J'ai appris à structurer efficacement les données et à automatiser leur traitement. Pour progresser, j'aimerais enrichir mes requêtes SQL avec des fonctions plus complexes (fenêtrage, CTE) et améliorer l'interface utilisateur via une application web connectée à la base.",
    },

    S206: {
      title: "SAÉ 2.06 – Analyse de Données et Implantation Stratégique",
      subtitle: "Utiliser les données pour guider les décisions stratégiques",
      emoji: "📊",
      year: "2023",
      duration: "3 mois",
      team: "Projet en équipe de 6",
      color: "from-rose-400 to-pink-500",

      context: {
        title: "🎯 Le Défi",
        description:
          "Identifier la meilleure région pour implanter une entreprise de rapatriement de corps à partir de données INSEE.",
      },

      approach: {
        title: "💡 Notre Approche",
        description:
          "Nous avons croisé des données géographiques, socio-économiques et démographiques pour appuyer notre préconisation (Auvergne-Rhône-Alpes).",
      },

      methodology: {
        title: "🛠️ Méthodologie",
        steps: [
          "Traitement Python (CSV, dictionnaires)",
          "Analyse ciblée (mortalité, CSP, populations)",
          "Visualisation vidéo via Canva",
        ],
      },

      gallery: [
        {
          title: "Comparaison entre régions",
          description: "Analyses comparatives détaillées",
          image: "/images/projets/s206-comparison.png",
        },
        {
          title: "Capsule vidéo pour cliente fictive (Funecap)",
          description: "Présentation professionnelle en vidéo",
          video: "/videos/funecap-presentation.mp4",
          isVideo: true,
        },
      ],

      achievements: [
        "Scripts Python réutilisables",
        "Argumentation fondée sur plusieurs indicateurs",
        "Visualisation pédagogique",
      ],

      skills: {
        technical: ["Python", "analyse comparative"],
        soft: ["esprit critique", "travail en équipe"],
        business: ["ciblage stratégique", "restitution client"],
      },

      critique:
        "Ce projet m'a montré à quel point une visualisation claire peut appuyer une décision stratégique. J'ai aussi progressé en automatisation avec Python. Je souhaite approfondir les outils de datavisualisation (Plotly, Streamlit) pour des rendus encore plus professionnels.",
    },

    S301: {
      title: "S301 – Enquête Alimentaire",
      subtitle: "Comprendre les habitudes alimentaires via l'analyse d'un échantillon",
      emoji: "🥗",
      year: "2024",
      duration: "3 mois",
      team: "Projet en équipe de 4",
      color: "from-green-400 to-emerald-500",

      context: {
        title: "🎯 Le Défi",
        description:
          "Analyser les habitudes alimentaires d'étudiants à partir de données collectées via échantillonnage des élèves de première années du but sd.",
      },

      approach: {
        title: "💡 Notre Approche",
        description:
          "Réalisation d'un nettoyage rigoureux des données, choix des méthodes d'échantillonnage, et reporting via R Markdown.",
      },

      methodology: {
        title: "🛠️ Méthodologie",
        steps: [
          "Nettoyage et structuration sous Excel",
          "Analyse avec R : représentativité, moyenne, écart-type",
          "Visualisations claires pour un public non spécialiste",
        ],
      },

      gallery: [
        {
          title: "Résultats par groupe",
          description: "Analyses statistiques détaillées",
          image: "/images/projets/s301-resultats.png",
        },
        {
          title: "Comparaison entre profils",
          description: "Visualisations comparatives",
          image: "/images/projets/s301-profils.png",
        },
      ],

      achievements: [
        "Rapport dynamique en R Markdown",
        "Méthodologie d'échantillonnage solide",
        "Analyse statistique détaillée",
      ],

      skills: {
        technical: ["R", "statistiques inférentielles", "échantillonnage"],
        soft: ["synthèse", "vulgarisation", "rigueur méthodologique"],
        business: ["étude de comportements", "interprétation fiable"],
      },

      critique:
        "Ce projet m'a aidée à mieux comprendre les méthodes d'échantillonnage et à développer une rigueur scientifique. Pour aller plus loin, j'aimerais intégrer des tests statistiques plus poussés (chi², ANOVA) et créer un dashboard automatisé.",
    },

    S303: {
      title: "S303 – Analyse de Séries Chronologiques",
      subtitle: "Prévoir les tendances à partir de séries temporelles",
      emoji: "📈",
      year: "2024",
      duration: "3 mois",
      team: "Projet en binôme",
      color: "from-indigo-400 to-purple-500",

      context: {
        title: "🎯 Le Défi",
        description:
          "Étudier une série temporelle (INSEE), détecter une saisonnalité, et effectuer des prévisions via moindres carrés, lissage exponentiel et ARIMA.",
      },

      approach: {
        title: "💡 Mon Approche",
        description:
          "Analyse manuelle sous Excel et modélisation sous Python. J'ai comparé les performances de deux modèles ARIMA.",
      },

      methodology: {
        title: "🛠️ Méthodologie",
        steps: ["Justification de la saisonnalité", "Décomposition CVS", "Prévision par 3 approches différentes"],
      },

      gallery: [
        {
          title: "Tracés ARIMA(1,1,1) vs ARIMA(1,1,2)",
          description: "Comparaison des modèles prédictifs",
          image: "/images/projets/s303-arima.png",
        },
        {
          title: "Graphiques de lissage",
          description: "Techniques de lissage exponentiel",
          image: "/images/projets/s303-lissage.png",
        },
      ],

      achievements: ["Analyse multitechnique", "Adaptation de scripts Python avancés", "Visualisation comparative"],

      skills: {
        technical: ["séries temporelles", "Excel", "Python", "ARIMA"],
        soft: ["autonomie", "rigueur", "analyse critique"],
        business: ["prévision fiable", "choix de méthode"],
      },

      critique:
        "Ce projet m'a permis de consolider mes connaissances en séries chronologiques. J'ai pris goût à la modélisation prédictive. Je souhaite maintenant apprendre à évaluer la robustesse des modèles via validation croisée et intégration de nouvelles variables explicatives.",
    },

    SHINY: {
      title: "Application Shiny – Visualisation Interactive",
      subtitle: "Créer une interface claire pour comprendre des données complexes",
      emoji: "⚡",
      year: "2025",
      duration: "1 mois",
      team: "Projet en trinôme",
      grade: "20/20",
      color: "from-cyan-400 to-blue-500",

      context: {
        title: "🎯 Le Défi",
        description:
          "Développer une application en R Shiny pour explorer dynamiquement des données de consommation énergétique.",
      },

      approach: {
        title: "💡 Mon Approche",
        description:
          "J'ai conçu une interface épurée avec des filtres, des graphiques dynamiques, et une carte interactive (Leaflet) pour croiser les informations.",
      },

      methodology: {
        title: "🛠️ Méthodologie",
        steps: ["Nettoyage sous R (Tidyverse)", "Développement Shiny + UI/UX", "Tests utilisateurs et itérations"],
      },

      gallery: [
        {
          title: "Page principale (KPIs, filtres, graphique)",
          description: "Interface utilisateur complète",
          image: "/images/projets/shiny-main.png",
        },
        {
          title: "Cartographie dynamique",
          description: "Carte interactive avec Leaflet",
          image: "/images/projets/shiny-map.png",
        },
      ],

      achievements: ["Interface ergonomique", "Cartographie avec Leaflet", "Analyse interactive de consommation"],

      skills: {
        technical: ["R Shiny", "Leaflet", "Tidyverse"],
        soft: ["écoute", "amélioration continue"],
        business: ["visualisation d'indicateurs énergétiques"],
      },

      critique:
        "Ce projet m'a permis de professionnaliser mon approche du développement web en R. J'ai pris conscience de l'importance du design dans l'analyse de données. Mon prochain objectif est d'intégrer une authentification et une connexion à une base PostgreSQL distante.",
    },
  }

  const changeSlide = (projectKey: string, direction: number) => {
    const project = detailedProjects[projectKey as keyof typeof detailedProjects]
    if (!project) return

    const currentIndex = currentSlide[projectKey] || 0
    const newIndex = (currentIndex + direction + project.gallery.length) % project.gallery.length

    setCurrentSlide((prev) => ({
      ...prev,
      [projectKey]: newIndex,
    }))
  }

  const getCurrentSlide = (projectKey: string) => {
    const project = detailedProjects[projectKey as keyof typeof detailedProjects]
    if (!project) return { title: "", description: "", image: "", video: "", isVideo: false }

    const currentIndex = currentSlide[projectKey] || 0
    return project.gallery[currentIndex]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 relative overflow-hidden">
      {/* Particules flottantes */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <Heart
              className="text-pink-300 opacity-30"
              size={Math.random() * 15 + 8}
              style={{
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-12">
          <Link href="/">
            <Button variant="outline" className="mb-8 border-pink-300 text-pink-600 hover:bg-pink-50 shadow-lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6">
              <GraduationCap className="inline w-12 h-12 mr-4 text-pink-500" />
              Mes Projets Académiques Détaillés
            </h1>

            {/* Explication des SAÉ */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-pink-200">
                <h2 className="text-2xl font-bold text-pink-600 mb-4">🎓 Qu'est-ce qu'une SAÉ ?</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Les <strong>SAÉ (Situations d'Apprentissage et d'Évaluation)</strong> sont des projets concrets qui
                  constituent le cœur de la formation BUT. Contrairement aux cours magistraux traditionnels, les SAÉ
                  nous plongent dans des situations professionnelles réelles.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl">
                    <div className="text-3xl mb-2">🎯</div>
                    <h3 className="font-bold text-pink-600 mb-2">Apprentissage par projet</h3>
                    <p className="text-sm text-gray-600">Résoudre des problèmes concrets avec de vraies données</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                    <div className="text-3xl mb-2">🤝</div>
                    <h3 className="font-bold text-purple-600 mb-2">Travail collaboratif</h3>
                    <p className="text-sm text-gray-600">Développer l'esprit d'équipe et la communication</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-rose-50 to-purple-50 rounded-xl">
                    <div className="text-3xl mb-2">🚀</div>
                    <h3 className="font-bold text-rose-600 mb-2">Compétences métier</h3>
                    <p className="text-sm text-gray-600">Acquérir l'expertise d'un data scientist</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
              Découvrez comment chaque SAÉ m'a permis de développer mes compétences en data science, de la collecte de
              données à la restitution client, en passant par l'analyse et la visualisation ! 📊✨
            </p>
          </div>
        </div>

        {/* Navigation des projets */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(detailedProjects).map(([key, project]) => (
              <Button
                key={key}
                onClick={() => setActiveProject(key)}
                variant={activeProject === key ? "default" : "outline"}
                className={`${
                  activeProject === key
                    ? `bg-gradient-to-r ${project.color} text-white border-0 shadow-lg`
                    : "border-pink-300 text-pink-600 hover:bg-pink-50"
                } px-6 py-3 font-semibold transition-all duration-300 hover:scale-105`}
              >
                <span className="text-2xl mr-2">{project.emoji}</span>
                {project.title.split(" – ")[0]}
              </Button>
            ))}
          </div>
        </div>

        {/* Contenu du projet actif */}
        {(() => {
          const project = detailedProjects[activeProject as keyof typeof detailedProjects]
          if (!project) return null

          return (
            <div className="max-w-7xl mx-auto space-y-16">
              {/* En-tête du projet */}
              <Card className="bg-white/90 backdrop-blur-lg border-pink-200 shadow-2xl overflow-hidden">
                <CardContent className="p-12">
                  <div className="text-center mb-8">
                    <div className="text-8xl mb-6">{project.emoji}</div>
                    <h2 className="text-4xl font-bold text-pink-600 mb-4">{project.title}</h2>
                    <p className="text-xl text-gray-600 italic mb-8">{project.subtitle}</p>

                    <div className="flex justify-center gap-8 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-pink-500 mr-2" />
                        <span className="font-semibold">{project.year}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-pink-500 mr-2" />
                        <span className="font-semibold">{project.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-pink-500 mr-2" />
                        <span className="font-semibold">{project.team}</span>
                      </div>
                      {project.grade && (
                        <div className="flex items-center">
                          <Award className="w-4 h-4 text-pink-500 mr-2" />
                          <span className="font-semibold">{project.grade}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contexte et approche */}
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-white/90 backdrop-blur-lg border-pink-200 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-pink-600 mb-6">{project.context.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{project.context.description}</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-lg border-pink-200 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-purple-600 mb-6">{project.approach.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{project.approach.description}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Méthodologie */}
              <Card className="bg-white/90 backdrop-blur-lg border-pink-200 shadow-xl">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold text-pink-600 mb-8">{project.methodology.title}</h3>
                  <div className="space-y-4">
                    {project.methodology.steps.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0 mt-1">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Galerie */}
              <Card className="bg-white/90 backdrop-blur-lg border-pink-200 shadow-xl">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold text-pink-600 mb-8 flex items-center">
                    <Star className="w-8 h-8 mr-3" />📷 Galerie du Projet
                  </h3>

                  <div className="relative">
                    <div className="bg-gray-100 rounded-xl p-8 text-center">
                      {getCurrentSlide(activeProject).isVideo ? (
                        <div className="w-full h-96 bg-gradient-to-br from-red-100 to-pink-100 rounded-lg flex items-center justify-center mb-6 border-2 border-red-200">
                          <div className="text-center">
                            <div className="text-6xl mb-4">🎬</div>
                            <h4 className="text-2xl font-bold text-red-700 mb-2">
                              {getCurrentSlide(activeProject).title}
                            </h4>
                            <p className="text-red-600 mb-4">{getCurrentSlide(activeProject).description}</p>
                            <Button className="bg-red-500 hover:bg-red-600 text-white">
                              <Play className="w-4 h-4 mr-2" />
                              Voir la vidéo
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-96 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center mb-6">
                          <div className="text-center">
                            <div className="text-6xl mb-4">{project.emoji}</div>
                            <h4 className="text-2xl font-bold text-gray-700 mb-2">
                              {getCurrentSlide(activeProject).title || "Aperçu du Projet"}
                            </h4>
                            <p className="text-gray-600">
                              {getCurrentSlide(activeProject).description ||
                                "Visualisations et captures d'écran du projet"}
                            </p>
                          </div>
                        </div>
                      )}

                      {project.gallery.length > 1 && (
                        <div className="flex justify-center gap-4">
                          <Button
                            onClick={() => changeSlide(activeProject, -1)}
                            variant="outline"
                            size="sm"
                            className="border-pink-300 text-pink-600 hover:bg-pink-50"
                          >
                            <ChevronLeft className="w-4 h-4 mr-1" />
                            Précédent
                          </Button>
                          <Button
                            onClick={() => changeSlide(activeProject, 1)}
                            variant="outline"
                            size="sm"
                            className="border-pink-300 text-pink-600 hover:bg-pink-50"
                          >
                            Suivant
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Prouesses et compétences */}
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-white/90 backdrop-blur-lg border-pink-200 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
                      <Zap className="w-6 h-6 mr-2" />🧠 Prouesses
                    </h3>
                    <ul className="space-y-3">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-lg border-pink-200 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                      <Brain className="w-6 h-6 mr-2" />🧩 Compétences Développées
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Techniques :</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.technical.map((skill) => (
                            <Badge key={skill} variant="outline" className="border-blue-300 text-blue-600">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Soft Skills :</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.soft.map((skill) => (
                            <Badge key={skill} variant="outline" className="border-pink-300 text-pink-600">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Business :</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.business.map((skill) => (
                            <Badge key={skill} variant="outline" className="border-purple-300 text-purple-600">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Avis critique */}
              <Card className="bg-white/90 backdrop-blur-lg border-pink-200 shadow-xl">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold text-pink-600 mb-8 flex items-center">
                    <Lightbulb className="w-8 h-8 mr-3" />🎯 Mon Avis Critique
                  </h3>
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl border-l-4 border-pink-400">
                    <p className="text-gray-700 leading-relaxed text-lg italic">{project.critique}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        })()}

        {/* Bouton retour */}
        <div className="text-center mt-16">
          <Link href="/">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold">
              <Home className="w-5 h-5 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
