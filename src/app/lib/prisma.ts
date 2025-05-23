//importamos prisma
import { PrismaClient } from "@/generated/prisma";

//guardamos en la variable "prisma" una nueva instancia de PrismaClient
const prisma = new PrismaClient()

//exportamos la variable prisma
export default prisma

// import { PrismaClient } from "@/generated/prisma";

// let prisma: PrismaClient

// if (process.env.NODE_ENV === 'production') {
//     prisma = new PrismaClient()
// } else {
//     if (!(global as any).prisma) {
//         (global as any).prisma = new PrismaClient()
//     }
//     prisma = (global as any).prisma
// }

// export default prisma