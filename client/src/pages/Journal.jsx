import React, { useState, useEffect } from 'react';
import { loadAggregateData } from '../util/content';


function Journal() {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        let entries = loadAggregateData();
        setEntries(entries);
        console.log(entries);
      }, []);

    return (
        <div class="m-4">
            <h3 class="h3">Your aggregate data:</h3>
            {/* <JournalEntries entries={entries} /> */}
        </div>
    );
}

export default Journal;