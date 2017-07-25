console.log($('a').attr('href'));

$('a').not('[href*="my-domain.com]').attr("target", "_blank");

$('button').on('click', Function() {
  $('a').attr('href', 'https://github.com/');
  console.log($('a').attr('href'));
});
