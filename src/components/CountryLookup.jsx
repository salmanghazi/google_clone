"use client";

import React, { useState, useEffect } from 'react'

export default function CountryLookup() {
  const [country, setCountry] = useState('United States');

	useEffect(() => {
    const fetchData = () => {
      fetch(
				`http://ip-api.com/json/`
			)
				.then((res) => res.json())
				.then((data) => setCountry(data.country));
    };

    // Call the async function within useEffect
    fetchData();
  }, []);

  return (
    <div>
			{country}
		</div>
  )
}
