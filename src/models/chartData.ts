interface ChartData {
    chartName: string;
    weeks: Array<string>;
    content: Array<Array<number>>;
};

interface Legend {
    name: string;
    value: string;
};


export { ChartData, Legend };
