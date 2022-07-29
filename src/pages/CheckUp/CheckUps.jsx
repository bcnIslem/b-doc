// hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

// material ui components
import { Container, Grid, Typography, Paper } from "@material-ui/core";

// components
import Header from "../../components/header/Header";
import CheckUp from "../../components/checkup/CheckUp";
import Loading from "../../components/loading/Loading";

// actions
import { getAllCheckUps } from "../../actions/checkUp";

// styles
import useStyles from "./styles";

const CheckUps = () => {
  const { checkUps } = useSelector((state) => state.checkUps);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getAllCheckUps());
  }, [checkUps, dispatch]);

  const { t } = useTranslation();

  return (
    <div className={classes.main}>
      <Container className={classes.Container}>
        <Header />
        <Paper className={classes.paper} elevation={3}>
          <div className={classes.open}>
            <Grid className={classes.grid}>
              <Typography variant="h6">{t("Treatments.1")}</Typography>
            </Grid>
            <Grid className={`${classes.gridtests} ${classes.hide}`}>
              <Typography variant="h6">{t("CheckUps.2")}</Typography>
            </Grid>
          </div>
          <div className={classes.actions}>
            <Typography variant="h6">Actions</Typography>
          </div>
        </Paper>
        <Paper className={classes.table} elevation={3}>
          {!checkUps?.length ? (
            <Loading />
          ) : (
            checkUps
              ?.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1))
              .map((item) => (
                <Grid item key={item._id}>
                  <CheckUp item={item} key={item._id} />
                </Grid>
              ))
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default CheckUps;
