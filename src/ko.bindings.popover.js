/*
 *
 * Knockout-popover
 * https://github.com/s-stude/knockout-popover
 *
 * Knockout custom binding for Twitter Bootstrap Popover
 *
 * Created by: Akim Khalilov (https://github.com/s-stude)
 *
 */

/*
 * HOW TO USE:
 *
 * TBD...
 *
 * */

(function (window, document, $, ko, undefined) {

    var defaults = {
            title: 'Default Title',
            content: 'Default content',
            placement: 'top',
            trigger: 'hover',
            container: 'body'
        },
        cssInserted = false;

    ko.bindingHandlers.popover = {

        init: function (element, valueAccessor, allBindingsAccessor) {
            var $elem = $(element),
                isPopover = valueAccessor(),
                popoverOptions = allBindingsAccessor().popoverOptions;

            if (!cssInserted) {
                insertCustomCss();
                cssInserted = true;
            }

            if (isPopover) {
                initPopover($elem);
                return;
            }

            if (!popoverOptions || !popoverOptions.elem) {
                throw new Error('Invalid popoverOptions syntax');
            }

            var elems = $elem.find(popoverOptions.elem);

            if (!elems) {
                throw new Error('Element $ELEM$ was not found'.replace('$ELEM$', popoverOptions.elem));
            }

            initPopover(elems);
        }
    };

    function initPopover(elems) {
        elems.each(function () {
            $(this).popover($.extend({}, defaults, {
                title: $(this).data('popover-title'),
                content: $(this).data('popover-content'),
                placement: $(this).data('popover-placement'),
                trigger: $(this).data('popover-trigger')
            }));
        });

    }

    function insertCustomCss() {
        var css = [
            '<style>',
            '.ko-popover{border: 0 dashed grey;border-width: 0 0 1px 0;border-bottom-color: grey;}',
            '</style>'
        ];

        document.write(css.join(''));
    }

})(window, document, jQuery, ko)
