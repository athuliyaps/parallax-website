
// Adjust parallex effect
const  img4 = document.getElementById('img4')
const  img2 = document.getElementById('img2')
const  img1 = document.getElementById('img1')
const  img3 = document.getElementById('img3')


// parallax effect
window.addEventListener('scroll',()=>{
    const value = window.scrollY;

     img1.style.marginTop = value * 2 + 'px';
     img2.style.marginTop = value * -4+ 'px';
     
    
});  
    
