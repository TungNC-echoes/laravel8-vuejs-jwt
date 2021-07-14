<template>
    <el-container class="container">
        <HeaderComponent></HeaderComponent>
        <el-main class="main">
            <div class="account display-flex">
                <el-button type="primary" icon="el-icon-user-solid">Account</el-button>
                <div @click="$router.push({path: '/information'})" class="information el-icon-warning-outline">Information</div>
            </div>
            <div class="avatar-update display-flex">
                <img src="images/avatar.png" alt="" class="avatar">
                <div class="user-name">
                    <h3>TungNC</h3>
                    <el-button type="primary">Update</el-button>
                    <el-button>Remove</el-button>
                </div>
            </div>
            <el-form :model="dataUser" ref="dataUser" label-width="120px" class="demo-dynamic">
                <el-row>
                    <el-col :span="8">
                        <el-form-item prop="user_name" label="Username" :rules="[{ required: true, message: 'Please input user name', trigger: 'blur' }]">
                            <el-input v-model="dataUser.user_name" placeholder="Username"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="name" label="Name" :rules="[{ required: true, message: 'Please input name', trigger: 'blur' }]">
                            <el-input v-model="dataUser.name" placeholder="Name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="email" label="Email">
                            <el-input v-model="dataUser.email" placeholder="Email" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item prop="status" label="Status">
                            <el-select v-model="dataUser.status" placeholder="Select">
                                <el-option
                                    v-for="item in states"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="status" label="Status">
                            <el-select v-model="dataUser.role" placeholder="Select">
                                <el-option
                                    v-for="item in roles"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="company" label="Company">
                            <el-input v-model="dataUser.company" placeholder="Company"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('dataUser')">Save Changes</el-button>
                    <el-button @click="resetForm()">Reset</el-button>
                </el-form-item>
            </el-form>
        </el-main>

    </el-container>
</template>

<script>
    import { currentUser } from "../../js/helpers/auth";
    import { logout } from '../../js/helpers/auth';
    import HeaderComponent from "./HeaderComponent";
    export default {
        name: "user-profile",
        components: {HeaderComponent},
        data() {
            return {
                originDataUser: {
                    user_name: 'TungNC',
                    name: 'Tung',
                    email: 'bkaprodx@gmail.com',
                    status: '1',
                    role:'1',
                    company: 'Allied Tech Base'
                },
                dataUser: null,
                user: currentUser(),
                states: [{
                    value: '1',
                    label: 'Pending'
                }, {
                    value: '2',
                    label: 'Active'
                }, {
                    value: '3',
                    label: 'Inactive'
                }],
                roles: [{
                    value: '1',
                    label: 'Admin'
                }, {
                    value: '2',
                    label: 'Author'
                }, {
                    value: '3',
                    label: 'Editor'
                }, {
                    value: '4',
                    label: 'Maintainer'
                }, {
                    value: '5',
                    label: 'Subscriber'
                }]
            }
        },
        created() {
            this.dataUser = JSON.parse(JSON.stringify(this.originDataUser))
        },
        methods: {
            submitForm(dataUser) {
                this.$refs[dataUser].validate((valid) => {
                    if (valid) {
                        this.$message({
                            message: 'Submit Success!',
                            type: 'success'
                        });
                    } else {
                        this.$message({
                            message: 'Something went wrong!',
                            type: 'error'
                        });
                        return false;
                    }
                });
            },
            updateUser() {
                this.axios
                    .patch(`http://localhost:8000/api/auth/user-update/${this.user.id}`, this.user)
                    .then((res) => {
                        this.$message({
                            message: 'Congrats, this is a success message.',
                            type: 'success'
                        });
                    });
            },
            logout() {
                logout();
            },
            resetForm() {
                this.dataUser = JSON.parse(JSON.stringify(this.originDataUser))
            },
        }
    }
</script>
<style scoped>
    .display-flex {
        display: flex;
    }
    .information {
        padding: 13px;
        cursor: pointer;
    }
    .account {
        padding: 20px;
    }
    .avatar {
        width: 5vw;
        height: 5vw;
        margin: 20px
    }
    .user-name {
        padding: 20px;
    }
    .main {
        margin: 30px;
        margin-top: 50px;
        background: #ffffff;
        border-radius: 10px;
    }
    .container {
        display: contents !important;
    }
</style>
