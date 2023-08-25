const getEncrypt = require('../guard/encrypt')

var v_saf
!(function () {
  var n = Function.toString,
    t = [],
    i = [],
    o = [].indexOf.bind(t),
    e = [].push.bind(t),
    r = [].push.bind(i)
  function u(n, t) {
    return -1 == o(n) && (e(n), r(`function ${t || n.name || ''}() { [native code] }`)), n
  }
  Object.defineProperty(Function.prototype, 'toString', {
    enumerable: !1,
    configurable: !0,
    writable: !0,
    value: function () {
      return ('function' == typeof this && i[o(this)]) || n.call(this)
    },
  }),
    u(Function.prototype.toString, 'toString'),
    (v_saf = u)
})()

function _inherits(t, e) {
  ;(t.prototype = Object.create(e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && Object.setPrototypeOf(t, e)
}
Object.defineProperty(Object.prototype, Symbol.toStringTag, {
  get() {
    return Object.getPrototypeOf(this).constructor.name
  },
})
var v_new_toggle = true
Object.freeze(console) //only for javascript-obfuscator anti console debug.
var v_console_logger = console.log
var v_console_log = function () {
  if (!v_new_toggle) {
    v_console_logger.apply(this, arguments)
  }
}
var v_random = (function () {
  var seed = 276951438
  return function random() {
    return (seed = (seed * 9301 + 49297) % 233280), seed / 233280
  }
})()
var v_new = function (v) {
  var temp = v_new_toggle
  v_new_toggle = true
  var r = new v()
  v_new_toggle = temp
  return r
}

EventTarget = v_saf(function EventTarget() {})
Navigator = v_saf(function Navigator() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
  this._plugins = typeof PluginArray == 'undefined' ? [] : v_new(PluginArray)
  this._mimeTypes = typeof MimeTypeArray == 'undefined' ? [] : v_new(MimeTypeArray)
})
History = v_saf(function History() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
CSSStyleDeclaration = v_saf(function CSSStyleDeclaration() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
AudioParam = v_saf(function AudioParam() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
Event = v_saf(function Event() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
AudioBuffer = v_saf(function AudioBuffer() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
CanvasRenderingContext2D = v_saf(function CanvasRenderingContext2D() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
PluginArray = v_saf(function PluginArray() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
  this[0] = v_new(Plugin)
  this[0].description = 'Portable Document Format'
  this[0].filename = 'internal-pdf-viewer'
  this[0].length = 2
  this[0].name = 'PDF Viewer'
  this[1] = v_new(Plugin)
  this[1].description = 'Portable Document Format'
  this[1].filename = 'internal-pdf-viewer'
  this[1].length = 2
  this[1].name = 'Chrome PDF Viewer'
  this[2] = v_new(Plugin)
  this[2].description = 'Portable Document Format'
  this[2].filename = 'internal-pdf-viewer'
  this[2].length = 2
  this[2].name = 'Chromium PDF Viewer'
  this[3] = v_new(Plugin)
  this[3].description = 'Portable Document Format'
  this[3].filename = 'internal-pdf-viewer'
  this[3].length = 2
  this[3].name = 'Microsoft Edge PDF Viewer'
  this[4] = v_new(Plugin)
  this[4].description = 'Portable Document Format'
  this[4].filename = 'internal-pdf-viewer'
  this[4].length = 2
  this[4].name = 'WebKit built-in PDF'
})
Plugin = v_saf(function Plugin() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
MimeType = v_saf(function MimeType() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
WebGLRenderingContext = v_saf(function WebGLRenderingContext() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
  function WebGLBuffer() {}
  function WebGLProgram() {}
  function WebGLShader() {}
  this._toggle = {}
  this.createBuffer = function () {
    v_console_log('  [*] WebGLRenderingContext -> createBuffer[func]')
    return v_new(WebGLBuffer)
  }
  this.createProgram = function () {
    v_console_log('  [*] WebGLRenderingContext -> createProgram[func]')
    return v_new(WebGLProgram)
  }
  this.createShader = function () {
    v_console_log('  [*] WebGLRenderingContext -> createShader[func]')
    return v_new(WebGLShader)
  }
  this.getSupportedExtensions = function () {
    v_console_log('  [*] WebGLRenderingContext -> getSupportedExtensions[func]')
    return [
      'ANGLE_instanced_arrays',
      'EXT_blend_minmax',
      'EXT_color_buffer_half_float',
      'EXT_disjoint_timer_query',
      'EXT_float_blend',
      'EXT_frag_depth',
      'EXT_shader_texture_lod',
      'EXT_texture_compression_bptc',
      'EXT_texture_compression_rgtc',
      'EXT_texture_filter_anisotropic',
      'WEBKIT_EXT_texture_filter_anisotropic',
      'EXT_sRGB',
      'KHR_parallel_shader_compile',
      'OES_element_index_uint',
      'OES_fbo_render_mipmap',
      'OES_standard_derivatives',
      'OES_texture_float',
      'OES_texture_float_linear',
      'OES_texture_half_float',
      'OES_texture_half_float_linear',
      'OES_vertex_array_object',
      'WEBGL_color_buffer_float',
      'WEBGL_compressed_texture_s3tc',
      'WEBKIT_WEBGL_compressed_texture_s3tc',
      'WEBGL_compressed_texture_s3tc_srgb',
      'WEBGL_debug_renderer_info',
      'WEBGL_debug_shaders',
      'WEBGL_depth_texture',
      'WEBKIT_WEBGL_depth_texture',
      'WEBGL_draw_buffers',
      'WEBGL_lose_context',
      'WEBKIT_WEBGL_lose_context',
      'WEBGL_multi_draw',
    ]
  }
  var self = this
  this.getExtension = function (key) {
    v_console_log('  [*] WebGLRenderingContext -> getExtension[func]:', key)
    class WebGLDebugRendererInfo {
      get UNMASKED_VENDOR_WEBGL() {
        self._toggle[37445] = 1
        return 37445
      }
      get UNMASKED_RENDERER_WEBGL() {
        self._toggle[37446] = 1
        return 37446
      }
    }
    class EXTTextureFilterAnisotropic {}
    class WebGLLoseContext {
      loseContext() {}
      restoreContext() {}
    }
    if (key == 'WEBGL_debug_renderer_info') {
      var r = new WebGLDebugRendererInfo()
    }
    if (key == 'EXT_texture_filter_anisotropic') {
      var r = new EXTTextureFilterAnisotropic()
    }
    if (key == 'WEBGL_lose_context') {
      var r = new WebGLLoseContext()
    } else {
      var r = new WebGLDebugRendererInfo()
    }
    return r
  }
  this.getParameter = function (key) {
    v_console_log('  [*] WebGLRenderingContext -> getParameter[func]:', key)
    if (this._toggle[key]) {
      if (key == 37445) {
        return 'Google Inc. (NVIDIA)'
      }
      if (key == 37446) {
        return 'ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5671)'
      }
    } else {
      if (key == 33902) {
        return new Float32Array([1, 1])
      }
      if (key == 33901) {
        return new Float32Array([1, 1024])
      }
      if (key == 35661) {
        return 32
      }
      if (key == 34047) {
        return 16
      }
      if (key == 34076) {
        return 16384
      }
      if (key == 36349) {
        return 1024
      }
      if (key == 34024) {
        return 16384
      }
      if (key == 34930) {
        return 16
      }
      if (key == 3379) {
        return 16384
      }
      if (key == 36348) {
        return 30
      }
      if (key == 34921) {
        return 16
      }
      if (key == 35660) {
        return 16
      }
      if (key == 36347) {
        return 4095
      }
      if (key == 3386) {
        return new Int32Array([32767, 32767])
      }
      if (key == 3410) {
        return 8
      }
      if (key == 7937) {
        return 'WebKit WebGL'
      }
      if (key == 35724) {
        return 'WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)'
      }
      if (key == 3415) {
        return 0
      }
      if (key == 7936) {
        return 'WebKit'
      }
      if (key == 7938) {
        return 'WebGL 1.0 (OpenGL ES 2.0 Chromium)'
      }
      if (key == 3411) {
        return 8
      }
      if (key == 3412) {
        return 8
      }
      if (key == 3413) {
        return 8
      }
      if (key == 3414) {
        return 24
      }
      return null
    }
  }
  this.getContextAttributes = function () {
    v_console_log('  [*] WebGLRenderingContext -> getContextAttributes[func]')
    return {
      alpha: true,
      antialias: true,
      depth: true,
      desynchronized: false,
      failIfMajorPerformanceCaveat: false,
      powerPreference: 'default',
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
      stencil: false,
      xrCompatible: false,
    }
  }
  this.getShaderPrecisionFormat = function (a, b) {
    v_console_log('  [*] WebGLRenderingContext -> getShaderPrecisionFormat[func]')
    function WebGLShaderPrecisionFormat() {}
    var r1 = v_new(WebGLShaderPrecisionFormat)
    r1.rangeMin = 127
    r1.rangeMax = 127
    r1.precision = 23
    var r2 = v_new(WebGLShaderPrecisionFormat)
    r2.rangeMin = 31
    r2.rangeMax = 30
    r2.precision = 0
    if (a == 35633 && b == 36338) {
      return r1
    }
    if (a == 35633 && b == 36337) {
      return r1
    }
    if (a == 35633 && b == 36336) {
      return r1
    }
    if (a == 35633 && b == 36341) {
      return r2
    }
    if (a == 35633 && b == 36340) {
      return r2
    }
    if (a == 35633 && b == 36339) {
      return r2
    }
    if (a == 35632 && b == 36338) {
      return r1
    }
    if (a == 35632 && b == 36337) {
      return r1
    }
    if (a == 35632 && b == 36336) {
      return r1
    }
    if (a == 35632 && b == 36341) {
      return r2
    }
    if (a == 35632 && b == 36340) {
      return r2
    }
    if (a == 35632 && b == 36339) {
      return r2
    }
    throw Error('getShaderPrecisionFormat')
  }
  v_saf(this.createBuffer, 'createBuffer')
  v_saf(this.createProgram, 'createProgram')
  v_saf(this.createShader, 'createShader')
  v_saf(this.getSupportedExtensions, 'getSupportedExtensions')
  v_saf(this.getExtension, 'getExtension')
  v_saf(this.getParameter, 'getParameter')
  v_saf(this.getContextAttributes, 'getContextAttributes')
  v_saf(this.getShaderPrecisionFormat, 'getShaderPrecisionFormat')
})
WebGLShaderPrecisionFormat = v_saf(function WebGLShaderPrecisionFormat() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
DOMTokenList = v_saf(function DOMTokenList() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
Storage = v_saf(function Storage() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
HTMLCollection = v_saf(function HTMLCollection() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
HTMLAllCollection = v_saf(function HTMLAllCollection() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
NodeList = v_saf(function NodeList() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
Image = v_saf(function Image() {
  return v_new(HTMLImageElement)
})
Selection = v_saf(function Selection() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
ResizeObserver = v_saf(function ResizeObserver() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
MimeTypeArray = v_saf(function MimeTypeArray() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
  this[0] = v_new(Plugin)
  this[0].description = 'Portable Document Format'
  this[0].enabledPlugin = { 0: {}, 1: {} }
  this[0].suffixes = 'pdf'
  this[0].type = 'application/pdf'
  this[1] = v_new(Plugin)
  this[1].description = 'Portable Document Format'
  this[1].enabledPlugin = { 0: {}, 1: {} }
  this[1].suffixes = 'pdf'
  this[1].type = 'text/pdf'
})
Screen = v_saf(function Screen() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(Screen, EventTarget)
Node = v_saf(function Node() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(Node, EventTarget)
XMLHttpRequestEventTarget = v_saf(function XMLHttpRequestEventTarget() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(XMLHttpRequestEventTarget, EventTarget)
BaseAudioContext = v_saf(function BaseAudioContext() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(BaseAudioContext, EventTarget)
AudioNode = v_saf(function AudioNode() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(AudioNode, EventTarget)
OfflineAudioCompletionEvent = v_saf(function OfflineAudioCompletionEvent() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(OfflineAudioCompletionEvent, Event)
MediaQueryList = v_saf(function MediaQueryList() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(MediaQueryList, EventTarget)
MessageEvent = v_saf(function MessageEvent() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(MessageEvent, Event)
Document = v_saf(function Document() {})
_inherits(Document, Node)
Element = v_saf(function Element() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(Element, Node)
XMLHttpRequest = v_saf(function XMLHttpRequest() {})
_inherits(XMLHttpRequest, XMLHttpRequestEventTarget)
AudioScheduledSourceNode = v_saf(function AudioScheduledSourceNode() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(AudioScheduledSourceNode, AudioNode)
DynamicsCompressorNode = v_saf(function DynamicsCompressorNode() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(DynamicsCompressorNode, AudioNode)
OfflineAudioContext = v_saf(function OfflineAudioContext() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(OfflineAudioContext, BaseAudioContext)
HTMLElement = v_saf(function HTMLElement() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(HTMLElement, Element)
OscillatorNode = v_saf(function OscillatorNode() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(OscillatorNode, AudioScheduledSourceNode)
HTMLScriptElement = v_saf(function HTMLScriptElement() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(HTMLScriptElement, HTMLElement)
HTMLStyleElement = v_saf(function HTMLStyleElement() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(HTMLStyleElement, HTMLElement)
HTMLAnchorElement = v_saf(function HTMLAnchorElement() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
  v_hook_href(this, 'HTMLAnchorElement', location.href)
})
_inherits(HTMLAnchorElement, HTMLElement)
HTMLIFrameElement = v_saf(function HTMLIFrameElement() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(HTMLIFrameElement, HTMLElement)
HTMLImageElement = v_saf(function HTMLImageElement() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(HTMLImageElement, HTMLElement)
HTMLInputElement = v_saf(function HTMLInputElement() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(HTMLInputElement, HTMLElement)
HTMLCanvasElement = v_saf(function HTMLCanvasElement() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(HTMLCanvasElement, HTMLElement)
HTMLLinkElement = v_saf(function HTMLLinkElement() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(HTMLLinkElement, HTMLElement)
HTMLMediaElement = v_saf(function HTMLMediaElement() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(HTMLMediaElement, HTMLElement)
HTMLTextAreaElement = v_saf(function HTMLTextAreaElement() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(HTMLTextAreaElement, HTMLElement)
Window = v_saf(function Window() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(Window, EventTarget)
HTMLDocument = v_saf(function HTMLDocument() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
  Object.defineProperty(this, 'location', {
    get() {
      return location
    },
  })
})
_inherits(HTMLDocument, Document)
HTMLHeadElement = v_saf(function HTMLHeadElement() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(HTMLHeadElement, HTMLElement)
HTMLBodyElement = v_saf(function HTMLBodyElement() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(HTMLBodyElement, HTMLElement)
Location = v_saf(function Location() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
Performance = v_saf(function Performance() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(Performance, EventTarget)
PerformanceEntry = v_saf(function PerformanceEntry() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
PerformanceElementTiming = v_saf(function PerformanceElementTiming() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(PerformanceElementTiming, PerformanceEntry)
PerformanceEventTiming = v_saf(function PerformanceEventTiming() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(PerformanceEventTiming, PerformanceEntry)
PerformanceLongTaskTiming = v_saf(function PerformanceLongTaskTiming() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(PerformanceLongTaskTiming, PerformanceEntry)
PerformanceMark = v_saf(function PerformanceMark() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(PerformanceMark, PerformanceEntry)
PerformanceMeasure = v_saf(function PerformanceMeasure() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(PerformanceMeasure, PerformanceEntry)
PerformanceNavigation = v_saf(function PerformanceNavigation() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
PerformanceResourceTiming = v_saf(function PerformanceResourceTiming() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(PerformanceResourceTiming, PerformanceEntry)
PerformanceNavigationTiming = v_saf(function PerformanceNavigationTiming() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(PerformanceNavigationTiming, PerformanceResourceTiming)
PerformanceObserver = v_saf(function PerformanceObserver() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
PerformanceObserverEntryList = v_saf(function PerformanceObserverEntryList() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
PerformancePaintTiming = v_saf(function PerformancePaintTiming() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(PerformancePaintTiming, PerformanceEntry)
PerformanceServerTiming = v_saf(function PerformanceServerTiming() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
PerformanceTiming = v_saf(function PerformanceTiming() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
HTMLUnknownElement = v_saf(function HTMLUnknownElement() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(HTMLUnknownElement, HTMLElement)
Touch = v_saf(function Touch() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
UIEvent = v_saf(function UIEvent() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(UIEvent, Event)
TouchEvent = v_saf(function TouchEvent() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(TouchEvent, UIEvent)
MouseEvent = v_saf(function MouseEvent() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(MouseEvent, UIEvent)
PointerEvent = v_saf(function PointerEvent() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(PointerEvent, MouseEvent)
HTMLDivElement = v_saf(function HTMLDivElement() {
  if (!v_new_toggle) {
    throw TypeError('Illegal constructor')
  }
})
_inherits(HTMLDivElement, HTMLElement)
Object.defineProperties(EventTarget.prototype, {
  removeEventListener: {
    value: v_saf(function removeEventListener() {
      v_console_log('  [*] EventTarget -> removeEventListener[func]', [].slice.call(arguments))
    }),
  },
  [Symbol.toStringTag]: { value: 'EventTarget', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Navigator.prototype, {
  userAgent: {
    get() {
      v_console_log(
        '  [*] Navigator -> userAgent[get]',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
      )
      return 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
    },
  },
  product: {
    get() {
      v_console_log('  [*] Navigator -> product[get]', 'Gecko')
      return 'Gecko'
    },
  },
  vendor: {
    get() {
      v_console_log('  [*] Navigator -> vendor[get]', 'Google Inc.')
      return 'Google Inc.'
    },
  },
  language: {
    get() {
      v_console_log('  [*] Navigator -> language[get]', 'zh-CN')
      return 'zh-CN'
    },
  },
  languages: {
    get() {
      v_console_log('  [*] Navigator -> languages[get]', {})
      return {}
    },
  },
  hardwareConcurrency: {
    get() {
      v_console_log('  [*] Navigator -> hardwareConcurrency[get]', 8)
      return 8
    },
  },
  platform: {
    get() {
      v_console_log('  [*] Navigator -> platform[get]', 'MacIntel')
      return 'MacIntel'
    },
  },
  plugins: {
    get() {
      v_console_log('  [*] Navigator -> plugins[get]', this._plugins || [])
      return this._plugins || []
    },
  },
  maxTouchPoints: {
    get() {
      v_console_log('  [*] Navigator -> maxTouchPoints[get]', 0)
      return 0
    },
  },
  pdfViewerEnabled: {
    get() {
      v_console_log('  [*] Navigator -> pdfViewerEnabled[get]', true)
      return true
    },
  },
  javaEnabled: {
    value: v_saf(function javaEnabled() {
      v_console_log('  [*] Navigator -> javaEnabled[func]', [].slice.call(arguments))
      return true
    }),
  },
  mimeTypes: {
    get() {
      v_console_log('  [*] Navigator -> mimeTypes[get]', this._mimeTypes || [])
      return this._mimeTypes || []
    },
  },
  [Symbol.toStringTag]: { value: 'Navigator', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(History.prototype, {
  state: {
    get() {
      v_console_log('  [*] History -> state[get]', {})
      return {}
    },
  },
  length: {
    get() {
      v_console_log('  [*] History -> length[get]', 4)
      return 4
    },
  },
  replaceState: {
    value: v_saf(function replaceState() {
      v_console_log('  [*] History -> replaceState[func]', [].slice.call(arguments))
    }),
  },
  [Symbol.toStringTag]: { value: 'History', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(CSSStyleDeclaration.prototype, {
  setProperty: {
    value: v_saf(function setProperty() {
      v_console_log('  [*] CSSStyleDeclaration -> setProperty[func]', [].slice.call(arguments))
    }),
  },
  [Symbol.toStringTag]: { value: 'CSSStyleDeclaration', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(AudioParam.prototype, {
  value: {
    set() {
      v_console_log('  [*] AudioParam -> value[set]', [].slice.call(arguments))
    },
  },
  [Symbol.toStringTag]: { value: 'AudioParam', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Event.prototype, {
  NONE: { value: 0, writable: false, enumerable: true, configurable: false },
  CAPTURING_PHASE: { value: 1, writable: false, enumerable: true, configurable: false },
  AT_TARGET: { value: 2, writable: false, enumerable: true, configurable: false },
  BUBBLING_PHASE: { value: 3, writable: false, enumerable: true, configurable: false },
  [Symbol.toStringTag]: { value: 'Event', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(AudioBuffer.prototype, {
  getChannelData: {
    value: v_saf(function getChannelData() {
      v_console_log('  [*] AudioBuffer -> getChannelData[func]', [].slice.call(arguments))
    }),
  },
  [Symbol.toStringTag]: { value: 'AudioBuffer', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(CanvasRenderingContext2D.prototype, {
  rect: {
    value: v_saf(function rect() {
      v_console_log('  [*] CanvasRenderingContext2D -> rect[func]', [].slice.call(arguments))
    }),
  },
  isPointInPath: {
    value: v_saf(function isPointInPath() {
      v_console_log('  [*] CanvasRenderingContext2D -> isPointInPath[func]', [].slice.call(arguments))
    }),
  },
  textBaseline: {
    set() {
      v_console_log('  [*] CanvasRenderingContext2D -> textBaseline[set]', [].slice.call(arguments))
    },
  },
  fillStyle: {
    set() {
      v_console_log('  [*] CanvasRenderingContext2D -> fillStyle[set]', [].slice.call(arguments))
    },
  },
  fillRect: {
    value: v_saf(function fillRect() {
      v_console_log('  [*] CanvasRenderingContext2D -> fillRect[func]', [].slice.call(arguments))
    }),
  },
  font: {
    set() {
      v_console_log('  [*] CanvasRenderingContext2D -> font[set]', [].slice.call(arguments))
    },
  },
  fillText: {
    value: v_saf(function fillText() {
      v_console_log('  [*] CanvasRenderingContext2D -> fillText[func]', [].slice.call(arguments))
    }),
  },
  globalCompositeOperation: {
    set() {
      v_console_log('  [*] CanvasRenderingContext2D -> globalCompositeOperation[set]', [].slice.call(arguments))
    },
  },
  beginPath: {
    value: v_saf(function beginPath() {
      v_console_log('  [*] CanvasRenderingContext2D -> beginPath[func]', [].slice.call(arguments))
    }),
  },
  arc: {
    value: v_saf(function arc() {
      v_console_log('  [*] CanvasRenderingContext2D -> arc[func]', [].slice.call(arguments))
    }),
  },
  closePath: {
    value: v_saf(function closePath() {
      v_console_log('  [*] CanvasRenderingContext2D -> closePath[func]', [].slice.call(arguments))
    }),
  },
  fill: {
    value: v_saf(function fill() {
      v_console_log('  [*] CanvasRenderingContext2D -> fill[func]', [].slice.call(arguments))
    }),
  },
  [Symbol.toStringTag]: { value: 'CanvasRenderingContext2D', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PluginArray.prototype, {
  length: {
    get() {
      v_console_log('  [*] PluginArray -> length[get]', 5)
      return 5
    },
  },
  [Symbol.toStringTag]: { value: 'PluginArray', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Plugin.prototype, {
  [Symbol.toStringTag]: { value: 'Plugin', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(MimeType.prototype, {
  [Symbol.toStringTag]: { value: 'MimeType', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(WebGLRenderingContext.prototype, {
  DEPTH_BUFFER_BIT: { value: 256, writable: false, enumerable: true, configurable: false },
  STENCIL_BUFFER_BIT: { value: 1024, writable: false, enumerable: true, configurable: false },
  COLOR_BUFFER_BIT: { value: 16384, writable: false, enumerable: true, configurable: false },
  POINTS: { value: 0, writable: false, enumerable: true, configurable: false },
  LINES: { value: 1, writable: false, enumerable: true, configurable: false },
  LINE_LOOP: { value: 2, writable: false, enumerable: true, configurable: false },
  LINE_STRIP: { value: 3, writable: false, enumerable: true, configurable: false },
  TRIANGLES: { value: 4, writable: false, enumerable: true, configurable: false },
  TRIANGLE_STRIP: { value: 5, writable: false, enumerable: true, configurable: false },
  TRIANGLE_FAN: { value: 6, writable: false, enumerable: true, configurable: false },
  ZERO: { value: 0, writable: false, enumerable: true, configurable: false },
  ONE: { value: 1, writable: false, enumerable: true, configurable: false },
  SRC_COLOR: { value: 768, writable: false, enumerable: true, configurable: false },
  ONE_MINUS_SRC_COLOR: { value: 769, writable: false, enumerable: true, configurable: false },
  SRC_ALPHA: { value: 770, writable: false, enumerable: true, configurable: false },
  ONE_MINUS_SRC_ALPHA: { value: 771, writable: false, enumerable: true, configurable: false },
  DST_ALPHA: { value: 772, writable: false, enumerable: true, configurable: false },
  ONE_MINUS_DST_ALPHA: { value: 773, writable: false, enumerable: true, configurable: false },
  DST_COLOR: { value: 774, writable: false, enumerable: true, configurable: false },
  ONE_MINUS_DST_COLOR: { value: 775, writable: false, enumerable: true, configurable: false },
  SRC_ALPHA_SATURATE: { value: 776, writable: false, enumerable: true, configurable: false },
  FUNC_ADD: { value: 32774, writable: false, enumerable: true, configurable: false },
  BLEND_EQUATION: { value: 32777, writable: false, enumerable: true, configurable: false },
  BLEND_EQUATION_RGB: { value: 32777, writable: false, enumerable: true, configurable: false },
  BLEND_EQUATION_ALPHA: { value: 34877, writable: false, enumerable: true, configurable: false },
  FUNC_SUBTRACT: { value: 32778, writable: false, enumerable: true, configurable: false },
  FUNC_REVERSE_SUBTRACT: { value: 32779, writable: false, enumerable: true, configurable: false },
  BLEND_DST_RGB: { value: 32968, writable: false, enumerable: true, configurable: false },
  BLEND_SRC_RGB: { value: 32969, writable: false, enumerable: true, configurable: false },
  BLEND_DST_ALPHA: { value: 32970, writable: false, enumerable: true, configurable: false },
  BLEND_SRC_ALPHA: { value: 32971, writable: false, enumerable: true, configurable: false },
  CONSTANT_COLOR: { value: 32769, writable: false, enumerable: true, configurable: false },
  ONE_MINUS_CONSTANT_COLOR: { value: 32770, writable: false, enumerable: true, configurable: false },
  CONSTANT_ALPHA: { value: 32771, writable: false, enumerable: true, configurable: false },
  ONE_MINUS_CONSTANT_ALPHA: { value: 32772, writable: false, enumerable: true, configurable: false },
  BLEND_COLOR: { value: 32773, writable: false, enumerable: true, configurable: false },
  ARRAY_BUFFER: { value: 34962, writable: false, enumerable: true, configurable: false },
  ELEMENT_ARRAY_BUFFER: { value: 34963, writable: false, enumerable: true, configurable: false },
  ARRAY_BUFFER_BINDING: { value: 34964, writable: false, enumerable: true, configurable: false },
  ELEMENT_ARRAY_BUFFER_BINDING: { value: 34965, writable: false, enumerable: true, configurable: false },
  STREAM_DRAW: { value: 35040, writable: false, enumerable: true, configurable: false },
  STATIC_DRAW: { value: 35044, writable: false, enumerable: true, configurable: false },
  DYNAMIC_DRAW: { value: 35048, writable: false, enumerable: true, configurable: false },
  BUFFER_SIZE: { value: 34660, writable: false, enumerable: true, configurable: false },
  BUFFER_USAGE: { value: 34661, writable: false, enumerable: true, configurable: false },
  CURRENT_VERTEX_ATTRIB: { value: 34342, writable: false, enumerable: true, configurable: false },
  FRONT: { value: 1028, writable: false, enumerable: true, configurable: false },
  BACK: { value: 1029, writable: false, enumerable: true, configurable: false },
  FRONT_AND_BACK: { value: 1032, writable: false, enumerable: true, configurable: false },
  TEXTURE_2D: { value: 3553, writable: false, enumerable: true, configurable: false },
  CULL_FACE: { value: 2884, writable: false, enumerable: true, configurable: false },
  BLEND: { value: 3042, writable: false, enumerable: true, configurable: false },
  DITHER: { value: 3024, writable: false, enumerable: true, configurable: false },
  STENCIL_TEST: { value: 2960, writable: false, enumerable: true, configurable: false },
  DEPTH_TEST: { value: 2929, writable: false, enumerable: true, configurable: false },
  SCISSOR_TEST: { value: 3089, writable: false, enumerable: true, configurable: false },
  POLYGON_OFFSET_FILL: { value: 32823, writable: false, enumerable: true, configurable: false },
  SAMPLE_ALPHA_TO_COVERAGE: { value: 32926, writable: false, enumerable: true, configurable: false },
  SAMPLE_COVERAGE: { value: 32928, writable: false, enumerable: true, configurable: false },
  NO_ERROR: { value: 0, writable: false, enumerable: true, configurable: false },
  INVALID_ENUM: { value: 1280, writable: false, enumerable: true, configurable: false },
  INVALID_VALUE: { value: 1281, writable: false, enumerable: true, configurable: false },
  INVALID_OPERATION: { value: 1282, writable: false, enumerable: true, configurable: false },
  OUT_OF_MEMORY: { value: 1285, writable: false, enumerable: true, configurable: false },
  CW: { value: 2304, writable: false, enumerable: true, configurable: false },
  CCW: { value: 2305, writable: false, enumerable: true, configurable: false },
  LINE_WIDTH: { value: 2849, writable: false, enumerable: true, configurable: false },
  ALIASED_POINT_SIZE_RANGE: { value: 33901, writable: false, enumerable: true, configurable: false },
  ALIASED_LINE_WIDTH_RANGE: { value: 33902, writable: false, enumerable: true, configurable: false },
  CULL_FACE_MODE: { value: 2885, writable: false, enumerable: true, configurable: false },
  FRONT_FACE: { value: 2886, writable: false, enumerable: true, configurable: false },
  DEPTH_RANGE: { value: 2928, writable: false, enumerable: true, configurable: false },
  DEPTH_WRITEMASK: { value: 2930, writable: false, enumerable: true, configurable: false },
  DEPTH_CLEAR_VALUE: { value: 2931, writable: false, enumerable: true, configurable: false },
  DEPTH_FUNC: { value: 2932, writable: false, enumerable: true, configurable: false },
  STENCIL_CLEAR_VALUE: { value: 2961, writable: false, enumerable: true, configurable: false },
  STENCIL_FUNC: { value: 2962, writable: false, enumerable: true, configurable: false },
  STENCIL_FAIL: { value: 2964, writable: false, enumerable: true, configurable: false },
  STENCIL_PASS_DEPTH_FAIL: { value: 2965, writable: false, enumerable: true, configurable: false },
  STENCIL_PASS_DEPTH_PASS: { value: 2966, writable: false, enumerable: true, configurable: false },
  STENCIL_REF: { value: 2967, writable: false, enumerable: true, configurable: false },
  STENCIL_VALUE_MASK: { value: 2963, writable: false, enumerable: true, configurable: false },
  STENCIL_WRITEMASK: { value: 2968, writable: false, enumerable: true, configurable: false },
  STENCIL_BACK_FUNC: { value: 34816, writable: false, enumerable: true, configurable: false },
  STENCIL_BACK_FAIL: { value: 34817, writable: false, enumerable: true, configurable: false },
  STENCIL_BACK_PASS_DEPTH_FAIL: { value: 34818, writable: false, enumerable: true, configurable: false },
  STENCIL_BACK_PASS_DEPTH_PASS: { value: 34819, writable: false, enumerable: true, configurable: false },
  STENCIL_BACK_REF: { value: 36003, writable: false, enumerable: true, configurable: false },
  STENCIL_BACK_VALUE_MASK: { value: 36004, writable: false, enumerable: true, configurable: false },
  STENCIL_BACK_WRITEMASK: { value: 36005, writable: false, enumerable: true, configurable: false },
  VIEWPORT: { value: 2978, writable: false, enumerable: true, configurable: false },
  SCISSOR_BOX: { value: 3088, writable: false, enumerable: true, configurable: false },
  COLOR_CLEAR_VALUE: { value: 3106, writable: false, enumerable: true, configurable: false },
  COLOR_WRITEMASK: { value: 3107, writable: false, enumerable: true, configurable: false },
  UNPACK_ALIGNMENT: { value: 3317, writable: false, enumerable: true, configurable: false },
  PACK_ALIGNMENT: { value: 3333, writable: false, enumerable: true, configurable: false },
  MAX_TEXTURE_SIZE: { value: 3379, writable: false, enumerable: true, configurable: false },
  MAX_VIEWPORT_DIMS: { value: 3386, writable: false, enumerable: true, configurable: false },
  SUBPIXEL_BITS: { value: 3408, writable: false, enumerable: true, configurable: false },
  RED_BITS: { value: 3410, writable: false, enumerable: true, configurable: false },
  GREEN_BITS: { value: 3411, writable: false, enumerable: true, configurable: false },
  BLUE_BITS: { value: 3412, writable: false, enumerable: true, configurable: false },
  ALPHA_BITS: { value: 3413, writable: false, enumerable: true, configurable: false },
  DEPTH_BITS: { value: 3414, writable: false, enumerable: true, configurable: false },
  STENCIL_BITS: { value: 3415, writable: false, enumerable: true, configurable: false },
  POLYGON_OFFSET_UNITS: { value: 10752, writable: false, enumerable: true, configurable: false },
  POLYGON_OFFSET_FACTOR: { value: 32824, writable: false, enumerable: true, configurable: false },
  TEXTURE_BINDING_2D: { value: 32873, writable: false, enumerable: true, configurable: false },
  SAMPLE_BUFFERS: { value: 32936, writable: false, enumerable: true, configurable: false },
  SAMPLES: { value: 32937, writable: false, enumerable: true, configurable: false },
  SAMPLE_COVERAGE_VALUE: { value: 32938, writable: false, enumerable: true, configurable: false },
  SAMPLE_COVERAGE_INVERT: { value: 32939, writable: false, enumerable: true, configurable: false },
  COMPRESSED_TEXTURE_FORMATS: { value: 34467, writable: false, enumerable: true, configurable: false },
  DONT_CARE: { value: 4352, writable: false, enumerable: true, configurable: false },
  FASTEST: { value: 4353, writable: false, enumerable: true, configurable: false },
  NICEST: { value: 4354, writable: false, enumerable: true, configurable: false },
  GENERATE_MIPMAP_HINT: { value: 33170, writable: false, enumerable: true, configurable: false },
  BYTE: { value: 5120, writable: false, enumerable: true, configurable: false },
  UNSIGNED_BYTE: { value: 5121, writable: false, enumerable: true, configurable: false },
  SHORT: { value: 5122, writable: false, enumerable: true, configurable: false },
  UNSIGNED_SHORT: { value: 5123, writable: false, enumerable: true, configurable: false },
  INT: { value: 5124, writable: false, enumerable: true, configurable: false },
  UNSIGNED_INT: { value: 5125, writable: false, enumerable: true, configurable: false },
  FLOAT: { value: 5126, writable: false, enumerable: true, configurable: false },
  DEPTH_COMPONENT: { value: 6402, writable: false, enumerable: true, configurable: false },
  ALPHA: { value: 6406, writable: false, enumerable: true, configurable: false },
  RGB: { value: 6407, writable: false, enumerable: true, configurable: false },
  RGBA: { value: 6408, writable: false, enumerable: true, configurable: false },
  LUMINANCE: { value: 6409, writable: false, enumerable: true, configurable: false },
  LUMINANCE_ALPHA: { value: 6410, writable: false, enumerable: true, configurable: false },
  UNSIGNED_SHORT_4_4_4_4: { value: 32819, writable: false, enumerable: true, configurable: false },
  UNSIGNED_SHORT_5_5_5_1: { value: 32820, writable: false, enumerable: true, configurable: false },
  UNSIGNED_SHORT_5_6_5: { value: 33635, writable: false, enumerable: true, configurable: false },
  FRAGMENT_SHADER: { value: 35632, writable: false, enumerable: true, configurable: false },
  VERTEX_SHADER: { value: 35633, writable: false, enumerable: true, configurable: false },
  MAX_VERTEX_ATTRIBS: { value: 34921, writable: false, enumerable: true, configurable: false },
  MAX_VERTEX_UNIFORM_VECTORS: { value: 36347, writable: false, enumerable: true, configurable: false },
  MAX_VARYING_VECTORS: { value: 36348, writable: false, enumerable: true, configurable: false },
  MAX_COMBINED_TEXTURE_IMAGE_UNITS: { value: 35661, writable: false, enumerable: true, configurable: false },
  MAX_VERTEX_TEXTURE_IMAGE_UNITS: { value: 35660, writable: false, enumerable: true, configurable: false },
  MAX_TEXTURE_IMAGE_UNITS: { value: 34930, writable: false, enumerable: true, configurable: false },
  MAX_FRAGMENT_UNIFORM_VECTORS: { value: 36349, writable: false, enumerable: true, configurable: false },
  SHADER_TYPE: { value: 35663, writable: false, enumerable: true, configurable: false },
  DELETE_STATUS: { value: 35712, writable: false, enumerable: true, configurable: false },
  LINK_STATUS: { value: 35714, writable: false, enumerable: true, configurable: false },
  VALIDATE_STATUS: { value: 35715, writable: false, enumerable: true, configurable: false },
  ATTACHED_SHADERS: { value: 35717, writable: false, enumerable: true, configurable: false },
  ACTIVE_UNIFORMS: { value: 35718, writable: false, enumerable: true, configurable: false },
  ACTIVE_ATTRIBUTES: { value: 35721, writable: false, enumerable: true, configurable: false },
  SHADING_LANGUAGE_VERSION: { value: 35724, writable: false, enumerable: true, configurable: false },
  CURRENT_PROGRAM: { value: 35725, writable: false, enumerable: true, configurable: false },
  NEVER: { value: 512, writable: false, enumerable: true, configurable: false },
  LESS: { value: 513, writable: false, enumerable: true, configurable: false },
  EQUAL: { value: 514, writable: false, enumerable: true, configurable: false },
  LEQUAL: { value: 515, writable: false, enumerable: true, configurable: false },
  GREATER: { value: 516, writable: false, enumerable: true, configurable: false },
  NOTEQUAL: { value: 517, writable: false, enumerable: true, configurable: false },
  GEQUAL: { value: 518, writable: false, enumerable: true, configurable: false },
  ALWAYS: { value: 519, writable: false, enumerable: true, configurable: false },
  KEEP: { value: 7680, writable: false, enumerable: true, configurable: false },
  REPLACE: { value: 7681, writable: false, enumerable: true, configurable: false },
  INCR: { value: 7682, writable: false, enumerable: true, configurable: false },
  DECR: { value: 7683, writable: false, enumerable: true, configurable: false },
  INVERT: { value: 5386, writable: false, enumerable: true, configurable: false },
  INCR_WRAP: { value: 34055, writable: false, enumerable: true, configurable: false },
  DECR_WRAP: { value: 34056, writable: false, enumerable: true, configurable: false },
  VENDOR: { value: 7936, writable: false, enumerable: true, configurable: false },
  RENDERER: { value: 7937, writable: false, enumerable: true, configurable: false },
  VERSION: { value: 7938, writable: false, enumerable: true, configurable: false },
  NEAREST: { value: 9728, writable: false, enumerable: true, configurable: false },
  LINEAR: { value: 9729, writable: false, enumerable: true, configurable: false },
  NEAREST_MIPMAP_NEAREST: { value: 9984, writable: false, enumerable: true, configurable: false },
  LINEAR_MIPMAP_NEAREST: { value: 9985, writable: false, enumerable: true, configurable: false },
  NEAREST_MIPMAP_LINEAR: { value: 9986, writable: false, enumerable: true, configurable: false },
  LINEAR_MIPMAP_LINEAR: { value: 9987, writable: false, enumerable: true, configurable: false },
  TEXTURE_MAG_FILTER: { value: 10240, writable: false, enumerable: true, configurable: false },
  TEXTURE_MIN_FILTER: { value: 10241, writable: false, enumerable: true, configurable: false },
  TEXTURE_WRAP_S: { value: 10242, writable: false, enumerable: true, configurable: false },
  TEXTURE_WRAP_T: { value: 10243, writable: false, enumerable: true, configurable: false },
  TEXTURE: { value: 5890, writable: false, enumerable: true, configurable: false },
  TEXTURE_CUBE_MAP: { value: 34067, writable: false, enumerable: true, configurable: false },
  TEXTURE_BINDING_CUBE_MAP: { value: 34068, writable: false, enumerable: true, configurable: false },
  TEXTURE_CUBE_MAP_POSITIVE_X: { value: 34069, writable: false, enumerable: true, configurable: false },
  TEXTURE_CUBE_MAP_NEGATIVE_X: { value: 34070, writable: false, enumerable: true, configurable: false },
  TEXTURE_CUBE_MAP_POSITIVE_Y: { value: 34071, writable: false, enumerable: true, configurable: false },
  TEXTURE_CUBE_MAP_NEGATIVE_Y: { value: 34072, writable: false, enumerable: true, configurable: false },
  TEXTURE_CUBE_MAP_POSITIVE_Z: { value: 34073, writable: false, enumerable: true, configurable: false },
  TEXTURE_CUBE_MAP_NEGATIVE_Z: { value: 34074, writable: false, enumerable: true, configurable: false },
  MAX_CUBE_MAP_TEXTURE_SIZE: { value: 34076, writable: false, enumerable: true, configurable: false },
  TEXTURE0: { value: 33984, writable: false, enumerable: true, configurable: false },
  TEXTURE1: { value: 33985, writable: false, enumerable: true, configurable: false },
  TEXTURE2: { value: 33986, writable: false, enumerable: true, configurable: false },
  TEXTURE3: { value: 33987, writable: false, enumerable: true, configurable: false },
  TEXTURE4: { value: 33988, writable: false, enumerable: true, configurable: false },
  TEXTURE5: { value: 33989, writable: false, enumerable: true, configurable: false },
  TEXTURE6: { value: 33990, writable: false, enumerable: true, configurable: false },
  TEXTURE7: { value: 33991, writable: false, enumerable: true, configurable: false },
  TEXTURE8: { value: 33992, writable: false, enumerable: true, configurable: false },
  TEXTURE9: { value: 33993, writable: false, enumerable: true, configurable: false },
  TEXTURE10: { value: 33994, writable: false, enumerable: true, configurable: false },
  TEXTURE11: { value: 33995, writable: false, enumerable: true, configurable: false },
  TEXTURE12: { value: 33996, writable: false, enumerable: true, configurable: false },
  TEXTURE13: { value: 33997, writable: false, enumerable: true, configurable: false },
  TEXTURE14: { value: 33998, writable: false, enumerable: true, configurable: false },
  TEXTURE15: { value: 33999, writable: false, enumerable: true, configurable: false },
  TEXTURE16: { value: 34000, writable: false, enumerable: true, configurable: false },
  TEXTURE17: { value: 34001, writable: false, enumerable: true, configurable: false },
  TEXTURE18: { value: 34002, writable: false, enumerable: true, configurable: false },
  TEXTURE19: { value: 34003, writable: false, enumerable: true, configurable: false },
  TEXTURE20: { value: 34004, writable: false, enumerable: true, configurable: false },
  TEXTURE21: { value: 34005, writable: false, enumerable: true, configurable: false },
  TEXTURE22: { value: 34006, writable: false, enumerable: true, configurable: false },
  TEXTURE23: { value: 34007, writable: false, enumerable: true, configurable: false },
  TEXTURE24: { value: 34008, writable: false, enumerable: true, configurable: false },
  TEXTURE25: { value: 34009, writable: false, enumerable: true, configurable: false },
  TEXTURE26: { value: 34010, writable: false, enumerable: true, configurable: false },
  TEXTURE27: { value: 34011, writable: false, enumerable: true, configurable: false },
  TEXTURE28: { value: 34012, writable: false, enumerable: true, configurable: false },
  TEXTURE29: { value: 34013, writable: false, enumerable: true, configurable: false },
  TEXTURE30: { value: 34014, writable: false, enumerable: true, configurable: false },
  TEXTURE31: { value: 34015, writable: false, enumerable: true, configurable: false },
  ACTIVE_TEXTURE: { value: 34016, writable: false, enumerable: true, configurable: false },
  REPEAT: { value: 10497, writable: false, enumerable: true, configurable: false },
  CLAMP_TO_EDGE: { value: 33071, writable: false, enumerable: true, configurable: false },
  MIRRORED_REPEAT: { value: 33648, writable: false, enumerable: true, configurable: false },
  FLOAT_VEC2: { value: 35664, writable: false, enumerable: true, configurable: false },
  FLOAT_VEC3: { value: 35665, writable: false, enumerable: true, configurable: false },
  FLOAT_VEC4: { value: 35666, writable: false, enumerable: true, configurable: false },
  INT_VEC2: { value: 35667, writable: false, enumerable: true, configurable: false },
  INT_VEC3: { value: 35668, writable: false, enumerable: true, configurable: false },
  INT_VEC4: { value: 35669, writable: false, enumerable: true, configurable: false },
  BOOL: { value: 35670, writable: false, enumerable: true, configurable: false },
  BOOL_VEC2: { value: 35671, writable: false, enumerable: true, configurable: false },
  BOOL_VEC3: { value: 35672, writable: false, enumerable: true, configurable: false },
  BOOL_VEC4: { value: 35673, writable: false, enumerable: true, configurable: false },
  FLOAT_MAT2: { value: 35674, writable: false, enumerable: true, configurable: false },
  FLOAT_MAT3: { value: 35675, writable: false, enumerable: true, configurable: false },
  FLOAT_MAT4: { value: 35676, writable: false, enumerable: true, configurable: false },
  SAMPLER_2D: { value: 35678, writable: false, enumerable: true, configurable: false },
  SAMPLER_CUBE: { value: 35680, writable: false, enumerable: true, configurable: false },
  VERTEX_ATTRIB_ARRAY_ENABLED: { value: 34338, writable: false, enumerable: true, configurable: false },
  VERTEX_ATTRIB_ARRAY_SIZE: { value: 34339, writable: false, enumerable: true, configurable: false },
  VERTEX_ATTRIB_ARRAY_STRIDE: { value: 34340, writable: false, enumerable: true, configurable: false },
  VERTEX_ATTRIB_ARRAY_TYPE: { value: 34341, writable: false, enumerable: true, configurable: false },
  VERTEX_ATTRIB_ARRAY_NORMALIZED: { value: 34922, writable: false, enumerable: true, configurable: false },
  VERTEX_ATTRIB_ARRAY_POINTER: { value: 34373, writable: false, enumerable: true, configurable: false },
  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: { value: 34975, writable: false, enumerable: true, configurable: false },
  IMPLEMENTATION_COLOR_READ_TYPE: { value: 35738, writable: false, enumerable: true, configurable: false },
  IMPLEMENTATION_COLOR_READ_FORMAT: { value: 35739, writable: false, enumerable: true, configurable: false },
  COMPILE_STATUS: { value: 35713, writable: false, enumerable: true, configurable: false },
  LOW_FLOAT: { value: 36336, writable: false, enumerable: true, configurable: false },
  MEDIUM_FLOAT: { value: 36337, writable: false, enumerable: true, configurable: false },
  HIGH_FLOAT: { value: 36338, writable: false, enumerable: true, configurable: false },
  LOW_INT: { value: 36339, writable: false, enumerable: true, configurable: false },
  MEDIUM_INT: { value: 36340, writable: false, enumerable: true, configurable: false },
  HIGH_INT: { value: 36341, writable: false, enumerable: true, configurable: false },
  FRAMEBUFFER: { value: 36160, writable: false, enumerable: true, configurable: false },
  RENDERBUFFER: { value: 36161, writable: false, enumerable: true, configurable: false },
  RGBA4: { value: 32854, writable: false, enumerable: true, configurable: false },
  RGB5_A1: { value: 32855, writable: false, enumerable: true, configurable: false },
  RGB565: { value: 36194, writable: false, enumerable: true, configurable: false },
  DEPTH_COMPONENT16: { value: 33189, writable: false, enumerable: true, configurable: false },
  STENCIL_INDEX8: { value: 36168, writable: false, enumerable: true, configurable: false },
  DEPTH_STENCIL: { value: 34041, writable: false, enumerable: true, configurable: false },
  RENDERBUFFER_WIDTH: { value: 36162, writable: false, enumerable: true, configurable: false },
  RENDERBUFFER_HEIGHT: { value: 36163, writable: false, enumerable: true, configurable: false },
  RENDERBUFFER_INTERNAL_FORMAT: { value: 36164, writable: false, enumerable: true, configurable: false },
  RENDERBUFFER_RED_SIZE: { value: 36176, writable: false, enumerable: true, configurable: false },
  RENDERBUFFER_GREEN_SIZE: { value: 36177, writable: false, enumerable: true, configurable: false },
  RENDERBUFFER_BLUE_SIZE: { value: 36178, writable: false, enumerable: true, configurable: false },
  RENDERBUFFER_ALPHA_SIZE: { value: 36179, writable: false, enumerable: true, configurable: false },
  RENDERBUFFER_DEPTH_SIZE: { value: 36180, writable: false, enumerable: true, configurable: false },
  RENDERBUFFER_STENCIL_SIZE: { value: 36181, writable: false, enumerable: true, configurable: false },
  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: { value: 36048, writable: false, enumerable: true, configurable: false },
  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: { value: 36049, writable: false, enumerable: true, configurable: false },
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: { value: 36050, writable: false, enumerable: true, configurable: false },
  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: {
    value: 36051,
    writable: false,
    enumerable: true,
    configurable: false,
  },
  COLOR_ATTACHMENT0: { value: 36064, writable: false, enumerable: true, configurable: false },
  DEPTH_ATTACHMENT: { value: 36096, writable: false, enumerable: true, configurable: false },
  STENCIL_ATTACHMENT: { value: 36128, writable: false, enumerable: true, configurable: false },
  DEPTH_STENCIL_ATTACHMENT: { value: 33306, writable: false, enumerable: true, configurable: false },
  NONE: { value: 0, writable: false, enumerable: true, configurable: false },
  FRAMEBUFFER_COMPLETE: { value: 36053, writable: false, enumerable: true, configurable: false },
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT: { value: 36054, writable: false, enumerable: true, configurable: false },
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: { value: 36055, writable: false, enumerable: true, configurable: false },
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS: { value: 36057, writable: false, enumerable: true, configurable: false },
  FRAMEBUFFER_UNSUPPORTED: { value: 36061, writable: false, enumerable: true, configurable: false },
  FRAMEBUFFER_BINDING: { value: 36006, writable: false, enumerable: true, configurable: false },
  RENDERBUFFER_BINDING: { value: 36007, writable: false, enumerable: true, configurable: false },
  MAX_RENDERBUFFER_SIZE: { value: 34024, writable: false, enumerable: true, configurable: false },
  INVALID_FRAMEBUFFER_OPERATION: { value: 1286, writable: false, enumerable: true, configurable: false },
  UNPACK_FLIP_Y_WEBGL: { value: 37440, writable: false, enumerable: true, configurable: false },
  UNPACK_PREMULTIPLY_ALPHA_WEBGL: { value: 37441, writable: false, enumerable: true, configurable: false },
  CONTEXT_LOST_WEBGL: { value: 37442, writable: false, enumerable: true, configurable: false },
  UNPACK_COLORSPACE_CONVERSION_WEBGL: { value: 37443, writable: false, enumerable: true, configurable: false },
  BROWSER_DEFAULT_WEBGL: { value: 37444, writable: false, enumerable: true, configurable: false },
  [Symbol.toStringTag]: { value: 'WebGLRenderingContext', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(WebGLShaderPrecisionFormat.prototype, {
  rangeMin: {
    get() {
      v_console_log('  [*] WebGLShaderPrecisionFormat -> rangeMin[get]', 31)
      return 31
    },
  },
  rangeMax: {
    get() {
      v_console_log('  [*] WebGLShaderPrecisionFormat -> rangeMax[get]', 30)
      return 30
    },
  },
  precision: {
    get() {
      v_console_log('  [*] WebGLShaderPrecisionFormat -> precision[get]', 0)
      return 0
    },
  },
  [Symbol.toStringTag]: { value: 'WebGLShaderPrecisionFormat', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(DOMTokenList.prototype, {
  add: {
    value: v_saf(function add() {
      v_console_log('  [*] DOMTokenList -> add[func]', [].slice.call(arguments))
    }),
  },
  remove: {
    value: v_saf(function remove() {
      v_console_log('  [*] DOMTokenList -> remove[func]', [].slice.call(arguments))
    }),
  },
  length: {
    get() {
      v_console_log('  [*] DOMTokenList -> length[get]', 0)
      return 0
    },
  },
  supports: {
    value: v_saf(function supports() {
      v_console_log('  [*] DOMTokenList -> supports[func]', [].slice.call(arguments))
    }),
  },
  [Symbol.toStringTag]: { value: 'DOMTokenList', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Storage.prototype, {
  [Symbol.toStringTag]: { value: 'Storage', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLCollection.prototype, {
  length: {
    get() {
      v_console_log('  [*] HTMLCollection -> length[get]', 1)
      return 1
    },
  },
  [Symbol.toStringTag]: { value: 'HTMLCollection', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLAllCollection.prototype, {
  length: {
    get() {
      v_console_log('  [*] HTMLAllCollection -> length[get]', 45)
      return 45
    },
  },
  [Symbol.toStringTag]: { value: 'HTMLAllCollection', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(NodeList.prototype, {
  length: {
    get() {
      v_console_log('  [*] NodeList -> length[get]', 0)
      return 0
    },
  },
  [Symbol.toStringTag]: { value: 'NodeList', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Image.prototype, {
  src: {
    get() {
      v_console_log('  [*] Image -> src[get]', '')
      return ''
    },
    set() {
      v_console_log('  [*] Image -> src[set]', [].slice.call(arguments))
      return ''
    },
  },
  alt: {
    set() {
      v_console_log('  [*] Image -> alt[set]', [].slice.call(arguments))
      return ''
    },
  },
  [Symbol.toStringTag]: { value: 'Image', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Selection.prototype, {
  selectAllChildren: {
    value: v_saf(function selectAllChildren() {
      v_console_log('  [*] Selection -> selectAllChildren[func]', [].slice.call(arguments))
    }),
  },
  collapseToEnd: {
    value: v_saf(function collapseToEnd() {
      v_console_log('  [*] Selection -> collapseToEnd[func]', [].slice.call(arguments))
    }),
  },
  rangeCount: {
    get() {
      v_console_log('  [*] Selection -> rangeCount[get]', 1)
      return 1
    },
  },
  getRangeAt: {
    value: v_saf(function getRangeAt() {
      v_console_log('  [*] Selection -> getRangeAt[func]', [].slice.call(arguments))
    }),
  },
  removeAllRanges: {
    value: v_saf(function removeAllRanges() {
      v_console_log('  [*] Selection -> removeAllRanges[func]', [].slice.call(arguments))
    }),
  },
  addRange: {
    value: v_saf(function addRange() {
      v_console_log('  [*] Selection -> addRange[func]', [].slice.call(arguments))
    }),
  },
  [Symbol.toStringTag]: { value: 'Selection', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(ResizeObserver.prototype, {
  observe: {
    value: v_saf(function observe() {
      v_console_log('  [*] ResizeObserver -> observe[func]', [].slice.call(arguments))
    }),
  },
  [Symbol.toStringTag]: { value: 'ResizeObserver', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(MimeTypeArray.prototype, {
  length: {
    get() {
      v_console_log('  [*] MimeTypeArray -> length[get]', 2)
      return 2
    },
  },
  [Symbol.toStringTag]: { value: 'MimeTypeArray', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Screen.prototype, {
  width: {
    get() {
      v_console_log('  [*] Screen -> width[get]', 1200)
      return 1200
    },
  },
  height: {
    get() {
      v_console_log('  [*] Screen -> height[get]', 944)
      return 944
    },
  },
  availTop: {
    get() {
      v_console_log('  [*] Screen -> availTop[get]', -5)
      return -5
    },
  },
  availWidth: {
    get() {
      v_console_log('  [*] Screen -> availWidth[get]', 1920)
      return 1920
    },
  },
  availLeft: {
    get() {
      v_console_log('  [*] Screen -> availLeft[get]', 1680)
      return 1680
    },
  },
  availHeight: {
    get() {
      v_console_log('  [*] Screen -> availHeight[get]', 1055)
      return 1055
    },
  },
  colorDepth: {
    get() {
      v_console_log('  [*] Screen -> colorDepth[get]', 24)
      return 24
    },
  },
  [Symbol.toStringTag]: { value: 'Screen', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Node.prototype, {
  appendChild: {
    value: v_saf(function appendChild() {
      v_console_log('  [*] Node -> appendChild[func]', [].slice.call(arguments))
    }),
  },
  firstChild: {
    get() {
      v_console_log('  [*] Node -> firstChild[get]', {})
      return {}
    },
  },
  insertBefore: {
    value: v_saf(function insertBefore() {
      v_console_log('  [*] Node -> insertBefore[func]', [].slice.call(arguments))
    }),
  },
  parentNode: {
    get() {
      v_console_log('  [*] Node -> parentNode[get]', {})
      return {}
    },
  },
  removeChild: {
    value: v_saf(function removeChild() {
      v_console_log('  [*] Node -> removeChild[func]', [].slice.call(arguments))
    }),
  },
  nextSibling: {
    get() {
      v_console_log('  [*] Node -> nextSibling[get]', {})
      return {}
    },
  },
  textContent: {
    set() {
      v_console_log('  [*] Node -> textContent[set]', [].slice.call(arguments))
      return {}
    },
  },
  ELEMENT_NODE: { value: 1, writable: false, enumerable: true, configurable: false },
  ATTRIBUTE_NODE: { value: 2, writable: false, enumerable: true, configurable: false },
  TEXT_NODE: { value: 3, writable: false, enumerable: true, configurable: false },
  CDATA_SECTION_NODE: { value: 4, writable: false, enumerable: true, configurable: false },
  ENTITY_REFERENCE_NODE: { value: 5, writable: false, enumerable: true, configurable: false },
  ENTITY_NODE: { value: 6, writable: false, enumerable: true, configurable: false },
  PROCESSING_INSTRUCTION_NODE: { value: 7, writable: false, enumerable: true, configurable: false },
  COMMENT_NODE: { value: 8, writable: false, enumerable: true, configurable: false },
  DOCUMENT_NODE: { value: 9, writable: false, enumerable: true, configurable: false },
  DOCUMENT_TYPE_NODE: { value: 10, writable: false, enumerable: true, configurable: false },
  DOCUMENT_FRAGMENT_NODE: { value: 11, writable: false, enumerable: true, configurable: false },
  NOTATION_NODE: { value: 12, writable: false, enumerable: true, configurable: false },
  DOCUMENT_POSITION_DISCONNECTED: { value: 1, writable: false, enumerable: true, configurable: false },
  DOCUMENT_POSITION_PRECEDING: { value: 2, writable: false, enumerable: true, configurable: false },
  DOCUMENT_POSITION_FOLLOWING: { value: 4, writable: false, enumerable: true, configurable: false },
  DOCUMENT_POSITION_CONTAINS: { value: 8, writable: false, enumerable: true, configurable: false },
  DOCUMENT_POSITION_CONTAINED_BY: { value: 16, writable: false, enumerable: true, configurable: false },
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: { value: 32, writable: false, enumerable: true, configurable: false },
  [Symbol.toStringTag]: { value: 'Node', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
  onloadend: {
    set() {
      v_console_log('  [*] XMLHttpRequestEventTarget -> onloadend[set]', [].slice.call(arguments))
    },
  },
  onabort: {
    set() {
      v_console_log('  [*] XMLHttpRequestEventTarget -> onabort[set]', [].slice.call(arguments))
    },
  },
  onerror: {
    set() {
      v_console_log('  [*] XMLHttpRequestEventTarget -> onerror[set]', [].slice.call(arguments))
    },
  },
  ontimeout: {
    set() {
      v_console_log('  [*] XMLHttpRequestEventTarget -> ontimeout[set]', [].slice.call(arguments))
    },
  },
  [Symbol.toStringTag]: { value: 'XMLHttpRequestEventTarget', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(BaseAudioContext.prototype, {
  createOscillator: {
    value: v_saf(function createOscillator() {
      v_console_log('  [*] BaseAudioContext -> createOscillator[func]', [].slice.call(arguments))
    }),
  },
  createDynamicsCompressor: {
    value: v_saf(function createDynamicsCompressor() {
      v_console_log('  [*] BaseAudioContext -> createDynamicsCompressor[func]', [].slice.call(arguments))
    }),
  },
  destination: {
    get() {
      v_console_log('  [*] BaseAudioContext -> destination[get]', {})
      return {}
    },
  },
  state: {
    get() {
      v_console_log('  [*] BaseAudioContext -> state[get]', 'running')
      return 'running'
    },
  },
  [Symbol.toStringTag]: { value: 'BaseAudioContext', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(AudioNode.prototype, {
  connect: {
    value: v_saf(function connect() {
      v_console_log('  [*] AudioNode -> connect[func]', [].slice.call(arguments))
    }),
  },
  [Symbol.toStringTag]: { value: 'AudioNode', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(OfflineAudioCompletionEvent.prototype, {
  renderedBuffer: {
    get() {
      v_console_log('  [*] OfflineAudioCompletionEvent -> renderedBuffer[get]', {})
      return {}
    },
  },
  [Symbol.toStringTag]: {
    value: 'OfflineAudioCompletionEvent',
    writable: false,
    enumerable: false,
    configurable: true,
  },
})
Object.defineProperties(MediaQueryList.prototype, {
  matches: {
    get() {
      v_console_log('  [*] MediaQueryList -> matches[get]', true)
      return true
    },
  },
  [Symbol.toStringTag]: { value: 'MediaQueryList', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(MessageEvent.prototype, {
  source: {
    get() {
      v_console_log('  [*] MessageEvent -> source[get]', {})
      return {}
    },
  },
  data: {
    get() {
      v_console_log('  [*] MessageEvent -> data[get]', {})
      return {}
    },
  },
  origin: {
    get() {
      v_console_log('  [*] MessageEvent -> origin[get]', 'https://fanyi.youdao.com')
      return 'https://fanyi.youdao.com'
    },
  },
  [Symbol.toStringTag]: { value: 'MessageEvent', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Document.prototype, {
  createElement: {
    value: v_saf(function createElement() {
      v_console_log('  [*] Document -> createElement[func]', [].slice.call(arguments))
      return _createElement(arguments[0])
    }),
  },
  currentScript: {
    get() {
      v_console_log('  [*] Document -> currentScript[get]', {})
      return {}
    },
  },
  createTextNode: {
    value: v_saf(function createTextNode() {
      v_console_log('  [*] Document -> createTextNode[func]', [].slice.call(arguments))
    }),
  },
  all: {
    get() {
      v_console_log('  [*] Document -> all[get]', {})
      return {}
    },
  },
  createComment: {
    value: v_saf(function createComment() {
      v_console_log('  [*] Document -> createComment[func]', [].slice.call(arguments))
    }),
  },
  documentElement: {
    get() {
      v_console_log('  [*] Document -> documentElement[get]', document)
      return document
    },
  },
  createEvent: {
    value: v_saf(function createEvent() {
      v_console_log('  [*] Document -> createEvent[func]', [].slice.call(arguments))
    }),
  },
  fullscreenElement: {
    get() {
      v_console_log('  [*] Document -> fullscreenElement[get]', {})
      return {}
    },
  },
  webkitFullscreenElement: {
    get() {
      v_console_log('  [*] Document -> webkitFullscreenElement[get]', {})
      return {}
    },
  },
  domain: {
    get() {
      v_console_log('  [*] Document -> domain[get]', 'fanyi.youdao.com')
      return 'fanyi.youdao.com'
    },
  },
  lastModified: {
    get() {
      v_console_log('  [*] Document -> lastModified[get]', '08/16/2023 23:05:09')
      return '08/16/2023 23:05:09'
    },
  },
  characterSet: {
    get() {
      v_console_log('  [*] Document -> characterSet[get]', 'UTF-8')
      return 'UTF-8'
    },
  },
  referrer: {
    get() {
      v_console_log('  [*] Document -> referrer[get]', 'http://fanyi.youdao.com/')
      return 'http://fanyi.youdao.com/'
    },
  },
  onreadystatechange: {
    get() {
      v_console_log('  [*] Document -> onreadystatechange[get]', {})
      return {}
    },
  },
  onmouseenter: {
    get() {
      v_console_log('  [*] Document -> onmouseenter[get]', {})
      return {}
    },
  },
  onmouseleave: {
    get() {
      v_console_log('  [*] Document -> onmouseleave[get]', {})
      return {}
    },
  },
  getSelection: {
    value: v_saf(function getSelection() {
      v_console_log('  [*] Document -> getSelection[func]', [].slice.call(arguments))
    }),
  },
  execCommand: {
    value: v_saf(function execCommand() {
      v_console_log('  [*] Document -> execCommand[func]', [].slice.call(arguments))
    }),
  },
  onreadystatechange: { enumerable: true, configurable: true },
  onmouseenter: { enumerable: true, configurable: true },
  onmouseleave: { enumerable: true, configurable: true },
  [Symbol.toStringTag]: { value: 'Document', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Element.prototype, {
  setAttribute: {
    value: v_saf(function setAttribute() {
      v_console_log('  [*] Element -> setAttribute[func]', [].slice.call(arguments))
    }),
  },
  innerHTML: {
    set() {
      v_console_log('  [*] Element -> innerHTML[set]', [].slice.call(arguments))
    },
  },
  className: {
    set() {
      v_console_log('  [*] Element -> className[set]', [].slice.call(arguments))
    },
  },
  removeAttribute: {
    value: v_saf(function removeAttribute() {
      v_console_log('  [*] Element -> removeAttribute[func]', [].slice.call(arguments))
    }),
  },
  tagName: {
    get() {
      v_console_log('  [*] Element -> tagName[get]', this.v_tagName)
      return this.v_tagName
    },
  },
  id: {
    set() {
      v_console_log('  [*] Element -> id[set]', [].slice.call(arguments))
      return 'A'
    },
  },
  classList: {
    get() {
      v_console_log('  [*] Element -> classList[get]', {})
      return {}
    },
  },
  scrollTop: {
    set() {
      v_console_log('  [*] Element -> scrollTop[set]', [].slice.call(arguments))
      return {}
    },
  },
  getAttribute: {
    value: v_saf(function getAttribute() {
      v_console_log('  [*] Element -> getAttribute[func]', [].slice.call(arguments))
    }),
  },
  clientHeight: {
    get() {
      v_console_log('  [*] Element -> clientHeight[get]', 286)
      return 286
    },
  },
  [Symbol.toStringTag]: { value: 'Element', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(XMLHttpRequest.prototype, {
  UNSENT: { value: 0, writable: false, enumerable: true, configurable: false },
  OPENED: { value: 1, writable: false, enumerable: true, configurable: false },
  HEADERS_RECEIVED: { value: 2, writable: false, enumerable: true, configurable: false },
  LOADING: { value: 3, writable: false, enumerable: true, configurable: false },
  DONE: { value: 4, writable: false, enumerable: true, configurable: false },
  [Symbol.toStringTag]: { value: 'XMLHttpRequest', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(AudioScheduledSourceNode.prototype, {
  start: {
    value: v_saf(function start() {
      v_console_log('  [*] AudioScheduledSourceNode -> start[func]', [].slice.call(arguments))
    }),
  },
  [Symbol.toStringTag]: { value: 'AudioScheduledSourceNode', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(DynamicsCompressorNode.prototype, {
  threshold: {
    get() {
      v_console_log('  [*] DynamicsCompressorNode -> threshold[get]', {})
      return {}
    },
  },
  knee: {
    get() {
      v_console_log('  [*] DynamicsCompressorNode -> knee[get]', {})
      return {}
    },
  },
  ratio: {
    get() {
      v_console_log('  [*] DynamicsCompressorNode -> ratio[get]', {})
      return {}
    },
  },
  attack: {
    get() {
      v_console_log('  [*] DynamicsCompressorNode -> attack[get]', {})
      return {}
    },
  },
  release: {
    get() {
      v_console_log('  [*] DynamicsCompressorNode -> release[get]', {})
      return {}
    },
  },
  [Symbol.toStringTag]: { value: 'DynamicsCompressorNode', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(OfflineAudioContext.prototype, {
  oncomplete: {
    set() {
      v_console_log('  [*] OfflineAudioContext -> oncomplete[set]', [].slice.call(arguments))
    },
  },
  startRendering: {
    value: v_saf(function startRendering() {
      v_console_log('  [*] OfflineAudioContext -> startRendering[func]', [].slice.call(arguments))
    }),
  },
  [Symbol.toStringTag]: { value: 'OfflineAudioContext', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLElement.prototype, {
  style: {
    get() {
      v_console_log('  [*] HTMLElement -> style[get]', this.v_style)
      return this.v_style
    },
  },
  onload: {
    set() {
      v_console_log('  [*] HTMLElement -> onload[set]', [].slice.call(arguments))
      return {}
    },
  },
  onerror: {
    set() {
      v_console_log('  [*] HTMLElement -> onerror[set]', [].slice.call(arguments))
      return {}
    },
  },
  dir: {
    set() {
      v_console_log('  [*] HTMLElement -> dir[set]', [].slice.call(arguments))
      return {}
    },
  },
  focus: {
    value: v_saf(function focus() {
      v_console_log('  [*] HTMLElement -> focus[func]', [].slice.call(arguments))
    }),
  },
  onmousedown: {
    set() {
      v_console_log('  [*] HTMLElement -> onmousedown[set]', [].slice.call(arguments))
      return {}
    },
  },
  onmouseenter: {
    get() {
      v_console_log('  [*] HTMLElement -> onmouseenter[get]', {})
      return {}
    },
  },
  onmouseleave: {
    get() {
      v_console_log('  [*] HTMLElement -> onmouseleave[get]', {})
      return {}
    },
  },
  onmouseenter: { enumerable: true, configurable: true },
  onmouseleave: { enumerable: true, configurable: true },
  [Symbol.toStringTag]: { value: 'HTMLElement', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(OscillatorNode.prototype, {
  type: {
    set() {
      v_console_log('  [*] OscillatorNode -> type[set]', [].slice.call(arguments))
    },
  },
  frequency: {
    get() {
      v_console_log('  [*] OscillatorNode -> frequency[get]', {})
      return {}
    },
  },
  [Symbol.toStringTag]: { value: 'OscillatorNode', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLScriptElement.prototype, {
  src: {
    get() {
      v_console_log(
        '  [*] HTMLScriptElement -> src[get]',
        'https://shared.youdao.com/dict/market/translation-website-ab/v5/js/app.68a22c0c.js',
      )
      return 'https://shared.youdao.com/dict/market/translation-website-ab/v5/js/app.68a22c0c.js'
    },
    set() {
      v_console_log('  [*] HTMLScriptElement -> src[set]', [].slice.call(arguments))
      return 'https://shared.youdao.com/dict/market/translation-website-ab/v5/js/app.68a22c0c.js'
    },
  },
  charset: {
    set() {
      v_console_log('  [*] HTMLScriptElement -> charset[set]', [].slice.call(arguments))
      return 'https://shared.youdao.com/dict/market/translation-website-ab/v5/js/app.68a22c0c.js'
    },
  },
  [Symbol.toStringTag]: { value: 'HTMLScriptElement', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLStyleElement.prototype, {
  type: {
    set() {
      v_console_log('  [*] HTMLStyleElement -> type[set]', [].slice.call(arguments))
    },
  },
  [Symbol.toStringTag]: { value: 'HTMLStyleElement', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLAnchorElement.prototype, {
  href: {
    get() {
      v_console_log('  [*] HTMLAnchorElement -> href[get]', 'https://fanyi.youdao.com/indexLLM.html#/')
      return 'https://fanyi.youdao.com/indexLLM.html#/'
    },
    set() {
      v_console_log('  [*] HTMLAnchorElement -> href[set]', [].slice.call(arguments))
      return 'https://fanyi.youdao.com/indexLLM.html#/'
    },
  },
  protocol: {
    get() {
      v_console_log('  [*] HTMLAnchorElement -> protocol[get]', 'https:')
      return 'https:'
    },
  },
  host: {
    get() {
      v_console_log('  [*] HTMLAnchorElement -> host[get]', 'fanyi.youdao.com')
      return 'fanyi.youdao.com'
    },
  },
  search: {
    get() {
      v_console_log('  [*] HTMLAnchorElement -> search[get]', '')
      return ''
    },
  },
  hash: {
    get() {
      v_console_log('  [*] HTMLAnchorElement -> hash[get]', '#/')
      return '#/'
    },
  },
  hostname: {
    get() {
      v_console_log('  [*] HTMLAnchorElement -> hostname[get]', 'fanyi.youdao.com')
      return 'fanyi.youdao.com'
    },
  },
  port: {
    get() {
      v_console_log('  [*] HTMLAnchorElement -> port[get]', '')
      return ''
    },
  },
  pathname: {
    get() {
      v_console_log('  [*] HTMLAnchorElement -> pathname[get]', '/indexLLM.html')
      return '/indexLLM.html'
    },
  },
  target: {
    set() {
      v_console_log('  [*] HTMLAnchorElement -> target[set]', [].slice.call(arguments))
      return '/indexLLM.html'
    },
  },
  [Symbol.toStringTag]: { value: 'HTMLAnchorElement', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLIFrameElement.prototype, {
  src: {
    set() {
      v_console_log('  [*] HTMLIFrameElement -> src[set]', [].slice.call(arguments))
    },
  },
  contentWindow: {
    get() {
      v_console_log('  [*] HTMLIFrameElement -> contentWindow[get]', {})
      return {}
    },
  },
  srcdoc: {
    set() {
      v_console_log('  [*] HTMLIFrameElement -> srcdoc[set]', [].slice.call(arguments))
      return {}
    },
  },
  [Symbol.toStringTag]: { value: 'HTMLIFrameElement', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLImageElement.prototype, {
  src: {
    get() {
      v_console_log('  [*] HTMLImageElement -> src[get]', '')
      return ''
    },
    set() {
      v_console_log('  [*] HTMLImageElement -> src[set]', [].slice.call(arguments))
      return ''
    },
  },
  alt: {
    set() {
      v_console_log('  [*] HTMLImageElement -> alt[set]', [].slice.call(arguments))
      return ''
    },
  },
  [Symbol.toStringTag]: { value: 'HTMLImageElement', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLInputElement.prototype, {
  type: {
    set() {
      v_console_log('  [*] HTMLInputElement -> type[set]', [].slice.call(arguments))
    },
  },
  disabled: {
    set() {
      v_console_log('  [*] HTMLInputElement -> disabled[set]', [].slice.call(arguments))
    },
  },
  checked: {
    set() {
      v_console_log('  [*] HTMLInputElement -> checked[set]', [].slice.call(arguments))
    },
  },
  [Symbol.toStringTag]: { value: 'HTMLInputElement', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLCanvasElement.prototype, {
  width: {
    set() {
      v_console_log('  [*] HTMLCanvasElement -> width[set]', [].slice.call(arguments))
    },
  },
  height: {
    set() {
      v_console_log('  [*] HTMLCanvasElement -> height[set]', [].slice.call(arguments))
    },
  },
  getContext: {
    value: v_saf(function getContext() {
      v_console_log('  [*] HTMLCanvasElement -> getContext[func]', [].slice.call(arguments))
      if (arguments[0] == '2d') {
        var r = v_new(CanvasRenderingContext2D)
        return r
      }
      if (arguments[0] == 'webgl' || arguments[0] == 'experimental-webgl') {
        var r = v_new(WebGLRenderingContext)
        r._canvas = this
        return r
      }
      return null
    }),
  },
  [Symbol.toStringTag]: { value: 'HTMLCanvasElement', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLLinkElement.prototype, {
  rel: {
    get() {
      v_console_log('  [*] HTMLLinkElement -> rel[get]', 'stylesheet')
      return 'stylesheet'
    },
    set() {
      v_console_log('  [*] HTMLLinkElement -> rel[set]', [].slice.call(arguments))
      return 'stylesheet'
    },
  },
  type: {
    set() {
      v_console_log('  [*] HTMLLinkElement -> type[set]', [].slice.call(arguments))
      return 'stylesheet'
    },
  },
  href: {
    set() {
      v_console_log('  [*] HTMLLinkElement -> href[set]', [].slice.call(arguments))
      return 'stylesheet'
    },
  },
  relList: {
    get() {
      v_console_log('  [*] HTMLLinkElement -> relList[get]', {})
      return {}
    },
  },
  [Symbol.toStringTag]: { value: 'HTMLLinkElement', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLMediaElement.prototype, {
  pause: {
    value: v_saf(function pause() {
      v_console_log('  [*] HTMLMediaElement -> pause[func]', [].slice.call(arguments))
    }),
  },
  NETWORK_EMPTY: { value: 0, writable: false, enumerable: true, configurable: false },
  NETWORK_IDLE: { value: 1, writable: false, enumerable: true, configurable: false },
  NETWORK_LOADING: { value: 2, writable: false, enumerable: true, configurable: false },
  NETWORK_NO_SOURCE: { value: 3, writable: false, enumerable: true, configurable: false },
  HAVE_NOTHING: { value: 0, writable: false, enumerable: true, configurable: false },
  HAVE_METADATA: { value: 1, writable: false, enumerable: true, configurable: false },
  HAVE_CURRENT_DATA: { value: 2, writable: false, enumerable: true, configurable: false },
  HAVE_FUTURE_DATA: { value: 3, writable: false, enumerable: true, configurable: false },
  HAVE_ENOUGH_DATA: { value: 4, writable: false, enumerable: true, configurable: false },
  [Symbol.toStringTag]: { value: 'HTMLMediaElement', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLTextAreaElement.prototype, {
  value: {
    set() {
      v_console_log('  [*] HTMLTextAreaElement -> value[set]', [].slice.call(arguments))
    },
  },
  select: {
    value: v_saf(function select() {
      v_console_log('  [*] HTMLTextAreaElement -> select[func]', [].slice.call(arguments))
    }),
  },
  [Symbol.toStringTag]: { value: 'HTMLTextAreaElement', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Window.prototype, {
  TEMPORARY: { value: 0, writable: true, enumerable: true, configurable: true },
  PERSISTENT: { value: 1, writable: true, enumerable: true, configurable: true },
  [Symbol.toStringTag]: { value: 'Window', writable: true, enumerable: true, configurable: true },
})
Object.defineProperties(HTMLDocument.prototype, {
  [Symbol.toStringTag]: { value: 'HTMLDocument', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLHeadElement.prototype, {
  [Symbol.toStringTag]: { value: 'HTMLHeadElement', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLBodyElement.prototype, {
  [Symbol.toStringTag]: { value: 'HTMLBodyElement', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Location.prototype, {
  [Symbol.toStringTag]: { value: 'Location', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Performance.prototype, {
  [Symbol.toStringTag]: { value: 'Performance', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceEntry.prototype, {
  [Symbol.toStringTag]: { value: 'PerformanceEntry', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceElementTiming.prototype, {
  [Symbol.toStringTag]: { value: 'PerformanceElementTiming', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceEventTiming.prototype, {
  [Symbol.toStringTag]: { value: 'PerformanceEventTiming', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceLongTaskTiming.prototype, {
  [Symbol.toStringTag]: { value: 'PerformanceLongTaskTiming', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceMark.prototype, {
  [Symbol.toStringTag]: { value: 'PerformanceMark', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceMeasure.prototype, {
  [Symbol.toStringTag]: { value: 'PerformanceMeasure', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceNavigation.prototype, {
  TYPE_NAVIGATE: { value: 0, writable: false, enumerable: true, configurable: false },
  TYPE_RELOAD: { value: 1, writable: false, enumerable: true, configurable: false },
  TYPE_BACK_FORWARD: { value: 2, writable: false, enumerable: true, configurable: false },
  TYPE_RESERVED: { value: 255, writable: false, enumerable: true, configurable: false },
  [Symbol.toStringTag]: { value: 'PerformanceNavigation', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceResourceTiming.prototype, {
  [Symbol.toStringTag]: { value: 'PerformanceResourceTiming', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceNavigationTiming.prototype, {
  [Symbol.toStringTag]: {
    value: 'PerformanceNavigationTiming',
    writable: false,
    enumerable: false,
    configurable: true,
  },
})
Object.defineProperties(PerformanceObserver.prototype, {
  [Symbol.toStringTag]: { value: 'PerformanceObserver', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceObserverEntryList.prototype, {
  [Symbol.toStringTag]: {
    value: 'PerformanceObserverEntryList',
    writable: false,
    enumerable: false,
    configurable: true,
  },
})
Object.defineProperties(PerformancePaintTiming.prototype, {
  [Symbol.toStringTag]: { value: 'PerformancePaintTiming', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceServerTiming.prototype, {
  [Symbol.toStringTag]: { value: 'PerformanceServerTiming', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceTiming.prototype, {
  [Symbol.toStringTag]: { value: 'PerformanceTiming', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLUnknownElement.prototype, {
  [Symbol.toStringTag]: { value: 'HTMLUnknownElement', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Touch.prototype, {
  [Symbol.toStringTag]: { value: 'Touch', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(UIEvent.prototype, {
  [Symbol.toStringTag]: { value: 'UIEvent', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(TouchEvent.prototype, {
  [Symbol.toStringTag]: { value: 'TouchEvent', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(MouseEvent.prototype, {
  [Symbol.toStringTag]: { value: 'MouseEvent', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PointerEvent.prototype, {
  [Symbol.toStringTag]: { value: 'PointerEvent', writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLDivElement.prototype, {
  [Symbol.toStringTag]: { value: 'HTMLDivElement', writable: false, enumerable: false, configurable: true },
})

if (typeof __dirname != 'undefined') {
  __dirname = undefined
}
if (typeof __filename != 'undefined') {
  __filename = undefined
}
if (typeof require != 'undefined') {
  require = undefined
}
if (typeof exports != 'undefined') {
  exports = undefined
}
if (typeof module != 'undefined') {
  module = undefined
}
if (typeof Buffer != 'undefined') {
  Buffer = undefined
}
var __globalThis__ = typeof global != 'undefined' ? global : this
var window = new Proxy(v_new(Window), {
  get(a, b) {
    return a[b] || __globalThis__[b]
  },
  set(a, b, c) {
    if (b == 'onclick' && typeof c == 'function') {
      window.addEventListener('click', c)
    }
    if (b == 'onmousedown' && typeof c == 'function') {
      window.addEventListener('mousedown', c)
    }
    if (b == 'onmouseup' && typeof c == 'function') {
      window.addEventListener('mouseup', c)
    }
    __globalThis__[b] = a[b] = c
  },
})
var v_hasOwnProperty = Object.prototype.hasOwnProperty
Object.prototype.hasOwnProperty = v_saf(function hasOwnProperty() {
  if (this == window) {
    return v_hasOwnProperty.apply(__globalThis__, arguments)
  }
  return v_hasOwnProperty.apply(this, arguments)
})
Object.defineProperties(__globalThis__, { [Symbol.toStringTag]: { value: 'Window' } })
Object.defineProperties(__globalThis__, Object.getOwnPropertyDescriptors(window))
Object.setPrototypeOf(__globalThis__, Object.getPrototypeOf(window))
window.parent = window
window.top = window
window.frames = window
window.self = window
window.document = v_new(HTMLDocument)
window.location = v_new(Location)
window.history = v_new(History)
window.navigator = v_new(Navigator)
window.screen = v_new(Screen)
window.clientInformation = navigator
window.performance = v_new(Performance)
window.sessionStorage = v_new(Storage)
window.localStorage = v_new(Storage)
function _createElement(name) {
  var htmlmap = {
    HTMLElement: [
      'abbr',
      'address',
      'article',
      'aside',
      'b',
      'bdi',
      'bdo',
      'cite',
      'code',
      'dd',
      'dfn',
      'dt',
      'em',
      'figcaption',
      'figure',
      'footer',
      'header',
      'hgroup',
      'i',
      'kbd',
      'main',
      'mark',
      'nav',
      'noscript',
      'rp',
      'rt',
      'ruby',
      's',
      'samp',
      'section',
      'small',
      'strong',
      'sub',
      'summary',
      'sup',
      'u',
      'var',
      'wbr',
    ],
    HTMLScriptElement: ['script'],
    HTMLStyleElement: ['style'],
    HTMLAnchorElement: ['a'],
    HTMLIFrameElement: ['iframe'],
    HTMLImageElement: ['img'],
    HTMLInputElement: ['input'],
    HTMLCanvasElement: ['canvas'],
    HTMLLinkElement: ['link'],
    HTMLMediaElement: [],
    HTMLTextAreaElement: ['textarea'],
    HTMLHeadElement: ['head'],
    HTMLBodyElement: ['body'],
    HTMLUnknownElement: [],
  }
  var ret,
    htmlmapkeys = Object.keys(htmlmap)
  name = name.toLocaleLowerCase()
  for (var i = 0; i < htmlmapkeys.length; i++) {
    if (htmlmap[htmlmapkeys[i]].indexOf(name) != -1) {
      ret = v_new(window[htmlmapkeys[i]])
      break
    }
  }
  if (!ret) {
    ret = v_new(HTMLUnknownElement)
  }
  if (typeof CSSStyleDeclaration != 'undefined') {
    ret.v_style = v_new(CSSStyleDeclaration)
  }
  ret.v_tagName = name.toUpperCase()
  return ret
}
function init_cookie(cookie) {
  var cache = (cookie || '').trim()
  if (!cache) {
    cache = ''
  } else if (cache.charAt(cache.length - 1) != ';') {
    cache += '; '
  } else {
    cache += ' '
  }
  Object.defineProperty(Document.prototype, 'cookie', {
    get: function () {
      var r = cache.slice(0, cache.length - 2)
      v_console_log('  [*] document -> cookie[get]', r)
      return r
    },
    set: function (c) {
      v_console_log('  [*] document -> cookie[set]', c)
      var ncookie = c.split(';')[0].split('=')
      if (!ncookie.slice(1).join('')) {
        return c
      }
      var key = ncookie[0].trim()
      var val = ncookie.slice(1).join('').trim()
      var newc = key + '=' + val
      var flag = false
      var temp = cache.split('; ').map(function (a) {
        if (a.split('=')[0] === key) {
          flag = true
          return newc
        }
        return a
      })
      cache = temp.join('; ')
      if (!flag) {
        cache += newc + '; '
      }
      return cache
    },
  })
}
function v_hook_href(obj, name, initurl) {
  var r = Object.defineProperty(obj, 'href', {
    get: function () {
      if (!this.protocol && !this.host) {
        r = ''
      } else {
        r =
          this.protocol +
          '//' +
          this.host +
          (this.port ? ':' + this.port : '') +
          this.pathname +
          this.search +
          this.hash
      }
      v_console_log(`  [*] ${name || obj.constructor.name} -> href[get]:`, JSON.stringify(r))
      return r
    },
    set: function (href) {
      href = href.trim()
      v_console_log(`  [*] ${name || obj.constructor.name} -> href[set]:`, JSON.stringify(href))
      if (href.startsWith('http://') || href.startsWith('https://')) {
        /*ok*/
      } else if (href.startsWith('//')) {
        href = (this.protocol ? this.protocol : 'http:') + href
      } else {
        href =
          this.protocol +
          '//' +
          this.host +
          (this.port ? ':' + this.port : '') +
          '/' +
          (href[0] == '/' ? href.slice(1) : href)
      }
      var a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/)
      this.protocol = a[1] ? a[1] : ''
      this.host = a[2] ? a[2] : ''
      this.port = a[3] ? a[3] : ''
      this.pathname = a[4] ? a[4] : ''
      this.search = a[5] ? a[5] : ''
      this.hash = a[6] ? a[6] : ''
      this.hostname = this.host
      this.origin = this.protocol + '//' + this.host + (this.port ? ':' + this.port : '')
    },
  })
  if (initurl && initurl.trim()) {
    var temp = v_new_toggle
    v_new_toggle = true
    r.href = initurl
    v_new_toggle = temp
  }
  return r
}
function v_hook_storage() {
  Storage.prototype.clear = v_saf(function () {
    v_console_log(`  [*] Storage -> clear[func]:`)
    var self = this
    Object.keys(self).forEach(function (key) {
      delete self[key]
    })
  }, 'clear')
  Storage.prototype.getItem = v_saf(function (key) {
    v_console_log(`  [*] Storage -> getItem[func]:`, key)
    var r = this.hasOwnProperty(key) ? String(this[key]) : null
    return r
  }, 'getItem')
  Storage.prototype.setItem = v_saf(function (key, val) {
    v_console_log(`  [*] Storage -> setItem[func]:`, key, val)
    this[key] = val === undefined ? null : String(val)
  }, 'setItem')
  Storage.prototype.key = v_saf(function (key) {
    v_console_log(`  [*] Storage -> key[func]:`, key)
    return Object.keys(this)[key || 0]
  }, 'key')
  Storage.prototype.removeItem = v_saf(function (key) {
    v_console_log(`  [*] Storage -> removeItem[func]:`, key)
    delete this[key]
  }, 'removeItem')
  Object.defineProperty(Storage.prototype, 'length', {
    get: function () {
      if (this === Storage.prototype) {
        throw TypeError('Illegal invocation')
      }
      return Object.keys(this).length
    },
  })
  window.sessionStorage = new Proxy(sessionStorage, {
    set: function (a, b, c) {
      v_console_log(`  [*] Storage -> [set]:`, b, c)
      return (a[b] = String(c))
    },
    get: function (a, b) {
      v_console_log(`  [*] Storage -> [get]:`, b, a[b])
      return a[b]
    },
  })
  window.localStorage = new Proxy(localStorage, {
    set: function (a, b, c) {
      v_console_log(`  [*] Storage -> [set]:`, b, c)
      return (a[b] = String(c))
    },
    get: function (a, b) {
      v_console_log(`  [*] Storage -> [get]:`, b, a[b])
      return a[b]
    },
  })
}
function v_init_document() {
  Document.prototype.getElementById = v_saf(function getElementById(name) {
    var r = v_getele(name, 'getElementById')
    v_console_log('  [*] Document -> getElementById', name, r)
    return r
  })
  Document.prototype.querySelector = v_saf(function querySelector(name) {
    var r = v_getele(name, 'querySelector')
    v_console_log('  [*] Document -> querySelector', name, r)
    return r
  })
  Document.prototype.getElementsByClassName = v_saf(function getElementsByClassName(name) {
    var r = v_geteles(name, 'getElementsByClassName')
    v_console_log('  [*] Document -> getElementsByClassName', name, r)
    return r
  })
  Document.prototype.getElementsByName = v_saf(function getElementsByName(name) {
    var r = v_geteles(name, 'getElementsByName')
    v_console_log('  [*] Document -> getElementsByName', name, r)
    return r
  })
  Document.prototype.getElementsByTagName = v_saf(function getElementsByTagName(name) {
    var r = v_geteles(name, 'getElementsByTagName')
    v_console_log('  [*] Document -> getElementsByTagName', name, r)
    return r
  })
  Document.prototype.getElementsByTagNameNS = v_saf(function getElementsByTagNameNS(name) {
    var r = v_geteles(name, 'getElementsByTagNameNS')
    v_console_log('  [*] Document -> getElementsByTagNameNS', name, r)
    return r
  })
  Document.prototype.querySelectorAll = v_saf(function querySelectorAll(name) {
    var r = v_geteles(name, 'querySelectorAll')
    v_console_log('  [*] Document -> querySelectorAll', name, r)
    return r
  })
  var v_head = v_new(HTMLHeadElement)
  var v_body = v_new(HTMLBodyElement)
  Object.defineProperties(Document.prototype, {
    head: {
      get() {
        v_console_log('  [*] Document -> head[get]', v_head)
        return v_head
      },
    },
    body: {
      get() {
        v_console_log('  [*] Document -> body[get]', v_body)
        return v_body
      },
    },
  })
}
function v_init_canvas() {
  HTMLCanvasElement.prototype.getContext = function () {
    if (arguments[0] == '2d') {
      var r = v_new(CanvasRenderingContext2D)
      return r
    }
    if (arguments[0] == 'webgl' || arguments[0] == 'experimental-webgl') {
      var r = v_new(WebGLRenderingContext)
      r._canvas = this
      return r
    }
    return null
  }
  HTMLCanvasElement.prototype.toDataURL = function () {
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC'
  }
}
var v_start_stamp = +new Date()
var v_fake_stamp = +new Date()
function v_init_event_target() {
  v_events = {}
  function add_event(_this, x) {
    if (!v_events[x[0]]) {
      v_events[x[0]] = []
    }
    v_events[x[0]].push([_this, x[1].bind(_this)])
  }
  function _mk_mouse_event(
    type,
    canBubble,
    cancelable,
    view,
    detail,
    screenX,
    screenY,
    clientX,
    clientY,
    ctrlKey,
    altKey,
    shiftKey,
    metaKey,
    button,
    relatedTarget,
  ) {
    if (type == 'click') {
      var m = new v_saf(function PointerEvent() {})
      m.pointerType = 'mouse'
    } else {
      var m = new v_saf(function MouseEvent() {})
    }
    m.isTrusted = true
    m.type = type
    m.canBubble = canBubble
    m.cancelable = cancelable
    m.view = view
    m.detail = detail
    m.screenX = screenX
    m.movementX = screenX
    m.screenY = screenY
    m.movementY = screenY
    m.clientX = clientX
    m.layerX = clientX
    m.offsetX = clientX
    m.pageX = clientX
    m.x = clientX
    m.clientY = clientY
    m.layerY = clientY
    m.offsetY = clientY
    m.pageY = clientY
    m.y = clientY
    m.ctrlKey = ctrlKey
    m.altKey = altKey
    m.shiftKey = shiftKey
    m.metaKey = metaKey
    m.button = button
    m.relatedTarget = relatedTarget
    return m
  }
  function make_mouse(type, x, y) {
    return _mk_mouse_event(type, true, true, window, 0, 0, 0, x, y, false, false, false, false, 0, null)
  }
  function mouse_click(x, y) {
    for (var i = 0; i < (v_events['click'] || []).length; i++) {
      v_events['click'][i][1](make_mouse('click', x, y))
    }
    for (var i = 0; i < (v_events['mousedown'] || []).length; i++) {
      v_events['mousedown'][i][1](make_mouse('mousedown', x, y))
    }
    for (var i = 0; i < (v_events['mouseup'] || []).length; i++) {
      v_events['mouseup'][i][1](make_mouse('mouseup', x, y))
    }
  }
  var offr = Math.random()
  function make_touch(_this, type, x, y, timeStamp) {
    var offx = Math.random()
    var offy = Math.random()
    var t = v_new(new v_saf(function Touch() {}))
    t = clientX = offx + x
    t = clientY = offy + y
    t = force = 1
    t = identifier = 0
    t = pageX = offx + x
    t = pageY = offy + y
    t = radiusX = 28 + offr
    t = radiusY = 28 + offr
    t = rotationAngle = 0
    t = screenX = 0
    t = screenY = 0
    var e = v_new(new v_saf(function TouchEvent() {}))
    e.isTrusted = true
    e.altKey = false
    e.bubbles = true
    e.cancelBubble = false
    e.cancelable = false
    e.changedTouches = e.targetTouches = e.touches = [t]
    e.composed = true
    e.ctrlKey = false
    e.currentTarget = null
    e.defaultPrevented = false
    e.detail = 0
    e.eventPhase = 0
    e.metaKey = false
    e.path = _this == window ? [window] : [_this, window]
    e.returnValue = true
    e.shiftKey = false
    e.sourceCapabilities = new v_saf(function InputDeviceCapabilities() {
      this.firesTouchEvents = true
    })
    e.srcElement = _this
    e.target = _this
    e.type = type
    e.timeStamp =
      timeStamp == undefined ? new Date() - v_start_stamp : (v_fake_stamp += Math.random() * 20) - v_start_stamp
    e.view = window
    e.which = 0
    return e
  }
  function make_trace(x1, y1, x2, y2) {
    // 贝塞尔曲线
    function step_len(x1, y1, x2, y2) {
      var ln = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
      return (ln / 10) ^ 0
    }
    var slen = step_len(x1, y1, x2, y2)
    if (slen < 3) {
      return []
    }
    function factorial(x) {
      for (var y = 1; x > 1; x--) {
        y *= x
      }
      return y
    }
    var lp = Math.random()
    var rp = Math.random()
    var xx1 = (x1 + ((x2 - x1) / 12) * (4 - lp * 4)) ^ 0
    var yy1 = (y1 + ((y2 - y1) / 12) * (8 + lp * 4)) ^ 0
    var xx2 = (x1 + ((x2 - x1) / 12) * (8 + rp * 4)) ^ 0
    var yy2 = (y1 + ((y2 - y1) / 12) * (4 - rp * 4)) ^ 0
    var points = [
      [x1, y1],
      [xx1, yy1],
      [xx2, yy2],
      [x2, y2],
    ]
    var N = points.length
    var n = N - 1
    var traces = []
    var step = slen
    for (var T = 0; T < step + 1; T++) {
      var t = T * (1 / step)
      var x = 0
      var y = 0
      for (var i = 0; i < N; i++) {
        var B = (factorial(n) * t ** i * (1 - t) ** (n - i)) / (factorial(i) * factorial(n - i))
        x += points[i][0] * B
        y += points[i][1] * B
      }
      traces.push([x ^ 0, y ^ 0])
    }
    return traces
  }
  function touch(x1, y1, x2, y2) {
    if (x2 == undefined && y2 == undefined) {
      x2 = x1
      y2 = y1
    }
    var traces = make_trace(x1, y1, x2, y2)
    console.log('traces:', traces)
    for (var i = 0; i < (v_events['touchstart'] || []).length; i++) {
      v_events['touchstart'][i][1](make_touch(v_events['touchstart'][i][0], 'touchstart', x1, y1))
    }
    for (var j = 0; j < traces.length; j++) {
      var x = traces[j][0]
      var y = traces[j][0]
      for (var i = 0; i < (v_events['touchmove'] || []).length; i++) {
        v_events['touchmove'][i][1](make_touch(v_events['touchmove'][i][0], 'touchmove', x, y))
      }
    }
    for (var i = 0; i < (v_events['touchend'] || []).length; i++) {
      v_events['touchend'][i][1](make_touch(v_events['touchend'][i][0], 'touchend', x2, y2))
    }
  }
  function mouse_move(x1, y1, x2, y2) {
    if (x2 == undefined && y2 == undefined) {
      x2 = x1
      y2 = y1
    }
    var traces = make_trace(x1, y1, x2, y2)
    console.log('traces:', traces)
    for (var j = 0; j < traces.length; j++) {
      var x = traces[j][0]
      var y = traces[j][0]
      for (var i = 0; i < (v_events['mousemove'] || []).length; i++) {
        v_events['mousemove'][i][1](make_touch(v_events['mousemove'][i][0], 'mousemove', x, y))
      }
    }
  }
  window.make_mouse = make_mouse
  window.mouse_click = mouse_click
  window.mouse_move = mouse_move
  window.touch = touch
  EventTarget.prototype.addEventListener = function () {
    v_console_log(
      '  [*] EventTarget -> addEventListener[func]',
      this === window ? '[Window]' : this === document ? '[Document]' : this,
      [].slice.call(arguments),
    )
    add_event(this, [].slice.call(arguments))
    return null
  }
  EventTarget.prototype.dispatchEvent = function () {
    v_console_log(
      '  [*] EventTarget -> dispatchEvent[func]',
      this === window ? '[Window]' : this === document ? '[Document]' : this,
      [].slice.call(arguments),
    )
    add_event(this, [].slice.call(arguments))
    return null
  }
  EventTarget.prototype.removeEventListener = function () {
    v_console_log(
      '  [*] EventTarget -> removeEventListener[func]',
      this === window ? '[Window]' : this === document ? '[Document]' : this,
      [].slice.call(arguments),
    )
    add_event(this, [].slice.call(arguments))
    return null
  }
}
function v_init_Element_prototype() {
  Element.prototype.getAnimations =
    Element.prototype.getAnimations ||
    v_saf(function getAnimations() {
      v_console_log('  [*] Element -> getAnimations[func]', [].slice.call(arguments))
    })
  Element.prototype.getAttribute =
    Element.prototype.getAttribute ||
    v_saf(function getAttribute() {
      v_console_log('  [*] Element -> getAttribute[func]', [].slice.call(arguments))
    })
  Element.prototype.getAttributeNS =
    Element.prototype.getAttributeNS ||
    v_saf(function getAttributeNS() {
      v_console_log('  [*] Element -> getAttributeNS[func]', [].slice.call(arguments))
    })
  Element.prototype.getAttributeNames =
    Element.prototype.getAttributeNames ||
    v_saf(function getAttributeNames() {
      v_console_log('  [*] Element -> getAttributeNames[func]', [].slice.call(arguments))
    })
  Element.prototype.getAttributeNode =
    Element.prototype.getAttributeNode ||
    v_saf(function getAttributeNode() {
      v_console_log('  [*] Element -> getAttributeNode[func]', [].slice.call(arguments))
    })
  Element.prototype.getAttributeNodeNS =
    Element.prototype.getAttributeNodeNS ||
    v_saf(function getAttributeNodeNS() {
      v_console_log('  [*] Element -> getAttributeNodeNS[func]', [].slice.call(arguments))
    })
  Element.prototype.getBoundingClientRect =
    Element.prototype.getBoundingClientRect ||
    v_saf(function getBoundingClientRect() {
      v_console_log('  [*] Element -> getBoundingClientRect[func]', [].slice.call(arguments))
    })
  Element.prototype.getClientRects =
    Element.prototype.getClientRects ||
    v_saf(function getClientRects() {
      v_console_log('  [*] Element -> getClientRects[func]', [].slice.call(arguments))
    })
  Element.prototype.getElementsByClassName =
    Element.prototype.getElementsByClassName ||
    v_saf(function getElementsByClassName() {
      v_console_log('  [*] Element -> getElementsByClassName[func]', [].slice.call(arguments))
    })
  Element.prototype.getElementsByTagName =
    Element.prototype.getElementsByTagName ||
    v_saf(function getElementsByTagName() {
      v_console_log('  [*] Element -> getElementsByTagName[func]', [].slice.call(arguments))
    })
  Element.prototype.getElementsByTagNameNS =
    Element.prototype.getElementsByTagNameNS ||
    v_saf(function getElementsByTagNameNS() {
      v_console_log('  [*] Element -> getElementsByTagNameNS[func]', [].slice.call(arguments))
    })
  Element.prototype.getInnerHTML =
    Element.prototype.getInnerHTML ||
    v_saf(function getInnerHTML() {
      v_console_log('  [*] Element -> getInnerHTML[func]', [].slice.call(arguments))
    })
  Element.prototype.hasAttribute =
    Element.prototype.hasAttribute ||
    v_saf(function hasAttribute() {
      v_console_log('  [*] Element -> hasAttribute[func]', [].slice.call(arguments))
    })
  Element.prototype.hasAttributeNS =
    Element.prototype.hasAttributeNS ||
    v_saf(function hasAttributeNS() {
      v_console_log('  [*] Element -> hasAttributeNS[func]', [].slice.call(arguments))
    })
  Element.prototype.hasAttributes =
    Element.prototype.hasAttributes ||
    v_saf(function hasAttributes() {
      v_console_log('  [*] Element -> hasAttributes[func]', [].slice.call(arguments))
    })
  Element.prototype.hasPointerCapture =
    Element.prototype.hasPointerCapture ||
    v_saf(function hasPointerCapture() {
      v_console_log('  [*] Element -> hasPointerCapture[func]', [].slice.call(arguments))
    })
  Element.prototype.webkitMatchesSelector =
    Element.prototype.webkitMatchesSelector ||
    v_saf(function webkitMatchesSelector() {
      v_console_log('  [*] Element -> webkitMatchesSelector[func]', [].slice.call(arguments))
    })
}
function v_init_DOMTokenList_prototype() {
  DOMTokenList.prototype.add =
    DOMTokenList.prototype.add ||
    v_saf(function add() {
      v_console_log('  [*] DOMTokenList -> add[func]', [].slice.call(arguments))
    })
  DOMTokenList.prototype.contains =
    DOMTokenList.prototype.contains ||
    v_saf(function contains() {
      v_console_log('  [*] DOMTokenList -> contains[func]', [].slice.call(arguments))
    })
  DOMTokenList.prototype.entries =
    DOMTokenList.prototype.entries ||
    v_saf(function entries() {
      v_console_log('  [*] DOMTokenList -> entries[func]', [].slice.call(arguments))
    })
  DOMTokenList.prototype.forEach =
    DOMTokenList.prototype.forEach ||
    v_saf(function forEach() {
      v_console_log('  [*] DOMTokenList -> forEach[func]', [].slice.call(arguments))
    })
  DOMTokenList.prototype.item =
    DOMTokenList.prototype.item ||
    v_saf(function item() {
      v_console_log('  [*] DOMTokenList -> item[func]', [].slice.call(arguments))
    })
  DOMTokenList.prototype.keys =
    DOMTokenList.prototype.keys ||
    v_saf(function keys() {
      v_console_log('  [*] DOMTokenList -> keys[func]', [].slice.call(arguments))
    })
  DOMTokenList.prototype.length =
    DOMTokenList.prototype.length ||
    v_saf(function length() {
      v_console_log('  [*] DOMTokenList -> length[func]', [].slice.call(arguments))
    })
  DOMTokenList.prototype.remove =
    DOMTokenList.prototype.remove ||
    v_saf(function remove() {
      v_console_log('  [*] DOMTokenList -> remove[func]', [].slice.call(arguments))
    })
  DOMTokenList.prototype.replace =
    DOMTokenList.prototype.replace ||
    v_saf(function replace() {
      v_console_log('  [*] DOMTokenList -> replace[func]', [].slice.call(arguments))
    })
  DOMTokenList.prototype.supports =
    DOMTokenList.prototype.supports ||
    v_saf(function supports() {
      v_console_log('  [*] DOMTokenList -> supports[func]', [].slice.call(arguments))
    })
  DOMTokenList.prototype.toggle =
    DOMTokenList.prototype.toggle ||
    v_saf(function toggle() {
      v_console_log('  [*] DOMTokenList -> toggle[func]', [].slice.call(arguments))
    })
}
function v_init_CSSStyleDeclaration_prototype() {
  CSSStyleDeclaration.prototype['zoom'] = ''
  CSSStyleDeclaration.prototype['resize'] = ''
  CSSStyleDeclaration.prototype['text-rendering'] = ''
  CSSStyleDeclaration.prototype['text-align-last'] = ''
}
function v_init_PointerEvent_prototype() {
  PointerEvent.prototype.getCoalescedEvents = v_saf(function getCoalescedEvents() {
    v_console_log('  [*] PointerEvent -> getCoalescedEvents[func]', [].slice.call(arguments))
  })
  PointerEvent.prototype.getPredictedEvents = v_saf(function getPredictedEvents() {
    v_console_log('  [*] PointerEvent -> getPredictedEvents[func]', [].slice.call(arguments))
  })
}
function v_init_PerformanceTiming_prototype() {
  try {
    Object.defineProperties(PerformanceTiming.prototype, {
      connectEnd: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function connectEnd() {
          v_console_log('  [*] PerformanceTiming -> connectEnd[get]', [].slice.call(arguments))
        }),
      },
      connectStart: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function connectStart() {
          v_console_log('  [*] PerformanceTiming -> connectStart[get]', [].slice.call(arguments))
        }),
      },
      domComplete: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function domComplete() {
          v_console_log('  [*] PerformanceTiming -> domComplete[get]', [].slice.call(arguments))
        }),
      },
      domContentLoadedEventEnd: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function domContentLoadedEventEnd() {
          v_console_log('  [*] PerformanceTiming -> domContentLoadedEventEnd[get]', [].slice.call(arguments))
        }),
      },
      domContentLoadedEventStart: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function domContentLoadedEventStart() {
          v_console_log('  [*] PerformanceTiming -> domContentLoadedEventStart[get]', [].slice.call(arguments))
        }),
      },
      domInteractive: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function domInteractive() {
          v_console_log('  [*] PerformanceTiming -> domInteractive[get]', [].slice.call(arguments))
        }),
      },
      domLoading: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function domLoading() {
          v_console_log('  [*] PerformanceTiming -> domLoading[get]', [].slice.call(arguments))
        }),
      },
      domainLookupEnd: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function domainLookupEnd() {
          v_console_log('  [*] PerformanceTiming -> domainLookupEnd[get]', [].slice.call(arguments))
        }),
      },
      domainLookupStart: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function domainLookupStart() {
          v_console_log('  [*] PerformanceTiming -> domainLookupStart[get]', [].slice.call(arguments))
        }),
      },
      fetchStart: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function fetchStart() {
          v_console_log('  [*] PerformanceTiming -> fetchStart[get]', [].slice.call(arguments))
        }),
      },
      loadEventEnd: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function loadEventEnd() {
          v_console_log('  [*] PerformanceTiming -> loadEventEnd[get]', [].slice.call(arguments))
        }),
      },
      loadEventStart: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function loadEventStart() {
          v_console_log('  [*] PerformanceTiming -> loadEventStart[get]', [].slice.call(arguments))
        }),
      },
      navigationStart: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function navigationStart() {
          v_console_log('  [*] PerformanceTiming -> navigationStart[get]', [].slice.call(arguments))
        }),
      },
      redirectEnd: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function redirectEnd() {
          v_console_log('  [*] PerformanceTiming -> redirectEnd[get]', [].slice.call(arguments))
        }),
      },
      redirectStart: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function redirectStart() {
          v_console_log('  [*] PerformanceTiming -> redirectStart[get]', [].slice.call(arguments))
        }),
      },
      requestStart: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function requestStart() {
          v_console_log('  [*] PerformanceTiming -> requestStart[get]', [].slice.call(arguments))
        }),
      },
      responseEnd: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function responseEnd() {
          v_console_log('  [*] PerformanceTiming -> responseEnd[get]', [].slice.call(arguments))
        }),
      },
      responseStart: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function responseStart() {
          v_console_log('  [*] PerformanceTiming -> responseStart[get]', [].slice.call(arguments))
        }),
      },
      secureConnectionStart: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function secureConnectionStart() {
          v_console_log('  [*] PerformanceTiming -> secureConnectionStart[get]', [].slice.call(arguments))
        }),
      },
      unloadEventEnd: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function unloadEventEnd() {
          v_console_log('  [*] PerformanceTiming -> unloadEventEnd[get]', [].slice.call(arguments))
        }),
      },
      unloadEventStart: {
        set: undefined,
        enumerable: true,
        configurable: true,
        get: v_saf(function unloadEventStart() {
          v_console_log('  [*] PerformanceTiming -> unloadEventStart[get]', [].slice.call(arguments))
        }),
      },
    })
  } catch (e) {}
}
function mk_atob_btoa(r) {
  var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    t = new Array(
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      62,
      -1,
      -1,
      -1,
      63,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      -1,
      -1,
      -1,
      -1,
      -1,
    )
  return {
    atob: function (r) {
      var a, e, o, h, c, i, n
      for (i = r.length, c = 0, n = ''; c < i; ) {
        do {
          a = t[255 & r.charCodeAt(c++)]
        } while (c < i && -1 == a)
        if (-1 == a) break
        do {
          e = t[255 & r.charCodeAt(c++)]
        } while (c < i && -1 == e)
        if (-1 == e) break
        n += String.fromCharCode((a << 2) | ((48 & e) >> 4))
        do {
          if (61 == (o = 255 & r.charCodeAt(c++))) return n
          o = t[o]
        } while (c < i && -1 == o)
        if (-1 == o) break
        n += String.fromCharCode(((15 & e) << 4) | ((60 & o) >> 2))
        do {
          if (61 == (h = 255 & r.charCodeAt(c++))) return n
          h = t[h]
        } while (c < i && -1 == h)
        if (-1 == h) break
        n += String.fromCharCode(((3 & o) << 6) | h)
      }
      return n
    },
    btoa: function (r) {
      var t, e, o, h, c, i
      for (o = r.length, e = 0, t = ''; e < o; ) {
        if (((h = 255 & r.charCodeAt(e++)), e == o)) {
          ;(t += a.charAt(h >> 2)), (t += a.charAt((3 & h) << 4)), (t += '==')
          break
        }
        if (((c = r.charCodeAt(e++)), e == o)) {
          ;(t += a.charAt(h >> 2)),
            (t += a.charAt(((3 & h) << 4) | ((240 & c) >> 4))),
            (t += a.charAt((15 & c) << 2)),
            (t += '=')
          break
        }
        ;(i = r.charCodeAt(e++)),
          (t += a.charAt(h >> 2)),
          (t += a.charAt(((3 & h) << 4) | ((240 & c) >> 4))),
          (t += a.charAt(((15 & c) << 2) | ((192 & i) >> 6))),
          (t += a.charAt(63 & i))
      }
      return t
    },
  }
}
var atob_btoa = mk_atob_btoa()
window.btoa = window.btoa || v_saf(atob_btoa.btoa, 'btoa')
window.atob = window.atob || v_saf(atob_btoa.atob, 'atob')

init_cookie(
  'OUTFOX_SEARCH_USER_ID=574891091@10.108.162.134; OUTFOX_SEARCH_USER_ID_NCOO=1927312935.2502077; SESSION_FROM_COOKIE=unknown; ___rl__test__cookies=1692932657623',
)
v_hook_href(window.location, 'location', 'https://fanyi.youdao.com/indexLLM.html#/')
v_hook_storage()
v_init_document()
v_init_canvas()
v_init_event_target()
v_init_Element_prototype()
v_init_DOMTokenList_prototype()
v_init_CSSStyleDeclaration_prototype()
v_init_PointerEvent_prototype()
v_init_PerformanceTiming_prototype()
window.innerWidth = 1920
window.innerHeight = 938
window.outerHeight = 1055
window.outerWidth = 1920
window.isSecureContext = true
window.origin = location.origin
function v_getele(name, func) {
  if (name == '#app' && func == 'querySelector') {
    return v_new(HTMLDivElement)
  }
  if (name == 'body' && func == 'querySelector') {
    return v_new(HTMLBodyElement)
  }
  if (name == 'container' && func == 'getElementById') {
    return v_new(HTMLDivElement)
  }
  return null
}
function v_geteles(name, func) {
  if (name == 'link' && func == 'getElementsByTagName') {
    return [
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
      v_new(HTMLLinkElement),
    ]
  }
  if (name == 'style' && func == 'getElementsByTagName') {
    return [v_new(HTMLStyleElement), v_new(HTMLStyleElement)]
  }
  if (name == 'head' && func == 'getElementsByTagName') {
    return [v_new(HTMLHeadElement)]
  }
  if (name == 'body' && func == 'getElementsByTagName') {
    return [v_new(HTMLBodyElement)]
  }
  return null
}
var v_Date = Date
var v_base_time = +new Date()
;(function () {
  function ftime() {
    return new v_Date() - v_base_time + v_to_time
  }
  Date = (function (_Date) {
    var bind = Function.bind
    var unbind = bind.bind(bind)
    function instantiate(constructor, args) {
      return new (unbind(constructor, null).apply(null, args))()
    }
    var names = Object.getOwnPropertyNames(_Date)
    for (var i = 0; i < names.length; i++) {
      if (names[i] in Date) continue
      var desc = Object.getOwnPropertyDescriptor(_Date, names[i])
      Object.defineProperty(Date, names[i], desc)
    }
    function Date() {
      var date = instantiate(_Date, [ftime()])
      return date
    }
    Date.prototype = _Date.prototype
    return v_saf(Date)
  })(Date)
  Date.now = v_saf(function now() {
    return ftime()
  })
})()
var v_to_time = +new v_Date()
// var v_to_time = +new v_Date('Sat Sep 03 2022 11:11:58 GMT+0800') // 自定义起始时间
v_new_toggle = undefined

window.randomInt = () => {}

getEncrypt(window)
