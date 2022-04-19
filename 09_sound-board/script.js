const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
  //<button>を生成して"btn"に代入
  const btn = document.createElement('button')
  //上記の"btn"にclass名'btn'を付与
  btn.classList.add('btn')
  //"btn"に配列として宣言した"sounds"の各単語をテキストとして代入
  btn.innerText = sound
  
  //<button>をクリックしたらstopSongsの関数を実行して、宣言した"sounds"のIdを持つメディアの再生を開始する(元々html上で付与していた<audio>のidを、js上の初めに宣言した文字列を用いて指定した)
  btn.addEventListener('click', () => {
    stopSongs()
    document.getElementById(sound).play()
  })

  //元々htmlで記載してある#buttonsの子要素に上記の状態の"btn"を追加(どこに生成するかの指定)
  document.getElementById('buttons').appendChild(btn)
})

//音を停止する関数
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