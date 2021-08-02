let vowel = ["a", "o", "e", "u", "i"];
let countVowel = null;

function countCharacters(str) {
    countVowel = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if (str[i] == vowel[j]) {
                countVowel++;
            }
        }
    }
    return countVowel;
}

let str = prompt("nhập vào chuỗi ký tự");

let result = countCharacters(str);

alert("Tổng số ký tự nguyên âm tìm được trong chuỗi là: " + result);