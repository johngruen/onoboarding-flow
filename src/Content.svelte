<script>
  import Layout from "./Elements/Layout.svelte";
  import Button from "./Elements/Button.svelte";
  import Zap from "./Elements/Zap.svelte";
</script>

<style>
  div {
    display: contents;
  }
</style>

<div>
  <Layout logo={true} buttonText={"Start Fresh"} showSignIn={true} skipText={"Pizza"}>
    <h1>Welcome to <Zap number={12}>Firefox</Zap></h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, fugiat praesentium. Totam adipisci temporibus pariatur inventore officia aut provident aspernatur perspiciatis nihil magni vitae optio aliquam quisquam, odio eveniet fuga?</p>
  </Layout>
</div>