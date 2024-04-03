import React, { useState } from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';
export default function Card(props){
    const [readmore,setReadmore]=useState(false);
    let course=props.course;
    let likedcourse=props.likedcourse;
    let setLikedcourse=props.setLikedcourse;
    let info = course.description;
    const description = readmore?info:`${info.substring(0,100)}...`;
    function readmoreHandler(){
        setReadmore(!readmore);

    }

    function likedHandler(){
       if(likedcourse.includes(course.id)){
        setLikedcourse((prev)=>prev.filter((cid)=>(cid!==course.id)))
        toast.warning("like removed")
       }
       else{
            if(likedcourse.length===0)
                setLikedcourse([course.id])
            else{
                setLikedcourse((prev)=>
                    [...prev,course.id])
                    console.log(likedcourse)
            }
            toast.success("liked ")
       }
    }
    return (<div className='w-[300px] bg-gray-700 bg-opacity-80 rounded-md overflow-hidden '>
        <div className='relative'>
            <img src={course.image.url} alt={course.image.alt} className=''/>
       
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-6px] grid place-items-center'>
            <button onClick={likedHandler}>{
               likedcourse.includes(course.id) ?<FcLike fontSize="1.75rem"/>
            :<FcLikePlaceholder fontSize="1.75rem" />}
                
            </button>
        </div> </div>
        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2  text-white'>{description}<span onClick={readmoreHandler} className='text-slate-400 cursor-pointer'>{readmore?`show less`:`read more`}</span></p>
        </div>
    </div>)
}