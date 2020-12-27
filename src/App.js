import React from "react";
import styled from "styled-components";
import VideoLinkGrabber from "./Components/VideoLinkGrabber";

export default function App() {
  return (
    <AppContainer>
      <h1>Paste Youtube video link below</h1>

      <VideoLinkGrabber />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  text-align: center;
`;
