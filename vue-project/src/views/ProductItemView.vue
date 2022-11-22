<template>
  <NavBar/>
  <section class="u-align-center u-clearfix u-gradient u-section-1" id="carousel_3090">
    <div class="u-clearfix u-sheet u-valign-middle-lg u-sheet-1">
      <div class="u-border-2 u-border-palette-2-dark-1 u-container-style u-expanded-width u-gradient u-product u-product-1 width-limit-laptop">
        <div class="u-container-layout u-container-layout-1 width-limit-laptop grid-container-layout">
          <img v-if="productItem.imageUrl" :src="productItem.imageUrl" alt="" class="u-image u-image-default u-product-control u-image-1"
               data-image-width="750" data-image-height="750">
          <img v-if="!productItem.imageUrl" src="../assets/no-image.png" alt="" class="u-image u-image-default u-product-control u-image-1"
               data-image-width="750" data-image-height="750">
          <div class="u-align-center u-container-style u-gradient u-group u-radius-20 u-shape-round u-group-1">
            <div class="u-container-layout u-valign-middle u-container-layout-2">
              <h2 class="u-product-control u-text u-text-default u-text-1">
                <span class="u-product-title-link">{{ productItem.name }}</span>
              </h2>
              <div class="u-product-control u-product-price u-product-price-1">
                <div class="u-price-wrapper u-spacing-10">
                  <div class="u-price" style="font-size: 4.5rem; font-weight: 700;">
                    ${{ productItem.price }}
                  </div>
                </div>
              </div>
              <div class="u-product-control u-product-desc u-text u-text-grey-15 u-text-2">
                <p>{{ productItem.description }}</p>
                <router-link to="/product" class="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-product-control u-btn-1">
                  Back To List
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import NavBar from "./NavBar.vue";

export default {
  components: {NavBar},
  data() {
    return {
      productItem: {}
    }
  },
  created() {
    return axios.get('http://localhost:3000/products/' + this.$route.params.id).then(value => {
      this.productItem = value.data;
    });
  },

}
</script>
<style scoped>
.u-image.u-image-default {
  border: 1px solid #dddddd;
}
.width-limit-laptop {
  margin: auto !important;
}
.grid-container-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px;
  grid-gap: 20px;
}
.u-section-1 {
  background-image: linear-gradient(#f1b5b8, #db545a);
}

.u-section-1 .u-sheet-1 {
  min-height: 841px;
}

.u-section-1 .u-product-1 {
  min-height: 679px;
  background-image: linear-gradient(#f2f2f2, #db545a);
  /*margin-top: 102px;*/
  margin-bottom: 60px;
  height: auto;
}

.u-section-1 .u-container-layout-1 {
  padding: 0;
}

.u-section-1 .u-image-1 {
  width: 453px;
  /*height: 677px;*/
  margin: 1px auto 0 30px;
}

.u-section-1 .u-group-1 {
  width: 537px;
  min-height: 563px;
  height: auto;
  background-image: linear-gradient(white, #db545a);
  /*margin: -620px 60px 0 auto;*/
}

.u-section-1 .u-container-layout-2 {
  padding: 30px 30px 0;
}

.u-section-1 .u-text-1 {
  text-transform: uppercase;
  font-size: 1.25rem;
  letter-spacing: 4px;
  margin: 0 auto;
}

.u-section-1 .u-product-price-1 {
  margin: 30px auto 0;
}

.u-section-1 .u-text-2 {
  margin: 15px 0 0;
}

.u-section-1 .u-btn-1 {
  border-style: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 60px auto 0;
}

.u-section-1 .u-btn-2 {
  background-image: none;
  margin: -621px 0 0 auto;
  padding: 2px 10px 3px;
}

@media (max-width: 1199px) {
  .u-section-1 .u-group-1 {
    height: auto;
  }
}

@media (max-width: 991px) {
  .u-section-1 .u-container-layout-1 {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .u-section-1 .u-container-layout-2 {
    padding-bottom: 30px;
  }
}

@media (max-width: 767px) {
  .u-section-1 .u-group-1 {
    margin-right: 3px;
  }

  .u-section-1 .u-container-layout-2 {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width: 575px) {
  .u-section-1 .u-image-1 {
    width: 340px;
    height: 508px;
    margin-left: 0;
  }

  .u-section-1 .u-group-1 {
    width: 340px;
    margin-top: -451px;
    margin-right: 0;
  }

  .u-section-1 .u-text-2 {
    width: auto;
  }
}

.u-section-2 .u-sheet-1 {
  min-height: 400px;
}
</style>
