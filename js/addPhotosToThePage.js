export function addPhotosToThePage(photosForThePage) {
  for (let i = 0; i < photosForThePage.length; i++) {
    let imageUrl = photosForThePage[i];
    $("#root-block")
      .append(`<div class='background-picture' id=background-picture-${i}>
			<img src=${imageUrl} id=img-${i}>
			</div>`);
    let blockWidth = document.documentElement.clientWidth;
    let blockHeight = document.documentElement.clientHeight;
    if (blockWidth > blockHeight) {
      $("img").css("maxWidth", "100%");
      $("img").css("maxHeight", "100%");
      $(`.background-picture`).css("display", "flex");
      $(`.background-picture`).css("justify-content", "center");
      $(`.background-picture`).css("align-items", "center");
      $(`#background-picture-${i}`).css("height", `${blockHeight}px`);
      $(`#background-picture-${i}`).css({
        width: `${blockWidth / 2}px`,
      });
      let marginLeft = (blockWidth - blockWidth / 2) / 2;
      $(`.background-picture`).css("margin-left", marginLeft);
    } else {
      $("img").css("maxWidth", "100%");
      $("img").css("maxHeight", "100%");
      $(`.background-picture`).css("text-align", "center");
    }
  }
  $(`.background-picture`).css({
    "margin-top": "5px",
  });
}

export function theStubPage() {
  $("#root-block").append(`<div class="the-stub-page"></div>`);
  $(".the-stub-page").append(
    `<div>
      <button class="button-the-stub-page yes">Мне уже есть 18 лет.</button>
      <button class="button-the-stub-page no">Мне еще нет 18 лет.</button>
    </div>`
  );
  let blockWidth = document.documentElement.clientWidth;
  let blockHeight = document.documentElement.clientHeight;
  $(".the-stub-page").css({
    height: `${blockHeight}px`,
    width: `${blockWidth}px`,
  });
  $(`.the-stub-page`).css("text-align", "center");
  $(`.button-the-stub-page`).css({
    width: "200px",
    height: "100px",
    "background-color": "red",
    "font-size": "20px",
    color: "white",
    border: "5px solid white",
    margin: "10% 10% 0% 10%",
    "border-radius": "5%",
  });
}
