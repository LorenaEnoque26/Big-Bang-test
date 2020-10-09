<template>
	<div>
		<div class="separator"><h1>{{name}}</h1></div>
    </div>
</template>
<script>
export default {
  name: 'hrComponent',
	props: ['name']
}
</script>
<style scoped lang="scss">
.separator {
  display: flex;
  align-items: center;
  text-align: center;
  h1 {
		font-family: URW Chancery L;
		font-size: 48px;
  }
}
.separator::before,
.separator::after {
  content: '';
  flex: 1;
	display: block;
	unicode-bidi: isolate;
	margin-block-start: 0.5em;
	margin-block-end: 0.5em;
	margin-inline-start: auto;
	margin-inline-end: auto;
	overflow: hidden;
	border-style: inset;
	border-width: 1px;
}
.separator::before {
  margin-right: 5px;
}
.separator::after {
  margin-left: 5px;
}

@media(max-width: 767px) {
	.separator > h1 {
		font-size: 38px;
  }
}
</style>
