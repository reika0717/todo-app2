import {createStore} from 'redux'
import { todoListReducer } from './reducers/todoListReducer'

/*Init Store*/
export default createStore(todoListReducer)

/* TODO: todoListReducerの中に入っている、個別のTodoに対する処理を
 +   todoReducerに移譲する
 +const todoReducer = (state, action) => {
 +}
 +*/

 /* TODO:
 +  * Reducerを1ファイル1Reducerの単位で reducers/ 以下にファイルを分割する。ファイル名はReducerの変数名と同一にする。
 +  * ActionはReducerほど処理が複雑でないので、 actions/index.js にまとめて格納する。
 +*/
