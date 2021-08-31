<template>
    <div class="search">
        <Header title="Search" v-on:childToParent="onChild"  home=false></Header>
        <div class="config">
            <div style="display:flex">
                <div class="tags_btn" @click="showTags = !showTags">
                    <i class="fas fa-tags"></i>
                    <span>Tags</span>
                    <span class="badge" v-show="tag.length>0">{{ tag.length }}</span>
                </div>
                <div class="tags_btn"  @click="showBrands = !showBrands">
                    <i class="fas fa-city"></i>
                    <span>Brands</span>
                    <span class="badge" v-show="studio">1</span>
                </div>
            </div>
            <div style="display:flex">
                <div class="tags_btn" @click="Reset">
                    <i class="fas fa-trash-restore"></i>
                    <span>Reset All</span>
                </div>
                <div class="tags_btn"  @click="showSorts = !showSorts">
                    <i class="fas fa-sort-amount-up"></i>
                    <span>Sort</span>
                </div>
            </div>
        </div>
        <transition name="tag">
        <div class="tags" v-show="showTags">
          <nav>
            <button class="btn" @click="showTags = !showTags">
              <i class="fas fa-times"></i>
            </button>
            <p>Tags</p>
            <button class="btn primary" @click="ResetT">Reset</button>
          </nav>

          <div class="cart__text">
            <div class="title">
              <h4>Include Tags</h4>
              <p>Find videos that has all selected tags below:</p>
            </div>
            <div class="layout">
              <span class="circle" :class="{select: In(genre, tag)}" v-for="(genre, i) in genres" :key="i" @click="addGenre(genre)">
                {{ genre.name }}
              </span>
            </div>
          </div>

          <nav>
            <button class="btn" @click="showTags = !showTags">Cancel</button>
            <button class="btn primary" @click="Apply">Apply</button>
          </nav>

        </div>
        </transition>

        <div class="overlay" v-show="showBrands || showTags || showSorts" @click="Close"></div>

        <transition name="tag">
        <div class="tags" v-show="showBrands">
          <nav>
            <button class="btn" @click="showBrands = !showBrands">
              <i class="fas fa-times"></i>
            </button>
            <p>Brands</p>
            <button class="btn primary" @click="ResetS">Reset</button>
          </nav>

          <div class="cart__text">
            <div class="title">
              <h4>Brands / Production</h4>
              <p>Find videos that are owned or produced by the selected brands below:</p>
            </div>
            <div class="layout">
              <span :class="{select: brand.slug==studio}" v-for="(brand, i) in studios" :key="i" @click="addBrand(brand.slug)">
                {{ brand.name }}
              </span>
            </div>
          </div>

          <nav>
            <button class="btn" @click="showBrands = !showBrands">Cancel</button>
            <button class="btn primary" @click="Apply">Apply</button>
          </nav>

        </div>
        </transition>
        <transition name="sort">
          <div class="sort" v-show="showSorts">
            <div>
              <a @click="defSort('-created')">
                <i class="fas fa-paw" v-if="(sort=='-created')"></i>
                Recent Upload
              </a>
            </div>
            <div>
              <a @click="defSort('created')">
                <i class="fas fa-paw" v-if="(sort=='created')"></i>
                Old Upload
              </a>
            </div>
            <div>
              <a @click="defSort('-date')">
                <i class="fas fa-paw" v-if="(sort=='-date')"></i>
                Newest
              </a>
            </div>
            <div>
              <a @click="defSort('date')">
                <i class="fas fa-paw" v-if="(sort=='date')"></i>
                Oldest
              </a>
            </div>
            <div>
              <a @click="defSort('-note')">
                <i class="fas fa-paw" v-if="(sort=='-note')"></i>
                Most Likes
              </a>
            </div>
            <div>
              <a @click="defSort('note')">
                <i class="fas fa-paw" v-if="(sort=='note')"></i>
                Least Likes
              </a>
            </div>
            <div>
              <a @click="mostViews">
                <i class="fas fa-paw" v-if="(views==1)"></i>
                Most Views
              </a>
            </div>
            <div>
              <a @click="leastViews">
                <i class="fas fa-paw" v-if="(views==2)"></i>
                Least Views
              </a>
            </div>
            <div>
              <a @click="defSort('name')">
                <i class="fas fa-paw" v-if="(sort=='name')"></i>
                Alphabetical (A-Z)
              </a>
            </div>
            <div>
              <a @click="defSort('-name')">
                <i class="fas fa-paw" v-if="(sort=='-name')"></i>
                Alphabetical (Z-A)
              </a>
            </div>
          </div>
        </transition>

        <ul class="pagination">
          <li v-for="i in nbre" :key="i">
            <a :class="{ primary: page==i }" @click="next(i)">{{ i }}</a>
          </li>
        </ul>

        <div class="search-result" v-if="total>0">
            <router-link :to="'/anime/'+anime.slug" :title="'Watch '+anime.name+' online HD 1080p, 720p'" v-for="(anime, i) in animes" :key="i">
              <div class="cover">
                <img :src="anime.image">
              </div>
              <div class="title">{{ anime.name }}</div>
            </router-link>
        </div>
        <div class="search-result" v-else>
            <div class="no-content">
                No search results.
            </div>
        </div>
        <ul class="pagination">
          <li v-for="i in nbre" :key="i">
            <a :class="{ primary: page==i }" @click="next(i)">{{ i }}</a>
          </li>
        </ul>
        <Footer></Footer>
    </div>
