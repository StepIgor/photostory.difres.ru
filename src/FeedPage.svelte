<script>
    import {createEventDispatcher} from "svelte"
    import {subs, promote_posts, promote_channels, feed_mode, liked} from "./stores";
    import {fly} from "svelte/transition"
    import {posts, users} from "./db";
    import PostBlock from "./PostBlock.svelte";
    import PhotoViewer from "./PhotoViewer.svelte";
    import UserPromotionBlock from "./UserPromotionBlock.svelte";
    import EndBandNotification from "./EndBandNotification.svelte"

    let dispatch = createEventDispatcher()

    let viewer

    function openViewer(p) {
        viewer.show(p.detail.p)
    }

    let PostsToPromote
    let promotedPost = -1

    //promoted Posts
    if ($promote_posts == "true") {
        PostsToPromote = Object.keys(posts).filter((p) => $liked.indexOf(parseInt(p)) == -1 && $subs.indexOf(parseInt(posts[p]['user'])) == -1)
        if (PostsToPromote.length > 0) promotedPost = PostsToPromote[Math.floor(Math.random() * PostsToPromote.length)]
    }

    let UsersToPromote
    let PromotedUser = -1

    //promoted user
    if ($promote_channels == "true") {
        UsersToPromote = Object.keys(users).filter((u) => $subs.indexOf(parseInt(u)) == -1)
        if (UsersToPromote.length > 0) PromotedUser = UsersToPromote[Math.floor(Math.random() * UsersToPromote.length)]
    }

    function transition(p, u) {
        dispatch('transition', {
            page: p,
            user: u
        })
    }

    //feed engine
    let border = 10
    let visibleFeed = Object.keys(posts).slice().reverse().filter((p) => $subs.indexOf(parseInt(posts[p]['user'])) != -1)
    let FeedLength = $feed_mode == 'standart' ? 30 : 50

    function loadMore() {
        let WB = document.documentElement.getBoundingClientRect().bottom;
        let WH = window.innerHeight;

        if (parseInt(Math.abs(WB - WH)) == 0 && border < FeedLength && border < visibleFeed.length) {
            border += 10
        }
    }
</script>

<svelte:window on:scroll={loadMore}/>

<PhotoViewer bind:this={viewer}/>

{#if $subs.length == 0}
    <div in:fly="{{y:-50}}" class="row center-align">
        <div class="col s12 m12 l12">
            <i class="material-icons large grey-text">info</i>
        </div>
        <div class="col s12 m12 l12 grey-text">
            <b>Новостей нет</b>
        </div>
        <div class="col s12 m12 l12 grey-text">
            Они и не появятся, пока вы не начнете отслеживать хотя бы один канал
        </div>
    </div>
    {#if promotedPost != -1}
        <PostBlock on:openFull={openViewer} post={promotedPost} fromFeed={true} feedInfo="Предлагаемый пост"
                   on:transition/>
    {/if}
    {#if PromotedUser != -1}
        <UserPromotionBlock user={PromotedUser} on:transition/>
    {/if}
{:else}

    {#each visibleFeed.slice(0, border) as post, ind}
        <PostBlock post={post} on:openFull={openViewer} on:transition fromFeed={true}/>
        {#if (ind == 3 || (visibleFeed.length < 4 && ind == 1)) && promotedPost != -1}
            <PostBlock on:openFull={openViewer} post={promotedPost} fromFeed={true} feedInfo="Предлагаемый пост"
                       on:transition/>
        {/if}
        {#if (ind == 7 || (visibleFeed.length < 8 && ind == 3)) && PromotedUser != -1}
            <UserPromotionBlock user={PromotedUser} on:transition/>
        {/if}
    {/each}

    {#if border >= FeedLength || border >= visibleFeed.length}
        <EndBandNotification/>
    {/if}
{/if}
