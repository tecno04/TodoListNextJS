import WidgetItem from "@/components/WidgetItem";

export default function DashboardPage() {
  return (

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* TODO: src/components <WidgetItem /> */}
        <WidgetItem title="Dashboard">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi distinctio cupiditate quo voluptatum quae facere, beatae illo! Porro deleniti inventore iusto quo repudiandae illum, nostrum in quas magnam sapiente.
        </WidgetItem>
      {/* TODO: Fin <WidgetItem /> */}

    </div>

  );
}