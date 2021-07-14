<template>
    <div class="login">
        <el-card>
            <h2>Login</h2>
            <el-form
                class="login-form"
                :model="model"
                :rules="rules"
                ref="form"
                @submit.native.prevent="authenticate"
            >
                <el-form-item prop="email">
                    <el-input v-model="model.email" placeholder="Email"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        v-model="model.password"
                        placeholder="Password"
                        :type="showPassword ? 'text' : 'password'"
                    >
                        <el-button slot="append" :icon="showPassword ? 'el-icon-unlock' : 'el-icon-lock'" @click="showPassword = !showPassword"></el-button>
                    </el-input>
                </el-form-item>
                <el-checkbox v-model="rememberMe" >Remember Me</el-checkbox>
                <el-form-item>
                    <el-button
                        :loading="loading"
                        class="login-button"
                        type="primary"
                        native-type="submit"
                        block
                    >Login</el-button>
                </el-form-item>
                <a class="forgot-password" href="#">Forgot password ?</a>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import { login } from '../../js/helpers/auth';
    export default {
        name: "login",
        data() {
            return {
                validCredentials: {
                    email: "tung@gmail.com",
                    password: "lightscope"
                },
                rules: {
                    email: [
                        {
                            required: true,
                            message: "Email is required",
                            trigger: "blur"
                        },
                    ],
                    password: [
                        { required: true, message: "Password is required", trigger: "blur" },
                        {
                            min: 5,
                            message: "Password length should be at least 5 characters",
                            trigger: "blur"
                        }
                    ]
                },
                model: {
                    email: "",
                    password: ""
                },
                loading: false,
                rememberMe: false,
                showPassword: false
            };
        },
        computed: {
            authError() {
                return this.$store.getters.AUTH_ERROR;
            }
        },
        methods: {
            authenticate() {
                this.$store.dispatch("LOGIN");
                login(this.$data.model)
                    .then(res => {
                        this.$store.commit("LOGIN_SUCCESS", res);
                        this.$router.push({path: '/user-profile'});
                        this.$message({
                            message: 'You are login',
                            type: 'success'
                        });

                    })
                    .catch(err => {
                        this.$store.commit("LOGIN_FAILED", {err})
                        this.$message({
                            message: 'You must fill correct email and password!',
                            type: 'error'
                        });
                    })
            },
            simulateLogin() {
                return new Promise(resolve => {
                    setTimeout(resolve, 800);
                });
            },
        }
    };
</script>

<style scoped lang="scss">
    .login {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ::v-deep .el-checkbox {
        float: left;
    }
    .login-button {
        width: 100%;
        margin-top: 40px;
    }
    .login-form {
        width: 290px;
    }
    .forgot-password {
        margin-top: 10px;
    }
    .login .el-input input {
        padding-left: 35px;
    }
    .login .el-card {
        padding-top: 0;
        padding-bottom: 30px;
    }
    h2 {
        font-family: "Open Sans";
        letter-spacing: 1px;
        font-family: Roboto, sans-serif;
        padding-bottom: 20px;
    }
    .login .el-card {
        width: 340px;
        display: flex;
        justify-content: center;
    }
</style>
