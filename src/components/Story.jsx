/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, memo } from "react";
import { getStory } from "../services/hnApi";
import { Card, Button } from "react-bootstrap";
import { mapTime } from "../mappers/mapTime";
import { Row, Col, Container } from "react-bootstrap";

export const Story = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <>
      <Card.Body className="stire-body">
        {/* <div>
        <a href={story.url}>{story.title}</a>
      </div> */}
        <Row>
          <Card.Title className="titlu-stire">
            <h2>{story.title}</h2>
          </Card.Title>
        </Row>
        {/* <span>
          <div color="#000">By:</div> {story.by}
        </span> */}
        <Row>
          <Col>
            <Card.Text className="text-stire">
              <h3> By </h3>
            </Card.Text>
            <Card.Text className="text-stire">
              <h3>{story.by}</h3>
            </Card.Text>
          </Col>
        </Row>
        {/* <span>
          <div color="#000">Posted:</div> {` `}
          {mapTime(story.time)}
        </span> */}
        <Row>
          <Col>
            <Card.Text className="text-stire">
              <h4>Posted:</h4>
            </Card.Text>

            <Card.Text className="text-stire">
              <h4>{mapTime(story.time)}</h4>
            </Card.Text>
          </Col>

          <Col>
            <Button href={story.url} variant="primary" className="buton-stire">
              Mai multe...
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </>
  ) : null;
});
