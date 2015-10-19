StackExchange.postValidation=function(){function e(e,t,n,i){var a=e.find('input[type="submit"]:visible'),o=a.length&&a.is(":enabled");o&&a.attr("disabled",!0),r(e,i),s(e,t,n,i),l(e),u(e),d(e);var h=function(){1!=t||e.find(C).length?(c(e,i),o&&a.attr("disabled",!1)):setTimeout(h,250)};h()}function t(t,i,r,s,c){e(t,i,s,r);var l,u=function(e){if(e.success)if(c)c(e);else{var n=window.location.href.split("#")[0],a=e.redirectTo.split("#")[0];0==a.indexOf("/")&&(a=window.location.protocol+"//"+window.location.hostname+a),l=!0,window.location=e.redirectTo,n.toLowerCase()==a.toLowerCase()&&window.location.reload(!0)}else e.captchaHtml?e.nocaptcha?StackExchange.nocaptcha.init(e.captchaHtml,u):StackExchange.captcha.init(e.captchaHtml,u):e.errors?(t.find("input[name=priorAttemptCount]").val(function(e,t){return(+t+1||0).toString()}),p(e.errors,t,i,r,e.warnings)):t.find('input[type="submit"]:visible').parent().showErrorMessage(e.message)};t.submit(function(){if(t.find("#answer-from-ask").is(":checked"))return!0;var e=t.find(E);if("[Edit removed during grace period]"==$.trim(e.val()))return m(e,["Comment reserved for system use. Please use an appropriate comment."],h()),!1;o(),StackExchange.navPrevention&&StackExchange.navPrevention.stop();var i=t.find('input[type="submit"]:visible');if(i.parent().addSpinner(),StackExchange.helpers.disableSubmitButton(t),StackExchange.options.site.enableNewTagCreationWarning){var s=t.find(C).parent().find("input#tagnames"),c=s.prop("defaultValue");if(s.val()!==c)return $.ajax({"type":"GET","url":"/posts/new-tags-warning","dataType":"json","data":{"tags":s.val()},"success":function(e){e.showWarning?i.loadPopup({"html":e.html,"dontShow":!0,"prepend":!0,"loaded":function(e){n(e,t,l,r,u)}}):a(t,r,l,u)}}),!1}return setTimeout(function(){a(t,r,l,u)},0),!1})}function n(e,t,n,o,r){e.bind("popupClose",function(){i(t,n)}),e.find(".submit-post").click(function(i){return StackExchange.helpers.closePopups(e),a(t,o,n,r),i.preventDefault(),!1}),e.show()}function i(e,t){StackExchange.helpers.removeSpinner(),t||StackExchange.helpers.enableSubmitButton(e)}function a(e,t,n,a){$.ajax({"type":"POST","dataType":"json","data":e.serialize(),"url":e.attr("action"),"success":a,"error":function(){var n;switch(t){case"question":n="An error occurred submitting the question.";break;case"answer":n="An error occurred submitting the answer.";break;case"edit":n="An error occurred submitting the edit.";break;case"tags":n="An error occurred submitting the tags.";break;case"post":default:n="An error occurred submitting the post."}e.find('input[type="submit"]:visible').parent().showErrorMessage(n)},"complete":function(){i(e,n)}})}function o(){for(var e=0;e<M.length;e++)clearTimeout(M[e]);M=[]}function r(e,t){var n=e.find(k);n.length&&n.blur(function(){M.push(setTimeout(function(){var i=n.val(),a=$.trim(i);if(0==a.length)return x(e,n),void 0;var o=n.data("min-length");if(o&&a.length<o)return m(n,[function(e){return 1==e.minLength?"Title must be at least "+e.minLength+" character.":"Title must be at least "+e.minLength+" characters."}({"minLength":o})],h()),void 0;var r=n.data("max-length");return r&&a.length>r?(m(n,[function(e){return 1==e.maxLength?"Title cannot be longer than "+e.maxLength+" character.":"Title cannot be longer than "+e.maxLength+" characters."}({"maxLength":r})],h()),void 0):($.ajax({"type":"POST","url":"/posts/validate-title","data":{"title":i},"success":function(i){i.success?x(e,n):m(n,i.errors.Title,h()),"edit"!=t&&g(e,n,i.warnings.Title)},"error":function(){x(e,n)}}),void 0)},A))})}function s(e,t,n,i){var a=e.find(S);a.length&&a.blur(function(){M.push(setTimeout(function(){var o=a.val(),r=$.trim(o);if(0==r.length)return x(e,a),void 0;if(5==t){var s=a.data("min-length");return s&&r.length<s?m(a,[function(e){return"Wiki Body must be at least "+e.minLength+" characters. You entered "+e.actual+"."}({"minLength":s,"actual":r.length})],h()):x(e,a),void 0}(1==t||2==t)&&$.ajax({"type":"POST","url":"/posts/validate-body","data":{"body":o,"oldBody":a.prop("defaultValue"),"isQuestion":1==t,"isSuggestedEdit":n},"success":function(t){t.success?x(e,a):m(a,t.errors.Body,h()),"edit"!=i&&g(e,a,t.warnings.Body)},"error":function(){x(e,a)}})},A))})}function c(e,t){var n=e.find(C);if(n.length){var i=n.parent().find("input#tagnames");i.blur(function(){M.push(setTimeout(function(){var a=i.val(),o=$.trim(a);return 0==o.length?(x(e,n),void 0):($.ajax({"type":"POST","url":"/posts/validate-tags","data":{"tags":a,"oldTags":i.prop("defaultValue")},"success":function(i){if(i.success?x(e,n):m(n,i.errors.Tags,h()),"edit"!=t&&(g(e,n,i.warnings.Tags),i.source&&i.source.Tags&&i.source.Tags.length)){var a=$("#post-form input[name='warntags']");a&&StackExchange.using("gps",function(){var e=a.val()||"";$.each(i.source.Tags,function(t,n){n&&!a.data("tag-"+n)&&(a.data("tag-"+n,n),e=e.length?e+" "+n:n,StackExchange.gps.track("tag_warning.show",{"tag":n},!0))}),a.val(e),StackExchange.gps.sendPending()})}},"error":function(){x(e,n)}}),void 0)},A))})}}function l(e){var t=e.find(E);t.length&&t.blur(function(){M.push(setTimeout(function(){var n=t.val(),i=$.trim(n);if(0==i.length)return x(e,t),void 0;var a=t.data("min-length");if(a&&i.length<a)return m(t,[function(e){return 1==e.minLength?"Your edit summary must be at least "+e.minLength+" character.":"Your edit summary must be at least "+e.minLength+" characters."}({"minLength":a})],h()),void 0;var o=t.data("max-length");return o&&i.length>o?(m(t,[function(e){return 1==e.maxLength?"Your edit summary cannot be longer than "+e.maxLength+" character.":"Your edit summary cannot be longer than "+e.maxLength+" characters."}({"maxLength":o})],h()),void 0):(x(e,t),void 0)},A))})}function u(e){var t=e.find(T);t.length&&t.blur(function(){M.push(setTimeout(function(){var n=t.val(),i=$.trim(n);if(0==i.length)return x(e,t),void 0;var a=t.data("min-length");if(a&&i.length<a)return m(t,[function(e){return"Wiki Excerpt must be at least "+e.minLength+" characters; you entered "+e.actual+"."}({"minLength":a,"actual":i.length})],h()),void 0;var o=t.data("max-length");return o&&i.length>o?(m(t,[function(e){return"Wiki Excerpt cannot be longer than "+e.maxLength+" characters; you entered "+e.actual+"."}({"maxLength":o,"actual":i.length})],h()),void 0):(x(e,t),void 0)},A))})}function d(e){var t=e.find(I);t.length&&t.blur(function(){M.push(setTimeout(function(){var n=t.val(),i=$.trim(n);return 0==i.length?(x(e,t),void 0):/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,20}$/i.test(n)?(x(e,t),void 0):(m(t,["This email does not appear to be valid."],f()),void 0)},A))})}function h(){var e=$("#sidebar, .sidebar").first().width()||270;return{"position":{"my":"left top","at":"right center"},"css":{"max-width":e,"min-width":e},"closeOthers":!1}}function f(){var e=$("#sidebar, .sidebar").first().width()||270;return{"position":{"my":"left top","at":"right center"},"css":{"min-width":e},"closeOthers":!1}}function p(e,t,n,i,a){if(e){var o=function(){var n=0,o=t.find(C),r=t.find(k),s=t.find(S);m(r,e.Title,h())?n++:x(t,r),a&&g(t,r,a.Title),m(s,e.Body,h())?n++:x(t,s),a&&g(t,s,a.Body),m(o,e.Tags,h())?n++:x(t,o),a&&g(t,o,a.Tags),m(t.find(E),e.EditComment,h())?n++:x(t,t.find(E)),m(t.find(T),e.Excerpt,h())?n++:x(t,t.find(T)),m(t.find(I),e.Email,f())?n++:x(t,t.find(I));var c=t.find(".general-error"),l=e.General&&e.General.length>0;if(l||n>0){if(!c.length){var u=t.find('input[type="submit"]:visible');u.before('<div class="general-error-container"><div class="general-error"></div><br class="cbt" /></div>'),c=t.find(".general-error")}if(l)m(c,e.General,{"position":"inline","css":{"float":"left","margin-bottom":"10px"},"closeOthers":!1,"dismissable":!1});else{x(t,c);var d;switch(i){case"question":d=function(e){return 1==e.specificErrorCount?"Your question couldn't be submitted. Please see the error above.":"Your question couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"answer":d=function(e){return 1==e.specificErrorCount?"Your answer couldn't be submitted. Please see the error above.":"Your answer couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"edit":d=function(e){return 1==e.specificErrorCount?"Your edit couldn't be submitted. Please see the error above.":"Your edit couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"tags":d=function(e){return 1==e.specificErrorCount?"Your tags couldn't be submitted. Please see the error above.":"Your tags couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"post":default:d=function(e){return 1==e.specificErrorCount?"Your post couldn't be submitted. Please see the error above.":"Your post couldn't be submitted. Please see the errors above."}({"specificErrorCount":n})}c.text(d)}}else t.find(".general-error-container").remove();var p;y()&&($("#sidebar").animate({"opacity":.4},500),p=setInterval(function(){y()||($("#sidebar").animate({"opacity":1},500),clearInterval(p))},500));var v;t.find(".validation-error").each(function(){var e=$(this).offset().top;(!v||v>e)&&(v=e)});var b=function(){for(var e=0;3>e;e++)t.find(".message").animate({"left":"+=5px"},100).animate({"left":"-=5px"},100)};if(v){var w=$(".review-bar").length;v=Math.max(0,v-(w?125:30)),$("html, body").animate({"scrollTop":v},b)}else b()},r=function(){1!=n||t.find(C).length?o():setTimeout(r,250)};r()}}function g(e,t,n){var i=h();if(i.type="warning",!n||0==n.length)return b(e,t),!1;var a=t.data("error-popup"),o=0;return a&&(o=a.height()+5),v(t,n,i,o)}function m(e,t,n){return n.type="error",v(e,t,n)}function v(e,t,n,i){var a,r=n.type;if(!(t&&0!=t.length&&e.length&&$("html").has(e).length))return!1;if(a=1==t.length?t[0]:"<ul><li>"+t.join("</li><li>")+"</li></ul>",a&&a.length>0){var s=e.data(r+"-popup");if(s&&s.is(":visible")){var c=e.data(r+"-message");if(c==a)return s.animateOffsetTop&&s.animateOffsetTop(i||0),!0;s.fadeOutAndRemove()}i>0&&(n.position.offsetTop=i);var l=StackExchange.helpers.showMessage(e,a,n);return l.find("a").attr("target","_blank"),l.click(o),e.addClass("validation-"+r).data(r+"-popup",l).data(r+"-message",a),!0}return!1}function b(e,t){w("warning",e,t)}function x(e,t){w("error",e,t)}function w(e,t,n){if(!n||0==n.length)return!1;var i=n.data(e+"-popup");return i&&i.is(":visible")&&i.fadeOutAndRemove(),n.removeClass("validation-"+e),n.removeData(e+"-popup"),n.removeData(e+"-message"),t.find(".validation-"+e).length||t.find(".general-"+e+"-container").remove(),!0}function y(){var e=!1,t=$("#sidebar, .sidebar").first();if(!t.length)return!1;var n=t.offset().left;return $(".message").each(function(){var t=$(this);return t.offset().left+t.outerWidth()>n?(e=!0,!1):void 0}),e}var k="input#title",S="textarea.wmd-input:first",C=".tag-editor",E="input[id^=edit-comment]",T="textarea#excerpt",I="input#m-address",M=[],A=250;return{"initOnBlur":e,"initOnBlurAndSubmit":t,"showErrorsAfterSubmission":p,"getSidebarPopupOptions":h}}();