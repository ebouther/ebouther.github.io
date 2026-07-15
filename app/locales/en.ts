export const en = {
  header: {
    skills: 'Skills',
    experience: 'Experience',
    recommendations: 'Recommendations',
    contact: 'Contact',
    caseStudies: 'Case Studies',
  },

  hero: {
    badge: 'Available for freelance',
    titles: [
      'Platform Engineer AWS',
      'Terraform & Infrastructure as Code',
      'CI/CD & DevOps',
      'Node.js / TypeScript',
      'Cloud Architecture',
    ],
    description:
      'I help companies design, automate, and scale their AWS infrastructure with Terraform, while building performant and maintainable backend APIs.',
    contactBtn: 'Get in touch',
    experienceBtn: 'View my experience',
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
        title: 'Observability',
        subtitle: 'Monitoring & Debugging',
        groups: [
          { label: 'Metrics', items: ['CloudWatch', 'Prometheus', 'Grafana'] },
          { label: 'Logging', items: ['CloudWatch Logs'] },
          { label: 'Tracing', items: ['OpenTelemetry', 'AWS X-Ray'] },
          { label: 'Errors', items: ['Sentry'] },
        ],
      },
      {
        title: 'Backend',
        subtitle: 'API & Application Layer',
        groups: [
          { label: 'Languages', items: ['Node.js', 'TypeScript', 'Python'] },
          { label: 'APIs', items: ['REST', 'GraphQL'] },
          { label: 'Architecture', items: ['Clean Architecture', 'CQRS'] },
        ],
      },
      {
        title: 'Architecture',
        subtitle: 'Design & Principles',
        groups: [
          { label: 'Core patterns', items: ['Serverless', 'Event-Driven', 'Microservices'] },
          { label: 'Cloud principles', items: ['12-Factor App', 'AWS Well-Architected Framework'] },
        ],
      },
    ],
  },

  experience: {
    title: 'My ',
    titleHighlight: 'experience',
    items: [
      {
        date: '2020 - Present',
        type: 'Contract',
        role: 'DevOps & Backend Developer',
        company: 'IEA Paris · Research Centers',
        description:
          'Infrastructure as Code (IaC) on AWS with Terraform/Terragrunt across dev/stage/prod environments. Set up MongoDB Atlas databases, CI/CD pipelines with GitHub Actions on self-hosted ECS runners, GraphQL APIs via AWS AppSync, email workflows with SES & Workmail, and monitoring/error tracking on EC2 (Grafana, Sentry, Ackee).',
        tags: ['AWS', 'Terraform', 'Terragrunt', 'MongoDB Atlas', 'GraphQL', 'AppSync', 'GitHub Actions', 'ECS', 'Node.js'],
        studyHref: '/case-studies/iea-paris',
      },
      {
        date: '2017 - 2020',
        type: 'Contract',
        role: 'Backend Developer / DevOps',
        company: "Euler Hermes & Moody's · Courbevoie",
        description:
          'Backend development and DevOps for the TRIBRating project. PostgreSQL database administration, serverless deployment on AWS, Terraform automation, Jenkins pipelines, Elasticsearch/Kibana stack for search and analytics.',
        tags: ['Node.js', 'PostgreSQL', 'Terraform', 'AWS', 'Python', 'Bash', 'Serverless', 'Elasticsearch', 'Kibana', 'Jenkins', 'REST API'],
      },
      {
        date: '2016',
        type: 'Internship',
        role: 'Network Protocol Design',
        company: 'CNRS-IN2P3-CSNSM · Orsay',
        description:
          'Created the RATP (Reliable Asynchronous Transport Protocol) network protocol in Ada. RATP makes UDP reliable while ensuring data order and integrity at high throughput (10 Gb/s), with asynchronous loss management unlike TCP.',
        tags: ['Ada', 'UDP', 'Network', 'Protocol', 'High throughput'],
      },
    ],
    studyLink: 'View case study →',
  },

  recommendations: {
    title: 'Recommendations',
    items: [
      {
        initials: 'FC',
        name: 'Felix C.',
        role: 'Fullstack Developer',
        date: 'June 18, 2020',
        text: 'Solid Node.js developer. Able to debug complex problems — the 42 training shows. Serious and professional in remote work — always available, our collaboration was effective.',
        highlight:
          "Eliot single-handedly set up the new local development environment for the entire team (frontend and backend) during a crucial period of our project.",
      },
      {
        initials: 'OB',
        name: 'Olivier B.',
        role: 'Backend Developer, DevOps',
        date: 'May 12, 2020',
        text: "Having collaborated with Eliot on the TRIBRating project, I can attest to his autonomy and ability to effectively meet the needs that arose. His contributions were very impactful on this project. He navigates open-source ecosystems with ease — a great asset!",
      },
      {
        initials: 'DT',
        name: 'Damien T.',
        role: 'Frontend Developer',
        date: 'May 11, 2020',
        text: 'Working with Eliot was very pleasant. Highly motivated, he was always ready to find solutions in any situation. Reliable and flexible, I recommend Eliot and would gladly work with him again.',
      },
      {
        initials: 'JB',
        name: 'Jean C.',
        role: 'FrontEnd Developer',
        date: 'May 11, 2020',
        text: 'I worked with Eliot for a long time and he is very professional and dedicated. He listens to needs and always manages to resolve situations even when they go beyond his scope. I highly recommend him.',
      },
    ],
  },

  contact: {
    title: 'Get in ',
    titleHighlight: 'touch',
    subtitle: 'Have a cloud or backend project? Let\'s talk about it.',
    email: 'Email',
    linkedin: 'LinkedIn',
    malt: 'Malt',
  },

  caseStudyIea: {
    backLink: '← Back to case studies',
    hero: {
      title: 'Building a Multi-Tenant Research Platform on AWS',
      subtitle: 'Transforming a single AWS Amplify application into a cloud platform capable of provisioning and operating multiple research applications through automation.',
      meta: ['Senior Backend & Cloud Engineer', 'Paris Institute for Advanced Study'],
    },
    overview: {
      roleLabel: 'Role',
      role: 'Senior Backend & Cloud Engineer',
      durationLabel: 'Duration',
      responsibilitiesLabel: 'Responsibilities',
      responsibilities: ['Backend architecture', 'Cloud infrastructure', 'Platform engineering', 'CI/CD', 'Infrastructure as Code', 'Observability'],
    },
    challenge: {
      heading: 'The Challenge',
      paragraphs: [
        'When I joined the project, the platform consisted of a single AWS Amplify application serving the Institut d\'Études Avancées de Paris.',
        'It worked well for a single website, but the organization was rapidly expanding.',
        'New research initiatives required independent websites, branding, editorial teams and deployment cycles while sharing the same business logic and data platform. The existing architecture couldn\'t support that vision.',
        'Each new website required manually provisioning AWS resources, configuring infrastructure, deploying frontend applications and updating backend services. The engineering team had become the bottleneck.',
        'My goal was not simply to migrate technologies. It was to build a platform where creating a new application became a configuration change rather than an infrastructure project.',
      ],
    },
    challenge1: {
      heading: 'Challenge 1 — Rebuilding the backend platform',
      paragraphs: [
        'The first step was moving away from AWS Amplify. Amplify accelerated the first version of the project but became increasingly restrictive as the platform grew. Custom GraphQL logic, multi-tenant requirements and infrastructure control all required a lower-level architecture.',
        'I redesigned the backend around AWS AppSync and independently deployable Lambda functions. Instead of one large backend, the platform became a collection of autonomous services.',
      ],
      diagram: `Public APIs\n│\n↓\nAWS AppSync\n│\n↓\n40+ Lambda Functions\n│\n↓\nMongoDB Atlas`,
      sharedHeading: 'Shared Lambda Runtime Layer',
      sharedText: 'Each Lambda shared the same execution layer providing:',
      layerItems: ['JWT authentication', 'RBAC', 'Sentry integration', 'warm-up handling', 'centralized error management'],
      closing: 'This removed duplicated code while keeping each business capability independently deployable.',
    },
    challenge2: {
      heading: 'Challenge 2 — Designing a cloud platform instead of a web application',
      paragraphs: [
        'The platform eventually hosted multiple research initiatives. Although every website looked different, they all shared the same backend.',
        'Instead of cloning projects, I designed Netboard. Netboard transformed application creation into a provisioning workflow.',
      ],
      diagram: `Administrator\n│\n↓\nTenant configuration\n│\n↓\nGitHub Actions\n│\n↓\nTerraform\n│\n↓\nAWS Infrastructure\n│\n↓\nApplication online`,
      provisionedHeading: 'Automatically provisioned per tenant:',
      provisionedItems: ['CloudFront', 'S3', 'Route53', 'ACM Certificates', 'Lambda configuration', 'Parameter Store secrets', 'Frontend deployment'],
      closing: 'Each tenant kept its own branding, translations, content and assets while sharing the entire application platform. Creating a new website no longer required manual AWS work.',
    },
    challenge3: {
      heading: 'Challenge 3 — Building a reproducible cloud infrastructure',
      paragraphs: [
        'As the number of environments and tenants increased, manual infrastructure became impossible to maintain.',
        'I rebuilt the entire AWS platform using Terraform and Terragrunt. The platform eventually operated across four AWS accounts:',
      ],
      accounts: [
        { account: 'Shared services', purpose: 'DNS root, monitoring, CI/CD base' },
        { account: 'Development', purpose: 'Feature branches, experiments' },
        { account: 'Staging', purpose: 'Integration testing, release validation' },
        { account: 'Production', purpose: 'Live tenant traffic' },
      ],
      modules: 'Reusable Terraform modules managed every component:',
      moduleItems: ['Lambda', 'AppSync', 'CloudFront', 'S3', 'Route53', 'SES', 'SQS', 'Monitoring', 'MongoDB Atlas', 'CI infrastructure'],
      closing: 'The same infrastructure definitions were used everywhere, ensuring reproducible deployments and reducing configuration drift.',
    },
    challenge4: {
      heading: 'Challenge 4 — Automating software delivery',
      paragraphs: [
        'Deploying dozens of Lambda functions across multiple tenants quickly became another bottleneck.',
        'I designed a deployment platform based on GitHub Actions. Instead of persistent build servers, CI jobs used ephemeral self-hosted runners deployed dynamically on AWS ECS using Spot Instances.',
      ],
      diagram: `GitHub Actions\n│\n↓\nEphemeral ECS Runner\n│\n↓\nTerraform\n│\n↓\nLambda deployment\n│\n↓\nNuxt deployment\n│\n↓\nCloudFront invalidation`,
      changeAware: 'The pipeline only rebuilt components affected by a change. Infrastructure, backend and frontend deployments ran independently whenever possible. This dramatically reduced deployment times while minimizing production risk.',
    },
    dataEvolution: {
      heading: 'Data Platform Evolution',
      paragraphs: [
        'The original platform stored data in DynamoDB and relied on Cognito for authentication. As the project evolved, both became limiting.',
        'I led the migration toward MongoDB Atlas, custom JWT authentication, richer data relationships, full-text search and aggregation pipelines.',
        'I also developed migration tooling to import existing production data from DynamoDB and legacy SQL systems into the new platform.',
      ],
    },
    modelGen: {
      heading: 'Shared Data Model Generation',
      paragraphs: [
        'As the platform grew, maintaining frontend forms, GraphQL schemas and backend models separately became error-prone.',
        'I introduced a shared TypeScript model layer acting as the single source of truth. From one model definition, the platform automatically generated GraphQL schemas, client operations, dynamic forms and list configurations.',
        'This eliminated synchronization issues between frontend and backend while reducing maintenance costs.',
      ],
    },
    observability: {
      heading: 'Production Observability',
      paragraphs: [
        'Operating a serverless platform requires observability rather than server administration.',
        'I built the complete monitoring stack around self-hosted Sentry, Grafana, CloudWatch and Ackee analytics.',
        'Monitoring covered: Lambda performance, CloudFront metrics, application errors, infrastructure health and deployment status.',
      ],
    },
    architecture: {
      heading: 'Architecture',
      diagram: `          Nuxt Applications\n                 │\n         CloudFront + S3\n                 │\n            AWS AppSync\n                 │\n         40+ Lambda Functions\n                 │\n            MongoDB Atlas\n\nInfrastructure:  Terraform / Terragrunt\nCI/CD:           GitHub Actions · Ephemeral ECS Runners · Spot Instances\nObservability:   Grafana · Sentry · CloudWatch`,
    },
    achievements: {
      heading: 'Key Achievements',
      items: [
        'Designed and developed the backend architecture',
        'Built a multi-tenant provisioning platform on AWS',
        'Designed Infrastructure as Code for four AWS accounts',
        'Developed 40+ serverless backend services',
        'Implemented fully automated CI/CD pipelines',
        'Built ephemeral self-hosted GitHub Actions runners on ECS',
        'Migrated production data from DynamoDB and legacy SQL systems',
        'Designed shared code generation for backend and frontend models',
        'Built a complete production observability stack',
      ],
    },
    technologies: {
      heading: 'Technologies',
      items: ['AWS', 'Lambda', 'AppSync', 'Terraform', 'Terragrunt', 'GitHub Actions', 'ECS', 'Spot Instances', 'MongoDB Atlas', 'Node.js', 'GraphQL', 'Nuxt.js', 'Vue.js', 'Sentry', 'Grafana'],
    },
  },

  caseStudies: {
    title: 'Case Studies',
    subtitle: 'Detailed projects — architecture, infrastructure and backend development',
    readLink: 'Read case study',
    placeholder: 'More case studies coming soon',
    items: [
      {
        date: '2020 - Present',
        type: 'Contract',
        title: 'IEA Paris Platform',
        role: 'Senior Backend & Cloud Engineering',
        summary:
          'Design and evolution of a serverless multi-tenant platform on AWS for the Paris Institute for Advanced Study and the WPRN network. GraphQL architecture, Infrastructure as Code with Terraform/Terragrunt, automated provisioning, and production observability.',
        tags: ['AWS', 'Terraform', 'GraphQL', 'MongoDB Atlas', 'CI/CD', 'Platform Engineering'],
        href: '/case-studies/iea-paris',
      },
    ],
  },
}
