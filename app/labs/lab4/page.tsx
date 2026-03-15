"use client"
import Link from "next/link";
import PassingFunctions from "./PassingFunctions";
import store from "./store";
import { Provider } from "react-redux";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import Counter from "./Counter";
import BooleanStateVariable from "./BooleanStateVariables";
import StringStateVariable from "./StringStateVariables";
import ArrayStateVariable from "./ArrayStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import DateStateVariable from "./DateStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./redux/page";
export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }
  return (
    <Provider store={store}>
    <div id="wd-passing-functions">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <Counter></Counter>
      <BooleanStateVariable />
      <StringStateVariable />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <ReduxExamples />
      <hr/><hr/>
    <ul>
    <li>
        <Link href="./lab4/url-encoding/query-params">Query Parameters</Link>
    </li>
    <li>
        <Link href="./lab4/redux">Redux Examples</Link>
    </li>
    <li>
        <Link href="./lab4/react-context">React Context Examples</Link>
    </li>
    <li>
        <Link href="./lab4/zustand">Zustand Examples</Link>
    </li>
    </ul>
    </div>
    </Provider>
);}
