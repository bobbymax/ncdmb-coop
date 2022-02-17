import React, { useState } from "react";
import * as XLSX from "xlsx";

const ImportCsv = () => {
  const [excelData, setExcelData] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const workBook = XLSX.read(bufferArray, { type: "buffer" });

        const workSheetName = workBook.SheetNames[0];

        const workSheet = workBook.Sheets[workSheetName];

        const data = XLSX.utils.sheet_to_json(workSheet);

        resolve(data);
      };

      fileReader.onerror = (err) => {
        reject(err);
      };
    });

    promise
      .then((data) => {
        setExcelData(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Import Excel File</h2>

      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];

          readExcel(file);
        }}
      />

      <div class="card" style={{ width: "50rem" }}>
        <div class="card-body">
          <table className="table table-responsive table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Module</th>
                <th scope="col">Type</th>
                <th scope="col">Access Control</th>
                <th scope="col">Parent</th>
                <th scope="col">Departments</th>
                <th scope="col">Roles</th>
              </tr>
            </thead>

            <tbody>
              {excelData.length > 0 &&
                excelData.map((data, i) => (
                  <tr key={i}>
                    <td>{data.MODULE}</td>
                    <td>{data.TYPE}</td>
                    <td>{data.ACCESSCONTROL}</td>
                    <td>{data.PARENT}</td>
                    <td>{data.DEPARTMENTS}</td>
                    <td>{data.ROLES}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ImportCsv;
