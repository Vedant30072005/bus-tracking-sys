// ============================================================
// generate-more-data.js
// Generates 70 new routes (r52–r121) and 200 new buses (b90–b289)
// spread across all of India and appends them to seedData.js
// Run with: node generate-more-data.js
// ============================================================

const fs = require('fs');
const path = require('path');

// ── City database with coordinates ─────────────────────────────────────────
const CITIES = {
  // North India - UP / Uttarakhand
  'Delhi':        { lat: 28.6672, lng: 77.2284, code: 'DL', stand: 'ISBT Kashmere Gate' },
  'Agra':         { lat: 27.1767, lng: 78.0081, code: 'UP', stand: 'ISBT Idgah' },
  'Lucknow':      { lat: 26.8170, lng: 80.8930, code: 'UP', stand: 'Alambagh Bus Stand' },
  'Varanasi':     { lat: 25.3176, lng: 83.0103, code: 'UP', stand: 'Cantt Bus Stand' },
  'Kanpur':       { lat: 26.4499, lng: 80.3319, code: 'UP', stand: 'Jhakarkati Bus Stand' },
  'Allahabad':    { lat: 25.4358, lng: 81.8463, code: 'UP', stand: 'Civil Lines Bus Stand' },
  'Gorakhpur':    { lat: 26.7606, lng: 83.3732, code: 'UP', stand: 'Gorakhpur Bus Stand' },
  'Meerut':       { lat: 28.9845, lng: 77.7064, code: 'UP', stand: 'Meerut Bus Stand' },
  'Bareilly':     { lat: 28.3470, lng: 79.4304, code: 'UP', stand: 'Bareilly Bus Stand' },
  'Mathura':      { lat: 27.4924, lng: 77.6737, code: 'UP', stand: 'Mathura Bus Stand' },
  'Dehradun':     { lat: 30.3165, lng: 78.0322, code: 'UK', stand: 'ISBT Dehradun' },
  'Haridwar':     { lat: 29.9457, lng: 78.1642, code: 'UK', stand: 'Haridwar Bus Stand' },
  'Rishikesh':    { lat: 30.0869, lng: 78.2676, code: 'UK', stand: 'Rishikesh Bus Stand' },
  'Nainital':     { lat: 29.3803, lng: 79.4636, code: 'UK', stand: 'Nainital Bus Stand' },
  'Mussoorie':    { lat: 30.4598, lng: 78.0664, code: 'UK', stand: 'Mussoorie Bus Stand' },
  // North India - Punjab / HP
  'Chandigarh':   { lat: 30.7333, lng: 76.7794, code: 'CH', stand: 'Sector 43 Bus Stand' },
  'Amritsar':     { lat: 31.6340, lng: 74.8723, code: 'PB', stand: 'ISBT Amritsar' },
  'Ludhiana':     { lat: 30.9010, lng: 75.8573, code: 'PB', stand: 'Ludhiana Bus Stand' },
  'Jalandhar':    { lat: 31.3260, lng: 75.5762, code: 'PB', stand: 'Jalandhar Bus Stand' },
  'Patiala':      { lat: 30.3398, lng: 76.3869, code: 'PB', stand: 'Patiala Bus Stand' },
  'Shimla':       { lat: 31.1048, lng: 77.1734, code: 'HP', stand: 'ISBT Shimla' },
  'Manali':       { lat: 32.2396, lng: 77.1887, code: 'HP', stand: 'Manali Bus Stand' },
  'Dharamsala':   { lat: 32.2190, lng: 76.3234, code: 'HP', stand: 'Dharamsala Bus Stand' },
  'Jammu':        { lat: 32.7266, lng: 74.8570, code: 'JK', stand: 'Jammu Bus Stand' },
  'Srinagar':     { lat: 34.0837, lng: 74.7973, code: 'JK', stand: 'TRC Bus Stand' },
  // Rajasthan
  'Jaipur':       { lat: 26.9157, lng: 75.7880, code: 'RJ', stand: 'Sindhi Camp Bus Stand' },
  'Jodhpur':      { lat: 26.2993, lng: 73.0281, code: 'RJ', stand: 'Raika Bagh Bus Stand' },
  'Udaipur':      { lat: 24.5854, lng: 73.7125, code: 'RJ', stand: 'UIT Circle Bus Stand' },
  'Ajmer':        { lat: 26.4499, lng: 74.6399, code: 'RJ', stand: 'Ajmer Bus Stand' },
  'Bikaner':      { lat: 28.0229, lng: 73.3119, code: 'RJ', stand: 'Bikaner Bus Stand' },
  'Kota':         { lat: 25.2138, lng: 75.8648, code: 'RJ', stand: 'Kota Bus Stand' },
  'Pushkar':      { lat: 26.4885, lng: 74.5537, code: 'RJ', stand: 'Pushkar Bus Stand' },
  'MountAbu':     { lat: 24.5926, lng: 72.7156, code: 'RJ', stand: 'Mount Abu Bus Stand' },
  // West India
  'Mumbai':       { lat: 18.9690, lng: 72.8194, code: 'MH', stand: 'Mumbai Central Bus Stand' },
  'Pune':         { lat: 18.5018, lng: 73.8636, code: 'MH', stand: 'Swargate Bus Stand' },
  'Nashik':       { lat: 19.9975, lng: 73.7898, code: 'MH', stand: 'CBS Bus Stand' },
  'Nagpur':       { lat: 21.1458, lng: 79.0882, code: 'MH', stand: 'Central Bus Stand' },
  'Aurangabad':   { lat: 19.8762, lng: 75.3433, code: 'MH', stand: 'Aurangabad Bus Stand' },
  'Solapur':      { lat: 17.6599, lng: 75.9064, code: 'MH', stand: 'Solapur Bus Stand' },
  'Kolhapur':     { lat: 16.7050, lng: 74.2433, code: 'MH', stand: 'Kolhapur Bus Stand' },
  'Satara':       { lat: 17.6805, lng: 74.0183, code: 'MH', stand: 'Satara Bus Stand' },
  'Nanded':       { lat: 19.1383, lng: 77.3210, code: 'MH', stand: 'Nanded Bus Stand' },
  'Amravati':     { lat: 20.9374, lng: 77.7796, code: 'MH', stand: 'Amravati Bus Stand' },
  'Ahmedabad':    { lat: 23.0225, lng: 72.5714, code: 'GJ', stand: 'Central Bus Stand' },
  'Surat':        { lat: 21.1702, lng: 72.8311, code: 'GJ', stand: 'Surat Bus Stand' },
  'Vadodara':     { lat: 22.3072, lng: 73.1812, code: 'GJ', stand: 'Vadodara Bus Stand' },
  'Rajkot':       { lat: 22.3039, lng: 70.8022, code: 'GJ', stand: 'Rajkot Bus Stand' },
  'Gandhinagar':  { lat: 23.2156, lng: 72.6369, code: 'GJ', stand: 'Gandhinagar Bus Stand' },
  'Goa':          { lat: 15.4990, lng: 73.8278, code: 'GA', stand: 'Kadamba Bus Stand' },
  // Central India
  'Bhopal':       { lat: 23.2599, lng: 77.4126, code: 'MP', stand: 'ISBT Bhopal' },
  'Indore':       { lat: 22.7196, lng: 75.8577, code: 'MP', stand: 'Gangwal Bus Stand' },
  'Jabalpur':     { lat: 23.1815, lng: 79.9864, code: 'MP', stand: 'Jabalpur Bus Stand' },
  'Gwalior':      { lat: 26.2183, lng: 78.1828, code: 'MP', stand: 'Gwalior Bus Stand' },
  'Ujjain':       { lat: 23.1765, lng: 75.7885, code: 'MP', stand: 'Ujjain Bus Stand' },
  'Rewa':         { lat: 24.5362, lng: 81.3032, code: 'MP', stand: 'Rewa Bus Stand' },
  'Raipur':       { lat: 21.2514, lng: 81.6296, code: 'CG', stand: 'Raipur Bus Stand' },
  'Bilaspur':     { lat: 22.0797, lng: 82.1409, code: 'CG', stand: 'Bilaspur Bus Stand' },
  'Jagdalpur':    { lat: 19.0798, lng: 82.0181, code: 'CG', stand: 'Jagdalpur Bus Stand' },
  // South India - Karnataka
  'Bangalore':    { lat: 12.9772, lng: 77.5724, code: 'KA', stand: 'Majestic Bus Stand' },
  'Mysore':       { lat: 12.2958, lng: 76.6394, code: 'KA', stand: 'Central Bus Stand' },
  'Hubli':        { lat: 15.3647, lng: 75.1240, code: 'KA', stand: 'Hubli Bus Stand' },
  'Belgaum':      { lat: 15.8497, lng: 74.4977, code: 'KA', stand: 'Belgaum Bus Stand' },
  'Mangalore':    { lat: 12.8698, lng: 74.8421, code: 'KA', stand: 'KSRTC Bus Stand' },
  'Gulbarga':     { lat: 17.3297, lng: 76.8343, code: 'KA', stand: 'Gulbarga Bus Stand' },
  'Dharwad':      { lat: 15.4589, lng: 75.0078, code: 'KA', stand: 'Dharwad Bus Stand' },
  // Tamil Nadu / Pondicherry
  'Chennai':      { lat: 13.0694, lng: 80.1948, code: 'TN', stand: 'Koyambedu Bus Stand' },
  'Coimbatore':   { lat: 11.0168, lng: 76.9558, code: 'TN', stand: 'Gandhipuram Bus Stand' },
  'Madurai':      { lat: 9.9252,  lng: 78.1198, code: 'TN', stand: 'Central Bus Stand' },
  'Salem':        { lat: 11.6643, lng: 78.1460, code: 'TN', stand: 'Salem Bus Stand' },
  'Trichy':       { lat: 10.7905, lng: 78.7047, code: 'TN', stand: 'Central Bus Stand' },
  'Tirunelveli':  { lat: 8.7139,  lng: 77.7567, code: 'TN', stand: 'Tirunelveli Bus Stand' },
  'Vellore':      { lat: 12.9165, lng: 79.1325, code: 'TN', stand: 'Vellore Bus Stand' },
  'Thanjavur':    { lat: 10.7870, lng: 79.1378, code: 'TN', stand: 'Thanjavur Bus Stand' },
  'Pondicherry':  { lat: 11.9416, lng: 79.8083, code: 'PY', stand: 'Pondicherry Bus Stand' },
  'Ooty':         { lat: 11.4102, lng: 76.6950, code: 'TN', stand: 'Ooty Bus Stand' },
  // Kerala
  'Kochi':        { lat: 9.9312,  lng: 76.2673, code: 'KL', stand: 'KSRTC Bus Stand' },
  'Trivandrum':   { lat: 8.5241,  lng: 76.9366, code: 'KL', stand: 'Central Bus Stand' },
  'Calicut':      { lat: 11.2588, lng: 75.7804, code: 'KL', stand: 'Calicut Bus Stand' },
  'Thrissur':     { lat: 10.5276, lng: 76.2144, code: 'KL', stand: 'Thrissur Bus Stand' },
  // Telangana / Andhra Pradesh
  'Hyderabad':    { lat: 17.3784, lng: 78.4839, code: 'TS', stand: 'MGBS Bus Stand' },
  'Vijayawada':   { lat: 16.5193, lng: 80.6305, code: 'AP', stand: 'Pandit Nehru Bus Stand' },
  'Visakhapatnam':{ lat: 17.7231, lng: 83.3012, code: 'AP', stand: 'APSRTC Bus Stand' },
  'Tirupati':     { lat: 13.6288, lng: 79.4192, code: 'AP', stand: 'Tirupati Bus Stand' },
  'Warangal':     { lat: 17.9784, lng: 79.5941, code: 'TS', stand: 'Warangal Bus Stand' },
  'Nellore':      { lat: 14.4426, lng: 79.9865, code: 'AP', stand: 'Nellore Bus Stand' },
  'Rajahmundry':  { lat: 17.0005, lng: 81.8040, code: 'AP', stand: 'Rajahmundry Bus Stand' },
  'Kurnool':      { lat: 15.8281, lng: 78.0373, code: 'AP', stand: 'Kurnool Bus Stand' },
  'Guntur':       { lat: 16.3067, lng: 80.4365, code: 'AP', stand: 'Guntur Bus Stand' },
  // East India
  'Kolkata':      { lat: 22.5626, lng: 88.3513, code: 'WB', stand: 'Esplanade Bus Stand' },
  'Siliguri':     { lat: 26.7271, lng: 88.3953, code: 'WB', stand: 'Siliguri Bus Stand' },
  'Durgapur':     { lat: 23.5204, lng: 87.3119, code: 'WB', stand: 'Durgapur Bus Stand' },
  'Asansol':      { lat: 23.6739, lng: 86.9524, code: 'WB', stand: 'Asansol Bus Stand' },
  'Kharagpur':    { lat: 22.3460, lng: 87.2320, code: 'WB', stand: 'Kharagpur Bus Stand' },
  'Patna':        { lat: 25.6093, lng: 85.1376, code: 'BR', stand: 'Mithapur Bus Stand' },
  'Ranchi':       { lat: 23.3441, lng: 85.3096, code: 'JH', stand: 'Ranchi Bus Stand' },
  'Jamshedpur':   { lat: 22.8046, lng: 86.2029, code: 'JH', stand: 'Jamshedpur Bus Stand' },
  'Dhanbad':      { lat: 23.7957, lng: 86.4304, code: 'JH', stand: 'Dhanbad Bus Stand' },
  'Bhubaneswar':  { lat: 20.2961, lng: 85.8245, code: 'OD', stand: 'Bhubaneswar Bus Stand' },
  'Puri':         { lat: 19.8135, lng: 85.8312, code: 'OD', stand: 'Puri Bus Stand' },
  'Cuttack':      { lat: 20.4625, lng: 85.8830, code: 'OD', stand: 'Badambadi Bus Stand' },
  'Rourkela':     { lat: 22.2604, lng: 84.8536, code: 'OD', stand: 'Rourkela Bus Stand' },
  'Sambalpur':    { lat: 21.4669, lng: 83.9812, code: 'OD', stand: 'Sambalpur Bus Stand' },
  // Northeast
  'Guwahati':     { lat: 26.1445, lng: 91.7362, code: 'AS', stand: 'ISBT Guwahati' },
  'Shillong':     { lat: 25.5744, lng: 91.8933, code: 'ML', stand: 'Police Bazar Bus Stand' },
  'Dibrugarh':    { lat: 27.4728, lng: 94.9120, code: 'AS', stand: 'Dibrugarh Bus Stand' },
  'Silchar':      { lat: 24.8333, lng: 92.7789, code: 'AS', stand: 'Silchar Bus Stand' },
  'Tezpur':       { lat: 26.6338, lng: 92.8000, code: 'AS', stand: 'Tezpur Bus Stand' },
  'Imphal':       { lat: 24.8170, lng: 93.9368, code: 'MN', stand: 'Imphal Bus Stand' },
  'Agartala':     { lat: 23.8315, lng: 91.2868, code: 'TR', stand: 'Agartala Bus Stand' },
};

