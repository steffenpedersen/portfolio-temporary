<script>
import Vue from 'vue';
import anime from 'animejs';

export default Vue.directive('fade', {
	inserted(el, binding) {
		const timelineParameters = anime.timeline({
		});

		timelineParameters
			.add({
				targets: el,
				scale: [
					{ value: 0 },
					{ value: 1 },
				],
				opacity: [
					{ value: 0 },
					{ value: 1 },
				],
				duration: binding.value.duration,
				elasticity: 200,
			});
	},
});

</script>
