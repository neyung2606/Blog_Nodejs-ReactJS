import React, { useEffect, useState } from "react";
import { SideBar, Header, Title } from "@components";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { Container } from "@material-ui/core";
import { getUser } from "@apis/user.api";
import { validateName } from "@utils/validations";
import CustomDetailRenderer from "./components/custom-detail";
import { Loading } from "@components/loading";

const Home = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  useEffect(() => {
    renderUser();
  }, []);

  const renderUser = async () => {
    const data = await getUser();
    setRowData(data);
  };

  const setValueName = (params) => {
    const match = validateName(params.newValue);
    params.data.name = match ? params.newValue : params.oldValue;
    return true;
  };

  const getRowNodeId = (data) => {
    return data.id;
  };

  return (
    <div>
      <SideBar />
      <Header />
      <Container>
        <Title title="User" />

        <div
          className="ag-theme-alpine"
          style={{ height: "calc(100vh - 250px)" }}
        >
          <AgGridReact
            getRowNodeId={getRowNodeId}
            masterDetail={true}
            rowData={rowData}
            defaultColDef={{
              flex: 1,
              editable: true,
              resizable: true,
            }}
            pagination={true}
            paginationPageSize={15}
            detailCellRenderer={"myDetailCellRenderer"}
            loadingCellRenderer={"myLoading"}
            frameworkComponents={{
              myDetailCellRenderer: CustomDetailRenderer,
              myLoading: Loading,
            }}
            immutableData={true}
            detailCellRendererParams={{
              reload: renderUser
            }}
          >
            <AgGridColumn
              field="id"
              sortable={true}
              filter={true}
              editable={false}
              cellRenderer="agGroupCellRenderer"
            />
            <AgGridColumn
              field="name"
              sortable={true}
              filter={true}
              valueSetter={setValueName}
            />
            <AgGridColumn field="username" sortable={true} filter={true} />
            <AgGridColumn field="status" sortable={true} filter={true} />
          </AgGridReact>
        </div>
      </Container>
    </div>
  );
};

export default Home;
