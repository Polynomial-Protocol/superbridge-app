import { differenceInDays } from "date-fns";

import { useTrialEndsTime } from "@/hooks/trials/use-trial-ends-time";
import { useIsTrial } from "@/hooks/trials/use-is-trial";

const MarqueeContent = () => {
  const trialEndsTime = useTrialEndsTime();

  if (!trialEndsTime) {
    return null;
  }

  const days = Math.max(differenceInDays(trialEndsTime, Date.now()), 0);
  return (
    <div className="flex gap-3 items-center text-xs tracking-widest whitespace-nowrap py-3">
      <span>
        THIS IS A FREE TRIAL BRIDGE MADE WITH{" "}
        <a
          className="underline hover:text-black cursor-pointer"
          href="https://superbridge.app/rollies"
        >
          SUPERBRIDGE ROLLIES
        </a>
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="16"
        viewBox="0 0 24 16"
        fill="none"
        className="w-6 h-auto"
      >
        <path
          d="M5.33078 14.362L1.0979 9.56134C0.608476 9.00436 0 8.023 0 6.94882C0 5.87464 0.61509 4.89329 1.0979 4.33631L3.48551 1.63096C4.39823 0.603193 5.44322 -0.00683594 6.59403 -0.00683594C7.50675 -0.00683594 8.28719 0.318071 8.87582 0.855162C9.54382 1.47182 9.9605 2.34708 10.0134 3.29528H11.4222C11.4751 1.55802 12.8243 -0.00683594 14.8548 -0.00683594C16.0056 -0.00683594 17.0506 0.603193 17.9633 1.63096L22.3747 6.64381C22.9369 7.28036 23.5586 8.17551 23.5586 9.24306C23.5586 10.231 22.9237 11.1328 22.4607 11.6567L20.0731 14.362C19.1604 15.3898 18.1154 15.9998 16.9646 15.9998C15.8865 15.9998 14.4315 15.3831 13.8296 13.7586C13.1484 13.5597 12.659 13.248 12.1365 12.638C12.0835 14.4747 10.7343 16.0064 8.70386 16.0064C7.44722 16.0064 6.27657 15.4428 5.3374 14.3686L5.33078 14.362Z"
          fill="white"
        />
        <path
          d="M5.33078 14.362L1.0979 9.56134C0.608476 9.00435 0 8.023 0 6.94882C0 5.87464 0.61509 4.89329 1.0979 4.33631L3.48551 1.63096C4.39823 0.603193 5.44322 -0.00683594 6.59403 -0.00683594C7.50675 -0.00683594 8.28718 0.318071 8.87582 0.855162C9.54382 1.47182 9.9605 2.34708 10.0134 3.29528H11.4222C11.4751 1.55802 12.8243 -0.00683594 14.8548 -0.00683594C16.0056 -0.00683594 17.0506 0.603193 17.9633 1.63096L22.3747 6.64381C22.9369 7.28036 23.5586 8.17551 23.5586 9.24306C23.5586 10.231 22.9237 11.1328 22.4607 11.6567L20.0731 14.362C19.1604 15.3898 18.1154 15.9998 16.9646 15.9998C15.8865 15.9998 14.4315 15.3831 13.8296 13.7586C13.1484 13.5597 12.659 13.248 12.1365 12.638C12.0835 14.4747 10.7343 16.0064 8.70386 16.0064C7.44722 16.0064 6.27657 15.4428 5.3374 14.3686L5.33078 14.362ZM1.88495 8.87174L4.27256 11.5771C5.01332 12.4126 5.78714 12.8568 6.59403 12.8568C8.0557 12.8568 8.98164 11.7429 8.98164 10.5294C8.98164 9.76689 8.51206 9.40883 7.92342 8.99772C7.78453 8.90489 7.68532 8.73249 7.68532 8.56009C7.68532 8.27497 7.91681 8.03626 8.19459 8.03626C8.30703 8.03626 8.43269 8.07605 8.58481 8.17551C9.03455 8.44737 9.62319 9.04414 9.84806 9.56134H11.6073C11.8388 9.05077 12.4209 8.44737 12.8706 8.17551C13.0161 8.08268 13.1418 8.03626 13.2608 8.03626C13.5452 8.03626 13.7701 8.27497 13.7701 8.56009C13.7701 8.73912 13.6643 8.90489 13.532 8.99772C12.9434 9.40883 12.4738 9.76026 12.4738 10.5294C12.4738 11.7429 13.3931 12.8568 14.8614 12.8568C15.6683 12.8568 16.4421 12.4192 17.1828 11.5771L19.5705 8.87174C19.9607 8.43411 20.4038 7.6782 20.4038 6.95545C20.4038 6.2327 19.9541 5.4768 19.5705 5.03917L17.1828 2.33382C16.4421 1.49834 15.6683 1.05408 14.8614 1.05408C13.3997 1.05408 12.4738 2.16805 12.4738 3.38148C12.4738 4.14401 12.9434 4.50207 13.532 4.91318C13.6709 5.00601 13.7701 5.17841 13.7701 5.35081C13.7701 5.63593 13.5386 5.87464 13.2608 5.87464C13.1484 5.87464 13.0227 5.83486 12.8706 5.73539C12.4209 5.46353 11.8322 4.86677 11.6073 4.34957H9.84806C9.61657 4.86014 9.03455 5.46353 8.58481 5.73539C8.4393 5.82822 8.31364 5.87464 8.19459 5.87464C7.91019 5.87464 7.68532 5.63593 7.68532 5.35081C7.68532 5.17178 7.79114 5.00601 7.92342 4.91318C8.51206 4.50207 8.98164 4.15064 8.98164 3.38148C8.98164 2.16805 8.06231 1.05408 6.59403 1.05408C5.78714 1.05408 5.01332 1.49171 4.27256 2.33382L1.88495 5.03917C1.49474 5.4768 1.05161 6.2327 1.05161 6.95545C1.05161 7.6782 1.50135 8.43411 1.88495 8.87174ZM3.88234 3.97825L4.98025 2.75156C5.21173 2.49959 5.55565 2.4598 5.77391 2.66536C6.0054 2.85102 5.9591 3.20245 5.77391 3.42126L4.67601 4.66784C4.45775 4.90655 4.1006 4.93307 3.88234 4.74078C3.65086 4.54186 3.69716 4.1838 3.88234 3.97825ZM14.2794 1.9625C14.3521 1.92934 14.4381 1.92271 14.5108 1.90945C14.8548 1.88956 15.1061 2.10837 15.1193 2.43328C15.1325 2.67199 14.9606 2.89743 14.7225 2.94385C14.5836 2.96374 14.5439 3.03668 14.5241 3.16266C14.5042 3.39474 14.2926 3.57377 14.0413 3.5804C13.7304 3.59366 13.4989 3.36159 13.4857 3.04331C13.4857 2.53274 13.8296 2.10837 14.2794 1.95587V1.9625Z"
          fill="black"
        />
      </svg>
      <span>{days} DAYS LEFT</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="16"
        viewBox="0 0 24 16"
        fill="none"
        className="w-6 h-auto"
      >
        <path
          d="M5.33078 14.362L1.0979 9.56134C0.608476 9.00436 0 8.023 0 6.94882C0 5.87464 0.61509 4.89329 1.0979 4.33631L3.48551 1.63096C4.39823 0.603193 5.44322 -0.00683594 6.59403 -0.00683594C7.50675 -0.00683594 8.28719 0.318071 8.87582 0.855162C9.54382 1.47182 9.9605 2.34708 10.0134 3.29528H11.4222C11.4751 1.55802 12.8243 -0.00683594 14.8548 -0.00683594C16.0056 -0.00683594 17.0506 0.603193 17.9633 1.63096L22.3747 6.64381C22.9369 7.28036 23.5586 8.17551 23.5586 9.24306C23.5586 10.231 22.9237 11.1328 22.4607 11.6567L20.0731 14.362C19.1604 15.3898 18.1154 15.9998 16.9646 15.9998C15.8865 15.9998 14.4315 15.3831 13.8296 13.7586C13.1484 13.5597 12.659 13.248 12.1365 12.638C12.0835 14.4747 10.7343 16.0064 8.70386 16.0064C7.44722 16.0064 6.27657 15.4428 5.3374 14.3686L5.33078 14.362Z"
          fill="white"
        />
        <path
          d="M5.33078 14.362L1.0979 9.56134C0.608476 9.00435 0 8.023 0 6.94882C0 5.87464 0.61509 4.89329 1.0979 4.33631L3.48551 1.63096C4.39823 0.603193 5.44322 -0.00683594 6.59403 -0.00683594C7.50675 -0.00683594 8.28718 0.318071 8.87582 0.855162C9.54382 1.47182 9.9605 2.34708 10.0134 3.29528H11.4222C11.4751 1.55802 12.8243 -0.00683594 14.8548 -0.00683594C16.0056 -0.00683594 17.0506 0.603193 17.9633 1.63096L22.3747 6.64381C22.9369 7.28036 23.5586 8.17551 23.5586 9.24306C23.5586 10.231 22.9237 11.1328 22.4607 11.6567L20.0731 14.362C19.1604 15.3898 18.1154 15.9998 16.9646 15.9998C15.8865 15.9998 14.4315 15.3831 13.8296 13.7586C13.1484 13.5597 12.659 13.248 12.1365 12.638C12.0835 14.4747 10.7343 16.0064 8.70386 16.0064C7.44722 16.0064 6.27657 15.4428 5.3374 14.3686L5.33078 14.362ZM1.88495 8.87174L4.27256 11.5771C5.01332 12.4126 5.78714 12.8568 6.59403 12.8568C8.0557 12.8568 8.98164 11.7429 8.98164 10.5294C8.98164 9.76689 8.51206 9.40883 7.92342 8.99772C7.78453 8.90489 7.68532 8.73249 7.68532 8.56009C7.68532 8.27497 7.91681 8.03626 8.19459 8.03626C8.30703 8.03626 8.43269 8.07605 8.58481 8.17551C9.03455 8.44737 9.62319 9.04414 9.84806 9.56134H11.6073C11.8388 9.05077 12.4209 8.44737 12.8706 8.17551C13.0161 8.08268 13.1418 8.03626 13.2608 8.03626C13.5452 8.03626 13.7701 8.27497 13.7701 8.56009C13.7701 8.73912 13.6643 8.90489 13.532 8.99772C12.9434 9.40883 12.4738 9.76026 12.4738 10.5294C12.4738 11.7429 13.3931 12.8568 14.8614 12.8568C15.6683 12.8568 16.4421 12.4192 17.1828 11.5771L19.5705 8.87174C19.9607 8.43411 20.4038 7.6782 20.4038 6.95545C20.4038 6.2327 19.9541 5.4768 19.5705 5.03917L17.1828 2.33382C16.4421 1.49834 15.6683 1.05408 14.8614 1.05408C13.3997 1.05408 12.4738 2.16805 12.4738 3.38148C12.4738 4.14401 12.9434 4.50207 13.532 4.91318C13.6709 5.00601 13.7701 5.17841 13.7701 5.35081C13.7701 5.63593 13.5386 5.87464 13.2608 5.87464C13.1484 5.87464 13.0227 5.83486 12.8706 5.73539C12.4209 5.46353 11.8322 4.86677 11.6073 4.34957H9.84806C9.61657 4.86014 9.03455 5.46353 8.58481 5.73539C8.4393 5.82822 8.31364 5.87464 8.19459 5.87464C7.91019 5.87464 7.68532 5.63593 7.68532 5.35081C7.68532 5.17178 7.79114 5.00601 7.92342 4.91318C8.51206 4.50207 8.98164 4.15064 8.98164 3.38148C8.98164 2.16805 8.06231 1.05408 6.59403 1.05408C5.78714 1.05408 5.01332 1.49171 4.27256 2.33382L1.88495 5.03917C1.49474 5.4768 1.05161 6.2327 1.05161 6.95545C1.05161 7.6782 1.50135 8.43411 1.88495 8.87174ZM3.88234 3.97825L4.98025 2.75156C5.21173 2.49959 5.55565 2.4598 5.77391 2.66536C6.0054 2.85102 5.9591 3.20245 5.77391 3.42126L4.67601 4.66784C4.45775 4.90655 4.1006 4.93307 3.88234 4.74078C3.65086 4.54186 3.69716 4.1838 3.88234 3.97825ZM14.2794 1.9625C14.3521 1.92934 14.4381 1.92271 14.5108 1.90945C14.8548 1.88956 15.1061 2.10837 15.1193 2.43328C15.1325 2.67199 14.9606 2.89743 14.7225 2.94385C14.5836 2.96374 14.5439 3.03668 14.5241 3.16266C14.5042 3.39474 14.2926 3.57377 14.0413 3.5804C13.7304 3.59366 13.4989 3.36159 13.4857 3.04331C13.4857 2.53274 13.8296 2.10837 14.2794 1.95587V1.9625Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

const MarqueeA = () => (
  <div className="flex gap-3 pr-3">
    <MarqueeContent />
    <MarqueeContent />
    <MarqueeContent />
    <MarqueeContent />
  </div>
);
const MarqueeB = () => (
  <div className="flex gap-3">
    <MarqueeContent />
    <MarqueeContent />
    <MarqueeContent />
    <MarqueeContent />
  </div>
);
export const TrialBanner = () => {
  const isTrial = useIsTrial();

  if (!isTrial) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-10 bg-[#A882FD] text-white z-40">
      <div className="relative flex gap-3 overflow-x-hidden">
        <div className="animate-marquee">
          <MarqueeA />
        </div>
        <div className="absolute top-0 animate-marquee2">
          <MarqueeB />
        </div>
      </div>
    </div>
  );
};
