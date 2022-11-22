<script>
import ProductItem from "./ProductItem.vue";
import NavBar from "./NavBar.vue";
import axios from 'axios'

export default {
  components: {ProductItem, NavBar},
  data() {
    return {
      productList: [],
      findedProductList: [],
      sortByAsk: true,
    };
  },
  created() {
    return axios.get('http://localhost:3000/products').then(value => {
      this.productList = value.data;
      this.findedProductList = JSON.parse(JSON.stringify(this.productList));
    });
  },
  methods: {
    getProductList() {
      axios.get('http://localhost:3000/products').then(value => {
        this.productList = value.data;
      });
    },
    sortData(type) {
      let sortedData = [];
      if (type) {
        sortedData = this.productList.sort((a, b) => (+a.price > +b.price) ? -1 : 1)
      } else {
        sortedData = this.productList.sort((a, b) => (+a.price > +b.price) ? 1 : -1)
      }
      this.sortByAsk = !this.sortByAsk;
      this.productList = sortedData;
    },
    search(productName) {
      let find = []
      this.findedProductList.map(item => {
        if (item?.name?.toLowerCase().includes(productName.toLowerCase())) find.push(item)
      });
      find.length ? this.productList = find : this.productList = this.findedProductList;
    }
  },
};
</script>
<template>
  <NavBar/>
  <section class="u-clearfix u-palette-2-light-2 u-section-1" id="sec-1741">
    <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
      <h2 class="u-align-center u-text u-text-default u-text-1">Product List</h2>
    </div>
  </section>

  <section class="u-clearfix u-gradient u-section-2" id="sec-ff85">
    <div class="u-clearfix u-sheet u-sheet-1 width-limit-laptop">
      <span @click="sortData(this.sortByAsk)"
          class="u-border-none u-btn u-btn-round u-button-style u-palette-2-light-1 u-radius-3 u-text-body-alt-color u-text-hover-white u-btn-1">Sort by {{ sortByAsk ? 'ASC' : 'DESC' }}&nbsp;
        <span class="u-icon u-text-white u-icon-1"><svg class="u-svg-content" viewBox="0 0 490.677 490.677" x="0px" y="0px"
                                                    style="width: 1em; height: 1em;"><path
          d="M489.272,37.339c-1.92-3.307-5.44-5.333-9.259-5.333H10.68c-3.819,0-7.339,2.027-9.259,5.333    c-1.899,3.307-1.899,7.36,0.021,10.667l234.667,405.333c1.899,3.307,5.419,5.333,9.237,5.333s7.339-2.027,9.237-5.333 L489.251,48.005C491.149,44.72,491.149,40.645,489.272,37.339z"></path></svg><img></span>
      </span>
      <input @input="search($event.target.value)"  className="u-search-input" type="search" name="search" placeholder="Search"/>

      <div class="u-expanded-width u-list u-list-1">
          <div class="u-repeater u-repeater-grid">
            <ProductItem v-for="item in productList" :key="item.id" :product-item="item" :parent-component="'product'"/>
          </div>
      </div>
    </div>


  </section>

</template>
<style scoped>
.u-repeater-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px 20px;
}
.u-search-input {
  background-color: #ffffff;
  border: 1px solid #dddddd;
  width: 30%;
  margin-left: auto;
  display: block;
}
.u-section-1 {
  background-image: none;
}

.u-section-1 .u-sheet-1 {
  min-height: 79px;
}

.u-section-1 .u-text-1 {
  margin: 20px auto;
}

