import React, { useEffect } from "react";
import { Navbar, AllStudents } from "./";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { fetchAuthorsAsync } from "../features/authors/authorsSlice";
import { fetchStudentsAsync } from "../features/allStudents/allStudentsSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudentsAsync());
		//dispatch(fetchCampusesAsync());
  }, [dispatch]);

  return (
    <div id="main">
      <div className="column container">
        <div id="header">
          <h1>ACME Institutes of Academic Learning</h1>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/students" element={<AllStudents />} />
        {/* <Route path="/authors" element={<AllAuthors />} />
        <Route path="/stories/:storyId/*" element={<SingleStory />} />
        <Route path="/authors/:authorId/*" element={<SingleAuthor />} />
        <Route path="/" element={<AllStories />} /> */}
      </Routes>
    </div>
  );
};

export default App;
