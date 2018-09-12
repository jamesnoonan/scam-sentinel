export class DataService {
  typingInstructions = false;
  data = [
    {
      number: 1, description: "If it's too good to be true, then it probably is",
      lessons: [
        {
          title: "Unexpected Money", type: "Email", steps: [
            { title: "Introduction", instructions: "Unexpected money scams involve scammers inventing some convincing and seemingly legitimate reasons to give their victims false hope about offers of money. Scammers play with their victim's emotions of desire, panic and love in order to extract money for themselves.", nextTask: "Click on your new essential Two Direction email to continue", messages: [{ subject: "Newsletter out!", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We have released our latest newsletter on the amazing Two Direction band. Check it out on our website!!!!!<br>Regards,<br>TwoDirectionLovers.com", delay: 5000, unread: true }] },
            {
              title: "Common Examples", instructions: "Common examples of unexpected money scams include inheritance scams and nigerian scams. Inheritance scams are when a scammer poses as a lawyer or an unknown relative, and contacts you and offers you a large inheritance. The inheritance is almost always from one of your relatives that you had no idea of. Nigerian scams are when a scammer, posing as someone overseas, requests their victim to help them transfer their money out of their country. The scammer will usually offer the victim a large share in the money.", nextTask: "Click on the pop-up to go next", messages: [
                { subject: "Newsletter out!", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We have released our latest newsletter on the amazing Two Direction band. Check it out on our website!!!!!<br>Regards,<br>TwoDirectionLovers.com", unread: false },
                { subject: "5 MILLION DOLLARS", sender: "winne mandela", email: "winnie253@hotmail.com", time: "12:15PM", data: "<p>I am winnie mandela, the second wife of nelson madela the former south african president. I need to transfer $5 MILLION DOLLARS out of the country because of my husband Nelson Madelas' health conditions.</p><img src='../../../assets/lesson/0.png' width='150px'><img src='../../../assets/lesson/1.png' width='150px'>", delay: 10000, unread: true }
              ]
            },
          ]
        },
        {
          title: "Unexpected Prizes", type: "Email", steps: [
            { title: "Introduction", type: "Direct Message", instructions: "Unexpected prize scams, similar to unexpected money scams, involve scammers creating a fake competitions or deals in order to extract money from their victims. Often, the victims don't actually register for these competitions, but get drawn in from the hope of getting the prize. These scams can be very effective with teenagers and children, as the rational section of their brains has not fully developed yet. And who doesn't want a free smartphone for beeing the millionth visitor on a website? Scammers use their victim's emotions of desire and fear of missing out.", nextTask: "Exit your messages with Lucky Winners to avoid being scammed!", contact: "Lucky Winners", messages: [{ text: "Congratulations, you won a new phone! To claim your prize, go to: http://www.luckywinners.com.", sent: "to", delay: "5000"}]},
            {
              title: "Common Examples", instructions: "Some common examples of unexpected prizes scams include Scratchy Scams, Travel Prize Scams and Free Gift Scams. Scratchy Scams occur when a scammer notifies you of a lottery prize that you have won, usually for something you hadn't even entered. Travel Prize Scams occurs when scammers trick you into claiming a 'reward' such as a free or discounted holiday. Free gifts scams… well we have all seen this before. It has always made us feel special. But unfortunately, in the words of Justin Bieber, we have 'never' ever received our winnings. These scams are usually found in websites and involves scammers tricking their victim into claiming a fake prize.", nextTask: "Click on the pop-up to go next", messages: [
                { subject: "Subscription Recieved", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We recieved the payment to subscribe to our website.<br>Regards,<br>TwoDirectionLovers.com", unread: false },
                { subject: "5 MILLION DOLLARS", sender: "winne mandela", email: "winnie253@hotmail.com", time: "12:15PM", data: "<p>I am winnie mandela, the second wife of nelson madela the former south african president. I need to transfer $5 MILLION DOLLARS out of the country because of my husband Nelson Madelas' health conditions.</p><img src='../../../assets/lesson/0.png' width='150px'><img src='../../../assets/lesson/1.png' width='150px'>", delay: 10000, unread: true }
              ]
            },
          ]
        }
      ]
    },
    {
      number: 2, description: "Keep your personal information to yourself",
      lessons: [
        {
          title: "Phishing Scams", type: "Email", steps: [{
            title: "Introduction", instructions: "Let me give you a short roleplay to ponder upon: imagine you are walking through your favourite shopping centre, a cold ice-cream dripping in your left hand and a couple of (biodegradable) plastic bags in your right hand, when you suddenly bump into a complete stranger. Now imagine that person was asking you for your personal details, such as your name, address, passwords, bank account details and favourite color. Would you give the person these private details? NO! Well, alright maybe your favourite colour. If you wouldn't give the person your information in real life, why should you do so over the internet?", nextTask: "Click on the pop-up to go next", messages: [
              { subject: "See Bill! EXPIRES SOON", sender: "Sodafone Billing", email: "winnie253@hotmail.com", time: "12:20PM", data: "Please login and do your payment.<br>The Sodafone Team", delay: 10000, unread: true },
              { subject: "5 MILLION DOLLARS", sender: "winne mandela", email: "winnie253@hotmail.com", time: "12:15PM", data: "<p>I am winnie mandela, the second wife of nelson madela the former south african president. I need to transfer $5 MILLION DOLLARS out of the country because of my husband Nelson Madelas' health conditions.</p><img src='../../../assets/lesson/0.png' width='150px'><img src='../../../assets/lesson/1.png' width='150px'>", unread: false },
              { subject: "Subscription Recieved", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We recieved the payment to subscribe to our website.<br>Regards,<br>TwoDirectionLovers.com", unread: false }
            ]
          }]
        },
        { title: "Online Shopping", type: "Website" },
        { title: "Phishing Scams", type: "Email" }
      ]
    },
    {
      number: 3, description: "Always know who you are talking to online",
      lessons: [
        { title: "Fake Profiles", type: "Interactive Image" },
        { title: "Pop-up Ads", type: "Direct Message" },
        {
          title: "Romance Scams", type: "Direct Message", steps: [
            { title: "Dating and Romance Scams", instructions: "Sometimes internet scammers will pretend to be a romantic teenager, to try to extract money from unsuspecting victims.", nextTask: "Send the reply to continue.", inputText: "Scammer no scamming!", contact:"Scammer", messages: [{ text: "hello", sent: "to" }, { text: "how r u?", sent: "to" }, { text: "hey, i'm good", sent: "from" }, { text: "wait.... r u a scammer? :O how could u?", sent: "from" }] },
            { title: "How to recognize a scammer", instructions: "Internet scammers usually try to ask for money.", nextTask: "Send the reply to continue.", inputText: "Yay! We did it!", contact: "Scammer",  messages: [{ text: "hello", sent: "to" }, { text: "how r u?", sent: "to" }, { text: "hey, i'm good", sent: "from" }, { text: "wait.... r u a scammer? :O how could u?", sent: "from" }, { text: "Scammer no scamming!", sent: "from", delay: 200 }, { text: "Ahhh dang!", sent: "to", delay: 1500 }] }
          ]
        }
      ]
    }
  ]

  constructor() { }
}
