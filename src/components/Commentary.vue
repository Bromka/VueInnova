<template>
    <div class="root">
        <div class="comment__header">
            <span class="points">{{comment.Data.points}}</span>
            <span class="arrows">
                <i class="fa fa-caret-up"></i>
                <i class="fa fa-caret-down"></i>
            </span>
            <span class="author">{{comment.Data.autor}}</span>
            <span class="avatar"></span>

        </div>
        <div class="comment__body_wrap ">


            <div class="comment__content">
                {{comment.Data.text}}
            </div>


        </div>
    <div class="comment__footer">
        <span @click="saySomething">ответить</span>
    </div>
    </div>


</template>
<script>
    export default {
        name: 'Commentary',
        props: {
            comment: Object
        },
        methods:{
            saySomething(){
                alert('Не реализованно')
            }
        }

    }
</script>
<style scoped>

.comment__body_wrap {
    border: 1px solid var(--color--border);
    border-radius: 5px;
    padding: 20px;
}

    .comment__footer > span{
        color: #b5afaf;
    }
    .comment__header > span{
        margin-right: 20px;
    }
    .root{
        padding: 20px;
    }
    .arrows > i{
        color: #b5afaf;
    }
</style>