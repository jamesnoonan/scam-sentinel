export class DataService {
  typingInstructions = false;
  data = [
    {
      number: 1, description: "If it's too good to be true, then it probably is",
      lessons: [
        {
          title: "Unexpected Money", type: "Email", steps: [
            { title: "Introduction", instructions: "Unexpected money scams involve scammers inventing some convincing and seemingly legitimate reasons to give their victims false hope about offers of money. Scammers play with their victim's emotions of desire, panic and love in order to extract money from them.", nextTask: "Wait a sec! Sorry about getting distracted, but the latest Two Direction newsletter came out. Click on the email to continue", messages: [{ subject: "Newsletter out!", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We have released our latest newsletter on the amazing Two Direction band. Check it out on our website!!!!!<br>Regards,<br>TwoDirectionLovers.com", delay: 12500, unread: true }] },
            {
              title: "Common Examples", instructions: "Common examples of unexpected money scams include Inheritance scams and Nigerian scams. Inheritance scams are when a scammer poses as a lawyer or an unknown relative, and contacts you and offers you a large inheritance. The inheritance is almost always from one of your relatives that you had no idea existed. Nigerian scams are when a scammer, posing as someone overseas, requests their victim to help them transfer money out of their country. The scammer will usually offer the victim a large share in the money.", nextTask: "What is this? A call from help from your best friend Winnie Mandela? It has to be real... Open the email to proceed", messages: [
                { subject: "5 MILLION DOLLARS", sender: "winne mandela", email: "winnie253@hotmail.com", time: "12:15PM", data: "<p>I am winnie mandela, the second wife of nelson madela the former south african president. I need to transfer $5 MILLION DOLLARS out of the country because of my husband Nelson Madelas' health conditions.</p><img src='../../../assets/lesson/0.png' width='150px'><img src='../../../assets/lesson/1.png' width='150px'>", delay: 23000, unread: true },
                { subject: "Newsletter out!", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We have released our latest newsletter on the amazing Two Direction band. Check it out on our website!!!!!<br>Regards,<br>TwoDirectionLovers.com", unread: false }              ]
            },
            {
              title: "How to protect yourself", instructions: "It is important to understand that there are no get-rich-quick schemes. You or your parents work for a reason: to earn money. If gaining cash was as easy as going to a website and clicking on a \"You've won\" pop-up box, then everyone would stay at home and spend their time doing so. Therefore always remember to think-twice before handling over your details and dollars. If you ever encounter a questionable situation, question yourself: \"Is this too good to be true?\"", nextTask: "Delete the Nigerian Scam to finish the lesson", messages: [
                { subject: "5 MILLION DOLLARS", sender: "winne mandela", email: "winnie253@hotmail.com", time: "12:15PM", data: "<p>I am winnie mandela, the second wife of nelson madela the former south african president. I need to transfer $5 MILLION DOLLARS out of the country because of my husband Nelson Madelas' health conditions.</p><img src='../../../assets/lesson/0.png' width='150px'><img src='../../../assets/lesson/1.png' width='150px'>", unread: false},
                { subject: "Newsletter out!", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We have released our latest newsletter on the amazing Two Direction band. Check it out on our website!!!!!<br>Regards,<br>TwoDirectionLovers.com", unread: false }              ]
            }
          ]
        },
        {
          title: "Unexpected Prizes", type: "Email", steps: [
            { title: "Introduction", type: "Direct Message", instructions: "Unexpected prize scams, similar to unexpected money scams, involve scammers creating fake competitions or deals in order to extract money from their victims. Often, the victims don't actually register for these competitions, but get drawn in from the hope of getting the prize. These scams can be very effective with teenagers and children, as the rational section of their brains have not fully developed yet. And who doesn't want a free smartphone for being the millionth visitor on a website? Scammers use their victim's emotions of desire and fear of missing out. The main delivery methods for unexpected prize scams are text messages and emails.", nextTask: "This is an Unexpected Prize Scam! Press the 'Messages' button to escape being scammed by Lucky Winners!", contact: "Lucky Winners", messages: [{ text: "Congratulations, you won a new phone! To claim your prize, go to: <u>http://www.luckywinners.com</u>.", sent: "to", delay: "5000" }] },
            {
              title: "Common Examples", instructions: "Some common examples of unexpected prize scams include scratchie scams, travel prize scams and free prize scams. Scratchie scams occur when a scammer sends their victim a fake scratchie card, usually that the victim had never ordered. The fake scratchie card tells the victim that they have won and they have to pay a 'collection fee'. Travel prize scams occur when scammers trick you into claiming a 'reward' such as a free or discounted holiday. Free prize scams are all over the internet. Many people think that it would never happen to them. But unfortunately, in the words of Justin Bieber, you can \"never say never\", and unexpected prize scams occur more than you might think. These scams are mainly delivered over texts, emails and websites, and involve scammers tricking their victim into claiming a fake prize.", nextTask: "Click on anywhere on the email client to go next.", messages: [
                { subject: "Subscription Recieved", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We recieved the payment to subscribe to our website.<br>Regards,<br>TwoDirectionLovers.com", unread: false }
              ]
            },
            {
              title: "Structure of a Prize Scam", instructions: "Step 1 - Scammers send you an email or place a \"You've Won!\" dialogue box on a website, usually as an advertisement. The advertisement may have extremely bright colours in order to grab the victim's attention.", nextTask: "Hmmmm.... It seems like you have won a free trip to Paris. Click on the email to continue.", messages: [
                { subject: "You've won a trip to Paris!", sender: "Thrill Travel", email: "winners@thrilltravel.com", time: "12:30PM", data: "<p>Dear Customer,<br>Every month we enter our customers into a prize draw to win amazing prizes. This month you won the prize, which is a trip to Paris. To ensure you can collect this prize, please pay the collection fee within 7 days, and the trip will be all yours! The collection fee is only $25, and you can pay it right now by emailing your bank details to this secure email account.<br>Regards<br>Thrill Travel </p>", delay: 10000, unread: true },
                { subject: "Subscription Recieved", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We recieved the payment to subscribe to our website.<br>Regards,<br>TwoDirectionLovers.com", unread: false }
              ]
            },
            {
              title: "Structure of a Prize Scam", instructions: "Step 2 - In the e-mail scam, the scammers may want you to reply back to their email. Otherwise the e-mail or scam advertisement will have a website link or a button that redirects the victim to a different website.", nextTask: "Click on anywhere on the email client to go next.", messages: [
                { subject: "You've won a trip to Paris!", sender: "Thrill Travel", email: "winners@thrilltravel.com", time: "12:30PM", data: "<p>Dear Customer,<br>Every month we enter our customers into a prize draw to win amazing prizes. This month you won the prize, which is a trip to Paris. To ensure you can collect this prize, please pay the collection fee within 7 days, and the trip will be all yours! The collection fee is only $25, and you can pay it right now by emailing your bank details to this secure email account.<br>Regards<br>Thrill Travel </p>", unread: false },
                { subject: "Subscription Recieved", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We recieved the payment to subscribe to our website.<br>Regards,<br>TwoDirectionLovers.com", unread: false }
              ]
            },
            {
              title: "Structure of a Prize Scam", instructions: "Step 3 - In the e-mail scam, the scammers may want you to reply back to their email. Otherwise the e-mail or scam advertisement will have a website link or a button that redirects the victim to a different website.", nextTask: "Click on anywhere on the email client to go next.", messages: [
                { subject: "You've won a trip to Paris!", sender: "Thrill Travel", email: "winners@thrilltravel.com", time: "12:30PM", data: "<p>Dear Customer,<br>Every month we enter our customers into a prize draw to win amazing prizes. This month you won the prize, which is a trip to Paris. To ensure you can collect this prize, please pay the collection fee within 7 days, and the trip will be all yours! The collection fee is only $25, and you can pay it right now by emailing your bank details to this secure email account.<br>Regards<br>Thrill Travel </p>", unread: false },
                { subject: "Subscription Recieved", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We recieved the payment to subscribe to our website.<br>Regards,<br>TwoDirectionLovers.com", unread: false }
              ]
            },
            {
              title: "Structure of a Prize Scam", instructions: "Step 4 - After that, the scammer may ask you to pay another fee, due to unexpected problems that arise in the delivery of your gift. Once the scammer is happy with the money they have scammed, they are no more and neither is your gift you had won :(.", nextTask: "Delete the email from Thrill Travel to finish the lesson.", messages: [
                { subject: "You've won a trip to Paris!", sender: "Thrill Travel", email: "winners@thrilltravel.com", time: "12:30PM", data: "<p>Dear Customer,<br>Every month we enter our customers into a prize draw to win amazing prizes. This month you won the prize, which is a trip to Paris. To ensure you can collect this prize, please pay the collection fee within 7 days, and the trip will be all yours! The collection fee is only $25, and you can pay it right now by emailing your bank details to this secure email account.<br>Regards<br>Thrill Travel </p>", unread: false },
                { subject: "Subscription Recieved", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We recieved the payment to subscribe to our website.<br>Regards,<br>TwoDirectionLovers.com", unread: false }
              ]
            }
          ]
        }
      ]
    },
    {
      number: 2, description: "Keep your personal information to yourself",
      lessons: [
        {
          title: "Phishing Scams", type: "Email", steps: [
            {
              title: "Introduction", instructions: "Let me give you a short roleplay to ponder upon: imagine you are walking through your favourite shopping centre, a cold ice-cream dripping in your left hand and a couple of (biodegradable) plastic bags in your right hand, when you suddenly bump into a complete stranger. Now imagine that person was asking you for your personal details, such as your name, address, passwords, bank account details and favourite color. Would you give the person these private details? NO! Well, alright maybe your favourite colour. If you wouldn't give the person your information in real life, why should you do so over the internet?", nextTask: "Click on the email from your phone provider, Sodafone, that you just recieved", messages: [
                { subject: "See Bill! EXPIRES SOON", sender: "Sodafone Billing", email: "sodafone243@optusnet.com.au", time: "12:20PM", data: "Dear Customer<br>Please login <u>here</u> and do your payment.<br>The Sodafone Team", delay: 20000, unread: true },
                { subject: "Subscription Recieved", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We recieved the payment to subscribe to our website.<br>Regards,<br>TwoDirectionLovers.com", unread: false }]
            },
            {
              title: "Online Phishing Scams", instructions: "Online, the main way through which scammers can, unknowingly, gain access to your personal detail is through Phishing Scams, which are attempts by scammers to trick you into giving out personal information. By attaining these personal details the scammer can then pretend to be you and gain access to your bank account, email or worse NETFLIX account! So personal details for scammers are like teenage girls with boy band posters… the more they have the happier they are. Or like teenage boys with boy band posters… no?... No one??. It cannot just be me???", nextTask: "Click anywhere on the email client to proceed", messages: [
                { subject: "See Bill! EXPIRES SOON", sender: "Sodafone Billing", email: "sodafone243@optusnet.com.au", time: "12:20PM", data: "Dear Customer<br>Please login <u>here</u> and do your payment.<br>The Sodafone Team", unread: false },
                { subject: "Subscription Recieved", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We recieved the payment to subscribe to our website.<br>Regards,<br>TwoDirectionLovers.com", unread: false }]
            },
            {
              title: "Common Examples", instructions: "Moving on. With adult victims, scammers usually pose as an actual business such as the victim's bank, their electricity or gas provider, their internet or telephone provider etc. Phishing scams for teenagers are also quite common, however scammers do not send emails posing as banks or electricity providers. Teenagers are usually sent text messages, for example, to confirm payment details regarding purchases they have recently made. Scammers also commonly send a \"You've won a free gift\" text message to teenagers, hoping to capture an easy victim and their details. In such cases it is crucial to remember GOLDEN RULE #1: IF IT IS TOO GOOD TO BE TRUE, THEN IT PROBABLY IS!", nextTask: "Click anywhere on the email client to proceed", messages: [
                { subject: "See Bill! EXPIRES SOON", sender: "Sodafone Billing", email: "sodafone243@optusnet.com.au", time: "12:20PM", data: "Dear Customer<br>Please login <u>here</u> and do your payment.<br>The Sodafone Team", unread: false },
                { subject: "Subscription Recieved", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We recieved the payment to subscribe to our website.<br>Regards,<br>TwoDirectionLovers.com", unread: false }]
            },
            {
              title: "Structure of a Phising Scam", instructions: "Scammers pretend to be a legitimate business, usually one that the victim is associated with. They then send email or text messages prompting the victim to update their payment or personal details. It will usually have a website hyperlink. Once the victim clicks the link they are faced with a fake website. If the victim enters their details then the scammer will have easy access to their information. Since the scammers don't have actual access to the companies' emails, you can check their email account.", nextTask: "Hover over the name of the sender to see their real email. Click on it to proceed", messages: [
                { subject: "See Bill! EXPIRES SOON", sender: "Sodafone Billing", email: "sodafone243@optusnet.com.au", time: "12:20PM", data: "Dear Customer<br>Please login <u>here</u> and do your payment.<br>The Sodafone Team", unread: false },
                { subject: "Subscription Recieved", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We recieved the payment to subscribe to our website.<br>Regards,<br>TwoDirectionLovers.com", unread: false }]
            },
            {
              title: "How to protect yourself", instructions: "The most important technique you can employ to defend yourself from phising scams is to 'always keep your hands and feet… I mean… person information to yourself.' This rule is very important online as it prevents phishing and identity theft. If you are not sure if an email is real or a scam, call your provider and ask about it.", nextTask: "Delete the scam email to finish this lesson and go to the next!", messages: [
                { subject: "See Bill! EXPIRES SOON", sender: "Sodafone Billing", email: "sodafone243@optusnet.com.au", time: "12:20PM", data: "Dear Customer<br>Please login <u>here</u> and do your payment.<br>The Sodafone Team", unread: false },
                { subject: "Subscription Recieved", sender: "Two Direction Lovers", email: "contact@twodirectionlovers.com", time: "12:05PM", data: "Hellllllooooo Two Direction Fan!<br>We recieved the payment to subscribe to our website.<br>Regards,<br>TwoDirectionLovers.com", unread: false }]
            }
          ]
        }
      ]
    },
    {
      number: 3, description: "Always know who you are talking to online",
      lessons: [
        {
          title: "Dating and Romance Scams", type: "Direct Message", steps: [
            {
              title: "Introduction", instructions: "Scammers are always looking for new ways to scam people. How long do you think scammers have existed? 50 years ago? 100 year ago? NO! There have been records of fraudery from as early as 300 BC. The recent technology revolution of the 21st century has given scammers access to a new and larger pool of victims, including many teenagers. Furthermore, this technological age has also enabled scammers to reach their victims in new, deceptive and more dangerous ways. One such commonly used method of scammers to reach their younger victims is through dating and romance apps.", nextTask: "Send your reply to Elouise to continue", contact: "Elouise", inputText: "hey, i'm good", messages: [
                { text: "hey", sent: "to", delay: "3000" },
                { text: "how r u?", sent: "to", delay: "6000" }]
            },
            {
              title: "Dating and Romance Scams", instructions: "As teenagers grow, they start to become attracted to the opposite gender (No more of \"eww he touched a me\"). As communication technology has improved, we have moved to social media and texting to talk. However, for scammers, teenagers on these apps are just a new business opportunity for them to steal more money.", nextTask: "Send your reply to Elouise to continue", contact: "Elouise", inputText: "do i know u?", messages: [
                { text: "hey", sent: "to", delay: "0" },
                { text: "how r u?", sent: "to", delay: "0" },
                { text: "hey, i'm good", sent: "from", delay: "0" }
              ]
            },
            {
              title: "Structure of Dating and Romance Scams", instructions: "Step 1 - Scammers create a fake online profile in order to attract their victims. Photos are usually stolen off the internet.", nextTask: "Send your reply to Elouise to continue", contact: "Elouise", inputText: "oh, ok", messages: [
                { text: "hey", sent: "to", delay: "0" },
                { text: "how r u?", sent: "to", delay: "0" },
                { text: "hey, i'm good", sent: "from", delay: "0" },
                { text: "do i know u?", sent: "from", delay: "0" },
                { text: "no, i just felt lonely and saw your profile", sent: "to", delay: "3000" }
              ]
            },
            {
              title: "Structure of Dating and Romance Scams", instructions: "Step 2 - The scammer will quickly express strong emotions to the victim in a relatively short period of time.", nextTask: "Send your reply to Elouise to continue", contact: "Elouise", inputText: "ummm, thanks i guess", messages: [
                { text: "hey", sent: "to", delay: "0" },
                { text: "how r u?", sent: "to", delay: "0" },
                { text: "hey, i'm good", sent: "from", delay: "0" },
                { text: "do i know u?", sent: "from", delay: "0" },
                { text: "no, i just felt lonely and saw your profile", sent: "to", delay: "0" },
                { text: "oh, ok", sent: "from", delay: "0" },
                { text: "i also think i kind of like you :D", sent: "to", delay: "3000" }
              ]
            },
            {
              title: "Structure of Dating and Romance Scams", instructions: "Step 3 - They will try to get to know the victim, developing a \"strong\" online relationship with them and gaining their trust.", nextTask: "Send your reply to Elouise to continue", contact: "Elouise", inputText: "i have two dogs", messages: [
                { text: "hey", sent: "to", delay: "0" },
                { text: "how r u?", sent: "to", delay: "0" },
                { text: "hey, i'm good", sent: "from", delay: "0" },
                { text: "do i know u?", sent: "from", delay: "0" },
                { text: "no, i just felt lonely and saw your profile", sent: "to", delay: "0" },
                { text: "oh, ok", sent: "from", delay: "0" },
                { text: "i also think i kind of like you :D", sent: "to", delay: "0" },
                { text: "ummm, thanks i guess", sent: "from", delay: "0" },
                { text: "what pets do you have?", sent: "to", delay: "3000" }
              ]
            },
            {
              title: "Structure of Dating and Romance Scams", instructions: "Step 4 - Finally, the scammer will pretend to be in need of money for some sort of personal emergency.", nextTask: "Send your reply to Elouise to continue", contact: "Elouise", inputText: "oh really!? how much will it cost?", messages: [
                { text: "hey", sent: "to", delay: "0" },
                { text: "how r u?", sent: "to", delay: "0" },
                { text: "hey, i'm good", sent: "from", delay: "0" },
                { text: "do i know u?", sent: "from", delay: "0" },
                { text: "no, i just felt lonely and saw your profile", sent: "to", delay: "0" },
                { text: "oh, ok", sent: "from", delay: "0" },
                { text: "i also think i kind of like you :D", sent: "to", delay: "0" },
                { text: "ummm, thanks i guess", sent: "from", delay: "0" },
                { text: "what pets do you have?", sent: "to", delay: "0" },
                { text: "i have two dogs", sent: "from", delay: "0" },
                { text: "that's nice, i have a cat but it needs surgery and we don't have enough money to pay for it ;(", sent: "to", delay: "5000" }
              ]
            },
            {
              title: "How to Protect Yourself", instructions: "When you are online, on social media sites, dating websites or something similar, some of the signs that should activate your spidey senses of danger are: when you receive a friend request from someone who you don't know, when someone starts flirting with you out of the blue, or their profile is inconsistent. If you think you are being scammed DO NOT SEND ANY MONEY to the scammer. The most important technique you can employ to defend yourself from such scams is to \"Always know who you are talking to online\" - No wonder it is a GOLDEN RULE!", nextTask: "Click the 'Messages' button to finish the lesson and avoid being scammed!", contact: "Elouise", messages: [
                { text: "hey", sent: "to", delay: "0" },
                { text: "how r u?", sent: "to", delay: "0" },
                { text: "hey, i'm good", sent: "from", delay: "0" },
                { text: "do i know u?", sent: "from", delay: "0" },
                { text: "no, i just felt lonely and saw your profile", sent: "to", delay: "0" },
                { text: "oh, ok", sent: "from", delay: "0" },
                { text: "i also think i kind of like you :D", sent: "to", delay: "0" },
                { text: "ummm, thanks i guess", sent: "from", delay: "0" },
                { text: "what pets do you have?", sent: "to", delay: "0" },
                { text: "i have two dogs", sent: "from", delay: "0" },
                { text: "that's nice, i have a cat but it needs surgery and we don't have enough money to pay for it ;(", sent: "to", delay: "0" },
                { text: "oh really!? how much will it cost?", sent: "from", delay: "0" },
                { text: "it is going to cost two thousand dollars, will you help me?", sent: "to", delay: "3000" }
              ]
            }
          ]
        }
      ]
    }
  ]


  constructor() { }
}
