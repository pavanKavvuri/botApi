interface CharConfig {
    type: string;
    data: ChartData;
    subCharts: Array<SubChart>;
    axisLabels: Array<string>;
};

interface SubChart {
    type: string;
    data: ChartData;
};

interface ChartData {
    name: string;
    dataItems: Array<number>;
};