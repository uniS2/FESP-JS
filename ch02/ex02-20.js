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

//# 한 가지 작업에는 한 가지 task만 수행하기 - 유지보수관점에서 주의
// 완료된 할일 목록
var doneList = [];
for (let elem of todolist) {
  if (elem.done) {
    doneList.push(elem);
  }
}
console.log('완료된 할일 목록', doneList);

// 남은 할일 목록
var reaminList = [];
for (let elem of todolist) {
  if (!elem.done) {
    reaminList.push(elem);
  }
}
console.log('남은 할일 목록', reaminList);

//# 함수 활용하여 length 메서드 이용하기
// 남은 할일 수
var reaminCount = 0;
for (let elem of todolist) {
  if (!elem.done) {
    reaminCount++;
  }
}
console.log('남은 할일 수', reaminCount);

// _id=2인 할일
var todo = {};
for (let elem of todolist) {
  if (elem._id === 2) {
    todo = elem;
  }
}
console.log('_id=2인 할일', todo);

// _id=3인 할일의 index
var todoIndex = 0;
for (let i = 0; i < todolist.length; i++) {
  if (todolist[i]._id === 3) {
    todoIndex = i;
  }
}
console.log('_id=3인 할일의 index', todoIndex);

// 남은 할일이 하나라도 있는가?
var hasTodo = false;
for (let elem of todolist) {
  if (!elem.done) {
    hasTodo = true;
    break;
  }
}
console.log('남은 할일이 하나라도 있는가?', hasTodo);

// 할일이 모두 완료 되었는가?
var busy = true;
for (let elem of todolist) {
  if (!elem.done) {
    busy = false;
    break;
  }
}
console.log('할일이 모두 완료 되었는가?', busy);
