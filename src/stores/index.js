import { readable } from 'svelte/store';

export const showChrome = readable(false, function start(set) {
  const urlParams = new URLSearchParams(window.location.search);
  set(urlParams.get("browser") !== "false");
  return function stop() {}
});


