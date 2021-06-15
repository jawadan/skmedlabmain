import MaterialTable from "material-table";
import { data } from "./data";
const MTable = () => {
  const columns = [
    { title: "Наименование", field: "title" },
    { title: "Укороченно", field: "authors" },
    { title: "Норма", field: "num_pages" },
    { title: "Цена", field: "rating" }
  ];
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable columns={columns} data={data} title="" />
    </div>
  );
};
export default MTable;