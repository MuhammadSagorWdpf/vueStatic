<template>
	<footer class="footer">
		{{ footerText }}
	</footer>
</template>

<script>
	import { inject } from "vue";
	export default {
		name: "AppFooter",
		setup(){
			const footerText = inject("footerText");
			return { footerText };
		},
	};
</script>

<style>
	.footer
	{		
		padding: 1em;
		text-align: center;
		background-color: #f8f9fa;
		color: #000;
		font-size: 0.9em;
		border-top: 1px solid #e7e7e7;
		position: sticky;
		bottom: 0;
		width: 100%;
	}
</style>