// ── 70 route pairs (from → to) ──────────────────────────────────────────────
const ROUTE_PAIRS = [
  // North India – UP / Uttarakhand (13)
  ['Delhi',      'Dehradun',    '300 km', '5h 30m', {sleeper:650, ac:950, nonAc:480}],
  ['Delhi',      'Haridwar',    '215 km', '4h 30m', {sleeper:480, ac:720, nonAc:360}],
  ['Delhi',      'Rishikesh',   '240 km', '5h 00m', {sleeper:520, ac:780, nonAc:390}],
  ['Delhi',      'Nainital',    '310 km', '6h 00m', {sleeper:680, ac:1020, nonAc:510}],
  ['Delhi',      'Mussoorie',   '295 km', '5h 30m', {sleeper:640, ac:960, nonAc:480}],
  ['Delhi',      'Mathura',     '145 km', '3h 00m', {sleeper:340, ac:510, nonAc:255}],
  ['Delhi',      'Gorakhpur',   '740 km', '12h 00m',{sleeper:1200, ac:1800, nonAc:900}],
  ['Delhi',      'Meerut',      '70 km',  '2h 00m', {sleeper:180, ac:270, nonAc:135}],
  ['Dehradun',   'Haridwar',    '55 km',  '1h 30m', {sleeper:120, ac:180, nonAc:90}],
  ['Dehradun',   'Rishikesh',   '44 km',  '1h 15m', {sleeper:100, ac:150, nonAc:75}],
  ['Haridwar',   'Rishikesh',   '24 km',  '45m',    {sleeper:60,  ac:90,  nonAc:45}],
  ['Chandigarh', 'Manali',      '310 km', '8h 00m', {sleeper:750, ac:1100, nonAc:580}],
  ['Chandigarh', 'Dharamsala',  '250 km', '5h 30m', {sleeper:560, ac:840, nonAc:420}],
  // Punjab (4)
  ['Amritsar',   'Chandigarh',  '235 km', '4h 30m', {sleeper:520, ac:780, nonAc:390}],
  ['Ludhiana',   'Delhi',       '310 km', '5h 30m', {sleeper:650, ac:980, nonAc:490}],
  ['Jalandhar',  'Delhi',       '365 km', '6h 30m', {sleeper:750, ac:1120, nonAc:560}],
  ['Jammu',      'Delhi',       '600 km', '10h 00m',{sleeper:1100, ac:1650, nonAc:825}],
  // Rajasthan (7)
  ['Jaipur',     'Ajmer',       '135 km', '2h 30m', {sleeper:310, ac:460, nonAc:230}],
  ['Jaipur',     'Bikaner',     '335 km', '6h 00m', {sleeper:700, ac:1050, nonAc:525}],
  ['Jaipur',     'Kota',        '245 km', '4h 30m', {sleeper:540, ac:810, nonAc:405}],
  ['Jaipur',     'Pushkar',     '150 km', '2h 45m', {sleeper:340, ac:510, nonAc:255}],
  ['Udaipur',    'Jodhpur',     '260 km', '5h 00m', {sleeper:570, ac:855, nonAc:428}],
  ['Ajmer',      'Jodhpur',     '200 km', '4h 00m', {sleeper:450, ac:675, nonAc:338}],
  ['Agra',       'Mathura',     '55 km',  '1h 15m', {sleeper:120, ac:180, nonAc:90}],
  // UP cross-routes (3)
  ['Allahabad',  'Varanasi',    '128 km', '3h 00m', {sleeper:300, ac:450, nonAc:225}],
  ['Lucknow',    'Gorakhpur',   '270 km', '5h 00m', {sleeper:580, ac:870, nonAc:435}],
  ['Lucknow',    'Kanpur',      '80 km',  '1h 45m', {sleeper:180, ac:270, nonAc:135}],
  // Maharashtra (8)
  ['Mumbai',     'Aurangabad',  '335 km', '6h 00m', {sleeper:700, ac:1050, nonAc:525}],
  ['Mumbai',     'Kolhapur',    '380 km', '7h 00m', {sleeper:780, ac:1170, nonAc:585}],
  ['Mumbai',     'Solapur',     '400 km', '7h 30m', {sleeper:820, ac:1230, nonAc:615}],
  ['Pune',       'Kolhapur',    '230 km', '4h 30m', {sleeper:510, ac:765, nonAc:383}],
  ['Pune',       'Solapur',     '247 km', '4h 30m', {sleeper:540, ac:810, nonAc:405}],
  ['Pune',       'Aurangabad',  '235 km', '4h 30m', {sleeper:520, ac:780, nonAc:390}],
  ['Pune',       'Nagpur',      '740 km', '12h 00m',{sleeper:1200, ac:1800, nonAc:900}],
  ['Nagpur',     'Amravati',    '155 km', '3h 00m', {sleeper:360, ac:540, nonAc:270}],
  // MP / CG (7)
  ['Bhopal',     'Jabalpur',    '330 km', '6h 00m', {sleeper:690, ac:1035, nonAc:518}],
  ['Bhopal',     'Gwalior',     '425 km', '7h 30m', {sleeper:870, ac:1305, nonAc:653}],
  ['Bhopal',     'Ujjain',      '190 km', '3h 30m', {sleeper:430, ac:645, nonAc:323}],
  ['Indore',     'Ujjain',      '55 km',  '1h 15m', {sleeper:120, ac:180, nonAc:90}],
  ['Raipur',     'Bilaspur',    '130 km', '2h 30m', {sleeper:300, ac:450, nonAc:225}],
  ['Raipur',     'Jagdalpur',   '300 km', '6h 00m', {sleeper:650, ac:975, nonAc:488}],
  ['Nagpur',     'Jabalpur',    '325 km', '5h 30m', {sleeper:680, ac:1020, nonAc:510}],
  // Karnataka (6)
  ['Bangalore',  'Hubli',       '420 km', '7h 00m', {sleeper:860, ac:1290, nonAc:645}],
  ['Bangalore',  'Belgaum',     '505 km', '8h 30m', {sleeper:1020, ac:1530, nonAc:765}],
  ['Bangalore',  'Gulbarga',    '620 km', '10h 00m',{sleeper:1200, ac:1800, nonAc:900}],
  ['Hubli',      'Belgaum',     '98 km',  '2h 00m', {sleeper:230, ac:345, nonAc:173}],
  ['Hubli',      'Goa',         '210 km', '4h 00m', {sleeper:460, ac:690, nonAc:345}],
  ['Bangalore',  'Kochi',       '560 km', '9h 30m', {sleeper:1100, ac:1650, nonAc:825}],
  // Tamil Nadu (8)
  ['Chennai',    'Pondicherry', '160 km', '3h 00m', {sleeper:370, ac:555, nonAc:278}],
  ['Chennai',    'Vellore',     '134 km', '2h 30m', {sleeper:310, ac:465, nonAc:233}],
  ['Chennai',    'Salem',       '340 km', '5h 30m', {sleeper:700, ac:1050, nonAc:525}],
  ['Chennai',    'Trichy',      '330 km', '5h 30m', {sleeper:680, ac:1020, nonAc:510}],
  ['Chennai',    'Tirupati',    '148 km', '3h 00m', {sleeper:340, ac:510, nonAc:255}],
  ['Salem',      'Coimbatore',  '160 km', '3h 00m', {sleeper:370, ac:555, nonAc:278}],
  ['Trichy',     'Madurai',     '135 km', '2h 30m', {sleeper:310, ac:465, nonAc:233}],
  ['Trichy',     'Thanjavur',   '57 km',  '1h 15m', {sleeper:130, ac:195, nonAc:98}],
  // Kerala (4)
  ['Kochi',      'Calicut',     '190 km', '3h 30m', {sleeper:430, ac:645, nonAc:323}],
  ['Kochi',      'Thrissur',    '75 km',  '1h 30m', {sleeper:170, ac:255, nonAc:128}],
  ['Calicut',    'Trivandrum',  '380 km', '7h 00m', {sleeper:780, ac:1170, nonAc:585}],
  ['Thrissur',   'Trivandrum',  '290 km', '5h 30m', {sleeper:630, ac:945, nonAc:473}],
  // Telangana / AP (5)
  ['Hyderabad',  'Warangal',    '145 km', '2h 30m', {sleeper:330, ac:495, nonAc:248}],
  ['Hyderabad',  'Tirupati',    '570 km', '9h 00m', {sleeper:1100, ac:1650, nonAc:825}],
  ['Hyderabad',  'Nellore',     '475 km', '7h 30m', {sleeper:940, ac:1410, nonAc:705}],
  ['Hyderabad',  'Guntur',      '275 km', '4h 30m', {sleeper:580, ac:870, nonAc:435}],
  ['Vijayawada', 'Rajahmundry', '200 km', '3h 30m', {sleeper:450, ac:675, nonAc:338}],
  // East India (7)
  ['Kolkata',    'Siliguri',    '595 km', '10h 00m',{sleeper:1150, ac:1725, nonAc:863}],
  ['Kolkata',    'Durgapur',    '165 km', '3h 00m', {sleeper:380, ac:570, nonAc:285}],
  ['Kolkata',    'Asansol',     '215 km', '3h 30m', {sleeper:480, ac:720, nonAc:360}],
  ['Kolkata',    'Bhubaneswar', '450 km', '8h 00m', {sleeper:900, ac:1350, nonAc:675}],
  ['Patna',      'Kolkata',     '600 km', '10h 30m',{sleeper:1150, ac:1725, nonAc:863}],
  ['Ranchi',     'Jamshedpur',  '135 km', '2h 30m', {sleeper:310, ac:465, nonAc:233}],
  ['Bhubaneswar','Puri',        '60 km',  '1h 30m', {sleeper:140, ac:210, nonAc:105}],
  // Northeast (4)
  ['Guwahati',   'Tezpur',      '180 km', '3h 30m', {sleeper:410, ac:615, nonAc:308}],
  ['Guwahati',   'Silchar',     '350 km', '7h 00m', {sleeper:720, ac:1080, nonAc:540}],
  ['Guwahati',   'Imphal',      '500 km', '10h 00m',{sleeper:1050, ac:1575, nonAc:788}],
  ['Guwahati',   'Agartala',    '620 km', '12h 00m',{sleeper:1250, ac:1875, nonAc:938}],
];

