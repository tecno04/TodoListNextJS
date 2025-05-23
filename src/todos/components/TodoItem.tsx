import { Todo } from "@/generated/prisma"
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
    todos: Todo
    toggleUpdate: (id: string, complete: boolean) => Promise<Todo>
}

const TodoItem = ({ todos, toggleUpdate }: Props) => {
    return (
        <div
            className={
                todos.complete
                    ?
                    "line-through bg-blue-50 rounded-lg shadow-sm p-5 border-dashed border border-blue-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0;"
                    :
                    "bg-red-50 rounded-lg shadow-sm p-5 border-dashed border border-red-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0;"
            }
        >
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
                <div 
                    onClick={ () => toggleUpdate(todos.id, !todos.complete) }
                    className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 bg-blue-100`}
                >
                    {todos.complete ? <IoSquareOutline size={30} /> : <IoCheckboxOutline size={30} />}
                </div>
                <div className="text-center sm:text-left">{todos.description}</div>
            </div>
        </div>
    )
}

export default TodoItem