</template>

<style lang="scss" scoped>
  .search{
    background-color: #272727;
    position: relative;
  }

  .config{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 24px;
        border-bottom: 1px solid rgba(48,48,48,0.5);
        box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.75);
        

        .tags_btn{
          @media only screen and (max-width: 768px){
           display: none;
          }
            position: relative;
            margin-left: 8px;
            cursor: pointer;
            padding: 16px 64px;
            display: flex;
            align-items: center;
            font-size: 16px;
            border: 1px solid rgba(58,60,63,.85);
            color: rgba($color: #fff, $alpha: 0.6);

            i{
                margin-right: 8px;
            }

            .badge{
              font-size: 14px;
              color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              top: 5px;
              right: 40px;
              border-radius: 50%;
              height: 22px;
              width: 22px;
              background-color: #f44336;
              flex-wrap: wrap;
            }
        }

        .tags_btn:hover{
            background-color: #3a3c3f;
        }
  }

  .search-result{
    width: 100%;
    min-height: 603px;
    display: flex;
    flex-wrap: wrap;

    a{
      @media only screen and (max-width: 768px){
        width: 40%;
        padding: 16px;
      }

      text-decoration: none;
      padding: 16px;
      width: 17%;
      height: 100%;
      border-radius: 3px;
      img{
        @media only screen and (max-width: 768px){
            height: 230px;
        }
        width: 100%;
        height: 300px;
      }

      .title{
        @media only screen and (max-width: 768px){
          width: 100%;
          font-size: 1rem;
          height: auto;
        }
        color: #fff;
        font-size: 1vw;
        height: 2.8vw;
        font-weight: 400;
      }
    }

    .no-content{
      width: 100%;
      padding: 24px 0;
      display: flex;
      justify-content: center;
      font-size: 12px;
      background-color: initial;
    }

  }

  .pagination{
    list-style: none;
    margin: 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    a{
      cursor: pointer;
      margin: 5px;
      padding: 2px 12px;
      text-decoration: none;
      display: flex;
      font-size: 12px;
      color: #fff;
      background: #424242;
      border-radius: 4px;
      height: 30px;
      align-items: center;
      box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
    }

    a:hover{
      background-color: #939496;
    }

    .primary{
      background-color: #f3c669 !important;
      border-color: #f3c669 !important;
    }
    
  }

  .tags{
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    z-index: 200;
    max-width: 800px;
    height: 400px;
    border-radius: 2px;
    background-color: #424242;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    nav{
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #3a3c3f;

      .primary{
        color: #f3c669 !important;
        transition: all 0.2s ease;
      }

      .btn{
        cursor: pointer;
        margin: 6px 8px;
        font-size: 14px;
        font-weight: 600;
        padding: 8px 16px;
        background: transparent;
        border: none;
        outline: 0;
        text-transform: uppercase;
        color: #fff;

        i{
          font-size: 24px;
          color: #fff;
        }
      }

      .btn:hover{
        background-color: rgba($color: #fff, $alpha: 0.2);
      }

      .primary:hover{
        background: rgba(243, 198, 105, 0.3);
      }
    }

    .cart__text {
      padding: 15px;

      .title{
        margin-bottom: 16px;
        h4{
          font-size: 24px;
          font-weight: 400;
          line-height: 32px;
          letter-spacing: normal;
        }

        p{
          font-size: 14px;
          color: #9e9e9e;
        }
      }

      .layout{
        display: flex;
        flex-wrap: wrap;

        span{
          cursor: pointer;
          height: 32px;
          margin: 4px;
          border: 1px solid #f3c669;
          text-decoration: none;
          color: #fff;
          display: flex;
          align-items: center;
          padding: 0 12px;
          text-transform: capitalize;
        }

        .circle{
          border-radius: 28px;
        }

        .light{
          background-color: #fff;
          color: #000;
          border-color: transparent;
        }

        .selectr{
          background-color: #f44336;
          color: #fff;
        }

        .select{
          background-color: #f3c669;
          color: #fff;
        }
      }
    }
  }

  .sort{
    display: inline-block;
    border-radius: 2px;
    max-width: 80%;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #303030;
    color: #fff;
    position: fixed;
    right: 20px;
    z-index: 8;
    padding: 8px 0;

    a{
      cursor: pointer;
      text-decoration: none;
      color: #fff;
      height: 48px;
      font-size: 16px;
      transition: .3s cubic-bezier(.25,.8,.5,1);
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0 16px;
      overflow: hidden;

      i{
        display: flex;
        align-items: center;
        padding-right: 8px;
        font-size: 14px;
      }
    }

    a:hover{
      background: hsla(0,0%,100%,.12)
    }
  }


  .overlay{
    position   : absolute;
      top        : 0;
      left       : 0;
      width      : 100%;
      height     : 100%;
      background : #000;
      opacity    : 0.8;
      filter     : alpha(opacity=60);
      z-index    : 5;
  }

  .tag-enter-active, .tag-leave-active{
      transition: transform .5s ease, opacity .5s ease;
  }

  .tag-enter, .tag-leave-to{
      transform: translateY(400px);
      opacity: 0;
  }

  .tag-enter-to, .tag-leave{
      transform: translateX(0px);
      opacity: 1;
  }

  .sort-enter-active, .sort-leave-active{
      transition: opacity .5s ease;
  }

  .sort-enter, .sort-leave-to{
      opacity: 0;
  }

  .sort-enter-to, .sort-leave{
      opacity: 1;
  }

