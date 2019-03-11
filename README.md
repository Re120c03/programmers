# programmers
 javascript programmers

* 해시
  * 해시는 Key-value쌍으로 데이터를 저장하는 자료구조입니다.
* 스택/큐
  * LIFO, FIFO, push & pop! 스택과 큐를 이용해서 문제를 풀어보세요.
* 힙(Heap)
  * 힙은 특정한 규칙을 가지는 트리로, 힙을 이용해서 우선순위 큐를 구현할 수 있습니다.
* 정렬
  * 정렬을 이용해서 문제를 효율적으로 풀어보세요.
* 완전탐색
  * 무식해 보여도 사실은 최고의 방법일 때가 있지요.
* 탐욕법(Greedy)
  * 부분적인 최적해가 전체적인 최적해가 되는 마법!
* 동적계획법(Dynamic Programming)
  * 불필요한 계산을 줄이고, 효율적으로 최적해를 찾아야만 풀리는 문제들입니다.
* 깊이/너비 우선 탐색(DFS/BFS)
  * 깊이/너비 우선 탐색을 사용해 원하는 답을 찾아보세요.
* 이분탐색
  * 이분탐색 기법을 이용해 효율적으로 값을 찾아보세요.
* 그래프
  * 엣지를 지나 그래프의 노드를 탐험해봅시다.

<br>

