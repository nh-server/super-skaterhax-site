/* http://stackoverflow.com/a/5077091 */
String.prototype.format = function () {
  var args = arguments;
  return this.replace(/\{(\d+)\}/g, function (m, n) { return args[n]; });
};
var is_ej;

$('button.group').on('click', function() {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
  }

  // Hide/show relevant system versions
  $('.firmware .group').each(function (index, elem) {
    var hide_kor = $(elem).hasClass('no_kor') && $('#kor').hasClass('selected');
    is_ej = $('.ej').hasClass('selected');
    var hide_ej = $(elem).hasClass('no_ej') && is_ej;
    if (hide_kor || hide_ej) {
      $(elem).removeClass('selected');
      $(elem).hide();
    } else {
      $(elem).show();
    }
  })
  if($(".only_ej") && is_ej) {
    $(".only_ej").show();
  } else {
    $(".only_ej").removeClass('selected');
    $(".only_ej").hide();
  }

  if (   $('.region').children().hasClass('selected')
      && $('.firmware').children().hasClass('selected')
  ) {
    $('#download').addClass('active');
  } else {
    $('#download').removeClass('active');
  }

});

$('#download').on('click', function() {
  if (!$(this).hasClass('active')) {
    return;
  }

  var region = $('.region').children('.selected').attr('id');
  var firmware_ = $('.firmware').children('.selected').attr('id');

  var base = "https://github.com/ManiacOfGitHub/super-skaterhax-site/raw/master/";
  var filename = "super-skaterhax-{0}-{1}.zip".format(region, firmware_);
  window.location.href = base + filename;
});
