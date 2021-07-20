import React, { Component } from "react";

import classes from "./DonetChart.module.css";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import ProgressBars from "../../ProgreessBars/ProgressBars";

class DonetChart extends Component {
  state = {
    dataRecieved: false,
    chartSize: 80,
    mainChartData: {
      pos: this.props.itemDetails.positive,
      neg: this.props.itemDetails.negative,
    },
    featureOne: {
      name: this.props.itemDetails.features,
      pos: null,
      neg: null,
    },
    featureTwo: {
      name: "",
      pos: null,
      neg: null,
    },
    featuresArray: [],
    features: {},
  };

  componentDidMount() {
    this.setState({ dataRecieved: true });
    this.setState({ features: this.props.itemDetails.features });

    const featuresArray = [];
    for (let feature in this.state.features) {
      featuresArray.push({
        name: this.state.features[feature].name,
        pos: this.state.features[feature].positive,
        neg: this.state.features[feature].negative,
      });
    }
    this.setState({ featuresArray: featuresArray });

    // console.log('features array ', this.state.featuresArray[0].name)
    // console.log('features array ', this.state.featuresArray[0].pos)
    // console.log('features array ', this.state.featuresArray[0].neg)

    console.log(this.state.features);
  }

  render(props) {
    let pos = parseInt(this.props.itemDetails.positive);
    let neg = parseInt(this.props.itemDetails.negative);

    const chartComponent = {
      chart: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        height: 330,
        width: 300,
        // plotBackgroundColor: '#e1ffff',
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
        style: {
          float: "right",
          // 'font-family': 'Poppins, sans serif',
        },
      },
      tooltip: {
        pointFormat: "<b>{point.y} %</b>",
      },
      plotOptions: {
        pie: {
          showInLegend: true,
          innerSize: "60%",
          align: "right",
          verticalAlign: "center",
          itemMarginTop: 10,
          dataLabels: {
            enabled: false,
            distance: -14,
            color: "white",
            style: {
              fontWeight: "bold",
              fontsize: 50,
            },
          },
          size: `${this.state.chartSize}%`,
        },
      },
      series: [
        {
          name: "Sentiment",
          colorByPoint: true,
          data: [
            {
              name: "Positive",
              y: pos,
              color: "#41b84b",
            },
            {
              name: "Negative",
              y: neg,
              color: "#d22d48",
            },
          ],
        },
      ],
      title: {
        // text: `Sentiment Analyzed data of ${this.props.itemDetails.item}`
        text: ``,
      },
      subtitle: {
        text: pos + "%",
        style: {
          fontSize: 14,
          fontWeight: "bold",
          align: "center",
          floating: true,
          color: "#000000",
        },
        y: 160,
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 499,
            },
            // chartOptions: {
            //     align: 'center',
            //     size: '90%',
            // },
            plotOptions: {
              pie: {
                size: "90%",
              },
            },
          },
        ],
      },
    };
    // let chartView = this.props.itemDetails ?
    //
    // if (this.props.itemDetails) {
    //     chartView = (
    //         <HighchartsReact
    //         highcharts = { Highcharts }
    //         options = { this.chartComponent }
    //     />
    //     )
    // }

    // console.log('from donetChart ', this.props.itemDetails.item)

    let chartsStock = (
      <div className={classes.DonetChart}>
        <HighchartsReact highcharts={Highcharts} options={chartComponent} />
      </div>
    );

    const itemName = String(this.props.itemDetails.item);
    const capitalizedName =
      itemName.charAt(0).toUpperCase() + itemName.slice(1);

    return (
      <React.Fragment>
        <div className={classes.ChartsRow}>
          <div className={classes.Cards}>
            <p className={classes.PieChartTitle}>Overall Report</p>
            <p className={classes.PieChartItemName}>{capitalizedName}</p>
            <div className={classes.PieChart}>{chartsStock}</div>
          </div>
          <ProgressBars features={this.props.itemDetails.features} />
        </div>

        {/*<div className={classes.FeedbackCardsRow}>*/}
        {/*    <div className={classes.FeedbackCards}>*/}
        {/*        <FeatureOne comments={this.props.itemDetails.features}/>*/}
        {/*    </div>*/}
        {/*    <div className={classes.FeedbackCards}>*/}
        {/*        <FeatureTwo comments={this.props.itemDetails.features}/>*/}

        {/*    </div>*/}
        {/*    <div className={classes.FeedbackCards}>*/}
        {/*        <FeatureThree comments={this.props.itemDetails.features}/>*/}

        {/*    </div>*/}
        {/*</div>*/}
      </React.Fragment>
    );
  }
}

export default DonetChart;
