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

**Normal States:** ₹20 lakhs aggregate turnover
**Special Category States:** ₹10 lakhs
**For goods suppliers only:** ₹40 lakhs

**Compulsory Registration (As per Section 24):**
- Inter-state suppliers
- Casual taxable persons
- Non-resident taxable persons
- E-commerce operators
- TDS deductors
- Persons making taxable supplies on behalf of other taxable persons

*Reference: [CGST Act - Chapter 6: Registration](/modules/cgst-act/registration) - [Section 22](/modules/cgst-act/registration/sec-22) and [Section 24](/modules/cgst-act/registration/sec-24)*`,

  'cgst sgst igst': `**GST Components:**

**CGST (Central GST):** Collected by Central Government on intra-state supplies
**SGST (State GST):** Collected by State Government on intra-state supplies
**IGST (Integrated GST):** Collected by Central Government on inter-state supplies and imports

**Example:**
- Intra-state sale of ₹10,000 @ 18%: CGST ₹900 + SGST ₹900
- Inter-state sale of ₹10,000 @ 18%: IGST ₹1,800

*Reference: [CGST Act - Chapter 3: Levy and Collection](/modules/cgst-act/levy-collection) - [Section 9](/modules/cgst-act/levy-collection/sec-9) and [IGST Act - Chapter 2: Levy and Collection](/modules/igst-act/igst-levy-collection) - [Section 5](/modules/igst-act/igst-levy-collection/sec-5)*`,

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
10. Tax paid under composition scheme

*Reference: [CGST Act - Chapter 5: Input Tax Credit](/modules/cgst-act/input-tax-credit) - [Section 17(5)](/modules/cgst-act/input-tax-credit/sec-17-5)*`,

  'time of supply': `**Time of Supply of Goods (As per Section 12):**

Earlier of:
- Date of issue of invoice
- Last date to issue invoice
- Date of receipt of payment

**Time of Supply of Services (As per Section 13):**

Earlier of:
- Date of invoice (if issued within prescribed time)
- Date of receipt of payment
- Date of completion of service

*Reference: [CGST Act - Chapter 4: Time and Value of Supply](/modules/cgst-act/time-value-supply) - [Section 12](/modules/cgst-act/time-value-supply/sec-12) and [Section 13](/modules/cgst-act/time-value-supply/sec-13)*`,

  'gstr-3b': `**GSTR-3B Filing:**

**Due Date:** 20th of the following month (for monthly filers)
**For QRMP taxpayers:** 22nd/24th of month following the quarter

**Contents:**
- Summary of outward supplies
- Summary of inward supplies (with reverse charge)
- ITC claimed
- Tax payable and paid

**Late Fee (As per Section 47):** ₹50/day (₹20 for NIL return), max ₹5,000

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 39](/modules/cgst-act/returns/sec-39) and [Section 47](/modules/cgst-act/returns/sec-47)*`,

  'composition': `**Composition Scheme (As per Section 10):**

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
- No ITC available

*Reference: [CGST Act - Chapter 3: Levy and Collection](/modules/cgst-act/levy-collection) - [Section 10](/modules/cgst-act/levy-collection/sec-10)*`,

  'reverse charge': `**Reverse Charge Mechanism (RCM):**

Under RCM, the **recipient pays GST** instead of supplier.

**Section 9(3) - Notified supplies:**
- Legal services by advocate/firm
- Services by goods transport agency
- Sponsorship services
- Services by director to company
- Services by insurance agent
- Services by recovery agent

**Section 9(4) - From unregistered persons:**
- Currently, mostly suspended except for specific cases
- Applies to certain notified goods/services

**Important Notes:**
- RCM does **NOT apply to export of services**
- Export of services is zero-rated (0% GST)
- RCM applies only to domestic supplies
- Recipient can claim ITC on RCM tax paid

*Reference: [CGST Act - Chapter 3: Levy and Collection](/modules/cgst-act/levy-collection) - [Section 9(3)](/modules/cgst-act/levy-collection/sec-9) and [Section 9(4)](/modules/cgst-act/levy-collection/sec-9)*`,

  'e-way bill': `**E-Way Bill (As per Rule 138):**

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
- Non-motorized conveyance

*Reference: [CGST Rules - Chapter 15: E-Way Bills](/modules/cgst-rules/cgst-rules-eway-bills) - [Rule 138](/modules/cgst-rules/cgst-rules-eway-bills/rule-138)*`,

  'place of supply': `**Place of Supply (As per Sections 10-13 IGST Act):**

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
- Attracts CGST + SGST

*Reference: [IGST Act - Chapter 3: Nature of Supply](/modules/igst-act/igst-nature-supply) - [Section 10](/modules/igst-act/igst-nature-supply/sec-10), [Section 12](/modules/igst-act/igst-nature-supply/sec-12), [Section 13](/modules/igst-act/igst-nature-supply/sec-13)*`,

  'itc eligibility': `**ITC Eligibility (As per Section 16):**

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
- Non-business use

*Reference: [CGST Act - Chapter 5: Input Tax Credit](/modules/cgst-act/input-tax-credit) - [Section 16](/modules/cgst-act/input-tax-credit/sec-16)*`,

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
- CA certification required

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 37](/modules/cgst-act/returns/sec-37), [Section 39](/modules/cgst-act/returns/sec-39), [Section 44](/modules/cgst-act/returns/sec-44)*`,

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
- NIL returns have reduced late fees

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 37](/modules/cgst-act/returns/sec-37), [Section 39](/modules/cgst-act/returns/sec-39), [Section 44](/modules/cgst-act/returns/sec-44)*`,

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

**Penalty for Incorrect Return (As per Section 73):**
- Show cause notice issued
- Penalty up to 10% of tax or ₹10,000, whichever is higher

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 47](/modules/cgst-act/returns/sec-47), [Section 50](/modules/cgst-act/returns/sec-50) and [CGST Act - Chapter 15: Demand and Recovery](/modules/cgst-act/demand-recovery) - [Section 73](/modules/cgst-act/demand-recovery/sec-73)*`,

  'late fee': `**Late Fees for GST Returns:**

