import React, { useState, useEffect } from "react";
import axios from "axios";
import { TOKEN } from "./../../const";
import { Table, Input } from "antd";
const { Search } = Input;
const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Sku",
    dataIndex: "sku",
  },
  {
    title: "Supplier",
    dataIndex: "supplier",
  },
  {
    title: "Barcode",
    dataIndex: "barcode",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
];

function TabforServer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://face.ox-sys.com/variations", {
        headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
      })
      .then((res) => {
        setData(
          res.data.items.sort((a, b) =>
            a.supplier.toLowerCase() > b.supplier.toLowerCase() ? 1 : -1
          )
        );

        localStorage.setItem("filData", JSON.stringify(res.data.items));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onChange = (e) => {
    let newData = JSON.parse(localStorage.getItem("filData"))
      .filter((item) =>
        item.supplier.toLowerCase().includes(e.target.value.toLowerCase())
      )
      .sort((a, b) =>
        a.supplier.toLowerCase() > b.supplier.toLowerCase() ? 1 : -1
      );
    setData(newData);
  };
  return (
    <div>
      <div className="" style={{ maxWidth: "400px", margin: "0 auto" }}>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          onChange={onChange}
        />
      </div>
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        size="middle"
      />
    </div>
  );
}

export default TabforServer;
