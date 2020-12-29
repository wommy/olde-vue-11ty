<template>
	<body>
		<aside-olde/>
		{{ content }}
	</body>
</template>
<script>
import asideOlde from "./aside-olde.vue"
export default {
	data: {
		layout: "_layout.html"
	},
	components: {
		asideOlde
	}
}
</script>