// changeimage
function change(){
    let image = document.getElementById('image');
    let images = ['img4.jpg','img3.jpg','img4.jpeg'];
    let random = Math.floor(Math.random() * 3);
    image.src  =images[random];
}