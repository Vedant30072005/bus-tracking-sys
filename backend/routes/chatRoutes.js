// ============================================================
// AI Chatbot API — Bilingual (English + Gujarati)
// ============================================================
const express = require('express');
const { db } = require('../config/db');

const router = express.Router();

// ---- Language Detection ----
const gujaratiScriptRegex = /[\u0A80-\u0AFF]/;
const hindiScriptRegex = /[\u0900-\u097F]/;

const gujlishKeywords = [
  'kem', 'che', 'chhe', 'samay', 'kyare', 'aavshe', 'aave', 'nahi', 'hoy', 'rasta', 
  'bhada', 'bhadu', 'mane', 'batavo', 'javu', 'thi', 'ketlu', 'su', 'tamne', 'bol', 
  'aavo', 'kevi', 'rite', 'madad', 'ubhi', 'aaj', 'aavti', 'kal', 'savare', 'sanje', 
  'rate', 'ratre', 'maru', 'amari', 'nathi', 'kyathi', 'kya', 'chu', 'cho'
];

const hinglishKeywords = [
  'kya', 'hai', 'kab', 'aayega', 'kaha', 'kahan', 'kitna', 'paise', 'batao', 
  'chahiye', 'kaise', 'jaana', 'madad', 'der', 'jaldi', 'aaj', 'kal', 'subah', 
  'shaam', 'raat', 'mera', 'hamara', 'nahi', 'se', 'tak', 'jayega', 'kiraya'
];

function detectLanguage(text) {
  if (gujaratiScriptRegex.test(text)) return 'gu';
  if (hindiScriptRegex.test(text)) return 'hi';

  const lower = text.toLowerCase();
  const words = lower.split(/[^a-z]+/);

  let gujCount = 0;
  let hinCount = 0;

  for (const word of words) {
    if (gujlishKeywords.includes(word)) gujCount++;
    if (hinglishKeywords.includes(word)) hinCount++;
  }

  if (gujCount >= hinCount && gujCount >= 2) return 'gujlish';
  if (hinCount > gujCount && hinCount >= 2) return 'hinglish';

  return 'en';
}

// ---- Intent detection ----
function detectIntent(text) {
  const lower = text.toLowerCase();

  // Greeting
  if (/^(hi|hello|hey|namaste|kem cho|kem che|hii+|helo|good morning|good evening|sup)/.test(lower)) {
    return 'greeting';
  }

  // Thank you
  if (/thank|dhanyavaad|aabhar|thanks|thnx|ty|shukriya/.test(lower)) {
    return 'thanks';
  }

  // Help
  if (/help|madad|sahay|what can you|su kari sake|kya kar/.test(lower)) {
    return 'help';
  }

  // Delay / Late
  if (/delay|late|moda|udha|ubhi|udi|modum|mode|waiting|aavti nathi|der/.test(lower)) {
    return 'delay';
  }

  // Fare / Price
  if (/fare|price|cost|charge|bhad|pais|kiraya|kitna|ketl|ticket|rate|rupee|₹/.test(lower)) {
    return 'fare';
  }

  // Stop
  if (/stop|station|stand|sthan|ubh/.test(lower)) {
    return 'stops';
  }

  // Schedule / Timing
  if (/schedule|timing|time|samay|kyare|kab|depart|arriv|timetable|savare|sanje|rate|aavshe|jase|nikle|chale|jayega|aayega/.test(lower)) {
    return 'schedule';
  }

  // Track / Live
  if (/track|live|location|where|kya che|kya chhe|kaha|kahan|locat|position|gps|map|real.?time/.test(lower)) {
    return 'track';
  }

  // Route search
  if (/route|rasta|bus.*from|from.*to|thi.*sudhi|thi.*javu|se.*tak|between|how to go|kevi rite javu|kaise ja/.test(lower)) {
    return 'route';
  }

  // Bus info
  if (/bus|number|naam|name|type|ac|sleeper|volvo|non.?ac/.test(lower)) {
    return 'bus_info';
  }

  // Driver
  if (/driver|chalak|phone|contact|number/.test(lower)) {
    return 'driver';
  }

  return 'unknown';
}

