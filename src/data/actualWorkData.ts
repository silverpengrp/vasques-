export interface ActualWorkProject {
  id: string;
  title: string;
  category: string;
  location: string;
  tradeType: string;
  duration: string;
  aspectRatio: 'vertical' | 'horizontal'; // vertical (3:4) or horizontal (4:3)
  beforeImg: string;
  afterImg: string;
  scopeSummary: string;
  craftsmanshipHighlights: string[];
  permitPassed?: string;
  badge: string;
}

export const ACTUAL_WORK_PROJECTS: ActualWorkProject[] = [
  {
    id: 'garage-remodel',
    title: 'Custom Garage Conversion & Polyaspartic Floor System',
    category: 'Garage Remodel & Epoxies',
    tradeType: 'Carpentry, Drywall & Industrial Coatings',
    location: 'Princeton, NJ',
    duration: '5 Days',
    aspectRatio: 'vertical',
    beforeImg: '/projects/user_work_garage_before_1791749398389.jpg',
    afterImg: '/projects/garage_finished_after_1791749258049.jpg',
    scopeSummary: 'Complete structural drywall taping, mudding, and Level 5 satin finishing over raw framed walls. Diamond-ground concrete slab to receive multi-layer granite flake epoxy flooring with high-gloss polyaspartic protective topcoat, overhead LED shop luminaires, and custom modular storage.',
    craftsmanshipHighlights: [
      'Level 5 Smooth Drywall Finish & Moisture Barrier',
      'Commercial Epoxy Floor with Granite Polyaspartic Topcoat',
      'Custom Slatwall Organization & Heavy-Duty Cabinets',
      'Solid White Trim Around Doorway & Custom Steps'
    ],
    permitPassed: 'Mercer County Electrical & Fire Safety Inspection Passed',
    badge: 'Real Jobsite Photo'
  },
  {
    id: 'sunroom-exterior',
    title: 'Architectural Sunroom Addition & Custom Framing',
    category: 'Additions & Exterior Carpentry',
    tradeType: 'Structural Framing, Siding & Trim',
    location: 'Toms River, NJ',
    duration: '12 Days',
    aspectRatio: 'horizontal',
    beforeImg: '/projects/user_work_sunroom_ext_before_1791749407741.jpg',
    afterImg: '/projects/sunroom_ext_finished_1791749266952.jpg',
    scopeSummary: 'Engineered post-and-beam exterior sunroom addition built from raw foundation to turnkey finish. Heavy timber vaulted roof truss framing, insulated Low-E panoramic casement windows, custom composite wainscoting panels, seamless copper-tone flashing, and custom foundation skirt.',
    craftsmanshipHighlights: [
      'Engineered Cathedral Beam Roof System',
      'Precision Architectural Columns & Custom Wainscoting',
      'High-Performance Insulated Glass Wall Enclosure',
      'Weather-Tight Copper Eaves & Concealed Drainage'
    ],
    permitPassed: 'Ocean County Building & Framing Code Approved',
    badge: 'Real Jobsite Photo'
  },
  {
    id: 'sunroom-interior',
    title: 'Vaulted Sunroom Interior & Solid Timber Tie-Beam',
    category: 'Custom Millwork & Porches',
    tradeType: 'Finish Carpentry, Shiplap & Skylights',
    location: 'Colts Neck, NJ',
    duration: '8 Days',
    aspectRatio: 'horizontal',
    beforeImg: '/projects/user_work_sunroom_int_before_1791749417198.jpg',
    afterImg: '/projects/sunroom_interior_done_1791749275713.jpg',
    scopeSummary: 'Transformed raw framed framing and fiberglass ceiling insulation into a breathtaking cathedral sunroom. Installed hand-stained solid timber tie-beam, recessed Velux skylights with thermal seals, pristine white tongue-and-groove shiplap walls, and durable tongue-and-groove composite decking.',
    craftsmanshipHighlights: [
      'Hand-Hewn Solid Wood Vaulted Tie-Beam Collar',
      'Velux Double-Insulated Sealed Skylights',
      'Tongue-and-Groove Custom Shiplap Wall Cladding',
      'Weather-Sealed 6-Lite French Door Transitions'
    ],
    permitPassed: 'Monmouth County Structural Carpentry Signed Off',
    badge: 'Real Jobsite Photo'
  },
  {
    id: 'kitchen-cabinetry',
    title: 'Custom Shaker Cabinet Refinishing & Quartz Counters',
    category: 'Kitchen Remodeling',
    tradeType: 'Cabinet Refinishing & Finish Carpentry',
    location: 'Cherry Hill, NJ',
    duration: '6 Days',
    aspectRatio: 'vertical',
    beforeImg: '/projects/user_work_kitchen_before_1791749444621.jpg',
    afterImg: '/projects/kitchen_finished_done_1791749284885.jpg',
    scopeSummary: 'On-site master cabinet painter prepping, sanding, and applying commercial-grade spray primer and Benjamin Moore Advance enamel to custom shaker doors. Paired with polished Calacatta quartz countertops with mitered waterfall edge, soft-close hardware, and warm LED task illumination.',
    craftsmanshipHighlights: [
      'Multi-Stage Hand-Sanded & Sprayed Enamel Finish',
      'Soft-Close European Concealed Hinges & Hardware',
      'Seamless Calacatta Quartz Countertops & Backsplash',
      'Integrated Under-Cabinet 3000K Warm LED Lighting'
    ],
    permitPassed: 'Fully Insured Master Cabinetry Guild Standards',
    badge: 'Real Jobsite Photo'
  },
  {
    id: 'hallway-renovation',
    title: 'Precision Subfloor Leveling & Solid Walnut Hardwood',
    tradeType: 'Flooring, Drywall & Trim Carpentry',
    category: 'Flooring & Hallways',
    location: 'Middletown, NJ',
    duration: '4 Days',
    aspectRatio: 'vertical',
    beforeImg: '/projects/user_work_hallway_before_1791749454700.jpg',
    afterImg: '/projects/hallway_finished_done_1791749304432.jpg',
    scopeSummary: 'Contractor crew executing subfloor screw reinforcement, joist leveling, and sound dampening underlayment. Installed premium 5-inch American walnut tongue-and-groove hardwood running flush through all doorways, finished with 7-inch colonial baseboards and crisp door casing trim.',
    craftsmanshipHighlights: [
      'Laser-Leveled Joists & Anti-Squeak Screw Anchoring',
      '5-Inch Solid American Walnut Tongue & Groove',
      'Seamless Threshold Transitions Across All Rooms',
      '7-Inch Two-Piece Historic Colonial Baseboards'
    ],
    permitPassed: 'Code-Compliant Smoke & Lighting Clearances',
    badge: 'Real Jobsite Photo'
  },
  {
    id: 'staircase-renovation',
    title: 'Historic Staircase Rebuild & Hardwood Runner Installation',
    category: 'Staircase & Railing Systems',
    tradeType: 'Architectural Millwork & Stairbuilding',
    location: 'Moorestown, NJ',
    duration: '7 Days',
    aspectRatio: 'vertical',
    beforeImg: '/projects/user_work_staircase_before_1791749464527.jpg',
    afterImg: '/projects/staircase_finished_done_1791749314083.jpg',
    scopeSummary: 'Full structural demolition of damaged treads and hazardous cracked drywall. Rebuilt with solid red oak treads stained in dark espresso, reinforced stringers, crisp white risers, custom turned balusters, heavy newel posts, and tailored herringbone woven carpet runner with antique brass stair rods.',
    craftsmanshipHighlights: [
      'Structural Stringer Reinforcement & Code Rise/Run',
      'Solid Oak Treads Stained Espresso with White Risers',
      'Master Joinery Newel Posts & Continuous Handrail',
      'Hand-Tensioned Herringbone Carpet Runner with Brass Rods'
    ],
    permitPassed: 'Burlington County IRC Stair Safety Code Approved',
    badge: 'Real Jobsite Photo'
  }
];
