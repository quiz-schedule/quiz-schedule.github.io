"use strict";

$(function () {
  var toggleVariable = {};
  var registerButton = function registerButton(target, text) {
    $("#toggle_" + target).text(text + "\u8868\u793A\u5207\u66FF");
    $("#" + target).hide();
    $("#toggle_" + target).click(function () {
      $("#" + target).toggle();
    });
  };
  registerButton("timetable", "タイムテーブル");
  registerButton("map", "地図");
  registerButton("twitter", "タイムライン");
  registerButton("regulation", "詳細");
  registerButton("content", "イベント内容");
  registerButton("party", "詳細");
  registerButton("remark", "詳細");
});