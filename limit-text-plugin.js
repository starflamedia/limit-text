var limitText = limitText || {};
limitText.textMap = limitText.textMap || [];
limitText.charCount = function(selector, setLength, suffix) {

  var obj = $(selector);

  // record original text the first time the function is called
  if (!limitText.textMap[selector]) {
    limitText.textMap[selector] = obj.text();
  }

  // initialize all local variables
  var chars = limitText.textMap[selector];
  var suffix = suffix || "...";
  var maxLength;
  if (!isNaN(setLength) && (setLength !== -1)) {
    maxLength = setLength;
  } else if (setLength === -1) {
      maxLength = limitText.textMap[selector];
  } else {
    maxLength = Math.floor((setLength ? setLength(obj.parent().width()) : obj.parent().width()));
  }

  // calculate text
  if (chars.length > maxLength) {
    end = chars.substr(0, maxLength).lastIndexOf(" ");
    chars = chars.substr(0, end) + suffix;
  }

  // set text on the object
  obj.text(chars);
};
// END limitText.charCount
