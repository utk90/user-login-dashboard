import { useEffect, useState } from 'react';

const cardDetails = [
    { key: 'c1', cardClass: 'grid1', cardColor: 'rgb(67, 104, 86)', textColor: 'white' },
    { key: 'c2', cardClass: 'grid2', cardColor: 'rgb(47, 55, 120)', textColor: 'white' },
    { key: 'c3', cardClass: 'grid3', cardColor: 'rgb(200, 100, 100)', textColor: 'white' },
    { key: 'c4', cardClass: 'grid4', cardColor: 'rgb(153, 146, 72)', textColor: 'white' },
    { key: 'c5', cardClass: 'grid5', cardColor: 'rgb(142, 148, 146)', textColor: 'white' },
    { key: 'c6', cardClass: 'grid6', cardColor: 'rgb(112, 57, 91)', textColor: 'white' },
    { key: 'c7', cardClass: 'grid7', cardColor: 'rgb(90, 150, 150)', textColor: 'white' }
];

const Contentful = () => {
    const [cardData, setCardData] = useState(null);

    const [avatar, setAvatar] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const query = `
        {
            userDashboardCollection{
                items{
                    cardText
                    avatarImage {
                        title
                        description
                        contentType
                        fileName
                        size
                        url
                        width
                        height
                    }
                }
            }
        }
    `;

    const getData = () => {
        fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_KEY}`,
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_KEY}`
                },
                body: JSON.stringify({
                    query
                })
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(element => {
                const temp = element.data.userDashboardCollection.items;
                console.log(temp);
                setCardData(temp['0'].cardText);
                setAvatar(temp['0'].avatarImage.url);
                setLoading(false);
                setError(null);
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
                setError('You have no cards and avatar to display : HTTP ' + error.status + ' error');
            })
    }

    useEffect(() => {
        setTimeout(() => getData(), 2000);
    }, []);

    if (cardData) {
        console.log('inside if: ' + cardData);
        cardData.map((item, index) => {
            cardDetails[index].cardText = item;
        });

        cardDetails.map((item, index) => {
            console.log('CARD DETAILS ' + index + ': ' + item)
        });
    }


    console.log('CardData ARRAY: ' + cardData);

    // console.log('Data array: ' + data);

    // return [cardData, loading, error];
    return [cardDetails, loading, error, avatar];
}

export default Contentful;