const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

//変数の値を宣言。1を代入。
let currentActive = 1

//#nextをクリックしたら{}内の関数を実行
next.addEventListener('click', () => {
    //2度目以降は1ずつ増やしていく
    currentActive++

    //変数"currentActive"が定数"circles"よりも大きい場合、定数"circles"の値(4)を変数"currentActive"に代入。(currentActiveを4より大きくならないようにしている)　
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    //.activeの付与の動作
    circles.forEach((circle, idx) => {
        //対象の.classの配列のインデックス数値が変数"currentActive"よりも小さかったら、対象の.classにclass名activeを加えて、そうでなかったらactiveを取り除く
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    //#progressのwidthの設定
    //上で宣言した定数"progress"のwidthに、(.activeの数-1)÷(.circleの数-1)×100[単位：%]の値を代入。※activeの値はクリックすると変動する。※-1しているのは.progressのwidthの0からとするため(.activeは初めから付与されているものが1つある)
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    //#prevと#nextのアクティブ化の条件式
    //変数"currentActive"が、1(最初の状態)だった場合#prevのアクティブ化を無効にし、.circleの数(4)と同じだった場合#nextのアクティブ化を無効にし、それ以外の場合は#prevも#nextもアクティブ化を有効とする(無効を偽とする)。
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
})

//#prevをクリックしたら{}内の関数を実行
prev.addEventListener('click', () => {
    //2度目以降は1ずつ減らしていく
    currentActive--

    //変数"currentActive"が1よりも小さい場合、1を変数"currentActive"に代入。(currentActiveを1より小さくならないようにしている)
    if(currentActive < 1) {
        currentActive = 1
    }
    
    //.activeの付与の動作
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    //#progressのwidthの設定
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    //#prevと#nextのアクティブ化の条件式
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
})
