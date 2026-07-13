"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Play,
  Calendar,
  Heart,
  Instagram
} from "lucide-react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import WavingRibbon from "@/components/WavingRibbon";
import AnimatedCounter from "@/components/AnimatedCounter";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import Script from "next/script";

<Script
  src="https://platform.x.com/widgets.js"
  strategy="lazyOnload"
/>

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props} xmlns="http://www.w3.org/2000/svg">
    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7Zm9.5 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props} xmlns="http://www.w3.org/2000/svg">
    <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.38 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.15 12.15 0 0 1 3.15 4.9a4.28 4.28 0 0 0 1.33 5.72 4.22 4.22 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54 12.1 12.1 0 0 0 8.29 21c7.9 0 12.22-6.55 12.22-12.22 0-.19 0-.38-.01-.57A8.7 8.7 0 0 0 22.46 6Z" />
  </svg>
);

// Hero Slides
interface HeroSlide {
  titleEn: string;
  titleHi: string;
  subEn: string;
  subHi: string;
  image: string;
  textPosition: "left" | "right";
}

const heroSlides: HeroSlide[] = [
  {
    titleEn: "“STUDENT OF HISTORY”",
    titleHi: "“इतिहास के अध्येता”",
    subEn: "Dedicated to the regional heritage, education, and rural prosperity.",
    subHi: "भारत की क्षेत्रीय विरासत, शिक्षा और ग्रामीण समृद्धि के लिए समर्पित।",
    image: "/images/hero-2.png",
    textPosition: "right",
  },
  {
    titleEn: "“LEADER OF YOUTH”",
    titleHi: "“युवाओं के मार्गदर्शक”",
    subEn: "Creating job skills, sports programs, and technical education hubs.",
    subHi: "कौशल विकास, खेलकूद और तकनीकी शिक्षा के नए अवसरों का सृजन।",
    image: "/images/hero.png",
    textPosition: "left",
  },
 
  {
    titleEn: "“ART & CULTURE LOVER”",
    titleHi: "“कला एवं संस्कृति प्रेमी”",
    subEn: "Supporting local artisans, folk festivals, and sports drives.",
    subHi: "स्थानीय शिल्पकारों, लोक उत्सवों और खेल अभियानों को निरंतर प्रोत्साहन।",
    image: "/images/hero-1.png",
    textPosition: "left",
  },
];

// Journey Timeline Data
interface JourneyEvent {
  year: string;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  image: string;
}

const journeyEvents: JourneyEvent[] = [
  {
    year: "2007",
    titleEn: "Grassroots Entry",
    titleHi: "जमीनी स्तर पर शुरुआत",
    descEn: "Started active public service and grassroots political activities in Deoria. Worked door-to-door with local youth.",
    descHi: "देवरिया में सक्रिय जनसेवा और जमीनी स्तर की राजनीतिक गतिविधियों की शुरुआत की। स्थानीय युवाओं के साथ काम किया।",
    image: "/images/image-copy.png",
  },
  {
    year: "2010",
    titleEn: "Academics & BJMC",
    titleHi: "एमिटी यूनिवर्सिटी में दाखिला",
    descEn: "Graduated with Mass Communication degree from Amity University, sharpening communication and campaign skills.",
    descHi: "एमिटी यूनिवर्सिटी से जनसंचार में स्नातक (BJMC) पूरा किया, जिससे जनसंचार और अभियानों को नई दिशा मिली।",
    image: "/images/image.png",
  },
  {
    year: "2017",
    titleEn: "Assembly Campaign",
    titleHi: "प्रथम विधानसभा चुनाव",
    descEn: "Contested Uttar Pradesh Legislative Assembly Election from Barhaj Constituency, building local party organization.",
    descHi: "बरहज निर्वाचन क्षेत्र से उत्तर प्रदेश विधानसभा चुनाव लड़ा, जिससे क्षेत्र में पार्टी संगठन को भारी मजबूती मिली।",
    image: "/images/image-copy-2.png",
  },
  {
    year: "2022",
    titleEn: "SP Candidacy",
    titleHi: "समाजवादी पार्टी प्रत्याशी",
    descEn: "Contested Assembly Election from Barhaj as the Samajwadi Party Candidate, championing social justice and youth rights.",
    descHi: "बरहज विधानसभा क्षेत्र से समाजवादी पार्टी के उम्मीदवार के रूप में विधानसभा चुनाव लड़ा, जिसमें सामाजिक न्याय को प्राथमिकता दी।",
    image: "/images/image-copy-4.png",
  },
  {
    year: "Present",
    titleEn: "Continuous Public Welfare",
    titleHi: "निरंतर लोक कल्याण",
    descEn: "Actively working for youth empowerment, organizing health drives, blood camps, and holding weekly chaupals.",
    descHi: "युवा सशक्तिकरण के लिए सक्रिय रूप से काम करना, स्वास्थ्य शिविरों और साप्ताहिक चौपालों पर समस्याओं का निवारण करना।",
    image: "/images/image-copy-3.png",
  },
];

// Stalwart Says Quotes
interface StalwartQuote {
  nameEn: string;
  nameHi: string;
  titleEn: string;
  titleHi: string;
  quoteEn: string;
  quoteHi: string;
  image: string;
}

