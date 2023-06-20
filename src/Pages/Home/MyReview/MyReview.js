import React from 'react';
import useTitle from '../../../hooks/useTitle';

const MyReview = () => {
    useTitle('MyReview');
    return (
        <div>
            <label htmlFor="my-modal" class="btn modal-button">open modal</label>

<input type="checkbox" id="modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
     <h1> Yooo </h1>
     <div className="modal-action">
      <label htmlFor="my-modal" className="btn">Yay!</label>
     </div>
  </div>
</div>
        </div>
    );
};

export default MyReview;