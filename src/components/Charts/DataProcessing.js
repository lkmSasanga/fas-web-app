import React from "react";
// import data from "./data";

    let overallItem = [],
        featureOne = [],
        featureTwo = [],
        featureThree = [];

    let dataProcessing = (props) => {
        overallItem = [
            { name: "negative", y: 50 },
            { name: "positive", y: 50 }
        ];

        featureOne = [
            { name: "negative", y: 20 },
            { name: "positive", y: 80 }
        ];

        featureTwo = [
            { name: "negative", y: 45 },
            { name: "positive", y: 55 }
        ];

        featureThree = [
            { name: "negative", y: 90 },
            { name: "positive", y: 10 }
        ];
    };


export default dataProcessing;
export { overallItem, featureOne, featureTwo, featureThree };
