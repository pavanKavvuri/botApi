import { ElementRef } from '@angular/core';
import { ChartData } from '../../models/chartData';

const incidentChart = (elemRef: ElementRef, chartData: ChartData) => {

    return {
        bindto: elemRef.nativeElement,
        data: {
            names: {
                '1': 'New',
                '2': 'Closed',
                '3': 'Active'
            },
            columns: [
                ['1', ...chartData.content[0]],
                ['2', ...chartData.content[1]],
                ['3', ...chartData.content[2]]
            ],
            type: 'bar',
            types: {
                '3': 'area-spline',
                '2': 'bar',
                '1': 'bar'
            },
            colors: {
                '1': '#03A9F4',
                '2': '#FFD54F',
                '3': '#FB8C00'
            }
        },
        legend: {
            position: 'bottom'
        },
        axis: {
            x: {
                type: 'category',
                categories: chartData.weeks,
                label: {
                    text: 'Weeks',
                    position: 'outer-center'
                }
            },
            y: {
                label: {
                    text: 'No. of Incidents',
                    position: 'outer-middle'
                }
            }
        }
    };
};

const enhancementChart = (elemRef: ElementRef, chartData: ChartData) => {

    return {
        bindto: elemRef.nativeElement,
        data: {
            names: {
                '1': 'New',
                '2': 'Closed',
                '3': 'Active- IT Change',
                '4': 'Active - Bugs'
            },
            columns: [
                ['1', ...chartData.content[0]],
                ['2', ...chartData.content[1]],
                ['3', ...chartData.content[2]],
                ['4', ...chartData.content[3]]
            ],
            type: 'bar',
            types: {
                '2': 'bar',
                '3': 'area-spline',
                '4': 'area-spline'
            },
            colors: {
                '1': '#ff6384',
                '2': '#ffce56',
                '3': '#ef6c00',
                '4': '#36a2eb',
            }
        },
        axis: {
            x: {
                type: 'category',
                categories: chartData.weeks,
                label: {
                    text: 'Weeks',
                    position: 'outer-center'
                }
            },
            y: {
                label: {
                    text: 'No. of Enhancements',
                    position: 'outer-middle'
                }
            }
        },
        legend: {
            position: 'bottom'
        }
    };
};

const serviceRequestChart = (elemRef: ElementRef, chartData: ChartData) => {


    return {
        bindto: elemRef.nativeElement,
        data: {
            names: {
                '1': 'New',
                '2': 'Closed',
                '3': 'Active'
            },
            columns: [
                ['1', ...chartData.content[0]],
                ['2', ...chartData.content[1]],
                ['3', ...chartData.content[2]]
            ],
            types: {
                '2': 'area-spline',
                '3': 'area-spline',
                '1': 'bar'
            },
            type: 'bar',
            colors: {
                '1': '#ffce56',
                '2': '#36a2eb',
                '3': '#ff6384',
            }
        },
        axis: {
            x: {
                type: 'category',
                categories: chartData.weeks,
                label: {
                    text: 'Weeks',
                    position: 'outer-center'
                }
            },
            y: {
                label: {
                    text: 'No. of Service Requests',
                    position: 'outer-middle'
                }
            }
        },
        legend: {
            position: 'bottom'
        }
    };
};

const agingChart = (elemRef: ElementRef, chartData: ChartData) => {

    return {
        bindto: elemRef.nativeElement,
        data: {
            names: {
                '1': 'Awaiting User Info',
                '2': '12 weeks aging',
                '3': '>4 and <12 weeks aging',
                '4': '1 week aging'
            },
            columns: [
                ['1', ...chartData.content[0]],
                ['2', ...chartData.content[1]],
                ['3', ...chartData.content[2]],
                ['4', ...chartData.content[3]]
            ],
            type: 'area-spline',
            types: {
                '2': 'area-spline',
                '3': 'area-spline',
                '4': 'area-spline'
            },
            colors: {
                '1': '#ffce56',
                '2': '#36a2eb',
                '3': '#ff6384',
                '4': '#ef6c00',
            }
        },
        axis: {
            x: {
                type: 'category',
                categories: chartData.weeks,
                label: {
                    text: 'Weeks',
                    position: 'outer-center'
                }
            },
            y: {
                label: {
                    text: 'No. of Incidents',
                    position: 'outer-middle'
                }
            }
        },
        legend: {
            position: 'bottom'
        }
    };

};

export { incidentChart, enhancementChart, serviceRequestChart, agingChart };
