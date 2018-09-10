export class DataService {

  data = [
    {
      number: 1, description: "If it's too good to be true, then it probably is",
      lessons: [
        {
          title: "Unexpected Money", type: "Email", steps: [
            { title: "Introduction", instructions: "Unexpected money scams involve scammers inventing some convincing and seemingly legitimate reasons to give their victims false hope about offers of money. Scammers play with their victim's emotions of desire, panic and love in order to extract money for themselves.", nextTask: "Open your new essential Two Direction email to continue", messages: [{ subject: "Subscription Recieved", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We recieved the payment to subscribe to our website.<br>Regards,<br>TwoDirectionLovers.com", delay: 5000, unread: true }] },
            {
              title: "Common Examples", instructions: "Common examples of unexpected money scams include inheritance scams and nigerian scams. Inheritance scams are when a scammer poses as a lawyer or an unknown relative, and contacts you and offers you a large inheritance. The inheritance is almost always from one of your relatives that you had no idea of. Nigerian scams are when a scammer, posing as someone overseas, requests their victim to help them transfer their money out of their country. The scammer will usually offer the victim a large share in the money.", nextTask: "Click on the pop-up to go next", messages: [
                { subject: "Subscription Recieved", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We recieved the payment to subscribe to our website.<br>Regards,<br>TwoDirectionLovers.com", unread: false },
                { subject: "5 MILLION DOLLARS", sender: "winne mandela", email: "winnie253@hotmail.com", time: "12:15PM", data: "<p>I am winnie mandela, the second wife of nelson madela the former south african president. I need to transfer $5 MILLION DOLLARS out of the country because of my husband Nelson Madelas' health conditions.</p><img src='../../../assets/lesson/0.png' width='150px'><img src='../../../assets/lesson/1.png' width='150px'>", delay: 10000, unread: true }
              ]
            },
          ]
        },
        { title: "Email Competitions", type: "Email", steps: [{ title: "Introduction", instructions: "Scams, scams scams... What is a scam? A scam is a bad thing. Don't go near them!", nextTask: "Click this to go next", messages: [{ subject: "Subscription Recieved", sender: "One Direction Lovers", email: "contact@onedirectionlovers.com", time: "12:05PM", data: "Hellllllooooo OneDirection Fan!<br>We recieved the payment to subscribe to our website.<br>Regards,<br>OneDirectionLovers.com", delay: 1000, unread: true }, { subject: "You won free iphone!", sender: "Apple Inc.", email: "winner@e2k3enr6.com", time: "2:00AM", data: "Dear lucky winner!<br>You have one expensive iPhoneX!!!!<br>Regards,<br>Apple Inc.", unread: false }] }] }
      ]
    },
    {
      number: 2, description: "Keep your personal information to yourself",
      lessons: [
        {
          title: "Phishing Scams", type: "Email", steps: [{
            title: "Introduction", instructions: "Let me give you a short roleplay to ponder upon: imagine you are walking through your favourite shopping centre, a cold ice-cream dripping in your left hand and a couple of (biodegradable) plastic bags in your right hand, when you suddenly bump into a complete stranger. Now imagine that person was asking you for your personal details, such as your name, address, passwords, bank account details and favourite color. Would you give the person these private details? NO! Well, alright maybe your favourite colour. If you wouldn't give the person your information in real life, why should you do so over the internet?", nextTask: "Click on the pop-up to go next", messages: [
              { subject: "See Bill! EXPIRES SOON", sender: "Testlra Billing", email: "winnie253@hotmail.com", time: "12:20PM", data: "Hey", delay: 10000, unread: true },
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
            { title: "Dating and Romance Scams", instructions: "Sometimes internet scammers will pretend to be a romantic teenager, to try to extract money from unsuspecting victims.", nextTask: "Send the reply to continue.", inputText: "Scammer no scamming!", messages: [{ text: "hello", sent: "to" }, { text: "how r u?", sent: "to" }, { text: "hey, i'm good", sent: "from" }, { text: "wait.... r u a scammer? :O how could u?", sent: "from" }] },
            { title: "How to recognize a scammer", instructions: "Internet scammers usually try to ask for money.", nextTask: "Send the reply to continue.", inputText: "Yay! We did it!", messages: [{ text: "hello", sent: "to" }, { text: "how r u?", sent: "to" }, { text: "hey, i'm good", sent: "from" }, { text: "wait.... r u a scammer? :O how could u?", sent: "from" }, { text: "Scammer no scamming!", sent: "from", delay: 200 }, { text: "Ahhh dang!", sent: "to", delay: 1500 }] }
          ]
        }
      ]
    }
  ]

  constructor() { }
}
