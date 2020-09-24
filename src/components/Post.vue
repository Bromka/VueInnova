<template>
    <div class="wrap">
        <div class="story__main">
            <header class="story__header">

                <h1 class="story__title"><span class="story__title-link story__title-link_visited">За "спасибо"...</span></h1>

            </header>

            <div class="story__content story__typography" style="display: block">

                <div class="story__content-inner">
                    <div class="story-block story-block_type_text"><p>— Здравствуйте, а вы могли бы разместить нам рекламу бесплатно?<br><br>Называю минимальную стоимость рекламного поста.<br><br>— Не, ну у нас нет такой статьи расходов. А вы можете за "спасибо"?<br>— А у нас нет такой статьи доходов.</p></div>
                </div>

            </div>

            <div class="story__tags tags">
                <a href="/search?n=16&amp;r=3" target="_blank" rel="noopener" class="tags__tag tags__tag_highlight" data-tag="[моё]">[моё]</a> <a href="/tag/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D0%BA%D0%B8%20%D1%80%D0%B5%D0%B4%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D0%B0/hot" target="_blank" rel="noopener" class="tags__tag" data-tag-menu="true" data-tag="Записки редактора">Записки редактора</a> <a href="/tag/%D0%A0%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0/hot" target="_blank" rel="noopener" class="tags__tag" data-tag-menu="true" data-tag="Реклама">Реклама</a> <a href="/tag/%D0%A2%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%B7%D0%B2%D0%BE%D0%BD%D0%BE%D0%BA/hot" target="_blank" rel="noopener" class="tags__tag" data-tag-menu="true" data-tag="Телефонный звонок">Телефонный звонок</a> <a href="/tag/%D0%A2%D0%B5%D0%BA%D1%81%D1%82/hot" target="_blank" rel="noopener" class="tags__tag" data-tag-menu="true" data-tag="Текст">Текст</a> <a href="/tag/%D0%9A%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%8B/hot" target="_blank" rel="noopener" class="tags__tag" data-tag-menu="true" data-tag="Клиенты">Клиенты</a>
            </div>


        </div>

    </div>
</template>
<script>
    export default {


    }
</script>
<style scoped>
    .wrap{
        max-width: 1000px;
        margin: 0px auto;

    }
