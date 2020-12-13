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
    return choice(['最近', 'この前から', '以前から', '先週から', '今年に入ってから']);
  }
  //  ~ のですが
  function think(){
    return choice(['思う', '疑っている', '邪推している', '予想している', '、私の直感が反応している']);
  }


  // ==========================
  var mSet = [
      { // 動物シリーズ
        'subject':['猫' , '犬', '鹿' , '鹿', 'クマ', 'シロナガスクジラ', 'シャチ', 'サル','トカゲ', 'サソリ', 'ラクダ','ペンギン', 'ニワトリ','ウシ','モンシロチョウ', 'カマキリ', 'イノシシ' ],
          'fact':['環境に悪い' , '実はかわいい', '人格を持っている', '高い知能を持っている', '霊感がある', '思ったより長生きである', '激減している', '性格が悪い', '意外と美味しい', '毒を持っている', '乱獲されている', '大量に群れている', '従順に飼い主に従うことを', '人に襲いかかっているのを'],
          'varb':['知って', '聞いて', '見て', '教わって'],
          'fact_emotion':['眼からウロコだった', '考えを改めさせられた', 'いろいろと妄想した', '飼ってみようかなと思った', '絶対に飼いたくない', 'むしろ食べてみたい', '捕まえてみたい', 'ペットにしてみたい'],
          'event':['大声で鳴いていて', 'すごいスピードで移動していて','暗闇で急に出くわして', '空からふってきて'],
          'question': ['どう思いますか？', '何か思い出はありますか？'] 
      },
      { // 無機物シリーズ
        'subject':['パソコン' , 'マウス', 'シャーペン' , 'iPhone', 'ディスプレイ', 'ヘッドホン', '腕時計', '時計','靴', 'Android', 'iPad', 'タブレット', 'ハードディスク', 'SDカード'],
          'fact':['環境に悪い' , '隠れたブーム', '自作できる', '長持ちしない', '値上がりしている', '国家の陰謀である'],
          'varb':['知って', '聞いて', '見て', '教わって'],
          'fact_emotion':['眼からウロコだった', '考えを改めさせられた', 'いろいろと妄想した', '手に入れたいと思った', '分解してみたいと思った', '即刻棄てようと思った', '誰かにプレゼントしようと思った'],
          'event': ['ぶっ壊れて', '煙を出し始めて', '喋り始めて', '新バージョンが出て','少し力を加えたら壊れてしまい', '雨でびしょびしょになったのに案外無事で'],
          'question': ['どう思いますか？'] 
      },
       { // IT宗教シリーズ
        'subject':['emacs' , 'vim', 'eclipse' , 'C言語', 'Objective-C', 'Swift', 'Java', 'C#','Go言語', 'Lisp', 'Scala'],
          'fact':['指が疲れる' , '無駄に複雑', '若者に不人気', '異常に捗る', 'そろそろおしまい', 'ろくでもない', '人を選ぶ', '言うほどでもない', 'やっと人気が出てきた', 'よく調べると面白い'],
          'varb':['知って', '聞いて', '見て', '教わって'],
          'fact_emotion':['眼からウロコだった', '考えを改めさせられた', 'いろいろと妄想した', '更に調査しようと思った', '誰かに聞いてみようと思った', '試しに使ってみようと思った', 'もう使うのをやめようと思った', '勉強してみようと思った'],
          'event':['Twitterで炎上していて', 'プロジェクトで採用されていて', '教科書に出てきて'],
          'question': ['どう思いますか？', '何かこだわりはありますか？'] 
      },
       { // アニメシリーズ
        'subject':['エヴァ' , 'けいおん！', 'ドラゴンボール' , '幽☆遊☆白書', '魔法陣グルグル', 'スラムダンク', 'ゾイド', '攻殻機動隊','アイドルマスター', '忍空', '鬼滅の刃', '君の名は'],
          'fact':['おもしろい' , 'よくわからない', '見るべきアニメ', '言うほどではない', '深い', 'パクリ', '必修科目'],
          'varb':['知って', '聞いて', '見て', '教わって', '大流行して'],
          'fact_emotion':['目からウロコだった', '考えを改めさせられた', 'いろいろと妄想した', '今度見てみようと思った', '見ないで良かったと思った', '友達から借りようと思った'],
          'event':['おもしろくて', '思っていたのと違って', '予想より面白くて', '主人公がかっこよくて'],
          'question': ['どう思いますか？', '何かご存知ですか？'] 
      },
 
    ];
  var set = choice(mSet);
  var mSubject = set['subject'];
  var mFact = set['fact'];
  var mVarb = set['varb'];
  var mFactEmotion = set['fact_emotion'];
  var mQuestion = set['question'];
  var mEvent = set['event'];
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
  function varb(){
    return choice(mVarb);
  }
  function factEmotion(){
    return choice(mFactEmotion);
  }
  function event(){
    return choice(mEvent);
  }
 
  var lines = [];
 var f1 = function(){
    // ===========================
    //  subjectがfactであり、それがemotionであった事を述べ、questionにつなぐ形式
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
    s += varb() + '、' + factEmotion() + 'のですが';
    s += "、";
    lines = lines.concat(s);

    // 相手
    s = "お二人は";
    s += n_subject;
    s += "について";
    s += question();
    // ===========================
    lines = lines.concat(s);
  }
  var f2 = function(){
    // ===========================
    //  subjectがfactではないかと思っており、questionにつなぐ形式
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
    s += "ではないかと";
    s += think() + 'のですが';
    s += "、";
    lines = lines.concat(s);

    // 相手
    s = "お二人は";
    s += n_subject;
    s += "について";
    s += question();
    // ===========================
    lines = lines.concat(s);
  }
  var f3 = function(){
    // ===========================
    //  subjectがeventしていてfact_emotionと感じ、questionにつなぐ形式
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
    // 事件
    s += event() + '、';
    // 接続
    s += factEmotion();
    s += 'のですが';
    s += "、";
    lines = lines.concat(s);

    // 相手
    s = "お二人は";
    s += n_subject;
    s += "について";
    s += question();
    // ===========================
    lines = lines.concat(s);
  }
 
  choice([f1,f2,f3])();
 

  mkTwit(lines.join("\n"));


  var h = "";
  for(var i = 0; i < lines.length; i ++){
    h += '<div class="line"><span class="l">'+ lines[i] + '</span></div>';
  }
  $('.main').html(h);

});
