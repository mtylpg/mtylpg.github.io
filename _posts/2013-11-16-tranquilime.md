---
layout: template
title: Tranquili.me
dtitle: Tranquili.me
excerpt: A hackathon project designed to combat stress, wherein users can anonymously post about what is stressing them out and get support.
minipic: /images/post-images/2013-11-16-tranquilime-minipic.jpg
status: Ongoing
file: Design
---

<h4 class="green">Goal:</h4>
Over a 2 day hackathon, build a site on which users can annonymously post stressors and leave supportive comments for others. Think Post-Secret, but with new focus on stress and anonymous feedback.

<h4 class="purple">Results:</h4>
A fully functional local host version of the system is available on Github <a href="https://github.com/bridgs/tranquilime/">here</a>.

<h4 class="orange">The Future:</h4>
One of these days we'll throw the thing up on AWS, with a possible twitter integration.


The <a href="http://codeathon.splashthat.com/"> Tumblr/Clinton Foundation/Jawbone Codeathon</a> (<a href="https://twitter.com/search?q=%23code4health">#code4health</a>) is a recurring hackathon themed around countering the social determents of modern health. Working with <a href="https://github.com/bridgs">Ben Myers</a>, I participated in one second event of this type in October 2013. The theme stress in general and we decided to make a system based all around venting and sharing those every day stress-causes, just to give anybody a place to air out what was on their minds as a sort of therapy. I'll be honest and say that Ben and I never thought of Post-Secret while we were building it, but it seems to be what everybody else sees in the project and we don't disagree.

I had decided that I wanted to go all out on the design side of things, so excluding a few bits of front end javascript and most of the CSS Ben handled all the coding, so I won't be talking about that here (tl;dr it's mongoDB + node.js). The whole project is open source, so feel free to dig in here.

Design-wise, I wanted to make something that was relaxing visually. I wanted something that would calm people down within a second of their seeing it. The inital plan was to have the system open by promting for the user's stressor, and then displaying a forum style list of stressors currently in the system. It was clear early on that color was going to do a lot to set the tone of our site, so I played around with various solid colors and gradients.

<div class="image center">
    <img src="/images/post-images/2013-11-16-tranquilime-blueandgrad.jpg"/>
    <div class="caption ext center">
        So... bright...
    </div>
</div>

<div class="image center">
    <img src="/images/post-images/2013-11-16-tranquilime-lists.jpg"/>
    <div class="caption ext center">
        That one on the left was a terrible idea. Neat colors on the right though!
    </div>
</div>


Structure wise, these lists were a little depressing, which is the last think you want in your anti-stress app. Seeing blocks of text describing the problems people are having would be pretty overwhelming, and it really just focuses on comiseration rather than support. For the next iteration, I moved to a sort of word cloud, with comments flowing from one side of the screen to the other. This gave a great sense of motion and space to the page, as well as bringing the focus more towards helping others than just posting your own woes.

In terms of color, the bright blue is agressive, but darkening it makes it seem kinda sad, while the gradient is... salvagable maybe, butthe uneveness of the background is a little jarring and the wild variety of colors lead to a lot of potential ugliness. Colorwise, I ultimately went with black for the best chillness-per-time ratio (it was a hackathon after all). 

This left us with a flowing screen of white text on black, which (once again), looked somewhat bleak. I readded the colored text of gradient-mock, tweaking a bit for better contrast on black, but did so for only responses; this meant that as things faded in and out attention was drawn to the positive responses users left for each other, perhaps even more so than to the stressors themselves.

<div class="image center">
    <img src="/images/post-images/2013-11-16-tranquilime-cloud.jpg"/>
    <div class="caption ext center">
        Military?
    </div>
</div>

For my final design, I ended up dropping the first prompt screen, instead opting to put full focus on the cloud itself and having the "post your own" form fade along with the stressors themselves. I grabbed a moticational quote to mask initial API loading times, and quite frankly to look artsy. I think it turned out pretty well.


<div class="image center">
    <img src="/images/post-images/2013-11-16-tranquilime-cover.jpg"/>
    <div class="caption ext center">
        Google search: "help quote"
    </div>
</div>

<div class="image center">
    <img src="/images/post-images/2013-11-16-tranquilime-flow.jpg"/>
    <div class="caption ext center">
        Screenshot of the final project (running locally). Hooray for test data!
    </div>
</div>

We've been a little slow on getting this online, but are hoping to get it set up on AWS over the next couple of weeks. Though this is still only an idea: we're hoping to sync the system with twitter, pull tweets from people who sound stressed, and have responses posted to tranquili.me the site get posted as tweets directed at the stressed individual. It's far off, but it'll be real cool when/if it happens. <a href="https://twitter.com/tranquilime"> Follow us on twitter to see if it does!</a>
