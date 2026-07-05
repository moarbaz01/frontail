// Type declaration for the Behold Instagram widget custom element
// https://behold.so/docs/

declare namespace JSX {
  interface IntrinsicElements {
    "behold-widget": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & { "feed-id": string },
      HTMLElement
    >;
  }
}
