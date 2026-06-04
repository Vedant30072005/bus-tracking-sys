// ============================================================
// SEED DATA — Realistic Indian Bus Routes, Schedules & Drivers
// ============================================================

const drivers = [
  {
    id: 'd1',
    name: 'Rajesh Kumar',
    phone: '+91 98765 43210',
    license: 'MH-0120210045678',
    rating: 4.8,
    experience: '12 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Rajesh'
  },
  {
    id: 'd2',
    name: 'Suresh Patil',
    phone: '+91 87654 32109',
    license: 'MH-0220190034567',
    rating: 4.6,
    experience: '8 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Suresh'
  },
  {
    id: 'd3',
    name: 'Amit Singh',
    phone: '+91 76543 21098',
    license: 'DL-0520200023456',
    rating: 4.9,
    experience: '15 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Amit'
  },
  {
    id: 'd4',
    name: 'Vikram Sharma',
    phone: '+91 65432 10987',
    license: 'RJ-1420180012345',
    rating: 4.7,
    experience: '10 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Vikram'
  },
  {
    id: 'd5',
    name: 'Pradeep Reddy',
    phone: '+91 54321 09876',
    license: 'KA-0120210056789',
    rating: 4.5,
    experience: '6 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Pradeep'
  },
  {
    id: 'd6',
    name: 'Manoj Tiwari',
    phone: '+91 43210 98765',
    license: 'UP-3220190045678',
    rating: 4.8,
    experience: '14 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Manoj'
  },
  {
    id: 'd7',
    name: 'Karthik Nair',
    phone: '+91 32109 87654',
    license: 'KL-0120200034567',
    rating: 4.4,
    experience: '5 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Karthik'
  },
  {
    id: 'd8',
    name: 'Ramesh Yadav',
    phone: '+91 21098 76543',
    license: 'GJ-0120180023456',
    rating: 4.7,
    experience: '11 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Ramesh'
  },
  {
    id: 'd9',
    name: 'Sanjay Deshmukh',
    phone: '+91 10987 65432',
    license: 'MH-1220210012345',
    rating: 4.6,
    experience: '9 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Sanjay'
  },
  {
    id: 'd10',
    name: 'Arjun Mehta',
    phone: '+91 99887 76655',
    license: 'GJ-0620200067890',
    rating: 4.9,
    experience: '13 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Arjun'
  },
  {
    id: 'd11',
    name: 'Biplab Das',
    phone: '+91 94321 11223',
    license: 'AS-0120190056789',
    rating: 4.6,
    experience: '9 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Biplab'
  },
  {
    id: 'd12',
    name: 'Sourav Ghosh',
    phone: '+91 83456 22334',
    license: 'WB-0120210034567',
    rating: 4.7,
    experience: '11 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Sourav'
  },
  {
    id: 'd13',
    name: 'Naresh Babu',
    phone: '+91 72345 33445',
    license: 'AP-0120200023456',
    rating: 4.8,
    experience: '14 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Naresh'
  },
  {
    id: 'd14',
    name: 'Sunil Chavan',
    phone: '+91 61234 44556',
    license: 'MH-0320190012345',
    rating: 4.5,
    experience: '7 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Sunil'
  },
  {
    id: 'd15',
    name: 'Harpreet Singh',
    phone: '+91 50123 55667',
    license: 'PB-0120200078901',
    rating: 4.9,
    experience: '16 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Harpreet'
  },
  {
    id: 'd16',
    name: 'Thomas Mathew',
    phone: '+91 49012 66778',
    license: 'KL-0320210067890',
    rating: 4.7,
    experience: '10 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Thomas'
  },
  {
    id: 'd17',
    name: 'Dinesh Patel',
    phone: '+91 38901 77889',
    license: 'MP-0120200056789',
    rating: 4.6,
    experience: '8 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Dinesh'
  },
  {
    id: 'd18',
    name: 'Ranjit Thapa',
    phone: '+91 27890 88990',
    license: 'SK-0120190045678',
    rating: 4.8,
    experience: '12 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Ranjit'
  },
  {
    id: 'd19',
    name: 'Abdul Karim',
    phone: '+91 16789 99001',
    license: 'JK-0120200034567',
    rating: 4.4,
    experience: '6 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Abdul'
  },
  {
    id: 'd20',
    name: 'Prem Chand',
    phone: '+91 95678 00112',
    license: 'CG-0120210023456',
    rating: 4.7,
    experience: '13 years',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Prem'
  }
];

