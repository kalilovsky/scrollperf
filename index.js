const originalPos = [0,0];
const currentScrollPos = [0,window.scrollY];
let timeSinceLastScroll = 0;
isScrolling = false;
isMouseDown = false;
let deltaY= 0;


function test(){
    console.log(deltaY)
    let scroll = currentScrollPos[1] + (deltaY * 50);
    if((document.body.scrollHeight >= scroll && deltaY)){
        // currentScrollPos[1] += deltaY*50;
        if(!isScrolling){
            window.requestAnimationFrame(test);
            window.scrollTo(0,scroll);
            isScrolling = true;
        }
    }
}

window.addEventListener('scroll', (e)=>{
    currentScrollPos[1] = window.scrollY;
    isScrolling = false;
})
gi
window.addEventListener('mousewheel', (e)=>{
    console.log('mouseup',e);
    e.preventDefault();
    e.stopPropagation();
    deltaY = e.deltaY;
    if(!isScrolling){
        window.requestAnimationFrame(test);
        // isScrolling = true;
    }else{
        return false;
    }
    isMouseDown = false;
}, {passive: false});

window.addEventListener('keydown', (e)=>{
    const Key = {
        PageUp : 'PageUp',
        PageDown : 'PageDown',
        End : 'End',
        Home : 'Home',
        Left : 'ArrowLeft',
        Up : 'ArrowUp',
        Right : 'ArrowRight',
        Down : 'ArrowDown',
      }
})

const ul = document.createElement('ul');

for(let i = 0; i < 10000; i++)
{
    const li = document.createElement('li');
    li.innerHTML = `Liste numéro: ${i}`;
    ul.appendChild(li);
}

console.log(ul.clientHeight);
document.body.appendChild(ul);
console.log(ul.clientHeight);

// document.addEventListener('mousemove', (e)=>{
//     console.log(e);
// })

// window.addEventListener('mousemove', (e)=>{

//     // console.log("mousemove",e);
// })
// window.addEventListener('mouseover', (e)=>{

//     console.log("mouseover",e);
// })
// document.addEventListener('scroll', (e)=> {
//     if(timeSinceLastScroll===0){
//         timeSinceLastScroll = e.timeStamp;
//         currentScrollPos[1] = window.scrollY;
//     }
    
//     if((e.timeStamp - timeSinceLastScroll) > 100 && window.scrollY > 0){
//         console.log(e);
//         currentScrollPos[1] = window.scrollY;
//         timeSinceLastScroll = e.timeStamp;
//     }else{
//     }
    
// },{passive: false});


// document.addEventListener('wheel', (e)=> {
//     // console.log(e);
//     // e.preventDefault();
//     // e.stopPropagation();
// }, {passive: false});


// document.addEventListener('mousedown', (e)=>{
//     isMouseDown = true;
//     if(isScrolling){
//     }
//     console.log("mousedown",e);
//     this.addEventListener('mousemove', test);
//     document.body.style.overflow = "";
// });

// function test(e)
// {
//     console.log("mousemove",e);

// }