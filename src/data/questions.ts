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
  }
];

export function generateQuiz(moduleId: string, count: number = 10): QuizQuestion[] {
  const pool = GST_QUESTIONS.filter(q => q.moduleId === moduleId);
  return [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(count, pool.length));
}

export function generateMixedQuiz(count: number = 10): QuizQuestion[] {
  return [...GST_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, Math.min(count, GST_QUESTIONS.length));
}

export default GST_QUESTIONS;
