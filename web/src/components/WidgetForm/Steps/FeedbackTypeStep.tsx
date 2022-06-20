import { CloseButton } from '../../common/CloseButton';

import { feedbackTypes, FeedbackType } from '..';

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return(
    <>
      <header>
        <span className="text-xl leading-6 text-headline">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {
          Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className="bg-background-secondary rounded-md py-5 w-24 flex-1 flex flex-col items-center justify-between gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                type="button"
              >
                <img src={value.image.source} alt={value.image.alt}/>
                <span className="text-paragraph">{value.title}</span>
              </button>
            );
          })
        }
      </div>
    </>
  );
}