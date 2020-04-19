import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <div className={"container"}>
          <div className={"iconContainer"}>
            <img
              className={"icon"}
              alt="babushka"
              src="http://icons.iconarchive.com/icons/icojam/matreshka/32/red-matreshka-inside-icon-icon.png"
            />
            <span className="timeline" />
          </div>
          <div>
            <span>My title goes here</span>
            <div className={"contentDiv"}>
              Here is some really big text that nobody cares about, Here is some
              really big text nobody cares about
            </div>
          </div>
        </div>

        <div className={"container"}>
          <div className={"iconContainer"}>
            <img
              className={"icon"}
              alt="babushka"
              src="http://icons.iconarchive.com/icons/icojam/matreshka/32/red-matreshka-inside-icon-icon.png"
            />
            <span className="timeline" />
          </div>
          <div>
            <span>My title goes here</span>
            <div className={"contentDiv"}>
              Here is some really big text that nobody cares about, Here is some
              really big text nobody cares about
            </div>
          </div>
        </div>

        <div className={"container"}>
          <div className={"iconContainer"}>
            <img
              className={"icon"}
              alt="babushka"
              src="http://icons.iconarchive.com/icons/icojam/matreshka/32/red-matreshka-inside-icon-icon.png"
            />
            <span />
          </div>
          <div>
            <span>My title goes here</span>
            <div className={"contentDiv"}>
              Here is some really big text that nobody cares about, Here is some
              really big text nobody cares about
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
