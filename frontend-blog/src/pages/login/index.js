import {
  Box,
  Button,
  Container,
  Grid,
  Icon,
  SvgIcon,
  TextField,
  Typography,
} from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import GoogleIcon from "@assets/google.svg";
import React from "react";
import "./index.scss";

const Login = () => {
  const handleSubmit = () => {};

  const handleChange = () => {};
  return (
    <div className="loginPage">
      <Box className="center-box">
        <Container maxWidth="sm" className="container">
          <form onSubmit={handleSubmit}>
            <Typography align="center" variant="h6">
              Đăng nhập
            </Typography>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              style={{ marginTop: "15px" }}
            >
              <Button
                startIcon={
                  <Icon>
                    <img
                      className="img-google"
                      src={GoogleIcon}
                      alt="icon google mail"
                    />
                  </Icon>
                }
                onClick={handleSubmit}
                size="large"
                color="default"
                className="btn-google"
              >
                Đăng nhập bằng Google Mail
              </Button>

              <Button
                startIcon={<Facebook />}
                onClick={handleSubmit}
                size="large"
                variant="contained"
                color="primary"
                style={{ borderRadius: "10px" }}
              >
                Đăng nhập bằng Facebook
              </Button>
            </Grid>
            <Box mt={1.5} mb={1}>
              <Typography align="center" variant="body1" fontSize="14px">
                Hoặc
              </Typography>
              <div className="horizontal"></div>
            </Box>
            <Box mt={3}>
              <TextField
                // error={Boolean(touched.email && errors.email)}
                // helperText={touched.email && errors.email}
                label="Email"
                margin="normal"
                name="email"
                // onBlur={handleBlur}
                // onChange={handleChange}
                type="email"
                // value={values.email}
                variant="outlined"
                onChange={handleChange}
                className="input"
              />
              <TextField
                // error={Boolean(touched.password && errors.password)}
                // helperText={touched.password && errors.password}
                label="Mật khẩu"
                margin="normal"
                name="password"
                // onBlur={handleBlur}
                // onChange={handleChange}
                type="password"
                // value={values.password}
                variant="outlined"
                onChange={handleChange}
                className="input"
              />
            </Box>
            <Box mt={2} alignItems="center" justifyContent="center">
              <Button
                fullWidth
                color="primary"
                // disabled={isSubmitting}
                size="large"
                type="submit"
                variant="contained"
              >
                Đăng nhập
              </Button>
            </Box>
            <Typography variant="body1" fontWeight="600">
              Quên mật khẩu?
            </Typography>
            <Box mb={1}>
              <Typography align="center" variant="body1" fontSize="14px">
                Hoặc
              </Typography>
              <div className="horizontal"></div>
            </Box>
            <Box py={2}>
              <Button
                color="primary"
                // disabled={isSubmitting}
                size="large"
                type="submit"
                variant="contained"
              >
                Là khách hàng mới của chúng tôi
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </div>
  );
};

export default Login;
