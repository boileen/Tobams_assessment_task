import type { SVGProps } from "react";

export function ChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M6 8.5L10 12.5L14 8.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BulletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12.4444"
      height="16"
      viewBox="0 0 12.4444 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M7.11111 0L7.11111 6.22222L12.4444 6.22222L5.33333 16L5.33333 9.77778L0 9.77778L7.11111 0Z"
        fill="#1D0617"
        stroke="#480F39"
        strokeWidth="1.523809552192688"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4 9H14M14 9L9.5 4.5M14 9L9.5 13.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 12C13.933 12 15.5 10.433 15.5 8.5C15.5 6.567 13.933 5 12 5C10.067 5 8.5 6.567 8.5 8.5C8.5 10.433 10.067 12 12 12Z"
        fill="currentColor"
      />
      <path
        d="M4 20C4 16.686 7.582 14 12 14C16.418 14 20 16.686 20 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M6 10.5H26M6 16H26M6 21.5H26"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

type BoltProps = Omit<SVGProps<SVGSVGElement>, "fill" | "stroke"> & {
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
};

export function Bolt({
  fill = "#FFFFFF",
  stroke,
  strokeWidth = 2,
  ...props
}: BoltProps) {
  return (
    <svg
      width="18.6667"
      height="24"
      viewBox="0 0 18.6667 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M10.6667 0L10.6667 9.33333L18.6667 9.33333L8 24L8 14.6667L0 14.6667L10.6667 0Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="10"
      height="17"
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M3.77067 8.48533L10.3707 15.0853L8.48533 16.972L0 8.48533L8.48533 0L10.3707 1.88533L3.77067 8.48533Z"
        fill="#EF4353"
      />
    </svg>
  );
}

export function ArrowUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M8 4L13 9L11.5 10.5L8 7L4.5 10.5L3 9L8 4Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481L0.0600002 5.481L0.0600002 18.001L4.06 18.001L4.06 5.481ZM10.38 5.481L6.4 5.481L6.4 18.001L10.34 18.001L10.34 11.431C10.34 7.771 15.11 7.431 15.11 11.431L15.11 18.001L19.06 18.001L19.06 10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
        fill="#151515"
      />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M11.0286 0.0012304C11.7583 -0.00156983 12.488 0.00576429 13.2176 0.0232305L13.4116 0.0302304C13.6356 0.0382304 13.8566 0.0482304 14.1236 0.0602304C15.1876 0.11023 15.9136 0.278231 16.5506 0.525231C17.2106 0.779231 17.7666 1.12323 18.3226 1.67923C18.831 2.17884 19.2244 2.78318 19.4756 3.45023C19.7226 4.08723 19.8906 4.81423 19.9406 5.87823C19.9526 6.14423 19.9626 6.36623 19.9706 6.59023L19.9766 6.78423C19.9943 7.51342 20.002 8.24283 19.9996 8.97223L20.0006 9.71823L20.0006 11.0282C20.003 11.758 19.9954 12.4877 19.9776 13.2172L19.9716 13.4112C19.9636 13.6352 19.9536 13.8562 19.9416 14.1232C19.8916 15.1872 19.7216 15.9132 19.4756 16.5502C19.2252 17.218 18.8317 17.8228 18.3226 18.3222C17.8225 18.8306 17.2179 19.224 16.5506 19.4752C15.9136 19.7222 15.1876 19.8902 14.1236 19.9402C13.8566 19.9522 13.6356 19.9622 13.4116 19.9702L13.2176 19.9762C12.4881 19.994 11.7583 20.0017 11.0286 19.9992L10.2826 20.0002L8.97358 20.0002C8.24384 20.0027 7.5141 19.995 6.78458 19.9772L6.59058 19.9712C6.35319 19.9626 6.11585 19.9526 5.87858 19.9412C4.81458 19.8912 4.08858 19.7212 3.45058 19.4752C2.78326 19.2246 2.17881 18.8311 1.67958 18.3222C1.17062 17.8225 0.776801 17.2178 0.525577 16.5502C0.278577 15.9132 0.110577 15.1872 0.0605769 14.1232C0.0494399 13.8859 0.0394398 13.6486 0.030577 13.4112L0.0255771 13.2172C0.00714068 12.4877 -0.00119355 11.758 0.000577001 11.0282L0.000577001 8.97223C-0.00221397 8.24283 0.00512015 7.51343 0.0225771 6.78423L0.029577 6.59023C0.037577 6.36623 0.047577 6.14423 0.059577 5.87823C0.109577 4.81323 0.277577 4.08823 0.524577 3.45023C0.77595 2.78285 1.17054 2.17868 1.68058 1.68023C2.17947 1.17098 2.78354 0.776803 3.45058 0.525231C4.08858 0.278231 4.81358 0.11023 5.87858 0.0602304L6.59058 0.0302304L6.78458 0.0252306C7.51376 0.00680338 8.24316 -0.00153085 8.97258 0.000230468L11.0286 0.0012304ZM10.0006 5.00123C9.33808 4.99186 8.68033 5.11425 8.06555 5.3613C7.45077 5.60834 6.89122 5.97511 6.41942 6.44029C5.94762 6.90546 5.57298 7.45977 5.31726 8.07099C5.06155 8.68222 4.92987 9.33817 4.92987 10.0007C4.92987 10.6633 5.06155 11.3192 5.31726 11.9305C5.57298 12.5417 5.94762 13.096 6.41942 13.5612C6.89122 14.0264 7.45077 14.3931 8.06555 14.6402C8.68033 14.8872 9.33808 15.0096 10.0006 15.0002C11.3267 15.0002 12.5984 14.4734 13.5361 13.5358C14.4738 12.5981 15.0006 11.3263 15.0006 10.0002C15.0006 8.67415 14.4738 7.40238 13.5361 6.4647C12.5984 5.52701 11.3267 5.00123 10.0006 5.00123ZM10.0006 7.00123C10.3991 6.99389 10.7951 7.06603 11.1654 7.21344C11.5357 7.36085 11.8729 7.58057 12.1574 7.85978C12.4418 8.13898 12.6678 8.47206 12.822 8.83957C12.9763 9.20708 13.0558 9.60165 13.0558 10.0002C13.0559 10.3988 12.9766 10.7934 12.8224 11.1609C12.6683 11.5285 12.4424 11.8617 12.1581 12.141C11.8737 12.4203 11.5366 12.6401 11.1663 12.7876C10.796 12.9352 10.4001 13.0074 10.0016 13.0002C9.20593 13.0002 8.44287 12.6842 7.88026 12.1216C7.31765 11.5589 7.00158 10.7959 7.00158 10.0002C7.00158 9.20458 7.31765 8.44152 7.88026 7.87891C8.44287 7.3163 9.20593 7.00023 10.0016 7.00023L10.0006 7.00123ZM15.2506 3.50123C14.928 3.51414 14.6229 3.65138 14.3992 3.8842C14.1755 4.11702 14.0506 4.42736 14.0506 4.75023C14.0506 5.0731 14.1755 5.38344 14.3992 5.61626C14.6229 5.84908 14.928 5.98632 15.2506 5.99923C15.5821 5.99923 15.9 5.86753 16.1345 5.63311C16.3689 5.39869 16.5006 5.08075 16.5006 4.74923C16.5006 4.41771 16.3689 4.09977 16.1345 3.86535C15.9 3.63093 15.5821 3.49923 15.2506 3.49923L15.2506 3.50123Z"
        fill="#151515"
      />
    </svg>
  );
}

