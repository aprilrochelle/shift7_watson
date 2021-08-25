$(document).ready(function(){
  
  toggleExpand = () => {
    $('#topnav').toggleClass('expanded');
  }
  
  showDropdown = () =>  {
    let navHeight = $('.topnav').height();
    if ($(document).width() > 600) {
      $('#dropdown-content').css({paddingTop: navHeight});
      $('#dropdown-content').toggleClass('show');
      $('.dropbtn').toggleClass('active');
    } else {
        $('#dropdown-content').css({paddingTop: 0});
        $('#dropdown-content').hasClass('show')
        $('#dropdown-content').addClass('show')
        $('.main-nav a.main:not(.logo), .main-nav button').hide();
        $('.bottom-mobile').hide()
        $('#back').show();
      } 
  }

  closeDropdown = () => {
    $('#dropdown-content').removeClass('show')
    $('.main-nav a.main:not(.logo), .main-nav button').show();
    $('.bottom-mobile').show()
    $('#back').hide();
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = e => {
    if (!e.target.matches('.dropbtn')) {
      if ($('#dropdown-content').hasClass('show')) {
        $('#dropdown-content').removeClass('show');
        $('.dropbtn').removeClass('active');
      }
    }
  }
 });


