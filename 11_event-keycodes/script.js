const insert = document.getElementById('insert')

//キーが押されたら、"insert"のhtmlを右辺のものに置き換える
//3つのdiv
//1 event.key:押されたキーがもしもスペースキーだったらkeyは" "となる。keyが" "だったらdivの中に"Space"と表示、そうでなければ押されたキーのキー名(だいたいキーボードに表示されているもの)を表示する。
//2 event.keyCode:押されたキーのキーコード名(ほぼ数字)を表示する。
//3 event.code:押されたキーのコード名(キーの英字表記)を表示する。
//<small>:免責事項、警告、法的制限、著作権などの注釈や小さく表示されるべき文。今回はどれにも当てはまらない？
window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>event.key</small>
</div>

<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `
})