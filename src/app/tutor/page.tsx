'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Trash2, Bot, User, Sparkles, BookOpen, HelpCircle } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { cn } from '@/lib/utils';
import GST_MODULES from '@/data/curriculum';

const SUGGESTED_QUESTIONS = [
  "What is the threshold limit for GST registration?",
  "Explain the difference between CGST, SGST and IGST",
  "What are blocked credits under Section 17(5)?",
  "How to calculate time of supply for goods?",
  "What is the due date for GSTR-3B filing?",
  "Explain the composition scheme under GST",
  "What is reverse charge mechanism?",
  "When is e-way bill required?"
];

const GST_RESPONSES: Record<string, string> = {
  'registration': `**GST Registration Threshold:**
- Normal States: ₹20 lakhs aggregate turnover
- Special Category States: ₹10 lakhs
- For goods suppliers only: ₹40 lakhs

**Compulsory Registration (Section 24):**
- Inter-state suppliers
- Casual taxable persons
- Non-resident taxable persons
- E-commerce operators
- TDS deductors
- Persons making taxable supplies on behalf of other taxable persons`,

  'cgst sgst igst': `**GST Components:**

**CGST (Central GST):** Collected by Central Government on intra-state supplies
**SGST (State GST):** Collected by State Government on intra-state supplies
**IGST (Integrated GST):** Collected by Central Government on inter-state supplies and imports

**Example:**
- Intra-state sale of ₹10,000 @ 18%: CGST ₹900 + SGST ₹900
- Inter-state sale of ₹10,000 @ 18%: IGST ₹1,800`,

  'blocked credit': `**Blocked Credits under Section 17(5):**

ITC is NOT available on:
1. Motor vehicles (except for specified purposes)
2. Food and beverages, outdoor catering
3. Beauty treatment, health services
4. Club membership, fitness
5. Life/health insurance (for employees)
6. Travel benefits (LTC, home travel)
7. Works contract for construction
8. Goods/services for personal consumption
9. Goods lost, stolen, destroyed, written off
10. Tax paid under composition scheme`,

  'time of supply': `**Time of Supply of Goods (Section 12):**

Earlier of:
- Date of issue of invoice
- Last date to issue invoice
- Date of receipt of payment

**Time of Supply of Services (Section 13):**

Earlier of:
- Date of invoice (if issued within prescribed time)
- Date of receipt of payment
- Date of completion of service`,

  'gstr-3b': `**GSTR-3B Filing:**

**Due Date:** 20th of the following month (for monthly filers)
**For QRMP taxpayers:** 22nd/24th of month following the quarter

**Contents:**
- Summary of outward supplies
- Summary of inward supplies (with reverse charge)
- ITC claimed
- Tax payable and paid

**Late Fee:** ₹50/day (₹20 for NIL return), max ₹5,000`,

  'composition': `**Composition Scheme (Section 10):**

**Eligibility:**
- Turnover up to ₹1.5 crore (₹75 lakhs for special states)
- Not applicable for service providers (except restaurants)

**Tax Rates:**
- Traders: 1% (0.5% CGST + 0.5% SGST)
- Manufacturers: 1%
- Restaurants: 5%

**Restrictions:**
- No inter-state supplies
- No supply through e-commerce
- Cannot collect tax from customers
- No ITC available`,

  'reverse charge': `**Reverse Charge Mechanism:**

Under RCM, the recipient pays GST instead of supplier.

**Section 9(3) - Notified supplies:**
- Legal services by advocate
- Services by goods transport agency
- Sponsorship services
- Services by director to company

**Section 9(4) - From unregistered persons:**
- Currently, mostly suspended except for specific cases
- Applies to certain notified goods/services`,

  'e-way bill': `**E-Way Bill (Rule 138):**

**When Required:**
- Movement of goods worth > ₹50,000

**Validity:**
- Regular: 100 km per day
- Over Dimensional Cargo: 200 km per day

**Documents:**
- Part A: Supply details
- Part B: Vehicle number

**Exemptions:**
- Goods specified in Annexure
- Movement within 50 km
- Non-motorized conveyance`,

  'place of supply': `**Place of Supply (Sections 10-13 IGST Act):**

**For Goods:**
- Location where movement terminates (if moved)
- Location of goods at time of delivery (if not moved)

**For Services:**
- Location of recipient (if known)
- Location of supplier (if recipient location unknown)
- Special rules for: Immovable property, Restaurant, Transportation, Banking, Insurance

**Inter-state Supply:**
- Location of supplier and recipient in different states
- Attracts IGST

**Intra-state Supply:**
- Location of supplier and recipient in same state
- Attracts CGST + SGST`,

  'itc eligibility': `**ITC Eligibility (Section 16):**

**Conditions:**
1. Must have valid tax invoice/debit note
2. Goods/services must be received
3. Tax must be paid by supplier to government
4. Must file return (GSTR-3B)
5. Time limit: 30th November of next financial year
6. Payment to supplier within 180 days (or reverse ITC)

**Not Available:**
- Personal consumption
- Exempt supplies
- Blocked credits (Section 17)
- Composition scheme
- Non-business use`,

  'returns': `**GST Returns:**

**GSTR-1 (Outward Supplies):**
- Due: 11th of next month
- Details of all outward supplies

**GSTR-3B (Summary Return):**
- Due: 20th of next month (22nd/24th for QRMP)
- Summary of outward/inward supplies
- ITC claimed, tax payable

**GSTR-9 (Annual Return):**
- Due: 31st December
- Annual reconciliation

**GSTR-9C (Reconciliation Statement):**
- For turnover > ₹5 crore
- CA certification required`,

  'all return due dates': `**All GST Return Due Dates:**

**Monthly Returns:**

**GSTR-1 (Outward Supplies):**
- Due: 11th of the following month
- Details of all outward supplies made during the month

**GSTR-3B (Summary Return):**
- Due: 20th of the following month
- For QRMP (Quarterly Return Monthly Payment) taxpayers: 22nd/24th of month following the quarter
- Summary of outward/inward supplies, ITC claimed, tax payable

**GSTR-2A/2B (Auto-populated Inward Supplies):**
- Auto-populated from supplier's GSTR-1
- No separate filing required

**Quarterly Returns (QRMP Scheme):**
- GSTR-1: Due by 13th of month following the quarter
- GSTR-3B: Due by 22nd/24th of month following the quarter

**Annual Returns:**

**GSTR-9 (Annual Return):**
- Due: 31st December of the following financial year
- Consolidation of all monthly/quarterly returns filed during the year
- Must be filed by all regular taxpayers

**GSTR-9C (Reconciliation Statement):**
- Due: 31st December of the following financial year
- Required for taxpayers with turnover > ₹5 crore
- Self-certified reconciliation statement
- CA certification required

**Other Returns:**

**GSTR-4 (Composition Scheme):**
- Due: 18th of month following the quarter
- For composition taxpayers

**GSTR-5 (Non-Resident Taxable Person):**
- Due: 20th of the following month
- For non-resident taxable persons

**GSTR-6 (Input Service Distributor):**
- Due: 13th of the following month
- For Input Service Distributors

**GSTR-7 (TDS Return):**
- Due: 10th of the following month
- For persons deducting TDS

**GSTR-8 (TCS Return):**
- Due: 10th of the following month
- For e-commerce operators collecting TCS

**Important Notes:**
- Due dates may be extended by government notifications
- Late fees apply for delayed filing
- Interest applies on late payment of tax
- NIL returns have reduced late fees`,

  'penalty': `**Penalties and Late Fees:**

**Late Fee for Returns (Section 47):**
- **GSTR-1:** ₹200 per day (₹100 CGST + ₹100 SGST/IGST)
- Maximum: ₹5,000 per return
- For NIL returns: ₹20 per day (₹10 + ₹10), max ₹500

**GSTR-3B Late Fee:**
- ₹50 per day (₹25 CGST + ₹25 SGST/IGST)
- Maximum: ₹5,000
- For NIL returns: ₹20 per day, max ₹500

**Interest on Late Payment (Section 50):**
- 18% per annum on tax amount
- Calculated from due date to date of payment

**Penalty for Non-filing (Section 47):**
- ₹10,000 or 10% of tax due, whichever is higher
- Minimum ₹10,000

**Penalty for Incorrect Return (Section 73):**
- Show cause notice issued
- Penalty up to 10% of tax or ₹10,000, whichever is higher`,

  'late fee': `**Late Fees for GST Returns:**

**GSTR-1 Late Fee:**
- ₹200 per day (₹100 CGST + ₹100 SGST/IGST)
- Maximum: ₹5,000 per return
- NIL returns: ₹20/day, max ₹500

**GSTR-3B Late Fee:**
- ₹50 per day (₹25 CGST + ₹25 SGST/IGST)
- Maximum: ₹5,000
- NIL returns: ₹20/day, max ₹500

**Interest on Late Payment:**
- 18% per annum on tax amount
- From due date to payment date

**Waiver:**
- Late fee may be waived for first-time defaulters
- Subject to conditions and approval`,

  // Return Due Dates - Individual
  'gstr-1 due date': `**GSTR-1 Due Date:**
- **Due:** 11th of the following month
- Details of all outward supplies
- Late fee: ₹200/day (₹100 CGST + ₹100 SGST/IGST), max ₹5,000
- NIL return late fee: ₹20/day, max ₹500`,

  'gstr-3b due date': `**GSTR-3B Due Date:**
- **Due:** 20th of the following month (monthly filers)
- **QRMP taxpayers:** 22nd/24th of month following the quarter
- Summary return with tax payment
- Late fee: ₹50/day (₹25 CGST + ₹25 SGST/IGST), max ₹5,000
- NIL return late fee: ₹20/day, max ₹500`,

  'gstr-9 due date': `**GSTR-9 (Annual Return) Due Date:**
- **Due:** 31st December of the following financial year
- Annual consolidation of all returns
- Must be filed by all regular taxpayers
- Late fee applies for delayed filing`,

  'gstr-9c due date': `**GSTR-9C Due Date:**
- **Due:** 31st December of the following financial year
- Required for taxpayers with turnover > ₹5 crore
- Self-certified reconciliation statement
- CA certification required`,

  // Late Fee Calculations
  'late fee calculation': `**Late Fee Calculation:**

**GSTR-1:**
- ₹200 per day = ₹100 CGST + ₹100 SGST/IGST
- Maximum: ₹5,000 per return
- Example: 10 days late = ₹2,000 (₹1,000 CGST + ₹1,000 SGST)

**GSTR-3B:**
- ₹50 per day = ₹25 CGST + ₹25 SGST/IGST
- Maximum: ₹5,000
- Example: 20 days late = ₹1,000 (₹500 CGST + ₹500 SGST)

**NIL Returns:**
- GSTR-1: ₹20/day (₹10 + ₹10), max ₹500
- GSTR-3B: ₹20/day, max ₹500`,

  // Interest Rates
  'interest rate': `**Interest Rates under GST:**

**Section 50 - Interest on Late Payment:**
- **Rate:** 18% per annum
- Calculated from due date to date of payment
- Applies on tax amount not paid or paid late

**Section 50(3) - Interest on Excess ITC:**
- **Rate:** 24% per annum
- Applies when ITC claimed is more than eligible
- Calculated from date of utilization

**Interest Calculation:**
- Simple interest basis
- Calculated on daily basis
- Formula: (Tax × Rate × Days) / 365`,

  'interest 18 percent': `**18% Interest Rate (Section 50):**
- Applies on late payment of tax
- Calculated from due date to payment date
- Simple interest basis
- Example: ₹1,00,000 tax paid 30 days late = ₹1,00,000 × 18% × 30/365 = ₹1,479`,

  'interest 24 percent': `**24% Interest Rate (Section 50(3)):**
- Applies on excess ITC claimed
- Calculated from date of utilization
- Higher rate to discourage incorrect ITC claims
- Example: ₹50,000 excess ITC utilized for 60 days = ₹50,000 × 24% × 60/365 = ₹1,973`,

  // Registration Thresholds
  'registration threshold': `**GST Registration Thresholds:**

**Normal States:**
- ₹20 lakhs aggregate turnover (goods + services)
- ₹40 lakhs for goods suppliers only

**Special Category States:**
- ₹10 lakhs aggregate turnover
- States: Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura, Himachal Pradesh, Uttarakhand

**Compulsory Registration (Section 24):**
- No threshold limit - must register regardless of turnover
- Inter-state suppliers, casual taxable persons, e-commerce operators, TDS deductors`,

  'threshold 20 lakh': `**₹20 Lakh Threshold:**
- Applies to normal states
- For suppliers of goods and services combined
- Aggregate turnover includes all taxable, exempt, and non-taxable supplies
- Excludes taxes and inward supplies`,

  'threshold 40 lakh': `**₹40 Lakh Threshold:**
- Applies to normal states
- **Only for goods suppliers** (not service providers)
- Service providers must register at ₹20 lakh threshold
- If supplying both goods and services, ₹20 lakh threshold applies`,

  'threshold 10 lakh': `**₹10 Lakh Threshold:**
- Applies to special category states
- Lower threshold to support businesses in these states
- Same rules as ₹20 lakh threshold but lower amount`,

  // ITC Rules
  'itc time limit': `**ITC Time Limit (Section 16(4)):**
- **Deadline:** 30th November of the following financial year
- Or date of filing annual return (GSTR-9), whichever is earlier
- ITC cannot be claimed after this date
- Example: For FY 2023-24, ITC must be claimed by 30th November 2024`,

  'itc 180 days': `**ITC Reversal - 180 Days Rule (Section 16(2)):**
- Payment to supplier must be made within **180 days** of invoice date
- If not paid within 180 days, ITC must be reversed
- ITC can be re-availed when payment is made
- Applies to all registered persons`,

  'itc blocked credits': `**Blocked Credits - Section 17(5):**

ITC is NOT available on:
1. Motor vehicles (except for specified purposes like transportation, renting)
2. Food and beverages, outdoor catering
3. Beauty treatment, health services
4. Club membership, fitness services
5. Life/health insurance for employees
6. Travel benefits (LTC, home travel)
7. Works contract for construction of immovable property
8. Goods/services for personal consumption
9. Goods lost, stolen, destroyed, written off
10. Tax paid under composition scheme`,

  'section 17 5': `**Section 17(5) - Blocked Credits:**

ITC is blocked on:
- Motor vehicles (except specified purposes)
- Food, beverages, outdoor catering
- Beauty treatment, health services
- Club membership, fitness
- Employee insurance, travel benefits
- Works contract for construction
- Personal consumption
- Lost/stolen/destroyed goods
- Composition scheme tax`,

  // Penalty Provisions
  'penalty section 73': `**Section 73 - Penalty for Incorrect Return:**
- **Penalty:** Up to 10% of tax amount
- Minimum: ₹10,000
- Applies when: Tax not paid, short paid, or erroneously refunded
- Show cause notice must be issued
- Can be reduced to 25% if paid within 30 days of notice`,

  'penalty section 74': `**Section 74 - Penalty for Fraud/Suppression:**
- **Penalty:** Up to 100% of tax amount
- Applies when: Fraud, willful misstatement, or suppression of facts
- Show cause notice must be issued
- Can be reduced to 50% if paid within 30 days of notice
- Higher penalty to deter tax evasion`,

  'penalty 10 percent': `**10% Penalty (Section 73):**
- For incorrect returns without fraud
- Up to 10% of tax amount or ₹10,000, whichever is higher
- Can be reduced to 25% if paid within 30 days of notice
- Applies to cases of non-payment, short payment, or erroneous refund`,

  'penalty 100 percent': `**100% Penalty (Section 74):**
- For fraud, willful misstatement, or suppression
- Up to 100% of tax amount
- Can be reduced to 50% if paid within 30 days of notice
- Higher penalty to deter tax evasion`,

  // E-way Bill Rules
  'eway bill limit': `**E-Way Bill Limit:**
- **Threshold:** ₹50,000
- Required when value of goods > ₹50,000
- Applies to movement of goods (inter-state and intra-state)
- Not required for exempt supplies or specified goods`,

  'eway bill validity': `**E-Way Bill Validity:**
- **Regular goods:** 100 km per day
- **Over Dimensional Cargo (ODC):** 200 km per day
- Validity calculated from date and time of generation
- Can be extended if goods not delivered within validity period
- Example: 500 km distance = 5 days validity for regular goods`,

  'eway bill 50000': `**E-Way Bill ₹50,000 Limit:**
- Required when invoice value > ₹50,000
- Includes all taxes and charges
- Not required for: Exempt supplies, non-taxable supplies, goods in Annexure
- Movement within 50 km radius exempted`,

  // Composition Scheme
  'composition limit': `**Composition Scheme Limit:**
- **Normal states:** ₹1.5 crore turnover
- **Special category states:** ₹75 lakhs turnover
- Must opt for composition scheme before start of financial year
- Cannot opt out during the year (except in certain cases)`,

  'composition rate': `**Composition Scheme Rates:**
- **Traders:** 1% (0.5% CGST + 0.5% SGST)
- **Manufacturers:** 1% (0.5% CGST + 0.5% SGST)
- **Restaurants:** 5% (2.5% CGST + 2.5% SGST)
- Rates are on turnover, not profit
- No ITC available under composition scheme`,

  'composition 1.5 crore': `**Composition Scheme ₹1.5 Crore Limit:**
- Applies to normal states
- Turnover limit for eligibility
- Special category states: ₹75 lakhs
- Must file GSTR-4 quarterly
- Cannot make inter-state supplies`,

  // Place of Supply Rules
  'place of supply goods': `**Place of Supply - Goods (Section 10 IGST Act):**
- **If goods moved:** Location where movement terminates
- **If goods not moved:** Location of goods at time of delivery
- **Installation/assembly:** Place where installation/assembly completed
- Determines whether CGST+SGST or IGST applies`,

  'place of supply services': `**Place of Supply - Services (Section 12-13 IGST Act):**
- **General rule:** Location of recipient (if known)
- **If recipient location unknown:** Location of supplier
- **Special rules for:**
  - Immovable property: Location of property
  - Restaurant: Location of restaurant
  - Transportation: Place where goods/passengers taken on board
  - Banking/Insurance: Location of recipient`,

  // RCM Provisions
  'rcm section 9 3': `**RCM - Section 9(3) - Notified Supplies:**
- Legal services by advocate/firm
- Services by goods transport agency
- Sponsorship services
- Services by director to company
- Services by insurance agent
- Services by recovery agent
- Recipient must pay GST and claim ITC`,

  'rcm section 9 4': `**RCM - Section 9(4) - Unregistered Suppliers:**
- Currently mostly suspended
- Applies only to specific notified goods/services
- Recipient pays GST when purchasing from unregistered supplier
- Can claim ITC if eligible
- Check latest notifications for active provisions`,

  // Additional Return Details
  'gstr-4': `**GSTR-4 (Composition Scheme Return):**
- **Due:** 18th of month following the quarter
- Quarterly return for composition taxpayers
- Turnover limit: ₹1.5 crore (₹75 lakhs for special states)
- Tax rate: 1% (traders/manufacturers) or 5% (restaurants)`,

  'gstr-5': `**GSTR-5 (Non-Resident Taxable Person):**
- **Due:** 20th of the following month
- For non-resident taxable persons
- Must file return for each month of registration
- Cannot opt for composition scheme`,

  'gstr-6': `**GSTR-6 (Input Service Distributor):**
- **Due:** 13th of the following month
- For Input Service Distributors (ISD)
- Distribution of ITC to branches/units
- Must be registered as ISD`,

  'gstr-7': `**GSTR-7 (TDS Return):**
- **Due:** 10th of the following month
- For persons deducting TDS under GST
- TDS rate: 2% (1% CGST + 1% SGST/IGST)
- TDS deducted on payments to suppliers`,

  'gstr-8': `**GSTR-8 (TCS Return):**
- **Due:** 10th of the following month
- For e-commerce operators collecting TCS
- TCS rate: 1% (0.5% CGST + 0.5% SGST/IGST)
- TCS collected on supplies made through e-commerce platform`,

  // QRMP Scheme
  'qrmp': `**QRMP Scheme (Quarterly Return Monthly Payment):**
- **Eligibility:** Turnover up to ₹5 crore
- **GSTR-1:** Due 13th of month following quarter
- **GSTR-3B:** Due 22nd/24th of month following quarter
- **Monthly Payment:** Must pay tax monthly using PMT-06
- Can opt in/out before start of quarter`,

  // Additional Topics
  'tds gst': `**TDS under GST (Section 51):**
- **Rate:** 2% (1% CGST + 1% SGST/IGST)
- Applies to: Government departments, local authorities, specified persons
- Deducted on payments to suppliers
- TDS return: GSTR-7 (due 10th of following month)
- Supplier can claim TDS as credit`,

  'tcs gst': `**TCS under GST (Section 52):**
- **Rate:** 1% (0.5% CGST + 0.5% SGST/IGST)
- Applies to: E-commerce operators
- Collected on supplies made through e-commerce platform
- TCS return: GSTR-8 (due 10th of following month)
- Supplier can claim TCS as credit`,

  'refund': `**GST Refund:**
- **Time limit:** 2 years from relevant date
- **Types:** Export refund, ITC refund, excess payment refund
- **Process:** File refund application (RFD-01)
- **Interest:** 6% if refund delayed beyond 60 days
- **Documents:** Invoice, shipping bill, bank statement`,

  'audit': `**GST Audit (Section 35):**
- **Required for:** Turnover > ₹5 crore
- **Due:** 30th September of following financial year
- **Form:** GSTR-9C (reconciliation statement)
- **CA Certification:** Required
- **Audit by Department:** Can be conducted under Section 65`,

  'assessment': `**GST Assessment:**
- **Self-assessment:** Taxpayer files return and pays tax
- **Provisional assessment:** Section 60 (when unable to determine tax)
- **Scrutiny assessment:** Section 61 (department scrutiny)
- **Best judgment assessment:** Section 62 (non-filers)
- **Summary assessment:** Section 64 (to protect revenue)`
};


