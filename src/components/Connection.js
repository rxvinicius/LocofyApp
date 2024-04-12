import { Button } from "@mui/material";
import "./Connection.css";

const Connection = () => {
  return (
    <section className="connection">
      <div className="container1">
        <img
          className="sibling-edge-icon"
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className="ancestor-edge">
          <img
            className="ancestor-edge-child"
            loading="lazy"
            alt=""
            src="/frame-46@2x.png"
          />
          <img
            className="ancestor-edge-item"
            loading="lazy"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className="ancestor-edge-inner"
            loading="lazy"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className="frame-icon"
            loading="lazy"
            alt=""
            src="/frame-49@2x.png"
          />
          <div className="frame-parent">
            <img className="frame-child" alt="" src="/frame-50@2x.png" />
            <img
              className="vector-icon"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className="branch-subtrees">
        <div className="leaf-subtrees-parent">
          <div className="leaf-subtrees">
            <div className="siblings-subtree">
              <div className="brightwoods-cabin-parent">
                <h2 className="brightwoods-cabin">Brightwoods Cabin</h2>
                <div className="bridlepath-ontario-canada">
                  Bridlepath, Ontario, Canada
                </div>
              </div>
              <img
                className="heart-icon1"
                loading="lazy"
                alt=""
                src="/hearticon.svg"
              />
            </div>
            <div className="frame-group">
              <div className="parent">
                <div className="div">5.0</div>
                <img className="vector-icon1" alt="" src="/vector-1.svg" />
              </div>
              <div className="reviews-wrapper">
                <div className="reviews">200 Reviews</div>
              </div>
            </div>
          </div>
          <div className="welcome-to-our">{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
        </div>
        <div className="frame-container">
          <div className="frame-div">
            <div className="group">
              <b className="b">$658</b>
              <div className="night-wrapper">
                <div className="night1">/night</div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="icontrend-parent">
                <div className="icontrend">
                  <div className="icon-parent">
                    <img className="icon" alt="" src="/icon.svg" />
                    <div className="frame-item" />
                  </div>
                </div>
                <div className="best-time-to-book-wrapper">
                  <div className="best-time-to">Best time to Book</div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="search-flights-button1"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#00c29f",
              borderRadius: "6px",
              "&:hover": { background: "#00c29f" },
              height: 58,
            }}
          >
            Book this home
          </Button>
        </div>
        <div className="subtree-connection-plus">
          <div className="hosted-by">Hosted by:</div>
          <div className="formatter">
            <img
              className="data-processor-icon"
              loading="lazy"
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className="control-center">
              <div className="michelle-ward">Michelle Ward</div>
              <div className="joined-in-may">Joined in May 2021</div>
            </div>
            <button className="signal-boost">
              <img className="input-filter-icon" alt="" src="/vector-2.svg" />
              <div className="superhost1">Superhost</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connection;
