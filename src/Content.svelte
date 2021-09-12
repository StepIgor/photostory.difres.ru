<script>
    import MainPage from "./MainPage.svelte";
    import FeedPage from "./FeedPage.svelte";
    import UserPage from "./UserPage.svelte";
    import Header from "./Header.svelte"
    import SettingsPage from "./SettingsPage.svelte";
    import LikedPage from "./LikedPage.svelte";
    import SubsPage from "./SubsPage.svelte";

    export let page
    export let user
</script>

<div class="container">
    {#if page == 'main'}
        <MainPage on:transition/>
    {:else}
        <Header on:transition/>
        {#if page == 'feed'}
            <FeedPage on:transition/>
        {:else if page == 'user'}
            <UserPage on:transition user={user}/>
        {:else if page == 'settings'}
            <SettingsPage/>
        {:else if page == 'liked'}
            <LikedPage on:transition />
        {:else if page='subs'}
            <SubsPage on:transition />
        {/if}
    {/if}
</div>