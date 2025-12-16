interface CaseCardProps {
    client: string;
    problem: string;
    solution: string;
    result: string;
}

export function CaseCard({ client, problem, solution, result }: CaseCardProps) {
    return (
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-200 dark:hover:border-indigo-900 transition-colors">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                {client}
            </h3>

            <div className="space-y-4">
                <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Problema</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{problem}</p>
                </div>
                <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Solución</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{solution}</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-950/30 p-3 rounded-lg border border-indigo-100 dark:border-indigo-900/50">
                    <h4 className="text-xs font-semibold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider mb-1">Impacto</h4>
                    <p className="text-sm font-medium text-indigo-900 dark:text-indigo-200">{result}</p>
                </div>
            </div>
        </div>
    );
}
