import React from 'react';
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';

function Card({course, likedCourses, setLikedCourses}) {

 function clickHandler() {
  if(likedCourses.includes(course.id)) {
    setLikedCourses( (prev) => prev.filter( (cid) => (cid !== course.id) ) );
    toast.warning("Liked removed");

  } 
  else {
    if(likedCourses.length ===0){
      setLikedCourses([course.id]);
    }
    else{
      setLikedCourses( (prev) => [...prev, course.id]);
    }
    toast.success("Liked Successfully");
  }
  

 }



  return (
    <div className='w-[300px] bg-bgDark bg-opacity-90 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} loading='lazy'></img>

        <div className='w-[40px] h-[40px] rounded-full bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
            <button onClick={clickHandler}>
                {
                  likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)
                  }
            </button>
        </div>
    
      </div>

      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6 '>{course.title}</p>
        <p className='mt-2 text-white'>{
          course.description.length >100 ?(course.description.substr(0,100)) + "... " : (course.description)
          }</p>
      </div>
      
    </div>
  )
}

export default Card


//imp. thing to remember in this is when we are calling api courses hume mile nhi hai toh jab tak nhi mile hai tab tak n ull pada hai or null ke upper foreach loop hum chala de rahe hai jiski vajah se error show ho raha tha iss error ko hum do taraf se remove kr sakte hai ya toh hum ternary operator me loading vala add karke ya useState ke ander empty array initialized kr ke....