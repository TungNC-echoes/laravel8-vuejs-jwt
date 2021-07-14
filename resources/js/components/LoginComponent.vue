<template>
    <div class="login">
        <el-card>
            <img src="images/logo_atb_red-wht.png" alt="" class="logo">
            <h4>Welcome to Allied Tech Base!</h4>
            <div class="sign-in">Please sign-in to your account and start the adventure</div>
            <el-form
                class="login-form"
                :model="model"
                :rules="rules"
                ref="form"
                @submit.native.prevent="authenticate"
            >
                <el-form-item prop="email" label="Email">
                    <el-input v-model="model.email" placeholder="Email"></el-input>
                </el-form-item>
                <el-form-item prop="password" label="Password">
                    <el-input
                        v-model="model.password"
                        placeholder="Password"
                        :type="showPassword ? 'text' : 'password'"
                    >
                        <el-button slot="append" :icon="showPassword ? 'el-icon-unlock' : 'el-icon-lock'" @click="showPassword = !showPassword"></el-button>
                    </el-input>
                </el-form-item>
                <el-checkbox v-model="remember" @change="rememberChange">Remember Me</el-checkbox>
                <el-form-item>
                    <el-button
                        :loading="loading"
                        class="login-button"
                        type="primary"
                        native-type="submit"
                        block
                    >Login</el-button>
                </el-form-item>
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
                        { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
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
                remember: false,
                showPassword: false
            };
        },
        computed: {
            authError() {
                return this.$store.getters.AUTH_ERROR;
            },
            rememberMe() {
                return this.$store.getters.REMEMBER_ME;
            }
        },
        created() {
            this.rememberChange();
        },
        methods: {
            rememberChange() {
                this.$store.commit('REMEMBER_ME', this.remember)
            },
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
    .logo {
        width: 10vw;
    }
    .login {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .sign-in {
        padding: 15px 0;
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
