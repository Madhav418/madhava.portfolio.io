import type { CSSProperties } from 'react'
import { geoDemoPlaces } from '@/data/geoDemo'

export type GeoMapSelection = {
  selectedCity: string
  onSelectCity: (city: string) => void
}

/** World coastlines are from Natural Earth. */
export function GeoMapArtwork({ selection }: { selection?: GeoMapSelection }) {
  return (
    <>
      <image href="/geodiscover-world.svg" width="720" height="360" />
      <rect x="260" y="230" width="254" height="108" rx="8" fill="#203126" stroke="#91a989" />
      <text x="275" y="253" fill="#eff4e6" fontSize="15" fontWeight="600">Global POI workflow</text>
      <path d="M282 281H488" stroke="#7b927a" strokeDasharray="4 4" />
      <g className="geo-stage">
        <circle className="geo-poi-scan" cx="305" cy="281" r="21" stroke="#f5d99e" strokeWidth="1.5" />
        <circle cx="305" cy="281" r="15" fill="#f5d99e" />
        <path d="M305 287c-3-4-6-6-6-9a6 6 0 0 1 12 0c0 3-3 5-6 9Z" stroke="#203126" strokeWidth="1.5" />
        <text x="305" y="318" textAnchor="middle" fill="#fff2d4" fontSize="13">Discover</text>
      </g>
      <g className="geo-stage geo-stage-check">
        <circle cx="386" cy="281" r="15" fill="#cae2ee" />
        <circle cx="386" cy="281" r="5" stroke="#203126" strokeWidth="1.5" />
        <circle className="geo-candidate" cx="386" cy="281" r="2.5" fill="#203126" />
        <path d="M386 271v4m0 12v4m-10-10h4m12 0h4" stroke="#203126" strokeWidth="1.5" />
        <text x="386" y="318" textAnchor="middle" fill="#e7f6fc" fontSize="13">Locate</text>
      </g>
      <g className="geo-stage geo-stage-verify">
        <circle cx="467" cy="281" r="15" fill="#d5e9ab" />
        <path className="geo-evidence-check" d="m460 281 5 5 9-10" pathLength="1" stroke="#203126" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="467" y="318" textAnchor="middle" fill="#edf5dc" fontSize="13">Verify</text>
      </g>
      {geoDemoPlaces.map(({ city, x, y }, index) => (
        <g
          key={city}
          className={selection ? 'geo-demo-marker' : undefined}
          role={selection ? 'button' : undefined}
          tabIndex={selection ? 0 : undefined}
          aria-label={selection ? `Explore sample place in ${city}` : undefined}
          aria-pressed={selection ? selection.selectedCity === city : undefined}
          onClick={selection ? () => selection.onSelectCity(city) : undefined}
          onKeyDown={selection ? (event) => {
            if (event.key !== 'Enter' && event.key !== ' ') return
            event.preventDefault()
            selection.onSelectCity(city)
          } : undefined}
          stroke="#203126"
          strokeWidth="1.5"
          style={{ '--geo-phase-offset': `${index * -0.8}s` } as CSSProperties}
        >
          {selection && <circle className="geo-demo-hit-area" cx={x} cy={y} r="19" fill="transparent" stroke="transparent" />}
          <circle className="geo-map-scan" cx={x} cy={y} r="13" stroke="#f5d99e" />
          <circle className="geo-stage" cx={x} cy={y} r="5" fill="#f5d99e" />
          <circle className="geo-stage geo-stage-check" cx={x} cy={y} r="7" stroke="#cae2ee" />
          <path className="geo-stage geo-stage-verify" d={`M${x - 3} ${y}l2 2 4-4`} stroke="#d5e9ab" strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
    </>
  )
}

export function TowerAssetArtwork() {
  return <>
    <ellipse cx="360" cy="336" rx="145" ry="24" stroke="#a9cfc1" opacity=".2" />
    <circle className="tower-signal-ring" cx="360" cy="182" r="140" stroke="#a9cfc1" opacity=".13" strokeDasharray="2 7" />
    <path d="M305 330 350 62 370 62 415 330 M305 330 392 225 327 195 378 125 350 62 M415 330 328 225 393 195 342 125 370 62 M325 205H395 M336 145H384 M360 62V30 M325 112H398" stroke="#a9cfc1" strokeWidth="2" />
    {[[319,78],[387,78]].map(([x,y],i)=><g key={i}><rect x={x} y={y} width="19" height="52" rx="3" fill="#a9cfc1" fillOpacity=".4" stroke="#d8eadc" /><rect className="tower-detection" style={{animationDelay:`${i * -1.2}s`}} x={x-6} y={y-6} width="31" height="64" stroke="#d5e9ab" strokeDasharray="4 4" /></g>)}
    <path d="M377 171h35" stroke="#c3d8c8" strokeWidth="3" />
    <ellipse cx="417" cy="171" rx="17" ry="24" fill="#537567" stroke="#d8eadc" strokeWidth="2" />
    <ellipse cx="421" cy="171" rx="8" ry="17" stroke="#c7deca" /><path d="M421 171h16" stroke="#d8eadc" strokeWidth="2" />
    <rect className="tower-detection" x="393" y="140" width="48" height="63" stroke="#d5e9ab" strokeDasharray="4 4" />
    <rect x="312" y="173" width="23" height="35" rx="2" fill="#537567" stroke="#d8eadc" />
    {[180,187,194,201].map(y=><path key={y} d={`M317 ${y}h13`} stroke="#b7cdbb" />)}
    <path d="M350 125V302 M356 125V302 M362 125V302" stroke="#839d8d" strokeWidth="2" />
    <path d="M332 238H390 M332 233V243 M390 233V243" stroke="#d8eadc" strokeWidth="3" />
    <g stroke="#b6cfae" strokeWidth="1" opacity=".65"><path d="M319 93H245V70H60 M312 190H235V189H60 M350 275H235V290H60 M437 171H490V141H655 M390 238H490V247H655" /></g>
    <g fill="#e4efcf" fontSize="16" fontFamily="inherit"><text x="60" y="59">Sector antennas</text><text x="60" y="177">Remote radio unit</text><text x="60" y="278">RF cables</text><text x="505" y="129">Microwave dish</text><text x="505" y="235">Mounting brackets</text></g>
    <g fill="#b8d39f">{[[319,93],[312,190],[350,275],[437,171],[390,238]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="3" />)}</g>
    <text x="360" y="380" textAnchor="middle" fill="#a9cfc1" fontSize="11" letterSpacing="2">LOCATE / IDENTIFY / REVIEW</text>
    <g className="tower-scan"><rect x="285" y="45" width="170" height="24" fill="#cce6b3" opacity=".06" /><path d="M285 69H455" stroke="#d5e9ab" strokeWidth="1.5" opacity=".7" /></g>
  </>
}
