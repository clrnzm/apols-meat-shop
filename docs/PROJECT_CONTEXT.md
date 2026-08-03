# Apol’s Meat Shop

## Project type

A professional, mobile-first, one-page promotional website for a real local meat shop in Bustos, Bulacan.

## Business goal

Promote the shop, showcase its products and strengths, build local trust, and direct visitors to Messenger or the physical locations.

## Scope

Promotional website only.

Do not add:

- Reservations
- Customer accounts
- Dashboard
- Inventory management
- Sales or expense tracking
- Delivery
- Online payments
- Database
- Authentication
- Admin features

## Business information

- Official name: Apol’s Meat Shop
- Operating since: 2021
- Opening schedule: Monday–Sunday, 5:00 AM–12:00 PM
- Phone: 09294814623
- Messenger: https://www.facebook.com/messages/t/61590556756762/
- Locations:
  - Poblacion, Bustos, Bulacan
  - Bonga Mayor, Bustos, Bulacan
- Exact street addresses and map pins will be supplied later.

## Products

- Fresh meat
- Frozen meat
- Embutido
- Skinless
- Longganisa
- Lechon

Featured products:

- Fresh meat
- Lechon

Do not invent exact products, cuts, packages, or prices. Those details are still pending.

## Brand qualities

- Freshness
- Affordability
- Cleanliness
- Trusted local service
- Farm-sourced meat
- Custom cuts
- Community-focused
- Warm and approachable
- Professional and premium without looking expensive

## Approved design direction

- Dark, editorial food photography
- Strong warm-red accents
- High-contrast typography
- Warm butcher-paper supporting surfaces
- Restrained decorative elements
- Modern premium local-shop presentation
- No pink

## Design tokens

- Brand ink: `#141515`
- Warm paper: `#F4EBDD`
- Warm red: `#C63D3D`
- Light text: `#FBF8F2`
- Derive accessible muted colors, borders, hover states, and focus states from these core tokens.

## Typography

- Headings: Bricolage Grotesque through `next/font/google`
- Body: Manrope through `next/font/google`
- Use only the font weights needed by the design.

## Approved page structure

1. Navbar
2. Hero with integrated trust strip
3. Featured Products
4. Lechon Showcase
5. Why Choose Apol’s
6. Shop Gallery
7. About
8. Visit Us with two locations
9. Final Messenger CTA
10. Footer

Only the Navbar and Hero are approved for implementation right now.

## Final Navbar specification

- Sticky or fixed over the hero
- Initially transparent
- Dark translucent background, subtle blur, and bottom border after scrolling
- Logo on the left
- Desktop navigation:
  - Products → `#products`
  - Lechon → `#lechon`
  - Why Apol’s → `#why-apols`
  - Visit Us → `#visit`
- Primary CTA:
  - Message Us
  - Link to the official Messenger URL
- Accessible mobile hamburger menu
- Mobile menu closes after selecting a link
- Escape closes the menu
- Body scrolling is prevented while the menu is open
- Visible keyboard focus states
- Red hover and active accents

## Final Hero specification

Eyebrow:

> Serving Bustos since 2021

Headline:

> Fresh Cuts for Every Meal. Lechon for Every Celebration.

Description:

> Fresh meat, frozen favorites, and celebration-ready lechon—quality choices made affordable for Bustos families.

Primary CTA:

> Message Us

Secondary CTA:

> Explore Products

Location information:

- Map-pin icon
- Poblacion & Bonga Mayor, Bustos

Opening information:

- Clock icon
- Open daily, 5 AM–12 PM

Do not place a red dot or bullet between the location and opening hours.

## Hero visual treatment

- Full-width dark meat photograph
- Dark left-to-right readability gradient
- Left-aligned content on desktop and mobile
- Temporary background treatment until the final licensed photograph is provided
- Final photograph path: `public/images/hero-meat.jpg`
- Final logo assets will be supplied later
- Do not use an unlicensed remote image as the production asset

## Integrated trust strip

Place the trust strip inside the bottom of the hero. Do not create a separate light section, floating cards, or pills.

Desktop: three columns.  
Mobile: stacked rows.

Items:

1. **Fresh farm-sourced meat**  
   Fresh choices for everyday meals
2. **Budget-friendly choices**  
   Quality that respects your budget
3. **Custom cuts available**  
   Prepared the way you need it

Use restrained warm-red icons, a subtle top border, and accessible secondary text.

## Current milestone

Establish the design system and implement only:

- Navbar
- Mobile navigation
- Hero
- Location and opening-hours metadata
- Integrated trust strip

The remaining sections must wait for separate design approval.
