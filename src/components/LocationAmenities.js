import { Button } from "@mui/material";
import AmenitiesSection from "./AmenitiesSection";
import "./LocationAmenities.css";

const LocationAmenities = () => {
  return (
    <div className="location-amenities">
      <div className="generator">
        <h3 className="amenities">Amenities</h3>
        <div className="multiplier">
          <div className="regulator">
            <AmenitiesSection
              mdilake="/mdilake.svg"
              lakeside="Lakeside"
              tablertoolsKitchen2="/tablertoolskitchen2.svg"
              kitchen="Kitchen"
              materialSymbolsnestCamIqO="/materialsymbolsnestcamiqoutdooroutline.svg"
              securityCamerasOnProperty="Security cameras on property"
              ionwifi="/ionwifi.svg"
              wifi="Wifi"
            />
            <AmenitiesSection
              mdilake="/phcar.svg"
              lakeside="Free parking"
              tablertoolsKitchen2="/cilshower.svg"
              kitchen="Outdoor shower"
              materialSymbolsnestCamIqO="/materialsymbolswatervocoutlinerounded.svg"
              securityCamerasOnProperty="Hot water"
              ionwifi="/covidpersonalhygienehandliquidsoap.svg"
              wifi="Shampoo"
              propFlex="0.605"
              propMinHeight="20px"
              propMinWidth="89px"
              propWidth="unset"
              propFlex1="unset"
              propMinWidth1="114px"
              propAlignSelf="unset"
              propMinWidth2="68px"
              propMinWidth3="70px"
            />
            <AmenitiesSection
              mdilake="/phfireextinguisher.svg"
              lakeside="Fire Extinguisher"
              tablertoolsKitchen2="/streamlinefoodkitchenwarerefrigeratorfridgecookappliancescookingnutritionfreezerappliancefood.svg"
              kitchen="Freezer"
              materialSymbolsnestCamIqO="/materialsymbolscoffeemakeroutline.svg"
              securityCamerasOnProperty="Coffee Maker"
              ionwifi="/mdistove.svg"
              wifi="Glass stove"
              propFlex="0.6303"
              propMinHeight="20px"
              propMinWidth="120px"
              propWidth="unset"
              propFlex1="unset"
              propMinWidth1="55px"
              propAlignSelf="unset"
              propMinWidth2="95px"
              propMinWidth3="84px"
            />
          </div>
          <Button
            className="search-flights-button2"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#171e1d",
              fontSize: "16",
              borderColor: "#171e1d",
              borderRadius: "6px",
              "&:hover": { borderColor: "#171e1d" },
              width: 185,
              height: 48,
            }}
          >
            Show all amenities
          </Button>
        </div>
      </div>
      <div className="chart">
        <div className="model">
          <div className="simulation">
            <div className="analysis">
              <h3 className="where-youll-be">Where you’ll be</h3>
              <div className="design">
                <img className="prototype-icon" alt="" src="/vector-3.svg" />
                <div className="the-bridle-path">The Bridle Path</div>
              </div>
            </div>
            <div className="template">
              <div className="weather-info">
                <img
                  className="suncloud-icon"
                  loading="lazy"
                  alt=""
                  src="/suncloud.svg"
                />
                <div className="weather-info1">
                  <div className="temperature">20°C</div>
                  <div className="weather-detail">Broken clouds</div>
                </div>
              </div>
              <div className="frame-parent1">
                <div className="sun-parent">
                  <img className="sun-icon" alt="" src="/sun.svg" />
                  <div className="c-wrapper">
                    <b className="c">23°C</b>
                  </div>
                </div>
                <div className="sun-group">
                  <div className="sun">Sun</div>
                  <div className="aug">27 Aug</div>
                </div>
              </div>
              <div className="frame-parent2">
                <div className="suncloud-parent">
                  <img
                    className="suncloud-icon1"
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className="c-container">
                    <b className="c1">22°C</b>
                  </div>
                </div>
                <div className="mon-parent">
                  <div className="mon">Mon</div>
                  <div className="aug1">28 Aug</div>
                </div>
              </div>
              <div className="frame-parent3">
                <div className="sun-container">
                  <img className="sun-icon1" alt="" src="/sun.svg" />
                  <div className="c-frame">
                    <b className="c2">23°C</b>
                  </div>
                </div>
                <div className="tue-parent">
                  <div className="tue">Tue</div>
                  <div className="aug2">29 Aug</div>
                </div>
              </div>
              <div className="frame-parent4">
                <div className="suncloud-group">
                  <img
                    className="suncloud-icon2"
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className="c-wrapper1">
                    <b className="c3">20°C</b>
                  </div>
                </div>
                <div className="wed-parent">
                  <div className="wed">Wed</div>
                  <div className="aug3">30 Aug</div>
                </div>
              </div>
              <div className="frame-parent5">
                <div className="suncloud-container">
                  <img
                    className="suncloud-icon3"
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className="c-wrapper2">
                    <b className="c4">19°C</b>
                  </div>
                </div>
                <div className="thu-parent">
                  <div className="thu">Thu</div>
                  <div className="aug4">31 Aug</div>
                </div>
              </div>
              <div className="frame-parent6">
                <div className="sun-parent1">
                  <img className="sun-icon2" alt="" src="/sun.svg" />
                  <div className="c-wrapper3">
                    <b className="c5">24°C</b>
                  </div>
                </div>
                <div className="fri-parent">
                  <div className="fri">Fri</div>
                  <div className="sep">1 Sep</div>
                </div>
              </div>
            </div>
          </div>
          <img className="model-child" alt="" src="/rectangle-1@2x.png" />
          <img
            className="data-aggregator-icon"
            loading="lazy"
            alt=""
            src="/frame-92.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationAmenities;
