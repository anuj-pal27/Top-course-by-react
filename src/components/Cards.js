import Error from './Error'
import React, { useState } from 'react'
import Card from './Card'
const Cards = (props) => {
  let allCourses = [];
  let courses =props.courses;
  let category = props.category;
  const [likedcourse,setLikedcourse]=useState([]);

  const getCourses = ()=>{
    if(category==="All"){
    Object.values(courses).forEach((coursesCategory)=>{
    coursesCategory.forEach((course)=>{
      allCourses.push(course);
    }) 
  })
  return allCourses;
}

else{
  return courses[category];
}
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>{
      
      getCourses().map((course)=>{
        return <Card course={course} key={course.id} likedcourse={likedcourse} setLikedcourse={setLikedcourse}/>
      })
    }
    </div>
  )
}

export default Cards