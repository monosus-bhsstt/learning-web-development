const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

console.log(circles);

let currentActive = 1
console.log(`prev1:${prev.disabled}`);
next.addEventListener('click', () => {
  currentActive++
  console.log(`prev2:${prev.disabled}`);
  console.log(`first:${currentActive}`);

  if(currentActive > circles.length) {
      currentActive = circles.length
  }


  circles.forEach((circle, idx) => {
console.log(`third:${idx}`);
console.log(`second:${currentActive}`);
    if(idx < currentActive) {
console.log(`true`);
      circle.classList.add('active')
    } else {
console.log(`falce`);
      circle.classList.remove('active')
    }
})

const actives = document.querySelectorAll('.active')

progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
console.log(progress);
console.log(`width:${progress.style.width}`);
console.log(`actives:${actives.length - 1}`);
console.log(`circles:${circles.length - 1}`);

if(currentActive === 1) {
    prev.disabled = true
    console.log(`prev3:${prev.disabled}`);
    console.log(`prev2:${prev.disabled}`);
} else if(currentActive === circles.length) {
    next.disabled = true
    console.log(`next:${next.disabled}`);
} else {
    prev.disabled = false
    next.disabled = false
}

})

prev.addEventListener('click', () => {
  currentActive--

  if(currentActive < 1) {
      currentActive = 1
  }

  
  circles.forEach((circle, idx) => {
    if(idx < currentActive) {
        circle.classList.add('active')
    } else {
        circle.classList.remove('active')
    }
})

const actives = document.querySelectorAll('.active')

progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

if(currentActive === 1) {
    prev.disabled = true
} else if(currentActive === circles.length) {
    next.disabled = true
} else {
    prev.disabled = false
    next.disabled = false
}
})
