import React, { Component } from "react";
import Content from "./Content";
import { Card } from "react-bootstrap";
import Stire from "./Stire";
import Load from "./Load";
import { getNews } from "../services/news";
// import { useEffect } from "react";
import Aux from "./Aux";

class Stiri extends Component {
  render() {
    return (
      <>
        <Content title="Stiri si noutati" />
        {/* // <Aux /> */}

        <Load source={getNews}>
          {({ value, loading }) => (
            <Card className="card-stire">
              {!loading
                ? value.map((stire) => <Stire stire={stire} />)
                : // ? value.map((stire) => (
                  //     <Stire title={stire.nume} content="asfsafas" />
                  //   ))
                  "Loading"}
            </Card>
          )}
        </Load>
      </>
    );
  }
}
export default Stiri;