function searchCurriculum(query: string): { section: any; chapter: any; module: any; score: number }[] {
  const q = query.toLowerCase().trim();
  const results: { section: any; chapter: any; module: any; score: number }[] = [];
  
  // Extract keywords from query (filter out common words, but keep important ones like "gst")
  const stopWords = ['what', 'are', 'is', 'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'about', 'how', 'when', 'where', 'why', 'which', 'who', 'under'];
  const keywords = q.split(/\s+/).filter(w => w.length > 1 && !stopWords.includes(w));
  
  // Extract phrases (2-3 word combinations)
  const phrases: string[] = [];
  const words = q.split(/\s+/);
  for (let i = 0; i < words.length - 1; i++) {
    const twoWord = `${words[i]} ${words[i + 1]}`;
    if (twoWord.length > 4 && !stopWords.includes(words[i]) && !stopWords.includes(words[i + 1])) {
      phrases.push(twoWord);
    }
    if (i < words.length - 2) {
      const threeWord = `${words[i]} ${words[i + 1]} ${words[i + 2]}`;
      if (threeWord.length > 6 && !stopWords.includes(words[i]) && !stopWords.includes(words[i + 1]) && !stopWords.includes(words[i + 2])) {
        phrases.push(threeWord);
      }
    }
  }
  
  for (const module of GST_MODULES) {
    for (const chapter of module.chapters) {
      // Check chapter-level match first (important for queries like "gst audit")
      const chapterSearchText = `${chapter.title} ${chapter.description} ${chapter.slug}`.toLowerCase();
      let chapterScore = 0;
      
      // Exact chapter title match (very high priority)
      if (chapter.title.toLowerCase() === q || chapter.title.toLowerCase().includes(q) || q.includes(chapter.title.toLowerCase())) {
        chapterScore += 150;
      }
      
      // Phrase matches in chapter
      for (const phrase of phrases) {
        if (chapterSearchText.includes(phrase)) {
          chapterScore += 60;
        }
      }
      
      // Keywords in chapter title (high priority)
      for (const keyword of keywords) {
        if (chapter.title.toLowerCase().includes(keyword)) {
          chapterScore += 40;
        }
        if (chapterSearchText.includes(keyword)) {
          chapterScore += 10;
        }
      }
      
      for (const section of chapter.sections) {
        let score = chapterScore; // Start with chapter score
        const searchText = `${section.title} ${section.description} ${section.keyPoints.join(' ')} ${chapter.title} ${chapter.description}`.toLowerCase();
        
        // Exact full query match (highest priority)
        if (searchText.includes(q)) {
          score += 200;
        }
        
        // Phrase matches (higher priority than individual words)
        for (const phrase of phrases) {
          if (phrase.length > 4 && searchText.includes(phrase)) {
            score += 60;
            // Extra boost if phrase in title
            if (section.title.toLowerCase().includes(phrase)) score += 40;
            if (chapter.title.toLowerCase().includes(phrase)) score += 30;
          }
        }
        
        // Individual keyword matches
        let matchedKeywords = 0;
        for (const keyword of keywords) {
          if (searchText.includes(keyword)) {
            matchedKeywords++;
            score += 8;
            // Boost if in title
            if (section.title.toLowerCase().includes(keyword)) score += 25;
            if (chapter.title.toLowerCase().includes(keyword)) score += 20;
          }
        }
        
        // Don't penalize if chapter title matched well
        if (matchedKeywords === 1 && keywords.length > 1 && chapterScore < 50) {
          score -= 15;
        }
        
        // Section number match
        if (q.includes(`section ${section.number}`) || q.includes(`sec ${section.number}`) || q.includes(`s.${section.number}`) || q.includes(`s ${section.number}`)) {
          score += 100;
        }
        
        // Chapter number match
        if (q.includes(`chapter ${chapter.id}`) || q.includes(`ch ${chapter.id}`) || q.includes(`ch.${chapter.id}`)) {
          score += 50;
        }
        
        if (score > 0) {
          results.push({ section, chapter, module, score });
        }
      }
    }
  }
  
  return results.sort((a, b) => b.score - a.score).slice(0, 8);
}

function formatMessageContent(content: string): string {
  let html = content;
  
  // Split content into sections for better parsing
  const sections: string[] = [];
  let currentSection = '';
  let inKeyPoints = false;
  let inRelatedTopics = false;
  
  const lines = html.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Detect Key Points section
    if (line.trim().startsWith('**Key Points:**')) {
      if (currentSection) sections.push(currentSection);
      currentSection = '<h4 class="text-sm font-semibold mt-4 mb-2 text-white">Key Points:</h4><ul class="list-disc space-y-1 mb-4 ml-4">';
      inKeyPoints = true;
      continue;
    }
    
    // Detect Related Topics section
    if (line.trim().startsWith('**Related Topics:**')) {
      if (currentSection) sections.push(currentSection);
      currentSection = '<div class="mt-4 pt-4 border-t border-gray-600"><h4 class="text-xs font-semibold mb-2 text-gray-400">Related Topics:</h4><ul class="list-disc space-y-1 ml-4">';
      inRelatedTopics = true;
      inKeyPoints = false;
      continue;
    }
    
    // Detect Reference section (starts with *Reference:)
    if (line.trim().startsWith('*Reference:')) {
      if (currentSection) sections.push(currentSection);
      // Extract reference link
      const refMatch = line.match(/\*Reference:\s*\[([^\]]+)\]\(([^)]+)\)/);
      if (refMatch) {
        currentSection = `<div class="mt-4 pt-4 border-t border-gray-600"><p class="text-xs text-gray-400 mb-2"><strong>Reference:</strong> <a href="${refMatch[2]}" class="text-blue-400 hover:text-blue-300 underline">${refMatch[1]}</a></p></div>`;
      } else {
        currentSection = `<div class="mt-4 pt-4 border-t border-gray-600"><p class="text-xs text-gray-400 mb-2">${line.replace(/^\*/, '').replace(/\*/g, '')}</p></div>`;
      }
      inKeyPoints = false;
      inRelatedTopics = false;
      continue;
    }
    
    // Handle bullet points in Key Points or Related Topics
    if ((inKeyPoints || inRelatedTopics) && line.trim().startsWith('-')) {
      const bulletContent = line.trim().substring(1).trim();
      // Check if it's a link
      const linkMatch = bulletContent.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        currentSection += `<li class="text-xs mb-1"><a href="${linkMatch[2]}" class="text-blue-400 hover:text-blue-300 underline">${linkMatch[1]}</a></li>`;
      } else {
        // Format any bold text in bullet
        const formattedBullet = bulletContent.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-white">$1</strong>');
        currentSection += `<li class="text-sm text-gray-200 mb-1">${formattedBullet}</li>`;
      }
      continue;
    }
    
    // End of Key Points or Related Topics section
    if ((inKeyPoints || inRelatedTopics) && line.trim() === '' && i < lines.length - 1 && !lines[i + 1].trim().startsWith('-')) {
      if (inKeyPoints) {
        currentSection += '</ul>';
        inKeyPoints = false;
      } else if (inRelatedTopics) {
        currentSection += '</ul></div>';
        inRelatedTopics = false;
      }
      if (currentSection) sections.push(currentSection);
      currentSection = '';
      continue;
    }
    
    // Regular content line
    if (!inKeyPoints && !inRelatedTopics) {
      if (line.trim() === '') {
        if (currentSection.trim()) {
          currentSection += '</p><p class="text-sm text-gray-200 mb-2">';
        }
      } else {
        // Format title (first **text** on its own line)
        if (line.match(/^\*\*[^*]+\*\*$/)) {
          if (currentSection) sections.push(currentSection);
          const title = line.replace(/\*\*/g, '');
          currentSection = `<h3 class="text-lg font-bold mb-2 text-white">${title}</h3>`;
        } else {
          // Format subtitle or regular text
          if (!currentSection || currentSection.endsWith('</h3>')) {
            currentSection += '<p class="text-sm text-gray-300 mb-4">';
          }
          // Format bold text
          let formattedLine = line.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-white">$1</strong>');
          // Format links
          formattedLine = formattedLine.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline">$1</a>');
          currentSection += formattedLine + ' ';
        }
      }
    }
  }
  
  // Close any open sections
  if (inKeyPoints) {
    currentSection += '</ul>';
  } else if (inRelatedTopics) {
    currentSection += '</ul></div>';
  }
  if (currentSection) {
    if (!currentSection.includes('</p>') && !currentSection.includes('</h3>') && !currentSection.includes('</div>')) {
      currentSection += '</p>';
    }
    sections.push(currentSection);
  }
  
  html = sections.join('');
  
  // Final cleanup - ensure all links are formatted
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline" target="_self">$1</a>');
  
  return html || '<p class="text-sm text-gray-200">' + content.replace(/\n/g, '<br/>') + '</p>';
}

