const pathsToBackgroundPhotosVertical = [];
pathsToBackgroundPhotosVertical.push(
  "../img/verticalWindow/portrait-photo.jpg"
);
pathsToBackgroundPhotosVertical.push("../img/verticalWindow/studio-photo.jpg");
pathsToBackgroundPhotosVertical.push("../img/verticalWindow/baby-photo.jpg");
pathsToBackgroundPhotosVertical.push(
  "../img/verticalWindow/reportage-photo.jpg"
);
pathsToBackgroundPhotosVertical.push(
  "../img/verticalWindow/underwater-photo.jpg"
);
pathsToBackgroundPhotosVertical.push(
  "../img/verticalWindow/black-and-white-photo.jpg"
);
pathsToBackgroundPhotosVertical.push("../img/verticalWindow/nude-photo.jpg");

const namePages = [];
namePages.push("Портретное фото");
namePages.push("Студийное фото");
namePages.push("Детское фото");
namePages.push("Репортажное фото");
namePages.push("Подводное фото");
namePages.push("Черно-белое фото");
namePages.push("Ню...");

const linksPages = [];
linksPages.push("../html/portrait.html");
linksPages.push("../html/studio.html");
linksPages.push("../html/baby.html");
linksPages.push("../html/reportage.html");
linksPages.push("../html/underwater.html");
linksPages.push("../html/blackWhite.html");
linksPages.push("../html/nude.html");

$("body").append('<div id="root-block"></div>');

function addMenuToPage() {
  $("#root-block").append(`<nav>
<div class="menu-burger__header"><span></span></div>
<ul class="topmenu">
	<li><a href="">Главная</a></li>
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
for (let i = 0; i < pathsToBackgroundPhotosVertical.length; i++) {
  $("#root-block")
    .append(`<div class='background-picture' id=background-picture-${i}>
	<a class='page-title' href=${linksPages[i]}><p class='page-title'>${namePages[i]}</p></a></>`);
  $(".page-title").css({
    "font-size": "40px",
    "font-family": "Bad Script",
    "font-weight": "bold",
    "padding-left": "20px",
    color: "white",
  });
  let blockWidth = document.documentElement.clientWidth;
  let blockHeight = document.documentElement.clientHeight;
  let imageUrl;
  if (blockWidth > blockHeight) {
    imageUrl = pathsToBackgroundPhotosVertical[i];
    $(`#background-picture-${i}`).css({
      "background-image": `url(${imageUrl})`,
			"margin-top": "5px",
    });
    $(`#background-picture-${i}`).css("height", `${blockHeight}px`);
    $(`#background-picture-${i}`).css("width", `${blockWidth / 2}px`);
    let marginLeft = (blockWidth - blockWidth / 2) / 2;
    $(`.background-picture`).css("margin-left", marginLeft);
  } else {
    imageUrl = pathsToBackgroundPhotosVertical[i];
    $(`#background-picture-${i}`).css("background-image", `url(${imageUrl})`);
    $(`#background-picture-${i}`).css("width", `${blockWidth}px`);
    $(`#background-picture-${i}`).css("height", `${blockHeight}px`);
  }
}
