<template>
  <section className="u-align-center u-clearfix u-gradient u-section-1" id="sec-ea6c">
    <div className="u-clearfix u-sheet u-sheet-1 login-container">

      <div className="u-form u-form-1">
        <form ref="loginForm" className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
              style="padding: 15px" name="form">
          <h2 className="u-align-center u-text u-text-default u-text-1 margin-horizontally-auto">Login</h2>
          <div className="u-form-group u-form-name u-label-none u-form-group-1">
            <label className="u-label">Login</label>
            <input type="text" placeholder="Login" id="name-6797" name="login"
                   v-model="login"
                   className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                   required=""
            />
          </div>
          <div className="u-form-email u-form-group u-label-none u-form-group-2">
            <label htmlFor="email-6797" className="u-label">Password</label>
            <input type="Password" placeholder="Password" id="email-6797" name="password"
                   v-model="password"
                   className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required=""/>
          </div>

          <div className="u-align-left u-form-group u-form-submit u-form-group-4">
            <span @click="navigateTo" className="u-btn u-btn-submit u-button-style">Login</span>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
      login: '',
      password: ''
    }
  },

  methods: {
    navigateTo() {
      if (this.login === 'admin' && this.password === 'admin') {
        localStorage.setItem('loggedIn', true)
        router.push('/admin')
        return;
      } else if (this.login === 'user' && this.password === 'user') {
        localStorage.setItem('loggedIn', true)
        router.push('/product')
        return;
      } else {
        localStorage.setItem('loggedIn', false)
        router.push('/')
        return;
      }

    }
  }

}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.u-section-1 {
  background-image: linear-gradient(#f1b5b8, #db545a);
}

.u-section-1 .u-sheet-1 {
  min-height: 100vh;
}

.u-section-1 .u-form-1 {
  width: 570px;
  margin: auto;
}

.u-section-1 .u-form-group-1 {
  width: 100%;
}

.u-section-1 .u-form-group-2 {
  width: 100%;
}

.u-section-1 .u-form-group-3 {
  width: 100%;
}

.u-section-1 .u-form-group-4 {
  width: 100%;
}

@media (max-width: 767px) {
  .u-section-1 .u-form-1 {
    width: 540px;
  }
}

@media (max-width: 575px) {
  .u-section-1 .u-form-1 {
    width: 340px;
  }
}
</style>