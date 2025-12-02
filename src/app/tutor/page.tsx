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
- Subject to conditions and approval`
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

function getAIResponse(question: string): string {
  const q = question.toLowerCase().trim();
  
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
    
    // Search for both topics
    const results1 = topic1 ? searchCurriculum(topic1) : [];
    const results2 = topic2 ? searchCurriculum(topic2) : [];
    
    // Build comparison response
    let response = `**Comparison: ${topic1 || 'Topic 1'} vs ${topic2 || 'Topic 2'}**\n\n`;
    
    if (results1.length > 0 && results1[0].score >= 30) {
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
    
    if (results2.length > 0 && results2[0].score >= 30) {
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
    
    // Add key differences summary
    if (results1.length > 0 && results2.length > 0) {
      response += `**Key Differences:**\n\n`;
      const best1 = results1[0];
      const best2 = results2[0];
      
      // Specific comparisons with detailed differences
      const topic1Lower = topic1.toLowerCase();
      const topic2Lower = topic2.toLowerCase();
      const title1Lower = best1.section.title.toLowerCase();
      const title2Lower = best2.section.title.toLowerCase();
      
      if ((title1Lower.includes('zero') || topic1Lower.includes('zero')) && 
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
  const results = searchCurriculum(question);
  
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
  
  // If no curriculum match and no hardcoded response, provide helpful guidance
  const totalChapters = GST_MODULES.reduce((acc, m) => acc + m.chapters.length, 0);
  const totalSections = GST_MODULES.reduce((acc, m) => acc + m.chapters.reduce((chAcc, ch) => chAcc + ch.sections.length, 0), 0);
  
  return `I searched through ${totalChapters} chapters and ${totalSections} sections in the GST curriculum but couldn't find a specific match for "${question}".

**Tips for better results:**
- Use specific section numbers: "Section 16", "Section 17(5)", "Section 9"
- Use specific terms: "input tax credit", "time of supply", "place of supply", "composition scheme"
- Ask about specific topics: "GST registration", "e-way bill", "refunds", "assessments"

**Example questions:**
- "Explain Section 16 on ITC eligibility"
- "What is time of supply for goods?"
- "Tell me about composition scheme"
- "What are the provisions for refunds?"

I can search through all CGST Act, CGST Rules, and IGST Act provisions to find the answer!`;
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
                    <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap" 
                      dangerouslySetInnerHTML={{ 
                        __html: msg.content
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary-600 hover:text-primary-700 underline" target="_self">$1</a>')
                          .replace(/\n/g, '<br/>') 
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
