Vue.component('olde-link', {
	props: ['link'],
	template: '<a href>{{link}}</a>',
})
const app = new Vue({
	el: '#app',
	data: {
		portfolio: {
			aparadise: '//aparadi.se',
			eightcell: '//wommytilliams.com/8c',
		},
		contact: {
			email: "mailto:froggie92@gmail.com?Subject=Job | WommyTilliams.com",
			phone: "tel:+13128189011",
		},
		socialmedia: {
			facebook: "//facebook.com/Froggie92",
			twitter: "//twitter.com/Froggie92",
			instagram: "//instagram.com/wommytilliams",
			googlePlus: "//plus.google.com/118102255716845472363/",
			reddit: "//reddit.com/user/Froggie92/",
		}
	}
})