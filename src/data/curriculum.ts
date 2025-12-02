// Complete GST Curriculum - All Acts and Rules
// Based on ICAI Publication - November 2025 Edition

import CGST_ACT_CHAPTERS from './cgst-act';
import CGST_ACT_CHAPTERS_PART2 from './cgst-act-part2';

export interface Section {
  id: string;
  number: string;
  title: string;
  description: string;
  keyPoints: string[];
  difficulty: 'basic' | 'intermediate' | 'advanced';
  estimatedMinutes: number;
  practicalRelevance: 'high' | 'medium' | 'low';
}

export interface Chapter {
  id: number;
  slug: string;
  title: string;
  description: string;
  sections: Section[];
  icon: string;
  category: 'cgst-act' | 'cgst-rules' | 'igst-act' | 'igst-rules' | 'utgst-act' | 'compensation-act';
}

export interface Module {
  id: string;
  name: string;
  fullName: string;
  description: string;
  chapters: Chapter[];
  icon: string;
  color: string;
}

// IGST Act Chapters
export const IGST_ACT_CHAPTERS: Chapter[] = [
  {
    id: 101,
    slug: 'igst-preliminary',
    title: 'Preliminary & Definitions',
    description: 'Definitions specific to IGST including import, export, OIDAR services',
    icon: '📋',
    category: 'igst-act',
    sections: [
      {
        id: 'igst-sec-2',
        number: '2',
        title: 'Definitions',
        description: 'Key definitions unique to IGST',
        keyPoints: [
          'Export of goods: taking out of India to a place outside India',
          'Export of services: supplier in India, recipient outside India, payment in convertible foreign exchange',
          'Import of goods: bringing into India from outside',
          'Import of services: supplier outside India, recipient in India',
          'OIDAR services: online information and database access or retrieval',
          'Intermediary: broker, agent arranging supply'
        ],
        difficulty: 'intermediate',
        estimatedMinutes: 40,
        practicalRelevance: 'high'
      }
    ]
  },
  {
    id: 102,
    slug: 'igst-levy-collection',
    title: 'Levy and Collection',
    description: 'IGST levy on inter-state supplies and imports',
    icon: '💰',
    category: 'igst-act',
    sections: [
      {
        id: 'igst-sec-5',
        number: '5',
        title: 'Levy and Collection',
        description: 'Charging section for IGST',
        keyPoints: [
          'IGST on all inter-state supplies of goods and services',
          'IGST on imports (in addition to customs duty)',
          'Rate not exceeding 40%',
          'Reverse charge applicable as per CGST Act'
        ],
        difficulty: 'intermediate',
        estimatedMinutes: 35,
        practicalRelevance: 'high'
      }
    ]
  },
  {
    id: 103,
    slug: 'igst-nature-supply',
    title: 'Determination of Nature of Supply',
    description: 'Inter-state vs intra-state supply determination',
    icon: '🔀',
    category: 'igst-act',
    sections: [
      {
        id: 'igst-sec-7',
        number: '7',
        title: 'Inter-State supply',
        description: 'When supply is treated as inter-state',
        keyPoints: [
          'Location of supplier and place of supply in different states/UTs',
          'Supply to/by SEZ',
          'Import/export of goods and services'
        ],
        difficulty: 'advanced',
        estimatedMinutes: 45,
        practicalRelevance: 'high'
      },
      {
        id: 'igst-sec-8',
        number: '8',
        title: 'Intra-State supply',
        description: 'When supply is treated as intra-state',
        keyPoints: [
          'Location of supplier and place of supply in same state/UT',
          'CGST + SGST/UTGST applicable'
        ],
        difficulty: 'intermediate',
        estimatedMinutes: 25,
        practicalRelevance: 'high'
      }
    ]
  },
  {
    id: 104,
    slug: 'igst-place-supply',
    title: 'Place of Supply',
    description: 'Critical provisions determining where supply is made',
    icon: '📍',
    category: 'igst-act',
    sections: [
      {
        id: 'igst-sec-10',
        number: '10',
        title: 'Place of supply of goods (domestic)',
        description: 'POS for goods within India',
        keyPoints: [
          'With movement: where movement terminates',
          'Without movement: location at time of delivery',
          'Bill to ship to: principal place of third person',
          'Assembly/installation: place of installation'
        ],
        difficulty: 'advanced',
        estimatedMinutes: 50,
        practicalRelevance: 'high'
      },
      {
        id: 'igst-sec-12',
        number: '12',
        title: 'Place of supply of services (both in India)',
        description: 'POS when both supplier and recipient in India',
        keyPoints: [
          'General: location of recipient if registered',
          'Immovable property: location of property',
          'Events/training: venue',
          'Transport: destination for goods, embarkation for passengers'
        ],
        difficulty: 'advanced',
        estimatedMinutes: 60,
        practicalRelevance: 'high'
      },
      {
        id: 'igst-sec-13',
        number: '13',
        title: 'Place of supply of services (cross-border)',
        description: 'POS when one party is outside India',
        keyPoints: [
          'General: location of recipient',
          'Intermediary: location of intermediary',
          'OIDAR to unregistered: location of recipient'
        ],
        difficulty: 'advanced',
        estimatedMinutes: 55,
        practicalRelevance: 'high'
      }
    ]
  },
  {
    id: 105,
    slug: 'igst-zero-rated',
    title: 'Zero Rated Supply',
    description: 'Exports and SEZ supplies',
    icon: '🌍',
    category: 'igst-act',
    sections: [
      {
        id: 'igst-sec-16',
        number: '16',
        title: 'Zero rated supply',
        description: 'Definition and conditions for zero rating',
        keyPoints: [
          'Export of goods or services',
          'Supply to SEZ developer or unit',
          'Options: pay tax and claim refund OR supply under LUT',
          'ITC available for inputs used'
        ],
        difficulty: 'advanced',
        estimatedMinutes: 50,
        practicalRelevance: 'high'
      }
    ]
  }
];

