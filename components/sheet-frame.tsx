const CORNER_MARK_CLASS_NAME = 'absolute h-3 w-3 border-accent';

export default function SheetFrame() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-2 z-30 sm:inset-3 lg:inset-4">
      <div className="absolute inset-0 border border-rule" />
      <div className="sheet-ruler-x absolute inset-x-4 top-0 h-3" />
      <div className="sheet-ruler-y absolute inset-y-4 left-0 w-3" />
      <span className={`${CORNER_MARK_CLASS_NAME} left-0 top-0 border-l-2 border-t-2`} />
      <span className={`${CORNER_MARK_CLASS_NAME} right-0 top-0 border-r-2 border-t-2`} />
      <span className={`${CORNER_MARK_CLASS_NAME} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${CORNER_MARK_CLASS_NAME} bottom-0 right-0 border-b-2 border-r-2`} />
    </div>
  );
}