// Fuzzy matching function for better keyword detection
function fuzzyMatch(query: string, keywords: string[]): { matched: boolean; score: number; keyword: string } {
  const q = query.toLowerCase().trim();
  let bestMatch = { matched: false, score: 0, keyword: '' };
  
  for (const keyword of keywords) {
    const kw = keyword.toLowerCase();
    
    // Exact match (highest score)
    if (q === kw || q.includes(kw) || kw.includes(q)) {
      return { matched: true, score: 100, keyword };
    }
    
    // Check if all words in keyword are present
    const kwWords = kw.split(/\s+/);
    const allWordsPresent = kwWords.every(word => word.length > 2 && q.includes(word));
    if (allWordsPresent) {
      const score = (kwWords.filter(w => q.includes(w)).length / kwWords.length) * 80;
      if (score > bestMatch.score) {
        bestMatch = { matched: true, score, keyword };
      }
    }
    
    // Check for partial word matches
    for (const word of kwWords) {
      if (word.length > 3 && q.includes(word)) {
        const score = (word.length / Math.max(q.length, kw.length)) * 60;
        if (score > bestMatch.score) {
          bestMatch = { matched: true, score, keyword };
        }
      }
    }
  }
  
  return bestMatch;
}

// Get related topics based on query
function getRelatedTopics(query: string): string[] {
  const q = query.toLowerCase();
  const topics: string[] = [];
  
  if (q.includes('return') || q.includes('gstr')) {
    topics.push('GSTR-1 due date', 'GSTR-3B due date', 'GSTR-9 due date', 'Late fee calculation');
  }
  if (q.includes('penalty') || q.includes('late')) {
    topics.push('Penalty Section 73', 'Penalty Section 74', 'Late fee calculation', 'Interest rate');
  }
  if (q.includes('itc') || q.includes('credit')) {
    topics.push('ITC eligibility', 'ITC time limit', 'ITC 180 days', 'Blocked credits');
  }
  if (q.includes('registration') || q.includes('threshold')) {
    topics.push('Registration threshold', 'Threshold 20 lakh', 'Threshold 40 lakh', 'Composition scheme');
  }
  if (q.includes('eway') || q.includes('way bill')) {
    topics.push('E-way bill limit', 'E-way bill validity', 'E-way bill rules');
  }
  if (q.includes('composition')) {
    topics.push('Composition limit', 'Composition rate', 'GSTR-4');
  }
  if (q.includes('interest')) {
    topics.push('Interest 18 percent', 'Interest 24 percent', 'Late fee calculation');
  }
  
  return topics.slice(0, 5); // Return top 5 related topics
}

