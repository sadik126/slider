const images = [
    'images/img-1.jpg',
    'images/img-2.jpg',
    'images/img-3.jpg',
    'images/img-4.jpg',
    'images/img-5.jpg'
]

let imgindex = 0;

setInterval(()=>{
    const imgelement = document.getElementById('imgelement');
   
    if(imgindex >= images.length){
        imgindex = 0;
    }
    const imgurl = images[imgindex];
    imgelement.setAttribute('src',imgurl);
    
    console.log(imgurl)

imgindex++;
},2000)