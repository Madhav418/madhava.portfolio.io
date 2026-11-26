export type Project = { slug: string; title: string; summary: string; description: string[]; role: string; year: string; stack: string[]; liveUrl?: string; githubUrl?: string; challenge: string; solution: string; results: string[] }

export const projects: Project[] = [
  {
    slug: 'aeromind',
    title: 'AeroMind: AI Tower Inspection',
    summary: 'Drone-based telecom inspection combining YOLO, VLMs and multimodal LLM reasoning with human review and 3D digital twins.',
    description: [
      'A telecom tower inspection workspace that turns drone photos and sampled video frames into equipment detections, reviewed inventories, condition assessments, and interactive 3D reconstructions. React, TypeScript, and Three.js power the inspection interface, backed by Python, FastAPI, and SQLAlchemy.',
      'Vision-language models (VLMs) and multimodal large language models (LLMs) bring visual understanding and language reasoning into the inspection workflow. Local Qwen3-VL models run through Ollama: qwen3-vl:8b-instruct reads logos and printed text from equipment crops, while the thinking qwen3-vl:8b model compares physical structure against reference photos when identifying markings are not visible. Structured responses include evidence and confidence; ambiguous manufacturer matches remain Unknown for a reviewer to resolve.',
      'The condition assessment pipeline identifies visible rust, corrosion, cracks, cable damage, missing parts, and other defects. It returns a condition grade, health score, defect severity, evidence, a summary, and a recommended action. A second model checks reported defects and flags disputed findings. Small or unclear crops receive an Unknown assessment; surface percentages are visual estimates rather than physical measurements.',
      'A shared detection and QC editor supports drawing, resizing, relabelling, undo/redo, and approval of bounding boxes. Approved annotations feed the inventory and defect views. Annotated image exports preserve source metadata, including EXIF, GPS, and DJI XMP for JPEG imagery, and reviewed results can be exported as CSV.',
      'COLMAP produces sparse point clouds or dense meshes for the Three.js digital twin, with camera overlays and estimated equipment markers for review. The workspace also supports imported LiDAR/point-cloud data. Its deployment architecture separates the FastAPI web service and PostgreSQL database from a local GPU worker running YOLO, COLMAP, and Ollama, with S3-compatible storage for media and reconstruction outputs.'
    ],
    role: 'Multimodal AI & Computer Vision',
    year: '',
    stack: ['VLMs', 'Multimodal LLMs', 'YOLO', 'Qwen3-VL', 'Ollama', 'Python', 'FastAPI', 'React', 'TypeScript', 'Three.js', 'COLMAP', 'SQLAlchemy', 'PostgreSQL', 'S3 Storage', 'Docker', 'Railway'],
    githubUrl: 'https://github.com/harikeerthijsan/jsan_aeromind',
    challenge: 'Convert drone imagery into useful tower inspection evidence while handling small equipment crops, uncertain manufacturer identities, false defect findings, and the relationship between 2D observations and 3D geometry.',
    solution: 'Combine YOLO localization with two-stage Qwen3-VL identification, structured multimodal LLM outputs, second-model defect verification, and human approval. Connect reviewed observations to inventory and reporting, and use COLMAP geometry to propose equipment locations in an interactive digital twin.',
    results: [
      'Integrated photo and video-frame detection with editable bounding boxes and explicit QC approval.',
      'Added reference-assisted manufacturer suggestions with confidence caps and ambiguity handling.',
      'Produced structured condition grades, defect evidence, and recommended actions with second-model verification.',
      'Preserved image metadata in annotated downloads and exported approved annotations as CSV.',
      'Connected inspection imagery, point clouds, camera positions, and reviewable 3D equipment markers.',
      'Separated GPU processing from the hosted application through a polling worker and shared object storage.'
    ]
  },
  {
    slug: 'geodiscover',
    title: 'GeoDiscover: Places Intelligence',
    summary: 'A geospatial workspace for POI discovery, interactive mapping, explainable matching, and evidence-based review and delivery.',
    description: [
      'GeoDiscover, presented in the repository as JSAN Places Intelligence, is a Southeast Asia places-intelligence POC built with React, MapLibre, FastAPI, and PostgreSQL/PostGIS. It connects customer baseline datasets, area-of-interest exploration, source comparison, review tasks, and quality-controlled delivery.',
      'CSV and Excel imports preserve original columns alongside normalized identities, categories, addresses, and spatial coordinates. Atomic validation rejects invalid or duplicate IDs and inconsistent coordinates, while changed files create new dataset versions. PostGIS geometry columns and GiST indexes support persistent geospatial data access.',
      'The interactive AOI viewer supports GeoJSON, Shapefiles, CSV/TSV, and Excel layers, with coordinate reprojection, clustered places, category filters, boundary attributes, multiple basemaps, distance/area measurement, and GeoJSON or PNG export. Bounded Google Places and AWS GrabMaps collection supports pagination, polygon filtering, provider-level deduplication, and separate raw Excel extracts with explicit caps and errors.',
      'The comparison engine links permitted source observations and matches them against HERE baselines using name similarity, category, phone, address, website, and distance bands. It explains matching signals and candidate differences, distinguishes chain branches and colocated businesses, and proposes new, updated, unchanged, verification, or potential closure outcomes.',
      'Role- and AOI-scoped workflows allocate review tasks, capture supporting evidence, route field verification, and require independent QC. The delivery pipeline checks approved records against blocker rules before writing HERE Excel templates, manifests, QC checklists, and checksum-backed snapshots. Raw provider extracts remain separate from the approved customer-delivery workflow.'
    ],
    role: 'Geospatial Engineering & Full Stack',
    year: '',
    stack: ['PostGIS', 'MapLibre', 'FastAPI', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Google Places API', 'AWS GrabMaps', 'OpenPyXL', 'Docker', 'Railway'],
    githubUrl: 'https://github.com/madhavad418/GeoDiscover',
    challenge: 'Reconcile inconsistent place records across sources and geographic areas, explain possible changes, and ensure only evidence-backed, independently reviewed records reach customer delivery.',
    solution: 'Combine versioned spatial imports and an interactive map with identity- and distance-based POI matching. Carry the resulting findings through role-based tasks, evidence validation, independent QC, and gated template exports, while keeping bounded provider collection separate from approved delivery.',
    results: [
      'Implemented persistent, versioned customer imports with row-level validation and spatial indexes.',
      'Unified boundary and place exploration across multiple GIS and spreadsheet formats.',
      'Added bounded API collection with polygon filtering, deduplication, and provider-specific Excel sheets.',
      'Generated explainable POI matches and proposed changes using identity signals and distance bands.',
      'Connected review, independent QC, field verification, and task history in one workflow.',
      'Generated gated HERE delivery packages with manifests, checklists, and SHA-256 checksums.'
    ]
  },
  {
    "slug": "automated-infrastructure-inspection",
    "title": "Automated Infrastructure Inspection",
    "summary": "Large-scale image validation with 95+ specialized YOLO models and traceable compliance reporting.",
    "description": [
      "An end-to-end infrastructure inspection pipeline built to process 1,000+ images per batch across 80+ compliance validation rules.",
      "The system combines specialized YOLO models, scalable Azure storage, distributed execution, and structured reporting to make inspection results traceable."
    ],
    "role": "AI Engineering",
    "year": "2026",
    "stack": [
      "Python",
      "YOLO",
      "PyTorch",
      "OpenCV",
      "Azure Blob Storage",
      "Apache Spark",
      "Azure ML",
      "Azure Web Apps",
      "Pillow",
      "piexif"
    ],
    "challenge": "Validate large batches of infrastructure images across many compliance rules while preserving image metadata and a reliable audit trail.",
    "solution": "Deployed 95+ specialized YOLO models with a 90% confidence threshold. Integrated Azure Blob Storage with retries and chunked streaming, Apache Spark for distributed model execution, and automated CSV reporting with EXIF GPS extraction and OCR-based location verification.",
    "results": [
      "Processed 1,000+ images per batch across 80+ compliance validation rules.",
      "Supported multi-angle checks for cable labelling, device positioning, and pit inspection.",
      "Preserved metadata in image overlays and handled duplicates, folder structures, and irrelevant-image filtering.",
      "Produced traceable classification reports and complete audit trails."
    ]
  },
  {
    "slug": "rag-document-chatbot",
    "title": "Document-Aware RAG Chatbot",
    "summary": "An end-to-end assistant that retrieves context from PDFs, Word documents, and spreadsheets.",
    "description": [
      "Built at Techwave from January to June 2025, this RAG chatbot connects multi-format document ingestion with semantic retrieval and context-aware responses.",
      "A React frontend and Django APIs support real-time querying, while LangChain orchestrates retrieval and OpenAI GPT responses."
    ],
    "role": "Generative AI · Techwave",
    "year": "January – June 2025",
    "stack": [
      "Python",
      "Django",
      "React",
      "LangChain",
      "Hugging Face Transformers",
      "ChromaDB",
      "OpenAI GPT"
    ],
    "challenge": "Make information stored across PDF, DOCX, and XLSX files searchable through natural-language questions.",
    "solution": "Built document ingestion, chunking, and embedding pipelines using Hugging Face Sentence Transformers and ChromaDB. Integrated OpenAI GPT through LangChain, with prompt engineering to improve contextual relevance.",
    "results": [
      "Supported PDF, DOCX, and XLSX ingestion.",
      "Enabled semantic similarity search over document embeddings.",
      "Delivered context-aware responses through an interactive React frontend.",
      "Implemented chunking and prompt strategies to improve response quality."
    ]
  },
  {
    "slug": "electrical-asset-monitoring",
    "title": "Electrical Asset Detection",
    "summary": "Computer vision for detecting pole assets, assessing condition, and supporting maintenance planning.",
    "description": [
      "Built at Techwave from January to November 2024, the system detects electrical infrastructure including poles, wires, insulators, crossarms, transformers, and streetlights.",
      "Condition monitoring models and a React/Django web application help field engineers review detections, generate reports, and plan maintenance."
    ],
    "role": "Computer Vision · Techwave",
    "year": "January – November 2024",
    "stack": [
      "YOLOv8",
      "Python",
      "OpenCV",
      "TensorFlow",
      "PyTorch",
      "React",
      "Django"
    ],
    "challenge": "Reduce manual effort in identifying electrical assets and assessing their condition from infrastructure imagery.",
    "solution": "Combined YOLOv8 object detection with condition monitoring models, dataset augmentation, fine-tuning, and multi-model training. Built a web platform for detection visualization and automated asset reports.",
    "results": [
      "Automated identification of key electrical pole assets.",
      "Improved detection accuracy and mAP through augmentation and model fine-tuning.",
      "Enabled asset health assessment and predictive maintenance planning.",
      "Reduced manual inspection time and improved monitoring efficiency."
    ]
  },
  {
    "slug": "vision-distance-estimation",
    "title": "Vision-Based Distance Estimation",
    "summary": "A research prototype for measuring camera-to-object and object-to-object distances from 2D images.",
    "description": [
      "A research and development project at Techwave exploring real-time distance estimation through monocular computer vision.",
      "The prototype uses camera calibration and perspective geometry to estimate real-world measurements, with exploration of infrastructure applications such as sewage pipe inspection."
    ],
    "role": "Computer Vision R&D · Techwave",
    "year": "",
    "stack": [
      "Python",
      "OpenCV",
      "NumPy",
      "Camera Calibration",
      "Monocular Vision",
      "Perspective Geometry"
    ],
    "challenge": "Estimate real-world distances from a single camera using 2D image information and known dimensions.",
    "solution": "Used focal length, pixel metrics, known object dimensions, and perspective projection to calculate distances. Calibrated the camera to improve measurement accuracy and tested the approach on infrastructure elements.",
    "results": [
      "Estimated object-to-camera and object-to-object distances.",
      "Applied pixel-to-real-world mapping and image-based geometry.",
      "Tested the prototype in scenarios including sewage pipe inspection."
    ]
  }
]

export function getProjectBySlug(slug: string) { return projects.find(project => project.slug === slug) }

