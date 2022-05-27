import type { NextPage } from "next";
import { Flex, Button, Text, Heading, Image, Box } from "@chakra-ui/react";

const Home: NextPage = () => {
  const gradientYellow =
    "linear(to-br, yellow.300 5%,yellow.600 25%,yellow.500 45%, yellow.700 55%, yellow.500 80%, yellow.700 90%)";
  return (
    <>
      <Box bgColor="gray.800">
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
              <Text className="animate-background" bgClip="text" fontWeight="bold">
                {" "}
                About
              </Text>
              <Text className="animate-background" bgClip="text" fontWeight="bold">
                {" "}
                Experience
              </Text>
              <Text className="animate-background" bgClip="text" fontWeight="bold">
                {" "}
                Works
              </Text>
              <Text className="animate-background" bgClip="text" fontWeight="bold">
                {" "}
                Contacts
              </Text>
            </Flex>
          </Flex>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            gap={10}
            color="gray.800"
            flexDirection="column"
          >
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              h={580}
              w="100%"
              gap={10}
              className="animate-background"
              flexDirection="column"
              position="relative"
            >

              <Box
                  style={{
                    position: "absolute",
                    top: "0px",
                    height: "150px",
                    width: "100%",
                    overflow: "hidden",
                    display:"block",
                  }}
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    height="100%"
                    width="100%"
                >
                  <path
                      fill="#805AD5"
                      fillOpacity="1"
                      d="M0,288L48,282.7C96,277,192,267,288,234.7C384,203,480,149,576,117.3C672,85,768,75,864,101.3C960,128,1056,192,1152,192C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                  >
                    <animate
                        repeatCount="indefinite"
                        fill="#805AD5"
                        attributeName="d"
                        dur="10s"
                        values="
                M0,288L48,282.7C96,277,192,267,288,234.7C384,203,480,149,576,117.3C672,85,768,75,864,101.3C960,128,1056,192,1152,192C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;

                M0,96L48,122.7C96,149,192,203,288,192C384,181,480,107,576,69.3C672,32,768,32,864,74.7C960,117,1056,203,1152,234.7C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;

                M0,288L48,282.7C96,277,192,267,288,234.7C384,203,480,149,576,117.3C672,85,768,75,864,101.3C960,128,1056,192,1152,192C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;">

                    </animate>
                  </path>
                </svg>
              </Box>
              <Box
                  style={{
                    position: "absolute",
                    top: "-15px",
                    height: "150px",
                    width: "100%",
                    overflow: "hidden",
                    display:"block",
                  }}
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    height="100%"
                    width="100%"
                >
                  <path
                      fill="rgb(26, 32, 44)"
                      fillOpacity="1"
                      d="M0,288L48,282.7C96,277,192,267,288,234.7C384,203,480,149,576,117.3C672,85,768,75,864,101.3C960,128,1056,192,1152,192C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                  >
                    <animate
                        repeatCount="indefinite"
                        fill="rgb(26, 32, 44)"
                        attributeName="d"
                        dur="20s"
                        values="
                M0,288L48,282.7C96,277,192,267,288,234.7C384,203,480,149,576,117.3C672,85,768,75,864,101.3C960,128,1056,192,1152,192C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;

                M0,96L48,122.7C96,149,192,203,288,192C384,181,480,107,576,69.3C672,32,768,32,864,74.7C960,117,1056,203,1152,234.7C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;

                M0,288L48,282.7C96,277,192,267,288,234.7C384,203,480,149,576,117.3C672,85,768,75,864,101.3C960,128,1056,192,1152,192C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;">

                    </animate>
                  </path>
                </svg>

              </Box>
              <Flex w="100%" flexDirection="row" alignItems="center" gap="80px" justifyContent="center">
                <Image
                  borderRadius="full"
                  align="top"
                  src="/images/Hadi_1.jpg"
                  alt="Hadi Syahbal"
                  boxSize="250px"
                  objectFit="cover"
                  boxShadow="dark-lg"
                />
                <Flex
                  flexDirection="column"
                  alignItems="left"
                  color="white"
                  textShadow="0px 0px 10px black"
                  gap="20px"
                >
                  <Heading as="h1" size="lg" color="gray.700" textShadow="0px 0px 5px white">
                    Frontend Developer
                  </Heading>
                  <Heading as="h2" size="3xl">
                    Abdul Hadi Syahbal
                  </Heading>
                  <Heading as="h3" size="md" mt={0}>
                    Currently working remotely
                    <Box display="inline" ml={2} fontSize="23">
                      ☕
                    </Box>
                  </Heading>
                  <Flex gap="10px">
                    <Button bgColor="gray.800">
                      Resume
                    </Button>
                    <Button bgColor="gray.800">
                      GitHub
                    </Button>
                    <Button bgColor="gray.800">
                      LinkedIn
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                  style={{ position: "absolute", bottom: "0px" }}
                  preserveAspectRatio="none"
                  height="100px"
                  width="100%"
              >
                <path
                    fill="#F6AD55"
                    fillOpacity="1"
                    d="M0,288L48,240C96,192,192,96,288,90.7C384,85,480,171,576,176C672,181,768,107,864,64C960,21,1056,11,1152,16C1248,21,1344,43,1392,53.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                >
                  <animate
                      repeatCount="indefinite"
                      fill="#F6AD55"
                      attributeName="d"
                      dur="18s"
                      values="
                M0,288L48,240C96,192,192,96,288,90.7C384,85,480,171,576,176C672,181,768,107,864,64C960,21,1056,11,1152,16C1248,21,1344,43,1392,53.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;

                M0,96L48,122.7C96,149,192,203,288,192C384,181,480,107,576,69.3C672,32,768,32,864,74.7C960,117,1056,203,1152,234.7C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;

                M0,288L48,240C96,192,192,96,288,90.7C384,85,480,171,576,176C672,181,768,107,864,64C960,21,1056,11,1152,16C1248,21,1344,43,1392,53.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;">
                  </animate>
                </path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                style={{ position: "absolute", bottom: "-10px" }}
                preserveAspectRatio="none"
                height="100px"
                width="100%"
              >
                <path
                  fill="rgb(26, 32, 44)"
                  fillOpacity="1"
                  d="M0,288L48,240C96,192,192,96,288,90.7C384,85,480,171,576,176C672,181,768,107,864,64C960,21,1056,11,1152,16C1248,21,1344,43,1392,53.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                >
                  <animate
                      repeatCount="indefinite"
                      fill="rgb(26, 32, 44)"
                      attributeName="d"
                      dur="20s"
                      values="
                M0,288L48,240C96,192,192,96,288,90.7C384,85,480,171,576,176C672,181,768,107,864,64C960,21,1056,11,1152,16C1248,21,1344,43,1392,53.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;

                M0,96L48,122.7C96,149,192,203,288,192C384,181,480,107,576,69.3C672,32,768,32,864,74.7C960,117,1056,203,1152,234.7C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;

                M0,288L48,240C96,192,192,96,288,90.7C384,85,480,171,576,176C672,181,768,107,864,64C960,21,1056,11,1152,16C1248,21,1344,43,1392,53.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;">

                  </animate>
                </path>
              </svg>

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
              className="animate-background"
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
