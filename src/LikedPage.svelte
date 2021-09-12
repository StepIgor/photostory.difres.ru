<script>
    import PostBlock from "./PostBlock.svelte"
    import {liked} from "./stores";
    import PhotoViewer from "./PhotoViewer.svelte";
    import EndBandNotification from "./EndBandNotification.svelte";

    let viewer
    let border = 10
    let visible_feed = $liked.slice().reverse()

    function openViewer(p) {
        viewer.show(p.detail.p)
    }

    function loadMore() {
        let WB = document.documentElement.getBoundingClientRect().bottom;
        let WH = window.innerHeight;

        if (parseInt(Math.abs(WB - WH)) == 0 && border < $liked.length) {
            border += 10
        }
    }
</script>

<PhotoViewer bind:this={viewer}/>

<svelte:window on:scroll={loadMore}/>

<div class="row">
    {#each visible_feed.slice(0, border) as post}
        <PostBlock post={post} on:openFull={openViewer} on:transition/>
    {/each}
</div>
{#if border >= $liked.length}
    <EndBandNotification/>
{/if}