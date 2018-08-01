<template>
	<div id="index">
		<ul-slider :catList='catList' @sliderClick='changeTab'></ul-slider>
	</div>
</template>

<script>
	import slider from '../components/slider'
	export default {
		data() {
			return {
				catList: [{
					name: '菜单一',
					id: '1'
				}, {
					name: '菜单二',
					id: '2'
				}, {
					name: '菜单栏三',
					id: '3'
				}, {
					name: '第四',
					id: '4'
				}, {
					name: '菜单五',
					id: '5'
				}, {
					name: '菜单六',
					id: '6'
				}, {
					name: '菜单七',
					id: '7'
				}, {
					name: '菜单八',
					id: '8'
				}, ],
			}
		},
		components: {
			'ul-slider': slider
		},
		mounted() {

		},
		methods: {
			changeTab(id) {
				console.log(id)
			}
		}
	}
</script>

<style>

</style>