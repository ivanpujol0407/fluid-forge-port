import projectSpeedway from "@/assets/project-speedway.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";
import projectMicromobility from "@/assets/project-micromobility.jpg";

export interface Project {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  date: string;
  role: string;
  overview: string;
  objectives: string[];
  methodology: string;
  results: string;
  lessons: string;
}

export const projectsData: Project[] = [
  {
    id: "speedway-aerodynamics",
    tag: "Master Thesis",
    title: "Speedway Aerodynamics",
    description: "CFD analysis of drag forces on motorcycles using STAR-CCM+. Validated with wind tunnel tests.",
    image: projectSpeedway,
    date: "September 2024",
    role: "Lead Researcher — DTU, Copenhagen",
    overview:
      "This master's thesis investigates the aerodynamic behaviour of speedway motorcycles through Computational Fluid Dynamics (CFD) simulations. The study aimed to quantify drag forces acting on the rider-motorcycle system and identify geometric modifications to reduce aerodynamic resistance.",
    objectives: [
      "Quantify aerodynamic drag forces on speedway motorcycle configurations",
      "Validate CFD simulations against wind tunnel experimental data",
      "Propose design modifications for improved aerodynamic performance",
      "Develop a reusable CFD methodology for motorcycle aerodynamics",
    ],
    methodology:
      "The study employed STAR-CCM+ for CFD simulations using a polyhedral mesh with prism layers for boundary layer resolution. The k-ω SST turbulence model was selected for its accuracy in adverse pressure gradient flows. Boundary conditions included a freestream velocity of 25 m/s with a turbulence intensity of 1%. The computational domain extended 5L upstream and 10L downstream of the motorcycle geometry. Grid independence studies were conducted across three mesh refinement levels (4M, 8M, and 16M cells).",
    results:
      "The CFD simulations revealed a total drag coefficient of Cd = 0.78 for the baseline configuration. The rider's body contributed approximately 65% of the total aerodynamic drag, while the motorcycle frame accounted for the remaining 35%. Wind tunnel validation showed agreement within 5.2% for the drag force measurements. A proposed fairing modification reduced the overall drag by 12.3%, translating to an estimated top speed increase of 3.4 km/h.",
    lessons:
      "The mesh quality around the rider geometry proved critical for accurate results. Initial simulations with insufficient prism layer resolution underestimated drag by 18%. Iterative mesh refinement in the wake region was essential for convergence. The project also highlighted the importance of proper inlet turbulence specification, as varying turbulence intensity from 0.5% to 5% changed drag predictions by up to 8%.",
  },
  {
    id: "industrial-plant-design",
    tag: "Professional",
    title: "Industrial Plant Design",
    description: "Designing mechanical components for Fresh Water Generators at Alfa Laval.",
    image: projectIndustrial,
    date: "September 2024 — Present",
    role: "Mechanical Engineer — Alfa Laval, Copenhagen",
    overview:
      "As a Mechanical Engineer at Alfa Laval, I design and optimize mechanical components and systems for Fresh Water Generators (FWGs). These systems convert seawater into potable water through vacuum distillation, serving maritime and industrial applications worldwide.",
    objectives: [
      "Design mechanical components meeting ASME and PED standards",
      "Optimize heat exchanger plate geometries for thermal efficiency",
      "Reduce manufacturing costs while maintaining quality standards",
      "Develop standardized component libraries for FWG product lines",
    ],
    methodology:
      "The design process follows a systematic approach combining SolidWorks 3D CAD modeling with Finite Element Analysis (FEA) for structural validation. Thermal simulations are conducted to optimize heat transfer surfaces. Design reviews follow stage-gate methodology with cross-functional teams including manufacturing, procurement, and quality assurance. All designs are validated against ISO 17025 testing protocols before production release.",
    results:
      "Successfully redesigned the evaporator plate pack, achieving a 15% improvement in thermal efficiency while reducing material usage by 8%. Standardized the component library across three FWG product lines, reducing engineering lead time by 30%. Implemented design-for-manufacturing principles that decreased assembly time by 20% and reduced quality non-conformances by 40%.",
    lessons:
      "Working in a mature product environment taught me the importance of backward compatibility and standardization. Every design change must consider the installed base of thousands of units worldwide. Close collaboration with manufacturing teams early in the design process prevented costly redesigns and ensured producibility.",
  },
  {
    id: "micromobility-stations",
    tag: "Start-up",
    title: "Micromobility Stations",
    description: "Product development for Vadecity smart bike stations. Optimization of mechanical assemblies.",
    image: projectMicromobility,
    date: "April 2023 — August 2024",
    role: "Mechanical Design Engineer — Vadecity, Barcelona",
    overview:
      "At Vadecity, I led the mechanical design of smart micromobility docking stations for urban environments. The product integrates IoT sensors, locking mechanisms, and modular frames designed for rapid deployment in European cities.",
    objectives: [
      "Design a modular docking station adaptable to various bike-sharing systems",
      "Optimize the locking mechanism for reliability and user experience",
      "Ensure compliance with urban furniture regulations across EU markets",
      "Minimize production costs through design-for-manufacturing optimization",
    ],
    methodology:
      "The development followed an agile product design methodology with rapid prototyping cycles. SolidWorks was used for 3D modeling and assembly design. Stress analysis was performed using SolidWorks Simulation to validate structural integrity under vandalism load cases. Prototypes were manufactured using a combination of sheet metal fabrication and CNC machining. User testing was conducted in Barcelona's urban environment with 50 beta units.",
    results:
      "Delivered a final design that reduced unit manufacturing cost by 35% compared to the initial prototype. The modular architecture allowed a single station to accommodate 4 to 12 bikes with minimal part changes. The locking mechanism achieved a 99.7% reliability rate over 10,000 test cycles. The design was approved for deployment in three European cities.",
    lessons:
      "Start-up environments demand rapid iteration and pragmatic engineering decisions. I learned to balance engineering perfection with time-to-market pressures. The importance of designing for real-world abuse scenarios (vandalism, weather exposure) became clear after early field failures of prototype locking mechanisms.",
  },
];
