$(function () {
  var $menu = $('#menu');
  var $menuCancelButton = $('#menu-cancel');
  var $openButton = $('#open-menu');
  var $button = $('a.menu__button');

  function toggle () {
    if ($menu.hasClass('menu--active')) {
      $menu.removeClass('menu--active');
      $openButton.attr('aria-expanded', false);
      $openButton.focus();
      return;
    }

    $menu.focus();
    $menu.addClass('menu--active');
    $openButton.attr('aria-expanded', true);
  }

  $openButton.on('click', function (e) {
    e.preventDefault();
    toggle();
  });

  $button.on('click', function (e) {
    toggle();
  });

  $menuCancelButton.on('click', function (e) {
    e.preventDefault();
    toggle();
  })
})