</style>

<script>
import Header from "@/components/Header.vue";
import VidService from "@/services/VidService"
import Footer from "@/components/Footer.vue";

export default {
  name: "Search",
  
  components: {
    Header,
    Footer
  },

  data(){
    return {
      animes: [],
      total: 0,
      search: '',
      nbre: 0,
      perPage: 10,
      page: 1,
      studio: undefined,
      tag: [],
      showTags: 0,
      showBrands: 0,
      showSorts: 0,
      genres: [],
      studios: [],
      sort: '-created',
      views: 0
    }
  },

  methods: {
    getAll(){

      let params = {
        page : this.page,
        name : this.search,
        sort : this.sort
      }
      VidService.getAnimes(params)
      .then((result) => {
        this.animes = result.data.list
        this.total = result.data.totalItems
        this.trie()
        this.button(this.total)
        this.sort = result.config.params.sort
      }).catch((err) => {
        this.animes = []
        this.total = 0
        this.nbre = 0
      });
    },

    onChild(value){
      this.search = value
      this.getAll()
    },

    button(total){
      this.nbre = total/this.perPage
      if(total%this.perPage !=0 ){
        this.nbre++
      }
      this.nbre = Math.floor(this.nbre)
      console.log(this.animes[0])
    },

    next(i){
      this.page = i
      this.getAll()
    },

    trie(){
      var brands = []
      var genres = []

      if(this.studio){
        this.animes.forEach(element => {
          if (element.studio.slug == this.studio) {
            brands.push(element)
          }
        })

        this.animes = brands
        this.total = brands.length
      }

      if(this.tag.length>0){
        this.tag.forEach(tag => {
          this.animes.forEach(anime => {
            anime.genres.forEach(element => {
              if (element.slug == tag.slug) {
                if (!this.InAnime(anime, genres)) { 
                  genres.push(anime) 
                }
              }
            })
          })
        })

        this.animes = genres
        this.total = genres.length
      }

    },

    getGenres(){
      VidService.getGenres()
      .then(response => {
        this.genres = response.data
      }).catch(e => {
        console.log(e.response.data)
      })
    },

    getBrands(){
      VidService.getStudios()
      .then(response => {
        this.studios = response.data
      }).catch(e => {
        console.log(e.response.data)
      })
    },

    addGenre(genre){
      var find = this.tag.findIndex(element=>element.slug==genre.slug)
      
      if(find<0)
        this.tag.push(genre)
      else
        this.tag.splice(find, 1)
    },

    
    In(genre, list){
      var find = list.findIndex(element=>element.slug==genre.slug)
      if(find<0)
        return false
      else
        return true
    },

    InAnime(anime, list){
      var find = list.findIndex(element=>element.slug==anime.slug)
      if(find<0)
        return false
      else
        return true
    },

    addBrand(brand){
      this.studio = brand
    },

    Apply(){
      this.Close()
      this.getAll()
    },

    Reset(){
      this.ResetT()
      this.ResetS()
      this.defSort('-created')
      this.getAll()
    },

    ResetT(){
      this.tag = []
    },

    ResetS(){
      this.studio = undefined
    },


    Close(){
      this.showTags = 0
      this.showBrands = 0
      this.showSorts = 0
    },

    defSort(sort){
      this.sort = sort
      this.views = 0
      this.getAll()
      this.showSorts = 0
    },

    mostViews(){
      this.animes = this.animes.sort(function(a, b) {
          return parseFloat(b.views) - parseFloat(a.views)
      })
      this.views = 1
      this.sort = undefined

      return this.animes
    },

    leastViews(){
      this.animes = this.mostViews().reverse()
      this.views = 2
    }

  },

  mounted() {
    this.studio = this.$route.query.brand
    if(this.$route.query.tag){
      var tag = {
        slug: this.$route.query.tag
      }
      this.tag.push(tag)
    }
       
    this.getAll()
    this.getGenres()
    this.getBrands()
  }

}
</script>
