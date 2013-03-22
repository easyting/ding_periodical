(function ($) {
  $(document).ready(function(){
    $('.field-name-ding-periodical-issues li').children('.item-list').hide();
  });

  Drupal.behaviors.ding_periodical = {
    attach: function (context, settings) {
      $('.field-name-ding-periodical-issues .ding-periodical-fold.expand').toggle(function() {
        $(this).next().show();
        $('.page-ting-object .panel-pane.pane-ting-object-ding-availability-holdings').addClass('holdings-collapsed');
        $('.page-ting-object .grid-3 .panel-pane.pane-ting-object-ding-entity-buttons').addClass('holdings-collapsed');
        $(this).next().toggleClass('expanded-periodicals');
        $(this).parent().toggleClass('expanded-periodicals-parent');
      },
      function () {
        $(this).next().hide();
        $(this).next().toggleClass('expanded-periodicals');
        $(this).parent().toggleClass('expanded-periodicals-parent');
      });


      $('.ding-periodical-issue').mouseover(function() {
        $(this).next().show();
      });

      $('.ding-periodical-issue').mouseout(function() {
        $(this).next().hide();
      });
    }
  }
}(jQuery));
