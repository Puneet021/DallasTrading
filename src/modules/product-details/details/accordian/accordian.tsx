import { Component, ReactNode } from "react";
import styles from "./accordian.module.scss";
import { IAccordianProps, IAccordianStates } from "./accordian.constants";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

class CustomAccordian extends Component<IAccordianProps, IAccordianStates> {
  render(): ReactNode {
    const {
      application,
      construction,
      technicalData,
      characteristics,
      design,
    } = this.props;
    return (
      <div>
        {application ? (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={styles.AccordionSummary}
            >
              <Typography className={styles.Typography}>Application</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.text}>{application}</Typography>
            </AccordionDetails>
          </Accordion>
        ) : null}
        {construction && Object.entries(construction).length ? (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={styles.Typography}>
                Construction
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <table className={styles.table}>
                  <tbody>
                    {Object.entries(construction).map(
                      (entry: any, i: number) => (
                        <tr key={i} className={styles.trow}>
                          <td className={styles.th}>{entry[0]}</td>
                          <td
                            className={styles.td}
                            dangerouslySetInnerHTML={{ __html: entry[1] }}
                          ></td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ) : null}
        {technicalData && Object.entries(technicalData).length ? (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={styles.Typography}>
                Technical Data
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <table className={styles.table}>
                  <tbody>
                    {Object.entries(technicalData).map(
                      (entry: any, i: number) => (
                        <tr key={i} className={styles.trow}>
                          <td className={styles.th}>{entry[0]}</td>
                          <td
                            className={styles.td}
                            dangerouslySetInnerHTML={{ __html: entry[1] }}
                          ></td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ) : null}
        {characteristics && Object.entries(characteristics).length ? (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={styles.Typography}>
                Characteristics
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <table className={styles.table}>
                  <tbody>
                    {Object.entries(characteristics).map(
                      (entry: any, i: number) => (
                        <tr key={i} className={styles.trow}>
                          <td className={styles.th}>{entry[0]}</td>
                          <td
                            className={styles.td}
                            dangerouslySetInnerHTML={{ __html: entry[1] }}
                          ></td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ) : null}
        {design && Object.entries(design).length ? (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={styles.Typography}>Design</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <table className={styles.table}>
                  <tbody>
                    {Object.entries(design).map((entry: any, i: number) => (
                      <tr key={i} className={styles.trow}>
                        <td className={styles.th}>{entry[0]}</td>
                        <td
                          className={styles.td}
                          dangerouslySetInnerHTML={{ __html: entry[1] }}
                        ></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ) : null}
      </div>
    );
  }
}

export default CustomAccordian;
