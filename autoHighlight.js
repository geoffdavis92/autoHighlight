// autoHighlight.js

$('*.autoHi-js').each(function() {
    var text = $(this).html();
    text = text.replace('document','<i id="key">Document</i>');
    text = text.replace('body','<span id="meth">body</span>');
    $(this).html(text);
});