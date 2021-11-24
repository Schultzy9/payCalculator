$(document).ready(function() {

  $('#save').on('click', function() {
    const pay = $('#pay').val();
    const perSecond = pay/52/5/8/60/60;
    let total = 0;
    window.setInterval(function() {
      total += perSecond
      $('#runningTotal').text(`$${total.toFixed(2)}`);
    }, 1000);
  });



});
