<script>
  import Logo from "./Logo.svelte";
  import Button from "./Button.svelte";
  export let showLogo = true;
  export let showSkip = true;
  export let showSignIn = false;
  export let skipText = "Skip"
  export let buttonText = "button Text"
</script>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    flex: 1;
    max-width: 780px;
    margin: 0 auto;
  }

  .layout-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 24px;
  }

  p {
    max-width: 610px;
  }

  .small {
    font-size: 14px;
    line-height: 22px;
    margin: 0;
  }

  a.skip {
    font-size: 14px;
    line-height: 22px;
    color: #80808f;
    display: block;
    margin: 40px;
  }
</style>

<div class="layout">
  <div class="layout-content">
    {#if showLogo}
      <Logo box={96} margin={24} />
    {/if}
    <slot></slot>
    <Button>{buttonText}</Button>
    {#if showSignIn}
      <p class="small">Already have an account? <a href="">Sign in</a></p>
    {/if}
  </div>
  {#if showSkip}
    <a class="skip" href="#">{skipText}</a>
  {/if}
</div>