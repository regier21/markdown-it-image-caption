'use strict'

const defaults = {
  prefix: "◎"
};

module.exports = function cap_plugin(md, opts={}) {
  // console.log(md.renderer.rules);
  const settings = Object.assign({}, defaults, opts);
  var old = md.renderer.rules.image;

  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    if (tokens[idx].attrs[2]) {
      let attrs = tokens[idx].attrs;
      let title = attrs[2][1];
      let src = attrs[0][1];
      let alt = tokens[idx].content;
      return `<figure><img src="${src}" alt="${alt}" title="${title}" /><figcaption align="center"><small>${settings.prefix} ${title}</small></figcaption></figure>`;
    }
    return old(tokens, idx, options, env, self);
  };
};
