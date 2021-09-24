//custom selectbox
(function ($) {
    $(document).ready(function () {

        ////메인
        //GNB 메뉴 열기
        setFunction(".left-gnb .gnb", 'click', function () {
            var subwrap = $(this).parents('.left-gnb');
            if (subwrap.hasClass("active")) {
                $(this).parents('.left-gnb').removeClass('active');
            } else {
                $(this).parents('.left-gnb').addClass('active');
            }
        });
        //GNB 메뉴 닫기
        setFunction(".left-gnb .close-btn", 'click', function () {
            $(this).parents('.left-gnb').removeClass('active');
        });

        //우측하단 고정버튼
        setFunction("#rightViewBtn", 'click', function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
                $(this).next().find('li').removeClass('appear');
            }

            else {
                $(this).addClass('active');
                $(this).next().find('li').addClass('appear');
            }
        });


        //header 프로필  
        setFunction(".header .myinfo img", 'click', function () {
            $(this).parent().toggleClass("active");    
            showpanel(); /*20201222*/
        });
        setFunction(".header .myinfo .sub-menu li", 'click', function () {            
            $(this).parent().parent().removeClass("active");
            $(this).not().removeClass("active");                 
        });

        //header 더보기
        setFunction(".header .view-menu", 'click', function () {
            debugger;
            $(this).toggleClass("active");
            showpanel(); /*20201222*/
        });
        setFunction(".header .view-menu .sub-menu li", 'click', function () {            
            $(this).parent().parent().removeClass("active");  
            $(this).not().removeClass("active"); 
        });

        // TOP버튼 상단으로가기
        setFunction("#topBtn", 'click', function () {
            $('html, body').animate({ scrollTop: 0 }, 400);
            return false;
        });

        //selectbox 드롭다운
        setFunction(".select-box > a", 'click', function () {
            $(".select-box > a").not(this).nextAll('ul:visible').hide();
            $(".select-box > a").not(this).removeClass("on");

            $(".etc_box .tit").nextAll('ul:visible').hide();
            $(".etc_box .tit").removeClass("on");
            if ($(this).next('ul')[0].childNodes.length != 0) {/*20201221*/
                $(this).next('ul').toggle();
                $(this).toggleClass("on");
            }
        });
        setFunction(".select-box ul li", 'click', function () {
            $(this).parent().hide().parent(".select-box").children("a").text($(this).text());
            $(this).parent().siblings('a').removeClass("on");
        });

        /* 정렬 */
        setFunction(".valign", 'click', function () {
            $(this).toggleClass("on");
        });

        /* 기타 */
        setFunction(".etc_box .tit", 'click', function () {
            $(".select-box > a").nextAll('ul:visible').hide();
            $(".select-box > a").removeClass("on");

            $(".etc_box .tit").not(this).nextAll('ul:visible').hide();
            $(".etc_box .tit").not(this).removeClass("on");

            $(this).next('ul').toggle();
            $(this).toggleClass("on");
        });

        /* 검색 설정 */
        setFunction(".icon.searchmark", 'click', function () {
            $(".select-box > a").nextAll('ul:visible').hide();
            $(".select-box > a").removeClass("on");

            $(".etc_box .tit").nextAll('ul:visible').hide();
            $(".etc_box .tit").removeClass("on");

            $(this).toggleClass("on");
            $(".lyp_search_wrap").toggle();
        });

        /* 알람 필터 */
        setFunction("#notFillterPopBtn", 'click', function () {
            $("#notFillterPop").toggle();
        });

        /* 참조 */
        setFunction(".icon.reference.send", 'click', function () {
            $(this).toggleClass("on");
            $(".hidden_Reference").toggle();
        });

        /* 첨부 */
        setFunction(".icon.reference.file", 'click', function () {
            $(this).toggleClass("on");
            $(".hidden_file").toggle();
        });

        /* 주소록 즐겨찾기 */
        setFunction(".icon_drop", 'click', function () {
            $(".icon_drop").not(this).children(".icon_drop_list").hide();
            $(".icon_drop").not(this).removeClass("on");

            $(".icon_drop_list03").hide();
            $(".icon_drop03").removeClass("on");


            $(this).toggleClass("on");
            $(this).children(".icon_drop_list").toggle();
        });

        /* 주소록 즐겨찾기 01 */
        setFunction(".icon_drop01", 'click', function () {
            $(this).toggleClass("on");
            $(".icon_drop_list01").toggle();
        });

        /* 주소록 즐겨찾기 02 */
        setFunction(".icon_drop02", 'click', function () {
            $(this).toggleClass("on");
            $(".icon_drop_list02").toggle();
        });

        /* 템플릿설정 */
        setFunction(".icon_drop03", 'click', function () {
            $(".icon_drop").children(".icon_drop_list").hide();
            $(".icon_drop").removeClass("on");

            $(this).toggleClass("on");
            $(".icon_drop_list03").toggle();
        });

        slide();

        /* 텍스트배너 */
        setFunction(".arrow_btn .arrow", 'click', function () {
            var ih = $(this).index() == 0 ? -130 : 130;
            var obj = $('.txt-banner-box .list-wrap');
            obj.animate({ scrollTop: obj.scrollTop() + ih });
        });

        //20201222
        /* 사진 */
        setFunction(".icon.reference.photo", 'click', function () {
            $(this).toggleClass("on");
            $(".hidden_photo").toggle();
        });

        /* 주소록 */
        setFunction(".album_box li label", 'click', function () {
            $(this).toggleClass("on");
        });

        /* 예약 상황 조회*/
        setFunction(".bar_wrap", 'hover', function () {
            $(".tooltip", this).stop().slideDown("fast");
        },
            function () {
                $(".tooltip", this).stop().slideUp("fast");
            });

        /* 만료일 */
        setFunction(".expiration_tab li a", 'click', function () {
            $(this).parent().addClass("on");
            $(this).parent().siblings().removeClass("on");
            $(".user_input").hide();
        });

        /* 만료일 사용자 지정 */
        setFunction(".expiration_tab li.user_specify", 'click', function () {
            $(".user_input").show();
        });

        /* 주소록 */
        setFunction(".good_link a", 'click', function () {
            $(this).toggleClass("on");
        });

        /* 결제 탭1 파일 */
        setFunction(".payment_conts.payment01 .icon_box", 'click', function () {
            $(".payment_conts.payment01 .file_wrap").toggle();
        });

        /* 결제 탭2 파일 */
        setFunction(".payment_conts.payment02 .icon_box", 'click', function () {
            $(".payment_conts.payment02 .file_wrap").toggle();
        });

        /* 결제 정보 수정 */
        setFunction(".tab_box ul li a", 'click', function () {
            $(".tab_box ul li a").removeClass("on");
            $(this).addClass("on");
            $(".tab_box .tab_conts").hide();
            $($(this).attr("href")).show();
            return false;
        });

        /* 포탈 탭 */
        setFunction(".change_box li > p", 'click', function () {
            $(this).parent().addClass("on");
            $(this).parent().siblings().removeClass("on");
        });

        /* 포탈 */
        setFunction(".portlet_in li .tit", 'click', function (e) {
            $(e.target).closest("li").toggleClass("on");
            $(this).next().slideDown(200).parent().siblings().children(".subinfo").hide();
            $(this).parent().siblings().removeClass("on");
        });
        /* 포탈 리스트 이미지 */
        //setFunction(".subinfo li .img", 'click', function () {
        //    $(this).toggleClass("active");
        //});

        /* 포틀릿 배너 */
        setFunction(".img_banner_box", 'click', function () {
            $(this).toggleClass("on");
        });

        //20201222

        //최근알림 필터 레이어 팝업
        setFunction("#notFillterPopBtn", 'click', function (e) {
            e.preventDefault();
            $("#notFillterPop").fadeIn(400);
        });
        setFunction("#notFillterPop .cancel", 'click', function (e) {
            e.preventDefault();
            $("#notFillterPop").fadeOut(400);
        });

        //최근알림 글쓰기 레이어 팝업
        setFunction("#notWritePopBtn", 'click', function (e) {
            console.log(1);
            e.preventDefault();
            $("#notWritePop").fadeIn(400);
        });
        setFunction("#notWritePop .cancel", 'click', function (e) {
            e.preventDefault();
            $("#notWritePop").fadeOut(400);
        });

        // 슬라이드 
        function slide() {
            var wid = 0;
            var now_num = 0;
            var slide_length = 0;
            var $pagenationli = $('.pagenation>li');
            var $item = $('.item');

            // 변수 초기화
            function init() {
                wid = $('.cont-box').width();
                now_num = $('.pagenation>li.on').index();
                slide_length = $pagenationli.length;
            }

            // 이벤트 묶음
            function slideEvent() {
                $('.item .slide-box').css('width', wid);
                // 슬라이드 하단 pagenation버튼 클릭했을때
                $pagenationli.click(function () {
                    now_num = $(this).index();
                    $item = $(this).parent().prev('.item');
                    slideMove();
                });

                // 화면크기 재설정 되었을때
                resize();
            }

            // 슬라이드 무브
            function slideMove() {
                $item.stop().animate({
                    'margin-left': -wid * now_num
                });
                //$pagenationli.removeClass('on'); //20201221
                //$pagenationli.eq(now_num).addClass('on'); //20201221
            }

            // 화면크기 조정시 화면 재설정
            function resize() {
                $(window).resize(function () {
                    init();
                    $item.css({
                        'margin-left': -wid * now_num
                    });
                });
            }
            init();
            slideEvent();
        }

        // 커스텀 스크롤
        $(".scrollbar-outer, .scrollbar-inner").not('.scroll-wrapper, .scroll-content').each(function () {
            if (!$(this).prop('scroll_enable')) {
                $(this).scrollbar();
                $(this).prop('scroll_enable', true);
            }
        });

    });

    // onclick 관련 함수
    function setFunction(selector, listener, func) {
        $(selector).each(function () {
            if (!$(this).prop('listener_enable')) {
                $(this).on(listener, func);
                $(this).prop('listener_enable', true);
            }
        });
    }

    //시계
    window.onload = function () {
        if (document.getElementsByTagName("clock_id").length > 0) {
            draw_clock();
            yourClock();
        }
    }

    function draw_clock() {
        canvas = Raphael("clock_id", 140, 140);
        hour_hand = canvas.path("M70 70L70 30");
        hour_hand.attr({ stroke: "#000", "stroke-width": 2.5 });
        minute_hand = canvas.path("M70 70L70 23");
        minute_hand.attr({ stroke: "#000", "stroke-width": 2.5 });
        // second_hand = canvas.path("M70 70L70 18");
        // second_hand.attr({stroke: "#000", "stroke-width": 3});
        var pin = canvas.circle(70, 70, 3);
        pin.attr("fill", "#484647");
        update_clock()
        setInterval("update_clock()", 1000);
    }

    function update_clock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        // var seconds = now.getSeconds();
        hour_hand.rotate(30 * hours + (minutes / 2.5), 70, 70);
        minute_hand.rotate(6 * minutes, 70, 70);
        //second_hand.rotate(6*seconds, 70, 70);
    }
    function stopClock() {
        clearTimeout(gizmo);
    }

    function yourClock() {
        var nd = new Date();
        var h, m;
        var s;
        var time = " ";
        h = nd.getHours();
        m = nd.getMinutes();
        s = nd.getSeconds();
        if (h <= 9) h = "0" + h;
        if (m <= 9) m = "0" + m;
        if (s <= 9) s = "0" + s;
        time += h + ":" + m;
        document.getElementById("timeinput").innerHTML = time;
        gizmo = setTimeout("yourClock()", 1000);
    }
    /*20201222 패널 보여주기 추가 */
    function showpanel() {
        if ($("#submenu1").hasClass("active") || $("#submenu2").hasClass("active")) {
            var leftPanel = $("#iframe_left_panel2", this.ViewContainer);
            leftPanel.width("100%");
            leftPanel.height("100%");
            leftPanel.show();
        }
        else
        {
            $("#iframe_left_panel2", this.ViewContainer).hide();
        }
    } 
})(jQuery);