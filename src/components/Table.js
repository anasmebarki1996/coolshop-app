import React, { useMemo, useState } from "react";

const Table = () => {
  const [data, setData] = useState([
    { id: 1, option: "+", value: 10, isActive: true },
    { id: 2, option: "+", value: 30, isActive: true },
  ]);

  const onChange = (index, value, type) => {
    const newData = [...data];
    newData[index][type] = value;
    setData(newData);
  };

  const onAddRow = () => {
    setData((prev) => [
      ...prev,
      { id: new Date().getTime(), option: "+", value: 0, isActive: true },
    ]);
  };

  const onDeleteRow = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const result = useMemo(() => {
    return data.reduce((acc, item) => {
      if (item.isActive) {
        if (item.option === "+") {
          return acc + item.value;
        } else {
          return acc - item.value;
        }
      }
      return acc;
    }, 0);
  }, [data]);

  return (
    <div class="wrapper">
      <div>
        <button onClick={onAddRow}>Add row</button>
      </div>
      <ul>
        {data.map((item, index) => (
          <li key={item.id}>
            <select onChange={(e) => onChange(index, e.target.value, "option")}>
              <option selected={item.option === "+"} value="+">
                +
              </option>
              <option selected={item.option === "-"} value="-">
                -
              </option>
            </select>
            <input
              type="text"
              value={item.value}
              onChange={(e) => onChange(index, Number(e.target.value), "value")}
              disabled={!item.isActive}
            />
            <button onClick={() => onDeleteRow(index)}>Delete</button>
            <button onClick={() => onChange(index, !item.isActive, "isActive")}>
              {item.isActive ? "Disable" : "Enable"}
            </button>
          </li>
        ))}
      </ul>
      <div>Result: {result}</div>
    </div>
  );
};

export default Table;
