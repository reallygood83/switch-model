/**
 * 🎓 Interactive Tutorial Wizard Component
 * 초보자를 위한 단계별 튜토리얼
 */

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface TutorialWizardProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const TOTAL_STEPS = 4;

export function TutorialWizard({ isOpen, onClose, onComplete }: TutorialWizardProps) {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    onClose();
  };

  const renderStepContent = () => {
    const stepKey = `tutorial.step${currentStep}`;
    return (
      <div className="space-y-4">
        <div className="neo-card" style={{ background: "var(--neo-yellow-pop)" }}>
          <h3 className="text-xl font-black uppercase mb-3">
            {t(`${stepKey}.title`)}
          </h3>
          <p className="text-base leading-relaxed whitespace-pre-line">
            {t(`${stepKey}.content`)}
          </p>
        </div>

        {/* Progress indicator */}
        <div className="neo-progress-bar">
          <div
            className="neo-progress-fill"
            style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
          >
            {currentStep} / {TOTAL_STEPS}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="neo-section-header text-xl">
            {currentStep === 1
              ? t("tutorial.welcome.title")
              : `${t("tutorial.welcome.title")} - ${currentStep}/${TOTAL_STEPS}`}
          </DialogTitle>
          {currentStep === 1 && (
            <DialogDescription>
              {t("tutorial.welcome.subtitle")}
            </DialogDescription>
          )}
        </DialogHeader>

        {renderStepContent()}

        <DialogFooter className="flex justify-between">
          <div className="flex gap-2">
            {currentStep > 1 && (
              <Button
                onClick={handlePrevious}
                variant="outline"
                className="neo-btn"
              >
                이전
              </Button>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleSkip}
              variant="ghost"
            >
              {t("tutorial.welcome.skip")}
            </Button>
            <Button
              onClick={handleNext}
              className="neo-btn neo-btn-primary"
            >
              {currentStep < TOTAL_STEPS
                ? t(`tutorial.step${currentStep}.next`)
                : t(`tutorial.step${currentStep}.finish`)}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
