$(function() {
    function isLogin() {
        var $login = $("#login")
        if ($.cookie('username') === undefined) {
            $login.text("请登录 / 注册")
        } else {
            $login.text($.cookie('User_TureName'))
        }
    }
    isLogin();
})

// 回到顶部
$(function() {
    var backtoTop = $("#backtoTop")
    $(window).scroll(function() {
        var sc = $(window).scrollTop();
        if (sc > 0) {
            backtoTop.fadeIn(200)
        } else {
            backtoTop.fadeOut(200)
        }
    })

    backtoTop.on("click", function() {
        $('body,html').animate({ scrollTop: 0 }, 500);
    })
})