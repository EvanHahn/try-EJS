$(function() {

  var $input = $("#template");
  var $data = $("#data");
  var $output = $("#output");

  function render() {
    var output;
    try {
      var src = $input.val();
      var context = Function("", "return " + $data.val())() || {};
      output = ejs.render(src, context);
      $output.removeClass("error");
    } catch (err) {
      output = err.message;
      $output.addClass("error");
    }
    $output.html(output);
  }

  var renderThrottled = $.throttle(250, render);
  $input.on("keyup", renderThrottled);
  $data.on("keyup", renderThrottled);

  render();

});
