function promiseExample(flag){
    return new Promise(function(resolve,reject){
        if(flag===1){
        resolve("This is a promise resolve example")
        }else if(flag===0){
            reject("This is a promise rejection example")
        }
    })
}
promiseExample(1).then((res)=>{
    console.log(res)
}).catch((rej)=>{
    console.log(rej)
})



locationFinder=(location,time)=>{
    return new Promise((locFound,locNotFound)=>{
        setTimeout(()=>{
        if(isLocationValid(location,time)){
            locFound([location,"Found in",time,"millisecs"])
        }
        else{
            locNotFound([location,"not Found in",time,"millisecs"])
        }
    },time)
    })
}
function isLocationValid(loc,time){
    location="Melbourne"
    t=2000
    if(loc===location&&time<=t){
        return true
    }else{
        return false
    }
}
locationFinder("Melbourne",2000).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})



likeCode=async()=>{
    return new Promise((likingPost)=>{
        setTimeout(()=>{
        likingPost("Liked the post created")
       },2000)
    })
}
commentCode=async()=>{
    return new Promise((commentingPost)=>{
        setTimeout(()=>{
        commentingPost("Comment posted to the post created")
       },5000);
    });
}

async function createPost(){
    var post=new Promise((cPost)=>{
        setTimeout(()=>{
            cPost("Post created successfully")

    },1000);

   });
   
   var[post,like,comment]=await Promise.all([post,likeCode(),commentCode()])
   console.log(await post);
   console.log(await likeCode());
   console.log(await commentCode());
}
createPost()