module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[{"resolve":"/Users/cyrus/Documents/GitHub/digital-garden/node_modules/gatsby-remark-images","id":"28c42f28-53d0-5cae-aad5-aee248175898","name":"gatsby-remark-images","version":"3.11.0","pluginOptions":{"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]},{"resolve":"/Users/cyrus/Documents/GitHub/digital-garden/node_modules/gatsby-remark-embedder","id":"29a53549-09c0-5d3a-8a1d-e29b733288ee","name":"gatsby-remark-embedder","version":"4.1.0","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]}],"extensions":[".mdx",".md",".markdown"],"gatsbyRemarkPlugins":["gatsby-remark-embedder","gatsby-plugin-twitter",{"resolve":"gatsby-remark-images","options":{"maxWidth":1200,"wrapperStyle":"border-radius: 4px; max-width: 100%; margin-bottom: 0;","linkImagesToOriginal":false,"quality":100}}],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/cyrus/Documents/GitHub/digital-garden"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-twitter/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Maggie Appleton","short_name":"Maggie_Appleton","description":"Maggie Appleton is an art director and anthropological designer. This is her digital garden for growing visual explanations about technology, culture, and programming","start_url":"/","background_color":"#FFFDFD","theme_color":"#FD9C4B","display":"standalone","icons":[{"src":"/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}],"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-45097160-1","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('../node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"src/lib/typography"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
