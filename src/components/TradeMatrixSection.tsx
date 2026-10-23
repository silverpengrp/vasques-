import React, { useState } from 'react';
import { 
  Layers, 
  ShieldAlert, 
  Hammer, 
  Home, 
  BrickWall, 
  PanelTop, 
  Paintbrush, 
  Droplets, 
  Sparkles, 
  Trees, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  FileCheck,
  Award
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TradeDetail {
  id: string;
  name: string;
  nameEs: string;
  shortName: string;
  shortNameEs: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  taglineEs: string;
  blueprintCode: string;
  permitRequirement: string;
  permitRequirementEs: string;
  warrantyPeriod: string;
  warrantyPeriodEs: string;
  materials: string[];
  keySpecs: string[];
  keySpecsEs: string[];
  description: string;
  descriptionEs: string;
}

const TRADES: TradeDetail[] = [
  {
    id: 'decks',
    name: 'Decks & Outdoor Living',
    nameEs: 'Terrazas y Espacios Exteriores',
    shortName: 'Decks',
    shortNameEs: 'Terrazas',
    icon: Layers,
    tagline: 'Custom Trex Composite, Cedar & Multi-Tier Living',
    taglineEs: 'Compuesto Trex Personalizado, Cedro y Terrazas Multinivel',
    blueprintCode: 'IRC R507 / NY-NJ-CT CODE',
    permitRequirement: 'Footing depth 36"-42" frost line, ledger tension ties & framing inspection required',
    permitRequirementEs: 'Profundidad de cimientos bajo la línea de congelación (36"-42"), pernos Simpson Strong-Tie e inspección de estructura',
    warrantyPeriod: '10-Year Structural & 25-Yr Manufacturer Warranty',
    warrantyPeriodEs: 'Garantía Estructural de 10 Años y 25 Años del Fabricante',
    materials: ['Trex Transcend & Enhance', 'TimberTech AZEK', 'Kiln-Dried Douglas Fir 2x10', 'Stainless Concealed Fasteners'],
    keySpecs: [
      'Engineered ledger board attachment with code-approved Simpson Strong-Tie bolts',
      'Helical pile or concrete Sonotube footings below frost depth',
      'Continuous aluminum drink rail & tempered glass or cable infill',
      '12V low-voltage recessed stair risers & post cap illumination'
    ],
    keySpecsEs: [
      'Fijación estructural de viga maestra con pernos certificados Simpson Strong-Tie',
      'Cimientos de pilotes helicoidales o tubos de concreto bajo la línea de heladas',
      'Barandillas de aluminio continuo y paneles de vidrio templado o cable de acero',
      'Iluminación LED empotrada de 12V en escalones y tapas de postes'
    ],
    description: 'We engineer multi-level composite and exotic hardwood decks designed to endure freeze-thaw cycles without rotting, warping, or splintering.',
    descriptionEs: 'Diseñamos y construimos terrazas de compuesto multinivel y maderas nobles diseñadas para resistir ciclos de congelación sin pudrirse, curvarse ni astillarse.'
  },
  {
    id: 'roofing',
    name: 'Roofing & Architectural Shingles',
    nameEs: 'Techados y Tejas Arquitectónicas',
    shortName: 'Roofing',
    shortNameEs: 'Techados',
    icon: ShieldAlert,
    tagline: '50-Year Architectural Shingle Systems & Leakproof Flashing',
    taglineEs: 'Sistemas de Tejas Arquitectónicas con Garantía de 50 Años y Sellado Hermético',
    blueprintCode: '130-MPH WIND RATED / ASTM D3462',
    permitRequirement: 'Township tear-off permit required; ice & water shield inspection at eaves and valleys',
    permitRequirementEs: 'Permiso municipal de desmonte; inspección de barrera contra hielo y agua en aleros y limahoyas',
    warrantyPeriod: '50-Year Non-Prorated GAF System Warranty',
    warrantyPeriodEs: 'Garantía de Sistema GAF no Prorrateada por 50 Años',
    materials: ['GAF Timberline HDZ', 'Owens Corning Duration', 'TigerPaw Synthetic Underlayment', 'Aluminum Step & Chimney Flashing'],
    keySpecs: [
      'Complete strip-down to deck sheathing with replacement of rotted CDX plywood',
      'Dual-layer ice-and-water barrier at eaves, valleys, sidewalls, and chimneys',
      'Cobra continuous ridge ventilation system for balanced attic airflow',
      'Magnetic yard sweep to guarantee 100% nail removal for pets & tires'
    ],
    keySpecsEs: [
      'Desmonte completo hasta el entablado con reemplazo de madera terciada CDX deteriorada',
      'Barrera doble contra hielo y agua en aleros, limahoyas, paredes laterales y chimeneas',
      'Sistema de ventilación de cumbrera continua Cobra para flujo de aire balanceado en el ático',
      'Barrido magnético completo del patio para garantizar 100% libre de clavos'
    ],
    description: 'Certified roof replacements using high-definition architectural shingles engineered for coastal winds, heavy snowfall, and heavy rain.',
    descriptionEs: 'Reemplazos certificados de techos con tejas arquitectónicas de alta definición diseñadas para vientos costeros, nevadas intensas y tormentas.'
  },
  {
    id: 'remodeling',
    name: 'Kitchen & Bath Remodeling',
    nameEs: 'Remodelación de Cocinas y Baños',
    shortName: 'Remodeling',
    shortNameEs: 'Remodelación',
    icon: Hammer,
    tagline: 'Open-Concept Living, Quartz Islands & Spa Enclosures',
    taglineEs: 'Concepto Abierto, Islas de Cuarzo y Baños Tipo Spa',
    blueprintCode: 'IRC CH.11 SPACE STANDARDS',
    permitRequirement: 'Rough-in electrical, plumbing, framing and final township inspection package',
    permitRequirementEs: 'Paquete completo de inspección: electricidad preliminar, plomería, estructuras e inspección final',
    warrantyPeriod: '10-Year Vasquez Craftsmanship Warranty',
    warrantyPeriodEs: 'Garantía de Artesanía Vasquez por 10 Años',
    materials: ['Custom Maple Shaker Cabinetry', '3cm Calacatta Quartz', 'Schluter-KERDI Waterproofing', 'Solid Brass Fixtures'],
    keySpecs: [
      'Structural load-bearing wall removal with engineered LVL beam installations',
      'Dedicated 20-amp appliance circuits & GFCI-protected code arrays',
      'Custom zero-threshold curbless walk-in showers with linear trench drains',
      'Moisture-resistant drywall & zero-VOC high-traffic paint finishes'
    ],
    keySpecsEs: [
      'Remoción de muros de carga estructurales con instalación de vigas laminadas LVL certificadas',
      'Circuitos dedicados de 20 amperios para electrodomésticos con protección GFCI reglamentaria',
      'Duchas personalizadas a ras de piso sin reborde con desagües lineales de trinchera',
      'Paneles de yeso resistentes a la humedad y pinturas de alto tránsito sin COV'
    ],
    description: 'From dream chef kitchens to tranquil master baths, our master carpenters and licensed tradesmen handle the complete turnkey transformation.',
    descriptionEs: 'Desde cocinas de chef de ensueño hasta relajantes baños principales, nuestros carpinteros maestros ejecutan una transformación integral llave en mano.'
  },
  {
    id: 'additions',
    name: 'Additions & Structural Framing',
    nameEs: 'Ampliaciones y Estructuras',
    shortName: 'Additions',
    shortNameEs: 'Ampliaciones',
    icon: Home,
    tagline: 'Second-Story Expansions, Sunrooms & In-Law Suites',
    taglineEs: 'Ampliaciones de Segundo Piso, Salones Solares y Suites',
    blueprintCode: 'ARCHITECTURAL STAMPED / UCC',
    permitRequirement: 'Zoning setback approval, stamped architectural plans, full phased municipal inspections',
    permitRequirementEs: 'Aprobación de zonificación, planos arquitectónicos sellados e inspecciones municipales por fases',
    warrantyPeriod: '10-Year Structural Guarantee',
    warrantyPeriodEs: 'Garantía Estructural por 10 Años',
    materials: ['2x6 Exterior Framing', 'Engineered LVL Headers', 'R-30 Eco Insulation', 'EnergyStar Argon Windows'],
    keySpecs: [
      'Poured foundation extension tied to existing foundation with epoxy rebar dowels',
      'Seamless roofline tie-in and exterior siding blending to match original home',
      'High-efficiency HVAC zone integration and dedicated sub-panel wiring',
      'Turnkey delivery from initial architectural blueprints to final Certificate of Occupancy'
    ],
    keySpecsEs: [
      'Ampliación de cimientos de concreto vaciado anclados con varillas de refuerzo epóxicas',
      'Unión perfecta de líneas de techo y revestimiento exterior igualando la casa original',
      'Integración de climatización HVAC de alta eficiencia y cableado de subpanel dedicado',
      'Entrega llave en mano desde los planos iniciales hasta el Certificado de Ocupación final'
    ],
    description: 'Expand your living space without moving. We build master suites, family rooms, sunrooms, and full second-story additions built to the highest architectural standards.',
    descriptionEs: 'Amplíe su espacio vital sin mudarse. Construimos suites principales, salas familiares, terrazas cerradas y ampliaciones completas de segundo piso.'
  },
  {
    id: 'masonry',
    name: 'Masonry, Pavers & Hardscaping',
    nameEs: 'Albañilería, Adoquines y Piedra',
    shortName: 'Masonry',
    shortNameEs: 'Albañilería',
    icon: BrickWall,
    tagline: 'Interlocking Paver Patios, Retaining Walls & Stone Fire Pits',
    taglineEs: 'Patios de Adoquines, Muros de Contención y Fogatas de Piedra',
    blueprintCode: 'ICPI CERTIFIED INSTALLATION',
    permitRequirement: 'Zoning impervious coverage review; retaining walls over 4ft require stamped engineering',
    permitRequirementEs: 'Revisión de superficie impermeable; muros de más de 4 pies requieren ingeniería sellada',
    warrantyPeriod: '5-Year Base Settling Guarantee',
    warrantyPeriodEs: 'Garantía de Asentamiento de Base por 5 Años',
    materials: ['Cambridge & Techo-Bloc Pavers', 'Pennsylvania Bluestone', 'Crushed Aggregate Base QP', 'Polymeric Jointing Sand'],
    keySpecs: [
      'Excavation to virgin subsoil with 6"-8" compacted gravel aggregate base',
      'Heavy geotextile stabilization fabric to prevent settlement and weed intrusion',
      'Concrete reinforced edge restraints and high-performance polymeric locking sand',
      'Built-in natural stone seating walls, fire pits, and outdoor kitchen islands'
    ],
    keySpecsEs: [
      'Excavación hasta suelo firme con base compactada de 6 a 8 pulgadas de agregado triturado',
      'Malla geotextil de estabilización pesada para evitar hundimientos y brote de maleza',
      'Bordillos reforzados de concreto y arena polimérica de alto rendimiento',
      'Muros de asiento integrados en piedra natural, fogatas e islas de cocina exterior'
    ],
    description: 'Durable, resort-style outdoor living spaces crafted with precision-cut natural stone and interlocking concrete pavers engineered for zero sinking.',
    descriptionEs: 'Espacios exteriores duraderos estilo resort, elaborados con piedra natural cortada con precisión y adoquines de concreto diseñados para cero hundimiento.'
  },
  {
    id: 'siding',
    name: 'Siding & Exterior Enclosures',
    nameEs: 'Revestimientos y Fachadas',
    shortName: 'Siding',
    shortNameEs: 'Revestimientos',
    icon: PanelTop,
    tagline: 'James Hardie Fiber Cement, Insulated Vinyl & Trim Capping',
    taglineEs: 'Fibrocemento James Hardie, Vinilo Aislado y Molduras de Aluminio',
    blueprintCode: 'ENERGY CODE R-VALUE RATED',
    permitRequirement: 'Exterior building permit; moisture barrier flashing verification',
    permitRequirementEs: 'Permiso de edificación exterior; verificación de barrera contra la humedad y tapajuntas',
    warrantyPeriod: '30-Year Manufacturer Warranty',
    warrantyPeriodEs: 'Garantía del Fabricante por 30 Años',
    materials: ['James Hardie ColorPlus', 'CertainTeed Monogram Vinyl', 'HydroGap Drainable Housewrap', 'Aluminum Custom Coil Trim'],
    keySpecs: [
      'Full removal of old siding with complete moisture inspection of exterior wall sheathing',
      'Breathable drainable weather barrier with tape-sealed joints around windows and doors',
      'Heavy-duty wind-lock perimeter nails and reinforced corner posts',
      'Custom aluminum bend capping on all exterior window sills and fascia boards'
    ],
    keySpecsEs: [
      'Retiro completo del revestimiento anterior con inspección de humedad en la madera exterior',
      'Barrera climática drenable y transpirable sellada con cinta en ventanas y puertas',
      'Fijación perimetral de alta resistencia al viento y esquineros reforzados',
      'Revestimiento de aluminio moldeado a medida en marcos de ventanas y aleros'
    ],
    description: 'Transform your home exterior curb appeal and lower energy bills with insulated siding systems built to withstand coastal storms.',
    descriptionEs: 'Transforme el atractivo visual de su hogar y reduzca costos de energía con revestimientos térmicos preparados para tormentas costeras.'
  },
  {
    id: 'painting',
    name: 'Interior & Exterior Painting',
    nameEs: 'Pintura Interior y Exterior',
    shortName: 'Painting',
    shortNameEs: 'Pintura',
    icon: Paintbrush,
    tagline: 'Precision Spray & Brush, Cabinet Enameling & Trim Finish',
    taglineEs: 'Aplicación de Precisión, Esmaltado de Gabinetes y Acabados Finos',
    blueprintCode: 'LOW-VOC EPA LEAD-SAFE',
    permitRequirement: 'No municipal permit needed; EPA lead-safe containment for pre-1978 homes',
    permitRequirementEs: 'No requiere permiso; contención segura de plomo EPA para viviendas anteriores a 1978',
    warrantyPeriod: '3-Year Peeling & Flaking Guarantee',
    warrantyPeriodEs: 'Garantía de 3 Años contra Desprendimiento y Descamación',
    materials: ['Benjamin Moore Regal Select', 'Sherwin-Williams Emerald', 'Urethane Trim Enamel', 'Peel-Bond Primer'],
    keySpecs: [
      'Rigorous surface prep: scraping, power-sanding, nail hole filling, and elastomeric caulking',
      'Complete furniture masking and plastic containment with floor paper runners',
      'Two full topcoats applied with airless spray and back-rolling for ultra-smooth sheen',
      'Factory-smooth cabinet spray finishing with durable conversion varnish'
    ],
    keySpecsEs: [
      'Preparación rigurosa: raspado, lijado a máquina, sellado de orificios y masilla elastomérica',
      'Protección total de muebles y pisos con plástico y papel especial de alto tráfico',
      'Dos capas completas aplicadas con rociador airless y rodillo para un acabado sedoso',
      'Esmaltado de gabinetes con acabado de fábrica ultra suave y barniz de conversión duradero'
    ],
    description: 'Museum-grade interior and exterior paint finishes. Sharp razor lines, flawless drywall repairs, and durable coats that stay vibrant for years.',
    descriptionEs: 'Acabados de pintura interior y exterior de calidad insuperable. Líneas impecables, reparación perfecta de yeso y capas duraderas que permanecen vibrantes.'
  },
  {
    id: 'plumbing',
    name: 'Residential Plumbing & Repiping',
    nameEs: 'Plomería Residencial y Tuberías',
    shortName: 'Plumbing',
    shortNameEs: 'Plomería',
    icon: Droplets,
    tagline: 'Rough-Ins, Tankless Water Heaters & Leak Diagnostics',
    taglineEs: 'Instalaciones Preliminares, Calentadores sin Tanque y Diagnóstico de Fugas',
    blueprintCode: 'MASTER PLUMBING CODE',
    permitRequirement: 'Plumbing permit required for fixture relocations and water heater installs',
    permitRequirementEs: 'Permiso de plomería requerido para reubicación de artefactos y calentadores de agua',
    warrantyPeriod: '5-Year Leak-Free Guarantee',
    warrantyPeriodEs: 'Garantía Libre de Fugas por 5 Años',
    materials: ['Uponor PEX-A ProPEX', 'Cast Iron / PVC Drain Waste Vent', 'Navien Tankless Heaters', 'Brass Ball Valves'],
    keySpecs: [
      'Expansion PEX-A water distribution piping immune to scale and freeze burst',
      'High-capacity tankless gas water heater conversions for endless hot water',
      'Code-compliant slope and venting on all shower and toilet waste lines',
      'Whole-house pressure regulating valves and sediment backflow prevention'
    ],
    keySpecsEs: [
      'Tubería de distribución de agua PEX-A de expansión inmune al sarro y a la rotura por heladas',
      'Conversión a calentadores de agua a gas sin tanque para agua caliente continua',
      'Pendiente y ventilación reglamentaria en todos los desagües de duchas e inodoros',
      'Válvulas reguladoras de presión y sistemas de prevención de reflujo para toda la casa'
    ],
    description: 'Complete residential plumbing solutions for kitchen expansions, bathroom suites, and emergency line repairs performed to exact code standards.',
    descriptionEs: 'Soluciones completas de plomería residencial para ampliaciones de cocina, baños de lujo y reparaciones de emergencia según las normas técnicas vigentes.'
  },
  {
    id: 'pressure-washing',
    name: 'Commercial Pressure Washing',
    nameEs: 'Lavado a Presión Comercial',
    shortName: 'Power Wash',
    shortNameEs: 'Lavado a Presión',
    icon: Sparkles,
    tagline: 'Soft-Wash Siding, Rotary Concrete & Paver Restoration',
    taglineEs: 'Lavado Suave para Fachadas, Concreto Rotativo y Restauración de Adoquines',
    blueprintCode: 'ECO-SAFE BIODEGRADABLE',
    permitRequirement: 'No permit needed; environmentally compliant runoff protection',
    permitRequirementEs: 'No requiere permiso; protección ambiental contra escorrentías',
    warrantyPeriod: '1-Year Algae-Free Surface Guarantee',
    warrantyPeriodEs: 'Garantía de Superficie Libre de Algas por 1 Año',
    materials: ['Soft-Wash Low Pressure System', 'Rotary Surface Cleaners', 'Bio-Safe Surfactants', 'Algaecide Treatment'],
    keySpecs: [
      'Low-pressure soft wash method that sanitizes vinyl and stucco without damaging seals',
      'High-pressure rotary surface scrubbing for deeply soiled concrete, brick, and pavers',
      'Specialized mildew treatments that kill algae at the spore level to prevent fast regrowth',
      'Safe on plants, landscaping, and outdoor furnishings with fresh rinse protection'
    ],
    keySpecsEs: [
      'Método de lavado suave a baja presión que desinfecta vinilo y estuco sin dañar sellos',
      'Fregado rotativo de alta presión para concreto, ladrillo y adoquines con suciedad incrustada',
      'Tratamientos especializados contra moho que eliminan las esporas para evitar su reaparición',
      'Seguro para plantas, jardines y muebles exteriores con enjuague protector de agua fresca'
    ],
    description: 'Instantly restore the vibrant look of your siding, deck, roof, patio, and driveway with commercial hot-water pressure and gentle soft-washing.',
    descriptionEs: 'Restaure al instante el aspecto original de sus paredes, terraza, techo, patio y entrada con agua caliente y lavado suave.'
  },
  {
    id: 'tree-trimming',
    name: 'Tree Trimming & Hazard Mitigation',
    nameEs: 'Poda de Árboles y Mitigación de Riesgos',
    shortName: 'Tree Care',
    shortNameEs: 'Árboles',
    icon: Trees,
    tagline: 'Canopy Thinning, Roofline Clearance & Hazard Removal',
    taglineEs: 'Aclareo de Copa, Despeje de Techos y Eliminación de Ramas Peligrosas',
    blueprintCode: 'PROPERTY CLEARANCE CODE',
    permitRequirement: 'Township tree preservation ordinance check where applicable',
    permitRequirementEs: 'Verificación de ordenanza de conservación arbórea municipal según aplique',
    warrantyPeriod: '100% Debris Cleanout Guarantee',
    warrantyPeriodEs: 'Garantía de Limpieza Total de Residuos al 100%',
    materials: ['Stihl Pro Chainsaws', 'Rigging Ropes & Pulleys', 'Hydraulic Wood Chipper', 'Stump Grinder'],
    keySpecs: [
      'Removal of dangerous limbs hanging over roofs, gutters, driveways, and power lines',
      'Aesthetic crown thinning to allow sunlight through and reduce wind drag during storms',
      'Full on-site wood chipping, branch hauling, and raking of lawn surfaces',
      'Emergency post-storm branch clearance and optional below-grade stump grinding'
    ],
    keySpecsEs: [
      'Eliminación de ramas peligrosas sobre techos, canaletas, entradas y cables eléctricos',
      'Aclareo estético de copa para permitir el paso de luz solar y reducir resistencia al viento',
      'Triturado de madera en sitio, retiro de ramas y rastrillado completo del césped',
      'Despeje de emergencia post-tormenta y destoconado subterráneo opcional'
    ],
    description: 'Protect your roof and property from violent coastal storm winds with precision tree pruning, branch lowering, and complete debris removal.',
    descriptionEs: 'Proteja su techo y propiedad de fuertes vientos y tormentas con poda de precisión, descenso controlado de ramas y limpieza total.'
  }
];

interface TradeMatrixSectionProps {
  onSelectServiceForEstimate: (tradeName: string) => void;
  onOpenCalculatorWithService: (serviceId: string) => void;
}

export const TradeMatrixSection: React.FC<TradeMatrixSectionProps> = ({
  onSelectServiceForEstimate
}) => {
  const { t, lang } = useLanguage();
  const [selectedTradeId, setSelectedTradeId] = useState<string>('decks');

  const activeTrade = TRADES.find(t => t.id === selectedTradeId) || TRADES[0];
  const IconComponent = activeTrade.icon;

  const tradeName = lang === 'es' ? activeTrade.nameEs : activeTrade.name;
  const tradeShortName = lang === 'es' ? activeTrade.shortNameEs : activeTrade.shortName;
  const tradeTagline = lang === 'es' ? activeTrade.taglineEs : activeTrade.tagline;
  const tradeDesc = lang === 'es' ? activeTrade.descriptionEs : activeTrade.description;
  const tradePermit = lang === 'es' ? activeTrade.permitRequirementEs : activeTrade.permitRequirement;
  const tradeWarranty = lang === 'es' ? activeTrade.warrantyPeriodEs : activeTrade.warrantyPeriod;
  const tradeSpecs = lang === 'es' ? activeTrade.keySpecsEs : activeTrade.keySpecs;

  return (
    <section 
      id="services-section" 
      className="py-20 md:py-32 bg-gradient-to-b from-[#040c1a] via-[#081b3e] to-[#040c1a] text-slate-100 relative overflow-hidden border-t border-b border-cyan-500/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]"
    >
      {/* Precision Blueprint Grid Architecture Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Atmospheric Multi-Layered Cyan & Blue Radiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-radial from-blue-500/25 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* STAND-OUT ARCHITECTURAL SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            {/* Glowing Accent Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-cyan-950/90 border border-cyan-400/60 text-xs font-black text-cyan-300 uppercase tracking-widest mb-4 shadow-[0_0_25px_rgba(56,189,248,0.35)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
              </span>
              <FileCheck className="w-4 h-4 text-cyan-400" />
              <span>{t('trades.kicker')}</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.08]">
              {t('trades.title')}
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-blue-100/90 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-normal">
              {t('trades.desc')}
            </p>
          </div>

          {/* Trust Authority Badges (Right side) */}
          <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2.5 shrink-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-950/90 border border-blue-500/40 text-xs font-bold text-white shadow-md backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t('trades.trust.serving')}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-950/90 border border-blue-500/40 text-xs font-bold text-white shadow-md backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{t('trades.trust.insurance')}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-950/90 border border-blue-500/40 text-xs font-bold text-white shadow-md backdrop-blur-md">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t('trades.trust.crew')}</span>
            </div>
          </div>
        </div>

        {/* 10-TRADE INTERACTIVE ARCHITECTURAL SWITCHBOARD */}
        <div className="relative mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 sm:gap-2.5">
            {TRADES.map((trade, idx) => {
              const TradeIcon = trade.icon;
              const isSelected = trade.id === selectedTradeId;
              const tradeNumber = String(idx + 1).padStart(2, '0');
              const shortLabel = lang === 'es' ? trade.shortNameEs : trade.shortName;
              
              return (
                <button
                  key={trade.id}
                  onClick={() => setSelectedTradeId(trade.id)}
                  className={`relative flex flex-col items-center justify-between p-3 rounded-2xl transition-all duration-300 cursor-pointer text-center group border ${
                    isSelected
                      ? 'bg-gradient-to-b from-blue-600 via-blue-500 to-cyan-600 text-white border-cyan-300 shadow-[0_0_30px_rgba(56,189,248,0.45)] scale-[1.04] z-20 ring-2 ring-cyan-400/50'
                      : 'bg-[#091838]/80 hover:bg-[#0d2250] text-blue-200 hover:text-white border-blue-800/60 hover:border-cyan-500/50 shadow-md backdrop-blur-md'
                  }`}
                >
                  {/* Micro Index Number */}
                  <span className={`text-[9px] font-mono font-black tracking-widest uppercase mb-1 ${
                    isSelected ? 'text-cyan-200' : 'text-blue-400/80 group-hover:text-cyan-300'
                  }`}>
                    {tradeNumber}
                  </span>

                  {/* Icon Well */}
                  <div className={`p-2 rounded-xl mb-1.5 transition-all duration-300 ${
                    isSelected 
                      ? 'bg-white/20 text-white shadow-inner scale-110' 
                      : 'bg-blue-950/80 text-cyan-400 group-hover:bg-blue-900 group-hover:scale-105'
                  }`}>
                    <TradeIcon className="w-5 h-5" />
                  </div>

                  {/* Label */}
                  <span className="text-[11px] font-black tracking-tight leading-tight line-clamp-1">
                    {shortLabel}
                  </span>

                  {/* Active Indicator Pip */}
                  {isSelected && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-cyan-300 shadow-[0_0_8px_#38bdf8]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE TRADE ARCHITECTURAL DRAFTING SPECIFICATION BOARD */}
        <div className="bg-[#091b3e]/95 border-2 border-blue-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-2xl text-white">
          
          {/* Subtle Blueprint Grid inside card */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px'
            }}
          />

          {/* Technical Corner Crosshairs */}
          <div className="absolute top-4 left-4 text-cyan-400/40 font-mono text-xs select-none pointer-events-none">+ 01</div>
          <div className="absolute top-4 right-4 text-cyan-400/40 font-mono text-xs select-none pointer-events-none">02 +</div>

          {/* Top Banner of Active Trade */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-blue-800/80">
            <div className="flex items-start sm:items-center gap-4 sm:gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 border-2 border-cyan-300/80 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-600/40">
                <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                    {tradeName}
                  </h3>
                  <span className="px-3 py-1 rounded-lg bg-blue-950/95 border border-cyan-400 text-cyan-300 text-[11px] font-mono font-black shadow-sm">
                    {activeTrade.blueprintCode}
                  </span>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-blue-200/90 font-medium max-w-xl">
                  {tradeTagline}
                </p>
              </div>
            </div>

            {/* Fast Action CTA */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onSelectServiceForEstimate(activeTrade.name)}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-all cursor-pointer active:scale-95 border border-cyan-300/60"
              >
                <span>{t('trades.requestEstimate')} {tradeShortName}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Trade Blueprint Spec Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            
            {/* Left 7 Columns: Architectural Scope & Specifications */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Scope & Overview */}
              <div className="p-4 sm:p-5 rounded-2xl bg-blue-950/60 border border-blue-700/50 shadow-inner">
                <h4 className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{t('trades.scopeTitle')}</span>
                </h4>
                <p className="text-blue-100/90 text-sm leading-relaxed font-normal">
                  {tradeDesc}
                </p>
              </div>

              {/* Key Specifications */}
              <div>
                <h4 className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{t('trades.specsTitle')}</span>
                </h4>
                <div className="space-y-2.5">
                  {tradeSpecs.map((spec, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 p-3 rounded-xl bg-blue-950/50 border border-blue-800/60 text-xs sm:text-sm text-blue-100 hover:border-cyan-400/50 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certified Materials */}
              <div className="pt-2">
                <h4 className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-2.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{t('trades.materialsTitle')}</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeTrade.materials.map((mat, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-950 to-blue-900 border border-blue-600/60 text-cyan-200 text-xs font-semibold shadow-xs"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Code, Warranty & Logistics Box */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#0b1e42] to-[#071630] border-2 border-blue-500/40 rounded-2xl p-6 sm:p-7 space-y-5 shadow-xl">
              
              {/* Township Permitting Guarantee */}
              <div className="space-y-1.5">
                <div className="text-[11px] uppercase tracking-wider text-cyan-400 font-black flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>{t('trades.codeGuarantee')}</span>
                </div>
                <p className="text-xs text-blue-100/90 leading-relaxed font-medium">
                  {tradePermit}
                </p>
              </div>

              {/* Warranty Protection */}
              <div className="pt-4 border-t border-blue-800/80">
                <div className="text-[11px] uppercase tracking-wider text-cyan-400 font-black flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>{t('trades.warrantyTitle')}</span>
                </div>
                <div className="text-sm font-bold text-white mt-1 leading-snug">
                  {tradeWarranty}
                </div>
              </div>

              {/* Direct Crew Promise Card */}
              <div className="pt-4 border-t border-blue-800/80">
                <div className="bg-blue-900/50 border border-cyan-500/40 rounded-2xl p-4 text-xs text-blue-200 space-y-1.5 shadow-inner">
                  <div className="font-black text-cyan-300 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>{t('trades.crewPromiseTitle')}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-blue-100/90 font-medium">
                    {t('trades.crewPromiseDesc')}
                  </p>
                </div>
              </div>

              {/* Schedule On-Site Consultation Button */}
              <button
                onClick={() => onSelectServiceForEstimate(activeTrade.name)}
                className="w-full py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center gap-2 border border-cyan-400/50 active:scale-95"
              >
                <span>{t('trades.scheduleConsult')} {tradeShortName}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
