import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HeightIcon from "@mui/icons-material/Height";
import Axios from "axios";

function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount, headCells } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const EnhancedTableToolbar = ({
  copyData,
  sortOption,
  filterOption,
  SetFilter,
  searchColumn,
}) => {
  const [search, setSearch] = useState("");

  const _filterSearch = async (value) => {
    setSearch(value);
    let filter = copyData.filter(
      (data) =>
        data[searchColumn].toLowerCase().search(value.toLowerCase()) !== -1
    );
    SetFilter(filter);
  };
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6} lg={8}>
          <Paper>
            <div className="input-group">
              <input
                type="text"
                className="form-control shadow-none search-bar"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
                value={search}
                onChange={(e) => _filterSearch(e.target.value)}
              />
              <div className="input-group-append  search_Icon">
                <span
                  className="input-group-text search-bar search_Icon"
                  id="basic-addon2"
                >
                  <SearchIcon />
                </span>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3} lg={2}>
          <div className="d-flex flex-row px-2">
            <div className="dropdown px-2">
              <button
                className="btn bg-white  border py-0 px-3"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="d-flex flex-nowrap">
                  <div>
                    <HeightIcon
                      fontSize="small"
                      style={{ fontSize: "16px", fontWeight: "bolder" }}
                    />
                  </div>
                  <div className="px-1">
                    <small>
                      <b>Sort</b>
                    </small>
                  </div>
                  <div>
                    <KeyboardArrowDownIcon
                      fontSize="small"
                      style={{
                        fontSize: "16px",
                        fontWeight: "bolder",
                        color: "black",
                      }}
                    />
                  </div>
                </div>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                {sortOption.map((option) => (
                  <li key={option}>
                    <button className="dropdown-item" type="button">
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="dropdown px-2">
              <button
                className="btn bg-white  border py-0 px-3"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="d-flex flex-nowrap">
                  <div>
                    <FilterAltIcon
                      fontSize="small"
                      style={{ fontSize: "16px", fontWeight: "bolder" }}
                    />
                  </div>
                  <div className="px-1">
                    <small>
                      <b>Filter</b>
                    </small>
                  </div>
                  <div>
                    <KeyboardArrowDownIcon
                      fontSize="small"
                      style={{
                        fontSize: "16px",
                        fontWeight: "bolder",
                        color: "black",
                      }}
                    />
                  </div>
                </div>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                {filterOption.map((option) => (
                  <li key={option}>
                    <button className="dropdown-item" type="button">
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default function EnhancedTable({ componentData }) {
  const { tableColumns, tableData, sortOption, filterOption, searchColumn } =
    componentData;
  const [copyData, setCopyData] = useState([]);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    initialFunction();
  }, []);

  const initialFunction = async () => {
    setColumns(tableColumns);
    const { data } = await tableData();
    setRows(data);
    setCopyData(data);
    console.log(data);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%", border: 0 }}>
      <Paper sx={{ width: "100%" }}>
        <EnhancedTableToolbar
          copyData={copyData}
          searchColumn={searchColumn}
          sortOption={sortOption}
          filterOption={filterOption}
          SetFilter={(data) => setRows(data)}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
              headCells={columns}
            />
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      {tableColumns.map((col) => (
                        <TableCell align="left">{row[col.id]}</TableCell>
                      ))}
                      {/* <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.id}
                      </TableCell>
                      <TableCell align="left">{row.title}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.phone}</TableCell> */}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{
            display: "block",
          }}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
