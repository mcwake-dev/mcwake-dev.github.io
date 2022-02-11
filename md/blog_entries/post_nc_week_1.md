---
title: Northcoders Bootcamp Completed!
date_published: 11/02/2022
excerpt: After 13 weeks of furious coding, I've finished the Northcoders Web Development Bootcamp. So what's next?
tags: northcoders
---

# So...What's Next?

Last week, I completed the Northcoders Web Development Bootcamp. This has been a fun, challenging, 13 week course where despite my previous experience I have learned and been pushed to learn many many new things. But I don't plan to stop there! My overall goals at this stage are:

1. Get a job
2. Keep coding!

# Front End Project Tweaks

First tasks in getting a job are to make the changes requested by the Northcoders careers team. Fortunately these changes are pretty minor, just some visual tweaks to make things look nice. Unfortunately CSS isn't something that's extensively covered on the bootcamp, so it remains something I need to work on. In the meantime however, I've started using the [Bulma CSS framework](https://bulma.io/) to tidy up my front-end project's appearance. So far I'm liking it - it's much lighter weight than something like [Bootstrap](https://getbootstrap.com/) but provides much of the same functionality.

# Group Project Tweaks

One big weakness of our group project, [Hamster Help](https://hamster-help-fe.herokuapp.com), is that we duplicated model code between the Socket.io and Express backends, resulting in some fragmentation and causing several annoying errors. It struck me that this could be vastly simplified by having the Socket.io backend just call the Express backend for all functions, leaving only one set of code for database interaction and simplifying testing.

# Would Like To Try

I'm currently interested in trying out two technologies:

- [Peer.js](https://peerjs.com/) - This library provides peer-to-peer audio and video communication through a web browser. The API looks pretty friendly, peer discovery is performed through a provided server script, and it would be a fantastic addition to my group's help ticket system, [Hamster Help](https://hamster-help-fe.herokuapp.com).
- [htmx](https://htmx.org/) - This is a very interesting one. Unlike every current framework or vanilla JS front-end, the developer of htmx wants to just augment HTML with the ability to do everything JavaScript can do. In theory it could produce faster, lighter, more maintainable and simpler code. But does the developer experience actually improve when HTML is all you have? It looks like a fascinatingly different front-end paradigm so I'm keen to give it a try.
