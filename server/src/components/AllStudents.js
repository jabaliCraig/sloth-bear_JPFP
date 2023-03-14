import React from "react";
import { useSelector } from "react-redux";
import { selectStudents } from "../features/allStudents/allStudentsSlice";
import AddStudent from "./AddStudent";

import { NavLink } from "react-router-dom";

const AllStudents = () => {
  const students = useSelector(selectStudents);
  return (
		<div className="students-container">
			<AddStudent />
			<div id="students-list" className="column">
				{students && students.length
					? students.map((student) => (
							<div className="student" key={`All Students ${student.id}`}>
								<NavLink to={`/students/${student.id}`}>
									<h3>{student.firstName} {student.lastName}</h3>
								</NavLink>
								{student.campus ? 
								  <span>
										<span> attending </span>
										<NavLink to={`/campuses/${student.campus.id}`}>
											<p>{student.campus.name}</p>
										</NavLink>
									</span>
								: null}
								
								<hr />
							</div>
						))
					: null}
			</div>
		</div>
  );
};

export default AllStudents;
