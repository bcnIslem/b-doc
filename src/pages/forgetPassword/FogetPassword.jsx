//hooks
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

//material-iu components
import {
  Typography,
  Button,
  TextField,
  Paper,
  Container,
  Grid,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
} from "@material-ui/core";

// icons
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

//actions
import { forgetPassword } from "../../actions/auth";

// images
import BG from "../../assets/reset.jpg";

//styles
import useStyles from "./styles";

// notyifications
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    securityQuestion: "",
    answerSecurityQuestion: "",
    password: "",
    confirmPassword: "",
    showSecurityQuestion: false,
    showAnswerSecurityQuestion: false,
    showPassword: false,
    showConfirmPassword: false,
  });

  const classes = useStyles();

  const notifyConfirmPassword = () => {
    toast.warn(`check your new password`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  // password
  const handleClickShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  // confirm password
  const handleClickShowConfirmPassword = () => {
    setFormData({
      ...formData,
      showConfirmPassword: !formData.showConfirmPassword,
    });
  };

  // security question
  const handleClickShowSecurityQuestion = () => {
    setFormData({
      ...formData,
      showSecurityQuestion: !formData.showSecurityQuestion,
    });
  };

  // answer securit question
  const handleClickShowAnswerSecurityQuestion = () => {
    setFormData({
      ...formData,
      showAnswerSecurityQuestion: !formData.showAnswerSecurityQuestion,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      notifyConfirmPassword();
      return null;
    }

    dispatch(forgetPassword(formData, navigate));
  };

  const styles = {
    bg: {
      backgroundImage: `url(${BG})`,
      backgroundSize: "cover",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backgroundBlendMode: "darken",
    },
  };

  return (
    <div title="auth" style={styles.bg}>
      <Container className={classes.container}>
        <Grid container className={classes.grid}>
          <Grid item className={classes.gridItem} xs={12} md={8} lg={6}>
            <Paper className={classes.paper} elevation={6}>
              <form
                autoComplete="off"
                noValidate
                className={classes.form}
                onSubmit={handleSubmit}
              >
                <Typography className={classes.title} variant="h4">
                  Reset Password
                </Typography>
                <TextField
                  className={classes.textfield}
                  name="userName"
                  variant="outlined"
                  label="User Name"
                  fullWidth
                  onChange={handleChange}
                />
                <FormControl
                  className={classes.formControl}
                  fullWidth
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Security Question
                  </InputLabel>
                  <OutlinedInput
                    type={formData.showSecurityQuestion ? "text" : "password"}
                    title="securityQuestion"
                    name="securityQuestion"
                    variant="outlined"
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowSecurityQuestion}
                          edge="end"
                        >
                          {formData.showSecurityQuestion ? (
                            <MdVisibilityOff />
                          ) : (
                            <MdVisibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Security Question"
                  />
                </FormControl>

                <FormControl
                  className={classes.formControl}
                  fullWidth
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Answer to Security Question
                  </InputLabel>
                  <OutlinedInput
                    type={
                      formData.showAnswerSecurityQuestion ? "text" : "password"
                    }
                    title="answerSecurityQuestion"
                    name="answerSecurityQuestion"
                    variant="outlined"
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowAnswerSecurityQuestion}
                          edge="end"
                        >
                          {formData.showAnswerSecurityQuestion ? (
                            <MdVisibilityOff />
                          ) : (
                            <MdVisibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Answer to Security Question"
                  />
                </FormControl>

                <FormControl
                  className={classes.formControl}
                  fullWidth
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    type={formData.showPassword ? "text" : "password"}
                    title="password"
                    name="password"
                    variant="outlined"
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {formData.showPassword ? (
                            <MdVisibilityOff />
                          ) : (
                            <MdVisibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>

                <FormControl
                  className={classes.formControl}
                  fullWidth
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    type={formData.showConfirmPassword ? "text" : "password"}
                    title="confirmPassword"
                    name="confirmPassword"
                    variant="outlined"
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          edge="end"
                        >
                          {formData.showConfirmPassword ? (
                            <MdVisibilityOff />
                          ) : (
                            <MdVisibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Confirm Password"
                  />
                </FormControl>
                <Button
                  className={classes.buttonSubmit}
                  variant="contained"
                  size="large"
                  type="submit"
                  fullWidth
                >
                  Reset Password
                </Button>
                <Typography
                  style={{ textDecoration: "none" }}
                  component={Link}
                  to="/login"
                  variant="body2"
                >
                  Back
                </Typography>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Auth;
