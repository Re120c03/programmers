// 문자열 다루기 기본
/*
문제 설명
문자열 s의 길이가 4혹은 6이고, 숫자로만 구성되있는지 확인해주는 함수, solution을 완성하세요.
예를들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.

제한 사항
s는 길이 1 이상, 길이 8 이하인 문자열입니다.
입출력 예
s	return
a234	false
1234	true
*/

//9 * 6
function solution(s) {
    let length = s.length;
    if (length != 4 && length != 6)
        return false;
    for (let ix = 0; ix < length; ix++) {
        if (s[ix] > '9') {
            return false;
        }
    }
    return true;
}

console.log(solution('a234'));
console.log(solution('1234'));

/*
   other_solution
*/

function other_solution1(s) {
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
}

function other_solution2(s) {
    return s.length == 4 || s.length == 6 ? !isNaN(s) : false
}

function other_solution3(s) {
    var temp = parseInt(s);
    if (s == temp) {
        return true;
    }
    return false;
}

