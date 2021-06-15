import MaterialTable from "material-table";
import { Paper } from "@material-ui/core";
import { data } from "./data";
const MTable = () => {
    const columns = [
        { title: "Наименование", field: "title" },
        { title: "Цена(тг)", field: "price" },

    ];
    return (
        <div style={{ maxWidth: "100%" }}>
            <MaterialTable
                components={{
                    Container: (props) => <Paper {...props} elevation={0} />
                }}
                columns={columns}
                data={data}
                title=""
                style={{ fontSize: '16px', color: '#666666', backgroundColor:"#eaeaea" }}
                options={{
                    pageSize: 7,
                    pageSizeOptions: [15, 30, 50],
                    headerStyle: { fontWeight: 'bold', backgroundColor:"#eaeaea", fontSize: '17px', color: '#191919' }
                }}
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