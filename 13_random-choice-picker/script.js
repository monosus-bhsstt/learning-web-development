const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

//"textarea"にそのまま文字が入力できるようフォーカス設定
textarea.focus()

textarea.addEventListener('keyup', (e) => {
  creatTags(e.target.value)

  //エンターキーを押したら、textarea(イベントを発生させたオブジェクト)のvalueを0.01秒後に空白('')にして、randomSelect関数の処理を実行する
  if(e.key === 'Enter') {  
    setTimeout(() =>{
      e.target.value = ''     
    }, 10)
    randomSelect()
  }

})


function creatTags(input) {
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

  tagsEl.innerHTML = ''

  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)  
  })
}

//textareaに入力した値をランダムに選択する関数を宣言
function randomSelect() {
  //"times"に30を代入
  const times = 30

  
  const interval = setInterval(() => {

    const randomTag = pickRandomTag()
  
    if (randomTag !== undefined) {
      highlightTag(randomTag)

      setTimeout(() => {
          unHighlightTag(randomTag)
      }, 100)

    }

  }, 100);


  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      
      const randomTag = pickRandomTag()

      highlightTag(randomTag)

    }, 100)

  }, times * 100)
}

//
function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  //Math.floor:()内の数値以下の最大の整数を返す(小数点切り捨て)
  //Math:random * tags.length:0~.tagの数をランダムで表示させる
  //???
  return tags[Math.floor(Math.random() * tags.length)]
}

//"tag"にクラス名"highlight"を付与する関数を宣言
function highlightTag(tag) {
    tag.classList.add('highlight')
}

//"tag"からクラス名"highlight"を剥奪する関数を宣言
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
