import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles, Info, HelpCircle, FileText, CreditCard, Shield, Mic, MicOff, Volume2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [position, setPosition] = useState({ bottom: 24, left: 24 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [micPermission, setMicPermission] = useState('prompt'); // 'prompt', 'granted', 'denied'
  const [showPermissionHelp, setShowPermissionHelp] = useState(false);
  const { language } = useLanguage();
  const buttonRef = useRef(null);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const recognitionRef = useRef(null);
  const inputRef = useRef(null);

  // FAQ data
  const faqData = {
    me: {
      greeting: {
        text: "Zdravo! 👋 Ja sam FinSim asistent. Pomažem vam da razumijete osnovni račun i sve finansijske usluge. Kako mogu da vam pomognem danas?",
        quickReplies: [
          { icon: Info, text: "Šta je osnovni račun?", key: "basic_account" },
          { icon: FileText, text: "Koraci za otvaranje?", key: "steps" },
          { icon: Shield, text: "Koja su moja prava?", key: "rights" },
          { icon: CreditCard, text: "Koliko košta?", key: "costs" }
        ]
      },
      responses: {
        basic_account: {
          text: "Osnovni račun je specijalan bankovni račun koji je pristupačan svima, bez obzira na kredit ili finansijsku istoriju. 💳\n\nKljučne karakteristike:\n• Nema početnih troškova\n• Jednostavan proces otvaranja\n• Pristup osnovnim bankarskim uslugama\n• Zaštićen od diskriminacije\n\nOvaj račun je osmišljen posebno za osobe sa niskim primanjima, penzionere, studente i sve koji prvi put otvaraju račun.",
          quickReplies: [
            { icon: FileText, text: "Kako ga otvorim?", key: "steps" },
            { icon: CreditCard, text: "Koji su troškovi?", key: "costs" },
            { icon: HelpCircle, text: "Drugo pitanje", key: "menu" }
          ]
        },
        steps: {
          text: "Proces otvaranja osnovnog računa je jednostavan i sastoji se od 4 koraka: 📋\n\n1️⃣ Pripremite dokumenta\n   • Lična karta ili pasoš\n   • Potvrda o prebivalištu\n\n2️⃣ Posjetite banku\n   • Odaberite bilo koju banku\n   • Zakažite termin ili dođite direktno\n\n3️⃣ Popunite zahtjev\n   • Bankar će vam pomoći\n   • Sve će vam objasniti\n\n4️⃣ Aktivirajte račun\n   • Obično odmah\n   • Dobićete karticu i pristup\n\nCijeli proces traje 15-30 minuta! ⏱️",
          quickReplies: [
            { icon: Info, text: "Koja dokumenta?", key: "documents" },
            { icon: CreditCard, text: "Koliko košta?", key: "costs" },
            { icon: HelpCircle, text: "Nazad na meni", key: "menu" }
          ]
        },
        rights: {
          text: "Kao vlasnik osnovnog računa, imate brojna zagarantovana prava! ⚖️\n\n✅ Pravo na nediskriminaciju\n   • Banka ne smije odbiti zahtjev\n   • Bez obzira na kredit ili istoriju\n\n✅ Pravo na transparentnost\n   • Jasne informacije o troškovima\n   • Sve navedeno u ugovoru\n\n✅ Pravo na pristup\n   • Osnovne bankovne usluge\n   • Platna kartica\n   • Online banking\n\n✅ Pravo na podršku\n   • Objašnjenje svih usluga\n   • Pomoć u korištenju\n\n✅ Pravo na pritužbu\n   • Ako nešto nije u redu\n   • Zaštita potrošača",
          quickReplies: [
            { icon: FileText, text: "Kako podnosim pritužbu?", key: "complaint" },
            { icon: Info, text: "Šta je osnovni račun?", key: "basic_account" },
            { icon: HelpCircle, text: "Nazad na meni", key: "menu" }
          ]
        },
        costs: {
          text: "Troškovi osnovnog računa su minimalni i transparentni! 💰\n\n✅ BESPLATNO:\n   • Otvaranje računa (0€)\n   • Vođenje računa (0€)\n   • Platna kartica (0€)\n   • Online/mobile banking (0€)\n   • Jedan podizanje mjesečno (0€)\n\n💵 MOGUĆI TROŠKOVI:\n   • Dodatna podizanja: ~0.50€\n   • SMS notifikacije: ~0.10€/poruka\n   • Hitan transfer: ~2-5€\n\n📊 Koristite naš Simulator troškova da vidite tačan izračun za vaše potrebe!\n\nProsjek mjesečno: 0-3€ za standardnu upotrebu.",
          quickReplies: [
            { icon: CreditCard, text: "Kako koristiti simulator?", key: "simulator" },
            { icon: Info, text: "Šta je osnovni račun?", key: "basic_account" },
            { icon: HelpCircle, text: "Nazad na meni", key: "menu" }
          ]
        },
        documents: {
          text: "Za otvaranje osnovnog računa potrebna su vam samo osnovna dokumenta: 📄\n\n🆔 OBAVEZNO:\n   • Lična karta (važeća)\n     ILI\n   • Pasoš (važeći)\n\n🏠 DODATNO (ponekad):\n   • Potvrda o prebivalištu\n   • Izvod iz matične knjige\n\n👶 Za maloljetnike:\n   • Dokument djeteta\n   • Dokument roditelja/staratelja\n   • Saglasnost roditelja\n\n💡 Savjet: Pozovite banku prije posjete da provjerite tačan spisak dokumenata!",
          quickReplies: [
            { icon: FileText, text: "Koraci za otvaranje", key: "steps" },
            { icon: HelpCircle, text: "Nazad na meni", key: "menu" }
          ]
        },
        complaint: {
          text: "Ako imate problem ili pritužbu, imate pravo da je podnesete! 📢\n\n1️⃣ Prvo u banci:\n   • Razgovarajte sa bankarom\n   • Tražite pisanu pritužbu\n   • Banka mora odgovoriti za 15 dana\n\n2️⃣ Centralna banka (CBCG):\n   • Ako banka ne riješi problem\n   • Online forma na cbcg.me\n   • Email: info@cbcg.me\n   • Telefon: 020/664-444\n\n3️⃣ Zaštita potrošača:\n   • Ministarstvo ekonomije\n   • Ombudsman\n\n💡 Čuvajte svu dokumentaciju i prepisku!",
          quickReplies: [
            { icon: Shield, text: "Moja prava", key: "rights" },
            { icon: HelpCircle, text: "Nazad na meni", key: "menu" }
          ]
        },
        simulator: {
          text: "Simulator troškova vam pomaže da izračunate mjesečne troškove! 🧮\n\n📱 Kako koristiti:\n1. Idite na stranicu 'Simulator'\n2. Odaberite koliko često:\n   • Podižete novac\n   • Plaćate karticom\n   • Koristite online banking\n3. Vidite instant kalkulaciju\n\n💡 Simulator koristi stvarne podatke crnogorskih banaka!\n\n⚠️ Napomena: Trebate prvo odabrati profil (student/penzioner/zaposleni) da biste pristupili simulatoru.",
          quickReplies: [
            { icon: CreditCard, text: "Troškovi računa", key: "costs" },
            { icon: HelpCircle, text: "Nazad na meni", key: "menu" }
          ]
        },
        menu: {
          text: "O čemu želite da saznate više? 🤔",
          quickReplies: [
            { icon: Info, text: "Osnovni račun", key: "basic_account" },
            { icon: FileText, text: "Koraci", key: "steps" },
            { icon: Shield, text: "Prava", key: "rights" },
            { icon: CreditCard, text: "Troškovi", key: "costs" }
          ]
        }
      }
    },
    en: {
      greeting: {
        text: "Hello! 👋 I'm FinSim assistant. I help you understand basic bank accounts and all financial services. How can I help you today?",
        quickReplies: [
          { icon: Info, text: "What is basic account?", key: "basic_account" },
          { icon: FileText, text: "How to open?", key: "steps" },
          { icon: Shield, text: "What are my rights?", key: "rights" },
          { icon: CreditCard, text: "How much does it cost?", key: "costs" }
        ]
      },
      responses: {
        basic_account: {
          text: "A basic account is a special bank account accessible to everyone, regardless of credit or financial history. 💳\n\nKey features:\n• No initial costs\n• Simple opening process\n• Access to basic banking services\n• Protected from discrimination\n\nThis account is designed especially for low-income individuals, retirees, students, and anyone opening an account for the first time.",
          quickReplies: [
            { icon: FileText, text: "How to open?", key: "steps" },
            { icon: CreditCard, text: "What are the costs?", key: "costs" },
            { icon: HelpCircle, text: "Other question", key: "menu" }
          ]
        },
        steps: {
          text: "Opening a basic account is simple and consists of 4 steps: 📋\n\n1️⃣ Prepare documents\n   • ID card or passport\n   • Proof of residence\n\n2️⃣ Visit the bank\n   • Choose any bank\n   • Schedule appointment or walk in\n\n3️⃣ Fill out application\n   • Banker will help you\n   • Everything will be explained\n\n4️⃣ Activate account\n   • Usually immediately\n   • You'll get card and access\n\nThe whole process takes 15-30 minutes! ⏱️",
          quickReplies: [
            { icon: Info, text: "Which documents?", key: "documents" },
            { icon: CreditCard, text: "How much?", key: "costs" },
            { icon: HelpCircle, text: "Back to menu", key: "menu" }
          ]
        },
        rights: {
          text: "As a basic account holder, you have many guaranteed rights! ⚖️\n\n✅ Right to non-discrimination\n   • Bank cannot refuse application\n   • Regardless of credit or history\n\n✅ Right to transparency\n   • Clear information about costs\n   • Everything stated in contract\n\n✅ Right to access\n   • Basic banking services\n   • Payment card\n   • Online banking\n\n✅ Right to support\n   • Explanation of all services\n   • Help with usage\n\n✅ Right to complain\n   • If something is wrong\n   • Consumer protection",
          quickReplies: [
            { icon: FileText, text: "How to complain?", key: "complaint" },
            { icon: Info, text: "What is basic account?", key: "basic_account" },
            { icon: HelpCircle, text: "Back to menu", key: "menu" }
          ]
        },
        costs: {
          text: "Basic account costs are minimal and transparent! 💰\n\n✅ FREE:\n   • Account opening (0€)\n   • Account maintenance (0€)\n   • Payment card (0€)\n   • Online/mobile banking (0€)\n   • One withdrawal monthly (0€)\n\n💵 POSSIBLE COSTS:\n   • Additional withdrawals: ~€0.50\n   • SMS notifications: ~€0.10/message\n   • Urgent transfer: ~€2-5\n\n📊 Use our Cost Simulator to see exact calculation for your needs!\n\nAverage monthly: €0-3 for standard use.",
          quickReplies: [
            { icon: CreditCard, text: "How to use simulator?", key: "simulator" },
            { icon: Info, text: "What is basic account?", key: "basic_account" },
            { icon: HelpCircle, text: "Back to menu", key: "menu" }
          ]
        },
        documents: {
          text: "To open a basic account, you only need basic documents: 📄\n\n🆔 REQUIRED:\n   • ID card (valid)\n     OR\n   • Passport (valid)\n\n🏠 ADDITIONAL (sometimes):\n   • Proof of residence\n   • Birth certificate extract\n\n👶 For minors:\n   • Child's document\n   • Parent/guardian document\n   • Parental consent\n\n💡 Tip: Call the bank before visiting to verify the exact list of documents!",
          quickReplies: [
            { icon: FileText, text: "Opening steps", key: "steps" },
            { icon: HelpCircle, text: "Back to menu", key: "menu" }
          ]
        },
        complaint: {
          text: "If you have a problem or complaint, you have the right to file it! 📢\n\n1️⃣ First at the bank:\n   • Talk to the banker\n   • Request written complaint\n   • Bank must respond in 15 days\n\n2️⃣ Central Bank (CBCG):\n   • If bank doesn't solve problem\n   • Online form at cbcg.me\n   • Email: info@cbcg.me\n   • Phone: 020/664-444\n\n3️⃣ Consumer protection:\n   • Ministry of Economy\n   • Ombudsman\n\n💡 Keep all documentation and correspondence!",
          quickReplies: [
            { icon: Shield, text: "My rights", key: "rights" },
            { icon: HelpCircle, text: "Back to menu", key: "menu" }
          ]
        },
        simulator: {
          text: "The Cost Simulator helps you calculate monthly costs! 🧮\n\n📱 How to use:\n1. Go to 'Simulator' page\n2. Select how often you:\n   • Withdraw money\n   • Pay with card\n   • Use online banking\n3. See instant calculation\n\n💡 Simulator uses real data from Montenegrin banks!\n\n⚠️ Note: You need to select a profile (student/retiree/employed) first to access the simulator.",
          quickReplies: [
            { icon: CreditCard, text: "Account costs", key: "costs" },
            { icon: HelpCircle, text: "Back to menu", key: "menu" }
          ]
        },
        menu: {
          text: "What would you like to know more about? 🤔",
          quickReplies: [
            { icon: Info, text: "Basic account", key: "basic_account" },
            { icon: FileText, text: "Steps", key: "steps" },
            { icon: Shield, text: "Rights", key: "rights" },
            { icon: CreditCard, text: "Costs", key: "costs" }
          ]
        }
      }
    }
  };

  // Initialize chat with greeting and speech recognition
  useEffect(() => {
    const savedPosition = localStorage.getItem('chatbot-position');
    if (savedPosition) {
      try {
        setPosition(JSON.parse(savedPosition));
      } catch (e) {
        console.error('Error loading saved position:', e);
      }
    }

    // Check for speech recognition support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      setSpeechSupported(true);
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      
      // Set language based on app language
      recognitionRef.current.lang = language === 'me' ? 'sr-RS' : 'en-US';
      
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
        // Optionally auto-send after voice input
        // handleSendMessage() can be called here
      };
      
      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        
        if (event.error === 'not-allowed') {
          setMicPermission('denied');
          setShowPermissionHelp(true);
          
          // Show user-friendly alert
          const message = language === 'me'
            ? '🎤 Pristup mikrofonu je blokiran.\n\n1. Kliknite na ikonu lokota (🔒) u adresnoj traci\n2. Dozvolite pristup mikrofonu\n3. Osvježite stranicu i pokušajte ponovo'
            : '🎤 Microphone access is blocked.\n\n1. Click the lock icon (🔒) in the address bar\n2. Allow microphone access\n3. Refresh the page and try again';
          
          setTimeout(() => alert(message), 100);
        } else if (event.error === 'no-speech') {
          const message = language === 'me'
            ? 'Nisam čuo ništa. Pokušajte ponovo.'
            : 'No speech detected. Please try again.';
          console.log(message);
        }
      };
      
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Update speech recognition language when app language changes
  useEffect(() => {
    if (recognitionRef.current) {
      recognitionRef.current.lang = language === 'me' ? 'sr-RS' : 'en-US';
    }
  }, [language]);

  // Send greeting when chat opens for first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = faqData[language].greeting;
      
      // Add voice feature explanation if supported
      const voiceInfo = speechSupported 
        ? (language === 'me'
          ? '\n\n💡 Savjet: Možete koristiti 🎤 mikrofon da postavite pitanje glasom, ili kliknite 🔊 da čujete odgovor!'
          : '\n\n💡 Tip: You can use the 🎤 microphone to ask questions by voice, or click 🔊 to hear answers!')
        : '';
      
      setMessages([{
        type: 'bot',
        text: greeting.text + voiceInfo,
        quickReplies: greeting.quickReplies,
        timestamp: new Date()
      }]);
    }
  }, [isOpen, language, speechSupported]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Drag handlers (same as TextToSpeech)
  const handleMouseDown = (e) => {
    if (e.target.closest('.chatbot-panel')) return;
    
    setIsDragging(true);
    const rect = buttonRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    e.preventDefault();
  };

  const handleTouchStart = (e) => {
    if (e.target.closest('.chatbot-panel')) return;
    
    setIsDragging(true);
    const rect = buttonRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    setDragOffset({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    });
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const buttonSize = 56;

    let newX = e.clientX - dragOffset.x;
    let newY = e.clientY - dragOffset.y;

    newX = Math.max(0, Math.min(newX, viewportWidth - buttonSize));
    newY = Math.max(0, Math.min(newY, viewportHeight - buttonSize));

    const newBottom = viewportHeight - newY - buttonSize;
    const newLeft = newX;

    setPosition({ bottom: newBottom, left: newLeft });
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const buttonSize = 56;

    let newX = touch.clientX - dragOffset.x;
    let newY = touch.clientY - dragOffset.y;

    newX = Math.max(0, Math.min(newX, viewportWidth - buttonSize));
    newY = Math.max(0, Math.min(newY, viewportHeight - buttonSize));

    const newBottom = viewportHeight - newY - buttonSize;
    const newLeft = newX;

    setPosition({ bottom: newBottom, left: newLeft });
    e.preventDefault();
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      localStorage.setItem('chatbot-position', JSON.stringify(position));
    }
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      localStorage.setItem('chatbot-position', JSON.stringify(position));
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging, dragOffset, position]);

  const handleButtonClick = () => {
    if (!isDragging) {
      setIsOpen(!isOpen);
    }
  };

  const handleQuickReply = (key) => {
    // Add user message
    const userMessage = {
      type: 'user',
      text: faqData[language].responses[key]?.text || faqData[language].greeting.quickReplies.find(q => q.key === key)?.text || key,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate bot typing delay
    setTimeout(() => {
      setIsTyping(false);
      
      const response = faqData[language].responses[key] || faqData[language].greeting;
      
      const botMessage = {
        type: 'bot',
        text: response.text,
        quickReplies: response.quickReplies,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simple keyword matching for free-form input
    setTimeout(() => {
      setIsTyping(false);
      
      const lowerInput = inputValue.toLowerCase();
      let responseKey = 'menu';
      
      // Simple keyword matching
      if (lowerInput.includes('račun') || lowerInput.includes('account')) {
        responseKey = 'basic_account';
      } else if (lowerInput.includes('korak') || lowerInput.includes('otvor') || lowerInput.includes('step') || lowerInput.includes('open')) {
        responseKey = 'steps';
      } else if (lowerInput.includes('prav') || lowerInput.includes('right')) {
        responseKey = 'rights';
      } else if (lowerInput.includes('trošak') || lowerInput.includes('troš') || lowerInput.includes('cost') || lowerInput.includes('price')) {
        responseKey = 'costs';
      } else if (lowerInput.includes('dokument') || lowerInput.includes('document')) {
        responseKey = 'documents';
      } else if (lowerInput.includes('pritužb') || lowerInput.includes('complaint')) {
        responseKey = 'complaint';
      } else if (lowerInput.includes('simulator')) {
        responseKey = 'simulator';
      }
      
      const response = faqData[language].responses[responseKey] || {
        text: language === 'me' 
          ? "Izvinjavam se, nisam siguran kako da odgovorim na to. Evo nekoliko tema o kojima mogu pričati:" 
          : "I'm sorry, I'm not sure how to answer that. Here are some topics I can discuss:",
        quickReplies: faqData[language].greeting.quickReplies
      };
      
      const botMessage = {
        type: 'bot',
        text: response.text,
        quickReplies: response.quickReplies,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleVoiceInput = async () => {
    if (!speechSupported) {
      alert(language === 'me' 
        ? 'Vaš pretraživač ne podržava glasovno prepoznavanje.' 
        : 'Your browser does not support voice recognition.');
      return;
    }

    // Check if page is secure (HTTPS or localhost)
    if (window.location.protocol !== 'https:' && !window.location.hostname.includes('localhost')) {
      alert(language === 'me'
        ? '🔒 Glasovno prepoznavanje radi samo na HTTPS stranicama ili localhost-u.\n\nMolimo koristite sigurnu konekciju.'
        : '🔒 Voice recognition only works on HTTPS pages or localhost.\n\nPlease use a secure connection.');
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    // Request microphone permission first
    try {
      // Check if we can request permission (not all browsers support this API)
      if (navigator.permissions && navigator.permissions.query) {
        try {
          const permission = await navigator.permissions.query({ name: 'microphone' });
          
          if (permission.state === 'denied') {
            setMicPermission('denied');
            alert(language === 'me'
              ? '🎤 Pristup mikrofonu je blokiran.\n\n1. Kliknite na ikonu lokota (🔒) u adresnoj traci\n2. Dozvolite pristup mikrofonu\n3. Osvježite stranicu'
              : '🎤 Microphone access is blocked.\n\n1. Click the lock icon (🔒) in the address bar\n2. Allow microphone access\n3. Refresh the page');
            return;
          }
        } catch (permError) {
          // Some browsers don't support microphone in permissions API
          console.log('Permission check not supported, trying anyway:', permError);
        }
      }

      // Try to start recognition
      recognitionRef.current?.start();
      setIsListening(true);
      setMicPermission('granted');
      
    } catch (error) {
      console.error('Error starting recognition:', error);
      setIsListening(false);
      
      // Handle specific error cases
      if (error.message?.includes('already started')) {
        recognitionRef.current?.stop();
        setTimeout(() => {
          try {
            recognitionRef.current?.start();
            setIsListening(true);
          } catch (e) {
            console.error('Retry failed:', e);
          }
        }, 100);
      } else {
        alert(language === 'me'
          ? 'Greška prilikom pokretanja mikrofona. Provjerite dozvole.'
          : 'Error starting microphone. Please check permissions.');
      }
    }
  };

  const speakMessage = (text) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'me' ? 'sr-RS' : 'en-US';
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        aria-label={language === 'me' ? 'Chat asistent' : 'Chat Assistant'}
        title={language === 'me' ? 'Držite i vucite za pomjeranje' : 'Hold and drag to move'}
        style={{
          position: 'fixed',
          bottom: isOpen ? `${position.bottom + 156}px` : `${position.bottom}px`,
          left: `${position.left}px`,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: isDragging 
            ? 'linear-gradient(135deg, #059669 0%, #0891b2 100%)'
            : 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
          border: 'none',
          boxShadow: isDragging
            ? '0 16px 40px rgba(16, 185, 129, 0.6), 0 8px 20px rgba(6, 182, 212, 0.5)'
            : '0 8px 24px rgba(16, 185, 129, 0.4), 0 4px 12px rgba(6, 182, 212, 0.3)',
          cursor: isDragging ? 'grabbing' : 'grab',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999,
          transition: isDragging ? 'none' : 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          color: 'white',
          userSelect: 'none',
          touchAction: 'none'
        }}
        onMouseEnter={(e) => {
          if (!isDragging) {
            e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(16, 185, 129, 0.5), 0 6px 16px rgba(6, 182, 212, 0.4)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isDragging) {
            e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.4), 0 4px 12px rgba(6, 182, 212, 0.3)';
          }
        }}
      >
        <div style={{
          position: 'relative',
          width: '24px',
          height: '24px'
        }}>
          {isOpen ? (
            <X style={{ width: '24px', height: '24px', strokeWidth: 2.5 }} />
          ) : (
            <MessageCircle style={{ width: '24px', height: '24px', strokeWidth: 2.5 }} />
          )}
          
          {/* New message indicator */}
          {!isOpen && (
            <div style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#ef4444',
              border: '2px solid white',
              animation: 'pulse 2s ease-in-out infinite'
            }} />
          )}
          
          {/* Drag indicator */}
          {!isDragging && !isOpen && (
            <div style={{
              position: 'absolute',
              bottom: '-18px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '3px',
              opacity: 0.6
            }}>
              <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'white' }} />
              <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'white' }} />
              <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'white' }} />
            </div>
          )}
        </div>
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div
          className="chatbot-panel"
          style={{
            position: 'fixed',
            bottom: `${position.bottom}px`,
            left: `${position.left}px`,
            width: '380px',
            maxWidth: 'calc(100vw - 32px)',
            height: '600px',
            maxHeight: 'calc(100vh - 100px)',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8) inset',
            zIndex: 998,
            border: '2px solid rgba(16, 185, 129, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <div style={{
            padding: '20px 24px',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1))',
            borderBottom: '2px solid rgba(16, 185, 129, 0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10b981, #06b6d4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
            }}>
              <Sparkles style={{ width: '20px', height: '20px', color: 'white' }} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                color: 'var(--color-gray-900)',
                margin: 0,
                marginBottom: '2px'
              }}>
                FinSim {language === 'me' ? 'Asistent' : 'Assistant'}
              </h3>
              <p style={{
                fontSize: '0.8125rem',
                color: 'var(--color-accent-600)',
                margin: 0,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span>{language === 'me' ? 'Online • Uvijek dostupan' : 'Online • Always available'}</span>
                {speechSupported && (
                  <span style={{
                    fontSize: '0.75rem',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    background: micPermission === 'denied' 
                      ? 'rgba(239, 68, 68, 0.1)' 
                      : 'rgba(16, 185, 129, 0.1)',
                    color: micPermission === 'denied'
                      ? 'var(--color-error-700)'
                      : 'var(--color-accent-700)',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px'
                  }}>
                    {micPermission === 'denied' ? '🔒' : '🎤'} 
                    {micPermission === 'denied'
                      ? (language === 'me' ? 'Blokiran' : 'Blocked')
                      : (language === 'me' ? 'Glasovno' : 'Voice')
                    }
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Messages Container */}
          <div
            ref={chatContainerRef}
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {messages.map((message, index) => (
              <div key={index}>
                {/* Message Bubble */}
                <div style={{
                  display: 'flex',
                  justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start',
                  alignItems: 'flex-end',
                  gap: '8px',
                  marginBottom: '8px'
                }}>
                  <div style={{
                    maxWidth: '80%',
                    padding: '12px 16px',
                    borderRadius: message.type === 'user' 
                      ? '18px 18px 4px 18px'
                      : '18px 18px 18px 4px',
                    background: message.type === 'user'
                      ? 'linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600))'
                      : 'var(--color-gray-100)',
                    color: message.type === 'user' ? 'white' : 'var(--color-gray-900)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-wrap',
                    boxShadow: message.type === 'user'
                      ? '0 4px 12px rgba(37, 99, 235, 0.25)'
                      : '0 2px 8px rgba(0, 0, 0, 0.05)'
                  }}>
                    {message.text}
                  </div>
                  
                  {/* Speak button for bot messages */}
                  {message.type === 'bot' && (
                    <button
                      onClick={() => speakMessage(message.text)}
                      aria-label={language === 'me' ? 'Pročitaj poruku' : 'Read message'}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        border: 'none',
                        background: 'var(--color-accent-100)',
                        color: 'var(--color-accent-600)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s',
                        flexShrink: 0
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--color-accent-200)';
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--color-accent-100)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <Volume2 size={16} />
                    </button>
                  )}
                </div>

                {/* Quick Replies */}
                {message.quickReplies && message.type === 'bot' && index === messages.length - 1 && (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginTop: '12px'
                  }}>
                    {message.quickReplies.map((reply, idx) => {
                      const Icon = reply.icon;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleQuickReply(reply.key)}
                          style={{
                            padding: '12px 16px',
                            borderRadius: '12px',
                            border: '2px solid var(--color-accent-200)',
                            background: 'white',
                            color: 'var(--color-accent-700)',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            textAlign: 'left'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--color-accent-50)';
                            e.currentTarget.style.borderColor = 'var(--color-accent-300)';
                            e.currentTarget.style.transform = 'translateX(4px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'white';
                            e.currentTarget.style.borderColor = 'var(--color-accent-200)';
                            e.currentTarget.style.transform = 'translateX(0)';
                          }}
                        >
                          <Icon size={16} />
                          {reply.text}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{
                display: 'flex',
                justifyContent: 'flex-start'
              }}>
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '18px 18px 18px 4px',
                  background: 'var(--color-gray-100)',
                  display: 'flex',
                  gap: '4px',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--color-gray-400)',
                    animation: 'bounce 1.4s ease-in-out infinite'
                  }} />
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--color-gray-400)',
                    animation: 'bounce 1.4s ease-in-out 0.2s infinite'
                  }} />
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--color-gray-400)',
                    animation: 'bounce 1.4s ease-in-out 0.4s infinite'
                  }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div style={{
            padding: '16px 20px',
            borderTop: '2px solid var(--color-gray-100)',
            background: 'rgba(249, 250, 251, 0.8)'
          }}>
            {/* Voice Recognition Status */}
            {isListening && (
              <div style={{
                padding: '8px 12px',
                marginBottom: '12px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(249, 115, 22, 0.1))',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.875rem',
                color: 'var(--color-error-700)',
                fontWeight: 600
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#ef4444',
                  animation: 'pulse 1.5s ease-in-out infinite'
                }} />
                {language === 'me' ? '🎤 Slušam...' : '🎤 Listening...'}
              </div>
            )}
            
            {/* Permission Help Banner */}
            {showPermissionHelp && micPermission === 'denied' && (
              <div style={{
                padding: '12px',
                marginBottom: '12px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05), rgba(249, 115, 22, 0.05))',
                border: '1px solid rgba(239, 68, 68, 0.15)',
                fontSize: '0.8125rem',
                color: 'var(--color-error-700)',
                lineHeight: 1.5
              }}>
                <div style={{ fontWeight: 700, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  🔒 {language === 'me' ? 'Mikrofon blokiran' : 'Microphone Blocked'}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-error-600)' }}>
                  {language === 'me' 
                    ? 'Kliknite ikonu lokota (🔒) pored adrese i dozvolite mikrofon.'
                    : 'Click the lock icon (🔒) next to the address and allow microphone.'}
                </div>
                <button
                  onClick={() => setShowPermissionHelp(false)}
                  style={{
                    marginTop: '8px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: 'none',
                    background: 'var(--color-error-100)',
                    color: 'var(--color-error-700)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {language === 'me' ? 'Razumijem' : 'Got it'}
                </button>
              </div>
            )}
            
            <div style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'flex-end'
            }}>
              {/* Voice Input Button */}
              <button
                onClick={toggleVoiceInput}
                aria-label={language === 'me' ? 'Glasovni unos' : 'Voice input'}
                title={
                  !speechSupported 
                    ? (language === 'me' ? 'Pretraživač ne podržava' : 'Browser not supported')
                    : micPermission === 'denied'
                      ? (language === 'me' ? 'Mikrofon blokiran - kliknite za pomoć' : 'Microphone blocked - click for help')
                      : (language === 'me' ? 'Klikni i govori' : 'Click and speak')
                }
                disabled={!speechSupported}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  border: 'none',
                  background: isListening
                    ? 'linear-gradient(135deg, #ef4444, #f97316)'
                    : speechSupported
                      ? 'linear-gradient(135deg, var(--color-accent-500), var(--color-accent-600))'
                      : 'var(--color-gray-200)',
                  color: 'white',
                  cursor: speechSupported ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  boxShadow: isListening 
                    ? '0 4px 16px rgba(239, 68, 68, 0.4)' 
                    : speechSupported 
                      ? '0 4px 12px rgba(16, 185, 129, 0.3)' 
                      : 'none',
                  animation: isListening ? 'pulse 1.5s ease-in-out infinite' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (speechSupported && !isListening) {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (speechSupported) {
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
              >
                {isListening ? <MicOff size={18} /> : <Mic size={18} />}
              </button>
              
              {/* Text Input */}
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={language === 'me' ? 'Postavite pitanje ili kliknite 🎤...' : 'Ask a question or click 🎤...'}
                disabled={isListening}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '2px solid var(--color-gray-200)',
                  fontSize: '0.9375rem',
                  outline: 'none',
                  transition: 'all 0.2s',
                  background: isListening ? 'var(--color-gray-50)' : 'white',
                  opacity: isListening ? 0.6 : 1
                }}
                onFocus={(e) => {
                  if (!isListening) {
                    e.currentTarget.style.borderColor = 'var(--color-accent-400)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
                  }
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              
              {/* Send Button */}
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                aria-label={language === 'me' ? 'Pošalji' : 'Send'}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  border: 'none',
                  background: inputValue.trim()
                    ? 'linear-gradient(135deg, var(--color-accent-500), var(--color-accent-600))'
                    : 'var(--color-gray-200)',
                  color: 'white',
                  cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  boxShadow: inputValue.trim() ? '0 4px 12px rgba(16, 185, 129, 0.3)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (inputValue.trim()) {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes bounce {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </>
  );
}
