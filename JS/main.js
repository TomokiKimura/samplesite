
  
  // top画面の自動遷移
  function slideSwitch() {
    var $active = $('#top_img img.active');
    
    if ( $active.length == 0 ) $active = $('#top_img img:last');
    
    var $next =  $active.next().length ? $active.next()
    : $('#top_img img:first');
    
    $active.addClass('last-active');
    
    $next.css({opacity: 0.0})
    .addClass('active')
    .animate({opacity: 1.0}, 800, function() {
      $active.removeClass('active last-active');
    });
  }
  $(function() {
    setInterval( "slideSwitch()", 2500 );
  });
  
  // navタグの固定js
  var navPos = jQuery( '#global-nav' ).offset().top; // グローバルメニューの位置
  var navHeight = jQuery( '#global-nav' ).outerHeight(); // グローバルメニューの高さ
  jQuery( window ).on( 'scroll', function() {
    if ( jQuery( this ).scrollTop() > navPos ) {
      jQuery( 'body' ).css( 'padding-top', navHeight );
      jQuery( '#global-nav' ).addClass( 'm_fixed' );
    } else {
      jQuery( 'body' ).css( 'padding-top', 0 );
      jQuery( '#global-nav' ).removeClass( 'm_fixed' );
    }
  });
  
  
  // スマホメニューのJS
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const close2 = document.getElementById('close2');
  
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  close2.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  