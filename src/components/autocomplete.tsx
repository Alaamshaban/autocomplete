import { useEffect, useState } from 'react';
import "./autocomplete.css"
const Autocomplete = ({ url }) => {
    const [items, setItems] = useState([]);
    const [initialItems, setInitialItems] = useState([]);
    const [value, setValue] = useState("");

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setItems(data);
            setInitialItems(data)
        };

        fetchItems();
    }, []);

    const highlightMatches = (suggestion) => {
        const regex = new RegExp(`(${value})`, "i");
        if (value !== '')
            return suggestion.replace(regex, "<mark>$1</mark>");
        return suggestion
    };
    return (
        <div>
            <input
                className='autocomplete-input'
                type="text"
                value={value}
                placeholder="Search"
                onChange={(event) => {
                    console.log(event.target.value)
                    setValue(event.target.value);
                    value !== '' ? setItems(initialItems.filter((item) => {
                        return item.name.toLowerCase().includes(value.toLowerCase());
                    })) :
                        setItems(initialItems);

                }}
            />
            {items.length ? <ul className='list'>
                {items.map((item) => (
                    <li className="list-item" key={item.id} onClick={() => setValue(item.name)}>  <div dangerouslySetInnerHTML={{
                        __html: `
                        ${highlightMatches(item.name)}
` }} />
                    </li>
                ))}
            </ul> : <ul className='list'><li className='no-records'>No results found</li></ul>}
        </div>
    );
};

export default Autocomplete;
