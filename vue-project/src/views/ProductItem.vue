<template>
  <div class="u-container-style u-gradient u-list-item u-radius-20 u-repeater-item u-shape-round u-video-cover u-list-item-1">
    <div class="u-container-layout u-similar-container u-valign-top u-container-layout-1">
      <img v-if="productItem.imageUrl" alt="" class="u-expanded-width u-image u-image-default u-image-1" data-image-width="1200"
           data-image-height="1500"
           :src="productItem.imageUrl">
      <img v-if="!productItem.imageUrl" alt="" class="u-expanded-width u-image u-image-default u-image-1" data-image-width="1200"
           data-image-height="1500"
           src="../assets/no-image.png">
      <h4 class="u-text u-text-default u-text-1">{{ productItem.name }}</h4>
      <p class="u-text u-text-default u-text-2">{{ productItem.description }}</p>
      <h4 class="u-text u-text-default u-text-palette-1-base u-text-3">${{ productItem.price }}</h4>
      <router-link v-if="parentComponent === 'product'" :to="{name: 'productItem', params: {id: productItem.id}}"
                   class="u-btn u-button-style u-btn-2">View
      </router-link>
      <span v-if="parentComponent === 'admin'" @click="removeProduct(productItem.id)"
            class="u-btn u-button-style u-btn-2">Delete</span>
    </div>
  </div>

</template>
<script>
import axios from "axios";

export default {
  props: {
    productItem: {},
    parentComponent: String
  },
  emits: ['productRemoved'],
  methods: {
    removeProduct(id) {
      try {
        axios.delete('http://localhost:3000/products/' + id)
            .then(response => {
              this.$emit('productRemoved', true)
            })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>
.u-repeater {
  grid-gap: 20px;
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
