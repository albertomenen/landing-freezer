
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_ID_ANALYTICS || '';

export const pageview = (url: string) => {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  };

  interface GtagEvent {
    action: string;
    category: string;
    label: string;
    value: number;
  }

  export const event = ({ action, category, label, value }: GtagEvent) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  };