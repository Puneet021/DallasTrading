import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IProductCardProps, IProductCardStates } from "./productCard.constants";

class ProducCard extends React.Component<
  IProductCardProps,
  IProductCardStates
> {
  render(): React.ReactNode {
    const {
      data: { title, info, image },
    } = this.props;
    return (
      <CardActionArea
        sx={{
          width: "25em",
          height: "35em",
          boxSizing: "border-box",
          boxShadow: "0px 0px 23px rgba(0, 0, 0, 0.13)",
          marginTop: "4rem",
        }}
      >
        <Card
          sx={{
            width: "100%",
            height: "100%",
            padding: "1em",
            boxSizing: "border-box",
          }}
        >
          <CardMedia
            component="img"
            image={image}
            sx={{
              height: "14rem",
              objectFit: "scale-down",
              boxSizing: "border-box",
              transform: "scale(0.9)",
            }}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
              color={"#003C75"}
              sx={{ fontWeight: 600, marginBottom: "1em" }}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="#AEA9BA">
              {info}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    );
  }
}

export default ProducCard;
