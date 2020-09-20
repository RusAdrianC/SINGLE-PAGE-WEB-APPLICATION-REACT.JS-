import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnApi";
import { Story } from "./Story.jsx";
import Content from "./Content";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { Card } from "react-bootstrap";

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <>
      <Content title="Stiri si noutati" />
      {storyIds.slice(0, count).map((storyId) => (
        <Card className="card-stire">
          <Story key={storyId} storyId={storyId} />
        </Card>
      ))}
    </>
  );
};
