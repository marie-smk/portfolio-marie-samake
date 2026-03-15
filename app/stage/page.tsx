"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  Building2,
  Calendar,
  Users,
  MapPin,
  User,
  FileText,
  Phone,
  Mail,
  Database,
  CheckCircle,
  Star,
  Shield,
  Eye,
  Brain,
  Heart,
  Target,
  Zap,
  Briefcase,
  GraduationCap,
  FolderOpen,
  ClipboardList,
  Search,
} from "lucide-react"
import Link from "next/link"

export default function ExperiencePage() {
  const [activeExperience, setActiveExperience] = useState<"stage" | "alternance">("alternance")
  const [activeSection, setActiveSection] = useState("overview")

  // Informations du STAGE (Avril - Aout 2025)
  const stageDetails = {
    overview: {
      entreprise: "Banque de France",
      poste: "Assistante - Division Donnees, Recherches et Referentiels (D2R2)",
      duree: "Avril - Aout 2025 (5 mois)",
      lieu: "Paris, France",
      service: "Service de Gestion et d'Administration des Moyens de Paiement (SGAM)",
      departement: "Direction des Services Bancaires (DSB)",
      direction: "Direction Generale des Services aux Operations (DGSO)",
      type: "Stage",
    },

    context: {
      title: "La Banque de France et la Division D2R2",
      description:
        "La Banque de France est la banque centrale du pays : elle veille a la stabilite monetaire, supervise les etablissements bancaires et gere d'importants referentiels nationaux indispensables au fonctionnement du secteur financier.",
      division: {
        name: "Division Donnees, Recherches et Referentiels (D2R2)",
        role: "La D2R2 joue un role essentiel dans la gestion, la qualite et la diffusion des bases de donnees bancaires francaises.",
        responsabilites: [
          "Le Fichier des Etablissements et Guichets Agrees (FEGA)",
          "Les Fichiers des Guichets Domiciliataires (FGD)",
          "Le referentiel des Identifiants Creancier SEPA (ICS)",
        ],
        activites: [
          "Collecte et mise a jour des referentiels",
          "Controle de la qualite des donnees",
          "Redaction et actualisation de la documentation",
          "Accompagnement de l'evolution des outils numeriques",
        ],
      },
    },

    missions: [
      {
        title: "Mise a jour et controle des fichiers clients",
        description: "Gestion et fiabilisation des referentiels clients",
        details:
          "J'ai regulierement mis a jour et controle les tableaux Excel contenant les informations clients et abonnes.",
        icon: Database,
        color: "from-blue-400 to-indigo-600",
      },
      {
        title: "Organisation d'un publipostage a grande echelle",
        description: "Campagne de publipostage a plus de 400 clients",
        details:
          "J'ai participe a l'organisation et a la gestion d'une campagne de publipostage avec generation et envoi de courriers personnalises.",
        icon: Mail,
        color: "from-green-400 to-emerald-600",
      },
      {
        title: "Suivi telephonique des clients",
        description: "Contact personnalise avec les clients",
        details:
          "Suite au publipostage, j'ai pris contact par telephone avec les clients n'ayant pas repondu.",
        icon: Phone,
        color: "from-purple-400 to-pink-600",
      },
      {
        title: "Developpement d'un outil Python",
        description: "Application Streamlit pour le controle qualite",
        details:
          "J'ai developpe une application en Python permettant de supprimer automatiquement les doublons dans les fichiers.",
        icon: Zap,
        color: "from-cyan-400 to-blue-600",
      },
    ],

    competences: [
      "Gestion de bases de donnees sous Excel",
      "Organisation de campagnes de publipostage",
      "Communication professionnelle",
      "Automatisation de taches avec Python",
      "Rigueur administrative",
    ],

    bilan: {
      title: "Une experience enrichissante",
      description: "Ce stage m'a permis de comprendre l'importance de la qualite des referentiels bancaires.",
      impact: "J'ai gagne en autonomie et mis en pratique mes competences en gestion de donnees.",
      quote: "Ce stage m'a permis de lier gestion administrative, relation client et automatisation.",
    },
  }

  // Informations de l'ALTERNANCE (Decembre 2025 - Septembre 2026)
  const alternanceDetails = {
    overview: {
      entreprise: "Banque de France",
      poste: "Gestionnaire de la Relation Commerciale pour les Referentiels Interbancaires",
      duree: "Decembre 2025 - Septembre 2026 (10 mois)",
      lieu: "Paris, France",
      tutrice: "Aurelie Louf",
      service: "Service de Gestion et d'Administration des Moyens de Paiement (SGAM)",
      departement: "Direction des Services Bancaires (DSB)",
      direction: "Direction Generale des Services aux Operations (DGSO)",
      type: "Alternance",
    },

    context: {
      title: "Continuite et Evolution",
      description:
        "Cette alternance s'inscrit dans la continuite directe du stage de cinq mois realise dans le meme service.",
      evolution:
        "La ou le stage reposait sur une logique d'execution encadree, l'alternance m'a amenee a intervenir de maniere plus transversale.",
      objectif:
        "Structurer et fiabiliser l'information au sein d'un environnement institutionnel exigeant.",
    },

    missions: [
      {
        title: "Annuaire de contacts des entreprises",
        description: "Conception d'un outil centralise sous Microsoft Access",
        details:
          "J'ai concu une base de donnees relationnelle avec interface utilisateur pour gerer les contacts des entreprises partenaires.",
        icon: FolderOpen,
        color: "from-blue-400 to-indigo-600",
        techDetails: [
          "Architecture de base de donnees relationnelle",
          "Interface de recherche multicriteres",
          "Mecanisme de controle d'integrite",
        ],
      },
      {
        title: "Analyse et refonte des fichiers commerciaux",
        description: "Demarche d'expression de besoin complete",
        details:
          "J'ai mene des entretiens individuels avec chaque membre de l'equipe pour comprendre les usages et difficultes.",
        icon: ClipboardList,
        color: "from-green-400 to-emerald-600",
        techDetails: [
          "Conduite d'entretiens utilisateurs",
          "Analyse des besoins fonctionnels",
          "Formalisation d'un cahier des charges",
        ],
      },
      {
        title: "Fiabilisation des identifiants entreprises",
        description: "Verification systematique des SIREN/SIRET",
        details:
          "J'ai entrepris un travail de verification des identifiants avec les sources officielles.",
        icon: Search,
        color: "from-purple-400 to-pink-600",
        techDetails: [
          "Controle qualite des donnees",
          "Croisement avec referentiels officiels",
          "Documentation des corrections",
        ],
      },
    ],

    competences: [
      "Conception de bases de donnees relationnelles (Microsoft Access)",
      "Conduite d'entretiens et recueil de besoins",
      "Analyse et reorganisation de processus metiers",
      "Gestion de projet et coordination",
      "Controle qualite et fiabilisation des donnees",
      "Autonomie et prise d'initiative",
    ],

    bilan: {
      title: "Une evolution vers plus de responsabilites",
      description: "L'alternance m'a permis de passer d'une posture d'execution a une posture analytique.",
      impact: "J'ai developpe ma capacite a structurer l'information et a concevoir des solutions adaptees.",
      quote: "Transformer des informations dispersees en outils exploitables : c'est le fil conducteur de mon alternance.",
    },
  }

  const currentDetails = activeExperience === "stage" ? stageDetails : alternanceDetails

  useEffect(() => {
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

    return () => {
      observer.disconnect()
    }
  }, [activeExperience])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-8 py-20">
      {/* Header */}
      <div className="relative z-30 mb-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <Button
              variant="outline"
              className="mb-6 border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/20 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au portfolio
            </Button>
          </Link>

          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Briefcase className="w-16 h-16 text-cyan-400 animate-pulse" />
                <div className="absolute inset-0 w-16 h-16 border-2 border-cyan-400 rounded-full animate-spin opacity-50"></div>
              </div>
              <div className="ml-6">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  EXPERIENCE PROFESSIONNELLE
                </h1>
                <div className="h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 mt-2 rounded-full animate-pulse"></div>
              </div>
            </div>
            <p className="text-xl text-cyan-200 max-w-4xl mx-auto leading-relaxed">
              15 mois d'experience a la Banque de France
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Selecteur d'experience */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => {
                setActiveExperience("alternance")
                setActiveSection("overview")
              }}
              variant="outline"
              className={`${
                activeExperience === "alternance"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-lg shadow-cyan-500/30"
                  : "border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 bg-black/20 backdrop-blur-sm"
              } px-8 py-4 font-semibold transition-all duration-300 hover:scale-105`}
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Alternance (2025-2026)
            </Button>
            <Button
              onClick={() => {
                setActiveExperience("stage")
                setActiveSection("overview")
              }}
              variant="outline"
              className={`${
                activeExperience === "stage"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white border-pink-400 shadow-lg shadow-pink-500/30"
                  : "border-pink-500/30 text-pink-300 hover:bg-pink-500/20 bg-black/20 backdrop-blur-sm"
              } px-8 py-4 font-semibold transition-all duration-300 hover:scale-105`}
            >
              <Building2 className="w-5 h-5 mr-2" />
              Stage (2025)
            </Button>
          </div>
        </div>

        {/* Navigation des sections */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: "overview", label: "Vue d'ensemble", icon: Eye },
              { id: "context", label: "Contexte", icon: Building2 },
              { id: "missions", label: "Missions", icon: Target },
              { id: "competences", label: "Competences", icon: Brain },
              { id: "bilan", label: "Bilan", icon: CheckCircle },
            ].map((section) => (
              <Button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                variant="outline"
                className={`${
                  activeSection === section.id
                    ? activeExperience === "alternance"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-lg"
                      : "bg-gradient-to-r from-pink-500 to-purple-600 text-white border-pink-400 shadow-lg"
                    : "border-slate-500/30 text-slate-300 hover:bg-slate-500/20 bg-black/20 backdrop-blur-sm"
                } px-6 py-3 font-semibold transition-all duration-300 hover:scale-105`}
              >
                <section.icon className="w-5 h-5 mr-2" />
                {section.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Contenu */}
        <div className="space-y-8">
          {activeSection === "overview" && (
            <Card className={`border ${activeExperience === "alternance" ? "border-cyan-500/30" : "border-pink-500/30"} shadow-2xl bg-black/20 backdrop-blur-xl`}>
              <CardContent className="p-12">
                <h3 className={`text-4xl font-bold bg-gradient-to-r ${activeExperience === "alternance" ? "from-cyan-400 to-blue-400" : "from-pink-400 to-purple-400"} bg-clip-text text-transparent mb-8 text-center`}>
                  Vue d'Ensemble
                </h3>
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    {[
                      { icon: Building2, label: "Entreprise", value: currentDetails.overview.entreprise },
                      { icon: User, label: "Poste", value: currentDetails.overview.poste },
                      { icon: Calendar, label: "Duree", value: currentDetails.overview.duree },
                      { icon: MapPin, label: "Lieu", value: currentDetails.overview.lieu },
                    ].map((item, index) => (
                      <div key={index} className={`p-4 bg-gradient-to-r ${activeExperience === "alternance" ? "from-slate-800/50 to-blue-900/50" : "from-slate-800/50 to-purple-900/50"} rounded-lg border border-white/10`}>
                        <div className="flex items-center">
                          <item.icon className={`w-6 h-6 ${activeExperience === "alternance" ? "text-cyan-400" : "text-pink-400"} mr-4`} />
                          <div>
                            <span className="font-semibold text-slate-300">{item.label}</span>
                            <p className="text-white font-medium">{item.value}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <div className={`p-4 rounded-xl border ${activeExperience === "alternance" ? "bg-cyan-500/10 border-cyan-500/30" : "bg-pink-500/10 border-pink-500/30"}`}>
                      <h5 className={`font-bold ${activeExperience === "alternance" ? "text-cyan-400" : "text-pink-400"} mb-2`}>Service</h5>
                      <p className="text-slate-200 text-sm">{currentDetails.overview.service}</p>
                    </div>
                    <div className={`p-4 rounded-xl border ${activeExperience === "alternance" ? "bg-blue-500/10 border-blue-500/30" : "bg-purple-500/10 border-purple-500/30"}`}>
                      <h5 className={`font-bold ${activeExperience === "alternance" ? "text-blue-400" : "text-purple-400"} mb-2`}>Direction</h5>
                      <p className="text-slate-200 text-sm">{currentDetails.overview.direction}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === "missions" && (
            <div className="space-y-6">
              {currentDetails.missions.map((mission, index) => (
                <Card key={index} className={`border ${activeExperience === "alternance" ? "border-cyan-500/30" : "border-pink-500/30"} shadow-2xl bg-black/20 backdrop-blur-xl`}>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${mission.color} rounded-xl flex items-center justify-center mr-4`}>
                        <mission.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold ${activeExperience === "alternance" ? "text-cyan-400" : "text-pink-400"}`}>{mission.title}</h3>
                        <p className="text-slate-300 text-sm">{mission.description}</p>
                      </div>
                    </div>
                    <p className="text-slate-200 leading-relaxed">{mission.details}</p>
                    {"techDetails" in mission && mission.techDetails && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {mission.techDetails.map((detail, idx) => (
                          <span key={idx} className="px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-full text-cyan-300 text-sm">
                            {detail}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeSection === "competences" && (
            <Card className={`border ${activeExperience === "alternance" ? "border-cyan-500/30" : "border-pink-500/30"} shadow-2xl bg-black/20 backdrop-blur-xl`}>
              <CardContent className="p-12">
                <h3 className={`text-4xl font-bold bg-gradient-to-r ${activeExperience === "alternance" ? "from-cyan-400 to-blue-400" : "from-pink-400 to-purple-400"} bg-clip-text text-transparent mb-8 text-center`}>
                  Competences Developpees
                </h3>
                <div className="space-y-4">
                  {currentDetails.competences.map((competence, index) => (
                    <div key={index} className={`flex items-center p-4 ${activeExperience === "alternance" ? "bg-slate-800/50 border-cyan-500/20" : "bg-slate-800/50 border-pink-500/20"} rounded-xl border`}>
                      <Star className="w-5 h-5 text-yellow-400 mr-4" />
                      <p className="text-slate-200">{competence}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === "bilan" && (
            <Card className={`border ${activeExperience === "alternance" ? "border-cyan-500/30" : "border-pink-500/30"} shadow-2xl bg-black/20 backdrop-blur-xl`}>
              <CardContent className="p-12">
                <h3 className={`text-4xl font-bold bg-gradient-to-r ${activeExperience === "alternance" ? "from-cyan-400 to-blue-400" : "from-pink-400 to-purple-400"} bg-clip-text text-transparent mb-8 text-center`}>
                  {currentDetails.bilan.title}
                </h3>
                <div className="space-y-6">
                  <p className="text-slate-200 text-lg leading-relaxed">{currentDetails.bilan.description}</p>
                  <p className="text-slate-200 leading-relaxed">{currentDetails.bilan.impact}</p>
                  <blockquote className={`p-6 ${activeExperience === "alternance" ? "bg-cyan-900/30 border-l-4 border-cyan-500" : "bg-pink-900/30 border-l-4 border-pink-500"} rounded-r-xl italic text-xl text-slate-200`}>
                    "{currentDetails.bilan.quote}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === "context" && (
            <Card className={`border ${activeExperience === "alternance" ? "border-cyan-500/30" : "border-pink-500/30"} shadow-2xl bg-black/20 backdrop-blur-xl`}>
              <CardContent className="p-12">
                <h3 className={`text-4xl font-bold bg-gradient-to-r ${activeExperience === "alternance" ? "from-cyan-400 to-blue-400" : "from-pink-400 to-purple-400"} bg-clip-text text-transparent mb-8 text-center`}>
                  {currentDetails.context.title}
                </h3>
                <p className="text-slate-200 text-lg leading-relaxed mb-6">{currentDetails.context.description}</p>
                {activeExperience === "alternance" && alternanceDetails.context.evolution && (
                  <div className="bg-cyan-900/30 p-6 rounded-xl border border-cyan-500/30 mb-4">
                    <h4 className="text-cyan-400 font-bold mb-2">Evolution du role</h4>
                    <p className="text-slate-200">{alternanceDetails.context.evolution}</p>
                  </div>
                )}
                {activeExperience === "stage" && stageDetails.context.division && (
                  <div className="bg-pink-900/30 p-6 rounded-xl border border-pink-500/30">
                    <h4 className="text-pink-400 font-bold mb-4">{stageDetails.context.division.name}</h4>
                    <p className="text-slate-200 mb-4">{stageDetails.context.division.role}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-slate-300 font-semibold mb-2">Referentiels geres</h5>
                        <ul className="space-y-1">
                          {stageDetails.context.division.responsabilites.map((r, i) => (
                            <li key={i} className="text-slate-400 text-sm flex items-start">
                              <Database className="w-3 h-3 text-pink-400 mr-2 mt-1" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-slate-300 font-semibold mb-2">Activites</h5>
                        <ul className="space-y-1">
                          {stageDetails.context.division.activites.map((a, i) => (
                            <li key={i} className="text-slate-400 text-sm flex items-start">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 mt-1" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
