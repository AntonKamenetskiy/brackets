 module.exports = function check(str, bracketsConfig) {
    let brString = '';
    let brArr = [];
    let brIndex = 0;
    let shift = 0;
    let shift1 = 0;
    let temp = 0;
    const num = '8';

    if (str.length % 2 !== 0) return false;
    for ( let i = 0; i < bracketsConfig.length; i++) {
        brString += bracketsConfig[i][0] + bracketsConfig[i][1];
    }

    for (let br of str) {
        brIndex = brString.indexOf(br);
        temp = brIndex;

        if ((brString[temp] === brString[temp + 1]) && brString[temp] !== num && shift) {
            brIndex++;
            shift = 0;
        }
        
        if ((brString[temp] === brString[temp + 1]) && brString[temp] === num && shift1) {
            brIndex++;
            shift1 = 0;
        }

        if (brIndex % 2 === 0) {
            brArr.push(brIndex + 1);
            if ((brString[temp] === brString[temp + 1]) && brString[temp] !== num) {
                shift = 1;
            }

            if ((brString[temp] === brString[temp + 1]) && brString[temp] === num) {
                shift1 = 1;
            }
        }
        else if (brArr.pop() !== brIndex) {
            return false;
        }
    }
    return true;
}
