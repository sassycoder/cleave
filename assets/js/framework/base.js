'use strict';

/***** DETECT IF USING iOS5 THEN FIX ORIENTATION BUG *****/
$(function () {
    if (navigator.userAgent.match(/iPad/i)) {

        var iOSVersion = function () {
            if (/iP(hone|od|ad)/.test(navigator.appVersion)) {
                // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
                var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
            }
        },

            ver = iOSVersion(),

            viewportmeta = document.querySelector('meta[name="viewport"]');

        if (ver[0] === 5) {
            if (viewportmeta) {
                viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
                jQuery(document).ready(function () {
                    document.body.addEventListener('gesturestart', function () {
                        viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
                    }, false);
                });
            }
        }
    }
});


/*********************************************************************************/
/*****   GRIDS                                                     ************/
/*******************************************************************************/

$(function () {
  var body = $('body'),
      html = $('html');

  //toggle grid
  $(document).on( 'click', '.toggle-grid', function(e) {
    e.preventDefault();
    $(body).toggleClass('framework');
  });
});

$(function (){
    //remove touch delay on touch devices
    var attachFastClick = Origami.fastclick;
        attachFastClick(document.body);
});