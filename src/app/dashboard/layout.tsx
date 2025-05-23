import SideBar from '@/components/SideBar';
import TopMenu from '@/components/TopMenu';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* TODO: src/components <Sidebar /> */}
            <SideBar />
            {/*TODO: Fin del <Sidebar /> */}


            {/* Main Layout content - Contenido principal del Layout */}
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">

                {/* TODO: src/components <TopMenu /> */}
                <TopMenu />
                {/* TODO: Fin del <TopMenu /> */}

                {/* TODO: Contenido en el Layout.tsx */}
                <div className="px-6 pt-6">

                    {/* TODO: dashboard/page.tsx  */}
                    {/* Este contenido va dentro de page.tsx */}
                        { children }
                    {/* TODO: fin del dashboard/page.tsx  */}

                    {/* TODO: Fin del contenido en el Layout.tsx */}
                </div>
            </div>
        </>
    );
}