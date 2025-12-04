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
        difficulty: 'intermediate' as const, estimatedMinutes: 30, practicalRelevance: 'high' as const,
        fullText: `**Section 8. Tax liability on composite and mixed supplies**

The tax liability on a composite or a mixed supply shall be determined in the following manner, namely:—

(a) a composite supply comprising two or more supplies, one of which is a principal supply, shall be treated as a supply of such principal supply; and

(b) a mixed supply comprising two or more supplies shall be treated as a supply of that particular supply which attracts the highest rate of tax.` },
      { id: 'sec-9', number: '9', title: 'Levy and collection', description: 'Charging section for CGST',
        keyPoints: ['CGST on all intra-state supplies', 'Rate not exceeding 20%', 'Collected by Central Government', 'Reverse charge under sub-section (3) and (4)', 'RCM on notified goods/services', 'RCM on supplies from unregistered persons'],
        difficulty: 'intermediate' as const, estimatedMinutes: 35, practicalRelevance: 'high' as const,
        fullText: `**Section 9. Levy and collection**

(1) Subject to the provisions of this Act, there shall be levied a tax called the central goods and services tax on all intra-State supplies of goods or services or both, except on the supply of alcoholic liquor for human consumption, on the value determined under section 15 and at such rates, not exceeding twenty per cent., as may be notified by the Government on the recommendations of the Council and collected in such manner as may be prescribed and shall be paid by the taxable person.

(2) The central tax on the supply of petroleum crude, high speed diesel, motor spirit (commonly known as petrol), natural gas and aviation turbine fuel shall be levied with effect from such date as may be notified by the Government on the recommendations of the Council.

(3) The Government may, on the recommendations of the Council, by notification, specify categories of supply of goods or services or both, the tax on which shall be paid on reverse charge basis by the recipient of such goods or services or both and all the provisions of this Act shall apply to such recipient as if he were the person liable for paying the tax in relation to the supply of such goods or services or both.

(4) The central tax in respect of the supply of taxable goods or services or both by a supplier, who is not registered, to a registered person shall be paid by such person on reverse charge basis as the recipient and all the provisions of this Act shall apply to such recipient as if he were the person liable for paying the tax in relation to the supply of such goods or services or both.

(5) The Government may, on the recommendations of the Council, by notification, specify class of registered persons who shall, in respect of supply of specified categories of goods or services or both received from an unregistered supplier, pay the central tax on reverse charge basis as the recipient of such supply of goods or services or both, and all the provisions of this Act shall apply to such recipient as if he were the person liable for paying the tax in relation to such supply of goods or services or both.` },
      { id: 'sec-10', number: '10', title: 'Composition levy', description: 'Simplified scheme for small taxpayers',
        keyPoints: ['Turnover limit ₹1.5 crore (₹75 lakhs for special states)', 'Rate: 1% for traders, 1% for manufacturers, 5% for restaurants', 'Cannot make inter-state supplies', 'Cannot supply through e-commerce', 'Bill of supply instead of tax invoice', 'No ITC available', 'CMP-08 quarterly statement'],
        difficulty: 'intermediate' as const, estimatedMinutes: 40, practicalRelevance: 'high' as const,
        fullText: `**Section 10. Composition levy**

(1) Notwithstanding anything to the contrary contained in this Act but subject to the provisions of sub-sections (3) and (4) of section 9, a registered person, whose aggregate turnover in the preceding financial year did not exceed one crore and fifty lakh rupees, may opt to pay, in lieu of the tax payable by him, an amount calculated at such rate as may be prescribed, but not exceeding,—

(a) one per cent. of the turnover in State or Union territory in case of a manufacturer,

(b) two and a half per cent. of the turnover in State or Union territory in case of persons engaged in making supplies referred to in clause (b) of paragraph 6 of Schedule II, and

(c) half per cent. of the turnover in State or Union territory in case of other suppliers,

subject to such conditions and restrictions as may be prescribed:

Provided that the Government may, by notification, increase the said limit of one crore and fifty lakh rupees to such higher amount, not exceeding two crore rupees, as may be recommended by the Council.

(2) The registered person shall be eligible to opt under sub-section (1), if—

(a) he is not engaged in the supply of services other than supplies referred to in clause (b) of paragraph 6 of Schedule II;

(b) he is not engaged in making any supply of goods which are not leviable to tax under this Act;

(c) he is not engaged in making any inter-State outward supplies of goods;

(d) he is not engaged in making any supply of goods through an electronic commerce operator who is required to collect tax at source under section 52; and

(e) he is not a manufacturer of such goods as may be notified by the Government on the recommendations of the Council:

Provided that where more than one registered persons are having the same Permanent Account Number (issued under the Income-tax Act, 1961), the registered person shall not be eligible to opt for the scheme under sub-section (1) unless all such registered persons opt to pay tax under that sub-section.

(3) The option availed of by a registered person under sub-section (1) shall lapse with effect from the day on which his aggregate turnover during a financial year exceeds the limit specified under sub-section (1).

(4) A taxable person to whom the provisions of sub-section (1) apply shall not collect any tax from the recipient on supplies made by him nor shall he be entitled to any credit of input tax.

(5) If the proper officer has reasons to believe that a taxable person has paid tax under sub-section (1) despite not being eligible to pay tax under that sub-section, such person shall, in addition to any tax that may be payable by him under any other provisions of this Act, be liable to a penalty and the provisions of section 73 or section 74 shall, mutatis mutandis, apply for determination of tax and penalty.` },
      { id: 'sec-11', number: '11', title: 'Power to grant exemption', description: 'Exemption from GST',
        keyPoints: ['Government may exempt goods/services', 'By notification on GST Council recommendation', 'Absolute exemption or conditional exemption'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'medium' as const },
      { id: 'sec-11a', number: '11A', title: 'Non-levy in certain cases', description: 'Non-recovery for general practice',
        keyPoints: ['Where tax not levied due to general practice', 'Such practice prevalent across trade', 'No recovery of tax for that period'],
        difficulty: 'intermediate' as const, estimatedMinutes: 15, practicalRelevance: 'medium' as const,
        fullText: `**Section 11A. Power not to recover Goods and Services Tax not levied or short-levied as a result of general practice**

Notwithstanding anything contained in this Act, if the Government is satisfied that —

(a) a practice was, or is, generally prevalent regarding levy of central tax (including non-levy thereof) on any supply of goods or services or both; and

(b) such supplies were, or are, liable to, —

(i) central tax, in cases where according to the said practice, central tax was not, or is not being, levied, or

(ii) a higher amount of central tax than what was, or is being, levied, in accordance with the said practice,

the Government may, on the recommendation of the Council, by notification in the Official Gazette, direct that the whole of the central tax payable on such supplies, or, as the case may be, the central tax in excess of that payable on such supplies, but for the said practice, shall not be required to be paid in respect of the supplies on which the central tax was not, or is not being levied, or was, or is being, short-levied, in accordance with the said practice.` }
    ]
  },
  {
    id: 4, slug: 'time-value-supply', title: 'Time and Value of Supply', icon: '⏰', category: 'cgst-act' as const,
    description: 'When tax liability arises and how to determine taxable value',
    sections: [
      { id: 'sec-12', number: '12', title: 'Time of supply of goods', description: 'When tax liability arises for goods',
        keyPoints: ['Earlier of: date of invoice, last date to issue invoice, or date of payment', 'Continuous supply: as per invoice/payment', 'Goods on approval: earlier of acceptance or 6 months'],
        difficulty: 'advanced' as const, estimatedMinutes: 40, practicalRelevance: 'high' as const,
        fullText: `**Section 12. Time of supply of goods**

(1) The liability to pay tax on goods shall arise at the time of supply, as determined in accordance with the provisions of this section.

(2) The time of supply of goods shall be the earlier of the following dates, namely:—

(a) the date of issue of invoice by the supplier or the last date on which he is required, under sub-section (1) of section 31, to issue the invoice with respect to the supply; or

(b) the date on which the supplier receives the payment with respect to the supply:

Provided that where the supplier of taxable goods receives an amount up to one thousand rupees in excess of the amount indicated in the tax invoice, the time of supply to the extent of such excess amount shall, at the option of the said supplier, be the date of issue of invoice in respect of such excess amount.

Explanation 1.—For the purposes of clauses (a) and (b), "supply" shall be deemed to have been made to the extent it is covered by the invoice or, as the case may be, the payment.

Explanation 2.—For the purposes of clause (b), "the date on which the supplier receives the payment" shall be the date on which the payment is entered in his books of account or the date on which the payment is credited to his bank account, whichever is earlier.

(3) In case of supplies in respect of which tax is paid or liable to be paid on reverse charge basis, the time of supply shall be the earliest of the following dates, namely:—

(a) the date of the receipt of goods; or

(b) the date of payment as entered in the books of account of the recipient or the date on which the payment is debited in his bank account, whichever is earlier; or

(c) the date immediately following thirty days from the date of issue of invoice or any other document, by whatever name called, in lieu thereof by the supplier:

Provided that where it is not possible to determine the time of supply under clause (a) or clause (b) or clause (c), the time of supply shall be the date of entry in the books of account of the recipient of supply.

(4) In case of supply of vouchers by a supplier, the time of supply shall be—

(a) the date of issue of voucher, if the supply is identifiable at that point; or

(b) the date of redemption of voucher, in all other cases.

(5) Where it is not possible to determine the time of supply under the provisions of sub-section (2) or sub-section (3) or sub-section (4), the time of supply shall—

(a) in a case where a periodical return has to be filed, be the date on which such return is to be filed; or

(b) in any other case, be the date on which the tax is paid.

(6) The time of supply to the extent it relates to an addition in the value of supply by way of interest, late fee or penalty for delayed payment of any consideration shall be the date on which the supplier receives such addition in value.` },
      { id: 'sec-13', number: '13', title: 'Time of supply of services', description: 'When tax liability arises for services',
        keyPoints: ['If invoice within time: earlier of invoice or payment', 'If invoice not in time: date of service or payment', 'Continuous supply: due date or payment or invoice'],
        difficulty: 'advanced' as const, estimatedMinutes: 40, practicalRelevance: 'high' as const,
        fullText: `**Section 13. Time of supply of services**

(1) The liability to pay tax on services shall arise at the time of supply, as determined in accordance with the provisions of this section.

(2) The time of supply of services shall be the earliest of the following dates, namely:—

(a) the date of issue of invoice by the supplier, if the invoice is issued within the period prescribed under sub-section (2) of section 31 or the date of receipt of payment, whichever is earlier; or

(b) the date of provision of service, if the invoice is not issued within the period prescribed under sub-section (2) of section 31 or the date of receipt of payment, whichever is earlier; or

(c) the date on which the recipient shows the receipt of services in his books of account, in a case where the provisions of clause (a) or clause (b) do not apply:

Provided that where the supplier of taxable service receives an amount up to one thousand rupees in excess of the amount indicated in the tax invoice, the time of supply to the extent of such excess amount shall, at the option of the said supplier, be the date of issue of invoice relating to such excess amount.

Explanation.—For the purposes of clauses (a) and (b)—

(i) the supply shall be deemed to have been made to the extent it is covered by the invoice or, as the case may be, the payment;

(ii) "the date of receipt of payment" shall be the date on which the payment is entered in the books of account of the supplier or the date on which the payment is credited to his bank account, whichever is earlier.

(3) In case of supplies in respect of which tax is paid or liable to be paid on reverse charge basis, the time of supply shall be the earliest of the following dates, namely:—

(a) the date of payment as entered in the books of account of the recipient or the date on which the payment is debited in his bank account, whichever is earlier; or

(b) the date immediately following sixty days from the date of issue of invoice or any other document, by whatever name called, in lieu thereof by the supplier:

Provided that where it is not possible to determine the time of supply under clause (a) or clause (b), the time of supply shall be the date of entry in the books of account of the recipient of supply:

Provided further that in case of supply by associated enterprises, where the supplier of service is located outside India, the time of supply shall be the date of entry in the books of account of the recipient of supply or the date of payment, whichever is earlier.

(4) In case of supply of vouchers by a supplier, the time of supply shall be—

(a) the date of issue of voucher, if the supply is identifiable at that point; or

(b) the date of redemption of voucher, in all other cases.

(5) Where it is not possible to determine the time of supply under the provisions of sub-section (2) or sub-section (3) or sub-section (4), the time of supply shall—

(a) in a case where a periodical return has to be filed, be the date on which such return is to be filed; or

(b) in any other case, be the date on which the tax is paid.

(6) The time of supply to the extent it relates to an addition in the value of supply by way of interest, late fee or penalty for delayed payment of any consideration shall be the date on which the supplier receives such addition in value.` },
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
        difficulty: 'advanced' as const, estimatedMinutes: 50, practicalRelevance: 'high' as const,
        fullText: `**Section 16. Eligibility and conditions for taking input tax credit**

(1) Every registered person shall, subject to such conditions and restrictions as may be prescribed and in the manner specified in section 49, be entitled to take credit of input tax charged on any supply of goods or services or both to him which are used or intended to be used in the course or furtherance of his business and the said amount shall be credited to the electronic credit ledger of such person.

(2) Notwithstanding anything contained in this section, no registered person shall be entitled to the credit of any input tax in respect of any supply of goods or services or both to him unless,—

(a) he is in possession of a tax invoice or debit note issued by a supplier registered under this Act, or such other tax paying documents as may be prescribed;

(b) he has received the goods or services or both.

Explanation.—For the purposes of this clause, it shall be deemed that the registered person has received the goods or, as the case may be, services—

(i) where the goods are delivered by the supplier to a recipient or any other person on the direction of such registered person, whether acting as an agent or otherwise, before or during movement of goods, either by way of transfer of documents of title to goods or otherwise;

(ii) where the services are provided by the supplier to any person on the direction of and on account of such registered person;

(c) subject to the provisions of section 41, the tax charged in respect of such supply has been actually paid to the Government, either in cash or through utilisation of input tax credit admissible in respect of the said supply; and

(d) he has furnished the return under section 39:

Provided that where the goods against an invoice are received in lots or instalments, the registered person shall be entitled to take credit upon receipt of the last lot or instalment:

Provided further that where a recipient fails to pay to the supplier of goods or services or both, other than the supplies on which tax is payable on reverse charge basis, the amount towards the value of supply along with tax payable thereon within a period of one hundred and eighty days from the date of issue of invoice by the supplier, an amount equal to the input tax credit availed by the recipient shall be added to his output tax liability, along with interest thereon, in such manner as may be prescribed:

Provided also that the recipient shall be entitled to avail of the credit of input tax on payment made by him of the amount towards the value of supply of goods or services or both along with tax payable thereon.

(3) Where the registered person has claimed depreciation on the tax component of the cost of capital goods and plant and machinery under the provisions of the Income-tax Act, 1961, the input tax credit on the said tax component shall not be allowed.

(4) A registered person shall not be entitled to take input tax credit in respect of any invoice or debit note for supply of goods or services or both after the due date of furnishing of the return under section 39 for the month of September following the end of financial year to which such invoice or invoice relating to such debit note pertains or furnishing of the relevant annual return, whichever is earlier.` },
      { id: 'sec-17', number: '17', title: 'Apportionment and blocked credits', description: 'What ITC is NOT available',
        keyPoints: ['Motor vehicles (except for specified purposes)', 'Food and beverages, outdoor catering', 'Beauty treatment, health services', 'Club membership, fitness', 'Life/health insurance (except when mandatory)', 'Works contract for construction of immovable property', 'Goods for personal consumption', 'Goods lost, stolen, destroyed, written off, gifted'],
        difficulty: 'advanced' as const, estimatedMinutes: 50, practicalRelevance: 'high' as const,
        fullText: `**Section 17. Apportionment of credit and blocked credits**

(1) Where the goods or services or both are used by the registered person partly for the effecting of taxable supplies including zero-rated supplies under this Act or under the Integrated Goods and Services Tax Act and partly for effecting of exempt supplies under the said Acts, the amount of credit shall be restricted to so much of the input tax as is attributable to the said taxable supplies including zero-rated supplies.

(2) The value of exempt supply under sub-section (1) shall be such as may be prescribed, and shall include supplies on which the recipient is liable to pay tax on reverse charge basis, transactions in securities, sale of land and, subject to clause (b) of paragraph 5 of Schedule II, sale of building.

(3) The Government may prescribe the manner in which the credit referred to in sub-section (1) may be attributed.

(4) Notwithstanding anything contained in sub-section (1) of section 16 and sub-section (1) of section 18, input tax credit shall not be available in respect of the following, namely:—

(a) motor vehicles for transportation of persons having approved seating capacity of not more than thirteen persons (including the driver), except when they are used for making the following taxable supplies, namely:—

(i) further supply of such motor vehicles; or

(ii) transportation of passengers; or

(iii) imparting training on driving such motor vehicles;

(aa) vessels and aircraft except when they are used—

(i) for providing the following taxable services, namely:—

(A) further supply of such vessels or aircraft; or

(B) transportation of passengers; or

(C) imparting training on navigating such vessels or operating such aircraft; or

(ii) for transportation of goods;

(b) the following supply of goods:—

(i) food and beverages, outdoor catering, beauty treatment, health services, cosmetic and plastic surgery, leasing, renting or hiring of motor vehicles, vessels or aircraft referred to in clause (a) or clause (aa), life insurance and health insurance:

Provided that the input tax credit in respect of such goods or services or both shall be available where an inward supply of such goods or services or both is used by a registered person for making an outward taxable supply of the same category of goods or services or both or as an element of a taxable composite or mixed supply;

(ii) membership of a club, health and fitness centre;

(iii) travel benefits extended to employees on vacation such as leave or home travel concession:

Provided that the input tax credit in respect of such goods or services or both shall be available where the provision of such goods or services or both is obligatory for an employer to provide to its employees under any law for the time being in force.

(c) works contract services when supplied for construction of an immovable property (other than plant and machinery), except where it is an input service for further supply of works contract service;

(d) goods or services or both received by a taxable person for construction of an immovable property (other than plant or machinery) on his own account including when such goods or services or both are used in the course or furtherance of business.

Explanation.—For the purposes of clauses (c) and (d), the expression "construction" includes re-construction, renovation, additions or alterations or repairs, to the extent of capitalisation, to the said immovable property;

(e) goods or services or both on which tax has been paid under section 10;

(f) goods or services or both received by a non-resident taxable person except on goods imported by him;

(g) goods or services or both used for personal consumption;

(h) goods lost, stolen, destroyed, written off or disposed of by way of gift or free samples; and

(i) any tax paid in accordance with the provisions of sections 74, 129 and 130.

(5) Notwithstanding anything contained in sub-section (1) of section 16 and sub-section (1) of section 18, input tax credit shall not be available in respect of the following, namely:—

(a) motor vehicles for transportation of persons, having approved seating capacity of not more than thirteen persons (including the driver), except when they are used for making the following taxable supplies, namely:—

(i) further supply of such motor vehicles; or

(ii) transportation of passengers; or

(iii) imparting training on driving such motor vehicles;

(aa) vessels and aircraft except when they are used—

(i) for providing the following taxable services, namely:—

(A) further supply of such vessels or aircraft; or

(B) transportation of passengers; or

(C) imparting training on navigating such vessels or operating such aircraft; or

(ii) for transportation of goods;

(b) the following supply of goods:—

(i) food and beverages, outdoor catering, beauty treatment, health services, cosmetic and plastic surgery, leasing, renting or hiring of motor vehicles, vessels or aircraft referred to in clause (a) or clause (aa), life insurance and health insurance:

Provided that the input tax credit in respect of such goods or services or both shall be available where an inward supply of such goods or services or both is used by a registered person for making an outward taxable supply of the same category of goods or services or both or as an element of a taxable composite or mixed supply;

(ii) membership of a club, health and fitness centre;

(iii) travel benefits extended to employees on vacation such as leave or home travel concession:

Provided that the input tax credit in respect of such goods or services or both shall be available where the provision of such goods or services or both is obligatory for an employer to provide to its employees under any law for the time being in force.

(c) works contract services when supplied for construction of an immovable property (other than plant and machinery), except where it is an input service for further supply of works contract service;

(d) goods or services or both received by a taxable person for construction of an immovable property (other than plant or machinery) on his own account including when such goods or services or both are used in the course or furtherance of business.

Explanation.—For the purposes of clauses (c) and (d), the expression "construction" includes re-construction, renovation, additions or alterations or repairs, to the extent of capitalisation, to the said immovable property;

(e) goods or services or both on which tax has been paid under section 10;

(f) goods or services or both received by a non-resident taxable person except on goods imported by him;

(g) goods or services or both used for personal consumption;

(h) goods lost, stolen, destroyed, written off or disposed of by way of gift or free samples; and

(i) any tax paid in accordance with the provisions of sections 74, 129 and 130.

(6) The Government may prescribe the manner in which the credit referred to in sub-section (1) may be attributed.

(7) The amount of credit under sub-section (5) shall be calculated in such manner as may be prescribed.` },
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
        difficulty: 'basic' as const, estimatedMinutes: 25, practicalRelevance: 'high' as const,
        fullText: `**Section 22. Persons liable for registration**

(1) Every supplier shall be liable to be registered under this Act in the State or Union territory, other than special category States, from where he makes a taxable supply of goods or services or both, if his aggregate turnover in a financial year exceeds twenty lakh rupees:

Provided that where such person makes taxable supplies of goods or services or both from any of the special category States, he shall be liable to be registered if his aggregate turnover in a financial year exceeds ten lakh rupees.

(2) Every person who, on the day immediately preceding the appointed day, is registered or holds a license under an existing law, shall be liable to be registered under this Act with effect from the appointed day.

(3) Where a business carried on by a taxable person registered under this Act is transferred, whether on account of succession or otherwise, to another person as a going concern, the transferee or the successor, as the case may be, shall be liable to be registered with effect from the date of such transfer or succession.

(4) Notwithstanding anything contained in sub-sections (1) and (3), in a case of transfer pursuant to sanction of a scheme or an arrangement for amalgamation or, as the case may be, demerger of two or more companies pursuant to an order of a High Court, Tribunal or otherwise, the transferee shall be liable to be registered, with effect from the date on which the Registrar of Companies issues a certificate of incorporation giving effect to such order of the High Court or Tribunal.

Explanation.—For the purposes of this section,—

(i) the expression "aggregate turnover" shall include all supplies made by the taxable person, whether on his own account or made on behalf of all his principals;

(ii) the supply of goods, after completion of job work, by a registered job worker shall be treated as the supply of goods by the principal referred to in section 143, and the value of such goods shall not be included in the aggregate turnover of the registered job worker;

(iii) the expression "special category States" shall mean the States as specified in sub-clause (g) of clause (4) of article 279A of the Constitution.` },
      { id: 'sec-23', number: '23', title: 'Persons not liable for registration', description: 'Exemptions from registration',
        keyPoints: ['Persons making only exempt supplies', 'Agriculturist to extent of supply of produce', 'Persons making only supplies under reverse charge'],
        difficulty: 'basic' as const, estimatedMinutes: 20, practicalRelevance: 'high' as const },
      { id: 'sec-24', number: '24', title: 'Compulsory registration', description: 'Registration regardless of turnover',
        keyPoints: ['Inter-state suppliers', 'Casual taxable persons', 'Non-resident taxable persons', 'Persons liable to pay under reverse charge', 'E-commerce operators', 'TDS deductors', 'Persons supplying through e-commerce'],
        difficulty: 'intermediate' as const, estimatedMinutes: 30, practicalRelevance: 'high' as const,
        fullText: `**Section 24. Compulsory registration in certain cases**

Notwithstanding anything contained in sub-section (1) of section 22, the following categories of persons shall be required to be registered under this Act,—

(i) persons making any inter-State supply;

(ii) casual taxable persons making taxable supply;

(iii) persons who are required to pay tax under reverse charge;

(iv) persons who are required to pay tax under sub-section (5) of section 9;

(v) non-resident taxable persons making taxable supply;

(vi) persons who are required to deduct tax under section 51, whether or not separately registered under this Act;

(vii) persons who make taxable supply of goods or services or both on behalf of other taxable persons whether as an agent or otherwise;

(viii) Input Service Distributor, whether or not separately registered under this Act;

(ix) persons who supply goods or services or both, other than supplies specified under sub-section (5) of section 9, through such electronic commerce operator who is required to collect tax at source under section 52;

(x) such other person or class of persons as may be notified by the Government on the recommendations of the Council.` },
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
        difficulty: 'intermediate' as const, estimatedMinutes: 35, practicalRelevance: 'high' as const,
        fullText: `**Section 37. Furnishing details of outward supplies**

(1) Every registered person, other than an Input Service Distributor, a non-resident taxable person and a person paying tax under the provisions of section 10 or section 51 or section 52, shall furnish, electronically, in such form and manner as may be prescribed, the details of outward supplies of goods or services or both effected during a tax period on or before the tenth day of the month succeeding the said tax period and such details shall be communicated to the recipient of the said supplies within such time and in such manner as may be prescribed:

Provided that the registered person shall not be allowed to furnish the details of outward supplies during the period from the eleventh day to the fifteenth day of the month succeeding the tax period:

Provided further that the Commissioner may, for reasons to be recorded in writing, by notification, extend the time limit for furnishing such details for such class of taxable persons as may be specified therein:

Provided also that any extension of time limit notified by the Commissioner of State tax or the Commissioner of Union territory tax shall be deemed to be notified by the Commissioner.

(2) Every registered person who has been communicated the details under sub-section (3) of section 38 or the details under sub-section (1) of section 42, shall either accept or reject the details so communicated, on or before the seventeenth day, but not before the fifteenth day, of the month succeeding the tax period and the details furnished by him under sub-section (1) shall stand amended accordingly.

(3) Any registered person, who has furnished the details under sub-section (1) for any tax period and which have remained unmatched under sub-section (2) or sub-section (4) of section 42, shall, upon discovery of any error or omission therein, rectify such error or omission in the tax period during which such error or omission is noticed in such manner as may be prescribed, and shall pay the tax and interest, if any, in case there is a short payment of tax on account of such error or omission, in the return to be furnished for such tax period:

Provided that no such rectification of any error or omission in respect of the details furnished under sub-section (1) shall be allowed after the due date for furnishing of return for the month of September following the end of the financial year to which such details pertain, or furnishing of the relevant annual return, whichever is earlier.

(4) Any registered person who has furnished the details under sub-section (1) for any tax period and which have remained unmatched under sub-section (2) or sub-section (4) of section 42 shall, upon discovery of any error or omission therein, rectify such error or omission in the tax period during which such error or omission is noticed in such manner as may be prescribed, and shall pay the tax and interest, if any, in case there is a short payment of tax on account of such error or omission, in the return to be furnished for such tax period:

Provided that no such rectification of any error or omission in respect of the details furnished under sub-section (1) shall be allowed after the due date for furnishing of return for the month of September following the end of the financial year to which such details pertain, or furnishing of the relevant annual return, whichever is earlier.` },
      { id: 'sec-38', number: '38', title: 'Communication of details of inward supplies', description: 'GSTR-2B auto-generated statement',
        keyPoints: ['Auto-generated from suppliers GSTR-1', 'Available by 14th of next month', 'Used for ITC matching', 'Helps in ITC verification'],
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'high' as const },
      { id: 'sec-39', number: '39', title: 'Furnishing of returns', description: 'GSTR-3B monthly return',
        keyPoints: ['Summary return with tax payment', 'Due: 20th of next month', 'QRMP: 22nd/24th of month after quarter', 'Self-assessed tax payment'],
        difficulty: 'intermediate' as const, estimatedMinutes: 35, practicalRelevance: 'high' as const,
        fullText: `**Section 39. Furnishing of returns**

(1) Every registered person other than an Input Service Distributor or a non-resident taxable person or a person paying tax under the provisions of section 10 or section 51 or section 52 shall furnish, in such form and manner as may be prescribed, a return, electronically, for every calendar month or part thereof, within such time as may be prescribed, on or before the twentieth day of the month succeeding such calendar month or part thereof.

(2) A registered person paying tax under the provisions of section 10, shall furnish, in such form and manner as may be prescribed, a return for every quarter or part thereof, within eighteen days after the end of such quarter.

(3) Every registered person required to deduct tax at source under section 51 shall furnish, in such form and manner as may be prescribed, a return, electronically, for every month in which such deductions have been made within ten days after the end of such month.

(4) Every taxable person registered as an Input Service Distributor shall furnish, in such form and manner as may be prescribed, a return, electronically, for every calendar month or part thereof, within thirteen days after the end of such month.

(5) Every registered non-resident taxable person shall furnish, in such form and manner as may be prescribed, a return, electronically, for every calendar month or part thereof, within thirteen days after the end of a calendar month.

(6) The Commissioner may, for reasons to be recorded in writing, by notification, extend the time limit for furnishing the returns under this section for such class of registered persons as may be specified therein:

Provided that any extension of time limit notified by the Commissioner of State tax or the Commissioner of Union territory tax shall be deemed to be notified by the Commissioner.

(7) Every registered person who is required to furnish a return under sub-section (1) or sub-section (2) or sub-section (3) or sub-section (5) shall pay the tax due as per such return not later than the last date on which he is required to furnish such return.

(8) Every registered person who is required to furnish a return under sub-section (1) or sub-section (2) shall furnish a return for every tax period whether or not any supplies of goods or services or both have been made during such tax period.

(9) Subject to the provisions of sections 37 and 38, if any registered person after having furnished a return under sub-section (1) or sub-section (2) or sub-section (3) or sub-section (4) or sub-section (5), discovers any omission or incorrect particulars therein, other than as a result of scrutiny, audit, inspection or enforcement activity by the tax authorities, he shall rectify such omission or incorrect particulars in the return to be furnished for the month or quarter during which such omission or incorrect particulars are noticed, subject to payment of interest under sub-section (1) of section 50:

Provided that no such rectification of any omission or incorrect particulars shall be allowed after the due date for furnishing of return for the month of September or second quarter following the end of the financial year, or the actual date of furnishing of relevant annual return, whichever is earlier.

(10) A registered person shall not be allowed to furnish a return for a tax period if the return for any of the previous tax periods has not been furnished by him.` },
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
        difficulty: 'advanced' as const, estimatedMinutes: 40, practicalRelevance: 'high' as const,
        fullText: `**Section 44. Annual return**

(1) Every registered person, other than an Input Service Distributor, a person paying tax under section 51 or section 52, a casual taxable person and a non-resident taxable person, shall furnish an annual return for every financial year electronically in such form and manner as may be prescribed on or before the thirty-first day of December following the end of such financial year.

(2) Every registered person who is required to get his accounts audited in accordance with the provisions of sub-section (5) of section 35 shall furnish, along with the annual return, a copy of the audited annual accounts and a reconciliation statement, reconciling the value of supplies declared in the return furnished for the financial year with the audited annual financial statement, and such other particulars as may be prescribed.` },
      { id: 'sec-45', number: '45', title: 'Final return', description: 'Return on cancellation',
        keyPoints: ['Within 3 months of cancellation', 'Or date of cancellation order', 'Pay ITC reversal on stock'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'medium' as const },
      { id: 'sec-46', number: '46', title: 'Notice to return defaulters', description: 'Notice for non-filing',
        keyPoints: ['Notice if return not filed', 'Within 15 days of notice'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'medium' as const },
      { id: 'sec-47', number: '47', title: 'Levy of late fee', description: 'Late fee for delayed returns',
        keyPoints: ['₹100/day CGST + ₹100/day SGST', 'Max ₹5,000 (₹2,500 each)', 'NIL return: ₹20/day, max ₹500', 'Annual return: ₹200/day, max 0.25% of turnover'],
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'high' as const,
        fullText: `**Section 47. Levy of late fee**

(1) Any registered person who fails to furnish the details of outward or inward supplies required under section 37 or section 38 or returns required under section 39 or section 45 by the due date shall pay a late fee of one hundred rupees for every day during which such failure continues subject to a maximum amount of five thousand rupees.

(2) Any registered person who fails to furnish the return required under section 44 by the due date shall be liable to pay a late fee of one hundred rupees for every day during which such failure continues subject to a maximum of an amount calculated at a quarter per cent. of his turnover in the State or Union territory.

(3) Any registered person who fails to furnish the return required under section 52 by the due date shall be liable to pay a late fee of ten thousand rupees or an amount calculated at the rate of one per cent. of the turnover in the State or Union territory, whichever is higher, subject to a maximum of twenty-five thousand rupees.` },
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
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'high' as const,
        fullText: `**Section 50. Interest on delayed payment of tax**

(1) Every person who is liable to pay tax in accordance with the provisions of this Act or the rules made thereunder, but fails to pay the tax or any part thereof to the Government within the period prescribed, shall for the period for which the tax or any part thereof remains unpaid, pay, on his own, interest at such rate, not exceeding eighteen per cent., as may be notified by the Government on the recommendations of the Council.

(2) The interest under sub-section (1) shall be calculated, in such manner as may be prescribed, from the day succeeding the day on which such tax was due to be paid.

(3) A taxable person who makes an undue or excess claim of input tax credit under sub-section (10) of section 42 or undue or excess reduction in output tax liability under sub-section (10) of section 43, shall pay interest on such undue or excess claim or on such undue or excess reduction, as the case may be, at such rate not exceeding twenty-four per cent. as may be notified by the Government on the recommendations of the Council.` },
      { id: 'sec-51', number: '51', title: 'Tax deduction at source', description: 'TDS under GST',
        keyPoints: ['Applicable on government, PSU contracts', 'Rate: 2% (1% CGST + 1% SGST or 2% IGST)', 'On payments > ₹2.5 lakhs per contract', 'Deposit by 10th of next month', 'TDS certificate to be issued'],
        difficulty: 'advanced' as const, estimatedMinutes: 40, practicalRelevance: 'high' as const,
        fullText: `**Section 51. Tax deduction at source**

(1) Notwithstanding anything to the contrary contained in this Act, the Government may mandate,—

(a) a department or establishment of the Central Government or State Government; or

(b) local authority; or

(c) Governmental agencies; or

(d) such persons or category of persons as may be notified by the Government on the recommendations of the Council,

(hereafter in this section referred to as "the deductor"), to deduct tax at the rate of two per cent. from the payment made or credited to the supplier (hereafter in this section referred to as "the deductee") of taxable goods or services or both, where the total value of such supply, under a contract, exceeds two lakh and fifty thousand rupees:

Provided that no deduction shall be made if the location of the supplier and the place of supply is in a State or Union territory which is different from the State or, as the case may be, Union territory of registration of the recipient.

(2) The amount deducted as tax under this section shall be paid to the Government by the deductor within ten days after the end of the month in which such deduction is made, in such manner as may be prescribed.

(3) The deductor shall furnish to the deductee a certificate mentioning therein the contract value, rate of deduction, amount deducted, amount paid to the Government and such other particulars in such manner as may be prescribed.

(4) If any deductor fails to furnish to the deductee the certificate, after deducting the tax at source, within five days of crediting the amount so deducted to the Government, the deductor shall pay, by way of a late fee, a sum of one hundred rupees per day from the day after the expiry of such five days period until the failure is rectified, subject to a maximum amount of five thousand rupees.

(5) The deductee shall claim credit, in his electronic credit ledger, of the tax deducted and reflected in the return of the deductor furnished under sub-section (3) of section 39, in such manner as may be prescribed.

(6) If any deductor fails to pay to the Government the amount deducted as tax under sub-section (1), he shall pay interest in accordance with the provisions of sub-section (1) of section 50, in addition to the amount of tax deducted.

(7) The determination of the amount in default under this section shall be made in the manner specified in section 73 or section 74.

(8) The refund to the deductor or the deductee arising on account of excess or erroneous deduction shall be dealt with in accordance with the provisions of section 54:

Provided that no refund to the deductor shall be granted, if the amount deducted has been credited to the electronic cash ledger of the deductee.` },
      { id: 'sec-52', number: '52', title: 'Collection of tax at source', description: 'TCS by e-commerce operators',
        keyPoints: ['E-commerce operator to collect TCS', 'Rate: 1% (0.5% CGST + 0.5% SGST or 1% IGST)', 'On net value of taxable supplies', 'Monthly statement by 10th', 'Credit to supplier on filing return'],
        difficulty: 'advanced' as const, estimatedMinutes: 40, practicalRelevance: 'high' as const,
        fullText: `**Section 52. Collection of tax at source**

(1) Notwithstanding anything to the contrary contained in this Act, every electronic commerce operator (hereafter in this section referred to as the "operator"), not being an agent, shall collect an amount calculated at such rate not exceeding one per cent., as may be notified by the Government on the recommendations of the Council, of the net value of taxable supplies made through it by other suppliers where the consideration with respect to such supplies is to be collected by the operator.

(2) The power to collect the amount specified in sub-section (1) shall be without prejudice to any other mode of recovery from the operator.

(3) The amount collected under sub-section (1) shall be paid to the Government by the operator within ten days after the end of the month in which such collection is made, in such manner as may be prescribed.

(4) Every operator who collects the amount specified in sub-section (1) shall furnish a statement, electronically, containing the details of outward supplies of goods or services or both effected through it, including the supplies of goods or services or both returned through it, and the amount collected under sub-section (1) during a month, in such form and manner as may be prescribed, within ten days after the end of such month.

(5) Every operator who collects the amount specified in sub-section (1) shall furnish an annual statement, electronically, containing the details of outward supplies of goods or services or both effected through it, including the supplies of goods or services or both returned through it, and the amount collected under sub-section (1) during the financial year, in such form and manner as may be prescribed, within such time as may be prescribed.

(6) If any operator after furnishing a statement under sub-section (4) discovers any omission or incorrect particulars therein, other than as a result of scrutiny, audit, inspection or enforcement activity by the tax authorities, he shall rectify such omission or incorrect particulars in the statement to be furnished for the month during which such omission or incorrect particulars are noticed, subject to payment of interest, if any, in accordance with the provisions of section 50:

Provided that no such rectification of any omission or incorrect particulars shall be allowed after the due date for furnishing of statement for the month of September following the end of the financial year or the actual date of furnishing of the relevant annual statement, whichever is earlier.

(7) The supplier who has supplied the goods or services or both through the operator shall claim credit, in his electronic credit ledger, of the amount collected and reflected in the statement of the operator furnished under sub-section (4), in such manner as may be prescribed.

(8) If any operator after furnishing a statement under sub-section (4) discovers any omission or incorrect particulars therein, other than as a result of scrutiny, audit, inspection or enforcement activity by the tax authorities, he shall rectify such omission or incorrect particulars in the statement to be furnished for the month during which such omission or incorrect particulars are noticed, subject to payment of interest, if any, in accordance with the provisions of section 50:

Provided that no such rectification of any omission or incorrect particulars shall be allowed after the due date for furnishing of statement for the month of September following the end of the financial year or the actual date of furnishing of the relevant annual statement, whichever is earlier.

(9) The amount collected by the operator under sub-section (1) shall be paid to the Government by the operator within ten days after the end of the month in which such collection is made, in such manner as may be prescribed.

(10) If any operator fails to pay the amount collected under sub-section (1) to the Government, he shall pay interest in accordance with the provisions of sub-section (1) of section 50, in addition to the amount of tax collected.

(11) The determination of the amount in default under this section shall be made in the manner specified in section 73 or section 74.

(12) The refund to the operator or the supplier arising on account of excess or erroneous collection shall be dealt with in accordance with the provisions of section 54:

Provided that no refund to the operator shall be granted, if the amount collected has been credited to the electronic cash ledger of the supplier.` },
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