const routes = [
  {
    id: 'r1',
    routeName: 'Mumbai - Pune Expressway',
    from: 'Mumbai',
    to: 'Pune',
    distance: '150 km',
    duration: '3h 30m',
    fare: { sleeper: 450, ac: 650, nonAc: 350 },
    stops: [
      { name: 'Mumbai Central Bus Stand', lat: 18.9690, lng: 72.8194, arrivalTime: '--', departureTime: '06:00 AM', order: 1 },
      { name: 'Dadar TT', lat: 19.0178, lng: 72.8478, arrivalTime: '06:20 AM', departureTime: '06:25 AM', order: 2 },
      { name: 'Vashi Toll Naka', lat: 19.0771, lng: 73.0071, arrivalTime: '06:50 AM', departureTime: '06:55 AM', order: 3 },
      { name: 'Panvel Bus Stand', lat: 18.9894, lng: 73.1175, arrivalTime: '07:20 AM', departureTime: '07:30 AM', order: 4 },
      { name: 'Lonavala Bus Stand', lat: 18.7546, lng: 73.4062, arrivalTime: '08:15 AM', departureTime: '08:25 AM', order: 5 },
      { name: 'Khandala', lat: 18.7603, lng: 73.3707, arrivalTime: '08:35 AM', departureTime: '08:40 AM', order: 6 },
      { name: 'Pune - Shivajinagar', lat: 18.5308, lng: 73.8475, arrivalTime: '09:20 AM', departureTime: '09:25 AM', order: 7 },
      { name: 'Pune - Swargate', lat: 18.5018, lng: 73.8636, arrivalTime: '09:30 AM', departureTime: '--', order: 8 }
    ],
    schedule: [
      { departureTime: '06:00 AM', arrivalTime: '09:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '08:00 AM', arrivalTime: '11:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 AM', arrivalTime: '01:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
      { departureTime: '02:00 PM', arrivalTime: '05:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '06:00 PM', arrivalTime: '09:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 PM', arrivalTime: '01:30 AM', days: ['Mon', 'Wed', 'Fri', 'Sun'] }
    ],
    polyline: [
      [18.9690, 72.8194], [19.0178, 72.8478], [19.0771, 73.0071],
      [18.9894, 73.1175], [18.7546, 73.4062], [18.7603, 73.3707],
      [18.5308, 73.8475], [18.5018, 73.8636]
    ]
  },
  {
    id: 'r2',
    routeName: 'Delhi - Jaipur Highway',
    from: 'Delhi',
    to: 'Jaipur',
    distance: '280 km',
    duration: '5h 30m',
    fare: { sleeper: 700, ac: 1000, nonAc: 500 },
    stops: [
      { name: 'Delhi ISBT Kashmere Gate', lat: 28.6672, lng: 77.2284, arrivalTime: '--', departureTime: '06:00 AM', order: 1 },
      { name: 'Dhaula Kuan', lat: 28.5921, lng: 77.1667, arrivalTime: '06:30 AM', departureTime: '06:35 AM', order: 2 },
      { name: 'Gurugram Bus Stand', lat: 28.4595, lng: 77.0266, arrivalTime: '07:10 AM', departureTime: '07:20 AM', order: 3 },
      { name: 'Manesar', lat: 28.3571, lng: 76.9346, arrivalTime: '07:45 AM', departureTime: '07:50 AM', order: 4 },
      { name: 'Dharuhera', lat: 28.2070, lng: 76.7965, arrivalTime: '08:20 AM', departureTime: '08:25 AM', order: 5 },
      { name: 'Neemrana', lat: 27.9860, lng: 76.3874, arrivalTime: '09:15 AM', departureTime: '09:25 AM', order: 6 },
      { name: 'Behror', lat: 27.8886, lng: 76.2829, arrivalTime: '09:50 AM', departureTime: '09:55 AM', order: 7 },
      { name: 'Shahpura', lat: 27.3867, lng: 75.9586, arrivalTime: '10:45 AM', departureTime: '10:50 AM', order: 8 },
      { name: 'Jaipur - Sindhi Camp', lat: 26.9157, lng: 75.7880, arrivalTime: '11:30 AM', departureTime: '--', order: 9 }
    ],
    schedule: [
      { departureTime: '06:00 AM', arrivalTime: '11:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '09:00 AM', arrivalTime: '02:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '02:00 PM', arrivalTime: '07:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
      { departureTime: '10:00 PM', arrivalTime: '03:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: [
      [28.6672, 77.2284], [28.5921, 77.1667], [28.4595, 77.0266],
      [28.3571, 76.9346], [28.2070, 76.7965], [27.9860, 76.3874],
      [27.8886, 76.2829], [27.3867, 75.9586], [26.9157, 75.7880]
    ]
  },
  {
    id: 'r3',
    routeName: 'Bangalore - Chennai Corridor',
    from: 'Bangalore',
    to: 'Chennai',
    distance: '350 km',
    duration: '6h 00m',
    fare: { sleeper: 800, ac: 1200, nonAc: 600 },
    stops: [
      { name: 'Bangalore Majestic Bus Stand', lat: 12.9772, lng: 77.5724, arrivalTime: '--', departureTime: '07:00 AM', order: 1 },
      { name: 'Electronics City', lat: 12.8458, lng: 77.6712, arrivalTime: '07:35 AM', departureTime: '07:40 AM', order: 2 },
      { name: 'Hosur', lat: 12.7409, lng: 77.8253, arrivalTime: '08:10 AM', departureTime: '08:20 AM', order: 3 },
      { name: 'Krishnagiri', lat: 12.5186, lng: 78.2137, arrivalTime: '09:20 AM', departureTime: '09:30 AM', order: 4 },
      { name: 'Vellore', lat: 12.9165, lng: 79.1325, arrivalTime: '10:45 AM', departureTime: '10:55 AM', order: 5 },
      { name: 'Kanchipuram', lat: 12.8342, lng: 79.7036, arrivalTime: '11:45 AM', departureTime: '11:55 AM', order: 6 },
      { name: 'Chennai - Koyambedu', lat: 13.0694, lng: 80.1948, arrivalTime: '01:00 PM', departureTime: '--', order: 7 }
    ],
    schedule: [
      { departureTime: '07:00 AM', arrivalTime: '01:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 AM', arrivalTime: '04:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
      { departureTime: '03:00 PM', arrivalTime: '09:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '11:00 PM', arrivalTime: '05:00 AM', days: ['Mon', 'Wed', 'Fri', 'Sun'] }
    ],
    polyline: [
      [12.9772, 77.5724], [12.8458, 77.6712], [12.7409, 77.8253],
      [12.5186, 78.2137], [12.9165, 79.1325], [12.8342, 79.7036],
      [13.0694, 80.1948]
    ]
  },
  {
    id: 'r4',
    routeName: 'Hyderabad - Vijayawada Express',
    from: 'Hyderabad',
    to: 'Vijayawada',
    distance: '275 km',
    duration: '5h 00m',
    fare: { sleeper: 600, ac: 900, nonAc: 450 },
    stops: [
      { name: 'Hyderabad MGBS', lat: 17.3784, lng: 78.4839, arrivalTime: '--', departureTime: '06:30 AM', order: 1 },
      { name: 'LB Nagar', lat: 17.3457, lng: 78.5522, arrivalTime: '07:00 AM', departureTime: '07:05 AM', order: 2 },
      { name: 'Choutuppal', lat: 17.2498, lng: 78.8956, arrivalTime: '07:50 AM', departureTime: '08:00 AM', order: 3 },
      { name: 'Suryapet', lat: 17.1421, lng: 79.6284, arrivalTime: '09:00 AM', departureTime: '09:15 AM', order: 4 },
      { name: 'Kodad', lat: 16.9964, lng: 79.9682, arrivalTime: '09:50 AM', departureTime: '10:00 AM', order: 5 },
      { name: 'Nandigama', lat: 16.7714, lng: 80.2872, arrivalTime: '10:45 AM', departureTime: '10:50 AM', order: 6 },
      { name: 'Vijayawada - Pandit Nehru Bus Stand', lat: 16.5193, lng: 80.6305, arrivalTime: '11:30 AM', departureTime: '--', order: 7 }
    ],
    schedule: [
      { departureTime: '06:30 AM', arrivalTime: '11:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 AM', arrivalTime: '03:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '04:00 PM', arrivalTime: '09:00 PM', days: ['Mon', 'Wed', 'Fri', 'Sat'] },
      { departureTime: '10:30 PM', arrivalTime: '03:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: [
      [17.3784, 78.4839], [17.3457, 78.5522], [17.2498, 78.8956],
      [17.1421, 79.6284], [16.9964, 79.9682], [16.7714, 80.2872],
      [16.5193, 80.6305]
    ]
  },
  {
    id: 'r5',
    routeName: 'Ahmedabad - Udaipur Scenic',
    from: 'Ahmedabad',
    to: 'Udaipur',
    distance: '260 km',
    duration: '5h 00m',
    fare: { sleeper: 550, ac: 850, nonAc: 400 },
    stops: [
      { name: 'Ahmedabad Central Bus Stand', lat: 23.0225, lng: 72.5714, arrivalTime: '--', departureTime: '07:00 AM', order: 1 },
      { name: 'Bagodara', lat: 22.6695, lng: 72.1252, arrivalTime: '07:50 AM', departureTime: '07:55 AM', order: 2 },
      { name: 'Limbdi', lat: 22.5657, lng: 71.8115, arrivalTime: '08:25 AM', departureTime: '08:30 AM', order: 3 },
      { name: 'Himmatnagar', lat: 23.5880, lng: 72.9660, arrivalTime: '09:30 AM', departureTime: '09:40 AM', order: 4 },
      { name: 'Dungarpur', lat: 23.8437, lng: 73.7186, arrivalTime: '10:45 AM', departureTime: '10:55 AM', order: 5 },
      { name: 'Udaipur - UIT Circle', lat: 24.5854, lng: 73.7125, arrivalTime: '12:00 PM', departureTime: '--', order: 6 }
    ],
    schedule: [
      { departureTime: '07:00 AM', arrivalTime: '12:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '11:00 AM', arrivalTime: '04:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
      { departureTime: '05:00 PM', arrivalTime: '10:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '11:00 PM', arrivalTime: '04:00 AM', days: ['Fri', 'Sat', 'Sun'] }
    ],
    polyline: [
      [23.0225, 72.5714], [22.6695, 72.1252], [22.5657, 71.8115],
      [23.5880, 72.9660], [23.8437, 73.7186], [24.5854, 73.7125]
    ]
  },
  {
    id: 'r6',
    routeName: 'Kolkata - Digha Coastal',
    from: 'Kolkata',
    to: 'Digha',
    distance: '185 km',
    duration: '4h 00m',
    fare: { sleeper: 400, ac: 600, nonAc: 300 },
    stops: [
      { name: 'Kolkata Esplanade Bus Stand', lat: 22.5626, lng: 88.3513, arrivalTime: '--', departureTime: '06:30 AM', order: 1 },
      { name: 'Kolaghat', lat: 22.4225, lng: 87.8813, arrivalTime: '07:45 AM', departureTime: '07:55 AM', order: 2 },
      { name: 'Mecheda', lat: 22.3981, lng: 87.8256, arrivalTime: '08:10 AM', departureTime: '08:15 AM', order: 3 },
      { name: 'Contai', lat: 21.7925, lng: 87.7484, arrivalTime: '09:20 AM', departureTime: '09:30 AM', order: 4 },
      { name: 'Ramnagar', lat: 21.6549, lng: 87.6666, arrivalTime: '09:55 AM', departureTime: '10:00 AM', order: 5 },
      { name: 'Digha Bus Stand', lat: 21.6277, lng: 87.5092, arrivalTime: '10:30 AM', departureTime: '--', order: 6 }
    ],
    schedule: [
      { departureTime: '06:30 AM', arrivalTime: '10:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '09:00 AM', arrivalTime: '01:00 PM', days: ['Sat', 'Sun'] },
      { departureTime: '02:00 PM', arrivalTime: '06:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: [
      [22.5626, 88.3513], [22.4225, 87.8813], [22.3981, 87.8256],
      [21.7925, 87.7484], [21.6549, 87.6666], [21.6277, 87.5092]
    ]
  },
  {
    id: 'r7',
    routeName: 'Lucknow - Varanasi Express',
    from: 'Lucknow',
    to: 'Varanasi',
    distance: '320 km',
    duration: '6h 30m',
    fare: { sleeper: 650, ac: 950, nonAc: 480 },
    stops: [
      { name: 'Lucknow Alambagh Bus Stand', lat: 26.8170, lng: 80.8930, arrivalTime: '--', departureTime: '06:00 AM', order: 1 },
      { name: 'Barabanki', lat: 26.9319, lng: 81.1744, arrivalTime: '06:45 AM', departureTime: '06:50 AM', order: 2 },
      { name: 'Faizabad', lat: 26.7735, lng: 82.1447, arrivalTime: '08:00 AM', departureTime: '08:15 AM', order: 3 },
      { name: 'Sultanpur', lat: 26.2648, lng: 82.0727, arrivalTime: '09:15 AM', departureTime: '09:25 AM', order: 4 },
      { name: 'Jaunpur', lat: 25.7464, lng: 82.6836, arrivalTime: '10:30 AM', departureTime: '10:45 AM', order: 5 },
      { name: 'Varanasi - Cantt Bus Stand', lat: 25.3176, lng: 83.0103, arrivalTime: '12:30 PM', departureTime: '--', order: 6 }
    ],
    schedule: [
      { departureTime: '06:00 AM', arrivalTime: '12:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '12:00 PM', arrivalTime: '06:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
      { departureTime: '09:00 PM', arrivalTime: '03:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: [
      [26.8170, 80.8930], [26.9319, 81.1744], [26.7735, 82.1447],
      [26.2648, 82.0727], [25.7464, 82.6836], [25.3176, 83.0103]
    ]
  },
  {
    id: 'r8',
    routeName: 'Pune - Goa Coastal Highway',
    from: 'Pune',
    to: 'Goa',
    distance: '450 km',
    duration: '9h 00m',
    fare: { sleeper: 900, ac: 1400, nonAc: 700 },
    stops: [
      { name: 'Pune - Swargate', lat: 18.5018, lng: 73.8636, arrivalTime: '--', departureTime: '08:00 PM', order: 1 },
      { name: 'Satara', lat: 17.6805, lng: 74.0183, arrivalTime: '09:30 PM', departureTime: '09:40 PM', order: 2 },
      { name: 'Karad', lat: 17.2862, lng: 74.1837, arrivalTime: '10:20 PM', departureTime: '10:30 PM', order: 3 },
      { name: 'Kolhapur', lat: 16.7050, lng: 74.2433, arrivalTime: '11:45 PM', departureTime: '12:00 AM', order: 4 },
      { name: 'Belgaum (Belagavi)', lat: 15.8497, lng: 74.4977, arrivalTime: '01:30 AM', departureTime: '01:45 AM', order: 5 },
      { name: 'Mapusa (Goa)', lat: 15.5937, lng: 73.8097, arrivalTime: '04:00 AM', departureTime: '04:10 AM', order: 6 },
      { name: 'Panaji - Kadamba Bus Stand', lat: 15.4990, lng: 73.8278, arrivalTime: '05:00 AM', departureTime: '--', order: 7 }
    ],
    schedule: [
      { departureTime: '08:00 PM', arrivalTime: '05:00 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 PM', arrivalTime: '07:00 AM', days: ['Fri', 'Sat', 'Sun'] },
      { departureTime: '07:00 AM', arrivalTime: '04:00 PM', days: ['Mon', 'Wed', 'Fri'] }
    ],
    polyline: [
      [18.5018, 73.8636], [17.6805, 74.0183], [17.2862, 74.1837],
      [16.7050, 74.2433], [15.8497, 74.4977], [15.5937, 73.8097],
      [15.4990, 73.8278]
    ]
  },
  {
    id: 'r9',
    routeName: 'Chennai - Coimbatore Express',
    from: 'Chennai',
    to: 'Coimbatore',
    distance: '505 km',
    duration: '8h 30m',
    fare: { sleeper: 850, ac: 1300, nonAc: 650 },
    stops: [
      { name: 'Chennai - Koyambedu', lat: 13.0694, lng: 80.1948, arrivalTime: '--', departureTime: '10:00 PM', order: 1 },
      { name: 'Vellore', lat: 12.9165, lng: 79.1325, arrivalTime: '11:15 PM', departureTime: '11:25 PM', order: 2 },
      { name: 'Salem', lat: 11.6643, lng: 78.1460, arrivalTime: '01:30 AM', departureTime: '01:45 AM', order: 3 },
      { name: 'Erode', lat: 11.3410, lng: 77.7172, arrivalTime: '03:00 AM', departureTime: '03:15 AM', order: 4 },
      { name: 'Tiruppur', lat: 11.1085, lng: 77.3411, arrivalTime: '04:30 AM', departureTime: '04:40 AM', order: 5 },
      { name: 'Coimbatore - Gandhipuram', lat: 11.0168, lng: 76.9558, arrivalTime: '06:30 AM', departureTime: '--', order: 6 }
    ],
    schedule: [
      { departureTime: '10:00 PM', arrivalTime: '06:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '11:30 PM', arrivalTime: '08:00 AM', days: ['Mon', 'Wed', 'Fri'] },
      { departureTime: '06:00 AM', arrivalTime: '02:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] }
    ],
    polyline: [
      [13.0694, 80.1948], [12.9165, 79.1325], [11.6643, 78.1460],
      [11.3410, 77.7172], [11.1085, 77.3411], [11.0168, 76.9558]
    ]
  },
  {
    id: 'r10',
    routeName: 'Delhi - Chandigarh Volvo',
    from: 'Delhi',
    to: 'Chandigarh',
    distance: '250 km',
    duration: '4h 30m',
    fare: { sleeper: 500, ac: 800, nonAc: 380 },
    stops: [
      { name: 'Delhi ISBT Kashmere Gate', lat: 28.6672, lng: 77.2284, arrivalTime: '--', departureTime: '06:00 AM', order: 1 },
      { name: 'Murthal', lat: 28.9954, lng: 77.0475, arrivalTime: '06:50 AM', departureTime: '07:00 AM', order: 2 },
      { name: 'Panipat', lat: 29.3909, lng: 76.9635, arrivalTime: '07:40 AM', departureTime: '07:50 AM', order: 3 },
      { name: 'Karnal', lat: 29.6857, lng: 76.9905, arrivalTime: '08:25 AM', departureTime: '08:35 AM', order: 4 },
      { name: 'Ambala', lat: 30.3782, lng: 76.7767, arrivalTime: '09:30 AM', departureTime: '09:40 AM', order: 5 },
      { name: 'Zirakpur', lat: 30.6434, lng: 76.8173, arrivalTime: '10:10 AM', departureTime: '10:15 AM', order: 6 },
      { name: 'Chandigarh - Sector 43 Bus Stand', lat: 30.7333, lng: 76.7794, arrivalTime: '10:30 AM', departureTime: '--', order: 7 }
    ],
    schedule: [
      { departureTime: '06:00 AM', arrivalTime: '10:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '08:00 AM', arrivalTime: '12:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '12:00 PM', arrivalTime: '04:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
      { departureTime: '04:00 PM', arrivalTime: '08:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 PM', arrivalTime: '02:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: [
      [28.6672, 77.2284], [28.9954, 77.0475], [29.3909, 76.9635],
      [29.6857, 76.9905], [30.3782, 76.7767], [30.6434, 76.8173],
      [30.7333, 76.7794]
    ]
  }
,
  {
    id: 'r11',
    routeName: 'Ahmedabad - Surat',
    from: 'Ahmedabad',
    to: 'Surat',
    distance: '--',
    duration: '--',
    fare: { "volvo": 520, "ac": 380, "non-ac": 200, "sleeper": 450 },
    stops: [
      { name: 'Ahmedabad Bus Stand', lat: 23.0225, lng: 72.5714, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Surat Bus Stand', lat: 21.1702, lng: 72.8311, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '06:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '08:30 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '02:00 PM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 PM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r12',
    routeName: 'Ahmedabad - Vadodara',
    from: 'Ahmedabad',
    to: 'Vadodara',
    distance: '--',
    duration: '--',
    fare: { "volvo": 320, "ac": 220, "non-ac": 120, "sleeper": 280 },
    stops: [
      { name: 'Ahmedabad Bus Stand', lat: 23.0225, lng: 72.5714, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Vadodara Bus Stand', lat: 22.3072, lng: 73.1812, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '06:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '07:30 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '09:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '12:00 PM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '09:00 PM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r13',
    routeName: 'Ahmedabad - Rajkot',
    from: 'Ahmedabad',
    to: 'Rajkot',
    distance: '--',
    duration: '--',
    fare: { "volvo": 480, "ac": 340, "non-ac": 180, "sleeper": 420 },
    stops: [
      { name: 'Ahmedabad Bus Stand', lat: 23.0225, lng: 72.5714, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Rajkot Bus Stand', lat: 22.3039, lng: 70.8022, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '07:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '09:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '11:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '11:00 PM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r14',
    routeName: 'Ahmedabad - Bhuj',
    from: 'Ahmedabad',
    to: 'Bhuj',
    distance: '--',
    duration: '--',
    fare: { "volvo": 580, "ac": 420, "sleeper": 500 },
    stops: [
      { name: 'Ahmedabad Bus Stand', lat: 23.0225, lng: 72.5714, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Bhuj Bus Stand', lat: 23.242, lng: 69.6669, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '07:30 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:30 PM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r15',
    routeName: 'Ahmedabad - Bhavnagar',
    from: 'Ahmedabad',
    to: 'Bhavnagar',
    distance: '--',
    duration: '--',
    fare: { "volvo": 420, "ac": 300, "sleeper": 380 },
    stops: [
      { name: 'Ahmedabad Bus Stand', lat: 23.0225, lng: 72.5714, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Bhavnagar Bus Stand', lat: 21.7645, lng: 72.1519, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '08:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:30 PM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r16',
    routeName: 'Ahmedabad - Mehsana',
    from: 'Ahmedabad',
    to: 'Mehsana',
    distance: '--',
    duration: '--',
    fare: { "non-ac": 80, "ac": 140 },
    stops: [
      { name: 'Ahmedabad Bus Stand', lat: 23.0225, lng: 72.5714, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Mehsana Bus Stand', lat: 23.588, lng: 72.3693, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '07:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '09:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '12:00 PM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r17',
    routeName: 'Ahmedabad - Gandhinagar',
    from: 'Ahmedabad',
    to: 'Gandhinagar',
    distance: '--',
    duration: '--',
    fare: { "non-ac": 40 },
    stops: [
      { name: 'Ahmedabad Bus Stand', lat: 23.0225, lng: 72.5714, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Gandhinagar Bus Stand', lat: 23.2156, lng: 72.6369, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '06:30 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '08:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r18',
    routeName: 'Ahmedabad - Dwarka',
    from: 'Ahmedabad',
    to: 'Dwarka',
    distance: '--',
    duration: '--',
    fare: { "sleeper": 580 },
    stops: [
      { name: 'Ahmedabad Bus Stand', lat: 23.0225, lng: 72.5714, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Dwarka Bus Stand', lat: 22.2442, lng: 68.9685, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '09:00 PM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r19',
    routeName: 'Ahmedabad - Somnath',
    from: 'Ahmedabad',
    to: 'Somnath',
    distance: '--',
    duration: '--',
    fare: { "sleeper": 560 },
    stops: [
      { name: 'Ahmedabad Bus Stand', lat: 23.0225, lng: 72.5714, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Somnath Bus Stand', lat: 20.888, lng: 70.4012, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '09:30 PM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r20',
    routeName: 'Ahmedabad - Junagadh',
    from: 'Ahmedabad',
    to: 'Junagadh',
    distance: '--',
    duration: '--',
    fare: { "sleeper": 480 },
    stops: [
      { name: 'Ahmedabad Bus Stand', lat: 23.0225, lng: 72.5714, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Junagadh Bus Stand', lat: 21.5222, lng: 70.4579, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '10:00 PM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r21',
    routeName: 'Ahmedabad - Palanpur',
    from: 'Ahmedabad',
    to: 'Palanpur',
    distance: '--',
    duration: '--',
    fare: { "non-ac": 110, "ac": 180 },
    stops: [
      { name: 'Ahmedabad Bus Stand', lat: 23.0225, lng: 72.5714, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Palanpur Bus Stand', lat: 24.1724, lng: 72.4346, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '07:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r22',
    routeName: 'Ahmedabad - Dahod',
    from: 'Ahmedabad',
    to: 'Dahod',
    distance: '--',
    duration: '--',
    fare: { "non-ac": 180 },
    stops: [
      { name: 'Ahmedabad Bus Stand', lat: 23.0225, lng: 72.5714, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Dahod Bus Stand', lat: 22.8315, lng: 74.2573, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '08:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r23',
    routeName: 'Ahmedabad - Morbi',
    from: 'Ahmedabad',
    to: 'Morbi',
    distance: '--',
    duration: '--',
    fare: { "non-ac": 160 },
    stops: [
      { name: 'Ahmedabad Bus Stand', lat: 23.0225, lng: 72.5714, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Morbi Bus Stand', lat: 22.812, lng: 70.832, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '09:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r24',
    routeName: 'Vadodara - Surat',
    from: 'Vadodara',
    to: 'Surat',
    distance: '--',
    duration: '--',
    fare: { "volvo": 350, "ac": 250, "non-ac": 140, "sleeper": 320 },
    stops: [
      { name: 'Vadodara Bus Stand', lat: 22.3072, lng: 73.1812, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Surat Bus Stand', lat: 21.1702, lng: 72.8311, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '06:30 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '08:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '03:00 PM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 PM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r25',
    routeName: 'Vadodara - Bharuch',
    from: 'Vadodara',
    to: 'Bharuch',
    distance: '--',
    duration: '--',
    fare: { "non-ac": 80 },
    stops: [
      { name: 'Vadodara Bus Stand', lat: 22.3072, lng: 73.1812, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Bharuch Bus Stand', lat: 21.7051, lng: 72.9959, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '07:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '11:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r26',
    routeName: 'Vadodara - Rajkot',
    from: 'Vadodara',
    to: 'Rajkot',
    distance: '--',
    duration: '--',
    fare: { "ac": 360, "sleeper": 420 },
    stops: [
      { name: 'Vadodara Bus Stand', lat: 22.3072, lng: 73.1812, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Rajkot Bus Stand', lat: 22.3039, lng: 70.8022, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '08:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 PM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r27',
    routeName: 'Surat - Rajkot',
    from: 'Surat',
    to: 'Rajkot',
    distance: '--',
    duration: '--',
    fare: { "volvo": 560, "sleeper": 480 },
    stops: [
      { name: 'Surat Bus Stand', lat: 21.1702, lng: 72.8311, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Rajkot Bus Stand', lat: 22.3039, lng: 70.8022, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '08:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '09:00 PM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r28',
    routeName: 'Rajkot - Junagadh',
    from: 'Rajkot',
    to: 'Junagadh',
    distance: '--',
    duration: '--',
    fare: { "non-ac": 100, "ac": 160 },
    stops: [
      { name: 'Rajkot Bus Stand', lat: 22.3039, lng: 70.8022, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Junagadh Bus Stand', lat: 21.5222, lng: 70.4579, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '07:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '02:00 PM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r29',
    routeName: 'Rajkot - Jamnagar',
    from: 'Rajkot',
    to: 'Jamnagar',
    distance: '--',
    duration: '--',
    fare: { "non-ac": 90, "ac": 150 },
    stops: [
      { name: 'Rajkot Bus Stand', lat: 22.3039, lng: 70.8022, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Jamnagar Bus Stand', lat: 22.4707, lng: 70.0577, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '06:30 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '09:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r30',
    routeName: 'Rajkot - Porbandar',
    from: 'Rajkot',
    to: 'Porbandar',
    distance: '--',
    duration: '--',
    fare: { "non-ac": 140 },
    stops: [
      { name: 'Rajkot Bus Stand', lat: 22.3039, lng: 70.8022, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Porbandar Bus Stand', lat: 21.6417, lng: 69.6293, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '07:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },
  {
    id: 'r31',
    routeName: 'Rajkot - Dwarka',
    from: 'Rajkot',
    to: 'Dwarka',
    distance: '--',
    duration: '--',
    fare: { "ac": 280 },
    stops: [
      { name: 'Rajkot Bus Stand', lat: 22.3039, lng: 70.8022, arrivalTime: '--', departureTime: '--', order: 1 },
      { name: 'Dwarka Bus Stand', lat: 22.2442, lng: 68.9685, arrivalTime: '--', departureTime: '--', order: 2 }
    ],
    schedule: [
      { departureTime: '08:00 AM', arrivalTime: '--', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: []
  },

  // ═══════════════════════════════════════════════════════════════
  // NEW ROUTES — covering all regions of India
  // ═══════════════════════════════════════════════════════════════

  // ── NORTHEAST ──────────────────────────────────────────────────
  {
    id: 'r32',
    routeName: 'Guwahati - Shillong Express',
    from: 'Guwahati',
    to: 'Shillong',
    distance: '100 km',
    duration: '2h 30m',
    fare: { sleeper: 250, ac: 400, nonAc: 180 },
    stops: [
      { name: 'Guwahati ISBT', lat: 26.1445, lng: 91.7362, arrivalTime: '--', departureTime: '06:00 AM', order: 1 },
      { name: 'Jorabat Toll Gate', lat: 26.0850, lng: 91.8300, arrivalTime: '06:25 AM', departureTime: '06:30 AM', order: 2 },
      { name: 'Nongpoh', lat: 25.9050, lng: 91.9450, arrivalTime: '07:10 AM', departureTime: '07:20 AM', order: 3 },
      { name: 'Barapani', lat: 25.6782, lng: 91.8806, arrivalTime: '07:55 AM', departureTime: '08:00 AM', order: 4 },
      { name: 'Shillong Police Bazar', lat: 25.5744, lng: 91.8933, arrivalTime: '08:30 AM', departureTime: '--', order: 5 }
    ],
    schedule: [
      { departureTime: '06:00 AM', arrivalTime: '08:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '09:00 AM', arrivalTime: '11:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '02:00 PM', arrivalTime: '04:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: [
      [26.1445, 91.7362], [26.0850, 91.8300], [25.9050, 91.9450],
      [25.6782, 91.8806], [25.5744, 91.8933]
    ]
  },
  {
    id: 'r33',
    routeName: 'Guwahati - Dibrugarh Assam Link',
    from: 'Guwahati',
    to: 'Dibrugarh',
    distance: '440 km',
    duration: '8h 00m',
    fare: { sleeper: 750, ac: 1100, nonAc: 550 },
    stops: [
      { name: 'Guwahati ISBT', lat: 26.1445, lng: 91.7362, arrivalTime: '--', departureTime: '07:00 AM', order: 1 },
      { name: 'Nagaon Bus Stand', lat: 26.3499, lng: 92.6868, arrivalTime: '09:00 AM', departureTime: '09:15 AM', order: 2 },
      { name: 'Jorhat Bus Stand', lat: 26.7465, lng: 94.2026, arrivalTime: '11:30 AM', departureTime: '11:45 AM', order: 3 },
      { name: 'Sibsagar Bus Stand', lat: 26.9848, lng: 94.6364, arrivalTime: '12:30 PM', departureTime: '12:40 PM', order: 4 },
      { name: 'Dibrugarh Bus Stand', lat: 27.4728, lng: 94.9120, arrivalTime: '03:00 PM', departureTime: '--', order: 5 }
    ],
    schedule: [
      { departureTime: '07:00 AM', arrivalTime: '03:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '09:00 PM', arrivalTime: '05:00 AM', days: ['Mon', 'Wed', 'Fri', 'Sun'] }
    ],
    polyline: [
      [26.1445, 91.7362], [26.3499, 92.6868], [26.7465, 94.2026],
      [26.9848, 94.6364], [27.4728, 94.9120]
    ]
  },

  // ── EAST ───────────────────────────────────────────────────────
  {
    id: 'r34',
    routeName: 'Bhubaneswar - Cuttack City Link',
    from: 'Bhubaneswar',
    to: 'Cuttack',
    distance: '28 km',
    duration: '50m',
    fare: { sleeper: 80, ac: 140, nonAc: 60 },
    stops: [
      { name: 'Bhubaneswar Bus Stand', lat: 20.2961, lng: 85.8245, arrivalTime: '--', departureTime: '06:00 AM', order: 1 },
      { name: 'Rasulgarh', lat: 20.3022, lng: 85.8437, arrivalTime: '06:10 AM', departureTime: '06:12 AM', order: 2 },
      { name: 'Cuttack Badambadi', lat: 20.4625, lng: 85.8830, arrivalTime: '06:50 AM', departureTime: '--', order: 3 }
    ],
    schedule: [
      { departureTime: '06:00 AM', arrivalTime: '06:50 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '08:00 AM', arrivalTime: '08:50 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '12:00 PM', arrivalTime: '12:50 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '05:00 PM', arrivalTime: '05:50 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: [
      [20.2961, 85.8245], [20.3022, 85.8437], [20.4625, 85.8830]
    ]
  },
  {
    id: 'r35',
    routeName: 'Patna - Ranchi Highway',
    from: 'Patna',
    to: 'Ranchi',
    distance: '330 km',
    duration: '7h 00m',
    fare: { sleeper: 650, ac: 950, nonAc: 480 },
    stops: [
      { name: 'Patna Mithapur Bus Stand', lat: 25.6093, lng: 85.1376, arrivalTime: '--', departureTime: '06:30 AM', order: 1 },
      { name: 'Aurangabad Bus Stand', lat: 24.7517, lng: 84.3741, arrivalTime: '08:30 AM', departureTime: '08:45 AM', order: 2 },
      { name: 'Gaya Bus Stand', lat: 24.7964, lng: 84.9994, arrivalTime: '09:30 AM', departureTime: '09:45 AM', order: 3 },
      { name: 'Hazaribagh', lat: 23.9925, lng: 85.3609, arrivalTime: '11:30 AM', departureTime: '11:45 AM', order: 4 },
      { name: 'Ranchi Bus Stand', lat: 23.3441, lng: 85.3096, arrivalTime: '01:30 PM', departureTime: '--', order: 5 }
    ],
    schedule: [
      { departureTime: '06:30 AM', arrivalTime: '01:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 PM', arrivalTime: '05:00 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: [
      [25.6093, 85.1376], [24.7517, 84.3741], [24.7964, 84.9994],
      [23.9925, 85.3609], [23.3441, 85.3096]
    ]
  },

  // ── NORTH ──────────────────────────────────────────────────────
  {
    id: 'r36',
    routeName: 'Amritsar - Shimla Himalayan',
    from: 'Amritsar',
    to: 'Shimla',
    distance: '310 km',
    duration: '7h 00m',
    fare: { sleeper: 700, ac: 1050, nonAc: 520 },
    stops: [
      { name: 'Amritsar ISBT', lat: 31.6340, lng: 74.8723, arrivalTime: '--', departureTime: '06:00 AM', order: 1 },
      { name: 'Ropar Bus Stand', lat: 30.9647, lng: 76.5298, arrivalTime: '08:30 AM', departureTime: '08:45 AM', order: 2 },
      { name: 'Bilaspur Himachal', lat: 31.3412, lng: 76.7624, arrivalTime: '10:00 AM', departureTime: '10:15 AM', order: 3 },
      { name: 'Swarghat', lat: 31.5138, lng: 76.8423, arrivalTime: '11:00 AM', departureTime: '11:10 AM', order: 4 },
      { name: 'Shimla ISBT', lat: 31.1048, lng: 77.1734, arrivalTime: '01:00 PM', departureTime: '--', order: 5 }
    ],
    schedule: [
      { departureTime: '06:00 AM', arrivalTime: '01:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 AM', arrivalTime: '05:00 PM', days: ['Mon', 'Wed', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: [
      [31.6340, 74.8723], [30.9647, 76.5298], [31.3412, 76.7624],
      [31.5138, 76.8423], [31.1048, 77.1734]
    ]
  },
  {
    id: 'r37',
    routeName: 'Agra - Lucknow Yamuna Expressway',
    from: 'Agra',
    to: 'Lucknow',
    distance: '340 km',
    duration: '4h 30m',
    fare: { sleeper: 600, ac: 900, nonAc: 450 },
    stops: [
      { name: 'Agra ISBT Idgah', lat: 27.1767, lng: 78.0081, arrivalTime: '--', departureTime: '07:00 AM', order: 1 },
      { name: 'Firozabad', lat: 27.1504, lng: 78.3950, arrivalTime: '07:45 AM', departureTime: '07:55 AM', order: 2 },
      { name: 'Etawah Bus Stand', lat: 26.7859, lng: 79.0188, arrivalTime: '09:00 AM', departureTime: '09:15 AM', order: 3 },
      { name: 'Kanpur Jhakarkati', lat: 26.4499, lng: 80.3319, arrivalTime: '10:30 AM', departureTime: '10:45 AM', order: 4 },
      { name: 'Lucknow Alambagh', lat: 26.8170, lng: 80.8930, arrivalTime: '11:30 AM', departureTime: '--', order: 5 }
    ],
    schedule: [
      { departureTime: '07:00 AM', arrivalTime: '11:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '01:00 PM', arrivalTime: '05:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 PM', arrivalTime: '02:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: [
      [27.1767, 78.0081], [27.1504, 78.3950], [26.7859, 79.0188],
      [26.4499, 80.3319], [26.8170, 80.8930]
    ]
  },
  {
    id: 'r38',
    routeName: 'Delhi - Srinagar Kashmir Highway',
    from: 'Delhi',
    to: 'Srinagar',
    distance: '870 km',
    duration: '16h 00m',
    fare: { sleeper: 1600, ac: 2400, nonAc: 1200 },
    stops: [
      { name: 'Delhi ISBT Kashmere Gate', lat: 28.6672, lng: 77.2284, arrivalTime: '--', departureTime: '05:00 PM', order: 1 },
      { name: 'Ambala Cantt', lat: 30.3300, lng: 76.8200, arrivalTime: '07:30 PM', departureTime: '07:45 PM', order: 2 },
      { name: 'Jammu Bus Stand', lat: 32.7266, lng: 74.8570, arrivalTime: '01:00 AM', departureTime: '01:30 AM', order: 3 },
      { name: 'Banihal Tunnel Exit', lat: 33.4850, lng: 75.2030, arrivalTime: '05:00 AM', departureTime: '05:15 AM', order: 4 },
      { name: 'Srinagar TRC Bus Stand', lat: 34.0837, lng: 74.7973, arrivalTime: '09:00 AM', departureTime: '--', order: 5 }
    ],
    schedule: [
      { departureTime: '05:00 PM', arrivalTime: '09:00 AM', days: ['Mon', 'Wed', 'Fri', 'Sun'] }
    ],
    polyline: [
      [28.6672, 77.2284], [30.3300, 76.8200], [32.7266, 74.8570],
      [33.4850, 75.2030], [34.0837, 74.7973]
    ]
  },

  // ── CENTRAL ────────────────────────────────────────────────────
  {
    id: 'r39',
    routeName: 'Bhopal - Indore Expressway',
    from: 'Bhopal',
    to: 'Indore',
    distance: '195 km',
    duration: '3h 30m',
    fare: { sleeper: 420, ac: 650, nonAc: 310 },
    stops: [
      { name: 'Bhopal ISBT', lat: 23.2599, lng: 77.4126, arrivalTime: '--', departureTime: '07:00 AM', order: 1 },
      { name: 'Sehore Bus Stand', lat: 23.2022, lng: 77.0849, arrivalTime: '07:45 AM', departureTime: '07:55 AM', order: 2 },
      { name: 'Dewas Bus Stand', lat: 22.9623, lng: 76.0509, arrivalTime: '09:00 AM', departureTime: '09:10 AM', order: 3 },
      { name: 'Indore Gangwal Bus Stand', lat: 22.7196, lng: 75.8577, arrivalTime: '10:30 AM', departureTime: '--', order: 4 }
    ],
    schedule: [
      { departureTime: '07:00 AM', arrivalTime: '10:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '11:00 AM', arrivalTime: '02:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '04:00 PM', arrivalTime: '07:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 PM', arrivalTime: '01:30 AM', days: ['Mon', 'Wed', 'Fri', 'Sun'] }
    ],
    polyline: [
      [23.2599, 77.4126], [23.2022, 77.0849], [22.9623, 76.0509],
      [22.7196, 75.8577]
    ]
  },
  {
    id: 'r40',
    routeName: 'Nagpur - Raipur Central Corridor',
    from: 'Nagpur',
    to: 'Raipur',
    distance: '295 km',
    duration: '5h 30m',
    fare: { sleeper: 580, ac: 880, nonAc: 430 },
    stops: [
      { name: 'Nagpur Central Bus Stand', lat: 21.1458, lng: 79.0882, arrivalTime: '--', departureTime: '08:00 AM', order: 1 },
      { name: 'Wardha Bus Stand', lat: 20.7453, lng: 78.6022, arrivalTime: '09:10 AM', departureTime: '09:20 AM', order: 2 },
      { name: 'Gondia Bus Stand', lat: 21.4631, lng: 80.1957, arrivalTime: '10:30 AM', departureTime: '10:45 AM', order: 3 },
      { name: 'Rajnandgaon', lat: 21.0971, lng: 81.0328, arrivalTime: '12:00 PM', departureTime: '12:10 PM', order: 4 },
      { name: 'Raipur Bus Stand', lat: 21.2514, lng: 81.6296, arrivalTime: '01:30 PM', departureTime: '--', order: 5 }
    ],
    schedule: [
      { departureTime: '08:00 AM', arrivalTime: '01:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '09:00 PM', arrivalTime: '02:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: [
      [21.1458, 79.0882], [20.7453, 78.6022], [21.4631, 80.1957],
      [21.0971, 81.0328], [21.2514, 81.6296]
    ]
  },
  {
    id: 'r41',
    routeName: 'Nashik - Mumbai Expressway',
    from: 'Nashik',
    to: 'Mumbai',
    distance: '170 km',
    duration: '3h 30m',
    fare: { sleeper: 380, ac: 580, nonAc: 280 },
    stops: [
      { name: 'Nashik CBS Bus Stand', lat: 19.9975, lng: 73.7898, arrivalTime: '--', departureTime: '06:30 AM', order: 1 },
      { name: 'Igatpuri', lat: 19.7029, lng: 73.5617, arrivalTime: '07:25 AM', departureTime: '07:35 AM', order: 2 },
      { name: 'Kasara', lat: 19.5660, lng: 73.4664, arrivalTime: '07:55 AM', departureTime: '08:00 AM', order: 3 },
      { name: 'Thane Bus Stand', lat: 19.2183, lng: 72.9781, arrivalTime: '09:15 AM', departureTime: '09:25 AM', order: 4 },
      { name: 'Mumbai Central Bus Stand', lat: 18.9690, lng: 72.8194, arrivalTime: '10:00 AM', departureTime: '--', order: 5 }
    ],
    schedule: [
      { departureTime: '06:30 AM', arrivalTime: '10:00 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 AM', arrivalTime: '01:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '03:00 PM', arrivalTime: '06:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '09:00 PM', arrivalTime: '12:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: [
      [19.9975, 73.7898], [19.7029, 73.5617], [19.5660, 73.4664],
      [19.2183, 72.9781], [18.9690, 72.8194]
    ]
  },

  // ── WEST ───────────────────────────────────────────────────────
  {
    id: 'r42',
    routeName: 'Jodhpur - Jaisalmer Desert Express',
    from: 'Jodhpur',
    to: 'Jaisalmer',
    distance: '290 km',
    duration: '5h 00m',
    fare: { sleeper: 580, ac: 880, nonAc: 430 },
    stops: [
      { name: 'Jodhpur Raika Bagh Bus Stand', lat: 26.2993, lng: 73.0281, arrivalTime: '--', departureTime: '07:00 AM', order: 1 },
      { name: 'Phalodi', lat: 27.1330, lng: 72.3640, arrivalTime: '08:30 AM', departureTime: '08:40 AM', order: 2 },
      { name: 'Pokaran', lat: 26.9245, lng: 71.9151, arrivalTime: '09:45 AM', departureTime: '09:55 AM', order: 3 },
      { name: 'Jaisalmer Bus Stand', lat: 26.9157, lng: 70.9083, arrivalTime: '12:00 PM', departureTime: '--', order: 4 }
    ],
    schedule: [
      { departureTime: '07:00 AM', arrivalTime: '12:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '02:00 PM', arrivalTime: '07:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 PM', arrivalTime: '03:00 AM', days: ['Mon', 'Wed', 'Fri', 'Sat'] }
    ],
    polyline: [
      [26.2993, 73.0281], [27.1330, 72.3640], [26.9245, 71.9151],
      [26.9157, 70.9083]
    ]
  },

  // ── SOUTH ──────────────────────────────────────────────────────
  {
    id: 'r43',
    routeName: 'Kochi - Trivandrum Coastal',
    from: 'Kochi',
    to: 'Trivandrum',
    distance: '210 km',
    duration: '4h 30m',
    fare: { sleeper: 500, ac: 750, nonAc: 360 },
    stops: [
      { name: 'Kochi KSRTC Bus Stand', lat: 9.9312, lng: 76.2673, arrivalTime: '--', departureTime: '06:00 AM', order: 1 },
      { name: 'Alappuzha Bus Stand', lat: 9.4981, lng: 76.3388, arrivalTime: '07:20 AM', departureTime: '07:30 AM', order: 2 },
      { name: 'Kollam Bus Stand', lat: 8.8932, lng: 76.6141, arrivalTime: '08:45 AM', departureTime: '08:55 AM', order: 3 },
      { name: 'Trivandrum Central Bus Stand', lat: 8.5241, lng: 76.9366, arrivalTime: '10:30 AM', departureTime: '--', order: 4 }
    ],
    schedule: [
      { departureTime: '06:00 AM', arrivalTime: '10:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '09:00 AM', arrivalTime: '01:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '02:00 PM', arrivalTime: '06:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 PM', arrivalTime: '02:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: [
      [9.9312, 76.2673], [9.4981, 76.3388], [8.8932, 76.6141], [8.5241, 76.9366]
    ]
  },
  {
    id: 'r44',
    routeName: 'Mysore - Ooty Nilgiris',
    from: 'Mysore',
    to: 'Ooty',
    distance: '130 km',
    duration: '3h 00m',
    fare: { sleeper: 320, ac: 500, nonAc: 230 },
    stops: [
      { name: 'Mysore Central Bus Stand', lat: 12.2958, lng: 76.6394, arrivalTime: '--', departureTime: '07:30 AM', order: 1 },
      { name: 'Gundlupet', lat: 11.8093, lng: 76.6859, arrivalTime: '08:30 AM', departureTime: '08:40 AM', order: 2 },
      { name: 'Masinagudi', lat: 11.5742, lng: 76.6373, arrivalTime: '09:20 AM', departureTime: '09:30 AM', order: 3 },
      { name: 'Ooty Bus Stand', lat: 11.4102, lng: 76.6950, arrivalTime: '10:30 AM', departureTime: '--', order: 4 }
    ],
    schedule: [
      { departureTime: '07:30 AM', arrivalTime: '10:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '12:00 PM', arrivalTime: '03:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '04:00 PM', arrivalTime: '07:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: [
      [12.2958, 76.6394], [11.8093, 76.6859], [11.5742, 76.6373], [11.4102, 76.6950]
    ]
  },
  {
    id: 'r45',
    routeName: 'Madurai - Coimbatore Tamil Nadu',
    from: 'Madurai',
    to: 'Coimbatore',
    distance: '210 km',
    duration: '4h 00m',
    fare: { sleeper: 450, ac: 680, nonAc: 330 },
    stops: [
      { name: 'Madurai Central Bus Stand', lat: 9.9252, lng: 78.1198, arrivalTime: '--', departureTime: '06:00 AM', order: 1 },
      { name: 'Dindigul Bus Stand', lat: 10.3624, lng: 77.9695, arrivalTime: '07:00 AM', departureTime: '07:15 AM', order: 2 },
      { name: 'Palani Bus Stand', lat: 10.4470, lng: 77.5157, arrivalTime: '08:10 AM', departureTime: '08:20 AM', order: 3 },
      { name: 'Udumalpet', lat: 10.5865, lng: 77.2474, arrivalTime: '09:00 AM', departureTime: '09:10 AM', order: 4 },
      { name: 'Coimbatore Gandhipuram', lat: 11.0168, lng: 76.9558, arrivalTime: '10:00 AM', departureTime: '--', order: 5 }
    ],
    schedule: [
      { departureTime: '06:00 AM', arrivalTime: '10:00 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 AM', arrivalTime: '02:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '03:00 PM', arrivalTime: '07:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 PM', arrivalTime: '02:00 AM', days: ['Mon', 'Wed', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: [
      [9.9252, 78.1198], [10.3624, 77.9695], [10.4470, 77.5157],
      [10.5865, 77.2474], [11.0168, 76.9558]
    ]
  },
  {
    id: 'r46',
    routeName: 'Mangalore - Goa Coastal Highway',
    from: 'Mangalore',
    to: 'Goa',
    distance: '385 km',
    duration: '7h 00m',
    fare: { sleeper: 750, ac: 1150, nonAc: 550 },
    stops: [
      { name: 'Mangalore KSRTC Bus Stand', lat: 12.8698, lng: 74.8421, arrivalTime: '--', departureTime: '07:00 AM', order: 1 },
      { name: 'Udupi Bus Stand', lat: 13.3409, lng: 74.7421, arrivalTime: '08:10 AM', departureTime: '08:20 AM', order: 2 },
      { name: 'Karwar Bus Stand', lat: 14.8136, lng: 74.1287, arrivalTime: '11:00 AM', departureTime: '11:15 AM', order: 3 },
      { name: 'Panaji Kadamba Bus Stand', lat: 15.4990, lng: 73.8278, arrivalTime: '02:00 PM', departureTime: '--', order: 4 }
    ],
    schedule: [
      { departureTime: '07:00 AM', arrivalTime: '02:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '09:00 PM', arrivalTime: '04:00 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: [
      [12.8698, 74.8421], [13.3409, 74.7421], [14.8136, 74.1287], [15.4990, 73.8278]
    ]
  },
  {
    id: 'r47',
    routeName: 'Vizag - Bhubaneswar East Coast',
    from: 'Visakhapatnam',
    to: 'Bhubaneswar',
    distance: '420 km',
    duration: '8h 00m',
    fare: { sleeper: 800, ac: 1200, nonAc: 600 },
    stops: [
      { name: 'Visakhapatnam APSRTC Bus Stand', lat: 17.7231, lng: 83.3012, arrivalTime: '--', departureTime: '07:00 AM', order: 1 },
      { name: 'Srikakulam Bus Stand', lat: 18.2980, lng: 83.8990, arrivalTime: '09:00 AM', departureTime: '09:15 AM', order: 2 },
      { name: 'Berhampur Bus Stand', lat: 19.3150, lng: 84.7941, arrivalTime: '12:00 PM', departureTime: '12:15 PM', order: 3 },
      { name: 'Bhubaneswar Bus Stand', lat: 20.2961, lng: 85.8245, arrivalTime: '03:00 PM', departureTime: '--', order: 4 }
    ],
    schedule: [
      { departureTime: '07:00 AM', arrivalTime: '03:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '09:00 PM', arrivalTime: '05:00 AM', days: ['Mon', 'Wed', 'Fri', 'Sun'] }
    ],
    polyline: [
      [17.7231, 83.3012], [18.2980, 83.8990], [19.3150, 84.7941], [20.2961, 85.8245]
    ]
  },
  {
    id: 'r48',
    routeName: 'Hyderabad - Kurnool Deccan',
    from: 'Hyderabad',
    to: 'Kurnool',
    distance: '215 km',
    duration: '4h 00m',
    fare: { sleeper: 480, ac: 720, nonAc: 360 },
    stops: [
      { name: 'Hyderabad MGBS', lat: 17.3784, lng: 78.4839, arrivalTime: '--', departureTime: '07:30 AM', order: 1 },
      { name: 'Jadcherla', lat: 16.7620, lng: 78.1422, arrivalTime: '08:45 AM', departureTime: '08:55 AM', order: 2 },
      { name: 'Mahabubnagar', lat: 16.7376, lng: 77.9875, arrivalTime: '09:15 AM', departureTime: '09:25 AM', order: 3 },
      { name: 'Kurnool Bus Stand', lat: 15.8281, lng: 78.0373, arrivalTime: '11:30 AM', departureTime: '--', order: 4 }
    ],
    schedule: [
      { departureTime: '07:30 AM', arrivalTime: '11:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '12:00 PM', arrivalTime: '04:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '09:00 PM', arrivalTime: '01:00 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: [
      [17.3784, 78.4839], [16.7620, 78.1422], [16.7376, 77.9875], [15.8281, 78.0373]
    ]
  },
  {
    id: 'r49',
    routeName: 'Bangalore - Mysore Expressway',
    from: 'Bangalore',
    to: 'Mysore',
    distance: '145 km',
    duration: '3h 00m',
    fare: { sleeper: 350, ac: 520, nonAc: 260 },
    stops: [
      { name: 'Bangalore Majestic Bus Stand', lat: 12.9772, lng: 77.5724, arrivalTime: '--', departureTime: '06:00 AM', order: 1 },
      { name: 'Kengeri', lat: 12.9031, lng: 77.4823, arrivalTime: '06:30 AM', departureTime: '06:35 AM', order: 2 },
      { name: 'Channapatna', lat: 12.6528, lng: 77.2087, arrivalTime: '07:30 AM', departureTime: '07:40 AM', order: 3 },
      { name: 'Maddur', lat: 12.5862, lng: 77.0439, arrivalTime: '08:00 AM', departureTime: '08:05 AM', order: 4 },
      { name: 'Mysore Central Bus Stand', lat: 12.2958, lng: 76.6394, arrivalTime: '09:00 AM', departureTime: '--', order: 5 }
    ],
    schedule: [
      { departureTime: '06:00 AM', arrivalTime: '09:00 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '08:00 AM', arrivalTime: '11:00 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '12:00 PM', arrivalTime: '03:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '05:00 PM', arrivalTime: '08:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 PM', arrivalTime: '01:00 AM', days: ['Mon', 'Wed', 'Fri', 'Sun'] }
    ],
    polyline: [
      [12.9772, 77.5724], [12.9031, 77.4823], [12.6528, 77.2087],
      [12.5862, 77.0439], [12.2958, 76.6394]
    ]
  },
  {
    id: 'r50',
    routeName: 'Chennai - Madurai Grand Trunk',
    from: 'Chennai',
    to: 'Madurai',
    distance: '460 km',
    duration: '7h 30m',
    fare: { sleeper: 850, ac: 1280, nonAc: 640 },
    stops: [
      { name: 'Chennai Koyambedu Bus Stand', lat: 13.0694, lng: 80.1948, arrivalTime: '--', departureTime: '08:00 PM', order: 1 },
      { name: 'Villupuram Bus Stand', lat: 11.9396, lng: 79.4928, arrivalTime: '10:30 PM', departureTime: '10:45 PM', order: 2 },
      { name: 'Trichy Central Bus Stand', lat: 10.7905, lng: 78.7047, arrivalTime: '01:00 AM', departureTime: '01:15 AM', order: 3 },
      { name: 'Dindigul Bus Stand', lat: 10.3624, lng: 77.9695, arrivalTime: '02:45 AM', departureTime: '03:00 AM', order: 4 },
      { name: 'Madurai Central Bus Stand', lat: 9.9252, lng: 78.1198, arrivalTime: '03:30 AM', departureTime: '--', order: 5 }
    ],
    schedule: [
      { departureTime: '08:00 PM', arrivalTime: '03:30 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '10:00 PM', arrivalTime: '05:30 AM', days: ['Mon', 'Wed', 'Fri', 'Sun'] },
      { departureTime: '07:00 AM', arrivalTime: '02:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] }
    ],
    polyline: [
      [13.0694, 80.1948], [11.9396, 79.4928], [10.7905, 78.7047],
      [10.3624, 77.9695], [9.9252, 78.1198]
    ]
  },
  {
    id: 'r51',
    routeName: 'Chandigarh - Shimla Hill Queen',
    from: 'Chandigarh',
    to: 'Shimla',
    distance: '115 km',
    duration: '3h 00m',
    fare: { sleeper: 280, ac: 430, nonAc: 200 },
    stops: [
      { name: 'Chandigarh Sector 43 Bus Stand', lat: 30.7333, lng: 76.7794, arrivalTime: '--', departureTime: '07:00 AM', order: 1 },
      { name: 'Kalka', lat: 30.8418, lng: 76.9471, arrivalTime: '07:40 AM', departureTime: '07:50 AM', order: 2 },
      { name: 'Solan Bus Stand', lat: 30.9045, lng: 77.0967, arrivalTime: '09:00 AM', departureTime: '09:10 AM', order: 3 },
      { name: 'Shimla ISBT', lat: 31.1048, lng: 77.1734, arrivalTime: '10:00 AM', departureTime: '--', order: 4 }
    ],
    schedule: [
      { departureTime: '07:00 AM', arrivalTime: '10:00 AM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '09:30 AM', arrivalTime: '12:30 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '02:00 PM', arrivalTime: '05:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      { departureTime: '05:00 PM', arrivalTime: '08:00 PM', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ],
    polyline: [
      [30.7333, 76.7794], [30.8418, 76.9471], [30.9045, 77.0967], [31.1048, 77.1734]
    ]
  },

  // ── AUTO-GENERATED: 70 new routes ──────────────────────────────
  {
      id: 'r52',
      routeName: 'Delhi - Dehradun Express',
      from: 'Delhi',
      to: 'Dehradun',
      distance: '300 km',
      duration: '5h 30m',
      fare: {
          sleeper: 650,
          ac: 950,
          nonAc: 480
      },
      stops: [
          {
              name: 'Delhi ISBT Kashmere Gate',
              lat: 28.6672,
              lng: 77.2284,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Delhi–Dehradun)',
              lat: 29.2751,
              lng: 77.5545,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Delhi–Dehradun)',
              lat: 29.7351,
              lng: 77.7326,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Dehradun ISBT Dehradun',
              lat: 30.3165,
              lng: 78.0322,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:00 AM',
              arrivalTime: '12:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '12:00 PM',
              arrivalTime: '06:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '10:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              28.6672,
              77.2284
          ],
          [
              29.0444,
              77.3943
          ],
          [
              29.4803,
              77.6188
          ],
          [
              29.9455,
              77.8725
          ],
          [
              30.3165,
              78.0322
          ]
      ]
  },
  {
      id: 'r53',
      routeName: 'Delhi - Haridwar Express',
      from: 'Delhi',
      to: 'Haridwar',
      distance: '215 km',
      duration: '4h 30m',
      fare: {
          sleeper: 480,
          ac: 720,
          nonAc: 360
      },
      stops: [
          {
              name: 'Delhi ISBT Kashmere Gate',
              lat: 28.6672,
              lng: 77.2284,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Delhi–Haridwar)',
              lat: 29.0947,
              lng: 77.5417,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Delhi–Haridwar)',
              lat: 29.535,
              lng: 77.8677,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Haridwar Haridwar Bus Stand',
              lat: 29.9457,
              lng: 78.1642,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '07:00 AM',
              arrivalTime: '02:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '03:00 PM',
              arrivalTime: '10:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              28.6672,
              77.2284
          ],
          [
              28.9476,
              77.4232
          ],
          [
              29.3247,
              77.7146
          ],
          [
              29.5957,
              77.8998
          ],
          [
              29.9457,
              78.1642
          ]
      ]
  },
  {
      id: 'r54',
      routeName: 'Delhi - Rishikesh Express',
      from: 'Delhi',
      to: 'Rishikesh',
      distance: '240 km',
      duration: '5h 00m',
      fare: {
          sleeper: 520,
          ac: 780,
          nonAc: 390
      },
      stops: [
          {
              name: 'Delhi ISBT Kashmere Gate',
              lat: 28.6672,
              lng: 77.2284,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Delhi–Rishikesh)',
              lat: 29.1499,
              lng: 77.5843,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Delhi–Rishikesh)',
              lat: 29.6545,
              lng: 77.9621,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Rishikesh Rishikesh Bus Stand',
              lat: 30.0869,
              lng: 78.2676,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '08:00 AM',
              arrivalTime: '03:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '08:00 PM',
              arrivalTime: '03:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              28.6672,
              77.2284
          ],
          [
              29.0626,
              77.5287
          ],
          [
              29.4049,
              77.7759
          ],
          [
              29.7174,
              77.9933
          ],
          [
              30.0869,
              78.2676
          ]
      ]
  },
  {
      id: 'r55',
      routeName: 'Delhi - Nainital Express',
      from: 'Delhi',
      to: 'Nainital',
      distance: '310 km',
      duration: '6h 00m',
      fare: {
          sleeper: 680,
          ac: 1020,
          nonAc: 510
      },
      stops: [
          {
              name: 'Delhi ISBT Kashmere Gate',
              lat: 28.6672,
              lng: 77.2284,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Delhi–Nainital)',
              lat: 28.8756,
              lng: 77.9441,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Delhi–Nainital)',
              lat: 29.0821,
              lng: 78.658,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Nainital Nainital Bus Stand',
              lat: 29.3803,
              lng: 79.4636,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:30 AM',
              arrivalTime: '01:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '01:30 PM',
              arrivalTime: '08:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              28.6672,
              77.2284
          ],
          [
              28.8869,
              77.8287
          ],
          [
              28.9815,
              78.3037
          ],
          [
              29.1619,
              78.8647
          ],
          [
              29.3803,
              79.4636
          ]
      ]
  },
  {
      id: 'r56',
      routeName: 'Delhi - Mussoorie Express',
      from: 'Delhi',
      to: 'Mussoorie',
      distance: '295 km',
      duration: '5h 30m',
      fare: {
          sleeper: 640,
          ac: 960,
          nonAc: 480
      },
      stops: [
          {
              name: 'Delhi ISBT Kashmere Gate',
              lat: 28.6672,
              lng: 77.2284,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Delhi–Mussoorie)',
              lat: 29.3337,
              lng: 77.5767,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Delhi–Mussoorie)',
              lat: 29.8083,
              lng: 77.7331,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Mussoorie Mussoorie Bus Stand',
              lat: 30.4598,
              lng: 78.0664,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '09:00 AM',
              arrivalTime: '05:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '05:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              28.6672,
              77.2284
          ],
          [
              29.1101,
              77.4326
          ],
          [
              29.5344,
              77.6183
          ],
          [
              30.0059,
              77.8511
          ],
          [
              30.4598,
              78.0664
          ]
      ]
  },
  {
      id: 'r57',
      routeName: 'Delhi - Mathura Express',
      from: 'Delhi',
      to: 'Mathura',
      distance: '145 km',
      duration: '3h 00m',
      fare: {
          sleeper: 340,
          ac: 510,
          nonAc: 255
      },
      stops: [
          {
              name: 'Delhi ISBT Kashmere Gate',
              lat: 28.6672,
              lng: 77.2284,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Delhi–Mathura)',
              lat: 28.2014,
              lng: 77.3026,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Delhi–Mathura)',
              lat: 27.9541,
              lng: 77.5954,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Mathura Mathura Bus Stand',
              lat: 27.4924,
              lng: 77.6737,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:00 AM',
              arrivalTime: '12:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '12:00 PM',
              arrivalTime: '06:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '10:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              28.6672,
              77.2284
          ],
          [
              28.3242,
              77.2904
          ],
          [
              28.1028,
              77.4741
          ],
          [
              27.7449,
              77.5212
          ],
          [
              27.4924,
              77.6737
          ]
      ]
  },
  {
      id: 'r58',
      routeName: 'Delhi - Gorakhpur Express',
      from: 'Delhi',
      to: 'Gorakhpur',
      distance: '740 km',
      duration: '12h 00m',
      fare: {
          sleeper: 1200,
          ac: 1800,
          nonAc: 900
      },
      stops: [
          {
              name: 'Delhi ISBT Kashmere Gate',
              lat: 28.6672,
              lng: 77.2284,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Delhi–Gorakhpur)',
              lat: 28.0789,
              lng: 79.3239,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Delhi–Gorakhpur)',
              lat: 27.3266,
              lng: 81.2554,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Gorakhpur Gorakhpur Bus Stand',
              lat: 26.7606,
              lng: 83.3732,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '07:00 AM',
              arrivalTime: '02:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '03:00 PM',
              arrivalTime: '10:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              28.6672,
              77.2284
          ],
          [
              28.1704,
              78.7444
          ],
          [
              27.7027,
              80.2896
          ],
          [
              27.2652,
              81.865
          ],
          [
              26.7606,
              83.3732
          ]
      ]
  },
  {
      id: 'r59',
      routeName: 'Delhi - Meerut Express',
      from: 'Delhi',
      to: 'Meerut',
      distance: '70 km',
      duration: '2h 00m',
      fare: {
          sleeper: 180,
          ac: 270,
          nonAc: 135
      },
      stops: [
          {
              name: 'Delhi ISBT Kashmere Gate',
              lat: 28.6672,
              lng: 77.2284,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Delhi–Meerut)',
              lat: 28.7596,
              lng: 77.3744,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Delhi–Meerut)',
              lat: 28.8281,
              lng: 77.4964,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Meerut Meerut Bus Stand',
              lat: 28.9845,
              lng: 77.7064,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '08:00 AM',
              arrivalTime: '03:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '08:00 PM',
              arrivalTime: '03:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              28.6672,
              77.2284
          ],
          [
              28.7636,
              77.365
          ],
          [
              28.8711,
              77.5126
          ],
          [
              28.9497,
              77.6314
          ],
          [
              28.9845,
              77.7064
          ]
      ]
  },
  {
      id: 'r60',
      routeName: 'Dehradun - Haridwar Express',
      from: 'Dehradun',
      to: 'Haridwar',
      distance: '55 km',
      duration: '1h 30m',
      fare: {
          sleeper: 120,
          ac: 180,
          nonAc: 90
      },
      stops: [
          {
              name: 'Dehradun ISBT Dehradun',
              lat: 30.3165,
              lng: 78.0322,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Dehradun–Haridwar)',
              lat: 30.148,
              lng: 78.0313,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Dehradun–Haridwar)',
              lat: 30.0116,
              lng: 78.0625,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Haridwar Haridwar Bus Stand',
              lat: 29.9457,
              lng: 78.1642,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:30 AM',
              arrivalTime: '01:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '01:30 PM',
              arrivalTime: '08:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              30.3165,
              78.0322
          ],
          [
              30.2419,
              78.0833
          ],
          [
              30.141,
              78.1081
          ],
          [
              30.0461,
              78.1389
          ],
          [
              29.9457,
              78.1642
          ]
      ]
  },
  {
      id: 'r61',
      routeName: 'Dehradun - Rishikesh Express',
      from: 'Dehradun',
      to: 'Rishikesh',
      distance: '44 km',
      duration: '1h 15m',
      fare: {
          sleeper: 100,
          ac: 150,
          nonAc: 75
      },
      stops: [
          {
              name: 'Dehradun ISBT Dehradun',
              lat: 30.3165,
              lng: 78.0322,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Dehradun–Rishikesh)',
              lat: 30.2189,
              lng: 78.0896,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Dehradun–Rishikesh)',
              lat: 30.2256,
              lng: 78.2513,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Rishikesh Rishikesh Bus Stand',
              lat: 30.0869,
              lng: 78.2676,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '09:00 AM',
              arrivalTime: '05:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '05:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              30.3165,
              78.0322
          ],
          [
              30.2322,
              78.0642
          ],
          [
              30.2291,
              78.1773
          ],
          [
              30.0959,
              78.1603
          ],
          [
              30.0869,
              78.2676
          ]
      ]
  },
  {
      id: 'r62',
      routeName: 'Haridwar - Rishikesh Express',
      from: 'Haridwar',
      to: 'Rishikesh',
      distance: '24 km',
      duration: '45m',
      fare: {
          sleeper: 60,
          ac: 90,
          nonAc: 45
      },
      stops: [
          {
              name: 'Haridwar Haridwar Bus Stand',
              lat: 29.9457,
              lng: 78.1642,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Haridwar–Rishikesh)',
              lat: 30.0479,
              lng: 78.2538,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Haridwar–Rishikesh)',
              lat: 29.9767,
              lng: 78.17,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Rishikesh Rishikesh Bus Stand',
              lat: 30.0869,
              lng: 78.2676,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:00 AM',
              arrivalTime: '12:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '12:00 PM',
              arrivalTime: '06:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '10:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              29.9457,
              78.1642
          ],
          [
              29.9587,
              78.1678
          ],
          [
              30.0445,
              78.2441
          ],
          [
              30.0022,
              78.1924
          ],
          [
              30.0869,
              78.2676
          ]
      ]
  },
  {
      id: 'r63',
      routeName: 'Chandigarh - Manali Express',
      from: 'Chandigarh',
      to: 'Manali',
      distance: '310 km',
      duration: '8h 00m',
      fare: {
          sleeper: 750,
          ac: 1100,
          nonAc: 580
      },
      stops: [
          {
              name: 'Chandigarh Sector 43 Bus Stand',
              lat: 30.7333,
              lng: 76.7794,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Chandigarh–Manali)',
              lat: 31.1794,
              lng: 76.8599,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Chandigarh–Manali)',
              lat: 31.7547,
              lng: 77.0695,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Manali Manali Bus Stand',
              lat: 32.2396,
              lng: 77.1887,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '07:00 AM',
              arrivalTime: '02:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '03:00 PM',
              arrivalTime: '10:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              30.7333,
              76.7794
          ],
          [
              31.1426,
              76.9145
          ],
          [
              31.4514,
              76.949
          ],
          [
              31.869,
              77.0924
          ],
          [
              32.2396,
              77.1887
          ]
      ]
  },
  {
      id: 'r64',
      routeName: 'Chandigarh - Dharamsala Express',
      from: 'Chandigarh',
      to: 'Dharamsala',
      distance: '250 km',
      duration: '5h 30m',
      fare: {
          sleeper: 560,
          ac: 840,
          nonAc: 420
      },
      stops: [
          {
              name: 'Chandigarh Sector 43 Bus Stand',
              lat: 30.7333,
              lng: 76.7794,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Chandigarh–Dharamsala)',
              lat: 31.2936,
              lng: 76.6924,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Chandigarh–Dharamsala)',
              lat: 31.7512,
              lng: 76.5028,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Dharamsala Dharamsala Bus Stand',
              lat: 32.219,
              lng: 76.3234,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '08:00 AM',
              arrivalTime: '03:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '08:00 PM',
              arrivalTime: '03:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              30.7333,
              76.7794
          ],
          [
              31.1306,
              76.6913
          ],
          [
              31.5186,
              76.5938
          ],
          [
              31.8604,
              76.4502
          ],
          [
              32.219,
              76.3234
          ]
      ]
  },
  {
      id: 'r65',
      routeName: 'Amritsar - Chandigarh Express',
      from: 'Amritsar',
      to: 'Chandigarh',
      distance: '235 km',
      duration: '4h 30m',
      fare: {
          sleeper: 520,
          ac: 780,
          nonAc: 390
      },
      stops: [
          {
              name: 'Amritsar ISBT Amritsar',
              lat: 31.634,
              lng: 74.8723,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Amritsar–Chandigarh)',
              lat: 31.3505,
              lng: 75.5248,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Amritsar–Chandigarh)',
              lat: 30.9667,
              lng: 76.0768,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Chandigarh Sector 43 Bus Stand',
              lat: 30.7333,
              lng: 76.7794,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:30 AM',
              arrivalTime: '01:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '01:30 PM',
              arrivalTime: '08:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              31.634,
              74.8723
          ],
          [
              31.4413,
              75.3816
          ],
          [
              31.2293,
              75.8715
          ],
          [
              30.9466,
              76.2908
          ],
          [
              30.7333,
              76.7794
          ]
      ]
  },
  {
      id: 'r66',
      routeName: 'Ludhiana - Delhi Express',
      from: 'Ludhiana',
      to: 'Delhi',
      distance: '310 km',
      duration: '5h 30m',
      fare: {
          sleeper: 650,
          ac: 980,
          nonAc: 490
      },
      stops: [
          {
              name: 'Ludhiana Ludhiana Bus Stand',
              lat: 30.901,
              lng: 75.8573,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Ludhiana–Delhi)',
              lat: 30.2162,
              lng: 76.3742,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Ludhiana–Delhi)',
              lat: 29.3904,
              lng: 76.75,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Delhi ISBT Kashmere Gate',
              lat: 28.6672,
              lng: 77.2284,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '09:00 AM',
              arrivalTime: '05:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '05:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              30.901,
              75.8573
          ],
          [
              30.3452,
              76.2027
          ],
          [
              29.7757,
              76.5344
          ],
          [
              29.2138,
              76.8737
          ],
          [
              28.6672,
              77.2284
          ]
      ]
  },
  {
      id: 'r67',
      routeName: 'Jalandhar - Delhi Express',
      from: 'Jalandhar',
      to: 'Delhi',
      distance: '365 km',
      duration: '6h 30m',
      fare: {
          sleeper: 750,
          ac: 1120,
          nonAc: 560
      },
      stops: [
          {
              name: 'Jalandhar Jalandhar Bus Stand',
              lat: 31.326,
              lng: 75.5762,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Jalandhar–Delhi)',
              lat: 30.4313,
              lng: 76.1185,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Jalandhar–Delhi)',
              lat: 29.5376,
              lng: 76.6618,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Delhi ISBT Kashmere Gate',
              lat: 28.6672,
              lng: 77.2284,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:00 AM',
              arrivalTime: '12:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '12:00 PM',
              arrivalTime: '06:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '10:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              31.326,
              75.5762
          ],
          [
              30.6166,
              75.9446
          ],
          [
              30.0221,
              76.4278
          ],
          [
              29.291,
              76.7744
          ],
          [
              28.6672,
              77.2284
          ]
      ]
  },
  {
      id: 'r68',
      routeName: 'Jammu - Delhi Express',
      from: 'Jammu',
      to: 'Delhi',
      distance: '600 km',
      duration: '10h 00m',
      fare: {
          sleeper: 1100,
          ac: 1650,
          nonAc: 825
      },
      stops: [
          {
              name: 'Jammu Jammu Bus Stand',
              lat: 32.7266,
              lng: 74.857,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Jammu–Delhi)',
              lat: 31.3699,
              lng: 75.6439,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Jammu–Delhi)',
              lat: 29.9958,
              lng: 76.4134,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Delhi ISBT Kashmere Gate',
              lat: 28.6672,
              lng: 77.2284,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '07:00 AM',
              arrivalTime: '02:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '03:00 PM',
              arrivalTime: '10:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              32.7266,
              74.857
          ],
          [
              31.7169,
              75.455
          ],
          [
              30.7242,
              76.07
          ],
          [
              29.6832,
              76.6367
          ],
          [
              28.6672,
              77.2284
          ]
      ]
  },
  {
      id: 'r69',
      routeName: 'Jaipur - Ajmer Express',
      from: 'Jaipur',
      to: 'Ajmer',
      distance: '135 km',
      duration: '2h 30m',
      fare: {
          sleeper: 310,
          ac: 460,
          nonAc: 230
      },
      stops: [
          {
              name: 'Jaipur Sindhi Camp Bus Stand',
              lat: 26.9157,
              lng: 75.788,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Jaipur–Ajmer)',
              lat: 26.7791,
              lng: 75.424,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Jaipur–Ajmer)',
              lat: 26.6567,
              lng: 75.0741,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Ajmer Ajmer Bus Stand',
              lat: 26.4499,
              lng: 74.6399,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '08:00 AM',
              arrivalTime: '03:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '08:00 PM',
              arrivalTime: '03:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              26.9157,
              75.788
          ],
          [
              26.7588,
              75.4605
          ],
          [
              26.6652,
              75.1964
          ],
          [
              26.5469,
              74.9075
          ],
          [
              26.4499,
              74.6399
          ]
      ]
  },
  {
      id: 'r70',
      routeName: 'Jaipur - Bikaner Express',
      from: 'Jaipur',
      to: 'Bikaner',
      distance: '335 km',
      duration: '6h 00m',
      fare: {
          sleeper: 700,
          ac: 1050,
          nonAc: 525
      },
      stops: [
          {
              name: 'Jaipur Sindhi Camp Bus Stand',
              lat: 26.9157,
              lng: 75.788,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Jaipur–Bikaner)',
              lat: 27.262,
              lng: 74.9398,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Jaipur–Bikaner)',
              lat: 27.65,
              lng: 74.1334,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Bikaner Bikaner Bus Stand',
              lat: 28.0229,
              lng: 73.3119,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:30 AM',
              arrivalTime: '01:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '01:30 PM',
              arrivalTime: '08:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              26.9157,
              75.788
          ],
          [
              27.211,
              75.1875
          ],
          [
              27.4489,
              74.5296
          ],
          [
              27.7629,
              73.9477
          ],
          [
              28.0229,
              73.3119
          ]
      ]
  },
  {
      id: 'r71',
      routeName: 'Jaipur - Kota Express',
      from: 'Jaipur',
      to: 'Kota',
      distance: '245 km',
      duration: '4h 30m',
      fare: {
          sleeper: 540,
          ac: 810,
          nonAc: 405
      },
      stops: [
          {
              name: 'Jaipur Sindhi Camp Bus Stand',
              lat: 26.9157,
              lng: 75.788,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Jaipur–Kota)',
              lat: 26.2912,
              lng: 75.7564,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Jaipur–Kota)',
              lat: 25.7958,
              lng: 75.8539,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Kota Kota Bus Stand',
              lat: 25.2138,
              lng: 75.8648,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '09:00 AM',
              arrivalTime: '05:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '05:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              26.9157,
              75.788
          ],
          [
              26.4502,
              75.7671
          ],
          [
              26.1077,
              75.8693
          ],
          [
              25.6143,
              75.8206
          ],
          [
              25.2138,
              75.8648
          ]
      ]
  },
  {
      id: 'r72',
      routeName: 'Jaipur - Pushkar Express',
      from: 'Jaipur',
      to: 'Pushkar',
      distance: '150 km',
      duration: '2h 45m',
      fare: {
          sleeper: 340,
          ac: 510,
          nonAc: 255
      },
      stops: [
          {
              name: 'Jaipur Sindhi Camp Bus Stand',
              lat: 26.9157,
              lng: 75.788,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Jaipur–Pushkar)',
              lat: 26.8091,
              lng: 75.4123,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Jaipur–Pushkar)',
              lat: 26.61,
              lng: 74.9442,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Pushkar Pushkar Bus Stand',
              lat: 26.4885,
              lng: 74.5537,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:00 AM',
              arrivalTime: '12:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '12:00 PM',
              arrivalTime: '06:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '10:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              26.9157,
              75.788
          ],
          [
              26.8079,
              75.4784
          ],
          [
              26.6736,
              75.1424
          ],
          [
              26.6287,
              74.8957
          ],
          [
              26.4885,
              74.5537
          ]
      ]
  },
  {
      id: 'r73',
      routeName: 'Udaipur - Jodhpur Express',
      from: 'Udaipur',
      to: 'Jodhpur',
      distance: '260 km',
      duration: '5h 00m',
      fare: {
          sleeper: 570,
          ac: 855,
          nonAc: 428
      },
      stops: [
          {
              name: 'Udaipur UIT Circle Bus Stand',
              lat: 24.5854,
              lng: 73.7125,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Udaipur–Jodhpur)',
              lat: 25.209,
              lng: 73.5366,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Udaipur–Jodhpur)',
              lat: 25.7858,
              lng: 73.314,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Jodhpur Raika Bagh Bus Stand',
              lat: 26.2993,
              lng: 73.0281,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '07:00 AM',
              arrivalTime: '02:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '03:00 PM',
              arrivalTime: '10:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              24.5854,
              73.7125
          ],
          [
              24.9723,
              73.4998
          ],
          [
              25.4768,
              73.4048
          ],
          [
              25.8413,
              73.1696
          ],
          [
              26.2993,
              73.0281
          ]
      ]
  },
  {
      id: 'r74',
      routeName: 'Ajmer - Jodhpur Express',
      from: 'Ajmer',
      to: 'Jodhpur',
      distance: '200 km',
      duration: '4h 00m',
      fare: {
          sleeper: 450,
          ac: 675,
          nonAc: 338
      },
      stops: [
          {
              name: 'Ajmer Ajmer Bus Stand',
              lat: 26.4499,
              lng: 74.6399,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Ajmer–Jodhpur)',
              lat: 26.3326,
              lng: 74.0356,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Ajmer–Jodhpur)',
              lat: 26.3125,
              lng: 73.5284,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Jodhpur Raika Bagh Bus Stand',
              lat: 26.2993,
              lng: 73.0281,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '08:00 AM',
              arrivalTime: '03:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '08:00 PM',
              arrivalTime: '03:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              26.4499,
              74.6399
          ],
          [
              26.3879,
              74.2126
          ],
          [
              26.3725,
              73.8319
          ],
          [
              26.2896,
              73.3837
          ],
          [
              26.2993,
              73.0281
          ]
      ]
  },
  {
      id: 'r75',
      routeName: 'Agra - Mathura Express',
      from: 'Agra',
      to: 'Mathura',
      distance: '55 km',
      duration: '1h 15m',
      fare: {
          sleeper: 120,
          ac: 180,
          nonAc: 90
      },
      stops: [
          {
              name: 'Agra ISBT Idgah',
              lat: 27.1767,
              lng: 78.0081,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Agra–Mathura)',
              lat: 27.314,
              lng: 77.9287,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Agra–Mathura)',
              lat: 27.3523,
              lng: 77.7503,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Mathura Mathura Bus Stand',
              lat: 27.4924,
              lng: 77.6737,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:30 AM',
              arrivalTime: '01:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '01:30 PM',
              arrivalTime: '08:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              27.1767,
              78.0081
          ],
          [
              27.2112,
              77.8801
          ],
          [
              27.3428,
              77.8491
          ],
          [
              27.3853,
              77.7291
          ],
          [
              27.4924,
              77.6737
          ]
      ]
  },
  {
      id: 'r76',
      routeName: 'Allahabad - Varanasi Express',
      from: 'Allahabad',
      to: 'Varanasi',
      distance: '128 km',
      duration: '3h 00m',
      fare: {
          sleeper: 300,
          ac: 450,
          nonAc: 225
      },
      stops: [
          {
              name: 'Allahabad Civil Lines Bus Stand',
              lat: 25.4358,
              lng: 81.8463,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Allahabad–Varanasi)',
              lat: 25.4213,
              lng: 82.2592,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Allahabad–Varanasi)',
              lat: 25.3562,
              lng: 82.6215,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Varanasi Cantt Bus Stand',
              lat: 25.3176,
              lng: 83.0103,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '09:00 AM',
              arrivalTime: '05:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '05:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              25.4358,
              81.8463
          ],
          [
              25.4256,
              82.1567
          ],
          [
              25.3846,
              82.4362
          ],
          [
              25.3173,
              82.6895
          ],
          [
              25.3176,
              83.0103
          ]
      ]
  },
  {
      id: 'r77',
      routeName: 'Lucknow - Gorakhpur Express',
      from: 'Lucknow',
      to: 'Gorakhpur',
      distance: '270 km',
      duration: '5h 00m',
      fare: {
          sleeper: 580,
          ac: 870,
          nonAc: 435
      },
      stops: [
          {
              name: 'Lucknow Alambagh Bus Stand',
              lat: 26.817,
              lng: 80.893,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Lucknow–Gorakhpur)',
              lat: 26.7616,
              lng: 81.6831,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Lucknow–Gorakhpur)',
              lat: 26.8334,
              lng: 82.6004,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Gorakhpur Gorakhpur Bus Stand',
              lat: 26.7606,
              lng: 83.3732,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:00 AM',
              arrivalTime: '12:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '12:00 PM',
              arrivalTime: '06:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '10:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              26.817,
              80.893
          ],
          [
              26.8239,
              81.534
          ],
          [
              26.8236,
              82.1679
          ],
          [
              26.7261,
              82.7045
          ],
          [
              26.7606,
              83.3732
          ]
      ]
  },
  {
      id: 'r78',
      routeName: 'Lucknow - Kanpur Express',
      from: 'Lucknow',
      to: 'Kanpur',
      distance: '80 km',
      duration: '1h 45m',
      fare: {
          sleeper: 180,
          ac: 270,
          nonAc: 135
      },
      stops: [
          {
              name: 'Lucknow Alambagh Bus Stand',
              lat: 26.817,
              lng: 80.893,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Lucknow–Kanpur)',
              lat: 26.6649,
              lng: 80.6763,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Lucknow–Kanpur)',
              lat: 26.5823,
              lng: 80.5289,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Kanpur Jhakarkati Bus Stand',
              lat: 26.4499,
              lng: 80.3319,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '07:00 AM',
              arrivalTime: '02:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '03:00 PM',
              arrivalTime: '10:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              26.817,
              80.893
          ],
          [
              26.7709,
              80.7984
          ],
          [
              26.624,
              80.603
          ],
          [
              26.5741,
              80.5046
          ],
          [
              26.4499,
              80.3319
          ]
      ]
  },
  {
      id: 'r79',
      routeName: 'Mumbai - Aurangabad Express',
      from: 'Mumbai',
      to: 'Aurangabad',
      distance: '335 km',
      duration: '6h 00m',
      fare: {
          sleeper: 700,
          ac: 1050,
          nonAc: 525
      },
      stops: [
          {
              name: 'Mumbai Mumbai Central Bus Stand',
              lat: 18.969,
              lng: 72.8194,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Mumbai–Aurangabad)',
              lat: 19.2834,
              lng: 73.6727,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Mumbai–Aurangabad)',
              lat: 19.5212,
              lng: 74.4494,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Aurangabad Aurangabad Bus Stand',
              lat: 19.8762,
              lng: 75.3433,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '08:00 AM',
              arrivalTime: '03:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '08:00 PM',
              arrivalTime: '03:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              18.969,
              72.8194
          ],
          [
              19.148,
              73.4026
          ],
          [
              19.4485,
              74.1072
          ],
          [
              19.6734,
              74.7363
          ],
          [
              19.8762,
              75.3433
          ]
      ]
  },
  {
      id: 'r80',
      routeName: 'Mumbai - Kolhapur Express',
      from: 'Mumbai',
      to: 'Kolhapur',
      distance: '380 km',
      duration: '7h 00m',
      fare: {
          sleeper: 780,
          ac: 1170,
          nonAc: 585
      },
      stops: [
          {
              name: 'Mumbai Mumbai Central Bus Stand',
              lat: 18.969,
              lng: 72.8194,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Mumbai–Kolhapur)',
              lat: 18.2787,
              lng: 73.3584,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Mumbai–Kolhapur)',
              lat: 17.4705,
              lng: 73.7795,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Kolhapur Kolhapur Bus Stand',
              lat: 16.705,
              lng: 74.2433,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:30 AM',
              arrivalTime: '01:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '01:30 PM',
              arrivalTime: '08:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              18.969,
              72.8194
          ],
          [
              18.3891,
              73.1615
          ],
          [
              17.8536,
              73.548
          ],
          [
              17.2453,
              73.8616
          ],
          [
              16.705,
              74.2433
          ]
      ]
  },
  {
      id: 'r81',
      routeName: 'Mumbai - Solapur Express',
      from: 'Mumbai',
      to: 'Solapur',
      distance: '400 km',
      duration: '7h 30m',
      fare: {
          sleeper: 820,
          ac: 1230,
          nonAc: 615
      },
      stops: [
          {
              name: 'Mumbai Mumbai Central Bus Stand',
              lat: 18.969,
              lng: 72.8194,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Mumbai–Solapur)',
              lat: 18.557,
              lng: 73.8728,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Mumbai–Solapur)',
              lat: 18.0371,
              lng: 74.8182,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Solapur Solapur Bus Stand',
              lat: 17.6599,
              lng: 75.9064,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '09:00 AM',
              arrivalTime: '05:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '05:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              18.969,
              72.8194
          ],
          [
              18.649,
              73.5984
          ],
          [
              18.3247,
              74.3731
          ],
          [
              17.9373,
              75.0847
          ],
          [
              17.6599,
              75.9064
          ]
      ]
  },
  {
      id: 'r82',
      routeName: 'Pune - Kolhapur Express',
      from: 'Pune',
      to: 'Kolhapur',
      distance: '230 km',
      duration: '4h 30m',
      fare: {
          sleeper: 510,
          ac: 765,
          nonAc: 383
      },
      stops: [
          {
              name: 'Pune Swargate Bus Stand',
              lat: 18.5018,
              lng: 73.8636,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Pune–Kolhapur)',
              lat: 17.9256,
              lng: 74.0129,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Pune–Kolhapur)',
              lat: 17.2477,
              lng: 74.0605,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Kolhapur Kolhapur Bus Stand',
              lat: 16.705,
              lng: 74.2433,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:00 AM',
              arrivalTime: '12:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '12:00 PM',
              arrivalTime: '06:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '10:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              18.5018,
              73.8636
          ],
          [
              18.0301,
              73.936
          ],
          [
              17.5713,
              74.0213
          ],
          [
              17.1231,
              74.1173
          ],
          [
              16.705,
              74.2433
          ]
      ]
  },
  {
      id: 'r83',
      routeName: 'Pune - Solapur Express',
      from: 'Pune',
      to: 'Solapur',
      distance: '247 km',
      duration: '4h 30m',
      fare: {
          sleeper: 540,
          ac: 810,
          nonAc: 405
      },
      stops: [
          {
              name: 'Pune Swargate Bus Stand',
              lat: 18.5018,
              lng: 73.8636,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Pune–Solapur)',
              lat: 18.238,
              lng: 74.5614,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Pune–Solapur)',
              lat: 17.8748,
              lng: 75.1597,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Solapur Solapur Bus Stand',
              lat: 17.6599,
              lng: 75.9064,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '07:00 AM',
              arrivalTime: '02:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '03:00 PM',
              arrivalTime: '10:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              18.5018,
              73.8636
          ],
          [
              18.3312,
              74.4141
          ],
          [
              18.0853,
              74.8894
          ],
          [
              17.857,
              75.3823
          ],
          [
              17.6599,
              75.9064
          ]
      ]
  },
  {
      id: 'r84',
      routeName: 'Pune - Aurangabad Express',
      from: 'Pune',
      to: 'Aurangabad',
      distance: '235 km',
      duration: '4h 30m',
      fare: {
          sleeper: 520,
          ac: 780,
          nonAc: 390
      },
      stops: [
          {
              name: 'Pune Swargate Bus Stand',
              lat: 18.5018,
              lng: 73.8636,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Pune–Aurangabad)',
              lat: 19.0306,
              lng: 74.4275,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Pune–Aurangabad)',
              lat: 19.3542,
              lng: 74.7862,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Aurangabad Aurangabad Bus Stand',
              lat: 19.8762,
              lng: 75.3433,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '08:00 AM',
              arrivalTime: '03:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '08:00 PM',
              arrivalTime: '03:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              18.5018,
              73.8636
          ],
          [
              18.8535,
              74.2416
          ],
          [
              19.1458,
              74.5603
          ],
          [
              19.5143,
              74.9551
          ],
          [
              19.8762,
              75.3433
          ]
      ]
  },
  {
      id: 'r85',
      routeName: 'Pune - Nagpur Express',
      from: 'Pune',
      to: 'Nagpur',
      distance: '740 km',
      duration: '12h 00m',
      fare: {
          sleeper: 1200,
          ac: 1800,
          nonAc: 900
      },
      stops: [
          {
              name: 'Pune Swargate Bus Stand',
              lat: 18.5018,
              lng: 73.8636,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Pune–Nagpur)',
              lat: 19.3382,
              lng: 75.5602,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Pune–Nagpur)',
              lat: 20.288,
              lng: 77.3702,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Nagpur Central Bus Stand',
              lat: 21.1458,
              lng: 79.0882,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:30 AM',
              arrivalTime: '01:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '01:30 PM',
              arrivalTime: '08:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              18.5018,
              73.8636
          ],
          [
              19.1422,
              75.1491
          ],
          [
              19.8022,
              76.4543
          ],
          [
              20.5057,
              77.803
          ],
          [
              21.1458,
              79.0882
          ]
      ]
  },
  {
      id: 'r86',
      routeName: 'Nagpur - Amravati Express',
      from: 'Nagpur',
      to: 'Amravati',
      distance: '155 km',
      duration: '3h 00m',
      fare: {
          sleeper: 360,
          ac: 540,
          nonAc: 270
      },
      stops: [
          {
              name: 'Nagpur Central Bus Stand',
              lat: 21.1458,
              lng: 79.0882,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Nagpur–Amravati)',
              lat: 21.0943,
              lng: 78.67,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Nagpur–Amravati)',
              lat: 21.0145,
              lng: 78.2234,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Amravati Amravati Bus Stand',
              lat: 20.9374,
              lng: 77.7796,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '09:00 AM',
              arrivalTime: '05:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '05:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              21.1458,
              79.0882
          ],
          [
              21.1208,
              78.7882
          ],
          [
              21.089,
              78.4813
          ],
          [
              20.9829,
              78.1002
          ],
          [
              20.9374,
              77.7796
          ]
      ]
  },
  {
      id: 'r87',
      routeName: 'Bhopal - Jabalpur Express',
      from: 'Bhopal',
      to: 'Jabalpur',
      distance: '330 km',
      duration: '6h 00m',
      fare: {
          sleeper: 690,
          ac: 1035,
          nonAc: 518
      },
      stops: [
          {
              name: 'Bhopal ISBT Bhopal',
              lat: 23.2599,
              lng: 77.4126,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Bhopal–Jabalpur)',
              lat: 23.161,
              lng: 78.1978,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Bhopal–Jabalpur)',
              lat: 23.2599,
              lng: 79.1807,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Jabalpur Jabalpur Bus Stand',
              lat: 23.1815,
              lng: 79.9864,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:00 AM',
              arrivalTime: '12:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '12:00 PM',
              arrivalTime: '06:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '10:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              23.2599,
              77.4126
          ],
          [
              23.2075,
              78.0232
          ],
          [
              23.2287,
              78.7075
          ],
          [
              23.2344,
              79.3763
          ],
          [
              23.1815,
              79.9864
          ]
      ]
  },
  {
      id: 'r88',
      routeName: 'Bhopal - Gwalior Express',
      from: 'Bhopal',
      to: 'Gwalior',
      distance: '425 km',
      duration: '7h 30m',
      fare: {
          sleeper: 870,
          ac: 1305,
          nonAc: 653
      },
      stops: [
          {
              name: 'Bhopal ISBT Bhopal',
              lat: 23.2599,
              lng: 77.4126,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Bhopal–Gwalior)',
              lat: 24.2343,
              lng: 77.6576,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Bhopal–Gwalior)',
              lat: 25.2722,
              lng: 77.9661,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Gwalior Gwalior Bus Stand',
              lat: 26.2183,
              lng: 78.1828,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '07:00 AM',
              arrivalTime: '02:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '03:00 PM',
              arrivalTime: '10:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              23.2599,
              77.4126
          ],
          [
              23.9541,
              77.5597
          ],
          [
              24.756,
              77.8146
          ],
          [
              25.5124,
              78.0239
          ],
          [
              26.2183,
              78.1828
          ]
      ]
  },
  {
      id: 'r89',
      routeName: 'Bhopal - Ujjain Express',
      from: 'Bhopal',
      to: 'Ujjain',
      distance: '190 km',
      duration: '3h 30m',
      fare: {
          sleeper: 430,
          ac: 645,
          nonAc: 323
      },
      stops: [
          {
              name: 'Bhopal ISBT Bhopal',
              lat: 23.2599,
              lng: 77.4126,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Bhopal–Ujjain)',
              lat: 23.1871,
              lng: 76.8262,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Bhopal–Ujjain)',
              lat: 23.2286,
              lng: 76.3542,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Ujjain Ujjain Bus Stand',
              lat: 23.1765,
              lng: 75.7885,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '08:00 AM',
              arrivalTime: '03:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '08:00 PM',
              arrivalTime: '03:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              23.2599,
              77.4126
          ],
          [
              23.2522,
              77.0198
          ],
          [
              23.1949,
              76.5772
          ],
          [
              23.2193,
              76.2165
          ],
          [
              23.1765,
              75.7885
          ]
      ]
  },
  {
      id: 'r90',
      routeName: 'Indore - Ujjain Express',
      from: 'Indore',
      to: 'Ujjain',
      distance: '55 km',
      duration: '1h 15m',
      fare: {
          sleeper: 120,
          ac: 180,
          nonAc: 90
      },
      stops: [
          {
              name: 'Indore Gangwal Bus Stand',
              lat: 22.7196,
              lng: 75.8577,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Indore–Ujjain)',
              lat: 22.9328,
              lng: 75.8956,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Indore–Ujjain)',
              lat: 23.0362,
              lng: 75.8235,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Ujjain Ujjain Bus Stand',
              lat: 23.1765,
              lng: 75.7885,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:30 AM',
              arrivalTime: '01:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '01:30 PM',
              arrivalTime: '08:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              22.7196,
              75.8577
          ],
          [
              22.8199,
              75.8265
          ],
          [
              22.96,
              75.835
          ],
          [
              23.0639,
              75.8074
          ],
          [
              23.1765,
              75.7885
          ]
      ]
  },
  {
      id: 'r91',
      routeName: 'Raipur - Bilaspur Express',
      from: 'Raipur',
      to: 'Bilaspur',
      distance: '130 km',
      duration: '2h 30m',
      fare: {
          sleeper: 300,
          ac: 450,
          nonAc: 225
      },
      stops: [
          {
              name: 'Raipur Raipur Bus Stand',
              lat: 21.2514,
              lng: 81.6296,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Raipur–Bilaspur)',
              lat: 21.5825,
              lng: 81.855,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Raipur–Bilaspur)',
              lat: 21.7816,
              lng: 81.9485,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Bilaspur Bilaspur Bus Stand',
              lat: 22.0797,
              lng: 82.1409,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '09:00 AM',
              arrivalTime: '05:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '05:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              21.2514,
              81.6296
          ],
          [
              21.4384,
              81.7374
          ],
          [
              21.6829,
              81.9026
          ],
          [
              21.8782,
              82.0187
          ],
          [
              22.0797,
              82.1409
          ]
      ]
  },
  {
      id: 'r92',
      routeName: 'Raipur - Jagdalpur Express',
      from: 'Raipur',
      to: 'Jagdalpur',
      distance: '300 km',
      duration: '6h 00m',
      fare: {
          sleeper: 650,
          ac: 975,
          nonAc: 488
      },
      stops: [
          {
              name: 'Raipur Raipur Bus Stand',
              lat: 21.2514,
              lng: 81.6296,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Raipur–Jagdalpur)',
              lat: 20.5684,
              lng: 81.7999,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Raipur–Jagdalpur)',
              lat: 19.7829,
              lng: 81.8678,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Jagdalpur Jagdalpur Bus Stand',
              lat: 19.0798,
              lng: 82.0181,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:00 AM',
              arrivalTime: '12:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '12:00 PM',
              arrivalTime: '06:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '10:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              21.2514,
              81.6296
          ],
          [
              20.7083,
              81.7265
          ],
          [
              20.1846,
              81.8429
          ],
          [
              19.6364,
              81.9347
          ],
          [
              19.0798,
              82.0181
          ]
      ]
  },
  {
      id: 'r93',
      routeName: 'Nagpur - Jabalpur Express',
      from: 'Nagpur',
      to: 'Jabalpur',
      distance: '325 km',
      duration: '5h 30m',
      fare: {
          sleeper: 680,
          ac: 1020,
          nonAc: 510
      },
      stops: [
          {
              name: 'Nagpur Central Bus Stand',
              lat: 21.1458,
              lng: 79.0882,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Nagpur–Jabalpur)',
              lat: 21.8771,
              lng: 79.4403,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Nagpur–Jabalpur)',
              lat: 22.555,
              lng: 79.739,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Jabalpur Jabalpur Bus Stand',
              lat: 23.1815,
              lng: 79.9864,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '07:00 AM',
              arrivalTime: '02:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '03:00 PM',
              arrivalTime: '10:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              21.1458,
              79.0882
          ],
          [
              21.6751,
              79.3332
          ],
          [
              22.1729,
              79.5466
          ],
          [
              22.7167,
              79.8059
          ],
          [
              23.1815,
              79.9864
          ]
      ]
  },
  {
      id: 'r94',
      routeName: 'Bangalore - Hubli Express',
      from: 'Bangalore',
      to: 'Hubli',
      distance: '420 km',
      duration: '7h 00m',
      fare: {
          sleeper: 860,
          ac: 1290,
          nonAc: 645
      },
      stops: [
          {
              name: 'Bangalore Majestic Bus Stand',
              lat: 12.9772,
              lng: 77.5724,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Bangalore–Hubli)',
              lat: 13.7559,
              lng: 76.7392,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Bangalore–Hubli)',
              lat: 14.504,
              lng: 75.8753,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Hubli Hubli Bus Stand',
              lat: 15.3647,
              lng: 75.124,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '08:00 AM',
              arrivalTime: '03:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '08:00 PM',
              arrivalTime: '03:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              12.9772,
              77.5724
          ],
          [
              13.5819,
              76.9682
          ],
          [
              14.1762,
              76.3535
          ],
          [
              14.7699,
              75.7382
          ],
          [
              15.3647,
              75.124
          ]
      ]
  },
  {
      id: 'r95',
      routeName: 'Bangalore - Belgaum Express',
      from: 'Bangalore',
      to: 'Belgaum',
      distance: '505 km',
      duration: '8h 30m',
      fare: {
          sleeper: 1020,
          ac: 1530,
          nonAc: 765
      },
      stops: [
          {
              name: 'Bangalore Majestic Bus Stand',
              lat: 12.9772,
              lng: 77.5724,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Bangalore–Belgaum)',
              lat: 13.9129,
              lng: 76.5257,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Bangalore–Belgaum)',
              lat: 14.8209,
              lng: 75.4513,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Belgaum Belgaum Bus Stand',
              lat: 15.8497,
              lng: 74.4977,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:30 AM',
              arrivalTime: '01:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '01:30 PM',
              arrivalTime: '08:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              12.9772,
              77.5724
          ],
          [
              13.7396,
              76.848
          ],
          [
              14.4138,
              76.0354
          ],
          [
              15.1469,
              75.2817
          ],
          [
              15.8497,
              74.4977
          ]
      ]
  },
  {
      id: 'r96',
      routeName: 'Bangalore - Gulbarga Express',
      from: 'Bangalore',
      to: 'Gulbarga',
      distance: '620 km',
      duration: '10h 00m',
      fare: {
          sleeper: 1200,
          ac: 1800,
          nonAc: 900
      },
      stops: [
          {
              name: 'Bangalore Majestic Bus Stand',
              lat: 12.9772,
              lng: 77.5724,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Bangalore–Gulbarga)',
              lat: 14.4411,
              lng: 77.3394,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Bangalore–Gulbarga)',
              lat: 15.9363,
              lng: 77.1377,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Gulbarga Gulbarga Bus Stand',
              lat: 17.3297,
              lng: 76.8343,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '09:00 AM',
              arrivalTime: '05:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '05:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              12.9772,
              77.5724
          ],
          [
              14.0633,
              77.3858
          ],
          [
              15.1729,
              77.2228
          ],
          [
              16.1937,
              76.9709
          ],
          [
              17.3297,
              76.8343
          ]
      ]
  },
  {
      id: 'r97',
      routeName: 'Hubli - Belgaum Express',
      from: 'Hubli',
      to: 'Belgaum',
      distance: '98 km',
      duration: '2h 00m',
      fare: {
          sleeper: 230,
          ac: 345,
          nonAc: 173
      },
      stops: [
          {
              name: 'Hubli Hubli Bus Stand',
              lat: 15.3647,
              lng: 75.124,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Hubli–Belgaum)',
              lat: 15.4859,
              lng: 74.8747,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Hubli–Belgaum)',
              lat: 15.753,
              lng: 74.7714,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Belgaum Belgaum Bus Stand',
              lat: 15.8497,
              lng: 74.4977,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:00 AM',
              arrivalTime: '12:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '12:00 PM',
              arrivalTime: '06:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '10:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              15.3647,
              75.124
          ],
          [
              15.5182,
              74.9997
          ],
          [
              15.6135,
              74.8171
          ],
          [
              15.7113,
              74.6371
          ],
          [
              15.8497,
              74.4977
          ]
      ]
  },
  {
      id: 'r98',
      routeName: 'Hubli - Goa Express',
      from: 'Hubli',
      to: 'Goa',
      distance: '210 km',
      duration: '4h 00m',
      fare: {
          sleeper: 460,
          ac: 690,
          nonAc: 345
      },
      stops: [
          {
              name: 'Hubli Hubli Bus Stand',
              lat: 15.3647,
              lng: 75.124,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Hubli–Goa)',
              lat: 15.3593,
              lng: 74.6418,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Hubli–Goa)',
              lat: 15.4986,
              lng: 74.3042,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Goa Kadamba Bus Stand',
              lat: 15.499,
              lng: 73.8278,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '07:00 AM',
              arrivalTime: '02:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '03:00 PM',
              arrivalTime: '10:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              15.3647,
              75.124
          ],
          [
              15.4469,
              74.8485
          ],
          [
              15.4574,
              74.5014
          ],
          [
              15.4243,
              74.1107
          ],
          [
              15.499,
              73.8278
          ]
      ]
  },
  {
      id: 'r99',
      routeName: 'Bangalore - Kochi Express',
      from: 'Bangalore',
      to: 'Kochi',
      distance: '560 km',
      duration: '9h 30m',
      fare: {
          sleeper: 1100,
          ac: 1650,
          nonAc: 825
      },
      stops: [
          {
              name: 'Bangalore Majestic Bus Stand',
              lat: 12.9772,
              lng: 77.5724,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Bangalore–Kochi)',
              lat: 11.9802,
              lng: 77.1557,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Bangalore–Kochi)',
              lat: 11.0193,
              lng: 76.7751,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Kochi KSRTC Bus Stand',
              lat: 9.9312,
              lng: 76.2673,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '08:00 AM',
              arrivalTime: '03:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '08:00 PM',
              arrivalTime: '03:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              12.9772,
              77.5724
          ],
          [
              12.2152,
              77.2456
          ],
          [
              11.4654,
              76.931
          ],
          [
              10.6446,
              76.5455
          ],
          [
              9.9312,
              76.2673
          ]
      ]
  },
  {
      id: 'r100',
      routeName: 'Chennai - Pondicherry Express',
      from: 'Chennai',
      to: 'Pondicherry',
      distance: '160 km',
      duration: '3h 00m',
      fare: {
          sleeper: 370,
          ac: 555,
          nonAc: 278
      },
      stops: [
          {
              name: 'Chennai Koyambedu Bus Stand',
              lat: 13.0694,
              lng: 80.1948,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Chennai–Pondicherry)',
              lat: 12.6891,
              lng: 80.0616,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Chennai–Pondicherry)',
              lat: 12.3366,
              lng: 79.9562,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Pondicherry Pondicherry Bus Stand',
              lat: 11.9416,
              lng: 79.8083,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:30 AM',
              arrivalTime: '01:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '01:30 PM',
              arrivalTime: '08:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              13.0694,
              80.1948
          ],
          [
              12.8289,
              80.1397
          ],
          [
              12.4644,
              79.9605
          ],
          [
              12.1791,
              79.8605
          ],
          [
              11.9416,
              79.8083
          ]
      ]
  },
  {
      id: 'r101',
      routeName: 'Chennai - Vellore Express',
      from: 'Chennai',
      to: 'Vellore',
      distance: '134 km',
      duration: '2h 30m',
      fare: {
          sleeper: 310,
          ac: 465,
          nonAc: 233
      },
      stops: [
          {
              name: 'Chennai Koyambedu Bus Stand',
              lat: 13.0694,
              lng: 80.1948,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Chennai–Vellore)',
              lat: 12.991,
              lng: 79.8132,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Chennai–Vellore)',
              lat: 13.02,
              lng: 79.5391,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Vellore Vellore Bus Stand',
              lat: 12.9165,
              lng: 79.1325,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '09:00 AM',
              arrivalTime: '05:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '05:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              13.0694,
              80.1948
          ],
          [
              12.9927,
              79.8908
          ],
          [
              12.9796,
              79.6503
          ],
          [
              13.0027,
              79.4461
          ],
          [
              12.9165,
              79.1325
          ]
      ]
  },
  {
      id: 'r102',
      routeName: 'Chennai - Salem Express',
      from: 'Chennai',
      to: 'Salem',
      distance: '340 km',
      duration: '5h 30m',
      fare: {
          sleeper: 700,
          ac: 1050,
          nonAc: 525
      },
      stops: [
          {
              name: 'Chennai Koyambedu Bus Stand',
              lat: 13.0694,
              lng: 80.1948,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Chennai–Salem)',
              lat: 12.6701,
              lng: 79.5809,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Chennai–Salem)',
              lat: 12.1924,
              lng: 78.8886,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Salem Salem Bus Stand',
              lat: 11.6643,
              lng: 78.146,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:00 AM',
              arrivalTime: '12:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '12:00 PM',
              arrivalTime: '06:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '10:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              13.0694,
              80.1948
          ],
          [
              12.7073,
              79.6717
          ],
          [
              12.3877,
              79.1912
          ],
          [
              12.0195,
              78.6621
          ],
          [
              11.6643,
              78.146
          ]
      ]
  },
  {
      id: 'r103',
      routeName: 'Chennai - Trichy Express',
      from: 'Chennai',
      to: 'Trichy',
      distance: '330 km',
      duration: '5h 30m',
      fare: {
          sleeper: 680,
          ac: 1020,
          nonAc: 510
      },
      stops: [
          {
              name: 'Chennai Koyambedu Bus Stand',
              lat: 13.0694,
              lng: 80.1948,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Chennai–Trichy)',
              lat: 12.2898,
              lng: 79.6782,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Chennai–Trichy)',
              lat: 11.6215,
              lng: 79.2727,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Trichy Central Bus Stand',
              lat: 10.7905,
              lng: 78.7047,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '07:00 AM',
              arrivalTime: '02:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '03:00 PM',
              arrivalTime: '10:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              13.0694,
              80.1948
          ],
          [
              12.5371,
              79.8597
          ],
          [
              11.9034,
              79.4232
          ],
          [
              11.3508,
              79.0678
          ],
          [
              10.7905,
              78.7047
          ]
      ]
  },
  {
      id: 'r104',
      routeName: 'Chennai - Tirupati Express',
      from: 'Chennai',
      to: 'Tirupati',
      distance: '148 km',
      duration: '3h 00m',
      fare: {
          sleeper: 340,
          ac: 510,
          nonAc: 255
      },
      stops: [
          {
              name: 'Chennai Koyambedu Bus Stand',
              lat: 13.0694,
              lng: 80.1948,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Chennai–Tirupati)',
              lat: 13.2944,
              lng: 79.9748,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Chennai–Tirupati)',
              lat: 13.4953,
              lng: 79.7307,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Tirupati Tirupati Bus Stand',
              lat: 13.6288,
              lng: 79.4192,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '08:00 AM',
              arrivalTime: '03:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '08:00 PM',
              arrivalTime: '03:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              13.0694,
              80.1948
          ],
          [
              13.2158,
              80.0074
          ],
          [
              13.3222,
              79.7801
          ],
          [
              13.4533,
              79.5775
          ],
          [
              13.6288,
              79.4192
          ]
      ]
  },
  {
      id: 'r105',
      routeName: 'Salem - Coimbatore Express',
      from: 'Salem',
      to: 'Coimbatore',
      distance: '160 km',
      duration: '3h 00m',
      fare: {
          sleeper: 370,
          ac: 555,
          nonAc: 278
      },
      stops: [
          {
              name: 'Salem Salem Bus Stand',
              lat: 11.6643,
              lng: 78.146,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Salem–Coimbatore)',
              lat: 11.4984,
              lng: 77.7992,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Salem–Coimbatore)',
              lat: 11.2307,
              lng: 77.3506,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Coimbatore Gandhipuram Bus Stand',
              lat: 11.0168,
              lng: 76.9558,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:30 AM',
              arrivalTime: '01:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '01:30 PM',
              arrivalTime: '08:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              11.6643,
              78.146
          ],
          [
              11.4832,
              77.8292
          ],
          [
              11.3674,
              77.5778
          ],
          [
              11.2227,
              77.2974
          ],
          [
              11.0168,
              76.9558
          ]
      ]
  },
  {
      id: 'r106',
      routeName: 'Trichy - Madurai Express',
      from: 'Trichy',
      to: 'Madurai',
      distance: '135 km',
      duration: '2h 30m',
      fare: {
          sleeper: 310,
          ac: 465,
          nonAc: 233
      },
      stops: [
          {
              name: 'Trichy Central Bus Stand',
              lat: 10.7905,
              lng: 78.7047,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Trichy–Madurai)',
              lat: 10.4963,
              lng: 78.504,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Trichy–Madurai)',
              lat: 10.2041,
              lng: 78.3053,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Madurai Central Bus Stand',
              lat: 9.9252,
              lng: 78.1198,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '09:00 AM',
              arrivalTime: '05:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '05:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              10.7905,
              78.7047
          ],
          [
              10.5964,
              78.5807
          ],
          [
              10.4021,
              78.4565
          ],
          [
              10.1305,
              78.255
          ],
          [
              9.9252,
              78.1198
          ]
      ]
  },
  {
      id: 'r107',
      routeName: 'Trichy - Thanjavur Express',
      from: 'Trichy',
      to: 'Thanjavur',
      distance: '57 km',
      duration: '1h 15m',
      fare: {
          sleeper: 130,
          ac: 195,
          nonAc: 98
      },
      stops: [
          {
              name: 'Trichy Central Bus Stand',
              lat: 10.7905,
              lng: 78.7047,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Trichy–Thanjavur)',
              lat: 10.8617,
              lng: 78.9215,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Trichy–Thanjavur)',
              lat: 10.8258,
              lng: 79.0311,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Thanjavur Thanjavur Bus Stand',
              lat: 10.787,
              lng: 79.1378,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:00 AM',
              arrivalTime: '12:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '12:00 PM',
              arrivalTime: '06:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '10:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              10.7905,
              78.7047
          ],
          [
              10.7446,
              78.768
          ],
          [
              10.7749,
              78.9074
          ],
          [
              10.8183,
              79.06
          ],
          [
              10.787,
              79.1378
          ]
      ]
  },
  {
      id: 'r108',
      routeName: 'Kochi - Calicut Express',
      from: 'Kochi',
      to: 'Calicut',
      distance: '190 km',
      duration: '3h 30m',
      fare: {
          sleeper: 430,
          ac: 645,
          nonAc: 323
      },
      stops: [
          {
              name: 'Kochi KSRTC Bus Stand',
              lat: 9.9312,
              lng: 76.2673,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Kochi–Calicut)',
              lat: 10.3151,
              lng: 76.0464,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Kochi–Calicut)',
              lat: 10.8636,
              lng: 75.9901,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Calicut Calicut Bus Stand',
              lat: 11.2588,
              lng: 75.7804,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '07:00 AM',
              arrivalTime: '02:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '03:00 PM',
              arrivalTime: '10:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              9.9312,
              76.2673
          ],
          [
              10.2957,
              76.1782
          ],
          [
              10.6222,
              76.0511
          ],
          [
              10.9121,
              75.8873
          ],
          [
              11.2588,
              75.7804
          ]
      ]
  },
  {
      id: 'r109',
      routeName: 'Kochi - Thrissur Express',
      from: 'Kochi',
      to: 'Thrissur',
      distance: '75 km',
      duration: '1h 30m',
      fare: {
          sleeper: 170,
          ac: 255,
          nonAc: 128
      },
      stops: [
          {
              name: 'Kochi KSRTC Bus Stand',
              lat: 9.9312,
              lng: 76.2673,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Kochi–Thrissur)',
              lat: 10.1649,
              lng: 76.2846,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Kochi–Thrissur)',
              lat: 10.2836,
              lng: 76.1868,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Thrissur Thrissur Bus Stand',
              lat: 10.5276,
              lng: 76.2144,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '08:00 AM',
              arrivalTime: '03:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '08:00 PM',
              arrivalTime: '03:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              9.9312,
              76.2673
          ],
          [
              10.0657,
              76.2394
          ],
          [
              10.2616,
              76.2731
          ],
          [
              10.4281,
              76.2772
          ],
          [
              10.5276,
              76.2144
          ]
      ]
  },
  {
      id: 'r110',
      routeName: 'Calicut - Trivandrum Express',
      from: 'Calicut',
      to: 'Trivandrum',
      distance: '380 km',
      duration: '7h 00m',
      fare: {
          sleeper: 780,
          ac: 1170,
          nonAc: 585
      },
      stops: [
          {
              name: 'Calicut Calicut Bus Stand',
              lat: 11.2588,
              lng: 75.7804,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Calicut–Trivandrum)',
              lat: 10.4097,
              lng: 76.2282,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Calicut–Trivandrum)',
              lat: 9.4467,
              lng: 76.5623,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Trivandrum Central Bus Stand',
              lat: 8.5241,
              lng: 76.9366,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:30 AM',
              arrivalTime: '01:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '01:30 PM',
              arrivalTime: '08:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              11.2588,
              75.7804
          ],
          [
              10.5894,
              76.0837
          ],
          [
              9.9009,
              76.368
          ],
          [
              9.1656,
              76.6054
          ],
          [
              8.5241,
              76.9366
          ]
      ]
  },
  {
      id: 'r111',
      routeName: 'Thrissur - Trivandrum Express',
      from: 'Thrissur',
      to: 'Trivandrum',
      distance: '290 km',
      duration: '5h 30m',
      fare: {
          sleeper: 630,
          ac: 945,
          nonAc: 473
      },
      stops: [
          {
              name: 'Thrissur Thrissur Bus Stand',
              lat: 10.5276,
              lng: 76.2144,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Thrissur–Trivandrum)',
              lat: 9.8196,
              lng: 76.415,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Thrissur–Trivandrum)',
              lat: 9.151,
              lng: 76.6549,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Trivandrum Central Bus Stand',
              lat: 8.5241,
              lng: 76.9366,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '09:00 AM',
              arrivalTime: '05:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '05:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              10.5276,
              76.2144
          ],
          [
              10.0283,
              76.3966
          ],
          [
              9.5589,
              76.6085
          ],
          [
              9.0367,
              76.7678
          ],
          [
              8.5241,
              76.9366
          ]
      ]
  },
  {
      id: 'r112',
      routeName: 'Hyderabad - Warangal Express',
      from: 'Hyderabad',
      to: 'Warangal',
      distance: '145 km',
      duration: '2h 30m',
      fare: {
          sleeper: 330,
          ac: 495,
          nonAc: 248
      },
      stops: [
          {
              name: 'Hyderabad MGBS Bus Stand',
              lat: 17.3784,
              lng: 78.4839,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Hyderabad–Warangal)',
              lat: 17.5539,
              lng: 78.8295,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Hyderabad–Warangal)',
              lat: 17.7954,
              lng: 79.241,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Warangal Warangal Bus Stand',
              lat: 17.9784,
              lng: 79.5941,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:00 AM',
              arrivalTime: '12:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '12:00 PM',
              arrivalTime: '06:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '10:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              17.3784,
              78.4839
          ],
          [
              17.575,
              78.808
          ],
          [
              17.654,
              79.0146
          ],
          [
              17.7872,
              79.2754
          ],
          [
              17.9784,
              79.5941
          ]
      ]
  },
  {
      id: 'r113',
      routeName: 'Hyderabad - Tirupati Express',
      from: 'Hyderabad',
      to: 'Tirupati',
      distance: '570 km',
      duration: '9h 00m',
      fare: {
          sleeper: 1100,
          ac: 1650,
          nonAc: 825
      },
      stops: [
          {
              name: 'Hyderabad MGBS Bus Stand',
              lat: 17.3784,
              lng: 78.4839,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Hyderabad–Tirupati)',
              lat: 16.0576,
              lng: 78.7247,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Hyderabad–Tirupati)',
              lat: 14.8605,
              lng: 79.0893,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Tirupati Tirupati Bus Stand',
              lat: 13.6288,
              lng: 79.4192,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '07:00 AM',
              arrivalTime: '02:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '03:00 PM',
              arrivalTime: '10:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              17.3784,
              78.4839
          ],
          [
              16.418,
              78.6947
          ],
          [
              15.503,
              78.9509
          ],
          [
              14.5452,
              79.1644
          ],
          [
              13.6288,
              79.4192
          ]
      ]
  },
  {
      id: 'r114',
      routeName: 'Hyderabad - Nellore Express',
      from: 'Hyderabad',
      to: 'Nellore',
      distance: '475 km',
      duration: '7h 30m',
      fare: {
          sleeper: 940,
          ac: 1410,
          nonAc: 705
      },
      stops: [
          {
              name: 'Hyderabad MGBS Bus Stand',
              lat: 17.3784,
              lng: 78.4839,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Hyderabad–Nellore)',
              lat: 16.3893,
              lng: 78.9743,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Hyderabad–Nellore)',
              lat: 15.397,
              lng: 79.4614,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Nellore Nellore Bus Stand',
              lat: 14.4426,
              lng: 79.9865,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '08:00 AM',
              arrivalTime: '03:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '08:00 PM',
              arrivalTime: '03:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              17.3784,
              78.4839
          ],
          [
              16.6523,
              78.8674
          ],
          [
              15.9094,
              79.2341
          ],
          [
              15.151,
              79.5853
          ],
          [
              14.4426,
              79.9865
          ]
      ]
  },
  {
      id: 'r115',
      routeName: 'Hyderabad - Guntur Express',
      from: 'Hyderabad',
      to: 'Guntur',
      distance: '275 km',
      duration: '4h 30m',
      fare: {
          sleeper: 580,
          ac: 870,
          nonAc: 435
      },
      stops: [
          {
              name: 'Hyderabad MGBS Bus Stand',
              lat: 17.3784,
              lng: 78.4839,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Hyderabad–Guntur)',
              lat: 17.0617,
              lng: 79.1753,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Hyderabad–Guntur)',
              lat: 16.7349,
              lng: 79.8566,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Guntur Guntur Bus Stand',
              lat: 16.3067,
              lng: 80.4365,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:30 AM',
              arrivalTime: '01:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '01:30 PM',
              arrivalTime: '08:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              17.3784,
              78.4839
          ],
          [
              17.0606,
              78.9222
          ],
          [
              16.8708,
              79.4884
          ],
          [
              16.5775,
              79.9512
          ],
          [
              16.3067,
              80.4365
          ]
      ]
  },
  {
      id: 'r116',
      routeName: 'Vijayawada - Rajahmundry Express',
      from: 'Vijayawada',
      to: 'Rajahmundry',
      distance: '200 km',
      duration: '3h 30m',
      fare: {
          sleeper: 450,
          ac: 675,
          nonAc: 338
      },
      stops: [
          {
              name: 'Vijayawada Pandit Nehru Bus Stand',
              lat: 16.5193,
              lng: 80.6305,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Vijayawada–Rajahmundry)',
              lat: 16.7108,
              lng: 81.0528,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Vijayawada–Rajahmundry)',
              lat: 16.8953,
              lng: 81.4681,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Rajahmundry Rajahmundry Bus Stand',
              lat: 17.0005,
              lng: 81.804,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '09:00 AM',
              arrivalTime: '05:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '05:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              16.5193,
              80.6305
          ],
          [
              16.6637,
              80.948
          ],
          [
              16.7222,
              81.1795
          ],
          [
              16.8752,
              81.5056
          ],
          [
              17.0005,
              81.804
          ]
      ]
  },
  {
      id: 'r117',
      routeName: 'Kolkata - Siliguri Express',
      from: 'Kolkata',
      to: 'Siliguri',
      distance: '595 km',
      duration: '10h 00m',
      fare: {
          sleeper: 1150,
          ac: 1725,
          nonAc: 863
      },
      stops: [
          {
              name: 'Kolkata Esplanade Bus Stand',
              lat: 22.5626,
              lng: 88.3513,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Kolkata–Siliguri)',
              lat: 23.9332,
              lng: 88.3484,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Kolkata–Siliguri)',
              lat: 25.3885,
              lng: 88.4302,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Siliguri Siliguri Bus Stand',
              lat: 26.7271,
              lng: 88.3953,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:00 AM',
              arrivalTime: '12:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '12:00 PM',
              arrivalTime: '06:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '10:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              22.5626,
              88.3513
          ],
          [
              23.6103,
              88.3689
          ],
          [
              24.6899,
              88.4184
          ],
          [
              25.6742,
              88.3726
          ],
          [
              26.7271,
              88.3953
          ]
      ]
  },
  {
      id: 'r118',
      routeName: 'Kolkata - Durgapur Express',
      from: 'Kolkata',
      to: 'Durgapur',
      distance: '165 km',
      duration: '3h 00m',
      fare: {
          sleeper: 380,
          ac: 570,
          nonAc: 285
      },
      stops: [
          {
              name: 'Kolkata Esplanade Bus Stand',
              lat: 22.5626,
              lng: 88.3513,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Kolkata–Durgapur)',
              lat: 22.905,
              lng: 88.028,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Kolkata–Durgapur)',
              lat: 23.1834,
              lng: 87.6406,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Durgapur Durgapur Bus Stand',
              lat: 23.5204,
              lng: 87.3119,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '07:00 AM',
              arrivalTime: '02:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '03:00 PM',
              arrivalTime: '10:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              22.5626,
              88.3513
          ],
          [
              22.8202,
              88.1096
          ],
          [
              23.073,
              87.8631
          ],
          [
              23.2523,
              87.5431
          ],
          [
              23.5204,
              87.3119
          ]
      ]
  },
  {
      id: 'r119',
      routeName: 'Kolkata - Asansol Express',
      from: 'Kolkata',
      to: 'Asansol',
      distance: '215 km',
      duration: '3h 30m',
      fare: {
          sleeper: 480,
          ac: 720,
          nonAc: 360
      },
      stops: [
          {
              name: 'Kolkata Esplanade Bus Stand',
              lat: 22.5626,
              lng: 88.3513,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Kolkata–Asansol)',
              lat: 22.9698,
              lng: 87.9218,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Kolkata–Asansol)',
              lat: 23.3039,
              lng: 87.4192,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Asansol Asansol Bus Stand',
              lat: 23.6739,
              lng: 86.9524,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '08:00 AM',
              arrivalTime: '03:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '08:00 PM',
              arrivalTime: '03:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              22.5626,
              88.3513
          ],
          [
              22.8392,
              88.0004
          ],
          [
              23.1081,
              87.6417
          ],
          [
              23.3817,
              87.2877
          ],
          [
              23.6739,
              86.9524
          ]
      ]
  },
  {
      id: 'r120',
      routeName: 'Kolkata - Bhubaneswar Express',
      from: 'Kolkata',
      to: 'Bhubaneswar',
      distance: '450 km',
      duration: '8h 00m',
      fare: {
          sleeper: 900,
          ac: 1350,
          nonAc: 675
      },
      stops: [
          {
              name: 'Kolkata Esplanade Bus Stand',
              lat: 22.5626,
              lng: 88.3513,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Kolkata–Bhubaneswar)',
              lat: 21.8474,
              lng: 87.5493,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Kolkata–Bhubaneswar)',
              lat: 21.0157,
              lng: 86.6308,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Bhubaneswar Bhubaneswar Bus Stand',
              lat: 20.2961,
              lng: 85.8245,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:30 AM',
              arrivalTime: '01:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '01:30 PM',
              arrivalTime: '08:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              22.5626,
              88.3513
          ],
          [
              22.0409,
              87.7645
          ],
          [
              21.4437,
              87.1022
          ],
          [
              20.8494,
              86.4429
          ],
          [
              20.2961,
              85.8245
          ]
      ]
  },
  {
      id: 'r121',
      routeName: 'Patna - Kolkata Express',
      from: 'Patna',
      to: 'Kolkata',
      distance: '600 km',
      duration: '10h 30m',
      fare: {
          sleeper: 1150,
          ac: 1725,
          nonAc: 863
      },
      stops: [
          {
              name: 'Patna Mithapur Bus Stand',
              lat: 25.6093,
              lng: 85.1376,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Patna–Kolkata)',
              lat: 24.5641,
              lng: 86.1792,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Patna–Kolkata)',
              lat: 23.5625,
              lng: 87.2644,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Kolkata Esplanade Bus Stand',
              lat: 22.5626,
              lng: 88.3513,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '09:00 AM',
              arrivalTime: '05:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '05:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              25.6093,
              85.1376
          ],
          [
              24.839,
              85.9324
          ],
          [
              24.0813,
              86.7398
          ],
          [
              23.3064,
              87.53
          ],
          [
              22.5626,
              88.3513
          ]
      ]
  },
  {
      id: 'r122',
      routeName: 'Ranchi - Jamshedpur Express',
      from: 'Ranchi',
      to: 'Jamshedpur',
      distance: '135 km',
      duration: '2h 30m',
      fare: {
          sleeper: 310,
          ac: 465,
          nonAc: 233
      },
      stops: [
          {
              name: 'Ranchi Ranchi Bus Stand',
              lat: 23.3441,
              lng: 85.3096,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Ranchi–Jamshedpur)',
              lat: 23.1688,
              lng: 85.6119,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Ranchi–Jamshedpur)',
              lat: 22.9187,
              lng: 85.8394,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Jamshedpur Jamshedpur Bus Stand',
              lat: 22.8046,
              lng: 86.2029,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:00 AM',
              arrivalTime: '12:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '12:00 PM',
              arrivalTime: '06:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '10:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              23.3441,
              85.3096
          ],
          [
              23.2113,
              85.535
          ],
          [
              23.0464,
              85.7283
          ],
          [
              22.9505,
              85.9906
          ],
          [
              22.8046,
              86.2029
          ]
      ]
  },
  {
      id: 'r123',
      routeName: 'Bhubaneswar - Puri Express',
      from: 'Bhubaneswar',
      to: 'Puri',
      distance: '60 km',
      duration: '1h 30m',
      fare: {
          sleeper: 140,
          ac: 210,
          nonAc: 105
      },
      stops: [
          {
              name: 'Bhubaneswar Bhubaneswar Bus Stand',
              lat: 20.2961,
              lng: 85.8245,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Bhubaneswar–Puri)',
              lat: 20.1592,
              lng: 85.8507,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Bhubaneswar–Puri)',
              lat: 19.9353,
              lng: 85.7899,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Puri Puri Bus Stand',
              lat: 19.8135,
              lng: 85.8312,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '07:00 AM',
              arrivalTime: '02:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '03:00 PM',
              arrivalTime: '10:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              20.2961,
              85.8245
          ],
          [
              20.1313,
              85.782
          ],
          [
              20.061,
              85.834
          ],
          [
              19.9811,
              85.8765
          ],
          [
              19.8135,
              85.8312
          ]
      ]
  },
  {
      id: 'r124',
      routeName: 'Guwahati - Tezpur Express',
      from: 'Guwahati',
      to: 'Tezpur',
      distance: '180 km',
      duration: '3h 30m',
      fare: {
          sleeper: 410,
          ac: 615,
          nonAc: 308
      },
      stops: [
          {
              name: 'Guwahati ISBT Guwahati',
              lat: 26.1445,
              lng: 91.7362,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Guwahati–Tezpur)',
              lat: 26.3741,
              lng: 92.1573,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Guwahati–Tezpur)',
              lat: 26.5078,
              lng: 92.4825,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Tezpur Tezpur Bus Stand',
              lat: 26.6338,
              lng: 92.8,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '08:00 AM',
              arrivalTime: '03:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '08:00 PM',
              arrivalTime: '03:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              26.1445,
              91.7362
          ],
          [
              26.2548,
              91.9901
          ],
          [
              26.3773,
              92.2562
          ],
          [
              26.533,
              92.5556
          ],
          [
              26.6338,
              92.8
          ]
      ]
  },
  {
      id: 'r125',
      routeName: 'Guwahati - Silchar Express',
      from: 'Guwahati',
      to: 'Silchar',
      distance: '350 km',
      duration: '7h 00m',
      fare: {
          sleeper: 720,
          ac: 1080,
          nonAc: 540
      },
      stops: [
          {
              name: 'Guwahati ISBT Guwahati',
              lat: 26.1445,
              lng: 91.7362,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Guwahati–Silchar)',
              lat: 25.7434,
              lng: 92.1198,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Guwahati–Silchar)',
              lat: 25.3351,
              lng: 92.496,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Silchar Silchar Bus Stand',
              lat: 24.8333,
              lng: 92.7789,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:30 AM',
              arrivalTime: '01:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '01:30 PM',
              arrivalTime: '08:30 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              26.1445,
              91.7362
          ],
          [
              25.8535,
              92.0337
          ],
          [
              25.5174,
              92.2861
          ],
          [
              25.2004,
              92.5575
          ],
          [
              24.8333,
              92.7789
          ]
      ]
  },
  {
      id: 'r126',
      routeName: 'Guwahati - Imphal Express',
      from: 'Guwahati',
      to: 'Imphal',
      distance: '500 km',
      duration: '10h 00m',
      fare: {
          sleeper: 1050,
          ac: 1575,
          nonAc: 788
      },
      stops: [
          {
              name: 'Guwahati ISBT Guwahati',
              lat: 26.1445,
              lng: 91.7362,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Guwahati–Imphal)',
              lat: 25.6273,
              lng: 92.395,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Guwahati–Imphal)',
              lat: 25.2339,
              lng: 93.1777,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Imphal Imphal Bus Stand',
              lat: 24.817,
              lng: 93.9368,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '09:00 AM',
              arrivalTime: '05:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '09:00 PM',
              arrivalTime: '05:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri'
              ]
          }
      ],
      polyline: [
          [
              26.1445,
              91.7362
          ],
          [
              25.8507,
              92.3244
          ],
          [
              25.5003,
              92.856
          ],
          [
              25.161,
              93.3988
          ],
          [
              24.817,
              93.9368
          ]
      ]
  },
  {
      id: 'r127',
      routeName: 'Guwahati - Agartala Express',
      from: 'Guwahati',
      to: 'Agartala',
      distance: '620 km',
      duration: '12h 00m',
      fare: {
          sleeper: 1250,
          ac: 1875,
          nonAc: 938
      },
      stops: [
          {
              name: 'Guwahati ISBT Guwahati',
              lat: 26.1445,
              lng: 91.7362,
              arrivalTime: '--',
              departureTime: '07:00 AM',
              order: 1
          },
          {
              name: 'Waypoint 1 (Guwahati–Agartala)',
              lat: 25.4014,
              lng: 91.6143,
              arrivalTime: '08:30 AM',
              departureTime: '08:40 AM',
              order: 2
          },
          {
              name: 'Waypoint 2 (Guwahati–Agartala)',
              lat: 24.6371,
              lng: 91.4712,
              arrivalTime: '09:00 AM',
              departureTime: '09:10 AM',
              order: 3
          },
          {
              name: 'Agartala Agartala Bus Stand',
              lat: 23.8315,
              lng: 91.2868,
              arrivalTime: '02:00 PM',
              departureTime: '--',
              order: 4
          }
      ],
      schedule: [
          {
              departureTime: '06:00 AM',
              arrivalTime: '12:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '12:00 PM',
              arrivalTime: '06:00 PM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          },
          {
              departureTime: '10:00 PM',
              arrivalTime: '04:00 AM',
              days: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
              ]
          }
      ],
      polyline: [
          [
              26.1445,
              91.7362
          ],
          [
              25.5995,
              91.6571
          ],
          [
              24.9711,
              91.4946
          ],
          [
              24.4257,
              91.4151
          ],
          [
              23.8315,
              91.2868
          ]
      ]
  }
];

