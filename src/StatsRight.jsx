import ProgressBar from "react-bootstrap/esm/ProgressBar"

function StatsRight() {
  return (
    <>
      <div className="rightContainer">
        <div className="announcements">
          <h5>Announcements</h5>
          <p>All upcoming events and things to look out for are posted below</p>
          <br />

          <h4 className="announcementContent">
            Food Drive at 550 Oakland Drive on
            <br />
            <span className="boldImpInfo">
              Monday, June 18th from 2pm - 6pm
            </span>
            <br />
            Bring Canned Goods and Non-Perishables!
            <br /> <br />
            <span>
              <a href="" className="linkUnderline boldImpInfo">
                Link Here
              </a>
              <br />
              <a href="" className="NolinkUnderline boldImpInfo">
                Add to Calendar
              </a>
            </span>
          </h4>

          <br />
          <br />

          <h4 className="announcementContent">
            Blood Drive at 707 Bronte Rd on
            <br />
            <span className="boldImpInfo">
              Monday, July 14th from 2pm - 9pm
            </span>
            <br />
            Free T-shirts for Donors Link Here Add to Calendar
          </h4>
        </div>

        <br />
        <br />
        <div className="announcements">
          <h5>Community Priorities Spring 2023</h5>
          <p>
            Here are some of the top community concerns from spring 2022. Below
            you can find additional resources:
          </p>
          <br />
          <div>
            <div className="progressReport">
              <div className="progressOf">Abc:</div>
              <div className="progressReading">
                <ProgressBar now={40} />
              </div>
            </div>
            <br />
            <span>
              ABC : <ProgressBar now={40} />
            </span>
            <br />
            <span>
              ABC : <ProgressBar now={90} />
            </span>
            <br />
          </div>
          <br /> <br /> <br />
          <button type="submit" className="submitButton">
            View More
          </button>
        </div>

        <br />
        <br />

        <div className="announcements">
          <h5>Resources</h5>
          <a href="" className="linkUnderline">
            Park Cannon Platform
          </a>
          <a href="" className="linkUnderline">
            Local Voting Locations
          </a>
          <a href="" className="linkUnderline">
            Upcoming Elections
          </a>
          <a href="" className="linkUnderline">
            Road Requests
          </a>
          <a href="" className="linkUnderline">
            Food Stamps Applications
          </a>
          <a href="" className="linkUnderline">
            Upcoming Legislation
          </a>
          <a href="" className="linkUnderline">
            Unemployment Insurance{" "}
          </a>
        </div>
      </div>
    </>
  )
}

export default StatsRight
