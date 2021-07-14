<template>
    <el-container class="container">
        <HeaderComponent></HeaderComponent>
        <el-main class="main">
            <div class="account display-flex">
                <div @click="$router.push({path: '/user-profile'})" class="information el-icon-user-solid">Account</div>
                <el-button type="primary" icon="el-icon-warning-outline">Information</el-button>
            </div>
            <el-form :model="dataUser" ref="dataUser" label-width="120px" class="demo-dynamic">
                <div class="avatar-update display-flex">
                    <div class="user-name">
                        <h3 class="el-icon-user-solid">Personal Information</h3>
                    </div>
                </div>
                <el-row>
                    <el-col :span="8">
                        <el-form-item prop="birthday" label="Birthday">
                            <el-date-picker
                                v-model="dataUser.birthday"
                                type="date"
                                placeholder="Pick a day">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="mobile" label="Mobile">
                            <el-input v-model="dataUser.mobile" placeholder="Mobile"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="website" label="Website">
                            <el-input v-model="dataUser.website" placeholder="Website"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item prop="language" label="Language">
                            <el-select v-model="dataUser.language" multiple placeholder="Select">
                                <el-option
                                    v-for="item in languages"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="gender" label="Gender">
                            <el-radio v-model="dataUser.gender" label="1">Male</el-radio>
                            <el-radio v-model="dataUser.gender" label="2">Female</el-radio>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="contact" label="Company">
                            <el-checkbox v-model="dataUser.contact.email">Email</el-checkbox>
                            <el-checkbox v-model="dataUser.contact.message">Message</el-checkbox>
                            <el-checkbox v-model="dataUser.contact.phone">Phone</el-checkbox>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="avatar-update display-flex">
                    <div class="user-name">
                        <h3 class="el-icon-location-information">Address</h3>
                    </div>
                </div>
                <el-row>
                    <el-col :span="8">
                        <el-form-item prop="address1" label="Address Line 1">
                            <el-input v-model="dataUser.address1" placeholder="Ha Noi"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="address2" label="Address Line2">
                            <el-input v-model="dataUser.address2" placeholder="Ung Hoa"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="postcode" label="Postcode">
                            <el-input v-model="dataUser.postcode" placeholder="123456"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item prop="city" label="City">
                            <el-input v-model="dataUser.city" placeholder="Ha Noi"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="state" label="State">
                            <el-input v-model="dataUser.state" placeholder="Ung Hoa"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="country" label="Country">
                            <el-input v-model="dataUser.country" placeholder="Viet Nam"></el-input>
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
    import { logout } from '../../js/helpers/auth';
    import HeaderComponent from "./HeaderComponent";
    export default {
        name: "user-profile",
        components: {HeaderComponent},
        data() {
            return {
                originDataUser: {
                    birthday: null,
                    mobile: null,
                    website: 'https://facebook.com/Tungbkdepzai',
                    language: ['1'],
                    gender: '1',
                    contact: {
                        email: true,
                        message: true,
                        phone: false
                    },
                    address1: 'Ha Noi',
                    address2: 'Ung Hoa',
                    postcode: '',
                    city: 'Ha Noi',
                    state: '',
                    country: '',
                },
                dataUser: null,
                languages: [{
                    value: '1',
                    label: 'English'
                }, {
                    value: '2',
                    label: 'Spanish'
                }, {
                    value: '3',
                    label: 'French'
                }, {
                    value: '4',
                    label: 'Russian'
                }, {
                    value: '5',
                    label: 'German'
                }, {
                    value: '6',
                    label: 'Arabic'
                }, {
                    value: '7',
                    label: 'Sanskrit'
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
