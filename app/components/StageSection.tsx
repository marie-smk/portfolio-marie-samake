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
  Settings,
  Search,
  BarChart3,
  FolderOpen,
  MessageSquare,
  ClipboardList,
} from "lucide-react"

interface StageSectionProps {
  onNavigateHome: () => void
}

export default function StageSection({ onNavigateHome }: StageSectionProps) {
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
          "Le Fichier des Etablissements et Guichets Agrees (FEGA), qui recense tous les etablissements de credit et leurs guichets",
          "Les Fichiers des Guichets Domiciliataires (FGD), utilises pour valider les coordonnees bancaires dans les paiements nationaux et europeens (SEPA)",
          "Le referentiel des Identifiants Creancier SEPA (ICS) pour securiser les prelevements",
        ],
        activites: [
          "Collecte et mise a jour des referentiels",
          "Controle de la qualite des donnees transmises par les banques",
          "Redaction et actualisation de la documentation destinee aux clients institutionnels",
          "Accompagnement de l'evolution des outils numeriques (ex : preparation a la mise en place d'un nouveau CRM)",
        ],
      },
    },

    missions: [
      {
        title: "Mise a jour et controle des fichiers clients",
        description: "Gestion et fiabilisation des referentiels clients avec verification de la completude des donnees",
        details:
          "J'ai regulierement mis a jour et controle les tableaux Excel contenant les informations clients et abonnes. Cela impliquait la verification de la completude des donnees, la correction des erreurs signalees, et le suivi des modifications a apporter dans les referentiels nationaux.",
        icon: Database,
        color: "from-blue-400 to-indigo-600",
      },
      {
        title: "Organisation d'un publipostage a grande echelle",
        description:
          "Campagne de publipostage avec generation et envoi de courriers personnalises a plus de 400 clients",
        details:
          "J'ai participe a l'organisation et a la gestion d'une campagne de publipostage, avec la generation et l'envoi de courriers personnalises a plus de 400 clients abonnes des fichiers FEGA/FGD. Cette operation visait a actualiser les donnees et a recueillir des informations indispensables a la conformite reglementaire.",
        icon: Mail,
        color: "from-green-400 to-emerald-600",
      },
      {
        title: "Suivi telephonique des clients",
        description: "Contact personnalise avec les clients pour completer et verifier leurs informations",
        details:
          "Suite au publipostage, j'ai pris contact par telephone avec les clients n'ayant pas repondu, afin de completer, verifier ou rectifier leurs informations. Ce suivi personnalise a permis de fiabiliser les referentiels et d'ameliorer la communication avec les abonnes.",
        icon: Phone,
        color: "from-purple-400 to-pink-600",
      },
      {
        title: "Actualisation documentaire et gestion administrative",
        description: "Mise a jour des contrats, documentation et archivage des documents internes",
        details:
          "J'ai contribue a la mise a jour des contrats d'abonnement, a la relecture et a l'adaptation de la documentation liee a la clientele, ainsi qu'a l'organisation et a l'archivage des documents internes du service.",
        icon: FileText,
        color: "from-orange-400 to-red-600",
      },
      {
        title: "Developpement d'un outil Python pour le controle qualite",
        description: "Application Streamlit pour automatiser le nettoyage des fichiers clients",
        details:
          "Pour faciliter le traitement des listes clients, j'ai developpe une application simple en Python (via Streamlit) permettant de selectionner une colonne dans un fichier Excel ou CSV, et d'en supprimer automatiquement les doublons. Cet outil a ete mis a disposition de l'equipe et a simplifie le nettoyage des fichiers lors des mises a jour massives.",
        icon: Zap,
        color: "from-cyan-400 to-blue-600",
      },
    ],

    competences: [
      "Gestion de bases de donnees sous Excel et controle qualite des informations",
      "Organisation de campagnes de publipostage et gestion du suivi client",
      "Communication professionnelle, aussi bien ecrite (courriers, documentation) qu'orale (appels clients)",
      "Automatisation de taches avec Python et Streamlit",
      "Rigueur administrative et gestion documentaire dans un environnement institutionnel",
    ],

    bilan: {
      title: "Une experience enrichissante au coeur du systeme bancaire francais",
      description:
        "Integrer la Banque de France et le D2R2 m'a permis de mieux comprendre l'importance de la qualite des referentiels bancaires pour la securite du systeme financier national. J'ai pu allier gestion administrative, relation client et automatisation, tout en travaillant dans un cadre exigeant et structure.",
      impact:
        "Cette experience m'a donne l'opportunite d'apporter une vraie valeur ajoutee a l'equipe, de gagner en autonomie et de mettre en pratique mes competences en gestion de donnees et en developpement.",
      quote:
        "Ce stage m'a permis de lier gestion administrative, relation client et automatisation, tout en participant a la fiabilisation de referentiels bancaires essentiels pour la Banque de France.",
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
      responsables: "Christelle Caplain et Anne Merlet",
      service: "Service de Gestion et d'Administration des Moyens de Paiement (SGAM)",
      departement: "Direction des Services Bancaires (DSB)",
      direction: "Direction Generale des Services aux Operations (DGSO)",
      type: "Alternance",
    },

    context: {
      title: "Continuite et Evolution",
      description:
        "Cette alternance s'inscrit dans la continuite directe du stage de cinq mois realise dans le meme service. A mon arrivee, je connaissais deja les referentiels, les outils ainsi que les enjeux lies a l'activite. Cette continuite m'a permis d'etre rapidement operationnelle, tout en marquant une evolution dans mon role.",
      evolution:
        "La ou le stage reposait principalement sur une logique d'execution encadree, l'alternance m'a progressivement amenee a intervenir de maniere plus transversale, en mobilisant davantage d'analyse, de structuration et de proposition de solutions.",
      objectif:
        "Mes missions s'articulent autour d'un objectif commun : structurer et fiabiliser l'information au sein d'un environnement institutionnel exigeant, dans lequel la qualite des donnees constitue un element essentiel au bon fonctionnement des processus metiers.",
    },

    missions: [
      {
        title: "Annuaire de contacts des entreprises abonnees",
        description: "Conception et developpement d'un outil centralise pour gerer les contacts des entreprises partenaires",
        details:
          "L'objectif etait de disposer d'un outil permettant de centraliser et de consulter plus facilement les differents interlocuteurs associes aux entreprises abonnees aux referentiels ICS et FGD. J'ai concu une base de donnees relationnelle sous Microsoft Access avec une interface utilisateur permettant la recherche multicriteres, l'ajout/modification de contacts, et l'extraction d'adresses mail pour les communications ciblees.",
        icon: FolderOpen,
        color: "from-blue-400 to-indigo-600",
        techDetails: [
          "Architecture de base de donnees relationnelle",
          "Gestion des relations complexes (un contact peut avoir plusieurs roles pour plusieurs entreprises)",
          "Mecanisme de controle d'integrite des donnees",
          "Interface de recherche par SIREN ou denomination",
        ],
      },
      {
        title: "Analyse et refonte des fichiers commerciaux",
        description: "Conduite d'une demarche d'expression de besoin pour reorganiser l'activite commerciale",
        details:
          "J'ai mene une phase d'expression de besoin complete : cartographie de l'existant, construction d'un questionnaire, conduite d'entretiens individuels avec chaque membre de l'equipe. L'objectif etait de comprendre les usages reels des fichiers existants et les difficultes rencontrees pour proposer une organisation plus claire et centralisee.",
        icon: ClipboardList,
        color: "from-green-400 to-emerald-600",
        techDetails: [
          "Conduite d'entretiens utilisateurs",
          "Analyse des besoins fonctionnels",
          "Synthese et formalisation d'un cahier des charges",
          "Gestion de projet et coordination d'equipe",
        ],
      },
      {
        title: "Fiabilisation des identifiants entreprises",
        description: "Verification et correction systematique des identifiants SIREN/SIRET pour la facturation",
        details:
          "Suite aux anomalies detectees dans les identifiants administratifs, j'ai entrepris un travail de verification systematique. Pour chaque entreprise presentant une incoherence, j'ai compare les identifiants presents dans les fichiers internes avec les informations disponibles dans les sources officielles afin d'identifier la nature de l'erreur.",
        icon: Search,
        color: "from-purple-400 to-pink-600",
        techDetails: [
          "Controle qualite des donnees",
          "Croisement avec referentiels officiels",
          "Documentation des anomalies et corrections",
          "Prevention des erreurs de facturation",
        ],
      },
    ],

    competences: [
      "Conception et structuration de bases de donnees relationnelles (Microsoft Access)",
      "Conduite d'entretiens et recueil de besoins utilisateurs",
      "Analyse et reorganisation de processus metiers",
      "Gestion de projet et coordination avec differents interlocuteurs",
      "Controle qualite et fiabilisation des donnees",
      "Autonomie et prise d'initiative dans la proposition de solutions",
    ],

    bilan: {
      title: "Une evolution vers plus de responsabilites",
      description:
        "L'alternance introduit un rythme different. Il ne s'agit plus seulement de s'integrer dans une equipe, mais aussi d'apprendre a jongler entre deux environnements : celui de l'entreprise et celui de la formation universitaire.",
      impact:
        "Cette experience m'a permis de passer d'une posture d'execution a une posture plus analytique et force de proposition. J'ai developpe ma capacite a structurer l'information, a conduire des demarches de recueil de besoins et a concevoir des solutions adaptees aux contraintes du service.",
      quote:
        "Transformer des informations parfois dispersees ou peu formalisees en outils exploitables et partages : c'est le fil conducteur de mon alternance.",
    },
  }

  const currentDetails = activeExperience === "stage" ? stageDetails : alternanceDetails

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

    return () => {
      observer.disconnect()
    }
  }, [activeExperience])

  return (
    <div className="min-h-screen px-8 pb-20">
      {/* Header */}
      <div className="relative z-30 mb-12">
        <div className="max-w-7xl mx-auto">
          <Button
            onClick={onNavigateHome}
            variant="outline"
            className="mb-6 border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/20 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au portfolio
          </Button>

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
              15 mois d'experience a la Banque de France - Du stage a l'alternance
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
                  : "border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 bg-black/20 backdrop-blur-sm"
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
                  : "border-pink-500/30 text-pink-300 hover:bg-pink-500/20 hover:border-pink-400 bg-black/20 backdrop-blur-sm"
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
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-lg shadow-cyan-500/30"
                      : "bg-gradient-to-r from-pink-500 to-purple-600 text-white border-pink-400 shadow-lg shadow-pink-500/30"
                    : "border-slate-500/30 text-slate-300 hover:bg-slate-500/20 hover:border-slate-400 bg-black/20 backdrop-blur-sm"
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
            <div className="space-y-8 animate-on-scroll">
              <Card className={`border ${activeExperience === "alternance" ? "border-cyan-500/30" : "border-pink-500/30"} shadow-2xl bg-black/20 backdrop-blur-xl`}>
                <CardContent className="p-12">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className={`text-4xl font-bold bg-gradient-to-r ${activeExperience === "alternance" ? "from-cyan-400 to-blue-400" : "from-pink-400 to-purple-400"} bg-clip-text text-transparent`}>
                      {currentDetails.overview.type === "Alternance" ? "Alternance" : "Stage"} - Vue d'Ensemble
                    </h3>
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${activeExperience === "alternance" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" : "bg-pink-500/20 text-pink-300 border border-pink-500/30"}`}>
                      {currentDetails.overview.type}
                    </span>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                      <h4 className={`text-2xl font-bold ${activeExperience === "alternance" ? "text-cyan-400" : "text-pink-400"} mb-6`}>Informations Generales</h4>
                      <div className="space-y-4">
                        {[
                          { icon: Building2, label: "Entreprise", value: currentDetails.overview.entreprise },
                          { icon: User, label: "Poste", value: currentDetails.overview.poste },
                          { icon: Calendar, label: "Duree", value: currentDetails.overview.duree },
                          { icon: MapPin, label: "Lieu", value: currentDetails.overview.lieu },
                          ...(activeExperience === "alternance" && alternanceDetails.overview.tutrice
                            ? [{ icon: Users, label: "Tutrice", value: alternanceDetails.overview.tutrice }]
                            : []),
                        ].map((item, index) => (
                          <div
                            key={index}
                            className={`group p-4 bg-gradient-to-r ${activeExperience === "alternance" ? "from-slate-800/50 to-blue-900/50 border-cyan-500/20 hover:border-cyan-400/50" : "from-slate-800/50 to-purple-900/50 border-pink-500/20 hover:border-pink-400/50"} rounded-lg border transition-all duration-300`}
                          >
                            <div className="flex items-center">
                              <item.icon className={`w-6 h-6 ${activeExperience === "alternance" ? "text-cyan-400" : "text-pink-400"} mr-4 group-hover:animate-pulse`} />
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
                      <h4 className={`text-2xl font-bold ${activeExperience === "alternance" ? "text-cyan-400" : "text-pink-400"} mb-6`}>Structure Organisationnelle</h4>
                      <div className="space-y-4">
                        <div className={`bg-gradient-to-br ${activeExperience === "alternance" ? "from-cyan-500/10 to-blue-500/10 border-cyan-500/30" : "from-pink-500/10 to-purple-500/10 border-pink-500/30"} p-4 rounded-xl border`}>
                          <h5 className={`font-bold ${activeExperience === "alternance" ? "text-blue-400" : "text-pink-400"} mb-2`}>Service</h5>
                          <p className="text-slate-200 text-sm">{currentDetails.overview.service}</p>
                        </div>
                        <div className={`bg-gradient-to-br ${activeExperience === "alternance" ? "from-blue-500/10 to-indigo-500/10 border-blue-500/30" : "from-purple-500/10 to-pink-500/10 border-purple-500/30"} p-4 rounded-xl border`}>
                          <h5 className={`font-bold ${activeExperience === "alternance" ? "text-indigo-400" : "text-purple-400"} mb-2`}>Departement</h5>
                          <p className="text-slate-200 text-sm">{currentDetails.overview.departement}</p>
                        </div>
                        <div className={`bg-gradient-to-br ${activeExperience === "alternance" ? "from-indigo-500/10 to-purple-500/10 border-indigo-500/30" : "from-rose-500/10 to-pink-500/10 border-rose-500/30"} p-4 rounded-xl border`}>
                          <h5 className={`font-bold ${activeExperience === "alternance" ? "text-purple-400" : "text-rose-400"} mb-2`}>Direction</h5>
                          <p className="text-slate-200 text-sm">{currentDetails.overview.direction}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Section Contexte */}
          {activeSection === "context" && (
            <div className="space-y-8 animate-on-scroll">
              <Card className={`border ${activeExperience === "alternance" ? "border-cyan-500/30" : "border-pink-500/30"} shadow-2xl bg-black/20 backdrop-blur-xl`}>
                <CardContent className="p-12">
                  <h3 className={`text-4xl font-bold bg-gradient-to-r ${activeExperience === "alternance" ? "from-cyan-400 to-blue-400" : "from-pink-400 to-purple-400"} bg-clip-text text-transparent mb-8 text-center`}>
                    {currentDetails.context.title}
                  </h3>

                  <div className="mb-12">
                    <p className="text-slate-200 text-lg leading-relaxed mb-8">{currentDetails.context.description}</p>
                    
                    {activeExperience === "alternance" && alternanceDetails.context.evolution && (
                      <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border border-cyan-500/30 mb-6">
                        <h4 className="text-xl font-bold text-cyan-400 mb-3">Evolution du role</h4>
                        <p className="text-slate-200">{alternanceDetails.context.evolution}</p>
                      </div>
                    )}

                    {activeExperience === "alternance" && alternanceDetails.context.objectif && (
                      <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-6 rounded-xl border border-blue-500/30">
                        <h4 className="text-xl font-bold text-blue-400 mb-3">Objectif principal</h4>
                        <p className="text-slate-200">{alternanceDetails.context.objectif}</p>
                      </div>
                    )}
                  </div>

                  {activeExperience === "stage" && stageDetails.context.division && (
                    <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 p-8 rounded-xl border border-pink-500/30">
                      <h4 className="text-2xl font-bold text-pink-400 mb-6">{stageDetails.context.division.name}</h4>
                      <p className="text-slate-200 mb-6">{stageDetails.context.division.role}</p>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h5 className="font-bold text-slate-200 mb-3">Referentiels geres :</h5>
                          <ul className="space-y-2">
                            {stageDetails.context.division.responsabilites.map((resp, index) => (
                              <li key={index} className="flex items-start">
                                <Database className="w-4 h-4 text-pink-400 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-slate-300 text-sm">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-200 mb-3">Activites quotidiennes :</h5>
                          <ul className="space-y-2">
                            {stageDetails.context.division.activites.map((activite, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-slate-300 text-sm">{activite}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Section Missions */}
          {activeSection === "missions" && (
            <div className="space-y-8 animate-on-scroll">
              {currentDetails.missions.map((mission, index) => (
                <Card key={index} className={`border ${activeExperience === "alternance" ? "border-cyan-500/30" : "border-pink-500/30"} shadow-2xl bg-black/20 backdrop-blur-xl`}>
                  <CardContent className="p-10">
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${mission.color} rounded-xl flex items-center justify-center mr-6`}
                      >
                        <mission.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold ${activeExperience === "alternance" ? "text-cyan-400" : "text-pink-400"} mb-2`}>{mission.title}</h3>
                        <p className="text-slate-300">{mission.description}</p>
                      </div>
                    </div>

                    <div className={`bg-gradient-to-r ${activeExperience === "alternance" ? "from-slate-800/50 to-blue-900/50 border-cyan-500/20" : "from-slate-800/50 to-purple-900/50 border-pink-500/20"} p-6 rounded-xl border`}>
                      <p className="text-slate-200 leading-relaxed">{mission.details}</p>
                    </div>

                    {/* Details techniques pour l'alternance */}
                    {activeExperience === "alternance" && "techDetails" in mission && mission.techDetails && (
                      <div className="mt-6 grid md:grid-cols-2 gap-4">
                        {mission.techDetails.map((detail, idx) => (
                          <div key={idx} className="flex items-center p-3 bg-cyan-900/20 rounded-lg border border-cyan-500/20">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Section Competences */}
          {activeSection === "competences" && (
            <div className="space-y-8 animate-on-scroll">
              <Card className={`border ${activeExperience === "alternance" ? "border-cyan-500/30" : "border-pink-500/30"} shadow-2xl bg-black/20 backdrop-blur-xl`}>
                <CardContent className="p-12">
                  <h3 className={`text-4xl font-bold bg-gradient-to-r ${activeExperience === "alternance" ? "from-cyan-400 to-blue-400" : "from-pink-400 to-purple-400"} bg-clip-text text-transparent mb-8 text-center`}>
                    Competences Developpees
                  </h3>

                  <div className="space-y-6">
                    {currentDetails.competences.map((competence, index) => (
                      <div
                        key={index}
                        className={`flex items-start p-6 bg-gradient-to-r ${activeExperience === "alternance" ? "from-slate-800/50 to-blue-900/50 border-cyan-500/20" : "from-slate-800/50 to-purple-900/50 border-pink-500/20"} rounded-xl border`}
                      >
                        <Star className="w-6 h-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                        <p className="text-slate-200 leading-relaxed">{competence}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Section Bilan */}
          {activeSection === "bilan" && (
            <div className="space-y-8 animate-on-scroll">
              <Card className={`border ${activeExperience === "alternance" ? "border-cyan-500/30" : "border-pink-500/30"} shadow-2xl bg-black/20 backdrop-blur-xl`}>
                <CardContent className="p-12">
                  <h3 className={`text-4xl font-bold bg-gradient-to-r ${activeExperience === "alternance" ? "from-cyan-400 to-blue-400" : "from-pink-400 to-purple-400"} bg-clip-text text-transparent mb-8 text-center`}>
                    {currentDetails.bilan.title}
                  </h3>

                  <div className="space-y-8">
                    <div className={`bg-gradient-to-r ${activeExperience === "alternance" ? "from-blue-500/10 to-indigo-500/10 border-blue-500/30" : "from-pink-500/10 to-purple-500/10 border-pink-500/30"} p-8 rounded-xl border`}>
                      <p className="text-slate-200 text-lg leading-relaxed">{currentDetails.bilan.description}</p>
                    </div>

                    <div className={`bg-gradient-to-r ${activeExperience === "alternance" ? "from-cyan-500/10 to-blue-500/10 border-cyan-500/30" : "from-rose-500/10 to-pink-500/10 border-rose-500/30"} p-8 rounded-xl border`}>
                      <h4 className={`text-xl font-bold ${activeExperience === "alternance" ? "text-cyan-400" : "text-rose-400"} mb-4`}>Impact</h4>
                      <p className="text-slate-200 leading-relaxed">{currentDetails.bilan.impact}</p>
                    </div>

                    <div className={`relative p-8 rounded-xl ${activeExperience === "alternance" ? "bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30" : "bg-gradient-to-r from-pink-900/30 to-purple-900/30 border border-pink-500/30"}`}>
                      <div className="absolute -top-4 left-8">
                        <div className={`w-8 h-8 ${activeExperience === "alternance" ? "bg-cyan-500" : "bg-pink-500"} rounded-full flex items-center justify-center`}>
                          <Heart className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <blockquote className="text-xl italic text-slate-200 leading-relaxed pl-4 border-l-4 border-current" style={{ borderColor: activeExperience === "alternance" ? "#22d3ee" : "#ec4899" }}>
                        "{currentDetails.bilan.quote}"
                      </blockquote>
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