function getAIResponse(question: string): string {
  let q = question.toLowerCase().trim();
  const originalQ = q; // Keep original for checking abbreviations
  
  // Expand common GST abbreviations to full terms for better matching
  const abbreviations: Record<string, string> = {
    'tds': 'tax deducted at source',
    'tcs': 'tax collected at source',
    'itc': 'input tax credit',
    'gst': 'goods and services tax',
    'cgst': 'central goods and services tax',
    'sgst': 'state goods and services tax',
    'igst': 'integrated goods and services tax',
    'utgst': 'union territory goods and services tax',
    'gstr': 'gst return',
    'eway': 'e-way bill',
    'eway bill': 'e-way bill',
    'pos': 'place of supply',
    'rcm': 'reverse charge mechanism',
    'lut': 'letter of undertaking',
    'scn': 'show cause notice',
    'oidar': 'online information and database access or retrieval',
  };
  
  // Replace abbreviations with full terms
  for (const [abbr, fullTerm] of Object.entries(abbreviations)) {
    // Match whole word abbreviations (tds, not "tds" inside another word)
    const abbrRegex = new RegExp(`\\b${abbr}\\b`, 'gi');
    if (abbrRegex.test(q)) {
      q = q.replace(abbrRegex, fullTerm);
    }
  }
  
  // Check for penalty/late fee queries IMMEDIATELY after abbreviation expansion
  // This must be FIRST to avoid curriculum search matching wrong topics
  if (q.includes('penalty') || originalQ.includes('penalty')) {
    // If query mentions penalty with filing/return/gstr/gst 3b, return penalty response
    if (q.includes('filing') || q.includes('return') || q.includes('gstr') || q.includes('gst return') ||
        originalQ.includes('filing') || originalQ.includes('return') || originalQ.includes('gstr') ||
        originalQ.includes('gst') || originalQ.includes('3b') ||
        q.includes('non') || originalQ.includes('non')) {
      return GST_RESPONSES['penalty'];
    }
    // Any penalty query should return penalty response
    return GST_RESPONSES['penalty'];
  }
  
  // Check for late fee queries
  if (q.includes('late fee') || (q.includes('late') && q.includes('fee')) ||
      originalQ.includes('late fee') || (originalQ.includes('late') && originalQ.includes('fee'))) {
    return GST_RESPONSES['late fee'];
  }
  
  // Check for GSTR-3B late fee/penalty specifically
  if ((q.includes('gstr-3b') || q.includes('gstr 3b') || q.includes('gst return 3b') ||
       originalQ.includes('gstr-3b') || originalQ.includes('gstr 3b') || originalQ.includes('3b')) && 
      (q.includes('late') || q.includes('penalty') || q.includes('fee') ||
       originalQ.includes('late') || originalQ.includes('penalty') || originalQ.includes('fee'))) {
    return GST_RESPONSES['late fee'];
  }
  
  // Check for "all return due dates" query
  if ((q.includes('all return') && (q.includes('due date') || q.includes('due dates'))) ||
      (q.includes('return due date') && (q.includes('all') || q.includes('list'))) ||
      (originalQ.includes('all return') && (originalQ.includes('due date') || originalQ.includes('due dates')))) {
    return GST_RESPONSES['all return due dates'];
  }
  
  // Try fuzzy matching against all GST_RESPONSES keys
  const responseKeys = Object.keys(GST_RESPONSES);
  const fuzzyResult = fuzzyMatch(q, responseKeys);
  
  // If fuzzy match found with good score (>= 60), use it
  if (fuzzyResult.matched && fuzzyResult.score >= 60) {
    return GST_RESPONSES[fuzzyResult.keyword];
  }
  
  // Also check original query for fuzzy match
  const originalFuzzyResult = fuzzyMatch(originalQ, responseKeys);
  if (originalFuzzyResult.matched && originalFuzzyResult.score >= 60) {
    return GST_RESPONSES[originalFuzzyResult.keyword];
  }
  
  // Check specific keyword patterns with fuzzy matching
  const keywordPatterns: Array<{ patterns: string[]; key: string }> = [
    { patterns: ['gstr-1', 'gstr 1', 'gstr1', 'return 1'], key: 'gstr-1 due date' },
    { patterns: ['gstr-3b', 'gstr 3b', 'gstr3b', 'return 3b', '3b return'], key: 'gstr-3b due date' },
    { patterns: ['gstr-9', 'gstr 9', 'gstr9', 'annual return'], key: 'gstr-9 due date' },
    { patterns: ['gstr-9c', 'gstr 9c', 'gstr9c', 'reconciliation'], key: 'gstr-9c due date' },
    { patterns: ['late fee', 'latefee', 'delay fee'], key: 'late fee' },
    { patterns: ['interest rate', 'interest', '18 percent', '18%'], key: 'interest rate' },
    { patterns: ['24 percent', '24%', 'excess itc interest'], key: 'interest 24 percent' },
    { patterns: ['registration threshold', 'threshold', '20 lakh', '40 lakh', '10 lakh'], key: 'registration threshold' },
    { patterns: ['itc time limit', 'itc deadline', 'november 30'], key: 'itc time limit' },
    { patterns: ['itc 180', '180 days', 'payment 180'], key: 'itc 180 days' },
    { patterns: ['blocked credit', 'section 17 5', 'section 17(5)'], key: 'itc blocked credits' },
    { patterns: ['penalty 73', 'section 73', '10 percent penalty'], key: 'penalty section 73' },
    { patterns: ['penalty 74', 'section 74', '100 percent penalty'], key: 'penalty section 74' },
    { patterns: ['eway bill', 'ewaybill', 'e way bill', '50,000', '50000'], key: 'eway bill limit' },
    { patterns: ['composition', 'composition scheme', '1.5 crore'], key: 'composition limit' },
    { patterns: ['place of supply', 'pos goods', 'pos services'], key: 'place of supply' },
    { patterns: ['rcm', 'reverse charge', 'section 9 3'], key: 'rcm section 9 3' },
    { patterns: ['qrmp', 'quarterly return'], key: 'qrmp' },
    { patterns: ['tds', 'tax deducted'], key: 'tds gst' },
    { patterns: ['tcs', 'tax collected'], key: 'tcs gst' },
  ];
  
  for (const pattern of keywordPatterns) {
    if (pattern.patterns.some(p => q.includes(p) || originalQ.includes(p))) {
      if (GST_RESPONSES[pattern.key]) {
        return GST_RESPONSES[pattern.key];
      }
    }
  }
  
  // Handle LUT/Letter of Undertaking queries (after penalty checks)
  // Check both original query (for "lut") and expanded query (for "letter of undertaking")
  if (originalQ.includes('lut') || q.includes('letter of undertaking') || 
      (q.includes('undertaking') && (q.includes('export') || q.includes('zero') || q.includes('supply')))) {
    return `**Letter of Undertaking (LUT) under GST:**

**Definition:**
LUT is a document that allows exporters to make zero-rated supplies (exports and supplies to SEZ) without payment of IGST.

**Key Features:**

**1. Purpose:**
- Allows exports without payment of IGST
- Alternative to paying tax and claiming refund
- Simplifies export process

**2. Validity:**
- Valid for 1 financial year
- Must be filed before making exports
- Can be renewed annually

**3. Eligibility:**
- Any registered person making exports
- No restrictions on turnover
- Can be used for both goods and services exports

**4. Benefits:**
- No need to pay tax upfront
- No need to wait for refund
- Working capital not blocked
- Faster export process

**5. Conditions:**
- Must be filed electronically on GST portal
- Must be filed before making exports
- Cannot be used if bond was executed earlier
- Must comply with export conditions

**6. Zero-Rated Supplies:**
- Export of goods or services
- Supply to SEZ developer or unit
- Can use LUT OR pay tax and claim refund

**Important Notes:**
- LUT is filed in Form RFD-11
- Must be filed before each financial year
- If LUT is rejected, can file bond instead
- LUT cannot be used if there are pending refunds

*Reference: [Section 16 of IGST Act - Zero rated supply](/modules/igst-act/igst-zero-rated)*`;
  }
  
  // Handle "reversal formula" or "reverse formula" queries FIRST - common ITC reversal formula
  if (q.includes('reversal formula') || q.includes('reverse formula') || 
      (q.includes('reversal') && q.includes('formula')) ||
      (q.includes('reverse') && q.includes('formula'))) {
    return `**ITC Reversal Formula (Rule 38):**

**Common Credit Reversal Formula:**
\`\`\`
Reversal Amount = (Exempt Turnover / Total Turnover) × Common Credit
\`\`\`

**Where:**
- **Exempt Turnover:** Value of exempt supplies (excluding taxes)
- **Total Turnover:** Value of all supplies (excluding taxes)  
- **Common Credit:** ITC on inputs/services used for both exempt and taxable supplies

**Example Calculation:**
- Total Turnover: ₹10,00,000
- Exempt Turnover: ₹2,00,000
- Common Credit: ₹50,000
- **Reversal = (2,00,000 / 10,00,000) × 50,000 = ₹10,000**
- **ITC Available = ₹50,000 - ₹10,000 = ₹40,000**

**When to Apply:**
- When making both exempt and taxable supplies
- For ITC on common inputs/services
- Calculated for each return period (monthly/quarterly)

**Separate Books of Accounts:**
- If **separate books of accounts** are maintained for exempt and taxable supplies
- ITC can be **directly attributed** to each type of supply
- **No reversal required** if ITC is fully attributable to taxable supplies
- Formula applies only when ITC **cannot be directly attributed** (common credit)

**Important Notes:**
- Separate calculation for CGST, SGST, and IGST
- Must be reversed in GSTR-3B
- Interest applies if reversal delayed
- Can be re-availed if exempt supply later becomes taxable
- Maintain proper records for calculation and audit

*Reference: [Section 17(2) of CGST Act](/modules/cgst-act/input-tax-credit) and [Rule 38 of CGST Rules](/modules/cgst-rules/cgst-rules-itc)*`;
  }
  
  // Handle ITC reversal for exempt/non-exempt supplies queries FIRST
  // Match variations: "itc reversal exempt non exempt", "itc reversal both exempt", "common credit exempt", etc.
  // This must come BEFORE curriculum search to ensure correct response
  if ((q.includes('itc reversal') || q.includes('itc apportionment') || q.includes('common credit') ||
       (q.includes('itc') && (q.includes('reversal') || q.includes('apportion')))) &&
      q.includes('exempt') &&
      (q.includes('non exempt') || q.includes('non-exempt') || q.includes('nonexempt') || 
       q.includes('taxable') || q.includes('both') || q.includes('mixed') ||
       (q.includes('non') && q.includes('exempt')))) {
    return `**ITC Reversal for Exempt and Non-Exempt Supplies:**

**Section 17(2) - Apportionment of Credit:**

When a registered person makes both exempt and taxable supplies, ITC must be apportioned. Only the portion attributable to taxable supplies can be claimed.

**Rule 38 - Common Credit Reversal:**

**Formula for Common Credit Reversal:**
\`\`\`
Reversal Amount = (Exempt Turnover / Total Turnover) × Common Credit
\`\`\`

**Key Points:**

**1. Common Credit:**
- ITC on inputs/services used for both exempt and taxable supplies
- Cannot be directly attributed to either type
- Must be apportioned based on turnover ratio

**2. Calculation Method:**
- **Exempt Turnover:** Value of exempt supplies (excluding taxes)
- **Total Turnover:** Value of all supplies (excluding taxes)
- **Common Credit:** ITC on common inputs/services

**3. Example:**
- Total Turnover: ₹10,00,000
- Exempt Turnover: ₹2,00,000
- Common Credit: ₹50,000
- Reversal = (2,00,000 / 10,00,000) × 50,000 = ₹10,000
- **ITC Available:** ₹40,000

**4. When to Reverse:**
- Calculated for each return period (monthly/quarterly)
- Must be reversed in GSTR-3B
- Interest applies if reversal delayed

**5. Exempt Supplies Include:**
- Nil-rated supplies
- Exempt supplies (by notification)
- Non-taxable supplies
- Supplies outside scope of GST

**6. Important Notes:**
- Reversal is required even if exempt supplies are small
- Separate calculation for CGST, SGST, and IGST
- Can be re-availed if exempt supply later becomes taxable
- Must maintain proper records for calculation

**7. Separate Books of Accounts:**
- If **separate books of accounts** are maintained for exempt and taxable supplies
- ITC can be **directly attributed** to each type of supply
- **No reversal required** if ITC is fully attributable to taxable supplies
- Formula applies only when ITC **cannot be directly attributed** (common credit)
- Must maintain clear segregation in accounting records

**8. Documentation:**
- Maintain records of exempt and taxable turnover
- Keep invoices of common inputs
- Document calculation methodology
- Maintain separate books if applicable

*Reference: [Section 17(2) of CGST Act](/modules/cgst-act/input-tax-credit) and [Rule 38 of CGST Rules](/modules/cgst-rules/cgst-rules-itc)*`;
  }
  
  // Handle queries asking for list of exempt services/goods FIRST (before curriculum search)
  if ((q.includes('which services') || q.includes('what services') || q.includes('list of services')) && 
      (q.includes('exempt') || q.includes('exemption'))) {
    return `**Exempt Services under GST:**

**Common Exempt Services (Notification 12/2017-CT(Rate) and subsequent amendments):**

**1. Educational Services:**
- Services by educational institutions (schools, colleges, universities)
- Services provided to educational institutions
- Online/distance learning courses (some conditions apply)

**2. Healthcare Services:**
- Services by clinical establishments (hospitals, nursing homes, clinics)
- Services provided to clinical establishments
- Medical services by doctors, dentists, paramedics

**3. Transportation:**
- Transportation of passengers (except air travel, first class rail)
- Transportation of goods by road, rail, inland waterways
- Metro, monorail, tramway services

**4. Financial Services:**
- Services by way of extending deposits, loans, advances
- Services by way of renting residential dwelling for use as residence

**5. Religious & Charitable:**
- Services by religious institutions
- Charitable activities (some conditions)

**6. Government Services:**
- Services provided by government/local authorities (except specified services)
- Services by Reserve Bank of India

**7. Other Exempt Services:**
- Services by way of admission to entertainment events (if provided by specified persons)
- Services by way of renting of residential dwelling
- Services by way of job work for processing of goods

**Note:** Exempt services are notified by the government. The complete list is in GST notifications. Exempt services do not attract GST, but ITC on inputs used for exempt services is not available.

*Reference: [Section 11 of CGST Act - Power to grant exemption](/modules/cgst-act/levy-collection)*`;
  }
  
  if ((q.includes('which goods') || q.includes('what goods') || q.includes('list of goods')) && 
      (q.includes('exempt') || q.includes('exemption'))) {
    return `**Exempt Goods under GST:**

**Common Exempt Goods (Notification 2/2017-CT(Rate) and subsequent amendments):**

**1. Unprocessed Food Items:**
- Fresh fruits and vegetables
- Unprocessed cereals, pulses, grains
- Fresh milk, curd, buttermilk
- Fresh meat, fish, poultry (unprocessed)
- Eggs

**2. Basic Necessities:**
- Unprocessed salt
- Jaggery (gur)
- Unbranded atta, maida, besan
- Unbranded paneer

**3. Live Animals & Birds:**
- Live animals (except horses)
- Live birds, fish, insects

**4. Printed Materials:**
- Books, newspapers, journals
- Maps, charts, globes
- Printed educational materials

**5. Specific Items:**
- Human blood and blood plasma
- Contraceptives
- Hearing aids
- Handloom fabrics (some conditions)

**Note:** Exempt goods are notified by the government. The complete list is in GST notifications. Exempt goods do not attract GST, but ITC on inputs used for exempt goods is not available.

*Reference: [Section 11 of CGST Act - Power to grant exemption](/modules/cgst-act/levy-collection)*`;
  }
  
  // Use the expanded query (q) for all subsequent processing
  // Check if this is a comparison query
  const isComparison = q.includes(' vs ') || q.includes(' versus ') || q.includes(' vs. ') || 
                       q.includes('difference between') || q.includes('compare') || 
                       q.includes('distinguish') || (q.includes('and') && (q.includes('difference') || q.includes('compare')));
  
  if (isComparison) {
    // Extract the two topics being compared
    const vsIndex = q.indexOf(' vs ') !== -1 ? q.indexOf(' vs ') : 
                    q.indexOf(' versus ') !== -1 ? q.indexOf(' versus ') :
                    q.indexOf(' vs. ') !== -1 ? q.indexOf(' vs. ') : -1;
    
    let topic1 = '', topic2 = '';
    if (vsIndex !== -1) {
      topic1 = q.substring(0, vsIndex).trim();
      topic2 = q.substring(vsIndex + (q.includes(' vs ') ? 4 : q.includes(' vs. ') ? 5 : 8)).trim();
    } else if (q.includes('difference between')) {
      const parts = q.replace('difference between', '').split(' and ');
      if (parts.length >= 2) {
        topic1 = parts[0].trim();
        topic2 = parts.slice(1).join(' and ').trim();
      }
    } else {
      // Try to extract topics from other comparison patterns
      const andIndex = q.indexOf(' and ');
      if (andIndex !== -1 && (q.includes('difference') || q.includes('compare'))) {
        topic1 = q.substring(0, andIndex).replace(/difference|compare|between|distinguish/gi, '').trim();
        topic2 = q.substring(andIndex + 5).replace(/difference|compare|between|distinguish/gi, '').trim();
      }
    }
    
    // Clean up topics (remove common words)
    const cleanTopic = (t: string) => {
      return t.replace(/^(what|are|is|the|for|of|in|on|at|to|with|by|from|about|how|when|where|why|a|an)\s+/i, '').trim();
    };
    
    topic1 = cleanTopic(topic1);
    topic2 = cleanTopic(topic2);
    
    // Expand abbreviations in topics before searching
    let expandedTopic1 = topic1;
    let expandedTopic2 = topic2;
    for (const [abbr, fullTerm] of Object.entries(abbreviations)) {
      const abbrRegex = new RegExp(`\\b${abbr}\\b`, 'gi');
      if (abbrRegex.test(expandedTopic1)) expandedTopic1 = expandedTopic1.replace(abbrRegex, fullTerm);
      if (abbrRegex.test(expandedTopic2)) expandedTopic2 = expandedTopic2.replace(abbrRegex, fullTerm);
    }
    
    // Search for both topics
    const results1 = expandedTopic1 ? searchCurriculum(expandedTopic1) : [];
    const results2 = expandedTopic2 ? searchCurriculum(expandedTopic2) : [];
    
    // Check if both results point to the same section (prevent duplicates)
    const isSameSection = results1.length > 0 && results2.length > 0 && 
                         results1[0].section.id === results2[0].section.id;
    
    // Build comparison response
    let response = `**Comparison: ${topic1 || 'Topic 1'} vs ${topic2 || 'Topic 2'}**\n\n`;
    
    // Handle specific comparisons that don't have separate sections
    const topic1Lower = topic1.toLowerCase();
    const topic2Lower = topic2.toLowerCase();
    const isInvoiceVsBill = (topic1Lower.includes('tax invoice') || topic1Lower.includes('invoice')) && 
                           (topic2Lower.includes('bill of supply') || topic2Lower.includes('bill supply'));
    const isBillVsInvoice = (topic1Lower.includes('bill of supply') || topic1Lower.includes('bill supply')) && 
                           (topic2Lower.includes('tax invoice') || topic2Lower.includes('invoice'));
    
    if (isInvoiceVsBill || isBillVsInvoice) {
      // Special handling for tax invoice vs bill of supply
      const invoiceResult = results1.find(r => r.section.title.toLowerCase().includes('tax invoice')) || 
                           results2.find(r => r.section.title.toLowerCase().includes('tax invoice')) ||
                           results1[0] || results2[0];
      
      // Check if query is specific about services or goods
      const isForServices = q.includes('for services') || q.includes('service');
      const isForGoods = q.includes('for goods') || (q.includes('good') && !q.includes('service'));
      
      if (invoiceResult) {
        response += `**Tax Invoice${isForServices ? ' for Services' : isForGoods ? ' for Goods' : ''}**\n`;
        response += `When and how to issue tax invoice${isForServices ? ' for services' : isForGoods ? ' for goods' : ''}\n\n`;
        response += `**Key Points:**\n`;
        response += `- Issued for taxable supplies\n`;
        if (isForServices) {
          response += `- For services: Before or after provision of service (within 30 days)\n`;
          response += `- Invoice can be issued before service completion if advance received\n`;
        } else if (isForGoods) {
          response += `- For goods: Before or at time of removal/delivery of goods\n`;
          response += `- Must be issued at the time of supply or removal\n`;
        } else {
          response += `- Before or at time of removal/delivery of goods\n`;
          response += `- Before or after provision of service (within 30 days)\n`;
        }
        response += `- Must show tax amount separately (CGST, SGST/IGST)\n`;
        response += `- Required for ITC claim by recipient\n`;
        const moduleUrl1 = `/modules/${invoiceResult.module.id}`;
        const chapterUrl1 = `/modules/${invoiceResult.module.id}/${invoiceResult.chapter.slug}`;
        response += `\n*Reference: [${invoiceResult.module.name}](${moduleUrl1}) - [${invoiceResult.chapter.title}](${chapterUrl1}) (Section ${invoiceResult.section.number})*\n\n`;
        response += `---\n\n`;
        
        response += `**Bill of Supply${isForServices ? ' for Services' : isForGoods ? ' for Goods' : ''}**\n`;
        response += `When to issue bill of supply instead of tax invoice${isForServices ? ' for services' : isForGoods ? ' for goods' : ''}\n\n`;
        response += `**Key Points:**\n`;
        response += `- Issued for exempt supplies (no tax applicable)\n`;
        response += `- Issued by composition dealers (cannot collect tax)\n`;
        if (isForServices) {
          response += `- For exempt services: Before or after provision (within 30 days)\n`;
        } else if (isForGoods) {
          response += `- For exempt goods: Before or at time of delivery\n`;
        }
        response += `- Does NOT show tax amount (since no tax)\n`;
        response += `- Recipient cannot claim ITC (no tax paid)\n`;
        response += `- Same time limits as tax invoice\n`;
        response += `\n*Reference: [${invoiceResult.module.name}](${moduleUrl1}) - [${invoiceResult.chapter.title}](${chapterUrl1}) (Section ${invoiceResult.section.number})*\n\n`;
      }
    } else {
      // Regular comparison logic
      if (results1.length > 0 && results1[0].score >= 30 && !isSameSection) {
        const best1 = results1[0];
        response += `**${best1.section.title}**\n`;
        response += `${best1.section.description}\n\n`;
        if (best1.section.keyPoints && best1.section.keyPoints.length > 0) {
          response += `**Key Points:**\n`;
          best1.section.keyPoints.slice(0, 5).forEach((point: string) => {
            response += `- ${point}\n`;
          });
        }
        const moduleUrl1 = `/modules/${best1.module.id}`;
        const chapterUrl1 = `/modules/${best1.module.id}/${best1.chapter.slug}`;
        response += `\n*Reference: [${best1.module.name}](${moduleUrl1}) - [${best1.chapter.title}](${chapterUrl1}) (Section ${best1.section.number})*\n\n`;
        response += `---\n\n`;
      }
      
      if (results2.length > 0 && results2[0].score >= 30 && !isSameSection) {
        const best2 = results2[0];
        response += `**${best2.section.title}**\n`;
        response += `${best2.section.description}\n\n`;
        if (best2.section.keyPoints && best2.section.keyPoints.length > 0) {
          response += `**Key Points:**\n`;
          best2.section.keyPoints.slice(0, 5).forEach((point: string) => {
            response += `- ${point}\n`;
          });
        }
        const moduleUrl2 = `/modules/${best2.module.id}`;
        const chapterUrl2 = `/modules/${best2.module.id}/${best2.chapter.slug}`;
        response += `\n*Reference: [${best2.module.name}](${moduleUrl2}) - [${best2.chapter.title}](${chapterUrl2}) (Section ${best2.section.number})*\n\n`;
      }
    }
    
    // Add key differences summary
    if (results1.length > 0 && results2.length > 0 && !isSameSection) {
      response += `**Key Differences:**\n\n`;
      const best1 = results1[0];
      const best2 = results2[0];
      
      // Specific comparisons with detailed differences
      const topic1Lower = topic1.toLowerCase();
      const topic2Lower = topic2.toLowerCase();
      const title1Lower = best1.section.title.toLowerCase();
      const title2Lower = best2.section.title.toLowerCase();
      
      if (isInvoiceVsBill || isBillVsInvoice) {
        response += `**Tax Invoice:**\n`;
        response += `- For taxable supplies\n`;
        response += `- Shows tax amount (CGST, SGST/IGST)\n`;
        response += `- Recipient can claim ITC\n`;
        response += `- Issued by regular registered persons\n\n`;
        
        response += `**Bill of Supply:**\n`;
        response += `- For exempt supplies or composition dealers\n`;
        response += `- Does NOT show tax amount\n`;
        response += `- Recipient cannot claim ITC\n`;
        response += `- Issued when no tax is collected\n\n`;
        
        response += `**Main Difference:**\n`;
        response += `Tax invoice is for taxable supplies where tax is collected and shown, while bill of supply is for exempt supplies or composition dealers where no tax is collected.`;
      } else if ((title1Lower.includes('zero') || topic1Lower.includes('zero')) && 
          (title2Lower.includes('exempt') || topic2Lower.includes('exempt'))) {
        response += `**Zero-Rated Supply:**\n`;
        response += `- Tax rate: 0%\n`;
        response += `- ITC available on inputs\n`;
        response += `- Mainly: Exports, SEZ supplies\n`;
        response += `- Can pay tax and claim refund OR supply under LUT\n`;
        response += `- Section 16 of IGST Act\n\n`;
        
        response += `**Exempt Supply:**\n`;
        response += `- No tax applicable\n`;
        response += `- ITC NOT available on inputs\n`;
        response += `- Specified goods/services by notification\n`;
        response += `- Examples: Fresh vegetables, educational services, healthcare\n`;
        response += `- Section 11 of CGST Act\n\n`;
        
        response += `**Main Difference:**\n`;
        response += `The critical difference is **ITC availability**. Zero-rated supplies allow full ITC on inputs, while exempt supplies do not allow any ITC. This makes zero-rated supplies more beneficial for businesses.`;
      } else if ((title1Lower.includes('cgst') || topic1Lower.includes('cgst')) && 
                 (title2Lower.includes('sgst') || topic2Lower.includes('sgst')) && 
                 (topic1Lower.includes('igst') || topic2Lower.includes('igst'))) {
        response += `**CGST + SGST:** Applied on intra-state supplies (same state)\n`;
        response += `**IGST:** Applied on inter-state supplies (different states)\n`;
        response += `Both are components of GST but apply based on place of supply.`;
      } else {
        response += `Compare the key points above to understand the differences between these concepts.`;
      }
    } else if (results1.length > 0 || results2.length > 0) {
      response += `\n*Note: Found information for one topic. Try searching for the other topic separately for a complete comparison.*`;
    }
    
    if (results1.length > 0 || results2.length > 0) {
      return response;
    }
  }
  
  // Check if query asks to "explain each" or "explain all" - return multiple related sections
  const isExplainEach = q.includes('explain each') || q.includes('explain all') || q.includes('explain every') || 
                        q.includes('all types') || q.includes('each type') || q.includes('different types');
  
  // ALWAYS search curriculum first - it's the comprehensive knowledge base
  // Use expanded query (q) which has abbreviations replaced
  const results = searchCurriculum(q);
  
  // Boost scores for exact keyword matches (e.g., "services" should prioritize service sections)
  const hasServices = q.includes('service');
  const hasGoods = q.includes('good') && !q.includes('service');
  
  // Re-score results to prioritize based on query intent
  const rescoredResults = results.map(result => {
    let adjustedScore = result.score;
    const sectionTitle = result.section.title.toLowerCase();
    
    // If query mentions "services", boost service sections and penalize goods sections
    if (hasServices) {
      if (sectionTitle.includes('service')) {
        adjustedScore += 50;
      } else if (sectionTitle.includes('good')) {
        adjustedScore -= 30;
      }
    }
    
    // If query mentions "goods", boost goods sections and penalize service sections
    if (hasGoods) {
      if (sectionTitle.includes('good')) {
        adjustedScore += 50;
      } else if (sectionTitle.includes('service')) {
        adjustedScore -= 30;
      }
    }
    
    return { ...result, score: adjustedScore };
  }).sort((a, b) => b.score - a.score);
  
  // Use curriculum results if we have good matches (score >= 25 for single word, >= 40 for multi-word)
  const queryWords = q.split(/\s+/).filter(w => w.length > 2 && !['what', 'are', 'is', 'the', 'for', 'of', 'in', 'on', 'at', 'to', 'with', 'by', 'from', 'about', 'how', 'when', 'where', 'why'].includes(w));
  const isMultiWord = queryWords.length >= 2;
  const minScore = isMultiWord ? 40 : 25;
  
  if (rescoredResults.length > 0 && rescoredResults[0].score >= minScore) {
    // If "explain each" query, return multiple related sections
    if (isExplainEach) {
      // Find all related sections - same chapter or same topic area
      const primarySection = rescoredResults[0];
      
      // Extract main topic from query (e.g., "place of supply of services")
      const mainTopic = q.replace(/explain\s+(each|all|every)|all\s+types|each\s+type|different\s+types/gi, '').trim();
      
      // Find all sections that match the main topic
      const relatedSections = rescoredResults.filter(r => {
        const sectionTitle = r.section.title.toLowerCase();
        const chapterTitle = r.chapter.title.toLowerCase();
        
        // Check if section is in same chapter (most reliable)
        if (r.chapter.id === primarySection.chapter.id) {
          return r.score >= 25;
        }
        
        // Check if section title contains main topic keywords
        const topicWords = mainTopic.split(/\s+/).filter(w => w.length > 3);
        const matchesTopic = topicWords.some(word => 
          sectionTitle.includes(word) || chapterTitle.includes(word)
        );
        
        return matchesTopic && r.score >= 30;
      });
      
      // If we found multiple related sections, show all; otherwise show primary + related
      const sectionsToShow = relatedSections.length > 1 
        ? relatedSections.slice(0, 6) 
        : [primarySection, ...rescoredResults.slice(1, 3).filter(r => r.score >= 35)];
      
      let response = `**${primarySection.chapter.title}**\n\n`;
      response += `${primarySection.chapter.description}\n\n`;
      response += `Here are the different types:\n\n`;
      
      sectionsToShow.forEach((result, index) => {
        response += `**${index + 1}. ${result.section.title}**\n`;
        response += `${result.section.description}\n\n`;
        
        if (result.section.keyPoints && result.section.keyPoints.length > 0) {
          response += `**Key Points:**\n`;
          result.section.keyPoints.forEach((point: string) => {
            response += `- ${point}\n`;
          });
        }
        
        const moduleUrl = `/modules/${result.module.id}`;
        const chapterUrl = `/modules/${result.module.id}/${result.chapter.slug}`;
        response += `\n*Reference: [${result.module.name}](${moduleUrl}) - [${result.chapter.title}](${chapterUrl}) (Section ${result.section.number})*\n\n`;
        if (index < sectionsToShow.length - 1) {
          response += `---\n\n`;
        }
      });
      
      return response;
    }
    
    // Single section response
    const best = rescoredResults[0];
    
    // Build comprehensive response from curriculum
    let response = `**${best.section.title}**\n\n`;
    response += `${best.section.description}\n\n`;
    
    if (best.section.keyPoints && best.section.keyPoints.length > 0) {
      response += `**Key Points:**\n`;
      best.section.keyPoints.forEach((point: string) => {
        response += `- ${point}\n`;
      });
    }
    
    const moduleUrl = `/modules/${best.module.id}`;
    const chapterUrl = `/modules/${best.module.id}/${best.chapter.slug}`;
    response += `\n*Reference: [${best.module.name}](${moduleUrl}) - [Chapter ${best.chapter.id}: ${best.chapter.title}](${chapterUrl}) (Section ${best.section.number})*`;
    
    // Add related sections if highly relevant
    const relatedSections: string[] = [];
    for (let i = 1; i < Math.min(rescoredResults.length, 4); i++) {
      if (rescoredResults[i].score >= 35) {
        const relModuleUrl = `/modules/${rescoredResults[i].module.id}`;
        const relChapterUrl = `/modules/${rescoredResults[i].module.id}/${rescoredResults[i].chapter.slug}`;
        relatedSections.push(`[${rescoredResults[i].section.title}](${relChapterUrl}) (${rescoredResults[i].module.name})`);
      }
    }
    
    if (relatedSections.length > 0) {
      response += `\n\n**Related Topics:**\n`;
      relatedSections.forEach(rel => {
        response += `- ${rel}\n`;
      });
    }
    
    return response;
  }
  
  // Only use hardcoded responses as fallback for very specific queries not in curriculum
  // These are edge cases or quick-reference answers
  if (q.includes('special category state') || (q.includes('special') && q.includes('category') && q.includes('state'))) {
    return `**Special Category States for GST Registration:**

**Threshold Limits:**
- **Special Category States:** ₹10 lakhs aggregate turnover
- **Normal States:** ₹20 lakhs aggregate turnover

**Special Category States:** Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura, Himachal Pradesh, Uttarakhand

**Composition Scheme:** Special Category States threshold is ₹75 lakhs (instead of ₹1.5 crore)`;
  }
  
  // If no curriculum match and no hardcoded response, provide helpful guidance with related topics
  const totalChapters = GST_MODULES.reduce((acc, m) => acc + m.chapters.length, 0);
  const totalSections = GST_MODULES.reduce((acc, m) => acc + m.chapters.reduce((chAcc, ch) => chAcc + ch.sections.length, 0), 0);
  
  // Get related topics based on query
  const relatedTopics = getRelatedTopics(q);
  
  // Check if query seems uncertain or unclear
  const uncertainKeywords = ['maybe', 'possibly', 'might', 'perhaps', 'probably', 'not sure', 'uncertain', 'doubt'];
  const isUncertain = uncertainKeywords.some(kw => q.includes(kw)) || 
                      (q.length < 10 && !q.match(/\d/)) || // Very short queries without numbers
                      (q.split(' ').length < 3 && !q.match(/section|gstr|itc|gst/i)); // Very short without key terms
  
  let response = '';
  
  if (isUncertain || q.length < 5) {
    response = `I'm not certain about the exact answer to "${question}". 

**Please check official sources:**
- GST Portal: https://www.gst.gov.in
- CBIC Website: https://www.cbic.gov.in
- ICAI Publications for detailed provisions

**I can help with:**
- Return due dates (GSTR-1, 3B, 9, 9C)
- Late fees and penalties
- ITC rules and time limits
- Registration thresholds
- E-way bill requirements
- Composition scheme details`;
  } else {
    response = `I searched through ${totalChapters} chapters and ${totalSections} sections in the GST curriculum but couldn't find a specific match for "${question}".

**Related Topics You Might Find Helpful:**`;
    
    if (relatedTopics.length > 0) {
      response += '\n';
      relatedTopics.forEach((topic, index) => {
        response += `\n${index + 1}. ${topic}`;
      });
    } else {
      response += `\n- GST Return Due Dates\n- Late Fee Calculations\n- ITC Rules and Time Limits\n- Registration Thresholds\n- Penalty Provisions\n- E-way Bill Requirements`;
    }
    
    response += `\n\n**Tips for better results:**
- Use specific section numbers: "Section 16", "Section 17(5)", "Section 9"
- Use specific terms: "input tax credit", "time of supply", "place of supply", "composition scheme"
- Ask about specific topics: "GST registration", "e-way bill", "refunds", "assessments"

**Example questions:**
- "What is the due date for GSTR-3B?"
- "Explain Section 16 on ITC eligibility"
- "What is time of supply for goods?"
- "Tell me about composition scheme"
- "What are the late fees for returns?"

I can search through all CGST Act, CGST Rules, and IGST Act provisions to find the answer!`;
  }
  
  return response;
}

