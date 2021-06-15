import MaterialTable from "material-table";
import { data } from "./data";
const MTable = () => {
  const columns = [
    { title: "Анализ", field: "title" },
    { title: "Цена(тг)", field: "price" },
    { title: "Норма", field: "norm" },
    { title: "Укороченно", field: "authors" }

  ];
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable columns={columns} data={data} title="" />
    </div>
  );
};
export default MTable;