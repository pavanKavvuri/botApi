import { incidentChart, enhancementChart, serviceRequestChart, agingChart, changeRequestChart } from './chartConfig';

const chartNames = [
    "incidentData",
    "enhancementData",
    "serviceRequestData",
    "changerequestData",
    "agingData"
];

const mapDataToGroups = {
    'adm': [
        "incidentData",
        "enhancementData",
        "serviceRequestData",
        "agingData"
    ],
    'smo': [
        "incidentData",
        "changerequestData",
        "serviceRequestData",
        "agingData"
    ],
    'gsd': [
        "incidentData",
        //"incidentData",
        "enhancementData",   // needs to be incident data for L1 incidents
        "serviceRequestData",
        "agingData"
    ]
};

const chartLegendConfig = {
    "incidentData": [
        'new',
        'closed',
        'active'
    ],
    "enhancementData": [
        'new',
        'closed',
        'activeIt',
        'activeBug'
    ],
    "serviceRequestData": [
        'new',
        'closed',
        'active'
    ],
    "changerequestData": [
        'new',
        'closed',
        'active'
    ],
    "agingData": [
        'awaitingUserInfo',
        'greaterThanOneWeek',
        'greaterThanFourWeeks'
    ]
}

const chartRendererMap = {
    "incident": incidentChart,
    "enhancement": enhancementChart,
    "sr": serviceRequestChart,
    "aging": agingChart,

    "incidentgsd": incidentChart,
    "enhancementl1": enhancementChart,
    "srgsd": serviceRequestChart,
    "srl1": serviceRequestChart,

    "cr": changeRequestChart
}

export { mapDataToGroups, chartNames, chartLegendConfig, chartRendererMap };

