import { ModelColumn } from "@/components/ui/ModelColumn";
import { twoModelColumns } from "@/lib/content";

export function TwoModel() {
  return (
    <section className="bg-[#F7F8FB]">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {twoModelColumns.map((column, index) => (
          <ModelColumn key={column.id} column={column} bordered={index < twoModelColumns.length - 1} />
        ))}
      </div>
    </section>
  );
}
