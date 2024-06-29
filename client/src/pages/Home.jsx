import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import './Loadingspinner.css'; // Make sure to import your CSS file for the loading spinner

const fetchBiasAnalysis = async (headline) => {
  try {
    const response = await fetch("http://localhost:8001/predict", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ text: headline })
    });

    const result = await response.json();
    console.log("biasPrediction", result);

    const biasScores = {
      "left": result.predictions.left,
      "center": result.predictions.center,
      "right": result.predictions.right
    };

    return biasScores;
  } catch (error) {
    console.error("Error fetching bias analysis:", error);
    return { "left": 0, "center": 0, "right": 0 };
  }
};

const fetchSentimentAnalysis = async (headline) => {
  try {
    const response = await fetch("http://localhost:8000/predict", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ text: headline })
    });

    const result = await response.json();
    console.log("sentimentAnalysis", result);

    const sentimentMap = {
      "negative": "right",
      "neutral": "center",
      "positive": "left"
    };

    const sentimentScores = result.predictions.reduce((acc, item) => {
      const [, label, score] = item.split(" ");
      const mappedLabel = sentimentMap[label];
      acc[mappedLabel] = parseFloat(score) * 100;
      return acc;
    }, { "left": 0, "center": 0, "right": 0 });

    return sentimentScores;
  } catch (error) {
    console.error("Error fetching sentiment analysis:", error);
    return { "left": 0, "center": 0, "right": 0 };
  }
};

function Home() {
  const [newsData, setNewsData] = useState([]);
  const [value, setValue] = useState('All');
  const [finalData, setFinalData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNewsData = async () => {
    try {
      const category = value === 'Politics' ? 'politics' : 'entertainment';
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=eefd250bb8f146a185acb1cc2c58c81a`);
      const data = await res.json();
      if (data.status !== "ok") throw new Error(data.message);
      return data.articles;
    } catch (error) {
      console.error("Error fetching news data:", error);
      return [];
    }
  };

  useEffect(() => {
    const getNewsDetails = async () => {
      setLoading(true);
      try {
        const data = await getNewsData();
        setNewsData(data);
        const newsValues = data.map((item) => ({
          title: item.title,
          photoURL: item.urlToImage,
        }));

        const analyzedNews = await Promise.all(
          newsValues.map(async (news) => {
            const sentiment = await fetchSentimentAnalysis(news.title);
            const bias = await fetchBiasAnalysis(news.title);
            return {
              newsTitle: news.title,
              newsPhotoURL: news.photoURL,
              sentimentAnalysis: sentiment,
              biasAnalysis: bias,
            };
          })
        );

        setFinalData(analyzedNews);
      } catch (error) {
        console.error("Error fetching and analyzing news:", error);
      } finally {
        setLoading(false);
      }
    };

    getNewsDetails();
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
<div className="flex gap-2 justify-center my-4">
  <select 
    value={value} 
    className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    onChange={handleChange}
  >
    <option value="All">All</option>
    <option value="Politics">Politics</option>
  </select>
</div>

      {loading ? (
        <div className="load"></div> // Ensure your loading spinner has the correct class
      ) : (
        <div className='max-w-5xl mx-auto flex flex-wrap justify-center'>
          {finalData && finalData.map((item, key) => (
            <Card item={item} value={value} key={key} />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
