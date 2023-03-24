import { useEffect, useState } from 'react';

const RandomQuotes = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const urlAPI = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=happiness',
          {
            headers: {
              'X-Api-Key': 'hI+AINI/nSDvfPxip0p99Q==B46rR9rmex8Mnb6y',
              'Content-Type': 'application/json',
            },
          },
        );
        const response = await urlAPI.json();
        setQuote(response);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setQuote, setIsLoading]);

  if (isLoading) return <p className="alert">Quote Loading... please wait.</p>;
  if (hasError) return <p className="alert">Sorry something went wrong</p>;

  return (
    <div className="quote-box">
      {quote.map((data) => (
        <>
          <p key={quote.indexOf(data)}>
            &ldquo;
            {data.quote}
            &bdquo;
          </p>
          <h4>{data.author}</h4>
        </>
      ))}
    </div>
  );
};

export default RandomQuotes;
