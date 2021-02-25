$(document).ready(function () {
  test();
});

function test(){

    (function($) {
        $.Lazy('av', ['audio', 'video'], function(element, response) {
            // this plugin will automatically handle '<audio>' and '<video> elements,
            // even when no 'data-loader' attribute was set on the elements
        });
    })(window.jQuery || window.Zepto);
}