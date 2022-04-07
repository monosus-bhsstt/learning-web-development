const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

//setInterval(処理,実行単位[ミリ秒]):一定時間(今回は.03秒ごと)が経過するごとに処理を実行
let int = setInterval(blurring, 30);

function blurring() {
  //処理が最初は++の前の数値・変数を返して2回目以降は1ずつ加算した値を返す
  load++;

  //上で定義したloadの値が99よりも大きかった場合、"int"にあるsetIntervalの繰り返し動作を止める
  if (load > 99) {
    clearInterval(int);
  }

  //オブジェクト.innerText:オブジェクト内の文字列を右辺のものに変える
  loadText.innerText = `${load}%`;
  //オブジェクト.style.プロパティ:オブジェクトのstyle属性であるプロパティの値を右辺のものに変える
  //右辺のscaleは下で配列とreturnを宣言しているのでそこに当てはめる（loadが大きくなるにつれてopacityの値が1→0の間で小さくなる＝だんだん透明になる効果）
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  //filterというプロパティのblurという関数は対象の要素をぼやけさせる。px単位で数が大きいほどぼやけも大きい（loadが大きくなるにつれてblurの値が30→0の間で小さくなる=だんだんはっきりする効果）
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
