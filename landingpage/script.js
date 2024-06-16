// This is just used to destroy and append iframes so the sound doesnt bleed into the experience, also saves load time rather than dumping in a ton of iframes

$('.trig').click(function (evt) {
  evt.stopPropagation();
  $('iframe').css('opacity', 0);

  setTimeout(function () {
    $('iframe').remove();
  }, 1300);
});

$('.content label.lab').click(function () {
  let ID = $(this).data('iframe');

  setTimeout(function () {
    $('body').append(`<iframe src='${ID}' />`);
  }, 1500);

  setTimeout(function () {
    $('iframe').css('opacity', 1);
  }, 1600);

});