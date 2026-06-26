import type { ReactNode } from "react";

interface Tab {
  label: string;
  content: ReactNode;
}

interface Props {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function CollegeTabs({ tabs, activeTab, onTabChange }: Props) {
  return (
    <div>
      <div className="flex gap-4 border-b border-slate-200 dark:border-slate-800">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => onTabChange(tab.label)}
            className={`pb-2 text-sm font-medium transition ${
              activeTab === tab.label
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-muted hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.find((t) => t.label === activeTab)?.content}
      </div>
    </div>
  );
}
