import type { FC } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Box, Container, Stack } from "@mui/material";

import {
  AboutMe,
  AppBar,
  ContactMe,
  Experiences,
  Footer,
  Intro,
  SideProjects,
  Skills,
} from "./components";
import { APP_DATA } from "./data/data";

const App: FC = () => {
  return (
    <Box sx={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      <AppBar />

      <Container maxWidth="lg" component="main" sx={{ px: { xs: 2, md: 3 } }}>
        <Intro />
        <Stack spacing={{ xs: 4, md: 6 }}>
          <AboutMe />
          <Skills />
          <Experiences list={APP_DATA.experiences} />
          <SideProjects projects={APP_DATA.projects} />
          <ContactMe />
          <Footer />
        </Stack>
      </Container>

      <ToastContainer
        position="top-right"
        hideProgressBar
        theme="dark"
        newestOnTop
      />
    </Box>
  );
};

export default App;
