var hegoru = function(str) {
  var ret = '';
  var input = $('#input').val();
  var d1 = "がぎぐげござじずぜぞだぢづでどばびぶべぼガギグゲゴザジズゼゾダヂヅデドバビブベボ";
  var d2 = "かきくけこさしすせそたちつてとはひふへほカキクケコサシスセソタチツテトハヒフヘホ";

  for (var i = 0, l = str.length; i < l; i++) {
    var c = str.substr(i, 1);
    // Step 1: Remove dakuten from dakuten-kana.
    if (c.match(/[がぎぐげござじずぜどだぢづでどばびぶべぼガギグゲゴザジズゼゾダヂヅデドバビブベボ]/)) {
      var index = d1.indexOf(c);
      if (index != -1) {
        c = d2[index];
      }
    }
    ret += c;
    // Step 2: Add dakuten to all-kana.
    if (c.match(/[ぁ-んァ-ン]/)) {
      ret += '゛';
    }
  }

  return ret;
};
