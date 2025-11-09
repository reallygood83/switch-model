/**
 * 🌐 Language Selector Component
 * 애플리케이션 시작 시 언어 선택 다이얼로그
 */

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface LanguageSelectorProps {
  onLanguageSelected: (language: "zh" | "en" | "ko") => void;
}

export function LanguageSelector({ onLanguageSelected }: LanguageSelectorProps) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 저장된 언어 설정이 없으면 다이얼로그 표시
    const hasLanguagePreference = localStorage.getItem("language");
    if (!hasLanguagePreference) {
      setIsOpen(true);
    }
  }, []);

  const handleLanguageSelect = (language: "zh" | "en" | "ko") => {
    localStorage.setItem("language", language);
    void i18n.changeLanguage(language);
    setIsOpen(false);
    onLanguageSelected(language);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] neo-card">
        <DialogHeader>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className="h-12 w-12 text-blue-500" />
          </div>
          <DialogTitle className="text-2xl font-black uppercase text-center">
            Choose Your Language
            <br />
            选择您的语言
            <br />
            언어를 선택하세요
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Select your preferred language to continue
            <br />
            选择您的首选语言以继续
            <br />
            원하는 언어를 선택하여 계속 진행하세요
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 gap-4 mt-6">
          {/* 한국어 버튼 */}
          <button
            onClick={() => handleLanguageSelect("ko")}
            className="neo-btn neo-btn-primary p-6 text-left transition-all hover:scale-105"
            style={{ background: "var(--neo-electric-blue)" }}
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">🇰🇷</span>
              <div>
                <h3 className="text-xl font-bold text-white">한국어</h3>
                <p className="text-sm text-white/80">Korean Language</p>
              </div>
            </div>
          </button>

          {/* 中文 버튼 */}
          <button
            onClick={() => handleLanguageSelect("zh")}
            className="neo-btn neo-btn-primary p-6 text-left transition-all hover:scale-105"
            style={{ background: "var(--neo-cyber-pink)" }}
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">🇨🇳</span>
              <div>
                <h3 className="text-xl font-bold text-white">中文</h3>
                <p className="text-sm text-white/80">Chinese Language</p>
              </div>
            </div>
          </button>

          {/* English 버튼 */}
          <button
            onClick={() => handleLanguageSelect("en")}
            className="neo-btn neo-btn-primary p-6 text-left transition-all hover:scale-105"
            style={{ background: "var(--neo-neon-green)" }}
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">🇺🇸</span>
              <div>
                <h3 className="text-xl font-bold text-white">English</h3>
                <p className="text-sm text-white/80">English Language</p>
              </div>
            </div>
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          💡 You can change this later in Settings
          <br />
          💡 您可以稍后在设置中更改
          <br />
          💡 나중에 설정에서 변경할 수 있습니다
        </div>
      </DialogContent>
    </Dialog>
  );
}
