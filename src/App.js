import React, { Component } from "react";
import "./App.css";

import New from "./asset/n.mp4";
import Mov from "./asset/m.mov";
import Nn from "./asset/nn.mp4";
import Qt from "./asset/qq.mp4";
import Nm from "./asset/nm.mp4";
import Mn from "./asset/mn.mp4";
import Mm from "./asset/mm.mp4";
import Black from "./asset/black.mp4";
import Thread from "./asset/thread.mp4";
import Inward from "./asset/inward.mp4";

class App extends Component {
  render() {
    return (
      <div className="App" ref="app">
        <Header />
        <About />
        <Truth />
        <Course />
        <Feel />
      </div>
    );
  }
}

const BgVid = props => {
  return (
    <div className="bg-vid">
      <video src={props.src} autoPlay loop muted />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <BgVid src={Nm} />
      <div className="inner">
        <h1>
          <h2>
            <br />
            <br />
            <br />
            <br />
            Who are you?
            <br />
            <br />
            You have <span className="fancy">no </span> idea...
            <br />
            Do you...
          </h2>
        </h1>
      </div>
    </header>
  );
};

const About = () => {
  return (
    <header className="header">
      <BgVid src={Black} />
      <div className="truth">
        <div className="inner">
          <h1>
            <br />
            <br />
            You haven't <h2>lost</h2>your mind.
            <br />
            <br />
            You just haven't <h2>taken ownership</h2> of it yet
          </h1>
        </div>
      </div>
    </header>
  );
};

const Truth = () => {
  return (
    <header className="header">
      <BgVid src={Mn} />
      <div className="about">
        <div className="inner">
          <h1>
            <h2>
              start noticing
              <br />
              the blatant hints
            </h2>
            <span className="fancy">
              riddled
              <h2>
                throughout the very
                <br />
                fabric of your existence
              </h2>{" "}
              <br />
              Recognize
            </span>{" "}
            <h2>the patterns</h2>.
          </h1>
        </div>
      </div>
    </header>
  );
};

const Course = () => {
  return (
    <header className="header">
      <BgVid src={Mov} />
      <div className="course">
        <div className="inner">
          <h2>
            Your invaluable gift
            <br />
            of free thought
            <br />
            is being weakened by:
            <br />
            carnal distrations,
            <br />
            and a shocking disinterest
            <br /> in the examination of
            <br />
            anything outside of your
            <br />
            societal comfort zone.
            <br /> You exist in a "safety net" of monotony
          </h2>
        </div>
      </div>
    </header>
  );
};

const Feel = () => {
  return (
    <header className="header">
      <BgVid src={Nm} />
      <div className="feel">
        <div className="inner">
          <h1>
            <h2>
              This
            </h2>{" "}
            significantly unintelligent{" "}
            <h2>
              society<br />
              <br />
              will<br />think <span className="fancy">for</span> you
              <br />
              <br />
              if you don't
            </h2>
            <br />
            Think for yourself.
          </h1>
        </div>
      </div>
    </header>
  );
};

export default App;
