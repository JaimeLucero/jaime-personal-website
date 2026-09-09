'use client';
import { useEffect, useState } from 'react';

const COUNT_UP_DURATION_IN_MILLISECONDS = 1100;
const NUMERIC_PATTERN = /^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/;

type ParsedMetric = {
  prefix: string;
  finalValue: number;
  decimalPlaces: number;
  suffix: string;
};

function parseMetric(displayValue: string): ParsedMetric | null {
  const match = displayValue.match(NUMERIC_PATTERN);
  if (!match) return null;
  const [, prefix, numericText, suffix] = match;
  const decimalPlaces = numericText.includes('.') ? numericText.split('.')[1].length : 0;
  return { prefix, finalValue: Number(numericText.replace(/,/g, '')), decimalPlaces, suffix };
}

function formatMetric(parsedMetric: ParsedMetric, currentValue: number): string {
  const formattedNumber = currentValue.toLocaleString('en-US', {
    minimumFractionDigits: parsedMetric.decimalPlaces,
    maximumFractionDigits: parsedMetric.decimalPlaces,
  });
  return `${parsedMetric.prefix}${formattedNumber}${parsedMetric.suffix}`;
}

function easeOutCubic(progress: number): number {
  return 1 - Math.pow(1 - progress, 3);
}

export default function AnimatedNumber(props: { value: string }) {
  const [displayedValue, setDisplayedValue] = useState(props.value);

  useEffect(() => {
    const parsedMetric = parseMetric(props.value);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!parsedMetric || prefersReducedMotion) return;

    let animationFrameId = 0;
    const startTimestamp = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTimestamp) / COUNT_UP_DURATION_IN_MILLISECONDS, 1);
      setDisplayedValue(formatMetric(parsedMetric, parsedMetric.finalValue * easeOutCubic(progress)));
      if (progress < 1) animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [props.value]);

  return <>{displayedValue}</>;
}
