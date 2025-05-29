import { TabBar } from "@/components/TabBar";
import { cookies } from "next/headers";


export const metadata = {
 title: 'Cookies', description: 'Cookies',
};

export default async function CookiesPage() {

    //guardamos en una variable, la espera de la obtencion de instancia de cookies()
    const cookieStore = await cookies();

    //guardamos en esta variable, la posible obtencio ndel valor de la llave 'selectedTab', caso contrario no haya nada, su valor sera 1
    const tab =  cookieStore.get('selectedTab')?.value || '1';

  return (  
    <>
    <span className="text-3xl mb-10 mt-10 font-bold">Cookies</span>
    {/* en el component que puede recibir el currentTab, le pasamos como param, el valor de la cookie obtenida */}
    <TabBar currentTab={ +tab } />
    </>
  );
}