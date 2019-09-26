/**
 * @package FAQ Json Generator
 *
 * @since 1.0.0
 * @author Beplus
 */

import Vue from 'vue';
import App from './components/app.vue';

String.prototype.replaceArray = function(find, replace) {
    var replaceString = this;
    var regex;
    
    for (var i = 0; i < find.length; i++) {
        regex = new RegExp(find[i], "g");
        replaceString = replaceString.replace(regex, replace[i]);
    }
    return replaceString;
};

var app = new Vue({
   el: '#app',
   render: h => h(App),
})
