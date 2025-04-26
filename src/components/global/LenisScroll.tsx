import Lenis from "lenis";
import { LenisOptions } from "lenis";

interface SmoothScrollConfig extends Partial<LenisOptions> {
  duration?: number;
  easing?: (t: number) => number;
  orientation?: "vertical" | "horizontal";
  gestureOrientation?: "vertical" | "horizontal";
  smoothWheel?: boolean;
  smoothTouch?: boolean;
  wheelMultiplier?: number;
  touchMultiplier?: number;
}

export class SmoothScroll {
  private lenis: Lenis | null = null;
  private isScrolling: boolean = false;

  constructor(config: SmoothScrollConfig = {}) {
    // Only initialize if we're in the browser
    if (typeof window !== 'undefined') {
      this.lenis = new Lenis({
        duration: 1.8,
        easing: (x: number) => 1 - Math.pow(1 - x, 5),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        smoothTouch: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5,
        ...config,
      });

      this.init();
    }
  }

  private init(): void {
    if (!this.lenis || typeof window === 'undefined') return;

    const raf = (time: number) => {
      this.lenis?.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    window.addEventListener("resize", () => {
      this.lenis?.resize();
    });
  }

  public scrollTo(
    target: string | HTMLElement | number,
    options: {
      offset?: number;
      duration?: number;
      immediate?: boolean;
    } = {}
  ): void {
    this.lenis?.scrollTo(target, {
      offset: options.offset || 0,
      duration: options.duration || 2,
      immediate: options.immediate || false,
    });
  }

  public scrollToTop(duration: number = 2): void {
    this.scrollTo(0, { duration });
  }

  public stop(): void {
    this.lenis?.stop();
  }

  public start(): void {
    this.lenis?.start();
  }

  public destroy(): void {
    this.lenis?.destroy();
  }

  public getScrollProgress(): number {
    if (typeof window === 'undefined') return 0;

    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    return scroll / height;
  }

  public onScroll(callback: (e: unknown) => void): void {
    this.lenis?.on("scroll", callback);
  }
}

// Don't create the instance immediately
let smoothScrollInstance: SmoothScroll | null = null;

// Create a function to get or create the instance
export const getSmoothScroll = () => {
  if (typeof window === 'undefined') return null;

  if (!smoothScrollInstance) {
    smoothScrollInstance = new SmoothScroll();
  }
  return smoothScrollInstance;
};