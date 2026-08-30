type MdastNode = {
  type: string;
  meta?: string | null;
  data?: { hProperties?: Record<string, string> };
  children?: MdastNode[];
};

function visit(node: MdastNode, visitNode: (current: MdastNode) => void) {
  visitNode(node);
  node.children?.forEach((child) => visit(child, visitNode));
}

function parseFilenameMeta(meta: string): string | null {
  const keyed = /(?:filename|file|title)\s*=\s*["']?([^"'\s]+)["']?/.exec(meta);
  if (keyed?.[1]) return keyed[1];
  const token = meta.trim();
  if (token && !token.includes("=") && !/\s/.test(token)) return token;
  return null;
}

export function remarkCodeFilename() {
  return (tree: MdastNode) => {
    visit(tree, (node) => {
      if (node.type !== "code" || !node.meta) return;
      const filename = parseFilenameMeta(node.meta);
      if (!filename) return;
      node.data ??= {};
      node.data.hProperties = { ...node.data.hProperties, "data-file": filename };
    });
  };
}
