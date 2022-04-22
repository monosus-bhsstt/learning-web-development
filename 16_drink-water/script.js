const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

//関数updateBigCupを実行
updateBigCup()

//.cup-smallのいずれかをクリックしたら、関数highlightCupsの引数に対象の.cup-smallのインデックス数値[0~7]を入れる。
smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))
})


function highlightCups(idx) {
  //上記のクリックの際に代入されたidxの数値が7かつクリック対象の.cup-smallのクラスとして"full"が含まれていた場合、idxの数値を後で-1する。
  if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
  //クリック対象の.cup-smallのクラスとして"full"が含まれていてかつクリック対象の.cup-smallの次の兄弟要素にクラス名fullが含まれていた場合、idxの数値を後で-1する。
  else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx--
  }

  //idx2がidx以下だったら対象の.cup-smallクラス名'full'を付与、そうでない場合はクラス名"full"を剥奪
  smallCups.forEach((cup, idx2) => {
    if(idx2 <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })

  //関数updateBigCupを実行
  updateBigCup()
}

function updateBigCup() {
  //fullCupsに.cup-small.fullの数(クリックにより0~8で変動あり)をfullCupsに代入。
  const fullCups = document.querySelectorAll('.cup-small.full').length
  //.cup-smallの数(8から変動なし)をtotalCupsに代入。
  const totalCups = smallCups.length
  
  //大きいカップの水分量と％の表記
  //fullCups(0~8で変動あり)が、0だったら#percentageを非表示、高さを0とする。
  //0以外だったら#percentageを表示、高さは(.cup-small.fullの数÷8×330)px、テキストは`(.cup-small.fullの数÷8×100)%`とする。
  if(fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${fullCups / totalCups * 330}px`
    percentage.innerText = `${fullCups / totalCups * 100}%`
  }

  //大きいカップの空き容量の表記
  //fullCups(0~8で変動あり)が、totalCups(8)とイコールだったら#remainedを非表示、高さを0とする。
  //totalCups(8)とイコールでない場合は#remainedを表示、テキストは`{2-(250×fullCups÷ 1000)}L`とする。
  if(fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`
  }
}