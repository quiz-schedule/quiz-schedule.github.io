"use strict";

$(function () {
  var posCounter = 1;
  var resetPos = function resetPos() {
    var resultPos = $("#RESULT_pos");
    var childLength = resultPos.children().length;
    for (var i = 0; i < childLength; i++) {
      resultPos.children("div:eq(" + i + ")").find(".RESULT_pos_rank").val(i + 1);

      var resultText = "";

      switch (i + 1) {
        case 1:
          resultText = "優勝";
          break;
        case 2:
          resultText = "準優勝";
          break;
        default:
          resultText = i + 1 + "\u4F4D";
          break;
      }

      resultPos.children("div:eq(" + i + ")").find(".RESULT_pos_result").val(resultText);
    }
  };

  var addPosDOM = function addPosDOM(num) {
    var resultText = "";

    switch (num) {
      case 1:
        resultText = "優勝";
        break;
      case 2:
        resultText = "準優勝";
        break;
      default:
        resultText = num + "\u4F4D";
        break;
    }
    var posDOM = $("<div></div>", { "class": "col-2 RESUT_row" }).append("<input type=\"text\" class=\"form-control RESULT_pos_rank\" id=\"RESULT_pos_" + num + "\" value=\"" + num + "\">");
    var selectRound = $("<select name=\"RESULT_round_" + num + "\" id =\"RESULT_round_" + num + "\" class=\"form-control\"></select>").append("<option value=\"F\" selected=\"selected\">\u6C7A\u52DD\u9032\u51FA</option>").append("<option value=\"SF\" selected=\"selected\">\u6E96\u6C7A\u52DD\u9032\u51FA</option>").append("<option value=\"QF\" selected=\"selected\">\u6E96\u3005\u6C7A\u52DD\u9032\u51FA</option>").append("<option value=\"HIGH\" selected=\"selected\">\u4E0A\u4F4D\u9032\u51FA</option>").append("<option value=\"EMPTY\" selected=\"selected\"></option>");
    var roundDOM = $("<div></div>", { "class": "col-2" }).append(selectRound);
    var resDOM = $("<div></div>", { "class": "col-2" }).append("<input type=\"text\" class=\"form-control RESULT_pos_result\" id=\"RESULT_res_" + num + "\" value=\"" + resultText + "\">");
    var nameDOM = $("<div></div>", { "class": "col-2" }).append("<input type=\"text\" class=\"form-control\" id=\"RESULT_name_" + num + "\">");
    var teamDOM = $("<div></div>", { "class": "col-2" }).append("<input type=\"text\" class=\"form-control\" id=\"RESULT_team_" + num + "\">");
    var otherDOM = $("<div></div>", { "class": "col-2" }).append("<input type=\"text\" class=\"form-control\" id=\"RESULT_other_" + num + "\">");
    var oneline = $("<div></div>", { "class": "row my-1" }).append(posDOM).append(roundDOM).append(resDOM).append(nameDOM).append(teamDOM).append(otherDOM);
    $("#RESULT_pos").append(oneline);
    if (num == 1) {
      $("#RESULT_pos_" + num).before("<label for=\"RESULT_pos_" + num + "\">\u9806\u4F4D<a href=\"javascript:void(0);\" id=\"RESULT_pos-pop\" data-toggle=\"popover\" data-placement=\"bottom\" title=\"\u9806\u4F4D\u306B\u3064\u3044\u3066\">[\u6CE8]</a></label>");
      $("#RESULT_round_" + num).before("<label for=\"RESULT_round_" + num + "\">\u9032\u51FA\u30E9\u30A6\u30F3\u30C9<a href=\"javascript:void(0);\" id=\"RESULT_round-pop\" data-toggle=\"popover\" data-placement=\"bottom\" title=\"\u9032\u51FA\u30E9\u30A6\u30F3\u30C9\u306B\u3064\u3044\u3066\">[\u6CE8]</a></label>");
      $("#RESULT_name_" + num).before("<label for=\"RESULT_name_" + num + "\">\u6C0F\u540D</label>");
      $("#RESULT_res_" + num).before("<label for=\"RESULT_res_" + num + "\">\u6210\u7E3E<a href=\"javascript:void(0);\" id=\"RESULT_res-pop\" data-toggle=\"popover\" data-placement=\"bottom\" title=\"\u6210\u7E3E\u306B\u3064\u3044\u3066\">[\u6CE8]</a></label>");
      $("#RESULT_team_" + num).before("<label for=\"RESULT_team_" + num + "\">\u6240\u5C5E</label>");
      $("#RESULT_other_" + num).before("<label for=\"RESULT_other_" + num + "\">\u305D\u306E\u4ED6<a href=\"javascript:void(0);\" id=\"RESULT_other-pop\" data-toggle=\"popover\" data-placement=\"bottom\" title=\"\u305D\u306E\u4ED6\u306B\u3064\u3044\u3066\">[\u6CE8]</a></label>");
    }
  };

  while (posCounter <= 3) {
    addPosDOM(posCounter);
    posCounter += 1;
  }

  $("#RESULT_add_pos_button").click(function () {
    addPosDOM(posCounter);
    posCounter += 1;
    resetPos();
  });

  $("#RESULT_delete").click(function () {
    var removeObj = $("#RESULT_pos").children("div:last");
    removeObj.fadeOut("fast", function () {
      removeObj.remove();
    });
  });

  $("#RESULT_pos-pop").attr('data-content', "\u81EA\u52D5\u7684\u306B\u9806\u4F4D\u304C\u5165\u308A\u307E\u3059\u3002\u30BF\u30A4\u8A18\u9332\u306E\u9806\u4F4D\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u968F\u6642\u6570\u5B57\u3092\u5909\u66F4\u3057\u3066\u4E0B\u3055\u3044\uFF08\u4F8B\uFF1A2\u4F4D\u304C2\u4EBA\u540C\u70B9\u306E\u5834\u5408\u3001\u4E0A\u304B\u30891 2 2 4 5\u30FB\u30FB\u30FB\u3068\u3057\u3066\u304F\u3060\u3055\u3044\uFF09\u3002\u9806\u4F4D\u306B\u5FDC\u3058\u3066\u96C6\u8A08\u3092\u884C\u3046\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002");
  $("#RESULT_round-pop").attr('data-content', "\u9032\u51FA\u30E9\u30A6\u30F3\u30C9\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u8A72\u5F53\u3059\u308B\u540D\u79F0\u304C\u306A\u3044\u5834\u5408\u3001\u300C\u5168\u3066\u6C7A\u52DD\u9032\u51FA\u306B\u3059\u308B\u300D\u300C\u8FD1\u3044\u6982\u5FF5\u306B\u3059\u308B\u300D\u300C\u7A7A\u6B04\u3092\u7528\u3044\u308B\u300D\u306A\u3069\u81E8\u6A5F\u5FDC\u5909\u306B\u5BFE\u5FDC\u3057\u3066\u4E0B\u3055\u3044\u3002\u30E6\u30FC\u30B6\u30FC\u8981\u671B\u306B\u5FDC\u3058\u3001\u9032\u51FA\u30E9\u30A6\u30F3\u30C9\u306B\u5FDC\u3058\u305F\u96C6\u8A08\u3092\u884C\u3046\u5834\u5408\u304C\u3042\u308A\u307E\u3059\uFF08\u6E96\u6C7A\u52DD\u9032\u51FA\u56DE\u6570\u30E9\u30F3\u30AD\u30F3\u30B0\u306A\u3069\uFF09\u3002");
  $("#RESULT_res-pop").attr('data-content', "\u81EA\u52D5\u7684\u306B\u6210\u7E3E\u540D\u304C\u5165\u308A\u307E\u3059\u304C\u3001\u30BF\u30A4\u8A18\u9332\u306E\u5834\u5408\u3084\u3001\u6210\u7E3E\u306E\u540D\u79F0\u304C\u7279\u6B8A\u306A\u5834\u5408\u306F\u5909\u66F4\u3057\u3066\u4E0B\u3055\u3044\uFF08\u4F8B\uFF1A\u6E96\u512A\u52DD\u304C2\u4EBA\u306E\u5834\u5408\u3001\u300C\u512A\u52DD\u3000\u6E96\u512A\u52DD\u3000\u6E96\u512A\u52DD\u30004\u4F4D\u30FB\u30FB\u30FB\u300D\u3068\u3059\u308B\u306A\u3069\uFF09\u3002\u3053\u3053\u3067\u7528\u3044\u305F\u540D\u79F0\u304C\u7D50\u679C\u5831\u544A\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002");
  $("#RESULT_other-pop").attr('data-content', "\u3053\u3053\u306B\u306F\u6C7A\u52DD\u306E\u6B63\u89E3\u6570\u3084\u8AA4\u7B54\u6570(\u4F8B: 10\u25CB4\xD7)\u306A\u3069\u3092\u304A\u66F8\u304D\u304F\u3060\u3055\u3044\uFF0E");
  $("[data-toggle=popover]").popover({
    trigger: 'hover', // click,hover,focus,manualを選択出来る
    html: true });
});