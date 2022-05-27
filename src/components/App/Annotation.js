import Tree from "../../core/Tree";
import { isAlive } from "mobx-state-tree";
import { useLayoutEffect } from "react";

export function Annotation({ annotation, root, hasLabelLeftAligned = false }) {
  useLayoutEffect(() => {
    return () => {
      if (annotation && isAlive(annotation)) {
        annotation.resetReady();
      }
    };
  }, [annotation.pk, annotation.id]);
  const styles = hasLabelLeftAligned ? { display: "flex" } : undefined;

  return root ? Tree.renderItem(root, true, styles) : null;
}