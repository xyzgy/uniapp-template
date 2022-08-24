export default {
	data() {
		return {
			loadStatus: '',
			queryParams: {
				page: 1,
				page_size: 10
			},
			list:[],
			req:null
		}
	},
	methods: { 
		initList() {
			this.loadStatus = '';
			this.queryParams = {
				page: 1,
				page_size: 10
			};
			this.list = [];
		},
		getList(){
			const {
				loadStatus
			} = this;
			if (['loading', 'nomore', 'nodata'].includes(loadStatus)) {
				uni.stopPullDownRefresh()
				return;
			}
			this.loadStatus = 'loading';
			this.req(this.queryParams, {
				loading: true
			}).then(res => {
				uni.stopPullDownRefresh()
				this.list = this.list.concat(res.list);
				this.queryParams.page++;
				this.loadStatus = this.$listLoadStatus(res.pager)
			}).catch(err => {
				uni.stopPullDownRefresh()
				this.$u.toast(err.data.msg)
			})
		}
	},
	onReachBottom() {
		this.getList()
	}
}