const stalwartQuotes: StalwartQuote[] = [
  {
    nameEn: "Akhilesh Yadav",
    nameHi: "अखिलेश यादव",
    titleEn: "National President, Samajwadi Party",
    titleHi: "राष्ट्रीय अध्यक्ष, समाजवादी पार्टी",
    quoteEn: "Murli Manohar Jaiswal (Solu Ji) is an energetic and dedicated youth leader working continuously for Barhaj development.",
    quoteHi: "मुरली मनोहर जायसवाल (सोलू जी) एक ऊर्जावान और समर्पित युवा नेता हैं जो बरहज के विकास के लिए लगातार काम कर रहे हैं।",
    image: "/images/image-copy-4.png",
  },
  {
    nameEn: "Late Mulayam Singh Yadav",
    nameHi: "स्व. मुलायम सिंह यादव",
    titleEn: "Founder, Samajwadi Party",
    titleHi: "संस्थापक, समाजवादी पार्टी",
    quoteEn: "Solu has inherited the lineage of dedication and public service from his father, Ram Prasad Jaiswal.",
    quoteHi: "सोलू ने अपने पिता स्वर्गीय राम प्रसाद जायसवाल से जनसेवा और निष्ठा की शानदार राजनीतिक विरासत प्राप्त की है।",
    image: "/images/image-copy-3.png",
  },
  {
    nameEn: "Prof. Ram Gopal Yadav",
    nameHi: "प्रो. राम गोपाल यादव",
    titleEn: "Member of Parliament, Rajya Sabha",
    titleHi: "सांसद, राज्यसभा",
    quoteEn: "His organizational capabilities and direct connection with the grassroots rural families in Deoria are exemplary.",
    quoteHi: "उनकी संगठनात्मक क्षमता और देवरिया के ग्रामीण परिवारों के साथ उनका सीधा जमीनी जुड़ाव अत्यंत सराहनीय है।",
    image: "/images/image-copy-2.png",
  },
  {
    nameEn: "Late Janeshwar Mishra",
    nameHi: "स्व. जनेश्वर मिश्र",
    titleEn: "Socialist Ideologue (Chhote Lohia)",
    titleHi: "समाजवादी विचारक (छोटे लोहिया)",
    quoteEn: "Solu Jaiswal carries the genuine spirit of struggle, advocating for the farmers and weaker sections.",
    quoteHi: "सोलू जायसवाल संघर्ष की वास्तविक भावना को धारण करते हैं, किसानों और कमजोर वर्गों के लिए हमेशा तत्पर रहते हैं।",
    image: "/images/image.png",
  },
  {
    nameEn: "Kiranmoy Nanda",
    nameHi: "किरणमय नंदा",
    titleEn: "National Vice President, Samajwadi Party",
    titleHi: "राष्ट्रीय उपाध्यक्ष, समाजवादी पार्टी",
    quoteEn: "The dedication and youth energy of Murli Manohar Jaiswal ensures the Samajwadi values fly high in Barhaj.",
    quoteHi: "मुरली मनोहर जायसवाल का समर्पण और युवा ऊर्जा बरहज में समाजवादी मूल्यों को और अधिक मजबूत बनाती है।",
    image: "/images/image-copy-2.png",
  },
];

// Mock Video Playlist
interface VideoItem {
  id: number;
  titleEn: string;
  titleHi: string;
  dateEn: string;
  dateHi: string;
  image: string;
}

const playlistVideos: VideoItem[] = [
  {
    id: 1,
    titleEn: "Barhaj Vriksharopan & Development Launch (12 July 2026)",
    titleHi: "बरहज वृक्षारोपण एवं विकास परियोजनाओं का शुभारंभ (12 जुलाई 2026)",
    dateEn: "July 12, 2026",
    dateHi: "12 जुलाई, 2026",
    image: "/images/image-copy-3.png"
  },
  {
    id: 2,
    titleEn: "Solu Jaiswal addressing Samajwadi Chaupal at Deoria",
    titleHi: "सोलू जायसवाल ने देवरिया में समाजवादी चौपाल को संबोधित किया",
    dateEn: "July 02, 2026",
    dateHi: "02 जुलाई, 2026",
    image: "/images/image-copy-4.png"
  },
  {
    id: 3,
    titleEn: "Youth sports meet concluding address by Murli Manohar",
    titleHi: "युवा खेलकूद सम्मेलन में मुरली मनोहर का समापन संबोधन",
    dateEn: "June 24, 2026",
    dateHi: "24 जून, 2026",
    image: "/images/image-copy-2.png"
  }
];

// Press Items
interface PressItem {
  id: number;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  dateEn: string;
  dateHi: string;
  image: string;
}

const mainPressItems: PressItem[] = [
  {
    id: 1,
    titleEn: "Solu Jaiswal demands infrastructure upgrades in Barhaj",
    titleHi: "सोलू जायसवाल ने बरहज में बुनियादी ढांचे में सुधार की मांग की",
    descEn: "Press statement outlining roads, water logging, and primary healthcare grid issues in eastern UP.",
    descHi: "पूर्वी उत्तर प्रदेश में सड़कों, जलभराव और प्राथमिक स्वास्थ्य सुविधाओं की समस्याओं को रेखांकित करता प्रेस बयान।",
    dateEn: "June 25, 2026",
    dateHi: "25 जून, 2026",
    image: "/images/image-copy-3.png"
  },
  {
    id: 2,
    titleEn: "Samajwadi Party youth rally registers massive footfall",
    titleHi: "समाजवादी पार्टी की युवा रैली में उमड़ा जनसैलाब",
    descEn: "Thousands of students and farmers attended the public address focusing on employment and crop pricing.",
    descHi: "रोजगार और फसलों के उचित मूल्य पर केंद्रित जनसभा में हजारों छात्रों और किसानों ने भाग लिया।",
    dateEn: "June 18, 2026",
    dateHi: "18 जून, 2026",
    image: "/images/image-copy-4.png"
  }
];

