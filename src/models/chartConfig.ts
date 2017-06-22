interface CharConfig {
    type: string;
    data: ChartData;
    subCharts: Array<SubChart>;
};

interface SubChart{
    type: string;
    data: ChartData;
};

interface ChartData {
    name: string;
    label: string;
    dataItems: Array<number>;
};