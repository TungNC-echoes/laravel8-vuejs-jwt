<template>
    <el-header>
        <el-row class="header">
            <el-col :span="18" class="float-left logo">
            </el-col>
            <el-col :span="6" class="float-right">
                <div class="header-action">
                    <el-dropdown>
                        <div class="el-dropdown-link">
                            <div>
                                Function<i class="el-icon-arrow-down el-icon-user-solid"></i>
                            </div>
                        </div>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>User Info</el-dropdown-item>
                            <el-dropdown-item><a href="#" @click="logout" class="logout">Logout</a></el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                </div>
            </el-col>
        </el-row>
    </el-header>
</template>
<script>
    import { logout } from '../../js/helpers/auth';
    export default {
        name: "HeaderComponent",
        data() {
            return {

            }
        },
        methods: {
            logout() {
                logout();
            },
        }
    }
</script>
<style scoped>
    .header {
        margin: 10px;
        display: block;
        background: #ffffff;
        border-radius: 10px;
    }
    .header .float-right {
        text-align: right;
    }
    .header .float-right ::v-deep .el-dropdown-link {
        text-align: center;
    }
    .logout {
        text-decoration: none;
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
