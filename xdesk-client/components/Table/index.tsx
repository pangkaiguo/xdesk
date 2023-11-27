import React from "react";
import PropTypes from "prop-types";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { Table, TableHead, TableRow, TableBody, TableCell, createTheme } from "@mui/material";
import { tableStyle } from "theme/ts/components";

interface CustomTableProps {
  tableHeaderColor: "gray" | "warning" | "primary" | "danger" | "success" | "info" | "rose";
  tableHead: Array<string>;
  tableData: Array<Array<string>>;
};
export default function CustomTable(props: CustomTableProps) {
  const theme = createTheme();
  const useStyles: Function = makeStyles(tableStyle(theme) as DefaultTheme);
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop: any, key: any) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop: any, key: any) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {prop.map((prop: any, key: any) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}


