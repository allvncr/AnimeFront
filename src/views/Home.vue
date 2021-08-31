<template>
  <div class="home">
    <Header title="Home" home=true></Header>
    <div class="paralax">
      <h1>Watch Free HD Anime & Movie Videos</h1>
      <span class="subtext">
        Enjoy your <span class="highlight">unlimited</span> 
        anime & movie collection. 
        We are the definitive source for the best curated 
        720p / 1080p HD anime videos, 
        viewable by mobile phone and tablet, for free.
      </span>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">

.paralax{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    @media only screen and (max-width: 768px){
        margin: auto;
        font-size: 2rem;
        line-height: normal;
        max-width: 70%;
    }
    margin: 100px 500px 30px auto;
    font-size: 3.5vw;
    line-height: 4vw;
    max-width: 40vw;
    font-weight: 300;
  }

  .subtext{
    @media only screen and (max-width: 768px){
      margin: auto;
      font-size: 1rem;
      max-width: 80%;
      line-height: normal;
  }
    display: block;
    margin: 0 500px 15px auto;
    line-height: 2vw;
    max-width: 40vw;
    font-size: 1.3vw;
    font-weight: 300;
    color: rgba($color: #fff, $alpha: 0.7);
  }
}

.highlight{
  color: #f3c669;
  text-shadow: 0 0 1px #f3c669;
}

</style>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  
  components: {
    Header,
    Footer
  }
}
</script>
