import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderWidth="1px"
      borderRadius="md"
      padding={4}
      spacing={4}
      alignItems="flex-start"
      boxShadow="md"
    >
      <Image src={imageSrc} alt={title} />
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text>{description}</Text>
      <HStack spacing={2} marginTop="auto">
        <Text>Learn More</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>

    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.
  );
};

export default Card;