// ── Intermediate stop generator ─────────────────────────────────────────────
function lerp(a, b, t) { return a + (b - a) * t; }

function genStops(fromName, toName, numMid = 2) {
  const from = CITIES[fromName];
  const to   = CITIES[toName];
  const stops = [];

  // Departure stop
  stops.push({
    name: `${fromName} ${from.stand}`,
    lat: from.lat, lng: from.lng,
    arrivalTime: '--', departureTime: '07:00 AM', order: 1
  });

  // Intermediate stops
  for (let i = 1; i <= numMid; i++) {
    const t = i / (numMid + 1);
    const jitter = (Math.random() - 0.5) * 0.15;
    stops.push({
      name: `Waypoint ${i} (${fromName}–${toName})`,
      lat: parseFloat((lerp(from.lat, to.lat, t) + jitter).toFixed(4)),
      lng: parseFloat((lerp(from.lng, to.lng, t) + jitter).toFixed(4)),
      arrivalTime: `0${7 + i}:${i % 2 === 0 ? '00' : '30'} AM`,
      departureTime: `0${7 + i}:${i % 2 === 0 ? '10' : '40'} AM`,
      order: i + 1
    });
  }

  // Arrival stop
  stops.push({
    name: `${toName} ${to.stand}`,
    lat: to.lat, lng: to.lng,
    arrivalTime: '02:00 PM', departureTime: '--',
    order: stops.length + 1
  });

  return stops;
}

