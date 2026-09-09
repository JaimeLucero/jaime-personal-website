import DrawingFrame from './drawing-frame';

type PipelineStage = {
  callout: string;
  phase: string;
  label: string;
  detail: string;
};

const PIPELINE_STAGES: PipelineStage[] = [
  { callout: 'A', phase: 'Input', label: 'Your data and APIs', detail: 'documents · databases · webhooks' },
  { callout: 'B', phase: 'Build', label: 'LLM agent + pipeline', detail: 'RAG · tool calls · evaluation' },
  { callout: 'C', phase: 'Ship', label: 'Production app', detail: 'Next.js · FastAPI · Supabase' },
];

const AGENT_STAGE_INDEX = 1;
const STAGE_WIDTH = 212;
const STAGE_HEIGHT = 72;
const STAGE_GAP = 44;
const DIAGRAM_PADDING = 8;
const DIAGRAM_WIDTH = DIAGRAM_PADDING * 2 + STAGE_WIDTH * 3 + STAGE_GAP * 2;
const DIAGRAM_HEIGHT = 152;
const STAGE_TOP = 44;
const STAGE_MIDDLE_Y = STAGE_TOP + STAGE_HEIGHT / 2;
const CALLOUT_RADIUS = 11;

function stageLeft(stageIndex: number): number {
  return DIAGRAM_PADDING + stageIndex * (STAGE_WIDTH + STAGE_GAP);
}

const DIAGRAM_DESCRIPTION =
  'How a build flows: your data and APIs feed an LLM agent and pipeline, which ships inside a production app.';

function PipelineSchematic() {
  return (
    <svg viewBox={`0 0 ${DIAGRAM_WIDTH} ${DIAGRAM_HEIGHT}`} role="img" aria-label={DIAGRAM_DESCRIPTION} className="h-auto w-full font-mono">
      {PIPELINE_STAGES.slice(0, -1).map((_stage, stageIndex) => {
        const startX = stageLeft(stageIndex) + STAGE_WIDTH;
        const endX = stageLeft(stageIndex + 1);
        return (
          <g key={stageIndex}>
            <line x1={startX} y1={STAGE_MIDDLE_Y} x2={endX} y2={STAGE_MIDDLE_Y} className="stroke-rule" strokeWidth="2" />
            <line
              x1={startX}
              y1={STAGE_MIDDLE_Y}
              x2={endX}
              y2={STAGE_MIDDLE_Y}
              strokeWidth="2"
              strokeDasharray="6 10"
              className="pipeline-flow stroke-accent"
            />
            <polygon
              points={`${endX - 8},${STAGE_MIDDLE_Y - 5} ${endX},${STAGE_MIDDLE_Y} ${endX - 8},${STAGE_MIDDLE_Y + 5}`}
              className="fill-accent"
            />
          </g>
        );
      })}

      {PIPELINE_STAGES.map((stage, stageIndex) => {
        const left = stageLeft(stageIndex);
        const isAgentStage = stageIndex === AGENT_STAGE_INDEX;
        const calloutX = left + STAGE_WIDTH - CALLOUT_RADIUS - 6;
        const calloutY = STAGE_TOP - CALLOUT_RADIUS - 6;
        return (
          <g key={stage.label}>
            <rect
              x={left}
              y={STAGE_TOP}
              width={STAGE_WIDTH}
              height={STAGE_HEIGHT}
              className={isAgentStage ? 'fill-accent-soft stroke-accent' : 'fill-paper stroke-rule'}
              strokeWidth={isAgentStage ? 1.5 : 1}
            />
            <line x1={calloutX} y1={calloutY + CALLOUT_RADIUS} x2={calloutX} y2={STAGE_TOP} className="stroke-muted" strokeWidth="1" />
            <circle cx={calloutX} cy={calloutY} r={CALLOUT_RADIUS} className="fill-surface stroke-ink" strokeWidth="1" />
            <text x={calloutX} y={calloutY + 4} textAnchor="middle" fontSize="11" fontWeight="500" className="fill-ink">
              {stage.callout}
            </text>
            <text
              x={left + STAGE_WIDTH / 2}
              y={STAGE_TOP + 30}
              textAnchor="middle"
              fontSize="14"
              fontWeight="600"
              className="fill-ink"
              fontFamily="var(--font-body)">
              {stage.label}
            </text>
            <text x={left + STAGE_WIDTH / 2} y={STAGE_TOP + 52} textAnchor="middle" fontSize="10.5" className="fill-muted" letterSpacing="0.2">
              {stage.detail}
            </text>
            <text
              x={left}
              y={STAGE_TOP + STAGE_HEIGHT + 22}
              fontSize="11"
              className={isAgentStage ? 'fill-accent' : 'fill-muted'}
              letterSpacing="1.2">
              {stage.phase.toUpperCase()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function PipelineStack() {
  return (
    <ol aria-label={DIAGRAM_DESCRIPTION} className="space-y-2 p-3">
      {PIPELINE_STAGES.map((stage, stageIndex) => {
        const isAgentStage = stageIndex === AGENT_STAGE_INDEX;
        return (
          <li key={stage.label}>
            {stageIndex > 0 && <span aria-hidden="true" className="mx-auto mb-2 block h-4 w-px border-l-2 border-dashed border-accent" />}
            <div className={`flex gap-3 border px-4 py-3 ${isAgentStage ? 'border-accent bg-accent-soft' : 'border-rule bg-paper'}`}>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink bg-surface font-mono text-[11px] text-ink">
                {stage.callout}
              </span>
              <div>
                <p className={`type-label ${isAgentStage ? 'text-accent' : ''}`}>{stage.phase}</p>
                <p className="type-item-title mt-1 text-base">{stage.label}</p>
                <p className="type-label mt-0.5 normal-case tracking-normal">{stage.detail}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default function PipelineDiagram() {
  return (
    <DrawingFrame caption="Main view. How every engagement is structured, from your inputs to a deployed product.">
      <div className="hidden px-4 py-2 sm:block">
        <PipelineSchematic />
      </div>
      <div className="sm:hidden">
        <PipelineStack />
      </div>
    </DrawingFrame>
  );
}
