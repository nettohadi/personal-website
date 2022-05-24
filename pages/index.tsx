import type { NextPage } from "next";
import { Flex, Button, Text, Heading, Image, Box } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import Hadi_1 from "../public/images/Hadi_1.jpg";

const Home: NextPage = () => {
  return (
    <>
      <Box bgGradient="linear(to-br, yellow.300 5%,yellow.600 25%,yellow.500 45%, yellow.700 55%, yellow.500 80%, yellow.700 90%)">
        <Box>
          <Flex
            justifyContent={"center"}
            alignItems="center"
            h={20}
            color="white"
            bgColor="gray.800"
            borderBottomRightRadius="400px"
            width="95%"
          >
            <Flex maxW="900px" w="100%" gap={10} justifyContent="end">
              <Text
                bgGradient="linear(to-br, yellow.300 5%,yellow.600 25%,yellow.500 45%, yellow.700 55%, yellow.500 80%, yellow.700 90%)"
                bgClip="text"
                fontWeight="bold"
              >
                {" "}
                About
              </Text>
              <Text
                bgGradient="linear(to-br, yellow.300 5%,yellow.600 25%,yellow.500 45%, yellow.700 55%, yellow.500 80%, yellow.700 90%)"
                bgClip="text"
                fontWeight="bold"
              >
                {" "}
                Experience
              </Text>
              <Text
                bgGradient="linear(to-br, yellow.300 5%,yellow.600 25%,yellow.500 45%, yellow.700 55%, yellow.500 80%, yellow.700 90%)"
                bgClip="text"
                fontWeight="bold"
              >
                {" "}
                Works
              </Text>
              <Text
                bgGradient="linear(to-br, yellow.300 5%,yellow.600 25%,yellow.500 45%, yellow.700 55%, yellow.500 80%, yellow.700 90%)"
                bgClip="text"
                fontWeight="bold"
              >
                {" "}
                Contacts
              </Text>
            </Flex>
          </Flex>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            h={500}
            gap={10}
            
            color="gray.800"
          >
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              h={500}
              w="100%"
              gap={10}
            >
              <Image
                borderRadius="full"
                align="top"
                src="/images/Hadi_1.jpg"
                alt="Hadi Syahbal"
                boxSize="200px"
                objectFit="cover"
                boxShadow="dark-lg"
              />
              <Flex
                flexDirection="column"
                alignItems="center"
                color="white"
                textShadow="0px 0px 10px black"
              >
                <Heading as="h1" size="lg">
                  Abdul Hadi Syahbal
                </Heading>
                <Heading as="h2" size="2xl">
                  Frontend Developer
                </Heading>
                <Heading as="h3" size="md" mt={5}>
                  Currently working remotely
                  <Box display="inline" ml={2} fontSize="23">
                    ☕
                  </Box>
                </Heading>
              </Flex>
            </Flex>
          </Flex>
        </Box>

        <Flex
          alignItems="center"
          flexDirection="row"
          justifyContent="center"
          h={500}
          gap={5}
          color="white"
          bgColor="gray.800"
          borderTopLeftRadius="100px"
        >
          <Flex maxWidth={500} overflow="hidden">
            <Heading
              as="h1"
              size="3xl"
              bgGradient="linear(to-br, yellow.300 5%,yellow.600 25%,yellow.500 45%, yellow.700 55%, yellow.500 80%, yellow.700 90%)"
              bgClip="text"
            >
              I Work with JavaScript a lot
            </Heading>
          </Flex>
          <Flex maxWidth={500}>
            <Text lineHeight={8} fontSize="xl" fontWeight="medium">
              I work with most of the JS frameworks like Vue, Svelte, and React.
              I am particularly fond of React. I created my own JS framework
              called Reaksi. Reaksi is a lot like React (hence the name)
            </Text>
          </Flex>
        </Flex>
        <Flex
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          minHeight={500}
          gap={5}
          color="white"
        >
          <Flex overflow="hidden" mb={10}>
            <Heading
              as="h1"
              size="3xl"
              bgGradient="linear(to-tr, yellow.500, yellow.700)"
              bgClip="text"
            >
              Some of my works :
            </Heading>
          </Flex>
          <Flex flexDirection="column" gap={20}>
            <Flex flexDirection="row" maxWidth={1000} gap={8}>
              <Flex flexDirection="column" gap={4} flex={1}>
                <Heading>Reaksi</Heading>
                <Text>
                  Reaksi is a React-like library with the same modern API. This
                  is an attempt to understand how React works under the hood by
                  recreating many of its features.
                </Text>
              </Flex>
              <Flex
                pt={10}
                pl="50px"
                overflow="hidden"
                borderRadius={10}
                w="50%"
                h="400px"
                flex={1}
                position="relative"
                bgGradient="linear(to-tr, yellow.400, yellow.700)"
              >
                <Image
                  position="absolute"
                  h="700px"
                  w="700px"
                  borderRadius={10}
                  objectFit="cover"
                  objectPosition="left center"
                  src="/images/portofolios/reaksi.png"
                />
              </Flex>
            </Flex>
            <Flex flexDirection="row" maxWidth={1000} gap={8}>
              <Flex flexDirection="column" gap={4} flex={1}>
                <Heading>POS for Rocket Chicken Indonesia</Heading>
                <Text>
                  Reaksi is a React-like library with the same modern API. This
                  is an attempt to understand how React works under the hood by
                  recreating many of its features.
                </Text>
              </Flex>
              <Flex
                pt={10}
                pl="50px"
                overflow="hidden"
                borderRadius={10}
                w="50%"
                h="400px"
                flex={1}
                position="relative"
                bgGradient="linear(to-tr, yellow.400, yellow.700)"
              >
                <Image
                  position="absolute"
                  h="700px"
                  w="700px"
                  borderRadius={10}
                  objectFit="cover"
                  objectPosition="left center"
                  src="/images/portofolios/rocket.png"
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
