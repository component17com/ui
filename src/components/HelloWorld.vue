<template>
    <div>
        <div>
            <el-button type="default">default</el-button>
            <el-button type="default-icon" icon="el-icon-star-on">default-icon</el-button>
            <el-button type="default-flat">Flat</el-button>
            <el-button type="default-background" icon="el-icon-star-on">Background</el-button>
            <el-button type="default-red">Red</el-button>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .el-button {
           min-width: 100px;
           height: 40px;
           border-radius: 3px;
           border: solid 1px #263238;
           transition: 0.3s ease;
           font-size: 14px;
           font-weight: 500;
           font-style: normal;
           font-stretch: normal;
           letter-spacing: normal;
           text-align: center;
           color: #263238;
           text-transform: uppercase;
       }
    /*----Обычная кнопка----*/
    .el-button--default {
        min-width: 100px;
        height: 40px;
        border-radius: 3px;
        border: solid 1px #263238;
        transition: 0.3s ease;
        font-size: 14px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        text-align: center;
        color: #263238;
        &:hover {
            border-radius: 3px;
            border: solid 1px #ff5722;
            background-color: white;
            color: #ff5722;
        }
        &:focus {
            border: solid 1px #ff8964;
            color: #ff8964;
            background-color: white;
        }
        &:disabled {
            background-color: #f9f9f9;
            border: solid 1px #9b9b9b;
            color: #9b9b9b;
        }
    }
    /*----Обычная кнопка с иконкой----*/
    .el-button--default-icon {
        &:hover {
            border-radius: 3px;
            border: solid 1px #ff5722;
            background-color: white;
            color: #ff5722;
        }
        &:focus {
            border: solid 1px #ff8964;
            color: #ff8964;
            background-color: white;
        }
        &:disabled {
            background-color: #f9f9f9;
            border: solid 1px #9b9b9b;
            color: #9b9b9b;
        }
    }
    /*-----Кнопка без бордера----*/
    .el-button--default-flat{
        border: none;
        text-align: left;
        padding: 0;
        &:hover {
            border-radius: 3px;
            border: none;
            background-color: white;
            color: #ff5722;
        }
        &:focus {
            border: none;
            color: #ff8964;
            background-color: white;
        }
        &:disabled {
            background-color: transparent;
            border: none;
            color: #9b9b9b;
        }
    }
    /*-----Кнопка с бекграундом-----*/
    .el-button--default-background{
        background-color: #263238;
        color: #ffffff;
        &:hover{
            background-color: #465055;
            color: #ffffff;
        }
        &:focus{
            background-color: #676f74;
            color: #ffffff;
        }
        &:disabled {
            background-color: #cccccc;
            color: #ffffff;
        }
    }
    /*----Красная кнопка----*/
    .el-button--default-red{
        background-color: #ff5722;
        border: none;
        color: #ffffff;
        &:hover{
            background-color: #ff7042;
            color: #ffffff;
        }
        &:focus{
            background-color: #ff8964;
            color: #ffffff;
        }
        &:disabled{
            background-color: #cccccc;
            color: #ffffff;
        }
    }
</style>
