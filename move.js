let direction = 'south';
let x = 100;            /* Starting point on the screen */
let y = 800;

function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveCharacter() {
        if(direction === 'west'){ 
            x = x - 100
        }
        if(direction === 'north'){
            y = y + 100
        }
        if(direction === 'east'){
            x = x + 100
        }
        if(direction === 'south'){
            y = y - 100
        }

        if (y < 100) {
            y = 100;
        }
        else if (y > 800) {
            y = 800;
        }
        if (x < 100) {
            x = 100;
        }
        else if (x > 900) {
            x = 900;
        }
        console.log("Direction=" + direction + "   New X,Y  " + x + " " + y)

        moveToCoordinates(x,y)
    }
    
    function moveWithArrowKeys(left, bottom, callBackFx) {

        callBackFx(direction)
        console.log("MWAK: " + left + " " + bottom + " new dir=" + direction)

        document.addEventListener('keydown', function(e){   
            if (e.repeat) return;
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }

            console.log("KEY: " +  direction)

            callBackFx(direction)       /* Handle image change to new direction */

            moveCharacter()
        })

        document.addEventListener('keyup', function(e){
            console.log("Key Up")
            //direction = null
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys,
        moveIncrement:moveCharacter
    }
}