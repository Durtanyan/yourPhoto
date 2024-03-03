export function addPhotosToThePage (photosForThePage) {
	for (let i = 0; i < photosForThePage.length; i++) {
		$("#root-block")
			.append(`<div class='background-picture' id=background-picture-${i}></div>`);
		let blockWidth = document.documentElement.clientWidth;
		let blockHeight = document.documentElement.clientHeight;
		let imageUrl;
		if (blockWidth > blockHeight) {
			imageUrl = photosForThePage[i];
			console.log(imageUrl);
			$(`#background-picture-${i}`).css("background-image", `url(${imageUrl})`);
			$(`#background-picture-${i}`).css("height", `${blockHeight}px`);
			$(`#background-picture-${i}`).css("width", `${blockWidth / 2}px`);
			let marginLeft = (blockWidth - (blockWidth / 2)) / 2;
			$(`.background-picture`).css("margin-left", marginLeft);
		} else {
			imageUrl = photosForThePage[i];
			$(`#background-picture-${i}`).css("background-image", `url(${imageUrl})`);
			$(`#background-picture-${i}`).css("width", `${blockWidth}px`);
			$(`#background-picture-${i}`).css("height", `${blockHeight}px`);
		}
	}
}