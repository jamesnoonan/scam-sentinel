export class DataService {

  data = [
    {
      number: 1, description: "If it's too good to be true, then it probably is",
      lessons: [
        { title: "Email Competitions", type: "Email", steps: [{title: "Introduction", instructions: "Scams, scams scams... What is a scam? A scam is a bad thing. Don't go near them!", nextTask: "Click this to go next", messages: [{subject: "Subscription Recieved", sender: "One Direction Lovers", email: "contact@onedirectionlovers.com", time: "12:05PM", data: "Hellllllooooo OneDirection Fan!<br>We recieved the payment to subscribe to our website.<br>Regards,<br>OneDirectionLovers.com", delay: 1000, unread: true}, {subject: "You won free iphone!", sender: "Apple Inc.", email: "winner@e2k3enr6.com", time: "2:00AM", data: "Dear lucky winner!<br>You have one expensive iPhoneX!!!!<br>Regards,<br>Apple Inc.", unread: false}]}]},
        { title: "Pop-up Ads", type: "Website", steps: [{title: "Another Lesson", instructions: "Hello, how are you? I hope this works...", nextTask: "Click on the pop-up to go next"}] }
      ]
    },
    {
      number: 2, description: "Keep your personal information to yourself",
      lessons: [
        { title: "Bank Scams", type: "Email", steps: [{title: "Another Rule",  instructions: "Rule Switch", nextTask: "Click here to go next"}]},
        { title: "Online Shopping", type: "Website" },
        { title: "Phishing Scams", type: "Email" }
      ]
    },
    {
      number: 3, description: "Always know who you are talking to online",
      lessons: [
        { title: "Fake Profiles", type: "Interactive Image" },
        { title: "Pop-up Ads", type: "Direct Message"},
        { title: "Romance Scams", type: "Direct Message", steps: [
          {title: "Dating and Romance Scams", instructions: "Sometimes internet scammers will pretend to be a romantic teenager, to try to extract money from unsuspecting victims.", nextTask: "Send the reply to continue.", inputText: "Scammer no scamming!", messages: [{text: "hello", sent: "to"}, {text: "how r u?", sent: "to"}, {text: "hey, i'm good", sent: "from"}, {text: "wait.... r u a scammer? :O how could u?", sent: "from"}]},
          {title: "How to recognize a scammer", instructions: "Internet scammers usually try to ask for money.", nextTask: "Send the reply to continue.", inputText: "Yay! We did it!", messages: [{text: "hello", sent: "to"}, {text: "how r u?", sent: "to"}, {text: "hey, i'm good", sent: "from"}, {text: "wait.... r u a scammer? :O how could u?", sent: "from"}, {text: "Scammer no scamming!", sent: "from", delay: 200}, {text: "Ahhh dang!", sent: "to", delay: 1500}]}
        ]}
      ]
    }
  ]

  constructor() { }
}
