/* ==========================================================================
   VALAIVADIVAM — TRANSLATIONS

   One entry per language. Every visible string on the site lives here, so
   adding a language means adding one more block below — no HTML is duplicated.

   HOW IT WORKS
   - Static text in index.html carries  data-i18n="some.key"
   - Content built by JS looks up the same keys through T("some.key")
   - Keys are dot-paths into the objects below.

   ADDING A LANGUAGE
   1. Copy the `en` block, translate the values (never the keys).
   2. Add it under a new code, e.g. `te: { ... }`.
   3. Add one <li> to the language dropdown in index.html.

   NOTE: keys must match across all languages. Anything missing falls back to
   English rather than showing a blank, so a partial translation is safe.
   ========================================================================== */

const VV_LANGUAGES = [
  { code: "en", label: "English",  short: "EN" },
  { code: "ta", label: "தமிழ்",     short: "TA" },
  { code: "hi", label: "हिन्दी",      short: "HI" }
];

const VV_TRANSLATIONS = {

  /* ======================================================================
     ENGLISH
     ====================================================================== */
  en: {
    nav: {
      home: "Home", about: "About", services: "Services",
      academy: "Academy", portfolio: "Portfolio", contact: "Contact",
      language: "Language", theme: "Theme",
      themeLight: "Light mode", themeDark: "Dark mode"
    },

    common: {
      getStarted: "Get Started",
      viewServices: "View Services",
      enquireNow: "Enquire Now",
      submitEnquiry: "Submit Enquiry",
      sendEnquiry: "Send Enquiry",
      sending: "Sending…",
      required: "required",
      showAll: "Show all {n} projects",
      showLess: "Show less",
      close: "Close",
      optional: "Optional",
      viewDetails: "View details",
      trainingMode: "Training Mode",
      onlineMode: "100% Online"
    },

    hero: {
      tagline: "Design • Web • Branding",
      titleA: "Creative Ideas.",
      titleB: "Digital Solutions.",
      support: "We create a strong digital identity for your business.",
      visualTitle: "VALAIVADIVAM DIGITAL",
      visualLine1: "Creative Design",
      visualLine2: "Modern Web Experience",
      text: "Modern websites, powerful brand identities and creative digital designs that help your business grow."
    },

    about: {
      eyebrow: "About us",
      title: "Build Your Brand With Valaivadivam",
      support: "Take your brand to the next level.",
      text: "At Valaivadivam, we help businesses build a strong digital presence through creative design, modern websites and professional branding solutions.",
      text2: "From a first website to a complete brand identity, we handle the detail so you can focus on running your business.",
      value: {
        title: "How We Add Value",
        understand: { title: "Understand", text: "We understand your business, goals and requirements before starting." },
        create:     { title: "Create",     text: "We turn your ideas into modern, creative and practical digital experiences." },
        grow:       { title: "Grow",       text: "We build digital solutions that help strengthen your online presence and support business growth." }
      },
      highlights: {
        creative: "Creative Approach",
        modern: "Modern Solutions",
        quality: "Professional Quality",
        client: "Client Focused"
      }
    },

    services: {
      eyebrow: "What we do",
      title: "Our Services",
      subtitle: "Everything you need to build and grow your digital presence.",
      support: "",   /* empty: the subtitle above already says this. Empty strings are hidden. */
      web:      { title: "Website Development",  text: "Modern, responsive and professional websites designed to help your business grow online." },
      logo:     { title: "Logo Design",          text: "Unique and memorable logo designs that create a strong identity for your brand." },
      poster:   { title: "Poster Design",        text: "Creative promotional and business posters designed to capture attention." },
      branding: { title: "Branding",             text: "Complete branding solutions that create a consistent and professional brand identity." },
      social:   { title: "Social Media Design",  text: "Creative social media designs that help your brand connect and engage with your audience." },
      video:    { title: "Video Editing",        text: "Reels, shorts, YouTube videos, promotional and corporate films, motion graphics and basic video animation." },
      digital:  { title: "Digital Solutions",    text: "Custom digital solutions designed around your business needs." }
    },

    why: {
      title: "Why Choose Valaivadivam?",
      creative:  "Creative Designs",
      pricing:   "Affordable Pricing",
      delivery:  "On-Time Delivery",
      satisfied: "100% Satisfaction",
      modern:    "Modern & Professional",
      custom:    "Custom Solutions"
    },

    academy: {
      eyebrow: "Academy",
      title: "VALAIVADIVAM ACADEMY",
      subtitle: "100% Online IT Training",
      support: "Practical IT training through live online classes.",
      benefits: {
        live:    "Live Online Classes",
        project: "Real-World Project Training",
        hands:   "Practical Hands-on Training",
        mentor:  "Mentor & Doubt Support",
        cert:    "Course Completion Certificate",
        skills:  "Industry-Oriented Skills"
      },
      coursesTitle: "Our Courses",
      courses: {
        fsPython: {
          title: "Full Stack Python Development",
          text: "Build complete web applications with Python on the back end and a modern front end.",
          points: ["Python & Django basics to advanced", "REST APIs and database integration", "Front-end fundamentals", "Full project build"]
        },
        fsWeb: {
          title: "Full Stack Web Development",
          text: "Learn both front-end and back-end development and ship a working web application.",
          points: ["HTML, CSS, JavaScript", "Back-end and APIs", "Database design", "Deployment basics"]
        },
        frontend: {
          title: "Front-End Development",
          text: "Turn designs into responsive, accessible interfaces that work on every screen.",
          points: ["HTML5 and modern CSS", "JavaScript and the DOM", "Responsive layouts", "Practical UI projects"]
        },
        backend: {
          title: "Back-End Development",
          text: "Build the server side: application logic, APIs and data handling.",
          points: ["Server-side programming", "REST API design", "Authentication basics", "Working with databases"]
        },
        mysql: {
          title: "MySQL & Database Management",
          text: "Design, query and manage relational databases with confidence.",
          points: ["SQL from the ground up", "Schema and table design", "Joins, indexes and queries", "Backup and maintenance"]
        },
        uiux: {
          title: "UI/UX Design",
          text: "Plan and design interfaces that are clear to use and pleasant to look at.",
          points: ["Design fundamentals", "Wireframes and prototypes", "Design tools workflow", "Portfolio project"]
        },
        graphic: {
          title: "Graphic Design",
          text: "Create logos, posters and social media designs for real business needs.",
          points: ["Colour, layout and typography", "Logo and poster design", "Social media creatives", "Print and digital output"]
        },
        digitalMarketing: {
          title: "Digital Marketing",
          text: "Learn the fundamentals of digital marketing, social media, content strategy, SEO and online promotion through practical training.",
          points: ["Social media marketing", "Content and campaign planning", "SEO fundamentals", "Analytics and reporting"]
        }
      }
    },

    process: {
      eyebrow: "How we work",
      title: "Our Process",
      subtitle: "A clear path from first conversation to finished project.",
      discuss: { title: "Discuss", text: "Understand the client's requirements." },
      plan:    { title: "Plan",    text: "Define the project scope and approach." },
      design:  { title: "Design",  text: "Create the visual/UI/UX direction." },
      develop: { title: "Develop", text: "Build the website, application, design, or digital solution." },
      test:    { title: "Test",    text: "Test functionality, responsiveness, and quality." },
      deliver: { title: "Deliver", text: "Launch/deliver the completed project." }
    },

    portfolio: {
      eyebrow: "Portfolio",
      title: "Our Work",
      subtitle: "Creative work designed to make your brand stand out.",
      support: "",
      status: "Showing {shown} of {total} projects in {category}.",
      categories: {
        all: "All", websites: "Websites", logos: "Logos",
        posters: "Posters", social: "Social Media", branding: "Branding"
      },
      labels: {
        client: "Client / Brand", industry: "Industry", overview: "Project Overview",
        problem: "Problem / Requirement", solution: "Solution",
        tools: "Technologies / Tools", result: "Result / Outcome",
        visit: "Visit Website"
      },
      items: {
        p1: { title: "Business Website",   text: "Responsive multi-page site for a local service business." },
        p2: { title: "Brand Logo Mark",    text: "Clean wordmark and symbol built for print and screen." },
        p3: { title: "Promotional Poster", text: "Offer poster designed for print and WhatsApp sharing." },
        p4: { title: "Instagram Post Set", text: "Matching post templates for a month of content." },
        p5: { title: "Brand Identity Kit", text: "Logo, colour palette, typography and usage guide." },
        p6: { title: "Portfolio Website",  text: "Single-page site with gallery and enquiry form." },
        p7: { title: "Event Poster",       text: "Typographic poster for a community event." },
        p8: { title: "Shop Logo",          text: "Retail logo built to stay readable on a signboard." },
        p9: { title: "Social Media Kit",   text: "Story frames, highlight covers and profile assets." }
      }
    },

    clients: {
      eyebrow: "Partners",
      title: "Client Partners",
      subtitle: "Businesses we've had the opportunity to work with.",
      support: ""
    },

    testimonials: {
      eyebrow: "Testimonials",
      title: "What Our Clients Say",
      subtitle: "Real feedback from the people we work with.",
      placeholder: "Client testimonial will appear here.",
      placeholderName: "Awaiting client feedback"
    },

    faq: {
      eyebrow: "FAQ",
      title: "Frequently Asked Questions",
      subtitle: "Quick answers about our services and our academy.",
      q1: { q: "What services does VALAIVADIVAM provide?", a: "Website development, logo design, poster design, branding, social media design, video editing and custom digital solutions." },
      q2: { q: "Do you build custom websites?", a: "Yes. Every site is built around your business rather than fitted into a fixed template." },
      q4: { q: "Do you provide video editing?", a: "Yes \u2014 reels and shorts, YouTube videos, promotional and corporate films, motion graphics and basic animation." },
      q5: { q: "Are the courses completely online?", a: "Yes. All Valaivadivam Academy courses currently run 100% online." },
      q6: { q: "Do courses include live online classes?", a: "Yes. Classes are live, so you can ask questions during the session." },
      q7: { q: "Is real-world project training included?", a: "Yes. Every course is hands-on and built around real project work, not theory alone." },
      q8: { q: "Will I receive a Course Completion Certificate?", a: "Yes. You receive a Course Completion Certificate from Valaivadivam once you finish." },
      q9: { q: "How can I enquire about a service or course?", a: "Use the contact form for services, or Enquire Now on any course card \u2014 the course is filled in for you." }
    },

    cta: {
      businessTitle: "Have a Project? Let's Talk",
      businessText: "Tell us what you're building and we'll come back with an approach and a clear quote.",
      businessBtn: "Start Your Project",
      academyTitle: "Looking to Learn? Enquire Now",
      academyText: "Live online classes, real project work and a Course Completion Certificate.",
      academyBtn: "Enquire About a Course"
    },

    contact: {
      eyebrow: "Contact",
      title: "Let's Talk About Your Project",
      support: "",
      subtitle: "Have a project in mind? Send us your requirements and we'll get back to you.",
      support2: "",
      email: "Email", phone: "Phone", instagram: "Instagram",
      emailHint: "Best for detailed briefs and files",
      phoneHint: "Call or WhatsApp us directly",
      instagramHint: "See our latest design work",
      nextTitle: "What happens next",
      next1: "We read your requirements and reply on your preferred channel.",
      next2: "You get a clear quote and timeline before any work starts.",
      next3: "We design, you review, and we refine until it's right."
    },

    form: {
      title: "Send an enquiry",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      company: "Business / Company Name",
      service: "Service Required",
      message: "Project Details / Message",
      course: "Course",
      chooseService: "Choose a service",
      chooseCourse: "Choose a course",
      namePlaceholder: "Your name",
      emailPlaceholder: "name@example.com",
      phonePlaceholder: "10-digit mobile number",
      messagePlaceholder: "Optional — what are you building, and when do you need it?",
      courseMessagePlaceholder: "Optional — your background, preferred timing, or any question.",
      courseTitle: "Course Enquiry",
      courseSubtitle: "Fill this in and we'll contact you shortly about the course.",
      success: "Thank you! Your enquiry has been received. We'll get back to you soon.",
      courseSuccess: "Thank you! Your enquiry has been submitted successfully. We'll contact you shortly.",
      failure: "We couldn't send your enquiry. Please try again, or email us directly.",
      errors: {
        name: "Please enter your full name.",
        nameShort: "Please enter at least 2 characters.",
        email: "Please enter your email address.",
        emailInvalid: "Enter a valid email, like name@example.com.",
        phone: "Please enter your phone number.",
        phoneInvalid: "Enter a valid phone number with 10 to 15 digits.",
        service: "Please choose the service you need.",
        course: "Please choose a course."
      }
    },

    footer: {
      text: "VALAIVADIVAM builds websites, logos, posters and brand identities for businesses that want to look professional online.",
      quickLinks: "Quick Links",
      contact: "Contact",
      website: "valaivadivam.in",
      rights: "© 2026 Valaivadivam. All Rights Reserved.",
      backToTop: "Back to top ↑",
      skip: "Skip to content"
    }
  },

  /* ======================================================================
     தமிழ் — TAMIL
     ====================================================================== */
  ta: {
    nav: {
      home: "முகப்பு", about: "எங்களைப் பற்றி", services: "சேவைகள்",
      academy: "அகாடமி", portfolio: "எங்கள் பணிகள்", contact: "தொடர்பு",
      language: "மொழி", theme: "தீம்",
      themeLight: "ஒளி பயன்முறை", themeDark: "இருள் பயன்முறை"
    },

    common: {
      getStarted: "தொடங்குங்கள்",
      viewServices: "சேவைகளைப் பார்க்க",
      enquireNow: "விசாரிக்க",
      submitEnquiry: "விசாரணையை சமர்ப்பிக்க",
      sendEnquiry: "விசாரணையை அனுப்பு",
      sending: "அனுப்பப்படுகிறது…",
      required: "அவசியம்",
      showAll: "அனைத்து {n} பணிகளையும் காட்டு",
      showLess: "குறைவாக காட்டு",
      close: "மூடு",
      optional: "விருப்பத்தேர்வு",
      viewDetails: "விவரங்களைப் பார்க்க",
      trainingMode: "பயிற்சி முறை",
      onlineMode: "100% ஆன்லைன்"
    },

    hero: {
      tagline: "டிசைன் • வெப் • பிராண்டிங்",
      titleA: "படைப்பாற்றல் சிந்தனைகள்.",
      titleB: "டிஜிட்டல் தீர்வுகள்.",
      support: "உங்கள் Business-க்கு ஒரு சிறந்த Digital Identity உருவாக்குவோம்.",
      visualTitle: "VALAIVADIVAM DIGITAL",
      visualLine1: "படைப்பாற்றல் வடிவமைப்பு",
      visualLine2: "நவீன வெப் அனுபவம்",
      text: "உங்கள் வணிகம் வளர உதவும் நவீன Websites, வலுவான Brand Identity மற்றும் படைப்பாற்றல் மிக்க Digital Designs-ஐ நாங்கள் உருவாக்குகிறோம்."
    },

    about: {
      eyebrow: "எங்களைப் பற்றி",
      title: "வலைவடிவத்துடன் உங்கள் Brand-ஐ உருவாக்குங்கள்",
      support: "உங்கள் Brand-ஐ அடுத்த நிலைக்கு கொண்டு செல்லுங்கள்.",
      text: "வலைவடிவத்தில், படைப்பாற்றல் மிக்க வடிவமைப்பு, நவீன Websites மற்றும் தொழில்முறை Branding தீர்வுகள் மூலம் வலுவான Digital Presence உருவாக்க உதவுகிறோம்.",
      text2: "உங்கள் Business-க்கு வலுவான Digital Presence உருவாக்க உதவுகிறோம்.",
      value: {
        title: "நாங்கள் எப்படி மதிப்பேற்றம் சேர்க்கிறோம்",
        understand: { title: "புரிதல்", text: "தொடங்குவதற்கு முன் உங்கள் வணிகம், இலக்குகள் மற்றும் தேவைகளை புரிந்து கொள்கிறோம்." },
        create:     { title: "உருவாக்கம்", text: "உங்கள் கற்பனைகளை நவீன, படைப்பாற்றல் மிக்க மற்றும் நடைமுறை Digital அனுபவங்களாக மாற்றுகிறோம்." },
        grow:       { title: "வளர்ச்சி", text: "உங்கள் Online இருப்பை வலுப்படுத்தி வணிக வளர்ச்சிக்கு உதவும் Digital தீர்வுகளை உருவாக்குகிறோம்." }
      },
      highlights: {
        creative: "படைப்பாற்றல் அணுகுமுறை",
        modern: "நவீன தீர்வுகள்",
        quality: "தொழில்முறை தரம்",
        client: "வாடிக்கையாளர் மையம்"
      }
    },

    services: {
      eyebrow: "நாங்கள் செய்வது",
      title: "எங்கள் சேவைகள்",
      subtitle: "உங்கள் Digital Presence-ஐ உருவாக்கவும் வளர்க்கவும் தேவையான அனைத்தும்.",
      support: "உங்கள் Digital Presence-ஐ உருவாக்கவும் வளர்க்கவும் தேவையான முழுமையான சேவைகள்.",
      web:      { title: "Website Development",  text: "உங்கள் Business-க்கான நவீன மற்றும் Responsive Website." },
      logo:     { title: "Logo Design",          text: "உங்கள் Brand-க்கு தனித்துவமான Logo Design." },
      poster:   { title: "Poster Design",        text: "கவனத்தை ஈர்க்கும் Creative Poster Designs." },
      branding: { title: "Branding",             text: "உங்கள் Business-க்கு Professional Brand Identity." },
      social:   { title: "Social Media Design",  text: "உங்கள் Social Media Presence-ஐ வலுப்படுத்தும் Creative Designs." },
      video:    { title: "Video Editing",        text: "Reels, Shorts, YouTube வீடியோக்கள், Promotional மற்றும் Corporate வீடியோக்கள், Motion Graphics மற்றும் அடிப்படை Video Animation." },
      digital:  { title: "Digital Solutions",    text: "உங்கள் Business தேவைகளுக்கான Custom Digital Solutions." }
    },

    why: {
      title: "ஏன் வலைவடிவம்?",
      creative:  "படைப்பாற்றல் வடிவமைப்பு",
      pricing:   "நியாயமான விலை",
      delivery:  "சரியான நேரத்தில் வழங்கல்",
      satisfied: "100% திருப்தி",
      modern:    "நவீனமும் தொழில்முறையும்",
      custom:    "தனிப்பயன் தீர்வுகள்"
    },

    academy: {
      eyebrow: "அகாடமி",
      title: "வலைவடிவம் அகாடமி",
      subtitle: "100% ஆன்லைன் IT பயிற்சி",
      support: "நேரடி Online வகுப்புகள் மூலம் Practical IT Training.",
      benefits: {
        live:    "நேரடி ஆன்லைன் வகுப்புகள்",
        project: "நிஜ உலக Project பயிற்சி",
        hands:   "நடைமுறை கைவினை பயிற்சி",
        mentor:  "வழிகாட்டி மற்றும் சந்தேக ஆதரவு",
        cert:    "பாட நிறைவு சான்றிதழ்",
        skills:  "தொழில் சார்ந்த திறன்கள்"
      },
      coursesTitle: "எங்கள் பாடங்கள்",
      courses: {
        fsPython: {
          title: "Full Stack Python Development",
          text: "Back end-இல் Python மற்றும் நவீன Front end உடன் முழுமையான Web Applications உருவாக்குங்கள்.",
          points: ["Python & Django அடிப்படை முதல் மேம்பட்ட நிலை", "REST API மற்றும் Database இணைப்பு", "Front-end அடிப்படைகள்", "முழுமையான Project உருவாக்கம்"]
        },
        fsWeb: {
          title: "Full Stack Web Development",
          text: "Front-end மற்றும் Back-end இரண்டையும் கற்று ஒரு செயல்படும் Web Application உருவாக்குங்கள்.",
          points: ["HTML, CSS, JavaScript", "Back-end மற்றும் API", "Database வடிவமைப்பு", "Deployment அடிப்படைகள்"]
        },
        frontend: {
          title: "Front-End Development",
          text: "வடிவமைப்புகளை எல்லா திரைகளிலும் இயங்கும் Responsive Interfaces ஆக மாற்றுங்கள்.",
          points: ["HTML5 மற்றும் நவீன CSS", "JavaScript மற்றும் DOM", "Responsive Layouts", "நடைமுறை UI Projects"]
        },
        backend: {
          title: "Back-End Development",
          text: "Server பக்கத்தை உருவாக்குங்கள்: Application Logic, API மற்றும் Data கையாளுதல்.",
          points: ["Server-side Programming", "REST API வடிவமைப்பு", "Authentication அடிப்படைகள்", "Database உடன் பணிபுரிதல்"]
        },
        mysql: {
          title: "MySQL & Database Management",
          text: "Relational Databases-ஐ நம்பிக்கையுடன் வடிவமைத்து நிர்வகியுங்கள்.",
          points: ["அடிப்படையிலிருந்து SQL", "Schema மற்றும் Table வடிவமைப்பு", "Joins, Indexes மற்றும் Queries", "Backup மற்றும் பராமரிப்பு"]
        },
        uiux: {
          title: "UI/UX Design",
          text: "பயன்படுத்த எளிதான, பார்க்க அழகான Interfaces-ஐ திட்டமிட்டு வடிவமைக்கவும்.",
          points: ["வடிவமைப்பு அடிப்படைகள்", "Wireframes மற்றும் Prototypes", "Design Tools பணிமுறை", "Portfolio Project"]
        },
        graphic: {
          title: "Graphic Design",
          text: "நிஜ வணிகத் தேவைகளுக்கான Logos, Posters மற்றும் Social Media Designs உருவாக்குங்கள்.",
          points: ["நிறம், அமைப்பு மற்றும் Typography", "Logo மற்றும் Poster வடிவமைப்பு", "Social Media Creatives", "Print மற்றும் Digital வெளியீடு"]
        },
        digitalMarketing: {
          title: "Digital Marketing",
          text: "Digital Marketing, Social Media, Content Strategy, SEO மற்றும் Online விளம்பரத்தின் அடிப்படைகளை நடைமுறை பயிற்சி மூலம் கற்றுக்கொள்ளுங்கள்.",
          points: ["Social Media Marketing", "Content மற்றும் Campaign திட்டமிடல்", "SEO அடிப்படைகள்", "Analytics மற்றும் அறிக்கை"]
        }
      }
    },

    process: {
      eyebrow: "நாங்கள் எப்படி வேலை செய்கிறோம்",
      title: "எங்கள் பணிமுறை",
      subtitle: "முதல் உரையாடலில் இருந்து முடிக்கப்பட்ட Project வரை தெளிவான பாதை.",
      discuss: { title: "கலந்துரையாடல்", text: "வாடிக்கையாளரின் தேவைகளைப் புரிந்து கொள்ளுதல்." },
      plan:    { title: "திட்டமிடல்",    text: "Project-இன் நோக்கத்தையும் அணுகுமுறையையும் வரையறுத்தல்." },
      design:  { title: "வடிவமைப்பு",    text: "Visual / UI / UX திசையை உருவாக்குதல்." },
      develop: { title: "உருவாக்கம்",    text: "Website, Application, Design அல்லது Digital தீர்வை உருவாக்குதல்." },
      test:    { title: "சோதனை",        text: "செயல்பாடு, Responsiveness மற்றும் தரத்தை சோதித்தல்." },
      deliver: { title: "வழங்கல்",       text: "முடிக்கப்பட்ட Project-ஐ வழங்குதல்." }
    },

    portfolio: {
      eyebrow: "எங்கள் பணிகள்",
      title: "எங்கள் வேலை",
      subtitle: "உங்கள் Brand-ஐ தனித்து நிற்கச் செய்யும் படைப்பாற்றல் வேலை.",
      support: "உங்கள் Brand-ஐ தனித்துவமாக காட்டும் Creative Designs.",
      status: "{category} பிரிவில் {total}-இல் {shown} பணிகள் காட்டப்படுகின்றன.",
      categories: {
        all: "அனைத்தும்", websites: "Websites", logos: "Logos",
        posters: "Posters", social: "Social Media", branding: "Branding"
      },
      labels: {
        client: "வாடிக்கையாளர் / Brand", industry: "தொழில்துறை", overview: "Project மேலோட்டம்",
        problem: "பிரச்சனை / தேவை", solution: "தீர்வு",
        tools: "தொழில்நுட்பங்கள் / கருவிகள்", result: "முடிவு",
        visit: "Website-ஐப் பார்வையிட"
      },
      items: {
        p1: { title: "வணிக Website",        text: "உள்ளூர் சேவை வணிகத்திற்கான Responsive பல பக்க Website." },
        p2: { title: "Brand Logo",           text: "அச்சு மற்றும் திரைக்கு ஏற்ற தெளிவான Wordmark மற்றும் சின்னம்." },
        p3: { title: "விளம்பர Poster",       text: "அச்சு மற்றும் WhatsApp பகிர்வுக்கான Offer Poster." },
        p4: { title: "Instagram Post தொகுப்பு", text: "ஒரு மாத உள்ளடக்கத்திற்கான பொருத்தமான Post Templates." },
        p5: { title: "Brand Identity Kit",   text: "Logo, வண்ணத் தட்டு, Typography மற்றும் பயன்பாட்டு வழிகாட்டி." },
        p6: { title: "Portfolio Website",    text: "Gallery மற்றும் விசாரணை படிவத்துடன் ஒரு பக்க Website." },
        p7: { title: "நிகழ்வு Poster",       text: "சமூக நிகழ்வுக்கான Typographic Poster." },
        p8: { title: "கடை Logo",             text: "Signboard-இல் தெளிவாகத் தெரியும் சில்லறை Logo." },
        p9: { title: "Social Media Kit",     text: "Story Frames, Highlight Covers மற்றும் Profile Assets." }
      }
    },

    clients: {
      eyebrow: "கூட்டாளிகள்",
      title: "வாடிக்கையாளர் கூட்டாளிகள்",
      subtitle: "நாங்கள் இணைந்து பணியாற்றிய வணிகங்கள்.",
      support: "எங்களுடன் இணைந்து பணியாற்றிய Business Partners."
    },

    testimonials: {
      eyebrow: "கருத்துக்கள்",
      title: "எங்கள் வாடிக்கையாளர்கள் சொல்வது",
      subtitle: "நாங்கள் இணைந்து பணியாற்றுபவர்களின் நேரடி கருத்துக்கள்.",
      placeholder: "வாடிக்கையாளர் கருத்து இங்கே தோன்றும்.",
      placeholderName: "கருத்துக்காக காத்திருக்கிறோம்"
    },

    faq: {
      eyebrow: "கேள்விகள்",
      title: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
      subtitle: "எங்கள் சேவைகள் மற்றும் அகாடமி பற்றிய விரைவான பதில்கள்.",
      q1: { q: "வலைவடிவம் என்னென்ன சேவைகளை வழங்குகிறது?", a: "Website Development, Logo Design, Poster Design, Branding, Social Media Design, Video Editing மற்றும் தனிப்பயன் Digital தீர்வுகள்." },
      q2: { q: "தனிப்பயன் Website உருவாக்குகிறீர்களா?", a: "ஆம். ஒவ்வொரு Website-ம் நிலையான Template-இல் பொருத்தப்படாமல், உங்கள் வணிகத்தை மையமாகக் கொண்டு உருவாக்கப்படுகிறது." },
      q4: { q: "Video Editing சேவை உள்ளதா?", a: "ஆம் — Reels, Shorts, YouTube வீடியோக்கள், Promotional மற்றும் Corporate வீடியோக்கள், Motion Graphics மற்றும் அடிப்படை Animation." },
      q5: { q: "பாடங்கள் முழுவதும் ஆன்லைனா?", a: "ஆம். வலைவடிவம் அகாடமியின் அனைத்து பாடங்களும் தற்போது 100% ஆன்லைனில் நடைபெறுகின்றன." },
      q6: { q: "நேரடி ஆன்லைன் வகுப்புகள் உள்ளதா?", a: "ஆம். வகுப்புகள் நேரடியாக நடத்தப்படுகின்றன, எனவே வகுப்பின் போதே கேள்விகள் கேட்கலாம்." },
      q7: { q: "நிஜ Project பயிற்சி உள்ளதா?", a: "ஆம். ஒவ்வொரு பாடமும் நடைமுறை சார்ந்தது; கோட்பாடு மட்டுமல்ல, நிஜ Project வேலையை மையமாகக் கொண்டது." },
      q8: { q: "பாட நிறைவு சான்றிதழ் கிடைக்குமா?", a: "ஆம். பாடத்தை முடித்ததும் வலைவடிவம் வழங்கும் பாட நிறைவு சான்றிதழ் கிடைக்கும்." },
      q9: { q: "சேவை அல்லது பாடம் பற்றி எப்படி விசாரிப்பது?", a: "சேவைகளுக்கு தொடர்பு படிவத்தைப் பயன்படுத்தவும்; பாடங்களுக்கு எந்த பாட அட்டையிலும் 'Enquire Now' அழுத்தவும் — பாடம் தானாகவே நிரப்பப்படும்." }
    },

    cta: {
      businessTitle: "Project உள்ளதா? பேசலாம்",
      businessText: "நீங்கள் என்ன உருவாக்குகிறீர்கள் என்று சொல்லுங்கள்; அணுகுமுறையுடனும் தெளிவான விலையுடனும் பதிலளிப்போம்.",
      businessBtn: "உங்கள் Project-ஐ தொடங்குங்கள்",
      academyTitle: "கற்க விரும்புகிறீர்களா? இப்போதே விசாரியுங்கள்",
      academyText: "நேரடி ஆன்லைன் வகுப்புகள், நிஜ Project வேலை மற்றும் பாட நிறைவு சான்றிதழ்.",
      academyBtn: "பாடம் பற்றி விசாரிக்க"
    },

    contact: {
      eyebrow: "தொடர்பு",
      title: "உங்கள் Project பற்றி பேசலாம்",
      support: "உங்கள் Project பற்றி பேசலாம்.",
      subtitle: "Project யோசனை உள்ளதா? உங்கள் தேவைகளை அனுப்புங்கள், நாங்கள் தொடர்பு கொள்கிறோம்.",
      support2: "உங்கள் தேவைகளை எங்களுக்கு அனுப்புங்கள். விரைவில் உங்களை தொடர்பு கொள்கிறோம்.",
      email: "மின்னஞ்சல்", phone: "தொலைபேசி", instagram: "Instagram",
      emailHint: "விரிவான தேவைகள் மற்றும் கோப்புகளுக்கு ஏற்றது",
      phoneHint: "நேரடியாக அழைக்கவும் அல்லது WhatsApp செய்யவும்",
      instagramHint: "எங்கள் சமீபத்திய வடிவமைப்புகளைப் பாருங்கள்",
      nextTitle: "அடுத்து என்ன நடக்கும்",
      next1: "உங்கள் தேவைகளைப் படித்து, நீங்கள் விரும்பும் வழியில் பதிலளிப்போம்.",
      next2: "வேலை தொடங்கும் முன் தெளிவான விலையும் கால அட்டவணையும் கிடைக்கும்.",
      next3: "நாங்கள் வடிவமைப்போம், நீங்கள் பார்வையிடுவீர்கள், சரியாகும் வரை மேம்படுத்துவோம்."
    },

    form: {
      title: "விசாரணை அனுப்பவும்",
      name: "முழுப் பெயர்",
      email: "மின்னஞ்சல் முகவரி",
      phone: "தொலைபேசி எண்",
      company: "வணிகம் / நிறுவனப் பெயர்",
      service: "தேவையான சேவை",
      message: "Project விவரங்கள் / செய்தி",
      course: "பாடம்",
      chooseService: "ஒரு சேவையைத் தேர்ந்தெடுக்கவும்",
      chooseCourse: "ஒரு பாடத்தைத் தேர்ந்தெடுக்கவும்",
      namePlaceholder: "உங்கள் பெயர்",
      emailPlaceholder: "name@example.com",
      phonePlaceholder: "10 இலக்க கைபேசி எண்",
      messagePlaceholder: "விருப்பத்தேர்வு — நீங்கள் என்ன உருவாக்குகிறீர்கள், எப்போது தேவை?",
      courseMessagePlaceholder: "விருப்பத்தேர்வு — உங்கள் பின்னணி, விரும்பும் நேரம் அல்லது கேள்வி.",
      courseTitle: "பாட விசாரணை",
      courseSubtitle: "இதை நிரப்புங்கள், பாடம் குறித்து விரைவில் தொடர்பு கொள்கிறோம்.",
      success: "நன்றி! உங்கள் விசாரணை பெறப்பட்டது. விரைவில் உங்களைத் தொடர்பு கொள்கிறோம்.",
      courseSuccess: "நன்றி! உங்கள் விசாரணை வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது. விரைவில் உங்களைத் தொடர்பு கொள்கிறோம்.",
      failure: "உங்கள் விசாரணையை அனுப்ப முடியவில்லை. மீண்டும் முயற்சிக்கவும் அல்லது நேரடியாக மின்னஞ்சல் அனுப்பவும்.",
      errors: {
        name: "உங்கள் முழுப் பெயரை உள்ளிடவும்.",
        nameShort: "குறைந்தது 2 எழுத்துகள் உள்ளிடவும்.",
        email: "உங்கள் மின்னஞ்சல் முகவரியை உள்ளிடவும்.",
        emailInvalid: "சரியான மின்னஞ்சலை உள்ளிடவும், எ.கா. name@example.com.",
        phone: "உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்.",
        phoneInvalid: "10 முதல் 15 இலக்கங்கள் கொண்ட சரியான எண்ணை உள்ளிடவும்.",
        service: "உங்களுக்குத் தேவையான சேவையைத் தேர்ந்தெடுக்கவும்.",
        course: "ஒரு பாடத்தைத் தேர்ந்தெடுக்கவும்."
      }
    },

    footer: {
      text: "தொழில்முறையாகத் தெரிய விரும்பும் வணிகங்களுக்காக வலைவடிவம் Websites, Logos, Posters மற்றும் Brand Identities உருவாக்குகிறது.",
      quickLinks: "விரைவு இணைப்புகள்",
      contact: "தொடர்பு",
      website: "valaivadivam.in",
      rights: "© 2026 வலைவடிவம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      backToTop: "மேலே செல்ல ↑",
      skip: "உள்ளடக்கத்திற்குச் செல்"
    }
  },

  /* ======================================================================
     हिन्दी — HINDI
     ====================================================================== */
  hi: {
    nav: {
      home: "होम", about: "हमारे बारे में", services: "सेवाएँ",
      academy: "अकादमी", portfolio: "हमारा काम", contact: "संपर्क",
      language: "भाषा", theme: "थीम",
      themeLight: "लाइट मोड", themeDark: "डार्क मोड"
    },

    common: {
      getStarted: "शुरू करें",
      viewServices: "सेवाएँ देखें",
      enquireNow: "पूछताछ करें",
      submitEnquiry: "पूछताछ भेजें",
      sendEnquiry: "पूछताछ भेजें",
      sending: "भेजा जा रहा है…",
      required: "आवश्यक",
      showAll: "सभी {n} प्रोजेक्ट दिखाएँ",
      showLess: "कम दिखाएँ",
      close: "बंद करें",
      optional: "वैकल्पिक",
      viewDetails: "विवरण देखें",
      trainingMode: "प्रशिक्षण माध्यम",
      onlineMode: "100% ऑनलाइन"
    },

    hero: {
      tagline: "डिज़ाइन • वेब • ब्रांडिंग",
      titleA: "रचनात्मक विचार.",
      titleB: "डिजिटल समाधान.",
      support: "आपके Business के लिए एक बेहतरीन Digital Identity बनाएँगे.",
      visualTitle: "VALAIVADIVAM DIGITAL",
      visualLine1: "रचनात्मक डिजाइन",
      visualLine2: "आधुनिक वेब अनुभव",
      text: "हम आधुनिक वेबसाइटें, मज़बूत ब्रांड पहचान और रचनात्मक डिजिटल डिज़ाइन बनाते हैं जो व्यवसायों को बढ़ने में मदद करते हैं।"
    },

    about: {
      eyebrow: "हमारे बारे में",
      title: "वलैवडिवम के साथ अपना ब्रांड बनाएँ",
      support: "अपने Brand को अगले स्तर पर ले जाइए.",
      text: "वलैवडिवम में, हम रचनात्मक डिज़ाइन, आधुनिक वेबसाइटों और पेशेवर ब्रांडिंग समाधानों के ज़रिए व्यवसायों को मज़बूत डिजिटल उपस्थिति बनाने में मदद करते हैं।",
      text2: "आपके Business के लिए मज़बूत Digital Presence बनाने में मदद करते हैं.",
      value: {
        title: "हम कैसे मूल्य जोड़ते हैं",
        understand: { title: "समझना", text: "शुरू करने से पहले हम आपके व्यवसाय, लक्ष्य और ज़रूरतों को समझते हैं।" },
        create:     { title: "बनाना",  text: "हम आपके विचारों को आधुनिक, रचनात्मक और व्यावहारिक डिजिटल अनुभवों में बदलते हैं।" },
        grow:       { title: "बढ़ना",   text: "हम ऐसे डिजिटल समाधान बनाते हैं जो आपकी ऑनलाइन उपस्थिति को मज़बूत करें और व्यावसायिक वृद्धि में मदद करें।" }
      },
      highlights: {
        creative: "रचनात्मक दृष्टिकोण",
        modern: "आधुनिक समाधान",
        quality: "पेशेवर गुणवत्ता",
        client: "ग्राहक केंद्रित"
      }
    },

    services: {
      eyebrow: "हम क्या करते हैं",
      title: "हमारी सेवाएँ",
      subtitle: "आपकी डिजिटल उपस्थिति बनाने और बढ़ाने के लिए सब कुछ।",
      support: "आपकी Digital Presence बनाने और बढ़ाने के लिए संपूर्ण सेवाएँ.",
      web:      { title: "Website Development",  text: "आपके व्यवसाय को ऑनलाइन बढ़ाने के लिए आधुनिक और Responsive वेबसाइटें।" },
      logo:     { title: "Logo Design",          text: "आपके ब्रांड को मज़बूत पहचान देने वाले अनोखे और यादगार लोगो।" },
      poster:   { title: "Poster Design",        text: "ध्यान खींचने वाले रचनात्मक प्रचार और व्यावसायिक पोस्टर।" },
      branding: { title: "Branding",             text: "एक सुसंगत और पेशेवर ब्रांड पहचान बनाने वाले संपूर्ण ब्रांडिंग समाधान।" },
      social:   { title: "Social Media Design",  text: "आपके ब्रांड को दर्शकों से जोड़ने वाले रचनात्मक सोशल मीडिया डिज़ाइन।" },
      video:    { title: "Video Editing",        text: "Reels और Shorts, YouTube वीडियो, प्रचार और कॉर्पोरेट वीडियो, Motion Graphics और बुनियादी Video Animation।" },
      digital:  { title: "Digital Solutions",    text: "आपके व्यवसाय की ज़रूरतों के अनुसार बनाए गए कस्टम डिजिटल समाधान।" }
    },

    why: {
      title: "वलैवडिवम ही क्यों?",
      creative:  "रचनात्मक डिज़ाइन",
      pricing:   "किफ़ायती कीमत",
      delivery:  "समय पर डिलीवरी",
      satisfied: "100% संतुष्टि",
      modern:    "आधुनिक और पेशेवर",
      custom:    "कस्टम समाधान"
    },

    academy: {
      eyebrow: "अकादमी",
      title: "वलैवडिवम अकादमी",
      subtitle: "100% ऑनलाइन IT प्रशिक्षण",
      support: "लाइव ऑनलाइन कक्षाओं के ज़रिए व्यावहारिक IT प्रशिक्षण.",
      benefits: {
        live:    "लाइव ऑनलाइन कक्षाएँ",
        project: "वास्तविक प्रोजेक्ट प्रशिक्षण",
        hands:   "व्यावहारिक हैंड्स-ऑन प्रशिक्षण",
        mentor:  "मेंटर और डाउट सपोर्ट",
        cert:    "कोर्स पूर्णता प्रमाणपत्र",
        skills:  "इंडस्ट्री-उन्मुख कौशल"
      },
      coursesTitle: "हमारे कोर्स",
      courses: {
        fsPython: {
          title: "Full Stack Python Development",
          text: "Back end पर Python और आधुनिक Front end के साथ पूर्ण वेब एप्लिकेशन बनाएँ।",
          points: ["Python और Django बुनियादी से उन्नत तक", "REST API और डेटाबेस इंटीग्रेशन", "Front-end की बुनियादी बातें", "पूरा प्रोजेक्ट निर्माण"]
        },
        fsWeb: {
          title: "Full Stack Web Development",
          text: "Front-end और Back-end दोनों सीखें और एक चालू वेब एप्लिकेशन बनाएँ।",
          points: ["HTML, CSS, JavaScript", "Back-end और API", "डेटाबेस डिज़ाइन", "Deployment की बुनियादी बातें"]
        },
        frontend: {
          title: "Front-End Development",
          text: "डिज़ाइनों को हर स्क्रीन पर चलने वाले Responsive इंटरफ़ेस में बदलें।",
          points: ["HTML5 और आधुनिक CSS", "JavaScript और DOM", "Responsive Layouts", "व्यावहारिक UI प्रोजेक्ट"]
        },
        backend: {
          title: "Back-End Development",
          text: "सर्वर साइड बनाएँ: एप्लिकेशन लॉजिक, API और डेटा हैंडलिंग।",
          points: ["Server-side प्रोग्रामिंग", "REST API डिज़ाइन", "Authentication की बुनियादी बातें", "डेटाबेस के साथ काम"]
        },
        mysql: {
          title: "MySQL & Database Management",
          text: "रिलेशनल डेटाबेस को आत्मविश्वास से डिज़ाइन करें और प्रबंधित करें।",
          points: ["शुरुआत से SQL", "Schema और Table डिज़ाइन", "Joins, Indexes और Queries", "Backup और रखरखाव"]
        },
        uiux: {
          title: "UI/UX Design",
          text: "ऐसे इंटरफ़ेस बनाएँ जो उपयोग में सरल और देखने में सुंदर हों।",
          points: ["डिज़ाइन की बुनियादी बातें", "Wireframes और Prototypes", "डिज़ाइन टूल वर्कफ़्लो", "पोर्टफ़ोलियो प्रोजेक्ट"]
        },
        graphic: {
          title: "Graphic Design",
          text: "वास्तविक व्यावसायिक ज़रूरतों के लिए लोगो, पोस्टर और सोशल मीडिया डिजाइन बनाएँ।",
          points: ["रंग, लेआउट और Typography", "लोगो और पोस्टर डिजाइन", "सोशल मीडिया क्रिएटिव", "प्रिंट और डिजिटल आउटपुट"]
        },
        digitalMarketing: {
          title: "Digital Marketing",
          text: "डिजिटल मार्केटिंग, सोशल मीडिया, कंटेंट रणनीति, SEO और ऑनलाइन प्रचार की बुनियादी बातें व्यावहारिक प्रशिक्षण से सीखें।",
          points: ["सोशल मीडिया मार्केटिंग", "कंटेंट और कैम्पेन योजना", "SEO की बुनियादी बातें", "Analytics और रिपोर्टिंग"]
        }
      }
    },

    process: {
      eyebrow: "हम कैसे काम करते हैं",
      title: "हमारी प्रक्रिया",
      subtitle: "पहली बातचीत से पूरे प्रोजेक्ट तक एक स्पष्ट रास्ता।",
      discuss: { title: "चर्चा", text: "ग्राहक की ज़रूरतों को समझना।" },
      plan:    { title: "योजना", text: "प्रोजेक्ट का दायरा और तरीका तय करना।" },
      design:  { title: "डिज़ाइन", text: "Visual / UI / UX दिशा तैयार करना।" },
      develop: { title: "विकास", text: "वेबसाइट, एप्लिकेशन, डिज़ाइन या डिजिटल समाधान बनाना।" },
      test:    { title: "परीक्षण", text: "कार्यक्षमता, Responsiveness और गुणवत्ता की जाँच।" },
      deliver: { title: "डिलीवरी", text: "पूरा प्रोजेक्ट लॉन्च करना / सौंपना।" }
    },

    portfolio: {
      eyebrow: "पोर्टफ़ोलियो",
      title: "हमारा काम",
      subtitle: "ऐसा रचनात्मक काम जो आपके ब्रांड को अलग बनाए।",
      support: "आपके Brand को अलग दिखाने वाले Creative Designs.",
      status: "{category} श्रेणी में {total} में से {shown} प्रोजेक्ट दिखाए जा रहे हैं।",
      categories: {
        all: "सभी", websites: "Websites", logos: "Logos",
        posters: "Posters", social: "Social Media", branding: "Branding"
      },
      labels: {
        client: "ग्राहक / ब्रांड", industry: "उद्योग", overview: "प्रोजेक्ट अवलोकन",
        problem: "समस्या / आवश्यकता", solution: "समाधान",
        tools: "तकनीक / टूल्स", result: "परिणाम",
        visit: "वेबसाइट देखें"
      },
      items: {
        p1: { title: "व्यावसायिक वेबसाइट",   text: "स्थानीय सेवा व्यवसाय के लिए Responsive बहु-पृष्ठ साइट।" },
        p2: { title: "ब्रांड लोगो",           text: "प्रिंट और स्क्रीन के लिए बना स्पष्ट Wordmark और प्रतीक।" },
        p3: { title: "प्रचार पोस्टर",         text: "प्रिंट और WhatsApp शेयरिंग के लिए बना ऑफ़र पोस्टर।" },
        p4: { title: "Instagram पोस्ट सेट",   text: "एक महीने के कंटेंट के लिए मेल खाते पोस्ट टेम्पलेट।" },
        p5: { title: "ब्रांड आइडेंटिटी किट",  text: "लोगो, रंग पैलेट, Typography और उपयोग गाइड।" },
        p6: { title: "पोर्टफ़ोलियो वेबसाइट",  text: "गैलरी और पूछताछ फ़ॉर्म के साथ एक-पृष्ठ साइट।" },
        p7: { title: "इवेंट पोस्टर",          text: "सामुदायिक कार्यक्रम के लिए Typographic पोस्टर।" },
        p8: { title: "दुकान का लोगो",         text: "साइनबोर्ड पर स्पष्ट दिखने वाला रिटेल लोगो।" },
        p9: { title: "सोशल मीडिया किट",       text: "Story Frames, Highlight Covers और प्रोफ़ाइल एसेट।" }
      }
    },

    clients: {
      eyebrow: "साझेदार",
      title: "क्लाइंट पार्टनर",
      subtitle: "वे व्यवसाय जिनके साथ हमें काम करने का अवसर मिला।",
      support: "हमारे साथ काम करने वाले Business Partners."
    },

    testimonials: {
      eyebrow: "प्रशंसापत्र",
      title: "हमारे ग्राहक क्या कहते हैं",
      subtitle: "जिन लोगों के साथ हम काम करते हैं, उनकी वास्तविक प्रतिक्रिया।",
      placeholder: "ग्राहक की प्रतिक्रिया यहाँ दिखाई देगी।",
      placeholderName: "प्रतिक्रिया की प्रतीक्षा में"
    },

    faq: {
      eyebrow: "सामान्य प्रश्न",
      title: "अक्सर पूछे जाने वाले प्रश्न",
      subtitle: "हमारी सेवाओं और अकादमी के बारे में त्वरित उत्तर।",
      q1: { q: "वलैवडिवम कौन-सी सेवाएँ देता है?", a: "Website Development, Logo Design, Poster Design, Branding, Social Media Design, Video Editing और कस्टम डिजिटल समाधान।" },
      q2: { q: "क्या आप कस्टम वेबसाइट बनाते हैं?", a: "हाँ। हर साइट किसी तय टेम्पलेट में फिट करने के बजाय आपके व्यवसाय के अनुसार बनाई जाती है।" },
      q4: { q: "क्या आप वीडियो एडिटिंग करते हैं?", a: "हाँ — Reels और Shorts, YouTube वीडियो, प्रचार और कॉर्पोरेट वीडियो, Motion Graphics और बुनियादी एनिमेशन।" },
      q5: { q: "क्या कोर्स पूरी तरह ऑनलाइन हैं?", a: "हाँ। वलैवडिवम अकादमी के सभी कोर्स फ़िलहाल 100% ऑनलाइन चलते हैं।" },
      q6: { q: "क्या लाइव ऑनलाइन कक्षाएँ होती हैं?", a: "हाँ। कक्षाएँ लाइव होती हैं, इसलिए आप कक्षा के दौरान ही सवाल पूछ सकते हैं।" },
      q7: { q: "क्या वास्तविक प्रोजेक्ट प्रशिक्षण शामिल है?", a: "हाँ। हर कोर्स व्यावहारिक है और केवल सिद्धांत के बजाय वास्तविक प्रोजेक्ट कार्य पर आधारित है।" },
      q8: { q: "क्या मुझे कोर्स पूर्णता प्रमाणपत्र मिलेगा?", a: "हाँ। कोर्स पूरा करने पर वलैवडिवम की ओर से कोर्स पूर्णता प्रमाणपत्र मिलेगा।" },
      q9: { q: "सेवा या कोर्स के बारे में पूछताछ कैसे करें?", a: "सेवाओं के लिए संपर्क फ़ॉर्म इस्तेमाल करें, या किसी भी कोर्स कार्ड पर 'Enquire Now' दबाएँ — कोर्स अपने आप भर जाता है।" }
    },

    cta: {
      businessTitle: "प्रोजेक्ट है? बात करते हैं",
      businessText: "बताइए आप क्या बना रहे हैं, हम तरीका और स्पष्ट कीमत बताकर जवाब देंगे।",
      businessBtn: "अपना प्रोजेक्ट शुरू करें",
      academyTitle: "सीखना चाहते हैं? अभी पूछताछ करें",
      academyText: "लाइव ऑनलाइन कक्षाएँ, वास्तविक प्रोजेक्ट कार्य और कोर्स पूर्णता प्रमाणपत्र।",
      academyBtn: "कोर्स के बारे में पूछें"
    },

    contact: {
      eyebrow: "संपर्क",
      title: "आपके प्रोजेक्ट पर बात करते हैं",
      support: "आपके Project के बारे में बात करते हैं.",
      subtitle: "कोई प्रोजेक्ट है? अपनी ज़रूरतें भेजिए, हम आपसे संपर्क करेंगे।",
      support2: "अपनी ज़रूरतें हमें भेजिए. हम जल्द ही आपसे संपर्क करेंगे.",
      email: "ईमेल", phone: "फ़ोन", instagram: "Instagram",
      emailHint: "विस्तृत जानकारी और फ़ाइलों के लिए सबसे अच्छा",
      phoneHint: "सीधे कॉल या WhatsApp करें",
      instagramHint: "हमारा नवीनतम डिज़ाइन काम देखें",
      nextTitle: "आगे क्या होगा",
      next1: "हम आपकी ज़रूरतें पढ़कर आपके पसंदीदा माध्यम पर जवाब देंगे।",
      next2: "काम शुरू होने से पहले आपको स्पष्ट कीमत और समयसीमा मिलेगी।",
      next3: "हम डिज़ाइन करेंगे, आप समीक्षा करेंगे, और सही होने तक सुधार करेंगे।"
    },

    form: {
      title: "पूछताछ भेजें",
      name: "पूरा नाम",
      email: "ईमेल पता",
      phone: "फ़ोन नंबर",
      company: "व्यवसाय / कंपनी का नाम",
      service: "आवश्यक सेवा",
      message: "प्रोजेक्ट विवरण / संदेश",
      course: "कोर्स",
      chooseService: "एक सेवा चुनें",
      chooseCourse: "एक कोर्स चुनें",
      namePlaceholder: "आपका नाम",
      emailPlaceholder: "name@example.com",
      phonePlaceholder: "10 अंकों का मोबाइल नंबर",
      messagePlaceholder: "वैकल्पिक — आप क्या बना रहे हैं और कब तक चाहिए?",
      courseMessagePlaceholder: "वैकल्पिक — आपकी पृष्ठभूमि, पसंदीदा समय या कोई सवाल।",
      courseTitle: "कोर्स पूछताछ",
      courseSubtitle: "इसे भरें, हम कोर्स के बारे में जल्द ही आपसे संपर्क करेंगे।",
      success: "धन्यवाद! आपकी पूछताछ मिल गई है। हम जल्द ही आपसे संपर्क करेंगे।",
      courseSuccess: "धन्यवाद! आपकी पूछताछ सफलतापूर्वक भेज दी गई है। हम जल्द ही आपसे संपर्क करेंगे।",
      failure: "आपकी पूछताछ भेजी नहीं जा सकी। कृपया दोबारा कोशिश करें या सीधे ईमेल करें।",
      errors: {
        name: "कृपया अपना पूरा नाम दर्ज करें।",
        nameShort: "कृपया कम से कम 2 अक्षर दर्ज करें।",
        email: "कृपया अपना ईमेल पता दर्ज करें।",
        emailInvalid: "मान्य ईमेल दर्ज करें, जैसे name@example.com।",
        phone: "कृपया अपना फ़ोन नंबर दर्ज करें।",
        phoneInvalid: "10 से 15 अंकों वाला मान्य फ़ोन नंबर दर्ज करें।",
        service: "कृपया अपनी ज़रूरत की सेवा चुनें।",
        course: "कृपया एक कोर्स चुनें।"
      }
    },

    footer: {
      text: "वलैवडिवम उन व्यवसायों के लिए वेबसाइट, लोगो, पोस्टर और ब्रांड पहचान बनाता है जो ऑनलाइन पेशेवर दिखना चाहते हैं।",
      quickLinks: "त्वरित लिंक",
      contact: "संपर्क",
      website: "valaivadivam.in",
      rights: "© 2026 वलैवडिवम। सर्वाधिकार सुरक्षित।",
      backToTop: "ऊपर जाएँ ↑",
      skip: "सामग्री पर जाएँ"
    }
  }
};
