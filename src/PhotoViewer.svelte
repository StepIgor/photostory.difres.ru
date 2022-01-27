<script>
    import {posts, users, comments} from "./db";
    import {fly, fade} from "svelte/transition"
    import {liked} from "./stores";

    let post
    let pics
    let pic
    let visible = false
    let img
    let coms

    export function show(p) {
        post = parseInt(p)
        pics = posts[post]['content'].map((number) => {
            let image = new Image();
            image.src = "https://photostorycontent.difres.ru/content/" + number + ".png"
            return image
        })
        pic = 0
        coms = Object.keys(comments).filter((c) => parseInt(comments[c]['post']) == parseInt(post))
        visible = true
    }


    function exit() {
        visible = false
    }

    function keycheck(key) {
        if (key.key == 'Escape') visible = false
    }

    function change_picture(d) {
        if (d == 'next') {
            pic = pic < pics.length - 1 ? pic + 1 : pic
        } else {
            pic = pic > 0 ? pic - 1 : pic
        }
    }

    function like() {
        if ($liked.indexOf(post) == -1) liked.set($liked.concat(parseInt(post)))
        else liked.set($liked.filter((p) => parseInt(p) != parseInt(post)))
    }
</script>

{#if visible}
    <div in:fly="{{x:750}}" out:fly="{{x:750}}" class="back grey lighten-3">
        <div class="img-container">
            <img class="responsive-img" src={pics[pic].src}/>
            <div on:click={() => change_picture('next')} class="right-slide">
                <table>
                    <tr>
                        <td><i class="material-icons white-text">arrow_forward</i></td>
                    </tr>
                </table>
            </div>
            <div on:click={() => change_picture('prev')} class="left-slide">
                <table>
                    <tr>
                        <td><i class="material-icons white-text">arrow_back</i></td>
                    </tr>
                </table>
            </div>
            <img class="border-img" src="img/viewerborder.png"/>
        </div>
        <div class="container">
            <div class="row">
                <div class="col s12 m12 l12 center-align">
                    <b>{pic + 1}/{pics.length}</b>
                </div>
            </div>
            <div class="row left-align">
                <div class="col s12 m12 l12 left-align">
                    {posts[post]['comment']}
                </div>
                <div class="col s12 m12 l12">
                    <span class="purple-text">@{users[posts[post]['user']]['username']}</span> <span
                        class="grey-text">{posts[post]['date']}</span>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m12 l12 center-align hide-on-med-and-up">
                    {#if $liked.indexOf(post) == -1}
                        <button on:click={like} in:fade class="btn purple white-text like-but-mob"><i
                                class="material-icons">favorite_border</i> <span
                                class="like-but-mob-label">Нравится</span></button>
                    {:else}
                        <button on:click={like} in:fade class="btn grey lighten-2 purple-text like-but-mob"><i
                                class="material-icons">favorite</i> <span
                                class="like-but-mob-label">Вам понравилось</span></button>
                    {/if}
                </div>
                <div class="col s12 m12 l12 left-align hide-on-small-only">
                    {#if $liked.indexOf(post) == -1}
                        <button on:click={like} in:fade class="btn purple white-text"><i class="material-icons">favorite_border</i>
                            <span class="like-but-mob-label">Нравится</span></button>
                    {:else}
                        <button on:click={like} in:fade class="btn grey lighten-2 purple-text"><i
                                class="material-icons">favorite</i> <span
                                class="like-but-mob-label">Вам понравилось</span></button>
                    {/if}
                </div>
            </div>
            <div class="row left-align">
                {#each coms as comment}
                    <div class="col s12 m12 l12">
                        <blockquote>
                            <span class="purple-text">@{users[comments[comment]['user']]['username']}</span> <span
                                class="grey-text">{comments[comment]['date']}</span><br/>
                            <span class="black-text">{comments[comment]['comment']}</span>
                        </blockquote>
                    </div>
                {/each}
            </div>
        </div>
    </div>
    <div on:click={exit} class="back-but">
        <div>
            <i class="material-icons">arrow_back</i> <span>Вернуться назад</span>
        </div>
    </div>
{/if}

<svelte:body on:keydown={keycheck}/>

<style>
    .back {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 100;
        text-align: center;
        overflow-y: scroll;
    }

    .back-but {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 8vh;
        z-index: 200;
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
        cursor: pointer;
        color: #FFFFFF;
        display: flex;
        align-items: center;
    }

    .back-but:hover{
        opacity: 1;
    }


    img {
        max-height: 90vh;
    }

    .img-container {
        width: 100%;
        background: #000000;
        position: relative;
    }

    .border-img {
        width: 100%;
        height: 4px;
        position: absolute;
        left: 0;
        bottom: 0;
    }

    .container {
        margin-top: 25px;
        margin-bottom: 75px;
    }

    .right-slide {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 150px;
        background: rgba(255, 255, 255, 0.3);
        opacity: 0;
        cursor: pointer;
    }

    .right-slide:hover {
        opacity: 1;
    }

    .left-slide {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 150px;
        background: rgba(255, 255, 255, 0.3);
        opacity: 0;
        cursor: pointer;
    }

    .left-slide:hover {
        opacity: 1;
    }

    table {
        width: 100%;
        height: 100%;
    }

    td {
        vertical-align: middle;
        text-align: center;
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

    blockquote {
        border-left: 5px solid #9c27b0;
    }
</style>