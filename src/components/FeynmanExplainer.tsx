/**
 * 🧠 Feynman Explainer Component
 * 초보자를 위한 파인만 비유법 기반 설명 섹션
 */

import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Lightbulb,
  Zap,
  Key,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface AnalogyCard {
  id: string;
  icon: React.ReactNode;
  titleKey: string;
  analogyKey: string;
  detailsKey: string;
  color: string;
}

export function FeynmanExplainer() {
  const { t } = useTranslation();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const analogies: AnalogyCard[] = [
    {
      id: "remote-control",
      icon: <Zap className="h-8 w-8" />,
      titleKey: "explainer.remoteControl.title",
      analogyKey: "explainer.remoteControl.analogy",
      detailsKey: "explainer.remoteControl.details",
      color: "var(--neo-electric-blue)",
    },
    {
      id: "api-key",
      icon: <Key className="h-8 w-8" />,
      titleKey: "explainer.apiKey.title",
      analogyKey: "explainer.apiKey.analogy",
      detailsKey: "explainer.apiKey.details",
      color: "var(--neo-cyber-pink)",
    },
    {
      id: "switching",
      icon: <RefreshCw className="h-8 w-8" />,
      titleKey: "explainer.switching.title",
      analogyKey: "explainer.switching.analogy",
      detailsKey: "explainer.switching.details",
      color: "var(--neo-neon-green)",
    },
    {
      id: "provider",
      icon: <Sparkles className="h-8 w-8" />,
      titleKey: "explainer.provider.title",
      analogyKey: "explainer.provider.analogy",
      detailsKey: "explainer.provider.details",
      color: "var(--neo-purple-power)",
    },
  ];

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {/* 🎯 Header */}
      <div className="neo-speech-bubble">
        <div className="flex items-start gap-4">
          <Lightbulb className="h-12 w-12 flex-shrink-0 text-neo-black" />
          <div>
            <h2 className="text-2xl font-black uppercase mb-2">
              {t("explainer.header.title")}
            </h2>
            <p className="text-base font-medium">
              {t("explainer.header.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* 🎨 Analogy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {analogies.map((analogy) => (
          <div
            key={analogy.id}
            className="neo-card cursor-pointer"
            onClick={() => toggleCard(analogy.id)}
          >
            {/* Card Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-none border-3 border-black"
                  style={{ backgroundColor: analogy.color }}
                >
                  {analogy.icon}
                </div>
                <h3 className="text-lg font-bold uppercase">
                  {t(analogy.titleKey)}
                </h3>
              </div>
              {expandedCard === analogy.id ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </div>

            {/* Analogy Text */}
            <div className="mb-3">
              <p className="text-base font-semibold mb-2">
                💡 {t(analogy.analogyKey)}
              </p>
            </div>

            {/* Expanded Details */}
            {expandedCard === analogy.id && (
              <div className="border-t-3 border-black pt-3 mt-3">
                <p className="text-sm leading-relaxed whitespace-pre-line">
                  {t(analogy.detailsKey)}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 🚀 Quick Start Guide */}
      <div
        className="neo-card"
        style={{ background: "var(--neo-neon-green)" }}
      >
        <div className="flex items-start gap-4">
          <Rocket className="h-10 w-10 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-black uppercase mb-3">
              {t("explainer.quickStart.title")}
            </h3>
            <ol className="space-y-2 text-base font-semibold">
              <li className="flex gap-2">
                <span className="neo-badge neo-badge-blue flex-shrink-0">1</span>
                <span>{t("explainer.quickStart.step1")}</span>
              </li>
              <li className="flex gap-2">
                <span className="neo-badge neo-badge-pink flex-shrink-0">2</span>
                <span>{t("explainer.quickStart.step2")}</span>
              </li>
              <li className="flex gap-2">
                <span className="neo-badge neo-badge-blue flex-shrink-0">3</span>
                <span>{t("explainer.quickStart.step3")}</span>
              </li>
              <li className="flex gap-2">
                <span className="neo-badge neo-badge-pink flex-shrink-0">4</span>
                <span>{t("explainer.quickStart.step4")}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* 📺 Video Tutorial Placeholder */}
      <div className="neo-card text-center">
        <h3 className="text-xl font-black uppercase mb-4">
          {t("explainer.video.title")}
        </h3>
        <div className="aspect-video bg-gray-100 dark:bg-gray-800 border-3 border-black flex items-center justify-center">
          <p className="text-lg font-semibold">
            {t("explainer.video.comingSoon")}
          </p>
        </div>
      </div>
    </div>
  );
}
