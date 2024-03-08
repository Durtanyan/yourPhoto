$("body").append(`<div class="content-block"></div>`);
$(".content-block").append('<div id="content-block"></div>');
$(".content-block").css({
  "justify-content": "center",
  display: "flex",
  "align-items": "center",
  padding: "5px",
});

let contentBlock = $("#content-block");
contentBlock.css({ color: "white", padding: "5px" });
contentBlock.append(`<div><h1>Приветствую вас!</h1> 
<h2>Меня зовут <span class="name">Ольга Лукина</span> и я ваш фотограф!</h2> 
<p><strong>Для вас :</strong></p>
<ul type="square">
<li>Индивидуальная съёмка</li>
<li>Праздничная</li> 
<li>Тематическая</li> 
<li>Парная</li> 
<li>Детская</li> 
<li>Предметная</li>
<li>Репортажная</li> 
<li>Ню</li> 
</ul>
<p><strong>📍Прогулочная/студийная/домашняя/ с выездом</strong></p> 
<ul type="square">
<li>помогу выбрать фотостудию и место</li>
<li>готова воплотить все задумки</li>
<li>индивидуальный подход</li>
</ul> 
<p><strong>Фото на следующий день после съёмки.</strong></p>
<p><strong>Опыт работы 4 года.</strong></p> 
<h4>⭐ Вошла в топ 10 лучших фотографов г. Щелково в 2022 г.</h4>
<p><strong>Курсы:</strong></p>
<ul type="square">
<li>WhitePhotoSckool «Основы фотографии.»</li>
<li>Фотошкола Dnk,  «Фотография мечты»</li>
<li>Puzzle brain, «Портретная фотосъемка»</li>
<li>Школа креативной фотографии Маргариты Каревой,  «ФотоStar»</li>
<li>Санкт - Петербургская школа телевидения "Визажист - стилист" </li>
<li>Всероссийский  заочный фото- видео конкурс «Видеоталант»,
диплом победителя (3 место) в номинации «Видеоклип», работа «Память»</li></div>`);
$("h1").css({ "font-size": "40px" });
$("h2").css({ "font-size": "30px" });
$("h3").css({ "font-size": "30px" });
$("h4").css({ "font-size": "30px" });
$("strong").css({ "font-size": "20px" });
$("li").css({ "font-size": "20px", "font-family": "Bad Script", "font-weight": "bold" });
