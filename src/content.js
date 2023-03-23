// 1. useEffect(callback)
    // -> Gọi callback mỗi khi componente re-render
    // -> Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback,[])
    // -> Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback,[deps])
    // -> Được gọi lại mỗi khi deps thay đổi
// ---------------
//1. Callback luôn được gọi sau khi Component mounted
//2. Cleanup function luôn được gọi trước khi component unmounted

// import { useEffect, useState } from "react"

// const lessons = [
//     {
//         id: 1,
//         name: 'React JS'
//     },
//     {
//         id: 2,
//         name: 'Java Script'
//     },
//     {
//         id: 3,
//         name: 'PHP'
//     }
// ]


// function Content(){

//     const[lessonId, setLessonId] = useState(1)
    
//     useEffect(()=>{

//         const handleComment = ({detail}) =>{
//             console.log(detail);
//         }

//         window.addEventListener(`Lesson: ${lessonId}`, handleComment)

//         return ()=>{
//             window.removeEventListener(`Lesson: ${lessonId}`, handleComment)
//         }
//     },[lessonId])
    
//     return(
//         <div>
//            <ul>
//                 {
//                     lessons.map(lesson=>(
//                         <li
//                         key={lesson.id}
//                         style={{color:lessonId===lesson.id?'red':'#333'}}
//                         onClick={()=>setLessonId(lesson.id)}
//                         >
//                             {lesson.name}
//                         </li>

//                     ))
//                 }
//            </ul>
//         </div>
        
//     )
// }

// export default Content
//---------------------
import Paragraph from  "./paragraph"
function Content(){
    return (
        <div>
            <Paragraph />
        </div>
    )
}
export default Content