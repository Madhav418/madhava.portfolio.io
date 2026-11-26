/** Original schematic illustrations; not live map data or inspection results. */
export function GeoMapArtwork() {
  const places = [
    { x: 120, y: 220, name: 'Cafe', color: '#e4c78f' },
    { x: 300, y: 110, name: 'Clinic', color: '#c9e4be' },
    { x: 480, y: 220, name: 'Market', color: '#e4c78f' },
    { x: 300, y: 330, name: 'Library', color: '#c9e4be' },
  ]
  return <>
    <rect x="15" y="22" width="690" height="356" rx="8" fill="#26392e" stroke="#64785a" strokeOpacity=".4" />
    {/* City blocks, green spaces, and a river provide a readable map context. */}
    {[45,155,335,515].map((x,i)=>[48,140,250].map((y,j)=><g key={`${i}-${j}`}>
      <rect x={x} y={y} width={i===0?48:105} height="52" rx="4" fill={i===1&&j===2?'#526644':'#3b4d3c'} />
      <path d={`M${x+8} ${y+10}h${i===0?18:35}v30h-${i===0?18:35}z M${x+55} ${y+10}h28v14h-28z M${x+55} ${y+31}h28v11h-28z`} fill="#718266" opacity={i===0 ? 0 : .26} />
    </g>))}
    <path d="M668 23 Q605 98 657 173 T642 303 Q620 350 654 378" stroke="#456b67" strokeWidth="32" />
    <path d="M668 23 Q605 98 657 173 T642 303 Q620 350 654 378" stroke="#86a8a0" strokeWidth="1" opacity=".4" />
    <path d="M120 23V378 M300 23V378 M480 23V378 M620 23V378 M16 110H640 M16 220H670 M16 330H635" stroke="#87917a" strokeWidth="10" opacity=".35" />
    <path d="M120 23V378 M300 23V378 M480 23V378 M620 23V378 M16 110H640 M16 220H670 M16 330H635" stroke="#c5cbb0" strokeWidth="1" opacity=".28" />
    <path d="M88 75H530V350H88Z" fill="#c9df9f" fillOpacity=".03" stroke="#c9df9f" strokeDasharray="6 6" opacity=".65" />
    <text x="98" y="63" fill="#d0dfb5" fontSize="12" letterSpacing="1.5">AREA OF INTEREST</text>
    <text x="180" y="281" fill="#b3c59f" fontSize="11" letterSpacing="1">CITY PARK</text>
    <path d="M120 300V220H300V110H480V220H585" stroke="#d4e7ae" strokeWidth="10" opacity=".08" strokeLinejoin="round" />
    <path className="geo-route-flow" d="M120 300V220H300V110H480V220H585" stroke="#e0edb8" strokeWidth="3" strokeDasharray="7 8" strokeLinejoin="round" />
    <circle className="map-traveler" r="5" fill="#fff6d4" stroke="#92ab78" strokeWidth="4" />
    {places.map((place,i)=><g key={place.name}>
      <circle className="geo-marker-pulse" style={{animationDelay:`${i * -.9}s`}} cx={place.x} cy={place.y} r="19" stroke={place.color} />
      <path d={`M${place.x} ${place.y}c-5-7-12-13-12-20a12 12 0 0 1 24 0c0 7-7 13-12 20Z`} fill={place.color} stroke="#26392e" strokeWidth="2" />
      <circle cx={place.x} cy={place.y-20} r="3" fill="#26392e" />
      <rect x={place.x+19} y={place.y-38} width={place.name.length*9+20} height="26" rx="3" fill="#203126" stroke="#879e72" strokeOpacity=".5" />
      <text x={place.x+29} y={place.y-20} fill="#edf2dc" fontSize="15">{place.name}</text>
    </g>)}
    <g transform="translate(665 55)"><path d="M0 0-7 19 0 15 7 19Z" fill="#d6e2c2" /><text x="0" y="-7" textAnchor="middle" fill="#d6e2c2" fontSize="11">N</text></g>
    <path d="M552 355v6h65v-6" stroke="#c5d2b4" />
    <text x="585" y="348" textAnchor="middle" fill="#c5d2b4" fontSize="10">ILLUSTRATIVE MAP</text>
  </>
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
