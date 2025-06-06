import prisma from "@/app/lib/prisma";
import TodosGrid from "@/todos/components/TodosGrid";

export default async function RestTodoPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  return (
    <div>
      <TodosGrid todos={todos} />
    </div>
  );
}