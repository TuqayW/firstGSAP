const tl = gsap.timeline({defaults:{duration:1}})
const btn = document.querySelector('button')
let container = document.querySelector('.container')

tl.fromTo('.container',{opacity:0, y:10, scale:0.5},{opacity:1, y:0,scale:1})
tl.fromTo('.img',{opacity:0, x:-60, rotation:'-45deg'},{opacity:1, x:0, rotation:'0deg'})
tl.fromTo('.txt-c',{opacity:0, x:60},{opacity:1, x:0},"<")

tl.fromTo('.img',{y:0,rotation:'0deg'},{y:-30,rotation:'-20deg', yoyo:true,repeat:-1})


btn.addEventListener('click',()=>{
    tl.fromTo('.container',{opacity:1, y:0, },{opacity:0, y:20})
    setTimeout(()=>{
        container.classList.add('hide')
    },1000)
})

