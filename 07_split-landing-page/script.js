const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

//ポインティングデバイスがleftの要素の中に移動した時にcontainerにclass名".hover-left"を付与し、要素の外に移動した時に外す。右も同様。
left.addEventListener('mouseenter', () =>
  container.classList.add('hover-left')
)
left.addEventListener('mouseleave', () =>
  container.classList.remove('hover-left')
)

right.addEventListener('mouseenter', () =>
  container.classList.add('hover-right')
)
right.addEventListener('mouseleave', () =>
  container.classList.remove('hover-right')
)