import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/css/jsvectormap.css";
import { useEffect } from "react";
import "../../js/us-aea-en";

const MapOne = () => {
  useEffect(() => {
    const mapOne = new jsVectorMap({
      selector: "#mapOne",
      map: "us_aea_en",
      zoomButtons: true,

      regionStyle: {
        initial: {
          fill: "#C8D0D8",
        },
        hover: {
          fillOpacity: 1,
          fill: "#3056D3",
        },
      },
      regionLabelStyle: {
        initial: {
          fontFamily: "Satoshi",
          fontWeight: "semibold",
          fill: "#fff",
        },
        hover: {
          cursor: "pointer",
        },
      },

      labels: {
        regions: {
          render(code) {
            return code.split("-")[1];
          },
        },
      },
    });
  });

  return (
    <div className="border-stroke bg-white px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark col-span-12 rounded-sm border py-6 xl:col-span-7">
      <h4 className="text-black dark:text-white mb-2 text-xl font-semibold">
        Region labels
      </h4>
      <div id="mapOne" className="mapOne map-btn h-90"></div>
    </div>
  );
};

export default MapOne;
