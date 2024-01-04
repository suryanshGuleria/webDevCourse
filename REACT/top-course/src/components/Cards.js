import React, { useState } from "react";
import Card from "./Card";

function Cards(props) {
  let courses = props.courses;
  // console.log(courses);
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);

  // loads each course from all the categories to the the allCourses array
  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      console.log(courses);
      //load specific category array of courses
      return courses[category];
    }
  };
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          ></Card>
        );
      })}
    </div>
  );
}

export default Cards;
