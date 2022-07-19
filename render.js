const Renderer=function(posts){
    $('.content').empty()
    for(let post of posts){
      var postDiv= 
      `<div class="post"> 
         <h3>${post.text} </h3> 
         <div class='comments' id=${post.id}></div>
 
         <div> 
           <input type="text" placeholder=" Got something to say?" class="comment">
           <button class="add-comment">Comment</button> 
         </div>
 
         <div>  
           <button class="delete-post">Delete post</button> 
         </div>
     </div>`
 
     $('.content').append(postDiv)
     for(let comment of post.comments){
         var commentField=
         `<div class=itemComment id=${comment.id}>
             <i id="iconRemove" class="gg-remove"></i> 
             <span> ${comment.text}</span> 
         </div>`
         $(`#${post.id}`).append(commentField)
     } 
 
   }
   }
 
 
 
 
 
 