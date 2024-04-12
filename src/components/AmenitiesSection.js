import { useMemo } from "react";
import "./AmenitiesSection.css";

const AmenitiesSection = ({
  mdilake,
  lakeside,
  tablertoolsKitchen2,
  kitchen,
  materialSymbolsnestCamIqO,
  securityCamerasOnProperty,
  ionwifi,
  wifi,
  propFlex,
  propMinHeight,
  propMinWidth,
  propWidth,
  propFlex1,
  propMinWidth1,
  propAlignSelf,
  propMinWidth2,
  propMinWidth3,
}) => {
  const amenitiesSection1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const mdilakeIconStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const lakesideStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const phfireextinguisherStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const kitchenStyle = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth1,
    };
  }, [propFlex1, propMinWidth1]);

  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const securityCamerasOnStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const wifiStyle = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div className="amenitiessection1" style={amenitiesSection1Style}>
      <div className="mdilake-parent">
        <img
          className="mdilake-icon"
          loading="lazy"
          alt=""
          src={mdilake}
          style={mdilakeIconStyle}
        />
        <div className="lakeside" style={lakesideStyle}>
          {lakeside}
        </div>
      </div>
      <div className="phfireextinguisher" style={phfireextinguisherStyle}>
        <img
          className="tablertools-kitchen-2-icon"
          loading="lazy"
          alt=""
          src={tablertoolsKitchen2}
        />
        <div className="kitchen" style={kitchenStyle}>
          {kitchen}
        </div>
      </div>
      <div
        className="material-symbolsnest-cam-iq-o-parent"
        style={frameDivStyle}
      >
        <img
          className="material-symbolsnest-cam-iq-o-icon"
          loading="lazy"
          alt=""
          src={materialSymbolsnestCamIqO}
        />
        <div className="security-cameras-on" style={securityCamerasOnStyle}>
          {securityCamerasOnProperty}
        </div>
      </div>
      <div className="security-cameras">
        <img className="ionwifi-icon" loading="lazy" alt="" src={ionwifi} />
        <div className="wifi" style={wifiStyle}>
          {wifi}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSection;
