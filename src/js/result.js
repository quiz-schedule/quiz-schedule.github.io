$(function() {
  var posCounter = 1;
  var resetPos = function () {
    var resultPos = $("#RESULT_pos");
    var childLength = resultPos.children().length;
    for (var i = 0; i < childLength; i++) {
      resultPos
      .children(`div:eq(${i})`)
      .find(".RESULT_pos_rank")
      .val(i+1);

      var resultText = "";

      switch (i+1) {
        case 1:
          resultText = "優勝";
          break;
        case 2:
          resultText = "準優勝";
          break;
        default:
          resultText = `${i+1}位`;
          break;
      }

      resultPos
      .children(`div:eq(${i})`)
      .find(".RESULT_pos_result")
      .val(resultText);
    }
  };

  var addPosDOM = function (num) {
    var resultText = "";

    switch (num) {
      case 1:
        resultText = "優勝";
        break;
      case 2:
        resultText = "準優勝";
        break;
      default:
        resultText = `${num}位`;
        break;
    }
    var posDOM = $("<div></div>", {"class": "col-2 RESUT_row"})
                 .append(`<input type="text" class="form-control RESULT_pos_rank" id="RESULT_pos_${num}" value="${num}">`);
    var selectRound = $(`<select name="RESULT_round_${num}" id ="RESULT_round_${num}" class="form-control"></select>`)
                      .append(`<option value="F" selected="selected">決勝進出</option>`)
                      .append(`<option value="SF" selected="selected">準決勝進出</option>`)
                      .append(`<option value="QF" selected="selected">準々決勝進出</option>`)
                      .append(`<option value="HIGH" selected="selected">上位進出</option>`)
                      .append(`<option value="EMPTY" selected="selected"></option>`);
    var roundDOM = $("<div></div>", {"class": "col-2"})
                   .append(selectRound);
    var resDOM = $("<div></div>", {"class": "col-2"})
                 .append(`<input type="text" class="form-control RESULT_pos_result" id="RESULT_res_${num}" value="${resultText}">`);
    var nameDOM = $("<div></div>", {"class": "col-2"})
                 .append(`<input type="text" class="form-control" id="RESULT_name_${num}">`);
    var teamDOM = $("<div></div>", {"class": "col-2"})
                 .append(`<input type="text" class="form-control" id="RESULT_team_${num}">`);
  　var otherDOM = $("<div></div>", {"class": "col-2"})
                 .append(`<input type="text" class="form-control" id="RESULT_other_${num}">`);
    var oneline = $("<div></div>", {"class": "row my-1"})
                 .append(posDOM)
                 .append(roundDOM)
                 .append(resDOM)
                 .append(nameDOM)
                 .append(teamDOM)
                 .append(otherDOM);
    $("#RESULT_pos").append(oneline);
    if(num == 1) {
      $(`#RESULT_pos_${num}`)
      .before(`<label for="RESULT_pos_${num}">順位<a href="javascript:void(0);" id="RESULT_pos-pop" data-toggle="popover" data-placement="bottom" title="順位について">[注]</a></label>`);
      $(`#RESULT_round_${num}`)
      .before(`<label for="RESULT_round_${num}">進出ラウンド<a href="javascript:void(0);" id="RESULT_round-pop" data-toggle="popover" data-placement="bottom" title="進出ラウンドについて">[注]</a></label>`);
      $(`#RESULT_name_${num}`)
      .before(`<label for="RESULT_name_${num}">氏名</label>`);
      $(`#RESULT_res_${num}`)
      .before(`<label for="RESULT_res_${num}">成績<a href="javascript:void(0);" id="RESULT_res-pop" data-toggle="popover" data-placement="bottom" title="成績について">[注]</a></label>`);
      $(`#RESULT_team_${num}`)
      .before(`<label for="RESULT_team_${num}">所属</label>`);
      $(`#RESULT_other_${num}`)
      .before(`<label for="RESULT_other_${num}">その他<a href="javascript:void(0);" id="RESULT_other-pop" data-toggle="popover" data-placement="bottom" title="その他について">[注]</a></label>`);
    }
  }

  while (posCounter <= 3) {
    addPosDOM(posCounter);
    posCounter += 1;
  }

  $("#RESULT_add_pos_button").click(() => {
    addPosDOM(posCounter);
    posCounter += 1;
    resetPos();
  });

  $("#RESULT_delete").click(() => {
    var removeObj = $("#RESULT_pos").children("div:last");
    removeObj.fadeOut("fast", () => {
        removeObj.remove();
    });
  });

  $("#RESULT_pos-pop").attr('data-content', `自動的に順位が入ります。タイ記録の順位がある場合は、随時数字を変更して下さい（例：2位が2人同点の場合、上から1 2 2 4 5・・・としてください）。順位に応じて集計を行う場合があります。`);
  $("#RESULT_round-pop").attr('data-content', `進出ラウンドを選択してください。該当する名称がない場合、「全て決勝進出にする」「近い概念にする」「空欄を用いる」など臨機応変に対応して下さい。ユーザー要望に応じ、進出ラウンドに応じた集計を行う場合があります（準決勝進出回数ランキングなど）。`);
  $("#RESULT_res-pop").attr('data-content',`自動的に成績名が入りますが、タイ記録の場合や、成績の名称が特殊な場合は変更して下さい（例：準優勝が2人の場合、「優勝　準優勝　準優勝　4位・・・」とするなど）。ここで用いた名称が結果報告で表示されます。`);
  $("#RESULT_other-pop").attr('data-content',`ここには決勝の正解数や誤答数(例: 10○4×)などをお書きください．`);
$("[data-toggle=popover]").popover({
    trigger: 'hover', // click,hover,focus,manualを選択出来る
    html: true });
});
