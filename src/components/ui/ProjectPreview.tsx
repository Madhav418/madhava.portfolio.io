import type { ReactNode } from 'react'

type ProjectPreviewProps = { slug: string; title: string }

function Caption({ x, y, children }: { x: number; y: number; children: ReactNode }) {
  return <text x={x} y={y} fill="currentColor" fontSize="15" fontFamily="inherit">{children}</text>
}

function InspectionScene() {
  return <>
    {[0,1,2].map(i=><g key={i} transform={`translate(${55+i*23} ${65+i*23})`}><rect width="205" height="184" rx="5" fill="#24483c" stroke="#9abcab" strokeOpacity=".55" /><path d="M15 145 65 90 105 125 145 70 190 145Z" fill="#567d66" opacity=".4" /><circle cx="47" cy="42" r="15" fill="#c8dcaf" opacity=".35" /></g>)}
    <rect x="150" y="150" width="78" height="92" stroke="#dce9b3" strokeWidth="2" strokeDasharray="5 4" />
    <path d="M260 187H345 M330 181 345 187 330 193" stroke="#dce9b3" />
    <rect x="365" y="65" width="290" height="245" rx="5" fill="#183b30" stroke="#839f8a" />
    <Caption x={387} y={99}>Compliance review</Caption><path d="M387 113H630" stroke="#839f8a" opacity=".4" />
    {['Object detection','Location metadata','Rule validation','Traceable report'].map((label,i)=><g key={label}><circle cx="398" cy={143+i*43} r="9" stroke="#c5dca8" /><path d={`M394 ${143+i*43}l3 3 5-6`} stroke="#c5dca8" /><Caption x={421} y={148+i*43}>{label}</Caption></g>)}
    <Caption x={74} y={310}>Batch imagery</Caption>
    <text x="360" y="370" textAnchor="middle" fill="currentColor" opacity=".7" fontSize="12" letterSpacing="2">INGEST → DETECT → VALIDATE → REPORT</text>
  </>
}

function RagScene() {
  return <>
    {['PDF','DOCX','XLSX'].map((format,i)=><g key={format} transform={`translate(45 ${45+i*96})`}><path d="M0 0H72L90 18V76H0Z" fill="#354239" stroke="#a7bfaa" /><path d="M72 0V18H90" stroke="#a7bfaa" /><Caption x={13} y={31}>{format}</Caption><path d="M14 44H65 M14 53H56 M14 62H62" stroke="#a7bfaa" opacity=".4" /></g>)}
    <path d="M144 83H185V180H230 M144 180H230 M144 275H185V180" stroke="#a7bfaa" strokeDasharray="4 5" />
    <g transform="translate(232 102)"><rect width="155" height="155" rx="8" fill="#2b4337" stroke="#a7bfaa" /><Caption x={23} y={30}>Vector search</Caption>{Array.from({length:20},(_,i)=><circle key={i} cx={25+(i%5)*26} cy={57+Math.floor(i/5)*23} r={i===7?7:4} fill={i===7?'#e5eab8':'#92b397'} opacity={i===7?1:.55} />)}<circle cx="77" cy="80" r="17" stroke="#e5eab8" /></g>
    <path d="M387 180H440 M429 174 440 180 429 186" stroke="#d5e0b7" />
    <rect x="450" y="72" width="230" height="225" rx="8" fill="#253b30" stroke="#a7bfaa" />
    <Caption x={470} y={104}>Context-aware answer</Caption>
    <path d="M470 127H655 M470 142H640 M470 157H650 M470 172H605" stroke="#a7bfaa" opacity=".6" />
    <rect x="470" y="201" width="187" height="72" rx="4" fill="#d6e2b4" fillOpacity=".08" />
    <text x="482" y="224" fill="#d6e2b4" fontSize="12">Retrieved context</text><path d="M482 240H640 M482 251H610" stroke="#d6e2b4" opacity=".5" />
    <text x="360" y="365" textAnchor="middle" fill="currentColor" opacity=".7" fontSize="12" letterSpacing="2">DOCUMENTS → EMBEDDINGS → RETRIEVAL → RESPONSE</text>
  </>
}

