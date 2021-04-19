import React from "react";
import Filterable from "./Filterable";

class TableHeader extends React.Component {
  state = {
    data: [
      {
        headerName: "id",
      },
      {
        headerName: "Name",
        filters: ["select1", "select2", "select3"],
      },
      {
        headerName: "Address",
        filters: ["select1", "select2", "select3", "select4"],
      },
    ],
  };

  render() {
    return (
      <div style={{ display: "flex", width: "900px" }}>
        {this.state.data.map((headerObj, index) => {
          return (
            <div
              style={{
                display: "flex",
                width: "43%",
                color: "green",
                backgroundColor: "yellow",
              }}
              key={index}
            >
              {headerObj.headerName}
              {headerObj.hasOwnProperty("filters") ? (
                <Filterable filters={headerObj.filters} />
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }
}

export default TableHeader;
