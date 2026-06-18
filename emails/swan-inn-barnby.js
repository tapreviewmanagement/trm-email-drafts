// emails/swan-inn-barnby.js
//
// Each email lives in its own file like this one. Copy this file as a
// template for the next business — keep the same shape (to, toName,
// subject, textContent, optional replyTo / htmlContent).

module.exports = {
  to: 'info@thebarnbyswan.co.uk',
  toName: 'The Swan Inn',
  subject: 'Helping The Swan Inn turn diners into 5-star Google reviews',

  // Plain text version — this is what most inboxes show by default,
  // and also what gets used to auto-build the HTML version below if
  // you don't supply htmlContent yourself.
  textContent: `Hi there,

I hope this finds you well — I've been looking into hospitality businesses around Beccles and Lowestoft, and The Swan Inn caught my eye. With a 4.6 Google rating and guests regularly praising the fresh seafood and warm welcome under C Wood Hospitality, it's clear you've built something locals (and visitors from Norwich, Southwold and beyond) keep coming back for.

I run Tap Review Management (tapreviewmanagement.co.uk), and we help busy pubs and restaurants like yours turn more of that goodwill into visible Google reviews — without adding any extra work for your team. We provide a small NFC tap card for the bar or till point; a customer simply holds their phone near it and lands straight on your Google review page. No app, no QR code, no typing — just a tap and a review.

Given how many guests already leave glowing comments about the food and service, a card on the bar or each table could meaningfully grow your review count and help protect that strong rating — which matters more than ever for getting found by people searching "seafood near Beccles" or "pub near Lowestoft."

Would you be open to a quick call this week to talk it through?

Best wishes,
Imogen Stringer
Tap Review Management`,

  // Optional: if you want replies to go somewhere other than the
  // sender address, set it here. Left out for now since office@ is fine.
  // replyTo: 'imogen@tapreviewmanagement.co.uk',
};
