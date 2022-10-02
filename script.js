const butn=document.querySelector('button');
const h2=document.querySelector('h2');
const h1=document.querySelector('h1');

butn.addEventListener('click',()=>{
    const newCol=randomCol()
    document.body.style.backgroundColor = newCol;
    h2.innerText = newCol;
});

const randomCol = () => {
    
    const r = Math.floor(Math.random() * 255); 
    const g = Math.floor(Math.random() * 255); 
    const b = Math.floor(Math.random() * 255); 
    if((r<=100 && g<=100) || (r<=100 && b<=100) || (g<=100 && b<=100))
    {
        h1.style.color= 'white';
        h2.style.color='white';
    }
    else
    {
        h1.style.color='black';
        h2.style.color='black';
    }

    return `rgb(${r},${g},${b})`;   
}