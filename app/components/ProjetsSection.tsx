"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Database,
  BarChart3,
  Users,
  Brain,
  Target,
  Lightbulb,
  Rocket,
  TrendingUp,
  Award,
  CheckCircle,
  Code,
  PresentationIcon as PresentationChart,
  Calendar,
  Clock,
  Eye,
  ArrowRight,
} from "lucide-react"

interface ProjetsProps {
  onNavigateHome: () => void
}

export default function ProjetsSection({ onNavigateHome }: ProjetsProps) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  // Projets détaillés avec vos retours personnels
  const projetsDetailles = {
    S103: {
      titre: "S103 – Dashboard Excel",
      sousTitre: "Quand Excel devient un outil de Business Intelligence",
      emoji: "📊",
      annee: "2023",
      duree: "3 mois",
      equipe: "Projet individuel",
      color: "from-pink-400 to-rose-500",

      defi: "Transformer un fichier Excel brut contenant les données anonymisées de tous les étudiants de l'IUT en un tableau de bord dynamique, interactif et professionnel, afin d'aider le service communication à mieux comprendre le profil des étudiants.",

      approche:
        "J'ai conçu un outil d'analyse complet à partir de 500 lignes de données disparates, avec une contrainte imposée : utiliser uniquement Excel.",

      methodologie: [
        "Phase 1 : Nettoyage via Power Query, mapping des types de bac",
        "Phase 2 : Modélisation via Power Pivot, création de Tableaux Croisés Dynamiques (TCD)",
        "Phase 3 : Visualisation (6 tableaux thématiques, navigation fluide)",
      ],

      prouesses: [
        "15 requêtes Power Query interconnectées",
        "25 mesures DAX personnalisées",
        "Interface intuitive avec segments et navigation fluide",
      ],

      competencesTech: ["Excel", "Power Query", "DAX", "Power Pivot"],
      softSkills: ["Rigueur", "Esprit de synthèse", "Communication visuelle", "Persévérance"],

      retourPersonnel:
        "Bien que je possédais déjà des bases solides en Excel, la découverte de Power Query constituait un territoire totalement inexploré. Cette SAÉ a sollicité une persévérance et une assiduité considérables, notamment face aux difficultés techniques rencontrées suite à des négligences d'enregistrement qui m'ont contrainte à reprendre intégralement certaines phases du projet. Cette expérience représente l'un de mes premiers projets d'envergure et m'a permis d'acquérir une maîtrise approfondie de fonctionnalités Excel avancées qui demeurent aujourd'hui des outils essentiels de mon arsenal technique.",

      avisCritique:
        "Ce projet m'a permis de repousser les limites d'Excel et de découvrir la puissance de Power Query et DAX. Il a renforcé mes compétences en structuration de l'information et en datavisualisation. Ma persévérance et ma prudence ont été mises à l'épreuve suite à plusieurs recommencements causés par des oublis d'enregistrement. Pour aller plus loin, j'aimerais interconnecter Excel avec une base de données externe (Access, SQL) pour industrialiser davantage l'actualisation.",

      images: ["/images/excel_1.png", "/images/menu_excel.png", "/images/excel_2.png"],
    },

    S201: {
      titre: "SAÉ 2.01 – Base de Données Festival",
      sousTitre: "Quand la modélisation relationnelle devient un outil de valorisation culturelle",
      emoji: "📂",
      annee: "2024",
      duree: "2 mois",
      equipe: "Projet en trinôme",
      color: "from-purple-400 to-pink-500",

      defi: "Créer une base de données PostgreSQL relationnelle à partir des données réelles sur les festivals français, normalisée jusqu'à la BCNF.",

      approche:
        "J'ai pris en charge toute la phase technique : script de création des tables, peuplement automatisé, et structure relationnelle robuste.",

      methodologie: [
        "Phase 1 : Modèle Entité-Association, formes normales",
        "Phase 2 : Script SQL (création de 20 tables, peuplement automatisé)",
        "Phase 3 : Requêtes SQL métier et visualisations",
      ],

      prouesses: [
        "Script SQL robuste et commenté",
        "Peuplement automatisé avec Excel",
        "Analyses croisées et storytelling via Metabase",
      ],

      competencesTech: ["PostgreSQL", "Modélisation relationnelle", "Requêtes SQL", "Excel"],
      softSkills: ["Coordination", "Documentation", "Fiabilité", "Compréhension des bases de données"],

      retourPersonnel:
        "À l'amorce de ce projet, mes connaissances se limitaient aux enseignements théoriques dispensés en cours. Cette immersion dans un environnement technique entièrement nouveau s'est révélée particulièrement enrichissante. La complexité du traitement nécessaire à la création des tables a été surmontée grâce à une collaboration d'équipe efficace et structurée. Cette expérience m'a permis de développer une expertise significative en PostgreSQL, tout en consolidant paradoxalement mes compétences Excel - un atout qui, bien qu'inattendu, s'est avéré déterminant dans la réussite du projet.",

      avisCritique:
        "Ce projet a été fondateur dans ma compréhension des bases de données relationnelles. J'ai appris à structurer efficacement les données et à automatiser leur traitement. Pour progresser, j'aimerais enrichir mes requêtes SQL avec des fonctions plus complexes et améliorer l'interface utilisateur via une application web connectée à la base.",

      images: ["/images/images-s201.png", "/images/festival-categories.png", "/images/festival-donut.png"],
    },

    S206: {
      titre: "SAÉ 2.06 – Analyse de Données et Implantation Stratégique",
      sousTitre: "Utiliser les données pour guider les décisions stratégiques",
      emoji: "📊",
      annee: "2023",
      duree: "3 mois",
      equipe: "Projet en équipe de 6",
      color: "from-rose-400 to-pink-500",

      defi: "Identifier la meilleure région pour implanter une entreprise de rapatriement de corps à partir de données INSEE.",

      approche:
        "Nous avons croisé des données géographiques, socio-économiques et démographiques pour appuyer notre préconisation (Auvergne-Rhône-Alpes).",

      methodologie: [
        "Traitement Python (CSV, dictionnaires)",
        "Analyse ciblée (mortalité, CSP, populations)",
        "Visualisation vidéo via Canva",
      ],

      prouesses: [
        "Scripts Python réutilisables",
        "Argumentation fondée sur plusieurs indicateurs",
        "Visualisation pédagogique",
        "Recherche active de bases de données externes",
      ],

      competencesTech: ["Python", "Analyse statistique", "Canva"],
      softSkills: ["Esprit critique", "Travail en équipe", "Gestion du temps"],

      retourPersonnel:
        "Ce projet, représentant plus de 100 heures de travail intensif, a nécessité une synergie d'équipe exceptionnelle. Entre la correction minutieuse d'erreurs de calculs et la recherche proactive de bases de données externes pour enrichir nos analyses, nous avons dû faire preuve d'une gestion rigoureuse dans un délai contraint. Je suis particulièrement fière de la qualité de notre livrable final et de l'excellence de notre organisation collective, tant dans la répartition des tâches que dans la gestion temporelle du projet.",

      avisCritique:
        "Ce projet m'a montré à quel point une visualisation claire peut appuyer une décision stratégique et à quel point il faut une certaine dextérité pour trouver des données exploitables extérieures en concordance avec celles déjà présentes. J'ai aussi progressé en automatisation avec Python.",

      images: ["/placeholder.svg?height=300&width=500&text=Analyse+Stratégique"],
      videoUrl: "https://youtu.be/VFdaT4UG7pw",
    },

    S301: {
      titre: "S301 – Enquête Alimentaire",
      sousTitre: "Comprendre les habitudes alimentaires via l'analyse d'un échantillon",
      emoji: "🍎",
      annee: "2024",
      duree: "3 mois",
      equipe: "Projet en équipe de 4",
      color: "from-green-400 to-emerald-500",

      defi: "Analyser les habitudes alimentaires d'étudiants à partir de données collectées par les élèves de première année.",

      approche:
        "Réalisation d'un nettoyage rigoureux des données, choix des méthodes d'échantillonnage, et reporting via R Markdown.",

      methodologie: [
        "Nettoyage et structuration sous Excel",
        "Analyse avec R : représentativité, moyenne, écart-type",
        "Visualisations claires pour un public non spécialiste",
        "Recherche des données de la population réelle pour l'échantillonnage",
      ],

      prouesses: [
        "Rapport en R Markdown",
        "Méthodologie d'échantillonnage rigoureuse",
        "Analyse statistique détaillée",
      ],

      competencesTech: ["R", "R Markdown", "Statistiques inférentielles", "Échantillonnage"],
      softSkills: ["Synthèse", "Vulgarisation", "Rigueur méthodologique"],

      retourPersonnel:
        "Ce projet collaboratif nous a menés à conduire une véritable enquête de terrain auprès de l'administration universitaire afin d'obtenir des données complémentaires essentielles à l'affinement de nos calculs. Les compétences mobilisées combinaient les acquis récents et les fondamentaux de première année. La présentation de nos résultats en amphithéâtre a constitué un exercice de communication particulièrement formateur. Bien que globalement satisfaite du résultat, cette expérience m'a enseigné l'importance cruciale d'anticiper les facteurs externes dans la planification temporelle d'un projet, nos analyses dépendant étroitement de données dont l'obtention a nécessité des démarches administratives complexes.",

      avisCritique:
        "Ce projet m'a aidée à mieux comprendre les méthodes d'échantillonnage et à développer une rigueur scientifique. Ce projet m'a appris que plusieurs facteurs extérieurs sont à prendre en compte dans la gestion du temps d'un projet.",

      images: ["/images/images-s301.png"],
    },

    S303: {
      titre: "S303 – Analyse de Séries Chronologiques",
      sousTitre: "Prévoir les tendances à partir de séries temporelles",
      emoji: "📈",
      annee: "2024",
      duree: "3 mois",
      equipe: "Projet en binôme",
      color: "from-blue-400 to-indigo-500",

      defi: "Étudier une série temporelle (INSEE), détecter une saisonnalité, et effectuer des prévisions via moindres carrés, lissage exponentiel et ARIMA.",

      approche:
        "Analyse manuelle sous Excel et modélisation sous Python. J'ai comparé les performances de deux modèles ARIMA.",

      methodologie: [
        "Justification de la saisonnalité",
        "Décomposition CVS (Correction des Variations Saisonnières)",
        "Prévision par 3 approches différentes",
      ],

      prouesses: ["Analyse multitechnique", "Adaptation de scripts Python avancés", "Visualisation comparative"],

      competencesTech: ["Séries temporelles", "Excel", "Python", "ARIMA"],
      softSkills: ["Autonomie", "Rigueur", "Analyse critique"],

      retourPersonnel:
        "Ce projet a introduit des concepts entièrement nouveaux, appuyés sur les connaissances théoriques fraîchement acquises en cours. L'approche pédagogique axée sur la pratique nous a permis de surmonter efficacement les défis techniques et d'assimiler des méthodologies avancées particulièrement stimulantes.",

      avisCritique:
        "Ce projet m'a permis de consolider mes connaissances en séries chronologiques. J'ai pris goût à la modélisation prédictive. Je souhaite maintenant apprendre à évaluer la robustesse des modèles via validation croisée et intégration de nouvelles variables explicatives.",

      images: ["/images/images-s303.png"],
    },

    SHINY: {
      titre: "Application Shiny – Visualisation Interactive",
      sousTitre: "Créer une interface claire pour comprendre des données complexes",
      emoji: "⚡",
      annee: "2025",
      duree: "1 mois",
      equipe: "Projet individuel",
      grade: "20/20",
      color: "from-cyan-400 to-blue-500",

      defi: "Développer une application en R Shiny pour explorer dynamiquement des données de consommation énergétique.",

      approche:
        "J'ai conçu une interface épurée avec des filtres, des graphiques dynamiques, et une carte interactive (Leaflet) pour croiser les informations.",

      methodologie: ["Nettoyage sous R (Tidyverse)", "Développement Shiny + UI/UX", "Tests utilisateurs et itérations"],

      prouesses: ["Interface ergonomique", "Cartographie avec Leaflet", "Analyse interactive de consommation"],

      competencesTech: ["R Shiny", "Leaflet", "Tidyverse"],
      softSkills: ["Écoute", "Amélioration continue"],

      retourPersonnel:
        "Bien que nous disposions de bases solides en R acquises l'année précédente, l'environnement Shiny représentait un défi technique inédit. L'approche pédagogique privilégiant la mise en pratique nous a permis de maîtriser rapidement ces nouvelles compétences et de développer une application fonctionnelle sans difficultés majeures.",

      avisCritique:
        "Ce projet m'a permis de professionnaliser mon approche du développement web en R. J'ai pris conscience de l'importance du design dans l'analyse de données. Mon prochain objectif est d'intégrer une authentification et une connexion à une base PostgreSQL distante.",

      images: ["/images/shiny-app.png"],
    },
  }

  // Projets restructurés par compétences acquises
  const competencesAcquises = [
    {
      id: "data-processing",
      title: "Traitement et Structuration des Données",
      icon: Database,
      color: "from-cyan-400 to-blue-500",
      description: "Maîtrise des outils et techniques pour nettoyer, structurer et préparer les données",
      projets: [
        {
          id: "S103",
          nom: "Dashboard Excel Interactif",
          exemple: "Nettoyage de 500+ lignes de données étudiants via Power Query avec 15 requêtes interconnectées",
          competence: "Power Query, DAX, structuration de données complexes",
          resultat: "Tableau de bord professionnel adopté par le service communication",
          image: "/images/excel_1.png",
        },
        {
          id: "S201",
          nom: "Base de Données Festivals",
          exemple: "Modélisation relationnelle complète avec normalisation BCNF pour 500+ festivals français",
          competence: "PostgreSQL, modélisation E-A, peuplement automatisé",
          resultat: "Base robuste avec script SQL réutilisable et requêtes métier optimisées",
          image: "/images/images-s201.png",
        },
      ],
    },
    {
      id: "analysis-modeling",
      title: "Analyse Statistique et Modélisation",
      icon: BarChart3,
      color: "from-purple-400 to-pink-500",
      description: "Application rigoureuse des méthodes statistiques et de modélisation prédictive",
      projets: [
        {
          id: "S301",
          nom: "Enquête Alimentaire",
          exemple: "Méthodologie d'échantillonnage rigoureuse avec analyse statistique complète sous R",
          competence: "R Markdown, statistiques inférentielles, échantillonnage représentatif",
          resultat: "Rapport dynamique avec conclusions fiables sur les habitudes alimentaires",
          image: "/images/images-s301.png",
        },
        {
          id: "S303",
          nom: "Séries Temporelles",
          exemple: "Comparaison de 3 méthodes de prévision (moindres carrés, lissage, ARIMA) sur données INSEE",
          competence: "Modélisation ARIMA, décomposition CVS, prévision multitechnique",
          resultat: "Modèles prédictifs validés avec amélioration significative de la précision",
          image: "/images/images-s303.png",
        },
      ],
    },
    {
      id: "visualization-communication",
      title: "Visualisation et Communication",
      icon: PresentationChart,
      color: "from-rose-400 to-orange-500",
      description: "Transformation des analyses en supports visuels impactants et présentations convaincantes",
      projets: [
        {
          id: "S206",
          nom: "Étude Rapatriement Sanitaire",
          exemple: "Création d'une capsule vidéo professionnelle pour présenter l'analyse stratégique d'implantation",
          competence: "Storytelling data, visualisation Canva, argumentation fondée sur les données",
          resultat: "Recommandation Auvergne-Rhône-Alpes adoptée avec support visuel convaincant",
          image: "/placeholder.svg?height=300&width=500&text=Analyse+Stratégique",
        },
        {
          id: "SHINY",
          nom: "Application Shiny Interactive",
          exemple:
            "Interface ergonomique avec cartographie Leaflet pour explorer dynamiquement les données énergétiques",
          competence: "R Shiny, Leaflet, UX/UI, visualisation interactive",
          resultat: "20/20 - Application adoptée comme référence pédagogique",
          image: "/images/shiny-app.png",
        },
      ],
    },
  ]

  const bonnesPratiques = [
    {
      icon: CheckCircle,
      titre: "Rigueur Méthodologique",
      description: "Application systématique des bonnes pratiques : documentation, tests, validation",
      exemple: "Scripts SQL commentés et réutilisables (S201), validation croisée des modèles (S303)",
    },
    {
      icon: Users,
      titre: "Collaboration Efficace",
      description: "Travail en équipe avec répartition claire des rôles et communication fluide",
      exemple: "Coordination technique complète en trinôme (S201), leadership projet 6 personnes (S206)",
    },
    {
      icon: Lightbulb,
      titre: "Innovation et Créativité",
      description: "Recherche de solutions originales et optimisation des processus existants",
      exemple: "25 mesures DAX personnalisées (S103), interface Shiny ergonomique (SHINY)",
    },
    {
      icon: TrendingUp,
      titre: "Amélioration Continue",
      description: "Analyse critique des résultats et identification des axes de progression",
      exemple: "Retours constructifs sur chaque SAÉ avec propositions d'amélioration concrètes",
    },
  ]

  // Si un projet est sélectionné, afficher sa page détaillée
  if (selectedProject && projetsDetailles[selectedProject as keyof typeof projetsDetailles]) {
    const projet = projetsDetailles[selectedProject as keyof typeof projetsDetailles]

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <Button
              onClick={() => setSelectedProject(null)}
              variant="outline"
              className="border-white/20 text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux projets
            </Button>
            <Button
              onClick={onNavigateHome}
              variant="outline"
              className="border-white/20 text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Retour à l'accueil
            </Button>
          </div>

          {/* En-tête du projet */}
          <Card className="bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden mb-12">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <div className="text-8xl mb-6">{projet.emoji}</div>
                <h1 className="text-4xl font-bold text-pink-400 mb-4">{projet.titre}</h1>
                <p className="text-xl text-white/70 italic mb-8">{projet.sousTitre}</p>

                <div className="flex justify-center gap-8 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-pink-400 mr-2" />
                    <span className="font-semibold text-white">{projet.annee}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-pink-400 mr-2" />
                    <span className="font-semibold text-white">{projet.duree}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-pink-400 mr-2" />
                    <span className="font-semibold text-white">{projet.equipe}</span>
                  </div>
                  {projet.grade && (
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-pink-400 mr-2" />
                      <span className="font-semibold text-white">{projet.grade}</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contenu principal */}
          <div className="space-y-12">
            {/* Défi et Approche */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-black/20 backdrop-blur-xl border border-white/10 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-pink-400 mb-6 flex items-center">
                    <Target className="w-6 h-6 mr-3" />🎯 Le Défi
                  </h3>
                  <p className="text-white/80 leading-relaxed">{projet.defi}</p>
                </CardContent>
              </Card>

              <Card className="bg-black/20 backdrop-blur-xl border border-white/10 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
                    <Lightbulb className="w-6 h-6 mr-3" />💡 Mon Approche
                  </h3>
                  <p className="text-white/80 leading-relaxed">{projet.approche}</p>
                </CardContent>
              </Card>
            </div>

            {/* Méthodologie */}
            <Card className="bg-black/20 backdrop-blur-xl border border-white/10 shadow-xl">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-pink-400 mb-8 flex items-center">
                  <Code className="w-8 h-8 mr-3" />
                  🛠️ Méthodologie
                </h3>
                <div className="space-y-4">
                  {projet.methodologie.map((etape, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <p className="text-white/80 leading-relaxed">{etape}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Images du projet */}
            {projet.images && projet.images.length > 0 && (
              <Card className="bg-black/20 backdrop-blur-xl border border-white/10 shadow-xl">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold text-pink-400 mb-8 flex items-center">
                    <Eye className="w-8 h-8 mr-3" />📷 Aperçus du Projet
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projet.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative group cursor-pointer"
                        onClick={() => {
                          // Créer une modal pour agrandir l'image
                          const modal = document.createElement("div")
                          modal.className =
                            "fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                          modal.onclick = () => modal.remove()

                          const img = document.createElement("img")
                          img.src = image
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
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${projet.titre} - Image ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                          <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Prouesses et Compétences */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-black/20 backdrop-blur-xl border border-white/10 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
                    <Award className="w-6 h-6 mr-2" />🏆 Prouesses
                  </h3>
                  <ul className="space-y-3">
                    {projet.prouesses.map((prouesse, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-white/80">{prouesse}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/20 backdrop-blur-xl border border-white/10 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
                    <Brain className="w-6 h-6 mr-2" />🧩 Compétences Développées
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Techniques :</h4>
                      <div className="flex flex-wrap gap-2">
                        {projet.competencesTech.map((skill) => (
                          <Badge key={skill} variant="outline" className="border-blue-400/30 text-blue-300 bg-black/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Soft Skills :</h4>
                      <div className="flex flex-wrap gap-2">
                        {projet.softSkills.map((skill) => (
                          <Badge key={skill} variant="outline" className="border-pink-400/30 text-pink-300 bg-black/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Retour Personnel */}
            <Card className="bg-black/20 backdrop-blur-xl border border-white/10 shadow-xl">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-orange-400 mb-8 flex items-center">
                  <Users className="w-8 h-8 mr-3" />💭 Mon Retour Personnel
                </h3>
                <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 p-6 rounded-xl border-l-4 border-orange-400">
                  <p className="text-white/80 leading-relaxed text-lg italic">{projet.retourPersonnel}</p>
                </div>
              </CardContent>
            </Card>

            {/* Avis Critique */}
            <Card className="bg-black/20 backdrop-blur-xl border border-white/10 shadow-xl">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-pink-400 mb-8 flex items-center">
                  <Lightbulb className="w-8 h-8 mr-3" />🎯 Mon Avis Critique
                </h3>
                <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 p-6 rounded-xl border-l-4 border-pink-400">
                  <p className="text-white/80 leading-relaxed text-lg italic">{projet.avisCritique}</p>
                </div>
              </CardContent>
            </Card>
            {/* Video URL */}
            {projet.videoUrl && (
              <Card className="bg-black/20 backdrop-blur-xl border border-white/10 shadow-xl">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold text-pink-400 mb-8 flex items-center">
                    <Eye className="w-8 h-8 mr-3" />🎥 Vidéo du Projet
                  </h3>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={projet.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Boutons de navigation */}
          <div className="flex justify-center gap-4 mt-16">
            <Button
              onClick={() => setSelectedProject(null)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl"
            >
              <ArrowLeft className="w-5 h-5 mr-3" />
              Voir tous les projets
            </Button>
            <Button
              onClick={onNavigateHome}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl"
            >
              Retour à l'accueil
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header avec retour */}
        <div className="flex items-center justify-between mb-12">
          <Button
            onClick={onNavigateHome}
            variant="outline"
            className="border-white/20 text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              🎓 Mes Compétences en Action
            </h1>
            <p className="text-white/70 mt-2">Acquis et bonnes pratiques à travers mes projets SAÉ</p>
          </div>
          <div className="w-32"></div>
        </div>

        {/* Introduction sur les SAÉ */}
        <Card className="bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-orange-400 mb-4">🎯 Qu'est-ce qu'une SAÉ ?</h2>
              <p className="text-white/80 leading-relaxed max-w-4xl mx-auto">
                Les SAÉ (Situations d'Apprentissage et d'Évaluation) sont des projets concrets qui constituent le cœur
                de la formation BUT. Contrairement aux cours magistraux traditionnels, les SAÉ nous plongent dans des
                situations professionnelles réelles.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl border border-orange-400/30">
                <Rocket className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Apprentissage par projet</h3>
                <p className="text-sm text-white/70">Résoudre des problèmes concrets avec de vraies données</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Travail collaboratif</h3>
                <p className="text-sm text-white/70">Développer l'esprit d'équipe et la communication</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-400/30">
                <Brain className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Compétences métier</h3>
                <p className="text-sm text-white/70">Acquérir l'expertise d'un data scientist</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compétences acquises par domaine */}
        <div className="space-y-12">
          {competencesAcquises.map((competence, index) => (
            <div key={competence.id} className="animate-on-scroll" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="text-center mb-8">
                <div
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${competence.color} rounded-full shadow-xl mb-4`}
                >
                  <competence.icon className="w-6 h-6 text-white mr-3" />
                  <h2 className="text-xl font-bold text-white">{competence.title}</h2>
                </div>
                <p className="text-white/70 max-w-3xl mx-auto">{competence.description}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {competence.projets.map((projet, projIndex) => (
                  <Card
                    key={projet.id}
                    className="group bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProject(projet.id)}
                  >
                    <CardContent className="p-0">
                      {/* Image du projet */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={projet.image || "/placeholder.svg"}
                          alt={projet.nom}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <Badge className="bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                            {projet.id}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                            <Eye className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                          {projet.nom}
                        </h3>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-orange-400 mb-2 flex items-center">
                              <Target className="w-4 h-4 mr-2" />
                              Exemple concret
                            </h4>
                            <p className="text-white/80 text-sm leading-relaxed">{projet.exemple}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                              <Code className="w-4 h-4 mr-2" />
                              Compétences développées
                            </h4>
                            <p className="text-white/70 text-sm">{projet.competence}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center">
                              <Award className="w-4 h-4 mr-2" />
                              Résultat obtenu
                            </h4>
                            <p className="text-white/80 text-sm leading-relaxed">{projet.resultat}</p>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/10">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-pink-400/30 text-pink-300 hover:bg-pink-500/20 backdrop-blur-sm group-hover:border-pink-400 group-hover:text-pink-400 transition-all"
                          >
                            Voir les détails
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section Bonnes Pratiques */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              ✨ Bonnes Pratiques Acquises
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              Au-delà des compétences techniques, mes projets m'ont permis d'intégrer les bonnes pratiques
              professionnelles essentielles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {bonnesPratiques.map((pratique, index) => (
              <Card
                key={index}
                className="bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <pratique.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{pratique.titre}</h3>
                      <p className="text-white/70 mb-3 leading-relaxed">{pratique.description}</p>
                      <p className="text-sm text-green-400 italic">{pratique.exemple}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA de retour */}
        <div className="text-center mt-16">
          <Button
            onClick={onNavigateHome}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl"
          >
            <ArrowLeft className="w-5 h-5 mr-3" />
            Retour au portfolio
          </Button>
        </div>
      </div>

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
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
      `}</style>
    </div>
  )
}
