<template>
    <div class="listModules-wrapper">
        <div class="listModules-title">
            Список модулей
        </div>
        <!--Чекбоксы-->
        <div class="listModules__check">
            <el-checkbox-group v-model="checkList" class="listModules__check-group">
                <el-checkbox label="Публичные"></el-checkbox>
                <el-checkbox label="Приватные"></el-checkbox>
                <el-checkbox label="На модерации"></el-checkbox>
            </el-checkbox-group>
        </div>
        <!--Таблица-->
        <div class="listModules__table">
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%"
                    :default-sort="{prop: 'date', order: 'descending'}">
                <el-table-column
                        class="listModules__table-name"
                        label="Название модуля"
                        min-width="100px"
                        sortable>
                    <template slot-scope="scope">
                        <div class="cell__name">
                            <div class="cell__name-img"><img :src="scope.row.logoHref" width="30"
                                                             :alt="scope.row.moduleName"></div>
                            <a href="" class="cell__name-name"
                               :title="scope.row.moduleName">{{scope.row.moduleName}}</a>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="version"
                        label="Версия"
                        sortable>
                    <template slot-scope="scope">
                        <div class="cell__version">{{scope.row.version}}</div>
                    </template>
                </el-table-column>
                <el-table-column
                        label="Статус"
                        sortable>
                    <template slot-scope="scope">
                        <div class="cell__status">
                            <div class="cell__status-title">
                                <i :class="scope.row.status.icon"></i>{{scope.row.status.text}}
                            </div>
                        </div>
                    </template>
                </el-table-column>

                <el-table-column
                        label="Действия" align="center">
                    <template slot-scope="scope">
                        <div class="cell__buttons">

                            <el-button
                                    @click=""
                                    size="small">
                                <i class="mdi mdi-circle"></i>
                            </el-button>
                            <el-button
                                    @click=""
                                    size="small">
                                <i class="mdi mdi-bell"></i>
                            </el-button>
                            <el-button
                                    @click=""
                                    size="small">
                                <i class="mdi mdi-bell"></i>
                            </el-button>
                            <el-button
                                    @click=""
                                    size="small">
                                <i class="mdi mdi-bell"></i>
                            </el-button>

                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <div class="listModules__table-pagination">
                <div class="demonstration">Показано <span>1-15</span> из <span>1103</span> записей</div>
                <div class="seeOn">Показать по</div>
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage4"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="4000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkList: ['selected and disabled'],
                tableData: [
                    {
                        version: '1.0.5 (обновлено 29.01.2018, 22:40)',
                        name: 'Tomas',
                        status: {
                            text: 'Публичный',
                            icon: 'mdi mdi-checkbox-marked-circle'
                        },
                        moduleName: "Агрегатор почтовых ящиков",
                        logoHref: 'http://brandmark.io/logo-rank/random/apple.png'
                    }, {
                        version: '1.0.5 (обновлено 29.01.2018, 22:40)',
                        name: 'Tom',
                        status: {
                            text: 'Публичный',
                            icon: 'mdi mdi-checkbox-marked-circle'
                        },
                        moduleName: "TO-DO LIST",
                        logoHref: 'http://brandmark.io/logo-rank/random/apple.png'
                    }, {
                        version: '1.0.5 (обновлено 29.01.2018, 22:40)',
                        name: 'Tom',
                        status: {
                            text: 'Публичный',
                            icon: 'mdi mdi-checkbox-marked-circle'
                        },
                        moduleName: "Калькулятор",
                        logoHref: 'http://brandmark.io/logo-rank/random/apple.png'
                    }, {
                        version: '1.0.5 (обновлено 29.01.2018, 22:40)',
                        name: 'Tom',
                        status: {
                            text: 'Публичный',
                            icon: 'mdi mdi-checkbox-marked-circle'
                        },
                        moduleName: "Бухгалтерия и учет сотрудников",
                        logoHref: 'http://brandmark.io/logo-rank/random/apple.png'
                    }]
            };
        }
    };

</script>

<style scoped>

</style>