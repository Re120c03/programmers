// 정수 제곱근 판별

/*
문제 설명
임의의 정수 n에 대해, n이 어떤 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

제한 사항
n은 1이상, 50000000000000 이하인 정수입니다.

입출력 예
n	return
121	144
3	-1

입출력 예 설명
입출력 예#1
121은 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

입출력 예#2
3은 정수의 제곱이 아니므로, -1을 리턴합니다.
 */

function solution(n) {
    let sqrt = Math.sqrt(n);
    if(sqrt === parseInt(sqrt)) {
        return (sqrt + 1) * (sqrt + 1);
    } else {
        return -1;
    }
}

console.log(solution(121));
console.log(solution(3));

/*
   other_solution
*/

function other_solution1(n) {
    return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1
}

console.log(other_solution1(121));
console.log(other_solution1(3));

function other_solution2(n) {
    return Number.isInteger(Math.sqrt(n)) ? Math.pow((Math.sqrt(n) + 1), 2) : -1
}

console.log(other_solution2(121));
console.log(other_solution2(3));
