const template = {
    userConfig: {
        tooltip: {
            pointFormat: "<b>{point.y} %</b>"
        },
        plotOptions: {
            pie: {
                showInLegend: true,
                innerSize: "60%",
                dataLabels: {
                    enabled: false,
                    distance: -14,
                    color: "white",
                    style: {
                        fontweight: "bold",
                        fontsize: 50
                    }
                }
            }
        }
    }
};

export default template;
