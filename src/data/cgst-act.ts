// CGST Act Chapters 1-10
// Based on ICAI Publication - November 2025 Edition

export const CGST_ACT_CHAPTERS = [
  {
    id: 1, slug: 'preliminary', title: 'Preliminary', icon: '📋', category: 'cgst-act' as const,
    description: 'Definitions and basic concepts - foundation of GST law',
    sections: [
      { id: 'sec-1', number: '1', title: 'Short title, extent and commencement', description: 'Introduction to CGST Act 2017',
        keyPoints: ['Called Central Goods and Services Tax Act 2017', 'Extends to whole of India', 'Effective from 1st July 2017'],
        difficulty: 'basic' as const, estimatedMinutes: 10, practicalRelevance: 'low' as const,
        fullText: `**Section 1. Short title, extent and commencement**

(1) This Act may be called the Central Goods and Services Tax Act, 2017.

(2) It extends to the whole of India.

(3) It shall come into force on such date as the Central Government may, by notification in the Official Gazette, appoint:

Provided that different dates may be appointed for different provisions of this Act and any reference in any such provision to the commencement of this Act shall be construed as a reference to the coming into force of that provision.` },
      { id: 'sec-2', number: '2', title: 'Definitions', description: '121 key definitions forming the foundation of GST',
        keyPoints: ['Aggregate turnover definition', 'Business definition', 'Goods and Services defined', 'Supply meaning', 'Taxable person', 'Input tax credit'],
        difficulty: 'intermediate' as const, estimatedMinutes: 60, practicalRelevance: 'high' as const,
        fullText: `**Section 2. Definitions**

In this Act, unless the context otherwise requires,—

(1) "actionable claim" shall have the same meaning as assigned to it in section 3 of the Transfer of Property Act, 1882;

(2) "address of delivery" means the address of the recipient of goods or services or both indicated on the tax invoice issued by a registered person for delivery of such goods or services or both;

(3) "address on record" means the address of the recipient as available in the records of the supplier;

(4) "adjudicating authority" means any authority, appointed or authorised to pass any order or decision under this Act, but does not include the Central Board of Indirect Taxes and Customs, the Revisional Authority, the Authority for Advance Ruling, the Appellate Authority for Advance Ruling, the Appellate Authority and the Appellate Tribunal;

(5) "agent" means a person, including a factor, broker, commission agent, arhatia, del credere agent, an auctioneer or any other mercantile agent, by whatever name called, who carries on the business of supply or receipt of goods or services or both on behalf of another;

(6) "aggregate turnover" means the aggregate value of all taxable supplies (excluding the value of inward supplies on which tax is payable by a person on reverse charge basis), exempt supplies, exports of goods or services or both and inter-State supplies of persons having the same Permanent Account Number, to be computed on all India basis but excludes central tax, State tax, Union territory tax, integrated tax and cess;

(7) "agriculturist" means an individual or a Hindu Undivided Family who undertakes cultivation of land—

(a) by own labour, or

(b) by the labour of family, or

(c) by servants on wages payable in cash or kind or by hired labour under personal supervision or the personal supervision of any member of the family;

(8) "Appellate Authority" means the Appellate Authority for Advance Ruling constituted under section 99;

(9) "Appellate Tribunal" means the Goods and Services Tax Appellate Tribunal constituted under section 109;

(10) "appointed day" means the date on which the provisions of this Act shall come into force;

(11) "assessment" means determination of tax liability under this Act and includes self-assessment, re-assessment, provisional assessment, summary assessment and best judgment assessment;

(12) "associated enterprises" shall have the same meaning as assigned to it in section 92A of the Income-tax Act, 1961;

(13) "audit" means the examination of records, returns and other documents maintained or furnished by the registered person under this Act or the rules made thereunder or under any other law for the time being in force to verify the correctness of turnover declared, taxes paid, refund claimed and input tax credit availed, and to assess his compliance with the provisions of this Act or the rules made thereunder;

(14) "authorised bank" shall mean a bank or a branch of a bank authorised by the Government to collect the tax or any other amount payable under this Act;

(15) "authorised representative" means the representative as referred to in section 116;

(16) "Board" means the Central Board of Indirect Taxes and Customs constituted under the Central Boards of Revenue Act, 1963;

(17) "business" includes—

(a) any trade, commerce, manufacture, profession, vocation, adventure, wager or any other similar activity, whether or not it is for a pecuniary benefit;

(b) any activity or transaction in connection with or incidental or ancillary to sub-clause (a);

(c) any activity or transaction in the nature of sub-clause (a), whether or not there is volume, frequency, continuity or regularity of such transaction;

(d) supply or acquisition of goods including capital goods and services in connection with commencement or closure of business;

(e) provision by a club, association, society, or any such body (for a subscription or any other consideration) of the facilities or benefits to its members, as the case may be;

(f) admission, for a consideration, of persons to any premises;

(g) services supplied by a person as the holder of an office which has been accepted by him in the course or furtherance of his trade, profession or vocation;

(h) services provided by a race club by way of totalisator or a licence to bookmaker in such club; and

(i) any activity or transaction undertaken by the Central Government, a State Government or any local authority in which they are engaged as public authorities;

(18) "business vertical" means a distinguishable component of an enterprise that is engaged in the supply of individual goods or services or a group of related goods or services which is subject to risks and returns that are different from those of the other business verticals.

Explanation.—Factors that should be considered in determining whether goods or services are related include—

(a) the nature of the goods or services;

(b) the nature of the production processes;

(c) the type or class of customers for the goods or services;

(d) the methods used to distribute the goods or supply of services; and

(e) the nature of the regulatory environment (wherever applicable), including banking, insurance, or public utilities;

(19) "capital goods" means goods, the value of which is capitalised in the books of account of the person claiming the input tax credit and which are used or intended to be used in the course or furtherance of business;

(20) "casual taxable person" means a person who occasionally undertakes transactions involving supply of goods or services or both in the course or furtherance of business, whether as principal, agent or in any other capacity, in a State or a Union territory where he has no fixed place of business;

(21) "central tax" means the central goods and services tax levied under section 9;

(22) "cess" shall have the same meaning as assigned to it in the Goods and Services Tax (Compensation to States) Act;

(23) "Commissioner" means the Commissioner of central tax and includes the Principal Commissioner of central tax appointed under section 3 and the Commissioner of integrated tax appointed under the Integrated Goods and Services Tax Act;

(24) "Commissioner in the Board" means the Commissioner referred to in section 168;

(25) "common portal" means the common goods and services tax electronic portal referred to in section 146;

(26) "common working days" in respect of a State or Union territory shall mean such days in succession which are not declared as gazetted holidays by the Central Government or the concerned State Government or Union territory Administration;

(27) "company secretary" means a company secretary as defined in clause (c) of sub-section (1) of section 2 of the Company Secretaries Act, 1980;

(28) "competent authority" means such authority as may be notified by the Government;

(29) "composite supply" means a supply made by a taxable person to a recipient consisting of two or more taxable supplies of goods or services or both, or any combination thereof, which are naturally bundled and supplied in conjunction with each other in the ordinary course of business, one of which is a principal supply;

Illustration.—Where goods are packed and transported with insurance, the supply of goods, packing materials, transport and insurance is a composite supply and supply of goods is a principal supply;

(30) "consideration" in relation to the supply of goods or services or both includes—

(a) any payment made or to be made, whether in money or otherwise, in respect of, in response to, or for the inducement of, the supply of goods or services or both, whether by the recipient or by any other person but shall not include any payment made by the recipient on his own account, where the supplier and recipient are related, the price is not the sole consideration;

(b) the monetary value of any act or forbearance, in respect of, in response to, or for the inducement of, the supply of goods or services or both, whether by the recipient or by any other person but shall not include any payment made by the recipient on his own account:

Provided that a deposit given in respect of the supply of goods or services or both shall not be considered as payment made for such supply unless the supplier applies such deposit as consideration for the said supply;

(31) "continuous supply of goods" means a supply of goods which is provided, or agreed to be provided, continuously or on recurrent basis, under a contract, whether or not by means of a wire, cable, pipeline or other conduit, and for which the supplier invoices the recipient on a regular or periodic basis and includes supply of such goods as the Government may, by notification, specify;

(32) "continuous supply of services" means a supply of services which is provided, or agreed to be provided, continuously or on recurrent basis, under a contract, for a period exceeding three months with periodic payment obligations and includes supply of such services as the Government may, by notification, specify;

(33) "conveyance" includes a vessel, an aircraft and a vehicle;

(34) "cost accountant" means a cost accountant as defined in clause (c) of sub-section (1) of section 2 of the Cost and Works Accountants Act, 1959;

(35) "Council" means the Goods and Services Tax Council established under article 279A of the Constitution;

(36) "credit note" means a document issued by a registered person under sub-section (1) of section 34;

(37) "debit note" means a document issued by a registered person under sub-section (3) of section 34;

(38) "deemed exports" means such supplies of goods as may be notified under section 147;

(39) "designated authority" means such authority as may be notified by the Board;

(40) "document" includes written or printed record of any sort and electronic record as defined in clause (t) of section 2 of the Information Technology Act, 2000;

(41) "drawback" in relation to any goods manufactured in India and exported, means the rebate of duty, tax or charge chargeable on any imported materials or excisable materials used or taxable services used in the manufacture of such goods;

(42) "electronic cash ledger" means the electronic cash ledger referred to in sub-section (1) of section 49;

(43) "electronic commerce" means the supply of goods or services or both, including digital products over digital or electronic network;

(44) "electronic commerce operator" means any person who owns, operates or manages digital or electronic facility or platform for electronic commerce;

(45) "electronic credit ledger" means the electronic credit ledger referred to in sub-section (2) of section 49;

(46) "exempt supply" means supply of any goods or services or both which attracts nil rate of tax or which may be exempt from tax under section 11, or under section 6 of the Integrated Goods and Services Tax Act, and includes non-taxable supply;

(47) "existing law" means any law, rule, regulation, notification, order, bye-law, ordinance, direction or instruction (hereafter in this section referred to as law) relating to levy and collection of duty or tax on goods or services or both passed or made before the commencement of this Act by Parliament or any Authority or person having power to make law, and includes any notification, order, instruction or direction issued thereunder, including in respect of—

(a) tax on the sale or purchase of goods including the Value Added Tax under the Central Sales Tax Act, 1956;

(b) the Central Excise Act, 1944;

(c) Chapter V of the Finance Act, 1994;

(d) the Luxury Tax Act, 2011;

(e) the Entry Tax Act, 2007;

(f) the Entertainment Tax Act, 1985;

(g) the Taxes on Luxuries Act, 1987;

(h) the Karnataka Tax on Entry of Goods Act, 1979;

(i) the Kerala Tax on Luxuries Act, 1976;

(j) the Maharashtra Tax on the Entry of Motor Vehicles into Local Areas Act, 1987;

(k) the Punjab Tax on Entry of Goods into Local Areas Act, 2000;

(l) the Rajasthan Tax on Entry of Goods into Local Areas Act, 1999;

(m) the Tamil Nadu Tax on Entry of Goods Act, 2001;

(n) the West Bengal Tax on Entry of Goods into the Area of Local Authorities Act, 2012;

(o) the Assam Value Added Tax Act, 2003;

(p) the Bihar Value Added Tax Act, 2005;

(q) the Chhattisgarh Value Added Tax Act, 2005;

(r) the Delhi Value Added Tax Act, 2004;

(s) the Goa Value Added Tax Act, 2005;

(t) the Gujarat Value Added Tax Act, 2003;

(u) the Haryana Value Added Tax Act, 2003;

(v) the Himachal Pradesh Value Added Tax Act, 2005;

(w) the Jammu and Kashmir Value Added Tax Act, 2005;

(x) the Jharkhand Value Added Tax Act, 2005;

(y) the Karnataka Value Added Tax Act, 2003;

(z) the Kerala Value Added Tax Act, 2003;

(za) the Madhya Pradesh Value Added Tax Act, 2002;

(zb) the Maharashtra Value Added Tax Act, 2002;

(zc) the Manipur Value Added Tax Act, 2004;

(zd) the Meghalaya Value Added Tax Act, 2003;

(ze) the Mizoram Value Added Tax Act, 2005;

(zf) the Nagaland Value Added Tax Act, 2005;

(zg) the Odisha Value Added Tax Act, 2004;

(zh) the Puducherry Value Added Tax Act, 2007;

(zi) the Punjab Value Added Tax Act, 2005;

(zj) the Rajasthan Value Added Tax Act, 2003;

(zk) the Sikkim Value Added Tax Act, 2004;

(zl) the Tamil Nadu Value Added Tax Act, 2006;

(zm) the Tripura Value Added Tax Act, 2004;

(zn) the Uttar Pradesh Value Added Tax Act, 2008;

(zo) the Uttarakhand Value Added Tax Act, 2005;

(zp) the West Bengal Value Added Tax Act, 2003;

(zq) any other Act, rule, regulation, notification, order, bye-law, ordinance, direction or instruction relating to tax on goods or services or both, in force in any part of India, before the commencement of this Act;

(48) "family" means,—

(i) the spouse and children of the person, and

(ii) the parents, grand-parents, brothers and sisters of the person if they are wholly or mainly dependent on the said person;

(49) "fixed establishment" means a place (other than the registered place of business) which is characterised by a sufficient degree of permanence and suitable structure in terms of human and technical resources to supply services, or to receive and use services for its own needs;

(50) "Fund" means the Consumer Welfare Fund established under section 57;

(51) "goods" means every kind of movable property other than money and securities but includes actionable claim, growing crops, grass and things attached to or forming part of the land which are agreed to be severed before supply or under a contract of supply;

(52) "Government" means the Central Government;

(53) "Goods and Services Tax (Compensation to States) Act" means the Goods and Services Tax (Compensation to States) Act, 2017;

(54) "goods and services tax practitioner" means any person who has been approved under section 48 to act as such practitioner;

(55) "India" means the territory of India as referred to in article 1 of the Constitution, its territorial waters, seabed and subsoil underlying such waters, continental shelf, exclusive economic zone or any other maritime zone as referred to in the Territorial Waters, Continental Shelf, Exclusive Economic Zone and other Maritime Zones Act, 1976, and the air space above its territory and territorial waters;

(56) "Integrated Goods and Services Tax Act" means the Integrated Goods and Services Tax Act, 2017;

(57) "integrated tax" means the integrated goods and services tax levied under the Integrated Goods and Services Tax Act;

(58) "input" means any goods other than capital goods used or intended to be used by a supplier in the course or furtherance of business;

(59) "input service" means any service used or intended to be used by a supplier in the course or furtherance of business;

(60) "Input Service Distributor" means an office of the supplier of goods or services or both which receives tax invoices issued under section 31 towards the receipt of input services and issues a prescribed document for the purposes of distributing the credit of central tax, State tax, integrated tax or Union territory tax paid on the said services to a supplier of taxable goods or services or both having the same Permanent Account Number as that of the said office;

(61) "input tax" in relation to a registered person, means the central tax, State tax, integrated tax or Union territory tax charged on any supply of goods or services or both made to him and includes—

(a) the integrated goods and services tax charged on import of goods;

(b) the tax payable under the provisions of sub-sections (3) and (4) of section 9;

(c) the tax payable under the provisions of sub-sections (3) and (4) of section 5 of the Integrated Goods and Services Tax Act;

(d) the tax payable under the provisions of sub-sections (3) and (4) of section 9 of the respective State Goods and Services Tax Act; or

(e) the tax payable under the provisions of sub-sections (3) and (4) of section 7 of the Union Territory Goods and Services Tax Act,

but does not include the tax paid under the composition levy;

(62) "input tax credit" means the credit of input tax;

(63) "intra-State supply of goods" shall have the same meaning as assigned to it in section 8 of the Integrated Goods and Services Tax Act;

(64) "intra-State supply of services" shall have the same meaning as assigned to it in section 8 of the Integrated Goods and Services Tax Act;

(65) "invoice" or "tax invoice" means the tax invoice referred to in section 31;

(66) "inward supply" in relation to a person, shall mean receipt of goods or services or both whether by purchase, acquisition or any other means with or without consideration;

(67) "job work" means any treatment or process undertaken by a person on goods belonging to another registered person and the expression "job worker" shall be construed accordingly;

(68) "local authority" means—

(a) a "Panchayat" as defined in clause (d) of article 243 of the Constitution;

(b) a "Municipality" as defined in clause (e) of article 243P of the Constitution;

(c) a Municipal Committee, a Zilla Parishad, a District Board, and any other authority legally entitled to, or entrusted by the Central Government or any State Government with the control or management of a municipal or local fund;

(d) a Cantonment Board as defined in clause (c) of section 3 of the Cantonments Act, 2006;

(e) a Regional Council or a District Council constituted under the Sixth Schedule to the Constitution;

(f) a Development Board constituted under article 371 of the Constitution; or

(g) a Regional Council constituted under article 371A of the Constitution;

(69) "location of the recipient of services" means,—

(a) where a supply is received at a place of business for which the registration has been obtained, the location of such place of business;

(b) where a supply is received at a place other than the place of business for which registration has been obtained (a fixed establishment elsewhere), the location of such fixed establishment;

(c) where a supply is received at more than one establishment, whether the place of business or fixed establishment, the location of the establishment most directly concerned with the receipt of the supply; and

(d) in absence of such places, the location of the usual place of residence of the recipient;

(70) "location of the supplier of services" means,—

(a) where a supply is made from a place of business for which the registration has been obtained, the location of such place of business;

(b) where a supply is made from a place other than the place of business for which registration has been obtained (a fixed establishment elsewhere), the location of such fixed establishment;

(c) where a supply is made from more than one establishment, whether the place of business or fixed establishment, the location of the establishment most directly concerned with the provisions of the supply; and

(d) in absence of such places, the location of the usual place of residence of the supplier;

(71) "manufacture" means processing of raw material or inputs in any manner that results in emergence of a new product having a distinct name, character and use and the term "manufacturer" shall be construed accordingly;

(72) "market value" shall mean the full amount which a recipient of a supply of goods or services or both would have to pay to a supplier of such goods or services or both, at that time, to obtain such supply, assuming that the transaction is between un-related parties and the price is the sole consideration;

(73) "mixed supply" means two or more individual supplies of goods or services, or any combination thereof, made in conjunction with each other by a taxable person for a single price where such supply does not constitute a composite supply.

Illustration.—A supply of a package consisting of canned foods, sweets, chocolates, cakes, dry fruits, aerated drinks and fruit juices when supplied for a single price is a mixed supply. Each of these items can be supplied separately and is not dependent on any other. It shall not be a mixed supply if these items are supplied separately;

(74) "money" means the Indian legal tender or any foreign currency, cheque, promissory note, bill of exchange, letter of credit, draft, pay order, traveller cheque, money order, postal or electronic remittance or any other instrument recognised by the Reserve Bank of India when used as a consideration to settle an obligation or exchange with Indian legal tender of another denomination but shall not include any currency that is held for its numismatic value;

(75) "non-resident taxable person" means any person who occasionally undertakes transactions involving supply of goods or services or both, whether as principal or agent or in any other capacity, but who has no fixed place of business or residence in India;

(76) "notification" means a notification published in the Official Gazette and the expressions "notify" and "notified" shall be construed accordingly;

(77) "other territory" includes territories other than those comprising in a State and those referred to in sub-clauses (a) to (e) of clause (114);

(78) "output tax" in relation to a taxable person, means the tax chargeable under this Act on taxable supply of goods or services or both made by him or by his agent but excludes tax payable by him on reverse charge basis;

(79) "outward supply" in relation to a taxable person, means supply of goods or services or both, whether by sale, transfer, barter, exchange, licence, rental, lease or disposal or any other means, with or without consideration;

(80) "person" includes—

(a) an individual;

(b) a Hindu Undivided Family;

(c) a company;

(d) a firm;

(e) a Limited Liability Partnership;

(f) an association of persons or a body of individuals, whether incorporated or not, in India or outside India;

(g) any corporation established by or under any Central Act, State Act or Provincial Act or a Government company as defined in clause (45) of section 2 of the Companies Act, 2013;

(h) any body corporate incorporated by or under the laws of a country outside India;

(i) a co-operative society registered under any law relating to co-operative societies;

(j) a local authority;

(k) Central Government or a State Government;

(l) society as defined under the Societies Registration Act, 1860;

(m) trust; and

(n) every artificial juridical person, not falling within any of the above;

(81) "place of business" includes—

(a) a place from where the business is ordinarily carried on, and includes a warehouse, a godown or any other place where a taxable person stores his goods, or provides or receives goods or services or both; or

(b) a place where a taxable person maintains his books of account; or

(c) a place where a taxable person is engaged in business through an agent, by whatever name called;

(82) "place of supply" means the place of supply as referred to in Chapter V of the Integrated Goods and Services Tax Act;

(83) "prescribed" means prescribed by rules made under this Act on the recommendations of the Council;

(84) "principal" means a person on whose behalf an agent carries on the business of supply or receipt of goods or services or both;

(85) "principal place of business" means the place of business specified as the principal place of business in the certificate of registration;

(86) "principal supply" means the supply of goods or services which constitutes the predominant element of a composite supply and to which any other supply forming part of that composite supply is ancillary;

(87) "proper officer" in relation to any function to be performed under this Act, means the Commissioner or the officer of the central tax who is assigned that function by the Commissioner in the Board;

(88) "quarter" shall mean a period comprising three consecutive calendar months, ending on the last day of March, June, September or December of a calendar year;

(89) "recipient" of supply of goods or services or both, means—

(a) where a consideration is payable for the supply of goods or services or both, the person who is liable to pay that consideration,

(b) where no consideration is payable for the supply of goods, the person to whom the goods are delivered or made available, or to whom possession or use of the goods is given or made available, and

(c) where no consideration is payable for the supply of services, the person to whom the service is rendered,

and any reference to a person to whom a supply is made shall be construed as a reference to the recipient of the supply and shall include an agent acting as such on behalf of the recipient in relation to the goods or services or both so supplied;

(90) "registered person" means a person who is registered under section 25 but does not include a person having a Unique Identity Number;

(91) "regulations" means the regulations made by the Board under this Act on the recommendations of the Council;

(92) "removal" in relation to goods, means—

(a) despatch of the goods for delivery by the supplier or any other person acting on behalf of such supplier, or

(b) collection of the goods by the recipient or any other person acting on behalf of such recipient;

(93) "return" means any return prescribed or otherwise required to be furnished by or under this Act or the rules made thereunder;

(94) "reverse charge" means the liability to pay tax by the recipient of supply of goods or services or both instead of the supplier of such goods or services or both under sub-section (3) or sub-section (4) of section 9, or under sub-section (3) or sub-section (4) of section 5 of the Integrated Goods and Services Tax Act, or under sub-section (3) or sub-section (4) of section 9 of the respective State Goods and Services Tax Act, or under sub-section (3) or sub-section (4) of section 7 of the Union Territory Goods and Services Tax Act;

(95) "Revisional Authority" means an authority appointed or authorised for revision of decision or orders as referred to in section 108;

(96) "Schedule" means a Schedule appended to this Act;

(97) "securities" shall have the same meaning as assigned to it in clause (h) of section 2 of the Securities Contracts (Regulation) Act, 1956;

(98) "services" means anything other than goods, money and securities but includes activities relating to the use of money or its conversion by cash or by any other mode, from one form, currency or denomination, to another form, currency or denomination for which a separate consideration is charged;

(99) "State" includes a Union territory with Legislature;

(100) "State tax" means the tax levied under any State Goods and Services Tax Act;

(101) "supplier" in relation to any goods or services or both, shall mean the person supplying the said goods or services or both and shall include an agent acting as such on behalf of such supplier in relation to the goods or services or both so supplied;

(102) "tax period" means the period for which the return is required to be furnished;

(103) "taxable person" means a person who is registered or liable to be registered under section 22 or section 24;

(104) "taxable supply" means a supply of goods or services or both which is chargeable to tax under this Act;

(105) "taxable territory" means the territory to which the provisions of this Act apply;

(106) "telecommunication service" means service of any description (including electronic mail, voice mail, data services, audio text services, video text services, radio paging and cellular mobile telephone services) which is made available to users by means of any transmission or reception of signs, signals, writing, images and sounds or intelligence of any nature, by wire, radio, optical or other electromagnetic systems;

(107) "the State Goods and Services Tax Act" means the State Goods and Services Tax Act, 2017;

(108) "turnover in State" or "turnover in Union territory" means the aggregate value of all taxable supplies (excluding the value of inward supplies on which tax is payable by a person on reverse charge basis) and exempt supplies made within a State or Union territory by a taxable person, exports of goods or services or both and inter-State supplies of goods or services or both made from the State or Union territory by the said taxable person but excludes central tax, State tax, Union territory tax, integrated tax and cess;

(109) "usual place of residence" means—

(a) in case of an individual, the place where he ordinarily resides;

(b) in other cases, the place where the person is incorporated or otherwise legally constituted;

(110) "Union territory" means the territory of—

(a) the Andaman and Nicobar Islands;

(b) Lakshadweep;

(c) Dadra and Nagar Haveli and Daman and Diu;

(d) Ladakh;

(e) Chandigarh; or

(f) other territory.

Explanation.—For the purposes of this Act, each of the territories specified in sub-clauses (a) to (f) shall be considered to be a separate Union territory;

(111) "Union territory tax" means the Union territory goods and services tax levied under the Union Territory Goods and Services Tax Act;

(112) "valid return" means a return furnished under sub-section (1) of section 39 on which self-assessed tax has been paid in full;

(113) "voucher" means an instrument where there is an obligation to accept it as consideration or part consideration for a supply of goods or services or both and where the goods or services or both or the identity of the supplier is not indicated at the time of the issue of the voucher;

(114) "works contract" means a contract for building, construction, fabrication, completion, erection, installation, fitting out, improvement, modification, repair, maintenance, renovation, alteration or commissioning of any immovable property wherein transfer of property in goods (whether as goods or in some other form) is involved in the execution of such contract;

(115) words and expressions used but not defined in this Act and defined in the Integrated Goods and Services Tax Act, the Union Territory Goods and Services Tax Act and the Goods and Services Tax (Compensation to States) Act shall have the same meaning as assigned to them in those Acts;

(116) any reference in this Act to a law which is not in force in the State of Jammu and Kashmir, shall, in relation to that State be construed as a reference to the corresponding law, if any, in force in that State;

(117) words and expressions used but not defined in this Act but defined in the Central Excise Act, 1944 or the Finance Act, 1994, shall have the same meaning as assigned to them in those Acts, unless the context otherwise requires;

(118) any reference in this Act to a law which is not in force in the State of Jammu and Kashmir, shall, in relation to that State be construed as a reference to the corresponding law, if any, in force in that State;

(119) words and expressions used but not defined in this Act but defined in the Central Excise Act, 1944 or the Finance Act, 1994, shall have the same meaning as assigned to them in those Acts, unless the context otherwise requires;

(120) any reference in this Act to a law which is not in force in the State of Jammu and Kashmir, shall, in relation to that State be construed as a reference to the corresponding law, if any, in force in that State;

(121) words and expressions used but not defined in this Act but defined in the Central Excise Act, 1944 or the Finance Act, 1994, shall have the same meaning as assigned to them in those Acts, unless the context otherwise requires.` },
    ]
  },
  {
    id: 2, slug: 'administration', title: 'Administration', icon: '🏛️', category: 'cgst-act' as const,
    description: 'GST administrative hierarchy and officer powers',
    sections: [
      { id: 'sec-3', number: '3', title: 'Officers under this Act', description: 'Appointment of GST officers',
        keyPoints: ['Principal Chief Commissioner', 'Chief Commissioner', 'Principal Commissioner', 'Commissioner', 'Additional/Joint Commissioner', 'Deputy/Assistant Commissioner', 'Superintendent', 'Inspector'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'low' as const,
        fullText: `**Section 3. Officers under this Act**

The Government may, by notification, appoint such persons as it may think fit to be officers under this Act and may assign to them such functions as may be specified therein.` },
      { id: 'sec-4', number: '4', title: 'Appointment of officers', description: 'Power to appoint officers',
        keyPoints: ['Board may appoint officers', 'Central Government appoints Principal Chief Commissioners'],
        difficulty: 'basic' as const, estimatedMinutes: 10, practicalRelevance: 'low' as const,
        fullText: `**Section 4. Appointment of officers**

(1) The Board may, in addition to the officers as may be notified by the Government under section 3, appoint such persons as it may think fit to be officers under this Act.

(2) Without prejudice to the provisions of sub-section (1), the Board may, by order, authorise any officer referred to in clauses (a) to (h) of sub-section (1) of section 3 to appoint officers of central tax below the rank of Assistant Commissioner of central tax for the administration of this Act.` },
      { id: 'sec-5', number: '5', title: 'Powers of officers', description: 'Delegation and exercise of powers',
        keyPoints: ['Powers can be delegated', 'Subject to conditions specified'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'medium' as const,
        fullText: `**Section 5. Powers of officers**

(1) Subject to such conditions and limitations as the Board may impose, an officer of central tax may exercise the powers and discharge the duties conferred or imposed on him under this Act.

(2) An officer of central tax may exercise the powers and discharge the duties conferred or imposed under this Act on any other officer of central tax who is subordinate to him.

(3) The Commissioner may, subject to such conditions and limitations as may be specified in this behalf by him, delegate his powers to any other officer who is subordinate to him.

(4) Notwithstanding anything contained in this section, an Appellate Authority shall not exercise the powers and discharge the duties conferred or imposed on any other officer of central tax.` },
      { id: 'sec-6', number: '6', title: 'Authorisation of officers', description: 'Cross-empowerment provisions',
        keyPoints: ['State officers can act as Central officers', 'Central officers can act as State officers', 'Facilitates single interface'],
        difficulty: 'intermediate' as const, estimatedMinutes: 20, practicalRelevance: 'medium' as const,
        fullText: `**Section 6. Authorisation of officers of State tax or Union territory tax as proper officer in certain circumstances**

Without prejudice to the provisions of this Act, the officers appointed under the State Goods and Services Tax Act or the Union Territory Goods and Services Tax Act are authorised to be the proper officers for the purposes of this Act, subject to such conditions as the Government shall, on the recommendations of the Council, by notification, specify.` }
    ]
  },
  {
    id: 3, slug: 'levy-collection', title: 'Levy and Collection of Tax', icon: '💰', category: 'cgst-act' as const,
    description: 'Core charging provisions - scope of supply, rates, composition scheme',
    sections: [
      { id: 'sec-7', number: '7', title: 'Scope of supply', description: 'What constitutes supply under GST - the most fundamental provision',
        keyPoints: ['All forms of supply for consideration in course of business', 'Includes sale, transfer, barter, exchange, license, rental, lease', 'Import of services for consideration', 'Schedule I: Supply without consideration', 'Schedule II: Activities to be treated as supply', 'Schedule III: Neither goods nor services'],
        difficulty: 'advanced' as const, estimatedMinutes: 45, practicalRelevance: 'high' as const,
        fullText: `**Section 7. Scope of supply**

(1) For the purposes of this Act, the expression "supply" includes—

(a) all forms of supply of goods or services or both such as sale, transfer, barter, exchange, licence, rental, lease or disposal made or agreed to be made for a consideration by a person in the course or furtherance of business;

(b) import of services for a consideration whether or not in the course or furtherance of business;

(c) the activities specified in Schedule I, made or agreed to be made without a consideration; and

(d) the activities to be treated as supply of goods or supply of services as referred to in Schedule II.

(1A) Where certain activities or transactions constitute a supply in accordance with the provisions of sub-section (1), they shall be treated either as supply of goods or supply of services as referred to in Schedule II.

(2) Notwithstanding anything contained in sub-section (1),—

(a) activities or transactions specified in Schedule III; or

(b) such activities or transactions undertaken by the Central Government, a State Government or any local authority in which they are engaged as public authorities, as may be notified by the Government on the recommendations of the Council,

shall be treated neither as a supply of goods nor a supply of services.

(3) Subject to the provisions of sub-sections (1), (1A) and (2), the Government may, on the recommendations of the Council, specify, by notification, the transactions that are to be treated as—

(a) a supply of goods and not as a supply of services; or

(b) a supply of services and not as a supply of goods; or

(c) neither a supply of goods nor a supply of services.` },
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
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'medium' as const,
        fullText: `**Section 11. Power to grant exemption from tax**

(1) Where the Government is satisfied that it is necessary in the public interest so to do, it may, on the recommendations of the Council, by notification, exempt generally, either absolutely or subject to such conditions as may be specified in the notification, goods or services or both of any specified description from the whole or any part of the tax leviable thereon with effect from such date as may be specified in such notification.

(2) Where the Government is satisfied that it is necessary in the public interest so to do, it may, on the recommendations of the Council, by special order in each case, exempt from payment of tax, any goods or services or both on which tax is leviable.

(3) The Government may, if it considers necessary or expedient so to do for the purpose of clarifying the scope or applicability of any notification issued under sub-section (1) or order issued under sub-section (2), insert an explanation in such notification or order, as the case may be, by notification at any time within one year of issue of the notification under sub-section (1) or order under sub-section (2), and every such explanation shall have effect as if it had always been the part of the first such notification or order, as the case may be.

(4) The Government may, on the recommendations of the Council, by notification, specify the conditions subject to which an exemption granted under sub-section (1) or sub-section (2) in respect of any goods or services or both may be withdrawn.` },
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
        difficulty: 'advanced' as const, estimatedMinutes: 45, practicalRelevance: 'high' as const,
        fullText: `**Section 15. Value of taxable supply**

(1) The value of a supply of goods or services or both shall be the transaction value, which is the price actually paid or payable for the said supply of goods or services or both where the supplier and the recipient of the supply are not related and the price is the sole consideration for the supply.

(2) The value of supply shall include—

(a) any taxes, duties, cesses, fees and charges levied under any law for the time being in force other than this Act, the State Goods and Services Tax Act, the Union Territory Goods and Services Tax Act and the Goods and Services Tax (Compensation to States) Act, if charged separately by the supplier;

(b) any amount that the supplier is liable to pay in relation to such supply but which has been incurred by the recipient of the supply and not included in the price actually paid or payable for the goods or services or both;

(c) incidental expenses, including commission and packing, charged by the supplier to the recipient of a supply and any amount charged for anything done by the supplier in respect of the supply of goods or services or both at the time of, or before delivery of goods or supply of services;

(d) interest or late fee or penalty for delayed payment of any consideration for any supply; and

(e) subsidies directly linked to the price excluding subsidies provided by the Central Government and State Governments.

Explanation.—For the purposes of this sub-section, the amount of subsidy shall be included in the value of supply of the supplier who receives the subsidy.

(3) The value of the supply shall not include any discount which is given—

(a) before or at the time of the supply if such discount has been duly recorded in the invoice issued in respect of such supply; and

(b) after the supply has been effected if—

(i) such discount is established in terms of an agreement entered into at or before the time of such supply and specifically linked to relevant invoices; and

(ii) input tax credit as is attributable to the discount on the basis of document issued by the supplier has been reversed by the recipient of the supply.

(4) Where the value of the supply of goods or services or both cannot be determined under sub-section (1), the same shall be determined in such manner as may be prescribed.

(5) Notwithstanding anything contained in sub-section (1) or sub-section (4), the value of such supplies as may be notified by the Government on the recommendations of the Council shall be determined in such manner as may be prescribed.

Explanation.—For the purposes of this Act,—

(a) persons shall be deemed to be "related persons" if—

(i) such persons are officers or directors of one another's businesses;

(ii) such persons are legally recognised partners in business;

(iii) such persons are employer and employee;

(iv) any person directly or indirectly owns, controls or holds twenty-five per cent. or more of the outstanding voting stock or shares of both of them;

(v) one of them directly or indirectly controls the other;

(vi) both of them are directly or indirectly controlled by a third person;

(vii) together they directly or indirectly control a third person; or

(viii) they are members of the same family;

(b) the term "person" also includes legal persons;

(c) persons who are associated in the business of one another in that one is the sole agent or sole distributor or sole concessionaire, howsoever described, of the other, shall be deemed to be related.` }
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
        difficulty: 'intermediate' as const, estimatedMinutes: 25, practicalRelevance: 'high' as const,
        fullText: `**Section 19. Taking input tax credit in respect of inputs and capital goods sent for job work**

(1) The principal shall, subject to such conditions and restrictions as may be prescribed, be allowed input tax credit on inputs sent to a job worker for job work.

(2) Notwithstanding anything contained in clause (b) of sub-section (2) of section 16, the principal shall be entitled to take credit of input tax on inputs even if the inputs are directly sent to a job worker for job work without being first brought to his place of business.

(3) Where the inputs sent for job work are not received back by the principal after completion of job work or otherwise within one year of being sent out, it shall be deemed that such inputs had been supplied by the principal to the job worker on the day when the inputs were sent out:

Provided that where the inputs are sent directly to a job worker, the period of one year shall be counted from the date of receipt of inputs by the job worker.

(4) The principal shall, subject to such conditions and restrictions as may be prescribed, be allowed input tax credit on capital goods sent to a job worker for job work.

(5) Notwithstanding anything contained in clause (b) of sub-section (2) of section 16, the principal shall be entitled to take credit of input tax on capital goods even if the capital goods are directly sent to a job worker for job work without being first brought to his place of business.

(6) Where the capital goods sent for job work are not received back by the principal within a period of three years of being sent out, it shall be deemed that such capital goods had been supplied by the principal to the job worker on the day when the capital goods were sent out:

Provided that where the capital goods are sent directly to a job worker, the period of three years shall be counted from the date of receipt of capital goods by the job worker.

(7) Nothing contained in sub-section (3) or sub-section (6) shall apply to moulds and dies, jigs and fixtures, or tools sent out to a job worker for job work.` },
      { id: 'sec-20', number: '20', title: 'Input Service Distributor', description: 'Distribution of ITC by ISD',
        keyPoints: ['Office receiving common invoices', 'Distributes credit to branches', 'Pro-rata distribution based on turnover'],
        difficulty: 'advanced' as const, estimatedMinutes: 35, practicalRelevance: 'medium' as const,
        fullText: `**Section 20. Manner of distribution of credit by Input Service Distributor**

(1) The Input Service Distributor shall distribute the input tax credit in the manner and subject to such conditions and restrictions as may be prescribed.

(2) The Input Service Distributor may distribute the credit subject to the following conditions, namely:—

(a) the credit can be distributed to the recipients to whom the input service is attributable in accordance with the provisions of clause (d) or clause (e) of sub-section (2) of section 17; and

(b) the credit of tax paid on input services used exclusively for the purposes of a business vertical shall be distributed only to that business vertical.

(3) The Input Service Distributor shall distribute the input tax credit in such manner and subject to such conditions as may be prescribed.

(4) The Input Service Distributor shall, in accordance with the provisions of clause (h) of sub-section (2) of section 16, be eligible to distribute input tax credit in respect of a supply of goods or services or both received by him, only to the extent to which credit is available in respect of such supply, and such distribution shall be subject to such conditions and restrictions as may be prescribed.

(5) The Input Service Distributor shall distribute the input tax credit only to the recipients to whom the input service is attributable and such distribution shall be subject to such conditions and restrictions as may be prescribed.` },
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
        difficulty: 'intermediate' as const, estimatedMinutes: 35, practicalRelevance: 'high' as const,
        fullText: `**Section 31. Tax invoice**

(1) A registered person supplying taxable goods shall, before or at the time of,—

(a) removal of goods for supply to the recipient, where the supply involves movement of goods; or

(b) delivery of goods or making available thereof to the recipient, in any other case,

issue a tax invoice showing the description, quantity and value of goods, the tax charged thereon and such other particulars as may be prescribed:

Provided that the Government may, on the recommendations of the Council, by notification, specify the categories of goods or supplies in respect of which a tax invoice shall be issued, within such time and in such manner as may be prescribed.

(2) A registered person supplying taxable services shall, before or after the provision of service but within a prescribed period, issue a tax invoice, showing the description, quantity and value of services, the tax charged thereon and such other particulars as may be prescribed:

Provided that the Government may, on the recommendations of the Council, by notification and subject to such conditions as may be specified therein, specify the categories of services in respect of which—

(a) any other document issued in relation to the supply shall be deemed to be a tax invoice; or

(b) no tax invoice shall be issued.

(3) Notwithstanding anything contained in sub-sections (1) and (2)—

(a) a registered person may, within one month from the date of issuance of certificate of registration and in such manner as may be prescribed, issue a revised invoice against the invoice already issued during the period beginning with the effective date of registration till the date of issuance of certificate of registration to him;

(b) a registered person may not issue a tax invoice if the value of the goods or services or both supplied together with the tax payable thereon is less than two hundred rupees subject to such conditions and in such manner as may be prescribed;

(c) a registered person supplying exempted goods or services or both or paying tax under the provisions of section 10 shall issue, instead of a tax invoice, a bill of supply containing such particulars and in such manner as may be prescribed:

Provided that the registered person may not issue a bill of supply if the value of the goods or services or both supplied together with the tax payable thereon is less than two hundred rupees subject to such conditions and in such manner as may be prescribed;

(d) a registered person shall, on receipt of advance payment with respect to any supply of goods or services or both, issue a receipt voucher or such other document, containing such particulars as may be prescribed;

(e) where, on receipt of advance payment with respect to any supply of goods or services or both the registered person issues a receipt voucher, but subsequently no supply is made and no tax invoice is issued in pursuance thereof, the said registered person may issue to the person who had made the payment, a refund voucher against such payment;

(f) a registered person who is liable to pay tax under sub-section (3) or sub-section (4) of section 9 shall issue an invoice in respect of goods or services or both received by him from the supplier whether registered or not, and such invoice shall be deemed to be an invoice issued under this section whether the said registered person is registered or not.

(4) In case of continuous supply of goods, where successive statements of accounts or successive payments are involved, the invoice shall be issued before or at the time each such statement is issued or, as the case may be, each such payment is received.

(5) Subject to the provisions of clause (d) and clause (e) of sub-section (3), in case of continuous supply of services,—

(a) where the due date of payment is ascertainable from the contract, the invoice shall be issued on or before the due date of payment;

(b) where the due date of payment is not ascertainable from the contract, the invoice shall be issued before or at the time when the supplier of service receives the payment;

(c) where the payment is linked to the completion of an event, the invoice shall be issued on or before the date of completion of that event.

(6) In a case where the supply of services ceases under a contract before the completion of the supply, the invoice shall be issued at the time when the supply ceases and such invoice shall be issued to the extent of the supply made before such cessation.

(7) Where the goods being sent or taken on approval for sale or return are removed before the supply takes place, the invoice shall be issued before or at the time of supply or six months from the date of removal, whichever is earlier.

(8) Notwithstanding anything contained in sub-section (1), where the goods being sent or taken on approval for sale or return are removed before the supply takes place, the invoice shall be issued before or at the time of supply or six months from the date of removal, whichever is earlier.` },
      { id: 'sec-32', number: '32', title: 'Prohibition of unauthorized collection', description: 'Who cannot collect tax',
        keyPoints: ['Unregistered persons cannot collect tax', 'Composition dealers cannot collect tax', 'Penalty for violation'],
        difficulty: 'basic' as const, estimatedMinutes: 15, practicalRelevance: 'medium' as const },
      { id: 'sec-33', number: '33', title: 'Amount of tax to be indicated', description: 'Tax details on invoice',
        keyPoints: ['Tax amount must be shown separately', 'Rate and amount for CGST, SGST/IGST'],
        difficulty: 'basic' as const, estimatedMinutes: 10, practicalRelevance: 'high' as const },
      { id: 'sec-34', number: '34', title: 'Credit and debit notes', description: 'For value/tax adjustments post-supply',
        keyPoints: ['Credit note: when value/tax reduces', 'Debit note: when value/tax increases', 'Time limit: 30th November of next FY', 'Details to be declared in return'],
        difficulty: 'intermediate' as const, estimatedMinutes: 30, practicalRelevance: 'high' as const,
        fullText: `**Section 34. Credit and debit notes**

(1) Where a tax invoice has been issued for supply of any goods or services or both and the taxable value or tax charged in that tax invoice is found to exceed the taxable value or tax payable in respect of such supply, or where the goods supplied are returned by the recipient, or where goods or services or both supplied are found to be deficient, the registered person, who has supplied such goods or services or both, may issue to the recipient a credit note containing such particulars as may be prescribed.

(2) Any registered person who issues a credit note in relation to a supply of goods or services or both shall declare the details of such credit note in the return for the month during which such credit note has been issued but not later than September following the end of the financial year in which such supply was made, or the date of furnishing of the relevant annual return, whichever is earlier, and the tax liability shall be adjusted in such manner as may be prescribed:

Provided that no reduction in output tax liability of the supplier shall be permitted, if the incidence of tax and interest on such supply has been passed on to any other person.

(3) Where a tax invoice has been issued for supply of any goods or services or both and the taxable value or tax charged in that tax invoice is found to be less than the taxable value or tax payable in respect of such supply, the registered person, who has supplied such goods or services or both, shall issue to the recipient a debit note containing such particulars as may be prescribed.

(4) Any registered person who issues a debit note in relation to a supply of goods or services or both shall declare the details of such debit note in the return for the month during which such debit note has been issued and the tax liability shall be adjusted in such manner as may be prescribed:

Provided that any registered person who issues a debit note in relation to a supply of goods or services or both shall declare the details of such debit note in the return for the month during which such debit note has been issued but not later than September following the end of the financial year in which such supply was made, or the date of furnishing of the relevant annual return, whichever is earlier, and the tax liability shall be adjusted in such manner as may be prescribed.` },
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
