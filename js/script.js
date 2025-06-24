document.addEventListener("DOMContentLoaded", () => {
  // Écran de chargement
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen")
    loadingScreen.classList.add("hidden")
    setTimeout(() => {
      loadingScreen.style.display = "none"
    }, 500)
  }, 1500)

  // Créer les particules flottantes
  createParticles()

  // Initialiser le split-screen
  initSplitScreen()

  // Initialiser le carrousel À propos
  initAboutCarousel()

  // Initialiser la navigation
  initNavigation()

  // Initialiser les modales
  initModals()

  // Initialiser l'effet de parallaxe avec la souris
  initMouseParallax()

  // Initialiser les animations au scroll
  initScrollAnimations()
})

// Création des particules flottantes
function createParticles() {
  const container = document.querySelector(".particles-container")
  const particleCount = 20

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("i")
    particle.className = "fas fa-heart particle"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"
    particle.style.fontSize = Math.random() * 20 + 10 + "px"
    particle.style.animationDelay = Math.random() * 5 + "s"
    particle.style.animationDuration = 3 + Math.random() * 4 + "s"
    container.appendChild(particle)
  }
}

// Initialisation du split-screen interactif
function initSplitScreen() {
  const splitScreen = document.getElementById("split-screen")
  const splitLeft = document.getElementById("split-left")
  const splitSlider = document.querySelector(".split-slider")
  let isMouseDown = false
  let splitPosition = 50

  function updateSplit(percentage) {
    splitPosition = Math.max(10, Math.min(90, percentage))
    splitLeft.style.clipPath = `inset(0 ${100 - splitPosition}% 0 0)`
    splitSlider.style.left = splitPosition + "%"
  }

  splitScreen.addEventListener("mousedown", (e) => {
    isMouseDown = true
    splitScreen.style.cursor = "ew-resize"
  })

  splitScreen.addEventListener("mousemove", (e) => {
    if (isMouseDown || e.type === "mousemove") {
      const rect = splitScreen.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = (x / rect.width) * 100

      if (isMouseDown) {
        updateSplit(percentage)
      }
    }
  })

  document.addEventListener("mouseup", () => {
    isMouseDown = false
    splitScreen.style.cursor = "ew-resize"
  })

  splitScreen.addEventListener("mouseleave", () => {
    isMouseDown = false
    splitScreen.style.cursor = "ew-resize"
  })

  // Touch events pour mobile
  splitScreen.addEventListener("touchstart", (e) => {
    isMouseDown = true
    e.preventDefault()
  })

  splitScreen.addEventListener("touchmove", (e) => {
    if (isMouseDown) {
      const rect = splitScreen.getBoundingClientRect()
      const x = e.touches[0].clientX - rect.left
      const percentage = (x / rect.width) * 100
      updateSplit(percentage)
      e.preventDefault()
    }
  })

  splitScreen.addEventListener("touchend", () => {
    isMouseDown = false
  })
}

// Initialisation du carrousel À propos
function initAboutCarousel() {
  const slides = document.querySelectorAll(".about-slide")
  const dots = document.querySelectorAll(".carousel-dots .dot")
  const prevArrow = document.querySelector(".prev-arrow")
  const nextArrow = document.querySelector(".next-arrow")
  let currentSlide = 0

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active")
      dots[i].classList.remove("active")
    })

    slides[index].classList.add("active")
    dots[index].classList.add("active")
    currentSlide = index
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length
    showSlide(next)
  }

  function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length
    showSlide(prev)
  }

  // Event listeners
  nextArrow.addEventListener("click", nextSlide)
  prevArrow.addEventListener("click", prevSlide)

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index))
  })

  // Auto-play (optionnel)
  setInterval(nextSlide, 5000)
}

