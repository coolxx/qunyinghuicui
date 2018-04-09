$(function () {
    $('.btn_box li').each(function (index) {
        $(this).click(function () {
            $('.btn_box li').removeClass('act1').eq(index).addClass('act1');
            $('.show_box').hide().eq(index).show()
        })
    })

    // 定义弹出鼓励语数组
    var arr=[
        ['加油！你和学霸之间还差“努力”！',
            '挫折其实就是迈向成功所应缴的学费。',
            '别沮丧，学习就像心电图，一帆风顺就证明你“挂”了！',
            '向你的美好的希冀和追求撒开网吧，九百九十九次落空了，还有一千次呢......'],
        ['我们的口号是：向高分看，向更高分看！',
            '志在峰巅的攀登者，不会陶醉在沿途的某个脚印之中。',
            '学在苦中求，霸在勤中练！你是学霸，不是罢学！',
            '坚持！坚持！再坚持，高分才是硬道理！'],
        ['希冀就在前方，革命尚未成功，同志仍需努力！……',
            '三分考脑力，七分考努力，成功还需百分之九九的拼搏努力！',
            '胜不骄，败不馁，优秀只是开始，保持稳定才能胜利！',
            '在强者的眼中，没有最好，只有更好。']
    ]

    // 定义随机数函数
    function random() {
        return parseInt(Math.random()*4)
    }

    $('.btn').each(function (index) {
        $(this).click(function () {
            var scores=0;
            $(this).parents('.show_box').find('input').each(function(){
                if($(this)[0].checked){
                    scores=$(this).val()*1+scores;
                }
            })
            $('.mask').show();
            $('.result').show();
            var ind=random();
            if(scores < 60){
                var str=arr[0][ind];
                $('.result').css('backgroundImage','url("images/tk1.png")');
                $('.result b').html('得分：'+scores+'分');
                $('.result p').html(str)
            }
            if(scores >= 60 && scores <= 80){
                var str=arr[1][ind];
                $('.result').css('backgroundImage','url("images/tk2.png")');
                $('.result b').html('得分：'+scores+'分');
                $('.result p').html(str)
            }
            if(scores >= 80){
                var str=arr[2][ind];
                $('.result').css('backgroundImage','url("images/tk3.png")');
                $('.result b').html('得分：'+scores+'分');
                $('.result p').html(str)
            }
        })
    })

    $('.result em').click(function () {
        $('.result').hide();
        $('.mask').hide()
    })

    var n1=1800;
    var n2=600;
    var n3=1500;
    var n4=1800;
    var timer01;
    var timer02;
    var timer03;
    var timer04;
    function toDou(n){
        return n<10?'0'+n:''+n;
    }
    $('.show_box1 input').each(function () {
        $(this).click(function(){
            clearInterval(timer01)
            timer01=setInterval(function(){
                n1--;
                $('.timer1 p').html('倒计时<b>'+toDou(parseInt(n1/60))+' : '+toDou(n1%60)+'</b>（每题10分）');
                if(n1==0){
                    clearInterval(timer01);
                    $('.show_box1 input').attr('disabled','disabled')
                }
            },1000);
        });
    })
    $('.show_box2 input').each(function () {
        $(this).click(function(){
            clearInterval(timer02)
            timer02=setInterval(function(){
                n2--;
                $('.timer2 p').html('倒计时<b>'+toDou(parseInt(n2/60))+' : '+toDou(n2%60)+'</b>（每题10分）');
                if(n2==0){
                    clearInterval(timer02);
                    $('.show_box2 input').attr('disabled','disabled')
                }
            },1000);
        });
    })
    $('.show_box3 input').each(function () {
        $(this).click(function(){
            clearInterval(timer03)
            timer03=setInterval(function(){
                n3--;
                $('.timer3 p').html('倒计时<b>'+toDou(parseInt(n3/60))+' : '+toDou(n3%60)+'</b>（每题10分）');
                if(n3==0){
                    clearInterval(timer03);
                    $('.show_box3 input').attr('disabled','disabled')
                }
            },1000);
        });
    })
    $('.show_box4 input').each(function () {
        $(this).click(function(){
            clearInterval(timer04)
            timer04=setInterval(function(){
                n4--;
                $('.timer4 p').html('倒计时<b>'+toDou(parseInt(n4/60))+' : '+toDou(n4%60)+'</b>（每题10分）')
                if(n4==0){
                    clearInterval(timer04);
                    $('.show_box4 input').attr('disabled','disabled')
                }
            },1000);
        });
    })

    $('.btn2_box li').each(function (index) {
        $(this).click(function () {
            $('.btn2_box li').removeClass('act2').eq(index).addClass('act2');
            if(index==0){
                $('.show2_box').css({
                    'height':'3.13rem',
                    'backgroundImage':'url("images/m12.png")'
                }).hide().eq(0).show()
            }
            if(index==1){
                $('.show2_box').css({
                    'height':'5.44rem',
                    'backgroundImage':'url("images/m13.png")'
                }).hide().eq(1).show()
            }
            if(index==2){
                $('.show2_box').css({
                    'height':'7.78rem',
                    'backgroundImage':'url("images/m14.png")'
                }).hide().eq(2).show()
            }
            if(index==3){
                $('.show2_box').css({
                    'height':'3.13rem',
                    'backgroundImage':'url("images/m12.png")'
                }).hide().eq(3).show()
            }
        })
    })

})