**GSTR-1 Late Fee (As per Section 47):**
- ₹200 per day (₹100 CGST + ₹100 SGST/IGST)
- Maximum: ₹5,000 per return
- NIL returns: ₹20/day, max ₹500

**GSTR-3B Late Fee (As per Section 47):**
- ₹50 per day (₹25 CGST + ₹25 SGST/IGST)
- Maximum: ₹5,000
- NIL returns: ₹20/day, max ₹500

**Interest on Late Payment (As per Section 50):**
- 18% per annum on tax amount
- From due date to payment date

**Waiver:**
- Late fee may be waived for first-time defaulters
- Subject to conditions and approval

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 47](/modules/cgst-act/returns/sec-47) and [Section 50](/modules/cgst-act/returns/sec-50)*`,

  // Return Due Dates - Individual
  'gstr-1 due date': `**GSTR-1 Due Date:**
- **Due:** 11th of the following month
- Details of all outward supplies
- Late fee (As per Section 47): ₹200/day (₹100 CGST + ₹100 SGST/IGST), max ₹5,000
- NIL return late fee: ₹20/day, max ₹500

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 37](/modules/cgst-act/returns/sec-37) and [Section 47](/modules/cgst-act/returns/sec-47)*`,

  'gstr-3b due date': `**GSTR-3B Due Date:**
- **Due:** 20th of the following month (monthly filers)
- **QRMP taxpayers:** 22nd/24th of month following the quarter
- Summary return with tax payment
- Late fee (As per Section 47): ₹50/day (₹25 CGST + ₹25 SGST/IGST), max ₹5,000
- NIL return late fee: ₹20/day, max ₹500

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 39](/modules/cgst-act/returns/sec-39) and [Section 47](/modules/cgst-act/returns/sec-47)*`,

  'gstr-9 due date': `**GSTR-9 (Annual Return) Due Date:**
- **Due:** 31st December of the following financial year
- Annual consolidation of all returns
- Must be filed by all regular taxpayers
- Late fee applies for delayed filing

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 44](/modules/cgst-act/returns/sec-44)*`,

  'gstr-9c due date': `**GSTR-9C Due Date:**
- **Due:** 31st December of the following financial year
- Required for taxpayers with turnover > ₹5 crore
- Self-certified reconciliation statement
- CA certification required

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 44](/modules/cgst-act/returns/sec-44) and [CGST Act - Chapter 11: Audit](/modules/cgst-act/audit) - [Section 35](/modules/cgst-act/audit/sec-35)*`,

  // Late Fee Calculations
  'late fee calculation': `**Late Fee Calculation (As per Section 47):**

**GSTR-1 Late Fee:**
- **₹200 per day** = ₹100 CGST + ₹100 SGST/IGST
- **Maximum:** ₹5,000 per return
- **Example:** 10 days late = ₹2,000 (₹1,000 CGST + ₹1,000 SGST)
- **NIL returns:** ₹20/day (₹10 CGST + ₹10 SGST/IGST), max ₹500

**GSTR-3B Late Fee:**
- **₹50 per day** = ₹25 CGST + ₹25 SGST/IGST
- **Maximum:** ₹5,000
- **Example:** 20 days late = ₹1,000 (₹500 CGST + ₹500 SGST)
- **NIL returns:** ₹20/day (₹10 CGST + ₹10 SGST/IGST), max ₹500

**Calculation Formula:**
- Late fee = Number of days × Daily rate
- Subject to maximum limit
- Separate calculation for CGST and SGST/IGST

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 47](/modules/cgst-act/returns/sec-47)*`,

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
- Formula: (Tax × Rate × Days) / 365

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 50](/modules/cgst-act/returns/sec-50)*`,

  'interest 18 percent': `**18% Interest Rate (As per Section 50):**
- Applies on late payment of tax
- Calculated from due date to payment date
- Simple interest basis
- Example: ₹1,00,000 tax paid 30 days late = ₹1,00,000 × 18% × 30/365 = ₹1,479

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 50](/modules/cgst-act/returns/sec-50)*`,

  'interest 24 percent': `**24% Interest Rate (As per Section 50(3)):**
- Applies on excess ITC claimed
- Calculated from date of utilization
- Higher rate to discourage incorrect ITC claims
- Example: ₹50,000 excess ITC utilized for 60 days = ₹50,000 × 24% × 60/365 = ₹1,973

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 50(3)](/modules/cgst-act/returns/sec-50)*`,

  // Registration Thresholds
  'registration threshold': `**GST Registration Thresholds:**

**Normal States:**
- ₹20 lakhs aggregate turnover (goods + services)
- ₹40 lakhs for goods suppliers only

**Special Category States:**
- ₹10 lakhs aggregate turnover
- States: Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura, Himachal Pradesh, Uttarakhand

**Compulsory Registration (As per Section 24):**
- No threshold limit - must register regardless of turnover
- Inter-state suppliers, casual taxable persons, e-commerce operators, TDS deductors

*Reference: [CGST Act - Chapter 6: Registration](/modules/cgst-act/registration) - [Section 22](/modules/cgst-act/registration/sec-22) and [Section 24](/modules/cgst-act/registration/sec-24)*`,

  'threshold 20 lakh': `**₹20 Lakh Threshold:**
- Applies to normal states
- For suppliers of goods and services combined
- Aggregate turnover includes all taxable, exempt, and non-taxable supplies
- Excludes taxes and inward supplies

*Reference: [CGST Act - Chapter 6: Registration](/modules/cgst-act/registration) - [Section 22](/modules/cgst-act/registration/sec-22)*`,

  'threshold 40 lakh': `**₹40 Lakh Threshold:**
- Applies to normal states
- **Only for goods suppliers** (not service providers)
- Service providers must register at ₹20 lakh threshold
- If supplying both goods and services, ₹20 lakh threshold applies

*Reference: [CGST Act - Chapter 6: Registration](/modules/cgst-act/registration) - [Section 22](/modules/cgst-act/registration/sec-22)*`,

  'threshold 10 lakh': `**₹10 Lakh Threshold:**
- Applies to special category states
- Lower threshold to support businesses in these states
- Same rules as ₹20 lakh threshold but lower amount

*Reference: [CGST Act - Chapter 6: Registration](/modules/cgst-act/registration) - [Section 22](/modules/cgst-act/registration/sec-22)*`,

  // ITC Rules
  'itc time limit': `**ITC Time Limit (As per Section 16(4)):**
- **Deadline:** 30th November of the following financial year
- Or date of filing annual return (GSTR-9), whichever is earlier
- ITC cannot be claimed after this date
- Example: For FY 2023-24, ITC must be claimed by 30th November 2024

*Reference: [CGST Act - Chapter 5: Input Tax Credit](/modules/cgst-act/input-tax-credit) - [Section 16(4)](/modules/cgst-act/input-tax-credit/sec-16)*`,

  'itc 180 days': `**ITC Reversal - 180 Days Rule (As per Section 16(2)):**
- Payment to supplier must be made within **180 days** of invoice date
- If not paid within 180 days, ITC must be reversed
- ITC can be re-availed when payment is made
- Applies to all registered persons

*Reference: [CGST Act - Chapter 5: Input Tax Credit](/modules/cgst-act/input-tax-credit) - [Section 16(2)](/modules/cgst-act/input-tax-credit/sec-16)*`,

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
10. Tax paid under composition scheme

