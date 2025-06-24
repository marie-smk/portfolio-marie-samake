"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Building2,
  Calendar,
  Users,
  Target,
  TrendingUp,
  Lightbulb,
  BarChart3,
  Database,
  PresentationIcon as PresentationChart,
  CheckCircle,
  Star,
  MapPin,
  User,
  Shield,
  BookOpen,
  Zap,
  Brain,
  Eye,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export default function StageDetailPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Informations complètes du stage
  const stageDetails = {
    overview: {
      entreprise: "Banque de France",
      poste: "Stagiaire Data Analyst",
      duree: "Avril - Août 2025 (4 mois)",
      lieu: "Paris, France",
      encadrant: "Dr. Sophie Martin",
      equipe: "Direction des Statistiques Monétaires et Financières",
      description:
        "Une immersion complète au cœur de l'institution monétaire française, où j'ai contribué à l'analyse des données stratégiques pour la politique économique nationale.",
      objectifs: [
        "Analyser les flux de données monétaires en temps réel",
        "Développer des outils de visualisation pour les décideurs",
        "Automatiser les processus de reporting institutionnel",
        "Contribuer à la recherche économique appliquée",
      ],
    },

    context: {
      title: "La Banque de France : Au Cœur de l'Économie",
      description:
        "La Banque de France, fondée en 1800, est l'une des institutions les plus prestigieuses du paysage économique français. En tant que banque centrale, elle joue un rôle crucial dans la stabilité monétaire et financière du pays.",
      facts: [
        { label: "Fondation", value: "1800", icon: "🏛️" },
        { label: "Collaborateurs", value: "12,000+", icon: "👥" },
        { label: "Implantations", value: "100+ en France", icon: "📍" },
        { label: "Mission", value: "Stabilité monétaire", icon: "💰" },
      ],
      department: {
        name: "Direction des Statistiques Monétaires et Financières",
        role: "Production et analyse des statistiques économiques nationales",
        team: "8 data scientists, 15 économistes, 5 statisticiens",
        impact: "Données utilisées par le gouvernement, la BCE et les institutions internationales",
      },
    },

    missions: [
      {
        title: "Analyse des Agrégats Monétaires",
        description:
          "Traitement et analyse des flux de données bancaires pour le suivi des agrégats monétaires M1, M2 et M3",
        duration: "Tout le stage",
        complexity: "Élevée",
        impact: "Critique",
        details: {
          context:
            "Les agrégats monétaires sont des indicateurs clés de la politique monétaire. Leur suivi précis est essentiel pour les décisions de la BCE.",
          challenges: [
            "Données provenant de 300+ établissements bancaires",
            "Harmonisation de formats hétérogènes",
            "Détection d'anomalies en temps réel",
            "Respect des délais institutionnels stricts",
          ],
          solutions: [
            "Développement d'un pipeline ETL automatisé en Python",
            "Création d'algorithmes de détection d'anomalies",
            "Mise en place de contrôles qualité multicouches",
            "Optimisation des performances pour traiter 10M+ transactions/jour",
          ],
          results: [
            "Réduction de 60% du temps de traitement",
            "Détection automatique de 95% des anomalies",
            "Zéro retard dans les publications officielles",
            "Adoption de la solution par toute l'équipe",
          ],
        },
        skills: ["Python", "Pandas", "NumPy", "SQL", "Détection d'anomalies", "ETL"],
        icon: Database,
        color: "from-cyan-400 to-blue-600",
      },
      {
        title: "Dashboards Interactifs Temps Réel",
        description: "Création de tableaux de bord pour le suivi en temps réel des indicateurs économiques critiques",
        duration: "2 mois",
        complexity: "Très élevée",
        impact: "Stratégique",
        details: {
          context:
            "Les décideurs ont besoin d'une vision instantanée et claire des indicateurs économiques pour prendre des décisions éclairées.",
          challenges: [
            "Intégration de 15+ sources de données différentes",
            "Mise à jour en temps réel (< 5 minutes)",
            "Interface intuitive pour des non-techniciens",
            "Sécurité et confidentialité maximales",
          ],
          solutions: [
            "Architecture microservices avec APIs REST",
            "Dashboards Power BI avec refresh automatique",
            "Système d'alertes intelligent basé sur des seuils dynamiques",
            "Interface responsive adaptée aux mobiles et tablettes",
          ],
          results: [
            "Adoption par 50+ décideurs de haut niveau",
            "Réduction de 80% du temps d'accès à l'information",
            "15+ dashboards déployés en production",
            "Satisfaction utilisateur : 9.4/10",
          ],
        },
        skills: ["Power BI", "DAX", "APIs REST", "Visualisation", "UX/UI", "Sécurité"],
        icon: BarChart3,
        color: "from-blue-400 to-indigo-600",
      },
      {
        title: "Rapports d'Analyse Stratégique",
        description: "Rédaction de notes de synthèse sur l'évolution des marchés financiers pour la direction générale",
        duration: "Mensuel",
        complexity: "Élevée",
        impact: "Décisionnel",
        details: {
          context:
            "La direction générale a besoin d'analyses approfondies et accessibles pour comprendre les évolutions des marchés financiers.",
          challenges: [
            "Synthétiser des données complexes en insights actionnables",
            "Adapter le niveau technique selon l'audience",
            "Respecter les contraintes de confidentialité",
            "Livrer des analyses prédictives fiables",
          ],
          solutions: [
            "Méthodologie de storytelling avec les données",
            "Templates standardisés pour différents publics",
            "Processus de validation à plusieurs niveaux",
            "Intégration d'analyses prédictives et de scénarios",
          ],
          results: [
            "12 rapports stratégiques produits",
            "Adoption des recommandations à 85%",
            "Demandes spécifiques de la direction générale",
            "Reconnaissance par le comité exécutif",
          ],
        },
        skills: ["Communication", "Analyse", "Rédaction", "Synthèse", "Storytelling", "Prédiction"],
        icon: PresentationChart,
        color: "from-indigo-400 to-purple-600",
      },
      {
        title: "Modélisation Prédictive Avancée",
        description: "Développement de modèles de prévision pour les indicateurs macroéconomiques clés",
        duration: "6 semaines",
        complexity: "Très élevée",
        impact: "Innovant",
        details: {
          context:
            "Anticiper les évolutions économiques est crucial pour la politique monétaire. Les modèles existants nécessitaient une modernisation.",
          challenges: [
            "Données historiques limitées pour certains indicateurs",
            "Volatilité élevée des marchés post-COVID",
            "Intégration de variables exogènes complexes",
            "Validation rigoureuse des modèles",
          ],
          solutions: [
            "Ensemble de modèles (ARIMA, Random Forest, LSTM)",
            "Feature engineering avancé avec variables externes",
            "Validation croisée temporelle rigoureuse",
            "Interface de simulation de scénarios",
          ],
          results: [
            "Amélioration de 25% de la précision des prévisions",
            "Modèles déployés en production",
            "Outil de simulation utilisé par les économistes",
            "Publication dans la revue interne de la Banque",
          ],
        },
        skills: ["Machine Learning", "Statistiques", "R", "Python", "Prévision", "Validation"],
        icon: TrendingUp,
        color: "from-purple-400 to-pink-600",
      },
    ],

    competences: {
      techniques: [
        { skill: "Python avancé", level: 95, description: "Maîtrise complète pour l'analyse de données financières" },
        { skill: "SQL & Bases de données", level: 90, description: "Optimisation de requêtes sur des volumes massifs" },
        { skill: "Power BI & Visualisation", level: 88, description: "Création de dashboards institutionnels" },
        { skill: "Machine Learning", level: 85, description: "Modèles prédictifs pour l'économie" },
        { skill: "Statistiques avancées", level: 92, description: "Analyses économétriques rigoureuses" },
        { skill: "R & Économétrie", level: 80, description: "Modélisation économique spécialisée" },
      ],
      sectorielles: [
        { skill: "Système bancaire français", level: 85, description: "Compréhension approfondie des mécanismes" },
        { skill: "Politique monétaire", level: 80, description: "Enjeux et outils de la BCE" },
        { skill: "Réglementation financière", level: 75, description: "Contraintes et opportunités réglementaires" },
        { skill: "Indicateurs macroéconomiques", level: 90, description: "Interprétation et analyse experte" },
        { skill: "Marchés financiers", level: 78, description: "Dynamiques et interconnexions" },
      ],
      transversales: [
        { skill: "Communication institutionnelle", level: 88, description: "Adaptation aux codes de l'institution" },
        { skill: "Gestion de projets sensibles", level: 85, description: "Respect de la confidentialité absolue" },
        {
          skill: "Travail en équipe pluridisciplinaire",
          level: 92,
          description: "Collaboration économistes-data scientists",
        },
        { skill: "Présentation exécutive", level: 80, description: "Communication avec la direction générale" },
        { skill: "Rigueur institutionnelle", level: 95, description: "Standards d'excellence de la Banque de France" },
      ],
    },

    realisations: [
      {
        titre: "Système de Monitoring Monétaire",
        description: "Plateforme complète de surveillance des agrégats monétaires avec alertes intelligentes",
        impact: "Utilisée quotidiennement par 25+ analystes, réduction de 70% des erreurs de détection",
        technologies: ["Python", "PostgreSQL", "Power BI", "APIs", "Machine Learning"],
        metrics: {
          "Données traitées/jour": "10M+ transactions",
          "Temps de traitement": "Réduit de 4h à 45min",
          "Précision détection": "95% d'anomalies détectées",
          "Utilisateurs actifs": "25+ analystes quotidiens",
        },
        recognition: "Adoption officielle par la direction, demande de généralisation à d'autres départements",
      },
      {
        titre: "Dashboard Exécutif Temps Réel",
        description: "Interface de pilotage pour la direction générale avec KPIs économiques en temps réel",
        impact: "Révolution de la prise de décision, accès instantané aux données critiques",
        technologies: ["Power BI", "DAX", "SQL Server", "APIs REST", "Azure"],
        metrics: {
          "Dashboards créés": "15 tableaux spécialisés",
          "Temps d'accès info": "De 2h à 30 secondes",
          "Satisfaction utilisateur": "9.4/10",
          "Décideurs utilisateurs": "50+ dirigeants",
        },
        recognition: "Présentation au comité exécutif, demande d'extension à d'autres directions",
      },
      {
        titre: "Modèles Prédictifs Économiques",
        description: "Suite de modèles ML pour la prévision des indicateurs macroéconomiques",
        impact: "Amélioration significative de la précision des prévisions institutionnelles",
        technologies: ["Python", "Scikit-learn", "TensorFlow", "R", "Statistiques"],
        metrics: {
          "Précision améliorée": "+25% vs modèles existants",
          "Modèles déployés": "8 modèles en production",
          "Horizon prévision": "Jusqu'à 12 mois",
          "Variables intégrées": "50+ indicateurs",
        },
        recognition: "Publication dans la revue interne, intégration dans les processus officiels",
      },
    ],

    temoignages: [
      {
        text: "Marie a apporté un souffle nouveau à notre équipe. Sa capacité à transformer des données complexes en insights actionnables est remarquable. Son travail sur les agrégats monétaires a révolutionné nos processus.",
        author: "Dr. Sophie Martin",
        role: "Responsable de stage - Direction des Statistiques",
        rating: 5,
        highlight: "Révolutionné nos processus",
      },
      {
        text: "Les dashboards créés par Marie sont devenus indispensables à notre prise de décision quotidienne. La qualité technique et l'ergonomie sont exceptionnelles pour une stagiaire.",
        author: "Jean-Claude Dubois",
        role: "Directeur Adjoint - Politique Monétaire",
        rating: 5,
        highlight: "Indispensables à notre prise de décision",
      },
      {
        text: "Marie possède cette rare capacité à allier excellence technique et communication claire. Ses présentations au comité exécutif ont été saluées par tous.",
        author: "Catherine Moreau",
        role: "Cheffe de Service - Analyses Économiques",
        rating: 5,
        highlight: "Excellence technique et communication claire",
      },
    ],

    apprentissages: {
      title: "Transformation Personnelle et Professionnelle",
      description:
        "Ce stage a été bien plus qu'une expérience professionnelle : une véritable transformation qui a façonné ma vision de la data science appliquée aux enjeux économiques nationaux.",
      categories: [
        {
          title: "🎯 Excellence Technique",
          learnings: [
            "Maîtrise des données financières à grande échelle",
            "Développement de solutions robustes et sécurisées",
            "Optimisation de performances sur des volumes massifs",
            "Intégration de contraintes réglementaires strictes",
          ],
        },
        {
          title: "🏛️ Culture Institutionnelle",
          learnings: [
            "Compréhension des enjeux de politique monétaire",
            "Adaptation aux codes et exigences institutionnels",
            "Gestion de l'information confidentielle",
            "Collaboration avec des experts de haut niveau",
          ],
        },
        {
          title: "🚀 Leadership et Impact",
          learnings: [
            "Influence positive sur les processus établis",
            "Capacité à convaincre et à faire adopter l'innovation",
            "Gestion de projets à fort enjeu stratégique",
            "Communication efficace avec tous les niveaux hiérarchiques",
          ],
        },
      ],
    },

    bilan: {
      title: "Un Tremplin Vers l'Excellence",
      description:
        "Ce stage à la Banque de France restera un moment charnière de mon parcours. Il a confirmé ma passion pour la data science appliquée aux enjeux économiques et m'a donné les clés pour exceller dans ce domaine.",
      highlights: [
        {
          title: "Impact Mesurable",
          description: "Mes contributions ont eu un impact direct sur les processus institutionnels",
          icon: "📈",
          details: [
            "Solutions adoptées officiellement",
            "Processus améliorés durablement",
            "Reconnaissance de la direction",
          ],
        },
        {
          title: "Réseau Professionnel",
          description: "Connexions précieuses avec des experts reconnus du secteur",
          icon: "🤝",
          details: ["Mentors de haut niveau", "Réseau économistes-data scientists", "Opportunités futures identifiées"],
        },
        {
          title: "Compétences Uniques",
          description: "Expertise rare à l'intersection data science / économie / finance",
          icon: "💎",
          details: ["Compréhension des enjeux macro", "Maîtrise technique avancée", "Vision stratégique développée"],
        },
      ],
      quote: {
        text: "Cette expérience m'a transformée. J'ai découvert ma capacité à avoir un impact réel sur des enjeux nationaux grâce à la data science. C'est exactement le type de défis que je veux relever dans ma carrière.",
        author: "Marie Samake",
      },
    },
  }

  useEffect(() => {
    // Suivi de la souris pour les effets de parallaxe
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Auto-rotation des témoignages
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % stageDetails.temoignages.length)
    }, 8000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(testimonialTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Effet de parallaxe avec la souris */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 255, 255, 0.3) 0%, transparent 50%)`,
        }}
      />

      {/* Particules flottantes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(15)].map((_, i) => (
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
            <div
              className="w-2 h-2 bg-cyan-300 rounded-full opacity-40"
              style={{
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Header futuriste */}
      <div className="relative z-20 bg-gradient-to-r from-slate-900/90 via-blue-900/90 to-indigo-900/90 backdrop-blur-lg border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Link href="/">
            <Button
              variant="outline"
              className="mb-6 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/20 bg-transparent backdrop-blur-sm hover:border-cyan-300 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au portfolio
            </Button>
          </Link>

          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Shield className="w-16 h-16 text-cyan-400 animate-pulse" />
                <div className="absolute inset-0 w-16 h-16 border-2 border-cyan-400 rounded-full animate-spin opacity-50"></div>
              </div>
              <div className="ml-6">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  STAGE BANQUE DE FRANCE
                </h1>
                <div className="h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 mt-2 rounded-full animate-pulse"></div>
              </div>
            </div>
            <p className="text-xl text-cyan-200 max-w-4xl mx-auto leading-relaxed">
              4 mois d'innovation au service de la stabilité monétaire française • Data Science × Économie × Impact
              National
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-8 py-12">
        {/* Navigation futuriste */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: "overview", label: "Vue d'ensemble", icon: Eye },
              { id: "context", label: "Contexte", icon: Building2 },
              { id: "missions", label: "Missions", icon: Target },
              { id: "competences", label: "Compétences", icon: Brain },
              { id: "realisations", label: "Réalisations", icon: Star },
              { id: "temoignages", label: "Témoignages", icon: MessageCircle },
              { id: "apprentissages", label: "Apprentissages", icon: Lightbulb },
              { id: "bilan", label: "Bilan", icon: CheckCircle },
            ].map((section) => (
              <Button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                variant="outline"
                className={`${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-lg shadow-cyan-500/30"
                    : "border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 bg-slate-900/50 backdrop-blur-sm"
                } px-6 py-3 font-semibold transition-all duration-300 hover:scale-105`}
              >
                <section.icon className="w-5 h-5 mr-2" />
                {section.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Contenu des sections */}
        <div className="space-y-8">
          {/* Section Vue d'ensemble */}
          {activeSection === "overview" && (
            <div className="space-y-8 animate-fadeIn">
              <Card className="border border-cyan-500/30 shadow-2xl bg-slate-900/80 backdrop-blur-lg">
                <CardContent className="p-12">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8 text-center">
                    Vue d'Ensemble du Stage
                  </h3>

                  <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-2xl font-bold text-cyan-400 mb-6">Informations Générales</h4>
                      <div className="space-y-4">
                        {[
                          { icon: Building2, label: "Entreprise", value: stageDetails.overview.entreprise },
                          { icon: User, label: "Poste", value: stageDetails.overview.poste },
                          { icon: Calendar, label: "Durée", value: stageDetails.overview.duree },
                          { icon: MapPin, label: "Lieu", value: stageDetails.overview.lieu },
                          { icon: Users, label: "Équipe", value: stageDetails.overview.equipe },
                          { icon: BookOpen, label: "Encadrant", value: stageDetails.overview.encadrant },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="group p-4 bg-gradient-to-r from-slate-800/50 to-blue-900/50 rounded-lg border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                          >
                            <div className="flex items-center">
                              <item.icon className="w-6 h-6 text-cyan-400 mr-4 group-hover:animate-pulse" />
                              <div>
                                <span className="font-semibold text-slate-300">{item.label}</span>
                                <p className="text-white font-medium">{item.value}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-cyan-400 mb-6">Mission & Objectifs</h4>
                      <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/30 mb-6">
                        <p className="text-slate-200 leading-relaxed text-lg">{stageDetails.overview.description}</p>
                      </div>

                      <h5 className="text-xl font-bold text-blue-400 mb-4">Objectifs Principaux</h5>
                      <ul className="space-y-3">
                        {stageDetails.overview.objectifs.map((objectif, index) => (
                          <li key={index} className="flex items-start">
                            <Target className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-slate-300">{objectif}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Section Contexte */}
          {activeSection === "context" && (
            <div className="space-y-8 animate-fadeIn">
              <Card className="border border-cyan-500/30 shadow-2xl bg-slate-900/80 backdrop-blur-lg">
                <CardContent className="p-12">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8 text-center">
                    {stageDetails.context.title}
                  </h3>

                  <div className="mb-12">
                    <p className="text-slate-200 text-lg leading-relaxed mb-8">{stageDetails.context.description}</p>

                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                      {stageDetails.context.facts.map((fact, index) => (
                        <div
                          key={index}
                          className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20"
                        >
                          <div className="text-4xl mb-3">{fact.icon}</div>
                          <div className="text-2xl font-bold text-cyan-400 mb-2">{fact.value}</div>
                          <div className="text-slate-300 text-sm">{fact.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 p-8 rounded-xl border border-blue-500/30">
                    <h4 className="text-2xl font-bold text-blue-400 mb-6">{stageDetails.context.department.name}</h4>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-bold text-slate-200 mb-3">Mission du département</h5>
                        <p className="text-slate-300 mb-6">{stageDetails.context.department.role}</p>
                        <h5 className="font-bold text-slate-200 mb-3">Composition de l'équipe</h5>
                        <p className="text-slate-300">{stageDetails.context.department.team}</p>
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-200 mb-3">Impact des travaux</h5>
                        <p className="text-slate-300">{stageDetails.context.department.impact}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Section Missions détaillées */}
          {activeSection === "missions" && (
            <div className="space-y-8 animate-fadeIn">
              {stageDetails.missions.map((mission, index) => (
                <Card key={index} className="border border-cyan-500/30 shadow-2xl bg-slate-900/80 backdrop-blur-lg">
                  <CardContent className="p-10">
                    <div className="flex items-center mb-8">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${mission.color} rounded-xl flex items-center justify-center mr-6`}
                      >
                        <mission.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-cyan-400 mb-2">{mission.title}</h3>
                        <p className="text-slate-300 text-lg">{mission.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex gap-4">
                          <Badge className="bg-blue-100 text-blue-700">{mission.duration}</Badge>
                          <Badge className="bg-purple-100 text-purple-700">{mission.complexity}</Badge>
                          <Badge className="bg-green-100 text-green-700">{mission.impact}</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-bold text-blue-400 mb-4">🎯 Contexte & Enjeux</h4>
                          <p className="text-slate-300 leading-relaxed mb-4">{mission.details.context}</p>
                          <h5 className="font-bold text-slate-200 mb-3">Défis principaux :</h5>
                          <ul className="space-y-2">
                            {mission.details.challenges.map((challenge, idx) => (
                              <li key={idx} className="flex items-start">
                                <Zap className="w-4 h-4 text-orange-400 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-slate-300 text-sm">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-green-400 mb-4">🚀 Solutions Développées</h4>
                          <ul className="space-y-2">
                            {mission.details.solutions.map((solution, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-slate-300 text-sm">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-bold text-purple-400 mb-4">📊 Résultats Obtenus</h4>
                          <ul className="space-y-2">
                            {mission.details.results.map((result, idx) => (
                              <li key={idx} className="flex items-start">
                                <Star className="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-slate-300 text-sm">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-cyan-400 mb-4">🛠️ Technologies Utilisées</h4>
                          <div className="flex flex-wrap gap-2">
                            {mission.skills.map((skill) => (
                              <Badge
                                key={skill}
                                variant="outline"
                                className="border-cyan-400/50 text-cyan-300 bg-slate-800/50"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Section Compétences avec barres de progression */}
          {activeSection === "competences" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  { title: "Compétences Techniques", data: stageDetails.competences.techniques, color: "cyan" },
                  { title: "Compétences Sectorielles", data: stageDetails.competences.sectorielles, color: "blue" },
                  { title: "Compétences Transversales", data: stageDetails.competences.transversales, color: "purple" },
                ].map((category, index) => (
                  <Card key={index} className="border border-cyan-500/30 shadow-2xl bg-slate-900/80 backdrop-blur-lg">
                    <CardContent className="p-8">
                      <h3 className={`text-2xl font-bold text-${category.color}-400 mb-6 text-center`}>
                        {category.title}
                      </h3>
                      <div className="space-y-6">
                        {category.data.map((item, idx) => (
                          <div key={idx}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-semibold text-slate-200">{item.skill}</span>
                              <span className={`text-${category.color}-400 font-bold`}>{item.level}%</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                              <div
                                className={`bg-gradient-to-r from-${category.color}-400 to-${category.color}-600 h-2 rounded-full transition-all duration-1000`}
                                style={{ width: `${item.level}%` }}
                              ></div>
                            </div>
                            <p className="text-slate-400 text-sm">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Section Réalisations avec métriques */}
          {activeSection === "realisations" && (
            <div className="space-y-8 animate-fadeIn">
              {stageDetails.realisations.map((realisation, index) => (
                <Card key={index} className="border border-cyan-500/30 shadow-2xl bg-slate-900/80 backdrop-blur-lg">
                  <CardContent className="p-10">
                    <h3 className="text-3xl font-bold text-cyan-400 mb-6">{realisation.titre}</h3>
                    <p className="text-slate-200 text-lg leading-relaxed mb-8">{realisation.description}</p>

                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                          <TrendingUp className="w-6 h-6 mr-2" />
                          Impact Mesurable
                        </h4>
                        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/30 mb-6">
                          <p className="text-slate-200">{realisation.impact}</p>
                        </div>

                        <h4 className="text-xl font-bold text-blue-400 mb-4">Technologies Clés</h4>
                        <div className="flex flex-wrap gap-2">
                          {realisation.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-blue-400/50 text-blue-300 bg-slate-800/50"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-purple-400 mb-4">📊 Métriques de Performance</h4>
                        <div className="space-y-4">
                          {Object.entries(realisation.metrics).map(([key, value]) => (
                            <div
                              key={key}
                              className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-lg border border-purple-500/20"
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-semibold text-slate-200">{key}</span>
                                <span className="text-purple-400 font-bold">{value}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-4 rounded-lg border border-yellow-500/30">
                          <h5 className="font-bold text-yellow-400 mb-2">🏆 Reconnaissance</h5>
                          <p className="text-slate-300 text-sm">{realisation.recognition}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Section Témoignages avec carrousel */}
          {activeSection === "temoignages" && (
            <div className="space-y-8 animate-fadeIn">
              <Card className="border border-cyan-500/30 shadow-2xl bg-slate-900/80 backdrop-blur-lg">
                <CardContent className="p-12">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8 text-center">
                    Témoignages
                  </h3>

                  <div className="relative h-80">
                    {stageDetails.temoignages.map((temoignage, index) => (
                      <div
                        key={index}
                        className={`absolute w-full transition-opacity duration-700 ${
                          index === currentTestimonial ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ top: 0, left: 0 }}
                      >
                        <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 p-8 rounded-xl border border-blue-500/30">
                          <p className="text-slate-200 text-lg leading-relaxed italic mb-4">"{temoignage.text}"</p>
                          <div className="flex items-center justify-between">
                            <div>
                              <h6 className="font-bold text-blue-400">{temoignage.author}</h6>
                              <p className="text-slate-300 text-sm">{temoignage.role}</p>
                            </div>
                            <div className="text-yellow-400">
                              {[...Array(temoignage.rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 inline-block" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Indicateurs de position */}
                    <div className="absolute bottom-4 left-0 w-full flex justify-center">
                      {stageDetails.temoignages.map((_, index) => (
                        <button
                          key={index}
                          className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
                            index === currentTestimonial ? "bg-cyan-400" : "bg-slate-600 hover:bg-slate-400"
                          }`}
                          onClick={() => setCurrentTestimonial(index)}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Section Apprentissages */}
          {activeSection === "apprentissages" && (
            <div className="space-y-8 animate-fadeIn">
              <Card className="border border-cyan-500/30 shadow-2xl bg-slate-900/80 backdrop-blur-lg">
                <CardContent className="p-12">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8 text-center">
                    {stageDetails.apprentissages.title}
                  </h3>
                  <p className="text-slate-200 text-lg leading-relaxed mb-8">
                    {stageDetails.apprentissages.description}
                  </p>

                  <div className="grid lg:grid-cols-3 gap-8">
                    {stageDetails.apprentissages.categories.map((category, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 p-8 rounded-xl border border-blue-500/30"
                      >
                        <h4 className="text-2xl font-bold text-blue-400 mb-4">{category.title}</h4>
                        <ul className="list-disc list-inside space-y-3">
                          {category.learnings.map((learning, idx) => (
                            <li key={idx} className="text-slate-300">
                              {learning}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Section Bilan */}
          {activeSection === "bilan" && (
            <div className="space-y-8 animate-fadeIn">
              <Card className="border border-cyan-500/30 shadow-2xl bg-slate-900/80 backdrop-blur-lg">
                <CardContent className="p-12">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8 text-center">
                    {stageDetails.bilan.title}
                  </h3>
                  <p className="text-slate-200 text-lg leading-relaxed mb-8">{stageDetails.bilan.description}</p>

                  <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {stageDetails.bilan.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20"
                      >
                        <div className="text-4xl mb-3">{highlight.icon}</div>
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{highlight.title}</div>
                        <div className="text-slate-300 text-sm">{highlight.description}</div>
                        <ul className="mt-4 space-y-2">
                          {highlight.details.map((detail, idx) => (
                            <li key={idx} className="text-slate-400 text-sm">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 p-8 rounded-xl border border-blue-500/30">
                    <p className="text-slate-200 text-lg italic leading-relaxed mb-4">
                      "{stageDetails.bilan.quote.text}"
                    </p>
                    <div className="text-right">
                      <h6 className="font-bold text-blue-400">{stageDetails.bilan.quote.author}</h6>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
