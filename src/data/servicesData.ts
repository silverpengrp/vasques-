import { ServiceItem, ReviewItem, ProjectItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'decks',
    title: 'Decks',
    tagline: 'Custom Wood & Composite Outdoor Living',
    description: 'Custom multi-tier deck builds, Trex/composite installations, treated cedar decks, reinforced framing, cable railings, built-in LED lighting, and pergola integrations built to withstand New Jersey weather.',
    iconName: 'Fence',
    features: [
      'Composite & Exotic Hardwoods (Trex, TimberTech, Ipe)',
      'Custom Cable, Glass & Aluminum Railing Systems',
      'Multi-Level Layouts & Integrated Deck Lighting',
      'Structural Framing Inspections & Code-Compliant Rebuilds'
    ],
    startingPrice: 'Starting at $4,500',
    typicalDuration: '3 - 7 Days',
    popularAddon: 'Built-in bench seating & solar post caps'
  },
  {
    id: 'patios',
    title: 'Patios',
    tagline: 'Pavers, Flagstone & Outdoor Gathering Spaces',
    description: 'Transform your backyard into an outdoor haven. We design and install durable interlocking concrete pavers, natural flagstone, fire pit pits, outdoor kitchens, and seating walls with excavation and proper drainage base.',
    iconName: 'Armchair',
    features: [
      'Interlocking Pavers, Travertine & Bluestone',
      'Custom Fire Pits & Built-In Outdoor BBQs',
      'Commercial-Grade Aggregate Base & Compaction',
      'Polymeric Sanding & Protective Sealant Finish'
    ],
    startingPrice: 'Starting at $3,800',
    typicalDuration: '3 - 6 Days',
    popularAddon: 'Integrated ambient step lights & retaining borders'
  },
  {
    id: 'plumbing',
    title: 'Plumbing',
    tagline: 'Residential Piping, Fixtures & Water Heating',
    description: 'Reliable plumbing installations and repairs for kitchen remodels, bathroom overhauls, whole-home repiping (PEX/copper), water heater replacements, leak detection, and drain system modernizations.',
    iconName: 'Droplets',
    features: [
      'Kitchen & Bathroom Rough-In Plumbing',
      'Tankless & Conventional Water Heater Installs',
      'Whole-Home PEX Water Line Upgrades',
      'Emergency Leak Diagnoses & Valve Replacements'
    ],
    startingPrice: 'Starting at $250',
    typicalDuration: 'Same-day to 3 Days',
    popularAddon: 'Whole-house sediment filtration system'
  },
  {
    id: 'remodeling',
    title: 'Remodeling',
    tagline: 'Kitchens, Bathrooms & Full Living Transformations',
    description: 'Complete interior remodeling designed around your lifestyle. From chef-inspired kitchens with custom cabinetry and quartz countertops to spa bathrooms, finished basements, and open-concept load-bearing wall removals.',
    iconName: 'Hammer',
    features: [
      'Custom Kitchen Cabinetry & Stone Countertops',
      'Walk-In Tile Showers, Free-Standing Tubs & Vanities',
      'Basement Finishing with Moisture Barriers & Insulation',
      'Architectural Layout Reconfigurations & Structural Beams'
    ],
    startingPrice: 'Starting at $6,000',
    typicalDuration: '1 - 3 Weeks',
    popularAddon: 'Heated tile flooring & under-cabinet LED arrays'
  },
  {
    id: 'additions',
    title: 'Additions',
    tagline: 'Expand Your Living Space & Property Value',
    description: 'Need more room for your growing family? We build second-story additions, primary master suites, sunrooms, extended living rooms, and garage conversions with seamless architectural continuity to your existing home.',
    iconName: 'Home',
    features: [
      'Master Bedroom & In-Law Suite Additions',
      'Four-Season Sunrooms & Screened Porches',
      'Second-Story Bump Outs & Full Upper Additions',
      'Permit Management, Architectural Engineering & Foundation Pours'
    ],
    startingPrice: 'Starting at $18,000',
    typicalDuration: '4 - 8 Weeks',
    popularAddon: 'Energy-star panoramic insulated windows'
  },
  {
    id: 'masonry',
    title: 'Masonry',
    tagline: 'Brickwork, Stone Veneers & Structural Retaining Walls',
    description: 'Master masonry crafted by experienced artisans. We build robust retaining walls, chimney repairs, brick pointing, cultured stone veneers, elegant front entry steps, stucco finishes, and concrete flatwork.',
    iconName: 'BrickWall',
    features: [
      'Engineered Retaining Walls for Slope Stabilization',
      'Cultured Stone & Natural Rock Exterior Façades',
      'Brick Repointing, Chimney Flashing & Cap Restorations',
      'Decorative Concrete Steps, Walkways & Aprons'
    ],
    startingPrice: 'Starting at $2,200',
    typicalDuration: '2 - 5 Days',
    popularAddon: 'Granite thermal treads & bluestone wall caps'
  },
  {
    id: 'painting',
    title: 'Painting',
    tagline: 'Flawless Interior & Exterior Architectural Finishes',
    description: 'Premium painting that protects and beautifies your investment. Thorough prep work including power washing, scraping, caulking, sanding, and primer coats before applying top-grade Sherwin-Williams & Benjamin Moore paints.',
    iconName: 'Paintbrush',
    features: [
      'Complete Exterior Siding, Trim, Doors & Shutters',
      'Interior Walls, Ceilings, Baseboards & Crown Molding',
      'Cabinet Refinishing & High-Durability Spray Finishes',
      'Deck & Fence Pressure Staining & Waterproofing'
    ],
    startingPrice: 'Starting at $1,200',
    typicalDuration: '2 - 4 Days',
    popularAddon: 'Mildew-resistant elastomeric exterior coatings'
  },
  {
    id: 'roofing',
    title: 'Roofing',
    tagline: 'Architectural Shingles, Flat Roofs & Leak Defense',
    description: 'Defend your home from coastal storms and harsh winters. Certified installations of GAF and Owens Corning architectural shingles, complete tear-offs, plywood decking repairs, ice/water shields, and ridge vent ventilation.',
    iconName: 'ShieldAlert',
    features: [
      '50-Year Architectural Shingle Roof Replacements',
      'Emergency Leak Repairs & Wind Damage Restorations',
      'Ice & Water Shield Leak Barriers along Eaves & Valleys',
      'Seamless Gutter Systems & Ridge Vent Attic Airflow'
    ],
    startingPrice: 'Starting at $5,500',
    typicalDuration: '1 - 2 Days',
    popularAddon: 'Heavy-duty 6" seamless aluminum gutters with leaf guards'
  },
  {
    id: 'pressure-washing',
    title: 'Pressure Washing',
    tagline: 'Commercial-Grade Cleaning for Siding, Driveways & Decks',
    description: 'Restore the curb appeal of your property instantly. Safe soft-wash treatments for delicate vinyl siding and roofs, high-pressure hot/cold blast for concrete driveways, grease removal, and surface sterilization without damage.',
    iconName: 'Sparkles',
    features: [
      'Low-Pressure Soft Wash for House Siding & Roof Stains',
      'Surface Cleaner Rotary Pressure for Concrete & Pavers',
      'Wood Deck & Fence Deep Wash before Re-staining',
      'Eco-Friendly Bio-Degradable Cleaning Solutions'
    ],
    startingPrice: 'Starting at $280',
    typicalDuration: '2 - 6 Hours',
    popularAddon: 'Driveway joint sand refill & penetrating sealant'
  },
  {
    id: 'tree-trimming',
    title: 'Tree Trimming',
    tagline: 'Pruning, Hazardous Branch Removal & Canopy Shaping',
    description: 'Keep your property safe from falling limbs during storm season. Professional canopy thinning, deadwood trimming, tree shaping near power lines and rooflines, storm hazard mitigation, and complete branch chipping.',
    iconName: 'Trees',
    features: [
      'Hazardous Overhanging Branch Removal near Roofs & Wires',
      'Crown Thinning & Aesthetic Canopy Elevation',
      'Storm Damage Clearance & Emergency Hazard Mitigation',
      'Full Branch Chipping, Wood Hauling & Stump Grinding'
    ],
    startingPrice: 'Starting at $350',
    typicalDuration: 'Half Day to 1 Day',
    popularAddon: 'Deep root fertilization and stump grinding'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Marcus & Elena Sterling',
    location: 'Toms River, NJ',
    rating: 5,
    service: 'Decks & Patio Combo',
    date: '2 weeks ago',
    review: 'Vasquez Home Improvement exceeded every expectation. They built a custom two-level composite deck and connected stone patio. Carlos and his crew showed up on time every day, kept the site spotless, and finished 2 days ahead of schedule. Truly "One Company. All Solutions!"',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'David Connelly',
    location: 'Hamilton, NJ',
    rating: 5,
    service: 'Roofing & Siding',
    date: '1 month ago',
    review: 'Had severe storm damage to our roof and gutters. Called their number +1 (609) 481-8197 and they had an estimator at my house within two hours. Fair pricing, impeccable roof installation, and zero surprise fees. Five stars without hesitation.',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Sofia Rodriguez-Patel',
    location: 'Princeton, NJ',
    rating: 5,
    service: 'Kitchen & Bathroom Remodeling',
    date: '2 months ago',
    review: 'We had multiple contractors bid, but Vasquez LLC was by far the most thorough and transparent. Their craftsmen handled the plumbing, tile masonry, and custom cabinetry under one contract. Outstanding attention to detail!',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Anthony Marchetti',
    location: 'Cherry Hill, NJ',
    rating: 5,
    service: 'Exterior Painting & Masonry',
    date: '3 months ago',
    review: 'Repointed our 40-year-old brick foundation and gave the entire exterior a crisp modern paint makeover. Neighbors keep stopping by to ask who did the work. Call them—you will not regret it.',
    verified: true
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Custom Trex Transcend Deck with Black Aluminum Railings',
    category: 'Decks & Patios',
    location: 'Toms River, NJ',
    description: 'Designed and constructed a 680 sq ft bi-level composite deck featuring integrated low-voltage stair riser lights, powder-coated pergola, and cocktail railings.',
    afterImg: '/projects/deck_remodel_finished_1791564892954.jpg',
    beforeImg: '/projects/deck_remodel_before_1791564905775.jpg',
    tag: 'Composite Decking',
    duration: '6 Days'
  },
  {
    id: 'proj-2',
    title: 'Modern Chef Kitchen & 9-Foot Quartz Waterfall Island',
    category: 'Remodeling',
    location: 'Princeton, NJ',
    description: 'Removed non-load-bearing partition, installed 9ft Calacatta quartz waterfall island, custom navy shaker cabinets, and recessed lighting array.',
    afterImg: '/projects/kitchen_remodel_finished_1791564920281.jpg',
    beforeImg: '/projects/kitchen_remodel_before_1791564933038.jpg',
    tag: 'Full Kitchen',
    duration: '14 Days'
  },
  {
    id: 'proj-3',
    title: 'Spa Master Bath & Curbless Glass Wet Room',
    category: 'Remodeling',
    location: 'Cherry Hill, NJ',
    description: 'Schluter-KERDI waterproofed curbless marble herringbone shower, freestanding soaking tub, floating double vanity, and black matte fixtures.',
    afterImg: '/projects/bath_remodel_finished_1791564980863.jpg',
    beforeImg: '/projects/bath_remodel_before_1791564997436.jpg',
    tag: 'Luxury Bath',
    duration: '9 Days'
  },
  {
    id: 'proj-4',
    title: 'Complete Architectural Shingle Roof Replacement & Flashing',
    category: 'Roofing',
    location: 'Trenton / Hamilton, NJ',
    description: 'Full tear-off of 32 squares, replaced damaged plywood sheathing, installed ice-and-water barrier, GAF Timberline HDZ charcoal shingles.',
    afterImg: '/src/assets/images/vasquez_contractor_hero_1790953526300.jpg',
    tag: '50-Yr Warranty',
    duration: '1.5 Days'
  }
];
