import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/data/projectsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Speedway images
import geometryImg from "@/assets/speedway/geometry.png";
import domainImg from "@/assets/speedway/domain.png";
import meshPrismImg from "@/assets/speedway/mesh-prism.png";
import windTunnelSetupImg from "@/assets/speedway/wind-tunnel-setup.jpg";
import cpContourImg from "@/assets/speedway/cp-contour.png";
import cpLegendImg from "@/assets/speedway/cp-legend.png";
import meanVelocityImg from "@/assets/speedway/mean-velocity.png";
import velocityLegendImg from "@/assets/speedway/velocity-legend.png";
import accumulatedDragImg from "@/assets/speedway/accumulated-drag.png";

const ImagePlaceholder = ({ label, aspect = "video" }: { label: string; aspect?: "video" | "square" }) => (
  <div
    className={`w-full rounded-lg border border-dashed border-border bg-muted/50 flex items-center justify-center text-sm text-muted-foreground p-6 text-center ${
      aspect === "square" ? "aspect-[4/3]" : "aspect-video"
    }`}
  >
    {label}
  </div>
);

interface FigureProps {
  src: string;
  legendSrc?: string;
  alt: string;
  caption: string;
  figureNumber: number;
}

const Figure = ({ src, legendSrc, alt, caption, figureNumber }: FigureProps) => (
  <figure className="my-6">
    {legendSrc && (
      <div className="flex justify-center mb-2">
        <img src={legendSrc} alt={`${alt} legend`} className="max-h-12 object-contain" />
      </div>
    )}
    <div className="w-full rounded-lg overflow-hidden border border-border">
      <img src={src} alt={alt} className="w-full h-auto object-contain" />
    </div>
    <figcaption className="mt-2 text-xs text-muted-foreground text-center italic">
      Figure {figureNumber}: {caption}
    </figcaption>
  </figure>
);

// Mapping for speedway methodology images by placeholder label
const speedwayMethodologyImages: Record<string, { src: string; caption: string }> = {
  "3D Scanned Motorcycle Geometry": {
    src: geometryImg,
    caption: "Geometry of speedway and rider. Side view.",
  },
  "Computational Domain and Boundary Conditions": {
    src: domainImg,
    caption: "The dimensions of the computational domain used in the CFD simulations, where L = 2070 mm, H = 1520 mm, and W = 830 mm.",
  },
  "Polyhedral Mesh Detail and Prism Layers": {
    src: meshPrismImg,
    caption: "A zoomed-in representation of the prism layers used in the simulation. These layers are crucial for accurately capturing boundary layers.",
  },
};

const speedwayValidationImages: Record<string, { src: string; caption: string }> = {
  "Wind Tunnel Test Setup": {
    src: windTunnelSetupImg,
    caption: "3D-printed model used for wind tunnel testing. The model was printed in PLA plastic and split into four parts for manufacturing feasibility.",
  },
  "1:6 Scale 3D-Printed Model in Wind Tunnel": {
    src: windTunnelSetupImg,
    caption: "3D-printed model used for wind tunnel testing. The model was printed in PLA plastic and split into four parts for manufacturing feasibility.",
  },
};

