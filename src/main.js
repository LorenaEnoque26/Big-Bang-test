import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faSearch, faUserCircle, faSignOutAlt, faBox, faHeart, faShoppingBasket, faBars, faTimes, faLock, faBarcode, faPlay, faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCcAmex, faCcDinersClub, faCcMastercard, faCcVisa, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faLongArrowAltRight, faPlay, faBarcode, faCcVisa,faCcDinersClub, faCcMastercard, faCcAmex, faSignOutAlt, faSearch, faUserCircle, faBox, faHeart, faShoppingBasket, faBars, faTimes, faFacebookF, faInstagram, faTwitter, faLock)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
