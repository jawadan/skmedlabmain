import MaterialTable from "material-table";
import { data } from "./data";
const MTable = () => {
  const columns = [
    { title: "Анализ", field: "title" },
    { title: "Норма", field: "num_pages" },
    { title: "Укороченно", field: "authors" },
    { title: "Цена", field: "rating" }
  ];
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable columns={columns} data={data} title="" />
    </div>
  );
};
export default MTable;