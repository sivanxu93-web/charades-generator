"use client";

import { useMemo, useState } from "react";
import CopyTextButton from "@/components/CopyTextButton";
import type { Stage2PromptGroup } from "@/data/stage2-growth-pages";

interface Stage2PromptGeneratorProps {
  title: string;
  description: string;
  buttonLabel: string;
  copyLabel: string;
  copiedLabel: string;
  groups: Stage2PromptGroup[];
}

export default function Stage2PromptGenerator({
  title,
  description,
  buttonLabel,
  copyLabel,
  copiedLabel,
  groups,
}: Stage2PromptGeneratorProps) {
  const [activeGroupId, setActiveGroupId] = useState(groups[0]?.id ?? "");
  const [promptIndex, setPromptIndex] = useState(0);

  const activeGroup = useMemo(
    () => groups.find((group) => group.id === activeGroupId) ?? groups[0],
    [activeGroupId, groups],
  );

  const currentPrompt = activeGroup?.prompts[promptIndex % activeGroup.prompts.length] ?? "";

  const handleGroupChange = (groupId: string) => {
    setActiveGroupId(groupId);
    setPromptIndex(0);
  };

  const handleGenerate = () => {
    if (!activeGroup?.prompts.length) return;
    setPromptIndex((current) => current + 1);
  };

  return (
    <section className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {groups.map((group) => {
          const isActive = group.id === activeGroup?.id;
          return (
            <button
              key={group.id}
              type="button"
              onClick={() => handleGroupChange(group.id)}
              className={`rounded-md border px-3 py-2 text-left text-sm transition ${
                isActive
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-gray-200 bg-gray-50 text-gray-800 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              <span className="block font-semibold">{group.label}</span>
              <span className={`mt-1 block text-xs ${isActive ? "text-blue-50" : "text-gray-500"}`}>
                {group.description}
              </span>
            </button>
          );
        })}
      </div>

      <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
        <p className="min-h-20 text-xl font-semibold leading-8 text-gray-900">{currentPrompt}</p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={handleGenerate}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            {buttonLabel}
          </button>
          <CopyTextButton
            text={currentPrompt}
            label={copyLabel}
            copiedLabel={copiedLabel}
            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-white"
          />
        </div>
      </div>
    </section>
  );
}
