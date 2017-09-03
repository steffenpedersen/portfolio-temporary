<script>
import Vue from 'vue';
import anime from 'animejs';

export default Vue.directive('menu-open', {
	inserted(el) {
		function open() {
			const menu = document.body.getElementsByClassName('menu');
			const relativeOffset = anime.timeline();

			document.body.style.overflowY = 'hidden';

			relativeOffset
				.add({
					targets: '.menu',
					opacity: [
						{ value: '0' },
						{ value: '1' },
					],
					easing: 'easeOutQuad',
					complete() {
						menu[0].style.pointerEvents = 'auto';
					},
				})
				.add({
					targets: '.menu-top',
					translateY: [
						{ value: '-500px' },
						{ value: '0' },
					],
					opacity: [
						{ value: 0 },
						{ value: 1 },
					],
					easing: 'easeOutQuad',
					offset: '-=300',
				})
				.add({
					targets: '.menu-content',
					translateY: [
						{ value: '-500px' },
						{ value: '0' },
					],
					opacity: [
						{ value: 0 },
						{ value: 1 },
					],
					easing: 'easeOutQuad',
					offset: '-=600',
				})
				.add({
					targets: '.open-menu',
					opacity: [
						{ value: 1 },
						{ value: 0 },
					],
					easing: 'easeOutQuad',
					offset: '-=900',
				});
		}

		el.addEventListener('click', open);
	},
});

</script>