const popularPress = [
  { titleEn: "Solu Jaiswal provides relief kits to flood areas", titleHi: "सोलू जायसवाल ने बाढ़ प्रभावित क्षेत्रों में राहत किट वितरित की", dateEn: "June 12, 2026", dateHi: "12 जून, 2026" },
  { titleEn: "Sports promotion courts built in Barhaj subdivision", titleHi: "बरहज उपखंड में खेल प्रोत्साहन कोर्ट का निर्माण पूरा", dateEn: "June 08, 2026", dateHi: "08 जून, 2026" },
  { titleEn: "Healthcare camp resolves rural complaints", titleHi: "स्वास्थ्य शिविर ने ग्रामीण समस्याओं का किया समाधान", dateEn: "May 29, 2026", dateHi: "29 मई, 2026" }
];

interface ImpactCard {
  id: number;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  detailsEn: string;
  detailsHi: string;
}

const impactCards: ImpactCard[] = [
  {
    id: 1,
    titleEn: "People’s Person",
    titleHi: "जन-जन के नेता",
    descEn: "15+ years of family dedication in Deoria constituency",
    descHi: "देवरिया विधानसभा क्षेत्र में परिवार का 15+ वर्षों का समर्पण",
    detailsEn: "Murli Manohar Jaiswal (Solu Ji) has spent a lifetime interacting with local communities. Holding weekly chaupals, he helps resolve public issues on electricity, road grids, and local irrigation pipelines.",
    detailsHi: "मुरली मनोहर जायसवाल (सोलू जी) ने स्थानीय समुदायों के साथ संवाद करने में जीवन समर्पित किया है। साप्ताहिक चौपालों के माध्यम से वह बिजली, सड़क ग्रिड और स्थानीय सिंचाई पाइपलाइनों की समस्याओं का समाधान करते हैं।"
  },
  {
    id: 2,
    titleEn: "Facilitator of Change",
    titleHi: "बदलाव के अग्रदूत",
    descEn: "Driving infrastructure, education, and health drives",
    descHi: "बुनियादी ढांचे, शिक्षा और स्वास्थ्य अभियानों का नेतृत्व",
    detailsEn: "Spearheaded numerous rural water filtration setups, initiated flood relief packaging, and actively constructed local athletic facilities for rural school athletes.",
    detailsHi: "कई ग्रामीण जल निस्पंदन प्रणालियों का नेतृत्व किया, बाढ़ राहत पैकेजों का वितरण शुरू किया, और ग्रामीण स्कूल एथलीटों के लिए सक्रिय रूप से खेल मैदानों का निर्माण किया।"
  },
  {
    id: 3,
    titleEn: "Contributor in Nation Building",
    titleHi: "राष्ट्र निर्माण में योगदान",
    descEn: "A firm believer in Indian culture and youth power",
    descHi: "भारतीय संस्कृति और युवा शक्ति में अटूट विश्वास",
    detailsEn: "Dedicated to preserving regional art, coordinating historical folk lectures, and financing scholarship paths for higher education.",
    detailsHi: "क्षेत्रीय कला के संरक्षण, ऐतिहासिक व्याख्यानों के समन्वय और उच्च शिक्षा के लिए छात्रवृत्ति प्रदान करने के लिए पूरी तरह समर्पित हैं।"
  },
  {
    id: 4,
    titleEn: "Organization Builder",
    titleHi: "संगठन निर्माता",
    descEn: "Strengthening Samajwadi Party at the grassroots",
    descHi: "जमीनी स्तर पर समाजवादी पार्टी को सशक्त बनाना",
    detailsEn: "Active mobilizer of booth workers, coordinating local assembly drives, and aligning regional cells to ensure inclusive democratic participation.",
    detailsHi: "बूथ कार्यकर्ताओं के सक्रिय संगठक, स्थानीय विधानसभा अभियानों का समन्वय और समावेशी लोकतांत्रिक भागीदारी सुनिश्चित करने के लिए क्षेत्रीय इकाइयों का संरेखण।"
  },
  {
    id: 5,
    titleEn: "Sports & Youth Promoter",
    titleHi: "खेल एवं युवा प्रमोटर",
    descEn: "Taking cricket and athletic paths to greater heights",
    descHi: "क्रिकेट और खेल प्रतिभाओं को नई ऊंचाइयों पर ले जाना",
    detailsEn: "Sponsoring local volleyball leagues, distributing athletic kits, and encouraging sports infrastructures inside rural schools.",
    detailsHi: "स्थानीय वॉलीबॉल लीग को प्रायोजित करना, खेल किट वितरित करना और ग्रामीण स्कूलों के भीतर खेल के बुनियादी ढांचे को बढ़ावा देना।"
  },
  {
    id: 6,
    titleEn: "Pioneer of Cooperative Welfare",
    titleHi: "सहकारी कल्याण के प्रणेता",
    descEn: "Important role in bringing cooperative movement to front",
    descHi: "सहकारी आंदोलन को अग्रभूमि में लाने में महत्वपूर्ण भूमिका",
    detailsEn: "Working alongside small scale farmers, enabling micro-loan models, and resolving fair pricing systems for local agricultural crops.",
    detailsHi: "लघु सीमांत किसानों के साथ मिलकर काम करना, सूक्ष्म ऋण मॉडल को सक्षम करना और स्थानीय कृषि फसलों के लिए उचित मूल्य प्रणालियों का निर्धारण करना।"
  }
];