* level1
  * [12901_2016년](https://github.com/Re120c03/programmers/blob/master/level1/12901_2016%EB%85%84.js)
    * new Data("2016-${month}-${day}");
  * [12903_가운데 글자 가져오기](https://github.com/Re120c03/programmers/blob/master/level1/12903_%EA%B0%80%EC%9A%B4%EB%8D%B0%20%EA%B8%80%EC%9E%90%20%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0.js)
    * [String.prototype.charAt()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
  * [12906_같은 숫자는 싫어](https://github.com/Re120c03/programmers/blob/master/level1/12906_%EA%B0%99%EC%9D%80%20%EC%88%AB%EC%9E%90%EB%8A%94%20%EC%8B%AB%EC%96%B4.js)
  * [12910_나누어 떨어지는 숫자 배열](https://github.com/Re120c03/programmers/blob/master/level1/12910_%EB%82%98%EB%88%84%EC%96%B4%20%EB%96%A8%EC%96%B4%EC%A7%80%EB%8A%94%20%EC%88%AB%EC%9E%90%20%EB%B0%B0%EC%97%B4.js)
    * sort((a, b)=>a-b)
    * [Array.prototype.sort()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [12912_두 정수 사이의 합](https://github.com/Re120c03/programmers/blob/master/level1/12912_%EB%91%90%20%EC%A0%95%EC%88%98%20%EC%82%AC%EC%9D%B4%EC%9D%98%20%ED%95%A9.js)
    * [Math.abs()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
  * [12915_문자열 내 마음대로 정렬하기](https://github.com/Re120c03/programmers/blob/master/level1/12915_%EB%AC%B8%EC%9E%90%EC%97%B4%20%EB%82%B4%20%EB%A7%88%EC%9D%8C%EB%8C%80%EB%A1%9C%20%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0.js)
    * string 배열, n 번째 문자열 비교
    * return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
  * [12916_문자열 내 p와 y의 개수](https://github.com/Re120c03/programmers/blob/master/level1/12916_%EB%AC%B8%EC%9E%90%EC%97%B4%20%EB%82%B4%20p%EC%99%80%20y%EC%9D%98%20%EA%B0%9C%EC%88%98.js)
  * [12917_문자열 내림차순으로 배치하기](https://github.com/Re120c03/programmers/blob/master/level1/12917_%EB%AC%B8%EC%9E%90%EC%97%B4%20%EB%82%B4%EB%A6%BC%EC%B0%A8%EC%88%9C%EC%9C%BC%EB%A1%9C%20%EB%B0%B0%EC%B9%98%ED%95%98%EA%B8%B0.js)
    * return (s.split("")).sort().reverse().join("");
  * [12918_문자열 다루기 기본](https://github.com/Re120c03/programmers/blob/master/level1/12918_%EB%AC%B8%EC%9E%90%EC%97%B4%20%EB%8B%A4%EB%A3%A8%EA%B8%B0%20%EA%B8%B0%EB%B3%B8.js)
  * [12919_서울에서 김서방 찾기](https://github.com/Re120c03/programmers/blob/master/level1/12919_%EC%84%9C%EC%9A%B8%EC%97%90%EC%84%9C%20%EA%B9%80%EC%84%9C%EB%B0%A9%20%EC%B0%BE%EA%B8%B0.js)
    * [String.prototype.match()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/match)
    * [String.prototype.indexOf()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
  * [12921_소수 찾기](https://github.com/Re120c03/programmers/blob/master/level1/12921_%EC%86%8C%EC%88%98%20%EC%B0%BE%EA%B8%B0.js)
    * [에라토스테네스의 체](https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4)
  * [12922_수박수박수박수박수박수](https://github.com/Re120c03/programmers/blob/master/level1/12922_%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98.js)
    * [String.prototype.repeat()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
  * [12925_문자열을 정수로 바꾸기](https://github.com/Re120c03/programmers/blob/master/level1/12925_%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%84%20%EC%A0%95%EC%88%98%EB%A1%9C%20%EB%B0%94%EA%BE%B8%EA%B8%B0.js)
    * 숫자를 문자로 바꾸기
      * n += ""
      * String(n)
      * parseInt(tt);
    * 문자를 숫자로 바꾸기
      * s *= 1, s/1, +s
      * Number(s)
  * [12926_시저 암호](https://github.com/Re120c03/programmers/blob/master/level1/12926_%EC%8B%9C%EC%A0%80%20%EC%95%94%ED%98%B8.js)
    * [String.fromCharCode()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
  * [12928_약수의 합](https://github.com/Re120c03/programmers/blob/master/level1/12928_%EC%95%BD%EC%88%98%EC%9D%98%20%ED%95%A9.js)
    * [Math.sqrt()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
  * [12930_이상한 문자 만들기](https://github.com/Re120c03/programmers/blob/master/level1/12930_%EC%9D%B4%EC%83%81%ED%95%9C%20%EB%AC%B8%EC%9E%90%20%EB%A7%8C%EB%93%A4%EA%B8%B0.js)
    * [String.prototype.toUpperCase()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
    * [String.prototype.toLowerCase()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
  * [12931_자릿수 더하기](https://github.com/Re120c03/programmers/blob/master/level1/12931_%EC%9E%90%EB%A6%BF%EC%88%98%20%EB%8D%94%ED%95%98%EA%B8%B0.js)
  * [12932_자연수 뒤집어 배열로 만들기](https://github.com/Re120c03/programmers/blob/master/level1/12932_%EC%9E%90%EC%97%B0%EC%88%98%20%EB%92%A4%EC%A7%91%EC%96%B4%20%EB%B0%B0%EC%97%B4%EB%A1%9C%20%EB%A7%8C%EB%93%A4%EA%B8%B0.js)
    * return (n + "").split("").reverse().map(value=> parseInt(value));
  * [12933_정수 내림차순으로 배치하기](https://github.com/Re120c03/programmers/blob/master/level1/12933_%EC%A0%95%EC%88%98%20%EB%82%B4%EB%A6%BC%EC%B0%A8%EC%88%9C%EC%9C%BC%EB%A1%9C%20%EB%B0%B0%EC%B9%98%ED%95%98%EA%B8%B0.js)
    * return parseInt((n+"").split("").sort().reverse().join(""));
  * [12934_정수 제곱근 판별](https://github.com/Re120c03/programmers/blob/master/level1/12934_%EC%A0%95%EC%88%98%20%EC%A0%9C%EA%B3%B1%EA%B7%BC%20%ED%8C%90%EB%B3%84.js)
    * [Number.isInteger()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
  * [12935_제일 작은 수 제거하기](https://github.com/Re120c03/programmers/blob/master/level1/12935_%EC%A0%9C%EC%9D%BC%20%EC%9E%91%EC%9D%80%20%EC%88%98%20%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0.js)
    * [Array.prototype.splice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
    * [Math.min()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
  * [12937_짝수와 홀수](https://github.com/Re120c03/programmers/blob/master/level1/12937_%EC%A7%9D%EC%88%98%EC%99%80%20%ED%99%80%EC%88%98.js)
  * [12940_최대공약수와 최소공배수](https://github.com/Re120c03/programmers/blob/master/level1/12940_%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98%EC%99%80%20%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98.js)
    * [유클리드 호제법](https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95)
    * return b ? gcd(b, a%b) : a;
  * [12943_콜라츠 추측](https://github.com/Re120c03/programmers/blob/master/level1/12943_%EC%BD%9C%EB%9D%BC%EC%B8%A0%20%EC%B6%94%EC%B8%A1.js)
  * [12944_평균 구하기](https://github.com/Re120c03/programmers/blob/master/level1/12944_%ED%8F%89%EA%B7%A0%20%EA%B5%AC%ED%95%98%EA%B8%B0.js)
    * return arr.reduce((prevVal, curVal) => prevVal + curVal) / arr.length;
  * [12947_하샤드 수](https://github.com/Re120c03/programmers/blob/master/level1/12947_%ED%95%98%EC%83%A4%EB%93%9C%20%EC%88%98.js)
    * return Number.isInteger(x / (x+"").split("").reduce((prevVal, curVal) => prevVal*1 + curVal*1));
    * return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
  * [12948_핸드폰 번호 가리기](https://github.com/Re120c03/programmers/blob/master/level1/12948_%ED%95%B8%EB%93%9C%ED%8F%B0%20%EB%B2%88%ED%98%B8%20%EA%B0%80%EB%A6%AC%EA%B8%B0.js)
    * [Array.prototype.slice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
    * var result = "*".repeat(s.length - 4) + s.slice(-4);
  * [12950_행렬의 덧셈](https://github.com/Re120c03/programmers/blob/master/level1/12950_%ED%96%89%EB%A0%AC%EC%9D%98%20%EB%8D%A7%EC%85%88.js)
    * return arr1.map((a,i) => a.map((b, j) => b + arr2[i][j]));
  * [12954_x만큼 간격이 있는 n개의 숫자](https://github.com/Re120c03/programmers/blob/master/level1/12954_x%EB%A7%8C%ED%81%BC%20%EA%B0%84%EA%B2%A9%EC%9D%B4%20%EC%9E%88%EB%8A%94%20n%EA%B0%9C%EC%9D%98%20%EC%88%AB%EC%9E%90.js)
    * [Array.prototype.fill()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
    * return Array(n).fill(x).map((v, i) => (i + 1) * v)
  * [12969_직사각형 별찍기](https://github.com/Re120c03/programmers/blob/master/level1/12969_%EC%A7%81%EC%82%AC%EA%B0%81%ED%98%95%20%EB%B3%84%EC%B0%8D%EA%B8%B0.js)
  * [42748_K번째수](https://github.com/Re120c03/programmers/blob/master/level1/42748_K%EB%B2%88%EC%A7%B8%EC%88%98.js)
    * answer.push(array.slice(commands[ix][0] - 1, commands[ix][1]).sort((a, b) => a-b)[commands[ix][2] - 1]);
  * [42840_모의고사](https://github.com/Re120c03/programmers/blob/master/level1/42840_%EB%AA%A8%EC%9D%98%EA%B3%A0%EC%82%AC.js)
    * [Math.max](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
  * [42862_체육복](https://github.com/Re120c03/programmers/blob/master/level1/42862_%EC%B2%B4%EC%9C%A1%EB%B3%B5.js)
    * [Array.prototype.find()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
