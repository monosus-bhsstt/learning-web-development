const boxes = document.querySelectorAll('.box')
//windowをスクロールするたびに関数"checkBoxes"に通知する
window.addEventListener('scroll', checkBoxes)

//ページを読み込んだ当初はどの.boxにも.showがついていない状態なので、スクロールした時だけでなく読み込んだ時から.boxの上端がwindowの4/5の位置よりも上だった場合に対象の.boxに.showを付与して表示させるために関数"checkBoxes"を実行している
checkBoxes()

function checkBoxes () {
  //ウィンドウ内部の高さをピクセル単位で読み取ったものを5で割って4でかけた数値を関数"triggerBottom"に代入
  const triggerBottom = window.innerHeight / 5 * 4

  boxes.forEach(box => {
    //画面の上端から.boxの上端までをpx単位で取得した数値を関数"boxTop"に代入
    const boxTop = box.getBoundingClientRect().top

    //.boxの上端のpx数値がwindow内部の高さの4/5の位置のpx数値よりも小さければ対象の.boxにclass名"show"を付与、そうでない場合はclass名"show"を取り除く
    if(boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}