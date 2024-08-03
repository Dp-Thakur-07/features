var arr = [

    {dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"},
    {dp:"https://media.istockphoto.com/id/1345096442/photo/young-beautiful-woman-stock-photo.jpg?s=1024x1024&w=is&k=20&c=bCGsdG8IQVkOM85Bh3ON2FoElDl3SKa0U8Xbxp8GFog=",story:"https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D"},
]
var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function(elem,idx){
  clutter+= ` <div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})

storiyan.innerHTML = clutter

storiyan.addEventListener("click",function(dets){
  
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
   
    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },3000)
});