function genPolyline(fromName, toName, numMid = 3) {
  const from = CITIES[fromName];
  const to   = CITIES[toName];
  const line = [[from.lat, from.lng]];
  for (let i = 1; i <= numMid; i++) {
    const t = i / (numMid + 1);
    const jitter = (Math.random() - 0.5) * 0.1;
    line.push([
      parseFloat((lerp(from.lat, to.lat, t) + jitter).toFixed(4)),
      parseFloat((lerp(from.lng, to.lng, t) + jitter).toFixed(4))
    ]);
  }
  line.push([to.lat, to.lng]);
  return line;
}

const SCHEDULES_TEMPLATES = [
  [{ dep: '06:00 AM', arr: '12:00 PM' }, { dep: '12:00 PM', arr: '06:00 PM' }, { dep: '10:00 PM', arr: '04:00 AM' }],
  [{ dep: '07:00 AM', arr: '02:00 PM' }, { dep: '03:00 PM', arr: '10:00 PM' }],
  [{ dep: '08:00 AM', arr: '03:00 PM' }, { dep: '08:00 PM', arr: '03:00 AM' }],
  [{ dep: '06:30 AM', arr: '01:30 PM' }, { dep: '01:30 PM', arr: '08:30 PM' }, { dep: '09:00 PM', arr: '04:00 AM' }],
  [{ dep: '09:00 AM', arr: '05:00 PM' }, { dep: '09:00 PM', arr: '05:00 AM' }],
];
const ALL_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

