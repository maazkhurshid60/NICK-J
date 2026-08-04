import Script from "next/script";

// Simplify360 live chat. Rendered from the root layout so it is available on
// every route — Next.js loads it once and keeps it across client navigation.
// This site's own Simplify360 account, so chats land in its inbox rather than
// the Patrick Novick one.
const S360_KEY = "NmEwZjA4YjU3MjcxYzg4MWY3YjMwOGI0fDQxNzIzNzA=";

export default function ChatWidget() {
  return (
    <Script
      id="nextivacx-code-snippet"
      src={`https://d3po7etsbw5eiv.cloudfront.net/Simplify360Chat.js?key=${S360_KEY}`}
      strategy="afterInteractive"
    />
  );
}
