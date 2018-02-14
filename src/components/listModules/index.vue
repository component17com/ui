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
                        sortable>
                    <template slot-scope="scope" class="cell__name">
                        <div class="cell__name-name">{{scope.row.moduleName}}</div>
                        <div class="cell__name-img"><img :src="scope.row.logoHref" width="30" :alt="scope.row.moduleName"></div>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="version"
                        label="Версия"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="Статус"
                        sortable>
                </el-table-column>
                <el-table-column
                        label="Действия"
                >
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">Edit
                        </el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">Delete
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
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
                        status: 'No. 189, Grove St, Los Angeles',
                        moduleName: "Агрегатор почтовых ящиков",
                        logoHref: 'http://brandmark.io/logo-rank/random/apple.png'
                    }, {
                        version: '1.0.5 (обновлено 29.01.2018, 22:40)',
                        name: 'Tom',
                        status: 'No. 189, Grove St, Los Angeles',
                        moduleName: "TO-DO LIST",
                        logoHref: 'http://brandmark.io/logo-rank/random/apple.png'
                    }, {
                        version: '1.0.5 (обновлено 29.01.2018, 22:40)',
                        name: 'Tom',
                        status: 'No. 189, Grove St, Los Angeles',
                        moduleName: "Калькулятор",
                        logoHref: 'http://brandmark.io/logo-rank/random/apple.png'
                    }, {
                        version: '1.0.5 (обновлено 29.01.2018, 22:40)',
                        name: 'Tom',
                        status: 'No. 189, Grove St, Los Angeles',
                        moduleName: "Бухгалтерия и учет сотрудников",
                        logoHref: 'http://brandmark.io/logo-rank/random/apple.png'
                    }]
            };
        }
    };

</script>

<style scoped>

</style>