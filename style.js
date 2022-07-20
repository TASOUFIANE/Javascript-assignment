const closeface =document.querySelector('.closed');
const openface = document.querySelector('.open');

//Add event listener

closeface.addEventListener('click',()=>{
    
        openface.classList.add('active');
        closeface.classList.remove('active');
    
    
})

openface.addEventListener('click',()=>{
  
        closeface.classList.add('active');
        openface.classList.remove('active');
    
    
})