*Reference: [CGST Act - Chapter 5: Input Tax Credit](/modules/cgst-act/input-tax-credit) - [Section 17(5)](/modules/cgst-act/input-tax-credit/sec-17-5)*`,

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
- Composition scheme tax

*Reference: [CGST Act - Chapter 5: Input Tax Credit](/modules/cgst-act/input-tax-credit) - [Section 17(5)](/modules/cgst-act/input-tax-credit/sec-17-5)*`,

  // Penalty Provisions
  'penalty section 73': `**Section 73 - Penalty for Incorrect Return:**
- **Penalty:** Up to 10% of tax amount
- Minimum: ₹10,000
- Applies when: Tax not paid, short paid, or erroneously refunded
- Show cause notice must be issued
- Can be reduced to 25% if paid within 30 days of notice

*Reference: [CGST Act - Chapter 15: Demands and Recovery](/modules/cgst-act/demands-recovery) - [Section 73](/modules/cgst-act/demands-recovery/sec-73)*`,

  'penalty section 74': `**Section 74 - Penalty for Fraud/Suppression:**
- **Penalty:** Up to 100% of tax amount
- Applies when: Fraud, willful misstatement, or suppression of facts
- Show cause notice must be issued
- Can be reduced to 50% if paid within 30 days of notice
- Higher penalty to deter tax evasion

*Reference: [CGST Act - Chapter 15: Demands and Recovery](/modules/cgst-act/demands-recovery) - [Section 74](/modules/cgst-act/demands-recovery/sec-74)*`,

  'penalty 10 percent': `**10% Penalty (As per Section 73):**
- For incorrect returns without fraud
- Up to 10% of tax amount or ₹10,000, whichever is higher
- Can be reduced to 25% if paid within 30 days of notice
- Applies to cases of non-payment, short payment, or erroneous refund

*Reference: [CGST Act - Chapter 15: Demands and Recovery](/modules/cgst-act/demands-recovery) - [Section 73](/modules/cgst-act/demands-recovery/sec-73)*`,

  'penalty 100 percent': `**100% Penalty (As per Section 74):**
- For fraud, willful misstatement, or suppression
- Up to 100% of tax amount
- Can be reduced to 50% if paid within 30 days of notice
- Higher penalty to deter tax evasion

*Reference: [CGST Act - Chapter 15: Demands and Recovery](/modules/cgst-act/demands-recovery) - [Section 74](/modules/cgst-act/demands-recovery/sec-74)*`,

  // E-way Bill Rules
  'eway bill limit': `**E-Way Bill Limit (As per Rule 138):**
- **Threshold:** ₹50,000
- Required when value of goods > ₹50,000
- Applies to movement of goods (inter-state and intra-state)
- Not required for exempt supplies or specified goods

*Reference: [CGST Rules - Chapter 15: E-Way Bills](/modules/cgst-rules/cgst-rules-eway-bills) - [Rule 138](/modules/cgst-rules/cgst-rules-eway-bills/rule-138)*`,

  'eway bill validity': `**E-Way Bill Validity (As per Rule 138):**
- **Regular goods:** 100 km per day
- **Over Dimensional Cargo (ODC):** 200 km per day
- Validity calculated from date and time of generation
- Can be extended if goods not delivered within validity period
- Example: 500 km distance = 5 days validity for regular goods

*Reference: [CGST Rules - Chapter 15: E-Way Bills](/modules/cgst-rules/cgst-rules-eway-bills) - [Rule 138](/modules/cgst-rules/cgst-rules-eway-bills/rule-138)*`,

  'eway bill 50000': `**E-Way Bill ₹50,000 Limit (As per Rule 138):**
- Required when invoice value > ₹50,000
- Includes all taxes and charges
- Not required for: Exempt supplies, non-taxable supplies, goods in Annexure
- Movement within 50 km radius exempted

*Reference: [CGST Rules - Chapter 15: E-Way Bills](/modules/cgst-rules/cgst-rules-eway-bills) - [Rule 138](/modules/cgst-rules/cgst-rules-eway-bills/rule-138)*`,

  // Composition Scheme
  'composition limit': `**Composition Scheme Limit (As per Section 10):**
- **Normal states:** ₹1.5 crore turnover
- **Special category states:** ₹75 lakhs turnover
- Must opt for composition scheme before start of financial year
- Cannot opt out during the year (except in certain cases)

*Reference: [CGST Act - Chapter 3: Levy and Collection](/modules/cgst-act/levy-collection) - [Section 10](/modules/cgst-act/levy-collection/sec-10)*`,

  'composition rate': `**Composition Scheme Rates (As per Section 10):**
- **Traders:** 1% (0.5% CGST + 0.5% SGST)
- **Manufacturers:** 1% (0.5% CGST + 0.5% SGST)
- **Restaurants:** 5% (2.5% CGST + 2.5% SGST)
- Rates are on turnover, not profit
- No ITC available under composition scheme

*Reference: [CGST Act - Chapter 3: Levy and Collection](/modules/cgst-act/levy-collection) - [Section 10](/modules/cgst-act/levy-collection/sec-10)*`,

  'composition 1.5 crore': `**Composition Scheme ₹1.5 Crore Limit (As per Section 10):**
- Applies to normal states
- Turnover limit for eligibility
- Special category states: ₹75 lakhs
- Must file GSTR-4 quarterly
- Cannot make inter-state supplies

*Reference: [CGST Act - Chapter 3: Levy and Collection](/modules/cgst-act/levy-collection) - [Section 10](/modules/cgst-act/levy-collection/sec-10)*`,

  // Place of Supply Rules
  'place of supply goods': `**Place of Supply - Goods (As per Section 10 IGST Act):**
- **If goods moved:** Location where movement terminates
- **If goods not moved:** Location of goods at time of delivery
- **Installation/assembly:** Place where installation/assembly completed
- Determines whether CGST+SGST or IGST applies

*Reference: [IGST Act - Chapter 3: Nature of Supply](/modules/igst-act/igst-nature-supply) - [Section 10](/modules/igst-act/igst-nature-supply/sec-10)*`,

  'place of supply services': `**Place of Supply - Services (As per Section 12-13 IGST Act):**
- **General rule:** Location of recipient (if known)
- **If recipient location unknown:** Location of supplier
- **Special rules for:**
  - Immovable property: Location of property
  - Restaurant: Location of restaurant
  - Transportation: Place where goods/passengers taken on board
  - Banking/Insurance: Location of recipient

*Reference: [IGST Act - Chapter 3: Nature of Supply](/modules/igst-act/igst-nature-supply) - [Section 12](/modules/igst-act/igst-nature-supply/sec-12) and [Section 13](/modules/igst-act/igst-nature-supply/sec-13)*`,

  // RCM Provisions
  'rcm section 9 3': `**RCM - Section 9(3) - Notified Supplies:**
- Legal services by advocate/firm
- Services by goods transport agency
- Sponsorship services
- Services by director to company
- Services by insurance agent
- Services by recovery agent
- Recipient must pay GST and claim ITC

*Reference: [CGST Act - Chapter 3: Levy and Collection](/modules/cgst-act/levy-collection) - [Section 9(3)](/modules/cgst-act/levy-collection/sec-9)*`,

  'rcm section 9 4': `**RCM - Section 9(4) - Unregistered Suppliers:**
- Currently mostly suspended
- Applies only to specific notified goods/services
- Recipient pays GST when purchasing from unregistered supplier
- Can claim ITC if eligible
- Check latest notifications for active provisions

*Reference: [CGST Act - Chapter 3: Levy and Collection](/modules/cgst-act/levy-collection) - [Section 9(4)](/modules/cgst-act/levy-collection/sec-9)*`,

  // Additional Return Details
  'gstr-4': `**GSTR-4 (Composition Scheme Return):**
- **Due:** 18th of month following the quarter
- Quarterly return for composition taxpayers
- Turnover limit: ₹1.5 crore (₹75 lakhs for special states)
- Tax rate: 1% (traders/manufacturers) or 5% (restaurants)

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 39](/modules/cgst-act/returns/sec-39) and [CGST Act - Chapter 3: Levy and Collection](/modules/cgst-act/levy-collection) - [Section 10](/modules/cgst-act/levy-collection/sec-10)*`,

  'gstr-5': `**GSTR-5 (Non-Resident Taxable Person):**
- **Due:** 20th of the following month
- For non-resident taxable persons
- Must file return for each month of registration
- Cannot opt for composition scheme

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 40](/modules/cgst-act/returns/sec-40)*`,

  'gstr-6': `**GSTR-6 (Input Service Distributor Return):**
- **Due:** 13th of the following month
- For Input Service Distributors (ISD)
- Distribution of ITC to branches/units
- Must be registered as ISD

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 39](/modules/cgst-act/returns/sec-39) and [CGST Act - Chapter 5: Input Tax Credit](/modules/cgst-act/input-tax-credit) - [Section 20](/modules/cgst-act/input-tax-credit/sec-20)*`,

  'input service distributor': `**Input Service Distributor (ISD) - Section 2(61):**

**Definition:**
- Office of supplier receiving invoices for common services
- Distributes ITC to branches/units
- Must be registered as ISD

**Registration:**
- Separate registration as ISD
- Can be registered person or distinct person
- Must have GSTIN

**ITC Distribution:**
- Receives invoices for common services
- Distributes ITC to recipient units
- Based on turnover ratio or equal distribution
- Must issue ISD invoice (GSTIN-ISD)

**Return Filing:**
- **GSTR-6:** Due 13th of following month
- Shows ITC received and distributed
- Auto-populated from GSTR-1 of suppliers

**Key Points:**
- Only for common services (not goods)
- ITC distributed, not transferred
- Recipient units can claim ITC
- Must maintain proper records

*Reference: [CGST Act - Chapter 5: Input Tax Credit](/modules/cgst-act/input-tax-credit) - [Section 20](/modules/cgst-act/input-tax-credit/sec-20)*`,

  'isd': `**ISD (Input Service Distributor):**

**What is ISD?**
- Office receiving invoices for common services
- Distributes ITC to branches/units
- Registered separately as ISD

**Registration:**
- Must register as ISD
- Can be registered person or distinct person
- Separate GSTIN for ISD

**ITC Distribution:**
- Receives invoices for common services
- Distributes ITC based on turnover or equally
- Issues ISD invoice to recipient units
- Recipient units can claim ITC

**Return:** GSTR-6 (due 13th of following month)

*Reference: [CGST Act - Chapter 5: Input Tax Credit](/modules/cgst-act/input-tax-credit) - [Section 20](/modules/cgst-act/input-tax-credit/sec-20)*`,

  'gstr-7': `**GSTR-7 (TDS Return):**
- **Due:** 10th of the following month
- For persons deducting TDS under GST
- TDS rate: 2% (1% CGST + 1% SGST/IGST)
- TDS deducted on payments to suppliers

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 51](/modules/cgst-act/returns/sec-51) and [Section 39](/modules/cgst-act/returns/sec-39)*`,

  'gstr-8': `**GSTR-8 (TCS Return):**
- **Due:** 10th of the following month
- For e-commerce operators collecting TCS
- TCS rate: 1% (0.5% CGST + 0.5% SGST/IGST)
- TCS collected on supplies made through e-commerce platform

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 52](/modules/cgst-act/returns/sec-52) and [Section 39](/modules/cgst-act/returns/sec-39)*`,

  // QRMP Scheme
  'qrmp': `**QRMP Scheme (Quarterly Return Monthly Payment):**
- **Eligibility:** Turnover up to ₹5 crore
- **GSTR-1:** Due 13th of month following quarter
- **GSTR-3B:** Due 22nd/24th of month following quarter
- **Monthly Payment:** Must pay tax monthly using PMT-06
- Can opt in/out before start of quarter

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 39](/modules/cgst-act/returns/sec-39)*`,

  // Additional Topics
  'tds gst': `**TDS under GST (As per Section 51):**
- **Rate:** 2% (1% CGST + 1% SGST/IGST)
- Applies to: Government departments, local authorities, specified persons
- Deducted on payments to suppliers
- TDS return: GSTR-7 (due 10th of following month)
- Supplier can claim TDS as credit

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 51](/modules/cgst-act/returns/sec-51)*`,

  'tcs gst': `**TCS under GST (As per Section 52):**
- **Rate:** 1% (0.5% CGST + 0.5% SGST/IGST)
- Applies to: E-commerce operators
- Collected on supplies made through e-commerce platform
- TCS return: GSTR-8 (due 10th of following month)
- Supplier can claim TCS as credit

*Reference: [CGST Act - Chapter 9: Returns](/modules/cgst-act/returns) - [Section 52](/modules/cgst-act/returns/sec-52)*`,

  'refund': `**GST Refund (Section 54):**

**Time Limit:**
- **2 years** from relevant date (date of export, date of payment, etc.)
- Cannot claim refund after 2 years

**Types of Refunds:**
1. **Export Refund:** Zero-rated supplies (exports, SEZ supplies)
2. **ITC Refund:** Accumulated ITC on exports, inverted duty structure
3. **Excess Payment Refund:** Tax paid in excess
4. **Refund on Cancellation:** Registration cancelled, tax paid in advance
5. **Refund to UN Bodies:** Special refund procedure

**Process:**
- File refund application **RFD-01** on GST portal
- **Acknowledgment:** RFD-02 (within 15 days)
- **Deficiency memo:** RFD-03 (if application incomplete)
- **Payment order:** RFD-05 (within 60 days)
- **Payment:** Within 60 days of order

**Interest on Delayed Refund:**
- **6% per annum** if refund delayed beyond 60 days
- Calculated from date of application to date of payment

**Documents Required:**
- Invoice, shipping bill, bank statement
- Export documents, LUT/bond
- Statement of exports

*Reference: [CGST Act - Chapter 11: Refunds](/modules/cgst-act/refunds) - [Section 54](/modules/cgst-act/refunds/sec-54)*`,

  'refund procedure': `**GST Refund Procedure:**

**Step 1: Application (RFD-01)**
- File refund application on GST portal
- Select refund type (export, ITC, excess payment, etc.)
- Upload required documents

**Step 2: Acknowledgment (RFD-02)**
- Issued within **15 days** of application
- Application number generated

**Step 3: Processing**
- Officer processes application
- May issue deficiency memo (RFD-03) if incomplete
- Can issue show cause notice if required

**Step 4: Payment Order (RFD-05)**
- Issued within **60 days** of application
- Refund sanctioned or rejected

**Step 5: Payment**
- Refund credited within **60 days** of order
- Interest @ 6% if delayed beyond 60 days

**Time Limit:** 2 years from relevant date

*Reference: [CGST Act - Chapter 11: Refunds](/modules/cgst-act/refunds) - [Section 54](/modules/cgst-act/refunds/sec-54)*`,

  'refund timeline': `**GST Refund Timeline:**

**Application to Acknowledgment:** 15 days
**Acknowledgment to Payment Order:** 60 days
**Payment Order to Payment:** 60 days
**Total Maximum Time:** 135 days (excluding interest period)

**Interest Calculation:**
- If refund delayed beyond 60 days from application
- Interest @ **6% per annum**
- From date of application to date of payment

**Time Limit to File:**
- **2 years** from relevant date
- Cannot claim after 2 years

*Reference: [CGST Act - Chapter 11: Refunds](/modules/cgst-act/refunds) - [Section 54](/modules/cgst-act/refunds/sec-54)*`,

  'audit': `**GST Audit (As per Section 35):**
- **Required for:** Turnover > ₹5 crore
- **Due:** 30th September of following financial year
- **Form:** GSTR-9C (reconciliation statement)
- **CA Certification:** Required
- **Audit by Department:** Can be conducted under Section 65

*Reference: [CGST Act - Chapter 11: Audit](/modules/cgst-act/audit) - [Section 35](/modules/cgst-act/audit/sec-35) and [Section 65](/modules/cgst-act/audit/sec-65)*`,

  'assessment': `**GST Assessment:**

**Self-assessment:** Taxpayer files return and pays tax
**Provisional assessment (As per Section 60):** When unable to determine tax
**Scrutiny assessment (As per Section 61):** Department scrutiny
**Best judgment assessment (As per Section 62):** For non-filers
**Summary assessment (As per Section 64):** To protect revenue

*Reference: [CGST Act - Chapter 12: Assessment](/modules/cgst-act/assessment) - [Section 60](/modules/cgst-act/assessment/sec-60), [Section 61](/modules/cgst-act/assessment/sec-61), [Section 62](/modules/cgst-act/assessment/sec-62), [Section 64](/modules/cgst-act/assessment/sec-64)*`,

  // Prosecution
  'prosecution': `**Prosecution under GST (Section 132):**

**When Prosecution is Initiated:**
- **Tax evasion:** When tax evaded > ₹5 crore
- **Fake invoices:** Issuing invoices without supply of goods/services
- **Fraudulent ITC:** Availing/utilizing ITC using fake invoices
- **Suppression of facts:** Willful suppression to evade tax
- **Multiple offenses:** Repeated violations

**Offenses Punishable:**
1. **Tax evasion > ₹5 crore:** Imprisonment up to 5 years + fine
2. **Fake invoices:** Imprisonment up to 5 years + fine
3. **Fraudulent ITC:** Imprisonment up to 5 years + fine
4. **Suppression of facts:** Imprisonment up to 5 years + fine
5. **Obstructing officers:** Imprisonment up to 6 months + fine
6. **Tampering with evidence:** Imprisonment up to 3 years + fine

**Compounding of Offenses (Section 138):**
- Can be compounded before prosecution
- Payment of compounding amount
- Reduces penalty and avoids imprisonment
- Not available for certain serious offenses

**Important Notes:**
- Prosecution is criminal proceeding
- Requires sanction from Commissioner
- Can be initiated even after payment of tax/penalty
- Separate from penalty proceedings
- Court proceedings can take time

*Reference: [CGST Act - Chapter 19: Offences and Penalties](/modules/cgst-act/offences-penalties) - [Section 132](/modules/cgst-act/offences-penalties/sec-132) and [Section 138](/modules/cgst-act/offences-penalties/sec-138)*`,

  'when is prosecution done': `**When is Prosecution Initiated under GST:**

**Prosecution is done when:**

1. **Tax Evasion > ₹5 Crore:**
   - When tax evaded exceeds ₹5 crore
   - Willful evasion of tax
   - Suppression of facts to evade tax

2. **Fake Invoices:**
   - Issuing invoices without actual supply
   - Using fake invoices to claim ITC
   - Creating false documents

3. **Fraudulent ITC:**
   - Availing ITC using fake invoices
   - Utilizing ITC without actual receipt of goods/services
   - ITC fraud exceeding ₹5 crore

4. **Repeated Offenses:**
   - Multiple violations of GST provisions
   - Habitual offender
   - Non-compliance despite notices

5. **Serious Violations:**
   - Obstructing GST officers
   - Tampering with evidence
   - Destroying documents

**Process:**
- **Section 132:** Offenses and penalties
- **Section 138:** Compounding of offenses (can avoid prosecution)
- Requires **sanction from Commissioner**
- **Criminal proceedings** in court
- Can be initiated **even after payment** of tax/penalty

**Compounding Available:**
- Can compound offense before prosecution
- Pay compounding amount
- Avoids imprisonment
- Not available for serious offenses like fake invoices

**Time Limit:**
- No specific time limit for prosecution
- Can be initiated within reasonable time
- Court proceedings may take time

*Reference: [CGST Act - Chapter 19: Offences and Penalties](/modules/cgst-act/offences-penalties) - [Section 132](/modules/cgst-act/offences-penalties/sec-132) and [Section 138](/modules/cgst-act/offences-penalties/sec-138)*`,

  'section 132': `**Section 132 - Prosecution for Offenses:**

**Offenses Punishable:**

1. **Tax Evasion > ₹5 Crore:**
   - Imprisonment: Up to 5 years + fine

2. **Fake Invoices:**
   - Issuing invoices without supply
   - Imprisonment: Up to 5 years + fine

3. **Fraudulent ITC:**
   - Availing/utilizing ITC using fake invoices
   - Imprisonment: Up to 5 years + fine

4. **Suppression of Facts:**
   - Willful suppression to evade tax
   - Imprisonment: Up to 5 years + fine

5. **Obstructing Officers:**
   - Obstructing GST officers in duty
   - Imprisonment: Up to 6 months + fine

6. **Tampering with Evidence:**
   - Tampering/destroying evidence
   - Imprisonment: Up to 3 years + fine

**Compounding (Section 138):**
- Can compound before prosecution
- Payment of compounding amount
- Avoids imprisonment
- Not available for serious offenses

*Reference: [CGST Act - Chapter 19: Offences and Penalties](/modules/cgst-act/offences-penalties) - [Section 132](/modules/cgst-act/offences-penalties/sec-132)*`,

  'section 138': `**Section 138 - Compounding of Offenses:**

**Compounding Available:**
- Can compound offense **before prosecution**
- Payment of compounding amount
- **Avoids imprisonment**
- Reduces penalty

**Compounding Amount:**
- Minimum: ₹10,000 or 50% of tax amount (whichever higher)
- Maximum: ₹30,000 or 150% of tax amount (whichever higher)
- Varies based on offense

**Not Available For:**
- Fake invoices without supply
- Fraudulent ITC using fake invoices
- Second or subsequent offense
- Offenses committed after compounding

**Process:**
- Application to Commissioner
- Payment of compounding amount
- Offense compounded
- No prosecution if compounded successfully

*Reference: [CGST Act - Chapter 19: Offences and Penalties](/modules/cgst-act/offences-penalties) - [Section 138](/modules/cgst-act/offences-penalties/sec-138)*`,

  // Export and Zero-Rated Supplies
  'export': `**Export under GST (Section 2(5) IGST Act):**

**Definition:**
- Taking goods out of India to a place outside India
- Supply of goods/services to a place outside India
- Zero-rated supply (0% GST)

**Zero-Rated Supply:**
- **Tax rate:** 0%
- **ITC available:** Full ITC on inputs
- Can pay tax and claim refund OR supply under LUT

**Export Procedure:**
1. **LUT/Bond:** File LUT (Letter of Undertaking) or execute bond
2. **Export Invoice:** Issue export invoice without tax
3. **Shipping Bill:** File shipping bill with customs
4. **Export Declaration:** Declare export in GSTR-1
5. **Refund:** Claim refund of ITC (if tax paid)

**Documents:**
- Export invoice
- Shipping bill
- Bill of lading/airway bill
- Bank realization certificate

**Time Limit:**
- Refund application: 2 years from export date
- Payment to supplier: 180 days (for ITC)

*Reference: [IGST Act - Chapter 4: Zero Rated Supply](/modules/igst-act/igst-zero-rated) - [Section 16](/modules/igst-act/igst-zero-rated/sec-16)*`,

  'zero rated supply': `**Zero-Rated Supply (Section 16 IGST Act):**

**Definition:**
- Supply of goods/services at **0% tax rate**
- Includes exports and supplies to SEZ

**Types:**
1. **Export of Goods/Services:** Taking out of India
2. **Supply to SEZ:** Supply to SEZ developer or unit

**ITC Availability:**
- **Full ITC available** on inputs used for zero-rated supplies
- Can claim refund of accumulated ITC
- No reversal required

**Options:**
1. **Pay tax and claim refund:** Pay IGST, claim refund
2. **Supply under LUT:** File LUT, supply without payment

**Key Difference from Exempt:**
- Zero-rated: 0% tax, ITC available
- Exempt: No tax, ITC NOT available

*Reference: [IGST Act - Chapter 4: Zero Rated Supply](/modules/igst-act/igst-zero-rated) - [Section 16](/modules/igst-act/igst-zero-rated/sec-16)*`,

  'sez supply': `**SEZ Supply (Zero-Rated):**

**Definition:**
- Supply to SEZ developer or SEZ unit
- Zero-rated supply (0% GST)
- Full ITC available

**Procedure:**
- Issue invoice without tax
- File LUT or pay tax and claim refund
- Declare in GSTR-1
- Claim refund of ITC

**Documents:**
- Invoice
- SEZ acknowledgment
- Proof of receipt by SEZ

*Reference: [IGST Act - Chapter 4: Zero Rated Supply](/modules/igst-act/igst-zero-rated) - [Section 16](/modules/igst-act/igst-zero-rated/sec-16)*`,

  // Job Work
  'job work': `**Job Work (Section 2(68)):**

**Definition:**
- Treatment or processing of goods belonging to another person
- Principal sends goods to job worker
- Job worker processes and returns

**ITC on Job Work:**
- Principal can claim ITC on goods sent for job work
- Job worker not required to register if turnover < threshold
- Principal responsible for tax on final product

**Time Limit:**
- Goods must be returned within **1 year** (or 3 years for capital goods)
- If not returned, treated as supply by principal

**Documentation:**
- Delivery challan for sending goods
- Delivery challan for receiving processed goods
- Maintain records of goods sent/received

**Key Points:**
- Job worker can work from own premises or principal's premises
- Principal can send inputs directly to job worker
- No tax on intermediate movement

*Reference: [CGST Act - Chapter 5: Input Tax Credit](/modules/cgst-act/input-tax-credit) - [Section 19](/modules/cgst-act/input-tax-credit/sec-19)*`,

  'job work provisions': `**Job Work Provisions (Section 19):**

**Principal's Responsibilities:**
- Can claim ITC on goods sent for job work
- Responsible for tax on final product
- Must ensure goods returned within time limit

**Job Worker's Status:**
- Not required to register if turnover < threshold
- Can work from own premises or principal's premises
- Must maintain records

**Time Limits:**
- **Goods:** 1 year from date of sending
- **Capital Goods:** 3 years from date of sending
- If not returned, treated as supply

**Documentation:**
- Delivery challan (no tax invoice required)
- Maintain records of movement
- Track goods sent and received

*Reference: [CGST Act - Chapter 5: Input Tax Credit](/modules/cgst-act/input-tax-credit) - [Section 19](/modules/cgst-act/input-tax-credit/sec-19)*`,

  // CA Certificate
  'ca certificate': `**CA Certificate for GSTR-9C (As per Section 35):**

**When Required:**
- For taxpayers with **turnover > ₹5 crore**
- Must file GSTR-9C (reconciliation statement)
- CA certification is **mandatory**

**GSTR-9C Requirements:**
- **Due Date:** 31st December of following financial year
- Self-certified reconciliation statement
- **CA must certify** the reconciliation
- Reconciliation between GSTR-9 and audited financial statements

**CA Certification:**
- CA must verify reconciliation statement
- Must certify accuracy of reconciliation
- CA must be in practice (not retired)
- Digital signature required

**Contents of GSTR-9C:**
- Reconciliation of turnover
- Reconciliation of tax paid
- Reconciliation of ITC
- Additional liability or refund, if any

**Penalty for Non-filing:**
- Late fee applies for delayed filing
- May attract scrutiny/audit

*Reference: [CGST Act - Chapter 11: Audit](/modules/cgst-act/audit) - [Section 35](/modules/cgst-act/audit/sec-35)*`,

  'ca certification': `**CA Certification for GSTR-9C:**

**Mandatory Requirement:**
- Required for taxpayers with turnover > ₹5 crore
- CA must certify GSTR-9C reconciliation statement
- Due: 31st December of following financial year

**CA's Role:**
- Verify reconciliation between GSTR-9 and audited accounts
- Certify accuracy of reconciliation
- Must be practicing CA (not retired)
- Digital signature required

**What CA Certifies:**
- Reconciliation of turnover
- Reconciliation of tax paid
- Reconciliation of ITC claimed
- Additional liability or refund, if any

*Reference: [CGST Act - Chapter 11: Audit](/modules/cgst-act/audit) - [Section 35](/modules/cgst-act/audit/sec-35)*`
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
  if (q.includes('prosecution') || q.includes('offense') || q.includes('criminal')) {
    topics.push('Prosecution', 'Section 132', 'Section 138 Compounding', 'Penalty Section 73', 'Penalty Section 74');
  }
  if (q.includes('export') || q.includes('zero rated') || q.includes('sez')) {
    topics.push('Export', 'Zero-rated supply', 'SEZ supply', 'LUT', 'Refund procedure');
  }
  if (q.includes('refund')) {
    topics.push('Refund procedure', 'Refund timeline', 'Export', 'Zero-rated supply', 'ITC refund');
  }
  if (q.includes('job work') || q.includes('jobwork')) {
    topics.push('Job work', 'Job work provisions', 'ITC eligibility', 'Section 19');
  }
  if (q.includes('isd') || q.includes('input service distributor')) {
    topics.push('Input Service Distributor', 'ISD', 'GSTR-6', 'ITC distribution');
  }
  
  return topics.slice(0, 5); // Return top 5 related topics
}

