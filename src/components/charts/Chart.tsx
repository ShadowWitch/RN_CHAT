import React, { useEffect, useMemo, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { addMonths, compareAsc, format } from "date-fns";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { globalStyles } from "../../theme/appTheme";

export const Chart = () => {
  const screenWidth = Dimensions.get("window").width * 0.9;

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const data2 = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8],
  };

  return (
    <View
      style={{ justifyContent: "space-evenly", alignItems: "center", flex: 1 }}
    >
      <LineChart
        data={{
          labels: [
            addMonths(new Date(), -1)
              .toLocaleDateString("default", { month: "short" })
              .toLocaleUpperCase(),
            new Date()
              .toLocaleDateString("default", { month: "short" })
              .toLocaleUpperCase(),
            addMonths(new Date(), 1)
              .toLocaleDateString("default", { month: "short" })
              .toLocaleUpperCase(),
            addMonths(new Date(), 2)
              .toLocaleDateString("default", { month: "short" })
              .toLocaleUpperCase(),
          ],
          datasets: [
            {
              data: [
                //TODO: Poner los gatos en milesimas.
                // Math.random() * 1000,
                // Math.random() * 1000,
                1, 2,
              ],
            },
            {
              data: [
                //TODO: Poner los gatos en milesimas.
                // Math.random() * 1000,
                // Math.random() * 1000,
                4, 1,
              ],
            },
          ],
        }}
        width={screenWidth} // from react-native
        // width={10}
        height={220}
        yAxisLabel="L."
        // yAxisSuffix="mil"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "red",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          // marginHorizontal: globalStyles.globalMargin.marginHorizontal
        }}
      />

      <ProgressChart
        data={data2}
        width={screenWidth}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
        style={{
          borderRadius: 16,
        }}
      />
    </View>
  );
};
