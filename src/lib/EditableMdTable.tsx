import React from 'react';

interface Props {
  data: string[][];
  setData: React.Dispatch<React.SetStateAction<string[][]>>;
}

const EditableMdTable: React.FC<Props> = ({ data, setData }) => {
  const cellWidth = '150px';
  const cellHeight = '40px';

  const handleCellChange = (rowIndex: number, colIndex: number, event: React.ChangeEvent<HTMLSpanElement>) => {
    const newValue = event.target.innerText;
    const updatedData = data.map((row, rIndex) =>
      rIndex === rowIndex ? row.map((cell, cIndex) => (cIndex === colIndex ? newValue : cell)) : row
    );
    setData(updatedData);
  };

  const handleAddRow = (index: number) => {
    const newRow = ['', '', ''];
    setData((prevData) => [...prevData.slice(0, index), newRow, ...prevData.slice(index)]);
  };

  const handleDeleteRow = (index: number) => {
    if (data.length > 1) {
      setData((prevData) => [...prevData.slice(0, index), ...prevData.slice(index + 1)]);
    }
  };

  return (
    <div className="table-container">
      <table className="w-full border">
        <thead>
        <tr>
          <th style={{ width: cellWidth, height: cellHeight }} className="p-2 border-y">
            Key
          </th>
          <th style={{ width: cellWidth, height: cellHeight }} className="p-2 border-y">
            Type
          </th>
          <th style={{ width: cellWidth, height: cellHeight }} className="p-2 border-y">
            Description
          </th>
        </tr>
        </thead>
        <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td
                key={colIndex}
                style={{ width: cellWidth, height: cellHeight }}
                className="p-2 border-y relative"
              >
                  <span
                    className="block text-center overflow-hidden whitespace-nowrap"
                    style={{ maxWidth: cellWidth }}
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(event) => handleCellChange(rowIndex, colIndex, event)}
                  >
                    {cell}
                  </span>
                {colIndex === 0 && (
                  <i
                    className="ri-add-circle-fill cursor-pointer absolute -left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-xl text-base icon"
                    onClick={() => handleAddRow(rowIndex)}
                  ></i>
                )}
                {colIndex === 2 && (
                  <i
                    className="ri-indeterminate-circle-fill cursor-pointer absolute -right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-xl text-base icon"
                    onClick={() => handleDeleteRow(rowIndex)}
                  ></i>
                )}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableMdTable;
