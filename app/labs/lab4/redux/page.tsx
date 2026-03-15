"use client";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "../store";
import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import TodoForm from "./todos/TodoForm";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import HelloRedux from "./hello";
export default function ReduxExamples() {
 return (
   <div>
     <h2>Redux Examples</h2>
     <Provider store={store}>
       <HelloRedux />
       <AddRedux />
       <CounterRedux />
       <TodoList />
     </Provider>
   </div>
 );
}