const speedwayResultsImages: Record<string, { src: string; legendSrc?: string; caption: string }> = {
  "Pressure Coefficient Contour (Mid-plane)": {
    src: cpContourImg,
    legendSrc: cpLegendImg,
    caption: "Contour of pressure coefficient on mid-plane in flow direction. The mid-plane pressure coefficient contour illustrates pressure variations along the centreline of the speedway motorcycle. It highlights stagnation zones, areas of low pressure, and key separation regions.",
  },
  "Mean Velocity Field": {
    src: meanVelocityImg,
    legendSrc: velocityLegendImg,
    caption: "Contour of mean velocity on mid-plane in flow direction. It highlights high-velocity regions around the helmet and front fairing, along with low-velocity wake areas behind the rider.",
  },
  "Accumulated Drag Force Along Longitudinal Axis": {
    src: accumulatedDragImg,
    caption: "Comparison of accumulated drag forces along the speedway profile.",
  },
};

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, [id]);
  const project = projectsData.find((p) => p.id === id);
  const isSpeedway = id === "speedway-aerodynamics";

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>Back to Portfolio</Button>
        </div>
      </div>
    );
  }

  const methodPlaceholders = project.methodologyPlaceholders || ["CFD Mesh Visualization", "Boundary Conditions Setup"];
  const resPlaceholders = project.resultsPlaceholders || ["Pressure Contour Plot", "Velocity Streamlines", "Before / After Comparison"];

  // Global figure counter
  let figureCount = 0;
  const nextFigure = () => ++figureCount;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Button variant="ghost" onClick={() => navigate("/")} className="mb-8 text-muted-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>

            {/* Cover image */}
            <div className="rounded-lg overflow-hidden aspect-video mb-8 border border-border">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            {/* Header */}
            <Badge variant="secondary" className="mb-4">{project.tag}</Badge>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-12">
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />{project.date}</span>
              <span className="flex items-center gap-2"><User className="h-4 w-4" />{project.role}</span>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-xl font-semibold mb-4 text-primary">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
              </section>

              {/* Objectives */}
              <section>
                <h2 className="text-xl font-semibold mb-4 text-primary">Objectives</h2>
                <ul className="space-y-2">
                  {project.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Methodology */}
              <section>
                <h2 className="text-xl font-semibold mb-4 text-primary">Methodology</h2>
                <p className="text-muted-foreground leading-relaxed">{project.methodology}</p>

                <div className="mt-6 space-y-4">
                  {methodPlaceholders.map((label, i) => {
                    const imgData = isSpeedway ? speedwayMethodologyImages[label] : undefined;
                    if (imgData) {
                      return <Figure key={i} src={imgData.src} alt={label} caption={imgData.caption} figureNumber={nextFigure()} />;
                    }
                    return <ImagePlaceholder key={i} label={label} />;
                  })}
                </div>

                {/* Convergence Studies as subsection */}
                {project.supplementary && project.supplementary.length > 0 && (
                  <div className="mt-10">
                    <h3 className="text-lg font-semibold mb-6">Convergence Studies</h3>
                    <div className="space-y-8">
                      {project.supplementary.map((item, i) => (
                        <div key={i}>
                          <h4 className="text-base font-medium mb-3">{item.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
                          <div className="mt-4">
                            <ImagePlaceholder label={`${item.title} Chart / Figure`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* Validation */}
              {project.validation && (
                <section>
                  <h2 className="text-xl font-semibold mb-4 text-primary">Validation</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.validation}</p>
                  {project.validationPlaceholders && project.validationPlaceholders.length > 0 && (
                    <div className="mt-6 space-y-4">
                      {project.validationPlaceholders.map((label, i) => {
                        const imgData = isSpeedway ? speedwayValidationImages[label] : undefined;
                        if (imgData) {
                          return <Figure key={i} src={imgData.src} alt={label} caption={imgData.caption} figureNumber={nextFigure()} />;
                        }
                        return <ImagePlaceholder key={i} label={label} />;
                      })}
                    </div>
                  )}
                </section>
              )}

              {/* Results & Impact */}
              <section>
                <h2 className="text-xl font-semibold mb-4 text-primary">Results & Impact</h2>
                <p className="text-muted-foreground leading-relaxed">{project.results}</p>
                <div className="mt-6 space-y-4">
                  {resPlaceholders.map((label, i) => {
                    const imgData = isSpeedway ? speedwayResultsImages[label] : undefined;
                    if (imgData) {
                      return <Figure key={i} src={imgData.src} legendSrc={imgData.legendSrc} alt={label} caption={imgData.caption} figureNumber={nextFigure()} />;
                    }
                    return <ImagePlaceholder key={i} label={label} />;
                  })}
                </div>
              </section>

              {/* Lessons Learned */}
              <section>
                <h2 className="text-xl font-semibold mb-4 text-primary">Lessons Learned</h2>
                <p className="text-muted-foreground leading-relaxed">{project.lessons}</p>
              </section>

              {/* Future Work */}
              {project.futureWork && (
                <section>
                  <h2 className="text-xl font-semibold mb-4 text-primary">Future Work</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.futureWork}</p>
                </section>
              )}

              {/* Download PDF */}
              {project.pdfUrl && (
                <div className="pt-4 flex justify-center">
                  <Button asChild size="lg">
                    <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-5 w-5" />
                      Read Full Paper (PDF)
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectPage;