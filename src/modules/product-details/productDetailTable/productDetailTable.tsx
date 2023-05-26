import { Component, ReactNode } from "react";
import styles from "./productDetailTable.module.scss";
import {
  IProductDetailTableProps,
  IProductDetailTableStates,
  columns1,
  columns2,
} from "./productDetailTable.constants";
import { connect } from "react-redux";
import { IStore } from "../../../utils/models/store.model";
import { getProductDetailTableData } from "../../../store/product-detail/productDetailActions";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

class ProductDetailTable extends Component<
  IProductDetailTableProps,
  IProductDetailTableStates
> {
  render(): ReactNode {
    return (
      <TableContainer className={styles.productDetailTable}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className={styles.thead}>
            <TableRow className={styles.trow}>
              {columns1.map((col) => (
                <TableCell
                  className={styles.tcell}
                  align="center"
                  key={col.id}
                  colSpan={col.colSpan}
                >
                  {col.name}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className={styles.trow}>
              {columns2.map((col) => (
                <TableCell
                  className={styles.tcell}
                  align="center"
                  key={col.id}
                  colSpan={col.colSpan}
                >
                  {col.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={styles.tbody}>
            {this.props.productDetailTableData.map((row, i) => (
              <TableRow
                className={styles.trowd}
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className={styles.tcelld} align="center">
                  {row.size}
                </TableCell>
                <TableCell className={styles.tcelld} align="center">
                  {row.threadSizeC.ThreadSizeC1}
                </TableCell>
                <TableCell className={styles.tcelld} align="center">
                  {row.threadSizeC.threadSizeC2}
                </TableCell>
                <TableCell className={styles.tcelld} align="center">
                  {row.minimumLengthOfThreadD}
                </TableCell>
                <TableCell className={styles.tcelld} align="center">
                  {row.cableRange.maxA}
                </TableCell>
                <TableCell className={styles.tcelld} align="center">
                  {row.cableRange.maxB}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default connect((state: IStore) => ({
  productDetailTableData: getProductDetailTableData(state),
}))(ProductDetailTable);
