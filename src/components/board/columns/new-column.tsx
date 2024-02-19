"use client";
export default function NewColumn() {
  return (
    <div className="inline-block w-[16rem] space-y-6">
      <div className="h-4 bg-slate-950"></div>
      <button
        title="Add new column to current board"
        aria-label="Add new column to current board"
        className="text-muted group w-full space-y-1 rounded-lg border border-transparent bg-slate-800 p-4 text-center"
      >
        <span className="transition group-hover:text-white">+ New Column</span>
      </button>
    </div>
  );
}
