 import { selector } from "recoil";
import { todoState } from "../atoms/TodoState";

 const totalTodos  = selector({
    key: 'charCountState',
    get: ({get}) => {
        const text = get(todoState);

        return text.length;
    },
 })

 export default totalTodos;