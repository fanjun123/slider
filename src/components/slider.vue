<template>
	<div class="tab_bar">
		<ul @click="changeTab" class="flex scroll" ref='scroll'>
			<div class='slider' :style="{left:sliderOffset+'px','width':width+'px'}"></div>
			<li v-for='item in catList' :key='item.id' :data-id='item.id' :class="{active:id==item.id}">
				{{item.name}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				sliderOffset: 10,
				id: '',
				width: '',
			}
		},
		props:{
			catList:Array
		},
		mounted() {
			this.width = 16 + this.catList[0].name.length * 12;
			this.id = this.catList[0].id
		},
		methods: {
			changeTab(e) {
				if(e.target.dataset.id != this.id) {
					this.sliderOffset = e.target.offsetLeft + 10;
					this.width = 16 + e.target.innerText.length * 12;
					this.id = e.target.dataset.id;
					this.scroll();
					this.$emit('sliderClick',e.target.dataset.id)
				}	
			},
			scroll(type) {
				var scroll = this.$refs.scroll;
				var distance = this.sliderOffset - scroll.scrollLeft;
				var scrollWidth = 0; //可滚动的最大距离
				this.catList.forEach((item, index) => {
					scrollWidth = scrollWidth + item.name.length * 16 + 26;
				})
				scrollWidth = scrollWidth - scroll.clientWidth
				var rightPoint = 260; //右滚的位置
				var leftPoint = 80; //左滚的位置
				var maxTime = 20; //最大时间
				var speed = 7; //速度		{
				if(distance > rightPoint) {
					var i = 0;
					var moveRignt = () => {
						i++;
						scroll.scrollLeft = scroll.scrollLeft + speed;
						if(scroll.scrollLeft < scrollWidth && i < maxTime) {
							window.requestAnimationFrame(moveRignt);
						}
					}
					moveRignt();
				}
				if(distance < leftPoint) {
					var j = 0;
					var moveLeft = () => {
						j++;
						scroll.scrollLeft = scroll.scrollLeft - speed;
						if(scroll.scrollLeft > 0 && j < maxTime) {
							window.requestAnimationFrame(moveLeft);
						}
					}
					moveLeft();
				}
		},
	}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}
	
	li {
		list-style: none;
	}
	/*导航栏*/
	
	.flex {
		display: flex;
	}
	
	.scroll::-webkit-scrollbar {
	display: none;
    }
	
	.tab_bar ul {
		transition: 3s all;
		white-space: nowrap;
		position: relative;
		margin-right: 10px;
		-webkit-overflow-scrolling: touch;
		overflow: scroll;
		padding: .4rem 0;
	}
	
	.tab_bar ul .slider {
		width: 0.8rem;
		position: absolute;
		top: 2.1rem;
		height: 2px;
		transition: 0.5s left;
		background-color: #fa7416;
	}
	
	.tab_bar li {
		padding: 0.1rem 0.8rem 0.2rem;
	}
	
	.tab_bar .active {
		color: #fa7416;
	}
</style>