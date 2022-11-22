<template>
  <NavBar/>
  <section class="u-clearfix u-gradient u-section-1" id="sec-0352">
    <div class="u-clearfix u-sheet u-valign-middle u-sheet-1 width-limit-laptop">
      <h2 class="u-align-center u-text u-text-default u-text-1">Create Product</h2>
    </div>
  </section>

  <section class="u-clearfix u-gradient u-section-2" style="height: 100vh;" id="sec-acde">
    <div class="width-limit-laptop add-product-container">
      <form class="add-product-form" name="form" style="padding: 10px;">
        <div class="u-form-group u-form-name">
          <label for="name-0760" class="u-label">Product Name</label>
          <input v-model="product.name" type="text" placeholder="Enter Product Name" id="name-0760" name="name"
                 class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="">
        </div>
        <div class="u-form-group u-form-message">
          <label for="email-0760" class="u-label">Description</label>
          <textarea v-model="product.description" placeholder="Add Product Description" id="email-0760"
                    name="email"
                    class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                    required="required"></textarea>
        </div>
        <div class="u-form-group u-form-textarea u-form-group-3">
          <label for="textarea-9dea" class="u-label">Price</label>
          <input v-model="product.price" rows="4" cols="50" id="textarea-9dea" name="textarea"
                 class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="required"
                 type="number">
        </div>
      </form>
      <div class="upload-product-image">
        <img v-if="product.imageUrl" class="u-expanded-width u-image u-image-1" :src="product.imageUrl"
             data-image-width="750" data-image-height="750">
        <input type="file" id="upload-product-image" @change="selectFile($event)"/>
        <label for="upload-product-image" class="u-btn u-upload-button">Upload Image</label>
      </div>
      <div class="buttongroup">
        <router-link to="/admin" class="u-align-center u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-3">
          Cancel
        </router-link>
        <button @click="createProduct()" :disabled="!product.name || !product.price"
                class="u-align-center u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-3">Add
          product
        </button>
      </div>
    </div>
  </section>
</template>
<script>

import NavBar from "./NavBar.vue";
import axios from "axios";

export default {
  components: {NavBar},
  data() {
    return {
      product: {
        name: '',
        description: '',
        price: '',
        imageUrl: ''
      }
    };
  },

  methods: {
    createProduct() {
      try {
        axios.post(' http://localhost:3000/products', this.product).then(() => {
          this.$router.push('/admin')
        })
      } catch (e) {
        console.log(e)
      }
    },
    selectFile(event) {
      const data = new FormData();
      data.append('file', event.target.files[0]);
      data.append('upload_preset', 'sweet_bakery_store_cloudinary');
      data.append('cloud_name', 'dh1uq37vi');

      axios.post('https://api.cloudinary.com/v1_1/dh1uq37vi/image/upload', data).then(response => {
        this.product.imageUrl = response.data.url;
      })
    }
  },
}
</script>
<style scoped>
.add-product-container {
  display: grid;
  grid-gap: 20px 20px;
}
.add-product-form {
  grid-row: 1;
  grid-column: 1;
}
.upload-product-image {
  grid-row: 1;
  grid-column: 2;
  padding: 10px;
}
.u-upload-button {
  margin-left: auto;
}
.upload-product-image input[type="file"] {
  display: none;
}
.buttongroup {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-row: 2;
  grid-column: 2;
  gap: 10px;
}

.u-section-1 {
  background-image: linear-gradient(#f1b5b8, #f1b5b8);
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
  /*margin: -45px 0 0 auto;*/
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
