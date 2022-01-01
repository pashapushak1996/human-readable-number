module.exports = function toReadable(num) {
    const arrayFromZeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    const arrayFromTenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const arrayOfDecimals = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let readableNumber = [];

    const string = [...num.toString()];

    if (num >= 0 && num <= 9) {
        return arrayFromZeroToNine[num];
    }

    if (num > 9 && num < 20) {
        return arrayFromTenToNineteen[string[1]];
    }

    if (num >= 20 && num <= 99) {

        if (Number(string[1]) > 0) {
            return arrayOfDecimals[Number(string[0]) - 2] + ` ${ arrayFromZeroToNine[Number(string[1])] }`
        }

        return arrayOfDecimals[Number(string[0] - 2)]
    }


    if (string.length === 3) {
        const firstElementFromNum = Number(string[0]);

        let secondElementFromNum = Number(string.slice(1, 3).join(''));

        if (secondElementFromNum > 0 && secondElementFromNum <= 9) {
            secondElementFromNum = arrayFromZeroToNine[secondElementFromNum];
        }

        if (secondElementFromNum > 9 && secondElementFromNum < 20) {
            secondElementFromNum = arrayFromTenToNineteen[Number(string[2])];
        }

        if (secondElementFromNum >= 20 && secondElementFromNum <= 99) {

            if (string[2] > 0) {

                secondElementFromNum = arrayOfDecimals[Number(string[1] - 2)] + ` ${ arrayFromZeroToNine[Number(string[2])] }`;

            } else {
                secondElementFromNum = arrayOfDecimals[Number(string[1] - 2)]
            }
        }


        const firstNum = arrayFromZeroToNine[firstElementFromNum] + `${ num % 100 === num / 100 ? 'hundred' : ' hundred' }`;

        const secondElement = secondElementFromNum;


        readableNumber.push(firstNum, secondElement ? secondElement : '');
    }

    return readableNumber.join(' ').trim();
}