.story__main {

    font-family: "Roboto","Open Sans",helvetica,arial,sans-serif;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    --color--bg: #ffffff;
    --color--bg_image: #ffffff;
    --color--bg_80: rgba(255, 255, 255, 0.8);
    --color--bg_90: rgba(255, 255, 255, 0.9);
    --color--bg_contrast: #000000;
    --color--bg_contrast-50: rgba(0, 0, 0, 0.5);
    --color--color: #000000;
    --color--green: #8ac858;
    --color--red: #fd5d47;
    --color--yellow: #ffc800;
    --color--gray: #cacaca;
    --color--gray_light: #e8e8e8;
    --color--gray_dark: #adadad;
    --color--text: #212121;
    --color--secondary: #4d4d4d;
    --color--caption: #757575;
    --color--text_green: #6c9b45;
    --color--text_link: var(--color--text_green);
    --color--text_red: #f75c48;
    --color--text_contrast: #ffffff;
    --color--text_search: rgba(255, 200, 0, 0.3);
    --color--selection: #c5e4ac;
    --color--tool: #c2c2c2;
    --color--icon: #bdbdbf;
    --color--social_bg: #c1c4cb;
    --color--social_vk: #5b7aa8;
    --color--social_facebook: #4868ac;
    --color--social_twitter: #41abe1;
    --color--social_telegram: #00a7e3;
    --color--social_instagram: #c13584;
    --color--social_zen: #876649;
    --color--social_google: #34a853;
    --color--social_viber: #7b519c;
    --color--platform: #bdbdbf;
    --color--app__bg: #f4f4f4;
    --color--app__text: #212121;
    --color--section__bg: #ffffff;
    --color--section_gray__bg: #f9f9fb;
    --color--section_info__bg: #fff9ea;
    --color--section_info__border: var(--color--border);
    --color--section_success__bg: var(--color--green);
    --color--section_success__text: #ffffff;
    --color--section_danger__bg: var(--color--red);
    --color--section_danger__text: #ffffff;
    --color--section_warning__bg: rgba(255, 200, 0, 0.05);
    --color--section_warning__border: #ffc800;
    --color--section_warning__text: #212121;
    --color--toast_default__bg: #6ea046;
    --color--toast_default__text: #ffffff;
    --color--toast_danger__bg: var(--color--red);
    --color--toast_danger__text: #ffffff;
    --color--toast_warning__bg: #ffc800;
    --color--toast_warning__text: #5e3a00;
    --color--popup_shadow-arrow: rgba(0, 0, 0, 0.08);
    --color--popup_default__bg: #ffffff;
    --color--popup_default__text: #212121;
    --color--popup_gray__bg: #f9f9fb;
    --color--popup_gray__text: #212121;
    --color--popup_danger__bg: var(--color--red);
    --color--popup_danger__text: #ffffff;
    --color--popup_warning__bg: #212121;
    --color--popup_warning__text: #ffffff;
    --color--tag__text: #757575;
    --color--tag_highlight__text: #4d4d4d;
    --color--tag-focus__text: #212121;
    --color--header__text: #d8ffbc;
    --color--header_active__text: #ffffff;
    --color--header_dark__text: rgba(255, 255, 255, 0.7);
    --color--header_icon__bg: rgba(0, 0, 0, 0.05);
    --color--header__bg: var(--color--green);
    --color--footer__text: #212121;
    --color--footer__bg: #f0f0f0;
    --color--award__bg: #f1f1f1;
    --color--award__bg_hover: #d9d9d9;
    --color--menu-item-current__text: var(--color--text_green);
    --color--menu-item-current__bg: var(--color--green);
    --color--comments__left-border: #efefef;
    --color--input__bg: #ffffff;
    --color--input__text: #212121;
    --color--input-placeholder__text: #757575;
    --color--input-focus__border: var(--color--green);
    --color--input_complexity__bg: #e8e8e8;
    --color--input_checkbox: #adadad;
    --color--bell_yellow: #ffc800;
    --color--border: #e9e9e9;
    --color--border_success: var(--color--green);
    --color--border_error: var(--color--red);
    --color--border_upload: rgba(233, 233, 233, 0.4);
    --color--highlight_yellow__bg: rgba(255, 200, 0, 0.1);
    --color--highlight_yellow__bg_40: rgba(255, 200, 0, 0.4);
    --color--highlight_red__bg: rgba(253, 93, 71, 0.1);
    --color--highlight_red__bg_40: rgba(253, 93, 71, 0.4);
    --color--highlight_gray__bg: rgba(233, 233, 233, 0.4);
    --color--highlight_green__bg: rgba(138, 200, 88, 0.1);
    --color--shadow: rgba(0, 0, 0, 0.16);
    --color--button__text_contrast: #ffffff;
    --color--button__stroke: rgba(88, 88, 88, 0.2);
    --color--button__stroke_contrast: rgba(255, 255, 255, 0.2);
    --color--button_default__bg: #e9e9e9;
    --color--button_default__text: #585858;
    --color--button_success__bg: var(--color--green);
    --color--button_danger__bg: var(--color--red);
    --color--button_warning__bg: var(--color--yellow);
    --color--button_dark__bg: var(--color--secondary);
    --color--button-small_success__bg: #83be54;
    --color--button-small_default__bg: #dddddd;
    --color--button-small_default__text: #585858;
    --color--slider__quantity: rgba(138, 200, 88, 0.7);
    --color--progress-circle__storke: rgba(117, 117, 117, 0.2);
    --color--editor__bg: rgba(0, 0, 0, 0.7);
    --color--editor__text: #ffffff;
    --color--editor__button_hover: rgba(0, 0, 0, 0.4);
    --color--editor__button_active: rgba(0, 0, 0, 0.4);
    --color--player_logo: rgba(255, 255, 255, 0.5);
    --color--player__bg: #000000;
    --color--player_play__bg: rgba(33, 33, 33, 0.6);
    --color--player_play__inactive: rgba(33, 33, 33, 0.1);
    --color--player_label__bg: rgba(0, 0, 0, 0.72);
    --color--player_label__color: #e9e9e9;
    --color--player_controls__color: #ffffff;
    --color--player_controls__text: rgba(255, 255, 255, 0.74);
    --color--player_timeline__bg: rgba(0, 0, 0, 0.3);
    --color--player_timeline__amount: var(--color--green);
    --color--player_timeline__buffered: rgba(255, 255, 255, 0.3);
    --color--player_timeline__hint: rgba(0, 0, 0, 0.5);
    --color--player-editor__controls: #3c3c3c;
    --color--player-upload__bg: #1a1e21;
    --color--code__bg: #f9f9fb;
    --filter-color--green: invert(68%) sepia(64%) saturate(347%) hue-rotate(50deg) brightness(95%) contrast(89%);
    --filter-color--tool: invert(76%) sepia(40%) saturate(8%) hue-rotate(320deg) brightness(95%) contrast(93%);
    --hack-comments-highlight-color: #fff9e5;
    color: var(--color--app__text);
    -webkit-font-smoothing: subpixel-antialiased;
    text-rendering: optimizeLegibility;
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
    overflow: hidden;
    min-height: 75px;
    width: 100%;
    border: 1px solid var(--color--border);
    border-radius: 2px;
    background-color: var(--color--section__bg);
    box-sizing: border-box;
    animation-duration: 2000ms;
    animation-fill-mode: forwards;
    font-family: "Roboto","Open Sans",helvetica,arial,sans-serif;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    --color--bg: #ffffff;
    --color--bg_image: #ffffff;
    --color--bg_80: rgba(255, 255, 255, 0.8);
    --color--bg_90: rgba(255, 255, 255, 0.9);
    --color--bg_contrast: #000000;
    --color--bg_contrast-50: rgba(0, 0, 0, 0.5);
    --color--color: #000000;
    --color--green: #8ac858;
    --color--red: #fd5d47;
    --color--yellow: #ffc800;
    --color--gray: #cacaca;
    --color--gray_light: #e8e8e8;
    --color--gray_dark: #adadad;
    --color--text: #212121;
    --color--secondary: #4d4d4d;
    --color--caption: #757575;
    --color--text_green: #6c9b45;
    --color--text_link: var(--color--text_green);
    --color--text_red: #f75c48;
    --color--text_contrast: #ffffff;
    --color--text_search: rgba(255, 200, 0, 0.3);
    --color--selection: #c5e4ac;
    --color--tool: #c2c2c2;
    --color--icon: #bdbdbf;
    --color--social_bg: #c1c4cb;
    --color--social_vk: #5b7aa8;
    --color--social_facebook: #4868ac;
    --color--social_twitter: #41abe1;
    --color--social_telegram: #00a7e3;
    --color--social_instagram: #c13584;
    --color--social_zen: #876649;
    --color--social_google: #34a853;
    --color--social_viber: #7b519c;
    --color--platform: #bdbdbf;
    --color--app__bg: #f4f4f4;
    --color--app__text: #212121;
    --color--section__bg: #ffffff;
    --color--section_gray__bg: #f9f9fb;
    --color--section_info__bg: #fff9ea;
    --color--section_info__border: var(--color--border);
    --color--section_success__bg: var(--color--green);
    --color--section_success__text: #ffffff;
    --color--section_danger__bg: var(--color--red);
    --color--section_danger__text: #ffffff;
    --color--section_warning__bg: rgba(255, 200, 0, 0.05);
    --color--section_warning__border: #ffc800;
    --color--section_warning__text: #212121;
    --color--toast_default__bg: #6ea046;
    --color--toast_default__text: #ffffff;
    --color--toast_danger__bg: var(--color--red);
    --color--toast_danger__text: #ffffff;
    --color--toast_warning__bg: #ffc800;
    --color--toast_warning__text: #5e3a00;
    --color--popup_shadow-arrow: rgba(0, 0, 0, 0.08);
    --color--popup_default__bg: #ffffff;
    --color--popup_default__text: #212121;
    --color--popup_gray__bg: #f9f9fb;
    --color--popup_gray__text: #212121;
    --color--popup_danger__bg: var(--color--red);
    --color--popup_danger__text: #ffffff;
    --color--popup_warning__bg: #212121;
    --color--popup_warning__text: #ffffff;
    --color--tag__text: #757575;
    --color--tag_highlight__text: #4d4d4d;
    --color--tag-focus__text: #212121;
    --color--header__text: #d8ffbc;
    --color--header_active__text: #ffffff;
    --color--header_dark__text: rgba(255, 255, 255, 0.7);
    --color--header_icon__bg: rgba(0, 0, 0, 0.05);
    --color--header__bg: var(--color--green);
    --color--footer__text: #212121;
    --color--footer__bg: #f0f0f0;
    --color--award__bg: #f1f1f1;
    --color--award__bg_hover: #d9d9d9;
    --color--menu-item-current__text: var(--color--text_green);
    --color--menu-item-current__bg: var(--color--green);
    --color--comments__left-border: #efefef;
    --color--input__bg: #ffffff;
    --color--input__text: #212121;
    --color--input-placeholder__text: #757575;
    --color--input-focus__border: var(--color--green);
    --color--input_complexity__bg: #e8e8e8;
    --color--input_checkbox: #adadad;
    --color--bell_yellow: #ffc800;
    --color--border: #e9e9e9;
    --color--border_success: var(--color--green);
    --color--border_error: var(--color--red);
    --color--border_upload: rgba(233, 233, 233, 0.4);
    --color--highlight_yellow__bg: rgba(255, 200, 0, 0.1);
    --color--highlight_yellow__bg_40: rgba(255, 200, 0, 0.4);
    --color--highlight_red__bg: rgba(253, 93, 71, 0.1);
    --color--highlight_red__bg_40: rgba(253, 93, 71, 0.4);
    --color--highlight_gray__bg: rgba(233, 233, 233, 0.4);
    --color--highlight_green__bg: rgba(138, 200, 88, 0.1);
    --color--shadow: rgba(0, 0, 0, 0.16);
    --color--button__text_contrast: #ffffff;
    --color--button__stroke: rgba(88, 88, 88, 0.2);
    --color--button__stroke_contrast: rgba(255, 255, 255, 0.2);
    --color--button_default__bg: #e9e9e9;
    --color--button_default__text: #585858;
    --color--button_success__bg: var(--color--green);
    --color--button_danger__bg: var(--color--red);
    --color--button_warning__bg: var(--color--yellow);
    --color--button_dark__bg: var(--color--secondary);
    --color--button-small_success__bg: #83be54;
    --color--button-small_default__bg: #dddddd;
    --color--button-small_default__text: #585858;
    --color--slider__quantity: rgba(138, 200, 88, 0.7);
    --color--progress-circle__storke: rgba(117, 117, 117, 0.2);
    --color--editor__bg: rgba(0, 0, 0, 0.7);
    --color--editor__text: #ffffff;
    --color--editor__button_hover: rgba(0, 0, 0, 0.4);
    --color--editor__button_active: rgba(0, 0, 0, 0.4);
    --color--player_logo: rgba(255, 255, 255, 0.5);
    --color--player__bg: #000000;
    --color--player_play__bg: rgba(33, 33, 33, 0.6);
    --color--player_play__inactive: rgba(33, 33, 33, 0.1);
    --color--player_label__bg: rgba(0, 0, 0, 0.72);
    --color--player_label__color: #e9e9e9;
    --color--player_controls__color: #ffffff;
    --color--player_controls__text: rgba(255, 255, 255, 0.74);
    --color--player_timeline__bg: rgba(0, 0, 0, 0.3);
    --color--player_timeline__amount: var(--color--green);
    --color--player_timeline__buffered: rgba(255, 255, 255, 0.3);
    --color--player_timeline__hint: rgba(0, 0, 0, 0.5);
    --color--player-editor__controls: #3c3c3c;
    --color--player-upload__bg: #1a1e21;
    --color--code__bg: #f9f9fb;
    --filter-color--green: invert(68%) sepia(64%) saturate(347%) hue-rotate(50deg) brightness(95%) contrast(89%);
    --filter-color--tool: invert(76%) sepia(40%) saturate(8%) hue-rotate(320deg) brightness(95%) contrast(93%);
    --hack-comments-highlight-color: #fff9e5;
    color: var(--color--app__text);
    -webkit-font-smoothing: subpixel-antialiased;
    text-rendering: optimizeLegibility;
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
    overflow: hidden;
    min-height: 75px;
    width: 100%;
    border: 1px solid var(--color--border);
    border-radius: 2px;
    background-color: var(--color--section__bg);
    box-sizing: border-box;
    animation-duration: 2000ms;
    animation-fill-mode: forwards;

    padding: 20px;
}
</style>