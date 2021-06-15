import MaterialTable from "material-table";
import { data } from "./data";
const MTable = () => {
    const columns = [
        { title: "Анализ", field: "title" },
        { title: "Цена(тг)", field: "price" },
        { title: "Норма", field: "norm" },

    ];
    return (
        <div style={{ maxWidth: "100%" }}>
            <MaterialTable
                columns={columns}
                data={data}
                title=""
                style={{ fontSize: '1.125rem', color: '#666666' }}
                options={{ headerStyle: { fontWeight: 'bold', fontSize: '1.125rem', color: '#191919' } }} />
        </div>
    );
};
export default MTable;