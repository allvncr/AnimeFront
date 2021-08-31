<template>
  <div class="footer">
    <footer>
      <div class="list pic">
        <a href="/">
          <img src="../assets/logo-100.png" />
        </a>
      </div>

      <div class="list">
        <h4 class="title">anime.tv</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Trending</a>
          </li>
          <li>
            <a href="/">Random</a>
          </li>
          <li>
            <a href="/search">Search</a>
          </li>
          <li>
            <a href="/browse">Browse</a>
          </li>
        </ul>
      </div>

      <div class="list">
        <h4 class="title">Resources</h4>
        <ul>
          <li>
            <a href="/">Terms of Use</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
          <li>
            <a href="/">Cookies Policy</a>
          </li>
        </ul>
      </div>

      <div class="list">
        <h4 class="title">Connect</h4>
        <ul>
          <li>
            <a href="/">
              <i class="fas fa-comment-exclamation"></i>
              <span class="oh">Contact Us</span>
            </a>
          </li>
          <li v-show="!loggedIn">
            <a href="/register">
              <i class="fas fa-user-plus"></i>
              <span class="oh">Create Account</span>
            </a>
          </li>
          <li v-show="!loggedIn">
            <a href="/login">
              <i class="fas fa-sign-in-alt"></i>
              <span class="oh">Sign In</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #17181a;
  min-height: 36px;
}

footer {
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 48px 0 32px;
  }
  padding: 96px 0 80px;
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.pic {
  @media only screen and (max-width: 768px) {
    display: none;
  }
  text-align: center;
}

.list {
  @media only screen and (max-width: 768px) {
    width: 30%;
    padding: 0 8px;
  }
  list-style: none;
  width: 25%;

  img {
    height: 50px;
  }

  h4 {
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    padding-bottom: 16px;
    line-height: 14px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;

    li {
      line-height: 1;

      a {
        @media only screen and (max-width: 768px) {
          font-size: 10px;
        }
        text-transform: capitalize;
        font-size: 12px;
        text-decoration: none;
        color: #fff;
        font-weight: 300;
        padding: 16px 0;
        display: block;
        opacity: 1;

        i {
          width: 26px;
        }
      }
    }
  }

  ul:hover > li {
    opacity: 0.5;
  }

  ul li:hover {
    opacity: 1;
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    loggedIn() {
      var bool = false;
      if (
        this.$store.state.auth.status.loggedIn &&
        this.$store.state.auth.user != null
      ) {
        bool = true;
      }
      return bool;
    },
  },
};
</script>
