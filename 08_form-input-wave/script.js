const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
  //labelの文字列をsplitで一文字ずつの文字列の配列に分割(Email→[E,m,a,i,l])
  //mapで配列の値を変換(E→<span style="transition-delay:0ms">E</span>)※idxは何番目の配列かを示す（配列は0から始まるのでEmailのEは0、0×50msは0ms）
  //splitで文字列を配列に分割して、mapでそれぞれの文字列にspanタグでstyleを追加したものを、joinで全てつなげる
  //つなげたものをHTML要素としてlabelの中に代入
  //transition-delayでidx毎にtransitionの開始時間を変えている
  label.innerHTML = label.innerText.split('').map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`).join('')
})