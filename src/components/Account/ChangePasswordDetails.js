import React from 'react';
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
import { useHistory } from "react-router";
import callApi from '../../api/apiService';


const ChangePasswordDetails = (props) => {
    const [values, setValues] = useState({
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        showoldPassword: false,
        shownewPassword: false,
    });
    const [user, setUser] = useState({
        activeStep: 0,
        labelWidth: 0,
        error: false, //<---- here
        errorMessage: {} //<-----here
    })



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

    const handleNext = (e) => {
        const data = new FormData(e.currentTarget);
        let isError = false;
        if (data.get("oldPassword") === '') {
            isError = true;
            setUser(prev => ({
                ...prev,
                error: true,
                errorMessage: { ...prev.errorMessage, oldPassword: "Nhập mật khẩu hiện tại của bạn" }
            }));
        } else {
            setUser(prev => ({
                ...prev,
                error: true,
                errorMessage: { ...prev.errorMessage, oldPassword: "" }
            }));
        }

        if (data.get('newPassword') === '') {
            isError = true;
            setUser(prev => ({
                ...prev,
                error: true,
                errorMessage: { ...prev.errorMessage, newPassword: "Nhập mật khẩu mới" }
            }));
        } else {
            setUser(prev => ({
                ...prev,
                error: true,
                errorMessage: { ...prev.errorMessage, newPassword: "" }
            }));
        }
        if (data.get('confirmNewPassword') === '') {
            isError = true;
            setUser(prev => ({
                ...prev,
                error: true,
                errorMessage: { ...prev.errorMessage, confirmNewPassword: "Xác nhận lại mật khẩu" }
            }));
        } else if (data.get('confirmNewPassword') !== data.get('newPassword')) {
            isError = true;
            setUser(prev => ({
                ...prev,
                error: true,
                errorMessage: { ...prev.errorMessage, confirmpassword: "Xác nhận lại mật khẩu không đúng" }
            }));
        } else {
            setUser(prev => ({
                ...prev,
                error: true,
                errorMessage: { ...prev.errorMessage, confirmpassword: "" }
            }));
        }

        if (!isError) {
            //add else if for validating other fields (if any)
            setUser(prevState => ({
                activeStep: prevState.activeStep + 1,
                error: false,
                errorMessage: {}
            }));
        }
    }
    const history = useHistory()
    const handleSubmit = (e) => {

        const data = new FormData(e.currentTarget);
        handleNext(e);
        e.preventDefault();
        console.log(data.get('oldPassword'));
        if (data.get('newPassword') === data.get('confirmNewPassword')) {
            let user = {
                oldPassword: data.get('oldPassword'),
                newPassword: data.get('newPassword'),
            }
            console.log(user);
            callApi(`user/changePassword`, "POST", user)
                .then((res) => {
                    console.log(res);
                    console.log(res.data.data.token)
                    localStorage.getItem("accessToken", res.data.data.token)
                    history.push("/");

                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    return (
        <>
            <form autoComplete="off" noValidate {...props} style={{ marginTop: '60px' }} onSubmit={handleSubmit}>
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
                                    error={!!user.errorMessage.oldPassword}
                                    helperText={
                                        user.errorMessage.oldPassword &&
                                        user.errorMessage.oldPassword
                                    }
                                    fullWidth
                                    label="Mật khẩu"
                                    name="oldPassword"
                                    id="oldPassword"
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
                                    error={!!user.errorMessage.newPassword}
                                    helperText={
                                        user.errorMessage.newPassword &&
                                        user.errorMessage.newPassword
                                    }
                                    fullWidth
                                    label="Mật khẩu mới"
                                    name="newPassword"
                                    id="newPassword"
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
                                    error={!!user.errorMessage.confirmNewPassword}
                                    helperText={
                                        user.errorMessage.confirmNewPassword &&
                                        user.errorMessage.confirmNewPassword
                                    }
                                    fullWidth
                                    label="Xác nhận lại mật khẩu mới"
                                    name="confirmNewPassword"
                                    id="confirmNewPassword"
                                    onChange={handleChange}
                                    type={values.shownewPassword ? 'text' : 'password'}
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
        </>
    );
};

export default ChangePasswordDetails;