/* eslint-disable no-unused-vars */
import { Col } from "react-bootstrap"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"

function FormLeft() {
  return (
    <>
      <div className="leftContainer">
        <h1>
          Park Cannon believes hearing from her constituents make the community
          a better place!
        </h1>
        <br />
        <p>
          Send Park Cannon a message below if you have a community concern you
          would like for her to address
        </p>

        <div className="messageBox">
          <form action="" method="post" id="">
            <h6>Message</h6>
            <textarea
              name=""
              id=""
              placeholder="Dear Park Cannon, I am writing to express my concern about
[specific issue you want to address]."
            ></textarea>
            <br /> <br />
            <h6>Issue</h6>
            <DropdownButton id="DropdownCustom" title="Other">
              <Dropdown.Item className="dropdownMenu" href="#/action-1">
                Action
              </Dropdown.Item>
              <br />
              <Dropdown.Item className="dropdownMenu" href="#/action-2">
                Another action
              </Dropdown.Item>
              <br />
              <Dropdown.Item className="dropdownMenu" href="#/action-3">
                Something else
              </Dropdown.Item>
              <br />
              <Dropdown.Item className="dropdownMenu" href="#/action-4">
                Another action
              </Dropdown.Item>
              <br />
              <Dropdown.Item className="dropdownMenu" href="#/action-5">
                Something else
              </Dropdown.Item>
            </DropdownButton>
            {/*  */}
            <br /> <br /> <br />
            <div className="zipCode">
              <div>
                {" "}
                <h6>Zip Code : </h6>
              </div>
              <div>
                <textarea name="" id=""></textarea>
              </div>
              <div>
                {" "}
                <h6>+ 1 : </h6>
              </div>
              <div>
                {" "}
                <textarea name="" id=""></textarea>
              </div>
            </div>
            <br />
            <p className="zipCodeFinder">
              You Can Look Up Your Full Zip Code{" "}
              <a className="zipcodeFiner_Here" href="">
                Here
              </a>
            </p>
            <br /> <br />
            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>
        </div>
        <p className="noteThis">
          For your safety, please refrain from sharing any sensitive
          information. We don't require any identifying details to receive and
          address your concerns.
        </p>
      </div>
    </>
  )
}

export default FormLeft
