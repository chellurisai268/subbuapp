import React, { useEffect } from "react";
import { useGetAllPostsQuery, useLazyGetAllPostsQuery,useDeletepostMutation } from "../../services/postsApi";
import { useNavigate } from "react-router-dom";
function Posts(){
    var navigate=useNavigate()
     var {isLoading,data}=useGetAllPostsQuery()
     var[LazyGetAllPostsfn]=useLazyGetAllPostsQuery()
      var [deletepostfn]=useDeletepostMutation()
      function deletepostHandler(id){
        deletepostfn(id).then(()=>{
            LazyGetAllPostsfn()
        })
      }
      function editpost(post){
        console.log("post::",post)
            navigate('/editpost',{state:post})
      }
      useEffect(()=>{
        LazyGetAllPostsfn()
      },[])
    return (
        <div>
            <h5>
                Posts
                {
                    isLoading && (<h5>loading.....</h5>)
                    
                }
                <ul>
                {
                    
                    !isLoading && (
                            data?.map((p)=>{
                                return <li>
                                    {p.title}-{p.author}
                                    <button onClick={()=>{deletepostHandler(p.id)}}>delete</button>
                                    <button onClick={()=>{editpost(p)}}>Edit</button>
                                    </li>
                            })
                    )
                  
                }
                </ul>
            </h5>
        </div>
    )
}
export default Posts