import postcssPrefixSelector from 'postcss-prefix-selector'

export function postcssIsolateStyles(
  options = {},
) {
  return postcssPrefixSelector({
    prefix: ':not(:where(.vp-tui-raw, .vp-tui-raw *))',
    includeFiles: [/index\.css/],
    transform(prefix, _selector) {
      const [selector, pseudo = ''] = _selector.split(/(:\S*)$/)
      return selector + prefix + pseudo
    },
    ...options,
  })
}
