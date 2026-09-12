
const EmptyStack = () => {
  return (
    <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 lg:sticky lg:top-20">
      <h2 className="text-lg font-semibold text-slate-900">Your stack</h2>

      <p className="mb-4 text-sm text-slate-400">
        No technologies selected yet.
      </p>

      <div className="rounded-xl border border-dashed border-slate-200 px-4 py-6 text-center">
        <p className="text-sm text-slate-400">No technologies added yet.</p>

        <p className="mt-1 text-xs text-slate-300">
          Choose a technology to build your stack.
        </p>
      </div>
    </div>
  );
};

export default EmptyStack;
