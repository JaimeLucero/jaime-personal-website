import type { ReactNode } from 'react';

const CORNER_MARK_CLASS_NAME = 'absolute h-2.5 w-2.5 border-muted';

export default function DrawingFrame(props: { children: ReactNode; className?: string; caption?: string }) {
  return (
    <figure className={`relative ${props.className ?? ''}`}>
      <div className="drawing-grid relative border border-rule bg-surface">
        <span aria-hidden="true" className={`${CORNER_MARK_CLASS_NAME} -left-px -top-px border-l border-t`} />
        <span aria-hidden="true" className={`${CORNER_MARK_CLASS_NAME} -right-px -top-px border-r border-t`} />
        <span aria-hidden="true" className={`${CORNER_MARK_CLASS_NAME} -bottom-px -left-px border-b border-l`} />
        <span aria-hidden="true" className={`${CORNER_MARK_CLASS_NAME} -bottom-px -right-px border-b border-r`} />
        {props.children}
      </div>
      {props.caption && <figcaption className="type-label mt-2">{props.caption}</figcaption>}
    </figure>
  );
}
