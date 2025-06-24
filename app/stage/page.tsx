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
} from "lucide-react"
import Link from "next/link"

export default function StageDetailPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Informations complètes du stage mis à jour
  const stageDetails = {
    overview: {
      entreprise: "Banque de France",
      poste: "Assistante – Division Données, Recherches et Référentiels (D2R2)",
      duree: "Avril - Août 2025 (5 mois)",
      lieu: "Paris, France",
      encadrant: "Dr. Sophie Martin",
      service: "Service de Gestion et d'Administration des Moyens de Paiement (SGAM)",
      departement: "Département des Services Bancaires (DSB)",
      direction: "Direction Générale des Services aux Opérations (DGSO)",
    },

    context: {
      title: "La Banque de France et la Division D2R2",
      description:
        "La Banque de France est la banque centrale du pays : elle veille à la stabilité monétaire, supervise les établissements bancaires et gère d'importants référentiels nationaux indispensables au fonctionnement du secteur financier.",
      division: {
        name: "Division Données, Recherches et Référentiels (D2R2)",
        role: "La D2R2 joue un rôle essentiel dans la gestion, la qualité et la diffusion des bases de données bancaires françaises.",
        responsabilites: [
          "Le Fichier des Établissements et Guichets Agréés (FEGA), qui recense tous les établissements de crédit et leurs guichets",
          "Les Fichiers des Guichets Domiciliataires (FGD), utilisés pour valider les coordonnées bancaires dans les paiements nationaux et européens (SEPA)",
        ],
        activites: [
          "Collecte et mise à jour des référentiels",
          "Contrôle de la qualité des données transmises par les banques",
          "Rédaction et actualisation de la documentation destinée aux clients institutionnels",
          "Accompagnement de l'évolution des outils numériques (ex : préparation à la mise en place d'un nouveau CRM)",
        ],
      },
    },

    missions: [
      {
        title: "Mise à jour et contrôle des fichiers clients",
        description: "Gestion et fiabilisation des référentiels clients avec vérification de la complétude des données",
        details:
          "J'ai régulièrement mis à jour et contrôlé les tableaux Excel contenant les informations clients et abonnés. Cela impliquait la vérification de la complétude des données, la correction des erreurs signalées, et le suivi des modifications à apporter dans les référentiels nationaux.",
        icon: Database,
        color: "from-blue-400 to-indigo-600",
      },
      {
        title: "Organisation d'un publipostage à grande échelle",
        description:
          "Campagne de publipostage avec génération et envoi de courriers personnalisés à plus de 400 clients",
        details:
          "J'ai participé à l'organisation et à la gestion d'une campagne de publipostage, avec la génération et l'envoi de courriers personnalisés à plus de 400 clients abonnés des fichiers FEGA/FGD. Cette opération visait à actualiser les données et à recueillir des informations indispensables à la conformité réglementaire.",
        icon: Mail,
        color: "from-green-400 to-emerald-600",
      },
      {
        title: "Suivi téléphonique des clients",
        description: "Contact personnalisé avec les clients pour compléter et vérifier leurs informations",
        details:
          "Suite au publipostage, j'ai pris contact par téléphone avec les clients n'ayant pas répondu, afin de compléter, vérifier ou rectifier leurs informations. Ce suivi personnalisé a permis de fiabiliser les référentiels et d'améliorer la communication avec les abonnés.",
        icon: Phone,
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-purple-400 to-pink-600",
        color: "from-orange-400 to-red-600",
      },
      {
        title: "Développement d'un outil Python pour le contrôle qualité",
        description: "Application Streamlit pour automatiser le nettoyage des fichiers clients",
        details:
          "Pour faciliter le traitement des listes clients, j'ai développé une application simple en Python (via Streamlit) permettant de sélectionner une colonne dans un fichier Excel ou CSV, et d'en supprimer automatiquement les doublons. Cet outil a été mis à disposition de l'équipe et a simplifié le nettoyage des fichiers lors des mises à jour massives.",
        icon: Zap,
        color: "from-cyan-400 to-blue-600",
      },
    ],

    competences: [
      "Gestion de bases de données sous Excel et contrôle qualité des informations",
      "Organisation de campagnes de publipostage et gestion du suivi client",
      "Communication professionnelle, aussi bien écrite (courriers, documentation) qu'orale (appels clients)",
      "Automatisation de tâches avec Python et Streamlit",
      "Rigueur administrative et gestion documentaire dans un environnement institutionnel",
    ],

    bilan: {
      title: "Une expérience enrichissante au cœur du système bancaire français",
      description:
        "Intégrer la Banque de France et le D2R2 m'a permis de mieux comprendre l'importance de la qualité des référentiels bancaires pour la sécurité du système financier national. J'ai pu allier gestion administrative, relation client et automatisation, tout en travaillant dans un cadre exigeant et structuré.",
      impact:
        "Cette expérience m'a donné l'opportunité d'apporter une vraie valeur ajoutée à l'équipe, de gagner en autonomie et de mettre en pratique mes compétences en gestion de données et en développement.",
      quote:
        "Ce stage m'a permis de lier gestion administrative, relation client et automatisation, tout en participant à la fiabilisation de référentiels bancaires essentiels pour la Banque de France.",
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

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
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

      {/* Header */}
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
              5 mois d'innovation au service de la stabilité monétaire française • Data Science × Économie × Impact
              National
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-8 py-12">
        {/* Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: "overview", label: "Vue d'ensemble", icon: Eye },
              { id: "context", label: "Contexte", icon: Building2 },
              { id: "missions", label: "Missions", icon: Target },
              { id: "competences", label: "Compétences", icon: Brain },
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
                          { icon: Users, label: "Encadrante", value: stageDetails.overview.encadrant },
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
                      <h4 className="text-2xl font-bold text-cyan-400 mb-6">Structure Organisationnelle</h4>
                      <div className="space-y-4">
                        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-4 rounded-xl border border-cyan-500/30">
                          <h5 className="font-bold text-blue-400 mb-2">Service</h5>
                          <p className="text-slate-200 text-sm">{stageDetails.overview.service}</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-4 rounded-xl border border-blue-500/30">
                          <h5 className="font-bold text-indigo-400 mb-2">Département</h5>
                          <p className="text-slate-200 text-sm">{stageDetails.overview.departement}</p>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-4 rounded-xl border border-indigo-500/30">
                          <h5 className="font-bold text-purple-400 mb-2">Direction</h5>
                          <p className="text-slate-200 text-sm">{stageDetails.overview.direction}</p>
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
            <div className="space-y-8 animate-fadeIn">
              <Card className="border border-cyan-500/30 shadow-2xl bg-slate-900/80 backdrop-blur-lg">
                <CardContent className="p-12">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8 text-center">
                    {stageDetails.context.title}
                  </h3>

                  <div className="mb-12">
                    <p className="text-slate-200 text-lg leading-relaxed mb-8">{stageDetails.context.description}</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 p-8 rounded-xl border border-blue-500/30">
                    <h4 className="text-2xl font-bold text-blue-400 mb-6">{stageDetails.context.division.name}</h4>
                    <p className="text-slate-200 mb-6">{stageDetails.context.division.role}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-bold text-slate-200 mb-3">Référentiels gérés :</h5>
                        <ul className="space-y-2">
                          {stageDetails.context.division.responsabilites.map((resp, index) => (
                            <li key={index} className="flex items-start">
                              <Database className="w-4 h-4 text-cyan-400 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-slate-300 text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-200 mb-3">Activités quotidiennes :</h5>
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
                </CardContent>
              </Card>
            </div>
          )}

          {/* Section Missions */}
          {activeSection === "missions" && (
            <div className="space-y-8 animate-fadeIn">
              {stageDetails.missions.map((mission, index) => (
                <Card key={index} className="border border-cyan-500/30 shadow-2xl bg-slate-900/80 backdrop-blur-lg">
                  <CardContent className="p-10">
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${mission.color} rounded-xl flex items-center justify-center mr-6`}
                      >
                        <mission.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-2">{mission.title}</h3>
                        <p className="text-slate-300">{mission.description}</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/50 p-6 rounded-xl border border-cyan-500/20">
                      <p className="text-slate-200 leading-relaxed">{mission.details}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Section Compétences */}
          {activeSection === "competences" && (
            <div className="space-y-8 animate-fadeIn">
              <Card className="border border-cyan-500/30 shadow-2xl bg-slate-900/80 backdrop-blur-lg">
                <CardContent className="p-12">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8 text-center">
                    Compétences Développées
                  </h3>

                  <div className="space-y-6">
                    {stageDetails.competences.map((competence, index) => (
                      <div
                        key={index}
                        className="flex items-start p-6 bg-gradient-to-r from-slate-800/50 to-blue-900/50 rounded-xl border border-cyan-500/20"
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
            <div className="space-y-8 animate-fadeIn">
              <Card className="border border-cyan-500/30 shadow-2xl bg-slate-900/80 backdrop-blur-lg">
                <CardContent className="p-12">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8 text-center">
                    {stageDetails.bilan.title}
                  </h3>

                  <div className="space-y-8">
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-8 rounded-xl border border-blue-500/30">
                      <p className="text-slate-200 text-lg leading-relaxed mb-6">{stageDetails.bilan.description}</p>
                      <p className="text-slate-200 text-lg leading-relaxed">{stageDetails.bilan.impact}</p>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 rounded-xl border border-cyan-500/30 text-center">
                      <div className="flex items-center justify-center mb-4">
                        <Heart className="w-8 h-8 text-pink-400 mr-3" />
                        <h4 className="text-2xl font-bold text-cyan-400">Témoignage Personnel</h4>
                        <Heart className="w-8 h-8 text-pink-400 ml-3" />
                      </div>
                      <blockquote className="text-slate-200 text-xl italic leading-relaxed">
                        "{stageDetails.bilan.quote}"
                      </blockquote>
                      <cite className="text-cyan-400 font-semibold mt-4 block">— Marie Samake</cite>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Bouton retour */}
        <div className="text-center mt-16">
          <Link href="/">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour au portfolio
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
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
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
