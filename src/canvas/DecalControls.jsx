import React from "react";
import state from "../store";
import styled, { keyframes } from "styled-components";

// Animation for fade-in effect
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components
const Container = styled.div`
  bottom: 20px; /* Position it 20px from the bottom */
  color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  font-family: "inherit !important";
  width: 150px;
  margin-bottom: 20%;
  animation: ${fadeIn} 0.5s ease; /* Fade-in effect */
  transition: box-shadow 0.3s;

  /* Subtle hover effect on the container */
  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 120px; /* Adjust width for smaller screens */
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Oswald !important";
`;

const ArrowPad = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px; /* Space between buttons */
`;

const Button = styled.button`
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #aaa; /* Light gray border */
  background-color: #fff; /* White background */
  color: #333; /* Dark gray text */
  cursor: pointer;
  font-size: 13px;
  width: 40px; /* Set width for consistent button size */
  height: 40px; /* Set height for consistent button size */
  transition: background-color 0.3s, box-shadow 0.3s, transform 0.1s;

  /* Glow effect on hover */
  &:hover {
    background-color: #f0f0f0; /* Light gray on hover */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 150, 255, 0.6); /* Glow effect */
  }

  &:active {
    background-color: #e0e0e0; /* Slightly darker gray when active */
    color: #111; /* Darker text */
    transform: scale(0.95);
  }
`;

const Heading = styled.h4`
  font-family: "inherit !important";
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: bold;
  color: white; /* Dark gray for the heading */
`;

const DecalControls = () => {
  const moveLogo = (axis, value) => {
    const positionKey = "logoPosition"; // Only dealing with logo position
    if (!state[positionKey]) {
      state[positionKey] = [0, 0, 0];
    }
    state[positionKey][axis] += value;
  };

  return (
    <Container>
      <Section>
        <Heading>Logo Controls</Heading>
        <ArrowPad>
          <ButtonRow>
            <Button onClick={() => moveLogo(1, 0.01)}>↑</Button> {/* Up */}
          </ButtonRow>
          <ButtonRow>
            <Button onClick={() => moveLogo(0, -0.01)}>←</Button> {/* Left */}
            <Button onClick={() => moveLogo(0, 0.01)}>→</Button> {/* Right */}
          </ButtonRow>
          <ButtonRow>
            <Button onClick={() => moveLogo(1, -0.01)}>↓</Button> {/* Down */}
          </ButtonRow>
        </ArrowPad>
      </Section>
    </Container>
  );
};

export default DecalControls;
