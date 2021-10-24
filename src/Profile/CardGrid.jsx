import React from 'react';
import './DashStyle.css';
import Card from '../Components/Card/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Contentful from './Contentful';

const CardGrid = () => {

    const [cardDetails, loading, error] = Contentful();

    const customId = "custom-id-yes";

    const notify = () => {
        toast.error(error, {
            toastId: customId
        });
    }

    notify();

    console.log('ERROR: '+error);
    
    return (
        <>
            <div>
                {
                    error ?
                        <div>
                            <ToastContainer limit={1} />
                        </div>
                        : null
                }
            </div>

            <div className="grid-main">


                {
                    loading ? <h3>Loading...</h3> : null
                }

                {
                    (!loading && cardDetails) && cardDetails.map((card, index) => {
                        return <Card key={index} cardClass={card.cardClass} cardColor={card.cardColor} textColor={card.textColor} cardText={card.cardText} />
                    })
                }

            </div>
        </>
    )

}

export default CardGrid;