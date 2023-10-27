var todolist = [
  {
    "_id": 1,
    "title": "Javascript 공부",
    "done": true
  },
  {
    "_id": 2,
    "title": "Typescript 공부",
    "done": false
  },
  {
    "_id": 3,
    "title": "React 공부",
    "done": false
  },
  {
    "_id": 4,
    "title": "React 프로젝트",
    "done": true
  }
]

// forEach() 완료된 할일 목록
//# 삼항 연산자는 가독성이 떨어진다는 단점: `todo.done ? donelist.push(todo) : 0`
var doneList = [];
todolist.forEach(function (todo) {
  if (todo.done) {
    donelist.push(todo);
  }
});
console.log('forEach() 완료된 할일 목록', doneList);

// filter() 완료된 할일 목록
//# 화살표 함수 권장
var doneList = todolist.filter(function (todo) {
  // if (todo.done) return true;
  return todo.done
});
console.log('filter() 완료된 할일 목록', doneList);

// map() 남은 할일 목록 <- filter 훨씬 쉬움
//# 삼항 todo => todo.done ? null : todo;
var reaminList = todolist.map(todo => !todo.done && todo).filter(i => i);
console.log('map() 남은 할일 목록', reaminList);

// reduce() 남은 할일 수
//# 화살표 함수 권장하나 가독성이 떨어진다는 단점
var reaminCount = todolist.reduce(function (acc, todo) {
  return acc + todo.done ? 0 : 1;
}, 0)
console.log('reduce() 남은 할일 수', reaminCount);

// find() _id=2인 할일
//# 요소(전체)를 반환
var todo = todolist.find(({ _id }) => _id === 2).title;
console.log('find() _id=2인 할일', todo);

// find() _id=3인 할일의 index
//# findIndex 권장
// var todoIndex = todolist.indexOf(todolist.find(({ _id }) => _id === 3));
var todoIndex = todolist.findIndex(todo => todo._id === 3);
console.log('find() _id=3인 할일의 index', todoIndex);

// some() 남은 할일이 하나라도 있는가?
//# 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트
//# 하나 있다면 자동으로 break; 문 역할
var hasTodo = todolist.some(todo => !todo.done);
console.log('some() 남은 할일이 하나라도 있는가?', hasTodo);

// every() 할일이 모두 완료 되었는가?
//# 배열의 모든 요소가 제공된 함수로 구현된 테스트를 통과하는지 테스트
var busy = todolist.every(todo => todo.done);
console.log('every() 할일이 모두 완료 되었는가?', busy);
