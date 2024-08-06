import*as e from"../common/common.js";import*as t from"../i18n/i18n.js";const a={preserveLogUponNavigation:"Preserve log upon navigation",doNotPreserveLogUponNavigation:"Do not preserve log upon navigation",pauseOnExceptions:"Pause on exceptions",doNotPauseOnExceptions:"Do not pause on exceptions",disableJavascript:"Disable JavaScript",enableJavascript:"Enable JavaScript",disableAsyncStackTraces:"Disable async stack traces",doNotCaptureAsyncStackTraces:"Do not capture async stack traces",captureAsyncStackTraces:"Capture async stack traces",showRulersOnHover:"Show rulers on hover",doNotShowRulersOnHover:"Do not show rulers on hover",showAreaNames:"Show area names",showGridNamedAreas:"Show grid named areas",doNotShowGridNamedAreas:"Do not show grid named areas",showTrackSizes:"Show track sizes",showGridTrackSizes:"Show grid track sizes",doNotShowGridTrackSizes:"Do not show grid track sizes",extendGridLines:"Extend grid lines",doNotExtendGridLines:"Do not extend grid lines",showLineLabels:"Show line labels",hideLineLabels:"Hide line labels",showLineNumbers:"Show line numbers",showLineNames:"Show line names",showPaintFlashingRectangles:"Show paint flashing rectangles",hidePaintFlashingRectangles:"Hide paint flashing rectangles",showLayoutShiftRegions:"Show layout shift regions",hideLayoutShiftRegions:"Hide layout shift regions",highlightAdFrames:"Highlight ad frames",doNotHighlightAdFrames:"Do not highlight ad frames",showLayerBorders:"Show layer borders",hideLayerBorders:"Hide layer borders",showCoreWebVitalsOverlay:"Show Core Web Vitals overlay",hideCoreWebVitalsOverlay:"Hide Core Web Vitals overlay",showFramesPerSecondFpsMeter:"Show frames per second (FPS) meter",hideFramesPerSecondFpsMeter:"Hide frames per second (FPS) meter",showScrollPerformanceBottlenecks:"Show scroll performance bottlenecks",hideScrollPerformanceBottlenecks:"Hide scroll performance bottlenecks",emulateAFocusedPage:"Emulate a focused page",doNotEmulateAFocusedPage:"Do not emulate a focused page",doNotEmulateCssMediaType:"Do not emulate CSS media type",noEmulation:"No emulation",emulateCssPrintMediaType:"Emulate CSS print media type",print:"print",emulateCssScreenMediaType:"Emulate CSS screen media type",screen:"screen",query:"query",emulateCssMediaType:"Emulate CSS media type",doNotEmulateCss:"Do not emulate CSS {PH1}",emulateCss:"Emulate CSS {PH1}",emulateCssMediaFeature:"Emulate CSS media feature {PH1}",doNotEmulateAnyVisionDeficiency:"Do not emulate any vision deficiency",emulateBlurredVision:"Emulate blurred vision",emulateReducedContrast:"Emulate reduced contrast",blurredVision:"Blurred vision",reducedContrast:"Reduced contrast",emulateProtanopia:"Emulate protanopia (no red)",protanopia:"Protanopia (no red)",emulateDeuteranopia:"Emulate deuteranopia (no green)",deuteranopia:"Deuteranopia (no green)",emulateTritanopia:"Emulate tritanopia (no blue)",tritanopia:"Tritanopia (no blue)",emulateAchromatopsia:"Emulate achromatopsia (no color)",achromatopsia:"Achromatopsia (no color)",emulateVisionDeficiencies:"Emulate vision deficiencies",disableLocalFonts:"Disable local fonts",enableLocalFonts:"Enable local fonts",disableAvifFormat:"Disable `AVIF` format",enableAvifFormat:"Enable `AVIF` format",disableWebpFormat:"Disable `WebP` format",enableWebpFormat:"Enable `WebP` format",customFormatters:"Custom formatters",networkRequestBlocking:"Network request blocking",enableNetworkRequestBlocking:"Enable network request blocking",disableNetworkRequestBlocking:"Disable network request blocking",enableCache:"Enable cache",disableCache:"Disable cache (while DevTools is open)",emulateAutoDarkMode:"Emulate auto dark mode",enableRemoteFileLoading:"Allow `DevTools` to load resources, such as source maps, from remote file paths. Disabled by default for security reasons."},s=t.i18n.registerUIStrings("core/sdk/sdk-meta.ts",a),o=t.i18n.getLazilyComputedLocalizedString.bind(void 0,s);e.Settings.registerSettingExtension({storageType:"Synced",settingName:"skip-stack-frames-pattern",settingType:"regex",defaultValue:"/node_modules/|/bower_components/"}),e.Settings.registerSettingExtension({storageType:"Synced",settingName:"skip-content-scripts",settingType:"boolean",defaultValue:!0}),e.Settings.registerSettingExtension({storageType:"Synced",settingName:"automatically-ignore-list-known-third-party-scripts",settingType:"boolean",defaultValue:!0}),e.Settings.registerSettingExtension({storageType:"Synced",settingName:"enable-ignore-listing",settingType:"boolean",defaultValue:!0}),e.Settings.registerSettingExtension({category:"CONSOLE",storageType:"Synced",title:o(a.preserveLogUponNavigation),settingName:"preserve-console-log",settingType:"boolean",defaultValue:!1,options:[{value:!0,title:o(a.preserveLogUponNavigation)},{value:!1,title:o(a.doNotPreserveLogUponNavigation)}]}),e.Settings.registerSettingExtension({category:"DEBUGGER",settingName:"pause-on-exception-enabled",settingType:"boolean",defaultValue:!1,options:[{value:!0,title:o(a.pauseOnExceptions)},{value:!1,title:o(a.doNotPauseOnExceptions)}]}),e.Settings.registerSettingExtension({settingName:"pause-on-caught-exception",settingType:"boolean",defaultValue:!1}),e.Settings.registerSettingExtension({settingName:"pause-on-uncaught-exception",settingType:"boolean",defaultValue:!1}),e.Settings.registerSettingExtension({category:"DEBUGGER",title:o(a.disableJavascript),settingName:"java-script-disabled",settingType:"boolean",storageType:"Session",order:1,defaultValue:!1,options:[{value:!0,title:o(a.disableJavascript)},{value:!1,title:o(a.enableJavascript)}]}),e.Settings.registerSettingExtension({category:"DEBUGGER",title:o(a.disableAsyncStackTraces),settingName:"disable-async-stack-traces",settingType:"boolean",defaultValue:!1,order:2,options:[{value:!0,title:o(a.doNotCaptureAsyncStackTraces)},{value:!1,title:o(a.captureAsyncStackTraces)}]}),e.Settings.registerSettingExtension({category:"DEBUGGER",settingName:"breakpoints-active",settingType:"boolean",storageType:"Session",defaultValue:!0}),e.Settings.registerSettingExtension({category:"ELEMENTS",storageType:"Synced",title:o(a.showRulersOnHover),settingName:"show-metrics-rulers",settingType:"boolean",options:[{value:!0,title:o(a.showRulersOnHover)},{value:!1,title:o(a.doNotShowRulersOnHover)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:"GRID",storageType:"Synced",title:o(a.showAreaNames),settingName:"show-grid-areas",settingType:"boolean",options:[{value:!0,title:o(a.showGridNamedAreas)},{value:!1,title:o(a.doNotShowGridNamedAreas)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:"GRID",storageType:"Synced",title:o(a.showTrackSizes),settingName:"show-grid-track-sizes",settingType:"boolean",options:[{value:!0,title:o(a.showGridTrackSizes)},{value:!1,title:o(a.doNotShowGridTrackSizes)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:"GRID",storageType:"Synced",title:o(a.extendGridLines),settingName:"extend-grid-lines",settingType:"boolean",options:[{value:!0,title:o(a.extendGridLines)},{value:!1,title:o(a.doNotExtendGridLines)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:"GRID",storageType:"Synced",title:o(a.showLineLabels),settingName:"show-grid-line-labels",settingType:"enum",options:[{title:o(a.hideLineLabels),text:o(a.hideLineLabels),value:"none"},{title:o(a.showLineNumbers),text:o(a.showLineNumbers),value:"lineNumbers"},{title:o(a.showLineNames),text:o(a.showLineNames),value:"lineNames"}],defaultValue:"lineNumbers"}),e.Settings.registerSettingExtension({category:"RENDERING",settingName:"show-paint-rects",settingType:"boolean",storageType:"Session",options:[{value:!0,title:o(a.showPaintFlashingRectangles)},{value:!1,title:o(a.hidePaintFlashingRectangles)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:"RENDERING",settingName:"show-layout-shift-regions",settingType:"boolean",storageType:"Session",options:[{value:!0,title:o(a.showLayoutShiftRegions)},{value:!1,title:o(a.hideLayoutShiftRegions)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:"RENDERING",settingName:"show-ad-highlights",settingType:"boolean",storageType:"Session",options:[{value:!0,title:o(a.highlightAdFrames)},{value:!1,title:o(a.doNotHighlightAdFrames)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:"RENDERING",settingName:"show-debug-borders",settingType:"boolean",storageType:"Session",options:[{value:!0,title:o(a.showLayerBorders)},{value:!1,title:o(a.hideLayerBorders)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:"RENDERING",settingName:"show-web-vitals",settingType:"boolean",storageType:"Session",options:[{value:!0,title:o(a.showCoreWebVitalsOverlay)},{value:!1,title:o(a.hideCoreWebVitalsOverlay)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:"RENDERING",settingName:"show-fps-counter",settingType:"boolean",storageType:"Session",options:[{value:!0,title:o(a.showFramesPerSecondFpsMeter)},{value:!1,title:o(a.hideFramesPerSecondFpsMeter)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:"RENDERING",settingName:"show-scroll-bottleneck-rects",settingType:"boolean",storageType:"Session",options:[{value:!0,title:o(a.showScrollPerformanceBottlenecks)},{value:!1,title:o(a.hideScrollPerformanceBottlenecks)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:"RENDERING",title:o(a.emulateAFocusedPage),settingName:"emulate-page-focus",settingType:"boolean",storageType:"Local",defaultValue:!1,options:[{value:!0,title:o(a.emulateAFocusedPage)},{value:!1,title:o(a.doNotEmulateAFocusedPage)}]}),e.Settings.registerSettingExtension({category:"RENDERING",settingName:"emulated-css-media",settingType:"enum",storageType:"Session",defaultValue:"",options:[{title:o(a.doNotEmulateCssMediaType),text:o(a.noEmulation),value:""},{title:o(a.emulateCssPrintMediaType),text:o(a.print),value:"print"},{title:o(a.emulateCssScreenMediaType),text:o(a.screen),value:"screen"}],tags:[o(a.query)],title:o(a.emulateCssMediaType)}),e.Settings.registerSettingExtension({category:"RENDERING",settingName:"emulated-css-media-feature-prefers-color-scheme",settingType:"enum",storageType:"Session",defaultValue:"",options:[{title:o(a.doNotEmulateCss,{PH1:"prefers-color-scheme"}),text:o(a.noEmulation),value:""},{title:o(a.emulateCss,{PH1:"prefers-color-scheme: light"}),text:t.i18n.lockedLazyString("prefers-color-scheme: light"),value:"light"},{title:o(a.emulateCss,{PH1:"prefers-color-scheme: dark"}),text:t.i18n.lockedLazyString("prefers-color-scheme: dark"),value:"dark"}],tags:[o(a.query)],title:o(a.emulateCssMediaFeature,{PH1:"prefers-color-scheme"})}),e.Settings.registerSettingExtension({category:"RENDERING",settingName:"emulated-css-media-feature-forced-colors",settingType:"enum",storageType:"Session",defaultValue:"",options:[{title:o(a.doNotEmulateCss,{PH1:"forced-colors"}),text:o(a.noEmulation),value:""},{title:o(a.emulateCss,{PH1:"forced-colors: active"}),text:t.i18n.lockedLazyString("forced-colors: active"),value:"active"},{title:o(a.emulateCss,{PH1:"forced-colors: none"}),text:t.i18n.lockedLazyString("forced-colors: none"),value:"none"}],tags:[o(a.query)],title:o(a.emulateCssMediaFeature,{PH1:"forced-colors"})}),e.Settings.registerSettingExtension({category:"RENDERING",settingName:"emulated-css-media-feature-prefers-reduced-motion",settingType:"enum",storageType:"Session",defaultValue:"",options:[{title:o(a.doNotEmulateCss,{PH1:"prefers-reduced-motion"}),text:o(a.noEmulation),value:""},{title:o(a.emulateCss,{PH1:"prefers-reduced-motion: reduce"}),text:t.i18n.lockedLazyString("prefers-reduced-motion: reduce"),value:"reduce"}],tags:[o(a.query)],title:o(a.emulateCssMediaFeature,{PH1:"prefers-reduced-motion"})}),e.Settings.registerSettingExtension({settingName:"emulated-css-media-feature-prefers-contrast",settingType:"enum",storageType:"Session",defaultValue:"",options:[{title:o(a.doNotEmulateCss,{PH1:"prefers-contrast"}),text:o(a.noEmulation),value:""},{title:o(a.emulateCss,{PH1:"prefers-contrast: more"}),text:t.i18n.lockedLazyString("prefers-contrast: more"),value:"more"},{title:o(a.emulateCss,{PH1:"prefers-contrast: less"}),text:t.i18n.lockedLazyString("prefers-contrast: less"),value:"less"},{title:o(a.emulateCss,{PH1:"prefers-contrast: custom"}),text:t.i18n.lockedLazyString("prefers-contrast: custom"),value:"custom"}],tags:[o(a.query)],title:o(a.emulateCssMediaFeature,{PH1:"prefers-contrast"})}),e.Settings.registerSettingExtension({settingName:"emulated-css-media-feature-prefers-reduced-data",settingType:"enum",storageType:"Session",defaultValue:"",options:[{title:o(a.doNotEmulateCss,{PH1:"prefers-reduced-data"}),text:o(a.noEmulation),value:""},{title:o(a.emulateCss,{PH1:"prefers-reduced-data: reduce"}),text:t.i18n.lockedLazyString("prefers-reduced-data: reduce"),value:"reduce"}],title:o(a.emulateCssMediaFeature,{PH1:"prefers-reduced-data"})}),e.Settings.registerSettingExtension({settingName:"emulated-css-media-feature-prefers-reduced-transparency",settingType:"enum",storageType:"Session",defaultValue:"",options:[{title:o(a.doNotEmulateCss,{PH1:"prefers-reduced-transparency"}),text:o(a.noEmulation),value:""},{title:o(a.emulateCss,{PH1:"prefers-reduced-transparency: reduce"}),text:t.i18n.lockedLazyString("prefers-reduced-transparency: reduce"),value:"reduce"}],title:o(a.emulateCssMediaFeature,{PH1:"prefers-reduced-transparency"})}),e.Settings.registerSettingExtension({settingName:"emulated-css-media-feature-color-gamut",settingType:"enum",storageType:"Session",defaultValue:"",options:[{title:o(a.doNotEmulateCss,{PH1:"color-gamut"}),text:o(a.noEmulation),value:""},{title:o(a.emulateCss,{PH1:"color-gamut: srgb"}),text:t.i18n.lockedLazyString("color-gamut: srgb"),value:"srgb"},{title:o(a.emulateCss,{PH1:"color-gamut: p3"}),text:t.i18n.lockedLazyString("color-gamut: p3"),value:"p3"},{title:o(a.emulateCss,{PH1:"color-gamut: rec2020"}),text:t.i18n.lockedLazyString("color-gamut: rec2020"),value:"rec2020"}],title:o(a.emulateCssMediaFeature,{PH1:"color-gamut"})}),e.Settings.registerSettingExtension({category:"RENDERING",settingName:"emulated-vision-deficiency",settingType:"enum",storageType:"Session",defaultValue:"none",options:[{title:o(a.doNotEmulateAnyVisionDeficiency),text:o(a.noEmulation),value:"none"},{title:o(a.emulateBlurredVision),text:o(a.blurredVision),value:"blurredVision"},{title:o(a.emulateReducedContrast),text:o(a.reducedContrast),value:"reducedContrast"},{title:o(a.emulateProtanopia),text:o(a.protanopia),value:"protanopia"},{title:o(a.emulateDeuteranopia),text:o(a.deuteranopia),value:"deuteranopia"},{title:o(a.emulateTritanopia),text:o(a.tritanopia),value:"tritanopia"},{title:o(a.emulateAchromatopsia),text:o(a.achromatopsia),value:"achromatopsia"}],tags:[o(a.query)],title:o(a.emulateVisionDeficiencies)}),e.Settings.registerSettingExtension({category:"RENDERING",settingName:"local-fonts-disabled",settingType:"boolean",storageType:"Session",options:[{value:!0,title:o(a.disableLocalFonts)},{value:!1,title:o(a.enableLocalFonts)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:"RENDERING",settingName:"avif-format-disabled",settingType:"boolean",storageType:"Session",options:[{value:!0,title:o(a.disableAvifFormat)},{value:!1,title:o(a.enableAvifFormat)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:"RENDERING",settingName:"webp-format-disabled",settingType:"boolean",storageType:"Session",options:[{value:!0,title:o(a.disableWebpFormat)},{value:!1,title:o(a.enableWebpFormat)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:"CONSOLE",title:o(a.customFormatters),settingName:"custom-formatters",settingType:"boolean",defaultValue:!1}),e.Settings.registerSettingExtension({category:"NETWORK",title:o(a.networkRequestBlocking),settingName:"request-blocking-enabled",settingType:"boolean",storageType:"Session",defaultValue:!1,options:[{value:!0,title:o(a.enableNetworkRequestBlocking)},{value:!1,title:o(a.disableNetworkRequestBlocking)}]}),e.Settings.registerSettingExtension({category:"NETWORK",title:o(a.disableCache),settingName:"cache-disabled",settingType:"boolean",order:0,defaultValue:!1,userActionCondition:"hasOtherClients",options:[{value:!0,title:o(a.disableCache)},{value:!1,title:o(a.enableCache)}]}),e.Settings.registerSettingExtension({category:"RENDERING",title:o(a.emulateAutoDarkMode),settingName:"emulate-auto-dark-mode",settingType:"boolean",storageType:"Session",defaultValue:!1}),e.Settings.registerSettingExtension({category:"SOURCES",storageType:"Synced",title:o(a.enableRemoteFileLoading),settingName:"network.enable-remote-file-loading",settingType:"boolean",defaultValue:!1});