export const page_animation = {
    initial:{
        y:-100,
        opacity:0
    },
    enter:{
        y:0,
        opacity:1,
        transition:{
            delay: 175,
            type: 'spring',
            stiffness: 75
        }
    }
}

export const navigationBar_animation = {
    initial:{
        x:-100,
        opacity:0,
    }
}