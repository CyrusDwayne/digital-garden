var plugins = [{
      plugin: require('/Users/cyrus/Documents/GitHub/digital-garden/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[{"resolve":"/Users/cyrus/Documents/GitHub/digital-garden/node_modules/gatsby-remark-images","id":"28c42f28-53d0-5cae-aad5-aee248175898","name":"gatsby-remark-images","version":"3.11.0","pluginOptions":{"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]},{"resolve":"/Users/cyrus/Documents/GitHub/digital-garden/node_modules/gatsby-remark-embedder","id":"29a53549-09c0-5d3a-8a1d-e29b733288ee","name":"gatsby-remark-embedder","version":"4.1.0","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]}],"extensions":[".mdx",".md",".markdown"],"gatsbyRemarkPlugins":["gatsby-remark-embedder","gatsby-plugin-twitter",{"resolve":"gatsby-remark-images","options":{"maxWidth":1200,"wrapperStyle":"border-radius: 4px; max-width: 100%; margin-bottom: 0;","linkImagesToOriginal":false,"quality":100}}],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/cyrus/Documents/GitHub/digital-garden"},
    },{
      plugin: require('/Users/cyrus/Documents/GitHub/digital-garden/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/cyrus/Documents/GitHub/digital-garden/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Maggie Appleton","short_name":"Maggie_Appleton","description":"Maggie Appleton is an art director and anthropological designer. This is her digital garden for growing visual explanations about technology, culture, and programming","start_url":"/","background_color":"#FFFDFD","theme_color":"#FD9C4B","display":"standalone","icons":[{"src":"/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}],"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":null},
    },{
      plugin: require('/Users/cyrus/Documents/GitHub/digital-garden/node_modules/gatsby-plugin-feed-mdx/gatsby-ssr'),
      options: {"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ","feeds":[{"query":"\n              {\n                allMdx(\n                  sort: { order: DESC, fields: [frontmatter___updated] },\n                ) {\n                  edges {\n                    node {\n                      excerpt(pruneLength: 120)\n                      frontmatter {\n                        title\n                        updated\n                        slug\n                      }\n                    }\n                  }\n                }\n              }\n            ","output":"/rss.xml","title":"Maggieappleton.com"}]},
    },{
      plugin: require('/Users/cyrus/Documents/GitHub/digital-garden/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-45097160-1","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('/Users/cyrus/Documents/GitHub/digital-garden/node_modules/gatsby-plugin-typography/gatsby-ssr'),
      options: {"plugins":[],"pathToConfigModule":"src/lib/typography"},
    },{
      plugin: require('/Users/cyrus/Documents/GitHub/digital-garden/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/cyrus/Documents/GitHub/digital-garden/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
