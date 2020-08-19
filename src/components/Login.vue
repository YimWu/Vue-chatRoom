<template>
    <div class="login">
        <div class="wripper">
            <div class="title">ChatRoom V1.0</div>
            <div class="inner">
                <Icon @click="left" class="left" type="md-arrow-round-back" />
                <Avatar class="avatar" shape="square" size="large" :src="myAvatar"/>
                <Icon @click="right" class="right" type="md-arrow-round-forward" />
                <Input @on-enter="login" v-model="name" class="input" size="large" placeholder="Input Your Name" />
                <div class="tip" v-show="visible">
                    <div class="tip-inner">不能发送空白信息</div>
                    <div class="tip-inner2"></div>
                </div>
                <Button @click="login" class="button" type="success">Login</Button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Login',
    data() {
        return {
            name: '',
            avatar: ['avatar1', 'avatar2', 'avatar3', 'avatar4', 'avatar5', 
                     'avatar6', 'avatar7', 'avatar8', 'avatar9', 'avatar10', 
                     'avatar11', 'avatar12', 'avatar13', 'avatar14', 'avatar15'],
            avatarNum: 0,
            visible: false
        }
    },
    computed: {
        myAvatar(){
            return require(`@/assets/images/${this.avatar[this.avatarNum]}.jpg`)
        } 
    },
    methods: {
        login(){
            if(!this.name){
                this.visible = true
                setTimeout(() => {
                    this.visible = false
                }, 2000);
                return
            }
            this.$router.push({
                path: '/chat',
                name: 'Chat',
                params: {
                    name: this.name,
                    avatar: this.avatar[this.avatarNum]
                }
            })
        },
        left(){
            if(!this.avatarNum){
                this.avatarNum = 14
            }else{
                this.avatarNum = this.avatarNum - 1
            }
            console.log(this.avatarNum)
        },
        right(){
            if(this.avatarNum === 14){
                this.avatarNum = 0
            }else{
                this.avatarNum = this.avatarNum + 1
            }
            console.log(this.avatarNum)
        }
    }
}
</script>

<style lang="stylus">
    .wripper
        // 解决点击left/right切换图片时点击太频繁而图片出现选择状态
        // 背景变为蓝色
        -webkit-user-select:none; 
        -moz-user-select:none; 
        -ms-user-select:none; 
        user-select:none;
        width 350px
        height 500px
        background #f5f5f5
        border-radius 4px
        box-shadow 0 0 10px #999
        position absolute
        top 50%
        left 50%
        margin -250px 0 0 -175px
        .title
            font-size 20px
            color #666
            text-align left
            padding 18px
        .inner
            padding 50px
            .left
                display inline-block
                font-size 28px
                margin-right 35px
            .avatar
                display inline-block
                width 110px
                height 110px
            .right 
                display inline-block
                font-size 28px
                margin-left 35px
            .input
                margin-top 60px
            .tip
                position absolute
                top 235px
                right 50px
                font-size 12px
                width 150px
                height 30px
                .tip-inner
                    display block
                    background #ddd
                    border-radius 3px
                    padding 10px 15px
                .tip-inner2
                    display block
                    width 0px
                    height 0px
                    border-top 10px solid #ddd
                    border-bottom 10px solid transparent
                    border-right 10px solid transparent
                    border-left 10px solid transparent
                    margin-left 90px
                    border-radius 2px
            .button
                font-size 16px
                height 40px
                width 100%
                margin-top 20px
</style>