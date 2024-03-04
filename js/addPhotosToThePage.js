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
      $(`#background-picture-${i}`).css("width", `${blockWidth / 2}px`);
      let marginLeft = (blockWidth - blockWidth / 2) / 2;
      $(`.background-picture`).css("margin-left", marginLeft);
    } else {
			$("img").css("maxWidth", "97%");
			$("img").css("maxHeight", "97%");
			$("img").css("padding-top", "5px")
      $(`.background-picture`).css("text-align", "center");
    }
  }
}
