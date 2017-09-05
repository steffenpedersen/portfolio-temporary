<script>
import Vue from 'vue';
// import anime from 'animejs';
import { TweenMax, Cubic } from 'gsap/TweenMax';

export default Vue.component('scroll-items', {
	props: ['targetId'],
	data() {
		return {
			target: this.targetId,
			elementId: null,
		};
	},
	methods: {
		smooth() {
			const scrollObj = {
				scrollY: window.pageYOffset,
			};
			const element = document.getElementById(this.targetId);
			const target = element.getBoundingClientRect().top + scrollObj.scrollY;


			// anime({
			// 	targets: target,
			// 	easing: 'easeInCubic',
			// 	update() {
			// 		window.scrollTo(0, scrollObj.scrollY);
			// 	},
			// });
			TweenMax.to(scrollObj, 1, {
				scrollY: target,
				ease: Cubic.easeIn,
				onUpdate() {
					window.scrollTo(0, scrollObj.scrollY);
				},
			});
		},
	},
});
</script>

<style src='./scroll-items.scss'></style>
<template src='./scroll-items.html'></template>
