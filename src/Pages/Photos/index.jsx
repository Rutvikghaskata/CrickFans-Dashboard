import React from "react";
import "./photos.scss";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { IoMdTime, IoMdAddCircle } from "react-icons/io";
import { BiLinkAlt } from "react-icons/bi";
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: "1.1rem",
          border: "0",
        }}
      />
    </span>
  );
}
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search records...`}
    />
  );
}

function Photos() {
  const data = React.useMemo(
    () => [
      {
        col1: "Minsk",
        col2: "27",
        col3: "rain",
        col4: "739",
        col5: "90",
        col6: (
          <div>
            <span>
              <FaEye
                size={22}
                color={"#10044aab"}
                style={{ marginRight: 10 }}
              />
            </span>
            <span>
              <MdEdit size={22} color={"#4a85fb"} style={{ marginRight: 10 }} />
            </span>
            <span>
              <AiOutlineDelete size={22} color={"#ff0d2d"} />
            </span>
          </div>
        ),
      },
      {
        col1: "Vilnius",
        col2: "30",
        col3: "rain",
        col4: "740",
        col5: "87",
        col6: (
          <div>
            <span>
              <FaEye
                size={22}
                color={"#10044aab"}
                style={{ marginRight: 10 }}
              />
            </span>
            <span>
              <MdEdit size={22} color={"#4a85fb"} style={{ marginRight: 10 }} />
            </span>
            <span>
              <AiOutlineDelete size={22} color={"#ff0d2d"} />
            </span>
          </div>
        ),
      },
      {
        col1: "London",
        col2: "23",
        col3: "rain",
        col4: "743",
        col5: "77",
        col6: (
          <div>
            <span>
              <FaEye
                size={22}
                color={"#10044aab"}
                style={{ marginRight: 10 }}
              />
            </span>
            <span>
              <MdEdit size={22} color={"#4a85fb"} style={{ marginRight: 10 }} />
            </span>
            <span>
              <AiOutlineDelete size={22} color={"#ff0d2d"} />
            </span>
          </div>
        ),
      },
      {
        col1: "Madrid",
        col2: "34",
        col3: "sunny",
        col4: "738",
        col5: "40",
        col6: (
          <div>
            <span>
              <FaEye
                size={22}
                color={"#10044aab"}
                style={{ marginRight: 10 }}
              />
            </span>
            <span>
              <MdEdit size={22} color={"#4a85fb"} style={{ marginRight: 10 }} />
            </span>
            <span>
              <AiOutlineDelete size={22} color={"#ff0d2d"} />
            </span>
          </div>
        ),
      },
      {
        col1: "Warsaw",
        col2: "25",
        col3: "heavy rain",
        col4: "739",
        col5: "88",
        col6: (
          <div>
            <span>
              <FaEye
                size={22}
                color={"#10044aab"}
                style={{ marginRight: 10 }}
              />
            </span>
            <span>
              <MdEdit size={22} color={"#4a85fb"} style={{ marginRight: 10 }} />
            </span>
            <span>
              <AiOutlineDelete size={22} color={"#ff0d2d"} />
            </span>
          </div>
        ),
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "City",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Temperature",
        accessor: "col2",
      },
      {
        Header: "Weather Forecast",
        accessor: "col3",
      },
      {
        Header: "Pressure",
        accessor: "col4",
      },
      {
        Header: "Humidity",
        accessor: "col5",
      },
      {
        Header: "Action",
        accessor: "col6",
      },
    ],
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const [screen, setScreen] = React.useState(0);
  const [disableBtn, setDisableBtn] = React.useState(false);
  const [thumbnail, setThumbnail] = React.useState(null);
  const fileInput = React.createRef();
  return (
    <div className="photos-wrapper">
      <div
        className={
          screen === 0 ? "photos-list-section" : "inactive photos-list-section"
        }
      >
        <div className="head-section">
          <input
            type="text"
            className="search-input"
            placeholder="Search Photos"
          />
          <button
            className="add-button"
            onClick={() => {
              setScreen(1);
            }}
          >
            ADD
          </button>
        </div>

        <div className="table-container">
          <table {...getTableProps()}>
            <thead className="table-header">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="title"
                    >
                      {/* <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div> */}
                      {column.render("Header")}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <BsArrowDownShort color="#10044a" size={15} />
                          ) : (
                            <BsArrowUpShort color="#10044a" size={15} />
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
              {/* <tr>
              <th
                colSpan={visibleColumns.length}
                style={{
                  textAlign: "left",
                }}
              >
                <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={state.globalFilter}
                  setGlobalFilter={setGlobalFilter}
                />
              </th>
            </tr> */}
            </thead>
            <tbody {...getTableBodyProps()} className="table-body">
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="data-row">
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()} className="data">
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className={
          screen === 1 ? "add-photos-section" : "inactive add-photos-section"
        }
      >
        <div className="add-photos-container">
          <BsArrowLeft
            className="back-icon"
            onClick={() => {
              setScreen(0);
            }}
          />
            <div className="add-photo-form">
            <h2 className="head-title">Add Photos</h2>
            <input
              style={{ display: "none" }}
              type="file"
              className="search-input"
              placeholder="Search photos"
              id="file"
              ref={fileInput}
              onChange={(e) => {
                setThumbnail(fileInput.current.files[0].name);
              }}
            />
            <label
              htmlFor="file"
              className={thumbnail ? "select-file selected" : "select-file"}
            >
              {thumbnail ? (
                <div>
                  <p className="title">Thumbnail</p>
                  <p className="file-name">{thumbnail}</p>
                </div>
              ) : (
                <>
                  <IoMdAddCircle size={35} style={{ marginRight: 10 ,marginLeft: 20}} />
                  Add Thumbnail
                </>
              )}
            </label>
            <div className={"input-container"}>
              <HiPencil className={"icon"} />
              <input type="text" className="search-input" placeholder="Title" />
            </div>
            <div className={"input-container"}>
              <HiPencil className={"icon"} />
              <input
                type="text"
                className="search-input"
                placeholder="Description"
              />
            </div>
            <div className={"input-container"}>
              <BiLinkAlt className={"icon"} />
              <input
                type="text"
                className="search-input"
                placeholder="Youtube link"
              />
            </div>
            <div className={"input-container"}>
              <IoMdTime className={"icon"} />
              <input
                type="text"
                className="search-input"
                placeholder="Time-Duration"
              />
            </div>
            <button
              className={disableBtn ? "submit-btn disable" : "submit-btn"}
              disable={true}
              onClick={() => {
                setScreen(1);
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photos;