// CGST Rules - Key Chapters
export const CGST_RULES_CHAPTERS: Chapter[] = [
  {
    id: 201,
    slug: 'cgst-rules-composition',
    title: 'Composition Levy (Rules 3-7)',
    description: 'Rules for composition scheme',
    icon: '📝',
    category: 'cgst-rules',
    sections: [
      {
        id: 'rule-3',
        number: 'Rule 3',
        title: 'Intimation for composition levy',
        description: 'Form CMP-02 for opting in',
        keyPoints: ['Apply electronically', 'Effective from beginning of FY', 'Cannot opt mid-year'],
        difficulty: 'basic',
        estimatedMinutes: 20,
        practicalRelevance: 'high'
      }
    ]
  },
  {
    id: 202,
    slug: 'cgst-rules-registration',
    title: 'Registration (Rules 8-26)',
    description: 'Registration procedure and documentation',
    icon: '📋',
    category: 'cgst-rules',
    sections: [
      {
        id: 'rule-8',
        number: 'Rule 8',
        title: 'Application for registration',
        description: 'REG-01 procedure',
        keyPoints: ['Apply in Form REG-01', 'Within 30 days', 'PAN mandatory', 'Aadhaar authentication'],
        difficulty: 'basic',
        estimatedMinutes: 25,
        practicalRelevance: 'high'
      },
      {
        id: 'rule-21',
        number: 'Rule 21',
        title: 'Registration to be cancelled',
        description: 'Grounds for cancellation',
        keyPoints: ['Non-filing of returns', 'Fraudulent registration', 'Business discontinued'],
        difficulty: 'intermediate',
        estimatedMinutes: 25,
        practicalRelevance: 'high'
      }
    ]
  },
  {
    id: 203,
    slug: 'cgst-rules-valuation',
    title: 'Determination of Value (Rules 27-35)',
    description: 'Valuation rules for special cases',
    icon: '💲',
    category: 'cgst-rules',
    sections: [
      {
        id: 'rule-27',
        number: 'Rule 27',
        title: 'Value of supply between related persons',
        description: 'Valuation when parties are related',
        keyPoints: ['Open market value', 'Value of like kind goods', '110% of cost', 'Reasonable means'],
        difficulty: 'advanced',
        estimatedMinutes: 35,
        practicalRelevance: 'high'
      },
      {
        id: 'rule-28',
        number: 'Rule 28',
        title: 'Value of supply between distinct persons',
        description: 'Stock transfers and branch supplies',
        keyPoints: ['Open market value', '110% of cost', 'ITC availability affects valuation'],
        difficulty: 'advanced',
        estimatedMinutes: 35,
        practicalRelevance: 'high'
      }
    ]
  },
  {
    id: 204,
    slug: 'cgst-rules-itc',
    title: 'Input Tax Credit (Rules 36-45)',
    description: 'ITC claim, reversal, and documentation',
    icon: '🔄',
    category: 'cgst-rules',
    sections: [
      {
        id: 'rule-36',
        number: 'Rule 36',
        title: 'Documentary requirements for ITC',
        description: 'Documents needed for claiming ITC',
        keyPoints: ['Invoice or debit note', 'Bill of entry for imports', 'Rule 36(4): ITC restricted to GSTR-2B'],
        difficulty: 'advanced',
        estimatedMinutes: 40,
        practicalRelevance: 'high'
      },
      {
        id: 'rule-37',
        number: 'Rule 37',
        title: 'Reversal of ITC (non-payment)',
        description: 'ITC reversal when supplier not paid',
        keyPoints: ['180 days limit', 'Reversal if not paid', 'Re-availment on payment'],
        difficulty: 'advanced',
        estimatedMinutes: 35,
        practicalRelevance: 'high'
      },
      {
        id: 'rule-42',
        number: 'Rule 42',
        title: 'ITC reversal for exempt supplies',
        description: 'Common credit apportionment',
        keyPoints: ['Exempt turnover ratio', 'Proportionate reversal', 'D1 and D2 calculations'],
        difficulty: 'advanced',
        estimatedMinutes: 50,
        practicalRelevance: 'high'
      }
    ]
  },
  {
    id: 205,
    slug: 'cgst-rules-invoice',
    title: 'Tax Invoice (Rules 46-55A)',
    description: 'Invoice requirements, e-invoicing',
    icon: '🧾',
    category: 'cgst-rules',
    sections: [
      {
        id: 'rule-46',
        number: 'Rule 46',
        title: 'Tax invoice',
        description: 'Contents of tax invoice',
        keyPoints: ['Supplier/recipient details', 'HSN/SAC code', 'Value, tax rate, amount'],
        difficulty: 'basic',
        estimatedMinutes: 30,
        practicalRelevance: 'high'
      },
      {
        id: 'rule-48',
        number: 'Rule 48',
        title: 'E-invoicing',
        description: 'Electronic invoicing requirements',
        keyPoints: ['Mandatory for turnover > ₹5 crore', 'IRN from IRP', 'QR code on invoice'],
        difficulty: 'advanced',
        estimatedMinutes: 45,
        practicalRelevance: 'high'
      }
    ]
  },
  {
    id: 206,
    slug: 'cgst-rules-returns',
    title: 'Returns (Rules 59-84)',
    description: 'Return filing rules and procedures',
    icon: '📊',
    category: 'cgst-rules',
    sections: [
      {
        id: 'rule-59',
        number: 'Rule 59',
        title: 'GSTR-1',
        description: 'Outward supply return',
        keyPoints: ['Due by 11th', 'B2B invoice-wise', 'B2C consolidated'],
        difficulty: 'intermediate',
        estimatedMinutes: 35,
        practicalRelevance: 'high'
      },
      {
        id: 'rule-60',
        number: 'Rule 60',
        title: 'GSTR-3B',
        description: 'Summary return with payment',
        keyPoints: ['Due by 20th', 'Summary of supplies', 'ITC claimed', 'Tax payment'],
        difficulty: 'intermediate',
        estimatedMinutes: 35,
        practicalRelevance: 'high'
      },
      {
        id: 'rule-80',
        number: 'Rule 80',
        title: 'Annual return (GSTR-9)',
        description: 'Annual return requirements',
        keyPoints: ['Due by 31st December', 'GSTR-9C if turnover > ₹5 crore'],
        difficulty: 'advanced',
        estimatedMinutes: 45,
        practicalRelevance: 'high'
      }
    ]
  },
  {
    id: 207,
    slug: 'cgst-rules-refund',
    title: 'Refund (Rules 89-97A)',
    description: 'Refund procedure and forms',
    icon: '💵',
    category: 'cgst-rules',
    sections: [
      {
        id: 'rule-89',
        number: 'Rule 89',
        title: 'Application for refund',
        description: 'RFD-01 procedure',
        keyPoints: ['RFD-01 form', 'Documents required', 'Statement of invoices'],
        difficulty: 'advanced',
        estimatedMinutes: 50,
        practicalRelevance: 'high'
      },
      {
        id: 'rule-96',
        number: 'Rule 96',
        title: 'Refund of IGST on exports',
        description: 'Export refund through shipping bill',
        keyPoints: ['Auto refund through customs', 'Based on shipping bill', 'GSTR-1 and 3B matching'],
        difficulty: 'advanced',
        estimatedMinutes: 40,
        practicalRelevance: 'high'
      }
    ]
  },
  {
    id: 208,
    slug: 'cgst-rules-eway',
    title: 'E-way Bill (Rules 138-138F)',
    description: 'Electronic way bill for goods movement',
    icon: '🚚',
    category: 'cgst-rules',
    sections: [
      {
        id: 'rule-138',
        number: 'Rule 138',
        title: 'E-way bill information',
        description: 'E-way bill generation requirements',
        keyPoints: ['Mandatory for value > ₹50,000', 'Part A and Part B', 'Validity based on distance'],
        difficulty: 'intermediate',
        estimatedMinutes: 40,
        practicalRelevance: 'high'
      },
      {
        id: 'rule-138d',
        number: 'Rule 138D',
        title: 'Validity of e-way bill',
        description: 'Time limits for e-way bill',
        keyPoints: ['100 km per day', '200 km for ODC', 'Extension before expiry'],
        difficulty: 'basic',
        estimatedMinutes: 20,
        practicalRelevance: 'high'
      }
    ]
  }
];

