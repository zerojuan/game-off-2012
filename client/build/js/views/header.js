define("HeaderView",["jquery","underscore","backbone","text!templates/header.html"],function(e,t,n,r){var i;return i=n.View.extend({initialize:function(){var n;this.template=t.template(r),e("body").ajaxStart(function(){n=n||e(".ajax-loader"),n.show()}).ajaxStop(function(){n.fadeOut("fast")})},render:function(){var t=this,n;return n=t.template(),e(t.el).html(n),this}}),i});