import { AccountCircle } from "@mui/icons-material";
import { Avatar, Box, Button, Container, createTheme, CssBaseline, Grid, Link, TextField, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { alertService, userService } from "services";
import { useRouter } from "next/router";

interface UserInfo {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const theme = createTheme();
export default function SignUp() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(Yup.object().shape({
      username: Yup.string()
        .required('请填写 4~20 个字符的用户名')
        .min(4, '用户名至少 4 个字符')
        .max(20, '用户名最多 20 个字符'),
      email: Yup.string()
        .required('邮箱必填')
        .email('邮箱格式不正确'),
      password: Yup.string()
        .required('请填写 6~40 个字符的密码')
        .min(6, '密码至少 6 个字符')
        .max(40, '密码不能超 40 个字符'),
      confirmPassword: Yup.string()
        .required('请填写确认密码')
        .oneOf([Yup.ref('password'), null], '两次密码输入不一致'),
    }))
  });
  const { errors } = formState;

  function formSubmit(user: UserInfo) {
    return userService.signup(user)
      .then(() => {
        const returnUrl: string = router.query.returnUrl as string || '/';
        router.push(returnUrl);
      })
      .catch(alertService.error);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccountCircle />
          </Avatar>
          <Typography component="h1" variant="h5">
            注册用户
          </Typography>
          <Box component="form" onSubmit={handleSubmit(formSubmit as SubmitHandler<FieldValues>)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="用户名"
                  autoComplete="username"
                  {...register('username')}
                  error={errors.username ? true : false}
                />
                <Typography variant="inherit" color="red">
                  {errors.username?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="邮箱"
                  autoComplete="email"
                  {...register('email')}
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color="red">
                  {errors.email?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="密码"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register('password')}
                  error={errors.password ? true : false}
                />
                <Typography variant="inherit" color="red">
                  {errors.password?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="确认密码"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-confirmPassword"
                  {...register('confirmPassword')}
                  error={errors.confirmPassword ? true : false}
                />
                <Typography variant="inherit" color="red">
                  {errors.confirmPassword?.message}
                </Typography>
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              注册
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  已注册? 登录
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
          {'Copyright © '}
          <Link color="inherit" href="https://www.xsky.com">XSKY</Link>
          {' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </ThemeProvider>
  );
}