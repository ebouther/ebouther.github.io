export const fr = {
  header: {
    skills: 'Compétences',
    experience: 'Expérience',
    recommendations: 'Recommandations',
    contact: 'Contact',
    caseStudies: 'Études de cas',
  },

  hero: {
    badge: 'Disponible en freelance',
    titles: [
      'Platform Engineer AWS',
      'Terraform & Infrastructure as Code',
      'CI/CD & DevOps',
      'Node.js / TypeScript',
      'Cloud Architecture',
    ],
    description:
      "J'aide les entreprises à concevoir, automatiser et faire évoluer leurs infrastructures AWS avec Terraform, tout en développant des API backend performantes et maintenables.",
    contactBtn: 'Me contacter',
    experienceBtn: 'Voir mon parcours',
  },

  metrics: {
    allOperational: 'All systems operational',
  },

  skills: {
    title: '# infrastructure .stack',
    domains: [
      {
        title: 'Cloud & Backend',
        subtitle: 'AWS Serverless Systems',
        groups: [
          { label: 'Compute', items: ['Lambda', 'ECS'] },
          { label: 'API', items: ['API Gateway', 'AppSync'] },
          { label: 'Data', items: ['DynamoDB', 'S3', 'RDS', 'Redis'] },
          { label: 'Eventing', items: ['SQS', 'SNS', 'EventBridge', 'Step Functions'] },
        ],
      },
      {
        title: 'Infrastructure',
        subtitle: 'IaC & Automation',
        groups: [
          { label: 'Provisioning', items: ['Terraform', 'Terragrunt'] },
          { label: 'Configuration', items: ['Ansible'] },
          { label: 'Containers', items: ['Docker'] },
          { label: 'Orchestration', items: ['ECS / Fargate (AWS)', 'Kubernetes (basic knowledge)'] },
        ],
      },
      {
        title: 'CI / CD',
        subtitle: 'Automation',
        groups: [
          { label: 'Pipelines', items: ['GitHub Actions'] },
          { label: 'Runners', items: ['Self-hosted', 'ECS Runners'] },
        ],
      },
      {
        title: 'Observabilité',
        subtitle: 'Monitoring & Debugging',
        groups: [
          { label: 'Métriques', items: ['CloudWatch', 'Prometheus', 'Grafana'] },
          { label: 'Logs', items: ['CloudWatch Logs'] },
          { label: 'Tracing', items: ['OpenTelemetry', 'AWS X-Ray'] },
          { label: 'Erreurs', items: ['Sentry'] },
        ],
      },
      {
        title: 'Backend',
        subtitle: 'API & Application Layer',
        groups: [
          { label: 'Langages', items: ['Node.js', 'TypeScript', 'Python'] },
          { label: 'APIs', items: ['REST', 'GraphQL'] },
          { label: 'Architecture', items: ['Clean Architecture', 'CQRS'] },
        ],
      },
      {
        title: 'Architecture',
        subtitle: 'Design & Principles',
        groups: [
          { label: 'Patterns', items: ['Serverless', 'Event-Driven', 'Microservices'] },
          { label: 'Principes Cloud', items: ['12-Factor App', 'AWS Well-Architected Framework'] },
        ],
      },
    ],
  },

  experience: {
    title: 'Mon ',
    titleHighlight: 'parcours',
    items: [
      {
        date: '2020 - Présent',
        type: 'Mission',
        role: 'DevOps & Développeur Backend',
        company: 'IEA Paris · Centres de recherche',
        description:
          "Infrastructure as Code (IaC) AWS + Terraform/Terragrunt sur environnements dev/stage/prod. Mise en place de bases MongoDB Atlas, pipelines CI/CD GitHub Actions avec runners self-hosted sur ECS, APIs GraphQL via AWS AppSync, mailing avec SES & Workmail, et monitoring/error tracking sur EC2 (Grafana, Sentry, Ackee).",
        tags: ['AWS', 'Terraform', 'Terragrunt', 'MongoDB Atlas', 'GraphQL', 'AppSync', 'GitHub Actions', 'ECS', 'Node.js'],
        studyHref: '/case-studies/iea-paris',
      },
      {
        date: '2017 - 2020',
        type: 'Mission',
        role: 'Développeur Backend / DevOps',
        company: "Euler Hermes & Moody's · Courbevoie",
        description:
          'Développement Backend et DevOps pour le projet TRIBRating. Administration de bases de données PostgreSQL, déploiement serverless sur AWS, automatisation Terraform, pipelines Jenkins, stack Elasticsearch/Kibana pour la recherche et l\'analytique.',
        tags: ['Node.js', 'PostgreSQL', 'Terraform', 'AWS', 'Python', 'Bash', 'Serverless', 'Elasticsearch', 'Kibana', 'Jenkins', 'REST API'],
      },
      {
        date: '2016',
        type: 'Stage',
        role: 'Conception protocole réseau',
        company: 'CNRS-IN2P3-CSNSM · Orsay',
        description:
          "Création du protocole réseau RATP (Reliable Asynchronous Transport Protocol) en Ada. RATP fiabilise UDP tout en assurant l'ordre et l'intégrité des données à haut débit (10 Gb/s), avec une gestion asynchrone des pertes contrairement à TCP.",
        tags: ['Ada', 'UDP', 'Réseau', 'Protocole', 'Haut débit'],
      },
    ],
    studyLink: "Voir l'étude de cas →",
  },

  recommendations: {
    title: 'Recommandations',
    items: [
      {
        initials: 'FC',
        name: 'Felix C.',
        role: 'Dev Fullstack',
        date: '18 juin 2020',
        text: 'Développeur Node.js solide. Capable de debugger des problèmes complexes — la formation 42 se sent. Sérieux et professionnel dans sa pratique du remote — toujours disponible, notre collaboration a été efficace.',
        highlight:
          "Eliot a, à lui seul, mis en place le nouvel environnement de développement local pour l'ensemble de l'équipe (frontend et backend) durant une période cruciale de notre projet.",
      },
      {
        initials: 'OB',
        name: 'Olivier B.',
        role: 'Développeur Backend, DevOps',
        date: '12 mai 2020',
        text: "Ayant collaboré avec Eliot sur le projet TRIBRating, je peux mesurer son autonomie et sa capacité à répondre efficacement aux besoins qui se sont présentés. Ses contributions ont été très structurantes sur ce projet. Il se repère facilement dans les écosystèmes des logiciels libres, c'est un grand atout !",
      },
      {
        initials: 'DT',
        name: 'Damien T.',
        role: 'Dev Frontend',
        date: '11 mai 2020',
        text: 'Travailler avec Eliot a été très agréable. Très motivé, il était toujours prêt à trouver des solutions dans n\'importe quelle situation. Fiable et flexible, je recommande Eliot, et re-travaillerai avec lui avec grand plaisir.',
      },
      {
        initials: 'JB',
        name: 'Jean C.',
        role: 'Dev FrontEnd',
        date: '11 mai 2020',
        text: "J'ai bossé pas mal de temps avec Eliot et c'est qqun de très pro et appliqué. Il est à l'écoute des besoins et arrive toujours à résoudre une situation même si elle sort un peu de son périmètre d'activité. Je le recommande vivement.",
      },
    ],
  },

  contact: {
    title: 'Me ',
    titleHighlight: 'contacter',
    subtitle: 'Vous avez un projet cloud ou backend ? Discutons-en.',
    email: 'Email',
    linkedin: 'LinkedIn',
    malt: 'Malt',
  },

  caseStudyIea: {
    backLink: '← Retour aux études de cas',
    hero: {
      title: 'Conception d\'une plateforme de recherche multi-tenant sur AWS',
      subtitle: 'Transformer une application AWS Amplify unique en une plateforme cloud capable de provisionner et d\'exploiter de multiples applications de recherche par l\'automatisation.',
      meta: ['Senior Backend & Cloud Engineer', 'Institut d\'Études Avancées de Paris'],
    },
    overview: {
      roleLabel: 'Rôle',
      role: 'Senior Backend & Cloud Engineer',
      durationLabel: 'Durée',
      responsibilitiesLabel: 'Responsabilités',
      responsibilities: ['Architecture backend', 'Infrastructure cloud', 'Platform engineering', 'CI/CD', 'Infrastructure as Code', 'Observabilité'],
    },
    challenge: {
      heading: 'Le défi',
      paragraphs: [
        'Quand j\'ai rejoint le projet, la plateforme consistait en une seule application AWS Amplify pour l\'Institut d\'Études Avancées de Paris.',
        'Cela fonctionnait bien pour un site unique, mais l\'organisation était en pleine expansion.',
        'De nouvelles initiatives de recherche nécessitaient des sites web indépendants, avec leur propre image de marque, équipes éditoriales et cycles de déploiement, tout en partageant la même logique métier et la même plateforme de données. L\'architecture existante ne pouvait pas soutenir cette vision.',
        'Chaque nouveau site nécessitait le provisionnement manuel de ressources AWS, la configuration d\'infrastructure, le déploiement d\'applications frontend et la mise à jour des services backend. L\'équipe d\'ingénierie était devenue le goulot d\'étranglement.',
        'Mon objectif n\'était pas simplement de migrer des technologies. C\'était de construire une plateforme où créer une nouvelle application devenait un changement de configuration plutôt qu\'un projet d\'infrastructure.',
      ],
    },
    challenge1: {
      heading: 'Défi 1 — Reconstruction de la plateforme backend',
      paragraphs: [
        'La première étape a été de sortir d\'AWS Amplify. Amplify avait accéléré la première version du projet mais devenait de plus en plus contraignant à mesure que la plateforme grandissait. La logique GraphQL personnalisée, les exigences multi-tenant et le contrôle de l\'infrastructure nécessitaient tous une architecture de plus bas niveau.',
        'J\'ai reconçu le backend autour d\'AWS AppSync et de fonctions Lambda déployables indépendamment. Au lieu d\'un seul gros backend, la plateforme est devenue une collection de services autonomes.',
      ],
      diagram: 'APIs Publiques\n│\n↓\nAWS AppSync\n│\n↓\n40+ Fonctions Lambda\n│\n↓\nMongoDB Atlas',
      sharedHeading: 'Couche d\'exécution Lambda partagée',
      sharedText: 'Chaque Lambda partageait la même couche d\'exécution fournissant :',
      layerItems: ['Authentification JWT', 'RBAC', 'Intégration Sentry', 'Gestion du warm-up', 'Gestion centralisée des erreurs'],
      closing: 'Cela a supprimé le code dupliqué tout en gardant chaque capacité métier déployable indépendamment.',
    },
    challenge2: {
      heading: 'Défi 2 — Concevoir une plateforme cloud plutôt qu\'une application web',
      paragraphs: [
        'La plateforme hébergeait finalement de multiples initiatives de recherche. Bien que chaque site ait l\'air différent, ils partageaient tous le même backend.',
        'Au lieu de cloner des projets, j\'ai conçu Netboard. Netboard a transformé la création d\'application en un workflow de provisioning.',
      ],
      diagram: 'Administrateur\n│\n↓\nConfiguration tenant\n│\n↓\nGitHub Actions\n│\n↓\nTerraform\n│\n↓\nInfrastructure AWS\n│\n↓\nApplication en ligne',
      provisionedHeading: 'Provisionné automatiquement par tenant :',
      provisionedItems: ['CloudFront', 'S3', 'Route53', 'Certificats ACM', 'Configuration Lambda', 'Secrets Parameter Store', 'Déploiement frontend'],
      closing: 'Chaque tenant conservait sa propre image de marque, ses traductions, son contenu et ses assets tout en partageant l\'intégralité de la plateforme applicative. Créer un nouveau site ne nécessitait plus de travail manuel sur AWS.',
    },
    challenge3: {
      heading: 'Défi 3 — Construire une infrastructure cloud reproductible',
      paragraphs: [
        'À mesure que le nombre d\'environnements et de tenants augmentait, l\'infrastructure manuelle devenait impossible à maintenir.',
        'J\'ai reconstruit l\'intégralité de la plateforme AWS avec Terraform et Terragrunt. La plateforme opérait sur quatre comptes AWS :',
      ],
      accounts: [
        { account: 'Services partagés', purpose: 'DNS racine, monitoring, socle CI/CD' },
        { account: 'Développement', purpose: 'Feature branches, expérimentations' },
        { account: 'Pré-production', purpose: 'Tests d\'intégration, validation de release' },
        { account: 'Production', purpose: 'Trafic live des tenants' },
      ],
      modules: 'Des modules Terraform réutilisables géraient chaque composant :',
      moduleItems: ['Lambda', 'AppSync', 'CloudFront', 'S3', 'Route53', 'SES', 'SQS', 'Monitoring', 'MongoDB Atlas', 'Infrastructure CI'],
      closing: 'Les mêmes définitions d\'infrastructure étaient utilisées partout, garantissant des déploiements reproductibles et réduisant la dérive de configuration.',
    },
    challenge4: {
      heading: 'Défi 4 — Automatiser la livraison logicielle',
      paragraphs: [
        'Déployer des dizaines de fonctions Lambda sur plusieurs tenants est rapidement devenu un autre goulot d\'étranglement.',
        'J\'ai conçu une plateforme de déploiement basée sur GitHub Actions. Au lieu de serveurs de build persistants, les jobs CI utilisaient des runners auto-hébergés éphémères déployés dynamiquement sur AWS ECS avec Spot Instances.',
      ],
      diagram: 'GitHub Actions\n│\n↓\nRunner ECS éphémère\n│\n↓\nTerraform\n│\n↓\nDéploiement Lambda\n│\n↓\nDéploiement Nuxt\n│\n↓\nInvalidation CloudFront',
      changeAware: 'Le pipeline ne reconstruisait que les composants affectés par un changement. Les déploiements d\'infrastructure, backend et frontend s\'exécutaient indépendamment quand c\'était possible. Cela a considérablement réduit les temps de déploiement tout en minimisant les risques en production.',
    },
    dataEvolution: {
      heading: 'Évolution de la plateforme de données',
      paragraphs: [
        'La plateforme originale stockait les données dans DynamoDB et utilisait Cognito pour l\'authentification. À mesure que le projet évoluait, les deux sont devenus limitants.',
        'J\'ai mené la migration vers MongoDB Atlas, l\'authentification JWT personnalisée, des relations de données plus riches, la recherche full-text et les pipelines d\'agrégation.',
        'J\'ai également développé des outils de migration pour importer les données de production existantes depuis DynamoDB et les systèmes SQL legacy vers la nouvelle plateforme.',
      ],
    },
    modelGen: {
      heading: 'Génération de modèles de données partagés',
      paragraphs: [
        'À mesure que la plateforme grandissait, maintenir séparément les formulaires frontend, les schémas GraphQL et les modèles backend devenait source d\'erreurs.',
        'J\'ai introduit une couche de modèles TypeScript partagée agissant comme source de vérité unique. À partir d\'une seule définition de modèle, la plateforme générait automatiquement les schémas GraphQL, les opérations client, les formulaires dynamiques et les configurations de listes.',
        'Cela a éliminé les problèmes de synchronisation entre le frontend et le backend tout en réduisant les coûts de maintenance.',
      ],
    },
    observability: {
      heading: 'Observabilité de production',
      paragraphs: [
        'Opérer une plateforme serverless nécessite de l\'observabilité plutôt que de l\'administration de serveurs.',
        'J\'ai construit la stack de monitoring complète autour de Sentry auto-hébergé, Grafana, CloudWatch et Ackee.',
        'Le monitoring couvrait : les performances Lambda, les métriques CloudFront, les erreurs applicatives, la santé de l\'infrastructure et le statut des déploiements.',
      ],
    },
    architecture: {
      heading: 'Architecture',
      diagram: '          Applications Nuxt\n                 │\n         CloudFront + S3\n                 │\n            AWS AppSync\n                 │\n         40+ Fonctions Lambda\n                 │\n            MongoDB Atlas\n\nInfrastructure : Terraform / Terragrunt\nCI/CD          : GitHub Actions · Runners ECS éphémères · Spot Instances\nObservabilité  : Grafana · Sentry · CloudWatch',
    },
    achievements: {
      heading: 'Réalisations clés',
      items: [
        'Conception et développement de l\'architecture backend',
        'Construction d\'une plateforme de provisioning multi-tenant sur AWS',
        'Conception de l\'Infrastructure as Code pour quatre comptes AWS',
        'Développement de 40+ services backend serverless',
        'Implémentation de pipelines CI/CD entièrement automatisés',
        'Construction de runners GitHub Actions auto-hébergés éphémères sur ECS',
        'Migration des données de production depuis DynamoDB et systèmes SQL legacy',
        'Conception de génération de code partagé pour les modèles backend et frontend',
        'Construction d\'une stack d\'observabilité de production complète',
      ],
    },
    technologies: {
      heading: 'Technologies',
      items: ['AWS', 'Lambda', 'AppSync', 'Terraform', 'Terragrunt', 'GitHub Actions', 'ECS', 'Spot Instances', 'MongoDB Atlas', 'Node.js', 'GraphQL', 'Nuxt.js', 'Vue.js', 'Sentry', 'Grafana'],
    },
  },

  caseStudies: {
    title: 'Études de cas',
    subtitle: 'Projets détaillés — architecture, infrastructure et développement backend',
    readLink: "Lire l'étude de cas",
    placeholder: "D'autres études de cas à venir",
    items: [
      {
        date: '2020 - Présent',
        type: 'Mission',
        title: 'IEA Paris Platform',
        role: 'Senior Backend & Cloud Engineering',
        summary:
          "Conception et évolution d'une plateforme multi-tenant serverless sur AWS pour l'Institut d'Études Avancées de Paris et le réseau WPRN. Architecture GraphQL, Infrastructure as Code avec Terraform/Terragrunt, provisioning automatisé et observabilité de production.",
        tags: ['AWS', 'Terraform', 'GraphQL', 'MongoDB Atlas', 'CI/CD', 'Platform Engineering'],
        href: '/case-studies/iea-paris',
      },
    ],
  },
}
