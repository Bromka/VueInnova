<template>
    <div class="root">
        <div class="comment__header">
            <span class="points">{{comment.getValue()}}</span>
            <span class="arrows">
                <span @click.prevent="doValue('+')" class="i" :style="`color: ${color.up}`">
                    <i class="fas fa-caret-up fa-lg"></i>
                </span>
                <span  @click.prevent="doValue('-')" class="i" :style="`color: ${color.down}`">
                    <i class="fa fa-caret-down fa-lg"></i>
                </span>
            </span>
            <span class="author">{{comment.Data.author}}</span>
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
      comment: Object,
    },
    data: () => {
      return {
        color: {
          up: '#cacaca',
          down: '#cacaca',
        },
      };
    },

    methods: {
      saySomething() {
        alert('Не реализованно');
      },
      doValue(i) {
        const baseUsername = 'John Doe';
        let a;
        i == '+' ? a = 'plus' : a = 'minus';

        this.comment[a] = baseUsername;

        if (this.comment.plus.indexOf(baseUsername) !==-1){
          this.color.up = '#00FF00';
        } else {
          this.color.up = '#cacaca';
        }

        if (this.comment.minus.indexOf(baseUsername) !==-1){
          this.color.down = '#00FF00';
        } else {
          this.color.down = '#cacaca';
        }

        this.$forceUpdate();
      },
    },
    computed: {

    },

  };
</script>
<style scoped>
    *{
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

    .root {
        padding: 20px;
    }

    .arrows > * {
        margin-right: 3px;

    }

    .arrows {
        color: #cacaca;
        font-size: 1.2rem;
    }
</style>