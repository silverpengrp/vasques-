export interface MasterTransformationProject {
  id: string;
  title: string;
  category: string;
  filterCategory: 'deck' | 'remodel' | 'roof' | 'other';
  tradeType: string;
  location: string;
  duration: string;
  sqft?: string;
  aspectRatio: 'vertical' | 'horizontal';
  beforeImg: string;
  afterImg: string;
  scopeSummary: string;
  materialsUsed: string[];
  permitPassed: string;
  badge: string;
}

export const ALL_BEFORE_AFTER_PROJECTS: MasterTransformationProject[] = [
  // 1. Decks & Patios: Bi-Level Composite Deck
  {
    id: 'deck-transformation',
    title: 'Bi-Level Composite Deck & Modern Pergola',
    category: 'Decks & Patios',
    filterCategory: 'deck',
    tradeType: 'Decks, Patios & Pergolas',
    location: 'Toms River, NJ',
    duration: '6 Days',
    sqft: '680 sq ft',
    aspectRatio: 'horizontal',
    beforeImg: '/projects/deck_remodel_before_1791564905775.jpg',
    afterImg: '/projects/deck_remodel_finished_1791564892954.jpg',
    scopeSummary: 'Full teardown of splintered 25-year-old pine deck. Poured new 42" frost-line concrete footings, reinforced 2x10 joists, laid premium Trex Transcend grooved boards, installed matte black aluminum cable railings, and wired low-voltage warm LED stair lighting.',
    materialsUsed: ['Trex Transcend Composite', 'Black Powder-Coated Cable Railing', '42" Concrete Sonotubes', 'Integrated 12V Stair Lights'],
    permitPassed: 'Ocean County Building & Footing Inspection Passed',
    badge: 'Master Craft'
  },
  // 2. Decks & Patios: Architectural Sunroom Exterior
  {
    id: 'sunroom-exterior',
    title: 'Architectural Sunroom Addition & Custom Framing',
    category: 'Decks & Patios',
    filterCategory: 'deck',
    tradeType: 'Structural Framing, Siding & Trim',
    location: 'Toms River, NJ',
    duration: '12 Days',
    sqft: '420 sq ft',
    aspectRatio: 'horizontal',
    beforeImg: '/projects/user_work_sunroom_ext_before_1791749407741.jpg',
    afterImg: '/projects/sunroom_ext_finished_1791749266952.jpg',
    scopeSummary: 'Engineered post-and-beam exterior sunroom addition built from raw foundation to turnkey finish. Heavy timber vaulted roof truss framing, insulated Low-E panoramic casement windows, custom composite wainscoting panels, seamless copper-tone flashing, and custom foundation skirt.',
    materialsUsed: ['Heavy Timber Cathedral Framing', 'Low-E Insulated Architectural Glass', 'Custom Composite Wainscoting', 'Seamless Copper Trim Flashing'],
    permitPassed: 'Ocean County Building & Framing Code Approved',
    badge: 'Actual Work Photo'
  },
  // 3. Decks & Patios: Vaulted Sunroom Porch Interior
  {
    id: 'sunroom-interior',
    title: 'Vaulted Sunroom Interior & Solid Timber Tie-Beam',
    category: 'Decks & Patios',
    filterCategory: 'deck',
    tradeType: 'Finish Carpentry, Shiplap & Skylights',
    location: 'Colts Neck, NJ',
    duration: '8 Days',
    sqft: '420 sq ft',
    aspectRatio: 'horizontal',
    beforeImg: '/projects/user_work_sunroom_int_before_1791749417198.jpg',
    afterImg: '/projects/sunroom_interior_done_1791749275713.jpg',
    scopeSummary: 'Transformed raw framed framing and fiberglass ceiling insulation into a cathedral sunroom. Installed hand-stained solid timber tie-beam, recessed Velux skylights with thermal seals, white tongue-and-groove shiplap walls, and durable composite decking.',
    materialsUsed: ['Hand-Hewn Vaulted Tie-Beam Collar', 'Velux Double-Insulated Skylights', 'Tongue-and-Groove Shiplap Walls', '6-Lite French Door Transitions'],
    permitPassed: 'Monmouth County Structural Carpentry Signed Off',
    badge: 'Actual Work Photo'
  },
  // 4. Kitchen & Bath: Chef Kitchen & Quartz Waterfall Island
  {
    id: 'kitchen-transformation',
    title: 'Open-Concept Chef Kitchen & Quartz Waterfall Island',
    category: 'Kitchen & Bath',
    filterCategory: 'remodel',
    tradeType: 'Kitchen Remodeling & Masonry',
    location: 'Princeton, NJ',
    duration: '14 Days',
    sqft: '340 sq ft',
    aspectRatio: 'horizontal',
    beforeImg: '/projects/kitchen_remodel_before_1791564933038.jpg',
    afterImg: '/projects/kitchen_remodel_finished_1791564920281.jpg',
    scopeSummary: 'Demolished outdated 1980s oak partition walls to create continuous open-concept living. Installed custom soft-close navy and white shaker cabinets, 9-foot Calacatta quartz waterfall edge island, Italian herringbone tile backsplash, and smart under-cabinet lighting.',
    materialsUsed: ['Calacatta Gold Quartz Waterfall', 'Solid Maple Shaker Cabinets', 'Brushed Brass Hardware', 'White Oak Plank Flooring'],
    permitPassed: 'Mercer County Electrical, Plumbing & Framing Approved',
    badge: 'Master Craft'
  },
  // 5. Kitchen & Bath: Custom Shaker Cabinet Refinishing & Quartz
  {
    id: 'kitchen-cabinetry',
    title: 'Custom Shaker Cabinet Refinishing & Quartz Counters',
    category: 'Kitchen & Bath',
    filterCategory: 'remodel',
    tradeType: 'Cabinet Refinishing & Finish Carpentry',
    location: 'Cherry Hill, NJ',
    duration: '6 Days',
    sqft: '290 sq ft',
    aspectRatio: 'vertical',
    beforeImg: '/projects/user_work_kitchen_before_1791749444621.jpg',
    afterImg: '/projects/kitchen_finished_done_1791749284885.jpg',
    scopeSummary: 'On-site master cabinet painter prepping, sanding, and applying commercial-grade spray primer and Benjamin Moore Advance enamel to custom shaker doors. Paired with polished Calacatta quartz countertops with mitered waterfall edge, soft-close hardware, and warm LED task illumination.',
    materialsUsed: ['Benjamin Moore Advance Enamel', 'Calacatta Gold Quartz Mitered Edge', 'Blum Soft-Close European Hinges', 'Under-Cabinet 3000K Warm LEDs'],
    permitPassed: 'Fully Insured Master Cabinetry Guild Standards',
    badge: 'Actual Work Photo'
  },
  // 6. Kitchen & Bath: Spa Master Bath & Curbless Glass Wet Room
  {
    id: 'bath-transformation',
    title: 'Spa Master Bath & Curbless Glass Wet Room',
    category: 'Kitchen & Bath',
    filterCategory: 'remodel',
    tradeType: 'Plumbing, Tile & Bath Remodel',
    location: 'Cherry Hill, NJ',
    duration: '9 Days',
    sqft: '185 sq ft',
    aspectRatio: 'horizontal',
    beforeImg: '/projects/bath_remodel_before_1791564997436.jpg',
    afterImg: '/projects/bath_remodel_finished_1791564980863.jpg',
    scopeSummary: 'Removed failing fiberglass enclosure and dated yellow tiles. Complete subfloor reinforcement with Schluter-KERDI waterproofing membrane, curbless walk-in shower with herringbone marble, freestanding acrylic tub, dual white oak vanities, and matte black fixtures.',
    materialsUsed: ['Schluter Waterproofing System', 'Carrara Marble Herringbone', 'Matte Black Moen Fixtures', 'Custom Frameless 3/8" Glass'],
    permitPassed: 'Camden County Plumbing & Rough-in Inspection Certified',
    badge: 'Master Craft'
  },
  // 7. Roofing: Full Architectural Shingle Replacement & Flashing
  {
    id: 'roof-replacement',
    title: 'Full Architectural Roof Replacement & Ice-Shield Restoration',
    category: 'Roofing',
    filterCategory: 'roof',
    tradeType: 'Roofing & Flashing Systems',
    location: 'Holmdel, NJ',
    duration: '3 Days',
    sqft: '3,200 sq ft',
    aspectRatio: 'horizontal',
    beforeImg: '/projects/roof_replacement_before_1791752292483.jpg',
    afterImg: '/projects/roof_replacement_finished_1791752282421.jpg',
    scopeSummary: 'Full tear-off of failing weathered shingles down to bare plywood decking. Replaced rotted sub-plywood sheathing, installed synthetic water-resistant underlayment, Owens Corning ice-and-water barrier along all eaves, heavy-duty architectural charcoal shingles, copper chimney step-flashing, and Cobra ridge vent.',
    materialsUsed: ['Owens Corning Duration Architectural Shingles', 'Synthetic Titanium Deck Underlayment', 'Copper Step & Counter Flashing', 'Continuous Ridge Vent System'],
    permitPassed: 'Monmouth County IRC Roofing Code & Wind Resistance Passed',
    badge: 'Master Craft'
  },
  // 8. Custom Garage Conversion & Polyaspartic Floor System
  {
    id: 'garage-remodel',
    title: 'Custom Garage Conversion & Polyaspartic Floor System',
    category: 'Decks & Patios',
    filterCategory: 'deck',
    tradeType: 'Carpentry, Drywall & Industrial Coatings',
    location: 'Princeton, NJ',
    duration: '5 Days',
    sqft: '480 sq ft',
    aspectRatio: 'vertical',
    beforeImg: '/projects/user_work_garage_before_1791749398389.jpg',
    afterImg: '/projects/garage_finished_after_1791749258049.jpg',
    scopeSummary: 'Complete structural drywall taping, mudding, and Level 5 satin finishing over raw framed walls. Diamond-ground concrete slab to receive multi-layer granite flake epoxy flooring with high-gloss polyaspartic protective topcoat, overhead LED shop luminaires, and custom modular storage.',
    materialsUsed: ['Industrial Polyaspartic Topcoat', 'Diamond-Ground Epoxy System', 'Level 5 Drywall Satin Coat', 'Heavy-Duty Slatwall & Steps'],
    permitPassed: 'Mercer County Electrical & Fire Safety Inspection Passed',
    badge: 'Actual Work Photo'
  },
  // 9. Precision Hardwood Hallway
  {
    id: 'hallway-renovation',
    title: 'Precision Subfloor Leveling & Solid Walnut Hardwood',
    category: 'Kitchen & Bath',
    filterCategory: 'remodel',
    tradeType: 'Flooring, Drywall & Trim Carpentry',
    location: 'Middletown, NJ',
    duration: '4 Days',
    sqft: '210 sq ft',
    aspectRatio: 'vertical',
    beforeImg: '/projects/user_work_hallway_before_1791749454700.jpg',
    afterImg: '/projects/hallway_finished_done_1791749304432.jpg',
    scopeSummary: 'Contractor crew executing subfloor screw reinforcement, joist leveling, and sound dampening underlayment. Installed premium 5-inch American walnut tongue-and-groove hardwood running flush through all doorways, finished with 7-inch colonial baseboards and crisp door casing trim.',
    materialsUsed: ['5-Inch Solid American Walnut', 'Anti-Squeak Screw Joist Anchors', 'Acoustic Soundproofing Underlayment', '7-Inch Colonial Custom Baseboards'],
    permitPassed: 'Code-Compliant Smoke & Lighting Clearances',
    badge: 'Actual Work Photo'
  },
  // 10. Historic Staircase Rebuild
  {
    id: 'staircase-renovation',
    title: 'Historic Staircase Rebuild & Hardwood Runner Installation',
    category: 'Kitchen & Bath',
    filterCategory: 'remodel',
    tradeType: 'Architectural Millwork & Stairbuilding',
    location: 'Moorestown, NJ',
    duration: '7 Days',
    aspectRatio: 'vertical',
    beforeImg: '/projects/user_work_staircase_before_1791749464527.jpg',
    afterImg: '/projects/staircase_finished_done_1791749314083.jpg',
    scopeSummary: 'Full structural demolition of damaged treads and hazardous cracked drywall. Rebuilt with solid red oak treads stained in dark espresso, reinforced stringers, crisp white risers, custom turned balusters, heavy newel posts, and tailored herringbone woven carpet runner with antique brass stair rods.',
    materialsUsed: ['Solid Red Oak Espresso Stained Treads', 'Turned Balusters & Heavy Newel Posts', 'Herringbone Woven Carpet Runner', 'Solid Cast Brass Stair Rods'],
    permitPassed: 'Burlington County IRC Stair Safety Code Approved',
    badge: 'Actual Work Photo'
  }
];
