---
title: "My passion project - Part 1"
date: "2020-07-27"
# private: true
---

## Oct 2019

I quit my full-time job and set out to challenge myself to build a service that satisfied my appetite as a growing developer. I knew that wanted to build something along side my interests. Counter-Strike is a FPS that I’ve been playing for the last 17+ years since version 1.3. I pretty much played CS exclusively.

Over the years I have competed competitively, ran community servers, made montage video, built source mod plugins, and even built a bot to buy discount skins from the Steam market. **I’ve always had a burning desire to build something that solved my own pain points of playing this game** and that was a better match making experience which was free from cheaters & toxicity.

I had an [old project](https://github.com/adrianlee/goodpug) from 2015 that was incomplete. It was a simple service to find pick up games for CSGO.

**Over the years I had a vicious cycle of rebuilding the same project from the ground up.** Each time was with a different tech stack and with each iteration I knew I was getting closer to building something I was satisfied with. In a way, I used this project as a playground to learn the ins and outs of each approach. I grew a burning desire to complete this project and figure out how to making it viable by finding product-market fit.

## Nov 2019

I set out to build an MVP. The idea was to build a solo queue match making service where games are more balanced because of an ELO rating system. This step would help form the backbone for bigger and more ambitious ideas later on.

From previous incarnations of this project, I had naturally shifted away from a traditional architecture to something more maintainable and cost effective. **I knew that this time around, I needed a production grade solution.**

I ended up building the following solution:

- Building a **server orchestration service** for scaling machines horizontally and scaling of game servers vertically using containers.
- Using **Docker containers** to run game servers and solves the hassles of maintaining them such as game updates and app updates.
- **Serverless functions** for almost everything including logging, file transfer, setting up database triggers. Notable features built with functions include live match scoreboards, pre-processing demos files, stripe api integration, and activity feeds.
- **Firebase** for realtime data & authentication.
- **AWS SQS** for everything task & queue related. i.e. Handling lobby queues. Generating frag highlights

I had a goal of 3 months to build this out, during this time, I was also traveling.

![Building the highlight machines](/images/2020/demopcs.jpg "PCs used for generating match highlights")

<center><small>The new PCs built for processing demos and generating in-game highlights.</small></center>

## Jan 2019

I quickly scrapped the initial MVP idea and opted to build a service where anyone can start a custom 5v5 game for scrims or team practice. The new MVP became a lobby system to create matches. The solo queue idea was not viable. It would have required constant moderation. I would have needed to build and manage a community which meant less time building.

According to a [test match with friends](https://www.scrim.app/match/-Lz_HuY1YuF_pSUHN07f), by the end of January I had a working end-to-end solution.

![First 5v5 match](/images/2020/first10man.png "First 5v5 match")

<center><small>Screenshot of first 5v5 game which ended in a draw</small></center>

## February 2019

I launched [scrim.app](https://www.scrim.app) and had began thinking about monetization. What made my service stand out was that I had in-game match highlights generated at the end of every game. **The highlights feature created instant player delight and hooked them on to come back.**

![Building the highlight machines](/images/2020/highlights.png "PCs used for generating match highlights")

<center><small>Match highlights generated at the end each game.</small></center>

## To be continued

[In part 2, I'll go over why I decided to pivot my business model.](/posts/scrim-part2)
