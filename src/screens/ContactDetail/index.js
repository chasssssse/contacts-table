import React from 'react';
import { Link } from 'react-router-dom';
import { getContactDetails } from '../../api';
import './style.css';
import { DETAILS_SCREEN_TITLE, BACK_TO_HOME_LINK } from '../../const';

const DetailScreen = (props) => {
  const [details, setDetails] = React.useState([]); 
  const userId = props.match.params.userId;

  React.useEffect(() => {
    getContactDetails(userId)
      .then(handleGetContactDetailsSuccess)
  }, [userId]);

  const handleGetContactDetailsSuccess = (res) => setDetails(res.details);

  return <div>
    <h3>{DETAILS_SCREEN_TITLE}</h3>
    {details.map((item, index) => (
      <div className="contact-details" key={`contact-${index}`}>
        <p className="contact-details__text">{item.ContactDetailType}:</p>
        <p className="contact-details__text">{item.ContactDetailContent}</p>
      </div>)
      )
    }
    <Link to="/">{BACK_TO_HOME_LINK}</Link>
  </div>
}

export default DetailScreen;