declare module '@barba/core' {
    export interface ITransitionData {
      current: {
        container: HTMLElement;
        namespace?: string;
        url: {
          href: string;
          path: string;
        };
      };
      next: {
        container: HTMLElement;
        namespace?: string;
        url: {
          href: string;
          path: string;
        };
      };
      trigger?: HTMLElement | string;
    }
  
    export interface ITransition {
      name?: string;
      from?: string;
      to?: string;
      leave?(data: ITransitionData): Promise<void> | void | any;
      enter?(data: ITransitionData): Promise<void> | void | any;
      once?(data: ITransitionData): Promise<void> | void | any;
      after?(data: ITransitionData): Promise<void> | void | any;
      before?(data: ITransitionData): Promise<void> | void | any;
    }
  
    export interface IBarbaOptions {
      transitions?: ITransition[];
      views?: any[];
      prevent?: (args: { el: HTMLElement; href: string }) => boolean;
      timeout?: number;
      cacheIgnore?: boolean | string[];
      prefetchIgnore?: boolean | string[];
      schema?: {
        prefix?: string;
        wrapper?: string;
        container?: string;
        namespace?: string;
      };
      requestError?: (
        trigger: HTMLElement,
        action: string,
        url: string,
        response: Response
      ) => boolean | void;
    }
  
    const barba: {
      init(options?: IBarbaOptions): void;
      go(url: string, trigger?: string | HTMLElement): Promise<void>;
      destroy(): void;
      force(url: string): void;
      use(plugin: any, options?: any): void;
    };
  
    export default barba;
  }