const Tweeter = function () {
    let posts = [
      {
        text: "First post!",
        id: "p1",
        comments: [
          { id: "c1", text: "First comment on first post!" },
          { id: "c2", text: "Second comment on first post!!" },
          { id: "c3", text: "Third comment on first post!!!" },
        ],
      },
      {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
          {
            id: "c4",
            text: "Don't wory second poster, you'll be first one day.",
          },
          { id: "c5", text: "Yeah, believe in yourself!" },
          { id: "c6", text: "Haha second place what a joke." },
        ],
      },
    ];
  
    let postIdCounter = 2;
    let commentIdCounter = 6;
  
    const getPosts =  () =>{
      return posts;
    };
  
    const addPost =  function(text){
      postIdCounter++;
      let newPost ={
        id:"p" + postIdCounter,
        comments:[],
        text:text 
      };
      posts.push(newPost);
    };
  
    const removePost = function(id) {
      for (let index in posts) {
        if (posts[index].id == id) 
        posts.splice(index, 1);
      }
    };
  
    const addComment =function(text, postId){
      for (let post of posts) {
        if (post.id === postId) {
          commentIdCounter++;
          let commentObject = {
            id:"c" + commentIdCounter,
            text:text
          };
          post.comments.push(commentObject);
        }
      }
    };
    const removeComment = function(idPost, idComment) {
      for (let post of posts) {
        if (post.id === idPost) {
          for (let comment in post.comments) {
            if (post.comments[comment].id === idComment) {
              post.comments.splice(comment, 1);
            }
          }
        }
      }
    };
  
    return {
      getPosts: getPosts,
      addPost: addPost,
      removePost: removePost,
      addComment: addComment,
      removeComment: removeComment,
    };
  };
  