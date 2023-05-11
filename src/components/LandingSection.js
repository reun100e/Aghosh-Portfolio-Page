import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Aghosh!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const url = "https://i.imgur.com/kM0Z0Vz.jpg"; 

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
    <Avatar name="Pete" src={url} size="2xl"/> 
      <Heading size="xs" color="white" id="avatar">
        {greeting}
      </Heading>
      <Heading size="xl" color="white">
        {bio1}
      </Heading>
      <Heading size="xl" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
