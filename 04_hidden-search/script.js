const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

//addEventListener:ターゲットに特定のイベントが配信されるたびに呼び出される関数を設定
btn.addEventListener('click', () => {
  //上で宣言した"search"にclass属性を切り替える。'active'持っている場合は削除、持っていなければ追加処理を実行（.toggleの処理）
  search.classList.toggle('active')
  //上で宣言したinputにカーソルを乗せた状態にする(すぐにキーボード入力等ができる)
  input.focus()
})