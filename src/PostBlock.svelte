<script>
    import {createEventDispatcher} from "svelte"
    import {fly, fade} from "svelte/transition"
    import {posts, users, comments} from "./db";
    import {liked} from "./stores";

    export let post
    let pics = posts[post]['content']
    let pic = 0
    export let fromFeed = false
    export let feedInfo = ''
    let dispatch = createEventDispatcher()

    function turn_next() {
        pic = pic < pics.length - 1 ? pic + 1 : pic
    }

    function turn_back() {
        pic = pic > 0 ? pic - 1 : pic
    }

    function like() {
        if ($liked.indexOf(parseInt(post)) == -1) liked.set($liked.concat(parseInt(post)))
        else liked.set($liked.filter((p) => parseInt(p) != parseInt(post)))
    }

    function openFull(){
        dispatch('openFull',{
            p: post
        })
    }

    function open_channel(){
        dispatch('transition',{
            page: 'user',
            user: posts[post]['user']
        })
    }
</script>

<div in:fly="{{y:-50}}" class="col s12 m12 l12">
    <div class="card grey lighten-5">
        <div class="card-content">
            <div class="row">
                <div class="col s3 m2 l1 right-align">
                    <img on:click={open_channel} class="avatar responsive-img" src="https://photostorycontent.difres.ru/avatar/{posts[post]['user']}.png"/>
                </div>
                <div class="col s9 m10 l11 left-align">
                    <span on:click={open_channel} class="purple-text">@{users[posts[post]['user']]['username']}</span><br/>
                    <span class="grey-text">{posts[post]['date']}</span>
                    {#if feedInfo}
                        <br/><span class="orange-text">{feedInfo}</span>
                    {/if}
                </div>
            </div>
            <div class="row">
                <div class="col s12 m12 l12">
                    <div class="img-container">
                        <img on:click={openFull} src="https://photostorycontent.difres.ru/content/preview/{pics[pic]}.png" class="responsive-img"/>
                        <div on:click={turn_back} class="turn-back valign-wrapper">
                            <i class="material-icons white-text">arrow_back</i>
                        </div>
                        <div on:click={turn_next} class="turn-next valign-wrapper">
                            <i class="material-icons white-text">arrow_forward</i>
                        </div>
                        <img class="border-img" src="img/viewerborder.png"/>
                    </div>
                </div>
                <div class="col s12 m12 l12 center-align">
                    <b>{pic + 1}/{pics.length}</b>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m12 l12">
                    <b>Комментариев: {Object.keys(comments).filter((c) => comments[c]['post'] == post).length}</b>
                    <br/>
                    {posts[post]['comment']}
                </div>
                {#if fromFeed}
                    <div class="col s12 m12 l12 center-align hide-on-med-and-up like-cont">
                        {#if $liked.indexOf(parseInt(post)) == -1}
                            <button on:click={like} in:fade class="btn purple white-text like-but-mob"><i
                                    class="material-icons">favorite_border</i> <span
                                    class="like-but-mob-label">Нравится</span></button>
                        {:else}
                            <button on:click={like} in:fade class="btn grey lighten-2 purple-text like-but-mob"><i
                                    class="material-icons">favorite</i> <span
                                    class="like-but-mob-label">Вам понравилось</span></button>
                        {/if}
                    </div>
                    <div class="col s12 m12 l12 left-align hide-on-small-only like-cont">
                        {#if $liked.indexOf(parseInt(post)) == -1}
                            <button on:click={like} in:fade class="btn purple white-text"><i class="material-icons">favorite_border</i>
                                <span class="like-but-mob-label">Нравится</span></button>
                        {:else}
                            <button on:click={like} in:fade class="btn grey lighten-2 purple-text"><i
                                    class="material-icons">favorite</i> <span
                                    class="like-but-mob-label">Вам понравилось</span></button>
                        {/if}
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
    .avatar {
        border-radius: 50%;
        background-image: linear-gradient(white, white), radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
        background-origin: border-box;
        background-clip: content-box, border-box;
        border: 3px solid transparent;
        cursor: pointer;
    }

    .purple-text {
        cursor: pointer;
    }

    .img-container {
        width: 100%;
        text-align: center;
        position: relative;
        background: #000000;
    }

    .img-container img {
        cursor: pointer;
        max-height: 50vh;
    }

    .turn-back {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 75px;
        background: rgba(0, 0, 0, 0.33);
        opacity: 0;
        cursor: pointer;
    }

    .turn-back i {
        margin: 0 auto;
    }

    .turn-back:hover {
        opacity: 1;
    }

    .turn-next {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 75px;
        background: rgba(0, 0, 0, 0.33);
        opacity: 0;
        cursor: pointer;
    }

    .turn-next i {
        margin: 0 auto;
    }

    .turn-next:hover {
        opacity: 1;
    }

    .border-img {
        width: 100%;
        height: 4px;
        position: absolute;
        left: 0;
        bottom: 0;
    }

    .like-but-mob {
        width: 100%;
    }

    .like-but-mob-label {
        vertical-align: top;
    }

    .material-icons {
        vertical-align: top;
    }

    .like-cont {
        margin-top: 15px;
    }
</style>