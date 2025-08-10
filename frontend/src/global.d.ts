declare global {
    interface Window {
        gtag: Gtag.Gtag;
    }

    namespace Gtag {
        interface EventParams {
            event_category?: string;
            event_label?: string;
            value?: number | string;
            [key: string]: any;
        }

        interface ConfigParams {
            [key: string]: any;
        }

        interface Gtag {
            (command: 'config', targetId: string, config?: ConfigParams): void;
            (command: 'event', action: string, params?: EventParams): void;
            (command: 'js', date: Date): void;
            (command: 'set', params: Record<string, any>): void;
        }
    }
}

// Required for module augmentation
export {};