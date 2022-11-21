import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBarCmp from "../../MuiComponents/Navbar/Navbar";
import { getProductAction } from "../../store/Actions/ProductAction";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";
import { Grid } from "@mui/material";
import CardCmp from "../../MuiComponents/Card/Card";
import { Container } from "react-bootstrap";

const Home = () => {
  const { data, dataloading, cartItem } = useSelector((state) => state.getProductReducer);
   console.log(cartItem);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductAction());
  }, []);
  return (
    <>
      <div>
        <AppBarCmp />
      </div>
      {dataloading ? (
        <h1>loading...</h1>
      ) : (
        <Container className="mt-3">
          <Grid container>
            {data.map((product) => {
              return (
                <Grid item xs={3} key={product.id}>
                  <CardCmp product={product} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Home;
