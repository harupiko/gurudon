'use strict';

// prepare mixlr node
const mixlrNode = document.createElement("div");
mixlrNode.setAttribute("style", "z-index: 1; position: absolute;");
mixlrNode.innerHTML = '<iframe src="https://mixlr.com/users/3494368/embed?color=203d2c&autoplay=true&artwork=false" width="100%" height="180px" scrolling="no" frameborder="no" marginheight="0" marginwidth="0"/>';
// add mixlr node
const drawerNodes = document.getElementsByClassName("drawer__inner__mastodon");
drawerNodes[0].insertBefore(mixlrNode,drawerNodes[0].firstChild);