function getAIResponse(question: string): string {
  let q = question.toLowerCase().trim();
  const originalQ = q; // Keep original for checking abbreviations
  
  // Check for CA certificate queries VERY FIRST (before ANY processing)
  // This ensures CA certificate queries are matched correctly, even with typos
  const hasCa = q.includes('ca') || originalQ.includes('ca');
  const certPattern = /\bcert\w*/i;
  const hasCert = certPattern.test(q) || certPattern.test(originalQ);
  
  // If query has "ca" and anything starting with "cert", return CA certificate response IMMEDIATELY
  if (hasCa && hasCert) {
    return GST_RESPONSES['ca certificate'];
  }
  
  // Also check for full phrases with typos
  const caCertPhrases = [
    'ca certificate', 'ca certifcate', 'ca certficate', 'ca certicate', 
    'ca cert', 'ca certification', 'chartered accountant certificate',
    'chartered accountant cert', 'ca certif', 'ca certfic'
  ];
  
  if (caCertPhrases.some(phrase => q.includes(phrase) || originalQ.includes(phrase))) {
    return GST_RESPONSES['ca certificate'];
  }
  
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
  
  
  // Check for prosecution queries (after CA certificate checks)
  // This ensures prosecution queries don't get matched to penalty responses
  if ((q.includes('prosecution') || originalQ.includes('prosecution')) &&
      (q.includes('when') || q.includes('lead') || q.includes('offense') || q.includes('offence') || 
       q.includes('done') || q.includes('initiate') || q.includes('start'))) {
    return GST_RESPONSES['when is prosecution done'];
  }
  
  if (q.includes('prosecution') || originalQ.includes('prosecution')) {
    return GST_RESPONSES['prosecution'];
  }
  
  // Check for penalty/late fee queries IMMEDIATELY after abbreviation expansion
  // This must be AFTER prosecution checks to avoid matching wrong topics
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
    { patterns: ['prosecution', 'when is prosecution', 'prosecution done', 'offense lead to prosecution', 'offence lead to prosecution', 'when does offense lead', 'when does offence lead', 'offense leads to', 'offence leads to'], key: 'when is prosecution done' },
    { patterns: ['section 132', 'prosecution offense', 'prosecution offence'], key: 'section 132' },
    { patterns: ['section 138', 'compounding', 'compounding offense', 'compounding offence'], key: 'section 138' },
    { patterns: ['export', 'export procedure', 'export gst'], key: 'export' },
    { patterns: ['zero rated', 'zero-rated', 'zero rated supply'], key: 'zero rated supply' },
    { patterns: ['sez', 'sez supply', 'sez supplies'], key: 'sez supply' },
    { patterns: ['job work', 'jobwork', 'job work provisions'], key: 'job work' },
    { patterns: ['refund procedure', 'refund process', 'how to claim refund'], key: 'refund procedure' },
    { patterns: ['refund timeline', 'refund time', 'refund duration'], key: 'refund timeline' },
    { patterns: ['isd', 'input service distributor', 'isd registration'], key: 'input service distributor' },
    { patterns: ['ca certificate', 'ca certification', 'ca cert', 'chartered accountant certificate'], key: 'ca certificate' },
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
  
  // Export and Zero-Rated Supplies
  if ((q.includes('export') || originalQ.includes('export')) && 
      !q.includes('refund') && !q.includes('lut')) {
    return GST_RESPONSES['export'];
  }
  
  if (q.includes('zero rated') || q.includes('zero-rated') || 
      (q.includes('zero') && q.includes('rated'))) {
    return GST_RESPONSES['zero rated supply'];
  }
  
  if (q.includes('sez') && (q.includes('supply') || q.includes('supplies'))) {
    return GST_RESPONSES['sez supply'];
  }
  
  // Job Work
  if (q.includes('job work') || originalQ.includes('job work')) {
    return GST_RESPONSES['job work'];
  }
  
  if (q.includes('job work provisions') || q.includes('jobwork provisions')) {
    return GST_RESPONSES['job work provisions'];
  }
  
  // Refund
  if ((q.includes('refund') && (q.includes('procedure') || q.includes('process'))) ||
      originalQ.includes('refund procedure')) {
    return GST_RESPONSES['refund procedure'];
  }
  
  if (q.includes('refund timeline') || q.includes('refund time') || 
      (q.includes('refund') && q.includes('time'))) {
    return GST_RESPONSES['refund timeline'];
  }
  
  // ISD
  if ((q.includes('isd') || q.includes('input service distributor')) && 
      !q.includes('gstr-6')) {
    return GST_RESPONSES['input service distributor'];
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
    response = `I don't have specific info on this. Please check official CBIC portal or consult a professional.

**Official Sources:**
- **GST Portal:** https://www.gst.gov.in
- **CBIC Website:** https://www.cbic.gov.in
- **ICAI Publications** for detailed provisions

**I can help with:**
- Return due dates (GSTR-1, 3B, 9, 9C)
- Late fees and penalties
- ITC rules and time limits
- Registration thresholds
- E-way bill requirements
- Composition scheme details
- Export and zero-rated supplies
- Refund procedures
- Job work provisions`;
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
