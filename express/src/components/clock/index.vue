<template>
    <div class="clock">
        <div class="wrapper">
            <div class="date">
                {{current.getFullYear()}}-{{current.getMonth()+1}}-{{nowDay}}
            </div>
            <div class="time">
                <span class="hour">{{nowHours}}:</span>
                <span class="minute">{{nowMinute}}</span>
                <span class="second">{{nowSeconds}}</span>
            </div>
            <div class="week"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'clock',
    data() {
        return {
            current: new Date(),
            year: '',
            month: '',
            days: '',
            hour: '',
            minute: '',
            second: '',
        }
    },
    computed: {
        nowSeconds() {
            return this.current.getSeconds().toString().length < 2 ? `0${this.current.getSeconds()}` : this.current.getSeconds(); 
        },
        nowMinute() {
           return this.current.getMinutes().toString().length < 2 ? `0${this.current.getMinutes()}` : this.current.getMinutes(); 
        },
        nowHours() {
            return this.current.getHours().toString().length < 2 ? `0${this.current.getHours()}` : this.current.getHours();
        },
        nowDay() {
            return this.current.getDate().toString().length < 2 ? `0${this.current.getDate()}` : this.current.getDate();
        }
    },
    methods: {
        updateTime() {
            setInterval(() => {
                this.current = new Date();
            })
        }
    },
    created() {
        this.updateTime();
    },
}
</script>

<style lang="less">
    .clock{
        color: #fff;
        height: 100px;
        background-color: #409EFF;
        overflow: hidden;
        box-sizing: border-box;
        background-color: #409EFF ;
        .date{
            text-align: left;
            padding-left: 10px;
            box-sizing: border-box;
            margin-top: 8px;
        }
        .hour,.minute{
            font-size: 32px;
        }
        .second{
            margin-left: 6px;
        }
    }
</style>