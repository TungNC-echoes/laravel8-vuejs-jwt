<template>
    <div>
        <div>
            <el-row class="header">
                <el-col :span="18" class="float-left logo">
                </el-col>
                <el-col :span="6" class="float-right">
                    <div class="display-flex header-action">
                        <div class="el-icon-message-solid notice"></div>
                        <el-dropdown>
                            <div class="el-dropdown-link">
                                <div>
                                    Function<i class="el-icon-arrow-down el-icon--right"></i>
                                </div>
                            </div>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>User Info</el-dropdown-item>
                                <el-dropdown-item><el-button @click="logout">Logout</el-button></el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>

                    </div>
                </el-col>
            </el-row>
        </div>
        <h3 class="text-center">Edit User</h3>
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Activity name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-select v-model="form.region" placeholder="please select your zone">
                    <el-option label="Zone one" value="shanghai"></el-option>
                    <el-option label="Zone two" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Activity time">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="Instant delivery">
                <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="Activity type">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="Online activities" name="type"></el-checkbox>
                    <el-checkbox label="Promotion activities" name="type"></el-checkbox>
                    <el-checkbox label="Offline activities" name="type"></el-checkbox>
                    <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources">
                <el-radio-group v-model="form.resource">
                    <el-radio label="Sponsor"></el-radio>
                    <el-radio label="Venue"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="updateUser">Create</el-button>
                <el-button @click="resetData">Reset</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { currentUser } from "../../js/helpers/auth";
    import { logout } from '../../js/helpers/auth';
    export default {
        name: "user-profile",
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                user: currentUser()
            }
        },
        created() {
        },
        methods: {
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
            resetData() {
                this.user = localStorage.getItem('user');
            }
        }
    }
</script>
<style scoped>
    .header {
        width: 100%;
        padding: 15px 30px;
        display: block;
    }
    .header-action {
    }

    .header .notice {
        padding: 12px 25px;
    }

    .header .setting {
        width: 98px;
        height: 40px;
        border-radius: 8px;
        color: #4f4f4f;
        margin-right: 10px;
        border: 1px solid #dfe0eb;
    }

    .header .print {
        width: 120px;
        height: 40px;
        border-radius: 8px;
        color: #4f4f4f;
        margin-right: 20px;
        border: 1px solid #dfe0eb;
    }
    .el-dropdown {
        width: 140px;
        height: 40px;
        border-radius: 8px;
        border: 1px solid #dfe0eb;
    }
    .el-dropdown-link {
        cursor: pointer;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .el-dropdown-link {
        padding: 10px;
    }
</style>
