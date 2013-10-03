function clickButton(locale) {
    window.location = locale;
}var hideOthers = new Array();var classIdentifier = "class";if (navigator.appName == 'Microsoft Internet Explorer') {
    classIdentifier = "className";
}function getElementsByName_iefix(tag, name) {
    var elem = document.getElementsByTagName(tag);    var arr = new Array();    for (i = 0, iarr = 0; i < elem.length; i++) {
        att = elem[i].getAttribute(classIdentifier);        if (att == name) {
            arr[iarr] = elem[i];            iarr++;
        }
    }    return arr;
}function showElem(elemId) {
    for (var i = 0; i < hideOthers.length; i++) {
        var len2 = getElementsByName_iefix("DIV", hideOthers[i]).length;        for (var t = 0; t < len2; t++) {
            getElementsByName_iefix("DIV", hideOthers[i])[t].style.visibility = "hidden";
        }
    }    var len = getElementsByName_iefix("DIV", elemId).length;    for (var i = 0; i < len; i++) {
        getElementsByName_iefix("DIV", elemId)[i].style.visibility = "visible";
    }
}function hideElem(elemId) {
    var len = getElementsByName_iefix("DIV", elemId).length;    for (var i = 0; i < len; i++) {
        getElementsByName_iefix("DIV", elemId)[i].style.visibility = "hidden";
    }
}function is_child_of(parent, child) {
    if (child != null) {
        while (child.parentNode) {
            if ((child = child.parentNode) == parent) {
                return true;
            }
        }
    }    return false;
}function is_sibling_of(parent, child) {
    if (child != null) {
        var elemId = parent.getAttribute(classIdentifier);        var childTag = child.tagName;        while (childTag != "DIV") {
            child = child.parentNode;            childTag = child.tagName;            if (child == window) {
                return false;
            }
        }        var childId = child.getAttribute(classIdentifier);        if (childId == elemId) {
            return true;
        }
    }    return false;
}function fixOnMouseOut(element, event, jscp) {
    var current_mouse_target = null;    if (event.toElement) {
        current_mouse_target = event.toElement;
    }    else if (event.relatedTarget) {
        current_mouse_target = event.relatedTarget;
    }    if (!is_child_of(element, current_mouse_target) && !is_sibling_of(element, current_mouse_target) && element != current_mouse_target) {
        eval(jscp);
    }
}