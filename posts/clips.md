---
title: "Weekend Project - Clips for CS:GO"
date: "2020-11-01"
---

Last weekend I created [Clips for CS:GO](https://clipz.now.sh), a service which sends your frag highlights to your email. These highlights are from matches played on the Valve's official matchmaking servers. The idea for this project was initially a feature request for [Scrim](https://scrim.app).

![Feature request](/images/2020/featuresuggestionclips.png "Feature request")
<center><small>The feature request which sparked the idea for this project - 9/13/20</small></center>


### Intuition

As a player myself, I immediately recognized the desire to <strong>have all my matches processed by a highlight generator regardless of the platform where the match was played</strong>. Since highlights are auto-generated for all Scrim matches, I just needed to support matches played on other platforms. However, I didn't want to bloat the Scrim platform which is why I decided to spawn a new standalone service.

### The beauty of microservices

I wanted to create a new service that's decoupled from [Scrim](https://scrim.app). Since Scrim is built on a microservice architecture, it was really trivial for me to create an external service that called into the existing highlight generation service. The only changes I needed to make was to decompress .bz2 files which is the file format Valve stores their demos and refactor code which determined where asset urls were saved.

### The biggest hurdle

![Discord screenshot](/images/2020/clipsben.png "Ben says it will be hard")

Valve makes it easy to download demos via a "match sharing code" but that requires you to launch the game client and interact with the dev console - there are no events to hook into to tell you when demos finish downloading. I needed a better solution, I wanted a demo download url from Valve. I knew it was out there but it seems like a trade secret to programmatically fetch this info. I ended up reverse engineering the "match sharing code" and parsed out the MatchID, OutcomeID and TokenID which then allowed me fetch match data from Steam. I have thank the open source for helping me with this one.

### Development

I love writing small web apps, it allows me to try new things which are designed for increased productivity and better developer experience. I personally  found that Vue.js allowed me to build things faster than with React.js. Even though I used React professionally for [Sway](https://sway.com) and [Word Online](https://office.com/word). Vue became my framework of choice for the past 4 year. Back then, I always wanted to build with Next.js but I never got around to it due to auth constraints and the push to make things serverless (imposed by now v2). This past year I started discovering the need for SSR for Scrim and have been regretting not adding support for it from day 1.

This project was built with:
- **Next.js** with SSR and SWR for the front-end. SWR is awesome for fetching data I want to cache, but I still preferred the realtime syncing of data with Firestore for better user experiences. I used [swr-firestore](https://github.com/nandorojo/swr-firestore) to have the best of both worlds.
- **ChakraUI** for the UI component library. It's my new favorite and I prefer it over TailwindCSS because I don't have to worry about about accessibility.
- **Vercel serverless functions** as the API. I honestly have no complaints here but my functions don't do too much anyways. Cold start times are on average >1s faster than Google's cloud functions.
- **Firebase** for passwordless email auth. I'd love to try [Auth0 passwordless](https://auth0.com/passwordless/) and [Magic](https://magic.link) but they get expensive as you scale. I like to account for scale when making design decisions.
- **Google Cloud Scheduler** for cron jobs. A solution I already depend on for Scrim.
- **Amazon SQS** for the processing pipeline. Creating a new messaging queue is so easy with SQS. I'm not sure why I dabbled with Redis and RabbitMQ in the past for my side projects.
- **Sendinblue** for transactional emails. I liked how realtime logs helped me debug faster (e.g. delivery, opened, link clicked). My only complaint is that tracked links in the email take over a second for the redirect response. This is partly due to the fact that the there servers are located in Europe only. This is something I overlooked. I'll probably switch to MailJet because I've only heard good things.

![Discord screenshot](/images/2020/clipsfeedback.png "Feedback for new service")
<center><small>I love when things just work and players get to share their post match highlights which would have otherwise been forgotten!</small></center>

### What's next

1. After a week of the service running, a noticed that fetching demo urls from Valve can fail if Steam is disconnected. Every tuesday Steam pushes a platform update which causes the Steam client instance to disconnect. I simply decided to process.exit() when a disconnect event is fired and get PM2 to reboot the node.js process whenever it dies. I'll have to monitor if this solution works, I could do some fault injection but I rather wait for something real to happen since this is just a weekend project. I love the fact that the message queue will hold on to worker tasks. Technically I'll be able to "backfill" any jobs that were added within the last 14 days (default expiry for queue messages is 4 days for Amazon SQS).

2. Workers have a lot of idle time at the moment. As the service gets popular, I would want to streamline the process of recording highlights. I should be able to upload clips as soon as they are done recording and not need to wait for the rest of the highlights for that match. [A recent game update](https://blog.counter-strike.net/index.php/2020/10/31827/) a new setting “demo_index” — when enabled, playback of demo files will create full frame baselines to improve performance of seeking forward and rewinding within demo files. Traditionally, seeking withing a demo takes a long time because event logs are read sequentially - I picture it as [event sourcing](https://microservices.io/patterns/data/event-sourcing.html). [3kliksphilip](https://www.youtube.com/watch?v=oYUxoDn5yts) does a wonderful job of explaining how this new update will speed things up.

3. I want quick wins. CS:GO is the most played game on Steam according to [Steam Stats](https://store.steampowered.com/stats/Wow) with 938,972 peak players for today. I think I can monetize this service with little effort. I have experience with Stripe and creating custom subscription pages but I think the newly announced [Customer Portals](https://stripe.com/docs/billing/subscriptions/customer-portal) is the way to go for a unified & familiar experience. That or I might look into Patreon for a community experience.

4. Let the world know about it.
