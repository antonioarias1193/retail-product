document.addEventListener("DOMContentLoaded", function () {
	let parallaxContainer = document.querySelector(".parallax-container");
	let parallaxText = document.querySelector(".parallax-text");

	window.addEventListener("scroll", function () {
		let scrollPosition = window.scrollY;
		let stopTransformAt = 800;

		if (scrollPosition <= stopTransformAt) {
			// Opacity background dan teks ketika scroll bawah
			let opacity_out =
				1.9 - scrollPosition / (parallaxContainer.offsetHeight / 2);
			let opacity_in =
				-1 + scrollPosition / (parallaxContainer.offsetHeight / 2);

			parallaxContainer.style.opacity = opacity_out > 0 ? opacity_out : 0;
			parallaxText.style.opacity = opacity_in > 0 ? opacity_in : 0;

			// Transform teks bergerak keatas, ketika scroll bawah
			let translateY = scrollPosition / 6;
			parallaxText.style.transform =
				"translate(-50%, calc(50% - " + translateY + "px))";
		}
		// teks menjadi relative
		let positionfixed = scrollPosition / 2;
		parallaxContainer.style.display = positionfixed > 340 ? "none" : "block";
		parallaxText.style.position = positionfixed > 340 ? "relative" : "fixed";
	});

	// =============================== Randomize Text Color =================================
	function randomElementFromArray(array) {
		const shuffledArray = shuffleArray(array); // Menggunakan fungsi shuffleArray sebelumnya
		const randomIndex = Math.floor(Math.random() * shuffledArray.length);
		return shuffledArray[randomIndex];
	}

	// Fungsi untuk mengacak array (Fisher-Yates shuffle)
	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]]; // Menukar elemen
		}
		return array;
	}

	// Contoh penggunaan
	const myArray = ["#b2a4ff", "#c0dbea", "#ffdeb4", "#fdf7c3", "#aec2b6"];
	const randomElement = randomElementFromArray(myArray);
	console.log(randomElement); // Output: satu elemen acak dari array

	const randomColor = document.querySelector(".parallax-text");
	randomColor.style.color = randomElement;
	// =============================== Randomize Text Color =================================
});
