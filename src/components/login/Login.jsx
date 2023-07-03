import { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./Login.scss";
import axios from "axios";
import Cookies from "js-cookie";
// const CssTextField = styled(TextField)({
//   border
// })
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const borderWhite = useState();
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "password") {
            setIsLoggedIn(true);
        } else {
            alert("Tên đăng nhập hoặc mật khẩu không chính xác");
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("https://reqres.in/api/login", {
                username: username,
                password: password,
            });
            console.log(response.data);
            const { token } = response.data;
            Cookies.set("qlsv_test_cookie", token);
            console.log("login successfull", token);
        } catch (error) {
            console.log(error);
        }
    };

    if (isLoggedIn) {
        navigate("/class1");
    }

    return (
        <Grid
            container
            className="login-container"
            flexDirection={"column"}
            alignItems={"center"}
            height={"100%"}
            position={"relative"}
        >
            <Grid
                item
                className="login"
                position={"absolute"}
                left={"50%"}
                top={"50%"}
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
                padding={"20px"}
                borderRadius={"4px"}
            >
                <h1>Trang đăng nhập</h1>
                <form>
                    <TextField
                        label="Tên đăng nhập"
                        variant="outlined"
                        value={username}
                        onChange={handleUsernameChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Mật khẩu"
                        variant="outlined"
                        value={password}
                        onChange={handlePasswordChange}
                        fullWidth
                        margin="normal"
                        type="password"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={handleLogin}
                    >
                        Đăng nhập
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default Login;
