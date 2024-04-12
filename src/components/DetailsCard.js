import { useMemo } from "react";
import "./DetailsCard.css";

const DetailsCard = ({
  container,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
  propMinWidth,
  propMinWidth1,
}) => {
  const dedicatedWorkspaceStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const aPrivateRoomStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="detailscard">
      <img className="container-icon" loading="lazy" alt="" src={container} />
      <div className="dedicated-workspace-parent">
        <div className="dedicated-workspace" style={dedicatedWorkspaceStyle}>
          {dedicatedWorkspace}
        </div>
        <div className="a-private-room" style={aPrivateRoomStyle}>
          {aPrivateRoomEquippedWithW}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