// ---- Extract city names from text ----
function extractCities(text) {
  const lower = text.toLowerCase();
  const allCities = new Set();
  db.routes.forEach(r => {
    allCities.add(r.from.toLowerCase());
    allCities.add(r.to.toLowerCase());
    r.stops.forEach(s => {
      const city = s.name.split(' - ')[0].split(' ')[0].toLowerCase();
      allCities.add(city);
    });
  });

  const found = [];
  for (const city of allCities) {
    if (lower.includes(city) && city.length > 2) {
      found.push(city);
    }
  }
  return [...new Set(found)];
}

// ---- Find routes for cities ----
function findRoutes(cities) {
  if (cities.length === 0) return db.routes;

  return db.routes.filter(r => {
    const routeText = `${r.from} ${r.to} ${r.routeName} ${r.stops.map(s => s.name).join(' ')}`.toLowerCase();
    return cities.every(c => routeText.includes(c));
  });
}

// ---- Generate response ----
function generateResponse(text) {
  const lang = detectLanguage(text);
  const intent = detectIntent(text);
  const cities = extractCities(text);
  const routes = findRoutes(cities);

  let reply = '';
  let data = null;

  switch (intent) {
    case 'greeting': {
      if (lang === 'gu') reply = '🙏 નમસ્તે! "Where Is My Bus" માં આપનું સ્વાગત છે! 🚌\n\nહું તમને બસ ટ્રેકિંગ, સમય, રૂટ, સ્ટોપ્સ અને ભાડા વિશે મદદ કરી શકું છું.\n\nતમે મને પૂછી શકો:\n• "મુંબઈ થી પુના બસ ક્યારે છે?"\n• "ભાડું કેટલું છે?"\n• "બસ ક્યાં છે?"\n• "સ્ટોપ્સ બતાવો"';
      else if (lang === 'hi') reply = '🙏 नमस्ते! "Where Is My Bus" में आपका स्वागत है! 🚌\n\nमैं आपको बस ट्रैकिंग, समय, रूट, स्टॉप और किराये के बारे में मदद कर सकता हूँ।\n\nआप मुझसे पूछ सकते हैं:\n• "मुंबई से पुणे बस कब है?"\n• "किराया कितना है?"\n• "बस कहाँ है?"\n• "स्टॉप बताओ"';
      else if (lang === 'gujlish') reply = '🙏 Namaste! "Where Is My Bus" ma aapnu swagat che! 🚌\n\nHu tamne bus tracking, time, route, stops ane fare vise madad kari shaku chu.\n\nTame mane puchi shako cho:\n• "Mumbai thi Pune bus kyare che?"\n• "Bhadu ketlu che?"\n• "Bus kya che?"\n• "Stops batavo"';
      else if (lang === 'hinglish') reply = '🙏 Namaste! "Where Is My Bus" mein aapka swagat hai! 🚌\n\nMain aapko bus tracking, time, route, stops aur fare ke baare mein madad kar sakta hu.\n\nAap mujhse pooch sakte hai:\n• "Mumbai se Pune bus kab hai?"\n• "Kiraya kitna hai?"\n• "Bus kahan hai?"\n• "Stops batao"';
      else reply = '👋 Hello! Welcome to **Where Is My Bus**! 🚌\n\nI can help you with:\n• 🕐 Bus timings & schedules\n• 📍 Live bus tracking\n• 🛣️ Route information\n• 🚏 Stop details\n• 💰 Fare info\n\nTry asking: "Bus from Mumbai to Pune?" or "Show me the schedule"';
      break;
    }

    case 'thanks': {
      if (lang === 'gu') reply = '😊 આભાર! ખુશી થઈ મદદ કરીને. બીજું કંઈ પૂછવું હોય તો જરૂર પૂછો! 🚌';
      else if (lang === 'hi') reply = '😊 धन्यवाद! आपकी मदद करके खुशी हुई। अगर कुछ और पूछना हो तो जरूर पूछें! 🚌';
      else if (lang === 'gujlish') reply = '😊 Aabhar! Madad karine khushi thai. Biju kai puchvu hoy to jarur pucho! 🚌';
      else if (lang === 'hinglish') reply = '😊 Shukriya! Madad karke khushi hui. Agar kuch aur poochna ho to zaroor pooche! 🚌';
      else reply = '😊 You\'re welcome! Happy to help. Feel free to ask anything else about your bus! 🚌';
      break;
    }

    case 'help': {
      if (lang === 'gu') reply = '🤖 હું તમને આ બાબતોમાં મદદ કરી શકું:\n\n🕐 **બસ સમય** — "મુંબઈ થી પુના બસ ક્યારે છે?"\n📍 **લાઇવ ટ્રેકિંગ** — "બસ ક્યાં છે?"\n🛣️ **રૂટ માહિતી** — "દિલ્લી જયપુર રૂટ બતાવો"\n🚏 **સ્ટોપ્સ** — "કયા સ્ટોપ પર ઉભી રહે છે?"\n💰 **ભાડું** — "ટિકિટ કેટલી છે?"\n🚌 **બસ માહિતી** — "કઈ બસ ચાલે છે?"\n\nકોઈ પણ શહેરનું નામ લખો, હું માહિતી શોધી આપીશ! 🔍';
      else if (lang === 'hi') reply = '🤖 मैं आपको इन चीज़ों में मदद कर सकता हूँ:\n\n🕐 **बस का समय** — "मुंबई से पुणे बस कब है?"\n📍 **लाइव ट्रैकिंग** — "बस कहाँ है?"\n🛣️ **रूट जानकारी** — "दिल्ली जयपुर रूट दिखाओ"\n🚏 **स्टॉप** — "कौनसे स्टॉप पर रुकती है?"\n💰 **किराया** — "टिकट कितने का है?"\n🚌 **बस जानकारी** — "कौनसी बस चल रही है?"\n\nबस किसी शहर का नाम लिखें, मैं जानकारी ढूँढ कर दूँगा! 🔍';
      else if (lang === 'gujlish') reply = '🤖 Hu tamne aa babato ma madad kari shaku:\n\n🕐 **Bus Time** — "Mumbai thi Pune bus kyare che?"\n📍 **Live Tracking** — "Bus kya che?"\n🛣️ **Route Info** — "Delhi Jaipur route batavo"\n🚏 **Stops** — "Kaya stop par ubhi rahe che?"\n💰 **Fare** — "Ticket ketli che?"\n🚌 **Bus Info** — "Kai bus chale che?"\n\nKoi pan shaher nu naam lakho, hu mahiti shodi aapish! 🔍';
      else if (lang === 'hinglish') reply = '🤖 Main aapko in cheezon mein madad kar sakta hu:\n\n🕐 **Bus Timings** — "Mumbai se Pune bus kab hai?"\n📍 **Live Tracking** — "Bus kahan hai?"\n🛣️ **Route Info** — "Delhi Jaipur route dikhao"\n🚏 **Stops** — "Kaunse stop par rukti hai?"\n💰 **Fare** — "Ticket kitne ka hai?"\n🚌 **Bus Info** — "Kaunsi bus chal rahi hai?"\n\nBas kisi sheher ka naam likhe, main info dhoond kar dunga! 🔍';
      else reply = '🤖 I can help you with:\n\n🕐 **Bus Timings** — "When is the bus from Delhi to Jaipur?"\n📍 **Live Tracking** — "Where is my bus?"\n🛣️ **Route Info** — "Show routes from Mumbai"\n🚏 **Stops** — "What stops does it cover?"\n💰 **Fares** — "How much is the ticket?"\n🚌 **Bus Info** — "Which buses are running?"\n\nJust type a city name and I\'ll find info for you! 🔍';
      break;
    }

    case 'schedule': {
      if (routes.length === 0) {
        if (lang === 'gu') reply = '😕 આ રૂટ માટે કોઈ શેડ્યૂલ મળ્યું નથી. કૃપા કરીને શહેરનું નામ લખો (દા.ત. "મુંબઈ પુના શેડ્યૂલ").';
        else if (lang === 'hi') reply = '😕 इस रूट के लिए कोई टाइमटेबल नहीं मिला। कृपया शहर का नाम लिखें (उदा. "मुंबई पुणे टाइमटेबल").';
        else if (lang === 'gujlish') reply = '😕 Aa route mate koi schedule malyu nathi. Krupa karine shaher nu naam lakho (e.g. "Mumbai Pune schedule").';
        else if (lang === 'hinglish') reply = '😕 Iss route ke liye koi schedule nahi mila. Kripya sheher ka naam likhe (e.g. "Mumbai Pune schedule").';
        else reply = '😕 No schedule found for this route. Please mention city names (e.g. "Mumbai Pune schedule").';
      } else {
        const r = routes[0];
        const scheduleList = r.schedule.map(s => `🕐 ${s.departureTime} → ${s.arrivalTime} (${s.days.join(', ')})`).join('\n');

        if (lang === 'gu') reply = `📅 **${r.from} → ${r.to}** નું શેડ્યૂલ:\n\n${scheduleList}\n\n📏 અંતર: ${r.distance} | ⏱ સમય: ${r.duration}`;
        else if (lang === 'hi') reply = `📅 **${r.from} → ${r.to}** का टाइमटेबल:\n\n${scheduleList}\n\n📏 दूरी: ${r.distance} | ⏱ समय: ${r.duration}`;
        else if (lang === 'gujlish') reply = `📅 **${r.from} → ${r.to}** nu schedule:\n\n${scheduleList}\n\n📏 Antar: ${r.distance} | ⏱ Samay: ${r.duration}`;
        else if (lang === 'hinglish') reply = `📅 **${r.from} → ${r.to}** ka schedule:\n\n${scheduleList}\n\n📏 Doori: ${r.distance} | ⏱ Samay: ${r.duration}`;
        else reply = `📅 Schedule for **${r.from} → ${r.to}**:\n\n${scheduleList}\n\n📏 Distance: ${r.distance} | ⏱ Duration: ${r.duration}`;

        data = { type: 'schedule', route: r };
      }
      break;
    }

    case 'fare': {
      if (routes.length === 0) {
        if (lang === 'gu') reply = '💰 ભાડું જાણવા માટે રૂટ જણાવો (દા.ત. "મુંબઈ પુના ભાડું").';
        else if (lang === 'hi') reply = '💰 किराया जानने के लिए रूट बताएँ (उदा. "मुंबई पुणे किराया").';
        else if (lang === 'gujlish') reply = '💰 Bhadu janva mate route janavo (e.g. "Mumbai Pune bhadu").';
        else if (lang === 'hinglish') reply = '💰 Kiraya janne ke liye route bataye (e.g. "Mumbai Pune kiraya").';
        else reply = '💰 Please mention a route to check fares (e.g. "Mumbai Pune fare").';
      } else {
        const r = routes[0];
        if (lang === 'gu') reply = `💰 **${r.from} → ${r.to}** ભાડું:\n\n🛏️ સ્લીપર: ₹${r.fare.sleeper}\n❄️ AC: ₹${r.fare.ac}\n🪟 Non-AC: ₹${r.fare.nonAc}`;
        else if (lang === 'hi') reply = `💰 **${r.from} → ${r.to}** किराया:\n\n🛏️ स्लीपर: ₹${r.fare.sleeper}\n❄️ AC: ₹${r.fare.ac}\n🪟 Non-AC: ₹${r.fare.nonAc}`;
        else if (lang === 'gujlish') reply = `💰 **${r.from} → ${r.to}** bhadu:\n\n🛏️ Sleeper: ₹${r.fare.sleeper}\n❄️ AC: ₹${r.fare.ac}\n🪟 Non-AC: ₹${r.fare.nonAc}`;
        else if (lang === 'hinglish') reply = `💰 **${r.from} → ${r.to}** ka kiraya:\n\n🛏️ Sleeper: ₹${r.fare.sleeper}\n❄️ AC: ₹${r.fare.ac}\n🪟 Non-AC: ₹${r.fare.nonAc}`;
        else reply = `💰 Fares for **${r.from} → ${r.to}**:\n\n🛏️ Sleeper: ₹${r.fare.sleeper}\n❄️ AC: ₹${r.fare.ac}\n🪟 Non-AC: ₹${r.fare.nonAc}`;
        
        data = { type: 'fare', route: r };
      }
      break;
    }

    case 'stops': {
      if (routes.length === 0) {
        if (lang === 'gu') reply = '🚏 સ્ટોપ જાણવા માટે રૂટ જણાવો (દા.ત. "દિલ્લી જયપુર સ્ટોપ").';
        else if (lang === 'hi') reply = '🚏 स्टॉप जानने के लिए रूट बताएँ (उदा. "दिल्ली जयपुर स्टॉप").';
        else if (lang === 'gujlish') reply = '🚏 Stop janva mate route janavo (e.g. "Delhi Jaipur stop").';
        else if (lang === 'hinglish') reply = '🚏 Stops janne ke liye route bataye (e.g. "Delhi Jaipur stops").';
        else reply = '🚏 Please mention a route to see stops (e.g. "Delhi Jaipur stops").';
      } else {
        const r = routes[0];
        const stopList = r.stops.map(s => `${s.order}. 🚏 ${s.name} — ${s.arrivalTime === '--' ? 'Start' : s.arrivalTime}`).join('\n');

        if (lang === 'gu') reply = `🚏 **${r.from} → ${r.to}** ના સ્ટોપ્સ:\n\n${stopList}`;
        else if (lang === 'hi') reply = `🚏 **${r.from} → ${r.to}** के स्टॉप:\n\n${stopList}`;
        else if (lang === 'gujlish') reply = `🚏 **${r.from} → ${r.to}** na stops:\n\n${stopList}`;
        else if (lang === 'hinglish') reply = `🚏 **${r.from} → ${r.to}** ke stops:\n\n${stopList}`;
        else reply = `🚏 Stops on **${r.from} → ${r.to}**:\n\n${stopList}`;
        
        data = { type: 'stops', route: r };
      }
      break;
    }

    case 'track': {
      const runningBuses = routes.length > 0
        ? db.buses.filter(b => routes.some(r => r.id === b.routeId) && b.status === 'running')
        : db.buses.filter(b => b.status === 'running');

      if (runningBuses.length === 0) {
        if (lang === 'gu') reply = '😕 હાલમાં આ રૂટ પર કોઈ બસ ચાલતી નથી.';
        else if (lang === 'hi') reply = '😕 इस रूट पर फिलहाल कोई बस नहीं चल रही है।';
        else if (lang === 'gujlish') reply = '😕 Halyma aa route par koi bus chalti nathi.';
        else if (lang === 'hinglish') reply = '😕 Filhaal iss route par koi bus nahi chal rahi hai.';
        else reply = '😕 No buses are currently running on this route.';
      } else {
        const busList = runningBuses.slice(0, 5).map(b => {
          const route = db.routes.find(r => r.id === b.routeId);
          return `🚌 **${b.name}** (${b.busNumber})\n   📍 ${route ? route.from + ' → ' + route.to : 'Unknown'} — Status: ${b.status}`;
        }).join('\n\n');

        if (lang === 'gu') reply = `📍 **હાલમાં ચાલતી બસો** (${runningBuses.length}):\n\n${busList}`;
        else if (lang === 'hi') reply = `📍 **अभी चल रही बसें** (${runningBuses.length}):\n\n${busList}`;
        else if (lang === 'gujlish') reply = `📍 **Halma chalti buses** (${runningBuses.length}):\n\n${busList}`;
        else if (lang === 'hinglish') reply = `📍 **Abhi chal rahi buses** (${runningBuses.length}):\n\n${busList}`;
        else reply = `📍 **Currently Running Buses** (${runningBuses.length}):\n\n${busList}`;

        data = { type: 'tracking', buses: runningBuses.slice(0, 5) };
      }
      break;
    }

    case 'route': {
      if (routes.length === 0) {
        if (lang === 'gu') reply = '🛣️ કોઈ રૂટ મળ્યો નથી. ઉપલબ્ધ શહેરો: Mumbai, Pune, Delhi, Jaipur...';
        else if (lang === 'hi') reply = '🛣️ कोई रूट नहीं मिला। उपलब्ध शहर: Mumbai, Pune, Delhi, Jaipur...';
        else if (lang === 'gujlish') reply = '🛣️ Koi route malyo nathi. Available cities: Mumbai, Pune, Delhi, Jaipur...';
        else if (lang === 'hinglish') reply = '🛣️ Koi route nahi mila. Available cities: Mumbai, Pune, Delhi, Jaipur...';
        else reply = '🛣️ No routes found. Available cities: Mumbai, Pune, Delhi, Jaipur...';
      } else {
        const routeList = routes.map(r => {
          const activeBuses = db.buses.filter(b => b.routeId === r.id && b.status === 'running').length;
          return `🛣️ **${r.routeName}**\n   ${r.from} → ${r.to} | ${r.distance} | ${r.duration}\n   🚌 ${activeBuses} bus(es) running`;
        }).join('\n\n');

        if (lang === 'gu') reply = `🛣️ **મળેલા રૂટ** (${routes.length}):\n\n${routeList}`;
        else if (lang === 'hi') reply = `🛣️ **मिले हुए रूट** (${routes.length}):\n\n${routeList}`;
        else if (lang === 'gujlish') reply = `🛣️ **Malela route** (${routes.length}):\n\n${routeList}`;
        else if (lang === 'hinglish') reply = `🛣️ **Mile hue route** (${routes.length}):\n\n${routeList}`;
        else reply = `🛣️ **Routes Found** (${routes.length}):\n\n${routeList}`;
        
        data = { type: 'routes', routes };
      }
      break;
    }

    case 'bus_info': {
      const matchedBuses = routes.length > 0 ? db.buses.filter(b => routes.some(r => r.id === b.routeId)) : db.buses;
      const busList = matchedBuses.slice(0, 6).map(b => {
        const route = db.routes.find(r => r.id === b.routeId);
        const statusIcon = b.status === 'running' ? '🟢' : b.status === 'delayed' ? '🟡' : '🔴';
        return `${statusIcon} **${b.name}** — ${b.type}\n   ${b.busNumber} | ${route ? route.from + ' → ' + route.to : ''}`;
      }).join('\n\n');

      if (lang === 'gu') reply = `🚌 **બસ માહિતી** (${matchedBuses.length} બસ):\n\n${busList}\n\n🟢 ચાલુ | 🟡 મોડી | 🔴 બંધ`;
      else if (lang === 'hi') reply = `🚌 **बस जानकारी** (${matchedBuses.length} बसें):\n\n${busList}\n\n🟢 चल रही | 🟡 लेट | 🔴 बंद`;
      else if (lang === 'gujlish') reply = `🚌 **Bus Mahiti** (${matchedBuses.length} buses):\n\n${busList}\n\n🟢 Chalu | 🟡 Modi | 🔴 Bandh`;
      else if (lang === 'hinglish') reply = `🚌 **Bus Info** (${matchedBuses.length} buses):\n\n${busList}\n\n🟢 Chal rahi | 🟡 Late | 🔴 Band`;
      else reply = `🚌 **Bus Information** (${matchedBuses.length} buses):\n\n${busList}\n\n🟢 Running | 🟡 Delayed | 🔴 Stopped`;
      
      data = { type: 'buses', buses: matchedBuses.slice(0, 6) };
      break;
    }

    case 'delay': {
      const delayedBuses = db.buses.filter(b => b.status === 'delayed');
      const stoppedBuses = db.buses.filter(b => b.status === 'stopped');

      if (delayedBuses.length === 0 && stoppedBuses.length === 0) {
        if (lang === 'gu') reply = '✅ શુભ સમાચાર! હાલમાં કોઈ બસ મોડી નથી. બધી બસ સમયસર ચાલી રહી છે! 🎉';
        else if (lang === 'hi') reply = '✅ अच्छी खबर! फिलहाल कोई बस लेट नहीं है। सब समय पर चल रही हैं! 🎉';
        else if (lang === 'gujlish') reply = '✅ Shubh samachar! Halma koi bus modi nathi. Badhi bus samay sar chali rahi che! 🎉';
        else if (lang === 'hinglish') reply = '✅ Acchi khabar! Filhaal koi bus late nahi hai. Sab time par chal rahi hain! 🎉';
        else reply = '✅ Great news! No buses are currently delayed. All buses are running on time! 🎉';
      } else {
        let list = '';
        if (delayedBuses.length > 0) {
          list += delayedBuses.map(b => {
            const route = db.routes.find(r => r.id === b.routeId);
            return `🟡 **${b.name}** (${b.busNumber}) — ${route ? route.from + ' → ' + route.to : 'Unknown'}`;
          }).join('\n');
        }
        if (stoppedBuses.length > 0) {
          list += '\n' + stoppedBuses.map(b => {
            const route = db.routes.find(r => r.id === b.routeId);
            return `🔴 **${b.name}** (${b.busNumber}) — ${route ? route.from + ' → ' + route.to : 'Unknown'}`;
          }).join('\n');
        }

        if (lang === 'gu') reply = `⚠️ **મોડી / બંધ બસો:**\n\n${list}`;
        else if (lang === 'hi') reply = `⚠️ **लेट / बंद बसें:**\n\n${list}`;
        else if (lang === 'gujlish') reply = `⚠️ **Modi / Bandh Buses:**\n\n${list}`;
        else if (lang === 'hinglish') reply = `⚠️ **Late / Band Buses:**\n\n${list}`;
        else reply = `⚠️ **Delayed / Stopped Buses:**\n\n${list}`;

        data = { type: 'delays', delayed: delayedBuses, stopped: stoppedBuses };
      }
      break;
    }

    case 'driver': {
      const matchedBuses = routes.length > 0 ? db.buses.filter(b => routes.some(r => r.id === b.routeId)) : [];

      if (matchedBuses.length === 0) {
        if (lang === 'gu') reply = '👨‍✈️ ડ્રાઇવરની માહિતી જાણવા રૂટ જણાવો (દા.ત. "Mumbai bus driver").';
        else if (lang === 'hi') reply = '👨‍✈️ ड्राइवर की जानकारी के लिए रूट बताएँ (उदा. "Mumbai bus driver").';
        else if (lang === 'gujlish') reply = '👨‍✈️ Driver ni mahiti janva route janavo (e.g. "Mumbai bus driver").';
        else if (lang === 'hinglish') reply = '👨‍✈️ Driver ki jankari ke liye route bataye (e.g. "Mumbai bus driver").';
        else reply = '👨‍✈️ Please mention a route to see driver info (e.g. "Mumbai bus driver").';
      } else {
        const driverList = matchedBuses.slice(0, 4).map(b => {
          const d = b.driver;
          if (!d) return `🚌 ${b.name} — Driver info unavailable`;
          return `🚌 **${b.name}**\n   👨‍✈️ ${d.name} | 📞 ${d.phone}\n   ⭐ ${d.rating}/5 | 🎯 ${d.experience}`;
        }).join('\n\n');

        if (lang === 'gu') reply = `👨‍✈️ **ડ્રાઇવર માહિતી:**\n\n${driverList}`;
        else if (lang === 'hi') reply = `👨‍✈️ **ड्राइवर जानकारी:**\n\n${driverList}`;
        else if (lang === 'gujlish') reply = `👨‍✈️ **Driver Mahiti:**\n\n${driverList}`;
        else if (lang === 'hinglish') reply = `👨‍✈️ **Driver Jankari:**\n\n${driverList}`;
        else reply = `👨‍✈️ **Driver Information:**\n\n${driverList}`;

        data = { type: 'drivers', buses: matchedBuses.slice(0, 4) };
      }
      break;
    }

    default: {
      if (lang === 'gu') reply = '🤔 મને સમજાયું નહીં. કૃપા કરીને આમાંથી પૂછો:\n\n• "મુંબઈ પુના બસ ક્યારે છે?"\n• "ભાડું કેટલું છે?"\n• "બસ ક્યાં છે?"\n• "સ્ટોપ બતાવો"\n• "કોઈ બસ મોડી છે?"\n\nઅથવા "help" ટાઇપ કરો 📝';
      else if (lang === 'hi') reply = '🤔 मैं समझ नहीं पाया। कृपया इनमें से कुछ पूछें:\n\n• "मुंबई पुणे बस कब है?"\n• "किराया कितना है?"\n• "बस कहाँ है?"\n• "स्टॉप बताओ"\n• "क्या कोई बस लेट है?"\n\nया "help" टाइप करें 📝';
      else if (lang === 'gujlish') reply = '🤔 Mane samjayu nahi. Krupa karine aamathi pucho:\n\n• "Mumbai Pune bus kyare che?"\n• "Bhadu ketlu che?"\n• "Bus kya che?"\n• "Stop batavo"\n• "Koi bus modi che?"\n\nAthva "help" type karo 📝';
      else if (lang === 'hinglish') reply = '🤔 Main samajh nahi paya. Kripya inme se kuch pooche:\n\n• "Mumbai Pune bus kab hai?"\n• "Kiraya kitna hai?"\n• "Bus kahan hai?"\n• "Stop batao"\n• "Kya koi bus late hai?"\n\nYa "help" type kare 📝';
      else reply = '🤔 I didn\'t quite understand that. Try asking about:\n\n• Bus timings — "When is the bus to Pune?"\n• Fares — "How much is Delhi to Jaipur?"\n• Tracking — "Where is my bus?"\n• Stops — "Show stops on Mumbai Pune"\n• Delays — "Are any buses delayed?"\n\nOr type **"help"** for more options! 📝';
      break;
    }
  }

  return { reply, data, language: lang, intent };
}

// POST /api/chat — Chat endpoint
router.post('/', (req, res) => {
  const { message } = req.body;

  if (!message || message.trim() === '') {
    return res.status(400).json({ message: 'Message is required' });
  }

  const response = generateResponse(message.trim());

  res.json({
    reply: response.reply,
    data: response.data,
    language: response.language,
    intent: response.intent,
    timestamp: new Date().toISOString()
  });
});

// GET /api/chat/suggestions — Quick suggestion chips
router.get('/suggestions', (req, res) => {
  res.json({
    en: [
      '🚌 Show all buses',
      '🕐 Mumbai to Pune schedule',
      '💰 Delhi to Jaipur fare',
      '📍 Track live buses',
      '🚏 Stops on Bangalore Chennai',
      '⚠️ Any delays?'
    ],
    gu: [
      '🚌 બધી બસ બતાવો',
      '🕐 મુંબઈ પુના શેડ્યૂલ',
      '💰 ભાડું કેટલું છે?',
      '📍 બસ ક્યાં છે?',
      '🚏 સ્ટોપ બતાવો',
      '⚠️ કોઈ બસ મોડી છે?'
    ]
  });
});

module.exports = router;
