export function getCurrencyCounts() {
    return fetch("https://api.tidepool.finance/v1/stats/database/")
          .then((response) => response.json());
}

export function getCurrencyRates() {
    return fetch("https://api.tidepool.finance/v1/stats/datastream/")
          .then((response) => response.json());
}

export function getCollectionStatus(callback) {
    return fetch("https://api.tidepool.finance/v1/stats/server/")
          .then((response) => response.json())
          .then((json) => {
            callback(json);
          });
}

export function getStorageStatus() {
    return fetch("https://api.tidepool.finance/v1/stats/datastream/")
          .then((response) => response.json());
}

export function getWebsiteStatus() {
    return fetch("https://api.tidepool.finance/v1/stats/datastream/")
          .then((response) => response.json());
}