<script>
  export let number = 1;

  const validNum = () => {
    let num = parseInt(number);
    if (number >=1 && number <=9 ) return `0${num}`
    else if (number >= 10 && number <= 18 ) return `${num}`;
    return "01";
  };

  const urlPath = `url(../../images/zaps/zap-${validNum()}.svg)`;
  console.log(urlPath);
</script>

<style>
  .zap-wrap {
    position: relative;
  }

  .zap {
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: block;
        height: 0.3em;
        left: -0.2em;
        position: absolute;
        top: calc(100% - 0.15em);
        width: calc(100% + 0.4em);
    }
</style>

<span class="zap-wrap">
  <slot></slot>
  <span class="zap" style="background-image: {urlPath}"></span>
</span>