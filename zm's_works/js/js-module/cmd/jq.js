define(function(require, factory) {
  console.log('import jquery');
  return {
    $: () => {
      console.log('this is jq.')
    }
  }
});