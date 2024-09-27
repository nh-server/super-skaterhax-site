var is_ej;

$('.btn-check').on('click', function() {

  // Hide/show relevant system versions
  $('.firmware *').each(function (index, elem) {
    var hide_kor = $(elem).hasClass('no_kor') && $('#kor').is(':checked');
    is_ej = $('.ej').is(":checked");
    var hide_ej = $(elem).hasClass('no_ej') && is_ej;
    if (hide_kor || hide_ej) {
      elem.checked=false;
      $(elem).hide();
    } else {
      $(elem).show();
    }
  })
  if($(".only_ej") && is_ej) {
    $(".only_ej").show();
  } else {
    $(".only_ej").each((index,elem)=>{elem.checked=false});
    $(".only_ej").hide();
  }

  if ($('.region').children().is(":checked") && $('.firmware').children().is(":checked")) {
    $('#download').removeClass('disabled btn-secondary');
    $('#download').addClass('btn-primary');
  } else {
    $('#download').addClass('disabled btn-secondary');
    $('#download').removeClass('btn-primary');
  }

});

$('#download').on('click', function() {
  if ($(this).hasClass('disabled')) {
    return;
  }

  var region = $('.region').children(':checked').attr('id');
  var firmware = $('.firmware').children(':checked').attr('id');

  window.location.href = `https://hacksguidewiki.sfo3.digitaloceanspaces.com/hacksguidewiki/Super-skaterhax-${region}-${firmware}.zip`;
});
