import { useRouter } from 'next/router';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Avatar, Box, Button, Checkbox, createTheme, CssBaseline,
  FormControlLabel, Grid, Link, Paper, TextField, ThemeProvider, Typography
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import React from 'react';
import * as Yup from 'yup';
import lodash from 'lodash';
import bgImage from 'theme/img/bg7.jpg';
import { userService, alertService } from 'services';

interface UserInfo {
  email: string;
  password: string;
}

const theme = createTheme();
export default function Login() {
  const router = useRouter();
  if (!lodash.isEmpty(userService.userValue)) {
    router.push('/admin/dashboard');
  }
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(Yup.object().shape({
      email: Yup.string()
        .required('邮箱必填')
        .email('邮箱格式不正确'),
      password: Yup.string()
        .required('请填写 6~40 个字符的密码')
        .min(6, '密码至少 6 个字符')
        .max(40, '密码不能超 40 个字符')
    }))
  });
  const { errors } = formState;
  function formSubmit(user: UserInfo) {
    return userService.login(user.email, user.password)
      .then(() => {
        const returnUrl: string = router.query.returnUrl as string || '/';
        router.push(returnUrl);
      })
      .catch(alertService.error);
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${bgImage.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <AccountCircle />
            </Avatar>
            <Typography component="h1" variant="h5">登录 XDESK</Typography>
            <Box component="form" onSubmit={handleSubmit(formSubmit as SubmitHandler<FieldValues>)} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="邮箱"
                autoComplete="email"
                autoFocus
                {...register('email')}
                error={errors.email ? true : false}
              />
              <Typography variant="inherit" color="red">
                {errors.email?.message}
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                label="密码"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register('password')}
                error={errors.password ? true : false}
              />
              <Typography variant="inherit" color="red">
                {errors.password?.message}
              </Typography>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="记住密码"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={formState.isSubmitting}
              >
                {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                登录
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    忘记密码?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/account/signup" variant="body2">
                    注册
                  </Link>
                </Grid>
              </Grid>
              <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
                {'Copyright © '}
                <Link color="inherit" href="https://www.xsky.com">XSKY</Link>
                {' '}
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}