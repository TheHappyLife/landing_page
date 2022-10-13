import { Box, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import Content from "../components/Content";
import IntroducePage from "../components/IntroducePage";
import { NextSeo } from "next-seo";
import SEO from "../next-seo.config";
import SubmitPopup from "../components/SubmitPopup";
const landingPage = {
  media: {
    videoLink: "gemblockchain-io-intro-desktop.mp4",
    backgroundImageLinks: ["landingpage.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg"],
  },
  introduceContents: {
    title: "Welcome To Innovative Template",
    description:
      "Aenean sed mi leo. Donec mollis ut sem sed scelerisque. Sed at lorem sem. Vestibulum ornare hendrerit augue, suscipit finibus dui imperdiet ut. Quisque placerat nulla sed enim mattis aliquet. Phasellus vel nulla neque. Maecenas faucibus lectus at nunc ultricies finibus.",
    features: [
      {
        title: "Waiting here",
        description: "Donec mollis ut sem sed scelerisque. Sed at lorem sem.",
        image: "img-1.jpg",
      },
      {
        title: "Waiting here",
        description: "Donec mollis ut sem sed scelerisque. Sed at lorem sem.",
        image: "img-2.jpg",
      },
      {
        title: "Waiting here",
        description: "Donec mollis ut sem sed scelerisque. Sed at lorem sem.",
        image: "img-3.jpg",
      },
      {
        title: "Waiting here",
        description: "Donec mollis ut sem sed scelerisque. Sed at lorem sem.",
        image: "img-4.jpg",
      },
    ],
    skillTitle: "Our Skills",
    skills: [
      {
        skill: "WEBDESIGN",
        value: 93,
      },
      {
        skill: "PHOTOGRAPHY",
        value: 90,
      },

      {
        skill: "MARKETING",
        value: 60,
      },
    ],
    contactTitle: "Contact Us",
    contacts: {
      address: "4758 Nancy Street +1 919-571-2528 hello@example.com",
      socials: [
        {
          iconSVG:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>',
          social: "Facebook",
          link: "#",
        },
        {
          iconSVG:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>',
          social: "Twitter",
          link: "#",
        },
        {
          iconSVG:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>',
          social: "Youtube",
          link: "#",
        },
        {
          iconSVG:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/></svg>',
          social: "Pinterest",
          link: "#",
        },
      ],
    },
    contactFormTitle: "Contact From",
    nameInputPlaceholder: "Your Name",
    emailInputPlaceholder: "Your Email",
    messageInputPlaceholder: "Your Message",
    buttonText: "Send a Message",
  },
  content: {
    logo: "Landing Page",
    // logo: "",
    // start: new Date(),
    // end: 5,
    // title1: "",
    // title2: "",
    // reminder1: ``,
    // reminder2: ``,
    // subscriptionText: "Notify me",
    // moreDetailsText: "more information",
    title1: "Hey Folks.",
    title2: "This Website is Live Soon!",
    reminder1: `Fresh design and content is preparing right now.`,
    reminder2: `Don't forget to subscribe to stay tuned!`,
    subscriptionText: "Notify me",
    moreDetailsText: "more information",
  },
  popupContent: {
    title: "Stay Tuned",
    description:
      "Be the first to know fresh news, updates and new releases! Just add your e-mail address and well let you know.",
    inputLabel: "Email address",
    buttonContent: "Submit",
  },
};

const backgroundCss = {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

export default function Home() {
  const bgImages = landingPage.media.backgroundImageLinks.length;
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [bgImageIndex, setBgImageIndex] = useState(bgImages);
  const [openModal, setOpenModal] = useState(false);
  const [openIntroducePage, setopenIntroducePage] = useState(false);

  const changeBgImageIndex = () => {
    if (!videoPlaying) {
      console.log("change");
      setBgImageIndex((prev) => (prev + 1 >= bgImages ? 0 : prev + 1));
    }
  };

  const handleVideoEnded = (e) => {
    e.target.parentElement.parentElement.style.opacity = 0;
    setTimeout(() => {
      setVideoPlaying(false);
    }, 2000);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDisplayIntroducePage = () => {
    setopenIntroducePage((prev) => !prev);
  };

  useEffect(() => {
    const changeBgImageIndexInterval = setInterval(changeBgImageIndex, 4000);
    return () => clearInterval(changeBgImageIndexInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoPlaying]);
  console.log("render-app");
  return (
    <Box
      className="App"
      sx={{
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
    >
      <NextSeo
        {...SEO}
      />
      <Box
        className="buffer-bg"
        sx={{
          ...backgroundCss,
          backgroundImage: `url(${landingPage.media.backgroundImageLinks[bgImageIndex]})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></Box>
      <Box
        className="static-page"
        sx={{
          ...backgroundCss,
          display: "flex",
          backgroundImage: `url(${
            landingPage.media.backgroundImageLinks[
              bgImageIndex + 1 >= bgImages ? 0 : bgImageIndex + 1
            ]
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          transition: "2s",
          zIndex: 1,
          display: "flex",
        }}
      >
        <Box
          className="content-wp"
          sx={{
            position: "absolute",
            top: "50%",
            left: "10%",
            transform: "translate(-10%,-50%)",
            fontSize: "1rem",
            "@media (max-width: 1023px)": {
              fontSize: "0.7rem",
            },
            "@media (max-width:500px)": {
              fontSize: "0.6rem",
            },
            "@media (max-width:300px)": {
              fontSize: "0.35rem",
            },
          }}
        >
          <Content
            content={landingPage.content}
            myfontsize={1.2}
            count={true}
            enddate={[2022, 9, 14, 2, 34, 46]}
            notifybuttonfunction={handleOpenModal}
            moreinformationbuttonfunction={handleDisplayIntroducePage}
          />
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <SubmitPopup
              popupContent={landingPage.popupContent}
              closepopup={handleCloseModal}
            />
          </Modal>
        </Box>
        <Box
          className="introduce-page-wp"
          sx={{
            maxWidth: "800px",
            position: "absolute",
            zIndex: 3,
            right: 0,
            top: 0,
          }}
        >
          {openIntroducePage && (
            <IntroducePage
              introducecontents={landingPage.introduceContents}
              oncloseintroducepage={handleDisplayIntroducePage}
            />
          )}
        </Box>
      </Box>
      {videoPlaying && (
        <Box
          className="video-wrapper"
          sx={{
            position: "fixed",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            zIndex: 2,
            transition: "2s",
          }}
        >
          <BackgroundVideo
            link={landingPage.media.videoLink}
            autoPlay
            handleVideoEnded={handleVideoEnded}
          />
        </Box>
      )}
    </Box>
  );
}
