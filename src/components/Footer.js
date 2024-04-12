import { useMemo } from "react";
import "./Footer.css";

const Footer = ({ propMargin, propMargin1, propMargin2 }) => {
  const supportStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const hostingStyle = useMemo(() => {
    return {
      margin: propMargin1,
    };
  }, [propMargin1]);

  const localhostStyle = useMemo(() => {
    return {
      margin: propMargin2,
    };
  }, [propMargin2]);

  return (
    <footer className="footer">
      <div className="condition-handler">
        <div className="error-handler1">
          <div className="arithmetic-operator">
            <h3 className="support" style={supportStyle}>
              Support
            </h3>
            <div className="help-centre">Help Centre</div>
            <div className="aircover">AirCover</div>
            <div className="combating-discrimination">
              Combating discrimination
            </div>
            <div className="supporting-people-with">
              Supporting people with disabilities
            </div>
            <div className="cencellation-options">Cencellation options</div>
            <div className="report-neighbourhood-concern">
              Report neighbourhood concern
            </div>
          </div>
          <div className="while-loop">
            <h3 className="hosting" style={hostingStyle}>
              Hosting
            </h3>
            <div className="local-home">Local home</div>
            <div className="cover-for-hosts">Cover for hosts</div>
            <div className="hosting-resources">Hosting resources</div>
            <div className="community-forum">Community forum</div>
            <div className="hosting-responsibly">Hosting responsibly</div>
          </div>
          <div className="while-loop1">
            <h3 className="localhost" style={localhostStyle}>
              Localhost
            </h3>
            <div className="newsroom">Newsroom</div>
            <div className="new-features">New Features</div>
            <div className="careers">Careers</div>
            <div className="investres">Investres</div>
            <div className="gift-cards">Gift cards</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
