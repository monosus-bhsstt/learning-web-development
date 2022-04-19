const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
  //<button>を生成して"btn"に代入
  const btn = document.createElement('button')
  //上記の"btn"にclass名'btn'を付与
  btn.classList.add('btn')

  //"btn"に配列として宣言した"sounds"の各単語をテキストとして代入
  btn.innerText = sound
  
  btn.addEventListener('click', () => {
    stopSongs()

    //宣言した"sounds"のIdのメディアの再生を開始
    document.getElementById(sound).play()

  })

  //元々htmlで記載してある#buttonsの子要素に上記の状態の"btn"を追加
  document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
  sounds.forEach(sound => {
    //#soundの付与されているエレメントオブジェクトをsongへ代入
    const song = document.getElementById(sound)
    
    //メディアの再生を一時停止する
    song.pause()
    //現在の再生時間を0にする
    song.currentTime = 0;
  })
}