const buses = [
  { id: 'b1', busNumber: 'MH-04-AB-1234', name: 'Shivneri Express', type: 'AC Sleeper', routeId: 'r1', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC', 'WiFi', 'Charging Point', 'Water Bottle'], currentLocation: { lat: 18.85, lng: 73.25 } },
  { id: 'b2', busNumber: 'MH-04-CD-5678', name: 'Ashwamedha', type: 'Non-AC', routeId: 'r1', driverId: 'd2', status: 'running', capacity: 50, amenities: ['Water Bottle', 'Fan'], currentLocation: { lat: 19.01, lng: 72.89 } },
  { id: 'b3', busNumber: 'DL-01-EF-9012', name: 'Pink City Express', type: 'AC Semi-Sleeper', routeId: 'r2', driverId: 'd3', status: 'running', capacity: 45, amenities: ['AC', 'Charging Point', 'Blanket', 'Snacks'], currentLocation: { lat: 27.88, lng: 76.28 } },
  { id: 'b4', busNumber: 'DL-01-GH-3456', name: 'Rajasthan Royale', type: 'AC Sleeper', routeId: 'r2', driverId: 'd4', status: 'stopped', capacity: 36, amenities: ['AC', 'WiFi', 'Charging Point', 'Blanket', 'TV'], currentLocation: { lat: 28.66, lng: 77.22 } },
  { id: 'b5', busNumber: 'KA-01-IJ-7890', name: 'Cauvery Express', type: 'AC Semi-Sleeper', routeId: 'r3', driverId: 'd5', status: 'running', capacity: 48, amenities: ['AC', 'Water Bottle', 'Charging Point'], currentLocation: { lat: 12.70, lng: 78.10 } },
  { id: 'b6', busNumber: 'TS-09-KL-2345', name: 'Godavari Deluxe', type: 'AC Sleeper', routeId: 'r4', driverId: 'd6', status: 'running', capacity: 40, amenities: ['AC', 'WiFi', 'Blanket', 'Charging Point'], currentLocation: { lat: 17.14, lng: 79.60 } },
  { id: 'b7', busNumber: 'GJ-01-MN-6789', name: 'Rajput King', type: 'Non-AC', routeId: 'r5', driverId: 'd8', status: 'delayed', capacity: 52, amenities: ['Fan', 'Water Bottle'], currentLocation: { lat: 23.58, lng: 72.96 } },
  { id: 'b8', busNumber: 'WB-02-OP-0123', name: 'Bay of Bengal', type: 'AC Semi-Sleeper', routeId: 'r6', driverId: 'd7', status: 'running', capacity: 44, amenities: ['AC', 'Water Bottle', 'Charging Point'], currentLocation: { lat: 22.10, lng: 87.83 } },
  { id: 'b9', busNumber: 'UP-32-QR-4567', name: 'Ganga Express', type: 'AC Sleeper', routeId: 'r7', driverId: 'd9', status: 'running', capacity: 38, amenities: ['AC', 'WiFi', 'Blanket', 'Snacks'], currentLocation: { lat: 26.20, lng: 82.00 } },
  { id: 'b10', busNumber: 'MH-12-ST-8901', name: 'Konkan Kanya', type: 'AC Sleeper', routeId: 'r8', driverId: 'd10', status: 'running', capacity: 36, amenities: ['AC', 'WiFi', 'Charging Point', 'Blanket', 'TV', 'Snacks'], currentLocation: { lat: 16.70, lng: 74.24 } },
  { id: 'b11', busNumber: 'TN-01-UV-2345', name: 'Nila Express', type: 'Non-AC', routeId: 'r9', driverId: 'd5', status: 'stopped', capacity: 50, amenities: ['Fan', 'Water Bottle'], currentLocation: { lat: 13.06, lng: 80.19 } },
  { id: 'b12', busNumber: 'DL-01-WX-6789', name: 'Haryana Roadways Volvo', type: 'AC Semi-Sleeper', routeId: 'r10', driverId: 'd3', status: 'running', capacity: 44, amenities: ['AC', 'Charging Point', 'Water Bottle'], currentLocation: { lat: 29.68, lng: 76.99 } }
,
  { id: 'b20', busNumber: 'GJ-01-XX-9958', name: 'Volvo Express', type: 'Volvo', routeId: 'r11', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b21', busNumber: 'GJ-01-XX-9200', name: 'AC Express', type: 'AC', routeId: 'r11', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b22', busNumber: 'GJ-01-XX-9785', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r11', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b23', busNumber: 'GJ-01-XX-4581', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r11', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b24', busNumber: 'GJ-01-XX-5742', name: 'Sleeper Express', type: 'Sleeper', routeId: 'r11', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b25', busNumber: 'GJ-01-XX-7984', name: 'Volvo Express', type: 'Volvo', routeId: 'r12', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b26', busNumber: 'GJ-01-XX-6521', name: 'AC Express', type: 'AC', routeId: 'r12', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b27', busNumber: 'GJ-01-XX-8951', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r12', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b28', busNumber: 'GJ-01-XX-4298', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r12', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b29', busNumber: 'GJ-01-XX-4071', name: 'Sleeper Express', type: 'Sleeper', routeId: 'r12', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b30', busNumber: 'GJ-01-XX-1857', name: 'Volvo Express', type: 'Volvo', routeId: 'r13', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b31', busNumber: 'GJ-01-XX-6176', name: 'AC Express', type: 'AC', routeId: 'r13', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b32', busNumber: 'GJ-01-XX-8187', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r13', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b33', busNumber: 'GJ-01-XX-2266', name: 'Sleeper Express', type: 'Sleeper', routeId: 'r13', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b34', busNumber: 'GJ-01-XX-3052', name: 'Volvo Express', type: 'Volvo', routeId: 'r14', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b35', busNumber: 'GJ-01-XX-5877', name: 'AC Express', type: 'AC', routeId: 'r14', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b36', busNumber: 'GJ-01-XX-5918', name: 'Sleeper Express', type: 'Sleeper', routeId: 'r14', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b37', busNumber: 'GJ-01-XX-1333', name: 'Volvo Express', type: 'Volvo', routeId: 'r15', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b38', busNumber: 'GJ-01-XX-4895', name: 'AC Express', type: 'AC', routeId: 'r15', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b39', busNumber: 'GJ-01-XX-3003', name: 'Sleeper Express', type: 'Sleeper', routeId: 'r15', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b40', busNumber: 'GJ-01-XX-8454', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r16', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b41', busNumber: 'GJ-01-XX-2252', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r16', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b42', busNumber: 'GJ-01-XX-1260', name: 'AC Express', type: 'AC', routeId: 'r16', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b43', busNumber: 'GJ-01-XX-5845', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r17', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b44', busNumber: 'GJ-01-XX-7207', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r17', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b45', busNumber: 'GJ-01-XX-6866', name: 'Sleeper Express', type: 'Sleeper', routeId: 'r18', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b46', busNumber: 'GJ-01-XX-9867', name: 'Sleeper Express', type: 'Sleeper', routeId: 'r19', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b47', busNumber: 'GJ-01-XX-2565', name: 'Sleeper Express', type: 'Sleeper', routeId: 'r20', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b48', busNumber: 'GJ-01-XX-2810', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r21', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b49', busNumber: 'GJ-01-XX-5391', name: 'AC Express', type: 'AC', routeId: 'r21', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b50', busNumber: 'GJ-01-XX-4666', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r22', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b51', busNumber: 'GJ-01-XX-4539', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r23', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b52', busNumber: 'GJ-01-XX-1746', name: 'Volvo Express', type: 'Volvo', routeId: 'r24', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b53', busNumber: 'GJ-01-XX-9900', name: 'AC Express', type: 'AC', routeId: 'r24', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b54', busNumber: 'GJ-01-XX-8017', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r24', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b55', busNumber: 'GJ-01-XX-4846', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r24', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b56', busNumber: 'GJ-01-XX-6564', name: 'Sleeper Express', type: 'Sleeper', routeId: 'r24', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b57', busNumber: 'GJ-01-XX-4790', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r25', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b58', busNumber: 'GJ-01-XX-3014', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r25', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b59', busNumber: 'GJ-01-XX-1896', name: 'AC Express', type: 'AC', routeId: 'r26', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b60', busNumber: 'GJ-01-XX-2668', name: 'Sleeper Express', type: 'Sleeper', routeId: 'r26', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b61', busNumber: 'GJ-01-XX-5640', name: 'Volvo Express', type: 'Volvo', routeId: 'r27', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b62', busNumber: 'GJ-01-XX-7936', name: 'Sleeper Express', type: 'Sleeper', routeId: 'r27', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b63', busNumber: 'GJ-01-XX-8018', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r28', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b64', busNumber: 'GJ-01-XX-2077', name: 'AC Express', type: 'AC', routeId: 'r28', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b65', busNumber: 'GJ-01-XX-2614', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r28', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b66', busNumber: 'GJ-01-XX-8254', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r29', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b67', busNumber: 'GJ-01-XX-2523', name: 'AC Express', type: 'AC', routeId: 'r29', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b68', busNumber: 'GJ-01-XX-7765', name: 'Non-AC Express', type: 'Non-AC', routeId: 'r30', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },
  { id: 'b69', busNumber: 'GJ-01-XX-3475', name: 'AC Express', type: 'AC', routeId: 'r31', driverId: 'd1', status: 'running', capacity: 40, amenities: ['AC'], currentLocation: { lat: 23.0, lng: 72.0 } },

  // ── New buses covering all of India ──────────────────────────────────────
  { id: 'b70', busNumber: 'AS-01-AA-1001', name: 'Brahmaputra Express', type: 'AC Semi-Sleeper', routeId: 'r32', driverId: 'd11', status: 'running', capacity: 44, amenities: ['AC', 'Water Bottle', 'Charging Point'], currentLocation: { lat: 26.10, lng: 91.60 } },
  { id: 'b71', busNumber: 'AS-01-AB-2002', name: 'Kaziranga Deluxe', type: 'Non-AC', routeId: 'r33', driverId: 'd11', status: 'running', capacity: 50, amenities: ['Fan', 'Water Bottle'], currentLocation: { lat: 26.40, lng: 92.80 } },
  { id: 'b72', busNumber: 'OD-01-AC-3003', name: 'Jagannath Express', type: 'AC Sleeper', routeId: 'r34', driverId: 'd12', status: 'running', capacity: 40, amenities: ['AC', 'WiFi', 'Blanket', 'Charging Point'], currentLocation: { lat: 20.30, lng: 85.82 } },
  { id: 'b73', busNumber: 'BR-01-AD-4004', name: 'Patliputra Volvo', type: 'AC Semi-Sleeper', routeId: 'r35', driverId: 'd12', status: 'delayed', capacity: 45, amenities: ['AC', 'Charging Point', 'Water Bottle'], currentLocation: { lat: 24.10, lng: 84.50 } },
  { id: 'b74', busNumber: 'PB-10-AE-5005', name: 'Golden Temple Express', type: 'AC Sleeper', routeId: 'r36', driverId: 'd15', status: 'running', capacity: 36, amenities: ['AC', 'WiFi', 'Blanket', 'Snacks', 'Charging Point'], currentLocation: { lat: 31.63, lng: 76.40 } },
  { id: 'b75', busNumber: 'UP-80-AF-6006', name: 'Taj Mahal Express', type: 'AC Semi-Sleeper', routeId: 'r37', driverId: 'd3', status: 'running', capacity: 44, amenities: ['AC', 'Water Bottle', 'Charging Point'], currentLocation: { lat: 27.10, lng: 79.50 } },
  { id: 'b76', busNumber: 'JK-02-AG-7007', name: 'Dal Lake Volvo', type: 'AC Sleeper', routeId: 'r38', driverId: 'd19', status: 'running', capacity: 38, amenities: ['AC', 'WiFi', 'Blanket', 'Charging Point', 'Water Bottle'], currentLocation: { lat: 33.00, lng: 75.50 } },
  { id: 'b77', busNumber: 'MP-04-AH-8008', name: 'Narmada Express', type: 'AC Semi-Sleeper', routeId: 'r39', driverId: 'd17', status: 'running', capacity: 44, amenities: ['AC', 'Charging Point', 'Water Bottle'], currentLocation: { lat: 22.90, lng: 75.90 } },
  { id: 'b78', busNumber: 'MH-31-AI-9009', name: 'Nagpur Orange City', type: 'Non-AC', routeId: 'r40', driverId: 'd14', status: 'running', capacity: 52, amenities: ['Fan', 'Water Bottle'], currentLocation: { lat: 21.20, lng: 81.40 } },
  { id: 'b79', busNumber: 'MH-12-AJ-0010', name: 'Panchavati Express', type: 'AC Semi-Sleeper', routeId: 'r41', driverId: 'd14', status: 'stopped', capacity: 44, amenities: ['AC', 'Water Bottle', 'Charging Point'], currentLocation: { lat: 19.99, lng: 73.78 } },
  { id: 'b80', busNumber: 'RJ-19-AK-1111', name: 'Desert Storm', type: 'AC Sleeper', routeId: 'r42', driverId: 'd4', status: 'running', capacity: 36, amenities: ['AC', 'WiFi', 'Blanket', 'Charging Point'], currentLocation: { lat: 26.50, lng: 71.50 } },
  { id: 'b81', busNumber: 'KL-07-AL-2222', name: 'Backwaters Express', type: 'AC Sleeper', routeId: 'r43', driverId: 'd16', status: 'running', capacity: 38, amenities: ['AC', 'WiFi', 'Blanket', 'Snacks', 'Water Bottle'], currentLocation: { lat: 9.90, lng: 76.60 } },
  { id: 'b82', busNumber: 'KA-55-AM-3333', name: 'Chamundi Hills Express', type: 'AC Semi-Sleeper', routeId: 'r44', driverId: 'd5', status: 'running', capacity: 44, amenities: ['AC', 'Charging Point', 'Water Bottle'], currentLocation: { lat: 12.10, lng: 76.80 } },
  { id: 'b83', busNumber: 'TN-59-AN-4444', name: 'Meenakshi Express', type: 'AC Sleeper', routeId: 'r45', driverId: 'd5', status: 'running', capacity: 40, amenities: ['AC', 'WiFi', 'Blanket', 'Charging Point'], currentLocation: { lat: 10.40, lng: 77.80 } },
  { id: 'b84', busNumber: 'KA-19-AO-5555', name: 'Konkan Pearl', type: 'AC Sleeper', routeId: 'r46', driverId: 'd5', status: 'running', capacity: 38, amenities: ['AC', 'WiFi', 'Blanket', 'Snacks', 'Charging Point'], currentLocation: { lat: 15.30, lng: 74.10 } },
  { id: 'b85', busNumber: 'AP-05-AP-6666', name: 'Vizag Steel Express', type: 'AC Semi-Sleeper', routeId: 'r47', driverId: 'd13', status: 'running', capacity: 44, amenities: ['AC', 'Charging Point', 'Water Bottle'], currentLocation: { lat: 19.00, lng: 84.00 } },
  { id: 'b86', busNumber: 'TS-11-AQ-7777', name: 'Deccan Queen', type: 'AC Sleeper', routeId: 'r48', driverId: 'd6', status: 'running', capacity: 40, amenities: ['AC', 'WiFi', 'Blanket', 'Charging Point'], currentLocation: { lat: 15.90, lng: 78.40 } },
  { id: 'b87', busNumber: 'KA-01-AR-8888', name: 'Mysore Sandal', type: 'AC Semi-Sleeper', routeId: 'r49', driverId: 'd5', status: 'running', capacity: 44, amenities: ['AC', 'Water Bottle', 'Charging Point'], currentLocation: { lat: 12.50, lng: 76.80 } },
  { id: 'b88', busNumber: 'TN-01-AS-9999', name: 'Marina Express', type: 'AC Sleeper', routeId: 'r50', driverId: 'd5', status: 'running', capacity: 40, amenities: ['AC', 'WiFi', 'Blanket', 'Charging Point', 'Snacks'], currentLocation: { lat: 11.50, lng: 78.90 } },
  { id: 'b89', busNumber: 'HP-03-AT-1010', name: 'Himalayan Queen', type: 'AC Semi-Sleeper', routeId: 'r51', driverId: 'd18', status: 'running', capacity: 36, amenities: ['AC', 'Blanket', 'Water Bottle', 'Charging Point'], currentLocation: { lat: 31.40, lng: 76.90 } },

  // ── AUTO-GENERATED: 200 new buses ──────────────────────────────
  {
      id: 'b90',
      busNumber: 'DL-91-2000-2000',
      name: 'Raj Express',
      type: 'AC Sleeper',
      routeId: 'r52',
      driverId: 'd1',
      status: 'running',
      capacity: 36,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 28.9971,
          lng: 77.3892
      }
  },
  {
      id: 'b91',
      busNumber: 'DL-92-2013-2017',
      name: 'Deccan Queen 2',
      type: 'AC Semi-Sleeper',
      routeId: 'r52',
      driverId: 'd2',
      status: 'running',
      capacity: 37,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 29.3269,
          lng: 77.5499
      }
  },
  {
      id: 'b92',
      busNumber: 'DL-93-2026-2034',
      name: 'Shatabdi Link 3',
      type: 'Volvo AC',
      routeId: 'r52',
      driverId: 'd3',
      status: 'running',
      capacity: 38,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 29.6568,
          lng: 77.7107
      }
  },
  {
      id: 'b93',
      busNumber: 'DL-94-2039-2051',
      name: 'Golden Chariot 4',
      type: 'Non-AC',
      routeId: 'r52',
      driverId: 'd4',
      status: 'running',
      capacity: 39,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 29.9866,
          lng: 77.8714
      }
  },
  {
      id: 'b94',
      busNumber: 'DL-95-2007-2011',
      name: 'Silver Arrow',
      type: 'AC Semi-Sleeper',
      routeId: 'r53',
      driverId: 'd2',
      status: 'running',
      capacity: 37,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 28.9868,
          lng: 77.4623
      }
  },
  {
      id: 'b95',
      busNumber: 'DL-96-2020-2028',
      name: 'Blue Star 2',
      type: 'Volvo AC',
      routeId: 'r53',
      driverId: 'd3',
      status: 'running',
      capacity: 38,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 29.3064,
          lng: 77.6963
      }
  },
  {
      id: 'b96',
      busNumber: 'DL-97-2033-2045',
      name: 'Regal Rider 3',
      type: 'Non-AC',
      routeId: 'r53',
      driverId: 'd4',
      status: 'running',
      capacity: 39,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 29.6261,
          lng: 77.9303
      }
  },
  {
      id: 'b97',
      busNumber: 'DL-98-2014-2022',
      name: 'Sky King',
      type: 'Volvo AC',
      routeId: 'r54',
      driverId: 'd3',
      status: 'running',
      capacity: 38,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 29.0221,
          lng: 77.4882
      }
  },
  {
      id: 'b98',
      busNumber: 'DL-99-2027-2039',
      name: 'Summit Express 2',
      type: 'Non-AC',
      routeId: 'r54',
      driverId: 'd4',
      status: 'running',
      capacity: 39,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 29.3771,
          lng: 77.748
      }
  },
  {
      id: 'b99',
      busNumber: 'DL-100-2040-2056',
      name: 'Valley Cruiser 3',
      type: 'AC Chair Car',
      routeId: 'r54',
      driverId: 'd5',
      status: 'delayed',
      capacity: 40,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 29.732,
          lng: 78.0078
      }
  },
  {
      id: 'b100',
      busNumber: 'DL-101-2021-2033',
      name: 'Coastal King',
      type: 'Non-AC',
      routeId: 'r55',
      driverId: 'd4',
      status: 'running',
      capacity: 39,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 28.9049,
          lng: 77.9735
      }
  },
  {
      id: 'b101',
      busNumber: 'DL-102-2034-2050',
      name: 'Desert Wind 2',
      type: 'AC Chair Car',
      routeId: 'r55',
      driverId: 'd5',
      status: 'delayed',
      capacity: 40,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 29.1426,
          lng: 78.7185
      }
  },
  {
      id: 'b102',
      busNumber: 'DL-103-2028-2044',
      name: 'Mountain Hawk',
      type: 'AC Chair Car',
      routeId: 'r56',
      driverId: 'd5',
      status: 'delayed',
      capacity: 40,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 29.1153,
          lng: 77.4379
      }
  },
  {
      id: 'b103',
      busNumber: 'DL-104-2041-2061',
      name: 'River Queen 2',
      type: 'Luxury Sleeper',
      routeId: 'r56',
      driverId: 'd6',
      status: 'stopped',
      capacity: 41,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 29.5635,
          lng: 77.6474
      }
  },
  {
      id: 'b104',
      busNumber: 'DL-105-2054-2078',
      name: 'Metro Link 3',
      type: 'AC Sleeper',
      routeId: 'r56',
      driverId: 'd7',
      status: 'running',
      capacity: 42,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 30.0117,
          lng: 77.8569
      }
  },
  {
      id: 'b105',
      busNumber: 'DL-106-2035-2055',
      name: 'Heritage Express',
      type: 'Luxury Sleeper',
      routeId: 'r57',
      driverId: 'd6',
      status: 'stopped',
      capacity: 41,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 28.4322,
          lng: 77.3175
      }
  },
  {
      id: 'b106',
      busNumber: 'DL-107-2048-2072',
      name: 'Royal Rider 2',
      type: 'AC Sleeper',
      routeId: 'r57',
      driverId: 'd7',
      status: 'running',
      capacity: 42,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 28.1973,
          lng: 77.4065
      }
  },
  {
      id: 'b107',
      busNumber: 'DL-108-2061-2089',
      name: 'Pride of India 3',
      type: 'AC Semi-Sleeper',
      routeId: 'r57',
      driverId: 'd8',
      status: 'running',
      capacity: 43,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 27.9623,
          lng: 77.4956
      }
  },
  {
      id: 'b108',
      busNumber: 'DL-109-2074-2106',
      name: 'Bharat Express 4',
      type: 'Volvo AC',
      routeId: 'r57',
      driverId: 'd9',
      status: 'running',
      capacity: 44,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 27.7274,
          lng: 77.5846
      }
  },
  {
      id: 'b109',
      busNumber: 'DL-110-2042-2066',
      name: 'National Cruiser',
      type: 'AC Sleeper',
      routeId: 'r58',
      driverId: 'd7',
      status: 'running',
      capacity: 42,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 28.0317,
          lng: 79.2767
      }
  },
  {
      id: 'b110',
      busNumber: 'DL-111-2055-2083',
      name: 'Sunrise Express 2',
      type: 'AC Semi-Sleeper',
      routeId: 'r58',
      driverId: 'd8',
      status: 'running',
      capacity: 43,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 27.3961,
          lng: 81.3249
      }
  },
  {
      id: 'b111',
      busNumber: 'DL-112-2049-2077',
      name: 'Moonlight Rider',
      type: 'AC Semi-Sleeper',
      routeId: 'r59',
      driverId: 'd8',
      status: 'running',
      capacity: 43,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 28.7465,
          lng: 77.3479
      }
  },
  {
      id: 'b112',
      busNumber: 'DL-113-2062-2094',
      name: 'Twilight Star 2',
      type: 'Volvo AC',
      routeId: 'r59',
      driverId: 'd9',
      status: 'running',
      capacity: 44,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 28.8259,
          lng: 77.4674
      }
  },
  {
      id: 'b113',
      busNumber: 'DL-114-2075-2111',
      name: 'Aurora Express 3',
      type: 'Non-AC',
      routeId: 'r59',
      driverId: 'd10',
      status: 'running',
      capacity: 45,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 28.9052,
          lng: 77.5869
      }
  },
  {
      id: 'b114',
      busNumber: 'UK-115-2056-2088',
      name: 'Zenith Rider',
      type: 'Volvo AC',
      routeId: 'r60',
      driverId: 'd9',
      status: 'running',
      capacity: 44,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 30.2238,
          lng: 78.0652
      }
  },
  {
      id: 'b115',
      busNumber: 'UK-116-2069-2105',
      name: 'Horizon Traveller 2',
      type: 'Non-AC',
      routeId: 'r60',
      driverId: 'd10',
      status: 'running',
      capacity: 45,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 30.1311,
          lng: 78.0982
      }
  },
  {
      id: 'b116',
      busNumber: 'UK-117-2082-2122',
      name: 'Pinnacle Express 3',
      type: 'AC Chair Car',
      routeId: 'r60',
      driverId: 'd11',
      status: 'delayed',
      capacity: 46,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 30.0384,
          lng: 78.1312
      }
  },
  {
      id: 'b117',
      busNumber: 'UK-118-2063-2099',
      name: 'Summit Rider',
      type: 'Non-AC',
      routeId: 'r61',
      driverId: 'd10',
      status: 'running',
      capacity: 45,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 30.24,
          lng: 78.1107
      }
  },
  {
      id: 'b118',
      busNumber: 'UK-119-2076-2116',
      name: 'Valley Star 2',
      type: 'AC Chair Car',
      routeId: 'r61',
      driverId: 'd11',
      status: 'delayed',
      capacity: 46,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 30.1634,
          lng: 78.1891
      }
  },
  {
      id: 'b119',
      busNumber: 'UK-120-2070-2110',
      name: 'Ocean Breeze',
      type: 'AC Chair Car',
      routeId: 'r62',
      driverId: 'd11',
      status: 'delayed',
      capacity: 46,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 29.9739,
          lng: 78.1849
      }
  },
  {
      id: 'b120',
      busNumber: 'UK-121-2083-2127',
      name: 'City Link 2',
      type: 'Luxury Sleeper',
      routeId: 'r62',
      driverId: 'd12',
      status: 'stopped',
      capacity: 47,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 30.0022,
          lng: 78.2056
      }
  },
  {
      id: 'b121',
      busNumber: 'UK-122-2096-2144',
      name: 'Town Express 3',
      type: 'AC Sleeper',
      routeId: 'r62',
      driverId: 'd13',
      status: 'running',
      capacity: 48,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 30.0304,
          lng: 78.2262
      }
  },
  {
      id: 'b122',
      busNumber: 'UK-123-2109-2161',
      name: 'Urban Rider 4',
      type: 'AC Semi-Sleeper',
      routeId: 'r62',
      driverId: 'd14',
      status: 'running',
      capacity: 49,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 30.0587,
          lng: 78.2469
      }
  },
  {
      id: 'b123',
      busNumber: 'CH-124-2077-2121',
      name: 'Metro Glide',
      type: 'Luxury Sleeper',
      routeId: 'r63',
      driverId: 'd12',
      status: 'stopped',
      capacity: 47,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 31.1099,
          lng: 76.8817
      }
  },
  {
      id: 'b124',
      busNumber: 'CH-125-2090-2138',
      name: 'Rapid Transit 2',
      type: 'AC Sleeper',
      routeId: 'r63',
      driverId: 'd13',
      status: 'running',
      capacity: 48,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 31.4865,
          lng: 76.984
      }
  },
  {
      id: 'b125',
      busNumber: 'CH-126-2103-2155',
      name: 'Thunder Express 3',
      type: 'AC Semi-Sleeper',
      routeId: 'r63',
      driverId: 'd14',
      status: 'running',
      capacity: 49,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 31.863,
          lng: 77.0864
      }
  },
  {
      id: 'b126',
      busNumber: 'CH-127-2084-2132',
      name: 'Lightning Rider',
      type: 'AC Sleeper',
      routeId: 'r64',
      driverId: 'd13',
      status: 'running',
      capacity: 48,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 31.2285,
          lng: 76.6274
      }
  },
  {
      id: 'b127',
      busNumber: 'CH-128-2097-2149',
      name: 'Storm Runner 2',
      type: 'AC Semi-Sleeper',
      routeId: 'r64',
      driverId: 'd14',
      status: 'running',
      capacity: 49,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 31.7238,
          lng: 76.4754
      }
  },
  {
      id: 'b128',
      busNumber: 'PB-129-2091-2143',
      name: 'Cyclone Cruiser',
      type: 'AC Semi-Sleeper',
      routeId: 'r65',
      driverId: 'd14',
      status: 'running',
      capacity: 49,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 31.4088,
          lng: 75.3491
      }
  },
  {
      id: 'b129',
      busNumber: 'PB-130-2104-2160',
      name: 'Typhoon Star 2',
      type: 'Volvo AC',
      routeId: 'r65',
      driverId: 'd15',
      status: 'running',
      capacity: 50,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 31.1837,
          lng: 75.8259
      }
  },
  {
      id: 'b130',
      busNumber: 'PB-131-2117-2177',
      name: 'Eagle Wings 3',
      type: 'Non-AC',
      routeId: 'r65',
      driverId: 'd16',
      status: 'running',
      capacity: 51,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 30.9585,
          lng: 76.3026
      }
  },
  {
      id: 'b131',
      busNumber: 'PB-132-2098-2154',
      name: 'Falcon Flight',
      type: 'Volvo AC',
      routeId: 'r66',
      driverId: 'd15',
      status: 'running',
      capacity: 50,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 30.3425,
          lng: 76.2001
      }
  },
  {
      id: 'b132',
      busNumber: 'PB-133-2111-2171',
      name: 'Hawk Rider 2',
      type: 'Non-AC',
      routeId: 'r66',
      driverId: 'd16',
      status: 'running',
      capacity: 51,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 29.7841,
          lng: 76.5428
      }
  },
  {
      id: 'b133',
      busNumber: 'PB-134-2124-2188',
      name: 'Phoenix Express 3',
      type: 'AC Chair Car',
      routeId: 'r66',
      driverId: 'd17',
      status: 'delayed',
      capacity: 52,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 29.2257,
          lng: 76.8856
      }
  },
  {
      id: 'b134',
      busNumber: 'PB-135-2105-2165',
      name: 'Dragon Star',
      type: 'Non-AC',
      routeId: 'r67',
      driverId: 'd16',
      status: 'running',
      capacity: 51,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 30.7942,
          lng: 75.9066
      }
  },
  {
      id: 'b135',
      busNumber: 'PB-136-2118-2182',
      name: 'Lion King Express 2',
      type: 'AC Chair Car',
      routeId: 'r67',
      driverId: 'd17',
      status: 'delayed',
      capacity: 52,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 30.2625,
          lng: 76.2371
      }
  },
  {
      id: 'b136',
      busNumber: 'PB-137-2131-2199',
      name: 'Tiger Force 3',
      type: 'Luxury Sleeper',
      routeId: 'r67',
      driverId: 'd18',
      status: 'stopped',
      capacity: 36,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 29.7307,
          lng: 76.5675
      }
  },
  {
      id: 'b137',
      busNumber: 'PB-138-2144-2216',
      name: 'Cheetah Runner 4',
      type: 'AC Sleeper',
      routeId: 'r67',
      driverId: 'd19',
      status: 'running',
      capacity: 37,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 29.199,
          lng: 76.898
      }
  },
  {
      id: 'b138',
      busNumber: 'JK-139-2112-2176',
      name: 'Panther Rider',
      type: 'AC Chair Car',
      routeId: 'r68',
      driverId: 'd17',
      status: 'delayed',
      capacity: 52,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 31.7117,
          lng: 75.4498
      }
  },
  {
      id: 'b139',
      busNumber: 'JK-140-2125-2193',
      name: 'Leopard Star 2',
      type: 'Luxury Sleeper',
      routeId: 'r68',
      driverId: 'd18',
      status: 'stopped',
      capacity: 36,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 30.6969,
          lng: 76.0427
      }
  },
  {
      id: 'b140',
      busNumber: 'JK-141-2138-2210',
      name: 'Raj Express 3',
      type: 'AC Sleeper',
      routeId: 'r68',
      driverId: 'd19',
      status: 'running',
      capacity: 37,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 29.6821,
          lng: 76.6355
      }
  },
  {
      id: 'b141',
      busNumber: 'RJ-142-2119-2187',
      name: 'Deccan Queen',
      type: 'Luxury Sleeper',
      routeId: 'r69',
      driverId: 'd18',
      status: 'stopped',
      capacity: 36,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 26.7993,
          lng: 75.501
      }
  },
  {
      id: 'b142',
      busNumber: 'RJ-143-2132-2204',
      name: 'Shatabdi Link 2',
      type: 'AC Sleeper',
      routeId: 'r69',
      driverId: 'd19',
      status: 'running',
      capacity: 37,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 26.6828,
          lng: 75.2139
      }
  },
  {
      id: 'b143',
      busNumber: 'RJ-144-2145-2221',
      name: 'Golden Chariot 3',
      type: 'AC Semi-Sleeper',
      routeId: 'r69',
      driverId: 'd20',
      status: 'running',
      capacity: 38,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 26.5663,
          lng: 74.9269
      }
  },
  {
      id: 'b144',
      busNumber: 'RJ-145-2126-2198',
      name: 'Silver Arrow',
      type: 'AC Sleeper',
      routeId: 'r70',
      driverId: 'd19',
      status: 'running',
      capacity: 37,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 27.2848,
          lng: 74.9626
      }
  },
  {
      id: 'b145',
      busNumber: 'RJ-146-2139-2215',
      name: 'Blue Star 2',
      type: 'AC Semi-Sleeper',
      routeId: 'r70',
      driverId: 'd20',
      status: 'running',
      capacity: 38,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 27.6538,
          lng: 74.1373
      }
  },
  {
      id: 'b146',
      busNumber: 'RJ-147-2133-2209',
      name: 'Regal Rider',
      type: 'AC Semi-Sleeper',
      routeId: 'r71',
      driverId: 'd20',
      status: 'running',
      capacity: 38,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 26.4902,
          lng: 75.8072
      }
  },
  {
      id: 'b147',
      busNumber: 'RJ-148-2146-2226',
      name: 'Sky King 2',
      type: 'Volvo AC',
      routeId: 'r71',
      driverId: 'd1',
      status: 'running',
      capacity: 39,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 26.0648,
          lng: 75.8264
      }
  },
  {
      id: 'b148',
      busNumber: 'RJ-149-2159-2243',
      name: 'Summit Express 3',
      type: 'Non-AC',
      routeId: 'r71',
      driverId: 'd2',
      status: 'running',
      capacity: 40,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 25.6393,
          lng: 75.8456
      }
  },
  {
      id: 'b149',
      busNumber: 'RJ-150-2140-2220',
      name: 'Valley Cruiser',
      type: 'Volvo AC',
      routeId: 'r72',
      driverId: 'd1',
      status: 'running',
      capacity: 39,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 26.8303,
          lng: 75.5411
      }
  },
  {
      id: 'b150',
      busNumber: 'RJ-151-2153-2237',
      name: 'Coastal King 2',
      type: 'Non-AC',
      routeId: 'r72',
      driverId: 'd2',
      status: 'running',
      capacity: 40,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 26.7448,
          lng: 75.2943
      }
  },
  {
      id: 'b151',
      busNumber: 'RJ-152-2166-2254',
      name: 'Desert Wind 3',
      type: 'AC Chair Car',
      routeId: 'r72',
      driverId: 'd3',
      status: 'delayed',
      capacity: 41,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 26.6594,
          lng: 75.0474
      }
  },
  {
      id: 'b152',
      busNumber: 'RJ-153-2179-2271',
      name: 'Mountain Hawk 4',
      type: 'Luxury Sleeper',
      routeId: 'r72',
      driverId: 'd4',
      status: 'stopped',
      capacity: 42,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 26.5739,
          lng: 74.8006
      }
  },
  {
      id: 'b153',
      busNumber: 'RJ-154-2147-2231',
      name: 'River Queen',
      type: 'Non-AC',
      routeId: 'r73',
      driverId: 'd2',
      status: 'running',
      capacity: 40,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 25.1567,
          lng: 73.4844
      }
  },
  {
      id: 'b154',
      busNumber: 'RJ-155-2160-2248',
      name: 'Metro Link 2',
      type: 'AC Chair Car',
      routeId: 'r73',
      driverId: 'd3',
      status: 'delayed',
      capacity: 41,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 25.728,
          lng: 73.2562
      }
  },
  {
      id: 'b155',
      busNumber: 'RJ-156-2154-2242',
      name: 'Heritage Express',
      type: 'AC Chair Car',
      routeId: 'r74',
      driverId: 'd3',
      status: 'delayed',
      capacity: 41,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 26.4123,
          lng: 74.2369
      }
  },
  {
      id: 'b156',
      busNumber: 'RJ-157-2167-2259',
      name: 'Royal Rider 2',
      type: 'Luxury Sleeper',
      routeId: 'r74',
      driverId: 'd4',
      status: 'stopped',
      capacity: 42,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 26.3746,
          lng: 73.834
      }
  },
  {
      id: 'b157',
      busNumber: 'RJ-158-2180-2276',
      name: 'Pride of India 3',
      type: 'AC Sleeper',
      routeId: 'r74',
      driverId: 'd5',
      status: 'running',
      capacity: 43,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 26.3369,
          lng: 73.431
      }
  },
  {
      id: 'b158',
      busNumber: 'UP-159-2161-2253',
      name: 'Bharat Express',
      type: 'Luxury Sleeper',
      routeId: 'r75',
      driverId: 'd4',
      status: 'stopped',
      capacity: 42,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 27.2556,
          lng: 77.9245
      }
  },
  {
      id: 'b159',
      busNumber: 'UP-160-2174-2270',
      name: 'National Cruiser 2',
      type: 'AC Sleeper',
      routeId: 'r75',
      driverId: 'd5',
      status: 'running',
      capacity: 43,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 27.3346,
          lng: 77.8409
      }
  },
  {
      id: 'b160',
      busNumber: 'UP-161-2187-2287',
      name: 'Sunrise Express 3',
      type: 'AC Semi-Sleeper',
      routeId: 'r75',
      driverId: 'd6',
      status: 'running',
      capacity: 44,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 27.4135,
          lng: 77.7573
      }
  },
  {
      id: 'b161',
      busNumber: 'UP-162-2168-2264',
      name: 'Moonlight Rider',
      type: 'AC Sleeper',
      routeId: 'r76',
      driverId: 'd5',
      status: 'running',
      capacity: 43,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 25.3964,
          lng: 82.2343
      }
  },
  {
      id: 'b162',
      busNumber: 'UP-163-2181-2281',
      name: 'Twilight Star 2',
      type: 'AC Semi-Sleeper',
      routeId: 'r76',
      driverId: 'd6',
      status: 'running',
      capacity: 44,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 25.357,
          lng: 82.6223
      }
  },
  {
      id: 'b163',
      busNumber: 'UP-164-2175-2275',
      name: 'Aurora Express',
      type: 'AC Semi-Sleeper',
      routeId: 'r77',
      driverId: 'd6',
      status: 'running',
      capacity: 44,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 26.8057,
          lng: 81.389
      }
  },
  {
      id: 'b164',
      busNumber: 'UP-165-2188-2292',
      name: 'Zenith Rider 2',
      type: 'Volvo AC',
      routeId: 'r77',
      driverId: 'd7',
      status: 'running',
      capacity: 45,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 26.7944,
          lng: 81.8851
      }
  },
  {
      id: 'b165',
      busNumber: 'UP-166-2201-2309',
      name: 'Horizon Traveller 3',
      type: 'Non-AC',
      routeId: 'r77',
      driverId: 'd8',
      status: 'running',
      capacity: 46,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 26.7832,
          lng: 82.3811
      }
  },
  {
      id: 'b166',
      busNumber: 'UP-167-2214-2326',
      name: 'Pinnacle Express 4',
      type: 'AC Chair Car',
      routeId: 'r77',
      driverId: 'd9',
      status: 'delayed',
      capacity: 47,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 26.7719,
          lng: 82.8772
      }
  },
  {
      id: 'b167',
      busNumber: 'UP-168-2182-2286',
      name: 'Summit Rider',
      type: 'Volvo AC',
      routeId: 'r78',
      driverId: 'd7',
      status: 'running',
      capacity: 45,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 26.7252,
          lng: 80.7527
      }
  },
  {
      id: 'b168',
      busNumber: 'UP-169-2195-2303',
      name: 'Valley Star 2',
      type: 'Non-AC',
      routeId: 'r78',
      driverId: 'd8',
      status: 'running',
      capacity: 46,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 26.6334,
          lng: 80.6124
      }
  },
  {
      id: 'b169',
      busNumber: 'UP-170-2208-2320',
      name: 'Ocean Breeze 3',
      type: 'AC Chair Car',
      routeId: 'r78',
      driverId: 'd9',
      status: 'delayed',
      capacity: 47,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 26.5417,
          lng: 80.4722
      }
  },
  {
      id: 'b170',
      busNumber: 'MH-171-2189-2297',
      name: 'City Link',
      type: 'Non-AC',
      routeId: 'r79',
      driverId: 'd8',
      status: 'running',
      capacity: 46,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 19.2714,
          lng: 73.6607
      }
  },
  {
      id: 'b171',
      busNumber: 'MH-172-2202-2314',
      name: 'Town Express 2',
      type: 'AC Chair Car',
      routeId: 'r79',
      driverId: 'd9',
      status: 'delayed',
      capacity: 47,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 19.5738,
          lng: 74.502
      }
  },
  {
      id: 'b172',
      busNumber: 'MH-173-2196-2308',
      name: 'Urban Rider',
      type: 'AC Chair Car',
      routeId: 'r80',
      driverId: 'd9',
      status: 'delayed',
      capacity: 47,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 18.403,
          lng: 73.1754
      }
  },
  {
      id: 'b173',
      busNumber: 'MH-174-2209-2325',
      name: 'Metro Glide 2',
      type: 'Luxury Sleeper',
      routeId: 'r80',
      driverId: 'd10',
      status: 'stopped',
      capacity: 48,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 17.837,
          lng: 73.5314
      }
  },
  {
      id: 'b174',
      busNumber: 'MH-175-2222-2342',
      name: 'Rapid Transit 3',
      type: 'AC Sleeper',
      routeId: 'r80',
      driverId: 'd11',
      status: 'running',
      capacity: 49,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 17.271,
          lng: 73.8873
      }
  },
  {
      id: 'b175',
      busNumber: 'MH-176-2203-2319',
      name: 'Thunder Express',
      type: 'Luxury Sleeper',
      routeId: 'r81',
      driverId: 'd10',
      status: 'stopped',
      capacity: 48,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 18.6417,
          lng: 73.5911
      }
  },
  {
      id: 'b176',
      busNumber: 'MH-177-2216-2336',
      name: 'Lightning Rider 2',
      type: 'AC Sleeper',
      routeId: 'r81',
      driverId: 'd11',
      status: 'running',
      capacity: 49,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 18.3145,
          lng: 74.3629
      }
  },
  {
      id: 'b177',
      busNumber: 'MH-178-2229-2353',
      name: 'Storm Runner 3',
      type: 'AC Semi-Sleeper',
      routeId: 'r81',
      driverId: 'd12',
      status: 'running',
      capacity: 50,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 17.9872,
          lng: 75.1347
      }
  },
  {
      id: 'b178',
      busNumber: 'MH-179-2210-2330',
      name: 'Cyclone Cruiser',
      type: 'AC Sleeper',
      routeId: 'r82',
      driverId: 'd11',
      status: 'running',
      capacity: 49,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 18.1424,
          lng: 73.9395
      }
  },
  {
      id: 'b179',
      busNumber: 'MH-180-2223-2347',
      name: 'Typhoon Star 2',
      type: 'AC Semi-Sleeper',
      routeId: 'r82',
      driverId: 'd12',
      status: 'running',
      capacity: 50,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 17.7831,
          lng: 74.0155
      }
  },
  {
      id: 'b180',
      busNumber: 'MH-181-2236-2364',
      name: 'Eagle Wings 3',
      type: 'Volvo AC',
      routeId: 'r82',
      driverId: 'd13',
      status: 'running',
      capacity: 51,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 17.4237,
          lng: 74.0914
      }
  },
  {
      id: 'b181',
      busNumber: 'MH-182-2249-2381',
      name: 'Falcon Flight 4',
      type: 'Non-AC',
      routeId: 'r82',
      driverId: 'd14',
      status: 'running',
      capacity: 52,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 17.0644,
          lng: 74.1674
      }
  },
  {
      id: 'b182',
      busNumber: 'MH-183-2217-2341',
      name: 'Hawk Rider',
      type: 'AC Semi-Sleeper',
      routeId: 'r83',
      driverId: 'd12',
      status: 'running',
      capacity: 50,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 18.2913,
          lng: 74.3743
      }
  },
  {
      id: 'b183',
      busNumber: 'MH-184-2230-2358',
      name: 'Phoenix Express 2',
      type: 'Volvo AC',
      routeId: 'r83',
      driverId: 'd13',
      status: 'running',
      capacity: 51,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 18.0808,
          lng: 74.885
      }
  },
  {
      id: 'b184',
      busNumber: 'MH-185-2243-2375',
      name: 'Dragon Star 3',
      type: 'Non-AC',
      routeId: 'r83',
      driverId: 'd14',
      status: 'running',
      capacity: 52,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 17.8704,
          lng: 75.3957
      }
  },
  {
      id: 'b185',
      busNumber: 'MH-186-2224-2352',
      name: 'Lion King Express',
      type: 'Volvo AC',
      routeId: 'r84',
      driverId: 'd13',
      status: 'running',
      capacity: 51,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 18.8454,
          lng: 74.2335
      }
  },
  {
      id: 'b186',
      busNumber: 'MH-187-2237-2369',
      name: 'Tiger Force 2',
      type: 'Non-AC',
      routeId: 'r84',
      driverId: 'd14',
      status: 'running',
      capacity: 52,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 19.189,
          lng: 74.6035
      }
  },
  {
      id: 'b187',
      busNumber: 'MH-188-2250-2386',
      name: 'Cheetah Runner 3',
      type: 'AC Chair Car',
      routeId: 'r84',
      driverId: 'd15',
      status: 'delayed',
      capacity: 36,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 19.5326,
          lng: 74.9734
      }
  },
  {
      id: 'b188',
      busNumber: 'MH-189-2231-2363',
      name: 'Panther Rider',
      type: 'Non-AC',
      routeId: 'r85',
      driverId: 'd14',
      status: 'running',
      capacity: 52,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 19.3831,
          lng: 75.6051
      }
  },
  {
      id: 'b189',
      busNumber: 'MH-190-2244-2380',
      name: 'Leopard Star 2',
      type: 'AC Chair Car',
      routeId: 'r85',
      driverId: 'd15',
      status: 'delayed',
      capacity: 36,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 20.2645,
          lng: 77.3467
      }
  },
  {
      id: 'b190',
      busNumber: 'MH-191-2238-2374',
      name: 'Raj Express',
      type: 'AC Chair Car',
      routeId: 'r86',
      driverId: 'd15',
      status: 'delayed',
      capacity: 36,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 21.0937,
          lng: 78.761
      }
  },
  {
      id: 'b191',
      busNumber: 'MH-192-2251-2391',
      name: 'Deccan Queen 2',
      type: 'Luxury Sleeper',
      routeId: 'r86',
      driverId: 'd16',
      status: 'stopped',
      capacity: 37,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 21.0416,
          lng: 78.4339
      }
  },
  {
      id: 'b192',
      busNumber: 'MH-193-2264-2408',
      name: 'Shatabdi Link 3',
      type: 'AC Sleeper',
      routeId: 'r86',
      driverId: 'd17',
      status: 'running',
      capacity: 38,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 20.9895,
          lng: 78.1068
      }
  },
  {
      id: 'b193',
      busNumber: 'MP-194-2245-2385',
      name: 'Golden Chariot',
      type: 'Luxury Sleeper',
      routeId: 'r87',
      driverId: 'd16',
      status: 'stopped',
      capacity: 37,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 23.2442,
          lng: 77.9274
      }
  },
  {
      id: 'b194',
      busNumber: 'MP-195-2258-2402',
      name: 'Silver Arrow 2',
      type: 'AC Sleeper',
      routeId: 'r87',
      driverId: 'd17',
      status: 'running',
      capacity: 38,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 23.2285,
          lng: 78.4421
      }
  },
  {
      id: 'b195',
      busNumber: 'MP-196-2271-2419',
      name: 'Blue Star 3',
      type: 'AC Semi-Sleeper',
      routeId: 'r87',
      driverId: 'd18',
      status: 'running',
      capacity: 39,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 23.2129,
          lng: 78.9569
      }
  },
  {
      id: 'b196',
      busNumber: 'MP-197-2284-2436',
      name: 'Regal Rider 4',
      type: 'Volvo AC',
      routeId: 'r87',
      driverId: 'd19',
      status: 'running',
      capacity: 40,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 23.1972,
          lng: 79.4716
      }
  },
  {
      id: 'b197',
      busNumber: 'MP-198-2252-2396',
      name: 'Sky King',
      type: 'AC Sleeper',
      routeId: 'r88',
      driverId: 'd17',
      status: 'running',
      capacity: 38,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 24.246,
          lng: 77.6693
      }
  },
  {
      id: 'b198',
      busNumber: 'MP-199-2265-2413',
      name: 'Summit Express 2',
      type: 'AC Semi-Sleeper',
      routeId: 'r88',
      driverId: 'd18',
      status: 'running',
      capacity: 39,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 25.2322,
          lng: 77.9261
      }
  },
  {
      id: 'b199',
      busNumber: 'MP-200-2259-2407',
      name: 'Valley Cruiser',
      type: 'AC Semi-Sleeper',
      routeId: 'r89',
      driverId: 'd18',
      status: 'running',
      capacity: 39,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 23.239,
          lng: 77.0066
      }
  },
  {
      id: 'b200',
      busNumber: 'MP-201-2272-2424',
      name: 'Coastal King 2',
      type: 'Volvo AC',
      routeId: 'r89',
      driverId: 'd19',
      status: 'running',
      capacity: 40,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 23.2182,
          lng: 76.6005
      }
  },
  {
      id: 'b201',
      busNumber: 'MP-202-2285-2441',
      name: 'Desert Wind 3',
      type: 'Non-AC',
      routeId: 'r89',
      driverId: 'd20',
      status: 'running',
      capacity: 41,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 23.1974,
          lng: 76.1945
      }
  },
  {
      id: 'b202',
      busNumber: 'MP-203-2266-2418',
      name: 'Mountain Hawk',
      type: 'Volvo AC',
      routeId: 'r90',
      driverId: 'd19',
      status: 'running',
      capacity: 40,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 22.8338,
          lng: 75.8404
      }
  },
  {
      id: 'b203',
      busNumber: 'MP-204-2279-2435',
      name: 'River Queen 2',
      type: 'Non-AC',
      routeId: 'r90',
      driverId: 'd20',
      status: 'running',
      capacity: 41,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 22.9481,
          lng: 75.8231
      }
  },
  {
      id: 'b204',
      busNumber: 'MP-205-2292-2452',
      name: 'Metro Link 3',
      type: 'AC Chair Car',
      routeId: 'r90',
      driverId: 'd1',
      status: 'delayed',
      capacity: 42,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 23.0623,
          lng: 75.8058
      }
  },
  {
      id: 'b205',
      busNumber: 'CG-206-2273-2429',
      name: 'Heritage Express',
      type: 'Non-AC',
      routeId: 'r91',
      driverId: 'd20',
      status: 'running',
      capacity: 41,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 21.5275,
          lng: 81.8
      }
  },
  {
      id: 'b206',
      busNumber: 'CG-207-2286-2446',
      name: 'Royal Rider 2',
      type: 'AC Chair Car',
      routeId: 'r91',
      driverId: 'd1',
      status: 'delayed',
      capacity: 42,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 21.8036,
          lng: 81.9705
      }
  },
  {
      id: 'b207',
      busNumber: 'CG-208-2280-2440',
      name: 'Pride of India',
      type: 'AC Chair Car',
      routeId: 'r92',
      driverId: 'd1',
      status: 'delayed',
      capacity: 42,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 20.8171,
          lng: 81.7073
      }
  },
  {
      id: 'b208',
      busNumber: 'CG-209-2293-2457',
      name: 'Bharat Express 2',
      type: 'Luxury Sleeper',
      routeId: 'r92',
      driverId: 'd2',
      status: 'stopped',
      capacity: 43,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 20.3828,
          lng: 81.785
      }
  },
  {
      id: 'b209',
      busNumber: 'CG-210-2306-2474',
      name: 'National Cruiser 3',
      type: 'AC Sleeper',
      routeId: 'r92',
      driverId: 'd3',
      status: 'running',
      capacity: 44,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 19.9484,
          lng: 81.8627
      }
  },
  {
      id: 'b210',
      busNumber: 'CG-211-2319-2491',
      name: 'Sunrise Express 4',
      type: 'AC Semi-Sleeper',
      routeId: 'r92',
      driverId: 'd4',
      status: 'running',
      capacity: 45,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 19.5141,
          lng: 81.9404
      }
  },
  {
      id: 'b211',
      busNumber: 'MH-212-2287-2451',
      name: 'Moonlight Rider',
      type: 'Luxury Sleeper',
      routeId: 'r93',
      driverId: 'd2',
      status: 'stopped',
      capacity: 43,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 21.6547,
          lng: 79.3127
      }
  },
  {
      id: 'b212',
      busNumber: 'MH-213-2300-2468',
      name: 'Twilight Star 2',
      type: 'AC Sleeper',
      routeId: 'r93',
      driverId: 'd3',
      status: 'running',
      capacity: 44,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 22.1637,
          lng: 79.5373
      }
  },
  {
      id: 'b213',
      busNumber: 'MH-214-2313-2485',
      name: 'Aurora Express 3',
      type: 'AC Semi-Sleeper',
      routeId: 'r93',
      driverId: 'd4',
      status: 'running',
      capacity: 45,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 22.6726,
          lng: 79.7619
      }
  },
  {
      id: 'b214',
      busNumber: 'KA-215-2294-2462',
      name: 'Zenith Rider',
      type: 'AC Sleeper',
      routeId: 'r94',
      driverId: 'd3',
      status: 'running',
      capacity: 44,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 13.773,
          lng: 76.7563
      }
  },
  {
      id: 'b215',
      busNumber: 'KA-216-2307-2479',
      name: 'Horizon Traveller 2',
      type: 'AC Semi-Sleeper',
      routeId: 'r94',
      driverId: 'd4',
      status: 'running',
      capacity: 45,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 14.5689,
          lng: 75.9401
      }
  },
  {
      id: 'b216',
      busNumber: 'KA-217-2301-2473',
      name: 'Pinnacle Express',
      type: 'AC Semi-Sleeper',
      routeId: 'r95',
      driverId: 'd4',
      status: 'running',
      capacity: 45,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 13.6953,
          lng: 76.8037
      }
  },
  {
      id: 'b217',
      busNumber: 'KA-218-2314-2490',
      name: 'Summit Rider 2',
      type: 'Volvo AC',
      routeId: 'r95',
      driverId: 'd5',
      status: 'running',
      capacity: 46,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 14.4135,
          lng: 76.035
      }
  },
  {
      id: 'b218',
      busNumber: 'KA-219-2327-2507',
      name: 'Valley Star 3',
      type: 'Non-AC',
      routeId: 'r95',
      driverId: 'd6',
      status: 'running',
      capacity: 47,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 15.1316,
          lng: 75.2664
      }
  },
  {
      id: 'b219',
      busNumber: 'KA-220-2308-2484',
      name: 'Ocean Breeze',
      type: 'Volvo AC',
      routeId: 'r96',
      driverId: 'd5',
      status: 'running',
      capacity: 46,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 14.0653,
          lng: 77.3879
      }
  },
  {
      id: 'b220',
      busNumber: 'KA-221-2321-2501',
      name: 'City Link 2',
      type: 'Non-AC',
      routeId: 'r96',
      driverId: 'd6',
      status: 'running',
      capacity: 47,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 15.1534,
          lng: 77.2034
      }
  },
  {
      id: 'b221',
      busNumber: 'KA-222-2334-2518',
      name: 'Town Express 3',
      type: 'AC Chair Car',
      routeId: 'r96',
      driverId: 'd7',
      status: 'delayed',
      capacity: 48,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 16.2416,
          lng: 77.0188
      }
  },
  {
      id: 'b222',
      busNumber: 'KA-223-2315-2495',
      name: 'Urban Rider',
      type: 'Non-AC',
      routeId: 'r97',
      driverId: 'd6',
      status: 'running',
      capacity: 47,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 15.4617,
          lng: 74.9987
      }
  },
  {
      id: 'b223',
      busNumber: 'KA-224-2328-2512',
      name: 'Metro Glide 2',
      type: 'AC Chair Car',
      routeId: 'r97',
      driverId: 'd7',
      status: 'delayed',
      capacity: 48,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 15.5587,
          lng: 74.8735
      }
  },
  {
      id: 'b224',
      busNumber: 'KA-225-2341-2529',
      name: 'Rapid Transit 3',
      type: 'Luxury Sleeper',
      routeId: 'r97',
      driverId: 'd8',
      status: 'stopped',
      capacity: 49,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 15.6557,
          lng: 74.7482
      }
  },
  {
      id: 'b225',
      busNumber: 'KA-226-2354-2546',
      name: 'Thunder Express 4',
      type: 'AC Sleeper',
      routeId: 'r97',
      driverId: 'd9',
      status: 'running',
      capacity: 50,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 15.7527,
          lng: 74.623
      }
  },
  {
      id: 'b226',
      busNumber: 'KA-227-2322-2506',
      name: 'Lightning Rider',
      type: 'AC Chair Car',
      routeId: 'r98',
      driverId: 'd7',
      status: 'delayed',
      capacity: 48,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 15.3983,
          lng: 74.7999
      }
  },
  {
      id: 'b227',
      busNumber: 'KA-228-2335-2523',
      name: 'Storm Runner 2',
      type: 'Luxury Sleeper',
      routeId: 'r98',
      driverId: 'd8',
      status: 'stopped',
      capacity: 49,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 15.4319,
          lng: 74.4759
      }
  },
  {
      id: 'b228',
      busNumber: 'KA-229-2348-2540',
      name: 'Cyclone Cruiser 3',
      type: 'AC Sleeper',
      routeId: 'r98',
      driverId: 'd9',
      status: 'running',
      capacity: 50,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 15.4654,
          lng: 74.1518
      }
  },
  {
      id: 'b229',
      busNumber: 'KA-230-2329-2517',
      name: 'Typhoon Star',
      type: 'Luxury Sleeper',
      routeId: 'r99',
      driverId: 'd8',
      status: 'stopped',
      capacity: 49,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 12.2157,
          lng: 77.2461
      }
  },
  {
      id: 'b230',
      busNumber: 'KA-231-2342-2534',
      name: 'Eagle Wings 2',
      type: 'AC Sleeper',
      routeId: 'r99',
      driverId: 'd9',
      status: 'running',
      capacity: 50,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 11.4542,
          lng: 76.9198
      }
  },
  {
      id: 'b231',
      busNumber: 'KA-232-2355-2551',
      name: 'Falcon Flight 3',
      type: 'AC Semi-Sleeper',
      routeId: 'r99',
      driverId: 'd10',
      status: 'running',
      capacity: 51,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 10.6927,
          lng: 76.5936
      }
  },
  {
      id: 'b232',
      busNumber: 'TN-233-2336-2528',
      name: 'Hawk Rider',
      type: 'AC Sleeper',
      routeId: 'r100',
      driverId: 'd9',
      status: 'running',
      capacity: 50,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 12.6935,
          lng: 80.066
      }
  },
  {
      id: 'b233',
      busNumber: 'TN-234-2349-2545',
      name: 'Phoenix Express 2',
      type: 'AC Semi-Sleeper',
      routeId: 'r100',
      driverId: 'd10',
      status: 'running',
      capacity: 51,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 12.3175,
          lng: 79.9371
      }
  },
  {
      id: 'b234',
      busNumber: 'TN-235-2343-2539',
      name: 'Dragon Star',
      type: 'AC Semi-Sleeper',
      routeId: 'r101',
      driverId: 'd10',
      status: 'running',
      capacity: 51,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 13.0312,
          lng: 79.9292
      }
  },
  {
      id: 'b235',
      busNumber: 'TN-236-2356-2556',
      name: 'Lion King Express 2',
      type: 'Volvo AC',
      routeId: 'r101',
      driverId: 'd11',
      status: 'running',
      capacity: 52,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 12.993,
          lng: 79.6636
      }
  },
  {
      id: 'b236',
      busNumber: 'TN-237-2369-2573',
      name: 'Tiger Force 3',
      type: 'Non-AC',
      routeId: 'r101',
      driverId: 'd12',
      status: 'running',
      capacity: 36,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 12.9547,
          lng: 79.3981
      }
  },
  {
      id: 'b237',
      busNumber: 'TN-238-2350-2550',
      name: 'Cheetah Runner',
      type: 'Volvo AC',
      routeId: 'r102',
      driverId: 'd11',
      status: 'running',
      capacity: 52,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 12.7884,
          lng: 79.785
      }
  },
  {
      id: 'b238',
      busNumber: 'TN-239-2363-2567',
      name: 'Panther Rider 2',
      type: 'Non-AC',
      routeId: 'r102',
      driverId: 'd12',
      status: 'running',
      capacity: 36,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 12.5074,
          lng: 79.3753
      }
  },
  {
      id: 'b239',
      busNumber: 'TN-240-2376-2584',
      name: 'Leopard Star 3',
      type: 'AC Chair Car',
      routeId: 'r102',
      driverId: 'd13',
      status: 'delayed',
      capacity: 37,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 12.2263,
          lng: 78.9655
      }
  },
  {
      id: 'b240',
      busNumber: 'TN-241-2389-2601',
      name: 'Raj Express 4',
      type: 'Luxury Sleeper',
      routeId: 'r102',
      driverId: 'd14',
      status: 'stopped',
      capacity: 38,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 11.9453,
          lng: 78.5558
      }
  },
  {
      id: 'b241',
      busNumber: 'TN-242-2357-2561',
      name: 'Deccan Queen',
      type: 'Non-AC',
      routeId: 'r103',
      driverId: 'd12',
      status: 'running',
      capacity: 36,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 12.3098,
          lng: 79.6981
      }
  },
  {
      id: 'b242',
      busNumber: 'TN-243-2370-2578',
      name: 'Shatabdi Link 2',
      type: 'AC Chair Car',
      routeId: 'r103',
      driverId: 'd13',
      status: 'delayed',
      capacity: 37,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 11.5501,
          lng: 79.2014
      }
  },
  {
      id: 'b243',
      busNumber: 'TN-244-2364-2572',
      name: 'Golden Chariot',
      type: 'AC Chair Car',
      routeId: 'r104',
      driverId: 'd13',
      status: 'delayed',
      capacity: 37,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 13.2093,
          lng: 80.0009
      }
  },
  {
      id: 'b244',
      busNumber: 'TN-245-2377-2589',
      name: 'Silver Arrow 2',
      type: 'Luxury Sleeper',
      routeId: 'r104',
      driverId: 'd14',
      status: 'stopped',
      capacity: 38,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 13.3491,
          lng: 79.807
      }
  },
  {
      id: 'b245',
      busNumber: 'TN-246-2390-2606',
      name: 'Blue Star 3',
      type: 'AC Sleeper',
      routeId: 'r104',
      driverId: 'd15',
      status: 'running',
      capacity: 39,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 13.4889,
          lng: 79.6131
      }
  },
  {
      id: 'b246',
      busNumber: 'TN-247-2371-2583',
      name: 'Regal Rider',
      type: 'Luxury Sleeper',
      routeId: 'r105',
      driverId: 'd14',
      status: 'stopped',
      capacity: 38,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 11.5024,
          lng: 77.8484
      }
  },
  {
      id: 'b247',
      busNumber: 'TN-248-2384-2600',
      name: 'Sky King 2',
      type: 'AC Sleeper',
      routeId: 'r105',
      driverId: 'd15',
      status: 'running',
      capacity: 39,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 11.3406,
          lng: 77.5509
      }
  },
  {
      id: 'b248',
      busNumber: 'TN-249-2397-2617',
      name: 'Summit Express 3',
      type: 'AC Semi-Sleeper',
      routeId: 'r105',
      driverId: 'd16',
      status: 'running',
      capacity: 40,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 11.1787,
          lng: 77.2533
      }
  },
  {
      id: 'b249',
      busNumber: 'TN-250-2378-2594',
      name: 'Valley Cruiser',
      type: 'AC Sleeper',
      routeId: 'r106',
      driverId: 'd15',
      status: 'running',
      capacity: 39,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 10.5021,
          lng: 78.5097
      }
  },
  {
      id: 'b250',
      busNumber: 'TN-251-2391-2611',
      name: 'Coastal King 2',
      type: 'AC Semi-Sleeper',
      routeId: 'r106',
      driverId: 'd16',
      status: 'running',
      capacity: 40,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 10.2136,
          lng: 78.3148
      }
  },
  {
      id: 'b251',
      busNumber: 'TN-252-2385-2605',
      name: 'Desert Wind',
      type: 'AC Semi-Sleeper',
      routeId: 'r107',
      driverId: 'd16',
      status: 'running',
      capacity: 40,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 10.7898,
          lng: 78.7913
      }
  },
  {
      id: 'b252',
      busNumber: 'TN-253-2398-2622',
      name: 'Mountain Hawk 2',
      type: 'Volvo AC',
      routeId: 'r107',
      driverId: 'd17',
      status: 'running',
      capacity: 41,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 10.7891,
          lng: 78.8779
      }
  },
  {
      id: 'b253',
      busNumber: 'TN-254-2411-2639',
      name: 'River Queen 3',
      type: 'Non-AC',
      routeId: 'r107',
      driverId: 'd18',
      status: 'running',
      capacity: 42,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 10.7884,
          lng: 78.9646
      }
  },
  {
      id: 'b254',
      busNumber: 'TN-255-2424-2656',
      name: 'Metro Link 4',
      type: 'AC Chair Car',
      routeId: 'r107',
      driverId: 'd19',
      status: 'delayed',
      capacity: 43,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 10.7877,
          lng: 79.0512
      }
  },
  {
      id: 'b255',
      busNumber: 'KL-256-2392-2616',
      name: 'Heritage Express',
      type: 'Volvo AC',
      routeId: 'r108',
      driverId: 'd17',
      status: 'running',
      capacity: 41,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 10.2631,
          lng: 76.1456
      }
  },
  {
      id: 'b256',
      busNumber: 'KL-257-2405-2633',
      name: 'Royal Rider 2',
      type: 'Non-AC',
      routeId: 'r108',
      driverId: 'd18',
      status: 'running',
      capacity: 42,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 10.595,
          lng: 76.0239
      }
  },
  {
      id: 'b257',
      busNumber: 'KL-258-2418-2650',
      name: 'Pride of India 3',
      type: 'AC Chair Car',
      routeId: 'r108',
      driverId: 'd19',
      status: 'delayed',
      capacity: 43,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 10.9269,
          lng: 75.9021
      }
  },
  {
      id: 'b258',
      busNumber: 'KL-259-2399-2627',
      name: 'Bharat Express',
      type: 'Non-AC',
      routeId: 'r109',
      driverId: 'd18',
      status: 'running',
      capacity: 42,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 10.13,
          lng: 76.2497
      }
  },
  {
      id: 'b259',
      busNumber: 'KL-260-2412-2644',
      name: 'National Cruiser 2',
      type: 'AC Chair Car',
      routeId: 'r109',
      driverId: 'd19',
      status: 'delayed',
      capacity: 43,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 10.3288,
          lng: 76.232
      }
  },
  {
      id: 'b260',
      busNumber: 'KL-261-2406-2638',
      name: 'Sunrise Express',
      type: 'AC Chair Car',
      routeId: 'r110',
      driverId: 'd19',
      status: 'delayed',
      capacity: 43,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 10.5751,
          lng: 76.0695
      }
  },
  {
      id: 'b261',
      busNumber: 'KL-262-2419-2655',
      name: 'Moonlight Rider 2',
      type: 'Luxury Sleeper',
      routeId: 'r110',
      driverId: 'd20',
      status: 'stopped',
      capacity: 44,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 9.8915,
          lng: 76.3585
      }
  },
  {
      id: 'b262',
      busNumber: 'KL-263-2432-2672',
      name: 'Twilight Star 3',
      type: 'AC Sleeper',
      routeId: 'r110',
      driverId: 'd1',
      status: 'running',
      capacity: 45,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 9.2078,
          lng: 76.6475
      }
  },
  {
      id: 'b263',
      busNumber: 'KL-264-2413-2649',
      name: 'Aurora Express',
      type: 'Luxury Sleeper',
      routeId: 'r111',
      driverId: 'd20',
      status: 'stopped',
      capacity: 44,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 10.0267,
          lng: 76.3949
      }
  },
  {
      id: 'b264',
      busNumber: 'KL-265-2426-2666',
      name: 'Zenith Rider 2',
      type: 'AC Sleeper',
      routeId: 'r111',
      driverId: 'd1',
      status: 'running',
      capacity: 45,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 9.5259,
          lng: 76.5755
      }
  },
  {
      id: 'b265',
      busNumber: 'KL-266-2439-2683',
      name: 'Horizon Traveller 3',
      type: 'AC Semi-Sleeper',
      routeId: 'r111',
      driverId: 'd2',
      status: 'running',
      capacity: 46,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 9.025,
          lng: 76.7561
      }
  },
  {
      id: 'b266',
      busNumber: 'TS-267-2420-2660',
      name: 'Pinnacle Express',
      type: 'AC Sleeper',
      routeId: 'r112',
      driverId: 'd1',
      status: 'running',
      capacity: 45,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 17.4984,
          lng: 78.7059
      }
  },
  {
      id: 'b267',
      busNumber: 'TS-268-2433-2677',
      name: 'Summit Rider 2',
      type: 'AC Semi-Sleeper',
      routeId: 'r112',
      driverId: 'd2',
      status: 'running',
      capacity: 46,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 17.6184,
          lng: 78.928
      }
  },
  {
      id: 'b268',
      busNumber: 'TS-269-2446-2694',
      name: 'Valley Star 3',
      type: 'Volvo AC',
      routeId: 'r112',
      driverId: 'd3',
      status: 'running',
      capacity: 47,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 17.7384,
          lng: 79.15
      }
  },
  {
      id: 'b269',
      busNumber: 'TS-270-2459-2711',
      name: 'Ocean Breeze 4',
      type: 'Non-AC',
      routeId: 'r112',
      driverId: 'd4',
      status: 'running',
      capacity: 48,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 17.8584,
          lng: 79.3721
      }
  },
  {
      id: 'b270',
      busNumber: 'TS-271-2427-2671',
      name: 'City Link',
      type: 'AC Semi-Sleeper',
      routeId: 'r113',
      driverId: 'd2',
      status: 'running',
      capacity: 46,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 16.441,
          lng: 78.7177
      }
  },
  {
      id: 'b271',
      busNumber: 'TS-272-2440-2688',
      name: 'Town Express 2',
      type: 'Volvo AC',
      routeId: 'r113',
      driverId: 'd3',
      status: 'running',
      capacity: 47,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 15.5036,
          lng: 78.9515
      }
  },
  {
      id: 'b272',
      busNumber: 'TS-273-2453-2705',
      name: 'Urban Rider 3',
      type: 'Non-AC',
      routeId: 'r113',
      driverId: 'd4',
      status: 'running',
      capacity: 48,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 14.5662,
          lng: 79.1854
      }
  },
  {
      id: 'b273',
      busNumber: 'TS-274-2434-2682',
      name: 'Metro Glide',
      type: 'Volvo AC',
      routeId: 'r114',
      driverId: 'd3',
      status: 'running',
      capacity: 47,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 16.6444,
          lng: 78.8596
      }
  },
  {
      id: 'b274',
      busNumber: 'TS-275-2447-2699',
      name: 'Rapid Transit 2',
      type: 'Non-AC',
      routeId: 'r114',
      driverId: 'd4',
      status: 'running',
      capacity: 48,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 15.9105,
          lng: 79.2352
      }
  },
  {
      id: 'b275',
      busNumber: 'TS-276-2460-2716',
      name: 'Thunder Express 3',
      type: 'AC Chair Car',
      routeId: 'r114',
      driverId: 'd5',
      status: 'delayed',
      capacity: 49,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 15.1766,
          lng: 79.6108
      }
  },
  {
      id: 'b276',
      busNumber: 'TS-277-2441-2693',
      name: 'Lightning Rider',
      type: 'Non-AC',
      routeId: 'r115',
      driverId: 'd4',
      status: 'running',
      capacity: 48,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 17.0212,
          lng: 79.1348
      }
  },
  {
      id: 'b277',
      busNumber: 'TS-278-2454-2710',
      name: 'Storm Runner 2',
      type: 'AC Chair Car',
      routeId: 'r115',
      driverId: 'd5',
      status: 'delayed',
      capacity: 49,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 16.6639,
          lng: 79.7856
      }
  },
  {
      id: 'b278',
      busNumber: 'AP-279-2448-2704',
      name: 'Cyclone Cruiser',
      type: 'AC Chair Car',
      routeId: 'r116',
      driverId: 'd5',
      status: 'delayed',
      capacity: 49,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 16.6396,
          lng: 80.9239
      }
  },
  {
      id: 'b279',
      busNumber: 'AP-280-2461-2721',
      name: 'Typhoon Star 2',
      type: 'Luxury Sleeper',
      routeId: 'r116',
      driverId: 'd6',
      status: 'stopped',
      capacity: 50,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 16.7599,
          lng: 81.2173
      }
  },
  {
      id: 'b280',
      busNumber: 'AP-281-2474-2738',
      name: 'Eagle Wings 3',
      type: 'AC Sleeper',
      routeId: 'r116',
      driverId: 'd7',
      status: 'running',
      capacity: 51,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 16.8802,
          lng: 81.5106
      }
  },
  {
      id: 'b281',
      busNumber: 'WB-282-2455-2715',
      name: 'Falcon Flight',
      type: 'Luxury Sleeper',
      routeId: 'r117',
      driverId: 'd6',
      status: 'stopped',
      capacity: 50,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 23.3955,
          lng: 88.3601
      }
  },
  {
      id: 'b282',
      busNumber: 'WB-283-2468-2732',
      name: 'Hawk Rider 2',
      type: 'AC Sleeper',
      routeId: 'r117',
      driverId: 'd7',
      status: 'running',
      capacity: 51,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 24.2284,
          lng: 88.3689
      }
  },
  {
      id: 'b283',
      busNumber: 'WB-284-2481-2749',
      name: 'Phoenix Express 3',
      type: 'AC Semi-Sleeper',
      routeId: 'r117',
      driverId: 'd8',
      status: 'running',
      capacity: 52,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 25.0613,
          lng: 88.3777
      }
  },
  {
      id: 'b284',
      busNumber: 'WB-285-2494-2766',
      name: 'Dragon Star 4',
      type: 'Volvo AC',
      routeId: 'r117',
      driverId: 'd9',
      status: 'running',
      capacity: 36,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 25.8942,
          lng: 88.3865
      }
  },
  {
      id: 'b285',
      busNumber: 'WB-286-2462-2726',
      name: 'Lion King Express',
      type: 'AC Sleeper',
      routeId: 'r118',
      driverId: 'd7',
      status: 'running',
      capacity: 51,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 22.8819,
          lng: 88.0048
      }
  },
  {
      id: 'b286',
      busNumber: 'WB-287-2475-2743',
      name: 'Tiger Force 2',
      type: 'AC Semi-Sleeper',
      routeId: 'r118',
      driverId: 'd8',
      status: 'running',
      capacity: 52,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 23.2011,
          lng: 87.6584
      }
  },
  {
      id: 'b287',
      busNumber: 'WB-288-2469-2737',
      name: 'Cheetah Runner',
      type: 'AC Semi-Sleeper',
      routeId: 'r119',
      driverId: 'd8',
      status: 'running',
      capacity: 52,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 22.8404,
          lng: 88.0016
      }
  },
  {
      id: 'b288',
      busNumber: 'WB-289-2482-2754',
      name: 'Panther Rider 2',
      type: 'Volvo AC',
      routeId: 'r119',
      driverId: 'd9',
      status: 'running',
      capacity: 36,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 23.1182,
          lng: 87.6518
      }
  },
  {
      id: 'b289',
      busNumber: 'WB-290-2495-2771',
      name: 'Leopard Star 3',
      type: 'Non-AC',
      routeId: 'r119',
      driverId: 'd10',
      status: 'running',
      capacity: 37,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 23.3961,
          lng: 87.3021
      }
  },
  {
      id: 'b290',
      busNumber: 'WB-291-2476-2748',
      name: 'Raj Express',
      type: 'Volvo AC',
      routeId: 'r120',
      driverId: 'd9',
      status: 'running',
      capacity: 36,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 21.996,
          lng: 87.7196
      }
  },
  {
      id: 'b291',
      busNumber: 'WB-292-2489-2765',
      name: 'Deccan Queen 2',
      type: 'Non-AC',
      routeId: 'r120',
      driverId: 'd10',
      status: 'running',
      capacity: 37,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 21.4293,
          lng: 87.0879
      }
  },
  {
      id: 'b292',
      busNumber: 'WB-293-2502-2782',
      name: 'Shatabdi Link 3',
      type: 'AC Chair Car',
      routeId: 'r120',
      driverId: 'd11',
      status: 'delayed',
      capacity: 38,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 20.8627,
          lng: 86.4562
      }
  },
  {
      id: 'b293',
      busNumber: 'BR-294-2483-2759',
      name: 'Golden Chariot',
      type: 'Non-AC',
      routeId: 'r121',
      driverId: 'd10',
      status: 'running',
      capacity: 37,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 24.5937,
          lng: 86.2088
      }
  },
  {
      id: 'b294',
      busNumber: 'BR-295-2496-2776',
      name: 'Silver Arrow 2',
      type: 'AC Chair Car',
      routeId: 'r121',
      driverId: 'd11',
      status: 'delayed',
      capacity: 38,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 23.5782,
          lng: 87.2801
      }
  },
  {
      id: 'b295',
      busNumber: 'JH-296-2490-2770',
      name: 'Blue Star',
      type: 'AC Chair Car',
      routeId: 'r122',
      driverId: 'd11',
      status: 'delayed',
      capacity: 38,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 23.2362,
          lng: 85.4883
      }
  },
  {
      id: 'b296',
      busNumber: 'JH-297-2503-2787',
      name: 'Regal Rider 2',
      type: 'Luxury Sleeper',
      routeId: 'r122',
      driverId: 'd12',
      status: 'stopped',
      capacity: 39,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 23.1283,
          lng: 85.6669
      }
  },
  {
      id: 'b297',
      busNumber: 'JH-298-2516-2804',
      name: 'Sky King 3',
      type: 'AC Sleeper',
      routeId: 'r122',
      driverId: 'd13',
      status: 'running',
      capacity: 40,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 23.0204,
          lng: 85.8456
      }
  },
  {
      id: 'b298',
      busNumber: 'JH-299-2529-2821',
      name: 'Summit Express 4',
      type: 'AC Semi-Sleeper',
      routeId: 'r122',
      driverId: 'd14',
      status: 'running',
      capacity: 41,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 22.9125,
          lng: 86.0242
      }
  },
  {
      id: 'b299',
      busNumber: 'OD-300-2497-2781',
      name: 'Valley Cruiser',
      type: 'Luxury Sleeper',
      routeId: 'r123',
      driverId: 'd12',
      status: 'stopped',
      capacity: 39,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 20.1754,
          lng: 85.8262
      }
  },
  {
      id: 'b300',
      busNumber: 'OD-301-2510-2798',
      name: 'Coastal King 2',
      type: 'AC Sleeper',
      routeId: 'r123',
      driverId: 'd13',
      status: 'running',
      capacity: 40,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 20.0548,
          lng: 85.8278
      }
  },
  {
      id: 'b301',
      busNumber: 'OD-302-2523-2815',
      name: 'Desert Wind 3',
      type: 'AC Semi-Sleeper',
      routeId: 'r123',
      driverId: 'd14',
      status: 'running',
      capacity: 41,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 19.9342,
          lng: 85.8295
      }
  },
  {
      id: 'b302',
      busNumber: 'AS-303-2504-2792',
      name: 'Mountain Hawk',
      type: 'AC Sleeper',
      routeId: 'r124',
      driverId: 'd13',
      status: 'running',
      capacity: 40,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 26.3076,
          lng: 92.0908
      }
  },
  {
      id: 'b303',
      busNumber: 'AS-304-2517-2809',
      name: 'River Queen 2',
      type: 'AC Semi-Sleeper',
      routeId: 'r124',
      driverId: 'd14',
      status: 'running',
      capacity: 41,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 26.4707,
          lng: 92.4454
      }
  },
  {
      id: 'b304',
      busNumber: 'AS-305-2511-2803',
      name: 'Metro Link',
      type: 'AC Semi-Sleeper',
      routeId: 'r125',
      driverId: 'd14',
      status: 'running',
      capacity: 41,
      amenities: [
          'AC',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 25.8167,
          lng: 91.9969
      }
  },
  {
      id: 'b305',
      busNumber: 'AS-306-2524-2820',
      name: 'Heritage Express 2',
      type: 'Volvo AC',
      routeId: 'r125',
      driverId: 'd15',
      status: 'running',
      capacity: 42,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 25.4889,
          lng: 92.2575
      }
  },
  {
      id: 'b306',
      busNumber: 'AS-307-2537-2837',
      name: 'Royal Rider 3',
      type: 'Non-AC',
      routeId: 'r125',
      driverId: 'd16',
      status: 'running',
      capacity: 43,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 25.1611,
          lng: 92.5182
      }
  },
  {
      id: 'b307',
      busNumber: 'AS-308-2518-2814',
      name: 'Pride of India',
      type: 'Volvo AC',
      routeId: 'r126',
      driverId: 'd15',
      status: 'running',
      capacity: 42,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV'
      ],
      currentLocation: {
          lat: 25.8126,
          lng: 92.2863
      }
  },
  {
      id: 'b308',
      busNumber: 'AS-309-2531-2831',
      name: 'Bharat Express 2',
      type: 'Non-AC',
      routeId: 'r126',
      driverId: 'd16',
      status: 'running',
      capacity: 43,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 25.4808,
          lng: 92.8365
      }
  },
  {
      id: 'b309',
      busNumber: 'AS-310-2544-2848',
      name: 'National Cruiser 3',
      type: 'AC Chair Car',
      routeId: 'r126',
      driverId: 'd17',
      status: 'delayed',
      capacity: 44,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 25.1489,
          lng: 93.3867
      }
  },
  {
      id: 'b310',
      busNumber: 'AS-311-2525-2825',
      name: 'Sunrise Express',
      type: 'Non-AC',
      routeId: 'r127',
      driverId: 'd16',
      status: 'running',
      capacity: 43,
      amenities: [
          'Fan',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 25.6819,
          lng: 91.6463
      }
  },
  {
      id: 'b311',
      busNumber: 'AS-312-2538-2842',
      name: 'Moonlight Rider 2',
      type: 'AC Chair Car',
      routeId: 'r127',
      driverId: 'd17',
      status: 'delayed',
      capacity: 44,
      amenities: [
          'AC',
          'Charging Point'
      ],
      currentLocation: {
          lat: 25.2193,
          lng: 91.5564
      }
  },
  {
      id: 'b312',
      busNumber: 'AS-313-2551-2859',
      name: 'Twilight Star 3',
      type: 'Luxury Sleeper',
      routeId: 'r127',
      driverId: 'd18',
      status: 'stopped',
      capacity: 45,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Snacks',
          'Charging Point',
          'TV',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 24.7567,
          lng: 91.4666
      }
  },
  {
      id: 'b313',
      busNumber: 'AS-314-2564-2876',
      name: 'Aurora Express 4',
      type: 'AC Sleeper',
      routeId: 'r127',
      driverId: 'd19',
      status: 'running',
      capacity: 46,
      amenities: [
          'AC',
          'WiFi',
          'Blanket',
          'Charging Point',
          'Water Bottle'
      ],
      currentLocation: {
          lat: 24.2941,
          lng: 91.3767
      }
  }
];

const defaultUsers = [
  {
    id: 'u1',
    name: 'Admin User',
    email: 'admin@whereismybus.com',
    password: '$2a$10$XKwYOKTMaN6PJ3QR8K6YaOKYH5K5K5K5K5K5K5K5K5K5K5K5K5K5K', // will be set in db.js
    role: 'admin'
  }
];

module.exports = { drivers, routes, buses, defaultUsers };
