<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}</span>
        </li>
      </ul>

    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
              <div class="icon">
                <img width="57px" :src="food.icon" alt=""/>
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月销{{food.sellCount}}份</span><span class="rating">好评度{{food.rating}}%</span>

                </div>
                <div class="price">
                  <span class="new">¥{{food.price}}</span><span class="old"v-show="food.oldPrice"> ¥{{food.oldPrice}}</span>
                </div>
              </div>

            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import BScroll from 'better-scroll';
  const ERROK = 0;
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: [],
        listHeight: [],
        scrollY: 0,
        scrollX: 0
      };
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      var _this = this;
      _this.$http.get('/api/goods')
        .then(function (response) {
          if (response.data.errno === ERROK) {
            _this.goods = response.data.data;
            _this.$nextTick(function() {
              _this._initScroll();
              _this._calculateHeight();
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    computed: {
      currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
        }
        return 0;
      }
    },
    methods: {
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          probeType: 3
        });
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
          this.scrollX = Math.abs(Math.round(pos.x));
        });
      },
      _calculateHeight() {
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        };
        console.log(this.listHeight);
      },
      selectMenu(index, event) {
        // 如果不存在这个属性,则不执行下面的函数
        if (!event._constructed) {
          return;
        };
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
        let el = foodList[index];
        this.foodsScroll.scrollToElement(el, 300);
        /*
        let start = this.listHeight[index];
        this.foodsScroll.scrollTo(start);
        */
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "goods.styl";
</style>
