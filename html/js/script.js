$(function(){

  function mkTwit(s){
    $('#twit').attr('href','https://twitter.com/intent/tweet?text=' + encodeURIComponent(s) + '&hashtags=ふつおた&url=' + encodeURIComponent(document.location.href))
  }

  function choice(ar){
    var r = Math.floor(Math.random() * ar.length);
    return ar[r];
  }
  var hira = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん';
  var kana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

  // 名前っぽいものをつくる
  function name(){
    var s = "";
    var r = ((0 | Math.random()*5) + 2);
    var kswitch = (Math.random()*2|0);
    for(var i = 0; i < r; i ++){
      s += choice(kswitch?kana:hira);
    }
    return s;
  }
  // あいさつ
  function aisatu(){
    var s = "";
    s += choice(['はじめまして','こんにちわ','こんにちは','おはこんばんちわー', 'やっほー', 'ども', 'お世話になっております']);
    s += " ";
    s += choice(['初めて投稿させていただきます。', 'いつも楽しく聞いています', 'ラジオネーム"' + name() + '"と申します'])
    return [s];
  }
  // 時制
  function time(){
    return choice(['最近', 'この前', '以前', '先週', '今年に入ってから']);
  }
  // （リスナーが）動詞
  function varb(){
    return choice(['知った', '聞いた', '見た']);
  }
 
  // ==========================
  var mSet = [
      { // 動物シリーズ
        'subject':['猫' , '犬', '鹿' , '鹿', 'クマ', 'シロナガスクジラ', 'シャチ', 'サル','トカゲ', 'サソリ', 'ラクダ','ペンギン', 'ニワトリ','ウシ','モンシロチョウ', 'カマキリ', 'イノシシ' ],
          'fact':['環境に悪い' , '実はかわいい', '人格を持っている', '高い知能を持っている', '霊感がある', '思ったより長生きである', '激減している', '性格が悪い'],
          'question': ['どう思いますか？', '何か思い出はありますか？'] 
      },
      { // 無機物シリーズ
        'subject':['パソコン' , 'マウス', 'シャーペン' , 'iPhone', 'ディスプレイ', 'ヘッドホン', '腕時計', '時計','靴'],
          'fact':['環境に悪い' , '隠れたブーム', '自作できる', '長持ちしない', '値上がりしている', '国家の陰謀である'],
          'question': ['どう思いますか？'] 
      },
       { // IT宗教シリーズ
        'subject':['emacs' , 'vim', 'eclipse' , 'C言語', 'Objective-C', 'Swift', 'Java', 'C#','Go言語', 'Lisp', 'Scala'],
          'fact':['指が疲れる' , '無駄に複雑', '若者に不人気', '異常に捗る', 'そろそろおしまい', 'ろくでもない', '人を選ぶ', '言うほどでもない', 'やっと人気が出てきた', 'よく調べると面白い'],
          'question': ['どう思いますか？', '何かこだわりはありますか？'] 
      },
       { // アニメシリーズ
        'subject':['エヴァ' , 'けいおん！', 'ドラゴンボール' , '幽☆遊☆白書', '魔法陣グルグル', 'スラムダンク', 'ゾイド', '攻殻機動隊','アイドルマスター', '忍空'],
          'fact':['おもしろい' , 'よくわからない', '見るべきアニメ', '言うほどではない', '深い', 'パクリ', '必修科目'],
          'question': ['どう思いますか？', '何かご存知ですか？'] 
      },
 
    ];
  var set = choice(mSet);
  var mSubject = set['subject'];
  var mFact = set['fact'];
  var mQuestion = set['question'];
  // 主格
  function subject(){
    return choice(mSubject);
  }
  // 主格に関する事実
  function fact(){
    return choice(mFact);
  }
  // 質問
  function question(){
    return choice(mQuestion);
  }
 
  var lines = [];
  // ===========================
  //  subjectがfactであることを述べ、questionにつなぐ形式
  // ===========================
  var n_subject;
  var s = "";
  // あいさつ生成
  lines = lines.concat(aisatu());
  // 時制生成
  s += time() + '、';
  // 主体生成
  s += n_subject = subject();
  // 接続
  s += "が";
  // 事実
  s += fact();
  // 接続
  s += "ということを";
  s += varb() + "のですが";
  s += "、";
  lines = lines.concat(s);

  // 相手
  s = "お二人は";
  s += n_subject;
  s += "について";
  s += question();
  // ===========================
 
  lines = lines.concat(s);

  mkTwit(lines.concat(""));


  var h = "";
  for(var i = 0; i < lines.length; i ++){
    h += '<div class="line"><span class="l">'+ lines[i] + '</span></div>';
  }
  $('.main').html(h);

});
