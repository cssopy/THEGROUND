import { ResponsiveRadar } from "@nivo/radar";

const MyResponsiveRadar = ({ data /* see data tab */ }) => (
  <>
    <ResponsiveRadar
      data={data}
      keys={["chardonay"]}
      indexBy="taste"
      maxValue={1}
      valueFormat=" >-.2f"
      margin={{ top: 0, right: 80, bottom: 150, left: 100 }}
      borderColor="#ffffff"
      gridShape="linear"
      gridLabelOffset={14}
      enableDots={false}
      dotSize={10}
      dotColor={{ theme: "background" }}
      dotBorderWidth={2}
      colors={{ scheme: "set2" }}
      fillOpacity={1}
      motionConfig="wobbly"
      theme={{ textColor: "#ffffff" }}
    />
  </>
);

export default MyResponsiveRadar;