function genSchedule(idx) {
  const tpl = SCHEDULES_TEMPLATES[idx % SCHEDULES_TEMPLATES.length];
  return tpl.map((t, i) => ({
    departureTime: t.dep,
    arrivalTime: t.arr,
    days: i === tpl.length - 1 ? (idx % 3 === 0 ? ALL_DAYS : WEEKDAYS) : ALL_DAYS
  }));
}

// ── Bus types pool ──────────────────────────────────────────────────────────
const BUS_TYPES = [
  { type: 'AC Sleeper',      amenities: ['AC', 'WiFi', 'Blanket', 'Charging Point', 'Water Bottle'] },
  { type: 'AC Semi-Sleeper', amenities: ['AC', 'Charging Point', 'Water Bottle'] },
  { type: 'Volvo AC',        amenities: ['AC', 'WiFi', 'Blanket', 'Snacks', 'Charging Point', 'TV'] },
  { type: 'Non-AC',          amenities: ['Fan', 'Water Bottle'] },
  { type: 'AC Chair Car',    amenities: ['AC', 'Charging Point'] },
  { type: 'Luxury Sleeper',  amenities: ['AC', 'WiFi', 'Blanket', 'Snacks', 'Charging Point', 'TV', 'Water Bottle'] },
];

const BUS_NAMES = [
  'Raj Express','Deccan Queen','Shatabdi Link','Golden Chariot','Silver Arrow',
  'Blue Star','Regal Rider','Sky King','Summit Express','Valley Cruiser',
  'Coastal King','Desert Wind','Mountain Hawk','River Queen','Metro Link',
  'Heritage Express','Royal Rider','Pride of India','Bharat Express','National Cruiser',
  'Sunrise Express','Moonlight Rider','Twilight Star','Aurora Express','Zenith Rider',
  'Horizon Traveller','Pinnacle Express','Summit Rider','Valley Star','Ocean Breeze',
  'City Link','Town Express','Urban Rider','Metro Glide','Rapid Transit',
  'Thunder Express','Lightning Rider','Storm Runner','Cyclone Cruiser','Typhoon Star',
  'Eagle Wings','Falcon Flight','Hawk Rider','Phoenix Express','Dragon Star',
  'Lion King Express','Tiger Force','Cheetah Runner','Panther Rider','Leopard Star',
];

