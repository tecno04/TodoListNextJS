
// Re-generate the page on every request
// export const dynamic = process.env.MODE_PROD === "true" ? "force-dynamic" : "auto"; // Force dynamic rendering if mode prod is true
export const dynamic = "force-dynamic"; // Force dynamic rendering

import prisma from "@/app/lib/prisma";
import TodosGrid from "@/todos/components/TodosGrid";


export const metadata = {
 title: 'Server Actions',
 description: 'Server Actions',
};

export default async function ServerTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  return (
    <>
      <span className="text-3xl mb-10">Server Actions</span>
      <TodosGrid todos={todos} />
    </>
  );
}