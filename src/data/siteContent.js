/**
 * Données du site — source : contexte.md, CONTENT_MAP.md, ASSETS_PLAN.md
 * Pas de HTML dans les strings. Infos légales exactes.
 * Chemins images : vides ou placeholders (à remplacer par les assets finaux).
 */

export const siteContent = {
  global: {
    nom: 'Christophe Lecacheux',
    objectifs: [
      'Clarifier les trois structures',
      'Valoriser l\'expertise',
      'Mettre en avant les agréments',
      'Inspirer sérieux et crédibilité',
      'Permettre une prise de contact simple',
      'Structurer clairement les publics et formations',
    ],
    fonctions: [
      'Président',
      'Coach Sportif',
      'Instructeur',
      'Formateur en sécurité',
    ],
    domainesExpertise: [
      'Formation en sécurité professionnelle',
      'Enseignement sports de combat',
      'Coaching et préparation physique',
      'Gestion du stress et des conflits',
      'Formations agréées CNAPS',
    ],
    zones: [
      'Île-de-France',
      'France (formations sécurité)',
    ],
    valeurs: [
      '20+ ans d’expérience',
      '50+ structures accompagnées',
      '100+ athlètes formés',
      'Pratique en conditions réelles',
      'Accompagnement personnalisé',
      'Conformité & agréments',
    ],
    ton: 'Professionnel, clair, structuré, rassurant.',
    formateurPresentation: 'Expert en formation professionnelle, sports de combat et sécurité. Intervient en Île-de-France et en France pour des formations adaptées aux structures publiques et privées.',
  },

  images: {
    home: {
      hero: '',
      entities1: '',
      entities2: '',
      entities3: '',
      trust: '',
    },
    forma: {
      hero: '',
      techniques: '',
      complementaires: '',
      publics: '',
    },
    sports: {
      hero: '',
      disciplines: '',
      method: '',
      activities: '',
    },
    gscurit: {
      hero: '',
      training: '',
    },
    contact: {
      hero: '',
      map: '',
    },
  },

  logos: {
    partenaires: [],
    cnaps: '',
    organismeDeclare: '',
  },

  entities: {
    lcFormaPro: {
      nom: 'LC Forma Pro Sécurité',
      slogan: 'Enseignements – Sécurité professionnelle ou personnelle – Cours – Stages – Conseils – Formations',
      presentation: 'Créé en 2020, LC Forma Pro Sécurité est un organisme déclaré en tant qu\'organisme de formation professionnelle. Nous sommes des professionnels qualifiés et motivés proposant des formations adaptées aux besoins des structures publiques et privées.',
      formationsTechniques: [
        'Bâton à poignée latérale (Tonfa)',
        'Bâton télescopique',
        'Self-Défense professionnelle',
        'Gestes Techniques en Milieu Professionnel (GTMP)',
      ],
      formationsComplementaires: [
        'Gestion du stress',
        'Gestion de la violence et des conflits',
        'Prise de parole en public',
        'Développement de la confiance en soi',
        'Techniques de débriefing',
      ],
      approche: {
        intro: 'Chaque entreprise ou structure est différente. Objectif : étudier les besoins et proposer une formation adaptée :',
        modes: [
          'Formation individuelle',
          'Formation continue',
          'Formation en groupe',
        ],
      },
      publics: [
        {
          id: 'pm',
          title: 'Police Municipale (PM)',
          items: [
            'Recyclage Tonfa',
            'Maniement bâton télescopique',
            'GTMP',
            'Droit pénal et procédure pénale',
            'Self-défense en milieu professionnel',
            'Gestion du stress et conflits',
          ],
        },
        {
          id: 'agents-securite',
          title: 'Agents de sécurité',
          items: [
            'Gestion des conflits',
            'Gestion du stress et violence',
            'Self-défense professionnelle',
            'Initiation Tonfa et bâton télescopique',
            'Techniques de communication',
          ],
        },
        {
          id: 'sante',
          title: 'Professionnels de santé',
          items: [
            'Gestion de la violence en milieu hospitalier',
            'Méthodes de relaxation',
            'Gestion des tensions et peurs',
            'Accompagnement face aux événements difficiles',
          ],
        },
        {
          id: 'educatif-social',
          title: 'Personnel éducatif et social',
          items: [
            'Gestion des tensions en milieu socio-éducatif',
            'Confiance en soi',
            'Prise de parole',
            'Techniques de débriefing',
            'Relaxation',
          ],
        },
        {
          id: 'accueil-public',
          title: 'Personnel accueillant du public',
          subtitle: 'Hôte de caisse, assistant manager, commercial, cadre',
          items: [
            'Gestion du stress et conflits',
            'Méthodes de détente',
            'Techniques de management',
            'Communication',
            'Confiance en soi',
          ],
        },
      ],
      aidePreparation: {
        intro: 'Préparation aux épreuves :',
        epreuves: [
          'Épreuves écrites',
          'Épreuves orales',
          'Épreuves sportives',
        ],
        publicConcerneLabel: 'Public concerné :',
        publicConcerne: [
          'Agents de sécurité',
          'Candidats aux diplômes d\'enseignement fédéral',
        ],
      },
      references: 'Plusieurs communes et établissements ont fait confiance à LC Forma Pro Sécurité. Partenariats avec sociétés, associations et fédérations reconnues.',
      legal: {
        responsable: 'Christophe Lecacheux',
        role: 'Président / Instructeur',
        telephone: '+33 7 81 74 59 85',
        email: 'lcformaprosecurite92@gmail.com',
        siret: '884 878 398 00012',
        numeroDeclarationActivite: 'W922017594 11 92 238 08 92',
      },
    },

    lcSportsConnexion: {
      nom: 'LC Sports Connexion',
      positionnement: 'Association dédiée à : la pratique, l\'enseignement, le développement des sports de combat et arts martiaux, le coaching, l\'organisation d\'événements sportifs.',
      positionnementListe: [
        'La pratique',
        'L\'enseignement',
        'Le développement des sports de combat et arts martiaux',
        'Le coaching',
        'L\'organisation d\'événements sportifs',
      ],
      disciplines: [
        'Karaté',
        'Boxe',
        'Boxe pieds-poings',
        'Krav-Maga',
        'Self-défense',
      ],
      methodologie: [
        'Enseignement pédagogique',
        'Mise en pratique régulière',
        'Acquisition d\'automatismes',
        'Cours ludiques pour enfants, adolescents et adultes',
        'Accompagnement vers la compétition',
        'Possibilité de former de futurs assistants instructeurs',
      ],
      methodologieExigence: 'Exigence : bonne moralité dès le début des cours.',
      activites: [
        'Camps d\'entraînement en milieu forestier',
        'Ateliers de renforcement musculaire',
        'Cohésion d\'équipe',
        'Exercices d\'aguerrissement',
        'Parcours physiques et d\'orientation',
        'Organisation d\'événements sportifs',
        'Soirées arts martiaux',
        'Compétitions et échanges sportifs',
      ],
      zone: 'Île-de-France (sport). France (formations sécurité).',
      legal: {
        responsable: 'Christophe Lecacheux',
        role: 'Président / Coach',
        telephone: '+33 7 81 74 59 85',
        email: 'lcsportsconnexion92@gmail.com',
        siret: '88487839800012',
        agrement: 'W922017594',
      },
    },

    gscurit: {
      nom: 'GSCURIT Conseil Formation Sécurité',
      sousTitre: 'Formateur indépendant & organisme agréé CNAPS',
      domaines: [
        { code: 'PRT', libelle: 'Prévention des Risques Terroristes' },
        { code: 'GC', libelle: 'Gestion de Conflit' },
        { code: 'GSCD', libelle: 'Gestion des Situations Conflictuelles Dégradées' },
        { code: 'EVS', libelle: 'Événementiel Spécifique' },
        { code: 'PIB', libelle: 'Palpation & Inspection des Bagages' },
        { code: 'FP', libelle: 'Pédagogie de formation' },
      ],
      agrements: {
        cartePro: 'CAR-092-2030-06-19-2025-0183149',
        agrementDirigeant: 'AGD-092-2030-06-12-2025-0183149',
        siret: '530 323 120 00010',
        numeroDeclarationActivite: '11922765592',
      },
      legal: {
        telephone: '+33 7 81 74 59 85',
        email: 'gscurit@rocketmail.com',
      },
    },
  },

  contact: {
    heroTitle: 'Contact & devis',
    heroSubtitle: 'Une question, un projet ? Nous vous recontactons rapidement.',
    lcFormaPro: {
      telephone: '+33 7 81 74 59 85',
      email: 'lcformaprosecurite92@gmail.com',
    },
    lcSportsConnexion: {
      telephone: '+33 7 81 74 59 85',
      email: 'lcsportsconnexion92@gmail.com',
    },
    gscurit: {
      telephone: '+33 7 81 74 59 85',
      email: 'gscurit@rocketmail.com',
    },
    faq: [
      { id: 'delais', question: 'Sous quel délai êtes-vous recontacté ?', answer: 'Nous nous efforçons de répondre sous 48h ouvrées.' },
      { id: 'zones', question: 'Quelles sont les zones d\'intervention ?', answer: 'Île-de-France (principal), France pour les formations sécurité.' },
      { id: 'formats', question: 'Quels formats de formation ?', answer: 'Formation sur site, en présentiel, adaptée à votre structure.' },
      { id: 'devis', question: 'Comment obtenir un devis ?', answer: 'Via ce formulaire, par email ou par téléphone. Devis sur demande selon votre projet.' },
    ],
  },
}

export default siteContent
