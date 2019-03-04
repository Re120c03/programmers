// 시저 암호

/*
문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 
시저 암호라고 합니다. 예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. 
z는 1만큼 밀면 a가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 
함수, solution을 완성해 보세요.

제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.
입출력 예
s	n	result
AB	1	BC
z	1	a
a B z	4	e F d
*/

function solution(s, n) {
    let answer = s.split("");
    let ascii = 0;

    answer.map((val, idx, arr) => {
        ascii = val.charCodeAt(0);
        ascii += n;
        if(val >= 'a' && val <= 'z') {
            if(ascii > 'z'.charCodeAt(0)) ascii-=26;
            arr[idx] = String.fromCharCode(ascii);
        } else if(val >= 'A' && val <= 'Z') {
            if(ascii > 'Z'.charCodeAt(0)) ascii-=26;
            arr[idx] = String.fromCharCode(ascii);
        }
    })
    return answer.join("");
}

console.log(solution('AB', 1));
console.log(solution('z', 1));
console.log(solution('a B z', 4));

/*
   other_solution
*/

function other_solution1(s, n) {
    var result = "";
    // 함수를 완성하세요.
  var car = ""

  for (var i=0; i<s.length;i++)
  {        
    if ( s[i] == ' ' )
      result += ' '
    else 
        result += String.fromCharCode( (s.charCodeAt(i)>90)?
      (s.charCodeAt(i)+n-97)%26+97 : (s.charCodeAt(i)+n-65)%26+65 )     
  }

    return result;
}

function other_solution2(s, n) {
    var result = s.replace(/[a-z]/ig, c => [ c = c.charCodeAt(0), String.fromCharCode((c & 96) + (c % 32 + n - 1) % 26 + 1) ][1]);

    // 함수를 완성하세요.
    return result;
}

