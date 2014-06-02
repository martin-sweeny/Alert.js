/**
 * [AlertMessage description]
 * @param {[type]} options [description]
 */
function Alert (options) {

    var defaults = {
        title     : '',
        message   : 'Welcome to Alert.js',
        icon      : '',
        tagName   : 'div',
        className : 'er-popup-message',
        parent    : document.getElementsByClassName('messages-container')[0],
        duration  : 3500
    },
    config       = {},
    self         = this;

    // If a string is passed, we wanna just show that string as the message, otherwise we take in
    // all the other params
    if ( typeof options === 'string' ) {

        config = defaults;
        config.message = options;

    } else {

        for ( var prop in defaults ) {
            if ( defaults.hasOwnProperty(prop) ) {
                config[prop] = options[prop] || defaults[prop];
            }
        }

    }

    /**
     * BREAK THIS DOWN INTO TWO FUNCTIONS
     *
     * Creates and returns an HTML DOM element
     *
     * @param  {String} tagName Either a tag name or a parsable HTML string
     * @param  {String} content Parsable HTML string to be placed into innerHTML
     * @param  {Object} attrs   An object with key/value pairs representing attribute values
     * @return {Object}         An HTML DOM element
     */
    var _makeElement = function (tagName, content, attrs) {

        if ( tagName[0] === "<" ) {
            // We are receiving an HTML string
            var div = document.createElement('div');
            div.innerHTML = tagName;
            return div.childNodes;
        }

        // We are receiving a tag name
        var el = document.createElement(tagName);
        el.innerHTML = content;
        for ( var prop in attrs ) {
            if ( attrs.hasOwnProperty(prop) ) {
                el.setAttribute(prop, attrs[prop]);
            }
        }

        // Give back the element
        return el;

    },

    // /**
    //  * Determines and returns the browser-specific animationEnd event name
    //  *
    //  * @return {String} The browser-specific animationEnd event name
    //  */
    // _whichAnimationEvent = (function (){
    //     var t;
    //     var el = document.createElement('fakeelement');
    //     var animations = {
    //       'animation'       :'animationEnd',
    //       'OAnimation'      :'oAnimationEnd',
    //       'MSAnimation'     :'msAnimationEnd',
    //       'MozAnimation'    :'animationEnd',
    //       'WebkitAnimation' :'webkitAnimationEnd'
    //     }

    //     for(t in animations){
    //         if( el.style[t] !== undefined ){
    //             return animations[t];
    //         }
    //     }
    // } ()),

    // /**
    //  * Determines and returns the browser-specific transitionEnd event name
    //  *
    //  * @return {String} The browser-specific transitionEnd event name
    //  */
    // _whichTransitionEvent = (function (){
    //     var t;
    //     var el = document.createElement('fakeelement');
    //     var transitions = {
    //       'animation'       :'transitionEnd',
    //       'OAnimation'      :'oTransitionEnd',
    //       'MSAnimation'     :'msTransitionEnd',
    //       'MozAnimation'    :'transitionEnd',
    //       'WebkitAnimation' :'webkitTransitionEnd'
    //     }

    //     for(t in transitions){
    //         if( el.style[t] !== undefined ){
    //             return transitions[t];
    //         }
    //     }
    // } ()),

    // /**
    //  * Stolen from http://stackoverflow.com/a/8742305/1007638
    //  *
    //  * Sets a CSS3 property that requires a prefix
    //  *
    //  * @param {[type]} el   [description]
    //  * @param {[type]} prop [description]
    //  * @param {[type]} val  [description]
    //  */
    // _setCss3Style = function (el, prop, val) {

    //     if ( typeof el.style === 'undefined' ) {
    //       return false;
    //     }

    //     var vendors = ['-moz-', '-webkit-', '-o-', '-ms-', '-khtml-', ''];

    //     function _toCamelCase(str) {
    //         return str.toLowerCase().replace(/(\-[a-z])/g, function ($1) {
    //             return $1.toUpperCase().replace('-', '');
    //         });
    //     };

    //     for (var i = 0, l = vendors.length; i < l; i++) {
    //       el.style[_toCamelCase(vendors[i] + prop)] = val;
    //     }

    // },

    /**
     * [_init description]
     * @return {[type]} [description]
     */
    _init = function () {

        self.title   = config.title;
        self.message = config.message;
        self.icon    = config.icon;

        var el = _makeElement(config.tagName, '', {
                class : config.className
            }),
            message = _makeElement('span', config.message, {
                class : 'message'
            }),
            title = _makeElement('span', config.title, {
                class : 'header'
            });
            // icon = _makeElement('span', config.icon, {
            //     class : 'icon'
            // });

        // el.appendChild(icon);
        el.appendChild(title);
        el.appendChild(message);

        el.timeout = setTimeout(function () {
            el.style.marginTop = el.outerHeight * -1 + 'px';
        }, config.duration);

        config.parent.appendChild(el);

        var computedStyle = window.getComputedStyle(el),
            totalHeight   = el.offsetHeight + parseInt(computedStyle.marginTop) + parseInt(computedStyle.marginBottom);

        el.outerHeight = totalHeight;

        self.element = el;

        return self;
    };

    return _init();

}
