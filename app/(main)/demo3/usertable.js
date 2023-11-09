"use client";

import React, { useState, useRef, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Tag } from "primereact/tag";
import { Toolbar } from "primereact/toolbar";

import { data1, data2, data1cache, getUser } from "@/app/api/data";

export default function UserTable() {
  const toast = useRef(null);
  const [resultData, setResultData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [rowClick, setRowClick] = useState(true);
  const [statuses] = useState(["YES", "NO"]);

  const onRowSelect = (event) => {
    // toast.current.show({
    //     severity: "info",
    //     summary: "Selected",
    //     detail: `Name: ${event.data.UserName}`,
    //     life: 3000,
    // });
  };
  const onRowUnselect = (event) => {
    // toast.current.show({
    //     severity: "warn",
    //     summary: "Unselected",
    //     detail: `Name: ${event.data.UserName}`,
    //     life: 3000,
    // });
  };

  const statusYN = (rowData) => {
    return (
      <Tag value={rowData.UseYN} severity={getStatus(rowData.UseYN)}></Tag>
    );
  };

  const getStatus = (value) => {
    switch (value) {
      case "Y":
        return "success";
      case "N":
        return "warning";
      default:
        return "danger";
    }
  };

  const leftToolbarTemplate = () => {
    return <div className="flex flex-wrap gap-0"></div>;
  };

  const rightToolbarTemplate = () => {
    return (
      <React.Fragment>
        {/* <Button label="New" icon="pi pi-plus" severity="success" onClick={//openNew} /> */}
        <Button
          // label="New"
          title="New"
          icon="pi pi-plus"
          severity="success"
          className="mr-1"
        />
        {/* <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedData || !selectedData.length} /> */}
        <Button
          // label="Delete"
          title="Delete"
          icon="pi pi-trash"
          severity="danger"
          className="mr-1"
          disabled={!selectedData || !selectedData.length}
        />
        {/* <Button
                    //   label="Export"
                    title="Delete"
                    icon="pi pi-upload"
                    className="p-button-help"
                // onClick={exportCSV}
                /> */}
      </React.Fragment>
    );
  };

  useEffect(() => {
    data2()
      .then((data) => {
        // console.log(data);
        setResultData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Toast ref={toast} />

      <Toolbar
        aria-label="Actions"
        className="mb-1"
        start={leftToolbarTemplate}
        end={rightToolbarTemplate}
      ></Toolbar>
      <DataTable
        value={resultData}
        size="small"
        showGridlines
        stripedRows
        paginator
        rows={10}
        rowsPerPageOptions={[15, 25, 50]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        removableSort
        selectionMode={rowClick ? "" : "checkbox"}
        selection={selectedData}
        onSelectionChange={(e) => setSelectedData(e.value)}
        dataKey="UserID"
        onRowSelect={onRowSelect}
        onRowUnselect={onRowUnselect}
        metaKeySelection={false}
        scrollable
        // scrollHeight="650px"
      >
        {/* <Column selectionMode="single" headerStyle={{ width: '3rem' }}></Column> */}
        <Column
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
        ></Column>
        <Column
          field="UserID"
          header="ID"
          style={{ width: "25%" }}
          sortable
        ></Column>
        <Column
          field="UserName"
          header="Name"
          sortable
          filter
          filterPlaceholder="Search by name"
        ></Column>
        <Column
          field="UseYN"
          header="Y/N"
          style={{ width: "5rem" }}
          sortable
          body={statusYN}
        ></Column>
      </DataTable>
    </div>
  );
}
