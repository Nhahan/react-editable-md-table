import React from 'react';
import EditableMdTable from "./lib/EditableMdTable";

const App = () => {
    const [data, setData] = React.useState([['', '', '']]);

    return (
        <div>
            <EditableMdTable data={data} setData={setData} />
        </div>
    );
}

export default App;