.u-section-2 {
  background-image: linear-gradient(#f1b5b8, #db545a);
}

.u-section-2 .u-sheet-1 {
  min-height: 647px;
}

.u-section-2 .u-btn-1 {
  border-style: none;
  font-weight: 700;
  font-size: 0.9375rem;
  background-image: none;
  margin: 12px 0 0;
  padding: 7px 26px 8px 25px;
}

.u-section-2 .u-icon-1 {
  font-size: 0.7em;
}

.u-section-2 .u-list-1 {
  grid-template-rows: auto;
  margin: 12px 0 60px;
}

.u-section-2 .u-repeater-1 {
  grid-template-columns: calc(33.3333% - 6.66667px) calc(33.3333% - 6.66667px) calc(33.3333% - 6.66667px);
  grid-gap: 10px 10px;
  min-height: 1022px;
}

.u-section-2 .u-list-item-1 {
  box-shadow: 2px -2px 8px 0px rgba(128, 128, 128, 1);
  background-image: linear-gradient(white, #db545a);
}

.u-section-2 .u-container-layout-1 {
  padding: 30px;
}

.u-section-2 .u-image-1 {
  height: 243px;
  margin: 0 auto 0 0;
}

.u-section-2 .u-text-1 {
  text-transform: uppercase;
  font-weight: 700;
  margin: 20px auto 0 0;
}

.u-section-2 .u-text-2 {
  margin: 20px auto 0 0;
}

.u-section-2 .u-text-3 {
  font-weight: 700;
  margin: 20px auto 0 0;
}

.u-section-2 .u-btn-2 {
  text-transform: uppercase;
  font-weight: 700;
  margin: -45px 0 0 auto;
}

.u-section-2 .u-list-item-2 {
  box-shadow: 2px -2px 8px 0px rgba(128, 128, 128, 1);
  background-image: linear-gradient(white, #db545a);
}

.u-section-2 .u-container-layout-2 {
  padding: 30px;
}

.u-section-2 .u-image-2 {
  height: 243px;
  margin: 0 auto 0 0;
}

.u-section-2 .u-text-4 {
  text-transform: uppercase;
  font-weight: 700;
  margin: 20px auto 0 0;
}

.u-section-2 .u-text-5 {
  margin: 20px auto 0 0;
}

.u-section-2 .u-text-6 {
  font-weight: 700;
  margin: 20px auto 0 0;
}

.u-section-2 .u-btn-3 {
  text-transform: uppercase;
  font-weight: 700;
  margin: -45px 0 0 auto;
}

.u-section-2 .u-list-item-3 {
  box-shadow: 2px -2px 8px 0px rgba(128, 128, 128, 1);
  background-image: linear-gradient(white, #db545a);
}

.u-section-2 .u-container-layout-3 {
  padding: 30px;
}

.u-section-2 .u-image-3 {
  height: 243px;
  margin: 0 auto 0 0;
}

.u-section-2 .u-text-7 {
  text-transform: uppercase;
  font-weight: 700;
  margin: 20px auto 0 0;
}

.u-section-2 .u-text-8 {
  margin: 20px auto 0 0;
}

.u-section-2 .u-text-9 {
  font-weight: 700;
  margin: 20px auto 0 0;
}

.u-section-2 .u-btn-4 {
  text-transform: uppercase;
  font-weight: 700;
  margin: -45px 0 0 auto;
}

.u-section-2 .u-list-item-4 {
  box-shadow: 2px -2px 8px 0px rgba(128, 128, 128, 1);
  background-image: linear-gradient(white, #db545a);
}

.u-section-2 .u-container-layout-4 {
  padding: 30px;
}

.u-section-2 .u-image-4 {
  height: 243px;
  margin: 0 auto 0 0;
}

.u-section-2 .u-text-10 {
  text-transform: uppercase;
  font-weight: 700;
  margin: 20px auto 0 0;
}

.u-section-2 .u-text-11 {
  margin: 20px auto 0 0;
}

.u-section-2 .u-text-12 {
  font-weight: 700;
  margin: 20px auto 0 0;
}

.u-section-2 .u-btn-5 {
  text-transform: uppercase;
  font-weight: 700;
  margin: -45px 0 0 auto;
}

.u-section-2 .u-list-item-5 {
  box-shadow: 2px -2px 8px 0px rgba(128, 128, 128, 1);
  background-image: linear-gradient(white, #db545a);
}

.u-section-2 .u-container-layout-5 {
  padding: 30px;
}

.u-section-2 .u-image-5 {
  height: 243px;
  margin: 0 auto 0 0;
}

.u-section-2 .u-text-13 {
  text-transform: uppercase;
  font-weight: 700;
  margin: 20px auto 0 0;
}

.u-section-2 .u-text-14 {
  margin: 20px auto 0 0;
}

.u-section-2 .u-text-15 {
  font-weight: 700;
  margin: 20px auto 0 0;
}

.u-section-2 .u-btn-6 {
  text-transform: uppercase;
  font-weight: 700;
  margin: -45px 0 0 auto;
}

.u-section-2 .u-list-item-6 {
  box-shadow: 2px -2px 8px 0px rgba(128, 128, 128, 1);
  background-image: linear-gradient(white, #db545a);
}

.u-section-2 .u-container-layout-6 {
  padding: 30px;
}

.u-section-2 .u-image-6 {
  height: 243px;
  margin: 0 auto 0 0;
}

.u-section-2 .u-text-16 {
  text-transform: uppercase;
  font-weight: 700;
  margin: 20px auto 0 0;
}

.u-section-2 .u-text-17 {
  margin: 20px auto 0 0;
}

.u-section-2 .u-text-18 {
  font-weight: 700;
  margin: 20px auto 0 0;
}

.u-section-2 .u-btn-7 {
  text-transform: uppercase;
  font-weight: 700;
  margin: -45px 0 0 auto;
}

@media (max-width: 1199px) {
  .u-section-2 .u-list-1 {
    height: auto;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-repeater-1 {
    min-height: 841px;
  }

  .u-section-2 .u-list-item-1 {
    background-size: auto;
  }

  .u-section-2 .u-image-1 {
    height: 192px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-list-item-2 {
    background-size: auto;
  }

  .u-section-2 .u-image-2 {
    height: 192px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-image-3 {
    height: 192px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-image-4 {
    height: 192px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-image-5 {
    height: 192px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-image-6 {
    height: 192px;
    margin-right: initial;
    margin-left: initial;
  }
}

@media (max-width: 991px) {
  .u-section-2 .u-repeater-1 {
    grid-template-columns: calc(50% - 5px) calc(50% - 5px);
    min-height: 1463px;
  }

  .u-section-2 .u-image-1 {
    height: 227px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-image-2 {
    height: 227px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-image-3 {
    height: 227px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-image-4 {
    height: 227px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-image-5 {
    height: 227px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-image-6 {
    height: 227px;
    margin-right: initial;
    margin-left: initial;
  }
}

@media (max-width: 767px) {
  .u-section-2 .u-repeater-1 {
    grid-template-columns: 100%;
  }

  .u-section-2 .u-image-1 {
    height: 393px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-image-2 {
    height: 393px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-image-3 {
    height: 393px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-image-4 {
    height: 393px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-image-5 {
    height: 393px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-image-6 {
    height: 393px;
    margin-right: initial;
    margin-left: initial;
  }
}

@media (max-width: 575px) {
  .u-section-2 .u-container-layout-1 {
    padding-left: 20px;
    padding-right: 20px;
  }

  .u-section-2 .u-image-1 {
    height: 242px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-container-layout-2 {
    padding-left: 20px;
    padding-right: 20px;
  }

  .u-section-2 .u-image-2 {
    height: 242px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-container-layout-3 {
    padding-left: 20px;
    padding-right: 20px;
  }

  .u-section-2 .u-image-3 {
    height: 242px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-container-layout-4 {
    padding-left: 20px;
    padding-right: 20px;
  }

  .u-section-2 .u-image-4 {
    height: 242px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-container-layout-5 {
    padding-left: 20px;
    padding-right: 20px;
  }

  .u-section-2 .u-image-5 {
    height: 242px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-2 .u-container-layout-6 {
    padding-left: 20px;
    padding-right: 20px;
  }

  .u-section-2 .u-image-6 {
    height: 242px;
    margin-right: initial;
    margin-left: initial;
  }
}

.u-section-3 .u-sheet-1 {
  min-height: 45px;
}
</style>
