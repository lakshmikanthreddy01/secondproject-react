import { Box, Container, Heading, Stack,Text, color } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";
import { Image } from '@chakra-ui/react';


const headingOptions={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"UpperCase",
    p:"4",
    sixe:"4xl",
}

const Home = () => {
  return <Box>
    <Carousel 
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    >
        <Box w="full" h={"100vh"}>
            <img src={img1}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                Watch the future
            </Heading>
        </Box>
        <Box w="full" h={"100vh"}>
            <img src={img2}/>
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
                Future is Gaming
            </Heading>
        </Box>
        <Box w="full" h={"100vh"}>
            <img src={img3}/>
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
                Gaming the console
            </Heading>
        </Box>
        <Box w="full" h={"100vh"}>
            <img src={img4}/>
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
                Night high is cool
            </Heading>
        </Box>
    </Carousel>
    <Container maxW={"container.xl"} maxH={"100vh"} p={"16"}>
        <Heading textTransform={"uppercase"} py={"2"} w={'fit-content'} borderBottom={"2px solid"} m="auto">Services</Heading>
        <Stack 
        h="full"
        p={"4"}
        alignItems={"center"}
        direction={["column","row"]}
        >
            <Image src={img5} h={["40","400"]} filter={"hue-rotate(-130deg)"} />
            <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4","16"]}
            textAlign={"Center"}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ut officia excepturi porro ducimus, neque modi incidunt quaerat magnam, voluptate hic asperiores beatae aliquam earum consequuntur deserunt laboriosam, repellat quos.
            </Text>
        </Stack>
    </Container>
  </Box>
}


export default Home