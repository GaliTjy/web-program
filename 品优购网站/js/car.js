$(function() {
    // 1、全选 全不选功能模块
    // 就是把全选按钮(checkall)状态赋值给三个小的按钮(j-checkbox)就可以了
    // 事件可以选用change
    $(".checkall").change(function () {
        //利用并集选择器，让小按钮和所有全选按钮的checked属性都和被点击的那个全选按钮的属性一样
        $('.j-checkbox,.checkall').prop('checked',$(this).prop('checked'))
        getSum();
        // 让所有的商品添加 check-cart-item 类名
        if($(this).prop("checked")){
            $(".cart-item").addClass('check-cart-item');
        }else{
            $(".cart-item").removeClass('check-cart-item');
        }
    });
    // 2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选
    $('.j-checkbox').change(function () {
        getSum();
        // if(被选中的小的复选框的个数 === 3) {
        //     就要选中全选按钮
        // } else {
        //     不要选中全选按钮
        // }
        // 这里用伪类选择器
        if ($('.j-checkbox:checked').length===$('.j-checkbox').length) {
            $(".checkall").prop('checked',true);
        }else {
            $(".checkall").prop('checked',false);
        }

        if($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        }else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    });
    // 3. 增减商品数量模块 首先声明一个变量，当我们点击+号（increment），
    // 就让这个值++，然后赋值给文本框。
    $('.increment').click(function () {
        var n = $(this).siblings('.itxt').val();
        n++;
        $(this).siblings('.itxt').val(n);
        // 改变该商品的金额，将n和该商品价格相乘
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        // 拿回来的价格有￥符号，需要截取字符串substr(1)
        p = p.substr(1);
        //.toFixed()可以选择保留小数的位数
        var price = (p * n).toFixed(2);

        $(this).parents('.p-num').siblings('.p-sum').html('￥'+price);
        getSum()
    })
    // 减商品做法,注意减法需要有判断条件
    $('.decrement').click(function () {
        var n = $(this).siblings('.itxt').val();
        if(n>1) {
            n--;
            $(this).siblings('.itxt').val(n);
            // 改变该商品的金额，将n和该商品价格相乘
            var p = $(this).parents('.p-num').siblings('.p-price').html();
            // 拿回来的价格有￥符号，需要截取字符串substr(1)
            p = p.substr(1);
            var price = (p * n).toFixed(2);
            $(this).parents('.p-num').siblings('.p-sum').html('￥'+price);
        }
        getSum()
    })

    //  4. 用户修改文本框的值 计算 小计模块
    $('.itxt').change(function () {
        var n = $(this).val();
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        p = p.substr(1);
        var price = (n*p).toFixed(2);
        $(this).parents('.p-num').siblings('.p-sum').html('￥'+price);
    })

    // 5. 计算总计和总额模块 商品总计amount-sum，总价price-sum
    getSum();
    function getSum() {
        var amount = 0
        var allPrice = 0
        $('.itxt').each(function (index, elem) {
            // checked选中了才计算件数结算
            if($(this).parents('.cart-item').children('.p-checkbox').children('.j-checkbox').prop('checked')===true) {
                amount += parseInt($(elem).val())
            }
        });
        $('.amount-sum em').html(amount);

        $('.p-sum').each(function (index, elem) {
            // checked选中了才结算
            if($(this).parents('.cart-item').children('.p-checkbox').children('.j-checkbox').prop('checked')===true){
                allPrice += parseFloat($(elem).html().substr(1))
            }
        })
        $('.price-sum em').html('￥' + allPrice.toFixed(2))
    }

    // 6. 删除商品模块
    // (1) 删除操作
    $(".p-action").click(function () {
        $(this).parents(".cart-item").remove();
        getSum();
        // 要加一个判断，否则删除全部商品以后全选还会选中
        if($(".cart-item").length===0) {
            $(".checkall").prop("checked",false);
        }
    })

    // (2)删除选中商品
    $(".remove-batch").click(function () {
        $(".j-checkbox").each(function (index,elem) {
            if($(this).parents('.cart-item').children('.p-checkbox').children('.j-checkbox').prop('checked')===true){
                $(this).parents(".cart-item").remove();
            }
        })
        getSum();
        // 要加一个判断，否则删除全部商品以后全选还会选中
        if($(".cart-item").length===0) {
            $(".checkall").prop("checked",false);
        }
    })

    // (3)清理购物车
    $('.clear-all').click(function () {
        $('.cart-item').remove();
        getSum();
        // 要加一个判断，否则删除全部商品以后全选还会选中
        if($(".cart-item").length===0) {
            $(".checkall").prop("checked",false);
        }
    })
})






