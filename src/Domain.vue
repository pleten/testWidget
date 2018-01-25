<template>
  <section class="base-dr">
    <h1 class="domain-registration">Domain Registration</h1>
    <section class="in-bundle" v-for="cartItem in cart">
      <span class="oval-3"></span>
      <span class="domain-name">{{`${cartItem.state.name}.${cartItem.state.tld}`}}</span>
      <span class="price">{{formatPrice(cartItem.state.price)}}</span>
      <span class="renewal-price">{{`Auto-renewal ${formatPrice(cartItem.state.renewalPrice)}`}}</span>
      <section class="main-options">
        <select class="registration-period" v-model="cartItem.state.metadata.registration" @change="registrationChange(cartItem.id , $event)">
          <option value="1">1 Year</option>
          <option value="2">2 Years</option>
          <option value="3">3 Years</option>
          <option value="4">4 Years</option>
          <option value="5">5 Years</option>
        </select>
        <span class="autorenew-option"><span class="autorenew-option-title">Auto-renew</span><input
          type="checkbox" v-model="cartItem.state.autorenew" @change="autorenewChange(cartItem.id, $event)"/></span>
      </section>
      <section class="features">
        <section class="features-list">
          <section class="feature">
            <span class="feature-name">WhoisGuard</span>
            <span class="feature-price">{{formatPrice(cartItem.state.metadata.features.whoisguard.price)}}</span>
            <input type="checkbox" v-model="cartItem.state.metadata.features.whoisguard.active" @change="whoisguardToggle(cartItem.id, $event)"/>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'Domain',
    props: ['WidgetSdk', 'cartItems'],
    computed: {
    },
    data() {
      return {
        cart: this.cartItems
      }
    },
    created() {
      this.WidgetSdk.subscribe(this.listener);
    },
    destroyed() {
      console.log('destroyed')
    },
    beforeDestroy() {
      console.log('beforeDestroy');
    },
    methods: {
      formatPrice: price => (price > 0 ? `$${Math.floor(price / 100)}.${Math.floor(price % 100)}` : 'FREE'),
      whoisguardToggle(id, e) {
        console.log(id, e);
      },
      registrationChange(id, e) {
        this.WidgetSdk.setMetadata(id, {path: 'registration', value: e.target.value})
      },
      autorenewChange(id, e) {

      },
      listener({actionType, payload, error}) {
        this.cart = this.cart.map(item => item.id === payload.id ? payload : item);
      }
    }
  }
</script>

<style>
  section.base-dr {
    width: 768px;
    border: 1px solid #F5F5F5;
    border-radius: 10px;
    background-color: #F5F5F5;
    padding-bottom: 15px;
    margin: 20px;
  }

  h1.domain-registration {
    height: 24px;
    width: 189px;
    color: #222222;
    font-family: Roboto serif;
    font-size: 20px;
    font-weight: 900;
    line-height: 24px;
  }

  section.in-bundle {
    margin: 0 auto;
    width: 670px;
    border: 1px solid #EEEEEE;
    border-radius: 10px;
    background-color: #FFFFFF;
    padding: 25px;
  }

  span.oval-3 {
    display: inline-block;
    height: 40px;
    width: 40px;
    float: left;
    background-color: #8A8A8A;
  }

  span.domain-name {
    height: 28px;
    width: 419px;
    color: #222222;
    font-family: Roboto serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
  }

  span.price {
    float: right;
    height: 28px;
    width: 66px;
    color: #6D6F70;
    font-family: Roboto serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    text-align: right;
  }

  span.renewal-price {
    height: 19px;
    width: 98px;
    color: #AEAEAE;
    font-family: Roboto serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 19px;
    text-align: right;
    position: relative;
    top: 28px;
    right: -175px;
  }

  select.registration-period {
    height: 56px;
    width: 327px;
    border: 1px solid #EEEEEE;
    border-radius: 10px;
    background-color: #FFFFFF;
    float: left;
  }

  section.main-options {
    margin-top: 40px;
  }

  span.autorenew-option {
    height: 56px;
    width: 327px;
    border: 1px solid #EEEEEE;
    border-radius: 10px;
    background-color: #FFFFFF;
    display: inline-block;
    float: right;
  }

  span.autorenew-option-title {
    height: 19px;
    width: 178.98px;
    color: #6D6F70;
    font-family: Roboto serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
  }

  section.features {
    width: 636px;
    border: 1px solid #EEEEEE;
    background-color: #FAFAFA;
    margin-top: 116px;
    padding: 16px;
  }

  .features-total-price {
    height: 19px;
    width: 71px;
    color: #6D6F70;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    display: inline-block;
    float: right;
  }

  .feature {
    height: 56px;
    width: 640px;
    border: 1px solid #EEEEEE;
    border-radius: 10px;
    background-color: #FFFFFF;
    margin-bottom: 16px;
  }

  .feature-price {
    margin: 0 15px;
  }

  .features-list {
    margin-top: 25px;
  }

</style>
