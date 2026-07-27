export const STUDENT_INFO = {
  name: "K. Venkata Sreekanth",
  registerNumber: "24G31A3157",
  college: "St. Johns College of Engineering and Technology",
  academicYear: "2025-26",
  location: "Yemmiganur, Andhra Pradesh, India",
  duration: "May 10 – July 29",
  projectTitle: "Soil Protection and Conservation Awareness Program",
  projectType: "Community Service Project",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Objectives", href: "#objectives" },
  { label: "6 Week Journey", href: "#timeline" },
  { label: "Survey", href: "#survey" },
  { label: "Field Visit", href: "#field-visit" },
  { label: "Problem & Solutions", href: "#problems" },
  { label: "Research", href: "#research" },
  { label: "Awareness Program", href: "#awareness" },
  { label: "Recommendations", href: "#recommendations" },
  { label: "Gallery", href: "#gallery" },
  { label: "Conclusion", href: "#conclusion" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO_STATS = [
  { value: 6, suffix: "", label: "Weeks" },
  { value: 100, suffix: "+", label: "Survey Participants" },
  { value: 10, suffix: "+", label: "Awareness Activities" },
  { value: 1, suffix: "", label: "Village" },
] as const;

export const ABOUT_CARDS = [
  {
    title: "Purpose",
    description:
      "To raise awareness about soil protection and sustainable agricultural practices among farmers and villagers in Yemmiganur through community engagement and education.",
    icon: "Target",
  },
  {
    title: "Importance",
    description:
      "Healthy soil is the foundation of food security, environmental balance, and rural livelihoods. Protecting soil ensures sustainable agriculture for future generations.",
    icon: "Heart",
  },
  {
    title: "Goals",
    description:
      "Study soil health conditions, identify problems, conduct surveys, organize awareness programs, and recommend sustainable solutions for soil conservation.",
    icon: "Flag",
  },
  {
    title: "Soil Protection",
    description:
      "Soil protection involves preventing erosion, maintaining fertility, reducing chemical dependency, and promoting organic farming practices for long-term sustainability.",
    icon: "Shield",
  },
] as const;

export const OBJECTIVES = [
  {
    title: "Create Awareness",
    description: "Educate farmers and villagers about the importance of soil health and conservation practices.",
    icon: "Megaphone",
  },
  {
    title: "Study Soil Health",
    description: "Assess soil conditions through field visits, observations, and community interactions.",
    icon: "Microscope",
  },
  {
    title: "Identify Problems",
    description: "Document soil-related issues including erosion, nutrient depletion, and chemical overuse.",
    icon: "Search",
  },
  {
    title: "Recommend Solutions",
    description: "Propose sustainable agricultural practices and conservation methods for the community.",
    icon: "Lightbulb",
  },
] as const;

export const TIMELINE_WEEKS = [
  {
    week: 1,
    title: "Introduction & Village Visit",
    summary: "Community Interaction & Soil Awareness",
    activities: [
      "Project introduction and planning",
      "Village visit to Yemmiganur",
      "Community interaction with farmers",
      "Initial soil awareness discussions",
      "Documentation of village agriculture",
      "Team orientation and role assignment",
      "Baseline observation of farming practices",
    ],
  },
  {
    week: 2,
    title: "Soil Health Assessment",
    summary: "Farmer Interviews & Observation",
    activities: [
      "Soil health study and documentation",
      "Farmer interviews on practices",
      "Field observation and note-taking",
      "Learning about local crop patterns",
      "Identifying soil structure types",
      "Recording irrigation methods",
      "Photographic documentation",
    ],
  },
  {
    week: 3,
    title: "Survey & Data Collection",
    summary: "Soil Testing Awareness & Documentation",
    activities: [
      "Survey questionnaire distribution",
      "Data collection from farmers",
      "Soil testing awareness sessions",
      "Documentation of survey responses",
      "Interview with agricultural workers",
      "Villager awareness assessment",
      "Digital data entry and organization",
    ],
  },
  {
    week: 4,
    title: "Analysis & Planning",
    summary: "Problem Identification & Community Meetings",
    activities: [
      "Survey data analysis",
      "Problem identification workshop",
      "Solution planning sessions",
      "Community meetings with farmers",
      "Research on sustainable practices",
      "Preparing awareness materials",
      "Team review and strategy refinement",
    ],
  },
  {
    week: 5,
    title: "Awareness Activities",
    summary: "Tree Plantation, Rally & School Programs",
    activities: [
      "Tree plantation drive",
      "Awareness rally in village",
      "School awareness program",
      "Pamphlet distribution",
      "Composting demonstration",
      "Impact assessment interviews",
      "Community feedback collection",
    ],
  },
  {
    week: 6,
    title: "Completion & Presentation",
    summary: "Final Survey, Analysis & Documentation",
    activities: [
      "Final survey and comparison",
      "Comprehensive data analysis",
      "Project documentation completion",
      "Presentation preparation",
      "Recommendations finalization",
      "Community thank-you meeting",
      "Project completion and report submission",
    ],
  },
] as const;

export const SURVEY_DATA = {
  participants: { farmers: 45, workers: 30, villagers: 35 },
  occupation: [
    { name: "Farmers", value: 45 },
    { name: "Agricultural Workers", value: 30 },
    { name: "Villagers", value: 25 },
  ],
  awareness: [
    { topic: "Soil Fertility", level: 72 },
    { topic: "Chemical Fertilizers", level: 58 },
    { topic: "Crop Rotation", level: 45 },
    { topic: "Organic Farming", level: 38 },
    { topic: "Tree Plantation", level: 82 },
    { topic: "Water Management", level: 55 },
  ],
  fertilizerUse: [
    { name: "Chemical Only", value: 35 },
    { name: "Mixed", value: 40 },
    { name: "Organic Only", value: 15 },
    { name: "None", value: 10 },
  ],
  soilErosion: [
    { name: "Severe", value: 15 },
    { name: "Moderate", value: 35 },
    { name: "Mild", value: 30 },
    { name: "None Observed", value: 20 },
  ],
  soilTesting: [
    { name: "Regularly", value: 12 },
    { name: "Occasionally", value: 28 },
    { name: "Never", value: 60 },
  ],
  progressCards: [
    { title: "Total Responses", value: 110, max: 120, color: "#2E7D32" },
    { title: "Farmer Participation", value: 45, max: 50, color: "#81C784" },
    { title: "Awareness Improved", value: 78, max: 100, color: "#8D6E63" },
    { title: "Organic Interest", value: 42, max: 100, color: "#66BB6A" },
  ],
} as const;

export const FIELD_VISIT = {
  location: "Yemmiganur",
  state: "Andhra Pradesh, India",
  latitude: 15.754908,
  longitude: 77.475112,
  observations: [
  { title: "Healthy Crops", description: "Observed well-grown crops with good vegetative growth in cultivated fields.", icon: "Sprout" },
  { title: "Well Structured Soil", description: "Soil showed good texture and structure in several farm plots visited.", icon: "Layers" },
  { title: "Proper Row Spacing", description: "Farmers maintained adequate spacing between crop rows for optimal growth.", icon: "Grid3x3" },
  { title: "Good Irrigation", description: "Irrigation channels and water management systems were observed in fields.", icon: "Droplets" },
  { title: "Farmer Interaction", description: "Meaningful discussions with local farmers about their practices and challenges.", icon: "Users" },
  { title: "Practical Learning", description: "Hands-on learning about soil conditions, crop patterns, and farming techniques.", icon: "BookOpen" },
  ],
} as const;

export const SOIL_HEALTH = [
  { title: "Definition", description: "Soil health refers to the continued capacity of soil to function as a vital living ecosystem that sustains plants, animals, and humans.", icon: "BookMarked" },
  { title: "Importance", description: "Healthy soil supports crop production, filters water, stores carbon, and provides habitat for billions of organisms.", icon: "Star" },
  { title: "Challenges", description: "Modern agriculture faces challenges from erosion, chemical overuse, climate change, and declining organic matter.", icon: "AlertTriangle" },
  { title: "Benefits", description: "Improved soil health leads to better yields, reduced input costs, environmental protection, and climate resilience.", icon: "TrendingUp" },
] as const;

export const SOIL_PROBLEMS = [
  { title: "Soil Erosion", description: "Wind and water erosion remove fertile topsoil, reducing agricultural productivity.", icon: "Wind" },
  { title: "Nutrient Depletion", description: "Continuous cropping without replenishment depletes essential soil nutrients.", icon: "Minus" },
  { title: "Compaction", description: "Heavy machinery and overgrazing compact soil, limiting root growth and water infiltration.", icon: "Compress" },
  { title: "Salinity", description: "Excessive irrigation and poor drainage increase salt concentration in soil.", icon: "Salt" },
  { title: "Waterlogging", description: "Poor drainage leads to waterlogged soils that suffocate plant roots.", icon: "Waves" },
  { title: "Loss of Organic Matter", description: "Declining organic content reduces soil fertility and water retention.", icon: "Leaf" },
  { title: "Pollution", description: "Chemical fertilizers and pesticides contaminate soil and groundwater.", icon: "Factory" },
] as const;

export const IMPROVEMENT_ACTIVITIES = [
  { title: "Composting", icon: "Recycle" },
  { title: "Mulching", icon: "Layers" },
  { title: "Crop Rotation", icon: "RefreshCw" },
  { title: "Cover Cropping", icon: "Flower2" },
  { title: "Vermicomposting", icon: "Bug" },
  { title: "Green Manuring", icon: "Leaf" },
  { title: "Tree Plantation", icon: "TreePine" },
  { title: "Rainwater Harvesting", icon: "CloudRain" },
  { title: "Organic Farming", icon: "Sprout" },
  { title: "Soil Testing", icon: "FlaskConical" },
] as const;

export const CROP_PRODUCTION_INFO = [
  { title: "Healthy Roots", description: "Strong root systems anchor plants and absorb nutrients efficiently.", icon: "GitBranch" },
  { title: "Water Retention", description: "Healthy soil holds moisture, reducing irrigation needs.", icon: "Droplets" },
  { title: "Nutrient Supply", description: "Balanced soil provides essential macro and micronutrients.", icon: "Pill" },
  { title: "Microorganisms", description: "Beneficial microbes decompose organic matter and fix nitrogen.", icon: "Microscope" },
  { title: "Better Yield", description: "Optimal soil conditions directly translate to higher crop yields.", icon: "BarChart3" },
  { title: "Climate Resistance", description: "Resilient soils help crops withstand drought and extreme weather.", icon: "CloudSun" },
  { title: "Food Security", description: "Sustainable soil management ensures long-term food production.", icon: "Wheat" },
] as const;

export const PROBLEMS_SOLUTIONS = {
  problems: [
    "Declining soil fertility in cultivated lands",
    "Over-reliance on chemical fertilizers",
    "Poor awareness about soil testing",
    "Limited access to soil testing facilities",
    "Climate change effects on soil moisture",
    "Inadequate water management practices",
  ],
  solutions: [
    "Promote organic farming and natural inputs",
    "Conduct regular awareness programs",
    "Implement crop rotation practices",
    "Organize tree plantation drives",
    "Adopt rainwater harvesting techniques",
    "Install drip irrigation systems",
    "Provide farmer training workshops",
    "Leverage government support schemes",
  ],
} as const;

export const RESEARCH = {
  criteria: [
    "Impact on local agriculture and livelihoods",
    "Prevalence among surveyed farmers",
    "Severity of environmental consequences",
    "Feasibility of sustainable solutions",
    "Community willingness to adopt changes",
    "Long-term sustainability implications",
  ],
  identified: [
    "Declining soil fertility",
    "Chemical fertilizer dependency",
    "Water management issues",
    "Soil erosion in sloped areas",
    "Low awareness of soil testing",
    "Organic matter reduction",
    "Long-term sustainability concerns",
  ],
} as const;

export const AWARENESS_ACTIVITIES = [
  { title: "Farmer Meetings", description: "Interactive sessions with local farmers discussing soil health practices.", icon: "Users" },
  { title: "Awareness Sessions", description: "Community workshops on soil conservation and sustainable farming.", icon: "Presentation" },
  { title: "Tree Plantation", description: "Organized plantation drives to prevent erosion and improve soil structure.", icon: "TreePine" },
  { title: "Poster Distribution", description: "Educational posters distributed across the village and schools.", icon: "Image" },
  { title: "Composting Demo", description: "Live demonstration of composting techniques for organic fertilizer.", icon: "Recycle" },
  { title: "Organic Farming", description: "Sessions promoting organic farming methods and natural inputs.", icon: "Sprout" },
  { title: "Water Conservation", description: "Awareness about efficient irrigation and rainwater harvesting.", icon: "Droplets" },
  { title: "School Awareness", description: "Educational programs for students on environmental conservation.", icon: "GraduationCap" },
  { title: "Community Meetings", description: "Village-level meetings to discuss findings and recommendations.", icon: "MessageCircle" },
] as const;

export const RECOMMENDATIONS = [
  { title: "Regular Soil Testing", description: "Establish periodic soil testing to monitor fertility and guide fertilizer use." },
  { title: "Organic Farming", description: "Transition to organic inputs and reduce chemical fertilizer dependency." },
  { title: "Crop Rotation", description: "Implement diverse crop rotation to maintain soil nutrients naturally." },
  { title: "Composting", description: "Promote household and farm-level composting for organic matter enrichment." },
  { title: "Awareness Programs", description: "Continue community education on soil conservation practices." },
  { title: "Tree Plantation", description: "Expand tree planting along field boundaries to prevent erosion." },
  { title: "Efficient Irrigation", description: "Adopt drip irrigation and rainwater harvesting systems." },
  { title: "Government Support", description: "Utilize government schemes for soil health cards and subsidies." },
  { title: "Farmer Training", description: "Organize regular training workshops on sustainable agriculture." },
  { title: "Community Participation", description: "Engage all stakeholders in soil protection initiatives." },
  { title: "Environmental Sustainability", description: "Balance agricultural productivity with environmental protection." },
  { title: "Future Generations", description: "Preserve soil health for sustainable agriculture for coming generations." },
] as const;

export const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80", alt: "Agricultural Fields", category: "Agricultural Fields" },
  { src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80", alt: "Field Visit", category: "Field Visit" },
  { src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80", alt: "Survey Activity", category: "Survey" },
  { src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80", alt: "Tree Plantation", category: "Tree Plantation" },
  { src: "https://images.unsplash.com/photo-1592982537447-6c537f6a86d2?w=800&q=80", alt: "Farmer Interaction", category: "Farmer Interaction" },
  { src: "https://images.unsplash.com/photo-1542601906990-b46d7fbb0d32?w=800&q=80", alt: "Awareness Campaign", category: "Awareness Campaign" },
  { src: "https://images.unsplash.com/photo-1416879595882-3373a0488b27?w=800&q=80", alt: "Soil and Plants", category: "Agricultural Fields" },
  { src: "https://images.unsplash.com/photo-1530836369250-59b4a4b4b6a0?w=800&q=80", alt: "Community Meeting", category: "Awareness Campaign" },
  { src: "https://images.unsplash.com/photo-1595273687824-4e48b132f966?w=800&q=80", alt: "Farming Community", category: "Farmer Interaction" },
] as const;

export const DASHBOARD_STATS = [
  { value: 6, suffix: "", label: "Weeks" },
  { value: 36, suffix: "", label: "Activities" },
  { value: 100, suffix: "+", label: "Participants" },
  { value: 12, suffix: "", label: "Recommendations" },
  { value: 1, suffix: "", label: "Village" },
  { value: 100, suffix: "%", label: "Project Completion" },
] as const;

export const CONCLUSION_POINTS = [
  { title: "Community Participation", description: "Active involvement of farmers, villagers, and students strengthened the project's impact." },
  { title: "Awareness Improvement", description: "Significant improvement in awareness about soil health and conservation practices." },
  { title: "Sustainable Agriculture", description: "Promoted sustainable farming methods for long-term agricultural productivity." },
  { title: "Soil Conservation", description: "Identified key soil issues and demonstrated practical conservation techniques." },
  { title: "Environmental Protection", description: "Contributed to environmental protection through tree plantation and organic practices." },
  { title: "Future Impact", description: "Laid foundation for continued soil protection efforts in Yemmiganur community." },
] as const;
