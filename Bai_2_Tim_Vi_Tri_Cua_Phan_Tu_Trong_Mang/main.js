let array = [2, 5, 1, 4, 6, 9, 7, 8, 10, 3];

function findValue(value, array) {
    let find = value;
    let result = false;
    for (let i = 0; i < array.length; i++) {
        if (find == array[i]) {
            result = true;
            break;
        }
    }
    if (result) {
        return alert("Giá trị " + find + " có nằm trong mảng")
    } else {
        return alert("Giá trị " + find + " không nằm trong mảng")
    }
}

findValue(9,array);