import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import authRouter from './routes/auth.route.js'

const app = express();
dotenv.config();
app.use(express.json())
app.use(cookieParser());
const port = 4000;

mongoose.connect(process.env.MONGODB_URI).then(()=>{
  console.log("Connected to Database");
}).catch((err)=>{
  console.log(err)
});

app.use('/api/auth',authRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/api/testresponse',(req,res)=>{
  res.json(
    {
      "status": "ok",
      "totalResults": 38,
      "articles": [
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "The Indian Express",
          "title": "Delhi News Today Live Updates: CBI gets 3-day custody of Arvind Kejriwal in excise policy case - The Indian Express",
          "description": null,
          "url": "https://indianexpress.com/article/cities/delhi/delhi-news-today-live-updates-arvind-kejriwal-bail-9415426/",
          "urlToImage": null,
          "publishedAt": "2024-06-26T13:45:47Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "123telugu.com"
          },
          "author": null,
          "title": "Varun Dhawan's Baby John seals its release date | Latest Telugu cinema news | Movie reviews | OTT Updates, OTT - 123telugu",
          "description": "Telugu cinema news, Movie reviews, OTT News, OTT Release dates, Latest Movie reviews in Telugu, telugu movie reviews, Box office collections",
          "url": "https://www.123telugu.com/mnews/varun-dhawans-baby-john-seals-its-release-date.html",
          "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
          "publishedAt": "2024-06-26T13:30:00Z",
          "content": "Bollywood actor Varun Dhawan will be seen next in Baby John, directed by A Kaleeswaran. Keerthy Suresh and Wamiqa Gabbi are the female leads in this official Hindi remake of the Kollywood blockbuster… [+649 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "The Times of India",
          "title": "'Inhumane acts that do not belong to Italians': PM Giorgia Meloni pays homage to Indian farm worker Satna - The Times of India",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMivQFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9ucmkvaW5odW1hbmUtYWN0cy10aGF0LWRvLW5vdC1iZWxvbmctdG8taXRhbGlhbnMtcG0tZ2lvcmdpYS1tZWxvbmktcGF5cy1ob21hZ2UtdG8taW5kaWFuLWZhcm0td29ya2VyLXNhdG5hbS1zaW5naC1pbi1wYXJsaWFtZW50L2FydGljbGVzaG93LzExMTI5MDM5MC5jbXPSAcEBaHR0cHM6Ly90aW1lc29maW5kaWEuaW5kaWF0aW1lcy5jb20vbnJpL2luaHVtYW5lLWFjdHMtdGhhdC1kby1ub3QtYmVsb25nLXRvLWl0YWxpYW5zLXBtLWdpb3JnaWEtbWVsb25pLXBheXMtaG9tYWdlLXRvLWluZGlhbi1mYXJtLXdvcmtlci1zYXRuYW0tc2luZ2gtaW4tcGFybGlhbWVudC9hbXBfYXJ0aWNsZXNob3cvMTExMjkwMzkwLmNtcw?oc=5",
          "urlToImage": null,
          "publishedAt": "2024-06-26T13:03:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT News Desk",
          "title": "Evening brief: Heavy rain alert for north India; Pak puts onus on India for engagement, and more - Hindustan Times",
          "description": "A shortlist of the biggest headlines, recommended stories, and a special collection of news items that you should check out. | Latest News India",
          "url": "https://www.hindustantimes.com/india-news/evening-brief-heavy-rain-alert-for-north-india-pak-puts-onus-on-india-for-engagement-and-more-101719395466722.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/26/1600x900/PTI06-26-2024-000291B-0_1719406259167_1719406289244.jpg",
          "publishedAt": "2024-06-26T12:53:12Z",
          "content": "IMD forecasts heavy rainfall across northwest India from June 28 to 30, with monsoon advancing into several states. Delayed by a week, monsoon progress shows a 19% rain deficit nationally, notably 57… [+2653 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "Amit Kumar",
          "title": "I don't see any reason why Rohit Sharma can't win the World Cup: Former India World Cup winner - The Times of India",
          "description": "Cricket News: Sreesanth also praised India's all-rounder Hardik Pandya, who has been in outstanding form with both bat and ball in the mega tournament. Despite not",
          "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-mens-t20-world-cup/i-dont-see-any-reason-why-rohit-sharma-cant-win-the-world-cup-former-india-world-cup-winner/articleshow/111290202.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-111290077,width-1070,height-580,imgsize-36280,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2024-06-26T12:46:00Z",
          "content": "T20 World Cup: Afghanistan into semis, Australia out"
        },
        {
          "source": {
            "id": null,
            "name": "Livemint"
          },
          "author": "Akriti Anand",
          "title": "Rahul Gandhi's 7 BIG responsibilities as Leader of Opposition in Lok Sabha: 'Shadow PM' must oppose but... | Mint - Mint",
          "description": "Rahul Gandhi is the Leader of the Opposition in the Lok Sabha for the next five years. He now has some crucial responsibilities to perform to safeguard the rights of minorities and ensure accountability of the government. Here's a deep dive into the role of t…",
          "url": "https://www.livemint.com/politics/news/rahul-gandhis-7-big-responsibilities-as-leader-of-opposition-in-lok-sabha-shadow-pm-must-oppose-but-11719403909139.html",
          "urlToImage": "https://www.livemint.com/lm-img/img/2024/06/26/1600x900/ANI-20240625157-0_1719404031700_1719404049846.jpg",
          "publishedAt": "2024-06-26T12:25:46Z",
          "content": "With great power comes great responsibility. A slew of roles and responsibilities awaits Congress MP Rahul Gandhi who took over as the Leader of the Opposition (LoP) in the 18th Lok Sabha.During the … [+5494 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Dailyexcelsior.com"
          },
          "author": "Daily Excelsior",
          "title": "Nearly 50% adults in India insufficiently physically active in 2022: Lancet Study - Daily Excelsior",
          "description": "NEW DELHI, June 26: Almost 50 per cent of adults in India engaged in insufficient levels of physical activity in 2022, according to a study published in The Lancet Global Health journal. Far more women in India (57 per cent) were found to be insufficiently ph…",
          "url": "https://www.dailyexcelsior.com/nearly-50-adults-in-india-insufficiently-physically-active-in-2022-lancet-study/",
          "urlToImage": "https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2024/06/adult.jpg",
          "publishedAt": "2024-06-26T12:24:16Z",
          "content": "NEW DELHI, June 26: Almost 50 per cent of adults in India engaged in insufficient levels of physical activity in 2022, according to a study published in The Lancet Global Health journal.Far more wome… [+2665 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "The Indian Express",
          "title": "AP Inter Supplementary Results 2024 Live Updates: 1st year result out at bie.ap.gov.in, check now - The Indian Express",
          "description": null,
          "url": "https://indianexpress.com/article/education/ap-inter-supply-results-2024-live-updates-bieap-1st-year-result-bie-ap-gov-in-marks-memo-manabadi-9416162/",
          "urlToImage": null,
          "publishedAt": "2024-06-26T12:24:00Z",
          "content": null
        },
        {
          "source": {
            "id": "the-hindu",
            "name": "The Hindu"
          },
          "author": "The Hindu",
          "title": "Today’s Cache | Samsung announces Unpacked event for Galaxy; Reddit works to thwart web data scraping; OpenAI delays long-awaited Voice Mode - The Hindu",
          "description": null,
          "url": "https://www.thehindu.com/sci-tech/technology/todays-cache-samsung-announces-unpacked-event-for-galaxy-ai-reddit-works-to-thwart-web-data-scraping-openai-delays-long-awaited-voice-mode/article68335230.ece",
          "urlToImage": null,
          "publishedAt": "2024-06-26T12:18:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Moneycontrol"
          },
          "author": "Sandip Chakraborty",
          "title": "Google announces Pixel 9 series, Pixel Watch 3 event date: Here’s what to expect - Moneycontrol",
          "description": "The Made by Google 2024 event is scheduled for August 13, where Google is set to launch the Pixel 9 series and the Pixel Watch 3. We can also expect the Pixel Fold 2 to be unveiled.",
          "url": "https://www.moneycontrol.com/technology/google-announces-pixel-9-series-pixel-watch-3-event-date-heres-what-to-expect-article-12756809.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/06/20240626120156_WhatsApp-Image-2024-06-26-at-14.28.56.jpeg",
          "publishedAt": "2024-06-26T12:02:56Z",
          "content": "After months of speculations and teasers, Google has officially announced the event date of the upcoming Pixel 9 series of devices. The Made by Google will be held on August 13 and Google has placed … [+1238 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "ANI",
          "title": "Maharashtra: Two Zika virus cases reported in Pune - The Times of India",
          "description": "India News: Dr. Rajesh Dighe from PMC explains Zika virus transmission in Pune, urging citizens to follow guidelines for prevention. Precautionary measures, inclu",
          "url": "https://timesofindia.indiatimes.com/india/maharashtra-two-zika-virus-cases-reported-in-pune/articleshow/111288961.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-111289054,width-1070,height-580,imgsize-912574,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2024-06-26T11:58:00Z",
          "content": "10 beautiful fishes to keep in home aquariums for beginners"
        },
        {
          "source": {
            "id": null,
            "name": "CNBCTV18"
          },
          "author": "Pihu Yadav",
          "title": "realme C61 to launch on June 28 at under ₹10,000: Check price, specifications and more - CNBCTV18",
          "description": "The realme C61 will be available in Safari Green and Marble Black colour variants.",
          "url": "https://www.cnbctv18.com/technology/realme-c61-launch-date-check-price-specifications-offers-and-more-19434083.htm",
          "urlToImage": "https://images.cnbctv18.com/uploads/2024/06/realme-c61-2024-06-36d45bbf1680a2b32a0b80fe253b4892.jpg?im=FitAndFill,width=500,height=300",
          "publishedAt": "2024-06-26T11:50:48Z",
          "content": "Chinese smartphone maker realme, on Wednesday, announced the launch of its latest offering, the realme C61, on June 28, targeting the entry-level market.Under the hood, the realme C61 boasts the UNIS… [+566 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Sports Desk",
          "title": "India vs England, weather report: Rain lashes Guyana for 12 hours straight, forecast grim for T20 World Cup semifinal - Hindustan Times",
          "description": "India and England will play in semi-final 2 of the ICC T20 World Cup on Thursday at the Providence Stadium in Guyana. | Crickit",
          "url": "https://www.hindustantimes.com/cricket/india-vs-england-weather-report-rain-lashes-guyana-for-12-hours-straight-forecast-grim-for-t20-world-cup-semifinal-101719399322159.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/26/1600x900/MixCollage-26-Jun-2024-04-33-PM-9653_1719402520099_1719402531790.jpg",
          "publishedAt": "2024-06-26T11:50:26Z",
          "content": "Will the rain gods have a final say in the upcoming ICC T20 World Cup 2024 clash between India and England on Friday? Persistent rains in Guyana can disrupt the match proceedings as India aim to aven… [+2138 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "Nikhil Agarwal",
          "title": "Tech View: Nifty forms ‘3 Advancing Soldiers’ pattern. Here’s how to trade on Thursday expiry - The Economic Times",
          "description": "Nifty ended Wednesday session 147.5 points higher and formed a new peak at 23,889 level to form a long bull candle on the daily charts.",
          "url": "https://economictimes.indiatimes.com/markets/stocks/news/tech-view-nifty-forms-3-advancing-soldiers-pattern-heres-how-to-trade-on-thursday-expiry/articleshow/111288697.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-111288688,width-1200,height-630,imgsize-25842,overlay-etmarkets/photo.jpg",
          "publishedAt": "2024-06-26T11:48:12Z",
          "content": "Nifty ended Wednesday session 147.5 points higher and formed a new peak at 23,889 level to form a long bull candle on the daily charts. Three such back to back candles indicate the formation of a 3 A… [+2000 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "India Today"
          },
          "author": "India Today Tech",
          "title": "OnePlus Nord CE4 Lite 5G launched, 5 reasons why it is the best smartphone under Rs 20,000 - India Today",
          "description": "The OnePlus Nord CE4 Lite 5G has arrived in India and it brings some key upgrades in display battery camera and more That makes it one of the best phones to buy under Rs 20000 due to its meaningful updates",
          "url": "https://www.indiatoday.in/technology/features/story/oneplus-nord-ce4-lite-5g-launched-5-reasons-why-it-is-the-best-smartphone-under-rs-20000-2558475-2024-06-26",
          "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/oneplus-nord-ce4-lite-263811875-16x9_0.jpg?VersionId=HVh8zfTqrcUtPQXJ2cUPDPwqmGu9Ij5L",
          "publishedAt": "2024-06-26T11:45:40Z",
          "content": "The OnePlus Nord CE4 Lite 5G has officially launched in India. If you have followed OnePlus you will know that CE Lite series of devices are meant to bring the most meaningful technologies of the com… [+5008 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Moneycontrol"
          },
          "author": "Moneycontrol News",
          "title": "Quant Mutual Fund net equity outflow at Rs 1,398 crore or 1.5% of AUM post SEBI front-running probe - Moneycontrol",
          "description": "Quant Mutual Fund has seen investors net redeeming net Rs 1,398 crore of their equity investments after the news of a SEBI investigating front running activity at the fund house.",
          "url": "https://www.moneycontrol.com/news/business/markets/quant-mutual-fund-equity-outflow-redemption-sebi-front-running-investigation-aum-12756279.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/06/20240618125812_500-rupee.jpg",
          "publishedAt": "2024-06-26T11:42:11Z",
          "content": "Sandeep Tandon's Quant Mutual Fund has seen net equity outflows worth Rs 1,398 crore since SEBI's front running investigation on the fastest growing fund house in India, it said in a call with invest… [+2673 chars]"
        },
        {
          "source": {
            "id": "the-hindu",
            "name": "The Hindu"
          },
          "author": "The Hindu",
          "title": "WikiLeaks founder Julian Assange returns to Australia a free man - The Hindu",
          "description": null,
          "url": "https://www.thehindu.com/news/international/wikileaks-founder-julian-assange-returns-to-australia-a-free-man/article68335815.ece",
          "urlToImage": null,
          "publishedAt": "2024-06-26T11:34:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Moneycontrol",
          "title": "Star cluster in “Cosmic Gem” arc captured by NASA's James Webb Telescope - Moneycontrol",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMigAFodHRwczovL3d3dy5tb25leWNvbnRyb2wuY29tL3NjaWVuY2Uvc3Rhci1jbHVzdGVyLWluLWNvc21pYy1nZW0tYXJjLWNhcHR1cmVkLWJ5LW5hc2FzLWphbWVzLXdlYmItdGVsZXNjb3BlLWFydGljbGUtMTI3NTY3NDMuaHRtbNIBhAFodHRwczovL3d3dy5tb25leWNvbnRyb2wuY29tL3NjaWVuY2Uvc3Rhci1jbHVzdGVyLWluLWNvc21pYy1nZW0tYXJjLWNhcHR1cmVkLWJ5LW5hc2FzLWphbWVzLXdlYmItdGVsZXNjb3BlLWFydGljbGUtMTI3NTY3NDMuaHRtbC9hbXA?oc=5",
          "urlToImage": null,
          "publishedAt": "2024-06-26T11:31:54Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Zee Business"
          },
          "author": "ZeeBiz WebTeam",
          "title": "Radiowaves attract Rs 11,340 crore bids after six rounds in mega spectrum auction - Zee Business",
          "description": "10th Telecom Spectrum Auction: The countrys 10th spectrum auction for mobile radiowaves concluded on Wednesday with bids totaling Rs 11,340 crore after six rounds of bidding. Initiated by the Department of Telecommunications (DoT), the auction aimed to streng…",
          "url": "https://www.zeebiz.com/economy-infra/photo-gallery-telecom-spectrum-auction-india-news-2024-date-price-frequency-size-cost-list-of-bidders-and-potential-buyers-10th-spectrum-auction-meaning-297919",
          "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2024/06/26/301707-telecompexels1.jpg",
          "publishedAt": "2024-06-26T11:12:00Z",
          "content": "10th Telecom Spectrum Auction: A mega auction for mobile radiowaves ended on Wednesday with bids of Rs 11,340 crore, after six rounds of bidding in a process initiated by the Department of Telecommun… [+878 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Hindustan Times",
          "title": "Prince Narula-Yuvika Chaudhary announce their 1st pregnancy: A look at their relationship timeline - Hindustan Times",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiowFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vaHRjaXR5L2NpbmVtYS9wcmluY2UtbmFydWxhLXl1dmlrYS1jaGF1ZGhhcnktYW5ub3VuY2UtdGhlaXItMXN0LXByZWduYW5jeS1hLWxvb2stYXQtdGhlaXItcmVsYXRpb25zaGlwLXRpbWVsaW5lLTEwMTcxOTM5NDk2MzMyMy5odG1s0gGnAWh0dHBzOi8vd3d3LmhpbmR1c3RhbnRpbWVzLmNvbS9odGNpdHkvY2luZW1hL3ByaW5jZS1uYXJ1bGEteXV2aWthLWNoYXVkaGFyeS1hbm5vdW5jZS10aGVpci0xc3QtcHJlZ25hbmN5LWEtbG9vay1hdC10aGVpci1yZWxhdGlvbnNoaXAtdGltZWxpbmUtMTAxNzE5Mzk0OTYzMzIzLWFtcC5odG1s?oc=5",
          "urlToImage": null,
          "publishedAt": "2024-06-26T11:08:08Z",
          "content": null
        }
      ]
    }
  )
})