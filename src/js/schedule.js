$(function() {
  var toggleVariable = {};
  var registerButton = function(target, text) {
    $(`#toggle_${target}`).text(`${text}表示切替`);
    $(`#${target}`).hide();
    $(`#toggle_${target}`).click(() => {
      $(`#${target}`).toggle();
    });
  };
  registerButton("timetable", "タイムテーブル");
	registerButton("map", "地図");
	registerButton("twitter","タイムライン");
	registerButton("regulation","詳細");
	registerButton("content","イベント内容");
	registerButton("party","詳細");
	registerButton("remark","詳細");
});