function ElectricalScene() {
  return <>
    <path d="M0 108Q150 155 330 108T720 108 M0 140Q150 187 330 140T720 140" stroke="#b5c9b4" opacity=".6" />
    <path d="M345 65V335H365V65Z" fill="#496854" stroke="#c0d5bc" />
    <path d="M280 110H430 M300 143H410" stroke="#bed4b7" strokeWidth="7" />
    {[295,325,385,415].map(x=><g key={x}><path d={`M${x} 90v20`} stroke="#dce9c8" strokeWidth="3" /><path d={`M${x-6} 94h12 M${x-6} 100h12`} stroke="#dce9c8" strokeWidth="2" /></g>)}
    <rect x="366" y="180" width="52" height="77" rx="8" fill="#729078" stroke="#cee2c2" /><path d="M373 192H411 M373 202H411 M373 212H411 M373 222H411 M373 232H411" stroke="#c2d5bd" />
    <path d="M352 155H449Q465 155 465 177" stroke="#bed4b7" strokeWidth="3" /><path d="M451 179h28l-5 8h-19Z" fill="#d8e5bb" />
    <rect x="275" y="80" width="158" height="73" stroke="#dce9b3" strokeDasharray="5 4" /><rect x="357" y="172" width="70" height="95" stroke="#dce9b3" strokeDasharray="5 4" />
    <path d="M275 96H170V72H55 M280 125H165V200H55 M427 220H520V250H655 M478 179H520V135H655" stroke="#a2b89b" />
    <Caption x={55} y={60}>Insulators &amp; wires</Caption><Caption x={55} y={224}>Crossarm</Caption><Caption x={530} y={123}>Streetlight</Caption><Caption x={530} y={275}>Transformer</Caption>
    <ellipse cx="355" cy="340" rx="120" ry="19" stroke="#a2b89b" opacity=".25" />
    <text x="360" y="380" textAnchor="middle" fill="currentColor" opacity=".7" fontSize="12" letterSpacing="2">DETECTION / CONDITION / MAINTENANCE</text>
  </>
}

function DistanceScene() {
  return <>
    <path d="M80 320H660 M180 320 360 160 540 320 M240 320 360 160 480 320 M140 280H580 M210 235H510" stroke="#9cb3a6" opacity=".22" />
    <rect x="55" y="140" width="92" height="65" rx="7" fill="#37584d" stroke="#bad1c2" /><circle cx="116" cy="172" r="18" stroke="#d5e5c7" /><circle cx="116" cy="172" r="9" fill="#b5ceb9" /><path d="M70 140v-12h35v12 M100 205v90 M100 255 70 310 M100 255 130 310" stroke="#bad1c2" strokeWidth="2" />
    <path d="M147 172 500 90V280Z" fill="#bed6b0" fillOpacity=".05" stroke="#bed6b0" strokeDasharray="5 6" />
    <rect x="500" y="90" width="55" height="190" fill="#426251" stroke="#c9ddbc" /><path d="M500 90 525 70H580V260L555 280 M555 90 580 70" stroke="#c9ddbc" />
    <rect x="266" y="127" width="16" height="90" fill="#d9e6be" fillOpacity=".18" stroke="#d9e6be" />
    <path d="M147 330H500 M147 323V337 M500 323V337 M606 90V280 M599 90H613 M599 280H613" stroke="#d9e6be" />
    <Caption x={198} y={355}>Estimated distance</Caption><text x="630" y="190" fill="currentColor" fontSize="13" transform="rotate(-90 630 190)">Known height</text>
    <Caption x={55} y={112}>Camera</Caption><Caption x={219} y={111}>Image plane</Caption><Caption x={495} y={51}>Reference object</Caption>
    <text x="348" y="270" textAnchor="middle" fill="#d9e6be" fontSize="17" fontFamily="monospace">D = (f × H) / h</text>
  </>
}

const scenes: Record<string, { eyebrow: string; name: string; stack: string; scene: ReactNode }> = {
  'automated-infrastructure-inspection': { eyebrow: 'Infrastructure intelligence', name: 'Inspection', stack: 'YOLO / Azure / Compliance', scene: <InspectionScene /> },
  'rag-document-chatbot': { eyebrow: 'Retrieval-augmented generation', name: 'Document intelligence', stack: 'LangChain / ChromaDB / OpenAI', scene: <RagScene /> },
  'electrical-asset-monitoring': { eyebrow: 'Computer vision for utilities', name: 'Asset intelligence', stack: 'YOLOv8 / OpenCV / Condition monitoring', scene: <ElectricalScene /> },
  'vision-distance-estimation': { eyebrow: 'Monocular vision research', name: 'Perspective & distance', stack: 'Calibration / Geometry / OpenCV', scene: <DistanceScene /> },
}

/** Original vector concept images, matching the AeroMind and GeoDiscover plates. */
export function ProjectPreview({ slug, title }: ProjectPreviewProps) {
  const artwork = scenes[slug]
  if (!artwork) return null
  return <figure className={`work-artwork overview-artwork overview-${slug}`} role="img" aria-label={`${title}: ${artwork.eyebrow} concept illustration`}>
    <div className="artwork-label" aria-hidden="true"><span>{artwork.eyebrow}</span><span>CONCEPT STUDY</span></div>
    <svg viewBox="0 0 720 400" fill="none" aria-hidden="true">{artwork.scene}</svg>
    <figcaption className="artwork-bottom" aria-hidden="true"><span>{artwork.stack}</span><span>{artwork.name}</span></figcaption>
  </figure>
}
