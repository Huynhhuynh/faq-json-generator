/**
 * @package FAQ Json Generator
 *
 * @since 1.0.0
 * @author Beplus
 */

import Vue from 'vue';
import App from './components/app.vue';
import './shortcode.js';

window.url_params = '?utm_source=google&utm_medium=organic&utm_campaign=faq-schema';

String.prototype.replaceArray = function(find, replace) {
    var replaceString = this;
    var regex;

    for (var i = 0; i < find.length; i++) {
        regex = new RegExp(find[i], "g");
        replaceString = replaceString.replace(regex, replace[i]);
    }
    return replaceString;
};

Vue.directive( 'shortcode', {
    inserted: function( el, binding, vnode ) {
        var value = JSON.stringify( binding.value, null, 4 ).replaceArray(
            ["<", ">"],
            ["&lt;", "&gt;"]
        );

        el.innerHTML = `&lt;script type="application/ld+json"&gt;${ value }&lt;/script&gt;`;
    },
    bind: function( el, binding, vnode ) {

    },
    update: function( el, binding, vnode ) {
        var value = JSON.stringify( binding.value, null, 4 ).replaceArray(
            ["<", ">"],
            ["&lt;", "&gt;"]
        );

        el.innerHTML = `&lt;script type="application/ld+json"&gt;${ value }&lt;/script&gt;`;

        new window.Shortcode( el, {
            'click': function() {
                var args = Object.assign( {
                    url: '',
                    text: 'Click Here',
                }, ( this.options ) ? this.options : {} );

                return ( args.url ) ? `&lt;a href=${ args.url + url_params }&gt;${ args.text }&lt;/a&gt;` : '';
            }
        } )
    }
} )

var app = new Vue({
   el: '#app',
   render: h => h(App),
})
