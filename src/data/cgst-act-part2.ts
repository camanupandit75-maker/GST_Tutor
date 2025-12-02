// CGST Act Chapters 11-21
// Based on ICAI Publication - November 2025 Edition

export const CGST_ACT_CHAPTERS_PART2 = [
  {
    id: 11, slug: 'refund', title: 'Refund', icon: '💵', category: 'cgst-act' as const,
    description: 'Refund procedures, time limits, and interest on delayed refunds',
    sections: [
      { id: 'sec-54', number: '54', title: 'Refund of tax', description: 'Refund application procedure',
        keyPoints: ['Apply within 2 years from relevant date', 'For exports: refund of IGST or accumulated ITC', 'Inverted duty structure refund', '90% provisional refund for exports within 7 days', 'Balance after verification'],
        difficulty: 'advanced' as const, estimatedMinutes: 50, practicalRelevance: 'high' as const },
      { id: 'sec-55', number: '55', title: 'Refund in certain cases', description: 'Special refund provisions',
        keyPoints: ['UN bodies and diplomatic missions', 'Refund of tax paid on purchases'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'low' as const },
      { id: 'sec-56', number: '56', title: 'Interest on delayed refunds', description: 'Interest for late refund',
        keyPoints: ['6% p.a. if refund not processed within 60 days', 'From date of receipt of application'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'high' as const },
      { id: 'sec-57', number: '57', title: 'Consumer Welfare Fund', description: 'Fund for refund disputes',
        keyPoints: ['Unclaimed refunds credited to Fund', 'Used for consumer welfare'],
        difficulty: 'basic' as const, estimatedMinutes: 10, practicalRelevance: 'low' as const },
      { id: 'sec-58', number: '58', title: 'Utilization of Fund', description: 'How Fund is used',
        keyPoints: ['Consumer welfare activities', 'As directed by government'],
        difficulty: 'basic' as const, estimatedMinutes: 10, practicalRelevance: 'low' as const }
    ]
  },
  {
    id: 12, slug: 'assessment', title: 'Assessment', icon: '📋', category: 'cgst-act' as const,
    description: 'Self-assessment, provisional, scrutiny, and best judgment assessment',
    sections: [
      { id: 'sec-59', number: '59', title: 'Self-assessment', description: 'Primary mode of assessment',
        keyPoints: ['Every registered person to self-assess', 'Tax payable in return is self-assessed', 'Basis for GST compliance'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'high' as const },
      { id: 'sec-60', number: '60', title: 'Provisional assessment', description: 'When value cannot be determined',
        keyPoints: ['On request of registered person', 'When unable to determine value or rate', 'Bond/security required', 'Final assessment within 6 months'],
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'medium' as const },
      { id: 'sec-61', number: '61', title: 'Scrutiny of returns', description: 'Verification of returns',
        keyPoints: ['Officer may scrutinize return', 'Seek explanation for discrepancies', 'No time limit specified', 'Leads to demand if discrepancy confirmed'],
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'high' as const },
      { id: 'sec-62', number: '62', title: 'Assessment of non-filers', description: 'Best judgment for non-filing',
        keyPoints: ['If return not filed despite notice', 'Best judgment assessment', 'Tax + interest + penalty'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'high' as const },
      { id: 'sec-63', number: '63', title: 'Assessment of unregistered persons', description: 'Assessment when not registered',
        keyPoints: ['If liable but not registered', 'Best judgment assessment', 'From date liable to register'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'medium' as const },
      { id: 'sec-64', number: '64', title: 'Summary assessment', description: 'Quick assessment in certain cases',
        keyPoints: ['To protect interest of revenue', 'With Additional/Joint Commissioner approval', 'In cases of urgency'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'medium' as const }
    ]
  },
  {
    id: 13, slug: 'audit', title: 'Audit', icon: '🔍', category: 'cgst-act' as const,
    description: 'Department audit and special audit provisions',
    sections: [
      { id: 'sec-65', number: '65', title: 'Audit by tax authorities', description: 'Department audit procedure',
        keyPoints: ['Commissioner may conduct audit', 'Prior notice of 15 working days', 'Complete within 3 months (extendable by 6 months)', 'Findings communicated within 30 days'],
        difficulty: 'intermediate' as const, estimatedMinutes: 30, practicalRelevance: 'high' as const },
      { id: 'sec-66', number: '66', title: 'Special audit', description: 'Audit by CA/CMA',
        keyPoints: ['If complexity requires special audit', 'By Chartered Accountant or Cost Accountant', 'Nominated by Commissioner', 'Report within 90 days (extendable)'],
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'medium' as const }
    ]
  },
  {
    id: 14, slug: 'inspection-search', title: 'Inspection, Search, Seizure and Arrest', icon: '🔎', category: 'cgst-act' as const,
    description: 'Powers of officers for inspection, search, seizure and arrest',
    sections: [
      { id: 'sec-67', number: '67', title: 'Power of inspection, search and seizure', description: 'Search and seizure powers',
        keyPoints: ['Reasons to believe goods/documents concealed', 'Authorization by Joint Commissioner', 'Access to any place of business', 'Seize goods and documents', 'Prepare inventory, issue receipt'],
        difficulty: 'advanced' as const, estimatedMinutes: 40, practicalRelevance: 'high' as const },
      { id: 'sec-68', number: '68', title: 'Inspection of goods in movement', description: 'E-way bill verification',
        keyPoints: ['Officer may intercept goods in transit', 'Verify e-way bill and documents', 'Physical verification of goods', 'Detention if discrepancy found'],
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'high' as const },
      { id: 'sec-69', number: '69', title: 'Power to arrest', description: 'When arrest can be made',
        keyPoints: ['Tax evasion > ₹5 crore: cognizable, non-bailable', 'Tax evasion ₹2-5 crore: cognizable, bailable', 'Arrest by Commissioner with reasons in writing', 'Inform grounds of arrest', 'Magistrate within 24 hours'],
        difficulty: 'advanced' as const, estimatedMinutes: 35, practicalRelevance: 'high' as const },
      { id: 'sec-70', number: '70', title: 'Power to summon', description: 'Summons for attendance and evidence',
        keyPoints: ['Proper officer may summon any person', 'To give evidence or produce documents', 'Binding like court summons'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'high' as const },
      { id: 'sec-71', number: '71', title: 'Access to business premises', description: 'Officer access rights',
        keyPoints: ['Access to any place of business', 'During business hours', 'To inspect books, goods, documents'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'medium' as const },
      { id: 'sec-72', number: '72', title: 'Officers to assist proper officers', description: 'Assistance from other departments',
        keyPoints: ['Police, Railway, Customs to assist', 'On request of proper officer'],
        difficulty: 'basic' as const, estimatedMinutes: 10, practicalRelevance: 'low' as const }
    ]
  },
  {
    id: 15, slug: 'demands-recovery', title: 'Demands and Recovery', icon: '⚖️', category: 'cgst-act' as const,
    description: 'SCN procedures, time limits, penalties, and recovery methods',
    sections: [
      { id: 'sec-73', number: '73', title: 'Determination of tax - non-fraud cases', description: 'Demand for non-fraud cases',
        keyPoints: ['For cases not involving fraud/suppression', 'Time limit: 3 years from due date of annual return', 'SCN at least 3 months before order', 'Penalty: 10% of tax or ₹10,000', 'No penalty if paid before SCN'],
        difficulty: 'advanced' as const, estimatedMinutes: 45, practicalRelevance: 'high' as const },
      { id: 'sec-74', number: '74', title: 'Determination of tax - fraud cases', description: 'Demand for fraud cases',
        keyPoints: ['Fraud, willful misstatement, suppression', 'Time limit: 5 years from due date of annual return', 'Penalty: 100% of tax', 'Reduced to 15% if paid before SCN', '25% if paid within 30 days of SCN', '50% if paid within 30 days of order'],
        difficulty: 'advanced' as const, estimatedMinutes: 50, practicalRelevance: 'high' as const },
      { id: 'sec-74a', number: '74A', title: 'Unified provision for FY 2024-25 onwards', description: 'New unified demand provision',
        keyPoints: ['Applicable from FY 2024-25 onwards', 'Unified time limit: 42/54 months', 'Replaces dual timelines of 73/74', 'Penalty based on whether fraud or not'],
        difficulty: 'advanced' as const, estimatedMinutes: 40, practicalRelevance: 'high' as const },
      { id: 'sec-75', number: '75', title: 'General provisions for demand', description: 'Common rules for demand proceedings',
        keyPoints: ['Opportunity of personal hearing', 'Reasoned order in writing', 'Order within specified time', 'Adjournment provisions'],
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'high' as const },
      { id: 'sec-76', number: '76', title: 'Tax collected but not paid', description: 'Collection without remittance',
        keyPoints: ['If tax collected but not paid to government', 'Penalty equal to tax amount', 'In addition to tax and interest'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'high' as const },
      { id: 'sec-77', number: '77', title: 'Tax wrongfully collected and paid', description: 'Refund of wrong tax type',
        keyPoints: ['CGST paid as IGST or vice versa', 'Can claim refund', 'Subject to time limit'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'medium' as const },
      { id: 'sec-78', number: '78', title: 'Initiation of recovery proceedings', description: 'When recovery starts',
        keyPoints: ['After expiry of 3 months from order', 'Unless appeal filed with pre-deposit', 'Immediate if fraud detected'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'high' as const },
      { id: 'sec-79', number: '79', title: 'Recovery of tax', description: 'Methods of recovery',
        keyPoints: ['Deduction from refunds', 'Attachment of bank account', 'Distress and sale of goods', 'Garnishee order', 'Recovery through collector'],
        difficulty: 'advanced' as const, estimatedMinutes: 35, practicalRelevance: 'high' as const },
      { id: 'sec-83', number: '83', title: 'Provisional attachment', description: 'Attachment during proceedings',
        keyPoints: ['During pendency of proceedings under 62, 63, 64, 67, 73, 74', 'To protect revenue', 'By Commissioner with reasons', 'Valid for 1 year'],
        difficulty: 'advanced' as const, estimatedMinutes: 30, practicalRelevance: 'high' as const },
      { id: 'sec-84', number: '84', title: 'Continuation of recovery proceedings', description: 'Proceedings against legal heirs',
        keyPoints: ['Against legal representatives', 'Against successors', 'Limited to assets inherited'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'medium' as const }
    ]
  },
  {
    id: 16, slug: 'liability-cases', title: 'Liability in Certain Cases', icon: '👥', category: 'cgst-act' as const,
    description: 'Liability of partners, directors, agents, and on business transfer',
    sections: [
      { id: 'sec-85', number: '85', title: 'Liability on transfer of business', description: 'Joint liability on transfer',
        keyPoints: ['Transferor and transferee jointly liable', 'For tax dues up to transfer', 'Applies to amalgamation, merger'],
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'high' as const },
      { id: 'sec-89', number: '89', title: 'Liability of directors of private company', description: 'Director personal liability',
        keyPoints: ['Directors jointly and severally liable', 'If company fails to pay tax', 'Unless proves no negligence/connivance'],
        difficulty: 'advanced' as const, estimatedMinutes: 30, practicalRelevance: 'high' as const },
      { id: 'sec-90', number: '90', title: 'Liability of partners of firm', description: 'Partner liability',
        keyPoints: ['Partners jointly and severally liable', 'For tax dues of firm'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'high' as const }
    ]
  },
  {
    id: 17, slug: 'advance-ruling', title: 'Advance Ruling', icon: '❓', category: 'cgst-act' as const,
    description: 'Authority for Advance Ruling, appeals, and binding nature',
    sections: [
      { id: 'sec-95', number: '95', title: 'Definitions for advance ruling', description: 'Key definitions',
        keyPoints: ['Authority for Advance Ruling (AAR)', 'Appellate Authority (AAAR)', 'Applicant definition'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'medium' as const },
      { id: 'sec-97', number: '97', title: 'Application for advance ruling', description: 'How to apply for ruling',
        keyPoints: ['Fee: ₹5,000', 'Questions: classification, rate, place of supply, ITC eligibility', 'Pending before any authority: not admissible'],
        difficulty: 'intermediate' as const, estimatedMinutes: 30, practicalRelevance: 'high' as const },
      { id: 'sec-98', number: '98', title: 'Procedure on receipt of application', description: 'AAR procedure',
        keyPoints: ['Pronounce ruling within 90 days', 'Opportunity of hearing', 'Copies to applicant and jurisdictional officer'],
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'medium' as const },
      { id: 'sec-100', number: '100', title: 'Appeal to Appellate Authority', description: 'Appeal to AAAR',
        keyPoints: ['Appeal within 30 days of ruling', 'Fee: ₹10,000', 'Decision within 90 days'],
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'medium' as const },
      { id: 'sec-103', number: '103', title: 'Applicability of advance ruling', description: 'Binding nature',
        keyPoints: ['Binding on applicant and jurisdictional officers', 'Unless law changes or facts differ', 'Void if obtained by fraud'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'high' as const }
    ]
  },
  {
    id: 18, slug: 'appeals-revision', title: 'Appeals and Revision', icon: '⚡', category: 'cgst-act' as const,
    description: 'Appellate hierarchy, pre-deposit requirements, time limits',
    sections: [
      { id: 'sec-107', number: '107', title: 'Appeals to Appellate Authority', description: 'First appeal',
        keyPoints: ['Appeal within 3 months of order', 'Pre-deposit: 10% of disputed tax', 'Maximum pre-deposit: ₹25 crore', 'Decision within 1 year'],
        difficulty: 'advanced' as const, estimatedMinutes: 40, practicalRelevance: 'high' as const },
      { id: 'sec-108', number: '108', title: 'Powers of Revisional Authority', description: 'Revision by Commissioner',
        keyPoints: ['Commissioner may revise orders of subordinates', 'Within 3 years of order', 'Suo moto or on application'],
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'medium' as const },
      { id: 'sec-112', number: '112', title: 'Appeals to Appellate Tribunal', description: 'Second appeal to GSTAT',
        keyPoints: ['Appeal within 3 months', 'Additional pre-deposit: 10% (total 20%)', 'Maximum: ₹50 crore', 'Substantial question of law to High Court'],
        difficulty: 'advanced' as const, estimatedMinutes: 40, practicalRelevance: 'high' as const },
      { id: 'sec-117', number: '117', title: 'Appeal to High Court', description: 'High Court appeal',
        keyPoints: ['On substantial question of law', 'Within 180 days of Tribunal order', 'No pre-deposit required'],
        difficulty: 'advanced' as const, estimatedMinutes: 30, practicalRelevance: 'medium' as const },
      { id: 'sec-118', number: '118', title: 'Appeal to Supreme Court', description: 'Final appeal',
        keyPoints: ['From High Court order', 'On substantial question of law of general importance'],
        difficulty: 'advanced' as const, estimatedMinutes: 25, practicalRelevance: 'medium' as const }
    ]
  },
  {
    id: 19, slug: 'offences-penalties', title: 'Offences and Penalties', icon: '⚠️', category: 'cgst-act' as const,
    description: 'Offences, penalties, prosecution, compounding',
    sections: [
      { id: 'sec-122', number: '122', title: 'Penalty for certain offences', description: 'Specific offences and penalties',
        keyPoints: ['Fake invoices: 100% penalty or ₹10,000', 'ITC without invoice: 100% of credit', 'Supply without registration', 'Contravention of provisions'],
        difficulty: 'advanced' as const, estimatedMinutes: 45, practicalRelevance: 'high' as const },
      { id: 'sec-125', number: '125', title: 'General penalty', description: 'Residual penalty provision',
        keyPoints: ['For offences not specifically provided', 'Maximum: ₹25,000'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'medium' as const },
      { id: 'sec-129', number: '129', title: 'Detention, seizure and release', description: 'Goods in transit violations',
        keyPoints: ['Goods in transit without documents', 'Tax evasion intent: 200% penalty', 'Minor defects: 2% or ₹25,000', 'Release on payment of tax and penalty'],
        difficulty: 'advanced' as const, estimatedMinutes: 40, practicalRelevance: 'high' as const },
      { id: 'sec-130', number: '130', title: 'Confiscation of goods and conveyances', description: 'When goods can be confiscated',
        keyPoints: ['Goods liable to confiscation if evasion intent', 'Conveyance also liable', 'Redemption on payment of fine'],
        difficulty: 'advanced' as const, estimatedMinutes: 35, practicalRelevance: 'high' as const },
      { id: 'sec-132', number: '132', title: 'Punishment for certain offences', description: 'Criminal prosecution',
        keyPoints: ['Tax evasion > ₹5 crore: up to 5 years', 'Tax evasion ₹2-5 crore: up to 3 years', 'Tax evasion ₹1-2 crore: up to 1 year', 'Repeat offence: up to 5 years', 'Cognizable and non-bailable above ₹5 crore'],
        difficulty: 'advanced' as const, estimatedMinutes: 45, practicalRelevance: 'high' as const },
      { id: 'sec-138', number: '138', title: 'Compounding of offences', description: 'Settlement of prosecution',
        keyPoints: ['Minimum: tax amount or ₹25,000', 'Maximum: tax amount or ₹50,000', 'Not available for repeat offenders', 'Commissioner to compound'],
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'medium' as const }
    ]
  },
  {
    id: 20, slug: 'transitional', title: 'Transitional Provisions', icon: '🔄', category: 'cgst-act' as const,
    description: 'Migration from pre-GST regime',
    sections: [
      { id: 'sec-139', number: '139', title: 'Migration of existing taxpayers', description: 'Registration migration',
        keyPoints: ['Existing taxpayers deemed registered', 'Provisional registration granted', 'To be converted to final'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'low' as const },
      { id: 'sec-140', number: '140', title: 'Transitional arrangements for ITC', description: 'CENVAT credit carry forward',
        keyPoints: ['Credit in last return carried forward', 'TRAN-1 form for claiming credit', 'Time limit issues and court cases'],
        difficulty: 'advanced' as const, estimatedMinutes: 35, practicalRelevance: 'medium' as const }
    ]
  },
  {
    id: 21, slug: 'miscellaneous', title: 'Miscellaneous', icon: '📌', category: 'cgst-act' as const,
    description: 'Job work, deemed exports, anti-profiteering, and other provisions',
    sections: [
      { id: 'sec-143', number: '143', title: 'Job work procedure', description: 'Sending goods for job work',
        keyPoints: ['Inputs: return within 1 year', 'Capital goods: return within 3 years', 'If not returned: deemed supply', 'Challan required for movement'],
        difficulty: 'intermediate' as const, estimatedMinutes: 30, practicalRelevance: 'high' as const },
      { id: 'sec-147', number: '147', title: 'Deemed exports', description: 'Supplies treated as exports',
        keyPoints: ['Supply to EOU, SEZ, projects', 'Refund available to supplier or recipient', 'No physical export required'],
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'high' as const },
      { id: 'sec-171', number: '171', title: 'Anti-profiteering', description: 'Passing benefit to consumers',
        keyPoints: ['Rate reduction benefit to be passed', 'ITC benefit to be passed', 'National Anti-Profiteering Authority', 'Penalty up to 10%'],
        difficulty: 'advanced' as const, estimatedMinutes: 35, practicalRelevance: 'high' as const }
    ]
  }
];

export default CGST_ACT_CHAPTERS_PART2;
