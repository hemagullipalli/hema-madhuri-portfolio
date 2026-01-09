const modal = document.getElementById("modal");
const body = document.getElementById("modal-body");

const content = {
  genai: `
    <h3>Generative AI & LLMs</h3>
    <p>Designed LLM-based systems using Gemini & Pydantic AI for structured outputs,
    refinement, automation, and reasoning. Built multi-agent systems and handled
    rate limits, chunking, and governance.</p>
  `,
  cv: `
    <h3>Computer Vision</h3>
    <p>Worked on object detection, logo detection, explicit content analysis,
    image segmentation (SAM), and heatmap generation for surveillance and e-commerce.</p>
  `,
  mlops: `
    <h3>MLOps & Vertex AI</h3>
    <p>Built and tested MLOps pipelines on Vertex AI with governance, IAM-aware
    deployments, and production handover experience.</p>
  `,
  cloud: `
    <h3>Cloud & Architecture</h3>
    <p>Hands-on with GCP services (BigQuery, Firestore, Cloud Functions, Cloud SQL).
    Migrated workloads from AWS to GCP and worked on architect-level design thinking.</p>
  `,
  backend: `
    <h3>Backend & APIs</h3>
    <p>Built REST APIs using FastAPI for GenAI platforms, automation agents,
    ingestion systems, and internal accelerators.</p>
  `,
  leadership: `
    <h3>Leadership & Mentorship</h3>
    <p>Mentored juniors, delivered Tech Thursday talks, authored handover docs,
    collaborated across teams, and contributed to HR & outreach initiatives.</p>
  `,
  code: `
    <h3>Code Explainer Agent</h3>
    <p>Led development of an AI agent for code analysis, documentation,
    refactoring, and Git automation using FastAPI & Pydantic AI.</p>
  `,
  linkers: `
    <h3>MLOps on Vertex AI</h3>
    <p>Worked on a production-grade multi-tenant MLOps platform for surveillance,
    including testing, governance, and final handover.</p>
  `,
  sync: `
    <h3>Ad Suitability Analysis</h3>
    <p>Combined Video Intelligence signals with LLM refinement to enable
    brand-safe ad placement insights.</p>
  `,
  shoopy: `
    <h3>Image Enhancement</h3>
    <p>Implemented outfit masking and color transformation using SAM
    and HSV manipulation for e-commerce use cases.</p>
  `
};

function openModal(key) {
  body.innerHTML = content[key];
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
function toggle(card) {
  card.classList.toggle("active");
}


