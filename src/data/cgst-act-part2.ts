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
      { id: 'sec-35', number: '35', title: 'Accounts and other records', description: 'Maintenance of accounts and records',
        keyPoints: ['Maintain accounts and records at principal place of business', 'Preserve for 72 months', 'Accounts in electronic form acceptable', 'GSTR-9C for turnover > ₹5 crore'],
        difficulty: 'intermediate' as const, estimatedMinutes: 30, practicalRelevance: 'high' as const,
        fullText: `**Section 35. Accounts and other records**

(1) Every registered person shall keep and maintain, at his principal place of business, as mentioned in the certificate of registration, a true and correct account of—

(a) production or manufacture of goods;

(b) inward and outward supply of goods or services or both;

(c) stock of goods;

(d) input tax credit availed;

(e) output tax payable and paid; and

(f) such other particulars as may be prescribed:

Provided that where more than one place of business is specified in the certificate of registration, the accounts relating to each place of business shall be kept at such places of business:

Provided further that the registered person may keep and maintain such accounts and other particulars in electronic form in such manner as may be prescribed.

(2) Every owner or operator of a warehouse or godown or any other place used for storage of goods and every transporter, irrespective of whether he is a registered person or not, shall maintain records of the consigner, consignee and other relevant details of the goods in such manner as may be prescribed.

(3) The Commissioner may notify a class of taxable persons to maintain additional accounts or documents for such purpose as may be specified therein.

(4) Where the Commissioner considers that any class of taxable persons is unable to keep and maintain accounts in accordance with the provisions of this section, he may, for reasons to be recorded in writing, permit such class of taxable persons to maintain accounts in such manner as may be prescribed.

(5) Every registered person whose turnover during a financial year exceeds the prescribed limit shall get his accounts audited by a chartered accountant or a cost accountant and shall submit a copy of the audited annual accounts, the reconciliation statement under sub-section (2) of section 44 and such other documents in such form and manner as may be prescribed.

(6) Subject to the provisions of clause (h) of sub-section (4) of section 17, where the registered person fails to account for the goods or services or both in accordance with the provisions of sub-section (1), the proper officer shall determine the amount of tax payable on the goods or services or both that are not accounted for, as if such goods or services or both had been supplied by such person, and the provisions of section 73 or section 74, as the case may be, shall, mutatis mutandis, apply.` },
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
        difficulty: 'advanced' as const, estimatedMinutes: 45, practicalRelevance: 'high' as const,
        fullText: `**Section 73. Determination of tax not paid or short paid or erroneously refunded or input tax credit wrongly availed or utilised for any reason other than fraud or any wilful misstatement or suppression of facts**

(1) Where it appears to the proper officer that any tax has not been paid or short paid or erroneously refunded, or where input tax credit has been wrongly availed or utilised for any reason, other than the reason of fraud or any wilful-misstatement or suppression of facts to evade tax, he shall serve notice on the person chargeable with tax which has not been so paid or short paid or to whom the refund has erroneously been made, or who has wrongly availed or utilised input tax credit, requiring him to show cause as to why he should not pay the amount specified in the notice along with interest payable thereon under section 50 and a penalty leviable under the provisions of this Act or the rules made thereunder.

(2) The proper officer shall issue the notice under sub-section (1) at least three months prior to the time limit specified in sub-section (10) for issuance of order.

(3) Where a notice has been issued for any period under sub-section (1), the proper officer may serve a statement, containing the details of tax not paid or short paid or erroneously refunded or input tax credit wrongly availed or utilised for such periods other than those covered under sub-section (1), on the person chargeable with tax.

(4) The service of such statement shall be deemed to be service of notice on such person under sub-section (1), subject to the condition that the grounds relied upon for such tax periods other than those covered under sub-section (1) are the same as are mentioned in the earlier notice.

(5) The person chargeable with tax may, before service of notice under sub-section (1), pay the amount of tax along with interest payable under section 50 on the basis of his own ascertainment of such tax or the tax as ascertained by the proper officer and inform the proper officer in writing of such payment.

(6) The proper officer, on receipt of such information, shall not serve any notice under sub-section (1) in respect of the tax so paid or any penalty payable under the provisions of this Act or the rules made thereunder.

(7) Where the proper officer is of the opinion that the amount paid under sub-section (5) falls short of the amount actually payable, he shall proceed to issue the notice as provided for in sub-section (1) in respect of such amount which falls short of the amount actually payable.

(8) Where any person chargeable with tax under sub-section (1) or sub-section (3) pays the said tax along with interest payable under section 50 within thirty days of issue of the notice, no penalty shall be payable and all proceedings in respect of the said notice shall be deemed to be concluded.

(9) The proper officer shall, after considering the representation, if any, made by the person chargeable with tax, determine the amount of tax, interest and a penalty equivalent to ten per cent. of tax or ten thousand rupees, whichever is higher, due from such person and issue an order.

(10) The proper officer shall issue the order under sub-section (9) within three years from the due date for furnishing of annual return for the financial year to which the tax not paid or short paid or input tax credit wrongly availed or utilised relates to or within three years from the date of erroneous refund.

(11) Notwithstanding anything contained in sub-section (6) or sub-section (8), penalty under sub-section (9) shall be payable where any person chargeable with tax under sub-section (1) does not pay the said tax in full within thirty days of issue of the notice.

(12) Where any person chargeable with tax under sub-section (1) or sub-section (3) pays the said tax along with interest payable under section 50 and a penalty equivalent to twenty-five per cent. of such tax within thirty days of issue of the notice, all proceedings in respect of the said notice shall be deemed to be concluded.

(13) The proper officer may, on receipt of an application from the person who has issued an invoice in respect of a supply and has paid the tax thereon, reduce the amount of tax payable by such person, if the recipient does not claim input tax credit on such invoice and the invoice is not declared in the return furnished under section 39.

(14) The proper officer shall determine the amount of tax, interest and penalty due from the person who has not paid the tax or has short paid the tax or has erroneously been refunded, or who has wrongly availed or utilised input tax credit, and pass an order in writing.

(15) The proper officer shall issue the order under sub-section (14) within three years from the due date for furnishing of annual return for the financial year to which the tax not paid or short paid or input tax credit wrongly availed or utilised relates to or within three years from the date of erroneous refund.

(16) Notwithstanding anything contained in sub-section (12), penalty under sub-section (14) shall be payable where any person chargeable with tax under sub-section (1) or sub-section (3) does not pay the said tax in full within thirty days of issue of the notice.

(17) The proper officer may, on receipt of an application from the person who has issued an invoice in respect of a supply and has paid the tax thereon, reduce the amount of tax payable by such person, if the recipient does not claim input tax credit on such invoice and the invoice is not declared in the return furnished under section 39.` },
      { id: 'sec-74', number: '74', title: 'Determination of tax - fraud cases', description: 'Demand for fraud cases',
        keyPoints: ['Fraud, willful misstatement, suppression', 'Time limit: 5 years from due date of annual return', 'Penalty: 100% of tax', 'Reduced to 15% if paid before SCN', '25% if paid within 30 days of SCN', '50% if paid within 30 days of order'],
        difficulty: 'advanced' as const, estimatedMinutes: 50, practicalRelevance: 'high' as const,
        fullText: `**Section 74. Determination of tax not paid or short paid or erroneously refunded or input tax credit wrongly availed or utilised by reason of fraud or any wilful misstatement or suppression of facts**

(1) Where it appears to the proper officer that any tax has not been paid or short paid or erroneously refunded or where input tax credit has been wrongly availed or utilised by reason of fraud, or any wilful-misstatement or suppression of facts to evade tax, he shall serve notice on the person chargeable with tax which has not been so paid or short paid or to whom the refund has erroneously been made, or who has wrongly availed or utilised input tax credit, requiring him to show cause as to why he should not pay the amount specified in the notice along with interest payable thereon under section 50 and a penalty equivalent to the tax specified in the notice.

(2) The proper officer shall issue the notice under sub-section (1) at least six months prior to the time limit specified in sub-section (10) for issuance of order.

(3) Where a notice has been issued for any period under sub-section (1), the proper officer may serve a statement, containing the details of tax not paid or short paid or erroneously refunded or input tax credit wrongly availed or utilised for such periods other than those covered under sub-section (1), on the person chargeable with tax.

(4) The service of such statement shall be deemed to be service of notice on such person under sub-section (1), subject to the condition that the grounds relied upon for such tax periods other than those covered under sub-section (1) are the same as are mentioned in the earlier notice.

(5) The person chargeable with tax may, before service of notice under sub-section (1), pay the amount of tax along with interest payable under section 50 and a penalty equivalent to fifteen per cent. of such tax on the basis of his own ascertainment of such tax or the tax as ascertained by the proper officer and inform the proper officer in writing of such payment.

(6) The proper officer, on receipt of such information, shall not serve any notice under sub-section (1) in respect of the tax so paid or any penalty payable under the provisions of this Act or the rules made thereunder.

(7) Where the proper officer is of the opinion that the amount paid under sub-section (5) falls short of the amount actually payable, he shall proceed to issue the notice as provided for in sub-section (1) in respect of such amount which falls short of the amount actually payable.

(8) Where any person chargeable with tax under sub-section (1) or sub-section (3) pays the said tax along with interest payable under section 50 and a penalty equivalent to twenty-five per cent. of such tax within thirty days of issue of the notice, all proceedings in respect of the said notice shall be deemed to be concluded.

(9) The proper officer shall, after considering the representation, if any, made by the person chargeable with tax, determine the amount of tax, interest and a penalty equivalent to one hundred per cent. of such tax, due from such person and issue an order.

(10) The proper officer shall issue the order under sub-section (9) within five years from the due date for furnishing of annual return for the financial year to which the tax not paid or short paid or input tax credit wrongly availed or utilised relates to or within five years from the date of erroneous refund.

(11) Where any person chargeable with tax under sub-section (1) or sub-section (3) pays the said tax along with interest payable under section 50 and a penalty equivalent to fifty per cent. of such tax within thirty days of issue of the order, all proceedings in respect of the said notice shall be deemed to be concluded.

(12) The proper officer may, on receipt of an application from the person who has issued an invoice in respect of a supply and has paid the tax thereon, reduce the amount of tax payable by such person, if the recipient does not claim input tax credit on such invoice and the invoice is not declared in the return furnished under section 39.` },
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
        difficulty: 'advanced' as const, estimatedMinutes: 35, practicalRelevance: 'medium' as const,
        fullText: `**Section 140. Transitional arrangements for input tax credit**

A registered person, who was not registered under the existing law or who was engaged in the manufacture of exempted goods or provision of exempted services or who was providing works contract service and was availing of the benefit of notification No. 26/2012-Service Tax, dated the 20th June, 2012, or a first stage dealer or a second stage dealer or a registered importer or a depot of a manufacturer, shall be entitled to take, in his electronic credit ledger, credit of the amount of CENVAT credit carried forward in the return relating to the period ending with the day immediately preceding the appointed day, furnished by him under the existing law, in such manner as may be prescribed:

Provided that the registered person shall not be allowed to take credit unless—

(a) the said credit was admissible as CENVAT credit under the existing law;

(b) the said credit was not admissible as input tax credit under this Act; and

(c) the registered person has furnished all the returns required under the existing law for the period of six months immediately preceding the appointed day.

(2) A registered person, who was not registered under the existing law, shall be entitled to take credit of eligible duties and taxes in respect of inputs held in stock and inputs contained in semi-finished or finished goods held in stock on the appointed day, subject to the following conditions, namely:—

(i) such inputs or goods are used or intended to be used for making taxable supplies under this Act;

(ii) the said registered person is eligible for input tax credit under this Act;

(iii) the said registered person is in possession of invoice or other prescribed documents evidencing payment of duty under the existing law in respect of such inputs;

(iv) such invoices or other prescribed documents were issued not earlier than twelve months immediately preceding the appointed day; and

(v) the supplier of services is not eligible for any abatement under this Act:

Provided that where a registered person, other than a manufacturer or a service provider, does not have invoice or other prescribed documents evidencing payment of duty in respect of inputs held in stock on the appointed day, the registered person may, subject to such conditions, restrictions and safeguards as may be prescribed, including that the said taxable person shall pass on the benefit of such credit by way of reduced prices to the recipient, take credit at such rate and in such manner as may be prescribed.

(3) A registered person, who was engaged in the manufacture of taxable as well as exempted goods under the Central Excise Act, 1944 or provision of taxable as well as exempted services under Chapter V of the Finance Act, 1994, but which are liable to tax under this Act, shall be entitled to take, in his electronic credit ledger,—

(a) the amount of CENVAT credit carried forward in a return furnished under the existing law by him in respect of the period ending with the day immediately preceding the appointed day in such manner as may be prescribed; and

(b) the amount of CENVAT credit of eligible duties in respect of inputs held in stock and inputs contained in semi-finished or finished goods held in stock on the appointed day, relating to such exempted goods or services, in such manner as may be prescribed:

Provided that if a registered person does not avail of the option within the time specified in sub-section (1) of section 10, he shall be liable to pay tax on the supply of goods and services referred to in sub-section (4) of section 7 and shall not be entitled to avail of input tax credit in respect of the same.

(4) A registered person, who was either paying tax at a fixed rate or not paying any tax under the existing law, shall be entitled to take, in his electronic credit ledger, credit of eligible duties in respect of inputs held in stock and inputs contained in semi-finished or finished goods held in stock on the appointed day, subject to the following conditions, namely:—

(i) such inputs or goods are used or intended to be used for making taxable supplies under this Act;

(ii) the said registered person is not paying tax under section 10;

(iii) the said registered person is eligible for input tax credit under this Act;

(iv) the said registered person is in possession of invoice or other prescribed documents evidencing payment of duty under the existing law in respect of inputs; and

(v) such invoices or other prescribed documents were issued not earlier than twelve months immediately preceding the appointed day.

(5) A registered person shall be entitled to take, in his electronic credit ledger, credit of eligible duties and taxes in respect of inputs or input services received on or after the appointed day but the duty or tax in respect of which has been paid under the existing law, subject to the condition that the invoice or any other duty or tax paying document of the same was recorded in the books of account of such person within a period of thirty days from the appointed day:

Provided that the period of thirty days may, on sufficient cause being shown, be extended by the Commissioner for a further period not exceeding thirty days.

(6) A registered person, who was either paying tax at a fixed rate or not paying any tax under the existing law, shall be entitled to take, in his electronic credit ledger, credit of eligible duties and taxes in respect of inputs held in stock and inputs contained in semi-finished or finished goods held in stock on the appointed day, subject to the following conditions, namely:—

(i) such inputs or goods are used or intended to be used for making taxable supplies under this Act;

(ii) the said registered person is not paying tax under section 10;

(iii) the said registered person is eligible for input tax credit under this Act;

(iv) the said registered person is in possession of invoice or other prescribed documents evidencing payment of duty under the existing law in respect of inputs; and

(v) such invoices or other prescribed documents were issued not earlier than twelve months immediately preceding the appointed day.

(7) Notwithstanding anything to the contrary contained in this Act, the input tax credit on account of any services received prior to the appointed day by an exempted taxable person, who becomes liable to pay tax on the appointed day, shall not be allowed in the electronic credit ledger of such person.

(8) Where a registered person having centralised registration under the existing law has obtained a registration under this Act, such person shall be allowed to take, in his electronic credit ledger, credit of the amount of CENVAT credit carried forward in a return, furnished under the existing law by him, in respect of the period ending with the day immediately preceding the appointed day, in such manner as may be prescribed.

(9) Where a registered person was required to pay tax at a fixed rate or not paying any tax under the existing law, but is liable to pay tax under this Act, the input tax credit shall be allowed at such rate and in such manner and subject to such conditions and restrictions as may be prescribed.

(10) The Central Government may, by notification, specify the manner and conditions subject to which the credit of eligible duties and taxes may be transferred from the electronic credit ledger of one registered person to another registered person where such transfer is pursuant to the provisions of an agreement or arrangement entered into between such persons for the transfer of business assets.` }
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
