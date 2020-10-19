
const statuses = [
  { key: 'bakerloo', id: 'bakerloo', name: 'Bakerloo', status: 'Loading...'},
  { key: 'central', id: 'central', name: 'Central', status: 'Loading...'},
  { key: 'circle', id: 'circle', name: 'Circle', status: 'Loading...'},
  { key: 'district', id: 'district', name: 'District', status: 'Loading...'},
  { key: 'hammersmith-city', id: 'hammersmith-city', name: 'Hammersmith & City', status: 'Loading...'},
  { key: 'jubilee', id: 'jubilee', name: 'Jubilee', status: 'Loading...'},
  { key: 'metropolitan', id: 'metropolitan', name: 'Metropolitan', status: 'Loading...'},
  { key: 'northern', id: 'northern', name: 'Northern', status: 'Loading...'},
  { key: 'piccadilly', id: 'piccadilly', name: 'Piccadilly', status: 'Loading...'},
  { key: 'victoria', id: 'victoria', name: 'Victoria', status: 'Loading...'},
  { key: 'waterloo-city', id: 'waterloo-city', name: 'Waterloo & City', status: 'Loading...' }
]

const stations = [
  {
      "key": "940GZZLUWLO",
      "id": "940GZZLUWLO",
      "url": "waterloo",
      "name": "Waterloo",
      "lines": [
          "bakerloo",
          "jubilee",
          "northern",
          "waterloo-city"
      ],
      "lat": 51.503299,
      "lng": -0.11478,
      "contact": [
          {
              "key": "Address",
              "value": "Waterloo Underground Station,London Underground Ltd.,York Rd,London,SE1 7ND"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "3"
          },
          {
              "key": "Lifts",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "23"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "6"
          },
          {
              "key": "Cash Machines",
              "value": "4"
          },
          {
              "key": "Taxi Rank",
              "value": "Yes"
          }
      ]
  },
  {
      "key": "940GZZLUBNK",
      "id": "940GZZLUBNK",
      "url": "bank",
      "name": "Bank",
      "lines": [
          "central",
          "northern",
          "waterloo-city"
      ],
      "lat": 51.512884,
      "lng": -0.091397,
      "contact": [
          {
              "key": "Address",
              "value": "Bank/Monument Complex,London Underground Ltd.,Princes St,London,EC3V 3LA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Lifts",
              "value": "5"
          },
          {
              "key": "Escalators",
              "value": "15"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "10 on platforms, 1 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "3"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUBLR",
      "id": "940GZZLUBLR",
      "url": "blackhorse-road",
      "name": "Blackhorse Road",
      "lines": [
          "victoria"
      ],
      "lat": 51.586919,
      "lng": -0.04115,
      "contact": [
          {
              "key": "Address",
              "value": "Blackhorse Road Underground Station,London Underground Ltd.,Blackhorse Rd,London,E17 6ND"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "ASDA Click and Collect",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUBXN",
      "id": "940GZZLUBXN",
      "url": "brixton",
      "name": "Brixton",
      "lines": [
          "victoria"
      ],
      "lat": 51.462618,
      "lng": -0.114888,
      "contact": [
          {
              "key": "Address",
              "value": "Brixton Underground Station,London Underground Ltd.,Brixton Rd,London,SW9 8HE"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "6 on platforms, 0 in ticket halls, 1 elsewhere"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUHAI",
      "id": "940GZZLUHAI",
      "url": "highbury-&-islington",
      "name": "Highbury & Islington",
      "lines": [
          "victoria"
      ],
      "lat": 51.54635,
      "lng": -0.103324,
      "contact": [
          {
              "key": "Address",
              "value": "Highbury & Islington Underground Station,London Underground Ltd.,Holloway Rd,London,N5 1RA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "3"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          }
      ]
  },
  {
      "key": "940GZZLUPCO",
      "id": "940GZZLUPCO",
      "url": "pimlico",
      "name": "Pimlico",
      "lines": [
          "victoria"
      ],
      "lat": 51.489097,
      "lng": -0.133761,
      "contact": [
          {
              "key": "Address",
              "value": "Pimlico Station,London Underground Ltd.,Bessborough St,London,SW1V 2JA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "4 on platforms, 0 in ticket halls, 1 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUSVS",
      "id": "940GZZLUSVS",
      "url": "seven-sisters",
      "name": "Seven Sisters",
      "lines": [
          "victoria"
      ],
      "lat": 51.58333,
      "lng": -0.072584,
      "contact": [
          {
              "key": "Address",
              "value": "Seven Sisters Underground Station,London Underground Ltd.,Seven Sisters Rd,London"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "Escalators",
              "value": "4"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "4"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUTMH",
      "id": "940GZZLUTMH",
      "url": "tottenham-hale",
      "name": "Tottenham Hale",
      "lines": [
          "victoria"
      ],
      "lat": 51.588108,
      "lng": -0.060241,
      "contact": [
          {
              "key": "Address",
              "value": "Tottenham Hale Underground Station,London Underground Ltd.,Station Rd,London,N17 9LR"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "6 on platforms, 0 in ticket halls, 1 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          }
      ]
  },
  {
      "key": "940GZZLUVXL",
      "id": "940GZZLUVXL",
      "url": "vauxhall",
      "name": "Vauxhall",
      "lines": [
          "victoria"
      ],
      "lat": 51.485743,
      "lng": -0.124204,
      "contact": [
          {
              "key": "Address",
              "value": "Vauxhall Underground Station,London Underground Ltd.,Vauxhall Cross,London,SE1"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1+2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "4 on platforms, 0 in ticket halls, 1 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "3"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUWWL",
      "id": "940GZZLUWWL",
      "url": "walthamstow-central",
      "name": "Walthamstow Central",
      "lines": [
          "victoria"
      ],
      "lat": 51.582965,
      "lng": -0.019885,
      "contact": [
          {
              "key": "Address",
              "value": "Walthamstow Central Station BR Hoe St,London,E17 7LP"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUFPK",
      "id": "940GZZLUFPK",
      "url": "finsbury-park",
      "name": "Finsbury Park",
      "lines": [
          "piccadilly",
          "victoria"
      ],
      "lat": 51.564158,
      "lng": -0.106825,
      "contact": [
          {
              "key": "Address",
              "value": "Finsbury Park Underground Station,London Underground Ltd.,Wells Terrace,London,N4 3JU"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "12 on platforms, 0 in ticket halls, 5 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "4"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUKSX",
      "id": "940GZZLUKSX",
      "url": "kings-cross-st.-pancras",
      "name": "King's Cross St. Pancras",
      "lines": [
          "circle",
          "hammersmith-city",
          "metropolitan",
          "northern",
          "piccadilly",
          "victoria"
      ],
      "lat": 51.530663,
      "lng": -0.123194,
      "contact": [
          {
              "key": "Address",
              "value": "King's Cross St. Pancras,London Underground Ltd.,Euston Road,London,N1 9AL"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "4"
          },
          {
              "key": "Lifts",
              "value": "10"
          },
          {
              "key": "Escalators",
              "value": "19"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "4"
          },
          {
              "key": "Cash Machines",
              "value": "9"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "Yes"
          }
      ]
  },
  {
      "key": "940GZZLUGPK",
      "id": "940GZZLUGPK",
      "url": "green-park",
      "name": "Green Park",
      "lines": [
          "jubilee",
          "piccadilly",
          "victoria"
      ],
      "lat": 51.506947,
      "lng": -0.142787,
      "contact": [
          {
              "key": "Address",
              "value": "Green Park Station,London Underground Ltd.,Piccadilly,London,W1J 9DZ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "5"
          },
          {
              "key": "Escalators",
              "value": "11"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "4"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUEUS",
      "id": "940GZZLUEUS",
      "url": "euston",
      "name": "Euston",
      "lines": [
          "northern",
          "victoria"
      ],
      "lat": 51.528089,
      "lng": -0.132066,
      "contact": [
          {
              "key": "Address",
              "value": "Euston Underground Station,London Underground Ltd.,Eversholt St,London,NW1 2DU"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Escalators",
              "value": "10"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUSKW",
      "id": "940GZZLUSKW",
      "url": "stockwell",
      "name": "Stockwell",
      "lines": [
          "northern",
          "victoria"
      ],
      "lat": 51.472184,
      "lng": -0.122644,
      "contact": [
          {
              "key": "Address",
              "value": "Stockwell Station,London Underground Ltd.,Clapham Rd,London,SW9 9AE"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "3"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "5"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUWRR",
      "id": "940GZZLUWRR",
      "url": "warren-street",
      "name": "Warren Street",
      "lines": [
          "northern",
          "victoria"
      ],
      "lat": 51.524951,
      "lng": -0.138321,
      "contact": [
          {
              "key": "Address",
              "value": "Warren Street Station,London Underground Ltd.,Tottenham Court Rd,London,NW1 3AA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Escalators",
              "value": "7"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 5 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUVIC",
      "id": "940GZZLUVIC",
      "url": "victoria",
      "name": "Victoria",
      "lines": [
          "circle",
          "district",
          "victoria"
      ],
      "lat": 51.496359,
      "lng": -0.143102,
      "contact": [
          {
              "key": "Address",
              "value": "Victoria Underground Station,London Underground Ltd.,Victoria St,London,SW1E 5ND"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Lifts",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "6"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "4"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUOXC",
      "id": "940GZZLUOXC",
      "url": "oxford-circus",
      "name": "Oxford Circus",
      "lines": [
          "bakerloo",
          "central",
          "victoria"
      ],
      "lat": 51.515224,
      "lng": -0.141903,
      "contact": [
          {
              "key": "Address",
              "value": "Oxford Circus Station,London Underground Ltd.,Oxford St,London,W1B 3AG"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "Escalators",
              "value": "14"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "18 on platforms, 0 in ticket halls, 18 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "3"
          },
          {
              "key": "Cash Machines",
              "value": "3"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUALP",
      "id": "940GZZLUALP",
      "url": "alperton",
      "name": "Alperton",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.540627,
      "lng": -0.29961,
      "contact": [
          {
              "key": "Address",
              "value": "Alperton Station,London Underground Ltd.,Ealing Rd,Wembley,Middlesex,HA0 4LL"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUASG",
      "id": "940GZZLUASG",
      "url": "arnos-grove",
      "name": "Arnos Grove",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.616446,
      "lng": -0.133062,
      "contact": [
          {
              "key": "Address",
              "value": "Arnos Grove Station,London Underground Ltd.,Bowes Rd,London,N11 1AN"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUASL",
      "id": "940GZZLUASL",
      "url": "arsenal",
      "name": "Arsenal",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.558655,
      "lng": -0.107457,
      "contact": [
          {
              "key": "Address",
              "value": "Arsenal Station,London Underground Ltd.,Highbury Hill,London,N5 1LP"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "4 on platforms, 0 in ticket halls, 1 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUBDS",
      "id": "940GZZLUBDS",
      "url": "bounds-green",
      "name": "Bounds Green",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.607034,
      "lng": -0.124235,
      "contact": [
          {
              "key": "Address",
              "value": "Bounds Green Station,London Underground Ltd.,Bounds Green Rd,London,N11 2EU"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3+4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUBOS",
      "id": "940GZZLUBOS",
      "url": "boston-manor",
      "name": "Boston Manor",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.495635,
      "lng": -0.324939,
      "contact": [
          {
              "key": "Address",
              "value": "Boston Manor Station,London Underground Ltd.,Boston Manor Rd,Brentford,Middx,TW8 9LQ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUCAR",
      "id": "940GZZLUCAR",
      "url": "caledonian-road",
      "name": "Caledonian Road",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.548519,
      "lng": -0.118493,
      "contact": [
          {
              "key": "Address",
              "value": "Caledonian Road Underground Station,London Underground Ltd.,Caledonian Rd,London,N7 9BA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "4 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUCGN",
      "id": "940GZZLUCGN",
      "url": "covent-garden",
      "name": "Covent Garden",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.513093,
      "lng": -0.124436,
      "contact": [
          {
              "key": "Address",
              "value": "Covent Garden Station,London Underground Ltd.,Long Acre,London,WC2E 9JT"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "4"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUCKS",
      "id": "940GZZLUCKS",
      "url": "cockfosters",
      "name": "Cockfosters",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.65152,
      "lng": -0.149171,
      "contact": [
          {
              "key": "Address",
              "value": "Cockfosters Station,London Underground Ltd.,Cockfosters Rd,Barnet,Herts,EN4 0DZ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUHNX",
      "id": "940GZZLUHNX",
      "url": "hatton-cross",
      "name": "Hatton Cross",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.466747,
      "lng": -0.423191,
      "contact": [
          {
              "key": "Address",
              "value": "Hatton Cross Station,London Underground Ltd.,Great South West Rd,Feltham,Middx,"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5+6"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUHPC",
      "id": "940GZZLUHPC",
      "url": "hyde-park-corner",
      "name": "Hyde Park Corner",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.503035,
      "lng": -0.152441,
      "contact": [
          {
              "key": "Address",
              "value": "Hyde Park Corner Station,London Underground Ltd.,Knightsbridge,London,SW1X 7LY"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "1 on platforms, 0 in ticket halls, 1 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUHR5",
      "id": "940GZZLUHR5",
      "url": "heathrow-terminal-5",
      "name": "Heathrow Terminal 5",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.470052,
      "lng": -0.49056,
      "contact": [
          {
              "key": "Address",
              "value": "Heathrow T5 Station,London Underground Ltd.,Hthrw Airport complex,Trmnl 5,Hounslow,Middx"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "6"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUHRC",
      "id": "940GZZLUHRC",
      "url": "heathrow-terminals-2-&-3",
      "name": "Heathrow Terminals 2 & 3",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.471235,
      "lng": -0.452265,
      "contact": [
          {
              "key": "Address",
              "value": "Heathrow Terminals 1, 2, 3,London Underground Ltd.,Wellington Road,Hounslow,Middlesex,TW6 1JH"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "6"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "6"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "4"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "Yes"
          }
      ]
  },
  {
      "key": "940GZZLUHWC",
      "id": "940GZZLUHWC",
      "url": "hounslow-central",
      "name": "Hounslow Central",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.471295,
      "lng": -0.366578,
      "contact": [
          {
              "key": "Address",
              "value": "Hounslow Central Station,London Underground Ltd.,Lampton Rd,Hounslow,Middx,TW3 1JG"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUHWE",
      "id": "940GZZLUHWE",
      "url": "hounslow-east",
      "name": "Hounslow East",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.473213,
      "lng": -0.356474,
      "contact": [
          {
              "key": "Address",
              "value": "Hounslow East Station,London Underground Ltd.,Kingsley Rd,Hounslow,Middx,TW3 4AB"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUHWT",
      "id": "940GZZLUHWT",
      "url": "hounslow-west",
      "name": "Hounslow West",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.473469,
      "lng": -0.386544,
      "contact": [
          {
              "key": "Address",
              "value": "Hounslow West Station,London Underground Ltd.,Bath Rd,Hounslow,Middx,TW3 3DH"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUHWY",
      "id": "940GZZLUHWY",
      "url": "holloway-road",
      "name": "Holloway Road",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.552697,
      "lng": -0.113244,
      "contact": [
          {
              "key": "Address",
              "value": "Holloway Road Station,London Underground Ltd.,Holloway Rd,London,N7 8HS"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "4 on platforms, 0 in ticket halls, 2 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUKNB",
      "id": "940GZZLUKNB",
      "url": "knightsbridge",
      "name": "Knightsbridge",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.501669,
      "lng": -0.160508,
      "contact": [
          {
              "key": "Address",
              "value": "Knightsbridge Station,London Underground Ltd.,Sloane St,London,SW1"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "Escalators",
              "value": "5"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "5"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUMRH",
      "id": "940GZZLUMRH",
      "url": "manor-house",
      "name": "Manor House",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.570738,
      "lng": -0.096118,
      "contact": [
          {
              "key": "Address",
              "value": "Manor House Station,London Underground Ltd.,Green Lanes,London,N4 1BZ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2+3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "3"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "4 on platforms, 0 in ticket halls, 1 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          }
      ]
  },
  {
      "key": "940GZZLUNEN",
      "id": "940GZZLUNEN",
      "url": "north-ealing",
      "name": "North Ealing",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.517505,
      "lng": -0.288868,
      "contact": [
          {
              "key": "Address",
              "value": "North Ealing Station,London Underground Ltd.,Station Road,London,W5 3AF"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUNFD",
      "id": "940GZZLUNFD",
      "url": "northfields",
      "name": "Northfields",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.499319,
      "lng": -0.314719,
      "contact": [
          {
              "key": "Address",
              "value": "Northfields Station,London Underground Ltd.,Northfield Avenue,London,W13 9QU"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUOAK",
      "id": "940GZZLUOAK",
      "url": "oakwood",
      "name": "Oakwood",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.647726,
      "lng": -0.132182,
      "contact": [
          {
              "key": "Address",
              "value": "Oakwood Station,London Underground Ltd.,Bramley Rd,London,N14 4UT"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Lifts",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUOSY",
      "id": "940GZZLUOSY",
      "url": "osterley",
      "name": "Osterley",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.481274,
      "lng": -0.352224,
      "contact": [
          {
              "key": "Address",
              "value": "Osterley Station,London Underground Ltd.,Great West Rd,Isleworth,Middx,TW7 4PU"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUPKR",
      "id": "940GZZLUPKR",
      "url": "park-royal",
      "name": "Park Royal",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.527123,
      "lng": -0.284341,
      "contact": [
          {
              "key": "Address",
              "value": "Park Royal Station,London Underground Ltd.,Western Avenue,London,W5 3EL"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLURSQ",
      "id": "940GZZLURSQ",
      "url": "russell-square",
      "name": "Russell Square",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.523073,
      "lng": -0.124285,
      "contact": [
          {
              "key": "Address",
              "value": "Russell Square Station,London Underground Ltd.,Bernard St,London,WC1N 1LJ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Lifts",
              "value": "3"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUSEA",
      "id": "940GZZLUSEA",
      "url": "south-ealing",
      "name": "South Ealing",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.501003,
      "lng": -0.307424,
      "contact": [
          {
              "key": "Address",
              "value": "South Ealing Station,London Underground Ltd.,South Ealing Rd,London,W5 4QB"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUSGT",
      "id": "940GZZLUSGT",
      "url": "southgate",
      "name": "Southgate",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.632315,
      "lng": -0.127816,
      "contact": [
          {
              "key": "Address",
              "value": "Southgate Station,London Underground Ltd.,High St,London,N14"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUSHH",
      "id": "940GZZLUSHH",
      "url": "south-harrow",
      "name": "South Harrow",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.564888,
      "lng": -0.352492,
      "contact": [
          {
              "key": "Address",
              "value": "South Harrow Station,London Underground Ltd.,South Hill Ave,Harrow,Middx,HA2 8HN"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUSUH",
      "id": "940GZZLUSUH",
      "url": "sudbury-hill",
      "name": "Sudbury Hill",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.556946,
      "lng": -0.336435,
      "contact": [
          {
              "key": "Address",
              "value": "Sudbury Hill Underground Station,London Underground Ltd.,Greenford Rd,Harrow,Middx,HA1 3RA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUSUT",
      "id": "940GZZLUSUT",
      "url": "sudbury-town",
      "name": "Sudbury Town",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.550815,
      "lng": -0.315745,
      "contact": [
          {
              "key": "Address",
              "value": "Sudbury Town Station,London Underground Ltd.,Station Approach,Wembley,Middx,HA0 2LA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUTPN",
      "id": "940GZZLUTPN",
      "url": "turnpike-lane",
      "name": "Turnpike Lane",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.590272,
      "lng": -0.102953,
      "contact": [
          {
              "key": "Address",
              "value": "Turnpike Lane Station,London Underground Ltd.,Westbury Avenue,London,N15 3NX"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "3"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "4 on platforms, 0 in ticket halls, 1 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "5"
          }
      ]
  },
  {
      "key": "940GZZLUWOG",
      "id": "940GZZLUWOG",
      "url": "wood-green",
      "name": "Wood Green",
      "lines": [
          "piccadilly"
      ],
      "lat": 51.597479,
      "lng": -0.109886,
      "contact": [
          {
              "key": "Address",
              "value": "Wood Green Station,London Underground Ltd.,High Rd,Wood Green,London,N22 4HH"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "3"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          }
      ]
  },
  {
      "key": "940GZZLULSQ",
      "id": "940GZZLULSQ",
      "url": "leicester-square",
      "name": "Leicester Square",
      "lines": [
          "northern",
          "piccadilly"
      ],
      "lat": 51.511386,
      "lng": -0.128426,
      "contact": [
          {
              "key": "Address",
              "value": "Leicester Square Station,London Underground Ltd.,Cranbourn St,London,WC2H 0AP"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Escalators",
              "value": "6"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "4"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUEAE",
      "id": "940GZZLUEAE",
      "url": "eastcote",
      "name": "Eastcote",
      "lines": [
          "metropolitan",
          "piccadilly"
      ],
      "lat": 51.576506,
      "lng": -0.397373,
      "contact": [
          {
              "key": "Address",
              "value": "Eastcote Station,London Underground Ltd.,Field End Rd,Ruislip,Middx,HA5 1QZ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUHGD",
      "id": "940GZZLUHGD",
      "url": "hillingdon",
      "name": "Hillingdon",
      "lines": [
          "metropolitan",
          "piccadilly"
      ],
      "lat": 51.553715,
      "lng": -0.449828,
      "contact": [
          {
              "key": "Address",
              "value": "Hillingdon Station,London Underground Ltd.,Long Lane,Hillingdon,Uxbridge,Middlesex,UB10 9NR"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "6"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "Escalators",
              "value": "yes (disabled only)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUICK",
      "id": "940GZZLUICK",
      "url": "ickenham",
      "name": "Ickenham",
      "lines": [
          "metropolitan",
          "piccadilly"
      ],
      "lat": 51.56177,
      "lng": -0.442225,
      "contact": [
          {
              "key": "Address",
              "value": "Ickenham Station,London Underground Ltd.,Glebe Avenue,Uxbridge,Middx,UB10 8PD"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "6"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLURSM",
      "id": "940GZZLURSM",
      "url": "ruislip-manor",
      "name": "Ruislip Manor",
      "lines": [
          "metropolitan",
          "piccadilly"
      ],
      "lat": 51.573202,
      "lng": -0.412973,
      "contact": [
          {
              "key": "Address",
              "value": "Ruislip Manor Station,London Underground Ltd.,Victoria Rd,Ruislip,Middx,HA4 9AA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "6"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLURSP",
      "id": "940GZZLURSP",
      "url": "ruislip",
      "name": "Ruislip",
      "lines": [
          "metropolitan",
          "piccadilly"
      ],
      "lat": 51.571354,
      "lng": -0.421898,
      "contact": [
          {
              "key": "Address",
              "value": "Ruislip Station,London Underground Ltd.,Station Approach,Ruislip,Middx,HA4 8LD"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "6"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLURYL",
      "id": "940GZZLURYL",
      "url": "rayners-lane",
      "name": "Rayners Lane",
      "lines": [
          "metropolitan",
          "piccadilly"
      ],
      "lat": 51.575147,
      "lng": -0.371127,
      "contact": [
          {
              "key": "Address",
              "value": "Rayners Lane Station,London Underground Ltd.,Alexandra Avenue,Harrow,HA5 5EG,Middx"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUUXB",
      "id": "940GZZLUUXB",
      "url": "uxbridge",
      "name": "Uxbridge",
      "lines": [
          "metropolitan",
          "piccadilly"
      ],
      "lat": 51.546565,
      "lng": -0.477949,
      "contact": [
          {
              "key": "Address",
              "value": "Uxbridge Station,London Underground Ltd.,High St,Uxbridge,Middx,UB8 1JZ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "6"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "4"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUACT",
      "id": "940GZZLUACT",
      "url": "acton-town",
      "name": "Acton Town",
      "lines": [
          "district",
          "piccadilly"
      ],
      "lat": 51.503057,
      "lng": -0.280462,
      "contact": [
          {
              "key": "Address",
              "value": "Acton Town Station,London Underground Ltd.,Gunnersbury Lane,London,W3 8HN"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUBSC",
      "id": "940GZZLUBSC",
      "url": "barons-court",
      "name": "Barons Court",
      "lines": [
          "district",
          "piccadilly"
      ],
      "lat": 51.490311,
      "lng": -0.213427,
      "contact": [
          {
              "key": "Address",
              "value": "Barons Court Station,London Underground Ltd.,Pallister Rd,London,W14"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes - male & female coin op"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUECM",
      "id": "940GZZLUECM",
      "url": "ealing-common",
      "name": "Ealing Common",
      "lines": [
          "district",
          "piccadilly"
      ],
      "lat": 51.51014,
      "lng": -0.288265,
      "contact": [
          {
              "key": "Address",
              "value": "Ealing Common Station,London Underground Ltd.,Uxbridge Rd,London,W5 3LD"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUECT",
      "id": "940GZZLUECT",
      "url": "earls-court",
      "name": "Earl's Court",
      "lines": [
          "district",
          "piccadilly"
      ],
      "lat": 51.492063,
      "lng": -0.193378,
      "contact": [
          {
              "key": "Address",
              "value": "Earl's Court Station,London Underground Ltd.,Earl's Court Rd,London,SW5 9QA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1+2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Lifts",
              "value": "4"
          },
          {
              "key": "Escalators",
              "value": "4"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "6"
          },
          {
              "key": "Cash Machines",
              "value": "3"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUHSD",
      "id": "940GZZLUHSD",
      "url": "hammersmith-",
      "name": "Hammersmith ",
      "lines": [
          "district",
          "piccadilly"
      ],
      "lat": 51.4923,
      "lng": -0.22362,
      "contact": [
          {
              "key": "Address",
              "value": "Hammersmith (D & P),London Underground Ltd.,Hammersmith Broadway,London,W6 8AB"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "3"
          },
          {
              "key": "Cash Machines",
              "value": "3"
          },
          {
              "key": "Euro Cash Machines",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUTNG",
      "id": "940GZZLUTNG",
      "url": "turnham-green",
      "name": "Turnham Green",
      "lines": [
          "district",
          "piccadilly"
      ],
      "lat": 51.495148,
      "lng": -0.254555,
      "contact": [
          {
              "key": "Address",
              "value": "Turnham Green Station,London Underground Ltd.,Turnham Green Terrace,London,W4 1LR"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "1 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUGTR",
      "id": "940GZZLUGTR",
      "url": "gloucester-road",
      "name": "Gloucester Road",
      "lines": [
          "circle",
          "district",
          "piccadilly"
      ],
      "lat": 51.494316,
      "lng": -0.182658,
      "contact": [
          {
              "key": "Address",
              "value": "Gloucester Road Station,London Underground Ltd.,Gloucester Rd,London,SW7 4SF"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 2 in ticket halls, 1 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          }
      ]
  },
  {
      "key": "940GZZLUSKS",
      "id": "940GZZLUSKS",
      "url": "south-kensington",
      "name": "South Kensington",
      "lines": [
          "circle",
          "district",
          "piccadilly"
      ],
      "lat": 51.494094,
      "lng": -0.174138,
      "contact": [
          {
              "key": "Address",
              "value": "South Kensington Station,London Underground Ltd.,Pelham St,London,SW7 2NB"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "5"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "12 on platforms, 0 in ticket halls, 4 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUHBN",
      "id": "940GZZLUHBN",
      "url": "holborn",
      "name": "Holborn",
      "lines": [
          "central",
          "piccadilly"
      ],
      "lat": 51.51758,
      "lng": -0.120475,
      "contact": [
          {
              "key": "Address",
              "value": "Holborn Station,London Underground Ltd.,Kingsway,London,WC2B 6AA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "7"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUPCC",
      "id": "940GZZLUPCC",
      "url": "piccadilly-circus",
      "name": "Piccadilly Circus",
      "lines": [
          "bakerloo",
          "piccadilly"
      ],
      "lat": 51.51005,
      "lng": -0.133798,
      "contact": [
          {
              "key": "Address",
              "value": "Piccadilly Circus Station,London Underground Ltd.,Piccadilly Circus,London,W1J 9HP"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "11"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "6"
          },
          {
              "key": "Cash Machines",
              "value": "5"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUACY",
      "id": "940GZZLUACY",
      "url": "archway",
      "name": "Archway",
      "lines": [
          "northern"
      ],
      "lat": 51.565478,
      "lng": -0.134819,
      "contact": [
          {
              "key": "Address",
              "value": "Archway Station,London Underground Ltd.,Junction Rd,London,N19 5RQ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2+3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUAGL",
      "id": "940GZZLUAGL",
      "url": "angel",
      "name": "Angel",
      "lines": [
          "northern"
      ],
      "lat": 51.532796,
      "lng": -0.105992,
      "contact": [
          {
              "key": "Address",
              "value": "Angel Station,London Underground Ltd.,High Street,London,N1 9LQ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "6"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "5 on platforms, 1 in ticket halls, 4 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUBLM",
      "id": "940GZZLUBLM",
      "url": "balham",
      "name": "Balham",
      "lines": [
          "northern"
      ],
      "lat": 51.443288,
      "lng": -0.152997,
      "contact": [
          {
              "key": "Address",
              "value": "Balham Underground Station,London Underground Ltd.,Balham High Rd,London,SW12 9BW"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "5 on platforms, 0 in ticket halls, 1 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          }
      ]
  },
  {
      "key": "940GZZLUBOR",
      "id": "940GZZLUBOR",
      "url": "borough",
      "name": "Borough",
      "lines": [
          "northern"
      ],
      "lat": 51.501199,
      "lng": -0.09337,
      "contact": [
          {
              "key": "Address",
              "value": "Borough Station,London Underground Ltd.,Borough High St,London,SE1 1JX"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUBTK",
      "id": "940GZZLUBTK",
      "url": "burnt-oak",
      "name": "Burnt Oak",
      "lines": [
          "northern"
      ],
      "lat": 51.602774,
      "lng": -0.264048,
      "contact": [
          {
              "key": "Address",
              "value": "Burnt Oak Station,London Underground Ltd.,Watling Avenue,Edgware,Middx,HA8 0LA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "3"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUBTX",
      "id": "940GZZLUBTX",
      "url": "brent-cross",
      "name": "Brent Cross",
      "lines": [
          "northern"
      ],
      "lat": 51.57665,
      "lng": -0.213622,
      "contact": [
          {
              "key": "Address",
              "value": "Brent Cross Station,London Underground Ltd.,Highfield Avenue,London,NW11 9UA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUBZP",
      "id": "940GZZLUBZP",
      "url": "belsize-park",
      "name": "Belsize Park",
      "lines": [
          "northern"
      ],
      "lat": 51.550311,
      "lng": -0.164648,
      "contact": [
          {
              "key": "Address",
              "value": "Belsize Park Station,London Underground Ltd.,Haverstock Hill,London,NW3 2AL"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "3"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUCFM",
      "id": "940GZZLUCFM",
      "url": "chalk-farm",
      "name": "Chalk Farm",
      "lines": [
          "northern"
      ],
      "lat": 51.544118,
      "lng": -0.153388,
      "contact": [
          {
              "key": "Address",
              "value": "Chalk Farm Station,London Underground Ltd.,Adelaide Rd,London,NW3 2BP"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUCND",
      "id": "940GZZLUCND",
      "url": "colindale",
      "name": "Colindale",
      "lines": [
          "northern"
      ],
      "lat": 51.595424,
      "lng": -0.249919,
      "contact": [
          {
              "key": "Address",
              "value": "Colindale Station,London Underground Ltd.,Colindale Avenue,London,NW9 5HR"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUCPC",
      "id": "940GZZLUCPC",
      "url": "clapham-common",
      "name": "Clapham Common",
      "lines": [
          "northern"
      ],
      "lat": 51.461742,
      "lng": -0.138317,
      "contact": [
          {
              "key": "Address",
              "value": "Clapham Common Station,London Underground Ltd.,The Pavement,London,SW4 7AJ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "5 on platforms, 1 in ticket halls, 1 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUCPN",
      "id": "940GZZLUCPN",
      "url": "clapham-north",
      "name": "Clapham North",
      "lines": [
          "northern"
      ],
      "lat": 51.465135,
      "lng": -0.130016,
      "contact": [
          {
              "key": "Address",
              "value": "Clapham North Station,London Underground Ltd.,Clapham High St,London,SW4 7TS"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "5 on platforms, 1 in ticket halls, 1 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUCPS",
      "id": "940GZZLUCPS",
      "url": "clapham-south",
      "name": "Clapham South",
      "lines": [
          "northern"
      ],
      "lat": 51.452654,
      "lng": -0.147582,
      "contact": [
          {
              "key": "Address",
              "value": "Clapham South Station,London Underground Ltd.,Balham Hill,London,SW12 9DU"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2+3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "5 on platforms, 1 in ticket halls, 1 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          }
      ]
  },
  {
      "key": "940GZZLUCSD",
      "id": "940GZZLUCSD",
      "url": "colliers-wood",
      "name": "Colliers Wood",
      "lines": [
          "northern"
      ],
      "lat": 51.41816,
      "lng": -0.178086,
      "contact": [
          {
              "key": "Address",
              "value": "Colliers Wood Station,London Underground Ltd.,Colliers Wood High St,London,SW19 2HR"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUCTN",
      "id": "940GZZLUCTN",
      "url": "camden-town",
      "name": "Camden Town",
      "lines": [
          "northern"
      ],
      "lat": 51.539292,
      "lng": -0.14274,
      "contact": [
          {
              "key": "Address",
              "value": "Camden Town Station,London Underground Ltd.,Camden High St,London,NW1 8NH"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUEFY",
      "id": "940GZZLUEFY",
      "url": "east-finchley",
      "name": "East Finchley",
      "lines": [
          "northern"
      ],
      "lat": 51.587131,
      "lng": -0.165012,
      "contact": [
          {
              "key": "Address",
              "value": "East Finchley Station,London Underground Ltd.,High Rd,London,N2 0NW"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          },
          {
              "key": "ASDA Click and Collect",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUEGW",
      "id": "940GZZLUEGW",
      "url": "edgware",
      "name": "Edgware",
      "lines": [
          "northern"
      ],
      "lat": 51.613653,
      "lng": -0.274928,
      "contact": [
          {
              "key": "Address",
              "value": "Edgware Station,London Underground Ltd.,Station Rd,Edgware,Middx,HA8 7AW"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUFYC",
      "id": "940GZZLUFYC",
      "url": "finchley-central",
      "name": "Finchley Central",
      "lines": [
          "northern"
      ],
      "lat": 51.600921,
      "lng": -0.192527,
      "contact": [
          {
              "key": "Address",
              "value": "Finchley Central Station,London Underground Ltd.,Regents Park Road,London,N3 2RY"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes Male/Female"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          },
          {
              "key": "Amazon Lockers",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUGDG",
      "id": "940GZZLUGDG",
      "url": "goodge-street",
      "name": "Goodge Street",
      "lines": [
          "northern"
      ],
      "lat": 51.520599,
      "lng": -0.134361,
      "contact": [
          {
              "key": "Address",
              "value": "Goodge Street Station,London Underground Ltd.,75 Tottenham Court Rd,London,W1P 9PA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "4"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          }
      ]
  },
  {
      "key": "940GZZLUGGN",
      "id": "940GZZLUGGN",
      "url": "golders-green",
      "name": "Golders Green",
      "lines": [
          "northern"
      ],
      "lat": 51.572259,
      "lng": -0.194039,
      "contact": [
          {
              "key": "Address",
              "value": "Golders Green Station,London Underground Ltd.,North End Rd,London,NW11 7RN"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "4"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUHBT",
      "id": "940GZZLUHBT",
      "url": "high-barnet",
      "name": "High Barnet",
      "lines": [
          "northern"
      ],
      "lat": 51.650541,
      "lng": -0.194298,
      "contact": [
          {
              "key": "Address",
              "value": "High Barnet Station,London Underground Ltd.,Barnet Hill,Barnet,Herts,EN5 5RP"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          },
          {
              "key": "ASDA Click and Collect",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUHCL",
      "id": "940GZZLUHCL",
      "url": "hendon-central",
      "name": "Hendon Central",
      "lines": [
          "northern"
      ],
      "lat": 51.583301,
      "lng": -0.226424,
      "contact": [
          {
              "key": "Address",
              "value": "Hendon Central Station,London Underground Ltd.,Queens Rd,London,NW4 3AS"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3+4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUHGT",
      "id": "940GZZLUHGT",
      "url": "highgate",
      "name": "Highgate",
      "lines": [
          "northern"
      ],
      "lat": 51.577532,
      "lng": -0.145857,
      "contact": [
          {
              "key": "Address",
              "value": "Highgate Station,London Underground Ltd.,Archway Rd,London,N6"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "3"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Car park",
              "value": "yes"
          },
          {
              "key": "ASDA Click and Collect",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUHTD",
      "id": "940GZZLUHTD",
      "url": "hampstead",
      "name": "Hampstead",
      "lines": [
          "northern"
      ],
      "lat": 51.556239,
      "lng": -0.177464,
      "contact": [
          {
              "key": "Address",
              "value": "Hampstead Station,London Underground Ltd.,Hampstead High St,London,NW3 1QG"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2+3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "4"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUKNG",
      "id": "940GZZLUKNG",
      "url": "kennington",
      "name": "Kennington",
      "lines": [
          "northern"
      ],
      "lat": 51.488337,
      "lng": -0.105963,
      "contact": [
          {
              "key": "Address",
              "value": "Kennington Station,London Underground Ltd.,Kennington Park Rd,London,SE11 4QJ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUKSH",
      "id": "940GZZLUKSH",
      "url": "kentish-town",
      "name": "Kentish Town",
      "lines": [
          "northern"
      ],
      "lat": 51.550312,
      "lng": -0.140733,
      "contact": [
          {
              "key": "Address",
              "value": "Kentish Town Underground Station,London Underground Ltd.,Kentish Town Rd,London,NW5 2AA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUMDN",
      "id": "940GZZLUMDN",
      "url": "morden",
      "name": "Morden",
      "lines": [
          "northern"
      ],
      "lat": 51.402142,
      "lng": -0.194839,
      "contact": [
          {
              "key": "Address",
              "value": "Morden Underground Station,London Underground Ltd.,London Rd,Morden,Surrey,SM4 5AZ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUMHL",
      "id": "940GZZLUMHL",
      "url": "mill-hill-east",
      "name": "Mill Hill East",
      "lines": [
          "northern"
      ],
      "lat": 51.608229,
      "lng": -0.209986,
      "contact": [
          {
              "key": "Address",
              "value": "Mill Hill East Station,London Underground Ltd.,Bittacy Hill,London,NW7 1BS"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUMTC",
      "id": "940GZZLUMTC",
      "url": "mornington-crescent",
      "name": "Mornington Crescent",
      "lines": [
          "northern"
      ],
      "lat": 51.534679,
      "lng": -0.138789,
      "contact": [
          {
              "key": "Address",
              "value": "Mornington Crescent Station,London Underground Ltd.,Eversholt St,London,NW1 2JA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "4 on platforms, 1 in ticket halls, 1 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUODS",
      "id": "940GZZLUODS",
      "url": "old-street",
      "name": "Old Street",
      "lines": [
          "northern"
      ],
      "lat": 51.525864,
      "lng": -0.08777,
      "contact": [
          {
              "key": "Address",
              "value": "Old Street Station,London Underground Ltd.,Old St,London,EC1Y 1BE"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "3"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUOVL",
      "id": "940GZZLUOVL",
      "url": "oval",
      "name": "Oval",
      "lines": [
          "northern"
      ],
      "lat": 51.48185,
      "lng": -0.112439,
      "contact": [
          {
              "key": "Address",
              "value": "Oval Station,London Underground Ltd.,318 Kennington Park Rd,London,SE11 4PP"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUSWN",
      "id": "940GZZLUSWN",
      "url": "south-wimbledon",
      "name": "South Wimbledon",
      "lines": [
          "northern"
      ],
      "lat": 51.415309,
      "lng": -0.192005,
      "contact": [
          {
              "key": "Address",
              "value": "South Wimbledon Station,London Underground Ltd.,High St,London,SW19 1DE"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3+4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUTAW",
      "id": "940GZZLUTAW",
      "url": "totteridge-&-whetstone",
      "name": "Totteridge & Whetstone",
      "lines": [
          "northern"
      ],
      "lat": 51.630597,
      "lng": -0.17921,
      "contact": [
          {
              "key": "Address",
              "value": "Totteridge & Whetstone Station,London Underground Ltd.,Totteridge Lane,London,N20 9QP"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUTBC",
      "id": "940GZZLUTBC",
      "url": "tooting-bec",
      "name": "Tooting Bec",
      "lines": [
          "northern"
      ],
      "lat": 51.435678,
      "lng": -0.159736,
      "contact": [
          {
              "key": "Address",
              "value": "Tooting Bec Station,London Underground Ltd.,Balham High Rd,London,SW17 9AH"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUTBY",
      "id": "940GZZLUTBY",
      "url": "tooting-broadway",
      "name": "Tooting Broadway",
      "lines": [
          "northern"
      ],
      "lat": 51.42763,
      "lng": -0.168374,
      "contact": [
          {
              "key": "Address",
              "value": "Tooting Broadway Station,London Underground Ltd.,Tooting High St,London,SW17 0SU"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "3"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "6 on platforms, 0 in ticket halls, 1 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUTFP",
      "id": "940GZZLUTFP",
      "url": "tufnell-park",
      "name": "Tufnell Park",
      "lines": [
          "northern"
      ],
      "lat": 51.556822,
      "lng": -0.138433,
      "contact": [
          {
              "key": "Address",
              "value": "Tufnell Park Station,London Underground Ltd.,Fortess Rd,London,N19 5QB"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUWFN",
      "id": "940GZZLUWFN",
      "url": "west-finchley",
      "name": "West Finchley",
      "lines": [
          "northern"
      ],
      "lat": 51.609426,
      "lng": -0.188362,
      "contact": [
          {
              "key": "Address",
              "value": "West Finchley Station,London Underground Ltd.,Nether Street,London,N3 1NT"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUWOP",
      "id": "940GZZLUWOP",
      "url": "woodside-park",
      "name": "Woodside Park",
      "lines": [
          "northern"
      ],
      "lat": 51.618014,
      "lng": -0.18542,
      "contact": [
          {
              "key": "Address",
              "value": "Woodside Park Station,London Underground Ltd.,Woodside Park Rd,London,N12 8SE"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUMGT",
      "id": "940GZZLUMGT",
      "url": "moorgate",
      "name": "Moorgate",
      "lines": [
          "circle",
          "hammersmith-city",
          "metropolitan",
          "northern"
      ],
      "lat": 51.518176,
      "lng": -0.088322,
      "contact": [
          {
              "key": "Address",
              "value": "Moorgate Station,London Underground Ltd.,Moorfields,London,EC2Y 9AE"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "6"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "4"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLULNB",
      "id": "940GZZLULNB",
      "url": "london-bridge",
      "name": "London Bridge",
      "lines": [
          "jubilee",
          "northern"
      ],
      "lat": 51.505721,
      "lng": -0.088873,
      "contact": [
          {
              "key": "Address",
              "value": "London Bridge Underground Station,London Underground Ltd.,21 Duke St Hill,London,SE1 2SW"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "Lifts",
              "value": "3"
          },
          {
              "key": "Escalators",
              "value": "17"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "4"
          },
          {
              "key": "Cash Machines",
              "value": "4"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "Yes"
          }
      ]
  },
  {
      "key": "940GZZLUEMB",
      "id": "940GZZLUEMB",
      "url": "embankment",
      "name": "Embankment",
      "lines": [
          "bakerloo",
          "circle",
          "district",
          "northern"
      ],
      "lat": 51.507058,
      "lng": -0.122666,
      "contact": [
          {
              "key": "Address",
              "value": "Embankment Station,London Underground Ltd.,Villiers St,London,WC2N 6NS"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "10"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "1 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "3"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUTCR",
      "id": "940GZZLUTCR",
      "url": "tottenham-court-road",
      "name": "Tottenham Court Road",
      "lines": [
          "central",
          "northern"
      ],
      "lat": 51.516426,
      "lng": -0.13041,
      "contact": [
          {
              "key": "Address",
              "value": "Tottenham Court Road Station,London Underground Ltd.,Oxford St,London,W1"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "6"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "4"
          }
      ]
  },
  {
      "key": "940GZZLUCHX",
      "id": "940GZZLUCHX",
      "url": "charing-cross",
      "name": "Charing Cross",
      "lines": [
          "bakerloo",
          "northern"
      ],
      "lat": 51.50741,
      "lng": -0.127277,
      "contact": [
          {
              "key": "Address",
              "value": "Charing Cross Underground Station,London Underground Ltd.,Trafalgar Square,London,WC2N 5DR"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "Escalators",
              "value": "10"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "3"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUEAC",
      "id": "940GZZLUEAC",
      "url": "elephant-&-castle",
      "name": "Elephant & Castle",
      "lines": [
          "bakerloo",
          "northern"
      ],
      "lat": 51.494536,
      "lng": -0.100606,
      "contact": [
          {
              "key": "Address",
              "value": "Elephant & Castle Underground Station,London Underground Ltd.,London Rd,London,SE1 6LW"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1+2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "Lifts",
              "value": "5"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUAMS",
      "id": "940GZZLUAMS",
      "url": "amersham",
      "name": "Amersham",
      "lines": [
          "metropolitan"
      ],
      "lat": 51.674126,
      "lng": -0.607714,
      "contact": [
          {
              "key": "Address",
              "value": "Amersham Station,Stn Approach,Amersham,Bucks HP6 5AZ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "9"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Boarding Ramp",
              "value": "yes"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUCAL",
      "id": "940GZZLUCAL",
      "url": "chalfont-&-latimer",
      "name": "Chalfont & Latimer",
      "lines": [
          "metropolitan"
      ],
      "lat": 51.667985,
      "lng": -0.560689,
      "contact": [
          {
              "key": "Address",
              "value": "Chalfont & Latimer Station,London Underground Ltd.,Station Approach,Little Chalfont,Amersham,Bucks,HP7 9PR"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "8"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUCSM",
      "id": "940GZZLUCSM",
      "url": "chesham",
      "name": "Chesham",
      "lines": [
          "metropolitan"
      ],
      "lat": 51.705208,
      "lng": -0.611247,
      "contact": [
          {
              "key": "Address",
              "value": "Chesham Station,London Underground Ltd.,Station Approach,Chesham,Bucks,HP5 1DH"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "9"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUCXY",
      "id": "940GZZLUCXY",
      "url": "croxley",
      "name": "Croxley",
      "lines": [
          "metropolitan"
      ],
      "lat": 51.647044,
      "lng": -0.441718,
      "contact": [
          {
              "key": "Address",
              "value": "Croxley Station,London Underground Ltd.,Watford Road,Rickmansworth,Herts,WD3 3DY"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "7"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUCYD",
      "id": "940GZZLUCYD",
      "url": "chorleywood",
      "name": "Chorleywood",
      "lines": [
          "metropolitan"
      ],
      "lat": 51.654358,
      "lng": -0.518461,
      "contact": [
          {
              "key": "Address",
              "value": "Chorleywood Station,London Underground Ltd.,Station Approach,Chorleywood,Rickmansworth,Herts WD3 5ND"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "7"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUHOH",
      "id": "940GZZLUHOH",
      "url": "harrow-on-the-hill",
      "name": "Harrow-on-the-Hill",
      "lines": [
          "metropolitan"
      ],
      "lat": 51.579195,
      "lng": -0.337225,
      "contact": [
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUMPK",
      "id": "940GZZLUMPK",
      "url": "moor-park",
      "name": "Moor Park",
      "lines": [
          "metropolitan"
      ],
      "lat": 51.629845,
      "lng": -0.432454,
      "contact": [
          {
              "key": "Address",
              "value": "Moor Park Station,London Underground Ltd.,Sandy Lodge Lane,Rickmansworth,Herts,HA6 2JQ."
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "6+7"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUNHA",
      "id": "940GZZLUNHA",
      "url": "north-harrow",
      "name": "North Harrow",
      "lines": [
          "metropolitan"
      ],
      "lat": 51.584872,
      "lng": -0.362408,
      "contact": [
          {
              "key": "Address",
              "value": "North Harrow Station,London Underground Ltd.,Station Rd,North Harrow,Middx,HA2 7SR"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "9 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUNKP",
      "id": "940GZZLUNKP",
      "url": "northwick-park",
      "name": "Northwick Park",
      "lines": [
          "metropolitan"
      ],
      "lat": 51.578481,
      "lng": -0.318056,
      "contact": [
          {
              "key": "Address",
              "value": "Northwick Park Station,London Underground Ltd.,Northwick Avenue,Harrow,Middx,HA3 0AT"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUNOW",
      "id": "940GZZLUNOW",
      "url": "northwood",
      "name": "Northwood",
      "lines": [
          "metropolitan"
      ],
      "lat": 51.611053,
      "lng": -0.423829,
      "contact": [
          {
              "key": "Address",
              "value": "Northwood Station,London Underground Ltd.,Station Approach,Green Lane,Northwood,Middx,HA6 2XL"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "6"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "12 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUNWH",
      "id": "940GZZLUNWH",
      "url": "northwood-hills",
      "name": "Northwood Hills",
      "lines": [
          "metropolitan"
      ],
      "lat": 51.600572,
      "lng": -0.409464,
      "contact": [
          {
              "key": "Address",
              "value": "Northwood Hills Station,London Underground Ltd.,Joel St,Northwood,Middx,HA6 1NZ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "6"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "10 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUPNR",
      "id": "940GZZLUPNR",
      "url": "pinner",
      "name": "Pinner",
      "lines": [
          "metropolitan"
      ],
      "lat": 51.592901,
      "lng": -0.381161,
      "contact": [
          {
              "key": "Address",
              "value": "Pinner Station,London Underground Ltd.,Station Approach,Pinner,Middx,HA5 5LZ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "15 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUPRD",
      "id": "940GZZLUPRD",
      "url": "preston-road",
      "name": "Preston Road",
      "lines": [
          "metropolitan"
      ],
      "lat": 51.571972,
      "lng": -0.295107,
      "contact": [
          {
              "key": "Address",
              "value": "Preston Road Station,London Underground Ltd.,Preston Rd,Wembley,Middx,HA3 0PS"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLURKW",
      "id": "940GZZLURKW",
      "url": "rickmansworth",
      "name": "Rickmansworth",
      "lines": [
          "metropolitan"
      ],
      "lat": 51.640207,
      "lng": -0.473703,
      "contact": [
          {
              "key": "Address",
              "value": "Rickmansworth Station,London Underground Ltd.,Station Approach,Rickmansworth,Herts,WD3 1QY"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "7"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUWAF",
      "id": "940GZZLUWAF",
      "url": "watford",
      "name": "Watford",
      "lines": [
          "metropolitan"
      ],
      "lat": 51.657446,
      "lng": -0.417377,
      "contact": [
          {
              "key": "Address",
              "value": "Watford Station,London Underground Ltd.,Cassiobury Park Avenue,Watford,Herts,WD18 7LE"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "7"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "7 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUWHW",
      "id": "940GZZLUWHW",
      "url": "west-harrow",
      "name": "West Harrow",
      "lines": [
          "metropolitan"
      ],
      "lat": 51.57971,
      "lng": -0.3534,
      "contact": [
          {
              "key": "Address",
              "value": "West Harrow Station,London Underground Ltd.,Vaughan Rd,Harrow,Middx,HA1 4HE"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUFYR",
      "id": "940GZZLUFYR",
      "url": "finchley-road",
      "name": "Finchley Road",
      "lines": [
          "jubilee",
          "metropolitan"
      ],
      "lat": 51.546825,
      "lng": -0.179845,
      "contact": [
          {
              "key": "Address",
              "value": "Finchley Road Underground Station,London Underground Ltd.,Finchley Road,London,NW3 6OP"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female, disabled/baby-changing facilities)"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUWIG",
      "id": "940GZZLUWIG",
      "url": "willesden-green",
      "name": "Willesden Green",
      "lines": [
          "jubilee",
          "metropolitan"
      ],
      "lat": 51.549146,
      "lng": -0.221537,
      "contact": [
          {
              "key": "Address",
              "value": "Willesden Green Station,London Underground Ltd.,Walm Lane,London,NW2 4QT"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2+3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female, disabled/baby-changing facilities)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "3"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUWYP",
      "id": "940GZZLUWYP",
      "url": "wembley-park",
      "name": "Wembley Park",
      "lines": [
          "jubilee",
          "metropolitan"
      ],
      "lat": 51.563198,
      "lng": -0.279262,
      "contact": [
          {
              "key": "Address",
              "value": "Wembley Park Station,London Underground Ltd.,Bridge Road,Wembley,Middlesex,HA9 9AA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female, disabled/baby-changing facilities)"
          },
          {
              "key": "Lifts",
              "value": "5"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUBST",
      "id": "940GZZLUBST",
      "url": "baker-street",
      "name": "Baker Street",
      "lines": [
          "bakerloo",
          "circle",
          "hammersmith-city",
          "jubilee",
          "metropolitan"
      ],
      "lat": 51.522883,
      "lng": -0.15713,
      "contact": [
          {
              "key": "Address",
              "value": "Baker Street Station Marylebone Rd,London,NW1"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Escalators",
              "value": "6"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "5"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUBBN",
      "id": "940GZZLUBBN",
      "url": "barbican",
      "name": "Barbican",
      "lines": [
          "circle",
          "hammersmith-city",
          "metropolitan"
      ],
      "lat": 51.520275,
      "lng": -0.097993,
      "contact": [
          {
              "key": "Address",
              "value": "Barbican Station,London Underground Ltd.,Aldersgate St,London,EC1A 4JA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          }
      ]
  },
  {
      "key": "940GZZLUESQ",
      "id": "940GZZLUESQ",
      "url": "euston-square",
      "name": "Euston Square",
      "lines": [
          "circle",
          "hammersmith-city",
          "metropolitan"
      ],
      "lat": 51.525604,
      "lng": -0.135829,
      "contact": [
          {
              "key": "Address",
              "value": "Euston Square Station,London Underground Ltd.,Euston Rd,London,NW1 2BN"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "1 lift from street level to ticket hall and 1 lift from ticket hall to westbound platform only."
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUFCN",
      "id": "940GZZLUFCN",
      "url": "farringdon",
      "name": "Farringdon",
      "lines": [
          "circle",
          "hammersmith-city",
          "metropolitan"
      ],
      "lat": 51.520252,
      "lng": -0.104913,
      "contact": [
          {
              "key": "Address",
              "value": "Farringdon Station,London Underground Ltd.,Cowcross St,London,EC1M 6BY"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Lifts",
              "value": "4"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUGPS",
      "id": "940GZZLUGPS",
      "url": "great-portland-street",
      "name": "Great Portland Street",
      "lines": [
          "circle",
          "hammersmith-city",
          "metropolitan"
      ],
      "lat": 51.52384,
      "lng": -0.144262,
      "contact": [
          {
              "key": "Address",
              "value": "Great Portland Street Station,London Underground Ltd.,Euston Rd,London,NW1"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLULVT",
      "id": "940GZZLULVT",
      "url": "liverpool-street",
      "name": "Liverpool Street",
      "lines": [
          "central",
          "circle",
          "hammersmith-city",
          "metropolitan"
      ],
      "lat": 51.517372,
      "lng": -0.083182,
      "contact": [
          {
              "key": "Address",
              "value": "Liverpool Street Underground Station Central,London Underground Ltd.,Liverpool Street,London,EC2M 7PP"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "3"
          },
          {
              "key": "Lifts",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "9"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "12 on platforms, 0 in ticket halls, 8 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "5"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "Yes"
          }
      ]
  },
  {
      "key": "940GZZLUALD",
      "id": "940GZZLUALD",
      "url": "aldgate",
      "name": "Aldgate",
      "lines": [
          "circle",
          "metropolitan"
      ],
      "lat": 51.514246,
      "lng": -0.075689,
      "contact": [
          {
              "key": "Address",
              "value": "Aldgate Station,London Underground Ltd.,Aldgate High St,London,EC3N 1AH"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUBMY",
      "id": "940GZZLUBMY",
      "url": "bermondsey",
      "name": "Bermondsey",
      "lines": [
          "jubilee"
      ],
      "lat": 51.49775,
      "lng": -0.063993,
      "contact": [
          {
              "key": "Address",
              "value": "Bermondsey Station,London Underground Ltd.,142 - 154 Jamaica Rd,London,SE16 4RX"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "3"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUCGT",
      "id": "940GZZLUCGT",
      "url": "canning-town",
      "name": "Canning Town",
      "lines": [
          "jubilee"
      ],
      "lat": 51.513584,
      "lng": 0.008322,
      "contact": [
          {
              "key": "Address",
              "value": "Canning Town Station,London Underground Ltd.,Silvertown Way,Canning Town,London,E16 1DQ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2/3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "Lifts",
              "value": "3"
          },
          {
              "key": "Escalators",
              "value": "10"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "6"
          },
          {
              "key": "Cash Machines",
              "value": "3"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUCPK",
      "id": "940GZZLUCPK",
      "url": "canons-park",
      "name": "Canons Park",
      "lines": [
          "jubilee"
      ],
      "lat": 51.607701,
      "lng": -0.294693,
      "contact": [
          {
              "key": "Address",
              "value": "Canons Park Station,London Underground Ltd.,Whitchurch Lane,Edgware,Middx,HA8 6RN"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female, disabled/baby-changing facilities)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUCWR",
      "id": "940GZZLUCWR",
      "url": "canada-water",
      "name": "Canada Water",
      "lines": [
          "jubilee"
      ],
      "lat": 51.497931,
      "lng": -0.049405,
      "contact": [
          {
              "key": "Address",
              "value": "Canada Water Station,London Underground Ltd.,Deal Porter Way,Surrey Quays,London,SE16"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Lifts",
              "value": "4"
          },
          {
              "key": "Escalators",
              "value": "8"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "3"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUCYF",
      "id": "940GZZLUCYF",
      "url": "canary-wharf",
      "name": "Canary Wharf",
      "lines": [
          "jubilee"
      ],
      "lat": 51.503488,
      "lng": -0.018246,
      "contact": [
          {
              "key": "Address",
              "value": "Canary Wharf Station,London Underground Ltd.,Heron Quays Road,Canary Wharf,London,E14 4HJ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Lifts",
              "value": "3"
          },
          {
              "key": "Escalators",
              "value": "20"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "1 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "4"
          },
          {
              "key": "Cash Machines",
              "value": "3"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUDOH",
      "id": "940GZZLUDOH",
      "url": "dollis-hill",
      "name": "Dollis Hill",
      "lines": [
          "jubilee"
      ],
      "lat": 51.551955,
      "lng": -0.239068,
      "contact": [
          {
              "key": "Address",
              "value": "Dollis Hill Station,London Underground Ltd.,Hamilton Rd,London,NW10 5NB"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female, disabled/baby-changing facilities)"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUKBN",
      "id": "940GZZLUKBN",
      "url": "kilburn",
      "name": "Kilburn",
      "lines": [
          "jubilee"
      ],
      "lat": 51.547183,
      "lng": -0.204248,
      "contact": [
          {
              "key": "Address",
              "value": "Kilburn Station,London Underground Ltd.,Shootup Hill,London,NW6 7QL"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female, disabled/baby-changing facilities)"
          },
          {
              "key": "Lifts",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUKBY",
      "id": "940GZZLUKBY",
      "url": "kingsbury",
      "name": "Kingsbury",
      "lines": [
          "jubilee"
      ],
      "lat": 51.584845,
      "lng": -0.27879,
      "contact": [
          {
              "key": "Address",
              "value": "Kingsbury Station,London Underground Ltd.,Kingsbury Rd,London,NW9 9EG"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female, disabled/baby-changing facilities)"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUNDN",
      "id": "940GZZLUNDN",
      "url": "neasden",
      "name": "Neasden",
      "lines": [
          "jubilee"
      ],
      "lat": 51.553986,
      "lng": -0.249837,
      "contact": [
          {
              "key": "Address",
              "value": "Neasden Station,London Underground Ltd.,Neasden Lane,London,NW10 1PH"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female, disabled/baby-changing facilities)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUNGW",
      "id": "940GZZLUNGW",
      "url": "north-greenwich",
      "name": "North Greenwich",
      "lines": [
          "jubilee"
      ],
      "lat": 51.50047,
      "lng": 0.004287,
      "contact": [
          {
              "key": "Address",
              "value": "North Greenwich Station,London Underground Ltd.,5 Millenium Way,London,SE10 0PH"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2+3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Lifts",
              "value": "4"
          },
          {
              "key": "Escalators",
              "value": "9"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "6 on platforms, 4 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "3"
          },
          {
              "key": "Cash Machines",
              "value": "3"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUQBY",
      "id": "940GZZLUQBY",
      "url": "queensbury",
      "name": "Queensbury",
      "lines": [
          "jubilee"
      ],
      "lat": 51.594188,
      "lng": -0.286219,
      "contact": [
          {
              "key": "Address",
              "value": "Queensbury Station,London Underground Ltd.,Cumberland Rd,Harrow,Middx,HA8 5NP"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female, disabled/baby-changing facilities)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUSJW",
      "id": "940GZZLUSJW",
      "url": "st.-johns-wood",
      "name": "St. John's Wood",
      "lines": [
          "jubilee"
      ],
      "lat": 51.534521,
      "lng": -0.173948,
      "contact": [
          {
              "key": "Address",
              "value": "St. John's Wood,London Underground Ltd.,Wellington Road,London,NW8 6DN"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUSTM",
      "id": "940GZZLUSTM",
      "url": "stanmore",
      "name": "Stanmore",
      "lines": [
          "jubilee"
      ],
      "lat": 51.619839,
      "lng": -0.303266,
      "contact": [
          {
              "key": "Address",
              "value": "Stanmore Station,London Underground Ltd.,London Rd,Stanmore,Middx,HA7 4PD"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female, disabled/baby-changing facilities)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          },
          {
              "key": "ASDA Click and Collect",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUSWC",
      "id": "940GZZLUSWC",
      "url": "swiss-cottage",
      "name": "Swiss Cottage",
      "lines": [
          "jubilee"
      ],
      "lat": 51.543681,
      "lng": -0.174894,
      "contact": [
          {
              "key": "Address",
              "value": "Swiss Cottage Station,London Underground Ltd.,Finchley Rd,London,NW3 6HY"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUSWK",
      "id": "940GZZLUSWK",
      "url": "southwark",
      "name": "Southwark",
      "lines": [
          "jubilee"
      ],
      "lat": 51.50427,
      "lng": -0.105331,
      "contact": [
          {
              "key": "Address",
              "value": "Southwark Station,London Underground Ltd.,68 - 70 Blackfriars Rd,London,SE1 8JZ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "Escalators",
              "value": "8"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUWHP",
      "id": "940GZZLUWHP",
      "url": "west-hampstead",
      "name": "West Hampstead",
      "lines": [
          "jubilee"
      ],
      "lat": 51.546638,
      "lng": -0.191059,
      "contact": [
          {
              "key": "Address",
              "value": "West Hampstead Underground Station,London Underground Ltd.,West End Lane,London,NW6 2LS"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female, disabled/baby-changing facilities)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUWHM",
      "id": "940GZZLUWHM",
      "url": "west-ham",
      "name": "West Ham",
      "lines": [
          "district",
          "hammersmith-city",
          "jubilee"
      ],
      "lat": 51.528136,
      "lng": 0.005055,
      "contact": [
          {
              "key": "Address",
              "value": "West Ham Underground Station,London Underground Ltd.,Manor Rd,London,E15 3BN"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2/3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "5"
          },
          {
              "key": "Escalators",
              "value": "6"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          }
      ]
  },
  {
      "key": "940GZZLUWSM",
      "id": "940GZZLUWSM",
      "url": "westminster",
      "name": "Westminster",
      "lines": [
          "circle",
          "district",
          "jubilee"
      ],
      "lat": 51.50132,
      "lng": -0.124861,
      "contact": [
          {
              "key": "Address",
              "value": "Westminster Station,London Underground Ltd.,Bridge St,London,SW1A 2JR"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "5"
          },
          {
              "key": "Escalators",
              "value": "17"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "4"
          },
          {
              "key": "Cash Machines",
              "value": "4"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUBND",
      "id": "940GZZLUBND",
      "url": "bond-street",
      "name": "Bond Street",
      "lines": [
          "central",
          "jubilee"
      ],
      "lat": 51.514304,
      "lng": -0.149723,
      "contact": [
          {
              "key": "Address",
              "value": "Bond Street Station,London Underground Ltd.,Oxford St,London,W1R 1FE"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "8"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUSTD",
      "id": "940GZZLUSTD",
      "url": "stratford",
      "name": "Stratford",
      "lines": [
          "central",
          "jubilee"
      ],
      "lat": 51.541806,
      "lng": -0.003458,
      "contact": [
          {
              "key": "Address",
              "value": "Stratford Station BR Station St,London,E15 1DE"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2/3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Lifts",
              "value": "5"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "8"
          },
          {
              "key": "Cash Machines",
              "value": "4"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUADE",
      "id": "940GZZLUADE",
      "url": "aldgate-east",
      "name": "Aldgate East",
      "lines": [
          "district",
          "hammersmith-city"
      ],
      "lat": 51.515037,
      "lng": -0.072384,
      "contact": [
          {
              "key": "Address",
              "value": "Aldgate East Station,London Underground Ltd.,Whitechapel High St,London,E1 7PT"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "3"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUBBB",
      "id": "940GZZLUBBB",
      "url": "bromley-by-bow",
      "name": "Bromley-by-Bow",
      "lines": [
          "district",
          "hammersmith-city"
      ],
      "lat": 51.524839,
      "lng": -0.011538,
      "contact": [
          {
              "key": "Address",
              "value": "Bromley-By-Bow,London Underground Ltd.,Blackwell Tunnel Northern Approach,London,E3 3JJ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2+3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          }
      ]
  },
  {
      "key": "940GZZLUBKG",
      "id": "940GZZLUBKG",
      "url": "barking",
      "name": "Barking",
      "lines": [
          "district",
          "hammersmith-city"
      ],
      "lat": 51.539321,
      "lng": 0.081053,
      "contact": [
          {
              "key": "Address",
              "value": "Barking Station BR Station Parade,Longbridge Rd,Barking,Essex,IG11 8TU"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Lifts",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "3 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Photo Booths",
              "value": "2"
          }
      ]
  },
  {
      "key": "940GZZLUBWR",
      "id": "940GZZLUBWR",
      "url": "bow-road",
      "name": "Bow Road",
      "lines": [
          "district",
          "hammersmith-city"
      ],
      "lat": 51.52694,
      "lng": -0.025128,
      "contact": [
          {
              "key": "Address",
              "value": "Bow Road Station,London Underground Ltd.,Bow Road,London,E3 4DH"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUEHM",
      "id": "940GZZLUEHM",
      "url": "east-ham",
      "name": "East Ham",
      "lines": [
          "district",
          "hammersmith-city"
      ],
      "lat": 51.538948,
      "lng": 0.051186,
      "contact": [
          {
              "key": "Address",
              "value": "East Ham Station,London Underground Ltd.,High Street North,London,E6 2JA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3+4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "Local authority facility nearby"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "3"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUPLW",
      "id": "940GZZLUPLW",
      "url": "plaistow",
      "name": "Plaistow",
      "lines": [
          "district",
          "hammersmith-city"
      ],
      "lat": 51.531341,
      "lng": 0.017451,
      "contact": [
          {
              "key": "Address",
              "value": "Plaistow Station,London Underground Ltd.,Plaistow Rd,London,E15"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          }
      ]
  },
  {
      "key": "940GZZLUSGN",
      "id": "940GZZLUSGN",
      "url": "stepney-green",
      "name": "Stepney Green",
      "lines": [
          "district",
          "hammersmith-city"
      ],
      "lat": 51.521858,
      "lng": -0.046596,
      "contact": [
          {
              "key": "Address",
              "value": "Stepney Green Station,London Underground Ltd.,Mile End Rd,London,E1 4AQ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUUPK",
      "id": "940GZZLUUPK",
      "url": "upton-park",
      "name": "Upton Park",
      "lines": [
          "district",
          "hammersmith-city"
      ],
      "lat": 51.53534,
      "lng": 0.035263,
      "contact": [
          {
              "key": "Address",
              "value": "Upton Park Station,London Underground Ltd.,Green St,London,E13 9AP"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          }
      ]
  },
  {
      "key": "940GZZLUWPL",
      "id": "940GZZLUWPL",
      "url": "whitechapel",
      "name": "Whitechapel",
      "lines": [
          "district",
          "hammersmith-city"
      ],
      "lat": 51.519518,
      "lng": -0.059971,
      "contact": [
          {
              "key": "Address",
              "value": "Whitechapel Station,London Underground Ltd.,277 Whitechapel Rd,London,E1 1BY"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          }
      ]
  },
  {
      "key": "940GZZLUERC",
      "id": "940GZZLUERC",
      "url": "edgware-road-",
      "name": "Edgware Road ",
      "lines": [
          "circle",
          "district",
          "hammersmith-city"
      ],
      "lat": 51.519858,
      "lng": -0.167832,
      "contact": [
          {
              "key": "Address",
              "value": "Edgware Road Circle,London Underground Ltd.,Chapel Street,London,NW1 5DH"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "3"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUMED",
      "id": "940GZZLUMED",
      "url": "mile-end",
      "name": "Mile End",
      "lines": [
          "central",
          "district",
          "hammersmith-city"
      ],
      "lat": 51.525122,
      "lng": -0.03364,
      "contact": [
          {
              "key": "Address",
              "value": "Mile End Station,London Underground Ltd.,Mile End Rd,London,E3 4DH"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUGHK",
      "id": "940GZZLUGHK",
      "url": "goldhawk-road",
      "name": "Goldhawk Road",
      "lines": [
          "circle",
          "hammersmith-city"
      ],
      "lat": 51.502005,
      "lng": -0.226715,
      "contact": [
          {
              "key": "Address",
              "value": "Goldhawk Road Station,London Underground Ltd.,Goldhawk Rd,London,W12 8EG"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "4 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUHSC",
      "id": "940GZZLUHSC",
      "url": "hammersmith-",
      "name": "Hammersmith ",
      "lines": [
          "circle",
          "hammersmith-city"
      ],
      "lat": 51.493535,
      "lng": -0.225013,
      "contact": [
          {
              "key": "Address",
              "value": "Hammersmith (H & C),London Underground Ltd.,Beadon Road,London,W6 7AA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLULAD",
      "id": "940GZZLULAD",
      "url": "ladbroke-grove",
      "name": "Ladbroke Grove",
      "lines": [
          "circle",
          "hammersmith-city"
      ],
      "lat": 51.517449,
      "lng": -0.210391,
      "contact": [
          {
              "key": "Address",
              "value": "Ladbroke Grove Station,London Underground Ltd.,Ladbroke Grove,London,W10 6HJ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 1 in ticket halls, 4 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLULRD",
      "id": "940GZZLULRD",
      "url": "latimer-road",
      "name": "Latimer Road",
      "lines": [
          "circle",
          "hammersmith-city"
      ],
      "lat": 51.513389,
      "lng": -0.217799,
      "contact": [
          {
              "key": "Address",
              "value": "Latimer Road Station,London Underground Ltd.,Bramley Rd,London,W10 6SZ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "4 on platforms, 0 in ticket halls, 1 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUPAH",
      "id": "940GZZLUPAH",
      "url": "paddington-",
      "name": "Paddington ",
      "lines": [
          "circle",
          "hammersmith-city"
      ],
      "lat": 51.518187,
      "lng": -0.178306,
      "contact": [
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLURYO",
      "id": "940GZZLURYO",
      "url": "royal-oak",
      "name": "Royal Oak",
      "lines": [
          "circle",
          "hammersmith-city"
      ],
      "lat": 51.519113,
      "lng": -0.188748,
      "contact": [
          {
              "key": "Address",
              "value": "Royal Oak Station,London Underground Ltd.,Lord Hills Bridge,London,W2 6ET"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "4 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUSBM",
      "id": "940GZZLUSBM",
      "url": "shepherds-bush-market",
      "name": "Shepherd's Bush Market",
      "lines": [
          "circle",
          "hammersmith-city"
      ],
      "lat": 51.505579,
      "lng": -0.226375,
      "contact": [
          {
              "key": "Address",
              "value": "Shepherd's Bush Market,London Underground Ltd.,Uxbridge Road,London,W12 7JD"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUWLA",
      "id": "940GZZLUWLA",
      "url": "wood-lane",
      "name": "Wood Lane",
      "lines": [
          "circle",
          "hammersmith-city"
      ],
      "lat": 51.509669,
      "lng": -0.22453,
      "contact": [
          {
              "key": "Address",
              "value": "Wood Lane Station,London Underground Ltd.,Wood Lane,London,"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUWSP",
      "id": "940GZZLUWSP",
      "url": "westbourne-park",
      "name": "Westbourne Park",
      "lines": [
          "circle",
          "hammersmith-city"
      ],
      "lat": 51.52111,
      "lng": -0.201065,
      "contact": [
          {
              "key": "Address",
              "value": "Westbourne Park Station,London Underground Ltd.,Western Rd,London,W11 1AB"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "4 on platforms, 0 in ticket halls, 1 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUBEC",
      "id": "940GZZLUBEC",
      "url": "becontree",
      "name": "Becontree",
      "lines": [
          "district"
      ],
      "lat": 51.540331,
      "lng": 0.127016,
      "contact": [
          {
              "key": "Address",
              "value": "Becontree Station,London Underground Ltd.,Gale St,Dagenham,Essex,RM9 4TP"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes M&F (open between 0500-1500)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUCWP",
      "id": "940GZZLUCWP",
      "url": "chiswick-park",
      "name": "Chiswick Park",
      "lines": [
          "district"
      ],
      "lat": 51.494627,
      "lng": -0.267972,
      "contact": [
          {
              "key": "Address",
              "value": "Chiswick Park Station,London Underground Ltd.,Bollo Lane,London,W4 5NE"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUDGE",
      "id": "940GZZLUDGE",
      "url": "dagenham-east",
      "name": "Dagenham East",
      "lines": [
          "district"
      ],
      "lat": 51.544096,
      "lng": 0.166017,
      "contact": [
          {
              "key": "Address",
              "value": "Dagenham East Station,London Underground Ltd.,North Rainham Rd,Dagenham,Essex,RM10 8AA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes M&F (open between 0500-1500)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUDGY",
      "id": "940GZZLUDGY",
      "url": "dagenham-heathway",
      "name": "Dagenham Heathway",
      "lines": [
          "district"
      ],
      "lat": 51.541639,
      "lng": 0.147527,
      "contact": [
          {
              "key": "Address",
              "value": "Dagenham Heathway Station,London Underground Ltd.,Heathway,Dagenham,Essex,RM9 5AN"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes M&F (open between 0500-1500)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUEPK",
      "id": "940GZZLUEPK",
      "url": "elm-park",
      "name": "Elm Park",
      "lines": [
          "district"
      ],
      "lat": 51.549775,
      "lng": 0.19864,
      "contact": [
          {
              "key": "Address",
              "value": "Elm Park Station,London Underground Ltd.,The Broadway,Hornchurch,Essex,RM12 4RW"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "6"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "Yes"
          }
      ]
  },
  {
      "key": "940GZZLUEPY",
      "id": "940GZZLUEPY",
      "url": "east-putney",
      "name": "East Putney",
      "lines": [
          "district"
      ],
      "lat": 51.459205,
      "lng": -0.211,
      "contact": [
          {
              "key": "Address",
              "value": "East Putney Station,Upper Richmond Rd,London,SW15"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2+3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUFBY",
      "id": "940GZZLUFBY",
      "url": "fulham-broadway",
      "name": "Fulham Broadway",
      "lines": [
          "district"
      ],
      "lat": 51.480081,
      "lng": -0.195422,
      "contact": [
          {
              "key": "Address",
              "value": "Fulham Broadway Station,London Underground Ltd.,Fulham Broadway,London,SW6 1BY"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUGBY",
      "id": "940GZZLUGBY",
      "url": "gunnersbury",
      "name": "Gunnersbury",
      "lines": [
          "district"
      ],
      "lat": 51.491803,
      "lng": -0.275267,
      "contact": [
          {
              "key": "Address",
              "value": "Gunnersbury,London Overground Ltd,Chiswick High Road,LONDON,W4 4AN"
          },
          {
              "key": "PhoneNo",
              "value": "0845 601 4867"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Help Points",
              "value": "1 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUHCH",
      "id": "940GZZLUHCH",
      "url": "hornchurch",
      "name": "Hornchurch",
      "lines": [
          "district"
      ],
      "lat": 51.554093,
      "lng": 0.219116,
      "contact": [
          {
              "key": "Address",
              "value": "Hornchurch Station,London Underground Ltd.,Station Lane,Hornchurch,Essex,RM12 6LS"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "6"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes M&F (open between 0500-1500)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUKOY",
      "id": "940GZZLUKOY",
      "url": "kensington-",
      "name": "Kensington ",
      "lines": [
          "district"
      ],
      "lat": 51.497624,
      "lng": -0.210015,
      "contact": [
          {
              "key": "Address",
              "value": "Kensington Olympia,Kensington Olympia Station,Olympia Way,LONDON,W14 0NE"
          },
          {
              "key": "PhoneNo",
              "value": "0845 601 4867"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUKWG",
      "id": "940GZZLUKWG",
      "url": "kew-gardens",
      "name": "Kew Gardens",
      "lines": [
          "district"
      ],
      "lat": 51.477058,
      "lng": -0.285241,
      "contact": [
          {
              "key": "Address",
              "value": "Kew Gardens Station,London Overground Ltd.,Station Approach,RICHMOND,TW9 3BZ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 601 4867"
          },
          {
              "key": "Zone",
              "value": "3+4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUPSG",
      "id": "940GZZLUPSG",
      "url": "parsons-green",
      "name": "Parsons Green",
      "lines": [
          "district"
      ],
      "lat": 51.475277,
      "lng": -0.20117,
      "contact": [
          {
              "key": "Address",
              "value": "Parsons Green Station,London Underground Ltd.,Parsons Green Lane,London,SW6 4HS"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUPYB",
      "id": "940GZZLUPYB",
      "url": "putney-bridge",
      "name": "Putney Bridge",
      "lines": [
          "district"
      ],
      "lat": 51.468262,
      "lng": -0.208731,
      "contact": [
          {
              "key": "Address",
              "value": "Putney Bridge Station,London Underground Ltd.,Station Approach,London,SW6 3UH"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLURMD",
      "id": "940GZZLURMD",
      "url": "richmond",
      "name": "Richmond",
      "lines": [
          "district"
      ],
      "lat": 51.463237,
      "lng": -0.301336,
      "contact": [
          {
              "key": "Address",
              "value": "Richmond,London Underground Ltd.,The Quadrant,Richmond,TW9 1DN"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLURVP",
      "id": "940GZZLURVP",
      "url": "ravenscourt-park",
      "name": "Ravenscourt Park",
      "lines": [
          "district"
      ],
      "lat": 51.494122,
      "lng": -0.235881,
      "contact": [
          {
              "key": "Address",
              "value": "Ravenscourt Park Station,London Underground Ltd.,Ravenscourt Rd,London,W6 0UG"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUSFB",
      "id": "940GZZLUSFB",
      "url": "stamford-brook",
      "name": "Stamford Brook",
      "lines": [
          "district"
      ],
      "lat": 51.494917,
      "lng": -0.245704,
      "contact": [
          {
              "key": "Address",
              "value": "Stamford Brook Station,London Underground Ltd.,Goldhawk Rd,London,W6"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUSFS",
      "id": "940GZZLUSFS",
      "url": "southfields",
      "name": "Southfields",
      "lines": [
          "district"
      ],
      "lat": 51.445073,
      "lng": -0.206602,
      "contact": [
          {
              "key": "Address",
              "value": "Southfields Station,Wimbledon Park Rd,London,SW18"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUUPB",
      "id": "940GZZLUUPB",
      "url": "upminster-bridge",
      "name": "Upminster Bridge",
      "lines": [
          "district"
      ],
      "lat": 51.55856,
      "lng": 0.235809,
      "contact": [
          {
              "key": "Address",
              "value": "Upminster Bridge Station,London Underground Ltd.,Upminster Rd,Hornchurch,Essex,RM12 6PL"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "6"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes M&F (open between 0500-1500)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUUPM",
      "id": "940GZZLUUPM",
      "url": "upminster",
      "name": "Upminster",
      "lines": [
          "district"
      ],
      "lat": 51.559063,
      "lng": 0.250882,
      "contact": [
          {
              "key": "Address",
              "value": "Upminster Station NR Station Rd,Upminster,Essex,RM14 2TD"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "6"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Lifts",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "0 in ticket halls, 0 on platforms"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUUPY",
      "id": "940GZZLUUPY",
      "url": "upney",
      "name": "Upney",
      "lines": [
          "district"
      ],
      "lat": 51.538372,
      "lng": 0.10153,
      "contact": [
          {
              "key": "Address",
              "value": "Upney Station,London Underground Ltd.,Upney Lane,Barking,Essex,IG11 9LS"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUWBN",
      "id": "940GZZLUWBN",
      "url": "west-brompton",
      "name": "West Brompton",
      "lines": [
          "district"
      ],
      "lat": 51.487268,
      "lng": -0.195599,
      "contact": [
          {
              "key": "Address",
              "value": "West Brompton Station,London Underground Ltd.,Old Brompton Rd,London,SW5 9JX"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUWIM",
      "id": "940GZZLUWIM",
      "url": "wimbledon",
      "name": "Wimbledon",
      "lines": [
          "district"
      ],
      "lat": 51.421207,
      "lng": -0.206573,
      "contact": [
          {
              "key": "Address",
              "value": "Wimbledon,London Underground Ltd.,The Broadway,London,SW19 7NL"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "Lifts",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUWIP",
      "id": "940GZZLUWIP",
      "url": "wimbledon-park",
      "name": "Wimbledon Park",
      "lines": [
          "district"
      ],
      "lat": 51.434573,
      "lng": -0.199719,
      "contact": [
          {
              "key": "Address",
              "value": "Wimbledon Park Station,Arthur Rd,London,SW19 "
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUWKN",
      "id": "940GZZLUWKN",
      "url": "west-kensington",
      "name": "West Kensington",
      "lines": [
          "district"
      ],
      "lat": 51.490459,
      "lng": -0.206636,
      "contact": [
          {
              "key": "Address",
              "value": "West Kensington Station,London Underground Ltd.,North End Rd,London,W14 9NL"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "3"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUBKF",
      "id": "940GZZLUBKF",
      "url": "blackfriars",
      "name": "Blackfriars",
      "lines": [
          "circle",
          "district"
      ],
      "lat": 51.511581,
      "lng": -0.103659,
      "contact": [
          {
              "key": "Address",
              "value": "Blackfriars Station,London Underground Ltd.,Blackfriars Road,London,EC4R 2BB"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "Escalators",
              "value": "4"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "4 on platforms, 3 in ticket halls, 2 elsewhere"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUBWT",
      "id": "940GZZLUBWT",
      "url": "bayswater",
      "name": "Bayswater",
      "lines": [
          "circle",
          "district"
      ],
      "lat": 51.512284,
      "lng": -0.187938,
      "contact": [
          {
              "key": "Address",
              "value": "Bayswater Station,London Underground Ltd.,Queensway,London,W2 4RH"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUCST",
      "id": "940GZZLUCST",
      "url": "cannon-street",
      "name": "Cannon Street",
      "lines": [
          "circle",
          "district"
      ],
      "lat": 51.51151,
      "lng": -0.090432,
      "contact": [
          {
              "key": "Address",
              "value": "Cannon Street Underground Station,London Underground Ltd.,Cannon St,London,EC4N 6AP"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUHSK",
      "id": "940GZZLUHSK",
      "url": "high-street-kensington",
      "name": "High Street Kensington",
      "lines": [
          "circle",
          "district"
      ],
      "lat": 51.501055,
      "lng": -0.192792,
      "contact": [
          {
              "key": "Address",
              "value": "High Street Kensington Station,London Underground Ltd.,Kensington High St,London,W8 5SA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "4"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUMMT",
      "id": "940GZZLUMMT",
      "url": "monument",
      "name": "Monument",
      "lines": [
          "circle",
          "district"
      ],
      "lat": 51.5107,
      "lng": -0.085969,
      "contact": [
          {
              "key": "Address",
              "value": "Monument Station,London Underground Ltd.,King William St,London,EC4R 9AA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUMSH",
      "id": "940GZZLUMSH",
      "url": "mansion-house",
      "name": "Mansion House",
      "lines": [
          "circle",
          "district"
      ],
      "lat": 51.512117,
      "lng": -0.094009,
      "contact": [
          {
              "key": "Address",
              "value": "Mansion House Station,London Underground Ltd.,38 Cannon St,London,EC4N 6JD"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "5 on platforms, 0 in ticket halls, 2 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUSJP",
      "id": "940GZZLUSJP",
      "url": "st.-jamess-park",
      "name": "St. James's Park",
      "lines": [
          "circle",
          "district"
      ],
      "lat": 51.499544,
      "lng": -0.133608,
      "contact": [
          {
              "key": "Address",
              "value": "St. James's Park,London Underground Ltd.,Petty France,London,SW1H 0BD"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "3"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUSSQ",
      "id": "940GZZLUSSQ",
      "url": "sloane-square",
      "name": "Sloane Square",
      "lines": [
          "circle",
          "district"
      ],
      "lat": 51.49227,
      "lng": -0.156377,
      "contact": [
          {
              "key": "Address",
              "value": "Sloane Square Station,London Underground Ltd.,Sloane Square,London,SW1W 8BB"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          }
      ]
  },
  {
      "key": "940GZZLUTMP",
      "id": "940GZZLUTMP",
      "url": "temple",
      "name": "Temple",
      "lines": [
          "circle",
          "district"
      ],
      "lat": 51.511006,
      "lng": -0.11426,
      "contact": [
          {
              "key": "Address",
              "value": "Temple Station,London Underground Ltd.,Victoria Embankment,London,WC2R 2PH"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUTWH",
      "id": "940GZZLUTWH",
      "url": "tower-hill",
      "name": "Tower Hill",
      "lines": [
          "circle",
          "district"
      ],
      "lat": 51.509971,
      "lng": -0.076546,
      "contact": [
          {
              "key": "Address",
              "value": "Tower Hill Station,London Underground Ltd.,Trinity Square,London,EC3N 4DJ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUNHG",
      "id": "940GZZLUNHG",
      "url": "notting-hill-gate",
      "name": "Notting Hill Gate",
      "lines": [
          "central",
          "circle",
          "district"
      ],
      "lat": 51.509128,
      "lng": -0.196104,
      "contact": [
          {
              "key": "Address",
              "value": "Notting Hill Gate Station,London Underground Ltd.,Notting Hill Gate,London,W11 3HT"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1+2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "6"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "3"
          }
      ]
  },
  {
      "key": "940GZZLUPAC",
      "id": "940GZZLUPAC",
      "url": "paddington",
      "name": "Paddington",
      "lines": [
          "bakerloo",
          "circle",
          "district"
      ],
      "lat": 51.516581,
      "lng": -0.175689,
      "contact": [
          {
              "key": "Address",
              "value": "Paddington Underground Stations,London Underground Ltd.,Praed St,London,W2"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "3"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "Escalators",
              "value": "4"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "4 on platforms, 0 in ticket halls, 1 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUEBY",
      "id": "940GZZLUEBY",
      "url": "ealing-broadway",
      "name": "Ealing Broadway",
      "lines": [
          "central",
          "district"
      ],
      "lat": 51.515017,
      "lng": -0.301457,
      "contact": [
          {
              "key": "Address",
              "value": "Ealing Broadway Station,The Broadway,London,W5 2NU"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUBKE",
      "id": "940GZZLUBKE",
      "url": "barkingside",
      "name": "Barkingside",
      "lines": [
          "central"
      ],
      "lat": 51.585689,
      "lng": 0.088585,
      "contact": [
          {
              "key": "Address",
              "value": "Barkingside Station,London Underground Ltd.,Stn Rd,Barkingside,Milford,Essex,IG6 1NB"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUBKH",
      "id": "940GZZLUBKH",
      "url": "buckhurst-hill",
      "name": "Buckhurst Hill",
      "lines": [
          "central"
      ],
      "lat": 51.626605,
      "lng": 0.046757,
      "contact": [
          {
              "key": "Address",
              "value": "Buckhurst Hill Station,London Underground Ltd.,Victoria Rd,Buckhurst Hill,Essex,IG9 5ET"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUBLG",
      "id": "940GZZLUBLG",
      "url": "bethnal-green",
      "name": "Bethnal Green",
      "lines": [
          "central"
      ],
      "lat": 51.527222,
      "lng": -0.055506,
      "contact": [
          {
              "key": "Address",
              "value": "Bethnal Green Underground Station,London Underground Ltd.,Cambridge Heath Rd,London,E2 0ET"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "3"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUCHL",
      "id": "940GZZLUCHL",
      "url": "chancery-lane",
      "name": "Chancery Lane",
      "lines": [
          "central"
      ],
      "lat": 51.518247,
      "lng": -0.111583,
      "contact": [
          {
              "key": "Address",
              "value": "Chancery Lane Station,London Underground Ltd.,High Holborn,London,WC1V 6DR"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "5"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUCWL",
      "id": "940GZZLUCWL",
      "url": "chigwell",
      "name": "Chigwell",
      "lines": [
          "central"
      ],
      "lat": 51.617916,
      "lng": 0.075041,
      "contact": [
          {
              "key": "Address",
              "value": "Chigwell Station,London Underground Ltd.,Station Rd,Chigwell,Essex,IG7 6NT"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (female only)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUDBN",
      "id": "940GZZLUDBN",
      "url": "debden",
      "name": "Debden",
      "lines": [
          "central"
      ],
      "lat": 51.645386,
      "lng": 0.083782,
      "contact": [
          {
              "key": "Address",
              "value": "Debden Station,London Underground Ltd.,Chigwell Lane,Loughton,Essex,IG10 3TG"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "6"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "Yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUEAN",
      "id": "940GZZLUEAN",
      "url": "east-acton",
      "name": "East Acton",
      "lines": [
          "central"
      ],
      "lat": 51.516612,
      "lng": -0.247248,
      "contact": [
          {
              "key": "Address",
              "value": "East Acton Station,London Underground Ltd.,Erconwald St,London,W12 0BP"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUEPG",
      "id": "940GZZLUEPG",
      "url": "epping",
      "name": "Epping",
      "lines": [
          "central"
      ],
      "lat": 51.69368,
      "lng": 0.113767,
      "contact": [
          {
              "key": "Address",
              "value": "Epping Station,London Underground Ltd.,Station Rd,Epping,Essex,CM16 4HW"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "6"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male,female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "9 on platforms, 1 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          },
          {
              "key": "ASDA Click and Collect",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUFLP",
      "id": "940GZZLUFLP",
      "url": "fairlop",
      "name": "Fairlop",
      "lines": [
          "central"
      ],
      "lat": 51.595618,
      "lng": 0.091004,
      "contact": [
          {
              "key": "Address",
              "value": "Fairlop Station,London Underground Ltd.,Forest Rd,Ilford,Essex,IG6 3HD"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUGFD",
      "id": "940GZZLUGFD",
      "url": "greenford",
      "name": "Greenford",
      "lines": [
          "central"
      ],
      "lat": 51.542424,
      "lng": -0.34605,
      "contact": [
          {
              "key": "Address",
              "value": "Greenford Station,London Underground Ltd.,Oldfield Lane,Greenford,Middx,UB6 8PX"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUGGH",
      "id": "940GZZLUGGH",
      "url": "grange-hill",
      "name": "Grange Hill",
      "lines": [
          "central"
      ],
      "lat": 51.613378,
      "lng": 0.092066,
      "contact": [
          {
              "key": "Address",
              "value": "Grange Hill Station,London Underground Ltd.,Manor Rd,Chigwell,Essex IG7 5QB"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUGTH",
      "id": "940GZZLUGTH",
      "url": "gants-hill",
      "name": "Gants Hill",
      "lines": [
          "central"
      ],
      "lat": 51.576544,
      "lng": 0.066185,
      "contact": [
          {
              "key": "Address",
              "value": "Gants Hill Station,London Underground Ltd.,Cranbrook Rd,Ilford,Essex,IG2 6UD"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "3"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUHGR",
      "id": "940GZZLUHGR",
      "url": "hanger-lane",
      "name": "Hanger Lane",
      "lines": [
          "central"
      ],
      "lat": 51.530177,
      "lng": -0.292704,
      "contact": [
          {
              "key": "Address",
              "value": "Hanger Lane Station,London Underground Ltd.,Hanger Lane,London,W5 1DL"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUHLT",
      "id": "940GZZLUHLT",
      "url": "hainault",
      "name": "Hainault",
      "lines": [
          "central"
      ],
      "lat": 51.603659,
      "lng": 0.093482,
      "contact": [
          {
              "key": "Address",
              "value": "Hainault Station,London Underground Ltd.,New North Rd,Ilford,Essex,IG6 3BD"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUHPK",
      "id": "940GZZLUHPK",
      "url": "holland-park",
      "name": "Holland Park",
      "lines": [
          "central"
      ],
      "lat": 51.507143,
      "lng": -0.205679,
      "contact": [
          {
              "key": "Address",
              "value": "Holland Park Station,London Underground Ltd.,Holland Park Avenue,London,W11 3RB"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLULGN",
      "id": "940GZZLULGN",
      "url": "loughton",
      "name": "Loughton",
      "lines": [
          "central"
      ],
      "lat": 51.641443,
      "lng": 0.055476,
      "contact": [
          {
              "key": "Address",
              "value": "Loughton Station,London Underground Ltd.,Old Station Rd,Roding Rd,Loughton,Essex,IG10 4PD"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "6"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLULGT",
      "id": "940GZZLULGT",
      "url": "lancaster-gate",
      "name": "Lancaster Gate",
      "lines": [
          "central"
      ],
      "lat": 51.511723,
      "lng": -0.175494,
      "contact": [
          {
              "key": "Address",
              "value": "Lancaster Gate Station,London Underground Ltd.,Bayswater Rd,London,W2"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLULYN",
      "id": "940GZZLULYN",
      "url": "leyton",
      "name": "Leyton",
      "lines": [
          "central"
      ],
      "lat": 51.556589,
      "lng": -0.005523,
      "contact": [
          {
              "key": "Address",
              "value": "Leyton Underground Station,London Underground Ltd.,High Rd,Leyton,London,E10 5PS"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLULYS",
      "id": "940GZZLULYS",
      "url": "leytonstone",
      "name": "Leytonstone",
      "lines": [
          "central"
      ],
      "lat": 51.568324,
      "lng": 0.008194,
      "contact": [
          {
              "key": "Address",
              "value": "Leytonstone Station,London Underground Ltd.,Church Lane,London,E11 1HE"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3+4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUMBA",
      "id": "940GZZLUMBA",
      "url": "marble-arch",
      "name": "Marble Arch",
      "lines": [
          "central"
      ],
      "lat": 51.513424,
      "lng": -0.158953,
      "contact": [
          {
              "key": "Address",
              "value": "Marble Arch Station,London Underground Ltd.,Oxford St,London,W1C 1CX"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUNAN",
      "id": "940GZZLUNAN",
      "url": "north-acton",
      "name": "North Acton",
      "lines": [
          "central"
      ],
      "lat": 51.523524,
      "lng": -0.259755,
      "contact": [
          {
              "key": "Address",
              "value": "North Acton Station,London Underground Ltd.,Victoria Rd,London,W3 6UP"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2+3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUNBP",
      "id": "940GZZLUNBP",
      "url": "newbury-park",
      "name": "Newbury Park",
      "lines": [
          "central"
      ],
      "lat": 51.575726,
      "lng": 0.090004,
      "contact": [
          {
              "key": "Address",
              "value": "Newbury Park Station,London Underground Ltd.,Eastern Avenue,Ilford,Essex,IG2 7RN"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          },
          {
              "key": "Amazon Lockers",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUNHT",
      "id": "940GZZLUNHT",
      "url": "northolt",
      "name": "Northolt",
      "lines": [
          "central"
      ],
      "lat": 51.548236,
      "lng": -0.368699,
      "contact": [
          {
              "key": "Address",
              "value": "Northolt Underground Station,London Underground Ltd.,Mandeville Rd,Northolt,Middx,UB5 4AA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          }
      ]
  },
  {
      "key": "940GZZLUPVL",
      "id": "940GZZLUPVL",
      "url": "perivale",
      "name": "Perivale",
      "lines": [
          "central"
      ],
      "lat": 51.536717,
      "lng": -0.323446,
      "contact": [
          {
              "key": "Address",
              "value": "Perivale Station,London Underground Ltd.,Horsenden Lane,Greenford,Middx"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "2"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUQWY",
      "id": "940GZZLUQWY",
      "url": "queensway",
      "name": "Queensway",
      "lines": [
          "central"
      ],
      "lat": 51.510312,
      "lng": -0.187152,
      "contact": [
          {
              "key": "Address",
              "value": "Queensway Station,London Underground Ltd.,Bayswater Rd,London,W2 4SS"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLURBG",
      "id": "940GZZLURBG",
      "url": "redbridge",
      "name": "Redbridge",
      "lines": [
          "central"
      ],
      "lat": 51.576243,
      "lng": 0.04536,
      "contact": [
          {
              "key": "Address",
              "value": "Redbridge Station,London Underground Ltd.,Eastern Avenue,Ilford,Essex,IG4 5DQ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLURSG",
      "id": "940GZZLURSG",
      "url": "ruislip-gardens",
      "name": "Ruislip Gardens",
      "lines": [
          "central"
      ],
      "lat": 51.560736,
      "lng": -0.41071,
      "contact": [
          {
              "key": "Address",
              "value": "Ruislip Gardens Station,London Underground Ltd.,West End Rd,Ruislip,Middx,HA4 6NF"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "Help Points",
              "value": "7 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLURVY",
      "id": "940GZZLURVY",
      "url": "roding-valley",
      "name": "Roding Valley",
      "lines": [
          "central"
      ],
      "lat": 51.617199,
      "lng": 0.043647,
      "contact": [
          {
              "key": "Address",
              "value": "Roding Valley Station,London Underground Ltd.,Station Way,Buckhurst Hill,Essex,IG9 6LN"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUSBC",
      "id": "940GZZLUSBC",
      "url": "shepherds-bush-",
      "name": "Shepherd's Bush ",
      "lines": [
          "central"
      ],
      "lat": 51.504376,
      "lng": -0.218813,
      "contact": [
          {
              "key": "Address",
              "value": "Shepherd's Bush Central,London Underground Ltd.,Uxbridge Road,London,W12 8ND"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUSNB",
      "id": "940GZZLUSNB",
      "url": "snaresbrook",
      "name": "Snaresbrook",
      "lines": [
          "central"
      ],
      "lat": 51.580678,
      "lng": 0.02144,
      "contact": [
          {
              "key": "Address",
              "value": "Snaresbrook Station,London Underground Ltd.,Station Approach,London,E11 1QE"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUSPU",
      "id": "940GZZLUSPU",
      "url": "st.-pauls",
      "name": "St. Paul's",
      "lines": [
          "central"
      ],
      "lat": 51.514936,
      "lng": -0.097567,
      "contact": [
          {
              "key": "Address",
              "value": "St. Paul's,London Underground Ltd.,Cheapside,London,EC1"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "4"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUSRP",
      "id": "940GZZLUSRP",
      "url": "south-ruislip",
      "name": "South Ruislip",
      "lines": [
          "central"
      ],
      "lat": 51.556853,
      "lng": -0.398915,
      "contact": [
          {
              "key": "Address",
              "value": "South Ruislip Station,London Underground Ltd.,Station Approach,Ruislip,Middx,HA4 6TP"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUSWF",
      "id": "940GZZLUSWF",
      "url": "south-woodford",
      "name": "South Woodford",
      "lines": [
          "central"
      ],
      "lat": 51.591907,
      "lng": 0.027338,
      "contact": [
          {
              "key": "Address",
              "value": "South Woodford Station,London Underground Ltd.,George Lane,London,E18 1JJ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "Yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUTHB",
      "id": "940GZZLUTHB",
      "url": "theydon-bois",
      "name": "Theydon Bois",
      "lines": [
          "central"
      ],
      "lat": 51.671759,
      "lng": 0.103085,
      "contact": [
          {
              "key": "Address",
              "value": "Theydon Bois Station,London Underground Ltd.,Coppice Row,Theydon Bois,Essex,CM16 7EU"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "6"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUWCY",
      "id": "940GZZLUWCY",
      "url": "white-city",
      "name": "White City",
      "lines": [
          "central"
      ],
      "lat": 51.511959,
      "lng": -0.224297,
      "contact": [
          {
              "key": "Address",
              "value": "White City Station,London Underground Ltd.,Wood Lane,London,W12 7RH"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUWOF",
      "id": "940GZZLUWOF",
      "url": "woodford",
      "name": "Woodford",
      "lines": [
          "central"
      ],
      "lat": 51.606899,
      "lng": 0.03397,
      "contact": [
          {
              "key": "Address",
              "value": "Woodford Station,London Underground Ltd.,Snakes Lane,Woodford Green,Essex"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "2"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUWRP",
      "id": "940GZZLUWRP",
      "url": "west-ruislip",
      "name": "West Ruislip",
      "lines": [
          "central"
      ],
      "lat": 51.569688,
      "lng": -0.437886,
      "contact": [
          {
              "key": "Address",
              "value": "West Ruislip Station,London Underground Ltd.,Ickenham Rd,West Ruislip,Middlesex"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "6"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUWSD",
      "id": "940GZZLUWSD",
      "url": "wanstead",
      "name": "Wanstead",
      "lines": [
          "central"
      ],
      "lat": 51.575501,
      "lng": 0.028527,
      "contact": [
          {
              "key": "Address",
              "value": "Wanstead Underground Station,London Underground Ltd.,The Green,London,E11 2NT"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Car park",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUWTA",
      "id": "940GZZLUWTA",
      "url": "west-acton",
      "name": "West Acton",
      "lines": [
          "central"
      ],
      "lat": 51.518001,
      "lng": -0.28098,
      "contact": [
          {
              "key": "Address",
              "value": "West Acton Station,London Underground Ltd.,Princes Gardens,London,W3 0LG"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUERB",
      "id": "940GZZLUERB",
      "url": "edgware-road-",
      "name": "Edgware Road ",
      "lines": [
          "bakerloo"
      ],
      "lat": 51.520299,
      "lng": -0.17015,
      "contact": [
          {
              "key": "Address",
              "value": "Edgware Road Bakerloo,London Underground Ltd.,Edgware Road,London,W2 1DY"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          },
          {
              "key": "Cash Machines",
              "value": "3"
          },
          {
              "key": "Taxi Rank",
              "value": "No"
          }
      ]
  },
  {
      "key": "940GZZLUHAW",
      "id": "940GZZLUHAW",
      "url": "harrow-&-wealdstone",
      "name": "Harrow & Wealdstone",
      "lines": [
          "bakerloo"
      ],
      "lat": 51.592268,
      "lng": -0.335217,
      "contact": [
          {
              "key": "Address",
              "value": "Harrow & Wealdstone,London Overground Ltd.,High Street,Harrow,HA3 5BP"
          },
          {
              "key": "PhoneNo",
              "value": "0845 601 4867"
          },
          {
              "key": "Zone",
              "value": "5"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes"
          },
          {
              "key": "Lifts",
              "value": "4"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "3"
          },
          {
              "key": "Cash Machines",
              "value": "2"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          },
          {
              "key": "Car park",
              "value": "yes"
          },
          {
              "key": "ASDA Click and Collect",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUHSN",
      "id": "940GZZLUHSN",
      "url": "harlesden",
      "name": "Harlesden",
      "lines": [
          "bakerloo"
      ],
      "lat": 51.53631,
      "lng": -0.257883,
      "contact": [
          {
              "key": "Address",
              "value": "Harlesden,London Overground Ltd,Acton Lane,LONDON,NW10 7AA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 601 4867"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "3 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUKEN",
      "id": "940GZZLUKEN",
      "url": "kenton",
      "name": "Kenton",
      "lines": [
          "bakerloo"
      ],
      "lat": 51.581756,
      "lng": -0.31691,
      "contact": [
          {
              "key": "Address",
              "value": "Kenton,London Overground Ltd.,Kenton Road,Harrow,HA3 0AZ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 601 4867"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "3 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUKPK",
      "id": "940GZZLUKPK",
      "url": "kilburn-park",
      "name": "Kilburn Park",
      "lines": [
          "bakerloo"
      ],
      "lat": 51.534979,
      "lng": -0.194232,
      "contact": [
          {
              "key": "Address",
              "value": "Kilburn Park Station,London Underground Ltd.,Cambridge Avenue,London,NW6 5AD"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUKSL",
      "id": "940GZZLUKSL",
      "url": "kensal-green",
      "name": "Kensal Green",
      "lines": [
          "bakerloo"
      ],
      "lat": 51.530539,
      "lng": -0.225016,
      "contact": [
          {
              "key": "Address",
              "value": "Kensal Green,London Overground Ltd.,College Road,Kensal Green,HA10 5JT"
          },
          {
              "key": "PhoneNo",
              "value": "0845 601 4867"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Help Points",
              "value": "2 on platforms, 1 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLULBN",
      "id": "940GZZLULBN",
      "url": "lambeth-north",
      "name": "Lambeth North",
      "lines": [
          "bakerloo"
      ],
      "lat": 51.498808,
      "lng": -0.112315,
      "contact": [
          {
              "key": "Address",
              "value": "Lambeth North Station,London Underground Ltd.,110 Westminster Bridge Rd,London,SE1 7XG"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUMVL",
      "id": "940GZZLUMVL",
      "url": "maida-vale",
      "name": "Maida Vale",
      "lines": [
          "bakerloo"
      ],
      "lat": 51.529777,
      "lng": -0.185758,
      "contact": [
          {
              "key": "Address",
              "value": "Maida Vale Station,London Underground Ltd.,Elgin Avenue,London,W9 1JS"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUMYB",
      "id": "940GZZLUMYB",
      "url": "marylebone",
      "name": "Marylebone",
      "lines": [
          "bakerloo"
      ],
      "lat": 51.522322,
      "lng": -0.163207,
      "contact": [
          {
              "key": "Address",
              "value": "Marylebone Underground Station,London Underground Ltd.,Harewood Row,London,NW1 6JP"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUNWY",
      "id": "940GZZLUNWY",
      "url": "north-wembley",
      "name": "North Wembley",
      "lines": [
          "bakerloo"
      ],
      "lat": 51.562551,
      "lng": -0.304,
      "contact": [
          {
              "key": "Address",
              "value": "North Wembley,London Overground Ltd.,East Lane,Wembley,HA9 7NT"
          },
          {
              "key": "PhoneNo",
              "value": "0845 601 4867"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Help Points",
              "value": "3 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUQPS",
      "id": "940GZZLUQPS",
      "url": "queens-park",
      "name": "Queen's Park",
      "lines": [
          "bakerloo"
      ],
      "lat": 51.534158,
      "lng": -0.204574,
      "contact": [
          {
              "key": "Address",
              "value": "Queen's Park,London Overground Ltd.,Salusbury Road,London,NW6 6NL"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "6 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Cash Machines",
              "value": "1"
          },
          {
              "key": "Euro Cash Machines",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLURGP",
      "id": "940GZZLURGP",
      "url": "regents-park",
      "name": "Regent's Park",
      "lines": [
          "bakerloo"
      ],
      "lat": 51.523344,
      "lng": -0.146444,
      "contact": [
          {
              "key": "Address",
              "value": "Regent's Park Station,London Underground Ltd.,Marylebone Rd,London,NW1 5HA"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "1"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUSGP",
      "id": "940GZZLUSGP",
      "url": "stonebridge-park",
      "name": "Stonebridge Park",
      "lines": [
          "bakerloo"
      ],
      "lat": 51.543959,
      "lng": -0.275892,
      "contact": [
          {
              "key": "Address",
              "value": "Stonebridge Park,London Overground Ltd.,North Circular Road,London,NW10 0RL"
          },
          {
              "key": "PhoneNo",
              "value": "0845 601 4867"
          },
          {
              "key": "Zone",
              "value": "3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUSKT",
      "id": "940GZZLUSKT",
      "url": "south-kenton",
      "name": "South Kenton",
      "lines": [
          "bakerloo"
      ],
      "lat": 51.570232,
      "lng": -0.308433,
      "contact": [
          {
              "key": "Address",
              "value": "South Kenton,London Overground Ltd.,Windermere Road,Preston,HA9 8RD"
          },
          {
              "key": "PhoneNo",
              "value": "0845 601 4867"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "3 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  },
  {
      "key": "940GZZLUWJN",
      "id": "940GZZLUWJN",
      "url": "willesden-junction",
      "name": "Willesden Junction",
      "lines": [
          "bakerloo"
      ],
      "lat": 51.532259,
      "lng": -0.244283,
      "contact": [
          {
              "key": "Address",
              "value": "Willesden Junction,London Overground Ltd.,Station Approach,Harlesden,NW10 4UY"
          },
          {
              "key": "PhoneNo",
              "value": "0845 601 4867"
          },
          {
              "key": "Zone",
              "value": "2+3"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          }
      ]
  },
  {
      "key": "940GZZLUWKA",
      "id": "940GZZLUWKA",
      "url": "warwick-avenue",
      "name": "Warwick Avenue",
      "lines": [
          "bakerloo"
      ],
      "lat": 51.523263,
      "lng": -0.183783,
      "contact": [
          {
              "key": "Address",
              "value": "Warwick Avenue Station,London Underground Ltd.,Warwick Avenue,London,W9 2PT"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "2"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Escalators",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Payphones",
              "value": "1"
          }
      ]
  },
  {
      "key": "940GZZLUWYC",
      "id": "940GZZLUWYC",
      "url": "wembley-central",
      "name": "Wembley Central",
      "lines": [
          "bakerloo"
      ],
      "lat": 51.552304,
      "lng": -0.296852,
      "contact": [
          {
              "key": "Address",
              "value": "Wembley Central,London Overground Ltd.,High Road,Wembley,HA9 7AJ"
          },
          {
              "key": "PhoneNo",
              "value": "0845 330 9880"
          },
          {
              "key": "Zone",
              "value": "4"
          }
      ],
      "facilities": [
          {
              "key": "Ticket Halls",
              "value": "1"
          },
          {
              "key": "Toilets",
              "value": "yes (male, female)"
          },
          {
              "key": "Lifts",
              "value": "2"
          },
          {
              "key": "WiFi",
              "value": "yes"
          },
          {
              "key": "Help Points",
              "value": "6 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
              "key": "Waiting Room",
              "value": "yes"
          }
      ]
  }
]
  
const lineStations = [
  {
    id: 'bakerloo',
    stations: [
      {
        key: '940GZZLUBST',
        id: '940GZZLUBST',
        url: 'baker-street',
        name: 'Baker Street',
        lines: [
          'bakerloo'
        ],
        lat: 51.522883,
        lng: -0.15713,
        contact: [
          {
            key: 'Address',
            value: 'Baker Street Station Marylebone Rd,London,NW1'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '5'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUCHX',
        id: '940GZZLUCHX',
        url: 'charing-cross',
        name: 'Charing Cross',
        lines: [
          'bakerloo'
        ],
        lat: 51.50741,
        lng: -0.127277,
        contact: [
          {
            key: 'Address',
            value: 'Charing Cross Underground Station,London Underground Ltd.,Trafalgar Square,London,WC2N 5DR'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Escalators',
            value: '10'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUEAC',
        id: '940GZZLUEAC',
        url: 'elephant-&-castle',
        name: 'Elephant & Castle',
        lines: [
          'bakerloo'
        ],
        lat: 51.494536,
        lng: -0.100606,
        contact: [
          {
            key: 'Address',
            value: 'Elephant & Castle Underground Station,London Underground Ltd.,London Rd,London,SE1 6LW'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Lifts',
            value: '5'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUEMB',
        id: '940GZZLUEMB',
        url: 'embankment',
        name: 'Embankment',
        lines: [
          'bakerloo'
        ],
        lat: 51.507058,
        lng: -0.122666,
        contact: [
          {
            key: 'Address',
            value: 'Embankment Station,London Underground Ltd.,Villiers St,London,WC2N 6NS'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '10'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '1 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUERB',
        id: '940GZZLUERB',
        url: 'edgware-road-',
        name: 'Edgware Road ',
        lines: [
          'bakerloo'
        ],
        lat: 51.520299,
        lng: -0.17015,
        contact: [
          {
            key: 'Address',
            value: 'Edgware Road Bakerloo,London Underground Ltd.,Edgware Road,London,W2 1DY'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUHAW',
        id: '940GZZLUHAW',
        url: 'harrow-&-wealdstone',
        name: 'Harrow & Wealdstone',
        lines: [
          'bakerloo'
        ],
        lat: 51.592268,
        lng: -0.335217,
        contact: [
          {
            key: 'Address',
            value: 'Harrow & Wealdstone,London Overground Ltd.,High Street,Harrow,HA3 5BP'
          },
          {
            key: 'PhoneNo',
            value: '0845 601 4867'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '4'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '3'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          },
          {
            key: 'ASDA Click and Collect',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUHSN',
        id: '940GZZLUHSN',
        url: 'harlesden',
        name: 'Harlesden',
        lines: [
          'bakerloo'
        ],
        lat: 51.53631,
        lng: -0.257883,
        contact: [
          {
            key: 'Address',
            value: 'Harlesden,London Overground Ltd,Acton Lane,LONDON,NW10 7AA'
          },
          {
            key: 'PhoneNo',
            value: '0845 601 4867'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '3 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUKEN',
        id: '940GZZLUKEN',
        url: 'kenton',
        name: 'Kenton',
        lines: [
          'bakerloo'
        ],
        lat: 51.581756,
        lng: -0.31691,
        contact: [
          {
            key: 'Address',
            value: 'Kenton,London Overground Ltd.,Kenton Road,Harrow,HA3 0AZ'
          },
          {
            key: 'PhoneNo',
            value: '0845 601 4867'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '3 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUKPK',
        id: '940GZZLUKPK',
        url: 'kilburn-park',
        name: 'Kilburn Park',
        lines: [
          'bakerloo'
        ],
        lat: 51.534979,
        lng: -0.194232,
        contact: [
          {
            key: 'Address',
            value: 'Kilburn Park Station,London Underground Ltd.,Cambridge Avenue,London,NW6 5AD'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUKSL',
        id: '940GZZLUKSL',
        url: 'kensal-green',
        name: 'Kensal Green',
        lines: [
          'bakerloo'
        ],
        lat: 51.530539,
        lng: -0.225016,
        contact: [
          {
            key: 'Address',
            value: 'Kensal Green,London Overground Ltd.,College Road,Kensal Green,HA10 5JT'
          },
          {
            key: 'PhoneNo',
            value: '0845 601 4867'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Help Points',
            value: '2 on platforms, 1 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLULBN',
        id: '940GZZLULBN',
        url: 'lambeth-north',
        name: 'Lambeth North',
        lines: [
          'bakerloo'
        ],
        lat: 51.498808,
        lng: -0.112315,
        contact: [
          {
            key: 'Address',
            value: 'Lambeth North Station,London Underground Ltd.,110 Westminster Bridge Rd,London,SE1 7XG'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUMVL',
        id: '940GZZLUMVL',
        url: 'maida-vale',
        name: 'Maida Vale',
        lines: [
          'bakerloo'
        ],
        lat: 51.529777,
        lng: -0.185758,
        contact: [
          {
            key: 'Address',
            value: 'Maida Vale Station,London Underground Ltd.,Elgin Avenue,London,W9 1JS'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUMYB',
        id: '940GZZLUMYB',
        url: 'marylebone',
        name: 'Marylebone',
        lines: [
          'bakerloo'
        ],
        lat: 51.522322,
        lng: -0.163207,
        contact: [
          {
            key: 'Address',
            value: 'Marylebone Underground Station,London Underground Ltd.,Harewood Row,London,NW1 6JP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUNWY',
        id: '940GZZLUNWY',
        url: 'north-wembley',
        name: 'North Wembley',
        lines: [
          'bakerloo'
        ],
        lat: 51.562551,
        lng: -0.304,
        contact: [
          {
            key: 'Address',
            value: 'North Wembley,London Overground Ltd.,East Lane,Wembley,HA9 7NT'
          },
          {
            key: 'PhoneNo',
            value: '0845 601 4867'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Help Points',
            value: '3 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUOXC',
        id: '940GZZLUOXC',
        url: 'oxford-circus',
        name: 'Oxford Circus',
        lines: [
          'bakerloo'
        ],
        lat: 51.515224,
        lng: -0.141903,
        contact: [
          {
            key: 'Address',
            value: 'Oxford Circus Station,London Underground Ltd.,Oxford St,London,W1B 3AG'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Escalators',
            value: '14'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '18 on platforms, 0 in ticket halls, 18 elsewhere'
          },
          {
            key: 'Payphones',
            value: '3'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUPAC',
        id: '940GZZLUPAC',
        url: 'paddington',
        name: 'Paddington',
        lines: [
          'bakerloo'
        ],
        lat: 51.516581,
        lng: -0.175689,
        contact: [
          {
            key: 'Address',
            value: 'Paddington Underground Stations,London Underground Ltd.,Praed St,London,W2'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '3'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'Escalators',
            value: '4'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 0 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUPCC',
        id: '940GZZLUPCC',
        url: 'piccadilly-circus',
        name: 'Piccadilly Circus',
        lines: [
          'bakerloo'
        ],
        lat: 51.51005,
        lng: -0.133798,
        contact: [
          {
            key: 'Address',
            value: 'Piccadilly Circus Station,London Underground Ltd.,Piccadilly Circus,London,W1J 9HP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '11'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '6'
          },
          {
            key: 'Cash Machines',
            value: '5'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUQPS',
        id: '940GZZLUQPS',
        url: 'queens-park',
        name: 'Queen\'s Park',
        lines: [
          'bakerloo'
        ],
        lat: 51.534158,
        lng: -0.204574,
        contact: [
          {
            key: 'Address',
            value: 'Queen\'s Park,London Overground Ltd.,Salusbury Road,London,NW6 6NL'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '6 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLURGP',
        id: '940GZZLURGP',
        url: 'regents-park',
        name: 'Regent\'s Park',
        lines: [
          'bakerloo'
        ],
        lat: 51.523344,
        lng: -0.146444,
        contact: [
          {
            key: 'Address',
            value: 'Regent\'s Park Station,London Underground Ltd.,Marylebone Rd,London,NW1 5HA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUSGP',
        id: '940GZZLUSGP',
        url: 'stonebridge-park',
        name: 'Stonebridge Park',
        lines: [
          'bakerloo'
        ],
        lat: 51.543959,
        lng: -0.275892,
        contact: [
          {
            key: 'Address',
            value: 'Stonebridge Park,London Overground Ltd.,North Circular Road,London,NW10 0RL'
          },
          {
            key: 'PhoneNo',
            value: '0845 601 4867'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUSKT',
        id: '940GZZLUSKT',
        url: 'south-kenton',
        name: 'South Kenton',
        lines: [
          'bakerloo'
        ],
        lat: 51.570232,
        lng: -0.308433,
        contact: [
          {
            key: 'Address',
            value: 'South Kenton,London Overground Ltd.,Windermere Road,Preston,HA9 8RD'
          },
          {
            key: 'PhoneNo',
            value: '0845 601 4867'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '3 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUWJN',
        id: '940GZZLUWJN',
        url: 'willesden-junction',
        name: 'Willesden Junction',
        lines: [
          'bakerloo'
        ],
        lat: 51.532259,
        lng: -0.244283,
        contact: [
          {
            key: 'Address',
            value: 'Willesden Junction,London Overground Ltd.,Station Approach,Harlesden,NW10 4UY'
          },
          {
            key: 'PhoneNo',
            value: '0845 601 4867'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUWKA',
        id: '940GZZLUWKA',
        url: 'warwick-avenue',
        name: 'Warwick Avenue',
        lines: [
          'bakerloo'
        ],
        lat: 51.523263,
        lng: -0.183783,
        contact: [
          {
            key: 'Address',
            value: 'Warwick Avenue Station,London Underground Ltd.,Warwick Avenue,London,W9 2PT'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUWLO',
        id: '940GZZLUWLO',
        url: 'waterloo',
        name: 'Waterloo',
        lines: [
          'bakerloo'
        ],
        lat: 51.503299,
        lng: -0.11478,
        contact: [
          {
            key: 'Address',
            value: 'Waterloo Underground Station,London Underground Ltd.,York Rd,London,SE1 7ND'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '3'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '23'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '6'
          },
          {
            key: 'Cash Machines',
            value: '4'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          }
        ]
      },
      {
        key: '940GZZLUWYC',
        id: '940GZZLUWYC',
        url: 'wembley-central',
        name: 'Wembley Central',
        lines: [
          'bakerloo'
        ],
        lat: 51.552304,
        lng: -0.296852,
        contact: [
          {
            key: 'Address',
            value: 'Wembley Central,London Overground Ltd.,High Road,Wembley,HA9 7AJ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '6 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      }
    ]
  },
  {
    id: 'central',
    stations: [
      {
        key: '940GZZLUBKE',
        id: '940GZZLUBKE',
        url: 'barkingside',
        name: 'Barkingside',
        lines: [
          'central'
        ],
        lat: 51.585689,
        lng: 0.088585,
        contact: [
          {
            key: 'Address',
            value: 'Barkingside Station,London Underground Ltd.,Stn Rd,Barkingside,Milford,Essex,IG6 1NB'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUBKH',
        id: '940GZZLUBKH',
        url: 'buckhurst-hill',
        name: 'Buckhurst Hill',
        lines: [
          'central'
        ],
        lat: 51.626605,
        lng: 0.046757,
        contact: [
          {
            key: 'Address',
            value: 'Buckhurst Hill Station,London Underground Ltd.,Victoria Rd,Buckhurst Hill,Essex,IG9 5ET'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUBLG',
        id: '940GZZLUBLG',
        url: 'bethnal-green',
        name: 'Bethnal Green',
        lines: [
          'central'
        ],
        lat: 51.527222,
        lng: -0.055506,
        contact: [
          {
            key: 'Address',
            value: 'Bethnal Green Underground Station,London Underground Ltd.,Cambridge Heath Rd,London,E2 0ET'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '3'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUBND',
        id: '940GZZLUBND',
        url: 'bond-street',
        name: 'Bond Street',
        lines: [
          'central'
        ],
        lat: 51.514304,
        lng: -0.149723,
        contact: [
          {
            key: 'Address',
            value: 'Bond Street Station,London Underground Ltd.,Oxford St,London,W1R 1FE'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '8'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUBNK',
        id: '940GZZLUBNK',
        url: 'bank',
        name: 'Bank',
        lines: [
          'central'
        ],
        lat: 51.512884,
        lng: -0.091397,
        contact: [
          {
            key: 'Address',
            value: 'Bank/Monument Complex,London Underground Ltd.,Princes St,London,EC3V 3LA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '5'
          },
          {
            key: 'Escalators',
            value: '15'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '10 on platforms, 1 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUCHL',
        id: '940GZZLUCHL',
        url: 'chancery-lane',
        name: 'Chancery Lane',
        lines: [
          'central'
        ],
        lat: 51.518247,
        lng: -0.111583,
        contact: [
          {
            key: 'Address',
            value: 'Chancery Lane Station,London Underground Ltd.,High Holborn,London,WC1V 6DR'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '5'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUCWL',
        id: '940GZZLUCWL',
        url: 'chigwell',
        name: 'Chigwell',
        lines: [
          'central'
        ],
        lat: 51.617916,
        lng: 0.075041,
        contact: [
          {
            key: 'Address',
            value: 'Chigwell Station,London Underground Ltd.,Station Rd,Chigwell,Essex,IG7 6NT'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (female only)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUDBN',
        id: '940GZZLUDBN',
        url: 'debden',
        name: 'Debden',
        lines: [
          'central'
        ],
        lat: 51.645386,
        lng: 0.083782,
        contact: [
          {
            key: 'Address',
            value: 'Debden Station,London Underground Ltd.,Chigwell Lane,Loughton,Essex,IG10 3TG'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUEAN',
        id: '940GZZLUEAN',
        url: 'east-acton',
        name: 'East Acton',
        lines: [
          'central'
        ],
        lat: 51.516612,
        lng: -0.247248,
        contact: [
          {
            key: 'Address',
            value: 'East Acton Station,London Underground Ltd.,Erconwald St,London,W12 0BP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUEBY',
        id: '940GZZLUEBY',
        url: 'ealing-broadway',
        name: 'Ealing Broadway',
        lines: [
          'central'
        ],
        lat: 51.515017,
        lng: -0.301457,
        contact: [
          {
            key: 'Address',
            value: 'Ealing Broadway Station,The Broadway,London,W5 2NU'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUEPG',
        id: '940GZZLUEPG',
        url: 'epping',
        name: 'Epping',
        lines: [
          'central'
        ],
        lat: 51.69368,
        lng: 0.113767,
        contact: [
          {
            key: 'Address',
            value: 'Epping Station,London Underground Ltd.,Station Rd,Epping,Essex,CM16 4HW'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male,female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '9 on platforms, 1 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          },
          {
            key: 'ASDA Click and Collect',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUFLP',
        id: '940GZZLUFLP',
        url: 'fairlop',
        name: 'Fairlop',
        lines: [
          'central'
        ],
        lat: 51.595618,
        lng: 0.091004,
        contact: [
          {
            key: 'Address',
            value: 'Fairlop Station,London Underground Ltd.,Forest Rd,Ilford,Essex,IG6 3HD'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUGFD',
        id: '940GZZLUGFD',
        url: 'greenford',
        name: 'Greenford',
        lines: [
          'central'
        ],
        lat: 51.542424,
        lng: -0.34605,
        contact: [
          {
            key: 'Address',
            value: 'Greenford Station,London Underground Ltd.,Oldfield Lane,Greenford,Middx,UB6 8PX'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUGGH',
        id: '940GZZLUGGH',
        url: 'grange-hill',
        name: 'Grange Hill',
        lines: [
          'central'
        ],
        lat: 51.613378,
        lng: 0.092066,
        contact: [
          {
            key: 'Address',
            value: 'Grange Hill Station,London Underground Ltd.,Manor Rd,Chigwell,Essex IG7 5QB'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUGTH',
        id: '940GZZLUGTH',
        url: 'gants-hill',
        name: 'Gants Hill',
        lines: [
          'central'
        ],
        lat: 51.576544,
        lng: 0.066185,
        contact: [
          {
            key: 'Address',
            value: 'Gants Hill Station,London Underground Ltd.,Cranbrook Rd,Ilford,Essex,IG2 6UD'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '3'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUHBN',
        id: '940GZZLUHBN',
        url: 'holborn',
        name: 'Holborn',
        lines: [
          'central'
        ],
        lat: 51.51758,
        lng: -0.120475,
        contact: [
          {
            key: 'Address',
            value: 'Holborn Station,London Underground Ltd.,Kingsway,London,WC2B 6AA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '7'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUHGR',
        id: '940GZZLUHGR',
        url: 'hanger-lane',
        name: 'Hanger Lane',
        lines: [
          'central'
        ],
        lat: 51.530177,
        lng: -0.292704,
        contact: [
          {
            key: 'Address',
            value: 'Hanger Lane Station,London Underground Ltd.,Hanger Lane,London,W5 1DL'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUHLT',
        id: '940GZZLUHLT',
        url: 'hainault',
        name: 'Hainault',
        lines: [
          'central'
        ],
        lat: 51.603659,
        lng: 0.093482,
        contact: [
          {
            key: 'Address',
            value: 'Hainault Station,London Underground Ltd.,New North Rd,Ilford,Essex,IG6 3BD'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUHPK',
        id: '940GZZLUHPK',
        url: 'holland-park',
        name: 'Holland Park',
        lines: [
          'central'
        ],
        lat: 51.507143,
        lng: -0.205679,
        contact: [
          {
            key: 'Address',
            value: 'Holland Park Station,London Underground Ltd.,Holland Park Avenue,London,W11 3RB'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLULGN',
        id: '940GZZLULGN',
        url: 'loughton',
        name: 'Loughton',
        lines: [
          'central'
        ],
        lat: 51.641443,
        lng: 0.055476,
        contact: [
          {
            key: 'Address',
            value: 'Loughton Station,London Underground Ltd.,Old Station Rd,Roding Rd,Loughton,Essex,IG10 4PD'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLULGT',
        id: '940GZZLULGT',
        url: 'lancaster-gate',
        name: 'Lancaster Gate',
        lines: [
          'central'
        ],
        lat: 51.511723,
        lng: -0.175494,
        contact: [
          {
            key: 'Address',
            value: 'Lancaster Gate Station,London Underground Ltd.,Bayswater Rd,London,W2'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLULVT',
        id: '940GZZLULVT',
        url: 'liverpool-street',
        name: 'Liverpool Street',
        lines: [
          'central'
        ],
        lat: 51.517372,
        lng: -0.083182,
        contact: [
          {
            key: 'Address',
            value: 'Liverpool Street Underground Station Central,London Underground Ltd.,Liverpool Street,London,EC2M 7PP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '3'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '9'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '12 on platforms, 0 in ticket halls, 8 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '5'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          }
        ]
      },
      {
        key: '940GZZLULYN',
        id: '940GZZLULYN',
        url: 'leyton',
        name: 'Leyton',
        lines: [
          'central'
        ],
        lat: 51.556589,
        lng: -0.005523,
        contact: [
          {
            key: 'Address',
            value: 'Leyton Underground Station,London Underground Ltd.,High Rd,Leyton,London,E10 5PS'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLULYS',
        id: '940GZZLULYS',
        url: 'leytonstone',
        name: 'Leytonstone',
        lines: [
          'central'
        ],
        lat: 51.568324,
        lng: 0.008194,
        contact: [
          {
            key: 'Address',
            value: 'Leytonstone Station,London Underground Ltd.,Church Lane,London,E11 1HE'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUMBA',
        id: '940GZZLUMBA',
        url: 'marble-arch',
        name: 'Marble Arch',
        lines: [
          'central'
        ],
        lat: 51.513424,
        lng: -0.158953,
        contact: [
          {
            key: 'Address',
            value: 'Marble Arch Station,London Underground Ltd.,Oxford St,London,W1C 1CX'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUMED',
        id: '940GZZLUMED',
        url: 'mile-end',
        name: 'Mile End',
        lines: [
          'central'
        ],
        lat: 51.525122,
        lng: -0.03364,
        contact: [
          {
            key: 'Address',
            value: 'Mile End Station,London Underground Ltd.,Mile End Rd,London,E3 4DH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUNAN',
        id: '940GZZLUNAN',
        url: 'north-acton',
        name: 'North Acton',
        lines: [
          'central'
        ],
        lat: 51.523524,
        lng: -0.259755,
        contact: [
          {
            key: 'Address',
            value: 'North Acton Station,London Underground Ltd.,Victoria Rd,London,W3 6UP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUNBP',
        id: '940GZZLUNBP',
        url: 'newbury-park',
        name: 'Newbury Park',
        lines: [
          'central'
        ],
        lat: 51.575726,
        lng: 0.090004,
        contact: [
          {
            key: 'Address',
            value: 'Newbury Park Station,London Underground Ltd.,Eastern Avenue,Ilford,Essex,IG2 7RN'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          },
          {
            key: 'Amazon Lockers',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUNHG',
        id: '940GZZLUNHG',
        url: 'notting-hill-gate',
        name: 'Notting Hill Gate',
        lines: [
          'central'
        ],
        lat: 51.509128,
        lng: -0.196104,
        contact: [
          {
            key: 'Address',
            value: 'Notting Hill Gate Station,London Underground Ltd.,Notting Hill Gate,London,W11 3HT'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '3'
          }
        ]
      },
      {
        key: '940GZZLUNHT',
        id: '940GZZLUNHT',
        url: 'northolt',
        name: 'Northolt',
        lines: [
          'central'
        ],
        lat: 51.548236,
        lng: -0.368699,
        contact: [
          {
            key: 'Address',
            value: 'Northolt Underground Station,London Underground Ltd.,Mandeville Rd,Northolt,Middx,UB5 4AA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUOXC',
        id: '940GZZLUOXC',
        url: 'oxford-circus',
        name: 'Oxford Circus',
        lines: [
          'central'
        ],
        lat: 51.515224,
        lng: -0.141903,
        contact: [
          {
            key: 'Address',
            value: 'Oxford Circus Station,London Underground Ltd.,Oxford St,London,W1B 3AG'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Escalators',
            value: '14'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '18 on platforms, 0 in ticket halls, 18 elsewhere'
          },
          {
            key: 'Payphones',
            value: '3'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUPVL',
        id: '940GZZLUPVL',
        url: 'perivale',
        name: 'Perivale',
        lines: [
          'central'
        ],
        lat: 51.536717,
        lng: -0.323446,
        contact: [
          {
            key: 'Address',
            value: 'Perivale Station,London Underground Ltd.,Horsenden Lane,Greenford,Middx'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUQWY',
        id: '940GZZLUQWY',
        url: 'queensway',
        name: 'Queensway',
        lines: [
          'central'
        ],
        lat: 51.510312,
        lng: -0.187152,
        contact: [
          {
            key: 'Address',
            value: 'Queensway Station,London Underground Ltd.,Bayswater Rd,London,W2 4SS'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLURBG',
        id: '940GZZLURBG',
        url: 'redbridge',
        name: 'Redbridge',
        lines: [
          'central'
        ],
        lat: 51.576243,
        lng: 0.04536,
        contact: [
          {
            key: 'Address',
            value: 'Redbridge Station,London Underground Ltd.,Eastern Avenue,Ilford,Essex,IG4 5DQ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLURSG',
        id: '940GZZLURSG',
        url: 'ruislip-gardens',
        name: 'Ruislip Gardens',
        lines: [
          'central'
        ],
        lat: 51.560736,
        lng: -0.41071,
        contact: [
          {
            key: 'Address',
            value: 'Ruislip Gardens Station,London Underground Ltd.,West End Rd,Ruislip,Middx,HA4 6NF'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'Help Points',
            value: '7 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLURVY',
        id: '940GZZLURVY',
        url: 'roding-valley',
        name: 'Roding Valley',
        lines: [
          'central'
        ],
        lat: 51.617199,
        lng: 0.043647,
        contact: [
          {
            key: 'Address',
            value: 'Roding Valley Station,London Underground Ltd.,Station Way,Buckhurst Hill,Essex,IG9 6LN'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUSBC',
        id: '940GZZLUSBC',
        url: 'shepherds-bush-',
        name: 'Shepherd\'s Bush ',
        lines: [
          'central'
        ],
        lat: 51.504376,
        lng: -0.218813,
        contact: [
          {
            key: 'Address',
            value: 'Shepherd\'s Bush Central,London Underground Ltd.,Uxbridge Road,London,W12 8ND'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUSNB',
        id: '940GZZLUSNB',
        url: 'snaresbrook',
        name: 'Snaresbrook',
        lines: [
          'central'
        ],
        lat: 51.580678,
        lng: 0.02144,
        contact: [
          {
            key: 'Address',
            value: 'Snaresbrook Station,London Underground Ltd.,Station Approach,London,E11 1QE'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUSPU',
        id: '940GZZLUSPU',
        url: 'st.-pauls',
        name: 'St. Paul\'s',
        lines: [
          'central'
        ],
        lat: 51.514936,
        lng: -0.097567,
        contact: [
          {
            key: 'Address',
            value: 'St. Paul\'s,London Underground Ltd.,Cheapside,London,EC1'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '4'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUSRP',
        id: '940GZZLUSRP',
        url: 'south-ruislip',
        name: 'South Ruislip',
        lines: [
          'central'
        ],
        lat: 51.556853,
        lng: -0.398915,
        contact: [
          {
            key: 'Address',
            value: 'South Ruislip Station,London Underground Ltd.,Station Approach,Ruislip,Middx,HA4 6TP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUSTD',
        id: '940GZZLUSTD',
        url: 'stratford',
        name: 'Stratford',
        lines: [
          'central'
        ],
        lat: 51.541806,
        lng: -0.003458,
        contact: [
          {
            key: 'Address',
            value: 'Stratford Station BR Station St,London,E15 1DE'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '5'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '8'
          },
          {
            key: 'Cash Machines',
            value: '4'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUSWF',
        id: '940GZZLUSWF',
        url: 'south-woodford',
        name: 'South Woodford',
        lines: [
          'central'
        ],
        lat: 51.591907,
        lng: 0.027338,
        contact: [
          {
            key: 'Address',
            value: 'South Woodford Station,London Underground Ltd.,George Lane,London,E18 1JJ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUTCR',
        id: '940GZZLUTCR',
        url: 'tottenham-court-road',
        name: 'Tottenham Court Road',
        lines: [
          'central'
        ],
        lat: 51.516426,
        lng: -0.13041,
        contact: [
          {
            key: 'Address',
            value: 'Tottenham Court Road Station,London Underground Ltd.,Oxford St,London,W1'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          }
        ]
      },
      {
        key: '940GZZLUTHB',
        id: '940GZZLUTHB',
        url: 'theydon-bois',
        name: 'Theydon Bois',
        lines: [
          'central'
        ],
        lat: 51.671759,
        lng: 0.103085,
        contact: [
          {
            key: 'Address',
            value: 'Theydon Bois Station,London Underground Ltd.,Coppice Row,Theydon Bois,Essex,CM16 7EU'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUWCY',
        id: '940GZZLUWCY',
        url: 'white-city',
        name: 'White City',
        lines: [
          'central'
        ],
        lat: 51.511959,
        lng: -0.224297,
        contact: [
          {
            key: 'Address',
            value: 'White City Station,London Underground Ltd.,Wood Lane,London,W12 7RH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUWOF',
        id: '940GZZLUWOF',
        url: 'woodford',
        name: 'Woodford',
        lines: [
          'central'
        ],
        lat: 51.606899,
        lng: 0.03397,
        contact: [
          {
            key: 'Address',
            value: 'Woodford Station,London Underground Ltd.,Snakes Lane,Woodford Green,Essex'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUWRP',
        id: '940GZZLUWRP',
        url: 'west-ruislip',
        name: 'West Ruislip',
        lines: [
          'central'
        ],
        lat: 51.569688,
        lng: -0.437886,
        contact: [
          {
            key: 'Address',
            value: 'West Ruislip Station,London Underground Ltd.,Ickenham Rd,West Ruislip,Middlesex'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUWSD',
        id: '940GZZLUWSD',
        url: 'wanstead',
        name: 'Wanstead',
        lines: [
          'central'
        ],
        lat: 51.575501,
        lng: 0.028527,
        contact: [
          {
            key: 'Address',
            value: 'Wanstead Underground Station,London Underground Ltd.,The Green,London,E11 2NT'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUWTA',
        id: '940GZZLUWTA',
        url: 'west-acton',
        name: 'West Acton',
        lines: [
          'central'
        ],
        lat: 51.518001,
        lng: -0.28098,
        contact: [
          {
            key: 'Address',
            value: 'West Acton Station,London Underground Ltd.,Princes Gardens,London,W3 0LG'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      }
    ]
  },
  {
    id: 'circle',
    stations: [
      {
        key: '940GZZLUALD',
        id: '940GZZLUALD',
        url: 'aldgate',
        name: 'Aldgate',
        lines: [
          'circle'
        ],
        lat: 51.514246,
        lng: -0.075689,
        contact: [
          {
            key: 'Address',
            value: 'Aldgate Station,London Underground Ltd.,Aldgate High St,London,EC3N 1AH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUBBN',
        id: '940GZZLUBBN',
        url: 'barbican',
        name: 'Barbican',
        lines: [
          'circle'
        ],
        lat: 51.520275,
        lng: -0.097993,
        contact: [
          {
            key: 'Address',
            value: 'Barbican Station,London Underground Ltd.,Aldersgate St,London,EC1A 4JA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUBKF',
        id: '940GZZLUBKF',
        url: 'blackfriars',
        name: 'Blackfriars',
        lines: [
          'circle'
        ],
        lat: 51.511581,
        lng: -0.103659,
        contact: [
          {
            key: 'Address',
            value: 'Blackfriars Station,London Underground Ltd.,Blackfriars Road,London,EC4R 2BB'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'Escalators',
            value: '4'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 3 in ticket halls, 2 elsewhere'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUBST',
        id: '940GZZLUBST',
        url: 'baker-street',
        name: 'Baker Street',
        lines: [
          'circle'
        ],
        lat: 51.522883,
        lng: -0.15713,
        contact: [
          {
            key: 'Address',
            value: 'Baker Street Station Marylebone Rd,London,NW1'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '5'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUBWT',
        id: '940GZZLUBWT',
        url: 'bayswater',
        name: 'Bayswater',
        lines: [
          'circle'
        ],
        lat: 51.512284,
        lng: -0.187938,
        contact: [
          {
            key: 'Address',
            value: 'Bayswater Station,London Underground Ltd.,Queensway,London,W2 4RH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUCST',
        id: '940GZZLUCST',
        url: 'cannon-street',
        name: 'Cannon Street',
        lines: [
          'circle'
        ],
        lat: 51.51151,
        lng: -0.090432,
        contact: [
          {
            key: 'Address',
            value: 'Cannon Street Underground Station,London Underground Ltd.,Cannon St,London,EC4N 6AP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUEMB',
        id: '940GZZLUEMB',
        url: 'embankment',
        name: 'Embankment',
        lines: [
          'circle'
        ],
        lat: 51.507058,
        lng: -0.122666,
        contact: [
          {
            key: 'Address',
            value: 'Embankment Station,London Underground Ltd.,Villiers St,London,WC2N 6NS'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '10'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '1 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUERC',
        id: '940GZZLUERC',
        url: 'edgware-road-',
        name: 'Edgware Road ',
        lines: [
          'circle'
        ],
        lat: 51.519858,
        lng: -0.167832,
        contact: [
          {
            key: 'Address',
            value: 'Edgware Road Circle,London Underground Ltd.,Chapel Street,London,NW1 5DH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '3'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUESQ',
        id: '940GZZLUESQ',
        url: 'euston-square',
        name: 'Euston Square',
        lines: [
          'circle'
        ],
        lat: 51.525604,
        lng: -0.135829,
        contact: [
          {
            key: 'Address',
            value: 'Euston Square Station,London Underground Ltd.,Euston Rd,London,NW1 2BN'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '1 lift from street level to ticket hall and 1 lift from ticket hall to westbound platform only.'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUFCN',
        id: '940GZZLUFCN',
        url: 'farringdon',
        name: 'Farringdon',
        lines: [
          'circle'
        ],
        lat: 51.520252,
        lng: -0.104913,
        contact: [
          {
            key: 'Address',
            value: 'Farringdon Station,London Underground Ltd.,Cowcross St,London,EC1M 6BY'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '4'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUGHK',
        id: '940GZZLUGHK',
        url: 'goldhawk-road',
        name: 'Goldhawk Road',
        lines: [
          'circle'
        ],
        lat: 51.502005,
        lng: -0.226715,
        contact: [
          {
            key: 'Address',
            value: 'Goldhawk Road Station,London Underground Ltd.,Goldhawk Rd,London,W12 8EG'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUGPS',
        id: '940GZZLUGPS',
        url: 'great-portland-street',
        name: 'Great Portland Street',
        lines: [
          'circle'
        ],
        lat: 51.52384,
        lng: -0.144262,
        contact: [
          {
            key: 'Address',
            value: 'Great Portland Street Station,London Underground Ltd.,Euston Rd,London,NW1'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUGTR',
        id: '940GZZLUGTR',
        url: 'gloucester-road',
        name: 'Gloucester Road',
        lines: [
          'circle'
        ],
        lat: 51.494316,
        lng: -0.182658,
        contact: [
          {
            key: 'Address',
            value: 'Gloucester Road Station,London Underground Ltd.,Gloucester Rd,London,SW7 4SF'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 2 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUHSC',
        id: '940GZZLUHSC',
        url: 'hammersmith-',
        name: 'Hammersmith ',
        lines: [
          'circle'
        ],
        lat: 51.493535,
        lng: -0.225013,
        contact: [
          {
            key: 'Address',
            value: 'Hammersmith (H & C),London Underground Ltd.,Beadon Road,London,W6 7AA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUHSK',
        id: '940GZZLUHSK',
        url: 'high-street-kensington',
        name: 'High Street Kensington',
        lines: [
          'circle'
        ],
        lat: 51.501055,
        lng: -0.192792,
        contact: [
          {
            key: 'Address',
            value: 'High Street Kensington Station,London Underground Ltd.,Kensington High St,London,W8 5SA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUKSX',
        id: '940GZZLUKSX',
        url: 'kings-cross-st.-pancras',
        name: 'King\'s Cross St. Pancras',
        lines: [
          'circle'
        ],
        lat: 51.530663,
        lng: -0.123194,
        contact: [
          {
            key: 'Address',
            value: 'King\'s Cross St. Pancras,London Underground Ltd.,Euston Road,London,N1 9AL'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '4'
          },
          {
            key: 'Lifts',
            value: '10'
          },
          {
            key: 'Escalators',
            value: '19'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '9'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          }
        ]
      },
      {
        key: '940GZZLULAD',
        id: '940GZZLULAD',
        url: 'ladbroke-grove',
        name: 'Ladbroke Grove',
        lines: [
          'circle'
        ],
        lat: 51.517449,
        lng: -0.210391,
        contact: [
          {
            key: 'Address',
            value: 'Ladbroke Grove Station,London Underground Ltd.,Ladbroke Grove,London,W10 6HJ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 1 in ticket halls, 4 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLULRD',
        id: '940GZZLULRD',
        url: 'latimer-road',
        name: 'Latimer Road',
        lines: [
          'circle'
        ],
        lat: 51.513389,
        lng: -0.217799,
        contact: [
          {
            key: 'Address',
            value: 'Latimer Road Station,London Underground Ltd.,Bramley Rd,London,W10 6SZ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 0 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLULVT',
        id: '940GZZLULVT',
        url: 'liverpool-street',
        name: 'Liverpool Street',
        lines: [
          'circle'
        ],
        lat: 51.517372,
        lng: -0.083182,
        contact: [
          {
            key: 'Address',
            value: 'Liverpool Street Underground Station Central,London Underground Ltd.,Liverpool Street,London,EC2M 7PP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '3'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '9'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '12 on platforms, 0 in ticket halls, 8 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '5'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          }
        ]
      },
      {
        key: '940GZZLUMGT',
        id: '940GZZLUMGT',
        url: 'moorgate',
        name: 'Moorgate',
        lines: [
          'circle'
        ],
        lat: 51.518176,
        lng: -0.088322,
        contact: [
          {
            key: 'Address',
            value: 'Moorgate Station,London Underground Ltd.,Moorfields,London,EC2Y 9AE'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUMMT',
        id: '940GZZLUMMT',
        url: 'monument',
        name: 'Monument',
        lines: [
          'circle'
        ],
        lat: 51.5107,
        lng: -0.085969,
        contact: [
          {
            key: 'Address',
            value: 'Monument Station,London Underground Ltd.,King William St,London,EC4R 9AA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUMSH',
        id: '940GZZLUMSH',
        url: 'mansion-house',
        name: 'Mansion House',
        lines: [
          'circle'
        ],
        lat: 51.512117,
        lng: -0.094009,
        contact: [
          {
            key: 'Address',
            value: 'Mansion House Station,London Underground Ltd.,38 Cannon St,London,EC4N 6JD'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '5 on platforms, 0 in ticket halls, 2 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUNHG',
        id: '940GZZLUNHG',
        url: 'notting-hill-gate',
        name: 'Notting Hill Gate',
        lines: [
          'circle'
        ],
        lat: 51.509128,
        lng: -0.196104,
        contact: [
          {
            key: 'Address',
            value: 'Notting Hill Gate Station,London Underground Ltd.,Notting Hill Gate,London,W11 3HT'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '3'
          }
        ]
      },
      {
        key: '940GZZLUPAC',
        id: '940GZZLUPAC',
        url: 'paddington',
        name: 'Paddington',
        lines: [
          'circle'
        ],
        lat: 51.516581,
        lng: -0.175689,
        contact: [
          {
            key: 'Address',
            value: 'Paddington Underground Stations,London Underground Ltd.,Praed St,London,W2'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '3'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'Escalators',
            value: '4'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 0 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUPAH',
        id: '940GZZLUPAH',
        url: 'paddington-',
        name: 'Paddington ',
        lines: [
          'circle'
        ],
        lat: 51.518187,
        lng: -0.178306,
        contact: [],
        facilities: [
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLURYO',
        id: '940GZZLURYO',
        url: 'royal-oak',
        name: 'Royal Oak',
        lines: [
          'circle'
        ],
        lat: 51.519113,
        lng: -0.188748,
        contact: [
          {
            key: 'Address',
            value: 'Royal Oak Station,London Underground Ltd.,Lord Hills Bridge,London,W2 6ET'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUSBM',
        id: '940GZZLUSBM',
        url: 'shepherds-bush-market',
        name: 'Shepherd\'s Bush Market',
        lines: [
          'circle'
        ],
        lat: 51.505579,
        lng: -0.226375,
        contact: [
          {
            key: 'Address',
            value: 'Shepherd\'s Bush Market,London Underground Ltd.,Uxbridge Road,London,W12 7JD'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUSJP',
        id: '940GZZLUSJP',
        url: 'st.-jamess-park',
        name: 'St. James\'s Park',
        lines: [
          'circle'
        ],
        lat: 51.499544,
        lng: -0.133608,
        contact: [
          {
            key: 'Address',
            value: 'St. James\'s Park,London Underground Ltd.,Petty France,London,SW1H 0BD'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUSKS',
        id: '940GZZLUSKS',
        url: 'south-kensington',
        name: 'South Kensington',
        lines: [
          'circle'
        ],
        lat: 51.494094,
        lng: -0.174138,
        contact: [
          {
            key: 'Address',
            value: 'South Kensington Station,London Underground Ltd.,Pelham St,London,SW7 2NB'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '5'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '12 on platforms, 0 in ticket halls, 4 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUSSQ',
        id: '940GZZLUSSQ',
        url: 'sloane-square',
        name: 'Sloane Square',
        lines: [
          'circle'
        ],
        lat: 51.49227,
        lng: -0.156377,
        contact: [
          {
            key: 'Address',
            value: 'Sloane Square Station,London Underground Ltd.,Sloane Square,London,SW1W 8BB'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUTMP',
        id: '940GZZLUTMP',
        url: 'temple',
        name: 'Temple',
        lines: [
          'circle'
        ],
        lat: 51.511006,
        lng: -0.11426,
        contact: [
          {
            key: 'Address',
            value: 'Temple Station,London Underground Ltd.,Victoria Embankment,London,WC2R 2PH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUTWH',
        id: '940GZZLUTWH',
        url: 'tower-hill',
        name: 'Tower Hill',
        lines: [
          'circle'
        ],
        lat: 51.509971,
        lng: -0.076546,
        contact: [
          {
            key: 'Address',
            value: 'Tower Hill Station,London Underground Ltd.,Trinity Square,London,EC3N 4DJ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUVIC',
        id: '940GZZLUVIC',
        url: 'victoria',
        name: 'Victoria',
        lines: [
          'circle'
        ],
        lat: 51.496359,
        lng: -0.143102,
        contact: [
          {
            key: 'Address',
            value: 'Victoria Underground Station,London Underground Ltd.,Victoria St,London,SW1E 5ND'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUWLA',
        id: '940GZZLUWLA',
        url: 'wood-lane',
        name: 'Wood Lane',
        lines: [
          'circle'
        ],
        lat: 51.509669,
        lng: -0.22453,
        contact: [
          {
            key: 'Address',
            value: 'Wood Lane Station,London Underground Ltd.,Wood Lane,London,'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUWSM',
        id: '940GZZLUWSM',
        url: 'westminster',
        name: 'Westminster',
        lines: [
          'circle'
        ],
        lat: 51.50132,
        lng: -0.124861,
        contact: [
          {
            key: 'Address',
            value: 'Westminster Station,London Underground Ltd.,Bridge St,London,SW1A 2JR'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '5'
          },
          {
            key: 'Escalators',
            value: '17'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '4'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUWSP',
        id: '940GZZLUWSP',
        url: 'westbourne-park',
        name: 'Westbourne Park',
        lines: [
          'circle'
        ],
        lat: 51.52111,
        lng: -0.201065,
        contact: [
          {
            key: 'Address',
            value: 'Westbourne Park Station,London Underground Ltd.,Western Rd,London,W11 1AB'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 0 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      }
    ]
  },
  {
    id: 'district',
    stations: [
      {
        key: '940GZZLUACT',
        id: '940GZZLUACT',
        url: 'acton-town',
        name: 'Acton Town',
        lines: [
          'district'
        ],
        lat: 51.503057,
        lng: -0.280462,
        contact: [
          {
            key: 'Address',
            value: 'Acton Town Station,London Underground Ltd.,Gunnersbury Lane,London,W3 8HN'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUADE',
        id: '940GZZLUADE',
        url: 'aldgate-east',
        name: 'Aldgate East',
        lines: [
          'district'
        ],
        lat: 51.515037,
        lng: -0.072384,
        contact: [
          {
            key: 'Address',
            value: 'Aldgate East Station,London Underground Ltd.,Whitechapel High St,London,E1 7PT'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '3'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUBBB',
        id: '940GZZLUBBB',
        url: 'bromley-by-bow',
        name: 'Bromley-by-Bow',
        lines: [
          'district'
        ],
        lat: 51.524839,
        lng: -0.011538,
        contact: [
          {
            key: 'Address',
            value: 'Bromley-By-Bow,London Underground Ltd.,Blackwell Tunnel Northern Approach,London,E3 3JJ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUBEC',
        id: '940GZZLUBEC',
        url: 'becontree',
        name: 'Becontree',
        lines: [
          'district'
        ],
        lat: 51.540331,
        lng: 0.127016,
        contact: [
          {
            key: 'Address',
            value: 'Becontree Station,London Underground Ltd.,Gale St,Dagenham,Essex,RM9 4TP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes M&F (open between 0500-1500)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUBKF',
        id: '940GZZLUBKF',
        url: 'blackfriars',
        name: 'Blackfriars',
        lines: [
          'district'
        ],
        lat: 51.511581,
        lng: -0.103659,
        contact: [
          {
            key: 'Address',
            value: 'Blackfriars Station,London Underground Ltd.,Blackfriars Road,London,EC4R 2BB'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'Escalators',
            value: '4'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 3 in ticket halls, 2 elsewhere'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUBKG',
        id: '940GZZLUBKG',
        url: 'barking',
        name: 'Barking',
        lines: [
          'district'
        ],
        lat: 51.539321,
        lng: 0.081053,
        contact: [
          {
            key: 'Address',
            value: 'Barking Station BR Station Parade,Longbridge Rd,Barking,Essex,IG11 8TU'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '3 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Photo Booths',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUBSC',
        id: '940GZZLUBSC',
        url: 'barons-court',
        name: 'Barons Court',
        lines: [
          'district'
        ],
        lat: 51.490311,
        lng: -0.213427,
        contact: [
          {
            key: 'Address',
            value: 'Barons Court Station,London Underground Ltd.,Pallister Rd,London,W14'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes - male & female coin op'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUBWR',
        id: '940GZZLUBWR',
        url: 'bow-road',
        name: 'Bow Road',
        lines: [
          'district'
        ],
        lat: 51.52694,
        lng: -0.025128,
        contact: [
          {
            key: 'Address',
            value: 'Bow Road Station,London Underground Ltd.,Bow Road,London,E3 4DH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUBWT',
        id: '940GZZLUBWT',
        url: 'bayswater',
        name: 'Bayswater',
        lines: [
          'district'
        ],
        lat: 51.512284,
        lng: -0.187938,
        contact: [
          {
            key: 'Address',
            value: 'Bayswater Station,London Underground Ltd.,Queensway,London,W2 4RH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUCST',
        id: '940GZZLUCST',
        url: 'cannon-street',
        name: 'Cannon Street',
        lines: [
          'district'
        ],
        lat: 51.51151,
        lng: -0.090432,
        contact: [
          {
            key: 'Address',
            value: 'Cannon Street Underground Station,London Underground Ltd.,Cannon St,London,EC4N 6AP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUCWP',
        id: '940GZZLUCWP',
        url: 'chiswick-park',
        name: 'Chiswick Park',
        lines: [
          'district'
        ],
        lat: 51.494627,
        lng: -0.267972,
        contact: [
          {
            key: 'Address',
            value: 'Chiswick Park Station,London Underground Ltd.,Bollo Lane,London,W4 5NE'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUDGE',
        id: '940GZZLUDGE',
        url: 'dagenham-east',
        name: 'Dagenham East',
        lines: [
          'district'
        ],
        lat: 51.544096,
        lng: 0.166017,
        contact: [
          {
            key: 'Address',
            value: 'Dagenham East Station,London Underground Ltd.,North Rainham Rd,Dagenham,Essex,RM10 8AA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes M&F (open between 0500-1500)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUDGY',
        id: '940GZZLUDGY',
        url: 'dagenham-heathway',
        name: 'Dagenham Heathway',
        lines: [
          'district'
        ],
        lat: 51.541639,
        lng: 0.147527,
        contact: [
          {
            key: 'Address',
            value: 'Dagenham Heathway Station,London Underground Ltd.,Heathway,Dagenham,Essex,RM9 5AN'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes M&F (open between 0500-1500)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUEBY',
        id: '940GZZLUEBY',
        url: 'ealing-broadway',
        name: 'Ealing Broadway',
        lines: [
          'district'
        ],
        lat: 51.515017,
        lng: -0.301457,
        contact: [
          {
            key: 'Address',
            value: 'Ealing Broadway Station,The Broadway,London,W5 2NU'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUECM',
        id: '940GZZLUECM',
        url: 'ealing-common',
        name: 'Ealing Common',
        lines: [
          'district'
        ],
        lat: 51.51014,
        lng: -0.288265,
        contact: [
          {
            key: 'Address',
            value: 'Ealing Common Station,London Underground Ltd.,Uxbridge Rd,London,W5 3LD'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUECT',
        id: '940GZZLUECT',
        url: 'earls-court',
        name: 'Earl\'s Court',
        lines: [
          'district'
        ],
        lat: 51.492063,
        lng: -0.193378,
        contact: [
          {
            key: 'Address',
            value: 'Earl\'s Court Station,London Underground Ltd.,Earl\'s Court Rd,London,SW5 9QA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '4'
          },
          {
            key: 'Escalators',
            value: '4'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '6'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUEHM',
        id: '940GZZLUEHM',
        url: 'east-ham',
        name: 'East Ham',
        lines: [
          'district'
        ],
        lat: 51.538948,
        lng: 0.051186,
        contact: [
          {
            key: 'Address',
            value: 'East Ham Station,London Underground Ltd.,High Street North,London,E6 2JA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'Local authority facility nearby'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '3'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUEMB',
        id: '940GZZLUEMB',
        url: 'embankment',
        name: 'Embankment',
        lines: [
          'district'
        ],
        lat: 51.507058,
        lng: -0.122666,
        contact: [
          {
            key: 'Address',
            value: 'Embankment Station,London Underground Ltd.,Villiers St,London,WC2N 6NS'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '10'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '1 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUEPK',
        id: '940GZZLUEPK',
        url: 'elm-park',
        name: 'Elm Park',
        lines: [
          'district'
        ],
        lat: 51.549775,
        lng: 0.19864,
        contact: [
          {
            key: 'Address',
            value: 'Elm Park Station,London Underground Ltd.,The Broadway,Hornchurch,Essex,RM12 4RW'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          }
        ]
      },
      {
        key: '940GZZLUEPY',
        id: '940GZZLUEPY',
        url: 'east-putney',
        name: 'East Putney',
        lines: [
          'district'
        ],
        lat: 51.459205,
        lng: -0.211,
        contact: [
          {
            key: 'Address',
            value: 'East Putney Station,Upper Richmond Rd,London,SW15'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUERC',
        id: '940GZZLUERC',
        url: 'edgware-road-',
        name: 'Edgware Road ',
        lines: [
          'district'
        ],
        lat: 51.519858,
        lng: -0.167832,
        contact: [
          {
            key: 'Address',
            value: 'Edgware Road Circle,London Underground Ltd.,Chapel Street,London,NW1 5DH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '3'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUFBY',
        id: '940GZZLUFBY',
        url: 'fulham-broadway',
        name: 'Fulham Broadway',
        lines: [
          'district'
        ],
        lat: 51.480081,
        lng: -0.195422,
        contact: [
          {
            key: 'Address',
            value: 'Fulham Broadway Station,London Underground Ltd.,Fulham Broadway,London,SW6 1BY'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUGBY',
        id: '940GZZLUGBY',
        url: 'gunnersbury',
        name: 'Gunnersbury',
        lines: [
          'district'
        ],
        lat: 51.491803,
        lng: -0.275267,
        contact: [
          {
            key: 'Address',
            value: 'Gunnersbury,London Overground Ltd,Chiswick High Road,LONDON,W4 4AN'
          },
          {
            key: 'PhoneNo',
            value: '0845 601 4867'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Help Points',
            value: '1 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUGTR',
        id: '940GZZLUGTR',
        url: 'gloucester-road',
        name: 'Gloucester Road',
        lines: [
          'district'
        ],
        lat: 51.494316,
        lng: -0.182658,
        contact: [
          {
            key: 'Address',
            value: 'Gloucester Road Station,London Underground Ltd.,Gloucester Rd,London,SW7 4SF'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 2 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUHCH',
        id: '940GZZLUHCH',
        url: 'hornchurch',
        name: 'Hornchurch',
        lines: [
          'district'
        ],
        lat: 51.554093,
        lng: 0.219116,
        contact: [
          {
            key: 'Address',
            value: 'Hornchurch Station,London Underground Ltd.,Station Lane,Hornchurch,Essex,RM12 6LS'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes M&F (open between 0500-1500)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUHSD',
        id: '940GZZLUHSD',
        url: 'hammersmith-',
        name: 'Hammersmith ',
        lines: [
          'district'
        ],
        lat: 51.4923,
        lng: -0.22362,
        contact: [
          {
            key: 'Address',
            value: 'Hammersmith (D & P),London Underground Ltd.,Hammersmith Broadway,London,W6 8AB'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '3'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUHSK',
        id: '940GZZLUHSK',
        url: 'high-street-kensington',
        name: 'High Street Kensington',
        lines: [
          'district'
        ],
        lat: 51.501055,
        lng: -0.192792,
        contact: [
          {
            key: 'Address',
            value: 'High Street Kensington Station,London Underground Ltd.,Kensington High St,London,W8 5SA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUKOY',
        id: '940GZZLUKOY',
        url: 'kensington-',
        name: 'Kensington ',
        lines: [
          'district'
        ],
        lat: 51.497624,
        lng: -0.210015,
        contact: [
          {
            key: 'Address',
            value: 'Kensington Olympia,Kensington Olympia Station,Olympia Way,LONDON,W14 0NE'
          },
          {
            key: 'PhoneNo',
            value: '0845 601 4867'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUKWG',
        id: '940GZZLUKWG',
        url: 'kew-gardens',
        name: 'Kew Gardens',
        lines: [
          'district'
        ],
        lat: 51.477058,
        lng: -0.285241,
        contact: [
          {
            key: 'Address',
            value: 'Kew Gardens Station,London Overground Ltd.,Station Approach,RICHMOND,TW9 3BZ'
          },
          {
            key: 'PhoneNo',
            value: '0845 601 4867'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUMED',
        id: '940GZZLUMED',
        url: 'mile-end',
        name: 'Mile End',
        lines: [
          'district'
        ],
        lat: 51.525122,
        lng: -0.03364,
        contact: [
          {
            key: 'Address',
            value: 'Mile End Station,London Underground Ltd.,Mile End Rd,London,E3 4DH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUMMT',
        id: '940GZZLUMMT',
        url: 'monument',
        name: 'Monument',
        lines: [
          'district'
        ],
        lat: 51.5107,
        lng: -0.085969,
        contact: [
          {
            key: 'Address',
            value: 'Monument Station,London Underground Ltd.,King William St,London,EC4R 9AA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUMSH',
        id: '940GZZLUMSH',
        url: 'mansion-house',
        name: 'Mansion House',
        lines: [
          'district'
        ],
        lat: 51.512117,
        lng: -0.094009,
        contact: [
          {
            key: 'Address',
            value: 'Mansion House Station,London Underground Ltd.,38 Cannon St,London,EC4N 6JD'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '5 on platforms, 0 in ticket halls, 2 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUNHG',
        id: '940GZZLUNHG',
        url: 'notting-hill-gate',
        name: 'Notting Hill Gate',
        lines: [
          'district'
        ],
        lat: 51.509128,
        lng: -0.196104,
        contact: [
          {
            key: 'Address',
            value: 'Notting Hill Gate Station,London Underground Ltd.,Notting Hill Gate,London,W11 3HT'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '3'
          }
        ]
      },
      {
        key: '940GZZLUPAC',
        id: '940GZZLUPAC',
        url: 'paddington',
        name: 'Paddington',
        lines: [
          'district'
        ],
        lat: 51.516581,
        lng: -0.175689,
        contact: [
          {
            key: 'Address',
            value: 'Paddington Underground Stations,London Underground Ltd.,Praed St,London,W2'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '3'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'Escalators',
            value: '4'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 0 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUPLW',
        id: '940GZZLUPLW',
        url: 'plaistow',
        name: 'Plaistow',
        lines: [
          'district'
        ],
        lat: 51.531341,
        lng: 0.017451,
        contact: [
          {
            key: 'Address',
            value: 'Plaistow Station,London Underground Ltd.,Plaistow Rd,London,E15'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUPSG',
        id: '940GZZLUPSG',
        url: 'parsons-green',
        name: 'Parsons Green',
        lines: [
          'district'
        ],
        lat: 51.475277,
        lng: -0.20117,
        contact: [
          {
            key: 'Address',
            value: 'Parsons Green Station,London Underground Ltd.,Parsons Green Lane,London,SW6 4HS'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUPYB',
        id: '940GZZLUPYB',
        url: 'putney-bridge',
        name: 'Putney Bridge',
        lines: [
          'district'
        ],
        lat: 51.468262,
        lng: -0.208731,
        contact: [
          {
            key: 'Address',
            value: 'Putney Bridge Station,London Underground Ltd.,Station Approach,London,SW6 3UH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLURMD',
        id: '940GZZLURMD',
        url: 'richmond',
        name: 'Richmond',
        lines: [
          'district'
        ],
        lat: 51.463237,
        lng: -0.301336,
        contact: [
          {
            key: 'Address',
            value: 'Richmond,London Underground Ltd.,The Quadrant,Richmond,TW9 1DN'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLURVP',
        id: '940GZZLURVP',
        url: 'ravenscourt-park',
        name: 'Ravenscourt Park',
        lines: [
          'district'
        ],
        lat: 51.494122,
        lng: -0.235881,
        contact: [
          {
            key: 'Address',
            value: 'Ravenscourt Park Station,London Underground Ltd.,Ravenscourt Rd,London,W6 0UG'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUSFB',
        id: '940GZZLUSFB',
        url: 'stamford-brook',
        name: 'Stamford Brook',
        lines: [
          'district'
        ],
        lat: 51.494917,
        lng: -0.245704,
        contact: [
          {
            key: 'Address',
            value: 'Stamford Brook Station,London Underground Ltd.,Goldhawk Rd,London,W6'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUSFS',
        id: '940GZZLUSFS',
        url: 'southfields',
        name: 'Southfields',
        lines: [
          'district'
        ],
        lat: 51.445073,
        lng: -0.206602,
        contact: [
          {
            key: 'Address',
            value: 'Southfields Station,Wimbledon Park Rd,London,SW18'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUSGN',
        id: '940GZZLUSGN',
        url: 'stepney-green',
        name: 'Stepney Green',
        lines: [
          'district'
        ],
        lat: 51.521858,
        lng: -0.046596,
        contact: [
          {
            key: 'Address',
            value: 'Stepney Green Station,London Underground Ltd.,Mile End Rd,London,E1 4AQ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUSJP',
        id: '940GZZLUSJP',
        url: 'st.-jamess-park',
        name: 'St. James\'s Park',
        lines: [
          'district'
        ],
        lat: 51.499544,
        lng: -0.133608,
        contact: [
          {
            key: 'Address',
            value: 'St. James\'s Park,London Underground Ltd.,Petty France,London,SW1H 0BD'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUSKS',
        id: '940GZZLUSKS',
        url: 'south-kensington',
        name: 'South Kensington',
        lines: [
          'district'
        ],
        lat: 51.494094,
        lng: -0.174138,
        contact: [
          {
            key: 'Address',
            value: 'South Kensington Station,London Underground Ltd.,Pelham St,London,SW7 2NB'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '5'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '12 on platforms, 0 in ticket halls, 4 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUSSQ',
        id: '940GZZLUSSQ',
        url: 'sloane-square',
        name: 'Sloane Square',
        lines: [
          'district'
        ],
        lat: 51.49227,
        lng: -0.156377,
        contact: [
          {
            key: 'Address',
            value: 'Sloane Square Station,London Underground Ltd.,Sloane Square,London,SW1W 8BB'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUTMP',
        id: '940GZZLUTMP',
        url: 'temple',
        name: 'Temple',
        lines: [
          'district'
        ],
        lat: 51.511006,
        lng: -0.11426,
        contact: [
          {
            key: 'Address',
            value: 'Temple Station,London Underground Ltd.,Victoria Embankment,London,WC2R 2PH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUTNG',
        id: '940GZZLUTNG',
        url: 'turnham-green',
        name: 'Turnham Green',
        lines: [
          'district'
        ],
        lat: 51.495148,
        lng: -0.254555,
        contact: [
          {
            key: 'Address',
            value: 'Turnham Green Station,London Underground Ltd.,Turnham Green Terrace,London,W4 1LR'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '1 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUTWH',
        id: '940GZZLUTWH',
        url: 'tower-hill',
        name: 'Tower Hill',
        lines: [
          'district'
        ],
        lat: 51.509971,
        lng: -0.076546,
        contact: [
          {
            key: 'Address',
            value: 'Tower Hill Station,London Underground Ltd.,Trinity Square,London,EC3N 4DJ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUUPB',
        id: '940GZZLUUPB',
        url: 'upminster-bridge',
        name: 'Upminster Bridge',
        lines: [
          'district'
        ],
        lat: 51.55856,
        lng: 0.235809,
        contact: [
          {
            key: 'Address',
            value: 'Upminster Bridge Station,London Underground Ltd.,Upminster Rd,Hornchurch,Essex,RM12 6PL'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes M&F (open between 0500-1500)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUUPK',
        id: '940GZZLUUPK',
        url: 'upton-park',
        name: 'Upton Park',
        lines: [
          'district'
        ],
        lat: 51.53534,
        lng: 0.035263,
        contact: [
          {
            key: 'Address',
            value: 'Upton Park Station,London Underground Ltd.,Green St,London,E13 9AP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUUPM',
        id: '940GZZLUUPM',
        url: 'upminster',
        name: 'Upminster',
        lines: [
          'district'
        ],
        lat: 51.559063,
        lng: 0.250882,
        contact: [
          {
            key: 'Address',
            value: 'Upminster Station NR Station Rd,Upminster,Essex,RM14 2TD'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '0 in ticket halls, 0 on platforms'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUUPY',
        id: '940GZZLUUPY',
        url: 'upney',
        name: 'Upney',
        lines: [
          'district'
        ],
        lat: 51.538372,
        lng: 0.10153,
        contact: [
          {
            key: 'Address',
            value: 'Upney Station,London Underground Ltd.,Upney Lane,Barking,Essex,IG11 9LS'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUVIC',
        id: '940GZZLUVIC',
        url: 'victoria',
        name: 'Victoria',
        lines: [
          'district'
        ],
        lat: 51.496359,
        lng: -0.143102,
        contact: [
          {
            key: 'Address',
            value: 'Victoria Underground Station,London Underground Ltd.,Victoria St,London,SW1E 5ND'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUWBN',
        id: '940GZZLUWBN',
        url: 'west-brompton',
        name: 'West Brompton',
        lines: [
          'district'
        ],
        lat: 51.487268,
        lng: -0.195599,
        contact: [
          {
            key: 'Address',
            value: 'West Brompton Station,London Underground Ltd.,Old Brompton Rd,London,SW5 9JX'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUWHM',
        id: '940GZZLUWHM',
        url: 'west-ham',
        name: 'West Ham',
        lines: [
          'district'
        ],
        lat: 51.528136,
        lng: 0.005055,
        contact: [
          {
            key: 'Address',
            value: 'West Ham Underground Station,London Underground Ltd.,Manor Rd,London,E15 3BN'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '5'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUWIM',
        id: '940GZZLUWIM',
        url: 'wimbledon',
        name: 'Wimbledon',
        lines: [
          'district'
        ],
        lat: 51.421207,
        lng: -0.206573,
        contact: [
          {
            key: 'Address',
            value: 'Wimbledon,London Underground Ltd.,The Broadway,London,SW19 7NL'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUWIP',
        id: '940GZZLUWIP',
        url: 'wimbledon-park',
        name: 'Wimbledon Park',
        lines: [
          'district'
        ],
        lat: 51.434573,
        lng: -0.199719,
        contact: [
          {
            key: 'Address',
            value: 'Wimbledon Park Station,Arthur Rd,London,SW19 '
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUWKN',
        id: '940GZZLUWKN',
        url: 'west-kensington',
        name: 'West Kensington',
        lines: [
          'district'
        ],
        lat: 51.490459,
        lng: -0.206636,
        contact: [
          {
            key: 'Address',
            value: 'West Kensington Station,London Underground Ltd.,North End Rd,London,W14 9NL'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '3'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUWPL',
        id: '940GZZLUWPL',
        url: 'whitechapel',
        name: 'Whitechapel',
        lines: [
          'district'
        ],
        lat: 51.519518,
        lng: -0.059971,
        contact: [
          {
            key: 'Address',
            value: 'Whitechapel Station,London Underground Ltd.,277 Whitechapel Rd,London,E1 1BY'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUWSM',
        id: '940GZZLUWSM',
        url: 'westminster',
        name: 'Westminster',
        lines: [
          'district'
        ],
        lat: 51.50132,
        lng: -0.124861,
        contact: [
          {
            key: 'Address',
            value: 'Westminster Station,London Underground Ltd.,Bridge St,London,SW1A 2JR'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '5'
          },
          {
            key: 'Escalators',
            value: '17'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '4'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      }
    ]
  },
  {
    id: 'hammersmith-city',
    stations: [
      {
        key: '940GZZLUADE',
        id: '940GZZLUADE',
        url: 'aldgate-east',
        name: 'Aldgate East',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.515037,
        lng: -0.072384,
        contact: [
          {
            key: 'Address',
            value: 'Aldgate East Station,London Underground Ltd.,Whitechapel High St,London,E1 7PT'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '3'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUBBB',
        id: '940GZZLUBBB',
        url: 'bromley-by-bow',
        name: 'Bromley-by-Bow',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.524839,
        lng: -0.011538,
        contact: [
          {
            key: 'Address',
            value: 'Bromley-By-Bow,London Underground Ltd.,Blackwell Tunnel Northern Approach,London,E3 3JJ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUBBN',
        id: '940GZZLUBBN',
        url: 'barbican',
        name: 'Barbican',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.520275,
        lng: -0.097993,
        contact: [
          {
            key: 'Address',
            value: 'Barbican Station,London Underground Ltd.,Aldersgate St,London,EC1A 4JA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUBKG',
        id: '940GZZLUBKG',
        url: 'barking',
        name: 'Barking',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.539321,
        lng: 0.081053,
        contact: [
          {
            key: 'Address',
            value: 'Barking Station BR Station Parade,Longbridge Rd,Barking,Essex,IG11 8TU'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '3 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Photo Booths',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUBST',
        id: '940GZZLUBST',
        url: 'baker-street',
        name: 'Baker Street',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.522883,
        lng: -0.15713,
        contact: [
          {
            key: 'Address',
            value: 'Baker Street Station Marylebone Rd,London,NW1'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '5'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUBWR',
        id: '940GZZLUBWR',
        url: 'bow-road',
        name: 'Bow Road',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.52694,
        lng: -0.025128,
        contact: [
          {
            key: 'Address',
            value: 'Bow Road Station,London Underground Ltd.,Bow Road,London,E3 4DH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUEHM',
        id: '940GZZLUEHM',
        url: 'east-ham',
        name: 'East Ham',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.538948,
        lng: 0.051186,
        contact: [
          {
            key: 'Address',
            value: 'East Ham Station,London Underground Ltd.,High Street North,London,E6 2JA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'Local authority facility nearby'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '3'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUERC',
        id: '940GZZLUERC',
        url: 'edgware-road-',
        name: 'Edgware Road ',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.519858,
        lng: -0.167832,
        contact: [
          {
            key: 'Address',
            value: 'Edgware Road Circle,London Underground Ltd.,Chapel Street,London,NW1 5DH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '3'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUESQ',
        id: '940GZZLUESQ',
        url: 'euston-square',
        name: 'Euston Square',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.525604,
        lng: -0.135829,
        contact: [
          {
            key: 'Address',
            value: 'Euston Square Station,London Underground Ltd.,Euston Rd,London,NW1 2BN'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '1 lift from street level to ticket hall and 1 lift from ticket hall to westbound platform only.'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUFCN',
        id: '940GZZLUFCN',
        url: 'farringdon',
        name: 'Farringdon',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.520252,
        lng: -0.104913,
        contact: [
          {
            key: 'Address',
            value: 'Farringdon Station,London Underground Ltd.,Cowcross St,London,EC1M 6BY'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '4'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUGHK',
        id: '940GZZLUGHK',
        url: 'goldhawk-road',
        name: 'Goldhawk Road',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.502005,
        lng: -0.226715,
        contact: [
          {
            key: 'Address',
            value: 'Goldhawk Road Station,London Underground Ltd.,Goldhawk Rd,London,W12 8EG'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUGPS',
        id: '940GZZLUGPS',
        url: 'great-portland-street',
        name: 'Great Portland Street',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.52384,
        lng: -0.144262,
        contact: [
          {
            key: 'Address',
            value: 'Great Portland Street Station,London Underground Ltd.,Euston Rd,London,NW1'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUHSC',
        id: '940GZZLUHSC',
        url: 'hammersmith-',
        name: 'Hammersmith ',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.493535,
        lng: -0.225013,
        contact: [
          {
            key: 'Address',
            value: 'Hammersmith (H & C),London Underground Ltd.,Beadon Road,London,W6 7AA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUKSX',
        id: '940GZZLUKSX',
        url: 'kings-cross-st.-pancras',
        name: 'King\'s Cross St. Pancras',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.530663,
        lng: -0.123194,
        contact: [
          {
            key: 'Address',
            value: 'King\'s Cross St. Pancras,London Underground Ltd.,Euston Road,London,N1 9AL'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '4'
          },
          {
            key: 'Lifts',
            value: '10'
          },
          {
            key: 'Escalators',
            value: '19'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '9'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          }
        ]
      },
      {
        key: '940GZZLULAD',
        id: '940GZZLULAD',
        url: 'ladbroke-grove',
        name: 'Ladbroke Grove',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.517449,
        lng: -0.210391,
        contact: [
          {
            key: 'Address',
            value: 'Ladbroke Grove Station,London Underground Ltd.,Ladbroke Grove,London,W10 6HJ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 1 in ticket halls, 4 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLULRD',
        id: '940GZZLULRD',
        url: 'latimer-road',
        name: 'Latimer Road',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.513389,
        lng: -0.217799,
        contact: [
          {
            key: 'Address',
            value: 'Latimer Road Station,London Underground Ltd.,Bramley Rd,London,W10 6SZ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 0 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLULVT',
        id: '940GZZLULVT',
        url: 'liverpool-street',
        name: 'Liverpool Street',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.517372,
        lng: -0.083182,
        contact: [
          {
            key: 'Address',
            value: 'Liverpool Street Underground Station Central,London Underground Ltd.,Liverpool Street,London,EC2M 7PP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '3'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '9'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '12 on platforms, 0 in ticket halls, 8 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '5'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          }
        ]
      },
      {
        key: '940GZZLUMED',
        id: '940GZZLUMED',
        url: 'mile-end',
        name: 'Mile End',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.525122,
        lng: -0.03364,
        contact: [
          {
            key: 'Address',
            value: 'Mile End Station,London Underground Ltd.,Mile End Rd,London,E3 4DH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUMGT',
        id: '940GZZLUMGT',
        url: 'moorgate',
        name: 'Moorgate',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.518176,
        lng: -0.088322,
        contact: [
          {
            key: 'Address',
            value: 'Moorgate Station,London Underground Ltd.,Moorfields,London,EC2Y 9AE'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUPAH',
        id: '940GZZLUPAH',
        url: 'paddington-',
        name: 'Paddington ',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.518187,
        lng: -0.178306,
        contact: [],
        facilities: [
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUPLW',
        id: '940GZZLUPLW',
        url: 'plaistow',
        name: 'Plaistow',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.531341,
        lng: 0.017451,
        contact: [
          {
            key: 'Address',
            value: 'Plaistow Station,London Underground Ltd.,Plaistow Rd,London,E15'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLURYO',
        id: '940GZZLURYO',
        url: 'royal-oak',
        name: 'Royal Oak',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.519113,
        lng: -0.188748,
        contact: [
          {
            key: 'Address',
            value: 'Royal Oak Station,London Underground Ltd.,Lord Hills Bridge,London,W2 6ET'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUSBM',
        id: '940GZZLUSBM',
        url: 'shepherds-bush-market',
        name: 'Shepherd\'s Bush Market',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.505579,
        lng: -0.226375,
        contact: [
          {
            key: 'Address',
            value: 'Shepherd\'s Bush Market,London Underground Ltd.,Uxbridge Road,London,W12 7JD'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUSGN',
        id: '940GZZLUSGN',
        url: 'stepney-green',
        name: 'Stepney Green',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.521858,
        lng: -0.046596,
        contact: [
          {
            key: 'Address',
            value: 'Stepney Green Station,London Underground Ltd.,Mile End Rd,London,E1 4AQ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUUPK',
        id: '940GZZLUUPK',
        url: 'upton-park',
        name: 'Upton Park',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.53534,
        lng: 0.035263,
        contact: [
          {
            key: 'Address',
            value: 'Upton Park Station,London Underground Ltd.,Green St,London,E13 9AP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUWHM',
        id: '940GZZLUWHM',
        url: 'west-ham',
        name: 'West Ham',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.528136,
        lng: 0.005055,
        contact: [
          {
            key: 'Address',
            value: 'West Ham Underground Station,London Underground Ltd.,Manor Rd,London,E15 3BN'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '5'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUWLA',
        id: '940GZZLUWLA',
        url: 'wood-lane',
        name: 'Wood Lane',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.509669,
        lng: -0.22453,
        contact: [
          {
            key: 'Address',
            value: 'Wood Lane Station,London Underground Ltd.,Wood Lane,London,'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUWPL',
        id: '940GZZLUWPL',
        url: 'whitechapel',
        name: 'Whitechapel',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.519518,
        lng: -0.059971,
        contact: [
          {
            key: 'Address',
            value: 'Whitechapel Station,London Underground Ltd.,277 Whitechapel Rd,London,E1 1BY'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUWSP',
        id: '940GZZLUWSP',
        url: 'westbourne-park',
        name: 'Westbourne Park',
        lines: [
          'hammersmith-city'
        ],
        lat: 51.52111,
        lng: -0.201065,
        contact: [
          {
            key: 'Address',
            value: 'Westbourne Park Station,London Underground Ltd.,Western Rd,London,W11 1AB'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 0 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      }
    ]
  },
  {
    id: 'jubilee',
    stations: [
      {
        key: '940GZZLUBMY',
        id: '940GZZLUBMY',
        url: 'bermondsey',
        name: 'Bermondsey',
        lines: [
          'jubilee'
        ],
        lat: 51.49775,
        lng: -0.063993,
        contact: [
          {
            key: 'Address',
            value: 'Bermondsey Station,London Underground Ltd.,142 - 154 Jamaica Rd,London,SE16 4RX'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '3'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUBND',
        id: '940GZZLUBND',
        url: 'bond-street',
        name: 'Bond Street',
        lines: [
          'jubilee'
        ],
        lat: 51.514304,
        lng: -0.149723,
        contact: [
          {
            key: 'Address',
            value: 'Bond Street Station,London Underground Ltd.,Oxford St,London,W1R 1FE'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '8'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUBST',
        id: '940GZZLUBST',
        url: 'baker-street',
        name: 'Baker Street',
        lines: [
          'jubilee'
        ],
        lat: 51.522883,
        lng: -0.15713,
        contact: [
          {
            key: 'Address',
            value: 'Baker Street Station Marylebone Rd,London,NW1'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '5'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUCGT',
        id: '940GZZLUCGT',
        url: 'canning-town',
        name: 'Canning Town',
        lines: [
          'jubilee'
        ],
        lat: 51.513584,
        lng: 0.008322,
        contact: [
          {
            key: 'Address',
            value: 'Canning Town Station,London Underground Ltd.,Silvertown Way,Canning Town,London,E16 1DQ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Lifts',
            value: '3'
          },
          {
            key: 'Escalators',
            value: '10'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '6'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUCPK',
        id: '940GZZLUCPK',
        url: 'canons-park',
        name: 'Canons Park',
        lines: [
          'jubilee'
        ],
        lat: 51.607701,
        lng: -0.294693,
        contact: [
          {
            key: 'Address',
            value: 'Canons Park Station,London Underground Ltd.,Whitchurch Lane,Edgware,Middx,HA8 6RN'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female, disabled/baby-changing facilities)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUCWR',
        id: '940GZZLUCWR',
        url: 'canada-water',
        name: 'Canada Water',
        lines: [
          'jubilee'
        ],
        lat: 51.497931,
        lng: -0.049405,
        contact: [
          {
            key: 'Address',
            value: 'Canada Water Station,London Underground Ltd.,Deal Porter Way,Surrey Quays,London,SE16'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '4'
          },
          {
            key: 'Escalators',
            value: '8'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUCYF',
        id: '940GZZLUCYF',
        url: 'canary-wharf',
        name: 'Canary Wharf',
        lines: [
          'jubilee'
        ],
        lat: 51.503488,
        lng: -0.018246,
        contact: [
          {
            key: 'Address',
            value: 'Canary Wharf Station,London Underground Ltd.,Heron Quays Road,Canary Wharf,London,E14 4HJ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '3'
          },
          {
            key: 'Escalators',
            value: '20'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '1 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUDOH',
        id: '940GZZLUDOH',
        url: 'dollis-hill',
        name: 'Dollis Hill',
        lines: [
          'jubilee'
        ],
        lat: 51.551955,
        lng: -0.239068,
        contact: [
          {
            key: 'Address',
            value: 'Dollis Hill Station,London Underground Ltd.,Hamilton Rd,London,NW10 5NB'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female, disabled/baby-changing facilities)'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUFYR',
        id: '940GZZLUFYR',
        url: 'finchley-road',
        name: 'Finchley Road',
        lines: [
          'jubilee'
        ],
        lat: 51.546825,
        lng: -0.179845,
        contact: [
          {
            key: 'Address',
            value: 'Finchley Road Underground Station,London Underground Ltd.,Finchley Road,London,NW3 6OP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female, disabled/baby-changing facilities)'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUGPK',
        id: '940GZZLUGPK',
        url: 'green-park',
        name: 'Green Park',
        lines: [
          'jubilee'
        ],
        lat: 51.506947,
        lng: -0.142787,
        contact: [
          {
            key: 'Address',
            value: 'Green Park Station,London Underground Ltd.,Piccadilly,London,W1J 9DZ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '5'
          },
          {
            key: 'Escalators',
            value: '11'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUKBN',
        id: '940GZZLUKBN',
        url: 'kilburn',
        name: 'Kilburn',
        lines: [
          'jubilee'
        ],
        lat: 51.547183,
        lng: -0.204248,
        contact: [
          {
            key: 'Address',
            value: 'Kilburn Station,London Underground Ltd.,Shootup Hill,London,NW6 7QL'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female, disabled/baby-changing facilities)'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUKBY',
        id: '940GZZLUKBY',
        url: 'kingsbury',
        name: 'Kingsbury',
        lines: [
          'jubilee'
        ],
        lat: 51.584845,
        lng: -0.27879,
        contact: [
          {
            key: 'Address',
            value: 'Kingsbury Station,London Underground Ltd.,Kingsbury Rd,London,NW9 9EG'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female, disabled/baby-changing facilities)'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLULNB',
        id: '940GZZLULNB',
        url: 'london-bridge',
        name: 'London Bridge',
        lines: [
          'jubilee'
        ],
        lat: 51.505721,
        lng: -0.088873,
        contact: [
          {
            key: 'Address',
            value: 'London Bridge Underground Station,London Underground Ltd.,21 Duke St Hill,London,SE1 2SW'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Lifts',
            value: '3'
          },
          {
            key: 'Escalators',
            value: '17'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '4'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          }
        ]
      },
      {
        key: '940GZZLUNDN',
        id: '940GZZLUNDN',
        url: 'neasden',
        name: 'Neasden',
        lines: [
          'jubilee'
        ],
        lat: 51.553986,
        lng: -0.249837,
        contact: [
          {
            key: 'Address',
            value: 'Neasden Station,London Underground Ltd.,Neasden Lane,London,NW10 1PH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female, disabled/baby-changing facilities)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUNGW',
        id: '940GZZLUNGW',
        url: 'north-greenwich',
        name: 'North Greenwich',
        lines: [
          'jubilee'
        ],
        lat: 51.50047,
        lng: 0.004287,
        contact: [
          {
            key: 'Address',
            value: 'North Greenwich Station,London Underground Ltd.,5 Millenium Way,London,SE10 0PH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '4'
          },
          {
            key: 'Escalators',
            value: '9'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '6 on platforms, 4 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '3'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUQBY',
        id: '940GZZLUQBY',
        url: 'queensbury',
        name: 'Queensbury',
        lines: [
          'jubilee'
        ],
        lat: 51.594188,
        lng: -0.286219,
        contact: [
          {
            key: 'Address',
            value: 'Queensbury Station,London Underground Ltd.,Cumberland Rd,Harrow,Middx,HA8 5NP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female, disabled/baby-changing facilities)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUSJW',
        id: '940GZZLUSJW',
        url: 'st.-johns-wood',
        name: 'St. John\'s Wood',
        lines: [
          'jubilee'
        ],
        lat: 51.534521,
        lng: -0.173948,
        contact: [
          {
            key: 'Address',
            value: 'St. John\'s Wood,London Underground Ltd.,Wellington Road,London,NW8 6DN'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUSTD',
        id: '940GZZLUSTD',
        url: 'stratford',
        name: 'Stratford',
        lines: [
          'jubilee'
        ],
        lat: 51.541806,
        lng: -0.003458,
        contact: [
          {
            key: 'Address',
            value: 'Stratford Station BR Station St,London,E15 1DE'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '5'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '8'
          },
          {
            key: 'Cash Machines',
            value: '4'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUSTM',
        id: '940GZZLUSTM',
        url: 'stanmore',
        name: 'Stanmore',
        lines: [
          'jubilee'
        ],
        lat: 51.619839,
        lng: -0.303266,
        contact: [
          {
            key: 'Address',
            value: 'Stanmore Station,London Underground Ltd.,London Rd,Stanmore,Middx,HA7 4PD'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female, disabled/baby-changing facilities)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          },
          {
            key: 'ASDA Click and Collect',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUSWC',
        id: '940GZZLUSWC',
        url: 'swiss-cottage',
        name: 'Swiss Cottage',
        lines: [
          'jubilee'
        ],
        lat: 51.543681,
        lng: -0.174894,
        contact: [
          {
            key: 'Address',
            value: 'Swiss Cottage Station,London Underground Ltd.,Finchley Rd,London,NW3 6HY'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUSWK',
        id: '940GZZLUSWK',
        url: 'southwark',
        name: 'Southwark',
        lines: [
          'jubilee'
        ],
        lat: 51.50427,
        lng: -0.105331,
        contact: [
          {
            key: 'Address',
            value: 'Southwark Station,London Underground Ltd.,68 - 70 Blackfriars Rd,London,SE1 8JZ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'Escalators',
            value: '8'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUWHM',
        id: '940GZZLUWHM',
        url: 'west-ham',
        name: 'West Ham',
        lines: [
          'jubilee'
        ],
        lat: 51.528136,
        lng: 0.005055,
        contact: [
          {
            key: 'Address',
            value: 'West Ham Underground Station,London Underground Ltd.,Manor Rd,London,E15 3BN'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '5'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUWHP',
        id: '940GZZLUWHP',
        url: 'west-hampstead',
        name: 'West Hampstead',
        lines: [
          'jubilee'
        ],
        lat: 51.546638,
        lng: -0.191059,
        contact: [
          {
            key: 'Address',
            value: 'West Hampstead Underground Station,London Underground Ltd.,West End Lane,London,NW6 2LS'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female, disabled/baby-changing facilities)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUWIG',
        id: '940GZZLUWIG',
        url: 'willesden-green',
        name: 'Willesden Green',
        lines: [
          'jubilee'
        ],
        lat: 51.549146,
        lng: -0.221537,
        contact: [
          {
            key: 'Address',
            value: 'Willesden Green Station,London Underground Ltd.,Walm Lane,London,NW2 4QT'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female, disabled/baby-changing facilities)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUWLO',
        id: '940GZZLUWLO',
        url: 'waterloo',
        name: 'Waterloo',
        lines: [
          'jubilee'
        ],
        lat: 51.503299,
        lng: -0.11478,
        contact: [
          {
            key: 'Address',
            value: 'Waterloo Underground Station,London Underground Ltd.,York Rd,London,SE1 7ND'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '3'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '23'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '6'
          },
          {
            key: 'Cash Machines',
            value: '4'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          }
        ]
      },
      {
        key: '940GZZLUWSM',
        id: '940GZZLUWSM',
        url: 'westminster',
        name: 'Westminster',
        lines: [
          'jubilee'
        ],
        lat: 51.50132,
        lng: -0.124861,
        contact: [
          {
            key: 'Address',
            value: 'Westminster Station,London Underground Ltd.,Bridge St,London,SW1A 2JR'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '5'
          },
          {
            key: 'Escalators',
            value: '17'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '4'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUWYP',
        id: '940GZZLUWYP',
        url: 'wembley-park',
        name: 'Wembley Park',
        lines: [
          'jubilee'
        ],
        lat: 51.563198,
        lng: -0.279262,
        contact: [
          {
            key: 'Address',
            value: 'Wembley Park Station,London Underground Ltd.,Bridge Road,Wembley,Middlesex,HA9 9AA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female, disabled/baby-changing facilities)'
          },
          {
            key: 'Lifts',
            value: '5'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      }
    ]
  },
  {
    id: 'metropolitan',
    stations: [
      {
        key: '940GZZLUALD',
        id: '940GZZLUALD',
        url: 'aldgate',
        name: 'Aldgate',
        lines: [
          'metropolitan'
        ],
        lat: 51.514246,
        lng: -0.075689,
        contact: [
          {
            key: 'Address',
            value: 'Aldgate Station,London Underground Ltd.,Aldgate High St,London,EC3N 1AH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUAMS',
        id: '940GZZLUAMS',
        url: 'amersham',
        name: 'Amersham',
        lines: [
          'metropolitan'
        ],
        lat: 51.674126,
        lng: -0.607714,
        contact: [
          {
            key: 'Address',
            value: 'Amersham Station,Stn Approach,Amersham,Bucks HP6 5AZ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Boarding Ramp',
            value: 'yes'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUBBN',
        id: '940GZZLUBBN',
        url: 'barbican',
        name: 'Barbican',
        lines: [
          'metropolitan'
        ],
        lat: 51.520275,
        lng: -0.097993,
        contact: [
          {
            key: 'Address',
            value: 'Barbican Station,London Underground Ltd.,Aldersgate St,London,EC1A 4JA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUBST',
        id: '940GZZLUBST',
        url: 'baker-street',
        name: 'Baker Street',
        lines: [
          'metropolitan'
        ],
        lat: 51.522883,
        lng: -0.15713,
        contact: [
          {
            key: 'Address',
            value: 'Baker Street Station Marylebone Rd,London,NW1'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '5'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUCAL',
        id: '940GZZLUCAL',
        url: 'chalfont-&-latimer',
        name: 'Chalfont & Latimer',
        lines: [
          'metropolitan'
        ],
        lat: 51.667985,
        lng: -0.560689,
        contact: [
          {
            key: 'Address',
            value: 'Chalfont & Latimer Station,London Underground Ltd.,Station Approach,Little Chalfont,Amersham,Bucks,HP7 9PR'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUCSM',
        id: '940GZZLUCSM',
        url: 'chesham',
        name: 'Chesham',
        lines: [
          'metropolitan'
        ],
        lat: 51.705208,
        lng: -0.611247,
        contact: [
          {
            key: 'Address',
            value: 'Chesham Station,London Underground Ltd.,Station Approach,Chesham,Bucks,HP5 1DH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUCXY',
        id: '940GZZLUCXY',
        url: 'croxley',
        name: 'Croxley',
        lines: [
          'metropolitan'
        ],
        lat: 51.647044,
        lng: -0.441718,
        contact: [
          {
            key: 'Address',
            value: 'Croxley Station,London Underground Ltd.,Watford Road,Rickmansworth,Herts,WD3 3DY'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUCYD',
        id: '940GZZLUCYD',
        url: 'chorleywood',
        name: 'Chorleywood',
        lines: [
          'metropolitan'
        ],
        lat: 51.654358,
        lng: -0.518461,
        contact: [
          {
            key: 'Address',
            value: 'Chorleywood Station,London Underground Ltd.,Station Approach,Chorleywood,Rickmansworth,Herts WD3 5ND'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUEAE',
        id: '940GZZLUEAE',
        url: 'eastcote',
        name: 'Eastcote',
        lines: [
          'metropolitan'
        ],
        lat: 51.576506,
        lng: -0.397373,
        contact: [
          {
            key: 'Address',
            value: 'Eastcote Station,London Underground Ltd.,Field End Rd,Ruislip,Middx,HA5 1QZ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUESQ',
        id: '940GZZLUESQ',
        url: 'euston-square',
        name: 'Euston Square',
        lines: [
          'metropolitan'
        ],
        lat: 51.525604,
        lng: -0.135829,
        contact: [
          {
            key: 'Address',
            value: 'Euston Square Station,London Underground Ltd.,Euston Rd,London,NW1 2BN'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '1 lift from street level to ticket hall and 1 lift from ticket hall to westbound platform only.'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUFCN',
        id: '940GZZLUFCN',
        url: 'farringdon',
        name: 'Farringdon',
        lines: [
          'metropolitan'
        ],
        lat: 51.520252,
        lng: -0.104913,
        contact: [
          {
            key: 'Address',
            value: 'Farringdon Station,London Underground Ltd.,Cowcross St,London,EC1M 6BY'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '4'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUFYR',
        id: '940GZZLUFYR',
        url: 'finchley-road',
        name: 'Finchley Road',
        lines: [
          'metropolitan'
        ],
        lat: 51.546825,
        lng: -0.179845,
        contact: [
          {
            key: 'Address',
            value: 'Finchley Road Underground Station,London Underground Ltd.,Finchley Road,London,NW3 6OP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female, disabled/baby-changing facilities)'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUGPS',
        id: '940GZZLUGPS',
        url: 'great-portland-street',
        name: 'Great Portland Street',
        lines: [
          'metropolitan'
        ],
        lat: 51.52384,
        lng: -0.144262,
        contact: [
          {
            key: 'Address',
            value: 'Great Portland Street Station,London Underground Ltd.,Euston Rd,London,NW1'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUHGD',
        id: '940GZZLUHGD',
        url: 'hillingdon',
        name: 'Hillingdon',
        lines: [
          'metropolitan'
        ],
        lat: 51.553715,
        lng: -0.449828,
        contact: [
          {
            key: 'Address',
            value: 'Hillingdon Station,London Underground Ltd.,Long Lane,Hillingdon,Uxbridge,Middlesex,UB10 9NR'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'Escalators',
            value: 'yes (disabled only)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUHOH',
        id: '940GZZLUHOH',
        url: 'harrow-on-the-hill',
        name: 'Harrow-on-the-Hill',
        lines: [
          'metropolitan'
        ],
        lat: 51.579195,
        lng: -0.337225,
        contact: [],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUICK',
        id: '940GZZLUICK',
        url: 'ickenham',
        name: 'Ickenham',
        lines: [
          'metropolitan'
        ],
        lat: 51.56177,
        lng: -0.442225,
        contact: [
          {
            key: 'Address',
            value: 'Ickenham Station,London Underground Ltd.,Glebe Avenue,Uxbridge,Middx,UB10 8PD'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUKSX',
        id: '940GZZLUKSX',
        url: 'kings-cross-st.-pancras',
        name: 'King\'s Cross St. Pancras',
        lines: [
          'metropolitan'
        ],
        lat: 51.530663,
        lng: -0.123194,
        contact: [
          {
            key: 'Address',
            value: 'King\'s Cross St. Pancras,London Underground Ltd.,Euston Road,London,N1 9AL'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '4'
          },
          {
            key: 'Lifts',
            value: '10'
          },
          {
            key: 'Escalators',
            value: '19'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '9'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          }
        ]
      },
      {
        key: '940GZZLULVT',
        id: '940GZZLULVT',
        url: 'liverpool-street',
        name: 'Liverpool Street',
        lines: [
          'metropolitan'
        ],
        lat: 51.517372,
        lng: -0.083182,
        contact: [
          {
            key: 'Address',
            value: 'Liverpool Street Underground Station Central,London Underground Ltd.,Liverpool Street,London,EC2M 7PP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '3'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '9'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '12 on platforms, 0 in ticket halls, 8 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '5'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          }
        ]
      },
      {
        key: '940GZZLUMGT',
        id: '940GZZLUMGT',
        url: 'moorgate',
        name: 'Moorgate',
        lines: [
          'metropolitan'
        ],
        lat: 51.518176,
        lng: -0.088322,
        contact: [
          {
            key: 'Address',
            value: 'Moorgate Station,London Underground Ltd.,Moorfields,London,EC2Y 9AE'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUMPK',
        id: '940GZZLUMPK',
        url: 'moor-park',
        name: 'Moor Park',
        lines: [
          'metropolitan'
        ],
        lat: 51.629845,
        lng: -0.432454,
        contact: [
          {
            key: 'Address',
            value: 'Moor Park Station,London Underground Ltd.,Sandy Lodge Lane,Rickmansworth,Herts,HA6 2JQ.'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUNHA',
        id: '940GZZLUNHA',
        url: 'north-harrow',
        name: 'North Harrow',
        lines: [
          'metropolitan'
        ],
        lat: 51.584872,
        lng: -0.362408,
        contact: [
          {
            key: 'Address',
            value: 'North Harrow Station,London Underground Ltd.,Station Rd,North Harrow,Middx,HA2 7SR'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '9 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUNKP',
        id: '940GZZLUNKP',
        url: 'northwick-park',
        name: 'Northwick Park',
        lines: [
          'metropolitan'
        ],
        lat: 51.578481,
        lng: -0.318056,
        contact: [
          {
            key: 'Address',
            value: 'Northwick Park Station,London Underground Ltd.,Northwick Avenue,Harrow,Middx,HA3 0AT'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUNOW',
        id: '940GZZLUNOW',
        url: 'northwood',
        name: 'Northwood',
        lines: [
          'metropolitan'
        ],
        lat: 51.611053,
        lng: -0.423829,
        contact: [
          {
            key: 'Address',
            value: 'Northwood Station,London Underground Ltd.,Station Approach,Green Lane,Northwood,Middx,HA6 2XL'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '12 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUNWH',
        id: '940GZZLUNWH',
        url: 'northwood-hills',
        name: 'Northwood Hills',
        lines: [
          'metropolitan'
        ],
        lat: 51.600572,
        lng: -0.409464,
        contact: [
          {
            key: 'Address',
            value: 'Northwood Hills Station,London Underground Ltd.,Joel St,Northwood,Middx,HA6 1NZ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '10 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUPNR',
        id: '940GZZLUPNR',
        url: 'pinner',
        name: 'Pinner',
        lines: [
          'metropolitan'
        ],
        lat: 51.592901,
        lng: -0.381161,
        contact: [
          {
            key: 'Address',
            value: 'Pinner Station,London Underground Ltd.,Station Approach,Pinner,Middx,HA5 5LZ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '15 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUPRD',
        id: '940GZZLUPRD',
        url: 'preston-road',
        name: 'Preston Road',
        lines: [
          'metropolitan'
        ],
        lat: 51.571972,
        lng: -0.295107,
        contact: [
          {
            key: 'Address',
            value: 'Preston Road Station,London Underground Ltd.,Preston Rd,Wembley,Middx,HA3 0PS'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLURKW',
        id: '940GZZLURKW',
        url: 'rickmansworth',
        name: 'Rickmansworth',
        lines: [
          'metropolitan'
        ],
        lat: 51.640207,
        lng: -0.473703,
        contact: [
          {
            key: 'Address',
            value: 'Rickmansworth Station,London Underground Ltd.,Station Approach,Rickmansworth,Herts,WD3 1QY'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLURSM',
        id: '940GZZLURSM',
        url: 'ruislip-manor',
        name: 'Ruislip Manor',
        lines: [
          'metropolitan'
        ],
        lat: 51.573202,
        lng: -0.412973,
        contact: [
          {
            key: 'Address',
            value: 'Ruislip Manor Station,London Underground Ltd.,Victoria Rd,Ruislip,Middx,HA4 9AA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLURSP',
        id: '940GZZLURSP',
        url: 'ruislip',
        name: 'Ruislip',
        lines: [
          'metropolitan'
        ],
        lat: 51.571354,
        lng: -0.421898,
        contact: [
          {
            key: 'Address',
            value: 'Ruislip Station,London Underground Ltd.,Station Approach,Ruislip,Middx,HA4 8LD'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLURYL',
        id: '940GZZLURYL',
        url: 'rayners-lane',
        name: 'Rayners Lane',
        lines: [
          'metropolitan'
        ],
        lat: 51.575147,
        lng: -0.371127,
        contact: [
          {
            key: 'Address',
            value: 'Rayners Lane Station,London Underground Ltd.,Alexandra Avenue,Harrow,HA5 5EG,Middx'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUUXB',
        id: '940GZZLUUXB',
        url: 'uxbridge',
        name: 'Uxbridge',
        lines: [
          'metropolitan'
        ],
        lat: 51.546565,
        lng: -0.477949,
        contact: [
          {
            key: 'Address',
            value: 'Uxbridge Station,London Underground Ltd.,High St,Uxbridge,Middx,UB8 1JZ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUWAF',
        id: '940GZZLUWAF',
        url: 'watford',
        name: 'Watford',
        lines: [
          'metropolitan'
        ],
        lat: 51.657446,
        lng: -0.417377,
        contact: [
          {
            key: 'Address',
            value: 'Watford Station,London Underground Ltd.,Cassiobury Park Avenue,Watford,Herts,WD18 7LE'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '7 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUWHW',
        id: '940GZZLUWHW',
        url: 'west-harrow',
        name: 'West Harrow',
        lines: [
          'metropolitan'
        ],
        lat: 51.57971,
        lng: -0.3534,
        contact: [
          {
            key: 'Address',
            value: 'West Harrow Station,London Underground Ltd.,Vaughan Rd,Harrow,Middx,HA1 4HE'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUWIG',
        id: '940GZZLUWIG',
        url: 'willesden-green',
        name: 'Willesden Green',
        lines: [
          'metropolitan'
        ],
        lat: 51.549146,
        lng: -0.221537,
        contact: [
          {
            key: 'Address',
            value: 'Willesden Green Station,London Underground Ltd.,Walm Lane,London,NW2 4QT'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female, disabled/baby-changing facilities)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUWYP',
        id: '940GZZLUWYP',
        url: 'wembley-park',
        name: 'Wembley Park',
        lines: [
          'metropolitan'
        ],
        lat: 51.563198,
        lng: -0.279262,
        contact: [
          {
            key: 'Address',
            value: 'Wembley Park Station,London Underground Ltd.,Bridge Road,Wembley,Middlesex,HA9 9AA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female, disabled/baby-changing facilities)'
          },
          {
            key: 'Lifts',
            value: '5'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      }
    ]
  },
  {
    id: 'northern',
    stations: [
      {
        key: '940GZZLUACY',
        id: '940GZZLUACY',
        url: 'archway',
        name: 'Archway',
        lines: [
          'northern'
        ],
        lat: 51.565478,
        lng: -0.134819,
        contact: [
          {
            key: 'Address',
            value: 'Archway Station,London Underground Ltd.,Junction Rd,London,N19 5RQ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUAGL',
        id: '940GZZLUAGL',
        url: 'angel',
        name: 'Angel',
        lines: [
          'northern'
        ],
        lat: 51.532796,
        lng: -0.105992,
        contact: [
          {
            key: 'Address',
            value: 'Angel Station,London Underground Ltd.,High Street,London,N1 9LQ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '5 on platforms, 1 in ticket halls, 4 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUBLM',
        id: '940GZZLUBLM',
        url: 'balham',
        name: 'Balham',
        lines: [
          'northern'
        ],
        lat: 51.443288,
        lng: -0.152997,
        contact: [
          {
            key: 'Address',
            value: 'Balham Underground Station,London Underground Ltd.,Balham High Rd,London,SW12 9BW'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '5 on platforms, 0 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUBNK',
        id: '940GZZLUBNK',
        url: 'bank',
        name: 'Bank',
        lines: [
          'northern'
        ],
        lat: 51.512884,
        lng: -0.091397,
        contact: [
          {
            key: 'Address',
            value: 'Bank/Monument Complex,London Underground Ltd.,Princes St,London,EC3V 3LA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '5'
          },
          {
            key: 'Escalators',
            value: '15'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '10 on platforms, 1 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUBOR',
        id: '940GZZLUBOR',
        url: 'borough',
        name: 'Borough',
        lines: [
          'northern'
        ],
        lat: 51.501199,
        lng: -0.09337,
        contact: [
          {
            key: 'Address',
            value: 'Borough Station,London Underground Ltd.,Borough High St,London,SE1 1JX'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUBTK',
        id: '940GZZLUBTK',
        url: 'burnt-oak',
        name: 'Burnt Oak',
        lines: [
          'northern'
        ],
        lat: 51.602774,
        lng: -0.264048,
        contact: [
          {
            key: 'Address',
            value: 'Burnt Oak Station,London Underground Ltd.,Watling Avenue,Edgware,Middx,HA8 0LA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '3'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUBTX',
        id: '940GZZLUBTX',
        url: 'brent-cross',
        name: 'Brent Cross',
        lines: [
          'northern'
        ],
        lat: 51.57665,
        lng: -0.213622,
        contact: [
          {
            key: 'Address',
            value: 'Brent Cross Station,London Underground Ltd.,Highfield Avenue,London,NW11 9UA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUBZP',
        id: '940GZZLUBZP',
        url: 'belsize-park',
        name: 'Belsize Park',
        lines: [
          'northern'
        ],
        lat: 51.550529,
        lng: -0.164783,
        contact: [
          {
            key: 'Address',
            value: 'Belsize Park Station,London Underground Ltd.,Haverstock Hill,London,NW3 2AL'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '3'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUCFM',
        id: '940GZZLUCFM',
        url: 'chalk-farm',
        name: 'Chalk Farm',
        lines: [
          'northern'
        ],
        lat: 51.544118,
        lng: -0.153388,
        contact: [
          {
            key: 'Address',
            value: 'Chalk Farm Station,London Underground Ltd.,Adelaide Rd,London,NW3 2BP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUCHX',
        id: '940GZZLUCHX',
        url: 'charing-cross',
        name: 'Charing Cross',
        lines: [
          'northern'
        ],
        lat: 51.50741,
        lng: -0.127277,
        contact: [
          {
            key: 'Address',
            value: 'Charing Cross Underground Station,London Underground Ltd.,Trafalgar Square,London,WC2N 5DR'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Escalators',
            value: '10'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUCND',
        id: '940GZZLUCND',
        url: 'colindale',
        name: 'Colindale',
        lines: [
          'northern'
        ],
        lat: 51.595424,
        lng: -0.249919,
        contact: [
          {
            key: 'Address',
            value: 'Colindale Station,London Underground Ltd.,Colindale Avenue,London,NW9 5HR'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUCPC',
        id: '940GZZLUCPC',
        url: 'clapham-common',
        name: 'Clapham Common',
        lines: [
          'northern'
        ],
        lat: 51.461742,
        lng: -0.138317,
        contact: [
          {
            key: 'Address',
            value: 'Clapham Common Station,London Underground Ltd.,The Pavement,London,SW4 7AJ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '5 on platforms, 1 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUCPN',
        id: '940GZZLUCPN',
        url: 'clapham-north',
        name: 'Clapham North',
        lines: [
          'northern'
        ],
        lat: 51.465135,
        lng: -0.130016,
        contact: [
          {
            key: 'Address',
            value: 'Clapham North Station,London Underground Ltd.,Clapham High St,London,SW4 7TS'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '5 on platforms, 1 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUCPS',
        id: '940GZZLUCPS',
        url: 'clapham-south',
        name: 'Clapham South',
        lines: [
          'northern'
        ],
        lat: 51.452654,
        lng: -0.147582,
        contact: [
          {
            key: 'Address',
            value: 'Clapham South Station,London Underground Ltd.,Balham Hill,London,SW12 9DU'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '5 on platforms, 1 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUCSD',
        id: '940GZZLUCSD',
        url: 'colliers-wood',
        name: 'Colliers Wood',
        lines: [
          'northern'
        ],
        lat: 51.41816,
        lng: -0.178086,
        contact: [
          {
            key: 'Address',
            value: 'Colliers Wood Station,London Underground Ltd.,Colliers Wood High St,London,SW19 2HR'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUCTN',
        id: '940GZZLUCTN',
        url: 'camden-town',
        name: 'Camden Town',
        lines: [
          'northern'
        ],
        lat: 51.539292,
        lng: -0.14274,
        contact: [
          {
            key: 'Address',
            value: 'Camden Town Station,London Underground Ltd.,Camden High St,London,NW1 8NH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUEAC',
        id: '940GZZLUEAC',
        url: 'elephant-&-castle',
        name: 'Elephant & Castle',
        lines: [
          'northern'
        ],
        lat: 51.494536,
        lng: -0.100606,
        contact: [
          {
            key: 'Address',
            value: 'Elephant & Castle Underground Station,London Underground Ltd.,London Rd,London,SE1 6LW'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Lifts',
            value: '5'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUEFY',
        id: '940GZZLUEFY',
        url: 'east-finchley',
        name: 'East Finchley',
        lines: [
          'northern'
        ],
        lat: 51.587131,
        lng: -0.165012,
        contact: [
          {
            key: 'Address',
            value: 'East Finchley Station,London Underground Ltd.,High Rd,London,N2 0NW'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          },
          {
            key: 'ASDA Click and Collect',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUEGW',
        id: '940GZZLUEGW',
        url: 'edgware',
        name: 'Edgware',
        lines: [
          'northern'
        ],
        lat: 51.613653,
        lng: -0.274928,
        contact: [
          {
            key: 'Address',
            value: 'Edgware Station,London Underground Ltd.,Station Rd,Edgware,Middx,HA8 7AW'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUEMB',
        id: '940GZZLUEMB',
        url: 'embankment',
        name: 'Embankment',
        lines: [
          'northern'
        ],
        lat: 51.507058,
        lng: -0.122666,
        contact: [
          {
            key: 'Address',
            value: 'Embankment Station,London Underground Ltd.,Villiers St,London,WC2N 6NS'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '10'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '1 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUEUS',
        id: '940GZZLUEUS',
        url: 'euston',
        name: 'Euston',
        lines: [
          'northern'
        ],
        lat: 51.528089,
        lng: -0.132066,
        contact: [
          {
            key: 'Address',
            value: 'Euston Underground Station,London Underground Ltd.,Eversholt St,London,NW1 2DU'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Escalators',
            value: '10'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUFYC',
        id: '940GZZLUFYC',
        url: 'finchley-central',
        name: 'Finchley Central',
        lines: [
          'northern'
        ],
        lat: 51.600921,
        lng: -0.192527,
        contact: [
          {
            key: 'Address',
            value: 'Finchley Central Station,London Underground Ltd.,Regents Park Road,London,N3 2RY'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes Male/Female'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          },
          {
            key: 'Amazon Lockers',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUGDG',
        id: '940GZZLUGDG',
        url: 'goodge-street',
        name: 'Goodge Street',
        lines: [
          'northern'
        ],
        lat: 51.520599,
        lng: -0.134361,
        contact: [
          {
            key: 'Address',
            value: 'Goodge Street Station,London Underground Ltd.,75 Tottenham Court Rd,London,W1P 9PA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '4'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUGGN',
        id: '940GZZLUGGN',
        url: 'golders-green',
        name: 'Golders Green',
        lines: [
          'northern'
        ],
        lat: 51.572259,
        lng: -0.194039,
        contact: [
          {
            key: 'Address',
            value: 'Golders Green Station,London Underground Ltd.,North End Rd,London,NW11 7RN'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUHBT',
        id: '940GZZLUHBT',
        url: 'high-barnet',
        name: 'High Barnet',
        lines: [
          'northern'
        ],
        lat: 51.650541,
        lng: -0.194298,
        contact: [
          {
            key: 'Address',
            value: 'High Barnet Station,London Underground Ltd.,Barnet Hill,Barnet,Herts,EN5 5RP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          },
          {
            key: 'ASDA Click and Collect',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUHCL',
        id: '940GZZLUHCL',
        url: 'hendon-central',
        name: 'Hendon Central',
        lines: [
          'northern'
        ],
        lat: 51.583301,
        lng: -0.226424,
        contact: [
          {
            key: 'Address',
            value: 'Hendon Central Station,London Underground Ltd.,Queens Rd,London,NW4 3AS'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUHGT',
        id: '940GZZLUHGT',
        url: 'highgate',
        name: 'Highgate',
        lines: [
          'northern'
        ],
        lat: 51.577532,
        lng: -0.145857,
        contact: [
          {
            key: 'Address',
            value: 'Highgate Station,London Underground Ltd.,Archway Rd,London,N6'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '3'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Car park',
            value: 'yes'
          },
          {
            key: 'ASDA Click and Collect',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUHTD',
        id: '940GZZLUHTD',
        url: 'hampstead',
        name: 'Hampstead',
        lines: [
          'northern'
        ],
        lat: 51.556239,
        lng: -0.177464,
        contact: [
          {
            key: 'Address',
            value: 'Hampstead Station,London Underground Ltd.,Hampstead High St,London,NW3 1QG'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '4'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUKNG',
        id: '940GZZLUKNG',
        url: 'kennington',
        name: 'Kennington',
        lines: [
          'northern'
        ],
        lat: 51.488337,
        lng: -0.105963,
        contact: [
          {
            key: 'Address',
            value: 'Kennington Station,London Underground Ltd.,Kennington Park Rd,London,SE11 4QJ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUKSH',
        id: '940GZZLUKSH',
        url: 'kentish-town',
        name: 'Kentish Town',
        lines: [
          'northern'
        ],
        lat: 51.550312,
        lng: -0.140733,
        contact: [
          {
            key: 'Address',
            value: 'Kentish Town Underground Station,London Underground Ltd.,Kentish Town Rd,London,NW5 2AA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUKSX',
        id: '940GZZLUKSX',
        url: 'kings-cross-st.-pancras',
        name: 'King\'s Cross St. Pancras',
        lines: [
          'northern'
        ],
        lat: 51.530663,
        lng: -0.123194,
        contact: [
          {
            key: 'Address',
            value: 'King\'s Cross St. Pancras,London Underground Ltd.,Euston Road,London,N1 9AL'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '4'
          },
          {
            key: 'Lifts',
            value: '10'
          },
          {
            key: 'Escalators',
            value: '19'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '9'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          }
        ]
      },
      {
        key: '940GZZLULNB',
        id: '940GZZLULNB',
        url: 'london-bridge',
        name: 'London Bridge',
        lines: [
          'northern'
        ],
        lat: 51.505721,
        lng: -0.088873,
        contact: [
          {
            key: 'Address',
            value: 'London Bridge Underground Station,London Underground Ltd.,21 Duke St Hill,London,SE1 2SW'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Lifts',
            value: '3'
          },
          {
            key: 'Escalators',
            value: '17'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '4'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          }
        ]
      },
      {
        key: '940GZZLULSQ',
        id: '940GZZLULSQ',
        url: 'leicester-square',
        name: 'Leicester Square',
        lines: [
          'northern'
        ],
        lat: 51.511386,
        lng: -0.128426,
        contact: [
          {
            key: 'Address',
            value: 'Leicester Square Station,London Underground Ltd.,Cranbourn St,London,WC2H 0AP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUMDN',
        id: '940GZZLUMDN',
        url: 'morden',
        name: 'Morden',
        lines: [
          'northern'
        ],
        lat: 51.402142,
        lng: -0.194839,
        contact: [
          {
            key: 'Address',
            value: 'Morden Underground Station,London Underground Ltd.,London Rd,Morden,Surrey,SM4 5AZ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUMGT',
        id: '940GZZLUMGT',
        url: 'moorgate',
        name: 'Moorgate',
        lines: [
          'northern'
        ],
        lat: 51.518176,
        lng: -0.088322,
        contact: [
          {
            key: 'Address',
            value: 'Moorgate Station,London Underground Ltd.,Moorfields,London,EC2Y 9AE'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUMHL',
        id: '940GZZLUMHL',
        url: 'mill-hill-east',
        name: 'Mill Hill East',
        lines: [
          'northern'
        ],
        lat: 51.608229,
        lng: -0.209986,
        contact: [
          {
            key: 'Address',
            value: 'Mill Hill East Station,London Underground Ltd.,Bittacy Hill,London,NW7 1BS'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUMTC',
        id: '940GZZLUMTC',
        url: 'mornington-crescent',
        name: 'Mornington Crescent',
        lines: [
          'northern'
        ],
        lat: 51.534679,
        lng: -0.138789,
        contact: [
          {
            key: 'Address',
            value: 'Mornington Crescent Station,London Underground Ltd.,Eversholt St,London,NW1 2JA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 1 in ticket halls, 1 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUODS',
        id: '940GZZLUODS',
        url: 'old-street',
        name: 'Old Street',
        lines: [
          'northern'
        ],
        lat: 51.525864,
        lng: -0.08777,
        contact: [
          {
            key: 'Address',
            value: 'Old Street Station,London Underground Ltd.,Old St,London,EC1Y 1BE'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '3'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUOVL',
        id: '940GZZLUOVL',
        url: 'oval',
        name: 'Oval',
        lines: [
          'northern'
        ],
        lat: 51.48185,
        lng: -0.112439,
        contact: [
          {
            key: 'Address',
            value: 'Oval Station,London Underground Ltd.,318 Kennington Park Rd,London,SE11 4PP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUSKW',
        id: '940GZZLUSKW',
        url: 'stockwell',
        name: 'Stockwell',
        lines: [
          'northern'
        ],
        lat: 51.472184,
        lng: -0.122644,
        contact: [
          {
            key: 'Address',
            value: 'Stockwell Station,London Underground Ltd.,Clapham Rd,London,SW9 9AE'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '3'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '5'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUSWN',
        id: '940GZZLUSWN',
        url: 'south-wimbledon',
        name: 'South Wimbledon',
        lines: [
          'northern'
        ],
        lat: 51.415309,
        lng: -0.192005,
        contact: [
          {
            key: 'Address',
            value: 'South Wimbledon Station,London Underground Ltd.,High St,London,SW19 1DE'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUTAW',
        id: '940GZZLUTAW',
        url: 'totteridge-&-whetstone',
        name: 'Totteridge & Whetstone',
        lines: [
          'northern'
        ],
        lat: 51.630597,
        lng: -0.17921,
        contact: [
          {
            key: 'Address',
            value: 'Totteridge & Whetstone Station,London Underground Ltd.,Totteridge Lane,London,N20 9QP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUTBC',
        id: '940GZZLUTBC',
        url: 'tooting-bec',
        name: 'Tooting Bec',
        lines: [
          'northern'
        ],
        lat: 51.435678,
        lng: -0.159736,
        contact: [
          {
            key: 'Address',
            value: 'Tooting Bec Station,London Underground Ltd.,Balham High Rd,London,SW17 9AH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUTBY',
        id: '940GZZLUTBY',
        url: 'tooting-broadway',
        name: 'Tooting Broadway',
        lines: [
          'northern'
        ],
        lat: 51.42763,
        lng: -0.168374,
        contact: [
          {
            key: 'Address',
            value: 'Tooting Broadway Station,London Underground Ltd.,Tooting High St,London,SW17 0SU'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '3'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '6 on platforms, 0 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUTCR',
        id: '940GZZLUTCR',
        url: 'tottenham-court-road',
        name: 'Tottenham Court Road',
        lines: [
          'northern'
        ],
        lat: 51.516426,
        lng: -0.13041,
        contact: [
          {
            key: 'Address',
            value: 'Tottenham Court Road Station,London Underground Ltd.,Oxford St,London,W1'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          }
        ]
      },
      {
        key: '940GZZLUTFP',
        id: '940GZZLUTFP',
        url: 'tufnell-park',
        name: 'Tufnell Park',
        lines: [
          'northern'
        ],
        lat: 51.556822,
        lng: -0.138433,
        contact: [
          {
            key: 'Address',
            value: 'Tufnell Park Station,London Underground Ltd.,Fortess Rd,London,N19 5QB'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUWFN',
        id: '940GZZLUWFN',
        url: 'west-finchley',
        name: 'West Finchley',
        lines: [
          'northern'
        ],
        lat: 51.609426,
        lng: -0.188362,
        contact: [
          {
            key: 'Address',
            value: 'West Finchley Station,London Underground Ltd.,Nether Street,London,N3 1NT'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUWLO',
        id: '940GZZLUWLO',
        url: 'waterloo',
        name: 'Waterloo',
        lines: [
          'northern'
        ],
        lat: 51.503299,
        lng: -0.11478,
        contact: [
          {
            key: 'Address',
            value: 'Waterloo Underground Station,London Underground Ltd.,York Rd,London,SE1 7ND'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '3'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '23'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '6'
          },
          {
            key: 'Cash Machines',
            value: '4'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          }
        ]
      },
      {
        key: '940GZZLUWOP',
        id: '940GZZLUWOP',
        url: 'woodside-park',
        name: 'Woodside Park',
        lines: [
          'northern'
        ],
        lat: 51.618014,
        lng: -0.18542,
        contact: [
          {
            key: 'Address',
            value: 'Woodside Park Station,London Underground Ltd.,Woodside Park Rd,London,N12 8SE'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes (male, female)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUWRR',
        id: '940GZZLUWRR',
        url: 'warren-street',
        name: 'Warren Street',
        lines: [
          'northern'
        ],
        lat: 51.524951,
        lng: -0.138321,
        contact: [
          {
            key: 'Address',
            value: 'Warren Street Station,London Underground Ltd.,Tottenham Court Rd,London,NW1 3AA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Escalators',
            value: '7'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 5 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      }
    ]
  },
  {
    id: 'piccadilly',
    stations: [
      {
        key: '940GZZLUACT',
        id: '940GZZLUACT',
        url: 'acton-town',
        name: 'Acton Town',
        lines: [
          'piccadilly'
        ],
        lat: 51.503057,
        lng: -0.280462,
        contact: [
          {
            key: 'Address',
            value: 'Acton Town Station,London Underground Ltd.,Gunnersbury Lane,London,W3 8HN'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUALP',
        id: '940GZZLUALP',
        url: 'alperton',
        name: 'Alperton',
        lines: [
          'piccadilly'
        ],
        lat: 51.540627,
        lng: -0.29961,
        contact: [
          {
            key: 'Address',
            value: 'Alperton Station,London Underground Ltd.,Ealing Rd,Wembley,Middlesex,HA0 4LL'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUASG',
        id: '940GZZLUASG',
        url: 'arnos-grove',
        name: 'Arnos Grove',
        lines: [
          'piccadilly'
        ],
        lat: 51.616446,
        lng: -0.133062,
        contact: [
          {
            key: 'Address',
            value: 'Arnos Grove Station,London Underground Ltd.,Bowes Rd,London,N11 1AN'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUASL',
        id: '940GZZLUASL',
        url: 'arsenal',
        name: 'Arsenal',
        lines: [
          'piccadilly'
        ],
        lat: 51.558655,
        lng: -0.107457,
        contact: [
          {
            key: 'Address',
            value: 'Arsenal Station,London Underground Ltd.,Highbury Hill,London,N5 1LP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 0 in ticket halls, 1 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUBDS',
        id: '940GZZLUBDS',
        url: 'bounds-green',
        name: 'Bounds Green',
        lines: [
          'piccadilly'
        ],
        lat: 51.607034,
        lng: -0.124235,
        contact: [
          {
            key: 'Address',
            value: 'Bounds Green Station,London Underground Ltd.,Bounds Green Rd,London,N11 2EU'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUBOS',
        id: '940GZZLUBOS',
        url: 'boston-manor',
        name: 'Boston Manor',
        lines: [
          'piccadilly'
        ],
        lat: 51.495635,
        lng: -0.324939,
        contact: [
          {
            key: 'Address',
            value: 'Boston Manor Station,London Underground Ltd.,Boston Manor Rd,Brentford,Middx,TW8 9LQ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUBSC',
        id: '940GZZLUBSC',
        url: 'barons-court',
        name: 'Barons Court',
        lines: [
          'piccadilly'
        ],
        lat: 51.490311,
        lng: -0.213427,
        contact: [
          {
            key: 'Address',
            value: 'Barons Court Station,London Underground Ltd.,Pallister Rd,London,W14'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes - male & female coin op'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUCAR',
        id: '940GZZLUCAR',
        url: 'caledonian-road',
        name: 'Caledonian Road',
        lines: [
          'piccadilly'
        ],
        lat: 51.548519,
        lng: -0.118493,
        contact: [
          {
            key: 'Address',
            value: 'Caledonian Road Underground Station,London Underground Ltd.,Caledonian Rd,London,N7 9BA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUCGN',
        id: '940GZZLUCGN',
        url: 'covent-garden',
        name: 'Covent Garden',
        lines: [
          'piccadilly'
        ],
        lat: 51.513093,
        lng: -0.124436,
        contact: [
          {
            key: 'Address',
            value: 'Covent Garden Station,London Underground Ltd.,Long Acre,London,WC2E 9JT'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '4'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUCKS',
        id: '940GZZLUCKS',
        url: 'cockfosters',
        name: 'Cockfosters',
        lines: [
          'piccadilly'
        ],
        lat: 51.65152,
        lng: -0.149171,
        contact: [
          {
            key: 'Address',
            value: 'Cockfosters Station,London Underground Ltd.,Cockfosters Rd,Barnet,Herts,EN4 0DZ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUEAE',
        id: '940GZZLUEAE',
        url: 'eastcote',
        name: 'Eastcote',
        lines: [
          'piccadilly'
        ],
        lat: 51.576506,
        lng: -0.397373,
        contact: [
          {
            key: 'Address',
            value: 'Eastcote Station,London Underground Ltd.,Field End Rd,Ruislip,Middx,HA5 1QZ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUECM',
        id: '940GZZLUECM',
        url: 'ealing-common',
        name: 'Ealing Common',
        lines: [
          'piccadilly'
        ],
        lat: 51.51014,
        lng: -0.288265,
        contact: [
          {
            key: 'Address',
            value: 'Ealing Common Station,London Underground Ltd.,Uxbridge Rd,London,W5 3LD'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUECT',
        id: '940GZZLUECT',
        url: 'earls-court',
        name: 'Earl\'s Court',
        lines: [
          'piccadilly'
        ],
        lat: 51.492063,
        lng: -0.193378,
        contact: [
          {
            key: 'Address',
            value: 'Earl\'s Court Station,London Underground Ltd.,Earl\'s Court Rd,London,SW5 9QA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '4'
          },
          {
            key: 'Escalators',
            value: '4'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '6'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUFPK',
        id: '940GZZLUFPK',
        url: 'finsbury-park',
        name: 'Finsbury Park',
        lines: [
          'piccadilly'
        ],
        lat: 51.564158,
        lng: -0.106825,
        contact: [
          {
            key: 'Address',
            value: 'Finsbury Park Underground Station,London Underground Ltd.,Wells Terrace,London,N4 3JU'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '12 on platforms, 0 in ticket halls, 5 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUGPK',
        id: '940GZZLUGPK',
        url: 'green-park',
        name: 'Green Park',
        lines: [
          'piccadilly'
        ],
        lat: 51.506947,
        lng: -0.142787,
        contact: [
          {
            key: 'Address',
            value: 'Green Park Station,London Underground Ltd.,Piccadilly,London,W1J 9DZ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '5'
          },
          {
            key: 'Escalators',
            value: '11'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUGTR',
        id: '940GZZLUGTR',
        url: 'gloucester-road',
        name: 'Gloucester Road',
        lines: [
          'piccadilly'
        ],
        lat: 51.494316,
        lng: -0.182658,
        contact: [
          {
            key: 'Address',
            value: 'Gloucester Road Station,London Underground Ltd.,Gloucester Rd,London,SW7 4SF'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 2 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUHBN',
        id: '940GZZLUHBN',
        url: 'holborn',
        name: 'Holborn',
        lines: [
          'piccadilly'
        ],
        lat: 51.51758,
        lng: -0.120475,
        contact: [
          {
            key: 'Address',
            value: 'Holborn Station,London Underground Ltd.,Kingsway,London,WC2B 6AA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '7'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUHGD',
        id: '940GZZLUHGD',
        url: 'hillingdon',
        name: 'Hillingdon',
        lines: [
          'piccadilly'
        ],
        lat: 51.553715,
        lng: -0.449828,
        contact: [
          {
            key: 'Address',
            value: 'Hillingdon Station,London Underground Ltd.,Long Lane,Hillingdon,Uxbridge,Middlesex,UB10 9NR'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'Escalators',
            value: 'yes (disabled only)'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUHNX',
        id: '940GZZLUHNX',
        url: 'hatton-cross',
        name: 'Hatton Cross',
        lines: [
          'piccadilly'
        ],
        lat: 51.466747,
        lng: -0.423191,
        contact: [
          {
            key: 'Address',
            value: 'Hatton Cross Station,London Underground Ltd.,Great South West Rd,Feltham,Middx,'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUHPC',
        id: '940GZZLUHPC',
        url: 'hyde-park-corner',
        name: 'Hyde Park Corner',
        lines: [
          'piccadilly'
        ],
        lat: 51.503035,
        lng: -0.152441,
        contact: [
          {
            key: 'Address',
            value: 'Hyde Park Corner Station,London Underground Ltd.,Knightsbridge,London,SW1X 7LY'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '1 on platforms, 0 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUHR5',
        id: '940GZZLUHR5',
        url: 'heathrow-terminal-5',
        name: 'Heathrow Terminal 5',
        lines: [
          'piccadilly'
        ],
        lat: 51.470052,
        lng: -0.49056,
        contact: [
          {
            key: 'Address',
            value: 'Heathrow T5 Station,London Underground Ltd.,Hthrw Airport complex,Trmnl 5,Hounslow,Middx'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUHRC',
        id: '940GZZLUHRC',
        url: 'heathrow-terminals-2-&-3',
        name: 'Heathrow Terminals 2 & 3',
        lines: [
          'piccadilly'
        ],
        lat: 51.471235,
        lng: -0.452265,
        contact: [
          {
            key: 'Address',
            value: 'Heathrow Terminals 1, 2, 3,London Underground Ltd.,Wellington Road,Hounslow,Middlesex,TW6 1JH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          }
        ]
      },
      {
        key: '940GZZLUHSD',
        id: '940GZZLUHSD',
        url: 'hammersmith-',
        name: 'Hammersmith ',
        lines: [
          'piccadilly'
        ],
        lat: 51.4923,
        lng: -0.22362,
        contact: [
          {
            key: 'Address',
            value: 'Hammersmith (D & P),London Underground Ltd.,Hammersmith Broadway,London,W6 8AB'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '3'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUHWC',
        id: '940GZZLUHWC',
        url: 'hounslow-central',
        name: 'Hounslow Central',
        lines: [
          'piccadilly'
        ],
        lat: 51.471295,
        lng: -0.366578,
        contact: [
          {
            key: 'Address',
            value: 'Hounslow Central Station,London Underground Ltd.,Lampton Rd,Hounslow,Middx,TW3 1JG'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUHWE',
        id: '940GZZLUHWE',
        url: 'hounslow-east',
        name: 'Hounslow East',
        lines: [
          'piccadilly'
        ],
        lat: 51.473213,
        lng: -0.356474,
        contact: [
          {
            key: 'Address',
            value: 'Hounslow East Station,London Underground Ltd.,Kingsley Rd,Hounslow,Middx,TW3 4AB'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUHWT',
        id: '940GZZLUHWT',
        url: 'hounslow-west',
        name: 'Hounslow West',
        lines: [
          'piccadilly'
        ],
        lat: 51.473469,
        lng: -0.386544,
        contact: [
          {
            key: 'Address',
            value: 'Hounslow West Station,London Underground Ltd.,Bath Rd,Hounslow,Middx,TW3 3DH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUHWY',
        id: '940GZZLUHWY',
        url: 'holloway-road',
        name: 'Holloway Road',
        lines: [
          'piccadilly'
        ],
        lat: 51.552697,
        lng: -0.113244,
        contact: [
          {
            key: 'Address',
            value: 'Holloway Road Station,London Underground Ltd.,Holloway Rd,London,N7 8HS'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 0 in ticket halls, 2 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUICK',
        id: '940GZZLUICK',
        url: 'ickenham',
        name: 'Ickenham',
        lines: [
          'piccadilly'
        ],
        lat: 51.56177,
        lng: -0.442225,
        contact: [
          {
            key: 'Address',
            value: 'Ickenham Station,London Underground Ltd.,Glebe Avenue,Uxbridge,Middx,UB10 8PD'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUKNB',
        id: '940GZZLUKNB',
        url: 'knightsbridge',
        name: 'Knightsbridge',
        lines: [
          'piccadilly'
        ],
        lat: 51.501669,
        lng: -0.160508,
        contact: [
          {
            key: 'Address',
            value: 'Knightsbridge Station,London Underground Ltd.,Sloane St,London,SW1'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Escalators',
            value: '5'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '5'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUKSX',
        id: '940GZZLUKSX',
        url: 'kings-cross-st.-pancras',
        name: 'King\'s Cross St. Pancras',
        lines: [
          'piccadilly'
        ],
        lat: 51.530663,
        lng: -0.123194,
        contact: [
          {
            key: 'Address',
            value: 'King\'s Cross St. Pancras,London Underground Ltd.,Euston Road,London,N1 9AL'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '4'
          },
          {
            key: 'Lifts',
            value: '10'
          },
          {
            key: 'Escalators',
            value: '19'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '9'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          }
        ]
      },
      {
        key: '940GZZLULSQ',
        id: '940GZZLULSQ',
        url: 'leicester-square',
        name: 'Leicester Square',
        lines: [
          'piccadilly'
        ],
        lat: 51.511386,
        lng: -0.128426,
        contact: [
          {
            key: 'Address',
            value: 'Leicester Square Station,London Underground Ltd.,Cranbourn St,London,WC2H 0AP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUMRH',
        id: '940GZZLUMRH',
        url: 'manor-house',
        name: 'Manor House',
        lines: [
          'piccadilly'
        ],
        lat: 51.570738,
        lng: -0.096118,
        contact: [
          {
            key: 'Address',
            value: 'Manor House Station,London Underground Ltd.,Green Lanes,London,N4 1BZ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '3'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 0 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUNEN',
        id: '940GZZLUNEN',
        url: 'north-ealing',
        name: 'North Ealing',
        lines: [
          'piccadilly'
        ],
        lat: 51.517505,
        lng: -0.288868,
        contact: [
          {
            key: 'Address',
            value: 'North Ealing Station,London Underground Ltd.,Station Road,London,W5 3AF'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUNFD',
        id: '940GZZLUNFD',
        url: 'northfields',
        name: 'Northfields',
        lines: [
          'piccadilly'
        ],
        lat: 51.499319,
        lng: -0.314719,
        contact: [
          {
            key: 'Address',
            value: 'Northfields Station,London Underground Ltd.,Northfield Avenue,London,W13 9QU'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUOAK',
        id: '940GZZLUOAK',
        url: 'oakwood',
        name: 'Oakwood',
        lines: [
          'piccadilly'
        ],
        lat: 51.647726,
        lng: -0.132182,
        contact: [
          {
            key: 'Address',
            value: 'Oakwood Station,London Underground Ltd.,Bramley Rd,London,N14 4UT'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUOSY',
        id: '940GZZLUOSY',
        url: 'osterley',
        name: 'Osterley',
        lines: [
          'piccadilly'
        ],
        lat: 51.481274,
        lng: -0.352224,
        contact: [
          {
            key: 'Address',
            value: 'Osterley Station,London Underground Ltd.,Great West Rd,Isleworth,Middx,TW7 4PU'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUPCC',
        id: '940GZZLUPCC',
        url: 'piccadilly-circus',
        name: 'Piccadilly Circus',
        lines: [
          'piccadilly'
        ],
        lat: 51.51005,
        lng: -0.133798,
        contact: [
          {
            key: 'Address',
            value: 'Piccadilly Circus Station,London Underground Ltd.,Piccadilly Circus,London,W1J 9HP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '11'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '6'
          },
          {
            key: 'Cash Machines',
            value: '5'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUPKR',
        id: '940GZZLUPKR',
        url: 'park-royal',
        name: 'Park Royal',
        lines: [
          'piccadilly'
        ],
        lat: 51.527123,
        lng: -0.284341,
        contact: [
          {
            key: 'Address',
            value: 'Park Royal Station,London Underground Ltd.,Western Avenue,London,W5 3EL'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLURSM',
        id: '940GZZLURSM',
        url: 'ruislip-manor',
        name: 'Ruislip Manor',
        lines: [
          'piccadilly'
        ],
        lat: 51.573202,
        lng: -0.412973,
        contact: [
          {
            key: 'Address',
            value: 'Ruislip Manor Station,London Underground Ltd.,Victoria Rd,Ruislip,Middx,HA4 9AA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLURSP',
        id: '940GZZLURSP',
        url: 'ruislip',
        name: 'Ruislip',
        lines: [
          'piccadilly'
        ],
        lat: 51.571354,
        lng: -0.421898,
        contact: [
          {
            key: 'Address',
            value: 'Ruislip Station,London Underground Ltd.,Station Approach,Ruislip,Middx,HA4 8LD'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLURSQ',
        id: '940GZZLURSQ',
        url: 'russell-square',
        name: 'Russell Square',
        lines: [
          'piccadilly'
        ],
        lat: 51.523073,
        lng: -0.124285,
        contact: [
          {
            key: 'Address',
            value: 'Russell Square Station,London Underground Ltd.,Bernard St,London,WC1N 1LJ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Lifts',
            value: '3'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLURYL',
        id: '940GZZLURYL',
        url: 'rayners-lane',
        name: 'Rayners Lane',
        lines: [
          'piccadilly'
        ],
        lat: 51.575147,
        lng: -0.371127,
        contact: [
          {
            key: 'Address',
            value: 'Rayners Lane Station,London Underground Ltd.,Alexandra Avenue,Harrow,HA5 5EG,Middx'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUSEA',
        id: '940GZZLUSEA',
        url: 'south-ealing',
        name: 'South Ealing',
        lines: [
          'piccadilly'
        ],
        lat: 51.501003,
        lng: -0.307424,
        contact: [
          {
            key: 'Address',
            value: 'South Ealing Station,London Underground Ltd.,South Ealing Rd,London,W5 4QB'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUSGT',
        id: '940GZZLUSGT',
        url: 'southgate',
        name: 'Southgate',
        lines: [
          'piccadilly'
        ],
        lat: 51.632315,
        lng: -0.127816,
        contact: [
          {
            key: 'Address',
            value: 'Southgate Station,London Underground Ltd.,High St,London,N14'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      },
      {
        key: '940GZZLUSHH',
        id: '940GZZLUSHH',
        url: 'south-harrow',
        name: 'South Harrow',
        lines: [
          'piccadilly'
        ],
        lat: 51.564888,
        lng: -0.352492,
        contact: [
          {
            key: 'Address',
            value: 'South Harrow Station,London Underground Ltd.,South Hill Ave,Harrow,Middx,HA2 8HN'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUSKS',
        id: '940GZZLUSKS',
        url: 'south-kensington',
        name: 'South Kensington',
        lines: [
          'piccadilly'
        ],
        lat: 51.494094,
        lng: -0.174138,
        contact: [
          {
            key: 'Address',
            value: 'South Kensington Station,London Underground Ltd.,Pelham St,London,SW7 2NB'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '5'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '12 on platforms, 0 in ticket halls, 4 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUSUH',
        id: '940GZZLUSUH',
        url: 'sudbury-hill',
        name: 'Sudbury Hill',
        lines: [
          'piccadilly'
        ],
        lat: 51.556946,
        lng: -0.336435,
        contact: [
          {
            key: 'Address',
            value: 'Sudbury Hill Underground Station,London Underground Ltd.,Greenford Rd,Harrow,Middx,HA1 3RA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUSUT',
        id: '940GZZLUSUT',
        url: 'sudbury-town',
        name: 'Sudbury Town',
        lines: [
          'piccadilly'
        ],
        lat: 51.550815,
        lng: -0.315745,
        contact: [
          {
            key: 'Address',
            value: 'Sudbury Town Station,London Underground Ltd.,Station Approach,Wembley,Middx,HA0 2LA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          },
          {
            key: 'Car park',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUTNG',
        id: '940GZZLUTNG',
        url: 'turnham-green',
        name: 'Turnham Green',
        lines: [
          'piccadilly'
        ],
        lat: 51.495148,
        lng: -0.254555,
        contact: [
          {
            key: 'Address',
            value: 'Turnham Green Station,London Underground Ltd.,Turnham Green Terrace,London,W4 1LR'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '1 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUTPN',
        id: '940GZZLUTPN',
        url: 'turnpike-lane',
        name: 'Turnpike Lane',
        lines: [
          'piccadilly'
        ],
        lat: 51.590272,
        lng: -0.102953,
        contact: [
          {
            key: 'Address',
            value: 'Turnpike Lane Station,London Underground Ltd.,Westbury Avenue,London,N15 3NX'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '3'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 0 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '5'
          }
        ]
      },
      {
        key: '940GZZLUUXB',
        id: '940GZZLUUXB',
        url: 'uxbridge',
        name: 'Uxbridge',
        lines: [
          'piccadilly'
        ],
        lat: 51.546565,
        lng: -0.477949,
        contact: [
          {
            key: 'Address',
            value: 'Uxbridge Station,London Underground Ltd.,High St,Uxbridge,Middx,UB8 1JZ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Waiting Room',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUWOG',
        id: '940GZZLUWOG',
        url: 'wood-green',
        name: 'Wood Green',
        lines: [
          'piccadilly'
        ],
        lat: 51.597479,
        lng: -0.109886,
        contact: [
          {
            key: 'Address',
            value: 'Wood Green Station,London Underground Ltd.,High Rd,Wood Green,London,N22 4HH'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '3'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      }
    ]
  },
  {
    id: 'victoria',
    stations: [
      {
        key: '940GZZLUBLR',
        id: '940GZZLUBLR',
        url: 'blackhorse-road',
        name: 'Blackhorse Road',
        lines: [
          'victoria'
        ],
        lat: 51.586919,
        lng: -0.04115,
        contact: [
          {
            key: 'Address',
            value: 'Blackhorse Road Underground Station,London Underground Ltd.,Blackhorse Rd,London,E17 6ND'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'ASDA Click and Collect',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUBXN',
        id: '940GZZLUBXN',
        url: 'brixton',
        name: 'Brixton',
        lines: [
          'victoria'
        ],
        lat: 51.462618,
        lng: -0.114888,
        contact: [
          {
            key: 'Address',
            value: 'Brixton Underground Station,London Underground Ltd.,Brixton Rd,London,SW9 8HE'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '2'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '6 on platforms, 0 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUEUS',
        id: '940GZZLUEUS',
        url: 'euston',
        name: 'Euston',
        lines: [
          'victoria'
        ],
        lat: 51.528089,
        lng: -0.132066,
        contact: [
          {
            key: 'Address',
            value: 'Euston Underground Station,London Underground Ltd.,Eversholt St,London,NW1 2DU'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Escalators',
            value: '10'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUFPK',
        id: '940GZZLUFPK',
        url: 'finsbury-park',
        name: 'Finsbury Park',
        lines: [
          'victoria'
        ],
        lat: 51.564158,
        lng: -0.106825,
        contact: [
          {
            key: 'Address',
            value: 'Finsbury Park Underground Station,London Underground Ltd.,Wells Terrace,London,N4 3JU'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '12 on platforms, 0 in ticket halls, 5 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '2'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUGPK',
        id: '940GZZLUGPK',
        url: 'green-park',
        name: 'Green Park',
        lines: [
          'victoria'
        ],
        lat: 51.506947,
        lng: -0.142787,
        contact: [
          {
            key: 'Address',
            value: 'Green Park Station,London Underground Ltd.,Piccadilly,London,W1J 9DZ'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '5'
          },
          {
            key: 'Escalators',
            value: '11'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUHAI',
        id: '940GZZLUHAI',
        url: 'highbury-&-islington',
        name: 'Highbury & Islington',
        lines: [
          'victoria'
        ],
        lat: 51.54635,
        lng: -0.103324,
        contact: [
          {
            key: 'Address',
            value: 'Highbury & Islington Underground Station,London Underground Ltd.,Holloway Rd,London,N5 1RA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '3'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUKSX',
        id: '940GZZLUKSX',
        url: 'kings-cross-st.-pancras',
        name: 'King\'s Cross St. Pancras',
        lines: [
          'victoria'
        ],
        lat: 51.530663,
        lng: -0.123194,
        contact: [
          {
            key: 'Address',
            value: 'King\'s Cross St. Pancras,London Underground Ltd.,Euston Road,London,N1 9AL'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '4'
          },
          {
            key: 'Lifts',
            value: '10'
          },
          {
            key: 'Escalators',
            value: '19'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '9'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          }
        ]
      },
      {
        key: '940GZZLUOXC',
        id: '940GZZLUOXC',
        url: 'oxford-circus',
        name: 'Oxford Circus',
        lines: [
          'victoria'
        ],
        lat: 51.515224,
        lng: -0.141903,
        contact: [
          {
            key: 'Address',
            value: 'Oxford Circus Station,London Underground Ltd.,Oxford St,London,W1B 3AG'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Escalators',
            value: '14'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '18 on platforms, 0 in ticket halls, 18 elsewhere'
          },
          {
            key: 'Payphones',
            value: '3'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUPCO',
        id: '940GZZLUPCO',
        url: 'pimlico',
        name: 'Pimlico',
        lines: [
          'victoria'
        ],
        lat: 51.489097,
        lng: -0.133761,
        contact: [
          {
            key: 'Address',
            value: 'Pimlico Station,London Underground Ltd.,Bessborough St,London,SW1V 2JA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 0 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUSKW',
        id: '940GZZLUSKW',
        url: 'stockwell',
        name: 'Stockwell',
        lines: [
          'victoria'
        ],
        lat: 51.472184,
        lng: -0.122644,
        contact: [
          {
            key: 'Address',
            value: 'Stockwell Station,London Underground Ltd.,Clapham Rd,London,SW9 9AE'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '3'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '5'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUSVS',
        id: '940GZZLUSVS',
        url: 'seven-sisters',
        name: 'Seven Sisters',
        lines: [
          'victoria'
        ],
        lat: 51.58333,
        lng: -0.072584,
        contact: [
          {
            key: 'Address',
            value: 'Seven Sisters Underground Station,London Underground Ltd.,Seven Sisters Rd,London'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Escalators',
            value: '4'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUTMH',
        id: '940GZZLUTMH',
        url: 'tottenham-hale',
        name: 'Tottenham Hale',
        lines: [
          'victoria'
        ],
        lat: 51.588108,
        lng: -0.060241,
        contact: [
          {
            key: 'Address',
            value: 'Tottenham Hale Underground Station,London Underground Ltd.,Station Rd,London,N17 9LR'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '6 on platforms, 0 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          }
        ]
      },
      {
        key: '940GZZLUVIC',
        id: '940GZZLUVIC',
        url: 'victoria',
        name: 'Victoria',
        lines: [
          'victoria'
        ],
        lat: 51.496359,
        lng: -0.143102,
        contact: [
          {
            key: 'Address',
            value: 'Victoria Underground Station,London Underground Ltd.,Victoria St,London,SW1E 5ND'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '2'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '6'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '4'
          },
          {
            key: 'Cash Machines',
            value: '1'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUVXL',
        id: '940GZZLUVXL',
        url: 'vauxhall',
        name: 'Vauxhall',
        lines: [
          'victoria'
        ],
        lat: 51.485743,
        lng: -0.124204,
        contact: [
          {
            key: 'Address',
            value: 'Vauxhall Underground Station,London Underground Ltd.,Vauxhall Cross,London,SE1'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '4 on platforms, 0 in ticket halls, 1 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          }
        ]
      },
      {
        key: '940GZZLUWRR',
        id: '940GZZLUWRR',
        url: 'warren-street',
        name: 'Warren Street',
        lines: [
          'victoria'
        ],
        lat: 51.524951,
        lng: -0.138321,
        contact: [
          {
            key: 'Address',
            value: 'Warren Street Station,London Underground Ltd.,Tottenham Court Rd,London,NW1 3AA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Escalators',
            value: '7'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 5 elsewhere'
          },
          {
            key: 'Payphones',
            value: '1'
          }
        ]
      },
      {
        key: '940GZZLUWWL',
        id: '940GZZLUWWL',
        url: 'walthamstow-central',
        name: 'Walthamstow Central',
        lines: [
          'victoria'
        ],
        lat: 51.582965,
        lng: -0.019885,
        contact: [
          {
            key: 'Address',
            value: 'Walthamstow Central Station BR Hoe St,London,E17 7LP'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '2'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          }
        ]
      }
    ]
  },
  {
    id: 'waterloo-city',
    stations: [
      {
        key: '940GZZLUBNK',
        id: '940GZZLUBNK',
        url: 'bank',
        name: 'Bank',
        lines: [
          'waterloo-city'
        ],
        lat: 51.512884,
        lng: -0.091397,
        contact: [
          {
            key: 'Address',
            value: 'Bank/Monument Complex,London Underground Ltd.,Princes St,London,EC3V 3LA'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '1'
          },
          {
            key: 'Toilets',
            value: 'yes'
          },
          {
            key: 'Lifts',
            value: '5'
          },
          {
            key: 'Escalators',
            value: '15'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '10 on platforms, 1 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '2'
          },
          {
            key: 'Cash Machines',
            value: '3'
          },
          {
            key: 'Euro Cash Machines',
            value: 'yes'
          },
          {
            key: 'Taxi Rank',
            value: 'No'
          }
        ]
      },
      {
        key: '940GZZLUWLO',
        id: '940GZZLUWLO',
        url: 'waterloo',
        name: 'Waterloo',
        lines: [
          'waterloo-city'
        ],
        lat: 51.503299,
        lng: -0.11478,
        contact: [
          {
            key: 'Address',
            value: 'Waterloo Underground Station,London Underground Ltd.,York Rd,London,SE1 7ND'
          },
          {
            key: 'PhoneNo',
            value: '0845 330 9880'
          }
        ],
        facilities: [
          {
            key: 'Ticket Halls',
            value: '3'
          },
          {
            key: 'Lifts',
            value: '1'
          },
          {
            key: 'Escalators',
            value: '23'
          },
          {
            key: 'WiFi',
            value: 'yes'
          },
          {
            key: 'Help Points',
            value: '0 on platforms, 0 in ticket halls, 0 elsewhere'
          },
          {
            key: 'Payphones',
            value: '6'
          },
          {
            key: 'Cash Machines',
            value: '4'
          },
          {
            key: 'Taxi Rank',
            value: 'Yes'
          }
        ]
      }
    ]
  }
]

module.exports = {
  statuses: statuses,
  stations: stations,
  lineStations: lineStations
};
    