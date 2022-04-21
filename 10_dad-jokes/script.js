const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

//jokeBtnをクリックしたらgenerateJokeを実行する
jokeBtn.addEventListener('click', generateJoke)
//関数"generateJoke"の読み込み。ページを更新した時にもクリック時同様下記のURLからjokeを読み込む（下記の記述がないと読み込んだ時点ではhtml上に記載した文字列が表示される）
generateJoke()

//USING ASYNC/AWAIT
//非同期通信で行う
async function generateJoke() {
  //fetchの第二引数に入れるものを定数として宣言
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  //urlからデータを読み取る
  const res = await fetch('https://icanhazdadjoke.com', config)
  //jsonファイルを読み取りjavascriptのオブジェクトを生成
  const data = await res.json()
  //生成されたjavascriptのうち[joke]の値を#joke(jokeEl)の中身へと置き換える
  jokeEl.innerHTML = data.joke
}



// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }