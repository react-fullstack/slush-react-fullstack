# Project Name #

<!-- 
> This material was originally posted [here](http://www.quora.com/What-is-Amazons-approach-to-product-development-and-product-management). It is reproduced here for posterities sake.

There is an approach called "working backwards" that is widely used at Amazon. They work backwards from the customer, rather than starting with an idea for a product and trying to bolt customers onto it. While working backwards can be applied to any specific product decision, using this approach is especially important when developing new products or features.

For new initiatives a product manager typically starts by writing an internal press release announcing the finished product. The target audience for the press release is the new/updated product's customers, which can be retail customers or internal users of a tool or technology. Internal press releases are centered around the customer problem, how current solutions (internal or external) fail, and how the new product will blow away existing solutions.

If the benefits listed don't sound very interesting or exciting to customers, then perhaps they're not (and shouldn't be built). Instead, the product manager should keep iterating on the press release until they've come up with benefits that actually sound like benefits. Iterating on a press release is a lot less expensive than iterating on the product itself (and quicker!).

If the press release is more than a page and a half, it is probably too long. Keep it simple. 3-4 sentences for most paragraphs. Cut out the fat. Don't make it into a spec. You can accompany the press release with a FAQ that answers all of the other business or execution questions so the press release can stay focused on what the customer gets. My rule of thumb is that if the press release is hard to write, then the product is probably going to suck. Keep working at it until the outline for each paragraph flows. 

Oh, and I also like to write press-releases in what I call "Oprah-speak" for mainstream consumer products. Imagine you're sitting on Oprah's couch and have just explained the product to her, and then you listen as she explains it to her audience. That's "Oprah-speak", not "Geek-speak".

Once the project moves into development, the press release can be used as a touchstone; a guiding light. The product team can ask themselves, "Are we building what is in the press release?" If they find they're spending time building things that aren't in the press release (overbuilding), they need to ask themselves why. This keeps product development focused on achieving the customer benefits and not building extraneous stuff that takes longer to build, takes resources to maintain, and doesn't provide real customer benefit (at least not enough to warrant inclusion in the press release).
 -->
 
## Heading ##
  > Name the product in a way the reader (i.e. your target customers) will understand.
  React Fullstack Yeoman Generator

## Sub-Heading ##
  > Describe who the market for the product is and what benefit they get. One sentence only underneath the title.
  Yeoman Generator for React.js lets you quickly set up a fullstack project with an express server, useful options for database, front end framework, build-tool and testing integration.

## Summary ##
  > Give a summary of the product and the benefit. Assume the reader will not read anything else so make this paragraph good.
  
  ### Client ###

  * Scripts: JavaScript, JSX, (CoffeeScript)
  * Markup: HTML, (Jade)
  * Stylesheets: CSS, (Stylus), (Sass), (Less)
  
  ### Server ###

  * Database: None, MongoDB
  * Authentication boilerplate: Yes, No
  * PasswordHashing: BCrypt, Crypto
  * oAuth integrations: Facebook Twitter Google
  * Socket.io integration: Yes, No

  ##Generators##
  * react-fullstack (aka react-fullstack:app)
  Server Side
  * react-fullstack:endpoint
  Client Side
  * react-fullstack:route
  * react-fullstack:controller
  * react-fullstack:view
  * react-fullstack:model

## Problem ##
  > Describe the problem your product solves.
  There is no fullstack react Generator. Existing react generators offer few featurs / options. React is gaining popularity and this issue needs to be addressed.

## Solution ##
  > Describe how your product elegantly solves the problem.
  Elegantly drafts scaffolds for faster implementation of React applications. Drastically reduces the learning curve and time spent writing boilerplate code. Integrates perfectly with Backbone and Angular and has a complete backend using Express and Mongo.

## Quote from You ##
  > A quote from a spokesperson in your company.
  "I don't even know React but I could make a fullstack app using this. Move over Facebook!" - Teresa
  "I have ten million users rendered concurrently on my app. Angular couldn't handle it, but it was no problem for React Fullstack" - Richard
  "React can render every single note in the musical spectrum" - Marc
  "I just built this for the Github Stars" - James

## How to Get Started ##
  > Describe how easy it is to get started.
  ## Usage

Install `generator-react-fullstack`:
```
npm install -g generator-react-fullstack
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo react-fullstack`, optionally passing an app name:
```
yo react-fullstack [app-name]
```

Run `grunt` for building, `grunt serve` for preview, and `grunt serve:dist` for a preview of the built app.

## Customer Quote ##
  > Provide a quote from a hypothetical customer that describes how they experienced the benefit.
  "I owe my entire company to this scaffold" - Tony Phillips

## Closing and Call to Action ##
  > Wrap it up and give pointers where the reader should go next.
  Use React in your next web app, and use react-fullstack to save time.
