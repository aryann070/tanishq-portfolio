import { icons } from "lucide-react";

export const projects = [
  {
    id: "ai-interaction",
    category: "Master’s Thesis",
    year: "2026",
    title:
      "Designing AI-Assisted Interaction Concepts for Collaborative Scientific Work",
    subtitle:
      "AI Assisted Electronic Laboratory Notebook",

    role: "Student",
    team: "Prof. Robin Neuhaus (Supervisor)",
    icons: ["/icons/mic.png", "/icons/brain.png", "/icons/database.png"],
    tools: [
      "Figma",
      "FigJam",
      "Information Architecture",
      "MAXQDA",
      "NASA-TLX",
      "TiA (Trust in Automation)",
      "SUS",
      "Heuristic Evaluation",
      "Ethnography",
      "UI/UX",
      "AI Chatbot",
      "AI Voice Assistant",
      "Qualitative & Quantitative Data",
      "Overleaf",
      "LaTeX"
    ],
    prototype: "https://uni-siegen-masterthesis-1785236.figma.site/",
    challenges: "",
    approaches: ["This thesis followed a user-centered design approach, grounded in Human–Computer Interaction (HCI) and Computer-Supported Collaborative Learning (CSCL) principles. Rather than proposing a fully automated system, the focus was on designing interaction concepts that carefully integrate AI as a supportive collaborator.",
      "User needs and design requirements were derived from a combination of empirical data and literature, including surveys conducted within a large research institute, prior workshop findings, and existing research on collaborative work, distributed cognition, and cognitive load. These insights informed the design of an AI-assisted ELN interaction concept that combines two complementary modalities:",
      "Hands-free voice interaction, allowing researchers to document experiments during lab work without breaking focus or workflow",
      "A conversational chatbot interface, enabling researchers to retrieve past experiments, explore shared knowledge, and maintain continuity across team members and time",
      "Rather than treating the ELN as a passive repository, the proposed concept reframes it as an active partner in scientific sense-making. The design emphasizes transparency, progressive disclosure, and user control, ensuring that AI suggestions remain understandable and trustworthy.",
      "To evaluate the concept despite limited access to domain experts, a Wizard-of-Oz user study was conducted. This allowed realistic interaction scenarios to be tested while keeping the AI behavior controlled and interpretable. The evaluation combined standardized measures—such as perceived workload, usability, and trust—with qualitative feedback to capture both experiential and reflective aspects of use.",
    ],
    abstract: [
      "Electronic Laboratory Notebooks (ELN) have become central infrastructures for scientific documentation, offering structured data storage, traceability, and regulatory compliance. However, their prevailing interaction paradigm remains predominantly form-based and keyboard-centered, which may conflict with laboratory realities such as sterility constraints, multitasking, and distributed collaboration. This thesis investigates how a conversational interaction concept for ELN can be designed and evaluated under simulated AI conditions, with a primary focus on interaction structure rather than algorithmic performance.",
      "Grounded in Human–Computer Interaction (HCI) theory and informed by Computer-Supported Collaborative Learning (CSCL), the work conceptualizes the ELN as a socio-technical artifact that mediates cognition, documentation practices, and collaborative continuity. Design foundations were derived from literature-informed considerations, insights from a DLR user requirements survey, and contextual observations from Kadi4Mat and POLiS laboratory environments. These inputs were synthesized into structural design drivers, including multimodal interaction, in-situ documentation support, human-in-the-loop control, and transparency in AI-mediated workflows.",
      "A Wizard-of-Oz (WoZ) study was conducted to evaluate the conversational ELN prototype under simulated AI conditions. Voice-based documentation and chatbot-style retrieval were manually simulated to isolate interaction effects from technical AI limitations. A baseline condition using traditional documentation was compared with the prototype. Quantitative measures included the System Usability Scale (SUS), NASA-TLX workload assessment, and a Trust in Automation scale, complemented by qualitative interviews. Due to the exploratory design and limited sample size, quantitative results were analyzed descriptively.",
      "Findings suggest that conversational interaction structures appear promising for supporting perceived workflow fluidity and contextual retrieval when technical performance is assumed optimal. At the same time, issues of predictability, transparency, and epistemic responsibility emerged as critical design considerations. The thesis contributes to HCI research by empirically examining conversational interaction paradigms within high-stakes scientific documentation contexts using a methodologically controlled simulation approach."
    ],

    outcomes: [
      "A structured set of user needs and design requirements for AI-assisted ELNs, grounded in empirical research",
      "A conceptual prototype illustrating how voice interaction and conversational AI can complement existing laboratory workflows",
      "Design insights into reducing cognitive load, supporting shared understanding, and maintaining continuity across experiments",
      "Empirical findings showing how users perceive trust, usability, and workload when interacting with AI-supported documentation tools",
      "Practical design guidelines for integrating AI into collaborative research systems from a human-centered perspective",
      "Beyond the artifact itself, the thesis contributes a design-oriented perspective on AI in scientific work—highlighting that the success of AI systems depends less on intelligence alone and more on how thoughtfully they are embedded into human practices, collaboration, and learning.",
    ],
    researchContext: {
      "theoreticalGrounding": "Human-Computer Interaction (HCI) & Computer-Supported Collaborative Learning (CSCL)",
      "studyMethod": "Wizard-of-Oz (WoZ) evaluation under simulated AI conditions",
      "domain": "Electronic Laboratory Notebooks for scientific documentation & collaboration"
    },
    interactionConcept: {
      "title": "Interaction Concept: Two Modalities",
      "description": "The proposed concept reframes the ELN from a passive repository into an active partner in scientific sense-making, combining two complementary interaction channels:",
      "modalities": [
        {
          "type": "voice",
          "title": "Voice Interaction",
          "description": "Hands-free documentation during active lab work, enabling researchers to record observations without breaking workflow or sterility constraints.",
          "points": [
            "In-situ experiment documentation",
            "Hands-free operation for sterile environments",
            "Real-time voice-to-structured-data capture",
            "Reduced cognitive context-switching"
          ]
        },
        {
          "type": "chatbot",
          "title": "Conversational Chatbot",
          "description": "A retrieval-oriented interface for exploring past experiments, shared knowledge, and maintaining continuity across team members and time.",
          "points": [
            "Contextual retrieval of past experiments",
            "Cross-team knowledge exploration",
            "Collaborative continuity support",
            "Progressive disclosure of AI suggestions"
          ]
        }
      ]
    },
    designPrinciples: {
      title: "Design Principles",
      items: [
        {
          title: "Transparency",
          description: "AI suggestions remain understandable with clear rationale and provenance"
        },
        {
          title: "Progressive Disclosure",
          description: "Information revealed incrementally to reduce cognitive overload"
        },
        {
          title: "Human-in-the-Loop",
          description: "Researchers maintain control over documentation decisions"
        },
        {
          title: "Epistemic Responsibility",
          description: "Preserving scientific integrity in AI-mediated workflows"
        },
      ],
    },
    evaluation: {
      "title": "Wizard-of-Oz Evaluation",
      "subtitle": "Simulated AI conditions for controlled interaction assessment",
      "description": "A Wizard-of-Oz study was conducted to evaluate the conversational ELN prototype. Voice-based documentation and chatbot-style retrieval were manually simulated to isolate interaction effects from technical AI limitations. A baseline condition using traditional documentation was compared with the prototype.",
      "measures": [
        {
          "label": "SUS",
          "description": "System Usability Scale"
        },
        {
          "label": "NASA-TLX",
          "description": "Workload Assessment"
        },
        {
          "label": "TiA",
          "description": "Trust in Automation Scale"
        }
      ],
      "findings": [
        "Conversational interaction structures appear promising for supporting perceived workflow fluidity",
        "Contextual retrieval benefits emerged when technical performance is assumed optimal",
        "Predictability and transparency surfaced as critical design considerations",
        "Epistemic responsibility challenges require careful design attention in AI-mediated scientific work"
      ]
    },
    thesisCTA: {
      "title": "Read the Full Thesis",
      "description": "Access the complete research document with detailed methodology, findings, and design implications.",
      "buttonText": "View Thesis PDF",
      "link": "/pdf/master-thesis-ai-eln.pdf"
    }
  },
  {
    id: "human-factors-dlr",
    category: "Professional Work @ DLR",
    year: "March 2024 - Present",
    title: "Human Factors for Software Engineering & Human-System Interaction at DLR",
    subtitle: "Intelligente und Verteilte Systeme & Institut für Softwaretechnologie",
    description: "Conducting human-centered research on collaborative and data-driven interactive systems.",
    image: "/images/professional-work.png",
    role: "Research Assistant & Working Student",
    supervisor: "Dr. Ing. Sabine Theis",
    team: null,
    icons: ["/icons/world.png", "/icons/brain.png"],
    pdf: "/pdf/dlr-praktikumzeugnis.pdf",
    tools: [
      "HCI",
      "Aerospace",
      "Heuristics",
      "Figma",
      "Vibe Coding",
      "Conceptboard",
      "Miro",
      "FigJam",
      "Research Presentation",
      "LaTeX",
      "Overleaf",
      "Quantitative Methods",
      "Qualitative Methods",
      "MAXQDA",
      "SPSS",
      "Tableau",
      "Data Visualization",
    ],
    challenges: "Working within a national aerospace research institute meant operating at the intersection of highly complex systems, diverse expert users, and strict confidentiality constraints. Across multiple projects, the core challenge was not a lack of technology, but a lack of alignment—between how systems were designed and how people actually reason, collaborate, and make decisions when using them. Many of the systems under development dealt with data-intensive, safety-critical, or long-running collaborative work, where users needed to interpret complex information, maintain context over time, and coordinate with others. However, user needs were often implicit, distributed across roles, or embedded in established practices rather than explicitly articulated. This made it difficult to design interaction concepts that genuinely supported sense-making, collaboration, and continuity of work. At the same time, as an external-facing research institution collaborating with industry partners, any design or evaluation work had to carefully balance human-centered insights with technical feasibility, organizational realities, and confidentiality requirements—limiting what could be shown, discussed, or iterated openly.",
    approach: "",
    outcomes: [
      "Improved usability and interaction efficiency in safety-critical simulation tools through systematic task analysis and user interviews",
      "Clear, evidence-based user requirements derived from qualitative and participatory research methods across multiple projects",
      "Design recommendations addressing cognitive workload, interaction breakdowns, and collaboration challenges in complex systems",
      "Enhanced data visualization strategies that improved system comprehension and user adoption in mobility and scientific platforms",
      "Contributed to human-centered improvements in high-stakes aerospace systems and enterprise-level software platforms",
      "Gained hands-on experience applying HCI and human factors methods to real-world engineering environments with diverse stakeholder groups",
      "Across these projects, I worked at the intersection of human factors, HCI, and complex systems, focusing on making data-intensive and safety-critical technologies more usable, accessible, and human-centered.",
    ],
    experienceCard1: {
      "title": "Future Mobility Systems (MoDa)",
      "subtitle": "DLR – Institute of Software Technology",
      "overview": "Worked on supporting services for future mobility platforms, focusing on making complex, data-driven systems more understandable and usable for diverse stakeholders.",
      "whatIDid": [
        "Analyzed user workflows and interaction patterns in complex digital systems",
        "Designed and supported data visualization approaches for better system comprehension",
        "Identified usability barriers and accessibility challenges in data-heavy interfaces",
        "Structured documentation to improve onboarding and user adoption"
      ],
      "impact": [
        "Improved clarity and usability of mobility-related systems",
        "Enabled better decision-making through clearer data representation",
        "Supported adoption of complex platforms across interdisciplinary users"
      ]
    },
    "experienceCard2": {
      "title": "Kadi4Mat – Electronic Laboratory Notebook (ELN)",
      "subtitle": "DLR – Human-Centered Digitalisation of Lab Environments",
      "overview": "Contributed to the design and development of a digital platform for managing laboratory workflows, documentation, and collaboration.",
      "whatIDid": [
        "Conducted user-centered design workshops to uncover user needs and pain points",
        "Identified challenges in GUI, workflows, and scientific data handling",
        "Contributed to AI-supported concepts for improving lab documentation and processes",
        "Created structured documentation for users, researchers, and developers"
      ],
      "impact": [
        "Enhanced usability of digital lab environments",
        "Improved collaboration and data accessibility in research workflows",
        "Supported transition toward human-centered scientific digitalization"
      ]
    },
    "experienceCard3": {
      "title": "VAST – Aeromechanics Simulation Platform",
      "subtitle": "DLR – Aerospace Simulation (Human Factors)",
      "overview": "Worked on evaluating and improving a safety-critical simulation platform used for helicopter aeromechanics research.",
      "whatIDid": [
        "Conducted task analysis and workflow evaluation in simulation environments",
        "Performed user interviews with domain experts and aerospace stakeholders",
        "Identified human–system interaction challenges in complex simulation tools",
        "Translated user insights into actionable design and system requirements",
        "Collaborated with developers to improve usability and efficiency"
      ],
      "impact": [
        "Improved interaction design in safety-critical aerospace systems",
        "Increased usability and workflow efficiency for expert users",
        "Contributed to human-centered improvements in high-stakes engineering tools"
      ]
    },
    "confidentialityNotice": {
      "title": "Confidentiality Notice",
      "description": "Due to confidentiality agreements, specific project details, data, and visual materials cannot be publicly disclosed. The following descriptions focus on my contributions, methods, and impact."
    },
    "intro": {
      "text": "Across these projects, I worked at the intersection of human factors, HCI, and complex systems, focusing on making data-intensive and safety-critical technologies more usable, accessible, and human-centered."
    },

  },
  {
    id: "immersive-research",
    category: "Academic Research @ Uni Siegen",
    year: "2022 - 2023",
    title: "Immersive Interaction Research & Prototyping",
    subtitle: "VR Meditation, Spatial Perception & Interaction Paradigms",
    description: "Exploring user presence, spatial perception, and interaction metaphors in VR/AR.",
    image: "/images/academic-research.png",
    role: "Student",
    supervisor: "Prof. Robin Neuhaus",
    team: null,
    icons: ["/icons/glasses.png", "/icons/layers.png", "/icons/monitor.png"],
    pdf:"/pdf/dlr-praktikumzeugnis.pdf",
    prototype: null,
    tools: ["Unity", "C#", "VR/AR", "HCI Theory", "Spatial Computing", "User Testing"],
    challenges: "The rapid evolution of spatial computing challenges established interaction metaphors. Key questions include: How can VR support mental well-being without sensory overload? How do users conceptualize digital objects in physical space (AR)? And can we expand human perception to monitor multiple virtual locations simultaneously?",
    // approach: "This portfolio entry consolidates three distinct research initiatives conducted at the University of Siegen: 1. Zensis: VR Meditation for Stress Reduction Designed and developed a VR experience using Unity 3D that counteracts motion sickness while promoting mindfulness. The system uses procedural natural environments and spatial audio to ground the user, focusing on calm technology principles. 2. AR/VR Interaction Paradigms (Research Seminar) Conducted a systematic literature review on diegetic vs. non-diegetic interfaces. The resulting analysis categorizes interaction techniques based on cognitive load and immersion, providing a framework for evaluating naturalness in mixed reality. 3. OVR Lap: Multi-Location Perception Investigated the theoretical limits of spatial awareness by proposing a multi-view VR interface. The project visualized how users might monitor and interact with two distinct virtual environments simultaneously, addressing challenges in attention allocation and visual clutter.",
    approachsolution: {
      "title": "Research Initiatives at University of Siegen",
      "description": "This portfolio entry consolidates three distinct research initiatives conducted at the University of Siegen.",
      "projects": [
        {
          "title": "Zensis: VR Meditation for Stress Reduction",
          "details": "Designed and developed a VR experience using Unity 3D that counteracts motion sickness while promoting mindfulness. The system uses procedural natural environments and spatial audio to ground the user, focusing on \"calm technology\" principles."
        },
        {
          "title": "AR/VR Interaction Paradigms (Research Seminar)",
          "details": "Conducted a systematic literature review on diegetic vs. non-diegetic interfaces. The resulting analysis categorizes interaction techniques based on cognitive load and immersion, providing a framework for evaluating \"naturalness\" in mixed reality."
        },
        {
          "title": "OVR Lap: Multi-Location Perception (CHI Conference Paper)",
          "details": "Worked with Prof. Robin Neuhaus to investigate and study interaction techniques from a research paper published at the CHI conference. The paper explores the theoretical limits of spatial awareness through a \"multi-view\" VR interface, examining how users might monitor and interact with two distinct virtual environments simultaneously. I re-presented the paper and designed a poster for presentation at the seminar, addressing challenges in attention allocation and visual clutter."
        }
      ]
    },
    outcomes: [
      "Developed a fully functional VR meditation prototype (Zensis) in Unity",
      "Authored a comprehensive semantic analysis of AR/VR interaction metaphors",
      "Designed a conceptual framework for multi-location VR presence (OVR Lap)",
      "Bridge theoretical HCI concepts with practical prototyping in Unity",
    ],
    subProjects: [
      {
        title: "Research Seminar: AR/VR Interaction Paradigms",
        description: "Explores how virtual reality can simulate variable gravity environments, inspired by 3 Body Problem. Focuses on intuitive navigation and immersive interaction to enhance training, education, and research.",
        type: "report",
        url: "/pdf/vr-seminar-report.pdf",
        label: "Read Seminar Report",
      },
      {
        title: "Zensis: VR Meditation",
        description: "Designed and developed a VR experience using Unity 3D that counteracts motion sickness while promoting mindfulness. The system uses procedural natural environments and spatial audio to ground the user.",
        type: "video",
        url: "https://www.youtube.com/embed/v0EcgNICXJQ",
      },
      {
        title: "OVR Lap: Multi-Location Perception",
        description: "Represented a CHI conference paper on multi-location VR perception through investigation and study of the interaction concepts. Designed a comprehensive poster and delivered a poster presentation for the seminar.",
        type: "prototype",
        url: "https://www.behance.net/gallery/202737945/Poster-on-the-research-paper-OVRLAP-perc",
        label: "View Behance Poster",
      },
    ],
  },
  {
    id: "fintech-product-suite",
    category: "Professional Work",
    year: "2022 - 2023",
    title: "Fintech Product Suite",
    subtitle: "The Pioneers Solutions, Egypt",
    description: "Designed comprehensive fintech solutions including a mobile wallet application and corporate banking dashboard for the Egyptian market.",
    image: "/images/fintech-product.png",
    role: "UI/UX Designer",
    team: null,
    prototype: null,
    letter:"/pdf/recommendation-letter.pdf",
    tools: ["Fintech", "Mobile Design", "Web Dashboard", "Design Systems", "Figma", "UI/UX"],
    icons: ["/icons/phone.png", "/icons/card.png"],
    outcomes: [
      "Delivered high-fidelity prototypes for both mobile and web platforms",
      "Established a scalable design system for future fintech products",
      "Improved user task completion rates for key financial operations in testing",
      "Successfully handed off designs for development and implementation",
    ],
    challenges: "Coming from a culture where people read right-to-left and exhibit right-to-left scanning and skimming behaviors, I faced a unique challenge when traveling to Egypt to work with The Pioneers Solutions. The core challenge was understanding how users in Egypt—who read Arabic from right to left—perceive, navigate, and interact with digital interfaces. This required me to step completely out of my comfort zone and immerse myself in an entirely different design culture. I needed to follow a rigorous User-Centered Design (UCD) process to create experiences that felt natural and intuitive for a mass audience whose reading direction, visual hierarchy expectations, and interaction patterns were fundamentally different from what I was accustomed to. Beyond the technical aspects of RTL (right-to-left) interface design, I had to understand cultural nuances: how Egyptian users build trust with financial applications, what visual metaphors resonate in their context, and how varying levels of digital literacy across the population influenced design decisions. The Egyptian fintech market was rapidly evolving, and users needed accessible, trustworthy, and efficient digital financial tools that respected their cultural context while maintaining strict security and usability standards. This wasn't just about mirroring interfaces—it was about rethinking information architecture, visual hierarchy, navigation patterns, and even color symbolism to align with local expectations and behaviors.",
    approach: "I led the design of two key products: a mobile wallet app focused on quick transactions and bill payments, and a comprehensive web dashboard for SME financial management. The mobile app prioritized speed and clarity, using large touch targets, simplified flows, and biometric authentication to build trust. For the dashboard, I focused on data visualization and hierarchy, enabling business owners to track cash flow and expenses at a glance. Both projects shared a unified design system adapted for their respective platforms (iOS/Android vs. Web), ensuring brand consistency while optimizing for specific device constraints.",
    subProjects: [
      {
        title: "YouPay Mobile Wallet",
        description: "A user-friendly mobile wallet designed for seamless daily transactions, bill payments, and peer-to-peer transfers.",
        type: "prototype",
        url: " https://www.behance.net/gallery/174355697/YouPay-Fintech-POS-Application",
        label: "View YouPay on Behance",
      },
      {
        title: "SATApay Corporate Dashboard",
        description: "A data-used analytics dashboard for businesses to monitor accounts, generate reports, and manage payroll.",
        type: "prototype",
        url: "https://www.behance.net/gallery/163587699/E-wallet-Mobile-Application-SataPay",
        label: "View SATApay on Behance",
      },
    ],
  },
  {
    id: "design-for-fiction",
    category: "Academic Seminar @ Uni Siegen",
    year: "2023",
    title: "Design for Fiction: Speculative Futures",
    subtitle: "Critical Design & Diegetic Prototyping",
    description: "A speculative design project exploring the ethical implications of future neuro-interfaces through diegetic prototyping and fictional narratives.",
    image: "/images/design-fiction.png",
    role: "Student",
    team: null,
    prototype: null,
    tools: ["Speculative Design", "Design Fiction", "Storytelling", "Video Production", "Critical Theory"],
    icons: ["/icons/bulb.png", "/icons/film.png", "/icons/brain.png"],
    outcomes: [
      "Produced a high-quality short film illustrating the diegetic prototype in use",
      "Created a suite of supporting artifacts (print ads, packaging, digital interface mockups)",
      "Facilitated a class debate on neuro-ethics and data privacy",
      "Received highest distinction for narrative coherence and critical depth",
    ],
    subProjects: [
      {
        title: "The Film: 'Memory for Sale'",
        description: "A 3-minute short film depicting the social dynamics of a world where memories are currency.",
        type: "video",
        url: "https://your-video-link.com",
      },
      {
        title: "Project Documentation",
        description: "A detailed look at the world-building process, prop construction, and theoretical framework.",
        type: "report",
        url: "#",
        label: "Read Process Book",
      },
    ],
  },
  {
    id: "protrack-athlete-performance",
    category: "Personal Project",
    year: "2022",
    title: "ProTrack: Athlete Performance Analytics",
    subtitle: "Data-Driven Training Interface",
    description: "A mobile application designed for elite athletes to track biomechanical data and recovery metrics in real-time.",
    image: "/images/protrack.png",
    role: "Product Designer",
    team: null,
    prototype: null,
    tools: ["Mobile App", "Data Visualization", "Sports Tech", "iOS", "Dark Mode UI"],
    icons: ["/icons/graph.png", "/icons/phone.png", "/icons/thunder.png"],
    challenges: "Elite athletes generate massive amounts of data from wearables, but raw numbers are often overwhelming and actionable insights are lost. Existing apps were either too casual (gamified fitness) or too scientific (raw spreadsheets). The goal was to bridge this gap.",
    outcomes: [
      "Designed 25+ screens covering the core user flow",
      "Created a custom icon set for biomechanical metrics",
      "Validated the 'Readiness' concept through interviews with semi-pro runners",
    ],
    designOverview: {
      "title": "Design Overview",
      "image": "/images/athlete-design.png",
    },
    interactivePrototype: {
      "title": "Interactive Prototype",
      "link": "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FBBRuaHac2VLjEVvngN13dj%2FFreshFX-Test-Project%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D69-539%26viewport%3D126%252C293%252C0.14%26t%3DvtBACH8AjUny4VEq-1%26scaling%3Dscale-down%26starting-point-node-id%3D88%253A464%26mode%3Ddesign",
    },
  }
];