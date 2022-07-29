// mui components
import { Stack, Skeleton } from "@mui/material";

// styles
import useStyles from "./styles";
const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Stack spacing={1}>
        <Skeleton variant="text" />
        <Skeleton variant="rectangular" width={210} height={80} />
      </Stack>
    </div>
  );
};

export default Loading;
