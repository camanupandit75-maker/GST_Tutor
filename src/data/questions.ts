// GST Quiz Questions Database

export interface QuizQuestion {
  id: string;
  moduleId: string;
  chapterId: number;
  sectionId: string;
  question: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'numeric';
  options?: string[];
  correctAnswer: string | number | boolean;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  hints?: string[];
  tags: string[];
}

export const GST_QUESTIONS: QuizQuestion[] = [
  // Registration Questions
  {
    id: 'q1', moduleId: 'cgst-act', chapterId: 6, sectionId: 'sec-22',
    question: 'What is the threshold for GST registration in normal states?',
    type: 'multiple-choice',
    options: ['₹10 lakhs', '₹20 lakhs', '₹40 lakhs', '₹1.5 crore'],
    correctAnswer: '₹20 lakhs',
    explanation: 'Section 22: Threshold is ₹20 lakhs aggregate turnover for normal states, ₹10 lakhs for special category states.',
    difficulty: 'easy', points: 10, tags: ['registration', 'threshold']
  },
  {
    id: 'q2', moduleId: 'cgst-act', chapterId: 6, sectionId: 'sec-24',
    question: 'Casual taxable persons need compulsory registration regardless of turnover.',
    type: 'true-false', correctAnswer: true,
    explanation: 'Section 24 mandates compulsory registration for casual taxable persons irrespective of threshold.',
    difficulty: 'easy', points: 10, tags: ['registration', 'casual taxable person']
  },
  {
    id: 'q3', moduleId: 'cgst-act', chapterId: 6, sectionId: 'sec-25',
    question: 'How many characters are in a GSTIN?',
    type: 'numeric', correctAnswer: 15,
    explanation: 'GSTIN has 15 characters: 2 (state) + 10 (PAN) + 1 (entity) + 1 (Z) + 1 (checksum).',
    difficulty: 'easy', points: 10, tags: ['GSTIN', 'registration']
  },
  // Levy and Supply Questions
  {
    id: 'q4', moduleId: 'cgst-act', chapterId: 3, sectionId: 'sec-7',
    question: 'Services by employee to employer are considered supply under GST.',
    type: 'true-false', correctAnswer: false,
    explanation: 'Schedule III: Services by employee to employer in course of employment are neither goods nor services.',
    difficulty: 'easy', points: 10, tags: ['supply', 'schedule III']
  },
  {
    id: 'q5', moduleId: 'cgst-act', chapterId: 3, sectionId: 'sec-8',
    question: 'In mixed supply, GST rate applicable is:',
    type: 'multiple-choice',
    options: ['Lowest rate', 'Highest rate', 'Average rate', 'Principal supply rate'],
    correctAnswer: 'Highest rate',
    explanation: 'Section 8(b): Mixed supply is treated as supply of item attracting highest tax rate.',
    difficulty: 'medium', points: 15, tags: ['mixed supply', 'rate']
  },
  {
    id: 'q6', moduleId: 'cgst-act', chapterId: 3, sectionId: 'sec-10',
    question: 'Composition dealer can make inter-state supplies.',
    type: 'true-false', correctAnswer: false,
    explanation: 'Section 10(2)(a): Composition dealers cannot make inter-state outward supplies.',
    difficulty: 'easy', points: 10, tags: ['composition', 'restrictions']
  },
  {
    id: 'q7', moduleId: 'cgst-act', chapterId: 3, sectionId: 'sec-10',
    question: 'Composition scheme turnover limit for traders is:',
    type: 'multiple-choice',
    options: ['₹50 lakhs', '₹75 lakhs', '₹1 crore', '₹1.5 crore'],
    correctAnswer: '₹1.5 crore',
    explanation: 'Section 10: ₹1.5 crore for normal states (₹75 lakhs for special category).',
    difficulty: 'medium', points: 15, tags: ['composition', 'threshold']
  },
  // ITC Questions
  {
    id: 'q8', moduleId: 'cgst-act', chapterId: 5, sectionId: 'sec-16',
    question: 'Time limit for claiming ITC is:',
    type: 'multiple-choice',
    options: ['30th September', '31st October', '30th November', '31st December'],
    correctAnswer: '30th November',
    explanation: 'Section 16(4): ITC must be claimed by 30th November of following financial year.',
    difficulty: 'medium', points: 15, tags: ['ITC', 'time limit']
  },
  {
    id: 'q9', moduleId: 'cgst-act', chapterId: 5, sectionId: 'sec-17',
    question: 'ITC on motor vehicles for transportation of goods is blocked.',
    type: 'true-false', correctAnswer: false,
    explanation: 'Section 17(5): ITC is available for motor vehicles used for transportation of goods.',
    difficulty: 'medium', points: 15, tags: ['ITC', 'blocked credit', 'motor vehicles']
  },
  {
    id: 'q10', moduleId: 'cgst-act', chapterId: 5, sectionId: 'sec-17',
    question: 'Which is NOT a blocked credit under Section 17(5)?',
    type: 'multiple-choice',
    options: ['Club membership', 'Food for employees', 'Goods for taxable supplies', 'Beauty treatment'],
    correctAnswer: 'Goods for taxable supplies',
    explanation: 'ITC is available for goods/services used for making taxable supplies.',
    difficulty: 'medium', points: 15, tags: ['blocked credit', 'ITC']
  },
  // Returns Questions  
  {
    id: 'q11', moduleId: 'cgst-act', chapterId: 9, sectionId: 'sec-39',
    question: 'Due date for GSTR-3B (monthly filers) is:',
    type: 'multiple-choice',
    options: ['10th', '11th', '20th', '25th'],
    correctAnswer: '20th',
    explanation: 'Section 39: GSTR-3B is due on 20th of following month for monthly filers.',
    difficulty: 'easy', points: 10, tags: ['GSTR-3B', 'due date']
  },
  {
    id: 'q12', moduleId: 'cgst-act', chapterId: 9, sectionId: 'sec-37',
    question: 'Due date for GSTR-1 is:',
    type: 'multiple-choice',
    options: ['10th', '11th', '13th', '20th'],
    correctAnswer: '11th',
    explanation: 'Section 37: GSTR-1 is due on 11th of following month for monthly filers.',
    difficulty: 'easy', points: 10, tags: ['GSTR-1', 'due date']
  },
  {
    id: 'q13', moduleId: 'cgst-act', chapterId: 9, sectionId: 'sec-44',
    question: 'GSTR-9 Annual Return due date is:',
    type: 'multiple-choice',
    options: ['30th September', '31st October', '30th November', '31st December'],
    correctAnswer: '31st December',
    explanation: 'Section 44: Annual return to be filed by 31st December of following year.',
    difficulty: 'easy', points: 10, tags: ['GSTR-9', 'annual return']
  },
  // Payment Questions
  {
    id: 'q14', moduleId: 'cgst-act', chapterId: 10, sectionId: 'sec-50',
    question: 'Interest rate for delayed payment of GST is:',
    type: 'multiple-choice',
    options: ['12%', '15%', '18%', '24%'],
    correctAnswer: '18%',
    explanation: 'Section 50(1): Interest at 18% p.a. for delayed payment. 24% for excess ITC claim.',
    difficulty: 'easy', points: 10, tags: ['interest', 'payment']
  },
  {
    id: 'q15', moduleId: 'cgst-act', chapterId: 10, sectionId: 'sec-51',
    question: 'TDS rate under GST is:',
    type: 'multiple-choice',
    options: ['1%', '2%', '5%', '10%'],
    correctAnswer: '2%',
    explanation: 'Section 51: TDS at 2% (1% CGST + 1% SGST or 2% IGST) for contracts > ₹2.5 lakhs.',
    difficulty: 'easy', points: 10, tags: ['TDS', 'rate']
  },
  {
    id: 'q16', moduleId: 'cgst-act', chapterId: 10, sectionId: 'sec-52',
    question: 'TCS rate by e-commerce operators is:',
    type: 'multiple-choice',
    options: ['0.5%', '1%', '2%', '5%'],
    correctAnswer: '1%',
    explanation: 'Section 52: TCS at 1% (0.5% CGST + 0.5% SGST or 1% IGST) on net value.',
    difficulty: 'medium', points: 15, tags: ['TCS', 'e-commerce']
  },
  // Demands and Appeals
  {
    id: 'q17', moduleId: 'cgst-act', chapterId: 15, sectionId: 'sec-73',
    question: 'Time limit for SCN under Section 73 (non-fraud) is:',
    type: 'multiple-choice',
    options: ['2 years', '3 years', '5 years', '7 years'],
    correctAnswer: '3 years',
    explanation: 'Section 73: 3 years from due date of annual return for non-fraud cases.',
    difficulty: 'medium', points: 15, tags: ['SCN', 'time limit', 'section 73']
  },
  {
    id: 'q18', moduleId: 'cgst-act', chapterId: 15, sectionId: 'sec-74',
    question: 'Penalty under Section 74 (fraud cases) is:',
    type: 'multiple-choice',
    options: ['10%', '25%', '50%', '100%'],
    correctAnswer: '100%',
    explanation: 'Section 74: 100% penalty for fraud/suppression cases.',
    difficulty: 'medium', points: 15, tags: ['penalty', 'fraud']
  },
  {
    id: 'q19', moduleId: 'cgst-act', chapterId: 18, sectionId: 'sec-107',
    question: 'Pre-deposit for first appeal is:',
    type: 'multiple-choice',
    options: ['5%', '10%', '15%', '20%'],
    correctAnswer: '10%',
    explanation: 'Section 107(6): 10% pre-deposit (max ₹25 crore) for first appeal.',
    difficulty: 'medium', points: 15, tags: ['appeal', 'pre-deposit']
  },
  // IGST Questions
  {
    id: 'q20', moduleId: 'igst-act', chapterId: 104, sectionId: 'igst-sec-12',
    question: 'Place of supply for immovable property services is:',
    type: 'multiple-choice',
    options: ['Supplier location', 'Recipient location', 'Property location', 'Either location'],
    correctAnswer: 'Property location',
    explanation: 'Section 12(3) IGST: POS for immovable property services is location of property.',
    difficulty: 'medium', points: 15, tags: ['place of supply', 'immovable property']
  },
  {
    id: 'q21', moduleId: 'igst-act', chapterId: 105, sectionId: 'igst-sec-16',
    question: 'Zero-rated supply includes:',
    type: 'multiple-choice',
    options: ['Exempt supplies', 'Exports', 'Composition supplies', 'Reverse charge supplies'],
    correctAnswer: 'Exports',
    explanation: 'Section 16 IGST: Zero-rated = exports + supplies to SEZ. ITC available.',
    difficulty: 'easy', points: 10, tags: ['zero-rated', 'export']
  },
  {
    id: 'q21a', moduleId: 'igst-act', chapterId: 101, sectionId: 'igst-sec-2',
    question: 'Export of services requires:',
    type: 'multiple-choice',
    options: ['Supplier in India, recipient outside India', 'Payment in foreign currency', 'Both of the above', 'None of the above'],
    correctAnswer: 'Both of the above',
    explanation: 'Section 2(6) IGST: Export of services = supplier in India, recipient outside India, AND payment in convertible foreign exchange.',
    difficulty: 'medium', points: 15, tags: ['export', 'services', 'definitions']
  },
  {
    id: 'q21b', moduleId: 'igst-act', chapterId: 102, sectionId: 'igst-sec-5',
    question: 'IGST is applicable on:',
    type: 'multiple-choice',
    options: ['Intra-state supplies only', 'Inter-state supplies and imports', 'Exports only', 'Exempt supplies'],
    correctAnswer: 'Inter-state supplies and imports',
    explanation: 'Section 5 IGST: IGST levied on all inter-state supplies and imports (in addition to customs duty).',
    difficulty: 'easy', points: 10, tags: ['IGST', 'levy', 'inter-state']
  },
  {
    id: 'q21c', moduleId: 'igst-act', chapterId: 103, sectionId: 'igst-sec-7',
    question: 'Inter-state supply means:',
    type: 'multiple-choice',
    options: ['Supply within same state', 'Supply between different states/UTs', 'Supply to SEZ', 'Export supply'],
    correctAnswer: 'Supply between different states/UTs',
    explanation: 'Section 7 IGST: Inter-state supply = location of supplier and place of supply are in different states/UTs.',
    difficulty: 'easy', points: 10, tags: ['inter-state', 'supply', 'definitions']
  },
  {
    id: 'q21d', moduleId: 'igst-act', chapterId: 104, sectionId: 'igst-sec-10',
    question: 'Place of supply for goods with movement is:',
    type: 'multiple-choice',
    options: ['Location of supplier', 'Location of recipient', 'Where movement terminates', 'Origin location'],
    correctAnswer: 'Where movement terminates',
    explanation: 'Section 10 IGST: For goods with movement, POS is location where movement terminates for delivery.',
    difficulty: 'medium', points: 15, tags: ['place of supply', 'goods', 'movement']
  },
  {
    id: 'q21e', moduleId: 'igst-act', chapterId: 104, sectionId: 'igst-sec-13',
    question: 'Place of supply for OIDAR services to unregistered person is:',
    type: 'multiple-choice',
    options: ['Location of supplier', 'Location of recipient', 'Location of intermediary', 'Location of access'],
    correctAnswer: 'Location of recipient',
    explanation: 'Section 13(12) IGST: OIDAR services to unregistered person - POS is location of recipient (if available) or location of access.',
    difficulty: 'medium', points: 15, tags: ['OIDAR', 'place of supply', 'services']
  },
  {
    id: 'q21f', moduleId: 'igst-act', chapterId: 105, sectionId: 'igst-sec-16',
    question: 'ITC is available for zero-rated supplies.',
    type: 'true-false', correctAnswer: true,
    explanation: 'Section 16 IGST: Zero-rated supplies (exports, SEZ) allow full ITC on inputs, unlike exempt supplies.',
    difficulty: 'easy', points: 10, tags: ['zero-rated', 'ITC', 'export']
  },
  {
    id: 'q21g', moduleId: 'igst-act', chapterId: 103, sectionId: 'igst-sec-8',
    question: 'Supply to SEZ is treated as:',
    type: 'multiple-choice',
    options: ['Intra-state supply', 'Inter-state supply', 'Zero-rated supply', 'Exempt supply'],
    correctAnswer: 'Zero-rated supply',
    explanation: 'Section 8 IGST: Supply to SEZ developer/unit is zero-rated supply. ITC available.',
    difficulty: 'medium', points: 15, tags: ['SEZ', 'zero-rated', 'supply']
  },
  // UTGST Act Questions (UTGST is similar to CGST but for Union Territories)
  {
    id: 'q26', moduleId: 'cgst-act', chapterId: 3, sectionId: 'sec-8',
    question: 'For intra-state supplies in Union Territories, which taxes apply?',
    type: 'multiple-choice',
    options: ['CGST + SGST', 'CGST + UTGST', 'IGST only', 'CGST only'],
    correctAnswer: 'CGST + UTGST',
    explanation: 'In Union Territories, intra-state supplies attract CGST + UTGST (instead of CGST + SGST). UTGST Act mirrors CGST Act provisions.',
    difficulty: 'easy', points: 10, tags: ['UTGST', 'intra-state', 'union territory']
  },
  {
    id: 'q27', moduleId: 'cgst-act', chapterId: 3, sectionId: 'sec-8',
    question: 'UTGST Act provisions are identical to CGST Act.',
    type: 'true-false', correctAnswer: true,
    explanation: 'UTGST Act mirrors CGST Act provisions. All CGST Act sections apply to UTGST Act as well, just for Union Territories.',
    difficulty: 'easy', points: 10, tags: ['UTGST', 'CGST', 'union territory']
  },
  // IGST Rules Questions
  {
    id: 'q28', moduleId: 'cgst-rules', chapterId: 208, sectionId: 'rule-138',
    question: 'E-way bill rules apply to both CGST and IGST supplies.',
    type: 'true-false', correctAnswer: true,
    explanation: 'E-way bill rules (Rule 138) apply uniformly for both intra-state (CGST) and inter-state (IGST) supplies when value exceeds ₹50,000.',
    difficulty: 'easy', points: 10, tags: ['e-way bill', 'IGST', 'rules']
  },
  {
    id: 'q29', moduleId: 'cgst-rules', chapterId: 205, sectionId: 'rule-48',
    question: 'E-invoicing requirements apply to inter-state supplies (IGST) as well.',
    type: 'true-false', correctAnswer: true,
    explanation: 'E-invoicing (Rule 48) applies to all taxable supplies, whether intra-state (CGST+SGST/UTGST) or inter-state (IGST), for businesses with turnover > ₹5 crore.',
    difficulty: 'medium', points: 15, tags: ['e-invoicing', 'IGST', 'rules']
  },
  {
    id: 'q30', moduleId: 'igst-act', chapterId: 104, sectionId: 'igst-sec-12',
    question: 'Place of supply rules determine whether CGST+SGST or IGST applies.',
    type: 'true-false', correctAnswer: true,
    explanation: 'Place of supply rules (IGST Act Sections 10-13) determine if supply is intra-state (CGST+SGST/UTGST) or inter-state (IGST).',
    difficulty: 'medium', points: 15, tags: ['place of supply', 'IGST', 'CGST', 'rules']
  },
  // Rules Questions
  {
    id: 'q22', moduleId: 'cgst-rules', chapterId: 208, sectionId: 'rule-138',
    question: 'E-way bill is required for goods value exceeding:',
    type: 'multiple-choice',
    options: ['₹25,000', '₹50,000', '₹75,000', '₹1,00,000'],
    correctAnswer: '₹50,000',
    explanation: 'Rule 138: E-way bill mandatory for consignment value > ₹50,000.',
    difficulty: 'easy', points: 10, tags: ['e-way bill', 'threshold']
  },
  {
    id: 'q23', moduleId: 'cgst-rules', chapterId: 208, sectionId: 'rule-138d',
    question: 'E-way bill validity for 300 km (regular cargo) is:',
    type: 'multiple-choice',
    options: ['1 day', '2 days', '3 days', '4 days'],
    correctAnswer: '3 days',
    explanation: 'Rule 138(10): 100 km or part per day. 300 km = 3 days validity.',
    difficulty: 'medium', points: 15, tags: ['e-way bill', 'validity']
  },
  {
    id: 'q24', moduleId: 'cgst-rules', chapterId: 205, sectionId: 'rule-48',
    question: 'E-invoicing is mandatory for turnover exceeding:',
    type: 'multiple-choice',
    options: ['₹5 crore', '₹10 crore', '₹20 crore', '₹50 crore'],
    correctAnswer: '₹5 crore',
    explanation: 'Rule 48: E-invoicing mandatory for aggregate turnover > ₹5 crore.',
    difficulty: 'medium', points: 15, tags: ['e-invoicing', 'threshold']
  },
  {
    id: 'q25', moduleId: 'cgst-rules', chapterId: 204, sectionId: 'rule-37',
    question: 'ITC reversal is required if supplier not paid within:',
    type: 'multiple-choice',
    options: ['90 days', '120 days', '150 days', '180 days'],
    correctAnswer: '180 days',
    explanation: 'Rule 37: Reverse ITC if payment not made within 180 days.',
    difficulty: 'medium', points: 15, tags: ['ITC reversal', 'payment']
  },
  // Additional CGST Act Questions - Time of Supply
  {
    id: 'q31', moduleId: 'cgst-act', chapterId: 4, sectionId: 'sec-12',
    question: 'Time of supply for goods is the earlier of:',
    type: 'multiple-choice',
    options: ['Date of invoice and date of payment', 'Date of removal and date of invoice', 'Date of invoice, last date to issue invoice, or date of payment', 'Date of delivery only'],
    correctAnswer: 'Date of invoice, last date to issue invoice, or date of payment',
    explanation: 'Section 12: Time of supply for goods is the earlier of: date of invoice, last date to issue invoice, or date of payment.',
    difficulty: 'medium', points: 15, tags: ['time of supply', 'goods']
  },
  {
    id: 'q32', moduleId: 'cgst-act', chapterId: 4, sectionId: 'sec-13',
    question: 'For services, if invoice is issued within prescribed time, time of supply is:',
    type: 'multiple-choice',
    options: ['Date of service', 'Earlier of invoice date or payment date', 'Date of payment only', 'Due date of invoice'],
    correctAnswer: 'Earlier of invoice date or payment date',
    explanation: 'Section 13: For services, if invoice issued within time, time of supply is earlier of invoice date or payment date.',
    difficulty: 'medium', points: 15, tags: ['time of supply', 'services']
  },
  {
    id: 'q33', moduleId: 'cgst-act', chapterId: 4, sectionId: 'sec-15',
    question: 'Value of taxable supply includes:',
    type: 'multiple-choice',
    options: ['GST amount', 'Discount shown in invoice', 'Packing charges', 'All of the above'],
    correctAnswer: 'Packing charges',
    explanation: 'Section 15: Value includes packing, transport, insurance charged by supplier. Excludes GST and discounts shown in invoice.',
    difficulty: 'medium', points: 15, tags: ['valuation', 'taxable value']
  },
  // ITC Additional Questions
  {
    id: 'q34', moduleId: 'cgst-act', chapterId: 5, sectionId: 'sec-16',
    question: 'ITC can be claimed until:',
    type: 'multiple-choice',
    options: ['30th September of next FY', '30th November of next FY', '31st December of next FY', '31st March of next FY'],
    correctAnswer: '30th November of next FY',
    explanation: 'Section 16(4): ITC must be claimed by 30th November of following financial year or date of filing annual return, whichever is earlier.',
    difficulty: 'easy', points: 10, tags: ['ITC', 'time limit']
  },
  {
    id: 'q35', moduleId: 'cgst-act', chapterId: 5, sectionId: 'sec-17',
    question: 'ITC is blocked on:',
    type: 'multiple-choice',
    options: ['Motor vehicles for transportation of goods', 'Food and beverages for employees', 'Works contract for construction of factory', 'All of the above'],
    correctAnswer: 'Food and beverages for employees',
    explanation: 'Section 17(5): ITC blocked on food, beverages, outdoor catering. ITC available for motor vehicles used for transportation of goods and works contract for construction of factory.',
    difficulty: 'hard', points: 20, tags: ['blocked credit', 'ITC']
  },
  {
    id: 'q36', moduleId: 'cgst-act', chapterId: 5, sectionId: 'sec-18',
    question: 'ITC on inputs in stock can be claimed when:',
    type: 'multiple-choice',
    options: ['Registering for GST', 'Switching from composition to normal', 'Exempt supply becomes taxable', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Section 18: ITC available on inputs in stock in special circumstances: registration, switching schemes, exempt becoming taxable.',
    difficulty: 'medium', points: 15, tags: ['ITC', 'special circumstances']
  },
  {
    id: 'q37', moduleId: 'cgst-act', chapterId: 5, sectionId: 'sec-19',
    question: 'Inputs sent for job work must be returned within:',
    type: 'multiple-choice',
    options: ['6 months', '1 year', '18 months', '2 years'],
    correctAnswer: '1 year',
    explanation: 'Section 19: Inputs sent for job work must be returned within 1 year, capital goods within 3 years.',
    difficulty: 'easy', points: 10, tags: ['job work', 'ITC']
  },
  // Tax Invoice Questions
  {
    id: 'q38', moduleId: 'cgst-act', chapterId: 7, sectionId: 'sec-31',
    question: 'Tax invoice for goods must be issued:',
    type: 'multiple-choice',
    options: ['Before removal', 'At time of removal', 'Before or at time of removal', 'Within 30 days of removal'],
    correctAnswer: 'Before or at time of removal',
    explanation: 'Section 31: Tax invoice for goods must be issued before or at time of removal/delivery.',
    difficulty: 'easy', points: 10, tags: ['tax invoice', 'goods']
  },
  {
    id: 'q39', moduleId: 'cgst-act', chapterId: 7, sectionId: 'sec-34',
    question: 'Credit note can be issued until:',
    type: 'multiple-choice',
    options: ['30th September', '30th November', '31st December', 'End of financial year'],
    correctAnswer: '30th November',
    explanation: 'Section 34: Credit/debit notes must be issued by 30th November of following financial year or date of filing annual return.',
    difficulty: 'medium', points: 15, tags: ['credit note', 'time limit']
  },
  // Returns Questions
  {
    id: 'q40', moduleId: 'cgst-act', chapterId: 9, sectionId: 'sec-37',
    question: 'GSTR-1 is filed:',
    type: 'multiple-choice',
    options: ['Monthly', 'Quarterly for small taxpayers', 'Both monthly and quarterly', 'Annually'],
    correctAnswer: 'Both monthly and quarterly',
    explanation: 'Section 37: GSTR-1 is monthly for large taxpayers, quarterly for small taxpayers (turnover ≤ ₹5 crore) under QRMP scheme.',
    difficulty: 'medium', points: 15, tags: ['GSTR-1', 'returns']
  },
  {
    id: 'q41', moduleId: 'cgst-act', chapterId: 9, sectionId: 'sec-38',
    question: 'GSTR-2B is:',
    type: 'multiple-choice',
    options: ['Filed by recipient', 'Auto-generated from GSTR-1', 'Filed by supplier', 'Filed monthly'],
    correctAnswer: 'Auto-generated from GSTR-1',
    explanation: 'Section 38: GSTR-2B is auto-generated statement from suppliers GSTR-1, available by 14th of next month.',
    difficulty: 'easy', points: 10, tags: ['GSTR-2B', 'auto-generated']
  },
  {
    id: 'q42', moduleId: 'cgst-act', chapterId: 9, sectionId: 'sec-39',
    question: 'GSTR-3B is due on:',
    type: 'multiple-choice',
    options: ['11th', '13th', '20th', '25th'],
    correctAnswer: '20th',
    explanation: 'Section 39: GSTR-3B (summary return) is due on 20th of following month for monthly filers.',
    difficulty: 'easy', points: 10, tags: ['GSTR-3B', 'due date']
  },
  {
    id: 'q43', moduleId: 'cgst-act', chapterId: 9, sectionId: 'sec-44',
    question: 'GSTR-9 Annual Return is due by:',
    type: 'multiple-choice',
    options: ['30th September', '31st October', '30th November', '31st December'],
    correctAnswer: '31st December',
    explanation: 'Section 44: Annual return (GSTR-9) must be filed by 31st December of following financial year.',
    difficulty: 'easy', points: 10, tags: ['GSTR-9', 'annual return']
  },
  // Payment Questions
  {
    id: 'q44', moduleId: 'cgst-act', chapterId: 10, sectionId: 'sec-49',
    question: 'Electronic Credit Ledger contains:',
    type: 'multiple-choice',
    options: ['ITC available', 'Cash deposited', 'Tax payable', 'All of the above'],
    correctAnswer: 'ITC available',
    explanation: 'Section 49: Electronic Credit Ledger contains ITC available. Cash Ledger contains cash deposits. Liability Ledger contains tax payable.',
    difficulty: 'easy', points: 10, tags: ['electronic ledger', 'ITC']
  },
  {
    id: 'q45', moduleId: 'cgst-act', chapterId: 10, sectionId: 'sec-50',
    question: 'Interest rate for excess ITC claim is:',
    type: 'multiple-choice',
    options: ['12%', '18%', '24%', '30%'],
    correctAnswer: '24%',
    explanation: 'Section 50: Interest at 18% for delayed payment, 24% for excess/undue ITC claim.',
    difficulty: 'medium', points: 15, tags: ['interest', 'ITC']
  },
  {
    id: 'q46', moduleId: 'cgst-act', chapterId: 10, sectionId: 'sec-51',
    question: 'TDS is applicable on contracts exceeding:',
    type: 'multiple-choice',
    options: ['₹1 lakh', '₹2 lakhs', '₹2.5 lakhs', '₹5 lakhs'],
    correctAnswer: '₹2.5 lakhs',
    explanation: 'Section 51: TDS at 2% applicable on payments > ₹2.5 lakhs per contract for government/PSU contracts.',
    difficulty: 'easy', points: 10, tags: ['TDS', 'threshold']
  },
  {
    id: 'q47', moduleId: 'cgst-act', chapterId: 10, sectionId: 'sec-52',
    question: 'TCS is collected by:',
    type: 'multiple-choice',
    options: ['E-commerce operators', 'Government', 'Suppliers', 'Recipients'],
    correctAnswer: 'E-commerce operators',
    explanation: 'Section 52: E-commerce operators collect TCS at 1% on net value of taxable supplies made through their platform.',
    difficulty: 'easy', points: 10, tags: ['TCS', 'e-commerce']
  },
  // Refund Questions
  {
    id: 'q48', moduleId: 'cgst-act', chapterId: 11, sectionId: 'sec-54',
    question: 'Refund application must be filed within:',
    type: 'multiple-choice',
    options: ['1 year', '2 years', '3 years', 'No time limit'],
    correctAnswer: '2 years',
    explanation: 'Section 54: Refund application must be filed within 2 years from relevant date.',
    difficulty: 'medium', points: 15, tags: ['refund', 'time limit']
  },
  {
    id: 'q49', moduleId: 'cgst-act', chapterId: 11, sectionId: 'sec-54',
    question: 'Refund can be claimed for:',
    type: 'multiple-choice',
    options: ['Exports', 'Inverted duty structure', 'Excess payment', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Section 54: Refund available for exports, inverted duty structure, excess payment, and other specified cases.',
    difficulty: 'easy', points: 10, tags: ['refund', 'eligibility']
  },
  // Assessment Questions
  {
    id: 'q50', moduleId: 'cgst-act', chapterId: 12, sectionId: 'sec-59',
    question: 'Primary mode of assessment under GST is:',
    type: 'multiple-choice',
    options: ['Provisional assessment', 'Self-assessment', 'Best judgment assessment', 'Scrutiny assessment'],
    correctAnswer: 'Self-assessment',
    explanation: 'Section 59: Every registered person self-assesses tax payable in return. This is the primary mode.',
    difficulty: 'easy', points: 10, tags: ['assessment', 'self-assessment']
  },
  {
    id: 'q51', moduleId: 'cgst-act', chapterId: 12, sectionId: 'sec-60',
    question: 'Provisional assessment finalization time limit is:',
    type: 'multiple-choice',
    options: ['3 months', '6 months', '9 months', '1 year'],
    correctAnswer: '6 months',
    explanation: 'Section 60: Provisional assessment must be finalized within 6 months (extendable by 6 months).',
    difficulty: 'medium', points: 15, tags: ['provisional assessment', 'time limit']
  },
  {
    id: 'q52', moduleId: 'cgst-act', chapterId: 12, sectionId: 'sec-62',
    question: 'Best judgment assessment is done when:',
    type: 'multiple-choice',
    options: ['Return not filed', 'Value cannot be determined', 'Return has discrepancies', 'All of the above'],
    correctAnswer: 'Return not filed',
    explanation: 'Section 62: Best judgment assessment done when return not filed despite notice.',
    difficulty: 'medium', points: 15, tags: ['best judgment', 'assessment']
  },
  // Audit Questions
  {
    id: 'q53', moduleId: 'cgst-act', chapterId: 13, sectionId: 'sec-65',
    question: 'GST audit is mandatory for turnover exceeding:',
    type: 'multiple-choice',
    options: ['₹1 crore', '₹2 crore', '₹5 crore', '₹10 crore'],
    correctAnswer: '₹2 crore',
    explanation: 'Section 35: GST audit mandatory for aggregate turnover > ₹2 crore. Audit report in GSTR-9C.',
    difficulty: 'easy', points: 10, tags: ['audit', 'threshold']
  },
  {
    id: 'q54', moduleId: 'cgst-act', chapterId: 13, sectionId: 'sec-65',
    question: 'GST audit report is filed in:',
    type: 'multiple-choice',
    options: ['GSTR-9', 'GSTR-9C', 'GSTR-3B', 'GSTR-1'],
    correctAnswer: 'GSTR-9C',
    explanation: 'Section 35: GST audit report and reconciliation statement filed in GSTR-9C.',
    difficulty: 'easy', points: 10, tags: ['audit', 'GSTR-9C']
  },
  // Inspection, Search, Seizure Questions
  {
    id: 'q55', moduleId: 'cgst-act', chapterId: 14, sectionId: 'sec-67',
    question: 'Authorized officer can inspect premises with:',
    type: 'multiple-choice',
    options: ['Written authorization', 'Oral permission', 'Without authorization', 'Court order'],
    correctAnswer: 'Written authorization',
    explanation: 'Section 67: Authorized officer can inspect premises with written authorization from Joint Commissioner or above.',
    difficulty: 'medium', points: 15, tags: ['inspection', 'powers']
  },
  // Demands and Recovery Questions
  {
    id: 'q56', moduleId: 'cgst-act', chapterId: 15, sectionId: 'sec-73',
    question: 'Time limit for SCN under Section 73 (non-fraud) is:',
    type: 'multiple-choice',
    options: ['2 years', '3 years', '5 years', '7 years'],
    correctAnswer: '3 years',
    explanation: 'Section 73: Show cause notice for non-fraud cases within 3 years from due date of annual return.',
    difficulty: 'medium', points: 15, tags: ['SCN', 'time limit', 'section 73']
  },
  {
    id: 'q57', moduleId: 'cgst-act', chapterId: 15, sectionId: 'sec-74',
    question: 'Time limit for SCN under Section 74 (fraud) is:',
    type: 'multiple-choice',
    options: ['3 years', '5 years', '6 years', '7 years'],
    correctAnswer: '5 years',
    explanation: 'Section 74: Show cause notice for fraud/suppression cases within 5 years from due date of annual return.',
    difficulty: 'medium', points: 15, tags: ['SCN', 'fraud', 'section 74']
  },
  {
    id: 'q58', moduleId: 'cgst-act', chapterId: 15, sectionId: 'sec-74',
    question: 'Penalty in fraud cases (Section 74) is:',
    type: 'multiple-choice',
    options: ['10%', '25%', '50%', '100%'],
    correctAnswer: '100%',
    explanation: 'Section 74: Penalty equal to tax amount (100%) for fraud, suppression, misstatement cases.',
    difficulty: 'medium', points: 15, tags: ['penalty', 'fraud']
  },
  // Liability to Pay Questions
  {
    id: 'q59', moduleId: 'cgst-act', chapterId: 16, sectionId: 'sec-76',
    question: 'Tax collected but not paid attracts:',
    type: 'multiple-choice',
    options: ['Tax + interest', 'Tax + interest + penalty', 'Only penalty', 'No consequences'],
    correctAnswer: 'Tax + interest + penalty',
    explanation: 'Section 76: Tax collected but not paid attracts tax + interest + penalty equal to tax amount.',
    difficulty: 'medium', points: 15, tags: ['tax collected', 'penalty']
  },
  // Advance Ruling Questions
  {
    id: 'q60', moduleId: 'cgst-act', chapterId: 17, sectionId: 'sec-95',
    question: 'Advance ruling can be sought by:',
    type: 'multiple-choice',
    options: ['Registered persons only', 'Unregistered persons', 'Both registered and unregistered', 'Government only'],
    correctAnswer: 'Both registered and unregistered',
    explanation: 'Section 95: Advance ruling can be sought by registered persons, unregistered persons, and government departments.',
    difficulty: 'easy', points: 10, tags: ['advance ruling', 'eligibility']
  },
  // Appeals Questions
  {
    id: 'q61', moduleId: 'cgst-act', chapterId: 18, sectionId: 'sec-107',
    question: 'First appeal is filed with:',
    type: 'multiple-choice',
    options: ['Appellate Authority', 'Appellate Tribunal', 'High Court', 'Supreme Court'],
    correctAnswer: 'Appellate Authority',
    explanation: 'Section 107: First appeal against order of adjudicating authority filed with Appellate Authority (Joint/Additional Commissioner).',
    difficulty: 'easy', points: 10, tags: ['appeal', 'appellate authority']
  },
  {
    id: 'q62', moduleId: 'cgst-act', chapterId: 18, sectionId: 'sec-107',
    question: 'Pre-deposit for first appeal is:',
    type: 'multiple-choice',
    options: ['5%', '10%', '15%', '20%'],
    correctAnswer: '10%',
    explanation: 'Section 107(6): 10% pre-deposit (max ₹25 crore) required for first appeal.',
    difficulty: 'medium', points: 15, tags: ['appeal', 'pre-deposit']
  },
  {
    id: 'q63', moduleId: 'cgst-act', chapterId: 18, sectionId: 'sec-112',
    question: 'Appeal to Appellate Tribunal requires pre-deposit of:',
    type: 'multiple-choice',
    options: ['10%', '20%', '25%', 'Full amount'],
    correctAnswer: '20%',
    explanation: 'Section 112: Appeal to Appellate Tribunal requires 20% pre-deposit (max ₹50 crore).',
    difficulty: 'medium', points: 15, tags: ['tribunal', 'pre-deposit']
  },
  // Offences and Penalties Questions
  {
    id: 'q64', moduleId: 'cgst-act', chapterId: 19, sectionId: 'sec-122',
    question: 'Penalty for issuing invoice without supply is:',
    type: 'multiple-choice',
    options: ['₹10,000', '₹25,000', '₹50,000', '₹1,00,000'],
    correctAnswer: '₹25,000',
    explanation: 'Section 122: Penalty ₹25,000 for issuing invoice without supply of goods/services.',
    difficulty: 'medium', points: 15, tags: ['penalty', 'invoice']
  },
  {
    id: 'q65', moduleId: 'cgst-act', chapterId: 19, sectionId: 'sec-122',
    question: 'Penalty for collecting tax without registration is:',
    type: 'multiple-choice',
    options: ['₹10,000', 'Equal to tax collected', '₹25,000', 'Both tax and ₹25,000'],
    correctAnswer: 'Equal to tax collected',
    explanation: 'Section 122: Penalty equal to tax collected for collecting tax without being registered.',
    difficulty: 'medium', points: 15, tags: ['penalty', 'registration']
  },
  // Transitional Provisions Questions
  {
    id: 'q66', moduleId: 'cgst-act', chapterId: 20, sectionId: 'sec-140',
    question: 'ITC on closing stock under old law can be claimed if:',
    type: 'multiple-choice',
    options: ['Registered under old law', 'Not exempt under old law', 'Eligible for ITC under old law', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Section 140: ITC on closing stock available if registered under old law, not exempt, and eligible for ITC.',
    difficulty: 'hard', points: 20, tags: ['transitional', 'ITC', 'old law']
  },
  // CGST Rules Additional Questions
  {
    id: 'q67', moduleId: 'cgst-rules', chapterId: 201, sectionId: 'rule-3',
    question: 'Composition scheme can be opted:',
    type: 'multiple-choice',
    options: ['Any time during year', 'Only at beginning of FY', 'Mid-year with permission', 'Never'],
    correctAnswer: 'Only at beginning of FY',
    explanation: 'Rule 3: Composition scheme intimation (CMP-02) effective from beginning of financial year. Cannot opt mid-year.',
    difficulty: 'easy', points: 10, tags: ['composition', 'rules']
  },
  {
    id: 'q68', moduleId: 'cgst-rules', chapterId: 202, sectionId: 'rule-8',
    question: 'Registration application (REG-01) must be filed within:',
    type: 'multiple-choice',
    options: ['15 days', '30 days', '45 days', '60 days'],
    correctAnswer: '30 days',
    explanation: 'Rule 8: Application for registration (REG-01) must be filed within 30 days from date of becoming liable.',
    difficulty: 'easy', points: 10, tags: ['registration', 'rules']
  },
  {
    id: 'q69', moduleId: 'cgst-rules', chapterId: 202, sectionId: 'rule-21',
    question: 'Registration can be cancelled for:',
    type: 'multiple-choice',
    options: ['Non-filing of returns', 'Fraudulent registration', 'Business discontinued', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Rule 21: Registration cancelled for non-filing, fraud, business discontinuation, and other specified reasons.',
    difficulty: 'easy', points: 10, tags: ['registration cancellation', 'rules']
  },
  {
    id: 'q70', moduleId: 'cgst-rules', chapterId: 203, sectionId: 'rule-27',
    question: 'Valuation rules apply when:',
    type: 'multiple-choice',
    options: ['Supplier and recipient are related', 'Price not sole consideration', 'Transaction value not available', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Rule 27-35: Valuation rules apply when parties related, price not sole consideration, or transaction value not available.',
    difficulty: 'hard', points: 20, tags: ['valuation', 'rules']
  },
  {
    id: 'q71', moduleId: 'cgst-rules', chapterId: 204, sectionId: 'rule-36',
    question: 'ITC can be claimed up to:',
    type: 'multiple-choice',
    options: ['100% of eligible ITC', '105% of eligible ITC', '110% of eligible ITC', '120% of eligible ITC'],
    correctAnswer: '105% of eligible ITC',
    explanation: 'Rule 36: ITC can be claimed up to 105% of eligible ITC appearing in GSTR-2B (to account for minor discrepancies).',
    difficulty: 'hard', points: 20, tags: ['ITC', 'rules', 'GSTR-2B']
  },
  {
    id: 'q72', moduleId: 'cgst-rules', chapterId: 204, sectionId: 'rule-38',
    question: 'ITC reversal on exempt supplies is calculated:',
    type: 'multiple-choice',
    options: ['Proportionately', 'Full reversal', 'No reversal', 'As per formula'],
    correctAnswer: 'Proportionately',
    explanation: 'Rule 38: ITC reversal for exempt supplies calculated proportionately based on exempt turnover to total turnover.',
    difficulty: 'hard', points: 20, tags: ['ITC reversal', 'exempt supplies']
  },
  {
    id: 'q73', moduleId: 'cgst-rules', chapterId: 205, sectionId: 'rule-46',
    question: 'Tax invoice must contain:',
    type: 'multiple-choice',
    options: ['GSTIN of supplier', 'HSN code for goods', 'Tax amount separately', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Rule 46: Tax invoice must contain GSTIN, HSN/SAC code, tax amount separately, and other prescribed details.',
    difficulty: 'easy', points: 10, tags: ['tax invoice', 'rules']
  },
  {
    id: 'q74', moduleId: 'cgst-rules', chapterId: 205, sectionId: 'rule-48',
    question: 'E-invoicing applies to businesses with turnover exceeding:',
    type: 'multiple-choice',
    options: ['₹1 crore', '₹5 crore', '₹10 crore', '₹20 crore'],
    correctAnswer: '₹5 crore',
    explanation: 'Rule 48: E-invoicing mandatory for aggregate turnover > ₹5 crore (reduced from ₹10 crore).',
    difficulty: 'easy', points: 10, tags: ['e-invoicing', 'threshold']
  },
  {
    id: 'q75', moduleId: 'cgst-rules', chapterId: 206, sectionId: 'rule-59',
    question: 'GSTR-1 can be filed:',
    type: 'multiple-choice',
    options: ['Monthly', 'Quarterly', 'Both monthly and quarterly', 'Annually'],
    correctAnswer: 'Both monthly and quarterly',
    explanation: 'Rule 59: GSTR-1 monthly for large taxpayers, quarterly for small taxpayers (turnover ≤ ₹5 crore) under QRMP.',
    difficulty: 'medium', points: 15, tags: ['GSTR-1', 'filing']
  },
  {
    id: 'q76', moduleId: 'cgst-rules', chapterId: 207, sectionId: 'rule-89',
    question: 'Refund application is filed in:',
    type: 'multiple-choice',
    options: ['GSTR-9', 'RFD-01', 'GSTR-3B', 'GSTR-1'],
    correctAnswer: 'RFD-01',
    explanation: 'Rule 89: Refund application filed in Form RFD-01 electronically.',
    difficulty: 'easy', points: 10, tags: ['refund', 'RFD-01']
  },
  {
    id: 'q77', moduleId: 'cgst-rules', chapterId: 208, sectionId: 'rule-138',
    question: 'E-way bill is not required for:',
    type: 'multiple-choice',
    options: ['Goods value < ₹50,000', 'Non-motorized conveyance', 'Specified goods', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Rule 138: E-way bill not required for goods value < ₹50,000, non-motorized conveyance, and specified exempt goods.',
    difficulty: 'medium', points: 15, tags: ['e-way bill', 'exemptions']
  },
  {
    id: 'q78', moduleId: 'cgst-rules', chapterId: 208, sectionId: 'rule-138',
    question: 'E-way bill validity for over-dimensional cargo is:',
    type: 'multiple-choice',
    options: ['1 day for 20 km', '1 day for 50 km', '1 day for 100 km', 'No validity'],
    correctAnswer: '1 day for 20 km',
    explanation: 'Rule 138(10): E-way bill validity for over-dimensional cargo is 1 day for 20 km or part thereof.',
    difficulty: 'hard', points: 20, tags: ['e-way bill', 'validity', 'over-dimensional']
  },
  // IGST Act Additional Questions
  {
    id: 'q79', moduleId: 'igst-act', chapterId: 101, sectionId: 'igst-sec-2',
    question: 'OIDAR services means:',
    type: 'multiple-choice',
    options: ['Online Information Database Access Retrieval', 'Offline Information Database Access Retrieval', 'Online Information Database Access Record', 'Online Information Data Access Retrieval'],
    correctAnswer: 'Online Information Database Access Retrieval',
    explanation: 'Section 2(17) IGST: OIDAR = Online Information and Database Access or Retrieval services.',
    difficulty: 'medium', points: 15, tags: ['OIDAR', 'definitions']
  },
  {
    id: 'q80', moduleId: 'igst-act', chapterId: 102, sectionId: 'igst-sec-5',
    question: 'IGST maximum rate is:',
    type: 'multiple-choice',
    options: ['20%', '30%', '40%', '50%'],
    correctAnswer: '40%',
    explanation: 'Section 5 IGST: IGST rate not exceeding 40% (20% CGST + 20% SGST equivalent).',
    difficulty: 'easy', points: 10, tags: ['IGST', 'rate']
  },
  {
    id: 'q81', moduleId: 'igst-act', chapterId: 103, sectionId: 'igst-sec-7',
    question: 'Supply to SEZ is always:',
    type: 'multiple-choice',
    options: ['Intra-state', 'Inter-state', 'Exempt', 'Zero-rated'],
    correctAnswer: 'Inter-state',
    explanation: 'Section 7 IGST: Supply to SEZ developer/unit is treated as inter-state supply, hence IGST applies.',
    difficulty: 'medium', points: 15, tags: ['SEZ', 'inter-state']
  },
  {
    id: 'q82', moduleId: 'igst-act', chapterId: 104, sectionId: 'igst-sec-10',
    question: 'Place of supply for goods without movement is:',
    type: 'multiple-choice',
    options: ['Location of supplier', 'Location of recipient', 'Location at time of delivery', 'Origin location'],
    correctAnswer: 'Location at time of delivery',
    explanation: 'Section 10 IGST: For goods without movement, POS is location of goods at time of delivery to recipient.',
    difficulty: 'medium', points: 15, tags: ['place of supply', 'goods']
  },
  {
    id: 'q83', moduleId: 'igst-act', chapterId: 104, sectionId: 'igst-sec-12',
    question: 'Place of supply for immovable property services is:',
    type: 'multiple-choice',
    options: ['Location of supplier', 'Location of recipient', 'Location of property', 'Either location'],
    correctAnswer: 'Location of property',
    explanation: 'Section 12(3) IGST: POS for immovable property services is location of immovable property.',
    difficulty: 'easy', points: 10, tags: ['place of supply', 'immovable property']
  },
  {
    id: 'q84', moduleId: 'igst-act', chapterId: 104, sectionId: 'igst-sec-12',
    question: 'Place of supply for restaurant services is:',
    type: 'multiple-choice',
    options: ['Location of restaurant', 'Location of recipient', 'Location of service', 'Either location'],
    correctAnswer: 'Location of restaurant',
    explanation: 'Section 12(3) IGST: POS for restaurant services is location where restaurant is located.',
    difficulty: 'medium', points: 15, tags: ['place of supply', 'restaurant']
  },
  {
    id: 'q85', moduleId: 'igst-act', chapterId: 104, sectionId: 'igst-sec-13',
    question: 'Place of supply for intermediary services is:',
    type: 'multiple-choice',
    options: ['Location of supplier', 'Location of recipient', 'Location of intermediary', 'Location of principal'],
    correctAnswer: 'Location of intermediary',
    explanation: 'Section 13(8) IGST: POS for intermediary services is location of intermediary.',
    difficulty: 'hard', points: 20, tags: ['place of supply', 'intermediary']
  },
  {
    id: 'q86', moduleId: 'igst-act', chapterId: 105, sectionId: 'igst-sec-16',
    question: 'Zero-rated supplies include:',
    type: 'multiple-choice',
    options: ['Exports only', 'Exports and SEZ supplies', 'Exempt supplies', 'Composition supplies'],
    correctAnswer: 'Exports and SEZ supplies',
    explanation: 'Section 16 IGST: Zero-rated = export of goods/services + supplies to SEZ developer/unit.',
    difficulty: 'easy', points: 10, tags: ['zero-rated', 'export', 'SEZ']
  },
  {
    id: 'q87', moduleId: 'igst-act', chapterId: 105, sectionId: 'igst-sec-16',
    question: 'For zero-rated supplies, ITC is:',
    type: 'multiple-choice',
    options: ['Not available', 'Available', 'Partially available', 'Subject to conditions'],
    correctAnswer: 'Available',
    explanation: 'Section 16 IGST: Full ITC available for inputs used in zero-rated supplies (exports, SEZ).',
    difficulty: 'easy', points: 10, tags: ['zero-rated', 'ITC']
  },
  // More CGST Act Questions
  {
    id: 'q88', moduleId: 'cgst-act', chapterId: 3, sectionId: 'sec-7',
    question: 'Schedule I covers:',
    type: 'multiple-choice',
    options: ['Supply without consideration', 'Activities as supply', 'Neither goods nor services', 'Exempt supplies'],
    correctAnswer: 'Supply without consideration',
    explanation: 'Section 7: Schedule I lists activities treated as supply even without consideration (e.g., stock transfers, gifts).',
    difficulty: 'hard', points: 20, tags: ['schedule I', 'supply']
  },
  {
    id: 'q89', moduleId: 'cgst-act', chapterId: 3, sectionId: 'sec-7',
    question: 'Schedule II covers:',
    type: 'multiple-choice',
    options: ['Supply without consideration', 'Activities to be treated as supply', 'Neither goods nor services', 'Exempt supplies'],
    correctAnswer: 'Activities to be treated as supply',
    explanation: 'Section 7: Schedule II lists activities to be treated as supply of goods or services (e.g., transfer of business assets).',
    difficulty: 'hard', points: 20, tags: ['schedule II', 'supply']
  },
  {
    id: 'q90', moduleId: 'cgst-act', chapterId: 3, sectionId: 'sec-7',
    question: 'Schedule III covers:',
    type: 'multiple-choice',
    options: ['Supply without consideration', 'Activities as supply', 'Neither goods nor services', 'Exempt supplies'],
    correctAnswer: 'Neither goods nor services',
    explanation: 'Section 7: Schedule III lists activities treated as neither supply of goods nor services (e.g., services by employee to employer).',
    difficulty: 'hard', points: 20, tags: ['schedule III', 'supply']
  },
  {
    id: 'q91', moduleId: 'cgst-act', chapterId: 3, sectionId: 'sec-9',
    question: 'Reverse charge applies when:',
    type: 'multiple-choice',
    options: ['Supplier is unregistered', 'Notified goods/services', 'Both of the above', 'None of the above'],
    correctAnswer: 'Both of the above',
    explanation: 'Section 9(3) & (4): Reverse charge applies for notified goods/services and supplies from unregistered persons.',
    difficulty: 'medium', points: 15, tags: ['reverse charge', 'RCM']
  },
  {
    id: 'q92', moduleId: 'cgst-act', chapterId: 4, sectionId: 'sec-14',
    question: 'If supply made before rate change but invoice after, rate applicable is:',
    type: 'multiple-choice',
    options: ['Old rate', 'New rate', 'Average rate', 'Lower rate'],
    correctAnswer: 'New rate',
    explanation: 'Section 14: If supply made before rate change but invoice/payment after change, new rate applies.',
    difficulty: 'hard', points: 20, tags: ['rate change', 'time of supply']
  },
  {
    id: 'q93', moduleId: 'cgst-act', chapterId: 5, sectionId: 'sec-20',
    question: 'ISD distributes ITC:',
    type: 'multiple-choice',
    options: ['Equally', 'Pro-rata based on turnover', 'As per allocation', 'To head office only'],
    correctAnswer: 'Pro-rata based on turnover',
    explanation: 'Section 20: ISD distributes ITC pro-rata based on turnover of each branch receiving credit.',
    difficulty: 'medium', points: 15, tags: ['ISD', 'ITC distribution']
  },
  {
    id: 'q94', moduleId: 'cgst-act', chapterId: 6, sectionId: 'sec-23',
    question: 'Persons not liable for registration include:',
    type: 'multiple-choice',
    options: ['Agriculturists', 'Persons only making exempt supplies', 'Both of the above', 'None of the above'],
    correctAnswer: 'Both of the above',
    explanation: 'Section 23: Persons not liable for registration include agriculturists and persons only making exempt supplies.',
    difficulty: 'easy', points: 10, tags: ['registration', 'exemptions']
  },
  {
    id: 'q95', moduleId: 'cgst-act', chapterId: 7, sectionId: 'sec-33',
    question: 'Tax amount on invoice must be shown:',
    type: 'multiple-choice',
    options: ['Separately', 'Included in price', 'Either way', 'Not required'],
    correctAnswer: 'Separately',
    explanation: 'Section 33: Tax amount (CGST, SGST/IGST) must be shown separately on invoice.',
    difficulty: 'easy', points: 10, tags: ['tax invoice', 'tax amount']
  },
  {
    id: 'q96', moduleId: 'cgst-act', chapterId: 8, sectionId: 'sec-35',
    question: 'Accounts and records must be maintained:',
    type: 'multiple-choice',
    options: ['At principal place', 'At each place of business', 'Either place', 'As per convenience'],
    correctAnswer: 'At principal place',
    explanation: 'Section 35: Accounts and records must be maintained at principal place of business.',
    difficulty: 'easy', points: 10, tags: ['accounts', 'records']
  },
  {
    id: 'q97', moduleId: 'cgst-act', chapterId: 9, sectionId: 'sec-40',
    question: 'First return is filed:',
    type: 'multiple-choice',
    options: ['Within 30 days', 'Within 60 days', 'Within 90 days', 'No first return'],
    correctAnswer: 'Within 90 days',
    explanation: 'Section 40: First return filed within 90 days from date of registration or date of becoming liable.',
    difficulty: 'medium', points: 15, tags: ['first return', 'returns']
  },
  {
    id: 'q98', moduleId: 'cgst-act', chapterId: 10, sectionId: 'sec-49',
    question: 'ITC can be used to pay:',
    type: 'multiple-choice',
    options: ['Output tax only', 'Output tax, interest, penalty', 'Output tax and interest', 'Any liability'],
    correctAnswer: 'Output tax only',
    explanation: 'Section 49: ITC can be used to pay output tax. Cash required for interest, penalty, fees, and other amounts.',
    difficulty: 'medium', points: 15, tags: ['ITC utilization', 'payment']
  },
  {
    id: 'q99', moduleId: 'cgst-act', chapterId: 11, sectionId: 'sec-55',
    question: 'Refund of tax paid on inward supplies can be claimed by:',
    type: 'multiple-choice',
    options: ['SEZ units', 'Exporters', 'Both of the above', 'None of the above'],
    correctAnswer: 'Both of the above',
    explanation: 'Section 54: Refund available to SEZ units and exporters for tax paid on inward supplies.',
    difficulty: 'medium', points: 15, tags: ['refund', 'SEZ', 'export']
  },
  {
    id: 'q100', moduleId: 'cgst-act', chapterId: 19, sectionId: 'sec-132',
    question: 'Punishment for tax evasion exceeding ₹5 crore is:',
    type: 'multiple-choice',
    options: ['Fine only', 'Imprisonment up to 1 year', 'Imprisonment up to 5 years', 'Imprisonment up to 5 years with fine'],
    correctAnswer: 'Imprisonment up to 5 years with fine',
    explanation: 'Section 132: Tax evasion > ₹5 crore: imprisonment up to 5 years with fine.',
    difficulty: 'hard', points: 20, tags: ['offences', 'punishment', 'evasion']
  }
];

export function generateQuiz(moduleId: string, count: number = 10): QuizQuestion[] {
  const pool = GST_QUESTIONS.filter(q => q.moduleId === moduleId);
  return [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(count, pool.length));
}

export function generateMixedQuiz(count: number = 10, difficulty: string = 'mixed'): QuizQuestion[] {
  // Get all unique module IDs
  const moduleIds = [...new Set(GST_QUESTIONS.map(q => q.moduleId))];
  
  // Filter by difficulty if specified
  let pool = GST_QUESTIONS;
  if (difficulty !== 'mixed') {
    pool = GST_QUESTIONS.filter(q => q.difficulty === difficulty);
  }
  
  // If count is large enough, try to include questions from all modules
  if (count >= moduleIds.length && pool.length >= moduleIds.length) {
    const questions: QuizQuestion[] = [];
    const questionsPerModule = Math.floor(count / moduleIds.length);
    const remaining = count % moduleIds.length;
    
    // Shuffle module IDs to randomize order
    const shuffledModules = [...moduleIds].sort(() => Math.random() - 0.5);
    
    // Get questions from each module
    shuffledModules.forEach((moduleId, index) => {
      const moduleQuestions = pool.filter(q => q.moduleId === moduleId);
      const countForModule = questionsPerModule + (index < remaining ? 1 : 0);
      const selected = [...moduleQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(countForModule, moduleQuestions.length));
      questions.push(...selected);
    });
    
    // Shuffle final result and fill remaining slots if needed
    const shuffled = questions.sort(() => Math.random() - 0.5);
    if (shuffled.length < count) {
      const remainingPool = pool.filter(q => !shuffled.includes(q));
      shuffled.push(...remainingPool.sort(() => Math.random() - 0.5).slice(0, count - shuffled.length));
    }
    
    return shuffled.slice(0, count);
  }
  
  // For smaller counts or if not enough questions, just randomize
  return [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(count, pool.length));
}

export default GST_QUESTIONS;
