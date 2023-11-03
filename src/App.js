import logo from "./logo.svg"
import "./App.css"
import HeaderImage from "./HeaderImage"
import FormLeft from "./formLeft"
import StatsRight from "./StatsRight"

function App() {
  return (
    <>
      <div className="heroContainer">
        <div>
          <HeaderImage />
        </div>
        <div className="formStatContainer">
          <div className="formLeft">
            <FormLeft />
          </div>
          <div className="statsRight">
            <StatsRight />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
