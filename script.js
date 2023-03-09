const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', function(){
    currentActive++
        // increases in increments of 1

    if(currentActive > circles.length) { // length means the amount of circles
        // if currentAtive is greater than
        currentActive = circles.length // circles.length is the last one
    }
    // console.log(currentActive)
    // now the increments only go to 4.

    update()
})

prev.addEventListener('click', () => {
    currentActive--
     // decreases in increments of 1

    if(currentActive < 1) {// length means the amount of circles
                // if currentActive is less than 1
        currentActive = 1// i do not want to go under 1
    }
    // console.log(currentActive)
    // now the decrements only go to 1.

    update()
})
// updates the DOM

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {// if the index of the particular 
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    // get all of the active circles
    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
// accessing the progress style and width
// we add percentages for the css width property
// we add the -1 to give me a lower percentage to match where i want the blue 
// line to stop.

// working on previous button

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

