/* ==========================================================================
   ATELIER NORTE — Interactive Portfolio, Modal, Accordion & Form Logic
   ========================================================================== */

(() => {
  'use strict';

  /* ------------------------------------------------------------------------
     1. Curated Architectural Projects Data
     ------------------------------------------------------------------------ */
  const PROJECTS = [
    {
      id: 'casa-bruma',
      title: 'Casa Bruma',
      category: 'residencial',
      categoryLabel: 'Residencial',
      location: 'Valle de Bravo, MX',
      year: '2025',
      area: '480 m²',
      materials: 'Concreto visto, roble blanco, acero negro',
      program: 'Residencia unifamiliar',
      description:
        'Implantada entre pinos y niebla matinal, Casa Bruma articula dos volúmenes de concreto pigmentado unidos por un patio interior que filtra la luz cenital durante todo el día.',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
      alt: 'Fachada minimalista de Casa Bruma en concreto visto y grandes ventanales',
      gridClass: 'md:col-span-7',
      aspectClass: 'aspect-[16/10]',
    },
    {
      id: 'galeria-monolito',
      title: 'Galería Monolito',
      category: 'comercial',
      categoryLabel: 'Comercial',
      location: 'Roma Norte, CDMX',
      year: '2024',
      area: '320 m²',
      materials: 'Estuco mineral, travertino apomazado, vidrio acústico',
      program: 'Galería de arte contemporáneo',
      description:
        'Espacio expositivo de geometría ortogonal pura donde los muros neutros de cal mineral y la iluminación difusa ceden todo el protagonismo a las piezas escultóricas.',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
      alt: 'Interior amplio de galería minimalista con luz natural y líneas puras',
      gridClass: 'md:col-span-5',
      aspectClass: 'aspect-[4/5]',
    },
    {
      id: 'loft-estuario',
      title: 'Loft Estuario',
      category: 'interiorismo',
      categoryLabel: 'Interiorismo',
      location: 'Polanco, CDMX',
      year: '2024',
      area: '215 m²',
      materials: 'Nogal americano, piedra caliza, lino belga',
      program: 'Interiorismo residencial',
      description:
        'Rehabilitación interior de un departamento de los años setenta. Una celosía continua de nogal organiza almacenamiento, cocina oculta y transición hacia la estancia principal.',
      image:
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      alt: 'Sala minimalista en madera cálida, piedra natural y mobiliario sobrio',
      gridClass: 'md:col-span-5',
      aspectClass: 'aspect-[4/5]',
    },
    {
      id: 'pabellon-silencio',
      title: 'Pabellón del Silencio',
      category: 'residencial',
      categoryLabel: 'Residencial',
      location: 'Tepoztlán, Morelos',
      year: '2023',
      area: '390 m²',
      materials: 'Piedra volcánica local, concreto aparente, cedro rojo',
      program: 'Casa de retiro y estudio',
      description:
        'Un basamento pétreo ancla la vivienda a la ladera rocosa, permitiendo que una cubierta ligera de concreto vuele sobre la terraza abierta hacia la montaña.',
      image:
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85',
      alt: 'Pabellón arquitectónico contemporáneo rodeado de vegetación con luz natural',
      gridClass: 'md:col-span-7',
      aspectClass: 'aspect-[16/10]',
    },
    {
      id: 'atelier-kanso',
      title: 'Showroom Kanso',
      category: 'comercial',
      categoryLabel: 'Comercial',
      location: 'San Pedro, Monterrey',
      year: '2023',
      area: '410 m²',
      materials: 'Concreto pulido, fresno teñido, latón cepillado',
      program: 'Boutique y estudio de diseño',
      description:
        'Recorrido secuencial de plataformas a distintos niveles que exhiben mobiliario de autor bajo una retícula de lucernarios norte-sur sin deslumbramiento.',
      image:
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85',
      alt: 'Espacio comercial contemporáneo con doble altura, concreto y madera',
      gridClass: 'md:col-span-8',
      aspectClass: 'aspect-[16/9]',
    },
    {
      id: 'departamento-alameda',
      title: 'Departamento Alameda',
      category: 'interiorismo',
      categoryLabel: 'Interiorismo',
      location: 'Madrid, ES',
      year: '2025',
      area: '165 m²',
      materials: 'Roble natural, microcemento, mármol travertino',
      program: 'Reforma interior integral',
      description:
        'Intervención silenciosa que recupera la altura libre original y baña la zona de día con luz de mañana mediante vanos abocinados en tonos piedra.',
      image:
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
      alt: 'Interior minimalista luminoso con tonos piedra y madera clara',
      gridClass: 'md:col-span-4',
      aspectClass: 'aspect-[4/5]',
    },
  ];

  /* ------------------------------------------------------------------------
     2. Header Scroll State & Mobile Navigation
     ------------------------------------------------------------------------ */
  const header = document.getElementById('site-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const updateHeaderState = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  window.addEventListener('scroll', updateHeaderState, { passive: true });
  updateHeaderState();

  const toggleMobileMenu = (forceClose = false) => {
    if (!mobileMenuBtn || !mobileMenu) return;
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    const nextState = forceClose ? false : !isExpanded;
    mobileMenuBtn.setAttribute('aria-expanded', String(nextState));
    mobileMenuBtn.setAttribute(
      'aria-label',
      nextState ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
    );
    mobileMenu.classList.toggle('hidden', !nextState);
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => toggleMobileMenu(false));
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMobileMenu(true));
  });

  /* ------------------------------------------------------------------------
     3. Portfolio Rendering & Category Filtering
     ------------------------------------------------------------------------ */
  const projectsGrid = document.getElementById('projects-grid');
  const projectsCount = document.getElementById('projects-count');
  const filterButtons = document.querySelectorAll('.filter-btn');
  let activeFilter = 'todos';
  let lastFocusedTrigger = null;

  const renderProjects = (filter) => {
    if (!projectsGrid) return;
    const filtered =
      filter === 'todos'
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === filter);

    if (projectsCount) {
      projectsCount.textContent =
        filtered.length === 1
          ? 'Mostrando 1 proyecto'
          : `Mostrando ${filtered.length} proyectos`;
    }

    projectsGrid.innerHTML = filtered
      .map((project, index) => {
        // Adjust grid spans cleanly when filtered so cards remain balanced
        const spanClass =
          filter === 'todos'
            ? project.gridClass
            : index % 2 === 0
              ? 'md:col-span-6'
              : 'md:col-span-6';
        const aspectClass =
          filter === 'todos' ? project.aspectClass : 'aspect-[4/3]';

        return `
          <article class="project-card group ${spanClass}">
            <button
              type="button"
              class="project-trigger block w-full text-left focus-visible:outline-2"
              data-project-id="${project.id}"
              aria-label="Ver ficha técnica de ${project.title}, ${project.location}, ${project.area}"
            >
              <div class="project-card-media ${aspectClass} border border-border">
                <img
                  src="${project.image}"
                  alt="${project.alt}"
                  class="project-card-img h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div class="mt-4 flex items-baseline justify-between gap-4 border-b border-border pb-3">
                <div>
                  <span class="block text-[11px] font-medium tracking-[0.15em] text-accent uppercase">
                    ${project.categoryLabel}
                  </span>
                  <h3 class="font-editorial mt-1 text-2xl font-normal text-fg transition-colors duration-200 group-hover:text-accent md:text-3xl">
                    ${project.title}
                  </h3>
                </div>
                <span class="inline-flex min-h-[44px] items-center text-xs tracking-[0.12em] text-muted-fg uppercase group-hover:text-fg">
                  Ficha →
                </span>
              </div>
              <dl class="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-fg">
                <div>
                  <dt class="sr-only">Ubicación</dt>
                  <dd>${project.location}</dd>
                </div>
                <div class="flex items-center gap-4 tabular-nums">
                  <div>
                    <dt class="sr-only">Año</dt>
                    <dd>${project.year}</dd>
                  </div>
                  <span aria-hidden="true">·</span>
                  <div>
                    <dt class="sr-only">Superficie</dt>
                    <dd>${project.area}</dd>
                  </div>
                </div>
              </dl>
            </button>
          </article>
        `;
      })
      .join('');

    // Attach modal open listeners
    projectsGrid.querySelectorAll('.project-trigger').forEach((btn) => {
      btn.addEventListener('click', () => {
        const project = PROJECTS.find((p) => p.id === btn.dataset.projectId);
        if (project) openModal(project, btn);
      });
    });
  };

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const nextFilter = btn.dataset.filter || 'todos';
      if (nextFilter === activeFilter) return;
      activeFilter = nextFilter;

      filterButtons.forEach((b) =>
        b.setAttribute('aria-pressed', String(b === btn))
      );
      renderProjects(activeFilter);
    });
  });

  renderProjects(activeFilter);

  /* ------------------------------------------------------------------------
     4. Accessible Project Technical Sheet Modal (with Focus Trap)
     ------------------------------------------------------------------------ */
  const modal = document.getElementById('project-modal');
  const modalPanel = document.getElementById('modal-panel');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCtaLink = document.getElementById('modal-cta-link');

  const modalFields = {
    category: document.getElementById('modal-category'),
    title: document.getElementById('modal-title'),
    description: document.getElementById('modal-description'),
    image: document.getElementById('modal-image'),
    location: document.getElementById('modal-location'),
    year: document.getElementById('modal-year'),
    area: document.getElementById('modal-area'),
    materials: document.getElementById('modal-materials'),
    program: document.getElementById('modal-program'),
  };

  const getFocusableElements = (container) =>
    Array.from(
      container.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
    );

  const openModal = (project, triggerElement) => {
    if (!modal || !modalPanel) return;
    lastFocusedTrigger = triggerElement || document.activeElement;

    modalFields.category.textContent = project.categoryLabel;
    modalFields.title.textContent = project.title;
    modalFields.description.textContent = project.description;
    modalFields.image.src = project.image;
    modalFields.image.alt = project.alt;
    modalFields.location.textContent = project.location;
    modalFields.year.textContent = project.year;
    modalFields.area.textContent = project.area;
    modalFields.materials.textContent = project.materials;
    modalFields.program.textContent = project.program;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (modalCloseBtn) {
      modalCloseBtn.focus();
    }
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      lastFocusedTrigger.focus();
      lastFocusedTrigger = null;
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalCtaLink) {
    modalCtaLink.addEventListener('click', () => {
      closeModal();
    });
  }

  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (!modal || modal.getAttribute('aria-hidden') === 'true') return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
      return;
    }

    if (event.key === 'Tab' && modalPanel) {
      const focusables = getFocusableElements(modalPanel);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  /* ------------------------------------------------------------------------
     5. Services Accordion
     ------------------------------------------------------------------------ */
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');

  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const panelId = trigger.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      if (!panel) return;

      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Close other open items for clean editorial rhythm
      accordionTriggers.forEach((otherTrigger) => {
        if (otherTrigger === trigger) return;
        const otherPanelId = otherTrigger.getAttribute('aria-controls');
        const otherPanel = otherPanelId
          ? document.getElementById(otherPanelId)
          : null;
        otherTrigger.setAttribute('aria-expanded', 'false');
        if (otherPanel) otherPanel.classList.remove('is-open');
      });

      trigger.setAttribute('aria-expanded', String(!isExpanded));
      panel.classList.toggle('is-open', !isExpanded);
    });
  });

  /* ------------------------------------------------------------------------
     6. Scroll Reveal Micro-interactions (Respects Reduced Motion)
     ------------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('[data-reveal]');
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  /* ------------------------------------------------------------------------
     7. Contact Form Validation & Accessible Feedback
     ------------------------------------------------------------------------ */
  const form = document.getElementById('consultation-form');
  const formStatus = document.getElementById('form-status');

  const validators = {
    'contact-name': (val) =>
      val.trim().length >= 2 ? '' : 'Por favor ingresa tu nombre completo.',
    'contact-email': (val) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())
        ? ''
        : 'Ingresa un correo electrónico válido.',
    'contact-type': (val) =>
      val.trim() !== '' ? '' : 'Selecciona el tipo de proyecto.',
    'contact-message': (val) =>
      val.trim().length >= 15
        ? ''
        : 'Describe brevemente tu proyecto (mínimo 15 caracteres).',
  };

  const validateField = (input) => {
    const validator = validators[input.id];
    if (!validator) return true;

    const errorId = input.getAttribute('aria-describedby');
    const errorEl = errorId ? document.getElementById(errorId) : null;
    const errorMessage = validator(input.value);

    if (errorMessage) {
      input.setAttribute('aria-invalid', 'true');
      if (errorEl) {
        errorEl.textContent = errorMessage;
        errorEl.classList.remove('hidden');
      }
      return false;
    }

    input.removeAttribute('aria-invalid');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.add('hidden');
    }
    return true;
  };

  if (form) {
    const requiredInputs = Array.from(
      form.querySelectorAll('#contact-name, #contact-email, #contact-type, #contact-message')
    );

    requiredInputs.forEach((input) => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.getAttribute('aria-invalid') === 'true') {
          validateField(input);
        }
      });
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (formStatus) {
        formStatus.classList.add('hidden');
        formStatus.textContent = '';
      }

      let firstInvalid = null;
      requiredInputs.forEach((input) => {
        const isValid = validateField(input);
        if (!isValid && !firstInvalid) {
          firstInvalid = input;
        }
      });

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      const nameVal = document.getElementById('contact-name').value.trim();
      form.reset();
      requiredInputs.forEach((input) => input.removeAttribute('aria-invalid'));

      if (formStatus) {
        formStatus.textContent = `Gracias, ${nameVal}. Hemos recibido tu solicitud de consulta; nuestro equipo te contactará en menos de 48 horas hábiles.`;
        formStatus.classList.remove('hidden');
      }
    });
  }
})();
