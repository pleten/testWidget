// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './Domain';

Vue.config.productionTip = false;

/* eslint-disable no-new */
function Domain({cartItems, SDK}) {
    return new Vue({
        data() {
          return {WidgetSdk: SDK, cartItems}
        },
        template: `<App :WidgetSdk="WidgetSdk" :cartItems="cartItems"/>`,
        components: {App},
    });
}

window.ncWidgets = window.ncWidgets || {};
window.ncWidgets.Domain = Domain;