const STATUSES = ['running', 'running', 'running', 'running', 'delayed', 'stopped'];
const DRIVER_IDS = ['d1','d2','d3','d4','d5','d6','d7','d8','d9','d10',
                    'd11','d12','d13','d14','d15','d16','d17','d18','d19','d20'];

function pick(arr, seed) { return arr[seed % arr.length]; }
function randBetween(min, max, seed) { return min + (seed % (max - min + 1)); }

// ── Generate routes ─────────────────────────────────────────────────────────
let routeId = 52;
let busId   = 90;
let nameIdx = 0;
const newRoutes = [];
const newBuses  = [];

// buses per route: cycle 2,3,3,2,3,2,3,3,3,2 → avg ≈ 2.6 → 70 routes → ~182 buses
// We'll distribute to reach 200 exactly.
const busesPerRoute = [];
let totalBuses = 0;
for (let i = 0; i < ROUTE_PAIRS.length; i++) {
  const n = (i % 5 === 0) ? 4 : (i % 3 === 0) ? 2 : 3;
  busesPerRoute.push(n);
  totalBuses += n;
}
// Pad up to 200
let idx = 0;
while (totalBuses < 200) { busesPerRoute[idx % ROUTE_PAIRS.length]++; totalBuses++; idx++; }

ROUTE_PAIRS.forEach(([fromName, toName, distance, duration, fare], i) => {
  const rId = `r${routeId++}`;
  const fromCity = CITIES[fromName];
  const toCity   = CITIES[toName];
  const midCount = 2;

  const stops    = genStops(fromName, toName, midCount);
  const polyline = genPolyline(fromName, toName, 3);
  const schedule = genSchedule(i);

  newRoutes.push({ id: rId, routeName: `${fromName} - ${toName} Express`,
    from: fromName, to: toName, distance, duration, fare, stops, schedule, polyline });

  // Generate buses for this route
  const numBuses = busesPerRoute[i];
  for (let b = 0; b < numBuses; b++) {
    const bId      = `b${busId++}`;
    const busType  = BUS_TYPES[(i + b) % BUS_TYPES.length];
    const busName  = BUS_NAMES[nameIdx++ % BUS_NAMES.length] + (b > 0 ? ` ${b + 1}` : '');
    const code     = fromCity.code;
    const num      = `${code}-${String(busId).padStart(2,'0')}-${String((i * 7 + b * 13 + 1000) % 9000 + 1000)}-${String((b * 17 + i * 11 + 1000) % 9000 + 1000)}`;
    const status   = STATUSES[(i + b) % STATUSES.length];
    const driverId = DRIVER_IDS[(i + b) % DRIVER_IDS.length];
    // Place bus somewhere along the route
    const t = (b + 1) / (numBuses + 1);
    const curLat = parseFloat((fromCity.lat + (toCity.lat - fromCity.lat) * t).toFixed(4));
    const curLng = parseFloat((fromCity.lng + (toCity.lng - fromCity.lng) * t).toFixed(4));

    newBuses.push({
      id: bId, busNumber: num, name: busName,
      type: busType.type, routeId: rId, driverId, status,
      capacity: randBetween(36, 52, i + b),
      amenities: busType.amenities,
      currentLocation: { lat: curLat, lng: curLng }
    });
  }
});