export default function TutorPage() {
  const { chatMessages, addChatMessage, clearChat } = useAppStore();
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    setInput('');
    addChatMessage({ role: 'user', content: userMessage });
    
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
    
    const response = getAIResponse(userMessage);
    addChatMessage({ role: 'assistant', content: response });
    setIsTyping(false);
  };

  const handleSuggestion = (question: string) => {
    setInput(question);
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col animate-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <MessageCircle className="w-7 h-7 text-primary-600" />
            GST AI Tutor
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Ask questions about GST Acts & Rules</p>
        </div>
        {chatMessages.length > 0 && (
          <button onClick={clearChat} className="btn btn-ghost text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
            <Trash2 className="w-4 h-4 mr-2" /> Clear Chat
          </button>
        )}
      </div>

      {/* Chat Container */}
      <div className="flex-1 card overflow-hidden flex flex-col">
        {chatMessages.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6">
            <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
              <Bot className="w-10 h-10 text-primary-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Welcome to GST AI Tutor!</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mb-6">
              I can help you understand GST concepts, explain provisions, and answer your queries based on the CGST, IGST Acts and Rules.
            </p>
            <div className="w-full max-w-2xl">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Try asking:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button key={i} onClick={() => handleSuggestion(q)}
                    className="p-3 text-left text-sm bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 transition-colors">
                    <HelpCircle className="w-4 h-4 inline mr-2 opacity-50" />{q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={cn("flex", msg.role === 'user' ? "justify-end" : "justify-start")}>
                <div className={cn("flex items-start gap-3 max-w-[80%]", msg.role === 'user' && "flex-row-reverse")}>
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                    msg.role === 'user' ? "bg-primary-600" : "bg-gray-200 dark:bg-gray-700")}>
                    {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-gray-600 dark:text-gray-400" />}
                  </div>
                  <div className={cn("chat-bubble", msg.role === 'user' ? "chat-bubble-user" : "chat-bubble-assistant")}>
                    <div className="prose prose-sm dark:prose-invert max-w-none" 
                      dangerouslySetInnerHTML={{ 
                        __html: formatMessageContent(msg.content)
                      }} />
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="chat-bubble chat-bubble-assistant">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex gap-3">
            <input type="text" value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSend()}
              placeholder="Ask about GST..."
              className="input flex-1" />
            <button onClick={handleSend} disabled={!input.trim() || isTyping}
              className="btn btn-primary px-6">
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Responses are based on GST Act(s) & Rules - November 2025 Edition
          </p>
        </div>
      </div>
    </div>
  );
}
