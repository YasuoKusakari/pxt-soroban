//% weight=70 icon="\uf1ec" color=#00bbd7 block="そろ~ばん2"
namespace soroban {
    //% blockId=show_number block="かずを ひょうじ %num"
    export function showNumber(num: number = 0): void {
        let n = num
        //X0列のY1,2,3,4を消す
        for (let y = 1; y < 5; y++) {
            led.unplot(0, y)
        }
        //nがマイナスだったらX0列のY2をつける
        if (n < 0) {
            led.plot(0, 2)
            n *= -1　//n　=　n * -1 //nをプラスにする
        }
        //x4= x3= x2= x1= 
        for (let x = 4; x > 0; x--) {　//X4,3,2,1
            let m = n % 10　//m=nを10で割ったあまり
            if (m >= 5) {   //あまりが5以上だったら
                led.plot(x, 0)　//Y0列（一番上）のX値をつける
                m -= 5　//m = m-5 
            } else {
                led.unplot(x, 0)
            }
            for (let y = 1; y < 5; y++) {
                (m > 0) ? led.plot(x, y) : led.unplot(x, y)
                m--
            }
            n = Math.floor(n / 10)//小数以下を切り捨て
        }
    }
}