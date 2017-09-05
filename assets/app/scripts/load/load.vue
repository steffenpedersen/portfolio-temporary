<script>
import Vue from 'vue';
import anime from 'animejs';

export default Vue.directive('load', {
	inserted(el) {
		const timelineParameters = anime.timeline({
		});

		const timelineSVG = anime.timeline({
		});

		function dist(x1, x2, y1, y2) {
			return Math.sqrt((x2 -= x1) * x2 + (y2 -= y1) * y2);
		}

		function setDashoffset(elm) {
			const isLine = elm instanceof SVGLineElement;
			const pathLength = isLine ? dist(elm.x1.baseVal.value, elm.x2.baseVal.value, elm.y1.baseVal.value, elm.y2.baseVal.value) : elm.getTotalLength();
			elm.setAttribute('stroke-dasharray', pathLength);
			return pathLength;
		}

		setTimeout(() => {
			timelineParameters
			.add({
				targets: el,
				opacity: [
					{ value: 1 },
					{ value: 0 },
				],
				easing: 'easeOutQuad',
				complete() {
					el.style.pointerEvents = 'none';
					el.style.display = 'none';
				},
			});
		}, 1150);

		timelineSVG
		.add({
			targets: 'svg',
			opacity: [
				{ value: 0 },
				{ value: 1 },
			],
			easing: 'easeOutQuad',
		})
		.add({
			targets: 'svg line',
			strokeDashoffset: [setDashoffset, 0],
			easing: 'easeInOutSine',
			duration: 600,
			offset: '-=800',
			delay(element, i) {
				return i * 150;
			},
		})
		.add({
			targets: 'svg path',
			opacity: [
				{ value: 0 },
				{ value: 1 },
			],
			easing: 'easeOutQuad',
			offset: '-=400',
		});
		// .add({
		// 	targets: 'svg',
		// 	opacity: [
		// 		{ value: 1 },
		// 		{ value: 0 },
		// 	],
		// 	easing: 'easeOutQuad',
		// 	offset: '-=400',
		// });
	},
});

</script>
