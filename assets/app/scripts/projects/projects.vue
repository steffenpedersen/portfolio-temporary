<script>
import Vue from 'vue';

export default Vue.component('projects', {
	data() {
		return {
			checked: 'web',
		};
	},
	computed: {
		projects() {
			return this.$store.state.projects;
		},
		projectsFilter() {
			return this.projects.filter((projects) => {
				return this.checked.includes(projects.type);
			});
		},
	},
	methods: {},
	mounted() {},
});
</script>

<style src='./projects.scss'></style>
<template src='./projects.html'></template>
