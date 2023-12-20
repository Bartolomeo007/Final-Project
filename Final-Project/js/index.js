// выбор элементов DOM
var $headline = $('.headline'),
    $inner = $('.inner'),
    $nav = $('nav'),
    navHeight = 75;

// обработчик события прокрутки окна
$(window).scroll(function() {
  // получение текущей позиции прокрутки
  var scrollTop = $(this).scrollTop(),
      // вычисление высоты заголовка с учетом высоты навигационной панели
      headlineHeight = $headline.outerHeight() - navHeight,
      // получение текущего смещения навигационной панели относительно верхней части страницы
      navOffset = $nav.offset().top;

  // изменение прозрачности заголовка по мере прокрутки
  $headline.css({
    'opacity': (1 - scrollTop / headlineHeight)
  });

  // изменение положения внутренних элементов по мере прокрутки
  $inner.children().css({
    'transform': 'translateY('+ scrollTop * 0.4 +'px)'
  });

  // добавление/удаление класса 'scrolled' у навигационной панели в зависимости от положения прокрутки
  if (navOffset > headlineHeight) {
    $nav.addClass('scrolled');
  } else {
    $nav.removeClass('scrolled');
  }
});
