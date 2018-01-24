/**
 * Some spoilers functionality.
 *
 * HTML:
 * <div class="spoiler">
 *   <div class="spoiler-title"></div>
 *   <div class="spoiler-body"></div>
 * </div>
 *
 * CSS:
 * .spoiler-body_hide { display: none; }
 */ 
$(document).ready(function() {
    $('.spoiler-body').addClass('spoiler-body_hide');
    $('.spoiler-title').click(function() {
        $(this).parent().children('.spoiler-body').toggleClass('spoiler-body_hide');
    });
});
