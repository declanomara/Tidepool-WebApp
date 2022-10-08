export function loadAggregateData() {
    return fetch("https://api.tidepool.finance/v1/stats/latest/")
          .then((response) => response.json());
}