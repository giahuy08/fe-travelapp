import  React from 'react';
import { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import LockClockIcon from '@mui/icons-material/LockClock';
import LockOpenIcon from '@mui/icons-material/LockOpen';


const ChangePasswordDetails = (props) => {
    const [values, setValues] = useState({
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        showoldPassword: false,
        shownewPassword: false,
    });



    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };
    const handleClickShowOldPassword = () => {
        setValues({
            ...values,
            showoldPassword: !values.showoldPassword,
        });
    };

    const handleClickShowNewPassword = () => {
        setValues({
            ...values,
            shownewPassword: !values.shownewPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <form autoComplete="off" noValidate {...props}>
            <Card>
                <CardHeader
                    subheader="Nhập mật khẩu hiện tại và mật khẩu mới bạn muốn thay đổi"
                    title="Đổi mật khẩu"
                />
                <Divider />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Mật khẩu"
                                name="oldPassword"
                                helperText="Vui lòng nhập đúng mật khẩu hiện tại"
                                onChange={handleChange}
                                type={values.showoldPassword ? 'text' : 'password'}
                                value={values.oldPassword}
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOpenIcon />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowOldPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end">
                                                {values.showoldPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField

                                fullWidth
                                label="Mật khẩu mới"
                                name="newPassword"
                                onChange={handleChange}
                                type={values.shownewPassword ? 'text' : 'password'}
                                value={values.newPassword}
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowNewPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.shownewPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Xác nhận lại mật khẩu mới"
                                name="confirmNewPassword"
                                onChange={handleChange}
                                type={values.newPassword ? 'text' : 'password'}
                                value={values.confirmNewPassword}
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockClockIcon />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowNewPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.shownewPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 2
                    }}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        style={{ backgroundColor: "#F1786a" }}
                    >
                        Đổi mật khẩu
                    </Button>
                </Box>
            </Card>
        </form>
    );
};

export default ChangePasswordDetails;