<script>
import Vue from 'vue';
import anime from 'animejs';

export default Vue.directive('fade-in', {
	inserted(el, binding) {
		const timelineParameters = anime.timeline({
		});

		setTimeout(() => {
			timelineParameters
				.add({
					targets: el,
					translateY: [
						{ value: -500 },
						{ value: 0 },
					],
					opacity: [
						{ value: 0 },
						{ value: 1 },
					],
					duration: binding.value.duration,
					elasticity: 400,
				});
		}, 1500);
	},
});

</script>