// Initialisation de la navigation
function initNavigation() {
  const navItems = document.querySelectorAll(".nav-item")
  const sections = document.querySelectorAll("section[id]")

  // Smooth scrolling pour les liens internes
  navItems.forEach((item) => {
    if (item.getAttribute("href").startsWith("#")) {
      item.addEventListener("click", function (e) {
        e.preventDefault()
        const targetId = this.getAttribute("href")
        const targetSection = document.querySelector(targetId)

        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 80
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })
        }
      })
    }
  })

  // Mise à jour de la navigation active au scroll
  function updateActiveNav() {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.clientHeight

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id")
      }
    })

    navItems.forEach((item) => {
      item.classList.remove("active")
      if (item.getAttribute("href") === "#" + current) {
        item.classList.add("active")
      }
    })
  }

  window.addEventListener("scroll", updateActiveNav)
}

// Initialisation des modales
function initModals() {
  const modalOverlay = document.getElementById("modal-overlay")
  const modal = document.getElementById("project-modal")
  const closeModal = document.getElementById("close-modal")
  const modalTitle = document.getElementById("modal-title")
  const modalDescription = document.getElementById("modal-description")
  const modalSkillsList = document.getElementById("modal-skills-list")

  const projectData = {
    S103: {
      title: "S103 – Tableau de données",
      description: "Création d'un tableau de bord interactif sous Excel à partir de données brutes.",
      skills: [
        "Structuration de données avec Excel / PowerQuery",
        "Tableaux croisés dynamiques et graphiques",
        "Visualisation filtrée et mise en forme claire",
      ],
    },
    S201: {
      title: "S201 – Base de données festivals",
      description: "Création d'une base de données sur les festivals en France.",
      skills: [
        "Modélisation entités-associations et schéma relationnel",
        "SQL (création, insertion, requêtes)",
        "PostgreSQL & Metabase/Tableau",
      ],
    },
    S206: {
      title: "S206 – Analyse & dataviz",
      description: "Étude sur le marché du rapatriement sanitaire.",
      skills: [
        "Nettoyage et analyse Python / Jupyter",
        "Visualisation graphique et cartes",
        "Travail en équipe et communication",
      ],
    },
    S301: {
      title: "S301 – Enquête alimentaire",
      description: "Réalisation d'une enquête terrain avec échantillonnage stratifié.",
      skills: [
        "Formulation d'hypothèses",
        "Élaboration du questionnaire",
        "Échantillonnage et post-stratification",
        "Modélisation et visualisation",
      ],
    },
  }

  // Ouvrir les modales
  document.querySelectorAll(".sae-card").forEach((card) => {
    card.addEventListener("click", function () {
      const projectId = this.getAttribute("data-project")
      const project = projectData[projectId]

      if (project) {
        modalTitle.textContent = project.title
        modalDescription.innerHTML = `<strong>Sujet :</strong> ${project.description}`

        modalSkillsList.innerHTML = ""
        project.skills.forEach((skill) => {
          const li = document.createElement("li")
          li.textContent = "• " + skill
          modalSkillsList.appendChild(li)
        })

        modalOverlay.classList.add("active")
        modal.classList.add("active")
        document.body.style.overflow = "hidden"
      }
    })
  })

  // Fermer les modales
  function closeModalFunction() {
    modalOverlay.classList.remove("active")
    modal.classList.remove("active")
    document.body.style.overflow = ""
  }

  closeModal.addEventListener("click", closeModalFunction)

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModalFunction()
    }
  })

  // Fermer avec Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModalFunction()
    }
  })
}

// Initialisation de l'effet de parallaxe avec la souris
function initMouseParallax() {
  const parallaxElement = document.querySelector(".mouse-parallax")

  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) * 100
    const y = (e.clientY / window.innerHeight) * 100

    parallaxElement.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)`
  })
}

// Initialisation des animations au scroll
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up")
      }
    })
  }, observerOptions)

  // Observer les éléments animables
  const animatedElements = document.querySelectorAll(".value-card, .skill-card, .passion-card, .force-card, .sae-card")
  animatedElements.forEach((element) => {
    observer.observe(element)
  })
}

// Effets de glow sur les boutons
document.addEventListener("DOMContentLoaded", () => {
  const glowButtons = document.querySelectorAll(".sae-badge, .btn-projects, .btn-stage, .btn-cv")

  glowButtons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.boxShadow = "0 0 20px rgba(236, 72, 153, 0.5)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.boxShadow = ""
    })
  })
})

// Smooth scrolling pour tous les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})