// ── Build JS strings ────────────────────────────────────────────────────────
function jsObj(obj, indent = 2) {
  return JSON.stringify(obj, null, indent)
    .replace(/"([a-zA-Z_][a-zA-Z0-9_]*)"\s*:/g, '$1:')  // unquote keys
    .replace(/"/g, "'");                                    // single quotes
}

const routesJS = newRoutes.map(r => `  ${jsObj(r, 4).replace(/\n/g, '\n  ')}`).join(',\n');
const busesJS  = newBuses.map(b  => `  ${jsObj(b, 4).replace(/\n/g, '\n  ')}`).join(',\n');

// ── Append to seedData.js ───────────────────────────────────────────────────
const seedPath = path.join(__dirname, 'backend', 'data', 'seedData.js');
let content = fs.readFileSync(seedPath, 'utf8');

// Inject routes before `];` that closes the routes array (last `];` before `const buses`)
const routeArrayEnd = content.indexOf('\nconst buses');
content = content.slice(0, routeArrayEnd)
  + `,\n\n  // ── AUTO-GENERATED: 70 new routes ──────────────────────────────\n`
  + routesJS
  + '\n];\n\nconst buses'
  + content.slice(routeArrayEnd + '\nconst buses'.length);

// Inject buses before the closing `];` of the buses array
const busArrayEnd = content.indexOf('\n];\n\nconst defaultUsers');
content = content.slice(0, busArrayEnd)
  + `,\n\n  // ── AUTO-GENERATED: 200 new buses ──────────────────────────────\n`
  + busesJS
  + '\n];\n\nconst defaultUsers'
  + content.slice(busArrayEnd + '\n];\n\nconst defaultUsers'.length);

fs.writeFileSync(seedPath, content, 'utf8');

console.log(`✅ Done!`);
console.log(`   Routes added : ${newRoutes.length} (r52–r${routeId - 1})`);
console.log(`   Buses added  : ${newBuses.length} (b90–b${busId - 1})`);
console.log(`   Total buses  : ${newBuses.length} (target 200)`);
