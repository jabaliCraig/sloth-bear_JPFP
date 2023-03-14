import React from "react";
import { useSelector } from "react-redux";
import { selectAuthors } from "../features/authors/authorsSlice";
import { NavLink } from "react-router-dom";

const AllAuthors = () => {
  const authors = useSelector(selectAuthors);
  return (
    <div>
      {authors && authors.length
        ? authors.map((author) => (
            <NavLink
              to={`/authors/${author.id}`}
              key={`All Authors: ${author.id}`}
            >
              <div className="author row">
                <img src={author.imageUrl} />
                <p>{author.name}</p>
              </div>
            </NavLink>
          ))
        : null}
    </div>
  );
};

export default AllAuthors;
