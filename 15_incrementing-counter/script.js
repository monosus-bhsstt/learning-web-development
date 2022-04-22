const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  //.counterの中のテキストに0を代入
  counter.innerText = '0'

  const updateCounter = () => {
    //.counterのdata-targetの値を"target"に代入?
    const target = +counter.getAttribute('data-target')
    //.counterの中のテキストをcに代入?
    const c = +counter.innerText
    //data-targetの値を200で割る
    const increment = target / 200
    
    //targetがcよりも大きい場合、cの値とincrementの値を足して小数点を切り上げた値を.counterの中に入れて、0.001秒後に関数"updateCounter"を実行する
    //そうでない場合targetの値を.counterのテキストに入れる
    if(c < target) {
      //Math.ceil:引数として与えた数以上の最小の整数を返す（小数点切り上げ）
      counter.innerText = `${Math.ceil(c + increment)}`    
      setTimeout(updateCounter, 1)
    } else {
      counter.innerText = target
    }
  }
  
  //関数"updateCounter"の実行
  updateCounter()
})