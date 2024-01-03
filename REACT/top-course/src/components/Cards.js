import React from 'react'
import Card from './Card';

function Cards({courses}) {
 let allCourses = [];
 // loads each course from all the categories to the the allCourses array
 const getCourses = () => {
    Object.values(courses).forEach((courseCategory) =>{
        courseCategory.forEach((course) => {
            allCourses.push(course);
        })
    })
    return allCourses;
 }


  return (
    <div>
        {
            getCourses().map( (course) => {
                return(
                    <Card key={course.id} course={course}></Card>
                )
            })
        }
    </div>
  )
}

export default Cards