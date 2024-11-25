export const page_animation = {
    initial:{
        y:-100,
        opacity:0
    },
    enter:{
        y:0,
        opacity:1,
        transition:{
            delay: 375,
            type: 'spring',
            stiffness: 75
        }
    }
}

export const navigationBar_animation = {
    initial:{
        y:-25,
        opacity:0,
    },
    enter:{
        y:0,
        opacity:1,
        transition:{
            delay: 675,
            type: 'spring',
            stiffness: 75
        }
    }
}

export const stagger_effect = (_delay:number,y_axes:number, x_axes:number) => {
    return {
        initial:{
            x:x_axes || 0,
            y:y_axes || 0,
            opacity:0
        },
        enter:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                delay: _delay,
                type:'spring',
                stiffness:75
            }
        }
    }
}
