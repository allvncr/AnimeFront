<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'PT Mono', monospace;
  background-color: #17181a;
  color: #fff;
  background: url(assets/background.jpg) top center/cover no-repeat;
  @media only screen and (max-width: 768px){
    background-repeat: no-repeat;
    background-size: cover;
  }
}

*{
  margin: 0;
  padding: 0;
}

#app{  
  @media only screen and (max-width: 768px){
    max-width: 100%;
  }
}
</style>
