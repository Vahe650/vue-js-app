<template>
  <NavBar/>
  <section class="u-clearfix u-gradient u-section-1" id="sec-0352">
    <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
      <h2 class="u-align-center u-text u-text-default u-text-1">ADMIN PAGE</h2>
    </div>
  </section>
  <section class="u-clearfix u-gradient u-section-2" id="sec-0d84">
    <div class="u-clearfix u-sheet u-sheet-1 width-limit-laptop">
      <router-link to="/add" class="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-1">Add Product</router-link>
      <input @input="search($event.target.value)"  className="u-search-input" type="search" name="search" placeholder="Search"/>
      <div class="u-expanded-width u-list u-list-1">
        <div class="u-repeater u-repeater-grid">
          <ProductItem v-for="item in productList" :key="item.id"
                       :product-item="item"
                       :parent-component="'admin'"
                       @productRemoved="getProductList()"
          />
        </div>
      </div>
    </div>
  </section>
</template>
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
            this.findedProductList = JSON.parse(JSON.stringify(value.data));
      });
    },
    search(productName) {
      let find = []
      this.findedProductList.map(item => {
        if (item?.name?.toLowerCase().includes(productName.toLowerCase())) find.push(item)
      });
      find.length ? this.productList = find : this.productList = this.findedProductList;
    }
  },


}
</script>
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
  background-image: linear-gradient(#f1b5b8, #f1b5b8);
}

.u-section-1 .u-sheet-1 {
  min-height: 79px;
}

.u-section-1 .u-text-1 {
  margin: 20px auto;
} .u-section-2 {
    background-image: linear-gradient(#f1b5b8, #db545a);
  }

.u-section-2 .u-sheet-1 {
  min-height: 647px;
}

.u-section-2 .u-btn-1 {
  border-style: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 24px auto 0 0;
}

.u-section-2 .u-list-1 {
  grid-template-rows: auto;
  margin-top: 24px;
  margin-bottom: 60px;
}

.u-section-2 .u-repeater-1 {
  grid-template-columns: calc(33.3333% - 6.66667px) calc(33.3333% - 6.66667px) calc(33.3333% - 6.66667px);
  grid-gap: 10px 10px;
  min-height: 494px;
}

.u-section-2 .u-list-item-1 {
  box-shadow: 2px -2px 8px 0px rgba(128,128,128,1);
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
  box-shadow: 2px -2px 8px 0px rgba(128,128,128,1);
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
  box-shadow: 2px -2px 8px 0px rgba(128,128,128,1);
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

@media (max-width: 1199px) {
  .u-section-2 .u-list-1 {
    height: auto;
  }

  .u-section-2 .u-repeater-1 {
    min-height: 490px;
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
}

@media (max-width: 991px) {
  .u-section-2 .u-repeater-1 {
    grid-template-columns: calc(50% - 5px) calc(50% - 5px);
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
}
</style>
