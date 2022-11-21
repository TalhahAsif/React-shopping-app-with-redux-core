import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CardCmp from "../../MuiComponents/Card/Card";
import AppBarCmp from "../../MuiComponents/Navbar/Navbar";

const AddtoCart = () => {
  // const { cartItem } = useSelector((state) => state.AddtoCartReducer);
  const { cartItem } = useSelector((state) => state.getProductReducer);
  const state = useSelector((state) => state);
  console.log(state);

  console.log(cartItem);
  // console.log(data);
  // console.log(dataloading);
  return (
    <div>
      <AppBarCmp />
      <Grid container>
        {
          cartItem.map((product) => {
            return (
              <Grid item key={product.id}>
                <CardCmp product={product} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default AddtoCart;