export default function Home() {
  const { t } = useLanguage();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [journeyIndex, setJourneyIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);
  const [galleryTab, setGalleryTab] = useState("Timeline");
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [activeImpact, setActiveImpact] = useState<number | null>(null);
  const [stalwartIndex, setStalwartIndex] = useState(0);

  // Auto-play hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Auto-play stalwart quotes
  useEffect(() => {
    const timer = setInterval(() => {
      setStalwartIndex((prev) => (prev + 1) % stalwartQuotes.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleImpact = (id: number) => {
    setActiveImpact(activeImpact === id ? null : id);
  };

  return (
    <>
      <Preloader />
      <Navbar />

      {/* Left side floating theme controls */}
      <div className="fixed left-1 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center bg-slate-950/90 border border-slate-800/80 backdrop-blur rounded-full py-4 px-2 space-y-4 shadow-lg text-white select-none">
        <button
          className="w-5 h-5 rounded-full bg-white border border-slate-300 cursor-pointer"
          title="Light Theme"
          onClick={() => { document.documentElement.classList.remove('dark'); localStorage.setItem('theme', 'light'); }}
        />
        <button
          className="w-5 h-5 rounded-full bg-slate-800 border border-slate-600 cursor-pointer"
          title="Dark Theme"
          onClick={() => { document.documentElement.classList.add('dark'); localStorage.setItem('theme', 'dark'); }}
        />
        <div className="text-[10px] font-bold border-t border-slate-800 pt-2 cursor-help hover:text-sp-red" title="Text Size">Tт</div>
      </div>

      {/* Right side floating action controls */}
      <div className="fixed right-0 top-1/3 z-30 flex flex-col bg-sp-red text-white py-4 px-1.5 rounded-l-xl shadow-xl select-none font-bold items-center">
        <a href="#contact" className="block [writing-mode:vertical-rl] rotate-180 text-[10px] tracking-wider uppercase my-3.5 hover:text-slate-200 transition-colors cursor-pointer">
          {t("Listen", "सुनें")}
        </a> |
        <a href="#video-gallery" className="block [writing-mode:vertical-rl] rotate-180 text-[10px] tracking-wider uppercase my-3.5 hover:text-slate-200 transition-colors cursor-pointer">
          {t("Act", "कार्य")}
        </a> | 
        <a href="#contact" className="block [writing-mode:vertical-rl] rotate-180 text-[10px] tracking-wider uppercase my-3.5 hover:text-slate-200 transition-colors cursor-pointer">
          {t("Share", "साझा")}
        </a>
      </div>

      <main className="flex-grow pt-14">

        {/* 1. HERO SLIDESHOW SECTION */}
        <section id="home" className="relative min-h-[60vh] md:min-h-[92vh] flex items-end justify-start overflow-hidden bg-slate-950 text-white py-20">
          <ParticleBackground />
          <WavingRibbon />

          {/* Background Images */}
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
                }`}
              style={{ position: "absolute" }}
            >
              <Image
                src={slide.image}
                alt="Hero backdrop"
                fill
                priority={idx === 0}
                className="object-cover object-top"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-r from-flag-saffron/10 via-transparent to-flag-green/10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/20 to-transparent" /> */}
            </div>
          ))}

          <div className={`max-w-8xl mx-auto px-6 sm:px-12 md:px-20 relative z-10 w-full mb-8 sm:mb-12 flex flex-col ${heroSlides[currentSlide].textPosition === "right" ? "items-end text-right ml-auto" : "items-start text-left mr-auto"
            }`}>
            <div className="max-w-2xl space-y-4">
              <span className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sp-red text-white text-[10px] font-bold uppercase tracking-widest ${heroSlides[currentSlide].textPosition === "right" ? "self-end" : "self-start"
                }`}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t("SAMAJWADI PARTY LEADER", "समाजवादी पार्टी नेता")}</span>
              </span>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black tracking-wider leading-none text-flag-saffron transition-all duration-700 uppercase filter drop-shadow-md">
                {t(heroSlides[currentSlide].titleEn, heroSlides[currentSlide].titleHi)}
              </h1>

              <p className="text-slate-300 text-xs sm:text-sm font-medium font-sans tracking-widest">
                {t(heroSlides[currentSlide].subEn, heroSlides[currentSlide].subHi)}
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 flex space-x-2 z-20">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? "bg-sp-red w-8" : "bg-slate-700 hover:bg-slate-500"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>

        {/* 2. IDEOLOGY SPEECH SLIDER (ABOVE IMPACT SECTION) */}
        <section className="py-20 bg-white ">
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

              {/* Video Frame Left */}
              <div className="md:col-span-7 relative h-[250px] sm:h-[350px] rounded-3xl overflow-hidden shadow-lg" style={{ position: "relative" }}>
                <Image
                  src="/images/image-copy-2.png"
                  alt="Speech video thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-sp-red text-white flex items-center justify-center shadow-xl cursor-pointer hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              </div>

              {/* Stacked Heading Right */}
              <div className="md:col-span-5 space-y-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-sp-red leading-snug">
                  {t(
                    "“Home Minister Shri Amit Shah Speaking on the Ideology of the BJP”",
                    "“भाजपा की विचारधारा पर बोलते हुए गृह मंत्री श्री अमित शाह”"
                  )}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t(
                    "Addressing regional assembly structures, defining key governance initiatives, and mapping organizational developments on the ground.",
                    "क्षेत्रीय संगठनात्मक बैठकों को संबोधित करते हुए, प्रमुख शासन पहलों को परिभाषित करते हुए और जमीनी स्तर पर विकास कार्यों का रोडमैप तैयार करते हुए।"
                  )}
                </p>

                {/* Indicator dots */}
                <div className="flex space-x-2 pt-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-sp-red animate-pulse" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE IMPACT BLOCK (EXACT DUPLICATE OF FRAME 008.PNG) */}
        <section className="py-24 bg-gray-50 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-left mb-16 space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-sp-red">
                {t("Metrics of Governance", "विकास और नेतृत्व के आयाम")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sp-red dark:text-sp-red">
                {t("IMPACT", "प्रभाव व उपलब्धियां")}
              </h2>
              <div className="h-1 w-16 bg-sp-red  rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column: Big Core Metric Circle */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-[280px] sm:w-[330px] aspect-square rounded-full border border-sp-red/30 flex flex-col items-center justify-center p-8 text-center shadow-sm relative">
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-sp-red tracking-tight leading-none mb-3">
                    {t("15 Years in Public Life", "15 वर्ष जनसेवा")}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 max-w-[220px]">
                    {t(
                      "Journey from a grassroots volunteer to legislative assembly candidate",
                      "जमीनी कार्यकर्ता से विधानसभा चुनाव प्रत्याशी तक का सफर"
                    )}
                  </p>
                  <div className="absolute bottom-6 flex justify-center text-sp-red">
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                  </div>
                </div>
              </div>

              {/* Right Column: 3x2 Expandable Grid Cards */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {impactCards.map((card) => (
                    <div
                      key={card.id}
                      className={`border rounded-2xl p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[180px] h-auto ${
                        activeImpact === card.id
                          ? "bg-sp-red text-white border-sp-red shadow-lg animate-pulse-slow"
                          : "bg-white text-slate-800 border-slate-200 dark:border-slate-800 hover:border-sp-red"
                      }`}
                      onClick={() => toggleImpact(card.id)}
                    >
                      <div className="space-y-2">
                        <h4 className={`font-serif font-bold text-sm ${
                          activeImpact === card.id ? "text-white" : "text-sp-red"
                        }`}>
                          {t(card.titleEn, card.titleHi)}
                        </h4>
                        <p className={`text-[10px] leading-snug ${
                          activeImpact === card.id ? "text-slate-100" : "text-slate-500 dark:text-slate-400"
                        }`}>
                          {t(card.descEn, card.descHi)}
                        </p>
                      </div>

                      <div className={`flex justify-center pt-2 ${
                        activeImpact === card.id ? "text-white" : "text-slate-400 hover:text-sp-red"
                      }`}>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeImpact === card.id ? "rotate-180" : "rotate-0"
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Full Width Multi-Column Details Panel below both columns */}
            {activeImpact !== null && (
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 animate-fadeIn">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-serif font-black text-sp-red uppercase tracking-wide">
                    {t(impactCards[activeImpact - 1].titleEn, impactCards[activeImpact - 1].titleHi)}
                  </h3>
                  <button
                    onClick={() => setActiveImpact(null)}
                    className="p-1 rounded-full border border-slate-205 dark:border-slate-800 hover:bg-sp-red hover:text-white transition-colors cursor-pointer text-slate-400"
                    aria-label="Close details"
                  >
                    <span className="text-xs font-bold block px-1.5 py-0.5">✕</span>
                  </button>
                </div>
                <p className="columns-1 md:columns-3 gap-8 text-[11px] sm:text-xs leading-relaxed text-slate-600 dark:text-slate-400 text-justify">
                  {t(impactCards[activeImpact - 1].detailsEn, impactCards[activeImpact - 1].detailsHi)}
                </p>
              </div>
            )}

          </div>
        </section>

        {/* 4. JOURNEY (HORIZONTAL INTERACTIVE TIMELINE SECTION) */}
        <section className="py-20 bg-white ">
          <div className="max-w-6xl mx-auto px-6">

            {/* Control line */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-8">
              <div className="bg-sp-red text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-6 py-2 rounded-r-full rounded-l-md">
                {t("JOURNEY", "यात्रा")}
              </div>
              <div className="flex space-x-3 text-slate-400">
                <button
                  onClick={() => setJourneyIndex((prev) => (prev === 0 ? journeyEvents.length - 1 : prev - 1))}
                  className="p-1 border border-slate-200 dark:border-slate-800 rounded-full hover:text-sp-red cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setJourneyIndex((prev) => (prev === journeyEvents.length - 1 ? 0 : prev + 1))}
                  className="p-1 border border-slate-200 dark:border-slate-800 rounded-full hover:text-sp-red cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Nodes */}
            <div className="relative flex justify-between items-center max-w-4xl mx-auto mb-10 overflow-x-auto no-scrollbar py-3 px-1">
              <div className="absolute left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-800 top-1/2 z-0" />
              {journeyEvents.map((evt, idx) => (
                <button
                  key={evt.year}
                  onClick={() => setJourneyIndex(idx)}
                  className="relative z-10 flex flex-col items-center space-y-2 shrink-0 px-4 cursor-pointer"
                >
                  <span className={`text-[10px] sm:text-xs font-bold transition-all ${idx === journeyIndex ? "text-sp-red font-black scale-105" : "text-slate-400 dark:text-slate-600"
                    }`}>
                    {t(evt.year, evt.year === "Present" ? "वर्तमान" : evt.year)}
                  </span>
                  <div className={`w-3 h-3 rounded-full transition-all ${idx === journeyIndex ? "bg-sp-red ring-4 ring-sp-red/20 scale-110" : "bg-slate-300 dark:bg-slate-700"
                    }`} />
                </button>
              ))}
            </div>

            {/* Details Card */}
            <div className="max-w-4xl mx-auto border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-white">
              <div className="relative h-[200px] md:h-auto w-full" style={{ position: "relative" }}>
                <Image
                  src={journeyEvents[journeyIndex].image}
                  alt="Journey focus"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 bg-sp-red text-white font-bold text-xs px-5 py-1.5">
                  {t(journeyEvents[journeyIndex].year, journeyEvents[journeyIndex].year === "Present" ? "वर्तमान" : journeyEvents[journeyIndex].year)}
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-serif font-black text-sp-red uppercase">
                    {t(journeyEvents[journeyIndex].titleEn, journeyEvents[journeyIndex].titleHi)}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t(journeyEvents[journeyIndex].descEn, journeyEvents[journeyIndex].descHi)}
                  </p>
                  <a href="/timeline" className="text-xs font-bold text-sp-red hover:underline pt-2 block">
                    {t("Read More...", "और पढ़ें...")}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 5. STALWART SAYS SECTION */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-8">
              <div className="bg-sp-red text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-6 py-2 rounded-r-full rounded-l-md">
                {t("STALWART SAYS", "दिग्गजों के विचार")}
              </div>
              <div className="flex flex-col items-end">
                <a href="/about" className="text-[10px] font-bold text-sp-red uppercase tracking-wider hover:underline mb-2">{t("MORE", "अधिक")}</a>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setStalwartIndex((prev) => (prev === 0 ? stalwartQuotes.length - 1 : prev - 1))}
                    className="p-1 border border-sp-red dark:border-sp-red rounded-full hover:text-sp-red hover:border-sp-red cursor-pointer transition-colors"
                    aria-label="Previous stalwart quote"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-sp-red" />
                  </button>
                  <button
                    onClick={() => setStalwartIndex((prev) => (prev + 1) % stalwartQuotes.length)}
                    className="p-1 border border-sp-red dark:border-sp-red rounded-full hover:text-sp-red hover:border-sp-red cursor-pointer transition-colors"
                    aria-label="Next stalwart quote"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-sp-red" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                stalwartQuotes[stalwartIndex],
                stalwartQuotes[(stalwartIndex + 1) % stalwartQuotes.length],
                stalwartQuotes[(stalwartIndex + 2) % stalwartQuotes.length]
              ].map((sq, idx) => (
      <div
  key={idx}
  className="group dark:border-slate-800 rounded-l-full flex items-center space-x-4 bg-white hover:bg-sp-red/50 shadow-sm transition-all duration-300 animate-fadeIn"
>
  <div
    className="relative w-32 h-32 group-hover:w-24 group-hover:h-24 group-hover:ml-4 rounded-full overflow-hidden shrink-0 border-2 border-transparent group-hover:border-sp-red transition-all duration-300"
    style={{ position: "relative" }}
  >
    <Image
      src={sq.image}
      alt={sq.nameEn}
      fill
      className="object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
    />
  </div>

  <div className="space-y-1 flex-1 pr-4">
    <p className="text-sm text-black dark:text-black italic font-serif leading-snug line-clamp-3 group-hover:text-white transition-colors">
      "{t(sq.quoteEn, sq.quoteHi)}"
    </p>

    <h4 className="text-xs font-bold text-sp-red pt-1">
      {t(sq.nameEn, sq.nameHi)}
    </h4>

    <p className="text-[10px] text-slate-400">
      {t(sq.titleEn, sq.titleHi)}
    </p>
  </div>
</div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. VIDEO GALLERY & DONATE SECTION */}
        <section id="video-gallery" className="py-20 bg-white ">
          <div className="max-w-6xl mx-auto px-6">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

              {/* Left Video Player Box */}
              <div className="lg:col-span-8 space-y-4">
                <div className="bg-sp-red text-white text-xs font-bold tracking-widest uppercase px-6 py-2 rounded-r-full rounded-l-md w-max mb-6">
                  {t("VIDEO GALLERY", "वीडियो गैलरी")}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  {/* Large active player */}
                  <div className="md:col-span-9 relative h-[250px] sm:h-[320px] rounded-3xl overflow-hidden group shadow-md" style={{ position: "relative" }}>
                    <Image
                      src={playlistVideos[activeVideo].image}
                      alt="Active video"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-sp-red hover:scale-110 text-white flex items-center justify-center transition-all shadow-lg cursor-pointer">
                        <Play className="w-6 h-6 fill-current ml-1" />
                      </div>
                    </div>
                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 to-transparent p-6 text-white">
                      <span className="text-[9px] uppercase tracking-widest text-flag-saffron font-bold">
                        {t(playlistVideos[activeVideo].dateEn, playlistVideos[activeVideo].dateHi)}
                      </span>
                      <h4 className="text-sm font-serif font-black mt-1 line-clamp-2">
                        {t(playlistVideos[activeVideo].titleEn, playlistVideos[activeVideo].titleHi)}
                      </h4>
                    </div>
                  </div>

                  {/* Thumbnail playlist */}
                  <div className="md:col-span-3 flex flex-col items-center justify-between h-full">
                    <button
                      onClick={() => setActiveVideo(activeVideo === 0 ? playlistVideos.length - 1 : activeVideo - 1)}
                      className="p-1 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer text-slate-500 hover:text-sp-red transition-colors"
                      aria-label="Previous video"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </button>
                    
                    <div className="flex flex-col space-y-3 w-full my-2">
                      {playlistVideos.map((vid, idx) => (
                        <div
                          key={vid.id}
                          onClick={() => setActiveVideo(idx)}
                          className={`border rounded-xl p-2 cursor-pointer flex items-center space-x-2 transition-all ${idx === activeVideo
                            ? "border-sp-red bg-sp-red/5"
                            : "border-slate-200 dark:border-slate-800 hover:border-sp-red"
                            }`}
                        >
                          <div className="relative w-12 h-10 rounded overflow-hidden shrink-0" style={{ position: "relative" }}>
                            <Image
                              src={vid.image}
                              alt="thumb"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <p className="text-[9px] font-bold text-slate-700 dark:text-slate-300 line-clamp-2 leading-tight">
                            {t(vid.titleEn, vid.titleHi)}
                          </p>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setActiveVideo((activeVideo + 1) % playlistVideos.length)}
                      className="p-1 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer text-slate-500 hover:text-sp-red transition-colors"
                      aria-label="Next video"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Donate Box */}
              <div className="lg:col-span-4 flex items-center justify-center">
                <div className="w-full max-w-sm rounded-[2rem] bg-sp-red text-white p-8 text-center shadow-lg flex flex-col justify-center space-y-6 relative overflow-hidden">
                  <div className="absolute -top-12 -left-12 w-28 h-28 bg-white/5 rounded-full" />

                  <h3 className="text-lg font-serif font-black tracking-widest uppercase border-b border-white/20 pb-3">
                    {t("DONATE", "सहयोग करें")}
                  </h3>

                  <div className="space-y-3">
                    <a
                      href="/contact"
                      className="w-full py-3 rounded-full border border-white hover:bg-white hover:text-sp-red font-bold text-xs uppercase tracking-wider transition-all duration-300 block"
                    >
                      {t("SP FUND", "समाजवादी पार्टी कोष")}
                    </a>
                    <a
                      href="/contact"
                      className="w-full py-3 rounded-full border border-white hover:bg-white hover:text-sp-red font-bold text-xs uppercase tracking-wider transition-all duration-300 block"
                    >
                      {t("BARHAJ WELFARE FUND", "बरहज जनकल्याण कोष")}
                    </a>
                    <a
                      href="/contact"
                      className="w-full py-3 rounded-full border border-white hover:bg-white hover:text-sp-red font-bold text-xs uppercase tracking-wider transition-all duration-300 block"
                    >
                      {t("YOUTH SPORTS AID", "युवा खेलकूद सहायता")}
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 7. IMAGE GALLERY SECTION */}
        <section className="py-20 bg-gray-50 ">
          <div className="max-w-6xl mx-auto px-6">

            <div className="bg-sp-red text-white text-xs font-bold tracking-widest uppercase px-6 py-2 rounded-r-full rounded-l-md w-max mb-6">
              {t("IMAGE GALLERY", "चित्र गैलरी")}
            </div>

            <div className="flex space-x-6 border-b border-slate-200 dark:border-slate-800 pb-3 mb-8 text-xs font-bold">
              <button
                onClick={() => { setGalleryTab("Timeline"); setGalleryIndex(0); }}
                className={`pb-3 cursor-pointer transition-all ${galleryTab === "Timeline" ? "text-sp-red border-b-2 border-sp-red" : "text-slate-400"
                  }`}
              >
                {t("Timeline", "समयरेखा")}
              </button>
              <button
                onClick={() => { setGalleryTab("Lighter"); setGalleryIndex(0); }}
                className={`pb-3 cursor-pointer transition-all ${galleryTab === "Lighter" ? "text-sp-red border-b-2 border-sp-red" : "text-slate-400"
                  }`}
              >
                {t("The Lighter Side", "अन्य गतिविधियां")}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Large Active Image */}
              <div className="md:col-span-9 relative h-[250px] sm:h-[350px] rounded-3xl overflow-hidden group shadow-md" style={{ position: "relative" }}>
                <Image
                  src={galleryTab === "Timeline" ? journeyEvents[galleryIndex].image : heroSlides[galleryIndex].image}
                  alt="Active gallery"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 to-transparent p-6 text-white">
                  <h4 className="text-sm sm:text-base font-serif font-black uppercase">
                    {t(
                      galleryTab === "Timeline" ? journeyEvents[galleryIndex].titleEn : heroSlides[galleryIndex].titleEn,
                      galleryTab === "Timeline" ? journeyEvents[galleryIndex].titleHi : heroSlides[galleryIndex].titleHi
                    )}
                  </h4>
                </div>
              </div>

              {/* Side playlist selection */}
              <div className="md:col-span-3 flex flex-col items-center justify-between h-full">
                <button
                  onClick={() => setGalleryIndex(galleryIndex === 0 ? 2 : galleryIndex - 1)}
                  className="p-1 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer text-slate-500 hover:text-sp-red transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
                
                <div className="flex flex-col space-y-3 w-full my-2">
                  {(galleryTab === "Timeline" ? journeyEvents : heroSlides).slice(0, 3).map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setGalleryIndex(idx)}
                      className={`border rounded-xl p-2 cursor-pointer flex items-center space-x-2 transition-all ${idx === galleryIndex
                        ? "border-sp-red bg-sp-red/5"
                        : "border-slate-200 dark:border-slate-800 hover:border-sp-red"
                        }`}
                    >
                      <div className="relative w-12 h-10 rounded overflow-hidden shrink-0" style={{ position: "relative" }}>
                        <Image
                          src={item.image}
                          alt="thumb"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-[10px] font-bold text-slate-700 dark:text-slate-300 line-clamp-2">
                        {t(item.titleEn, item.titleHi)}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setGalleryIndex((galleryIndex + 1) % 3)}
                  className="p-1 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer text-slate-500 hover:text-sp-red transition-colors"
                  aria-label="Next image"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* 8. PRESS SECTION */}
        <section className="py-20 bg-white ">
          <div className="max-w-6xl mx-auto px-6">

            <div className="bg-sp-red text-white text-xs font-bold tracking-widest uppercase px-6 py-2 rounded-r-full rounded-l-md w-max mb-10">
              {t("PRESS", "प्रेस")}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

              {/* Main clippings grid */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {mainPressItems.map((item) => (
                  <div key={item.id} className="border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden bg-white flex flex-col justify-between">
                    <div className="relative w-full h-[180px]" style={{ position: "relative" }}>
                      <Image
                        src={item.image}
                        alt="Press clip"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 space-y-2 flex-grow flex flex-col justify-between">
                      <div className="space-y-1">
                        <h4 className="text-xs font-serif font-black text-slate-900 dark:text-white line-clamp-2">
                          {t(item.titleEn, item.titleHi)}
                        </h4>
                        <p className="text-[10px] text-slate-500 line-clamp-3">
                          {t(item.descEn, item.descHi)}
                        </p>
                      </div>
                      <div className="text-[9px] text-slate-400 pt-2 flex justify-between items-center">
                        <span>{t(item.dateEn, item.dateHi)}</span>
                        <a href="/press" className="text-sp-red font-bold hover:underline">{t("Read More", "और पढ़ें")}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Popular Press sidebar list */}
              <div className="lg:col-span-4 space-y-4">
                <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-850 pb-2">
                  {t("Popular Press", "लोकप्रिय खबरें")}
                </h4>

                <div className="space-y-4">
                  {popularPress.map((item, idx) => (
                    <div key={idx} className="border-b border-slate-100 dark:border-slate-900 pb-3 space-y-1">
                      <h5 className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 hover:text-sp-red transition-colors leading-snug cursor-pointer">
                        {t(item.titleEn, item.titleHi)}
                      </h5>
                      <span className="text-[9px] text-slate-400">{t(item.dateEn, item.dateHi)}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 9. EVENTS & WATCH LIVE SECTION */}
        <section className="py-20 bg-gray-50 ">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

              {/* Upcoming Events */}
              <div className="lg:col-span-6 space-y-6">
                <div className="bg-sp-red text-white text-xs font-bold tracking-widest uppercase px-6 py-2 rounded-r-full rounded-l-md w-max">
                  {t("EVENTS", "कार्यक्रम")}
                </div>

                <div className="space-y-4">
                  <div className="border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-center space-x-4 bg-white">
                    <div className="p-3 bg-sp-red/10 rounded-xl text-sp-red shrink-0">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {t("Samajwadi Chaupal meeting - Deoria village clusters", "समाजवादी चौपाल बैठक - देवरिया ग्राम क्लस्टर")}
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-1">July 18, 2026 • 11:00 AM</p>
                    </div>
                  </div>

                  <div className="border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-center space-x-4 bg-white">
                    <div className="p-3 bg-sp-red/10 rounded-xl text-sp-red shrink-0">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {t("Flood aid preparation and community distribution drive", "बाढ़ राहत सहायता और वितरण अभियान")}
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-1">July 22, 2026 • 10:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Watch Live Stream Banner */}
              <div className="lg:col-span-6 flex flex-col justify-end">
                <div className="bg-sp-red text-white text-xs font-bold tracking-widest uppercase px-6 py-2 rounded-r-full rounded-l-md w-max mb-6">
                  {t("WATCH LIVE", "लाइव देखें")}
                </div>

                <div className="relative h-[220px] rounded-3xl overflow-hidden shadow-md group" style={{ position: "relative" }}>
                  <Image
                    src="/images/image-copy-4.png"
                    alt="Watch Live"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-slate-950/50 flex flex-col justify-center items-center text-center p-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-flag-saffron">
                      {t("Live Streaming Program", "लाइव स्ट्रीमिंग कार्यक्रम")}
                    </span>
                    <h3 className="text-white font-serif font-black text-lg mt-2">
                      {t("Murli Manohar Jaiswal Live Address", "मुरली मनोहर जायसवाल का लाइव संबोधन")}
                    </h3>
                    <div className="mt-4 px-6 py-2 rounded-full bg-sp-red text-white hover:bg-sp-red-hover transition-colors font-bold text-xs uppercase cursor-pointer flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                      <span>{t("LIVE NOW", "लाइव अभी देखें")}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 10. FOLLOW (SOCIAL MEDIA CHANNELS + EMBEDDED FACEBOOK IFRAME) */}
        <section id="contact" className="py-20 bg-white ">
          <div className="max-w-6xl mx-auto px-6">

            <div className="bg-sp-red text-white text-xs font-bold tracking-widest uppercase px-6 py-2 rounded-r-full rounded-l-md w-max mb-10">
              {t("FOLLOW", "सोशल मीडिया पर जुड़े")}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Embedded Real Facebook Feed Page Plugin */}
              <div className=" bg-white flex flex-col items-center justify-center min-h-[500px]">
                <div className="w-full flex items-center justify-between border-b border-slate-150 dark:border-slate-850 pb-3 mb-4">
                  <span className="text-xs font-bold text-slate-800 dark:text-white">Facebook Feed</span>
                  <a
                    href="https://www.facebook.com/MurliManoharJaiswal1216"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-sp-red uppercase hover:underline"
                  >
                    {t("View Page", "पेज देखें")}
                  </a>
                </div>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMurliManoharJaiswal1216&tabs=timeline&width=340&height=450&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                  width="100%"
                  height="450"
                  style={{ border: "none", overflow: "hidden", borderRadius: "1rem" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>

              {/* Instagram Feed */}
            <div className="border border-slate-200 dark:border-slate-800 rounded-3xl p-6 bg-white flex flex-col min-h-[500px]">
  <div className="flex items-center justify-between border-b pb-3 mb-4">
    <div className="flex items-center gap-3">
      <Image
        src="/images/hero-2.png" // Your profile photo
        alt="Murli Manohar Jaiswal"
        width={50}
        height={50}
        className="rounded-full"
      />

      <div>
        <h3 className="font-semibold text-black text-sm">
          Murli Manohar Jaiswal
        </h3>
        <p className="text-xs text-slate-500">
          @murlimanoharjaiswal1216
        </p>
      </div>
    </div>

    <a
      href="https://www.instagram.com/murlimanoharjaiswal1216/?hl=en"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[10px] font-bold text-sp-red uppercase hover:underline"
    >
      Follow
    </a>
  </div>
</div>




<blockquote className="twitter-tweet">
  <a href="https://x.com/MMJAISWAL1216/status/1617581813857419264"></a>
</blockquote>


            </div>

          </div>
        </section>

      </main>

      <Footer />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-30 p-3 rounded-full bg-sp-red text-white hover:bg-sp-red-hover shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
