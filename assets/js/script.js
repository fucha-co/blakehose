/*
Title: Main Scripts
Theme Name: Ashoka
Author Name: GeeksLabs
Author URI: http://themeforest.net/user/geekslabs
Website: http://geekslabs.com
*/

$(function(){
    "use strict";

    /* Instagram feed
    * For more help got to : http://instafeedjs.com/
    */
    var feed = new Instafeed({
      get: 'user',
      resolution :'standard_resolution', //thumbnail (default) - 150x150, low_resolution - 306x306, standard_resolution - 612x612
      limit:'12', //Maximum number of Images to add. Max of 60.
      userId: 14820291, //Get the user id
      accessToken: '184828764.467ede5.483357e68f06431aa09811cdf315f8ce', //Generate access token http://jelled.com/instagram/access-token
      template: '<div class="col-lg-6"><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title"><span class="icon icon-location-pin"> </span> {{location}} <span class="icon icon-heart"></span> <span class="instagram-likes">{{likes}}</span> <span class="icon icon-typing"></span> <span class="instagram-likes">{{comments}}</span></h3></div><div class="panel-body"><img class="" src="{{image}}" width="100%"></div></div></div>',

      //filter by tag if you want :)

       /*filter: function(image) {
         return image.tags.indexOf('valentinesday') >= 0;
       }*/

    });
    feed.run();

});