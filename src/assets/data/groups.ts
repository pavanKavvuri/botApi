import Group from '../../models/group';

const groups: Array<Group> = [
  {
    name: 'AM',
    value: 'adm',
    showScores: true,
    charts: [
      "incident",
      "enhancement",
      "sr",
      "aging"
    ],
    cardTitles: [
      "Trend of Incidents",
      "Trend of Enhancements",
      "Trend of Service Requests",
      "Trend of Aging"
    ]
  },
  {
    name: 'GSD and L1',
    value: 'gsd',

    showScores: false,
    charts: [
      "incidentgsd",
      "enhancementl1",
      "srgsd",
      "srl1"
    ],
    cardTitles: [
      "Trend of Incidents GSD",
      "Trend of Incidents L1",
      "Trend of Service Requests GSD",
      "Trend of Service Requests L1",
    ]

  },
  {
    name: 'SMO',
    value: 'smo',
    showScores: false,
    charts: [
      "incident",
      "cr",
      "sr",
      "aging"
    ],
    cardTitles: [
      "Trend of Incidents",
      "Trend of Change Requests",
      "Trend of Service Requests",
      "Trend of Aging"
    ]
  }
];

export default groups;