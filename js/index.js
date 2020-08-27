var ajax({
	(function(w,d){
    var page = {
        init:function(){
            this.cartCount = d.querySelector('.num-btn')
            this.loadCartsCount()
        },
        loadCartsCount:function(){
            var _this = this
            utils.ajax({
                url:'/carts/count',
                success:function(data){
                    _this.cartCount.innerHTML = data.data
                },
                error:function(status){
                    console.log(status)
                }
            })
        }
    }
    page.init()    
})(window,document);
})