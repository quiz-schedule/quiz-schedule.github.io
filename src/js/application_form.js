$(function() {
  //曜日リスト
  var weekDayList = [
    "日",
    "月",
    "火",
    "水",
    "木",
    "金",
    "土"
  ];
  //都道府県リスト(開催地域)
  var regionList = [
    "未定",
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "東京都",
    "神奈川県",
    "埼玉県",
    "千葉県",
    "茨城県",
    "栃木県",
    "群馬県",
    "山梨県",
    "新潟県",
    "長野県",
    "富山県",
    "石川県",
    "福井県",
    "愛知県",
    "岐阜県",
    "静岡県",
    "三重県",
    "大阪府",
    "兵庫県",
    "京都府",
    "滋賀県",
    "奈良県",
    "和歌山県",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県",
    "海外",
    "ネット上",
    "テレビ・ラジオ",
    "その他"
  ];
  //ポップオーバー用のテキスト
  var categoryPopText = `<div class="row">
      <div class="col-12">以下を参考にお選び下さい。</div>
      <div class="col-3 py-1">クイズ大会</div>
      <div class="col-9 py-1">広く参加者を募集し、何らかの形で優勝者（優勝チーム）を決めるクイズイベント。</div>
      <div class="col-3 py-1">クイズ例会</div>
      <div class="col-9 py-1">クイズ例会の延長でオープン例会を行う場合や、広く参加者を募る例会等の告知をしたい場合。応募後、主催者による審査等があってもかまわない。（例：インカレメンバーを広く募集する大学クイズサークルによる「新入生歓迎企画」等の告知）</div>
      <div class="col-3 py-1">TV・ラジオ番組</div>
      <div class="col-9 py-1">TV・ラジオ番組の収録、予選会、観覧募集、放送（Web一斉参加など）など、クイズ番組の告知用。</div>
      <div class="col-3 py-1">Webクイズ</div>
      <div class="col-9 py-1">Web上（ニコニコ動画など）で行うクイズ番組、クイズ大会、クイズイベントなど。</div>
      <div class="col-3 py-1">文化祭</div>
      <div class="col-9 py-1">高校大学などの文化祭の告知。</div>
      <div class="col-3 py-1">その他イベント</div>
      <div class="col-9 py-1">「謎解きイベント」「クイズ関連のトークライブ」「出版記念講演会」「店舗大会」など、分類が難しいもの</div>
    </div>`;

  var resultPopText = `<p>「大会結果報告を行わない」のチェックボックスにクリックがない場合、大会終了後『新・一心精進』に大会結果を報告し、「公のものとして記録に残す」ことを原則とします。「公のものとして記録に残したくない」場合は、「大会結果報告を行わない」のチェックボックスをクリックして下さい。</p>
    <p>【詳細解説】「公のものとして記録に残す」とは、大会結果がメディア等に報道されたり、結果をもとに予選通過数ランキングが集計されたり、大会結果を基準に協会Web会員が別大会のレギュレーションを定めることなどを、全面的に認めるものとする。「大会結果報告を行わない」のチェックボックスをクリックした場合も、「個人情報を扱わない結果（参加・見学人数の報告、個人情報を含まない結果や問題のpdf等）は、可能であれば提供にご協力をお願いしたい。</p>`;

  var genrePopText = `<p>特定ジャンル限定とする大会は、チェックボックスにクリックをして下さい（例「イントロクイズ大会」「日本史限定オープン」「埼玉に関する問題のみの大会） 。なお、ある程度偏った出題をしても（例：「5割を科学とします」等）、主催の意志次第で「クイズ大会」に分類してもかまいません。</p>
    <p>【詳細解説】「「クイズ大会」の結果は、公のものであり、他クイズ大会のレギュレーションの基準にしても良い」という規定を設けている。しかし、例えばイントロクイズの大会があったとして、「イントロクイズは競技ではあるが、クイズ大会としての実績にカウントされ、他大会で実力者として扱われ出場資格を奪うのは主催者として不本意」と主催者が捉えたのであれば、この「ジャンル限定大会」のチェックを選んでいただくことで「通常のクイズ大会とは異なるため、レギュレーションには含めないで欲しい」という意思表示ができる。</p>`;

  var entryPopText = `<p>事前エントリーが必要な大会は、開始日等を記入して下さい。なお、エントリー開始時期にユーザーにリマインダーメールが飛ぶ機能を実装しております。公式サイト等で開始時期を変更した場合、きちんとこちらにも反映させるようお願いします（誤ったリマインダーメールが送付されてしまいます）。</p>`;

  var templatePopText = `<p>各注意書きの例として、主催者に選択頂ける「定型文」を用意致しました。ただし、定型文はあくまで例です。最も近い文を選択後、各主催者が自身の大会に見合った文章に編集し、最終的な文面は主催者の責任のもと記述するようお願い致します。また、これら定型文は実際に運営し、各主催者がどのように文章を変えたかを参考にしながら、管理側が不定期に修正することがあります（主催者が一度投稿した文章を管理側が変更することはありません）</p>`;

  var schoolAbcPopText = `
        <p>「abc基準」とは、クイズ大会『abc』などが採用した、主に大学4年以下を対象にしたレギュレーションです。具体的には以下のいずれか（両方ではありません）の条件を満たすことと定められています。</p>
        <ul>
            <li>2017年3月1日時点で大学or専門学校連続在学4年以下であること。ただし、一度社会人になった経験を持つ場合、こちらの条件は満たさないものとします。</li>
            <li>2017年4月1日の時点で22歳以下であること。一度社会人になった経験があっても22歳以下であればこちらの条件を満たします。</li>
        </ul>
        <p>また「ABC基準」とは、クイズ大会『ABC』などが採用した、「abcというクイズ大会に出られない世代」を対象にしたレギュレーションです。</p>`;
  var topmessagePopText = `トップページのお知らせにおいて「～～を更新しました。（日程が変更になっています）」の「日程が変更になっています」の部分がこのメッセージです。管理側の判断で文面を追加・変更する場合があります。また、特定大会の告知ばかりお知らせに掲載されるのを防ぐため、軽微な内容変更等においては申請者が希望した場合でも、管理側の判断でトップへの反映を行わない場合があります。`;

  var mapKeywordPopText = `システム内部でgoogle地図表示に使う検索文字列をご記入ください。確認画面で正しい地図が表示されるか確認できます。基本的には会場名で正しい地図が表示されますが、国内に同名の会場がある場合など正しくない地図が表示されないことがあります。その場合地図を表示するチェックボックスをオフにするか、正しい地図が表示されるキーワード（住所や緯度経度など）をご検討ください。`;

  //チェックボックスに時間を追加する
  var addHour = function(select) {
    for (var i = 0; i < 24; i++) {
      select.append(`<option value="${i}">${i}時</option>`);
    }
  };
  //チェックボックスに分を追加する
  var addMinute = function(select) {
    for (var i = 0; i < 60; i++) {
      select.append(`<option value="${i}">${i}分</option>`);
    }
  };

  //チェックボックスに年月日を追加する
  // select: 追加対象のselect box
  // is_undecided: 「未定」を入れるかどうか
  var addDate = function(select, is_undecided) {
    // 現在の年月日を取得
    var current = new Date();
    var this_year = current.getFullYear();
    var this_month = current.getMonth() + 1;
    var this_day = current.getDate();
    select.append('<option value="no_choice">-------</option>')
    // is_undecidedがtrueなら，未定を追加する．
    if (is_undecided) {
      select.append('<option value="未定">未定</option>');
      select.append(`<option value="${this_year}年未定">${this_year}年未定</option>`);
      select.append(`<option value="${this_year}年${this_month}月未定">${this_year}年${this_month}月未定</option>`);
    }

    try {
      for (var i = 0; i < 732; i++) {
        //i日後を計算
        var date = new Date(this_year, this_month - 1, this_day + i);
        //年月日を取得
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var wd = weekDayList[date.getDay()];
        //月初ならば先頭に「~~年~月未定」を追加
        if (d == 1 && is_undecided) {
          select.append(`<option value="${y}年${m}月未定">${y}年${m}月未定</option>`);
        }
        select.append(`<option value="${y}年${m}月${d}日(${wd})">${y}年${m}月${d}日(${wd})</option>`);
        //大晦日まで表示
        if (y == this_year + 1 && m == 12 && d == 31) {
          throw false;
        };
      }
    } catch (e) {
      if (e)
        throw e;
      }
    }
  // 日付のプルダウン生成
  $('#BASIC_date').html('<select name="ymd" class="form-control">');
  addDate($('select[name="ymd"]'), true);

  //DatePicker生成関数
  var addDatePicker = function (id, target_select) {
    $(`#${id}`).datepicker({
      buttonImage: "../dist/img/calendar.png",
      buttonText: "カレンダーから選択",
      buttonImageOnly: true,
      dateFormat: "yy年m月d日(D)",
      minDate: 0,
      showOn: "button"
    });

    $(`#${id}`).bind('change', function() {
      $(`select[name="${target_select}"]`).val($(this).val());
    });
  }

  addDatePicker("DATE-calendar","ymd");


  //クイズ大会の場合に表示されるチェックボックス
  $("#BASIC_category-checkbox").hide();

  $("#BASIC_category-select").change(function() {
    var value = $("#BASIC_category-select").val();
    if (value === "contest") {
      $("#BASIC_category-checkbox").show();
    } else {
      $("#BASIC_category-checkbox").hide();
    }
    if (value === "no_choice") {
      $("#BASIC_category").addClass("has-danger");
    }
  });

  //開場・開始・終了の時刻フォーム
  $("#open_checkbox").before('<select name="open_hour" class="form-control col-2">').before('<select name="open_minute" class="form-control col-2">');
  $("#start_checkbox").before('<select name="start_hour" class="form-control col-2">').before('<select name="start_minute" class="form-control col-2">');
  $("#end_checkbox").before('<select name="end_hour" class="form-control col-2">').before('<select name="end_minute" class="form-control col-2">');

  addHour($('select[name="open_hour"]'));
  addHour($('select[name="start_hour"]'));
  addHour($('select[name="end_hour"]'));

  addMinute($('select[name="open_minute"]'));
  addMinute($('select[name="start_minute"]'));
  addMinute($('select[name="end_minute"]'));

  //「未定」のチェックを入れたときの設定
  $('#open_not_decided').change(function() {
    $('select[name=open_hour]').prop("disabled", $(this).is(':checked'));
    $('select[name=open_minute]').prop("disabled", $(this).is(':checked'));
  });

  $('#start_not_decided').change(function() {
    $('select[name=start_hour]').prop("disabled", $(this).is(':checked'));
    $('select[name=start_minute]').prop("disabled", $(this).is(':checked'));
  });

  $('#end_not_decided').change(function() {
    $('select[name=end_hour]').prop("disabled", $(this).is(':checked'));
    $('select[name=end_minute]').prop("disabled", $(this).is(':checked'));
  });

  //時刻入力フォームの追加
  $("#TS_add_item_button").click(function() {
    //divを動的に生成
    var original = $("<div></div>", {"class": "row align-items-center"});

    var item = $("#TS_other_item").val();

    original.attr('id', `TS_other["${item}"]`);

    //中に入るセレクトボックス(時間・分)
    var select_hour = $("<select>", {
      name: `other_hour["${item}"]`,
      "class": "form-control col-2"
    });

    var select_minute = $("<select>", {
      name: `other_minute["${item}"]`,
      "class": "form-control col-2"
    });

    //削除ボタン
    var delete_button = $("<button></button>", {
      type: "button",
      "class": "btn btn-danger col-2 TS_delete"
    }).append("削除");

    //セレクトボックスの選択肢
    addHour(select_hour);
    addMinute(select_minute);

    original.append(`<div class="col-2">${item}</div>`).append(select_hour).append(select_minute).append(delete_button);

    $("#time_schedule").append(original);

    $("#TS_other_item").val('');
  });

  //追加した時刻入力フォームの削除ボタンのアクション
  $(document).on("click", ".TS_delete", function() {
    var removeObj = $(this).parent();
    console.log(removeObj);
    removeObj.fadeOut("fast", function() {
      removeObj.remove();
    });
  });

  //参加費のチェックボックスの設定
  $('#fee_not_decided').change(function() {
    $('#FEE_textarea').prop("disabled", $(this).is(':checked'));
  });

  //開催地域選択
  for (var j = 0; j < regionList.length; j++) {
    $('select[name=region]').append(`<option value="${regionList[j]}">${regionList[j]}</option>`);
  }

  //会場でその他が選択されたら下のテキストボックスに入力可能になる．
  $('#place').change(function() {
    if ($('#place').val() == "others") {
      $('#PLACE_text').prop("disabled", false);
    } else {
      $('#PLACE_text').prop("disabled", true);
    }
  })

  $('#ENTRY_select').change(function() {
    var entryText = $('#ENTRY_textarea');
    var value = $('#ENTRY_select').val();
    if ($("#ENTRY_template_shown").is(':checked')) {
      switch (value) {
        case "necessary":
          entryText.val(
            "本大会はWeb上での事前エントリーが必要です。当日エントリーは受け付けません。エントリー枠には定員がありますので、お早めにお申し込みください。 "
          );
          break;
        case "free_but_limited":
          entryText.val(
            "本大会はWeb上での事前エントリーを受け付けます。エントリー枠には定員がありますので、お早めにお申し込みください。枠に余りがある場合、当日受付も行います。"
          );
          break;
        case "unnecessary":
          entryText.val(
            "本大会は事前エントリーは不要です。参加される方は当日会場に直接お越しください。 "
          );
          break;
        default:
          entryText.val("");
          break;
      }
    } else {
      entryText.val("");
    }
  })

  //エントリーの定型文入力
  $('#ENTRY_template_shown').change(function() {
    var entryText = $('#ENTRY_textarea');
    var value = $('#ENTRY_select').val();
    if ($(this).is(':checked')) {
      switch (value) {
        case "necessary":
          entryText.val("本大会はWeb上での事前エントリーが必要です。当日エントリーは受け付けません。エントリー枠には定員がありますので、お早めにお申し込みください。");
          break;
        case "free_but_limited":
          entryText.val("本大会はWeb上での事前エントリーを受け付けます。エントリー枠には定員がありますので、お早めにお申し込みください。枠に余りがある場合、当日受付も行います。");
          break;
        case "unnecessary":
          entryText.val("本大会は事前エントリーは不要です。参加される方は当日会場に直接お越しください。 ");
          break;
        default:
          entryText.val("");
          break;
      }
    } else {
      entryText.val("");
    }
  });

  $('#general_title')
  .after(
    '<select name="general_entry_start_day" class="form-control col-3">',
    '<div class="col-1"> <input type="text" style="display: none;" id="general_start-cal"> </div>',
    '<select name="general_entry_start_hour" class="form-control col-1">',
    '<div class="col-1">時</div>',
    '<select name="general_entry_start_minute" class="form-control col-1">',
    '<div class="col">分から</div>',
    '<select name="general_entry_end_day" class="form-control col-3 offset-2">',
    '<div class="col-1"> <input type="text" style="display: none;" id="general_end-cal"> </div>', '<select name="general_entry_end_hour" class="form-control col-1">',
    '<div class="col-1">時</div>',
    '<select name="general_entry_end_minute" class="form-control col-1">',
    '<div class="col">分まで</div>');


  //DatePicker
  addDatePicker("general_start-cal","general_entry_start_day");
  addDatePicker("general_end-cal","general_entry_end_day");
  
  $("[id^=ENTRY_start_cal_]").each(function(i,element){
    var id = $(element).attr("id");
    var item = id.replace(/ENTRY_start_cal_/g,'');
    addDatePicker(id,`ENTRY_other_start_day[${item}]`);
  });

  $("[id^=ENTRY_end_cal_]").each(function(i,element){
    var id = $(element).attr("id");
    var item = id.replace(/ENTRY_end_cal_/g,'');
    addDatePicker(id,`ENTRY_other_end_day[${item}]`);
  });


  addDate($('select[name=general_entry_start_day]'), false);
  addDate($('select[name=general_entry_end_day]'), false);
  addHour($('select[name=general_entry_start_hour]'));
  addHour($('select[name=general_entry_end_hour]'));
  addMinute($('select[name=general_entry_start_minute]'));
  addMinute($('select[name=general_entry_end_minute]'));

  $("#ENTRY_add_item_button").click(function() {
    //divを動的に生成
    var original = $("<div></div>", {"class": "row align-items-center"});

    var item = $("#ENTRY_other_item").val();
    console.log(item);

    original.attr('id', `ENTRY_other_${item}`);

    //中に入るセレクトボックス(時間・分)
    var select_start_day = $("<select>", {
      name: `ENTRY_start_day_${item}`,
      "class": "form-control col-3"
    });
    var start_cal_id = `ENTRY_start_cal_${item}`;

    var start_picker = $("<div>", {"class": "col-1"})
    .append($("<input>",{
      "type": "text",
      "style": "display: none;",
      id: `${start_cal_id}`
    }));

    var select_start_hour = $("<select>", {
      name: `ENTRY_start_hour_${item}`,
      "class": "form-control col-1"
    });

    var select_start_minute = $("<select>", {
      name: `ENTRY_start_minute_${item}`,
      "class": "form-control col-1"
    });

    var select_end_day = $("<select>", {
      name: `ENTRY_end_day_${item}`,
      "class": "form-control col-3 offset-2"
    });

    var end_cal_id = `ENTRY_end_cal_${item}`;

    var end_picker = $("<div>", {"class": "col-1"})
    .append($("<input>",{
      "type": "text",
      "style": "display: none;",
      id: `${end_cal_id}`
    }));

    var select_end_hour = $("<select>", {
      name: `ENTRY_end_hour_${item}`,
      "class": "form-control col-1"
    });

    var select_end_minute = $("<select>", {
      name: `ENTRY_end_minute_${item}`,
      "class": "form-control col-1"
    });

    //削除ボタン
    var delete_button = $("<button></button>", {
      type: "button",
      "class": "btn btn-danger col-2 TS_delete"
    }).append("削除");

    //セレクトボックスの選択肢
    addDate(select_start_day, false);
    addHour(select_start_hour);
    addMinute(select_start_minute);
    addDate(select_end_day, false);
    addHour(select_end_hour);
    addMinute(select_end_minute);

    original
    .append(`<div class="col-2">${item}</div>`)
    .append(select_start_day)
    .append(start_picker)
    .append(select_start_hour)
    .append('<div class="col-1">時</div>')
    .append(select_start_minute)
    .append('<div class="col">分から</div>')
    .append(select_end_day)
    .append(end_picker)
    .append(select_end_hour)
    .append('<div class="col-1">時</div>')
    .append(select_end_minute)
    .append('<div class="col">分まで</div>')
    .append(delete_button);

    $("#entry_time").append(original);

    addDatePicker(start_cal_id,`ENTRY_start_day_${item}`);
    addDatePicker(end_cal_id,`ENTRY_end_day_${item}`);

    $("#ENTRY_other_item").val('');
  });

  var toggleVisibleInEntry = function(selector, toggleComponent, item) {
    toggleComponent.find('input,button,select').prop("disabled", true);

    selector.change(function() {
      var val = selector.val();
      if (val === item) {
        toggleComponent.find('input,button,select').prop("disabled", false);
      } else {
        toggleComponent.find('input,button,select').prop("disabled", true);
      }
    });
  }

  toggleVisibleInEntry($("#AGE_limit_select"), $("#AGE_limit"), "yes");
  toggleVisibleInEntry($("#SCHOOL_limit_select"), $("#SCHOOL_limit"), "yes");
  toggleVisibleInEntry($("#SEX_limit_select"), $("#SEX_limit"), "yes");
  toggleVisibleInEntry($("#CAREER_limit_select"), $("#CAREER_limit"), "yes");
  toggleVisibleInEntry($("#RESULT_limit_select"), $("#RESULT_limit"), "yes");
  toggleVisibleInEntry($("#REGION_limit_select"), $("#REGION_limit"), "yes");
  toggleVisibleInEntry($("#TEAM_limit_select"), $("#TEAM_limit"), "team");
  toggleVisibleInEntry($("#PARTY_select"), $("#PARTY_detail"), "yes");

  var REMARK_eat_template = [
    "【飲食可】会場内での飲食は可能ですが、飲酒はご遠慮ください。また、クイズ中はビニール袋などの音にもご配慮ください。ごみは必ず各自でお持ち帰りください。喫煙は、喫煙所のみで行うようお願い致します．",
    "【飲物のみ可】会場内で軽い飲物を飲むことは可能ですが、食事や飲酒はご遠慮ください。ごみは必ず各自でお持ち帰りください。また、クイズ中はビニール袋などの音にもご配慮ください。喫煙は、喫煙所のみで行うようお願い致します．",
    "【指定場所のみ飲食可】会場での飲食・喫煙は指定された場所でのみ可能となっております。飲酒はご遠慮ください。ごみは必ず各自でお持ち帰りください。",
    "【飲物不可】会場内での飲食・喫煙はご遠慮ください。喫煙は、喫煙所のみで行うようお願い致します．"
  ];

  var REMARK_sell_template = [
    "【頒布自由】問題集の頒布は休み時間であれば自由に行っていただいて構いません。 ",
    "【指定場所のみ頒布自由】問題集頒布は主催者が指定した時間・場所に行ってください。事前の申請は不要です。詳細は公式サイトにて告知します。 ",
    "【事前申請必要】問題集頒布は事前に部数・価格等を申請されていた場合のみ、可能です。当日は主催者が、指定する時間・場所で頒布を行なってください。詳細は公式サイトにて告知します。 ",
    "【頒布不可】問題集の頒布はご遠慮ください。 "
  ];

  var REMARK_media_template = [
    "【取材可】取材を希望するメディア関係者は、大会公式アドレスまでお問い合わせ願います。",
    "【取材不可】メディア等による取材は受け付けておりません。 "
  ];

  var REMARK_watch_template = [
    "【見学可能】本大会は無料にてご見学いただけますが、進行の妨げにならないようご配慮下さい。",
    "【見学有料】本大会の見学は有料となります。また、進行の妨げにならないようご配慮下さい。",
    "【事前申請必要】本大会の見学は席数が限られているため、事前申請が必要となります。詳細は公式サイトを御覧ください。",
    "【見学不可】本大会の見学はご遠慮ください。"
  ];

  var REMARK_private_record_template = [
    "【記録可能】参加者によるビデオ撮影、写真撮影、録音は全面的に認めます。また、写真や動画のインターネットへのアップロード等も認めますが、販売などの商用利用は固くお断りいたします。会場での機材のご使用の際は、他の参加者のみなさんのご迷惑とならないようご留意ください。 ",
    "【私的用途に限り記録可能】参加者によるビデオ撮影、写真撮影、録音は、私的利用に限り許可します。 これらの記録媒体の後日の一般販売および誰もが広く閲覧できるインターネットへのアップロード等は原則禁止とします（写真は、被写体全員の許可が得られていれば可能とします）。また、会場での機材のご使用の際は、他の参加者のみなさんのご迷惑とならないようご留意ください。 ",
    "【私的用途に限り録音のみ可能】参加者によるビデオ撮影、写真撮影は禁止とさせていただきます。録音に限り、私的利用に限り許可します。録音データの後日の一般販売および誰もが広く閲覧できるインターネットへのアップロード等は原則禁止とします。 ",
    "【記録不可】参加者によるビデオ撮影、写真撮影、録音は禁止とさせていただきます。 "
  ];

  var REMARK_public_record_template = [
    "【撮影後公開可能性あり】主催者および主催者が許可したメディア関係者や参加者による写真・ビデオ撮影および録音を行うことがあります。これらの記録媒体は、後日の「一般発売」「インターネットへのアップロード」「テレビや雑誌などを通じて公開」等が行われる可能性があります。 ",
    "【撮影後公開可能性あり、拒否者はマスク着用】主催者および主催者が許可したメディア関係者や参加者による写真・ビデオ撮影および録音を行うことがあります。これらの記録媒体は、後日の「一般発売」「インターネットへのアップロード」「テレビや雑誌などを通じて公開」等が行われる可能性があります。撮影後の公開を拒否されるという方は、マスク着用により意思表示をお願い致します。 ",
    "【撮影実施も、一般公開なし】主催者による写真・ビデオ撮影および録音を行うことがありますが、これらは内部資料とすることが目的であり、記録媒体の後日の一般発売およびインターネットへのアップロード等は行いません。 ",
    "【撮影なし】主催者による写真・ビデオ撮影および録音は行いません。 "
  ];

  var REMARK_result_template = [
    "【原則本名にて報告】この大会で予選上位となった方・本戦で上位進出した方などは、日本クイズ協会公式スケジュール管理サイトに原則本名で報告を行います。日本クイズ協会Web会員事業部では、大会結果の掲載、会報への掲載などを行う可能性があります。また、主催者が作成したホームページや問題集も同様のものとして扱います。本名での結果報告を避けたい参加者の方は、主催者にお問い合わせ下さい。 ",
    "【エントリー名にて報告】この大会で予選上位となった方・本戦で上位進出した方などは、日本クイズ協会公式スケジュール管理サイトにエントリーした名前で報告を行います。日本クイズ協会Web会員事業部では、大会結果の掲載、会報への掲載などを行う可能性があります。また、主催者が作成したホームページや問題集も同様のものとして扱います。 ",
    "【報告なし】このイベントは日本クイズ協会公式スケジュール管理サイトに結果報告を行いません。また、主催者が作成したホームページや問題集にも個人情報を掲載致しません。 "
  ];

  var addTemplate = function(templates, kind) {
    var templateDOM = $(`#REMARK_${kind}_template`);
    var buttonDOM = $(`#REMARK_${kind}_button`);
    var textDOM = $(`#REMARK_${kind}_text`);

    for (var i in templates) {
      templateDOM.append(`<div class="radio">
          <label for="eat_${i}" class="col">
            <input type="radio" id="${kind}_${i}" name="REMARK_${kind}_radio" value="${i}">
            ${templates[i]}
          </label>
        </div>`);
    }

    templateDOM.hide();

    buttonDOM.click(() => {
      console.log(kind);
      templateDOM.fadeToggle();
    });

    $(`input[name="REMARK_${kind}_radio"]`).click(() => {
      textDOM.val("");
      var value = $(`input[name="REMARK_${kind}_radio"]:checked`).val();
      console.log(value);
      textDOM.val(templates[parseInt(value)]);
    });
  };

  addTemplate(REMARK_eat_template, "eat");
  addTemplate(REMARK_sell_template, "sell");
  addTemplate(REMARK_media_template, "media");
  addTemplate(REMARK_watch_template, "watch");
  addTemplate(REMARK_private_record_template, "private_record");
  addTemplate(REMARK_public_record_template, "public_record");
  addTemplate(REMARK_result_template, "result");

  $("#REMARK_add_button").click(() => {
    var original = $("<div></div>", {"class": "row align-items-center"});

    var item = $("#REMARK_other_item").val();

    var textarea = $("<div></div>", {"class": "col-8"}).append(`<textarea name='REMARK_other["${item}"]' id="REMARK_other["${item}"]" rows="5" class="form-control"></textarea>`);

    var delete_button = $("<button></button>", {
      type: "button",
      "class": "btn btn-danger col-2 TS_delete"
    }).append("削除");

    original.attr('id', `REMARK_other["${item}"]`);

    original.append(`<div class="col-2">${item}</div>`).append(textarea).append(delete_button);

    $("#REMARK_other").append(original);

    $("#REMARK_other_item").val("");
  });

  $("#OWNER_message").append(`<input type="checkbox" name="OWNER_message_shown" value="OWNER_message_shown" checked id="OWNER_message_shown" />`).append(`<label for="OWNER_message_shown" class="checkbox">トップページの「お知らせ」にxxxxxを表示する．</label>`);

  $("#AGREEMENT_privacy_text").val(
    `個人情報については、主催者が、自ら取り決めた方法により、責任を持って適正な管理を行います。
また、一心精進に結果報告を行うイベントでは、事前もしくは当日のエントリーで個人情報を収集する際に
「大会後、氏名・所属・成績を一心精進に報告する可能性がある」ことを含む「プライバシーポリシー」を掲示し、
参加者に許諾を取ります。`);

  //イベント分類のポップオーバー
  $("#BASIC_category-pop").attr('data-content', categoryPopText);

  $("#BASIC_category-result-pop").attr('data-content', resultPopText);

  $("#BASIC_category-genre-pop").attr('data-content', genrePopText);

  $("#ENTRY_pop").attr('data-content', entryPopText);

  $("#REMARK_template-pop").attr('data-content', templatePopText);

  $("#SCHOOL_limit-abc-pop").attr('data-content', schoolAbcPopText);

  $("#AGREEMENT_inspection-pop").attr('data-content', "実際に伺う際には再度こちらから連絡を差し上げます。");

  $("#OWNER_topmessage-pop").attr('data-content', topmessagePopText);

  $("#MAP_keyword-pop").attr('data-content', mapKeywordPopText);

  $("[data-toggle=popover]").popover({
    trigger: 'hover', // click,hover,focus,manualを選択出来る
    html: true, // HTMLタグを含めるか
  });
});
