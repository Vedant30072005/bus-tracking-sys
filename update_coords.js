const fs = require('fs');

const cityCoords = {
  'Ahmedabad': { lat: 23.0225, lng: 72.5714 },
  'Surat': { lat: 21.1702, lng: 72.8311 },
  'Vadodara': { lat: 22.3072, lng: 73.1812 },
  'Rajkot': { lat: 22.3039, lng: 70.8022 },
  'Bhuj': { lat: 23.2420, lng: 69.6669 },
  'Bhavnagar': { lat: 21.7645, lng: 72.1519 },
  'Mehsana': { lat: 23.5880, lng: 72.3693 },
  'Gandhinagar': { lat: 23.2156, lng: 72.6369 },
  'Dwarka': { lat: 22.2442, lng: 68.9685 },
  'Somnath': { lat: 20.8880, lng: 70.4012 },
  'Junagadh': { lat: 21.5222, lng: 70.4579 },
  'Palanpur': { lat: 24.1724, lng: 72.4346 },
  'Dahod': { lat: 22.8315, lng: 74.2573 },
  'Morbi': { lat: 22.8120, lng: 70.8320 },
  'Bharuch': { lat: 21.7051, lng: 72.9959 },
  'Jamnagar': { lat: 22.4707, lng: 70.0577 },
  'Porbandar': { lat: 21.6417, lng: 69.6293 }
};

let content = fs.readFileSync('backend/data/seedData.js', 'utf8');

for (const [city, coords] of Object.entries(cityCoords)) {
  // Replace in stops array
  // We look for name: 'City Bus Stand', lat: 23.0, lng: 72.0 or lat: 23.5, lng: 72.5
  
  const regex1 = new RegExp(`name: '${city} Bus Stand', lat: 23\\.0, lng: 72\\.0`, 'g');
  const regex2 = new RegExp(`name: '${city} Bus Stand', lat: 23\\.5, lng: 72\\.5`, 'g');
  
  content = content.replace(regex1, `name: '${city} Bus Stand', lat: ${coords.lat}, lng: ${coords.lng}`);
  content = content.replace(regex2, `name: '${city} Bus Stand', lat: ${coords.lat}, lng: ${coords.lng}`);
}

fs.writeFileSync('backend/data/seedData.js', content);
console.log('Coordinates updated successfully!');
