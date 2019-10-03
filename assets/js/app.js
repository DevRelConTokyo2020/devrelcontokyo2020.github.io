$(window).scroll(function() {
  if (document.location.pathname === '/') {
    if ($(document).scrollTop() > 150) {
      $('.navbar').addClass('navbar-white');
    } else {
      $('.navbar').removeClass('navbar-white');
    }
  }
});

$(function () {
  $('a.scrollnav[href^="#"]').click(function(event) {
    var id = $(this).attr("href");
    var offset = 60;
    var target = $(id).offset().top - offset;
    $('html, body').animate({scrollTop:target}, 500);
    event.preventDefault();
  });

  $('.navbar-nav>li>a').on('click', function(){
    if ($('.navbar-collapse').collapse) {
      $('.navbar-collapse').collapse('hide');
    }
  });
  
  $('.lang.ja').hide();
  var lang = navigator.language || navigator.userLanguage;
  if (lang.indexOf('ja') > -1) {
    $('.lang.en').hide();
    $('.lang.ja').show();
    changeTitle('ja');
  }
  
  $('.change-lang').on('click', function(e) {
    changeLang($(e.target).data('lang'));
    changeTitle($(e.target).data('lang'));
    return false;
  });
});


function changeLang(lang) {
  console.log(lang)
  if (lang === 'ja') {
    $('.lang.en').hide();
    $('.lang.ja').show();
  } else {
    $('.lang.ja').hide();
    $('.lang.en').show();
    changeTitle(lang)
  }
  return false;
}
function changeTitle(lang) {
  if (lang === 'ja') {
    var title = 'DevRelCon Tokyo 2020 – DevRel、開発者マーケティング、DX、APIに関するマーケティング';
    var description = 'DevRelCon Tokyoはテクニカルエバンジェリスト、デベロッパーアドボケイトそしてDevRelとDXに関係する全ての方向けのワンデーカンファレンスです';
  } else {
    var title = 'DevRelCon Tokyo 2020 – conference for developer relations, developer marketing, developer experience, APIs';
    var description = 'DevRelCon Tokyo is a one day conference for technical evangelists, developer advocates and anyone interested in developer relations and developer experience';
  }
  $('title').text(title);
  $('meta[name="description"]').attr('content', description);
}

