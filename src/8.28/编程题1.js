/* 写出一个函数，接受一个由字母，数字和空格组成的字符串str，和一
个字符code，然后输出输入字符串中该字符出现的次数。*/

function getCount(str) {
    var patt1 = /r+/g;
    var n = str.match(patt1);
    console.log(n);
    console.log(n.length);
    return n?.length || 0
    // var m = str.match(patt1);
}
getCount('RrrUnoob')


// input
'abcddaaas'
'das' // i

// ouput 
'daaas' // j

const findMinStr = (source, target) => {
    const targetLen = target.length
    const len = source.length - targetLen
    if (len < 0) {
        return undefined
    }
    // 决定了 字符串长度
    return new Array(len).fill(1).reduce((result, _, lenItem) => {
        const currLen = lenItem + targetLen
        const sourceIndex = source.split('').findIndex((_, index) => {
            const soureItem = source.split('').slice(index, index + currLen)
            let targetIndex
            soureItem.forEach((item, index) => {
                if (target[targetIndex] === item) {
                    targetIndex++
                }
            })
            if (targetIndex === targetLen) {
                return true
            }
        })
        if (sourceIndex > -1) {
            result = source.slice(sourceIndex, sourceIndex + currLen)
        }
        return result
    }, null)
    return str
}


// 回溯
const findMinStr2 = (source, target) => {
    let lastStartIndex, targetIndex = 0, minStrArr = []
    for (let i = 0; i < source.length - target.length; i++) {
        // 起点符合预期 记录 lastStartIndex
        // targetIndex ++
        if (target[targetIndex] === source[i]) {
            if (targetIndex === 0) {
                lastStartIndex = i
            }
            targetIndex++
        }
        if (lastStartIndex >= 0) {
            minStrArr.push(sourc[i])
        }


        // 中间不符合预期 将 lastStartIndex 赋值给 i 继续遍历
        // targetIndex = 0
        if (source[i] === minStrArr[0] && minStrArr.length === 1) {
            targetIndex = 0
            minStrArr = []
            lastStartIndex = undefined
            i = lastStartIndex
        }
        // source
    }
    if (targetIndex === target.length - 1) {
        return minStrArr.join()
    }

}


//

