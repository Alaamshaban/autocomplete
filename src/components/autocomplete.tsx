import React from "react";

const Autocomplete = ({ suggestions, getSuggestions, value }) => {
    const highlightMatches = (suggestion) => {
        const regex = new RegExp(`(${value})`, "i");
        if (value !== '')
            return suggestion.replace(regex, "<mark>$1</mark>");
        return suggestion
    };
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={e => getSuggestions(e.target.value)}
            />
            {suggestions.length ? (<ul>
                {suggestions.map(suggestion => (
                    <li key={suggestion.id} onClick={() => getSuggestions(suggestion.value)}>
                        <div dangerouslySetInnerHTML={{
                            __html: `
                            ${highlightMatches(suggestion.value)}
` }} />

                    </li>
                ))}
            </ul>) : <p>No results found</p>}

        </div>
    );
};

export default Autocomplete;