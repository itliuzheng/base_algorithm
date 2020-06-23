
//栈    先进后出（LIFO）原则
//在栈里  新元素都靠近 栈顶    旧元素都接近栈底
// export function Stack() {
//   var items = [];
//
//   //添加一个（或几个）新元素到栈顶
//   this.push = function (element) {
//     items.push(element);
//   };
//
//   //移除栈顶元素
//   this.pop = function () {
//     return items.pop();
//   };
//
//   //查看栈顶元素
//   this.peek = function () {
//     return items[items.length - 1];
//   };
//
//   //检查栈是否为空
//   this.isEmpty = function () {
//     return items.length == 0;
//   };
//
//   //返回栈里的元素个数
//   this.size = function () {
//     return items.length;
//   };
//
//   //清空栈
//   this.clear = function () {
//     items = [];
//   };
//
//   //打印栈
//   this.print = function () {
//     console.log(items.toString());
//   };
// }

//缺点：变量tiems 是公共的
// export class Stack {
//
//   constructor(){
//     this.items = [];
//   }
//
//   //添加一个（或几个）新元素到栈顶
//   push(element) {
//     this.items.push(element);
//   };
//
//   //移除栈顶元素
//   pop() {
//     return this.items.pop();
//   };
//
//   //查看栈顶元素
//   peek() {
//     return this.items[this.items.length - 1];
//   };
//
//   //检查栈是否为空
//   isEmpty() {
//     return this.items.length == 0;
//   };
//
//   //返回栈里的元素个数
//   size() {
//     return this.items.length;
//   };
//
//   //清空栈
//   clear() {
//     this.items = [];
//   };
//
//   //打印栈
//   print() {
//     console.log(this.items.toString());
//   };
//
// }

//缺点：可以通过 Object.getOwnPropertySymbols(stack)  来获取 _items 进而修改数组



export let Stack = (function () {

//缺点：扩展类不可继承私有属性
  let items = new WeakMap();

  class Stack {

    constructor(){
      items.set(this,[])
    }

    //添加一个（或几个）新元素到栈顶
    push(element) {
      let s = items.get(this);
      s.push(element);
    };

    //移除栈顶元素
    pop() {
      let s = items.get(this);
      return s.pop();
    };

    //查看栈顶元素
    peek() {
      let s = items.get(this);
      return s[s.length - 1];
    };

    //检查栈是否为空
    isEmpty() {
      let s = items.get(this);
      return s.length == 0;
    };

    //返回栈里的元素个数
    size() {
      let s = items.get(this);
      return s.length;
    };

    //清空栈
    clear() {
      let s = items.get(this);
      s = [];
    };

    //打印栈
    print() {
      let s = items.get(this);
      console.log(s.toString());
    };

  }
  return Stack
})();


//队列   先进先出 原则
// function Queue() {
//   let items = [];
//
//   //像队列添加元素
//   this.enqueue = function (element) {
//     items.push(element);
//   };
//
//   //从队列移除元素
//   this.dequeue = function () {
//     return items.shift();
//   };
//
//   //查看队列头元素
//   this.front = function () {
//     return items[0];
//   };
//
//   //检查队列是否为空
//   this.isEmpty = function () {
//     return items.length == 0;
//   };
//
//   this.size = function () {
//     return items.length;
//   };
//
//   this.print = function () {
//     console.log(items.toString());
//   }
//
// }

export let Queue = (function () {
  const items = new WeakMap();
  class Queue{
    constructor(){
      items.set(this,[])
    }

    //像队列添加元素
    enqueue(element) {
      let q = items.get(this);
      q.push(element);
    };

    //从队列移除元素
    dequeue() {
      let q = items.get(this);
      return q.shift();
    };

    //查看队列头元素
    front() {
      let q = items.get(this);
      return q[0];
    };

    //检查队列是否为空
    isEmpty() {
      let q = items.get(this);
      return q.length == 0;
    };

    size() {
      let q = items.get(this);
      return q.length;
    };

    print() {
      let q = items.get(this);
      console.log(q.toString());
    }

  }
  return Queue;
})();


export let PriorityQueue = (function () {
  const items = new WeakMap();

  class QueueElement{
    constructor(element,priority){
      this.element = element;
      this.priority = priority;
    }
  }

  class Queue{
    constructor(){
      items.set(this,[]);
    }

    //像队列添加元素
    enqueue(element,priority = 100) {
      let q = items.get(this);
      let queueElement = new QueueElement(element,priority);

      let added = false;
      for(let i = 0;i<q.length;i++){
        if(queueElement.priority < q[i].priority){
          q.splice(i,0,queueElement);
          added = true;
          break;
        }
      }
      if(!added){
        q.push(queueElement);
      }

    };

    //从队列移除元素
    dequeue() {
      let q = items.get(this);
      return q.shift();
    };

    //查看队列头元素
    front() {
      let q = items.get(this);
      return q[0];
    };

    //检查队列是否为空
    isEmpty() {
      let q = items.get(this);
      return q.length == 0;
    };

    size() {
      let q = items.get(this);
      return q.length;
    };

    print() {
      let q = items.get(this);
      for(let i = 0;i<q.length;i++){
        console.log(`${q[i].element} - ${q[i].priority}`);
      }
    }

  }
  return Queue;
})();



//创建链表

export let LinkedList = (function () {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;
  class linkedList{
    constructor(){

    }
    
    append(element){

    }

    insert(position,element){

    }
    removeAt(position){

    }
    remove(element){

    }

    indexOf(element){

    }
    isEmpty(){

    }
    size(){

    }
    getHead(){

    }
    toString(){

    }
    print(){

    }


  }

  return LinkedList
})();
