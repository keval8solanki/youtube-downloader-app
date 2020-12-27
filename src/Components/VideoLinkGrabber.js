import React, { useRef, useState } from "react";
import styled from "styled-components";

const VideoLinkGrabber = () => {
  const linkRef = useRef();

  const grabVideoHandler = (e) => {
    e.preventDefault();
    const link = linkRef.current.value;
    linkRef.current.value = "";
    linkRef.current.focus();
    console.log(link);
  };

  return (
    <GrabberContainer onSubmit={grabVideoHandler}>
      <input ref={linkRef} placeholder="Place link here..." />
      <button type="submit">Download</button>
    </GrabberContainer>
  );
};

export default VideoLinkGrabber;

const GrabberContainer = styled.form``;
