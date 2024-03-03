$("body").append('<div id="root-block"></div>');

function addMenuToPage() {
  $("#root-block").append(`<nav>
<div class="menu-burger__header"><span></span></div>
<ul class="topmenu">
	<li><a href="../index.html">Главная</a></li>
	<li><a href="" class="down">Работы</a>
		<ul class="submenu">
			<li><a href="../html/portrait.html">Портретное фото</a></li>
			<li><a href="../html/studio.html">Студийное фото</a></li>
			<li><a href="../html/baby.html">Детское фото</a></li>
			<li><a href="../html/reportage.html">Репортажное фото</a></li>
			<li><a href="../html/underwater.html">Подводное фото</a></li>
			<li><a href="../html/blackWhite.html">Черно-белое фото</a></li>
			<li><a href="../html/nude.html">Ню...</a></li>
		</ul>
	</li>
	<li><a href="../html/about.html">Обо мне</a></li>
	<li><a href="../html/contacts.html">Контакты</a></li>
</ul>
</nav>`);
}

addMenuToPage();
