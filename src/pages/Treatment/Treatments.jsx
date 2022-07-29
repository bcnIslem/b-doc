// hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

// material ui components
import { Container, Grid, Typography, Paper } from "@material-ui/core";

// components
import Header from "../../components/header/Header";
import LeftNave from "../../components/leftNav/LeftNave";
import Treatment from "../../components/treatment/Treatment";
import Loading from "../../components/loading/Loading";

// actions
import { getAllTreatments } from "../../actions/treatment";

// styles
import useStyles from "./styles";

const Treatments = () => {
  const { treatments } = useSelector((state) => state.treatments);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getAllTreatments());
  }, [treatments, dispatch]);

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
            <Grid className={`${classes.grid} ${classes.hide}`}>
              <Typography variant="h6">{t("Treatments.2")}</Typography>
            </Grid>
            <Grid className={`${classes.gridtests} ${classes.hide}`}>
              <Typography variant="h6">{t("Treatments.3")}</Typography>
            </Grid>
          </div>
          <div className={classes.actions}>
            <Typography variant="h6">Actions</Typography>
          </div>
        </Paper>
        <Grid className={classes.table}>
          {!treatments?.length ? (
            <Loading />
          ) : (
            treatments
              ?.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1))
              .map((item) => (
                <Grid item key={item._id}>
                  <Treatment item={item} key={item._id} />
                </Grid>
              ))
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Treatments;
