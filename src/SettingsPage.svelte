<script>
    import {promote_channels, promote_posts, feed_mode, skip_indexPage} from "./stores";
    import {blur, fly} from "svelte/transition"

</script>

<div class="row valign-wrapper">
    <div in:blur class="col s8 m10 l10 left-align valign-wrapper">
        Длина новостной ленты:
    </div>
    <div class="col s4 m2 l2 center-align">
        <div in:fly="{{x:75}}" on:click={() => feed_mode.set($feed_mode == 'standart' ? 'extended' : 'standart')}
             class="card">
            <div class="card-content valign-wrapper">{$feed_mode == 'standart' ? '30' : '50'} постов</div>
        </div>
    </div>
</div>
<div class="row valign-wrapper">
    <div in:blur class="col s8 m10 l10 left-align valign-wrapper">
        Рекомендовать каналы в ленте:
    </div>
    <div class="col s4 m2 l2 center-align">
        <div class:active="{$promote_channels == 'true'}" in:fly="{{x:75}}"
             on:click={() => promote_channels.set($promote_channels == 'true' ? 'false' : 'true')} class="card">
            <div class="card-content valign-wrapper">{$promote_channels == 'true' ? 'Да' : 'Нет'}</div>
        </div>
    </div>
</div>
<div class="row valign-wrapper">
    <div in:blur class="col s8 m10 l10 left-align valign-wrapper">
        Рекомендовать посты в ленте:
    </div>
    <div class="col s4 m2 l2 center-align">
        <div class:active="{$promote_posts == 'true'}" in:fly="{{x:75}}"
             on:click={() => promote_posts.set($promote_posts == 'true' ? 'false' : 'true')} class="card">
            <div class="card-content valign-wrapper">{$promote_posts == 'true' ? 'Да' : 'Нет'}</div>
        </div>
    </div>
</div>
<div class="row valign-wrapper">
    <div in:blur class="col s8 m10 l10 left-align valign-wrapper">
        Пропускать начальную страницу приложения:
    </div>
    <div class="col s4 m2 l2 center-align">
        <div class:active="{$skip_indexPage == 'true'}" in:fly="{{x:75}}"
             on:click={() => skip_indexPage.set($skip_indexPage == "true" ? "false" : "true")} class="card">
            <div class="card-content valign-wrapper">{$skip_indexPage == "true" ? "Да" : "Нет"}</div>
        </div>
    </div>
</div>




<div class="row center-align grey-text ver-row">
    <div class="col s12 m12 l12">
        PhotoStory ver. {changeLog.length}
    </div>
</div>

<style>
    .card {
        cursor: pointer;
        background-color: #fafafa;
        color: #000000;
    }

    .card:hover {
        background-color: #9c27b0;
        color: #ffffff;
    }

    .active {
        background-color: #9c27b0;
        color: #ffffff;
    }

    .card-content {
        padding: 10px;
        justify-content: center;
    }

    .ver-row{
        margin-top: 55px;
    }
</style>