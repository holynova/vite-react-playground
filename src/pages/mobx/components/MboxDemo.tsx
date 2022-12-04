import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import {
  action,
  computed,
  makeAutoObservable,
  makeObservable,
  observable,
} from "mobx";
import { observer } from "mobx-react";
import DebugPanel from "../../../common/DebugPanel";
//  import {} from 'antd'
// import './MobxDemo.less'
// import  {log} from ''
interface Props {}

let objStore = makeAutoObservable({
  name: "foo",
  cnt: 1,
  arr: ["foo", "bar"],
  get double() {
    return this.cnt * 2;
  },
  increment(num: number) {
    this.cnt += num ?? 1;
  },
  push() {
    this.arr.push(new Date().toLocaleTimeString());
  },
  pop() {
    this.arr.pop();
  },
});

class ClassStore {
  name: string;
  cnt: number;
  arr: string[];
  constructor() {
    this.name = "foo";
    this.cnt = 1;
    this.arr = ["foo", "bar"];
    // makeAutoObservable(this);
    makeObservable(this, {
      name: observable,
      cnt: observable,
      arr: observable,
      double: computed,
      // increment: action,
      // push: action,
      // pop: action,
    });
  }

  get double() {
    return this.cnt * 2;
  }

  increment(num: number) {
    this.cnt += num ?? 1;
  }
  push() {
    this.arr.push(new Date().toLocaleTimeString());
  }
  pop() {
    this.arr.pop();
  }
}

let classStore = new ClassStore();

// let arrayStore = makeAutoObservable(["foo", "bar"]);

const MobxDemo: React.FC<Props> = (props) => {
  // const [loading, setLoading] = useState(false)
  const store = classStore;

  const objPart = (
    <>
      <div>
        <button
          onClick={() => {
            store.increment(100);
          }}
        >
          increment
        </button>
        <button onClick={() => store.push()}>push</button>
        <button onClick={() => store.pop()}>pop</button>
      </div>
      <DebugPanel>{store}</DebugPanel>
      <div>
        <h3>{store.name}</h3>
        <h3>{store.cnt}</h3>
        <h3>{store.double}</h3>
        <DebugPanel>{store.arr}</DebugPanel>
      </div>
    </>
  );

  return (
    <div className="MobxDemo">
      <h3>MobxDemo</h3>
      {objPart}
    </div>
  );
};

export default observer(MobxDemo);
