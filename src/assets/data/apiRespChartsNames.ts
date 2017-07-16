//import { incidentChart, enhancementChart, serviceRequestChart, agingChart } from './chartConfig';

const chartNames = [
    "incidentData",
    "enhancementData",
    "serviceRequestData",
    //"changerequestData"
];

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
    // "changerequestData": [
    //     'Awaiting User Info',
    //     '12 weeks aging',
    //     '>4 and <12 weeks aging',
    //     '1 week aging'
    // ]
}

export { chartNames, chartLegendConfig };

