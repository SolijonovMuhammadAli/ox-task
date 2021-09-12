import React, { useState, useEffect } from "react";
import { Input, Table } from "antd";
import { datas } from "./server";

const { Column } = Table;
const { Search } = Input;

function TabforSort() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(
      datas.sort((a, b) =>
        a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1
      )
    );
  }, []);
  const onChange = (e) => {
    let newData = datas.filter((item) =>
      item.firstName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(
      newData.sort((a, b) =>
        a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1
      )
    );
  };
  return (
    <>
      <div className="" style={{ maxWidth: "400px", margin: "0 auto" }}>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          onChange={onChange}
        />
      </div>
      <Table dataSource={data}>
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
      </Table>
    </>
  );
}

export default TabforSort;
