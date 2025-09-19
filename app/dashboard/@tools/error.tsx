// app/dashboard/@tools/error.tsx
"use client";

export default function ToolsError({ error }: { error: Error }) {
  return <p className="text-red-500">Error loading tools: {error.message}</p>;
}
