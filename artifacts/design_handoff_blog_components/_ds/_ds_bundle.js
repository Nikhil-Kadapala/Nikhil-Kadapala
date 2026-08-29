/* @ds-bundle: {"format":4,"namespace":"NikhilSPursuitDesignSystem_c9b321","components":[{"name":"ArtifactRow","sourcePath":"components/catalog/ArtifactRow.jsx"},{"name":"ListItem","sourcePath":"components/catalog/ListItem.jsx"},{"name":"PaperCard","sourcePath":"components/catalog/PaperCard.jsx"},{"name":"PrimitiveGrid","sourcePath":"components/catalog/PrimitiveGrid.jsx"},{"name":"ProjectCard","sourcePath":"components/catalog/ProjectCard.jsx"},{"name":"BrandMark","sourcePath":"components/core/BrandMark.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"LinkArrow","sourcePath":"components/core/LinkArrow.jsx"},{"name":"Mono","sourcePath":"components/core/Mono.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"KnowledgeGraph","sourcePath":"components/instrument/KnowledgeGraph.jsx"},{"name":"Prose","sourcePath":"components/instrument/Prose.jsx"},{"name":"ProseQuote","sourcePath":"components/instrument/Prose.jsx"},{"name":"RunInspector","sourcePath":"components/instrument/RunInspector.jsx"},{"name":"TypeFilters","sourcePath":"components/instrument/TypeFilters.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"SectionTop","sourcePath":"components/layout/Section.jsx"},{"name":"PageHead","sourcePath":"components/layout/Section.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/layout/SiteHeader.jsx"},{"name":"StatusBand","sourcePath":"components/layout/StatusBand.jsx"}],"sourceHashes":{"components/catalog/ArtifactRow.jsx":"9dbaa387f8cd","components/catalog/ListItem.jsx":"e281c3f26d0d","components/catalog/PaperCard.jsx":"f070884ba347","components/catalog/PrimitiveGrid.jsx":"680b20ae20cc","components/catalog/ProjectCard.jsx":"5c851b94e625","components/core/BrandMark.jsx":"dc56da86b908","components/core/Button.jsx":"f81f47c38ae2","components/core/LinkArrow.jsx":"00cdac81e954","components/core/Mono.jsx":"70f325eff4d0","components/core/Tag.jsx":"384264a0e66a","components/instrument/KnowledgeGraph.jsx":"a4880ad50902","components/instrument/Prose.jsx":"0b787b6fd5a1","components/instrument/RunInspector.jsx":"6e563d5468b5","components/instrument/TypeFilters.jsx":"9408f2bdc9a0","components/layout/Section.jsx":"b49e3089fb90","components/layout/SiteFooter.jsx":"b4f436be846e","components/layout/SiteHeader.jsx":"197536b18e12","components/layout/StatusBand.jsx":"6d36174bae8b","ui_kits/pursuit-site/App.jsx":"7d052bebba90","ui_kits/pursuit-site/ArticleScreen.jsx":"b28162ab5006","ui_kits/pursuit-site/CatalogScreens.jsx":"fc9437898d6d","ui_kits/pursuit-site/HomeScreen.jsx":"2f477dff1554","ui_kits/pursuit-site/data.js":"c4000082a0b9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NikhilSPursuitDesignSystem_c9b321 = window.NikhilSPursuitDesignSystem_c9b321 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/catalog/ArtifactRow.jsx
try { (() => {
/** Numbered featured-work row: index, kind + name + summary, status/open. */
function ArtifactRow({
  index,
  kind,
  name,
  summary,
  status,
  href = "#"
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "72px minmax(0,1fr) 140px",
      gap: "24px",
      padding: hover ? "30px 16px" : "30px 0",
      borderBottom: "1px solid var(--border)",
      background: hover ? "var(--surface-1)" : "transparent",
      transition: "padding var(--dur), background var(--dur)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      font: "500 var(--text-mono-xs)/1.2 var(--font-mono)",
      letterSpacing: ".06em",
      paddingTop: "5px"
    }
  }, index), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 10px/1.3 var(--font-mono)",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase",
      color: "var(--accent)"
    }
  }, kind), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "11px 0 8px",
      fontSize: "var(--text-h3)",
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-h3)",
      fontWeight: 500
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "60ch",
      margin: 0,
      color: "var(--text-secondary)"
    }
  }, summary)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-end",
      padding: "4px 0",
      font: "500 var(--text-mono-xs)/1.2 var(--font-mono)",
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, status), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "Open \u2197")));
}
Object.assign(__ds_scope, { ArtifactRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/ArtifactRow.jsx", error: String((e && e.message) || e) }); }

// components/catalog/ListItem.jsx
try { (() => {
/** Three-column catalog row: mono meta, title + description + tags, read link. */
function ListItem({
  meta,
  title,
  description,
  tags,
  action = "Read",
  href = "#"
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "grid",
      gridTemplateColumns: "110px minmax(0,1fr) 56px",
      gap: "24px",
      padding: "27px 0",
      borderBottom: "1px solid var(--border)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 var(--text-mono-sm)/1.3 var(--font-mono)",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, meta), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px",
      fontSize: "var(--text-h3)",
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-h3)",
      fontWeight: 500
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "66ch",
      margin: 0,
      color: "var(--text-secondary)"
    }
  }, description), tags && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "16px",
      font: "500 10px/1.3 var(--font-mono)",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, tags)), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right",
      paddingTop: "4px",
      font: "500 var(--text-mono-md)/1.4 var(--font-mono)",
      letterSpacing: ".025em"
    }
  }, action, " \u2197"));
}
Object.assign(__ds_scope, { ListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/ListItem.jsx", error: String((e && e.message) || e) }); }

// components/catalog/PaperCard.jsx
try { (() => {
/** Large publication card — year + tags, title, abstract, link row. */
function PaperCard({
  year,
  tags,
  title,
  detail,
  links = [],
  action = "Read the writeup →",
  href = "#"
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "block",
      padding: "34px 36px",
      border: `1px solid ${hover ? "var(--border-strong)" : "var(--border)"}`,
      borderRadius: "var(--radius-2xl)",
      background: hover ? "var(--surface-2)" : "var(--surface-1)",
      transition: "border-color var(--dur) var(--ease-out), background var(--dur) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "18px",
      font: "500 var(--text-mono-xs)/1.2 var(--font-mono)",
      letterSpacing: ".07em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, year), /*#__PURE__*/React.createElement("span", null, tags)), /*#__PURE__*/React.createElement("h3", {
    style: {
      maxWidth: "30ch",
      margin: "20px 0 14px",
      fontSize: "1.5rem",
      lineHeight: "var(--leading-heading)",
      fontWeight: 500
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "72ch",
      margin: 0,
      color: "var(--text-secondary)",
      fontSize: "var(--text-body)"
    }
  }, detail), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      marginTop: "26px",
      paddingTop: "22px",
      borderTop: "1px solid var(--border)",
      font: "500 var(--text-mono-xs)/1.2 var(--font-mono)",
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l
  }, l, " \u2197")), /*#__PURE__*/React.createElement("em", {
    style: {
      marginLeft: "auto",
      color: "var(--accent)",
      fontStyle: "normal"
    }
  }, action)));
}
Object.assign(__ds_scope, { PaperCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/PaperCard.jsx", error: String((e && e.message) || e) }); }

// components/catalog/PrimitiveGrid.jsx
try { (() => {
/** Hairline-gridded three-up of numbered "open question" cells. */
function PrimitiveGrid({
  items = [],
  columns = 3
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns},1fr)`,
      border: "1px solid var(--border)",
      background: "var(--border)",
      gap: "1px"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("article", {
    key: it.title,
    style: {
      minHeight: "260px",
      padding: "30px",
      background: "var(--surface-1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 var(--text-mono-sm)/1.3 var(--font-mono)",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase",
      color: "var(--accent)"
    }
  }, "0", i + 1, " / ", it.title), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "48px 0 12px",
      fontSize: "var(--text-h3)",
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-h3)",
      fontWeight: 500
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "26ch",
      color: "var(--text-secondary)",
      fontSize: "var(--text-body-sm)",
      margin: 0
    }
  }, it.copy))));
}
Object.assign(__ds_scope, { PrimitiveGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/PrimitiveGrid.jsx", error: String((e && e.message) || e) }); }

// components/core/BrandMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** "Nikhil's Pursuit" mark — an oblique N whose diagonal is a weighted traversal edge between two nodes. */
function BrandMark({
  size = 22,
  withWordmark = false,
  style,
  ...rest
}) {
  const mark = /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    focusable: "false",
    style: {
      display: "block",
      flex: "none",
      color: "var(--text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.41 19.5L7.38 5.5",
    stroke: "currentColor",
    strokeOpacity: ".7",
    strokeWidth: "1.3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.62 18.5L19.38 5.5",
    stroke: "currentColor",
    strokeOpacity: ".7",
    strokeWidth: "1.3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.38 5.5L16.62 18.5",
    stroke: "var(--accent)",
    strokeWidth: "3.2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7.38",
    cy: "5.5",
    r: "2.4",
    fill: "var(--bg)",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16.62",
    cy: "18.5",
    r: "2.4",
    fill: "var(--bg)",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }));
  if (!withWordmark) return /*#__PURE__*/React.createElement("span", _extends({
    style: style
  }, rest), mark);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "9px",
      ...style
    }
  }, rest), mark, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `600 ${Math.round(size * 0.82)}px/1 var(--font-sans)`,
      letterSpacing: "-.02em",
      whiteSpace: "nowrap"
    }
  }, "Nikhil\u2019s Pursuit"));
}
Object.assign(__ds_scope, { BrandMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BrandMark.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: "inline-flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 16px",
  border: "1px solid transparent",
  borderRadius: "var(--radius-md)",
  font: "500 var(--text-mono-md)/1 var(--font-mono)",
  letterSpacing: "var(--tracking-mono-tight)",
  cursor: "pointer",
  transition: "background var(--dur), border-color var(--dur), color var(--dur)"
};
const sizes = {
  sm: {
    padding: "8px 12px",
    fontSize: "11px",
    borderRadius: "var(--radius-sm)"
  },
  md: {},
  lg: {
    padding: "14px 20px"
  }
};

/** Inverted primary CTA (light fill, near-black label) and its quiet/ghost siblings. */
function Button({
  variant = "primary",
  size = "md",
  as,
  href,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const Tag = as || (href ? "a" : "button");
  const [hover, setHover] = React.useState(false);
  const variants = {
    primary: {
      borderColor: "var(--text)",
      background: hover ? "transparent" : "var(--text)",
      color: hover ? "var(--text)" : "var(--bg)"
    },
    quiet: {
      borderColor: hover ? "var(--border-strong)" : "var(--border)",
      background: hover ? "var(--surface-3)" : "transparent",
      color: "var(--text)"
    },
    ghost: {
      borderColor: "transparent",
      background: hover ? "var(--surface-3)" : "transparent",
      color: "var(--text)"
    },
    link: {
      borderColor: "transparent",
      background: "transparent",
      color: hover ? "var(--accent)" : "var(--text)",
      padding: 0
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...(disabled ? {
        opacity: .5,
        pointerEvents: "none"
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/LinkArrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Mono text link. `external` appends the ↗ used site-wide; internal links use →. */
function LinkArrow({
  href = "#",
  external = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      font: "500 var(--text-mono-md)/1.4 var(--font-mono)",
      letterSpacing: ".025em",
      color: hover ? "var(--accent)" : "inherit",
      ...style
    }
  }, rest), children, external ? " ↗" : " →");
}
Object.assign(__ds_scope, { LinkArrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LinkArrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Mono.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Uppercase mono micro-label — eyebrows, tags, statuses, timings. */
function Mono({
  tone = "muted",
  size = "sm",
  uppercase = true,
  as: Tag = "span",
  children,
  style,
  ...rest
}) {
  const tones = {
    muted: "var(--text-muted)",
    faint: "var(--text-faint)",
    secondary: "var(--text-secondary)",
    accent: "var(--accent)",
    text: "var(--text)"
  };
  const sizes = {
    xs: "10px",
    sm: "11px",
    md: "12px",
    lg: "15px"
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      font: `500 ${sizes[size]}/1.3 var(--font-mono)`,
      letterSpacing: "var(--tracking-mono)",
      textTransform: uppercase ? "uppercase" : "none",
      color: tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Mono });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Mono.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Accent mono tag used on cards and catalog rows. */
function Tag({
  tone = "accent",
  children,
  style,
  ...rest
}) {
  const color = tone === "accent" ? "var(--accent)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      font: "500 10px/1.3 var(--font-mono)",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase",
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/catalog/ProjectCard.jsx
try { (() => {
/** Grid card for a shipped-work record: kind, name, summary, status + case-study link. */
function ProjectCard({
  kind,
  name,
  summary,
  status,
  href = "#"
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: "flex",
      flexDirection: "column",
      minHeight: "240px",
      padding: "28px",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      background: "var(--surface-1)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, null, kind), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "18px 0 8px",
      fontSize: "var(--text-h3)",
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-h3)",
      fontWeight: 500
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      margin: 0
    }
  }, summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "10px",
      marginTop: "auto",
      paddingTop: "24px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 var(--text-mono-sm)/1.3 var(--font-mono)",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, status), /*#__PURE__*/React.createElement(__ds_scope.LinkArrow, {
    href: href,
    external: true
  }, "Case study")));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/instrument/KnowledgeGraph.jsx
try { (() => {
const THREADS = [{
  id: "kb",
  x: 132,
  y: 64,
  label: "Knowledge bases",
  copy: "What the system is allowed to know."
}, {
  id: "retrieval",
  x: 84,
  y: 188,
  label: "Retrieval",
  copy: "What it pulled back, and whether that was enough."
}, {
  id: "memory",
  x: 108,
  y: 310,
  label: "Memory",
  copy: "What survives after the retrieval is over."
}, {
  id: "evals",
  x: 172,
  y: 426,
  label: "Evals",
  copy: "Whether the behavior matched the intent."
}];
const ARTIFACTS = [{
  id: "checkthat",
  x: 452,
  y: 76,
  name: "CheckThat!",
  meta: "CLEF 2025 · paper",
  href: "#"
}, {
  id: "agentic-rag",
  x: 486,
  y: 198,
  name: "agentic-rag",
  meta: "multimodal RAG + evals",
  href: "#"
}, {
  id: "harnessbox",
  x: 450,
  y: 320,
  name: "HarnessBox",
  meta: "agent harness primitives",
  href: "#"
}, {
  id: "resalign",
  x: 402,
  y: 428,
  name: "ResAlign AI",
  meta: "career intelligence",
  href: "#"
}];
const EDGES = [["kb", "checkthat"], ["kb", "resalign"], ["retrieval", "agentic-rag"], ["retrieval", "resalign"], ["memory", "agentic-rag"], ["memory", "harnessbox"], ["evals", "checkthat"], ["evals", "agentic-rag"], ["evals", "harnessbox"]];
const bar = {
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  padding: "13px 16px",
  color: "var(--text-muted)",
  font: "500 var(--text-mono-xs)/1.25 var(--font-mono)",
  letterSpacing: ".06em",
  textTransform: "uppercase"
};

/** Hover-traced node graph wiring research threads to shipped artifacts. */
function KnowledgeGraph({
  threads = THREADS,
  artifacts = ARTIFACTS,
  edges = EDGES,
  title = "research map"
}) {
  const [active, setActive] = React.useState(null);
  const byId = new Map([...threads, ...artifacts].map(n => [n.id, n]));
  const lit = React.useMemo(() => {
    if (!active) return null;
    const s = new Set([active]);
    for (const [t, a] of edges) {
      if (t === active) s.add(a);
      if (a === active) s.add(t);
    }
    return s;
  }, [active, edges]);
  const on = id => lit ? lit.has(id) : true;
  const dim = id => lit && !lit.has(id);
  const path = (from, to) => `M${from.x} ${from.y} C${from.x + 96} ${from.y} ${to.x - 96} ${to.y} ${to.x} ${to.y}`;
  const activeThread = threads.find(t => t.id === active);
  const activeArtifact = artifacts.find(a => a.id === active);
  return /*#__PURE__*/React.createElement("div", {
    onMouseLeave: () => setActive(null),
    style: {
      overflow: "hidden",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-xl)",
      background: "linear-gradient(155deg,#121212 0%,var(--surface-1) 60%)",
      boxShadow: "var(--shadow-panel)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bar,
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", null, title), /*#__PURE__*/React.createElement("span", null, lit ? `${lit.size - 1} linked` : `${threads.length} threads · ${artifacts.length} artifacts`)), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 600 480",
    role: "img",
    "aria-label": "Research map",
    style: {
      display: "block",
      width: "100%",
      height: "auto",
      padding: "6px 10px 10px"
    }
  }, /*#__PURE__*/React.createElement("g", null, edges.map(([t, a]) => {
    const isOn = lit ? lit.has(t) && lit.has(a) : false;
    return /*#__PURE__*/React.createElement("path", {
      key: t + a,
      d: path(byId.get(t), byId.get(a)),
      fill: "none",
      stroke: isOn ? "var(--accent)" : "var(--border-strong)",
      strokeWidth: "1",
      opacity: lit && !isOn ? .22 : 1,
      style: {
        transition: "stroke var(--dur) var(--ease-out), opacity var(--dur) var(--ease-out)"
      }
    });
  })), threads.map(t => {
    const hot = lit && lit.has(t.id);
    return /*#__PURE__*/React.createElement("g", {
      key: t.id,
      tabIndex: 0,
      role: "button",
      "aria-label": `${t.label}. ${t.copy}`,
      onMouseEnter: () => setActive(t.id),
      onFocus: () => setActive(t.id),
      onBlur: () => setActive(null),
      style: {
        opacity: dim(t.id) ? .3 : 1,
        transition: "opacity var(--dur) var(--ease-out)",
        outline: "none"
      }
    }, /*#__PURE__*/React.createElement("text", {
      x: t.x,
      y: t.y - 20,
      textAnchor: "middle",
      fill: hot ? "var(--accent)" : "var(--text-secondary)",
      style: {
        font: "500 9.5px/1 var(--font-mono)",
        letterSpacing: ".09em",
        transition: "fill var(--dur) var(--ease-out)"
      }
    }, t.label.toUpperCase()), /*#__PURE__*/React.createElement("circle", {
      cx: t.x,
      cy: t.y,
      r: "6",
      fill: hot ? "var(--accent)" : "var(--bg)",
      stroke: hot ? "var(--accent)" : "var(--border-strong)",
      strokeWidth: "1.5",
      style: {
        transition: "fill var(--dur) var(--ease-out), stroke var(--dur) var(--ease-out)"
      }
    }), /*#__PURE__*/React.createElement("circle", {
      cx: t.x,
      cy: t.y,
      r: "15",
      fill: "none",
      stroke: "var(--accent)",
      strokeWidth: "1",
      opacity: hot ? .4 : 0,
      style: {
        transition: "opacity var(--dur) var(--ease-out)"
      }
    }));
  }), artifacts.map(a => {
    const hot = lit && lit.has(a.id);
    return /*#__PURE__*/React.createElement("a", {
      key: a.id,
      href: a.href,
      onMouseEnter: () => setActive(a.id),
      onFocus: () => setActive(a.id),
      onBlur: () => setActive(null),
      style: {
        opacity: dim(a.id) ? .3 : 1,
        cursor: "pointer",
        transition: "opacity var(--dur) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("rect", {
      x: a.x - 7,
      y: a.y - 7,
      width: "14",
      height: "14",
      rx: "3",
      fill: hot ? "var(--accent)" : "var(--surface-3)",
      stroke: hot ? "var(--accent)" : "var(--border-strong)",
      strokeWidth: "1",
      style: {
        transition: "fill var(--dur) var(--ease-out), stroke var(--dur) var(--ease-out)"
      }
    }), /*#__PURE__*/React.createElement("text", {
      x: a.x + 22,
      y: a.y - 2,
      fill: "var(--text)",
      style: {
        font: "500 12px/1 var(--font-sans)",
        letterSpacing: "-.01em"
      }
    }, a.name), /*#__PURE__*/React.createElement("text", {
      x: a.x + 22,
      y: a.y + 14,
      fill: "var(--text-muted)",
      style: {
        font: "400 9.5px/1 var(--font-mono)",
        letterSpacing: ".04em"
      }
    }, a.meta));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bar,
      borderTop: "1px solid var(--border)",
      minHeight: "42px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      whiteSpace: "nowrap"
    }
  }, activeThread?.label ?? activeArtifact?.name ?? "hover a node to trace its links"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      textAlign: "right",
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: 400
    }
  }, activeThread?.copy ?? activeArtifact?.meta ?? "")));
}
Object.assign(__ds_scope, { KnowledgeGraph });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/instrument/KnowledgeGraph.jsx", error: String((e && e.message) || e) }); }

// components/instrument/Prose.jsx
try { (() => {
/** 730px long-form column with the article's eyebrow, title, lead and meta line. */
function Prose({
  eyebrow,
  title,
  lead,
  meta,
  children
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      padding: "100px 0 140px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(var(--layout-max), calc(100% - 64px))",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--measure-prose)"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "500 var(--text-mono-sm)/1.3 var(--font-mono)",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase",
      color: "var(--accent)",
      margin: "0 0 20px"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h1", {
    style: {
      maxWidth: "17ch",
      fontSize: "var(--text-h2)",
      lineHeight: "var(--leading-display)",
      letterSpacing: "var(--tracking-display)",
      fontWeight: "var(--weight-heading)",
      margin: "0 0 22px"
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: "var(--text-lead)",
      lineHeight: 1.45,
      margin: "0 0 20px"
    }
  }, lead), meta && /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "50px",
      font: "500 var(--text-mono-sm)/1.3 var(--font-mono)",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, meta), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-prose)",
      lineHeight: "var(--leading-prose)"
    }
  }, children))));
}

/** Accent-ruled pull quote for use inside Prose. */
function ProseQuote({
  children
}) {
  return /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: "1.4em 0",
      padding: "0 0 0 16px",
      borderLeft: "2px solid var(--accent)",
      color: "var(--text-secondary)"
    }
  }, children);
}
Object.assign(__ds_scope, { Prose, ProseQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/instrument/Prose.jsx", error: String((e && e.message) || e) }); }

// components/instrument/RunInspector.jsx
try { (() => {
const EVENTS = [["01", "task", "User intent recovered from source material", "0.021s"], ["02", "retrieval", "Evidence spans ranked and attached", "0.184s"], ["03", "behavior", "Agent response checked against the request", "0.421s"], ["04", "review", "Claim remains inspectable by a human", "0.067s"]];
const dot = {
  display: "inline-block",
  width: "7px",
  height: "7px",
  marginRight: "7px",
  borderRadius: "50%",
  background: "var(--success)",
  boxShadow: "var(--glow-live)"
};
const barBase = {
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  padding: "13px 16px",
  color: "var(--text-muted)",
  font: "500 var(--text-mono-xs)/1.25 var(--font-mono)",
  letterSpacing: ".03em"
};

/** Framed evaluation-run panel: title bar, tabs, score summary, event trace. */
function RunInspector({
  runId = "intent-audit / run_042",
  duration = "0.693s",
  score = "0.87",
  scoreLabel = "intent\nalignment",
  filled = 8,
  summary = "Not whether the agent followed a storyboard. Whether its answer remains faithful to the work a person asked it to do.",
  tabs = ["Trace", "Evidence", "Score", "Report"],
  events = EVENTS,
  source = "research-notes.md"
}) {
  const [tab, setTab] = React.useState(tabs[0]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      overflow: "hidden",
      border: "1px solid var(--border-strong)",
      borderRadius: "var(--radius-xl)",
      background: "var(--surface-1)",
      boxShadow: "var(--shadow-panel)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      ...barBase,
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: dot
  }), runId), /*#__PURE__*/React.createElement("span", null, "completed \xB7 ", duration)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "26px",
      padding: "0 18px",
      borderBottom: "1px solid var(--border)",
      font: "500 var(--text-mono-xs)/1 var(--font-mono)",
      color: "var(--text-muted)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    onClick: () => setTab(t),
    style: {
      padding: "13px 0",
      position: "relative",
      cursor: "pointer",
      color: tab === t ? "var(--text)" : "inherit"
    }
  }, t, tab === t && /*#__PURE__*/React.createElement("i", {
    style: {
      content: "''",
      position: "absolute",
      right: 0,
      bottom: "-1px",
      left: 0,
      height: "1px",
      background: "var(--accent)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: ".8fr 1.2fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 24px",
      borderRight: "1px solid var(--border)",
      background: "linear-gradient(150deg,#12100e 0%,var(--surface-1) 58%)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "26px",
      color: "var(--accent)",
      font: "500 var(--text-mono-xs)/1.3 var(--font-mono)",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase"
    }
  }, "Evaluation / behavior against intent"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "13px",
      marginBottom: "22px"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      font: "600 clamp(3.8rem,6vw,5.5rem)/.82 var(--font-sans)",
      letterSpacing: "-.065em"
    }
  }, score), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      font: "500 var(--text-mono-xs)/1.35 var(--font-mono)",
      textTransform: "uppercase",
      whiteSpace: "pre-line"
    }
  }, scoreLabel)), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "22px",
      color: "var(--text-secondary)",
      fontSize: "13px",
      lineHeight: 1.55
    }
  }, summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(10,1fr)",
      gap: "3px"
    }
  }, Array.from({
    length: 10
  }, (_, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      height: "5px",
      background: i < filled ? "var(--accent)" : "var(--surface-3)"
    }
  })))), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      padding: "15px 18px",
      listStyle: "none"
    }
  }, events.map(([step, type, copy, time], i) => /*#__PURE__*/React.createElement("li", {
    key: step,
    style: {
      display: "grid",
      gridTemplateColumns: "24px 1fr auto",
      gap: "12px",
      padding: "13px 0",
      borderBottom: i === events.length - 1 ? "none" : "1px solid var(--border)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      font: "400 var(--text-mono-xs)/1.5 var(--font-mono)"
    }
  }, step), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      display: "block",
      color: "var(--accent-hover)",
      font: "500 var(--text-mono-xs)/1.2 var(--font-mono)",
      letterSpacing: ".04em",
      textTransform: "uppercase"
    }
  }, type), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      color: "var(--text-secondary)",
      fontSize: "12px",
      lineHeight: 1.35
    }
  }, copy)), /*#__PURE__*/React.createElement("time", {
    style: {
      color: "var(--text-faint)",
      font: "400 var(--text-mono-xs)/1.5 var(--font-mono)"
    }
  }, time))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      ...barBase,
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: dot
  }), " evidence attached"), /*#__PURE__*/React.createElement("span", null, "source: ", source)));
}
Object.assign(__ds_scope, { RunInspector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/instrument/RunInspector.jsx", error: String((e && e.message) || e) }); }

// components/instrument/TypeFilters.jsx
try { (() => {
/** Inline mono filter row; the active entry is accent-coloured. */
function TypeFilters({
  options = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "18px",
      margin: "0 0 36px"
    },
    "aria-label": "Filter"
  }, options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const label = typeof o === "string" ? o : o.label;
    const active = val === value;
    return /*#__PURE__*/React.createElement("a", {
      key: val,
      href: "#",
      "aria-current": active ? "page" : undefined,
      onClick: e => {
        e.preventDefault();
        onChange && onChange(val);
      },
      style: {
        font: "500 var(--text-mono-sm)/1.3 var(--font-mono)",
        letterSpacing: "var(--tracking-mono)",
        textTransform: "uppercase",
        color: active ? "var(--accent)" : "var(--text-muted)"
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { TypeFilters });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/instrument/TypeFilters.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WRAP = {
  width: "min(var(--layout-max), calc(100% - 64px))",
  margin: "0 auto"
};

/** Full-width band with the system's vertical rhythm and hairline rules. */
function Section({
  tone = "bg",
  rhythm = "normal",
  divider = "top",
  children,
  style,
  ...rest
}) {
  const pad = {
    normal: "var(--section-y) 0",
    loose: "var(--section-y-loose) 0",
    tight: "var(--section-y-tight) 0",
    none: "0"
  }[rhythm];
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      padding: pad,
      background: tone === "raised" ? "var(--surface-1)" : "var(--bg)",
      borderTop: divider === "top" || divider === "both" ? "1px solid var(--border)" : undefined,
      borderBottom: divider === "bottom" || divider === "both" ? "1px solid var(--border)" : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, children));
}

/** Eyebrow + claim headline on the left, optional index link on the right. */
function SectionTop({
  eyebrow,
  title,
  aside
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "30px",
      alignItems: "flex-end",
      marginBottom: "42px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "500 var(--text-mono-sm)/1.3 var(--font-mono)",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase",
      color: "var(--accent)",
      margin: "0 0 14px"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-h2)",
      lineHeight: "var(--leading-display)",
      letterSpacing: "var(--tracking-h2)",
      fontWeight: "var(--weight-heading)",
      maxWidth: "16ch",
      margin: 0
    }
  }, title)), aside);
}

/** Page header band — eyebrow, page title, one-line standfirst. */
function PageHead({
  eyebrow,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--page-head-y) 0 76px",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "500 var(--text-mono-sm)/1.3 var(--font-mono)",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase",
      color: "var(--accent)",
      margin: "0 0 20px"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-page-title)",
      lineHeight: "var(--leading-display)",
      letterSpacing: "var(--tracking-display)",
      fontWeight: "var(--weight-heading)",
      maxWidth: "16ch",
      margin: "0 0 22px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "54ch",
      color: "var(--text-secondary)",
      fontSize: "var(--text-body-lg)",
      margin: 0
    }
  }, children)));
}
Object.assign(__ds_scope, { Section, SectionTop, PageHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
const LINKS = [["GitHub", "https://github.com/Nikhil-Kadapala"], ["LinkedIn", "https://www.linkedin.com/in/nikhil-kadapala"], ["X", "https://x.com/Nikhil_Kadapala"], ["RSS", "/rss.xml"]];

/** Hairline footer: attribution left, uppercase mono link list right. */
function SiteFooter({
  name = "Nikhil Kadapala",
  year = "2026",
  links = LINKS
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border)",
      padding: "27px 0",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(var(--layout-max), calc(100% - 64px))",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 var(--text-mono-sm)/1.3 var(--font-mono)",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, name, " \xB7 ", year), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "20px"
    }
  }, links.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    style: {
      font: "500 var(--text-mono-xs)/1 var(--font-mono)",
      letterSpacing: ".05em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label)))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteHeader.jsx
try { (() => {
const NAV = [["About", "/about"], ["Blog", "/writing"], ["Research", "/research"], ["Projects", "/projects"]];

/** Sticky 76px header: brand lockup, mono nav, GitHub CTA. */
function SiteHeader({
  active,
  onNavigate,
  links = NAV,
  sticky = true
}) {
  const [hoverCta, setHoverCta] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: "var(--header-height)",
      borderBottom: "1px solid var(--border)",
      background: "var(--header-bg)",
      backdropFilter: "var(--header-blur)",
      position: sticky ? "sticky" : "relative",
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "min(var(--layout-max), calc(100% - 64px))",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "30px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate("/");
      }
    },
    style: {
      minWidth: "170px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.BrandMark, {
    size: 22,
    withWordmark: true
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "30px"
    },
    "aria-label": "Primary"
  }, links.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    href: href,
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(href);
      }
    },
    style: {
      font: "500 var(--text-mono-lg)/1 var(--font-mono)",
      letterSpacing: ".01em",
      color: active === href ? "var(--accent)" : "var(--text)"
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      minWidth: "170px",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/Nikhil-Kadapala",
    target: "_blank",
    rel: "noopener noreferrer",
    onMouseEnter: () => setHoverCta(true),
    onMouseLeave: () => setHoverCta(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "9px 13px",
      border: `1px solid ${hoverCta ? "var(--border-strong)" : "var(--border)"}`,
      borderRadius: "var(--radius-sm)",
      background: hoverCta ? "var(--surface-3)" : "transparent",
      font: "500 var(--text-mono-lg)/1 var(--font-mono)",
      transition: "border-color var(--dur) var(--ease-out), background var(--dur) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    style: {
      flex: "none",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
  })), /*#__PURE__*/React.createElement("span", null, "GitHub"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    },
    "aria-hidden": "true"
  }, "\u2197")))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/layout/StatusBand.jsx
try { (() => {
/** Three-up label/value strip under the hero, ruled with hairlines. */
function StatusBand({
  items = []
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      background: "var(--surface-1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(var(--layout-max), calc(100% - 64px))",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: `repeat(${items.length || 3},1fr)`
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      padding: i === 0 ? "19px 24px 19px 0" : "19px 24px",
      borderRight: i === items.length - 1 ? "none" : "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 var(--text-mono-xs)/1.2 var(--font-mono)",
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, it.label), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: "14px",
      fontWeight: 500,
      display: "flex",
      alignItems: "center"
    }
  }, it.live && /*#__PURE__*/React.createElement("i", {
    style: {
      display: "inline-block",
      width: "7px",
      height: "7px",
      marginRight: "7px",
      borderRadius: "50%",
      background: "var(--success)",
      boxShadow: "var(--glow-live)"
    }
  }), it.value)))));
}
Object.assign(__ds_scope, { StatusBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/StatusBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pursuit-site/App.jsx
try { (() => {
const {
  SiteHeader,
  SiteFooter
} = window.NikhilSPursuitDesignSystem_c9b321;
function App() {
  const [route, setRoute] = React.useState("/");
  const go = r => {
    setRoute(r);
    window.scrollTo(0, 0);
  };
  const active = route.startsWith("/research") ? "/research" : route;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    active: active,
    onNavigate: go
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      minHeight: "70vh"
    }
  }, route === "/" && /*#__PURE__*/React.createElement(HomeScreen, {
    go: go
  }), route === "/projects" && /*#__PURE__*/React.createElement(ProjectsScreen, {
    go: go
  }), route === "/writing" && /*#__PURE__*/React.createElement(WritingScreen, {
    go: go
  }), route === "/research" && /*#__PURE__*/React.createElement(ResearchScreen, {
    go: go
  }), route === "/research/paper" && /*#__PURE__*/React.createElement(ArticleScreen, {
    go: go
  }), route === "/about" && /*#__PURE__*/React.createElement(AboutFallback, {
    go: go
  })), /*#__PURE__*/React.createElement(SiteFooter, null));
}
function AboutFallback({
  go
}) {
  const {
    PageHead,
    Section
  } = window.NikhilSPursuitDesignSystem_c9b321;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "About",
    title: "A breadth-first way into hard problems."
  }, "I build AI systems that have to work on messy, real-world text, then I try to measure whether they actually do."), /*#__PURE__*/React.createElement(Section, {
    divider: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "500 11px/1.3 var(--font-mono)",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--accent)",
      margin: "0 0 20px"
    }
  }, "Now"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-h2)",
      lineHeight: 1.1,
      letterSpacing: "-.025em",
      fontWeight: 600,
      maxWidth: "16ch",
      margin: 0
    }
  }, "Heading back to UNH.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 730,
      fontSize: 18,
      lineHeight: 1.72
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "This fall I\u2019m returning to the University of New Hampshire for a PhD on agent evaluations: scoring behavior against intent in knowledge bases, RAG, and memory systems."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 0
    }
  }, "Before that, I founded ResAlign AI, a career copilot for fit and preparedness. The research bug started as a master\u2019s class project and became a CheckThat! 2025 paper.")))));
}
Object.assign(window, {
  App
});
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pursuit-site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pursuit-site/ArticleScreen.jsx
try { (() => {
const {
  Prose,
  ProseQuote,
  Button,
  LinkArrow
} = window.NikhilSPursuitDesignSystem_c9b321;
function ArticleScreen({
  go
}) {
  const r = window.SITE_DATA.research[0];
  return /*#__PURE__*/React.createElement(Prose, {
    eyebrow: "Research · " + r.year,
    title: r.title,
    lead: r.summary,
    meta: r.tags.join(" · ")
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 1.2em"
    }
  }, r.detail), /*#__PURE__*/React.createElement(ProseQuote, null, "An evaluation has to preserve the shape of the work. A claim that wins a benchmark but cannot be checked is not a successful claim."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 1.2em"
    }
  }, "That is the thread I keep returning to. An agent that completes a scripted trace but misses intent has not done the job."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      margin: "32px 0"
    }
  }, r.links.map(l => /*#__PURE__*/React.createElement(Button, {
    key: l,
    href: "#"
  }, l, " \u2197"))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(LinkArrow, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("/research");
    }
  }, "Back to research")));
}
Object.assign(window, {
  ArticleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pursuit-site/ArticleScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pursuit-site/CatalogScreens.jsx
try { (() => {
const {
  Section,
  PageHead,
  ProjectCard,
  ListItem,
  TypeFilters,
  LinkArrow,
  Button
} = window.NikhilSPursuitDesignSystem_c9b321;
function ProjectsScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Projects",
    title: "Systems with a question behind them."
  }, "Product, infrastructure, and research engineering\u2014selected work with the context left in."), /*#__PURE__*/React.createElement(Section, {
    divider: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, window.SITE_DATA.projects.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.slug,
    kind: p.kind,
    name: p.name,
    summary: p.summary,
    status: p.status,
    href: "#"
  })))));
}
function WritingScreen({
  go
}) {
  const [type, setType] = React.useState("all");
  const posts = window.SITE_DATA.writing.filter(p => type === "all" || p.type === type);
  const label = v => (window.SITE_DATA.writingTypes.find(t => t.value === v) || {}).label;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Writing",
    title: "Notes from the edge of the system."
  }, "Short observations on agents, evaluation, retrieval, and the gap between a demo and useful work."), /*#__PURE__*/React.createElement(Section, {
    divider: "none"
  }, /*#__PURE__*/React.createElement(TypeFilters, {
    value: type,
    onChange: setType,
    options: window.SITE_DATA.writingTypes
  }), posts.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)"
    }
  }, "No posts in this category yet.") : /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border)"
    }
  }, posts.map(p => /*#__PURE__*/React.createElement(ListItem, {
    key: p.slug,
    meta: p.date,
    title: p.title,
    description: p.description,
    tags: [label(p.type), ...p.tags].join(" · "),
    href: "#"
  })))));
}
function ResearchScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Research",
    title: "Useful is a harder target than accurate."
  }, "Work on claim extraction, agent behavior, and the systems around knowledge."), /*#__PURE__*/React.createElement(Section, {
    divider: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border)"
    }
  }, window.SITE_DATA.research.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.slug,
    onClick: () => go("/research/paper"),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(ListItem, {
    meta: r.year,
    title: r.title,
    description: r.summary,
    tags: r.tags.join(" · "),
    href: "#"
  }))))));
}
Object.assign(window, {
  ProjectsScreen,
  WritingScreen,
  ResearchScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pursuit-site/CatalogScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pursuit-site/HomeScreen.jsx
try { (() => {
const {
  Button,
  LinkArrow,
  Section,
  SectionTop,
  StatusBand,
  ArtifactRow,
  PaperCard,
  PrimitiveGrid,
  KnowledgeGraph
} = window.NikhilSPursuitDesignSystem_c9b321;
function HomeScreen({
  go
}) {
  const d = window.SITE_DATA,
    paper = d.research[0];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      width: "min(var(--layout-max), calc(100% - 64px))",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "minmax(0,.94fr) minmax(510px,1.06fr)",
      gap: 72,
      alignItems: "center",
      paddingTop: 104,
      paddingBottom: 112
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "500 11px/1.3 var(--font-mono)",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--accent)",
      margin: "0 0 20px"
    }
  }, "NIKHIL KADAPALA / PHD STUDENT \xB7 UNH"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-display)",
      lineHeight: 1.1,
      letterSpacing: "-.03em",
      fontWeight: 600,
      maxWidth: "15ch",
      margin: "0 0 26px",
      textWrap: "balance"
    }
  }, "What does the agent actually know?"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "42ch",
      color: "var(--text-secondary)",
      fontSize: "clamp(17px,1.9vw,22px)",
      lineHeight: 1.36,
      margin: 0
    }
  }, "I build AI systems that have to work on messy, real-world text, then I try to measure whether they actually do. My PhD is on agent evals: knowledge bases, retrieval, and memory."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("/research")
  }, "Read the research ", /*#__PURE__*/React.createElement("span", null, "\u2197")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("/projects");
    },
    style: {
      font: "500 12px/1.4 var(--font-mono)",
      letterSpacing: ".025em"
    }
  }, "Browse systems ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "\u2192")))), /*#__PURE__*/React.createElement(KnowledgeGraph, null)), /*#__PURE__*/React.createElement(StatusBand, {
    items: [{
      label: "NOW",
      value: "PhD · University of New Hampshire"
    }, {
      label: "FOCUS",
      value: "Agent evals · memory · RAG"
    }, {
      label: "PAPER",
      value: "CheckThat! · CLEF 2025",
      live: true
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "raised",
    rhythm: "loose",
    divider: "bottom"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "500 11px/1.3 var(--font-mono)",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--accent)",
      margin: "0 0 20px"
    }
  }, "01 / THE ARGUMENT"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-h2)",
      lineHeight: 1.1,
      letterSpacing: "-.025em",
      fontWeight: 600,
      maxWidth: "16ch",
      margin: 0
    }
  }, "Retrieval is not knowing.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "39ch",
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 20,
      lineHeight: 1.55,
      marginTop: 0
    }
  }, "A high score can describe a system nobody can use. I keep running into the same gap: the metric goes up, and the thing a person actually needed still isn\u2019t there. That distance \u2014 between a plausible answer and a useful one \u2014 is most of what I work on."), /*#__PURE__*/React.createElement(LinkArrow, {
    href: "#",
    external: true,
    onClick: e => {
      e.preventDefault();
      go("/about");
    }
  }, "How I approach it")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionTop, {
    eyebrow: "Published research",
    title: "The score is not the work.",
    aside: /*#__PURE__*/React.createElement(LinkArrow, {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("/research");
      }
    }, "Research index")
  }), /*#__PURE__*/React.createElement(PaperCard, {
    year: paper.year,
    tags: paper.tags.join(" · "),
    title: paper.title,
    detail: paper.detail,
    links: paper.links,
    href: "#"
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionTop, {
    eyebrow: "Selected systems",
    title: "Things I actually shipped.",
    aside: /*#__PURE__*/React.createElement(LinkArrow, {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("/projects");
      }
    }, "All systems")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border)"
    }
  }, d.projects.filter(p => p.featured).map((p, i) => /*#__PURE__*/React.createElement(ArtifactRow, {
    key: p.slug,
    index: "0" + (i + 1),
    kind: p.kind,
    name: p.name,
    summary: p.summary,
    status: p.status,
    href: "#"
  })))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionTop, {
    eyebrow: "Currently into",
    title: "Open questions.",
    aside: /*#__PURE__*/React.createElement("span", {
      style: {
        font: "500 11px/1.3 var(--font-mono)",
        letterSpacing: ".08em",
        textTransform: "uppercase",
        color: "var(--text-faint)",
        paddingBottom: 8
      }
    }, "[ 01\u201403 ]")
  }), /*#__PURE__*/React.createElement(PrimitiveGrid, {
    items: d.interests
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "raised",
    rhythm: "loose"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 740
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "500 11px/1.3 var(--font-mono)",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--accent)",
      margin: "0 0 20px"
    }
  }, "Say hello"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-h2)",
      lineHeight: 1.1,
      letterSpacing: "-.025em",
      fontWeight: 600,
      maxWidth: "8ch",
      margin: "0 0 20px"
    }
  }, "Got a weird eval problem?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 18,
      margin: 0
    }
  }, "Always happy to talk about research, agents, or evaluation that refuses to behave. LinkedIn or X is the easiest ping."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 25
    }
  }, /*#__PURE__*/React.createElement(Button, {
    href: "https://github.com/Nikhil-Kadapala"
  }, "GitHub ", /*#__PURE__*/React.createElement("span", null, "\u2197")), /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    href: "https://www.linkedin.com/in/nikhil-kadapala"
  }, "LinkedIn ", /*#__PURE__*/React.createElement("span", null, "\u2197")), /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    href: "https://x.com/Nikhil_Kadapala"
  }, "X ", /*#__PURE__*/React.createElement("span", null, "\u2197"))))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pursuit-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pursuit-site/data.js
try { (() => {
window.SITE_DATA = {
  projects: [{
    slug: "resalign",
    name: "ResAlign AI",
    kind: "Product / career intelligence",
    summary: "A career copilot for fit, preparedness, and alignment—not another apply-to-everything button.",
    detail: "ResAlign started from a simple question: can a system help someone decide whether a role is worth pursuing before it asks them to apply? It turns resumes and job descriptions into a more honest conversation about readiness, evidence, and next steps.",
    status: "In the wild",
    tags: ["AI systems", "Product", "Evaluation"],
    featured: true
  }, {
    slug: "harnessbox",
    name: "HarnessBox",
    kind: "Open source / agent infrastructure",
    summary: "Sandbox and harness primitives for coding agents. Zero dependencies, on purpose.",
    detail: "HarnessBox is an attempt to make the runtime around a coding agent legible: workspaces, sessions, mounts, and agent runtimes with small, composable primitives.",
    status: "Building",
    tags: ["Agents", "Python", "Open source"],
    featured: true
  }, {
    slug: "agentic-rag",
    name: "agentic-rag",
    kind: "Research engineering",
    summary: "Multimodal agentic RAG with a real evaluation harness. “It felt pretty good” is not a metric.",
    detail: "This project is a working surface for experimenting with retrieval, tool use, and multimodal context while keeping evaluation close to the system being built.",
    status: "Open source",
    tags: ["RAG", "Multimodal", "Evals"],
    featured: true
  }, {
    slug: "checkthat",
    name: "CheckThat",
    kind: "Paper → package",
    summary: "Noisy social posts to concise, checkable claims—class project to paper to pip install.",
    detail: "A claim-extraction system for fact-checkers, built around the gap between a high automatic score and a claim a human can actually work with.",
    status: "Published",
    tags: ["NLP", "Claim extraction", "Research"],
    featured: true
  }, {
    slug: "rational-neural-nets",
    name: "Rational Neural Nets",
    kind: "Interpretability",
    summary: "Teaching neural networks to rationalize sentiment with human annotations and LIME.",
    detail: "An earlier exploration of whether a model can show its work in a way a person would recognize.",
    status: "Archive",
    tags: ["Interpretability", "NLP"]
  }],
  research: [{
    slug: "claim-extraction-checkthat-2025",
    title: "UNH at CheckThat! 2025: Fine-tuning Vs Prompting in Claim Extraction",
    year: "2025",
    summary: "Extracting one succinct, checkable claim from a messy social post—and measuring the gap between benchmark scores and usefulness.",
    detail: "We compared fine-tuning and prompting setups for claim extraction. FLAN-T5 won on METEOR, while iterative self-refinement sometimes produced claims a fact-checker would actually want to work with. That gap is the whole plot: evaluation has to stay connected to the user and the work the system is meant to support.",
    links: ["Paper", "CEUR", "Writeup"],
    tags: ["Claim extraction", "Evaluation", "CLEF 2025"]
  }],
  writing: [{
    slug: "the-score-is-not-the-work",
    title: "The score is not the work",
    date: "2025-09-18",
    description: "A high metric can still describe a system nobody can use. What claim extraction taught me about evaluation.",
    type: "research",
    tags: ["Evals", "Research"]
  }],
  interests: [{
    title: "Knowledge & memory",
    copy: "What an agent actually knows, not just what it retrieved once. Retrieval is a lookup; knowing is what survives the next turn."
  }, {
    title: "Agent evals",
    copy: "Score the behavior against intent, not a storyboarded workflow. A golden trace is a useful fixture and a terrible definition of success."
  }, {
    title: "Inference engineering",
    copy: "Disaggregated prefill/decode, speculative decoding, prefix caching. Cheaper and faster serving, without pretending that's the same as a smarter model."
  }],
  writingTypes: [{
    value: "all",
    label: "All"
  }, {
    value: "case-study",
    label: "Case study"
  }, {
    value: "build-log",
    label: "Build log"
  }, {
    value: "research",
    label: "Research note"
  }, {
    value: "teaching",
    label: "Teaching"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pursuit-site/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ArtifactRow = __ds_scope.ArtifactRow;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.PaperCard = __ds_scope.PaperCard;

__ds_ns.PrimitiveGrid = __ds_scope.PrimitiveGrid;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.BrandMark = __ds_scope.BrandMark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.LinkArrow = __ds_scope.LinkArrow;

__ds_ns.Mono = __ds_scope.Mono;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.KnowledgeGraph = __ds_scope.KnowledgeGraph;

__ds_ns.Prose = __ds_scope.Prose;

__ds_ns.ProseQuote = __ds_scope.ProseQuote;

__ds_ns.RunInspector = __ds_scope.RunInspector;

__ds_ns.TypeFilters = __ds_scope.TypeFilters;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.SectionTop = __ds_scope.SectionTop;

__ds_ns.PageHead = __ds_scope.PageHead;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.StatusBand = __ds_scope.StatusBand;

})();
