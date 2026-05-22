import { useParams } from 'react-router-dom'

const CourseDetail = () => {

  const params = useParams()   
  {/* useParams() is a hook from React Router that is used to get dynamic values from the URL (in App.jsx file) */} 
  
  // console.log(params.courseId);
  // what you have written in the route after "/courses" in the URL will now become courseId and printed in the console, due to dynamic routing - "/courses/:courseId" in App.jsx
  
  return (
    <div>
      <h1>{params.courseId} Course Detail Page</h1>
    </div>
  )
}

export default CourseDetail
