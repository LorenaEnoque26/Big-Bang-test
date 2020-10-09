<template>
	<div class="container">
		<img alt="Vue logo" src="../assets/NamahConcept/imani-clovis-L1kLSwdclYQ-unsplash.svg">
		<img alt="Vue logo" src="../assets/NamahConcept/jesper-aggergaard-CEM52sAHR80-unsplash.svg">
		<img alt="Vue logo" src="../assets/NamahConcept/form-w0YIvob3LlI-unsplash.svg">
		<img alt="Vue logo" src="../assets/NamahConcept/avrielle-suleiman-GpVak9-cL6E-unsplash.svg">
		<img alt="Vue logo" src="../assets/NamahConcept/fezbot2000-smWTOhdPvJc-unsplash.svg">
		<img alt="Vue logo" src="../assets/NamahConcept/carl-barcelo-nqUHQkuVj3c-unsplash.svg">
	</div>
</template>
<script>
export default {
  name: 'NamahConcept',	
}
</script>
<style scoped lang="scss">
 .container {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 30px;
		padding-top: 30px;
		padding-bottom: 100px;
		img {
			width: 100%;
		}
 }

@media(max-width: 767px) {
	.container {
		display: grid;
		grid-template-columns:  1fr;
	}
}
</style>
