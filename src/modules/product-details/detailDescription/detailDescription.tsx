import { Component, Fragment, ReactNode } from "react";
import styles from "./detailDescription.module.scss";
import {
  IDetailDescriptionProps,
  IDetailDescriptionStates,
} from "./detailDescription.constants";
import { connect } from "react-redux";
import { IStore } from "../../../utils/models/store.model";
import { getProductDetailDescription } from "../../../store/product-detail/productDetailActions";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

class DetailDescription extends Component<
  IDetailDescriptionProps,
  IDetailDescriptionStates
> {
  render(): ReactNode {
    const { detailDescriptionData } = this.props;
    return (
      <div className={styles.detailDescriptionContainer}>
        {detailDescriptionData?.map((data, jindex: number) => (
          <Fragment key={jindex}>
            <h2 className={styles.title}>{data.title}</h2>
            <TableContainer className={styles.productDetailTable}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className={styles.thead}>
                  <TableRow>
                    {Object.values(
                      data?.table?.length ? data?.table[0] : {}
                    )?.map((col: any, index: number) => (
                      <TableCell
                        key={index}
                        className={styles.tcell}
                        align="center"
                      >
                        {col}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody className={styles.tbody}>
                  {data?.table?.length
                    ? data?.table?.slice(1).map((row: any, i: number) => (
                        <TableRow
                          className={styles.trowd}
                          key={i}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          {Object.values(row)?.map((val: any, ind: number) => {
                            if (typeof val === "object") {
                              return Object.values(val)?.map(
                                (value: any, indi: number) => (
                                  <TableCell
                                    key={indi}
                                    className={styles.tcelld}
                                    align="center"
                                  >
                                    {value}
                                  </TableCell>
                                )
                              );
                            }
                            return (
                              <TableCell
                                key={ind}
                                className={styles.tcelld}
                                align="center"
                              >
                                {val}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      ))
                    : null}
                </TableBody>
              </Table>
            </TableContainer>
            <div className={styles.dataAfterTable}>
              {data.DataAfterTable.map((d, k) => (
                <p key={k} dangerouslySetInnerHTML={{ __html: d }}></p>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    );
  }
}

export default connect((state: IStore) => ({
  detailDescriptionData: getProductDetailDescription(state),
}))(DetailDescription);
