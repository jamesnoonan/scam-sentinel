export class DataService {
  typingInstructions = false;
  data = [
    {
      number: 1, description: "If it's too good to be true, then it probably is",
      lessons: [
        {
          title: "Unexpected Money", type: "Email", steps: [
            { title: "Introduction", instructions: "Unexpected money scams involve scammers inventing some convincing and seemingly legitimate reasons to give their victims false hope about offers of money. Scammers play with their victim's emotions of desire, panic and love in order to extract money from them.", nextTask: "Wait a sec! The latest Two Direction newsletter came out. Click on the email to continue", messages: [{ subject: "Newsletter out!", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We have released our latest newsletter on the amazing Two Direction band. Check it out on our website!!!!!<br>Regards,<br>TwoDirectionLovers.com", delay: 12500, unread: true }] },
            {
              title: "Common Examples", instructions: "Common examples of unexpected money scams include Inheritance scams and Nigerian scams. Inheritance scams are when a scammer poses as a lawyer or an unknown relative, and contacts you and offers you a large inheritance. The inheritance is almost always from one of your relatives that you had no idea existed. Nigerian scams are when a scammer, posing as someone overseas, requests their victim to help them transfer their money out of their country. The scammer will usually offer the victim a large share in the money.", nextTask: "What is this? A call from help from your best friend Winnie Mandela? It has to be real... Open the email to proceed", messages: [
                { subject: "Newsletter out!", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We have released our latest newsletter on the amazing Two Direction band. Check it out on our website!!!!!<br>Regards,<br>TwoDirectionLovers.com", unread: false },
                { subject: "5 MILLION DOLLARS", sender: "winne mandela", email: "winnie253@hotmail.com", time: "12:15PM", data: "<p>I am winnie mandela, the second wife of nelson madela the former south african president. I need to transfer $5 MILLION DOLLARS out of the country because of my husband Nelson Madelas' health conditions.</p><img src='../../../assets/lesson/0.png' width='150px'><img src='../../../assets/lesson/1.png' width='150px'>", delay: 23000, unread: true }
              ]
            },
          ]
        },
        {
          title: "Unexpected Prizes", type: "Email", steps: [
            { title: "Introduction", type: "Direct Message", instructions: "Unexpected prize scams, similar to unexpected money scams, involve scammers creating a fake competitions or deals in order to extract money from their victims. Often, the victims don't actually register for these competitions, but get drawn in from the hope of getting the prize. These scams can be very effective with teenagers and children, as the rational section of their brains have not fully developed yet. And who doesn't want a free smartphone for beeing the millionth visitor on a website? Scammers use their victim's emotions of desire and fear of missing out. The main delivery methods for unexpected price scams are text messages and emails.", nextTask: "Press the 'Messages' button to escape being scammed by Lucky Winners!", contact: "Lucky Winners", messages: [{ text: "Congratulations, you won a new phone! To claim your prize, go to: <u>http://www.luckywinners.com</u>.", sent: "to", delay: "5000"}]},
            {
              title: "Common Examples", instructions: "Some common examples of unexpected prize scams include scratchie scams, travel prize scams and free prize scams. Scratchie scams occur when a scammer sends their victim a fake scratchie card, usually that the victim had never ordered. The fake scratchie card tells the victim that they have won and they have to pay a 'collection fee'. Travel prize scams occur when scammers trick you into claiming a 'reward' such as a free or discounted holiday. Free prize scams are all over the internet. Many people think that it would never happen to them. But unfortunately, in the words of Justin Bieber, you can \"never say never\", and unexpected prize scams occur more than you might think. These scams are mainly delivered over texts, emails and websites, and involve scammers tricking their victim into claiming a fake prize.", nextTask: "Click on the pop-up to go next", messages: [
                { subject: "5 MILLION DOLLARS", sender: "winne mandela", email: "winnie253@hotmail.com", time: "12:15PM", data: "<p>I am winnie mandela, the second wife of nelson madela the former south african president. I need to transfer $5 MILLION DOLLARS out of the country because of my husband Nelson Madelas' health conditions.</p><img src='../../../assets/lesson/0.png' width='150px'><img src='../../../assets/lesson/1.png' width='150px'>", unread: false },
                { subject: "Subscription Recieved", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We recieved the payment to subscribe to our website.<br>Regards,<br>TwoDirectionLovers.com", unread: false }
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
        }
      ]
    },
    {
      number: 3, description: "Always know who you are talking to online",
      lessons: [
        { title: "Dating and Romance Scams", type: "Interactive Image" }
      ]
    }
  ]

  constructor() { }
}
