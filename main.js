const tweeter = Tweeter()
Renderer(tweeter.getPosts())

$('.btn').click(function(){
    let textValue=$('.txt').val()
    tweeter.addPost(textValue); 
    $('.txt').val('');
    Renderer(tweeter.getPosts())

    })


$('.content').on('click','.delete-post',function(){
    var id=$(this).parent("div").parent("div").find('.comments').attr('id')
    tweeter.removePost(id);
    $(this).parent("div").parent("div").remove(); 
    Renderer(tweeter.getPosts())

})  

$('.content').on('click','.add-comment',function(){
    let postId=$(this).parent("div").parent("div").find('.comments').attr('id')
    let text=$(this).parent('div').find('input').val()
    $(this).parent('div').find('input').val("")
    tweeter.addComment(text,postId);
    Renderer(tweeter.getPosts())

})


$('.content').on('click','#iconRemove',function(){
    let idComment=$(this).parent("div").attr('id');
    let idPost=$(this).parent("div").parent("div").attr('id');
    tweeter.removeComment(idPost,idComment)
    Renderer(tweeter.getPosts())

})

