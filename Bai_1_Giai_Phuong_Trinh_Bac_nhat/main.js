function firstDegreeEquation(a, b) {
    let result = null;
    if (a == 0) {
        if (b == 0) {
            return alert('Phương trình có vô số nghiệm');
        } else {
            return alert('Phương trình có vô nghiệm');
        }
    } else
        result = +(-b / a);
    return alert('Phương trình có một nghiệm là x: ' + result);
}

let a = parseInt(5);
let b = parseInt(8);

alert('ta có với a = ' + a + ' và b = ' + b + '\nta có kết quả quả phương trình ax+b=0');

firstDegreeEquation(a, b);