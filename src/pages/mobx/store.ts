import { makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";
class TodoStore {
  todoList: {
    id: string;
    task: string;
    done: boolean;
    assignee: string | null;
  }[];

  constructor() {
    this.todoList = [];
    makeAutoObservable(this);
  }

  get doneCount() {
    return this.todoList.filter((x) => x.done).length;
  }

  report() {
    let next = this.todoList.find((x) => !x.done);
    let res = `
    next: ${next ? next.task : "none"}
    progress: ${this.doneCount} / ${this.todoList.length}
    `;
    console.log(res);
    return res;
  }

  toggle(id: string) {
    let foundIndex = this.todoList.findIndex((x) => x.id === id);
    if (foundIndex !== -1) {
      this.todoList[foundIndex].done = !this.todoList[foundIndex].done;
    }
  }

  add(task: string) {
    this.todoList.push({
      id: uuid(),
      task,
      done: false,
      assignee: null,
    });
  }
}

export const todoStore = new TodoStore();

// function test() {
//   new Array(5).fill(0).forEach((x,i)=>{
//     todoStore.add(`task${i}`)
//     todoStore.report()
//   })

// }
