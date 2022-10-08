async function fetchData() {
    let data = await fetch("https://api.tidepool.finance/v1/stats/latest/")
          .then((response) => response.json());
    
    return data
}

export function loadAggregateData() {
    const data = await fetchData();
    return data;
}