export function TwitterXIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M0 0L2.5 0L17.5 20L15 20L0 0Z" fill="#151515" />
      <path d="M0 0L2.5 0L17.5 20L15 20L0 0Z" fill="#151515" />
      <path d="M0 0L5 0L5 2L0 2L0 0Z" fill="#151515" />
      <path d="M0 2L5 2L5 0L0 0L0 2Z" fill="#151515" />
      <path d="M17 0L20.5 0L3.5 20L0 20L17 0Z" fill="#151515" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="11"
      height="20"
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M7 11.5L9.5 11.5L10.5 7.5L7 7.5L7 5.5C7 4.47 7 3.5 9 3.5L10.5 3.5L10.5 0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7L3 7.5L0 7.5L0 11.5L3 11.5L3 20L7 20L7 11.5Z"
        fill="#151515"
      />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14L1.69779e-06 2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06L18 1.69779e-06C18.55 1.69779e-06 19.021 0.196001 19.413 0.588001C19.805 0.980001 20.0007 1.45067 20 2L20 14C20 14.55 19.804 15.021 19.412 15.413C19.02 15.805 18.5493 16.0007 18 16L2 16ZM10 9L18 4L18 2L10 7L2 2L2 4L10 9Z"
        fill="#EF4353"
      />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M16.2037 12.25L13.6637 11.96C13.365 11.9249 13.0623 11.958 12.7782 12.0567C12.4942 12.1554 12.2362 12.3173 12.0237 12.53L10.1837 14.37C7.34486 12.9262 5.03745 10.6188 3.59367 7.78L5.44367 5.93C5.87367 5.5 6.08367 4.9 6.01367 4.29L5.72367 1.77C5.66698 1.28218 5.43287 0.832237 5.06591 0.505849C4.69895 0.17946 4.22478 -0.000582255 3.73367 1.41469e-06L2.00367 1.41469e-06C0.873674 1.41469e-06 -0.0663265 0.940001 0.00367348 2.07C0.533673 10.61 7.36367 17.43 15.8937 17.96C17.0237 18.03 17.9637 17.09 17.9637 15.96L17.9637 14.23C17.9737 13.22 17.2137 12.37 16.2037 12.25Z"
        fill="#EF4353"
      />
    </svg>
  );
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="14"
      height="20"
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 8.88178e-16 5.14348 0 7C1.77636e-15 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 1.33227e-15 7 0Z"
        fill="#EF4353"
      />
    </svg>
  );
}