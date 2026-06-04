const fs = require('fs');

const routesData = `Ahmedabad → Surat: 06:00 Volvo ₹520, 08:30 AC ₹380, 10:00 Non-AC ₹200, 14:00 Non-AC ₹200, 22:00 Sleeper ₹450
Ahmedabad → Vadodara: 06:00 Volvo ₹320, 07:30 AC ₹220, 09:00 Non-AC ₹120, 12:00 Non-AC ₹120, 21:00 Sleeper ₹280
Ahmedabad → Rajkot: 07:00 Volvo ₹480, 09:00 AC ₹340, 11:00 Non-AC ₹180, 23:00 Sleeper ₹420
Ahmedabad → Bhuj: 07:30 Volvo ₹580, 10:00 AC ₹420, 22:30 Sleeper ₹500
Ahmedabad → Bhavnagar: 08:00 Volvo ₹420, 10:00 AC ₹300, 22:30 Sleeper ₹380
Ahmedabad → Mehsana: 07:00 Non-AC ₹80, 09:00 Non-AC ₹80, 12:00 AC ₹140
Ahmedabad → Gandhinagar: 06:30 Non-AC ₹40, 08:00 Non-AC ₹40
Ahmedabad → Dwarka: 21:00 Sleeper ₹580
Ahmedabad → Somnath: 21:30 Sleeper ₹560
Ahmedabad → Junagadh: 22:00 Sleeper ₹480
Ahmedabad → Palanpur: 07:00 Non-AC ₹110, 10:00 AC ₹180
Ahmedabad → Dahod: 08:00 Non-AC ₹180
Ahmedabad → Morbi: 09:00 Non-AC ₹160
Vadodara → Surat: 06:30 Volvo ₹350, 08:00 AC ₹250, 10:00 Non-AC ₹140, 15:00 Non-AC ₹140, 22:00 Sleeper ₹320
Vadodara → Bharuch: 07:00 Non-AC ₹80, 11:00 Non-AC ₹80
Vadodara → Rajkot: 08:00 AC ₹360, 22:00 Sleeper ₹420
Surat → Rajkot: 08:00 Volvo ₹560, 21:00 Sleeper ₹480
Rajkot → Junagadh: 07:00 Non-AC ₹100, 10:00 AC ₹160, 14:00 Non-AC ₹100
Rajkot → Jamnagar: 06:30 Non-AC ₹90, 09:00 AC ₹150
Rajkot → Porbandar: 07:00 Non-AC ₹140
Rajkot → Dwarka: 08:00 AC ₹280`;

let rId = 11;
let bId = 20;

const newRoutes = [];
const newBuses = [];

routesData.split('\n').forEach(line => {
  if (!line.trim()) return;
  const [routeStr, schedulesStr] = line.split(': ');
  const [from, to] = routeStr.split(' → ');
  
  const fare = {};
  const schedules = schedulesStr.split(', ').map(s => {
    const parts = s.split(' ');
    const time = parts[0];
    const type = parts[1];
    const priceStr = parts[2].replace('₹', '');
    fare[type.toLowerCase()] = parseInt(priceStr);
    
    // convert time to AM/PM
    const [h, m] = time.split(':');
    let hInt = parseInt(h);
    const ampm = hInt >= 12 ? 'PM' : 'AM';
    if (hInt > 12) hInt -= 12;
    if (hInt === 0) hInt = 12;
    const timeStr = `${hInt < 10 ? '0'+hInt : hInt}:${m} ${ampm}`;
    
    // add bus
    newBuses.push(`  { id: 'b${bId++}', busNumber: 'GJ-01-XX-${Math.floor(1000+Math.random()*9000)}', name: '${type} Express', type: '${type}', routeId: 'r${rId}', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } }`);
    
    return `{ departureTime: '${timeStr}', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }`;
  });
  
  let fareStr = [];
  for (let [k,v] of Object.entries(fare)) {
    fareStr.push(`"${k}": ${v}`);
  }
  
  newRoutes.push(`  {
    id: 'r${rId}',
    routeName: '${from} - ${to}',
    from: '${from}',
    to: '${to}',
    distance: '--',
    duration: '--',
    fare: { ${fareStr.join(', ')} },
    stops: [
      { name: '${from} Bus Stand', lat: 23.0, lng: 72.0, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: '${to} Bus Stand', lat: 23.5, lng: 72.5, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [\n      ${schedules.join(',\n      ')}\n    ],
    polyline: []
  }`);
  
  rId++;
});

const content = fs.readFileSync('backend/data/seedData.js', 'utf8');

const updatedContent = content
  .replace('];\n\nconst buses', ',\n' + newRoutes.join(',\n') + '\n];\n\nconst buses')
  .replace('];\n\nconst defaultUsers', ',\n' + newBuses.join(',\n') + '\n];\n\nconst defaultUsers');

fs.writeFileSync('backend/data/seedData.js', updatedContent);
console.log('Seed data updated successfully!');
