// 문자열 내 p와 y의 개수
/*
문제 설명
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해
같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 
하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를들어 s가 pPoooyY면 true를 return하고 Pyy라면 false를 return합니다.

제한사항
문자열 s의 길이 : 50 이하의 자연수
문자열 s는 알파벳으로만 이루어져 있습니다.
입출력 예
s	answer
pPoooyY	true
Pyy	false
입출력 예 설명
입출력 예 #1
'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

입출력 예 #2
'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.
*/

function solution(s){
    let pCount = 0;
    let yCount = 0;
    for(let ix = 0; ix < s.length; ix++) {
        if(s[ix] == 'p' || s[ix] == 'P') pCount++;
        else if(s[ix] == 'y' || s[ix] == 'Y') yCount++;
    }
    return !(pCount - yCount); 
}

console.log(solution('pPoooyY'));
console.log(solution('Pyy'));

/*
other_solution
*/

// p와 y가 둘 다 없을 때는 match 함수는 null을 반환합니다. 그래서 null은 length함수를 
// 가지고 있지 않기에, length 함수가 없다는 undefined 에러가 나기 때문에. 변수를 선언하고, 
// 해당 match의 결과가 null일 때는 그 변수에 0을 넣어준 뒤 그 변수를 비교하는 방식으로 해결해야 
// 예외처리를 완벽하게 할 수 있습니다.

function other_solution1(s) {
    
    return s.match(/p/ig).length == s.match(/y/ig).length;
}

function other_solution2(s){
    //함수를 완성하세요
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
