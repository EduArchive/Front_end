import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slogan from "./components/Slogan";
import { Main, MediaDiv } from "./styledComponents";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import styled from "styled-components";

import Temp from "./Temp";
import ShowPostList from "./components/ShowPostList";
import ShowPost from "./components/ShowPost";
import WritePost from "./components/WritePost";

import MainView from "./components/MainView";

export const APIURL = process.env.REACT_APP_APIURL;

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        {/* Global Styling */}
        <GlobalStyles />
        <MediaDiv>
          {/* Header */}
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            {/* Slogan */}
            <Slogan />

            <Temp />
            {/* Routes */}
            <Routes>
              <Route path="/main" element={<MainView />} />
              <Route path="/post" element={<ShowPostList />} />
              <Route path="/write" element={<WritePost />} />
              <Route path="/post/:postID" element={<ShowPost />} />
              <Route path="/course/:subject" element={<CourseRedirect />} />
            </Routes>
          </Main>
        </MediaDiv>
        {/* Footer */}
        <Footer />
      </ThemeProvider>
    </>
  );
};

const CourseRedirect = ({ subject }) => {
  // '/course/:subject' 경로로 이동할 때 동작하는 컴포넌트입니다
  return <Navigate to="/post" />;
};

export default App;
