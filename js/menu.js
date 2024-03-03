$(document).ready(function () {
  let target = `<div class='burger-menu'>
	<dl class="">
	<dt><a href="../index.html">Главная</a></dt>
	<dt><a href="" class="down">Работы &#8659</a>
			<dd class='burger-submenu'><a href="../html/portrait.html">Портретное фото</a></dd>
			<dd class='burger-submenu'><a href="../html/studio.html">Студийное фото</a></dd>
			<dd class='burger-submenu'><a href="../html/baby.html">Детское фото</a></dd>
			<dd class='burger-submenu'><a href="../html/reportage.html">Репортажное фото</a></dd>
			<dd class='burger-submenu'><a href="../html/underwater.html">Подводное фото</a></dd>
			<dd class='burger-submenu'><a href="../html/blackWhite.html">Черно-белое фото</a></dd>
			<dd class='burger-submenu'><a href="../html/nude.html">Ню...</a></dd>
	</dt>
	<dt><a href="../html/about.html">Обо мне</a></dt>
	<dt><a href="../html/contacts.html">Контакты</a></dt>
	</dl>
	</div>`;

  $("nav").append(target);
	$('.burger-menu').hide();
	$('.burger-submenu').hide();

  $(".menu-burger__header").click(function () {
    $(".menu-burger__header").toggleClass("open-menu");
	$('.burger-menu').fadeToggle(2000);
    let navHeight = $("nav").height();
    let blockHeight = document.documentElement.clientHeight;
    if (navHeight !== blockHeight) {
      $("nav").animate(
        {
          height: blockHeight,
        },
        1000
      );
    } else {
      $("nav").animate(
        {
          height: 45,
        },
        1000
      );
    }
  });

	$('.down').click(function (e) { 
		e.preventDefault();
		$('.burger-submenu').slideToggle(1000);
		
	});
});
