<script>
    import {users, posts} from "./db";
    import {fly, blur, fade} from "svelte/transition"
    import {subs} from "./stores"
    import PhotoViewer from "./PhotoViewer.svelte"

    let viewer
    export let user
    let uposts = Object.keys(posts).filter((p) => parseInt(posts[p]['user']) == parseInt(user)).reverse()

    function subscribe() {
        if ($subs.indexOf(parseInt(user)) == -1) subs.set($subs.concat(user))
        else subs.set($subs.filter((u) => parseInt(u) != parseInt(user)))
    }
</script>

<PhotoViewer bind:this={viewer}/>

<div class="row start">
    <div class="col s4 m3 l3">
        <img in:fly="{{y:-50}}" src="https://photostorycontent.difres.ru/avatar/{user}.png" class="responsive-img avatar"/>
    </div>
    <div class="col s8 m9 l9 left-align truncate">
        <span in:blur class="light name hide-on-small-only">{users[user]['name']}</span> <span in:blur
                                                                                               class="purple-text username hide-on-small-only">@{users[user]['username']}</span>
        <span in:blur class="light name-mob hide-on-med-and-up">{users[user]['name']}</span> <span in:blur
                                                                                                   class="purple-text username-mob hide-on-med-and-up">@{users[user]['username']}</span>
        <div in:blur class="user-status black-text hide-on-small-only">
            • {users[user]['status']} •
        </div>
        <div in:blur class="user-status-mob black-text hide-on-med-and-up">
            • {users[user]['status']} •
        </div>
        <div class="hide-on-small-only details">
            <img src="img/countries/{users[user]['country']}.png" class="responsive-img country-logo"/> <span
                in:blur
                class="country-name">{users[user]['country']}</span><br/>
            <span in:blur>{users[user]['description']}</span><br>
            <div class="buttons">
                {#if $subs.indexOf(parseInt(user)) == -1}
                    <a in:fade on:click={subscribe} class="btn purple white-text sub-but"><i
                            class="material-icons left">add_circle</i>Отслеживать</a>
                {:else}
                    <a on:click={subscribe} in:fade class="btn grey lighten-2 purple-text sub-but">Не следить</a>
                {/if}
                {#if users[user]['email'].length > 0}
                    <a in:fade href="mailto:{users[user]['email']}" class="grey-text email-but"><i
                            class="material-icons email-icon">email</i></a>
                {/if}
            </div>
        </div>
    </div>
    <div class="col s12 hide-on-med-and-up mobile-details-block">
        <img src="img/countries/{users[user]['country']}.png" class="responsive-img country-logo"/> <span in:blur
                                                                                                          class="country-name">{users[user]['country']}</span><br/>
        <span in:blur>{users[user]['description']}</span><br>
        <div class="buttons">
            {#if $subs.indexOf(parseInt(user)) == -1}
                <a in:fade on:click={subscribe} class="btn purple white-text sub-but"><i
                        class="material-icons left">add_circle</i>Отслеживать</a>
            {:else}
                <a on:click={subscribe} in:fade class="btn grey lighten-2 purple-text sub-but">Не следить</a>
            {/if}
            {#if users[user]['email'].length > 0}
                <a in:fade href="mailto:{users[user]['email']}" class="grey-text email-but"><i
                        class="material-icons email-icon">email</i></a>
            {/if}
        </div>
    </div>
</div>
<div class="row bar">
    <div class="col s12 m12 l12">
        <ul in:fly="{{y:-50}}" class="collection">
            <li class="collection-item">Опубликовано постов: <b>{uposts.length}</b></li>
        </ul>
    </div>
</div>
<div class="row">
    {#each uposts as post}
        <div class="col s4 m3 l2">
            <div in:fly="{{y:-50}}" class="card hoverable" on:click={() => viewer.show(post)}>
                <div class="card-image">
                    <img src="https://photostorycontent.difres.ru/content/preview/{posts[post]['content'][0]}.png"/>
                    <span class="card-title">{posts[post]['content'].length}</span>
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
    .avatar {
        border: 4px solid transparent;
        border-radius: 50%;
        background-image: linear-gradient(white, white), radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
        background-origin: border-box;
        background-clip: content-box, border-box;
    }

    .start {
        margin-top: 50px;
    }

    .name {
        font-size: 36px;
    }

    .username {
        font-size: 24px;
        margin-left: 15px;
    }

    .name-mob {
        font-size: 24px;
    }

    .username-mob {
        font-size: 18px;
        margin-left: 5px;
    }

    .user-status {
        margin-top: 5px;
    }

    .user-status-mob {
        font-size: 12px;
        margin-top: 5px;
        white-space: normal;
    }

    .details {
        margin-top: 50px;
    }

    .country-logo {
        width: 16px;
        vertical-align: middle;
    }

    .country-name {
        vertical-align: middle;
        font-weight: bold;
    }

    .buttons {
        margin-top: 25px;
        overflow-x: auto;
    }

    .email-but {
        cursor: pointer;
        margin-left: 10px;
        vertical-align: middle;
    }

    .sub-but {
        vertical-align: middle;
        margin-bottom: 5px;
    }

    .email-icon {
        font-size: 24px;
    }

    .mobile-details-block {
        margin-top: 15px;
    }

    .bar {
        margin-bottom: 0;
    }

    .card {
        cursor: pointer;
    }

    .card-title {
        font-size: 20px;
        font-weight: bold;
        padding: 5px !important;
        left: 0% !important;
    }
</style>