const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

//#toggleをクリックした時、#navにクラス名activeが付いていなければ付与、付いていれば剥奪。
toggle.addEventListener('click', () => nav.classList.toggle('active'))