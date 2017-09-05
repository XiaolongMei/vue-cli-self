<template>
    <div class="main">
        <p v-text="msg"></p>
    </div>
</template>
<style lang="less" type="text/less" scoped>
    .main {
        font-size: 24px;
    }

</style>
<script>

    export default{
        created(){
            document.title = "首页";
        },
        mounted(){
            /*
            let _this = this;
            this.$axios.post("system/queryCityInfo", {
                "sessionContext": {
                    "channel": "1",
                    "serviceCode": "1",
                    "localDateTime": "1",
                    "userId": "1",
                    "externalReferenceNo": "1",
                    "userReferenceNo": "22",
                    "stepCode": "1",
                    "accessSource": "3",
                    "accessSourceType": "1",
                    "isDomestic": true,
                    "version": "1.0",
                    "accessToken": "TOKEN-A5539881EE92456593EF01904E50F41C"
                },
                "cityName": "深圳"
            }).then(function (response) {
                _this.msg = `定位城市: ${response.data.cityName} 定位城市三字码:${response.data.cityCode}`
            }).then(function (error) {
                console.log(error);
            });
            */
        },
        data(){
            return {
                msg: ""
            }
        },
        components: {
        },
        computed: {
        },
        methods: {
        }
    }



</script>
