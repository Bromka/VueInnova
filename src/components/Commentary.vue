<template>
    <div class="root">
        <div class="comment__header">
            <div class="left__column">
                <span class="points">{{comment.getValue()}}</span>
                <span class="arrows">
                <span :style="`color: ${color.up}`" @click.prevent="doValue('+')" class="i">
                    <i class="fas fa-caret-up fa-lg"></i>
                </span>
                <span :style="`color: ${color.down}`" @click.prevent="doValue('-')" class="i">
                    <i class="fa fa-caret-down fa-lg"></i>
                </span>
                </span>
                <span class="author">{{comment.Data.author}}</span>
                <span class="avatar"></span>
            </div>
            <div class="right_column">
                <span class="spoiler" v-show="!comment.Spoiler" @click="switchSpoiler(true)"><i class="far fa-eye-slash"></i>спойлер</span>
            </div>

        </div>
        <div class="comment__body_wrap ">


            <div class="comment__content" v-if="!comment.Spoiler" v-html="comment.Data.text">
            </div>
            <div class="comment__content spoiler_text" v-else @click="switchSpoiler(false)">
                Убийца - дворецкий, почему 42 и другие ответы, но это не точно..Нажмите чтобы увидеть.
            </div>

            <div class="comment__content">
            </div>


        </div>
        <div class="comment__footer">
            <span @click="saySomething" class="answer">{{answer_text}}</span>
        </div>
        <div class="answer_dialog" v-if="answer_active">
            <vue-editor placeholder="Введите текст комментария" v-model="commentAnswer"></vue-editor>
            <button @click="saveContent">Сохранить ответ</button>
        </div>

    </div>


</template>
<script>
  import {VueEditor} from 'vue2-editor';
  import  {baseUsername} from '../assets/Settings'


  export default {
    name: 'Commentary',
    props: {
      comment: Object,
      treeModel: Object,
      branch: Object,
    },
    components: {
      VueEditor,
    },
    data: () => {
      return {
        color: {
          up: '#cacaca',
          down: '#cacaca',
        },
        answer_active: false,
        answer_text: 'ответить',
        commentAnswer: '',
      };
    },

    methods: {
      saySomething() {
        // alert('Не реализованно');
        this.answer_active = !this.answer_active;
        this.answer_active == true ? this.answer_text = 'закрыть' : this.answer_text = 'ответить';

      },
      saveContent: function() {
        if (this.treeModel.newCommentary) {
          this.treeModel.newCommentary({author: baseUsername, text: this.commentAnswer}, this.branch);
          this.commentAnswer = '';
          this.saySomething();
          this.$forceUpdate();
        } else {
          throw new Error('asdasfqaewqafsw');
        }

      },
      switchSpoiler(val){
        this.comment.Spoiler = val;
        this.$forceUpdate();
      },
      colorAssign(){
        if (this.comment.plus.indexOf(baseUsername) !== -1) {
          this.color.up = '#00FF00';
        } else {
          this.color.up = '#cacaca';
        }
        if (this.comment.minus.indexOf(baseUsername) !== -1) {
          this.color.down = '#00FF00';
        } else {
          this.color.down = '#cacaca';
        }
      },
      doValue(i) {
        let a;
        i == '+' ? a = 'plus' : a = 'minus';
        this.comment[a] = baseUsername;
        this.colorAssign()
        this.$forceUpdate();
      },
    },
    mounted() {
      this.colorAssign();
    }

  };
</script>
<style scoped>
    * {
        user-select: none;
    }

    .comment__body_wrap {
        border: 1px solid var(--color--border);
        border-radius: 5px;
        padding: 20px;
    }

    .comment__footer > span {
        color: #b5afaf;
    }


    .comment__header > span {
        margin-right: 20px;
    }
    .comment__header{
        display: flex;
        justify-content: space-between;
    }
    .root {
        padding: 1em;
    }

    .arrows > * {
        margin-right: 3px;
    }

    .arrows {
        color: #cacaca;
        font-size: 1.2rem;
    }
    .answer{
        font-size: 12px;
    }

    .answer_dialog {
    }

    .spoiler {
        color: #cacaca;
        font-size: 12px;
    }
    .spoiler > * {
        margin-right: 10px;
    }
    .spoiler:hover {
        color: #3c3c3c;
    }
    .comment__content.spoiler_text{
        font-size: 13px;
        color: #585858;
        width: 100%;
    }
</style>