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
                style={{ fontSize: '17px', color: '#666666' }}
                options={{ headerStyle: { fontWeight: 'bold', fontSize: '17px', color: '#191919' } }}
                localization={{
                    toolbar: {
                        searchPlaceholder: ""
                    }
                }}
            />
        </div>
    );
};
export default MTable;