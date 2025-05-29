
// Re-generate the page on every request
//export const dynamic = process.env.MODE_PROD === "true" ? "force-dynamic" : "auto"; // Force dynamic rendering if mode prod is true
export const dynamic = "force-dynamic"; // Force dynamic rendering

import prisma from "@/app/lib/prisma";
import TodosGrid from "@/todos/components/TodosGrid";


export const metadata = {
 title: 'Rest Todos',
 description: 'Rest Todos',
};

export default async function RestTodoPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  return (
    <div>
      <TodosGrid todos={todos} />
    </div>
  );
}