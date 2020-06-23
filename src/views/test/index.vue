<template>
  <div>
    <div>
      <h2>算法：</h2>
      <h3>十进制算法:</h3>
      <input type="text" v-model="decNumber"> =><span>{{decNumber2}}</span>
      <div><button @click="divideBy2Btn">十进制转二进制</button></div>

      <input type="text" v-model="decNumberN">
      <select name="base" placeholder="要转换的进制" v-model="base">
        <option value="2">2</option>
        <option value="8">8</option>
        <option value="16">16</option>
      </select>
      =><span>{{decNumberN2}}</span>
      <div><button @click="divideByNBtn">十进制转N进制</button></div>

    </div>
  </div>
</template>
<script>

  import { Stack, Queue, PriorityQueue, LinkedList } from '@/api/data';
  import { divideBy2, baseConverter, hotPotato } from '@/utils/algorithm'

  export default {
    data(){
      // let stack = new Stack();
      // console.log(Object.getOwnPropertyDescriptors(stack));

      /*  symbolds类问题
      *
        let sym = Object.getOwnPropertySymbols(stack)
        console.log(sym[0]);

        console.log(stack[sym[0]].push(1));
        console.log(stack[sym[0]].unshift(-1));
        stack.print();
      *
      * */

      /*  _items 公共变量问题
      console.log('items===',stack._items);
      console.log('items===',stack.items.push(0));
      console.log('items===',stack.items.unshift(-1));
      */

      // stack.push(1);
      // stack.push(4);
      // stack.push(4);
      // stack.push(8);
      //
      // console.log(stack.isEmpty());
      // console.log(stack.pop());
      // console.log(stack.size());
      // stack.print();
      // stack.clear();
      // stack.print();
      // console.log(stack.isEmpty());

      // let priorityQueue = new PriorityQueue();
      // priorityQueue.enqueue('json',2);
      // priorityQueue.enqueue('liuzheng');
      //
      // priorityQueue.print();


      // let names = ['李1','李2','李3','李4','李5'];
      // let winner = hotPotato(names,2);
      // console.log('获胜者是:'+winner);

      let list = new LinkedList();

      list.append(1);
      list.append(13);

      console.log(list);

      return {
        decNumber:null,
        decNumber2:null,
        decNumberN:null,
        base:null,
        decNumberN2:null,
      }
    },
    methods:{
      divideBy2Btn(){
        this.decNumber2 = divideBy2(this.decNumber);
      },
      divideByNBtn(){
        this.decNumberN2 = baseConverter(this.decNumberN,this.base);
      },
    }
  }
</script>