// Combine all chapters
export const ALL_CGST_ACT_CHAPTERS: Chapter[] = [...CGST_ACT_CHAPTERS, ...CGST_ACT_CHAPTERS_PART2];

// All GST Modules
export const GST_MODULES: Module[] = [
  {
    id: 'cgst-act',
    name: 'CGST Act',
    fullName: 'Central Goods and Services Tax Act, 2017',
    description: '21 Chapters covering levy, ITC, registration, returns, payments, refunds, assessments, appeals, and penalties',
    chapters: ALL_CGST_ACT_CHAPTERS,
    icon: '📜',
    color: 'blue'
  },
  {
    id: 'cgst-rules',
    name: 'CGST Rules',
    fullName: 'Central Goods and Services Tax Rules, 2017',
    description: '19 Chapters covering procedural aspects - registration, valuation, ITC, invoicing, returns, refunds, e-way bills',
    chapters: CGST_RULES_CHAPTERS,
    icon: '📋',
    color: 'indigo'
  },
  {
    id: 'igst-act',
    name: 'IGST Act',
    fullName: 'Integrated Goods and Services Tax Act, 2017',
    description: 'Provisions for inter-state supplies, imports, exports, place of supply, and zero-rated supplies',
    chapters: IGST_ACT_CHAPTERS,
    icon: '🌍',
    color: 'green'
  }
];

// Calculate statistics
export const getCurriculumStats = () => {
  let totalSections = 0;
  let totalMinutes = 0;
  const byDifficulty = { basic: 0, intermediate: 0, advanced: 0 };
  const byRelevance = { high: 0, medium: 0, low: 0 };

  GST_MODULES.forEach(module => {
    module.chapters.forEach(chapter => {
      chapter.sections.forEach(section => {
        totalSections++;
        totalMinutes += section.estimatedMinutes;
        byDifficulty[section.difficulty]++;
        byRelevance[section.practicalRelevance]++;
      });
    });
  });

  return {
    totalModules: GST_MODULES.length,
    totalChapters: GST_MODULES.reduce((acc, m) => acc + m.chapters.length, 0),
    totalSections,
    totalMinutes,
    totalHours: Math.round(totalMinutes / 60),
    byDifficulty,
    byRelevance
  };
};

export const CURRICULUM_STATS = getCurriculumStats();

export default GST_MODULES;
