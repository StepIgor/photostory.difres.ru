<script>
    import {slide, fly} from "svelte/transition"
    import {users} from "./db";
    import {subs} from "./stores";
    import {createEventDispatcher} from "svelte"

    let dispatch = createEventDispatcher()

    function openChannel(c) {
        dispatch('transition', {
            page: 'user',
            user: c
        })
    }

    function unsubscribe(user) {
        subs.set($subs.filter((u) => parseInt(u) != parseInt(user)))
    }
</script>

<div class="row">
    {#if $subs.length > 0}
        <div class="col s12 m12 l12">
            <ul class="collection">
                {#each $subs.slice().reverse() as sub}
                    <li in:slide class="collection-item">
                        <div class="row item-row valign-wrapper">
                            <div class="col s3 m2 l1 right-align valign-wrapper">
                                <img on:click={()=>openChannel(sub)} src="https://photostorycontent.difres.ru/avatar/{sub}.png" class="responsive-img"/>
                            </div>
                            <div class="col s6 m7 l8 left-align">
                                <b><span on:click={()=>openChannel(sub)}
                                         class="purple-text">@{users[sub]['username']}</span></b><br/>
                                <span class="grey-text">{users[sub]['status']}</span>
                            </div>
                            <div class="col s3 m3 l3 right-align">
                                <a on:click={() => unsubscribe(sub)} class="btn grey lighten-2 purple-text sub-but"><i
                                        class="material-icons">clear</i></a>
                            </div>
                        </div>
                    </li>
                {/each}
            </ul>
        </div>
    {:else}
        <div in:fly="{{y:-50}}" class="col s12 m12 l12 center-align grey-text">
            <i class="material-icons large">group_add</i>
        </div>
        <div in:fly="{{y:-50}}" class="col s12 m12 l12 center-align grey-text">
            <b>А здесь пусто...</b>
        </div>
        <div in:fly="{{y:-50}}" class="col s12 m12 l12 center-align grey-text">
            Стоит подписаться хотя бы на один канал
        </div>
    {/if}
</div>

<style>
    img {
        border-radius: 50%;
        background-image: linear-gradient(white, white), radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
        background-origin: border-box;
        background-clip: content-box, border-box;
        border: 3px solid transparent;
        cursor: pointer;
    }

    .item-row {
        margin-bottom: 0;
    }

    .purple-text {
        cursor: pointer;
    }
</style>