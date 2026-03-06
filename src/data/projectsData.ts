import projectMeanVelocity from "@/assets/speedway/mean-velocity.png";
// Placeholder images for new projects - replace with actual images later

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
  methodologySections?: { title: string; content: string; placeholders?: string[] }[];
  results: string;
  resultsSections?: { title: string; content: string; placeholders?: string[] }[];
  lessons: string;
  futureWork?: string;
  supplementary?: {
    title: string;
    content: string;
  }[];
  methodologyPlaceholders?: string[];
  resultsPlaceholders?: string[];
  pdfUrl?: string;
  validation?: string;
  validationPlaceholders?: string[];
}

export const projectsData: Project[] = [
  {
    id: "speedway-aerodynamics",
    tag: "Research Paper",
    title: "CFD Simulations of Speedway Motorcycles",
    description:
      "First combined CFD and wind tunnel aerodynamic investigation of a speedway motorcycle. Validated simulations with less than 2% deviation, identified rider as dominant drag contributor, and achieved 9% drag reduction with a new front design.",
    image: projectMeanVelocity,
    date: "2025",
    role: "Lead Researcher, Technical University of Denmark (DTU)",
    overview:
      "This study presents a computational and experimental aerodynamic analysis of a speedway motorcycle, focusing on drag reduction strategies to enhance performance. Using CFD simulations in Simcenter STAR-CCM+ and wind tunnel experiments, the aerodynamic characteristics of the motorcycle and rider are investigated. Wind tunnel experiments validated the CFD methodology, showing deviations of 2.0% and 0.2% in drag area at 30 m/s and 40 m/s respectively, confirming the reliability of the numerical model. The rider is identified as the primary drag contributor, accounting for over 50% of the total aerodynamic resistance. A new front fairing and hand cover design is proposed, achieving a 9.0% reduction in total drag. This is the first combined CFD and wind tunnel aerodynamic investigation of a speedway motorcycle, addressing a gap in current literature.",
    objectives: [
      "Conduct the first CFD aerodynamic study of a speedway motorcycle using a 3D-scanned full-scale model",
      "Validate CFD simulations against wind tunnel experiments on a 1:6 scale 3D-printed model",
      "Identify and quantify the main aerodynamic drag contributors on the rider-motorcycle system",
      "Analyse the effect of rotating vs stationary wheels on aerodynamic performance",
      "Propose and evaluate new front fairing and hand cover designs for drag reduction",
    ],
    methodology:
      "The full-scale geometry of the speedway motorcycle and rider was obtained via 3D scanning using a MetraSCAN BLACK+™|Elite scanner, capturing the actual motorcycle provided by Team Denmark. The scanned surfaces were cleaned, repaired, and prepared for meshing in Simcenter STAR-CCM+. The computational domain extended 12.5L x 6H x 7.5W around the motorcycle, with a velocity inlet at the front (freestream velocity of 30 m/s, turbulence intensity 1%), a pressure outlet at the rear, a no-slip ground plane moving at freestream velocity, and symmetry conditions on the top and lateral boundaries. A polyhedral mesh of approximately 21 million cells was generated with volumetric refinement zones around the motorcycle and wake region. Eight prism layers with a total thickness of 2 mm were applied to all solid surfaces, ensuring wall y+ < 5 throughout the viscous sublayer. The simulations used an unsteady RANS approach with the SST k-omega turbulence model and All-y+ wall treatment. A second-order implicit temporal scheme with a time step of 2x10⁻⁴ s was employed, maintaining CFL < 1 across the domain. Simulations were run until statistical convergence of the drag force was achieved.",
    methodologyPlaceholders: [
      "3D Scanned Motorcycle Geometry",
      "Computational Domain and Boundary Conditions",
      "Polyhedral Mesh Detail and Prism Layers",
    ],
    validation:
      "Wind tunnel experiments were conducted at the DTU Climate Centre using a 1:6 scale 3D-printed PLA model of the motorcycle. The wind tunnel test section has a cross-section of 2.6 m x 2.0 m, and the scale model resulted in a blockage ratio of 5.21%. Drag force was measured at freestream velocities of 30 m/s and 40 m/s using a calibrated force balance. Reynolds number independence was verified by comparing results across multiple velocities. To replicate wind tunnel conditions in CFD, a separate simulation was set up matching the tunnel geometry, boundary conditions, and the 1:6 scale model. The CFD wind tunnel simulation used the same mesh settings and turbulence model (SST k-omega) as the full-scale case. Comparison of experimental and numerical drag area values showed a deviation of only 2.0% at 30 m/s and 0.2% at 40 m/s, confirming the reliability of the CFD methodology and the mesh configuration used for all subsequent full-scale analyses.",
    validationPlaceholders: [
      "Wind Tunnel Test Setup",
      "CFD vs Wind Tunnel Drag Area Comparison Chart",
    ],
    results:
      "The total drag force for the full motorcycle-rider configuration is 261.53 N (C_D = 0.69). The rider contributes approximately 52.4% of total drag, with the front fairing, handlebars, and rider's hands accounting for 28% of total drag in the region between 0.20 and 0.30 x/L. Wheel rotation increases total drag area by 1.17%, primarily through intensified low-pressure regions around the front wheel. The proposed new front design, which removes the original fairing, streamlines the front forks and handlebar, and adds aerodynamic hand covers, achieved a 9.0% reduction in total drag area (from C_DA = 0.491 to 0.447) by minimising high-pressure stagnation zones, promoting smoother flow attachment, and reducing wake turbulence.",
    resultsPlaceholders: [
      "Pressure Coefficient Contour (Mid-plane)",
      "Mean Velocity Field",
      "Accumulated Drag Force Along Longitudinal Axis",
      "Vorticity Contours on YZ Planes",
      "Streamwise Pressure Coefficient, New vs Original Design",
      "λ₂ Vortex Structures Comparison",
    ],
    lessons:
      "The mesh quality around the rider geometry proved critical for accurate results. The convergence study confirmed that a base size of 110 mm with 8 prism layers is required to keep all wall-adjacent cells within the viscous sublayer (y+ < 5). The rider's upright posture is the dominant source of drag, creating extensive flow separation and wake formation that cannot be addressed by motorcycle geometry changes alone. Geometric asymmetry in the rider's posture (right leg touching the ground, left leg on foot peg) produces measurable differences in drag under yaw conditions. The front fairing, originally designed for sponsor graphics, contributes significantly to drag. Its removal alone reduced drag by 5.6%. Proper wind tunnel validation with carefully controlled blockage ratios and Reynolds number independence studies is essential for CFD credibility.",
    futureWork:
      "Future research should explore rider posture optimisation as the rider accounts for over 50% of total drag. Advanced turbulence modelling approaches such as Large Eddy Simulation (LES) or hybrid RANS-LES methods could provide higher-fidelity results for the complex separated flows around the rider. The yaw angle study revealed significant asymmetric drag behaviour that warrants further investigation under realistic cornering conditions. Additionally, the interaction between rotating wheels and the rest of the geometry suggests that integrated wheel-fairing designs could yield further drag reductions. Full-scale wind tunnel or on-track validation of the proposed front design modifications would confirm the predicted 9% drag improvement under real racing conditions.",
    pdfUrl: "/CFD_simulations_Speedway_motorcycles.pdf",
    supplementary: [
      {
        title: "Mesh Convergence: Base Size",
        content:
          "Six meshes were generated with base sizes ranging from 80 to 130 mm, keeping all other parameters fixed (6 prism layers, total thickness 2 mm, time step 1×10⁻⁴ s). All simulations ran for 0.5 s (~7.25 tU/L). A fitted regression line extrapolated results towards zero base size, predicting a drag area of 0.51. Coarse meshes (120 to 130 mm) deviated by ~2.5% from the extrapolated ideal. The 110 mm mesh showed only 1.9% deviation, with just 0.25% difference from the finest 80 mm mesh, confirming it as the optimal balance between accuracy and computational cost.",
      },
      {
        title: "Mesh Convergence: Prism Layers",
        content:
          "Five simulations were performed with prism layer counts between 4 and 8, maintaining a constant total thickness of 2 mm. Drag force variation across all cases remained below 2%. However, wall y+ distributions revealed critical differences: with 4 to 5 prism layers, significant cells had y+ > 5 (buffer layer), reducing turbulence model accuracy. Only the 8-layer configuration ensured all wall-adjacent cells remained within the viscous sublayer (y+ < 5). The increase from 7 to 8 layers added only 1.4M cells (19.8M to 21.2M), making 8 layers the selected configuration.",
      },
      {
        title: "Time Step Convergence",
        content:
          "Four time steps were tested: 5×10⁻⁵ s, 1×10⁻⁴ s, 2×10⁻⁴ s, and 4×10⁻⁴ s using the validated mesh (110 mm base, 8 prism layers). At Δt = 4×10⁻⁴ s, large domain regions exceeded CFL = 1, discarding this option. At Δt = 5×10⁻⁵ s, CFL < 1 everywhere but with no improvement in results. At Δt = 2×10⁻⁴ s, CFL remained below unity across most of the domain, with elevated values only in localised regions around the front wheel and helmet due to flow acceleration. Average drag area varied by less than 1% across all valid time steps, confirming Δt = 2×10⁻⁴ s as the optimal compromise between fidelity and computational cost.",
      },
    ],
  },
  {
    id: "pmma-gripper-fea",
    tag: "University Project",
    title: "Design & FEA of a Manual PMMA Gripper",
    description:
      "Design, finite element analysis, optimisation, and physical construction of a manual gripper made of polymethyl methacrylate (PMMA). The project combined SolidWorks CAD design with ANSYS structural simulation to validate and optimise the gripper under multiple loading scenarios.",
    image: "/placeholder.svg",
    date: "2020",
    role: "Co-author, UPC – ETSEIB, Barcelona",
    overview:
      "This project involved the complete engineering cycle of a manual gripper: from conceptual design and material selection to finite element modelling, structural optimisation, physical manufacturing, and experimental testing. The gripper operates as a third-class lever mechanism, designed to pick up a 150 g steel cylinder. Polymethyl methacrylate (PMMA, also known as acrylic or Perspex) was selected for its transparency, rigidity, ease of machining, and adequate mechanical properties. The entire structural analysis was performed using ANSYS with 2D plane stress elements, and the gripper was manufactured via laser cutting from a PMMA sheet.",
    objectives: [
      "Design a functional manual gripper capable of securely gripping a 150 g steel cylinder",
      "Select an appropriate material and characterise its mechanical properties (E = 3000 MPa, ν = 0.4, σ_yield = 110 MPa)",
      "Build and validate a 2D finite element model in ANSYS using Solid Quad 8-node 183 elements",
      "Perform mesh convergence studies and validate the linear elasticity assumption",
      "Analyse stress distributions under vacuum, nominal, extreme, and destructive loading conditions",
      "Optimise the gripper geometry to improve mechanical efficiency and reduce mass",
      "Manufacture the final design using laser cutting and conduct physical load testing",
    ],
    methodology:
      "The gripper was designed as a U-shaped structure operating as a third-class lever. The steel cylinder is gripped at a distance from the fulcrum (the curved base), while the user applies force near the tips. The nominal gripping force (R_nom) was calculated from static equilibrium to be 1.47 N, and the corresponding actuation force (F_nom) was 2.50 N, determined via moment balance about the fulcrum. The maximum human pinch force was taken as 60 N, based on NASA anthropometric data.",
    methodologySections: [
      {
        title: "Finite Element Model Setup",
        content: "The problem was modelled as a 2D plane stress case with a uniform thickness of 30 mm. The material was treated as linear elastic and isotropic with E = 3000 MPa and ν = 0.4. Solid Quad 8-node 183 elements (quadratic interpolation) were used for improved accuracy. Boundary conditions included fixing one node at the fulcrum in the Y-direction to prevent rigid body motion, and fixing the force application nodes in the X-direction. At the gripping points, nodes were fixed in the principal direction to simulate the rigid steel cylinder.",
        placeholders: ["FE Model with Boundary Conditions and Applied Forces"]
      },
      {
        title: "Mesh Convergence Study",
        content: "The mesh was generated with element size 2, which was confirmed to provide sufficient accuracy after comparing results with size 1 (negligible difference). A level-1 mesh refinement was applied to the curved region where stresses concentrate. The unrefined mesh yielded a maximum principal stress of 1.348 MPa under 2 N, while the refined mesh gave 1.335 MPa — an error of only 0.94%, confirming that refinement was not strictly necessary.",
        placeholders: ["Mesh Visualization (Unrefined)", "Mesh with Level-1 Refinement at Curved Region", "Stress Comparison: Refined vs Unrefined Mesh"]
      },
      {
        title: "Linearity Validation",
        content: "To validate the linear elasticity assumption, both linear and nonlinear analyses were performed under the same 2 N load. The linear analysis produced a maximum stress of 1.34772 MPa, while the nonlinear analysis yielded 1.34884 MPa — an error of only 0.083%. This negligible difference confirmed that the small displacement hypothesis holds and a linear analysis is valid for all subsequent calculations.",
        placeholders: ["Nonlinear vs Linear Stress Comparison"]
      }
    ],
    results:
      "The structural analysis was conducted under four loading conditions: vacuum (closing), nominal gripping, extreme maximum force, and destructive loading. The Rankine failure criterion was applied since PMMA is a brittle material, where σ_eq = max{|σ_I|, |σ_III|}.",
    resultsSections: [
      {
        title: "Vacuum Test (F = 20.77 N)",
        content: "The vacuum force was determined by linearity: a 2 N force produced 2.50 mm displacement, so closing the 26 mm gap required 20.77 N. Under this load, the maximum tensile stress (σ_I) reached 14.00 MPa at the outer curve, while the maximum compressive stress (σ_III) reached −16.48 MPa at the inner curve. The safety factor was γ_s = 110 / 16.48 = 6.67, well above the required 1.2.",
        placeholders: ["Displacement Field — Vacuum Test", "Principal Stress σ_I Distribution", "Principal Stress σ_III Distribution"]
      },
      {
        title: "Extreme Pinch Test (F = 60 N)",
        content: "Under the maximum human pinch force of 60 N, the gripper experienced a maximum displacement of 3.25 mm. The maximum tensile stress was 12.11 MPa and the maximum compressive stress was −13.04 MPa. Both values remained far below the elastic limit of 110 MPa, confirming the gripper can withstand extreme loading without failure.",
        placeholders: ["Displacement Field — Extreme Pinch", "Stress Distribution under 60 N"]
      },
      {
        title: "Destructive Test (F = 506.31 N)",
        content: "The destructive force was calculated by scaling: under 1 N the maximum stress was 0.217 MPa, so reaching 110 MPa requires F_u = 506.31 N. At this force, the maximum displacement was 27.42 mm (exceeding the 26 mm gap, meaning the arms would touch). The maximum compressive stress reached exactly −110 MPa, confirming elastic failure onset. Since PMMA is brittle, the gripper would fracture at this point.",
        placeholders: ["Displacement Field — Destructive Test", "Stress at Elastic Limit (σ_III = −110 MPa)"]
      }
    ],
    methodologyPlaceholders: [
      "Preliminary Gripper Design (SolidWorks 3D View)",
      "Gripper Profile with Key Dimensions",
    ],
    resultsPlaceholders: [],
    lessons:
      "This project demonstrated the full engineering design cycle from concept to physical prototype. The most important lessons included: (1) the critical importance of mesh convergence studies — even though the refinement showed <1% difference, the exercise built confidence in the results; (2) validating the linearity hypothesis with only 0.083% error justified using computationally cheaper linear analysis; (3) understanding that for brittle materials like PMMA, the Rankine criterion (maximum principal stress) is the appropriate failure criterion, unlike the Von Mises criterion used for ductile materials; (4) the optimisation process showed that reducing the gripping distance from 170 mm to 150 mm improved mechanical efficiency from 58.8% to 66.7%, and reducing the width from 30 mm to 10 mm cut the mass from 98.67 g to 30.03 g, nearly quadrupling the efficiency metric from 0.60 to 2.22.",
    supplementary: [
      {
        title: "Design Optimisation",
        content: "The optimisation targeted two parameters: mechanical efficiency (η = R_nom / F_nom) and mass efficiency (ζ = η / mass). By reducing the gripping distance from 170 mm to 150 mm (keeping the minimum 50 mm clearance), the efficiency increased from 58.8% to 66.7%. The overall length was reduced from 232 mm to 212 mm by trimming unnecessary material beyond the new gripping point. Additionally, the width was reduced from 30 mm to 10 mm. SolidWorks confirmed the optimised mass as 30.03 g (down from 98.67 g). The optimised design maintained a safety factor of 6.12 under vacuum loading, still well above the required 1.2. The destructive force dropped from 506.31 N to 192.23 N due to the thinner cross-section, but this remained over 3× the maximum human pinch force."
      },
      {
        title: "Manufacturing & Testing",
        content: "The optimised gripper was manufactured via laser cutting from a PMMA sheet at a local fabrication shop in Barcelona. The SolidWorks design was exported in DXF format for direct input to the laser cutting machine. The laser cutter provided precise cuts matching the design dimensions. Physical testing confirmed the gripper could securely hold the steel cylinder under nominal loading conditions, validating the FEA predictions."
      }
    ],
  },
  {
    id: "parallel-shaft-gearbox",
    tag: "University Project",
    title: "Parallel Shaft Gear Reducer Design",
    description:
      "Complete mechanical design of a parallel shaft gear reducer for Volkswagen assembly line conveyors. Includes gear calculations, shaft design, bearing selection, housing design by sand casting, and full assembly documentation.",
    image: "/placeholder.svg",
    date: "2023",
    role: "Author, Master's in Industrial Engineering, UPC – ETSEIB, Barcelona",
    overview:
      "This project was part of the Mechanical Design course in the Master's in Industrial Engineering programme at ETSEIB (UPC Barcelona). The assignment was to design and calculate a parallel shaft gear reducer for conveyor belt systems used in Volkswagen automobile assembly lines. The reducer controls the speed of the conveyor belts that move vehicle bodies through different assembly stations, allowing precise and efficient handling during the manufacturing process. The project targeted a production run of 6,000 units over three years, with a required operational life of 10,000 hours at full load. The design uses helical gears cut without profile shift from 16MnCr5 case-hardening steel, with an input shaft speed of 1,450 rpm.",
    objectives: [
      "Design a parallel shaft gear reducer with a transmission ratio of 4.06",
      "Calculate gear geometry: 18-tooth pinion and 73-tooth wheel with helical teeth (β₀ = 24.49°)",
      "Design stepped shafts for proper axial positioning of all components",
      "Select and verify bearings for 10,000 hours of operational life",
      "Design a cast iron housing (FG 25) suitable for sand casting at 6,000-unit production scale",
      "Specify all purchased components: bearings, bolts, seals, oil plugs, and retainers",
      "Define complete assembly, lubrication, installation, and maintenance procedures",
    ],
    methodology:
      "The design process began with the specifications from the commercial department: output torque of 780 Nm, maximum radial force on the output shaft of 4.5 kN, input speed of 1,450 rpm, and horizontal shaft arrangement with the input shaft on top. The input shaft diameter was calculated using the equal torsional stress criterion, yielding 24.23 mm (rounded to 24 mm). Since the input shaft is hollow, the minimum outer diameter was calculated as 29.30 mm to ensure equivalent torsional strength.",
    methodologySections: [
      {
        title: "Gear Design",
        content: "The helical gear helix angle was calculated from the constraint that the sum of the two primitive diameters must equal 200 mm (i.e., twice the 100 mm centre distance). With 18 teeth on the pinion and 73 on the wheel, and using the module equation d₀ = m₀·z / cos(β₀), the helix angle was determined to be β₀ = 24.49°. This yielded primitive diameters of 39.56 mm (pinion) and 160.44 mm (wheel), with tip diameters of 43.56 mm and 164.44 mm, and root diameters of 34.56 mm and 155.44 mm respectively. Since the pinion diameter is close to the shaft diameter, the gear teeth were machined directly onto the input shaft.",
        placeholders: ["Gear Geometry and Tooth Profile"]
      },
      {
        title: "Housing Design (Sand Casting)",
        content: "The large production volume of 6,000 units made sand casting the optimal manufacturing process for the grey cast iron FG 25 housing. Key design considerations included: a 2° draft angle for mould release, approximately 12 mm constant wall thickness for uniform cooling, and post-casting machining of bearing seats, bolt holes, oil plug threads, and sealing surfaces. The housing consists of two parts — a main body and a cover — joined by six M12×175 through-bolts with self-locking nuts. The main body includes mounting feet for floor fixation and two openings for shaft cover plates that retain the outer races of the bearings. Fine surface finishes were applied at bearing contact zones to ensure proper fit.",
        placeholders: ["Housing Main Body (CAD)", "Housing Cover (CAD)", "Complete Reducer Assembly (Cross-Section)"]
      },
      {
        title: "Shaft Design",
        content: "Both shafts were made from 42CrMo4 steel (ISO 683-2) and underwent quenching and tempering for optimal hardness and toughness. The input shaft has the pinion machined directly onto it due to the similar diameters, plus a motor coupling flange at one end. The output shaft features a keyway (DIN 6885 A 14×9×20) for the output gear wheel, a retaining ring groove (DIN 471 55×2) for axial fixing, and a threaded hole for coupling external equipment. Both shafts were designed with steps (shoulders) for axial positioning of bearings, gears, and seals, with precision surface finishes at bearing contact zones.",
        placeholders: ["Input Shaft (CAD)", "Output Shaft (CAD)"]
      }
    ],
    results:
      "The gear engagement forces were calculated from the output torque and primitive radius. The tangential force was F_t = 780 / (160.44/2 × 10⁻³) = 9.72 kN. The radial force was F_r = F_t × tan(α₀)/cos(β₀) = 3.89 kN, the axial force F_a = F_t × tan(β₀) = 4.43 kN, and the total resultant force F = 11.37 kN.",
    resultsSections: [
      {
        title: "Output Shaft Bearing Verification",
        content: "The output shaft uses two deep groove ball bearings (SKF 6210 and SKF 6209) in a fixed-free arrangement. Using force and moment equilibrium with the 4.5 kN external radial force and the gear engagement forces, the bearing reactions were calculated. The fixed bearing (SKF 6210) carries a radial load of 11.89 kN and an axial load of 4.43 kN, while the free bearing (SKF 6209) carries 5.98 kN radially. Both bearings were verified to meet the 10,000-hour life requirement.",
        placeholders: ["Output Shaft Force Diagram", "Bearing Arrangement Detail"]
      },
      {
        title: "Input Shaft Bearing Verification",
        content: "The input shaft uses two angular contact ball bearings (SKF 7208 BECBP and SKF 7203 BECBP) mounted in an X-arrangement. Without external forces, the bearing loads come solely from gear engagement. The total radial reactions were 4.85 kN (bearing A) and 5.62 kN (bearing B). After applying SKF's load calculation methodology for angular contact bearings with the appropriate X and Y factors, the combined dynamic loads were determined. The analysis revealed that these bearings, particularly the smaller SKF 7203, would not reach the 10,000-hour target, indicating that larger bearings would be needed for production.",
        placeholders: ["Input Shaft Force Diagram", "Angular Contact Bearing Specification"]
      },
      {
        title: "Purchased & Manufactured Components",
        content: "The design specified all purchased components in detail: four types of bearings (SKF 7208 BECBP, 7203 BECBP, 6210, 6209), multiple bolted connections (M12, M10, M8, M6 in various standards with washers and self-locking nuts), a DIN 6885 key, a DIN 471 retaining ring, a KM 9 lock nut with MB 9 washer, oil drain and fill plugs (Elesa Ganter TMB and TCD), an oil level sight glass (GN 743), fluorocarbon O-ring seals (RS-PRO), a nitrile rubber cord seal, and SKF CRW1 oil retainers for both shafts. All manufactured components — housing, cover, shafts, output gear wheel, flange, shaft covers, gauge shims, and centering pins — were specified with materials, manufacturing processes, heat treatments, and surface finishes.",
        placeholders: []
      }
    ],
    methodologyPlaceholders: [],
    resultsPlaceholders: [],
    lessons:
      "This project provided deep hands-on experience in integrated mechanical system design. Key takeaways included: (1) production volume fundamentally drives manufacturing decisions — the 6,000-unit run made sand casting the clear choice over CNC machining for the housing; (2) designing for casting requires careful attention to draft angles, uniform wall thickness, and post-machining operations; (3) bearing selection is critical and must account for combined radial and axial loads — the input shaft bearing analysis revealed that the initially selected bearings were undersized, highlighting the importance of thorough verification calculations; (4) assembly sequence planning is essential and influences geometric design decisions like shoulder heights, seal groove positions, and bolt access; (5) specifying every component down to the bolt standard, material grade, and catalogue reference is crucial for reproducible manufacturing at scale.",
    supplementary: [
      {
        title: "Assembly Procedure",
        content: "The assembly follows a carefully defined sequence. First, the SKF 6210 bearing is mounted onto the output shaft using an SKF mounting tool, followed by the KM lock nut and MB washer. The shaft is then inserted into the main housing. The output shaft cover (with oil retainer pre-installed) is bolted on with M8 screws. Next, the keyway and output gear wheel are installed, secured by the retaining ring. The remaining bearings are mounted on both shafts. The input shaft is installed into the housing cover with its large bearing seated. The cover is then carefully positioned using centering pins, engaging both shaft bearings and the gear mesh simultaneously. The two housing halves are joined with six M12×175 bolts. Finally, the flange, shaft covers, oil plugs, sight glass, and seals are installed, and the housing is filled with ISO VG 68 lubricating oil."
      },
      {
        title: "Lubrication & Maintenance",
        content: "The reducer uses ISO VG 68 oil, which provides adequate film formation for the helical gears and bearings. The oil level must reach the lower teeth of the output gear, visible through the lateral sight glass. Oil changes are required every 2,000 operating hours — drained through the magnetic drain plug (which also captures metal particles) and refilled through the top fill plug. Every 2,000 hours, the reducer should also be disassembled for internal component inspection. Sealing is ensured by fluorocarbon O-rings at shaft covers, a nitrile cord seal between housing halves, and SKF CRW1 oil retainers at both shaft exits."
      }
    ],
  },
];
