// CGST Act Chapters 1-10
// Based on ICAI Publication - November 2025 Edition

export const CGST_ACT_CHAPTERS = [
  {
    id: 1, slug: 'preliminary', title: 'Preliminary', icon: '📋', category: 'cgst-act' as const,
    description: 'Definitions and basic concepts - foundation of GST law',
    sections: [
      { id: 'sec-1', number: '1', title: 'Short title, extent and commencement', description: 'Introduction to CGST Act 2017',
        keyPoints: ['Called Central Goods and Services Tax Act 2017', 'Extends to whole of India', 'Effective from 1st July 2017'],
        difficulty: 'basic' as const, estimatedMinutes: 10, practicalRelevance: 'low' as const },
      { id: 'sec-2', number: '2', title: 'Definitions', description: '121 key definitions forming the foundation of GST',
        keyPoints: ['Aggregate turnover definition', 'Business definition', 'Goods and Services defined', 'Supply meaning', 'Taxable person', 'Input tax credit'],
        difficulty: 'intermediate' as const, estimatedMinutes: 60, practicalRelevance: 'high' as const }
    ]
  },
  {
    id: 2, slug: 'administration', title: 'Administration', icon: '🏛️', category: 'cgst-act' as const,
    description: 'GST administrative hierarchy and officer powers',
    sections: [
      { id: 'sec-3', number: '3', title: 'Officers under this Act', description: 'Appointment of GST officers',
        keyPoints: ['Principal Chief Commissioner', 'Chief Commissioner', 'Principal Commissioner', 'Commissioner', 'Additional/Joint Commissioner', 'Deputy/Assistant Commissioner', 'Superintendent', 'Inspector'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'low' as const },
      { id: 'sec-4', number: '4', title: 'Appointment of officers', description: 'Power to appoint officers',
        keyPoints: ['Board may appoint officers', 'Central Government appoints Principal Chief Commissioners'],
        difficulty: 'basic' as const, estimatedMinutes: 10, practicalRelevance: 'low' as const },
      { id: 'sec-5', number: '5', title: 'Powers of officers', description: 'Delegation and exercise of powers',
        keyPoints: ['Powers can be delegated', 'Subject to conditions specified'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'medium' as const },
      { id: 'sec-6', number: '6', title: 'Authorisation of officers', description: 'Cross-empowerment provisions',
        keyPoints: ['State officers can act as Central officers', 'Central officers can act as State officers', 'Facilitates single interface'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'medium' as const }
    ]
  },
  {
    id: 3, slug: 'levy-collection', title: 'Levy and Collection of Tax', icon: '💰', category: 'cgst-act' as const,
    description: 'Core charging provisions - scope of supply, rates, composition scheme',
    sections: [
      { id: 'sec-7', number: '7', title: 'Scope of supply', description: 'What constitutes supply under GST - the most fundamental provision',
        keyPoints: ['All forms of supply for consideration in course of business', 'Includes sale, transfer, barter, exchange, license, rental, lease', 'Import of services for consideration', 'Schedule I: Supply without consideration', 'Schedule II: Activities to be treated as supply', 'Schedule III: Neither goods nor services'],
        difficulty: 'advanced' as const, estimatedMinutes: 45, practicalRelevance: 'high' as const },
      { id: 'sec-8', number: '8', title: 'Composite and mixed supplies', description: 'Treatment of bundled supplies',
        keyPoints: ['Composite supply: naturally bundled, principal supply determines rate', 'Mixed supply: not naturally bundled, highest rate applies', 'Example composite: hotel accommodation with breakfast', 'Example mixed: gift hamper with chocolates, dry fruits, sweets'],
        difficulty: 'intermediate' as const, estimatedMinutes: 30, practicalRelevance: 'high' as const },
      { id: 'sec-9', number: '9', title: 'Levy and collection', description: 'Charging section for CGST',
        keyPoints: ['CGST on all intra-state supplies', 'Rate not exceeding 20%', 'Collected by Central Government', 'Reverse charge under sub-section (3) and (4)', 'RCM on notified goods/services', 'RCM on supplies from unregistered persons'],
        difficulty: 'intermediate' as const, estimatedMinutes: 35, practicalRelevance: 'high' as const },
      { id: 'sec-10', number: '10', title: 'Composition levy', description: 'Simplified scheme for small taxpayers',
        keyPoints: ['Turnover limit ₹1.5 crore (₹75 lakhs for special states)', 'Rate: 1% for traders, 1% for manufacturers, 5% for restaurants', 'Cannot make inter-state supplies', 'Cannot supply through e-commerce', 'Bill of supply instead of tax invoice', 'No ITC available', 'CMP-08 quarterly statement'],
        difficulty: 'intermediate' as const, estimatedMinutes: 40, practicalRelevance: 'high' as const },
      { id: 'sec-11', number: '11', title: 'Power to grant exemption', description: 'Exemption from GST',
        keyPoints: ['Government may exempt goods/services', 'By notification on GST Council recommendation', 'Absolute exemption or conditional exemption'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'medium' as const },
      { id: 'sec-11a', number: '11A', title: 'Non-levy in certain cases', description: 'Non-recovery for general practice',
        keyPoints: ['Where tax not levied due to general practice', 'Such practice prevalent across trade', 'No recovery of tax for that period'],
        difficulty: 'intermediate' as const, estimatedMinutes: 15, practicalRelevance: 'medium' as const }
    ]
  },
  {
    id: 4, slug: 'time-value-supply', title: 'Time and Value of Supply', icon: '⏰', category: 'cgst-act' as const,
    description: 'When tax liability arises and how to determine taxable value',
    sections: [
      { id: 'sec-12', number: '12', title: 'Time of supply of goods', description: 'When tax liability arises for goods',
        keyPoints: ['Earlier of: date of invoice, last date to issue invoice, or date of payment', 'Continuous supply: as per invoice/payment', 'Goods on approval: earlier of acceptance or 6 months'],
        difficulty: 'advanced' as const, estimatedMinutes: 40, practicalRelevance: 'high' as const },
      { id: 'sec-13', number: '13', title: 'Time of supply of services', description: 'When tax liability arises for services',
        keyPoints: ['If invoice within time: earlier of invoice or payment', 'If invoice not in time: date of service or payment', 'Continuous supply: due date or payment or invoice'],
        difficulty: 'advanced' as const, estimatedMinutes: 40, practicalRelevance: 'high' as const },
      { id: 'sec-14', number: '14', title: 'Change in rate of tax', description: 'Handling tax rate changes',
        keyPoints: ['Supply before change, invoice/payment after: new rate', 'Supply after change, invoice/payment before: old rate', 'Complex matrix for different scenarios'],
        difficulty: 'advanced' as const, estimatedMinutes: 30, practicalRelevance: 'medium' as const },
      { id: 'sec-15', number: '15', title: 'Value of taxable supply', description: 'How to determine taxable value',
        keyPoints: ['Transaction value when supplier and recipient not related', 'Includes all charges except GST', 'Includes packing, transport, insurance charged by supplier', 'Excludes discount if known at time of supply and shown in invoice', 'Post-supply discounts: credit note needed'],
        difficulty: 'advanced' as const, estimatedMinutes: 45, practicalRelevance: 'high' as const }
    ]
  },
  {
    id: 5, slug: 'input-tax-credit', title: 'Input Tax Credit', icon: '🔄', category: 'cgst-act' as const,
    description: 'ITC eligibility, blocked credits, and utilization - critical for tax planning',
    sections: [
      { id: 'sec-16', number: '16', title: 'Eligibility and conditions for ITC', description: 'When can ITC be claimed',
        keyPoints: ['Must have tax invoice or debit note', 'Must have received goods/services', 'Tax must be paid by supplier to government', 'Must file return', 'Time limit: 30th November of next FY', 'Payment to supplier within 180 days'],
        difficulty: 'advanced' as const, estimatedMinutes: 50, practicalRelevance: 'high' as const },
      { id: 'sec-17', number: '17', title: 'Apportionment and blocked credits', description: 'What ITC is NOT available',
        keyPoints: ['Motor vehicles (except for specified purposes)', 'Food and beverages, outdoor catering', 'Beauty treatment, health services', 'Club membership, fitness', 'Life/health insurance (except when mandatory)', 'Works contract for construction of immovable property', 'Goods for personal consumption', 'Goods lost, stolen, destroyed, written off, gifted'],
        difficulty: 'advanced' as const, estimatedMinutes: 50, practicalRelevance: 'high' as const },
      { id: 'sec-18', number: '18', title: 'ITC in special circumstances', description: 'ITC on registration, switching schemes',
        keyPoints: ['ITC on inputs in stock on date of registration', 'ITC when switching from composition to normal', 'ITC when exempt supply becomes taxable', 'Within 1 year from invoice date'],
        difficulty: 'advanced' as const, estimatedMinutes: 35, practicalRelevance: 'high' as const },
      { id: 'sec-19', number: '19', title: 'ITC on inputs sent for job work', description: 'Job work ITC provisions',
        keyPoints: ['Inputs sent for job work: return within 1 year', 'Capital goods: return within 3 years', 'If not returned, deemed supply'],
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'high' as const },
      { id: 'sec-20', number: '20', title: 'Input Service Distributor', description: 'Distribution of ITC by ISD',
        keyPoints: ['Office receiving common invoices', 'Distributes credit to branches', 'Pro-rata distribution based on turnover'],
        difficulty: 'advanced' as const, estimatedMinutes: 35, practicalRelevance: 'medium' as const },
      { id: 'sec-21', number: '21', title: 'Manner of recovery of excess credit', description: 'Recovery of wrongly taken ITC',
        keyPoints: ['Excess credit taken: add to output tax liability', 'Interest @ 24% applicable', 'Show cause notice procedure'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'high' as const }
    ]
  },
  {
    id: 6, slug: 'registration', title: 'Registration', icon: '📝', category: 'cgst-act' as const,
    description: 'Who must register, thresholds, procedures, cancellation',
    sections: [
      { id: 'sec-22', number: '22', title: 'Persons liable for registration', description: 'Mandatory registration thresholds',
        keyPoints: ['Aggregate turnover > ₹20 lakhs (₹10 lakhs for special states)', 'For goods only suppliers: ₹40 lakhs', 'State-wise registration required', 'PAN mandatory'],
        difficulty: 'basic' as const, estimatedMinutes: 25, practicalRelevance: 'high' as const },
      { id: 'sec-23', number: '23', title: 'Persons not liable for registration', description: 'Exemptions from registration',
        keyPoints: ['Persons making only exempt supplies', 'Agriculturist to extent of supply of produce', 'Persons making only supplies under reverse charge'],
        difficulty: 'basic' as const, estimatedMinutes: 20, practicalRelevance: 'high' as const },
      { id: 'sec-24', number: '24', title: 'Compulsory registration', description: 'Registration regardless of turnover',
        keyPoints: ['Inter-state suppliers', 'Casual taxable persons', 'Non-resident taxable persons', 'Persons liable to pay under reverse charge', 'E-commerce operators', 'TDS deductors', 'Persons supplying through e-commerce'],
        difficulty: 'intermediate' as const, estimatedMinutes: 30, practicalRelevance: 'high' as const },
      { id: 'sec-25', number: '25', title: 'Procedure for registration', description: 'Registration application process',
        keyPoints: ['Apply within 30 days of becoming liable', 'GSTIN: 15 digit number', 'State code (2) + PAN (10) + Entity (1) + Z + Check digit', 'Aadhaar authentication'],
        difficulty: 'basic' as const, estimatedMinutes: 25, practicalRelevance: 'high' as const },
      { id: 'sec-26', number: '26', title: 'Deemed registration', description: 'Automatic registration',
        keyPoints: ['If no action within 7 working days', 'Registration deemed granted', 'Effective from date of application'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'medium' as const },
      { id: 'sec-27', number: '27', title: 'Special provisions for casual/non-resident', description: 'Registration for temporary supplies',
        keyPoints: ['Apply at least 5 days before start', 'Advance tax deposit required', 'Valid for 90 days (extendable)'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'medium' as const },
      { id: 'sec-28', number: '28', title: 'Amendment of registration', description: 'Changes to registration details',
        keyPoints: ['Core fields: approval needed', 'Non-core fields: auto-approved', 'Within 15 days of change'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'medium' as const },
      { id: 'sec-29', number: '29', title: 'Cancellation of registration', description: 'How registration can be cancelled',
        keyPoints: ['Voluntary: if no longer liable', 'Suo moto: by officer for non-compliance', 'Must pay ITC reversal on inputs in stock', 'Final return required'],
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'high' as const },
      { id: 'sec-30', number: '30', title: 'Revocation of cancellation', description: 'Getting cancelled registration restored',
        keyPoints: ['Apply within 30 days of cancellation', 'Extendable by 30 days by Additional/Joint Commissioner', 'Further 30 days by Commissioner', 'All pending returns must be filed'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'high' as const }
    ]
  },
  {
    id: 7, slug: 'tax-invoice', title: 'Tax Invoice, Credit and Debit Notes', icon: '🧾', category: 'cgst-act' as const,
    description: 'Invoice requirements, bill of supply, credit/debit notes',
    sections: [
      { id: 'sec-31', number: '31', title: 'Tax invoice', description: 'When and how to issue tax invoice',
        keyPoints: ['Registered person making taxable supply', 'Before or at time of removal/delivery of goods', 'Before or after provision of service (within 30 days)', 'Bill of supply for exempt supplies/composition'],
        difficulty: 'intermediate' as const, estimatedMinutes: 35, practicalRelevance: 'high' as const },
      { id: 'sec-32', number: '32', title: 'Prohibition of unauthorized collection', description: 'Who cannot collect tax',
        keyPoints: ['Unregistered persons cannot collect tax', 'Composition dealers cannot collect tax', 'Penalty for violation'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'medium' as const },
      { id: 'sec-33', number: '33', title: 'Amount of tax to be indicated', description: 'Tax details on invoice',
        keyPoints: ['Tax amount must be shown separately', 'Rate and amount for CGST, SGST/IGST'],
        difficulty: 'basic' as const, estimatedMinutes: 10, practicalRelevance: 'high' as const },
      { id: 'sec-34', number: '34', title: 'Credit and debit notes', description: 'For value/tax adjustments post-supply',
        keyPoints: ['Credit note: when value/tax reduces', 'Debit note: when value/tax increases', 'Time limit: 30th November of next FY', 'Details to be declared in return'],
        difficulty: 'intermediate' as const, estimatedMinutes: 30, practicalRelevance: 'high' as const },
      { id: 'sec-34a', number: '34A', title: 'Restriction on credit notes', description: 'Credit note limitations',
        keyPoints: ['Cannot reduce output below zero', 'Recipient must reverse ITC if already taken'],
        difficulty: 'intermediate' as const, estimatedMinutes: 15, practicalRelevance: 'high' as const }
    ]
  },
  {
    id: 8, slug: 'accounts-records', title: 'Accounts and Records', icon: '📊', category: 'cgst-act' as const,
    description: 'Record keeping requirements and retention period',
    sections: [
      { id: 'sec-35', number: '35', title: 'Accounts and other records', description: 'What records to maintain',
        keyPoints: ['Records of production/manufacture', 'Inward and outward supply', 'Stock of goods', 'ITC availed', 'Output tax payable and paid', 'Accounts of advances received'],
        difficulty: 'intermediate' as const, estimatedMinutes: 30, practicalRelevance: 'high' as const },
      { id: 'sec-36', number: '36', title: 'Period of retention', description: 'How long to keep records',
        keyPoints: ['72 months (6 years) from due date of annual return', 'Longer if proceeding pending'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'high' as const }
    ]
  },
  {
    id: 9, slug: 'returns', title: 'Returns', icon: '📅', category: 'cgst-act' as const,
    description: 'GSTR-1, GSTR-3B, Annual returns, due dates, late fees',
    sections: [
      { id: 'sec-37', number: '37', title: 'Furnishing details of outward supplies', description: 'GSTR-1 requirements',
        keyPoints: ['Details of outward supplies', 'Due: 11th of next month', 'Quarterly for QRMP scheme (turnover ≤ ₹5 cr)', 'B2B: invoice-wise', 'B2C: consolidated'],
        difficulty: 'intermediate' as const, estimatedMinutes: 35, practicalRelevance: 'high' as const },
      { id: 'sec-38', number: '38', title: 'Communication of details of inward supplies', description: 'GSTR-2B auto-generated statement',
        keyPoints: ['Auto-generated from suppliers GSTR-1', 'Available by 14th of next month', 'Used for ITC matching', 'Helps in ITC verification'],
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'high' as const },
      { id: 'sec-39', number: '39', title: 'Furnishing of returns', description: 'GSTR-3B monthly return',
        keyPoints: ['Summary return with tax payment', 'Due: 20th of next month', 'QRMP: 22nd/24th of month after quarter', 'Self-assessed tax payment'],
        difficulty: 'intermediate' as const, estimatedMinutes: 35, practicalRelevance: 'high' as const },
      { id: 'sec-40', number: '40', title: 'First return', description: 'Return for period before registration',
        keyPoints: ['For period from effective date to month end', 'All supplies from effective date'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'medium' as const },
      { id: 'sec-41', number: '41', title: 'Claim of input tax credit', description: 'ITC claim in return',
        keyPoints: ['Self-assessed claim in GSTR-3B', 'Based on GSTR-2B for matching'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'high' as const },
      { id: 'sec-42', number: '42', title: 'Matching and reversal', description: 'ITC matching mechanism',
        keyPoints: ['Matching with supplier returns', 'Reversal if mismatch', 'Communication of discrepancies'],
        difficulty: 'advanced' as const, estimatedMinutes: 30, practicalRelevance: 'high' as const },
      { id: 'sec-43', number: '43', title: 'Matching of claim of reduction', description: 'Credit note matching',
        keyPoints: ['Credit notes to match with recipients', 'Reversal of ITC if mismatch'],
        difficulty: 'advanced' as const, estimatedMinutes: 25, practicalRelevance: 'medium' as const },
      { id: 'sec-44', number: '44', title: 'Annual return', description: 'GSTR-9 annual return',
        keyPoints: ['Due: 31st December of next year', 'Consolidation of monthly returns', 'GSTR-9C if turnover > ₹5 crore (self-certified reconciliation)'],
        difficulty: 'advanced' as const, estimatedMinutes: 40, practicalRelevance: 'high' as const },
      { id: 'sec-45', number: '45', title: 'Final return', description: 'Return on cancellation',
        keyPoints: ['Within 3 months of cancellation', 'Or date of cancellation order', 'Pay ITC reversal on stock'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'medium' as const },
      { id: 'sec-46', number: '46', title: 'Notice to return defaulters', description: 'Notice for non-filing',
        keyPoints: ['Notice if return not filed', 'Within 15 days of notice'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'medium' as const },
      { id: 'sec-47', number: '47', title: 'Levy of late fee', description: 'Late fee for delayed returns',
        keyPoints: ['₹100/day CGST + ₹100/day SGST', 'Max ₹5,000 (₹2,500 each)', 'NIL return: ₹20/day, max ₹500', 'Annual return: ₹200/day, max 0.25% of turnover'],
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'high' as const },
      { id: 'sec-48', number: '48', title: 'GST Practitioners', description: 'Authorized representatives',
        keyPoints: ['Qualified persons can act on behalf of taxpayers', 'CA, CMA, CS, Advocates eligible', 'Enrolled with GST portal'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'medium' as const }
    ]
  },
  {
    id: 10, slug: 'payment-tax', title: 'Payment of Tax', icon: '💳', category: 'cgst-act' as const,
    description: 'Electronic ledgers, ITC utilization, TDS, TCS, interest',
    sections: [
      { id: 'sec-49', number: '49', title: 'Payment of tax, interest, penalty', description: 'Electronic ledgers system',
        keyPoints: ['Electronic Credit Ledger: ITC available', 'Electronic Cash Ledger: cash deposited', 'Electronic Liability Ledger: tax payable', 'ITC can pay output tax', 'Cash for interest, penalty, fees, other amounts'],
        difficulty: 'advanced' as const, estimatedMinutes: 45, practicalRelevance: 'high' as const },
      { id: 'sec-49a', number: '49A', title: 'ITC utilization order', description: 'Order of ITC set-off',
        keyPoints: ['IGST credit first for IGST', 'Then IGST for CGST or SGST', 'CGST only for CGST or IGST', 'SGST only for SGST or IGST'],
        difficulty: 'advanced' as const, estimatedMinutes: 35, practicalRelevance: 'high' as const },
      { id: 'sec-49b', number: '49B', title: 'Order of utilization of ITC', description: 'IGST exhaustion rule',
        keyPoints: ['IGST credit to be fully utilized before CGST/SGST', 'Prevents blocking of credit'],
        difficulty: 'advanced' as const, estimatedMinutes: 25, practicalRelevance: 'high' as const },
      { id: 'sec-50', number: '50', title: 'Interest on delayed payment', description: 'Interest rates for late payment',
        keyPoints: ['Delayed payment: 18% p.a.', 'Excess/undue ITC claim: 24% p.a.', 'Interest from due date to payment date', 'Simple interest'],
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'high' as const },
      { id: 'sec-51', number: '51', title: 'Tax deduction at source', description: 'TDS under GST',
        keyPoints: ['Applicable on government, PSU contracts', 'Rate: 2% (1% CGST + 1% SGST or 2% IGST)', 'On payments > ₹2.5 lakhs per contract', 'Deposit by 10th of next month', 'TDS certificate to be issued'],
        difficulty: 'advanced' as const, estimatedMinutes: 40, practicalRelevance: 'high' as const },
      { id: 'sec-52', number: '52', title: 'Collection of tax at source', description: 'TCS by e-commerce operators',
        keyPoints: ['E-commerce operator to collect TCS', 'Rate: 1% (0.5% CGST + 0.5% SGST or 1% IGST)', 'On net value of taxable supplies', 'Monthly statement by 10th', 'Credit to supplier on filing return'],
        difficulty: 'advanced' as const, estimatedMinutes: 40, practicalRelevance: 'high' as const },
      { id: 'sec-53', number: '53', title: 'Transfer of ITC', description: 'Credit transfer on state change',
        keyPoints: ['On change of place of business', 'Credit transferred through return'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'medium' as const },
      { id: 'sec-53a', number: '53A', title: 'Transfer of certain amounts', description: 'Transfer of excess balance',
        keyPoints: ['Transfer between CGST and IGST', 'When excess in one ledger'],
        difficulty: 'intermediate' as const, estimatedMinutes: 15, practicalRelevance: 'medium' as const }
    ]
  }
];

export default CGST_ACT_CHAPTERS;
